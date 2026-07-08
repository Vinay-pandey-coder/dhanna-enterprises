import SEO from '../components/SEO'


export default function Contact() {
  return (
    <>
    <SEO
  title="Contact Us"
  description="Contact Dhanna Enterprises for GST, ITR, accounting and business compliance services. Call or WhatsApp us at 8287746345."
  keywords="contact Dhanna Enterprises, tax consultant contact, GST help"
/>
    <div style={{background: '#f8f7f4'}} className="py-20 px-6 min-h-screen">
      <div className="max-w-5xl mx-auto">

        <div className="text-center mb-14">
          <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{color: '#d4a017'}}>Get In Touch</p>
          <h2 className="text-5xl font-bold mb-3" style={{color: '#0f2044'}}>Contact Us</h2>
          <p className="text-gray-500">We're here Mon–Sat, 10 AM to 7 PM. Reach us through any channel below.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {[
            { icon: '📞', title: 'Call Us', info: '8287746345', sub: 'Mon–Sat | 10 AM – 7 PM', href: 'tel:8287746345' },
            { icon: '✉️', title: 'Email Us', info: 'support.dhanna@gmail.com', sub: 'Reply within 24 hours', href: 'mailto:support.dhanna@gmail.com' },
            { icon: '💬', title: 'WhatsApp', info: 'Chat Instantly', sub: 'Fastest response channel', href: 'https://wa.me/918287746345' },
          ].map(card => (
            <a key={card.title} href={card.href} target={card.href.startsWith('http') ? '_blank' : undefined}
              rel="noreferrer"
              className="rounded-2xl p-8 text-center block transition-all hover:scale-105"
              style={{background: 'white', border: '1px solid #e8e4dc', boxShadow: '0 2px 12px rgba(0,0,0,0.04)'}}>
              <div className="text-4xl mb-4">{card.icon}</div>
              <h3 className="font-bold mb-1" style={{color: '#0f2044'}}>{card.title}</h3>
              <p className="font-semibold text-sm mb-1" style={{color: '#d4a017'}}>{card.info}</p>
              <p className="text-xs text-gray-400">{card.sub}</p>
            </a>
          ))}
        </div>

        {/* WhatsApp CTA */}
        <div className="rounded-3xl p-10 text-center"
          style={{background: 'linear-gradient(135deg, #0f2044, #163060)', border: '1px solid rgba(212,160,23,0.2)'}}>
          <h3 className="text-3xl font-bold text-white mb-2">Prefer WhatsApp?</h3>
          <p className="text-gray-400 mb-6">Send us a message and our team will respond within minutes.</p>
          <a href="https://wa.me/918287746345" target="_blank" rel="noreferrer"
            className="inline-block px-10 py-4 rounded-full font-bold text-sm transition-all hover:scale-105"
            style={{background: '#d4a017', color: '#050d1a', boxShadow: '0 8px 30px rgba(212,160,23,0.3)'}}>
            💬 WhatsApp Support
          </a>
        </div>
      </div>
    </div>
</>
  )
}