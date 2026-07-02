"use client";

import { useState, useId } from "react";
import { Send, CheckCircle, AlertCircle, Loader2 } from "lucide-react";

type Status = "idle" | "loading" | "success" | "error";

interface FormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

const INITIAL: FormData = {
  name: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
};

export default function ContactForm() {
  const id = useId();
  const [form, setForm] = useState<FormData>(INITIAL);
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [status, setStatus] = useState<Status>("idle");
  const [serverError, setServerError] = useState("");

  // ── Validation ──────────────────────────────────────────
  function validate(): boolean {
    const e: Partial<FormData> = {};

    if (!form.name.trim()) e.name = "Please enter your full name.";
    if (!form.email.trim()) {
      e.email = "Please enter your email address.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      e.email = "That doesn't look like a valid email.";
    }
    if (form.phone && !/^[\d\s\+\-\(\)]{7,15}$/.test(form.phone)) {
      e.phone = "Please enter a valid phone number.";
    }
    if (!form.subject.trim()) e.subject = "Please add a subject.";
    if (!form.message.trim()) e.message = "Please write your message.";
    else if (form.message.trim().length < 20)
      e.message = "Message is too short — add a bit more detail.";

    setErrors(e);
    return Object.keys(e).length === 0;
  }

  // ── Change handler ───────────────────────────────────────
  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  }

  // ── Submit ───────────────────────────────────────────────
  async function handleSubmit(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    if (!validate()) return;

    setStatus("loading");
    setServerError("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data?.error || "Something went wrong.");
      }

      setStatus("success");
      setForm(INITIAL);
    } catch (err: unknown) {
      setStatus("error");
      setServerError(
        err instanceof Error ? err.message : "An unexpected error occurred."
      );
    }
  }

  // ── Success state ────────────────────────────────────────
  if (status === "success") {
    return (
      <div className="cf-success">
        <CheckCircle size={44} strokeWidth={1.5} className="cf-success__icon" />
        <h2 className="cf-success__heading">Message sent</h2>
        <p className="cf-success__body">
          Thank you for reaching out. A member of our patient services team will
          get back to you within one business day.
        </p>
        <button
          className="cf-btn"
          onClick={() => setStatus("idle")}
        >
          Send another message
        </button>

        <style>{successStyles}</style>
      </div>
    );
  }

  // ── Form ─────────────────────────────────────────────────
  return (
    <div className="cf">
      <h2 className="cf__heading">Send us a message</h2>
      <p className="cf__sub">
        Fill in the form below and we&rsquo;ll get back to you shortly.
      </p>

      <div className="cf__grid">
        {/* Name */}
        <div className="cf__field">
          <label className="cf__label" htmlFor={`${id}-name`}>
            Full name <span aria-hidden="true">*</span>
          </label>
          <input
            id={`${id}-name`}
            name="name"
            type="text"
            autoComplete="name"
            placeholder="e.g. Amaka Johnson"
            value={form.name}
            onChange={handleChange}
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? `${id}-name-err` : undefined}
            className={`cf__input${errors.name ? " cf__input--error" : ""}`}
          />
          {errors.name && (
            <span id={`${id}-name-err`} className="cf__error" role="alert">
              {errors.name}
            </span>
          )}
        </div>

        {/* Email */}
        <div className="cf__field">
          <label className="cf__label" htmlFor={`${id}-email`}>
            Email address <span aria-hidden="true">*</span>
          </label>
          <input
            id={`${id}-email`}
            name="email"
            type="email"
            autoComplete="email"
            placeholder="you@example.com"
            value={form.email}
            onChange={handleChange}
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? `${id}-email-err` : undefined}
            className={`cf__input${errors.email ? " cf__input--error" : ""}`}
          />
          {errors.email && (
            <span id={`${id}-email-err`} className="cf__error" role="alert">
              {errors.email}
            </span>
          )}
        </div>

        {/* Phone */}
        <div className="cf__field">
          <label className="cf__label" htmlFor={`${id}-phone`}>
            Phone number{" "}
            <span className="cf__label-optional">(optional)</span>
          </label>
          <input
            id={`${id}-phone`}
            name="phone"
            type="tel"
            autoComplete="tel"
            placeholder="+234 800 000 0000"
            value={form.phone}
            onChange={handleChange}
            aria-invalid={!!errors.phone}
            aria-describedby={errors.phone ? `${id}-phone-err` : undefined}
            className={`cf__input${errors.phone ? " cf__input--error" : ""}`}
          />
          {errors.phone && (
            <span id={`${id}-phone-err`} className="cf__error" role="alert">
              {errors.phone}
            </span>
          )}
        </div>

        {/* Subject */}
        <div className="cf__field">
          <label className="cf__label" htmlFor={`${id}-subject`}>
            Subject <span aria-hidden="true">*</span>
          </label>
          <input
            id={`${id}-subject`}
            name="subject"
            type="text"
            placeholder="e.g. Question about cardiology unit"
            value={form.subject}
            onChange={handleChange}
            aria-invalid={!!errors.subject}
            aria-describedby={errors.subject ? `${id}-subject-err` : undefined}
            className={`cf__input${errors.subject ? " cf__input--error" : ""}`}
          />
          {errors.subject && (
            <span id={`${id}-subject-err`} className="cf__error" role="alert">
              {errors.subject}
            </span>
          )}
        </div>
      </div>

      {/* Message */}
      <div className="cf__field cf__field--full">
        <label className="cf__label" htmlFor={`${id}-message`}>
          Message <span aria-hidden="true">*</span>
        </label>
        <textarea
          id={`${id}-message`}
          name="message"
          rows={5}
          placeholder="Tell us how we can help you…"
          value={form.message}
          onChange={handleChange}
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? `${id}-message-err` : undefined}
          className={`cf__input cf__textarea${
            errors.message ? " cf__input--error" : ""
          }`}
        />
        <span className="cf__char-count">
          {form.message.length} / 1000
        </span>
        {errors.message && (
          <span id={`${id}-message-err`} className="cf__error" role="alert">
            {errors.message}
          </span>
        )}
      </div>

      {/* Server error */}
      {status === "error" && (
        <div className="cf__server-error" role="alert">
          <AlertCircle size={16} />
          {serverError}
        </div>
      )}

      <button
        className="cf-btn cf-btn--full"
        onClick={handleSubmit}
        disabled={status === "loading"}
        aria-busy={status === "loading"}
      >
        {status === "loading" ? (
          <>
            <Loader2 size={17} className="cf-btn__spinner" />
            Sending…
          </>
        ) : (
          <>
            <Send size={16} />
            Send message
          </>
        )}
      </button>

      <style>{formStyles}</style>
    </div>
  );
}

/* ── Styles ──────────────────────────────────────────────── */
const formStyles = `
  .cf { width: 100%; }

  .cf__heading {
    font-size: 1.35rem;
    font-weight: 700;
    color: #0f172a;
    margin: 0 0 6px;
    letter-spacing: -0.02em;
  }
  .cf__sub {
    font-size: 0.875rem;
    color: #64748b;
    margin: 0 0 28px;
  }

  .cf__grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 16px 20px;
    margin-bottom: 16px;
  }
  @media (max-width: 560px) {
    .cf__grid { grid-template-columns: 1fr; }
  }

  .cf__field { display: flex; flex-direction: column; gap: 6px; }
  .cf__field--full { margin-bottom: 16px; }

  .cf__label {
    font-size: 0.8rem;
    font-weight: 600;
    color: #334155;
    letter-spacing: 0.01em;
  }
  .cf__label span[aria-hidden] { color: #1d5fc4; }
  .cf__label-optional { font-weight: 400; color: #94a3b8; }

  .cf__input {
    width: 100%;
    box-sizing: border-box;
    padding: 10px 14px;
    border: 1.5px solid #cbd5e1;
    border-radius: 9px;
    font-size: 0.9rem;
    color: #0f172a;
    background: #f8fafc;
    outline: none;
    transition: border-color 0.15s, box-shadow 0.15s, background 0.15s;
    font-family: inherit;
  }
  .cf__input::placeholder { color: #94a3b8; }
  .cf__input:focus {
    border-color: #1d5fc4;
    background: #fff;
    box-shadow: 0 0 0 3px rgba(29, 95, 196, 0.12);
  }
  .cf__input--error {
    border-color: #e53e3e;
    background: #fff5f5;
  }
  .cf__input--error:focus {
    box-shadow: 0 0 0 3px rgba(229, 62, 62, 0.12);
  }

  .cf__textarea { resize: vertical; min-height: 120px; }

  .cf__char-count {
    font-size: 0.75rem;
    color: #94a3b8;
    text-align: right;
    margin-top: -2px;
  }

  .cf__error {
    font-size: 0.78rem;
    color: #c53030;
    display: flex;
    align-items: center;
    gap: 4px;
  }

  .cf__server-error {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 12px 16px;
    background: #fff5f5;
    border: 1px solid #fed7d7;
    border-radius: 9px;
    font-size: 0.875rem;
    color: #c53030;
    margin-bottom: 16px;
  }

  .cf-btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    padding: 12px 28px;
    background: #1d5fc4;
    color: #fff;
    border: none;
    border-radius: 9px;
    font-size: 0.9rem;
    font-weight: 600;
    cursor: pointer;
    transition: background 0.15s, transform 0.1s;
    font-family: inherit;
    letter-spacing: 0.01em;
  }
  .cf-btn--full { width: 100%; }
  .cf-btn:hover:not(:disabled) { background: #1a4fa8; }
  .cf-btn:active:not(:disabled) { transform: translateY(1px); }
  .cf-btn:disabled { opacity: 0.65; cursor: not-allowed; }
  .cf-btn:focus-visible {
    outline: 3px solid rgba(29, 95, 196, 0.4);
    outline-offset: 2px;
  }

  .cf-btn__spinner {
    animation: spin 0.7s linear infinite;
  }
  @keyframes spin {
    to { transform: rotate(360deg); }
  }
`;

const successStyles = `
  .cf-success {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 24px 16px;
    gap: 12px;
  }
  .cf-success__icon { color: #1d5fc4; }
  .cf-success__heading {
    font-size: 1.3rem;
    font-weight: 700;
    color: #0f172a;
    margin: 0;
    letter-spacing: -0.02em;
  }
  .cf-success__body {
    font-size: 0.9rem;
    color: #64748b;
    line-height: 1.65;
    max-width: 360px;
    margin: 0 0 8px;
  }
`;
