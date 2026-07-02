import qrCode from '../assets/qr.webp'

export default function Payment() {
  return (
    <div style={{background: '#f8f7f4'}} className="py-20 px-6 min-h-screen">
      <div className="max-w-5xl mx-auto">

        <div className="text-center mb-14">
          <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{color: '#d4a017'}}>Easy & Secure</p>
          <h2 className="text-5xl font-bold mb-3" style={{color: '#0f2044'}}>Online Payment</h2>
          <p className="text-gray-500">Pay quickly and securely using Any UPI App</p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-start">

          {/* QR Card */}
          <div className="rounded-3xl p-8 text-center"
            style={{background: 'white', boxShadow: '0 8px 40px rgba(0,0,0,0.08)', border: '1px solid #e8e4dc'}}>
            <div className="inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-6"
              style={{background: 'rgba(212,160,23,0.1)', color: '#d4a017', border: '1px solid rgba(212,160,23,0.2)'}}>
              PhonePe / UPI
            </div>
            <p className="text-sm font-semibold mb-4" style={{color: '#0f2044'}}>Scan & Pay Using PhonePe App</p>
            <div className="rounded-2xl overflow-hidden inline-block mb-5"
              style={{border: '3px solid #d4a017', boxShadow: '0 4px 20px rgba(212,160,23,0.2)'}}>
              <img src={qrCode} alt="PhonePe QR Code" className="w-52 h-52 object-cover"/>
            </div>
            <div className="space-y-2 text-sm text-gray-600">
              <p><span className="font-semibold" style={{color: '#0f2044'}}>Name:</span> Dhanna Enterprises</p>
              <p><span className="font-semibold" style={{color: '#0f2044'}}>Phone:</span> 8287746345</p>
              <p><span className="font-semibold" style={{color: '#0f2044'}}>UPI:</span> Any UPI App</p>
            </div>
          </div>

          {/* Instructions */}
          <div>
            <h3 className="text-2xl font-bold mb-6" style={{color: '#0f2044'}}>How to Pay</h3>
            {[
              { step: '01', title: 'Open PhonePe or any UPI App', desc: 'Use Google Pay, Paytm, BHIM, or any UPI-enabled app on your phone.' },
              { step: '02', title: 'Scan the QR Code', desc: 'Point your camera at the QR code shown here to auto-fill payment details.' },
              { step: '03', title: 'Enter Amount & Pay', desc: 'Enter the service amount as advised by our team and confirm payment.' },
              { step: '04', title: 'Share Payment Screenshot', desc: 'Send the payment confirmation to us on WhatsApp for quick processing.' },
            ].map(item => (
              <div key={item.step} className="flex gap-4 mb-6">
                <span className="text-2xl font-bold shrink-0 w-10" style={{color: '#d4a017', fontFamily: 'Cormorant Garamond, serif'}}>
                  {item.step}
                </span>
                <div>
                  <h4 className="font-semibold text-sm mb-1" style={{color: '#0f2044'}}>{item.title}</h4>
                  <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}

            <a href="https://wa.me/918287746345" target="_blank" rel="noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm mt-2 transition-all hover:scale-105"
              style={{background: '#0f2044', color: 'white'}}>
              Need Help? WhatsApp Us →
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}