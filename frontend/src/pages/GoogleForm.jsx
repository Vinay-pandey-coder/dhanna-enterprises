export default function GoogleForm() {
  return (
    <div style={{background: '#f8f7f4'}} className="py-20 px-6 min-h-screen">
      <div className="max-w-4xl mx-auto">

        <div className="text-center mb-14">
          <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{color: '#007B2B'}}>Join Us</p>
          <h2 className="text-5xl font-bold mb-3" style={{color: '#0f2044'}}>Client Registration</h2>
          <p className="text-gray-500 max-w-lg mx-auto">Fill out the form and our team will contact you within 24 hours to get started.</p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {[
            { step: '1', icon: '📝', title: 'Fill the Form', desc: 'Share your basic details and the service you need.' },
            { step: '2', icon: '📞', title: 'We Call You', desc: 'Our team contacts you within 24 hours to discuss.' },
            { step: '3', icon: '✅', title: 'Work Begins', desc: 'We start processing your request immediately.' },
          ].map(item => (
            <div key={item.step} className="rounded-2xl p-6 text-center"
              style={{background: 'white', border: '1px solid #e8e4dc', boxShadow: '0 2px 12px rgba(0,0,0,0.04)'}}>
              <div className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold mx-auto mb-4"
                style={{background: '#144d92', color: '#fff', border: '#007B2B'}}>
                {item.step}
              </div>
              <div className="text-3xl mb-3">{item.icon}</div>
              <h4 className="font-bold mb-2" style={{color: '#0f2044'}}>{item.title}</h4>
              <p className="text-sm text-gray-500">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="rounded-3xl p-12 text-center"
          style={{background: 'linear-gradient(135deg, #0f2044, #163060)', border: '1px solid rgba(212,160,23,0.2)'}}>
          <h3 className="text-3xl font-bold text-white mb-3">Ready to Get Started?</h3>
          <p className="text-gray-400 mb-8 max-w-md mx-auto">Click below to open the registration form. Takes less than 2 minutes.</p>
          <a href="YOUR_GOOGLE_FORM_LINK"
            target="_blank" rel="noreferrer"
            className="inline-block px-12 py-4 rounded-full font-bold text-sm transition-all hover:scale-105"
            style={{background: '#007B2B', color: '#fff', boxShadow: '0 8px 30px rgba(212,160,23,0.3)'}}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 inline" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
            </svg>
            Open Registration Form
          </a>
          <p className="text-gray-500 text-xs mt-4">Free consultation • No obligation • Quick response</p>
        </div>
      </div>
    </div>
  )
}