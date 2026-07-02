import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 mt-auto">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
            <span className="text-3xl">🏥</span> Rhode Hospital
          </h3>
          <p className="text-gray-400 leading-relaxed mb-4">
            Providing world-class healthcare with compassion and expertise. We are committed to your well-being.
          </p>
        </div>
        
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
          <ul className="space-y-2">
            <li><Link href="/" className="hover:text-blue-400 transition-colors">Home</Link></li>
            <li><Link href="/about-us" className="hover:text-blue-400 transition-colors">About Us</Link></li>
            <li><Link href="/staff-and-doctors" className="hover:text-blue-400 transition-colors">Staff & Doctors</Link></li>
            <li><Link href="/appointments" className="hover:text-blue-400 transition-colors">Appointments</Link></li>
            <li><Link href="/contact" className="hover:text-blue-400 transition-colors">Contact</Link></li>
          </ul>
        </div>
        
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">Contact Info</h4>
          <ul className="space-y-2">
            <li className="flex items-center gap-2"><span>📍</span> 123 Health Ave, Medical City, NY 10001</li>
            <li className="flex items-center gap-2"><span>📞</span> +1 (555) 123-4567</li>
            <li className="flex items-center gap-2"><span>✉️</span> contact@rhodehospital.com</li>
          </ul>
        </div>
        
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">Opening Hours</h4>
          <ul className="space-y-2 text-sm lg:text-base">
            <li className="flex justify-between"><span>Mon - Fri</span> <span>8:00 AM - 8:00 PM</span></li>
            <li className="flex justify-between"><span>Saturday</span> <span>9:00 AM - 5:00 PM</span></li>
            <li className="flex justify-between text-red-400"><span>Sunday</span> <span>Emergency Only</span></li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 mt-12 pt-8 border-t border-gray-800 text-center text-gray-500 text-sm flex flex-col md:flex-row justify-between items-center">
        <p>&copy; {new Date().getFullYear()} Rhode Hospital. All rights reserved.</p>
        <div className="flex gap-4 mt-4 md:mt-0">
          <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
          <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
        </div>
      </div>
    </footer>
  );
}
