import Link from 'next/link';
import { MapPin, Phone, Mail, Clock, ArrowRight } from 'lucide-react';

export default function ContactInformation() {
  return (
    <section className="py-24 px-6 bg-white overflow-hidden" aria-labelledby="contact-info-title">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        {/* Header */}
        <div className="text-center max-w-2xl mb-16">
          <span className="inline-block font-sans text-xs font-semibold tracking-[0.12em] uppercase text-[#1D6FB8] mb-3">
            Get in Touch
          </span>
          <h2 id="contact-info-title" className="font-serif text-[clamp(32px,4vw,48px)] font-normal text-[#0B2545] m-0 mb-5 leading-[1.2]">
            We&apos;re Here to Help
          </h2>
          <p className="font-sans text-base text-[#4B6280] leading-[1.6]">
            Whether you have a question about our services, need assistance with your patient portal, or want to provide feedback, our dedicated team is ready to assist you.
          </p>
        </div>

        {/* Quick Overview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full mb-16">
          {[
            {
              icon: Phone,
              title: "Emergency & General",
              detail1: "Emergency: 911",
              detail2: "General: 1-800-HOSPITAL",
            },
            {
              icon: MapPin,
              title: "Our Location",
              detail1: "123 Health Ave, Medical District",
              detail2: "Cityville, State 12345",
            },
            {
              icon: Mail,
              title: "Email Support",
              detail1: "support@rhodehospital.org",
              detail2: "info@rhodehospital.org",
            },
            {
              icon: Clock,
              title: "Visiting Hours",
              detail1: "Mon-Sun: 8:00 AM - 8:00 PM",
              detail2: "Emergency: 24/7",
            }
          ].map((item, index) => (
            <div key={index} className="flex flex-col items-center text-center p-8 bg-gray-50 rounded-2xl border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group">
              <div className="w-14 h-14 bg-blue-100 text-[#1D6FB8] rounded-full flex items-center justify-center mb-6 group-hover:bg-[#1D6FB8] group-hover:text-white transition-colors duration-300">
                <item.icon size={24} />
              </div>
              <h3 className="font-sans text-lg font-semibold text-[#0B2545] mb-3">{item.title}</h3>
              <p className="font-sans text-sm text-[#4B6280] leading-relaxed">
                {item.detail1}<br />
                {item.detail2}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center w-full max-w-3xl bg-[#F0F7FF] rounded-3xl p-10 md:p-14 border border-[#DAEAF8] shadow-[0_8px_30px_rgba(13,71,161,0.06)]">
          <h3 className="font-serif text-[clamp(24px,3vw,32px)] text-[#0B2545] mb-4">
            Need more detailed assistance?
          </h3>
          <p className="font-sans text-[#4B6280] mb-8 max-w-xl mx-auto">
            Visit our comprehensive contact page for inquiry forms, detailed department directories, interactive maps, and additional support options.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-[#1D6FB8] text-white px-8 py-4 rounded-full font-semibold hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
          >
            Contact Us
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}
