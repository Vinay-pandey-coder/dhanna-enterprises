import React from 'react'

function Icon({ path, size = 22 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      {path}
    </svg>
  )
}

const icons = {
  shield: <><path d="M12 3l8 4v5c0 5-3.5 8-8 9-4.5-1-8-4-8-9V7l8-4z"/><path d="M9 12l2 2 4-4"/></>,
  bolt: <><path d="M13 2 4 14h6l-1 8 9-12h-6l1-8z"/></>,
  tie: <><circle cx="12" cy="7" r="4"/><path d="M5 21l2-9 5-3 5 3 2 9"/><path d="M10 9l2 3 2-3"/></>,
  phone2: <><rect x="6" y="2" width="12" height="20" rx="2"/><path d="M10 18h4"/></>,
  arrow: <><path d="M5 12h14M13 6l6 6-6 6"/></>,
  clock: <><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 3"/></>,
  check: <><circle cx="12" cy="12" r="9"/><path d="M8 12l3 3 5-6"/></>,
  team: <><circle cx="9" cy="8" r="3"/><circle cx="17" cy="8" r="3"/><path d="M2 20c0-3 3-5 7-5s7 2 7 5"/><path d="M14 15c3 0 7 2 7 5"/></>,
  thumb: <><path d="M7 11v9H4v-9h3z"/><path d="M7 11l4-7c1 0 2 1 2 2v3h5a2 2 0 0 1 2 2l-1.5 6a2 2 0 0 1-2 1.5H7"/></>,
  itr: <><rect x="4" y="3" width="16" height="18" rx="2"/><path d="M8 7h8M8 11h5M8 15h8"/></>,
  gst: <><rect x="3" y="4" width="18" height="16" rx="2"/><path d="M7 9h6M7 13h10"/></>,
  account: <><path d="M3 17l5-5 4 4 8-8"/><path d="M14 8h6v6"/></>,
  audit: <><path d="M12 3l8 4v5c0 5-3.5 8-8 9-4.5-1-8-4-8-9V7l8-4z"/><path d="M9 12l2 2 4-4"/></>,
}

const Home = () => {
  return (
    <>
      {/* ===== HERO ===== */}
      <div className="relative overflow-hidden" style={{
        background: 'linear-gradient(135deg, #050d1a 0%, #0f2044 50%, #163060 100%)',
        minHeight: '88vh',
        display: 'flex',
        alignItems: 'center'
      }}>
        <div className="absolute inset-0 pointer-events-none" style={{
          backgroundImage: `
            radial-gradient(ellipse at 10% 50%, rgba(212,160,23,0.12) 0%, transparent 60%),
            radial-gradient(ellipse at 90% 20%, rgba(212,160,23,0.08) 0%, transparent 50%)
          `
        }}/>
        <div className="absolute right-0 top-0 w-96 h-96 rounded-full opacity-5"
          style={{background: '#d4a017', transform: 'translate(30%, -30%)'}}/>
        <div className="absolute left-0 bottom-0 w-64 h-64 rounded-full opacity-5"
          style={{background: '#d4a017', transform: 'translate(-30%, 30%)'}}/>

        <div className="relative max-w-6xl mx-auto px-6 py-20 w-full">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full text-xs font-semibold tracking-widest uppercase"
              style={{background: 'rgba(212,160,23,0.15)', border: '1px solid rgba(212,160,23,0.3)', color: '#d4a017'}}>
              ⭐ Trusted Tax & Business Solutions
            </div>

            <h1 className="text-white font-bold leading-none mb-6"
              style={{fontSize: 'clamp(3rem, 8vw, 6rem)', fontFamily: 'Georgia, serif'}}>
              FREE ITR<br/>
              <span style={{color: '#d4a017'}}>FILING</span> <span className="text-white">STARTED!</span>
            </h1>

            <p className="mb-4 font-medium tracking-widest text-sm uppercase"
              style={{color: 'rgba(212,160,23,0.7)'}}>
              GST &bull; ITR &bull; Accounting &bull; Audit &bull; MSME Registration
            </p>

            <p className="mb-10 text-lg leading-relaxed max-w-xl"
              style={{color: 'rgba(255,255,255,0.6)'}}>
              Free Computation with every ITR filing — Professional tax & compliance services for individuals,
              businesses, and professionals across India.
            </p>

            <div className="flex flex-wrap gap-4">
              <a href="https://wa.me/918287746345" target="_blank" rel="noreferrer"
                className="flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-sm transition-all hover:scale-105"
                style={{background: '#d4a017', color: '#050d1a', boxShadow: '0 8px 30px rgba(212,160,23,0.35)'}}>
                💬 Chat on WhatsApp
              </a>
              <a href="/services"
                className="flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-sm transition-all hover:scale-105"
                style={{border: '1.5px solid rgba(255,255,255,0.3)', color: 'white', background: 'rgba(255,255,255,0.05)'}}>
                Our Services →
              </a>
            </div>
          </div>

          <div className="mt-16 grid grid-cols-3 gap-4 max-w-xl">
            {[
              { n: '500+', l: 'Happy Clients' },
              { n: '5+', l: 'Years Experience' },
              { n: '24/7', l: 'Support' },
            ].map(s => (
              <div key={s.l} className="rounded-2xl p-4 text-center"
                style={{background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(212,160,23,0.2)', backdropFilter: 'blur(10px)'}}>
                <p className="text-2xl font-bold" style={{color: '#d4a017', fontFamily: 'Georgia, serif'}}>{s.n}</p>
                <p className="text-xs mt-1" style={{color: 'rgba(255,255,255,0.5)'}}>{s.l}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ===== ABOUT / WELCOME ===== */}
      <div className="py-24 px-6" style={{background: '#f8f7f4'}}>
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">

            <div>
              <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{color: '#d4a017'}}>Who We Are</p>
              <h2 className="text-5xl font-bold mb-6 leading-tight" style={{color: '#0f2044'}}>
                Welcome to<br/>Dhanna Enterprises
              </h2>
              <div className="w-16 h-1 mb-6 rounded" style={{background: '#d4a017'}}/>
              <p className="text-gray-600 leading-relaxed mb-6">
                We provide complete financial and business solutions for Individuals, Businesses & Professionals.
                From GST Filing and ITR to Accounting, Audit, MSME Registration and Tax Consultancy — we handle it all.
              </p>
              <p className="text-gray-600 leading-relaxed">
                With over 5 years of experience, our team of experts ensures accurate, timely and hassle-free compliance
                so you can focus on growing your business.
              </p>
              <a href="https://wa.me/918287746345" target="_blank" rel="noreferrer"
                className="inline-flex items-center gap-2 mt-8 px-6 py-3 rounded-full text-sm font-semibold transition-all hover:scale-105"
                style={{background: '#0f2044', color: 'white'}}>
                Get Free Consultation <Icon path={icons.arrow} size={15}/>
              </a>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: 'shield', title: 'Trusted & Reliable', desc: 'Transparent process, zero hidden charges.' },
                { icon: 'bolt', title: 'Fast Turnaround', desc: 'Most filings completed within 24–48 hours.' },
                { icon: 'tie', title: 'Expert Team', desc: 'Professional team for all your needs.' },
                { icon: 'phone2', title: 'Easy Process', desc: 'WhatsApp-first — simple, paperless experience.' },
              ].map(card => (
                <div key={card.title} className="rounded-2xl p-6"
                  style={{background: 'white', border: '1px solid #e8e4dc', boxShadow: '0 2px 12px rgba(0,0,0,0.05)'}}>
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-3"
                    style={{background: 'rgba(212,160,23,0.1)', color: '#d4a017'}}>
                    <Icon path={icons[card.icon]} size={18} />
                  </div>
                  <h4 className="font-bold mb-1 text-sm" style={{color: '#0f2044'}}>{card.title}</h4>
                  <p className="text-xs text-gray-500 leading-relaxed">{card.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ===== OUR SERVICES PREVIEW ===== */}
      <div className="py-24 px-6" style={{background: 'white'}}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-xs font-bold tracking-widest uppercase mb-2" style={{color: '#d4a017'}}>What We Offer</p>
            <h3 className="text-4xl font-bold" style={{color: '#0f2044'}}>Our Core Services</h3>
          </div>

          <div className="grid md:grid-cols-2 gap-5 mb-10">
            {[
              { icon: 'itr', color: '#0f2044', title: 'Income Tax Returns (ITR)', desc: 'Salaried | Business | Capital Gain | Other Sources' },
              { icon: 'gst', color: '#1e3a8a', title: 'GST Registration & Filing', desc: 'New Registration | Return Filing | GST Compliance' },
              { icon: 'account', color: '#b8860b', title: 'Accounting & Bookkeeping', desc: 'Complete Accounting Solutions' },
              { icon: 'audit', color: '#0f2044', title: 'Audit & Compliance', desc: 'Audit | TDS | Internal Compliance' },
            ].map(s => (
              <div key={s.title} className="flex items-center gap-5 p-6 rounded-2xl transition-all"
                style={{background: '#f8f7f4', border: '1px solid #e8e4dc'}}
                onMouseOver={e => { e.currentTarget.style.borderColor = '#d4a017'; e.currentTarget.style.transform = 'translateY(-2px)' }}
                onMouseOut={e => { e.currentTarget.style.borderColor = '#e8e4dc'; e.currentTarget.style.transform = 'translateY(0)' }}>
                <div className="w-14 h-14 rounded-xl flex items-center justify-center shrink-0"
                  style={{background: s.color, color: 'white'}}>
                  <Icon path={icons[s.icon]} size={24} />
                </div>
                <div>
                  <h4 className="font-bold mb-1" style={{color: '#0f2044'}}>{s.title}</h4>
                  <p className="text-sm text-gray-500">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Trust strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-14">
            {[
              { icon: 'clock', title: 'On Time Service' },
              { icon: 'check', title: 'Accurate Work' },
              { icon: 'team', title: 'Expert Team' },
              { icon: 'thumb', title: '100% Client Satisfaction' },
            ].map(t => (
              <div key={t.title} className="flex items-center gap-3 p-4 rounded-xl"
                style={{background: '#f8f7f4', border: '1px solid #e8e4dc'}}>
                <span style={{color: '#d4a017'}}><Icon path={icons[t.icon]} size={20} /></span>
                <span className="text-sm font-semibold" style={{color: '#0f2044'}}>{t.title}</span>
              </div>
            ))}
          </div>

          {/* Other services tags */}
          <div className="text-center mb-8">
            <p className="text-xs font-bold tracking-widest uppercase mb-2" style={{color: '#d4a017'}}>And Many More</p>
            <h3 className="text-3xl font-bold" style={{color: '#0f2044'}}>Other Services We Offer</h3>
          </div>
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {[
              'ISO Certificates (9001, 14001)', 'MSME / Udyam Registration', 'IEC Code', 'FSSAI License',
              'Shop & Establishment Registration', 'Trade & Brand Name Registration', 'Partnership Deed',
              'DSC (Digital Signature Certificate)', 'EPF & ESIC Registration', 'PAN Card (New & Correction)',
              'TDS Return Filing', 'ITR Computation',
            ].map(item => (
              <span key={item}
                className="px-5 py-2.5 rounded-full text-sm font-medium"
                style={{background: '#f8f7f4', color: '#0f2044', border: '1px solid #e8e4dc'}}>
                {item}
              </span>
            ))}
          </div>

          <div className="text-center">
            <a href="/services"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-sm transition-all hover:scale-105"
              style={{background: '#0f2044', color: 'white'}}>
              View All Services <Icon path={icons.arrow} size={16}/>
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home