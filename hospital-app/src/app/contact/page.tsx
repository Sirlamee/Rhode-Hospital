import ContactForm from "@/components/ContactForm";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export const metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Rhode Hospital. We\u2019re here to answer your questions, help schedule your visit, and provide 24/7 emergency support.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact Us | Rhode Hospital",
    description:
      "Reach out to Rhode Hospital. Our patient services team is available to help with appointments, directions, and medical queries.",
    url: "https://www.rhodehospital.com/contact",
  },
  twitter: {
    title: "Contact Us | Rhode Hospital",
    description:
      "Reach out to Rhode Hospital. Our patient services team is available to help with appointments, directions, and medical queries.",
  },
};

const contactDetails = [
  {
    icon: MapPin,
    label: "Address",
    value: "21, Ajobiaro Street, off Popoola Street, Ile-Ise bus stop, Igando Road, Ikotun",
    sub: "Open 24/7 for walk-ins and emergencies",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+234 800 MED CARE",
    sub: "Available Everyday, 24 Hours",
  },
  {
    icon: Mail,
    label: "Email",
    value: "contact@rhodehospital.ng",
    sub: "We reply promptly",
  },
  {
    icon: Clock,
    label: "Opening Hours",
    value: "24 / 7 Everyday",
    sub: "Emergency & General Care",
  },
];

export default function ContactPage() {
  return (
    <main className="font-sans text-[#0f172a]">
      {/* ── Hero ── */}
      <section className="relative overflow-hidden bg-linear-to-br from-[#0a1628] via-[#0f2340] to-[#0d2d5c] px-6 pt-25 pb-20 text-center">
        {/* inner content */}
        <div className="relative z-10 mx-auto max-w-160">
          <span className="mb-6 inline-block rounded-full border border-[#4a90d9]/30 bg-[#4a90d9]/12 px-3.5 py-1.25 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#4a90d9]">
            Get in touch
          </span>

          <h1 className="mb-5 text-[clamp(2.2rem,5vw,3.4rem)] font-bold leading-[1.1] tracking-[-0.03em] text-white">
            We&rsquo;re here
            <br />
            when you need us.
          </h1>

          <p className="mx-auto max-w-125 text-[1.05rem] leading-[1.7] text-white/65">
            Whether it&rsquo;s a question about a service, a referral, or just
            finding your way around — reach out and our team will respond
            promptly.
          </p>
        </div>

        {/* decorative pulse rings */}
        <div
          className="pointer-events-none absolute inset-0 z-1 flex items-center justify-center"
          aria-hidden="true"
        >
          <span className="pulse-ring absolute h-80 w-80 rounded-full border border-[#4a90d9]/18 [animation-delay:0s]" />
          <span className="pulse-ring absolute h-130 w-130 rounded-full border border-[#4a90d9]/18 [animation-delay:1.2s]" />
          <span className="pulse-ring absolute h-180 w-180 rounded-full border border-[#4a90d9]/18 [animation-delay:2.4s]" />
        </div>
      </section>

      {/* ── Body ── */}
      <section className="bg-[#f0f6ff] px-6 py-18">
        <div className="mx-auto grid max-w-280 grid-cols-1 items-start gap-10 md:grid-cols-2 md:gap-14">
          {/* Left — info cards */}
          <aside>
            <p className="mb-8 text-[0.95rem] leading-[1.7] text-[#64748b]">
              Our patient services team is available to help you with anything
              from directions to medical queries.
            </p>

            <ul className="mb-8 flex flex-col gap-4 p-0 list-none">
              {contactDetails.map(({ icon: Icon, label, value, sub }) => (
                <li
                  key={label}
                  className="flex items-start gap-4 rounded-xl border border-[#e2eaf5] bg-white px-5 py-4 transition-shadow duration-200 hover:shadow-[0_4px_20px_rgba(26,68,128,0.08)]"
                >
                  <div className="flex h-9.5 w-9.5 shrink-0 items-center justify-center rounded-[9px] border border-[#ddeeff] bg-[#f0f6ff] text-[#1d5fc4]">
                    <Icon size={18} strokeWidth={1.8} />
                  </div>
                  <div>
                    <p className="mb-0.5 text-[10px] font-bold uppercase tracking-[0.12em] text-[#4a90d9]">
                      {label}
                    </p>
                    <p className="mb-0.5 text-[0.9rem] font-semibold text-[#0f172a]">
                      {value}
                    </p>
                    <p className="text-[0.8rem] text-[#64748b]">{sub}</p>
                  </div>
                </li>
              ))}
            </ul>

            {/* Embedded map */}
            <div className="overflow-hidden rounded-xl border border-[#e2eaf5]">
              <iframe
                title="Hospital location map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.8000574953367!2d3.2582989793457027!3d6.546912100000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8f8e3e398111%3A0x660751bb34e9db91!2sRhode%20Hospital%2C%20ikotun!5e0!3m2!1sen!2sng!4v1791224354091!5m2!1sen!2sng"
                width="100%"
                height="220"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </aside>

          {/* Right — form */}
          <div className="rounded-2xl border border-[#e2eaf5] bg-white p-10 shadow-[0_2px_24px_rgba(26,68,128,0.06)] max-sm:p-6">
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Pulse-ring keyframe — kept minimal since Tailwind v4 has no built-in equivalent */}
      <style>{`
        .pulse-ring {
          animation: pulse-ring 4s ease-out infinite;
        }
        @keyframes pulse-ring {
          0%   { opacity: 0; transform: scale(0.85); }
          30%  { opacity: 1; }
          100% { opacity: 0; transform: scale(1.05); }
        }
        @media (prefers-reduced-motion: reduce) {
          .pulse-ring { animation: none; opacity: 0.15; }
        }
      `}</style>
    </main>
  );
}
