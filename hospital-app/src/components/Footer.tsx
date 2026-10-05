import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="text-gray-300 py-12 mt-auto" style={{ backgroundColor: "var(--brand-navy-dark)" }}>
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <Image src="/logo_rhode.jpg" alt="Rhode Hospital Logo" width={48} height={48} className="rounded-md object-contain" />
            <h3 className="text-2xl font-bold text-white">Rhode Hospital</h3>
          </div>
          <p className="text-gray-400 leading-relaxed mb-4">
            Providing world-class healthcare with compassion and expertise. We are committed to your well-being.
          </p>
        </div>
        
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
          <ul className="space-y-2">
            <li><Link href="/" className="transition-colors hover:text-red-300">Home</Link></li>
            <li><Link href="/about-us" className="transition-colors hover:text-red-300">About Us</Link></li>
            <li><Link href="/staff-and-doctors" className="transition-colors hover:text-red-300">Staff &amp; Doctors</Link></li>
            <li><Link href="/appointments" className="transition-colors hover:text-red-300">Appointments</Link></li>
            <li><Link href="/contact" className="transition-colors hover:text-red-300">Contact</Link></li>
          </ul>
        </div>
        
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">Contact Info</h4>
          <ul className="space-y-2">
            <li className="flex items-start gap-2"><span>📍</span> <span>21, Ajobiaro Street, off Popoola Street, Ile-Ise bus stop, Igando Road, Ikotun</span></li>
            <li className="flex items-center gap-2"><span>📞</span> +1 (555) 123-4567</li>
            <li className="flex items-center gap-2"><span>✉️</span> contact@rhodehospital.ng</li>
          </ul>
        </div>
        
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">Opening Hours</h4>
          <ul className="space-y-2 text-sm lg:text-base">
            <li className="flex justify-between font-medium text-white"><span>Everyday</span> <span>24 Hours</span></li>
            <li className="flex justify-between text-red-300 font-medium"><span>Emergency Services</span> <span>Open 24/7</span></li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 mt-12 pt-8 border-t border-gray-700 text-center text-gray-500 text-sm flex flex-col md:flex-row justify-between items-center">
        <p>&copy; {new Date().getFullYear()} Rhode Hospital. All rights reserved.</p>
        <div className="flex gap-4 mt-4 md:mt-0">
          <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
          <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
        </div>
      </div>
    </footer>
  );
}
