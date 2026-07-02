"use client";

import { useRef, useEffect } from "react";

// ── Types ──────────────────────────────────────────────────────────────────
interface Review {
  name: string;
  role: string;
  rating: number;
  text: string;
  avatar: string; // initials fallback
}

// ── Data ───────────────────────────────────────────────────────────────────
const reviews: Review[] = [
  {
    name: "Amara Okonkwo",
    role: "Patient – Cardiology",
    rating: 5,
    text: "The care I received was outstanding. Every doctor and nurse was attentive, professional, and genuinely compassionate throughout my stay.",
    avatar: "AO",
  },
  {
    name: "Chukwuemeka Adeyemi",
    role: "Patient – General Surgery",
    rating: 5,
    text: "World-class facilities and an incredible team. My surgery went smoothly and the post-op support was beyond what I expected.",
    avatar: "CA",
  },
  {
    name: "Ngozi Ibrahim",
    role: "Patient – Maternity",
    rating: 5,
    text: "I delivered my baby here and the maternity ward staff made the whole experience feel safe, warm, and unforgettable.",
    avatar: "NI",
  },
  {
    name: "Tunde Fashola",
    role: "Patient – Orthopaedics",
    rating: 5,
    text: "From consultation to physiotherapy, the orthopaedic department's attention to detail gave me full confidence in my recovery.",
    avatar: "TF",
  },
  {
    name: "Blessing Eze",
    role: "Patient – Paediatrics",
    rating: 5,
    text: "The paediatric team was so gentle with my son. They explained every step clearly and put both of us completely at ease.",
    avatar: "BE",
  },
  {
    name: "Kelechi Nwosu",
    role: "Patient – Oncology",
    rating: 5,
    text: "Battling cancer is never easy, but having a team this dedicated made an enormous difference. I am grateful beyond words.",
    avatar: "KN",
  },
  {
    name: "Yewande Adebisi",
    role: "Patient – Neurology",
    rating: 5,
    text: "The neurologist took time to truly understand my condition. The diagnosis was thorough and the follow-up care exceptional.",
    avatar: "YA",
  },
  {
    name: "Emeka Okafor",
    role: "Patient – Emergency",
    rating: 5,
    text: "I came in as an emergency and was seen immediately. The speed and quality of treatment probably saved my life.",
    avatar: "EO",
  },
];

// Duplicate for seamless loop
const track = [...reviews, ...reviews];

// ── Star component ─────────────────────────────────────────────────────────
function Stars({ count }: { count: number }) {
  return (
    <div style={{ display: "flex", gap: "2px" }}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          width="14"
          height="14"
          viewBox="0 0 20 20"
          fill={i < count ? "#F59E0B" : "#D1D5DB"}
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

// ── Card component ─────────────────────────────────────────────────────────
function ReviewCard({ review }: { review: Review }) {
  return (
    <div className="shrink-0 w-[320px] bg-white border border-[#DAEAF8] rounded-2xl py-7 px-6 flex flex-col gap-4 shadow-[0_2px_12px_rgba(13,71,161,0.06)] transition-all duration-200 ease hover:shadow-[0_8px_28px_rgba(13,71,161,0.12)] hover:-translate-y-0.5">
      <Stars count={review.rating} />
      <p className="font-sans text-sm leading-[1.65] text-gray-700 m-0 flex-1">&ldquo;{review.text}&rdquo;</p>
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-[#1D6FB8] text-white font-sans text-[13px] font-semibold flex items-center justify-center shrink-0 tracking-[0.03em]" aria-hidden="true">
          {review.avatar}
        </div>
        <div>
          <p className="font-sans text-sm font-semibold text-[#0B2545] m-0">{review.name}</p>
          <p className="font-sans text-xs text-gray-500 mt-0.5">{review.role}</p>
        </div>
      </div>
    </div>
  );
}

// ── Main component ─────────────────────────────────────────────────────────
export default function ReviewsMarquee() {
  const trackRef = useRef<HTMLDivElement>(null);

  // Pause animation on hover / focus-within for accessibility
  const pause = () => {
    if (trackRef.current) trackRef.current.style.animationPlayState = "paused";
  };
  const play = () => {
    if (trackRef.current) trackRef.current.style.animationPlayState = "running";
  };

  return (
    <section className="py-24 px-6 bg-[#F0F7FF] overflow-hidden" aria-label="Patient reviews">
      {/* ── Header ── */}
      <div className="text-center mb-14">
        <span className="inline-block font-sans text-xs font-bold tracking-[0.12em] uppercase text-[#1D6FB8] mb-3">Testimonials</span>
        <h2 className="font-serif text-[clamp(28px,4vw,40px)] font-bold text-[#0B2545] m-0 mb-[14px] leading-[1.2]">What Our Patients Say</h2>
        <p className="font-sans text-base text-[#4B6280] m-0 max-w-[480px] mx-auto leading-[1.6]">
          Real stories from patients who trusted us with their care.
        </p>
      </div>

      {/* ── Marquee ── */}
      <div
        className="relative w-full overflow-hidden"
        onMouseEnter={pause}
        onMouseLeave={play}
        onFocusCapture={pause}
        onBlurCapture={play}
      >
        {/* Fade edges */}
        <div className="absolute inset-y-0 w-[120px] z-2 pointer-events-none left-0 bg-linear-gradient-to-r from-[#F0F7FF] to-transparent motion-reduce:hidden" aria-hidden="true" />
        <div className="absolute inset-y-0 w-[120px] z-2 pointer-events-none right-0 bg-linear-gradient-to-l from-[#F0F7FF] to-transparent motion-reduce:hidden" aria-hidden="true" />

        <div className="flex gap-6 w-max animate-[marquee-scroll_40s_linear_infinite] motion-reduce:animate-none motion-reduce:flex-wrap motion-reduce:w-full motion-reduce:justify-center" ref={trackRef}>
          {track.map((review, i) => (
            <ReviewCard key={`${review.name}-${i}`} review={review} />
          ))}
        </div>
      </div>

      {/* ── Styles ── */}
      <style>{`
        @keyframes marquee-scroll {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}
