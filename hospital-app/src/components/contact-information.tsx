import Link from 'next/link';
import { MapPin, Phone, Mail, Clock, ArrowRight } from 'lucide-react';

export default function ContactInformation() {
  return (
    <section className="py-24 px-6 bg-white overflow-hidden" aria-labelledby="contact-info-title">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        {/* Header */}
        <div className="text-center max-w-2xl mb-16">
          <span className="inline-block font-sans text-xs font-semibold tracking-[0.12em] uppercase mb-3" style={{ color: "var(--brand-maroon)" }}>
            Get in Touch
          </span>
          <h2 id="contact-info-title" className="font-serif text-[clamp(32px,4vw,48px)] font-normal m-0 mb-5 leading-[1.2]" style={{ color: "var(--brand-navy)" }}>
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
              detail1: "21, Ajobiaro Street, off Popoola St",
              detail2: "Ile-Ise B/Stop, Igando Rd, Ikotun",
            },
            {
              icon: Mail,
              title: "Email Support",
              detail1: "support@rhodehospital.ng",
              detail2: "info@rhodehospital.ng",
            },
            {
              icon: Clock,
              title: "Opening Hours",
              detail1: "Everyday: 24 Hours",
              detail2: "Emergency: Open 24/7",
            }
          ].map((item, index) => (
            <div key={index} className="flex flex-col items-center text-center p-8 bg-gray-50 rounded-2xl border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group">
              <div className="w-14 h-14 rounded-full flex items-center justify-center mb-6 group-hover:text-white transition-colors duration-300" style={{ backgroundColor: "var(--brand-maroon-pale)", color: "var(--brand-maroon)" }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.backgroundColor = 'var(--brand-maroon)'; (e.currentTarget as HTMLElement).style.color = 'white'; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.backgroundColor = 'var(--brand-maroon-pale)'; (e.currentTarget as HTMLElement).style.color = 'var(--brand-maroon)'; }}>
                <item.icon size={24} />
              </div>
              <h3 className="font-sans text-lg font-semibold mb-3" style={{ color: "var(--brand-navy)" }}>{item.title}</h3>
              <p className="font-sans text-sm text-[#4B6280] leading-relaxed">
                {item.detail1}<br />
                {item.detail2}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center w-full max-w-3xl rounded-3xl p-10 md:p-14 border shadow-[0_8px_30px_rgba(5,50,73,0.08)]" style={{ backgroundColor: "var(--brand-navy-pale)", borderColor: "#b0cdd8" }}>
          <h3 className="font-serif text-[clamp(24px,3vw,32px)] mb-4" style={{ color: "var(--brand-navy)" }}>
            Need more detailed assistance?
          </h3>
          <p className="font-sans text-[#4B6280] mb-8 max-w-xl mx-auto">
            Visit our comprehensive contact page for inquiry forms, detailed department directories, interactive maps, and additional support options.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 text-white px-8 py-4 rounded-full font-semibold transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 hover:opacity-90" style={{ backgroundColor: "var(--brand-maroon)" }}
          >
            Contact Us
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}
