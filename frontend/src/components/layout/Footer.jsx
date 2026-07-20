import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer style={{ background: '#050d1a' }} className="text-white pt-12 pb-6 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-10 pb-10 border-b border-gray-800">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <img src="/images/logo.webp" alt="Dhanna Enterprises" className="h-8 w-8 object-contain" />
              <h3 className="text-xl font-bold" style={{ color: '#08d24f', fontFamily: 'Georgia, serif' }}>
                Dhanna Enterprises
              </h3>
            </div>

            <p className="text-lg text-gray-400 leading-relaxed">
              Trusted tax & financial solutions for individuals and businesses across India.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-sm mb-4 text-gray-300">Quick Links</h4>
            <div className="flex flex-col gap-2">
              {[
                { label: 'Home', to: '/' },
                { label: 'About', to: '/about' },
                { label: 'Services', to: '/services' },
                { label: 'Payment', to: '/payment' },
                { label: 'Contact', to: '/contact' },
              ].map(l => (
                <Link key={l.label} to={l.to}
                  className="text-lg text-gray-400 hover:text-green-400 transition-colors w-fit">
                  {l.label}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-sm mb-4 text-gray-300">Contact</h4>
            <div className="flex flex-col gap-2 text-sm text-gray-400">
              <a href="tel:8287746345" className="hover:text-green-400 transition-colors text-lg">📞 8287746345</a>
              <a href="mailto:support.dhanna@gmail.com" className="hover:text-green-400 text-lg transition-colors">✉️ support.dhanna@gmail.com</a>
              <p className='text-lg'>🕐 Mon–Sat | 10 AM – 7 PM</p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-lg text-gray-600">
            © 2025 <span className="text-gray-400 font-medium">Dhanna Enterprises</span> | All Rights Reserved
          </p>
          <div className="flex items-center gap-4">
            <Link to="/terms" target='_blank' className="text-lg text-gray-500 hover:text-green-400 transition-colors">Terms & Conditions</Link>
            <span className="text-gray-700 text-xs">|</span>
            <Link to="/privacy" target='_blank' className="text-lg text-gray-500 hover:text-green-400 transition-colors">Privacy Policy</Link>
            <span className="text-gray-700 text-xs">|</span>
            <Link to="/refund-policy" target='_blank' className="text-lg text-gray-500 hover:text-green-400 transition-colors">Refund Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}