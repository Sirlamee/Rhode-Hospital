"use client"

import { useState } from "react";

import HeroCarousel from "@/components/HeroCarousel";
import AboutSection from "@/components/AboutSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import HealthcareServices from "@/components/healthcare-services";
import MeetOurSpecialists from "@/components/meet-our-specialists";
import ReviewsMarquee from "@/components/ReviewsMarquee";
import ContactInformation from "@/components/contact-information";

export default function Home() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && message) {
      console.log('Form Data:', { email, message });
      setSubmitted(true);
      // Clear form after submission (optional)
      setEmail('');
      setMessage('');
    }
  };

  return (
    <main className="flex flex-col min-h-screen bg-gray-50">
      <HeroCarousel />
      <AboutSection />
      <HealthcareServices />
      <MeetOurSpecialists />
      <WhyChooseUs />
      <ReviewsMarquee />
      <ContactInformation />
    </main>
  );
}
