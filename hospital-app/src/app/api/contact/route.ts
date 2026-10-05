import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { ContactEmailTemplate } from "@/emails/ContactEmailTemplate";

const resend = new Resend(process.env.RESEND_API_KEY);

// ── Rate-limit state (simple in-memory; swap for Redis in production) ──────────
const rateMap = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT = 3;          // max requests
const RATE_WINDOW = 60 * 1000; // per 60 seconds

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = rateMap.get(ip);

  if (!entry || now > entry.resetAt) {
    rateMap.set(ip, { count: 1, resetAt: now + RATE_WINDOW });
    return false;
  }

  if (entry.count >= RATE_LIMIT) return true;

  entry.count += 1;
  return false;
}

// ── Validation helpers ─────────────────────────────────────────────────────────
function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function isValidPhone(phone: string) {
  return /^[\d\s\+\-\(\)]{7,15}$/.test(phone);
}

// ── POST /api/contact ──────────────────────────────────────────────────────────
export async function POST(req: NextRequest) {
  // 1. Rate limiting
  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0].trim() ?? "unknown";

  if (isRateLimited(ip)) {
    return NextResponse.json(
      { error: "Too many requests. Please wait a minute before trying again." },
      { status: 429 }
    );
  }

  // 2. Parse body
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const { name, email, phone, subject, message } = body as {
    name?: string;
    email?: string;
    phone?: string;
    subject?: string;
    message?: string;
  };

  // 3. Server-side validation
  if (!name?.trim() || !email?.trim() || !subject?.trim() || !message?.trim()) {
    return NextResponse.json(
      { error: "Name, email, subject, and message are required." },
      { status: 422 }
    );
  }

  if (!isValidEmail(email)) {
    return NextResponse.json(
      { error: "Please provide a valid email address." },
      { status: 422 }
    );
  }

  if (phone && !isValidPhone(phone)) {
    return NextResponse.json(
      { error: "Please provide a valid phone number." },
      { status: 422 }
    );
  }

  if (message.trim().length < 20) {
    return NextResponse.json(
      { error: "Message is too short." },
      { status: 422 }
    );
  }

  const to = [process.env.CONTACT_RECIPIENT_EMAIL!]
  // 4. Send email via Resend
  try {
    const { error } = await resend.emails.send({
      from: "RhodeHospital <onboarding@resend.dev>",
      to: to,
      replyTo: email.trim(),
      subject: `[Contact] ${subject.trim()}`,
      react: ContactEmailTemplate({
        name: name.trim(),
        email: email.trim(),
        phone: phone?.trim() || "Not provided",
        subject: subject.trim(),
        message: message.trim(),
      }),
    });

    if (error) {
      console.error("[contact] Resend error:", error);
      return NextResponse.json(
        { error: "Failed to send message. Please try again later." },
        { status: 500 }
      );
    }

    // 5. Auto-reply to sender
    await resend.emails.send({
      from: "Rhode Hospital <noreply@rhodehospital.ng>",
      to: [email.trim()],
      subject: "We received your message — Rhode Hospital",
      html: `
        <p>Hi ${name.trim()},</p>
        <p>Thank you for getting in touch. We've received your message and a member of our patient services team will respond promptly.</p>
        <p>If this is a medical emergency, please call our 24/7 emergency line: <strong>+1 (555) 123-4567</strong>.</p>
        <p>Warm regards,<br/>Rhode Hospital Patient Services</p>
      `,
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (err) {
    console.error("[contact] Unexpected error:", err);
    return NextResponse.json(
      { error: "An unexpected error occurred. Please try again." },
      { status: 500 }
    );
  }
}
