import React from 'react'
import SEO from '../components/SEO'

function Icon({ path, size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      {path}
    </svg>
  )
}

const icons = {
  award: <><path d="M8 21l4-3 4 3"/><circle cx="12" cy="8" r="6"/><path d="M9.5 11.5 8 21l4-3 4 3-1.5-9.5"/></>,
  clock: <><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 3"/></>,
  lock: <><rect x="4" y="11" width="16" height="9" rx="2"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/></>,
  rupee: <><path d="M6 5h12M6 9h12M6 5c4 0 6 1.5 6 4s-2 4-6 4h6l4 7"/></>,
  headset: <><path d="M3 13a9 9 0 0 1 18 0"/><rect x="3" y="13" width="4" height="7" rx="1"/><rect x="17" y="13" width="4" height="7" rx="1"/></>,
  check: <><circle cx="12" cy="12" r="9"/><path d="M8 12l3 3 5-6"/></>,
  phone: <><path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z"/></>,
  mail: <><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/></>,
  globe: <><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18"/></>,
  arrow: <><path d="M5 12h14M13 6l6 6-6 6"/></>,
}

const About = () => {
  return (
    <>
    <SEO
  title="About Us"
  description="Learn about Dhanna Enterprises — a trusted financial and business consultancy providing GST, ITR, accounting and compliance services across India."
  keywords="about Dhanna Enterprises, tax consultancy, financial services India"
/>
    <div style={{background: '#f8f7f4'}} className="min-h-screen">

      {/* Header band */}
      <div className="py-20 px-6" style={{background: '#081729'}}>
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-10 items-center">
          <div className="md:col-span-2">
            <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{color: '#08d24f'}}>Our Story</p>
            <h2 className="text-5xl font-bold mb-5 text-white">About Dhanna Enterprises</h2>
            <p className="text-gray-300 leading-relaxed">
              A trusted financial and business consultancy firm providing GST Registration, GST Return Filing,
              Income Tax Return (ITR), Accounting & Bookkeeping, MSME Registration, FSSAI License, IEC Registration,
              DSC Services, Trademark Registration, and other business compliance solutions.
            </p>
          </div>
          <div className="border-l pl-8" style={{borderColor: 'rgba(212,160,23,0.3)'}}>
            <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{color: '#08d24f'}}>Our Goal</p>
            <p className="text-white text-base leading-relaxed">
              Accurate, timely, and reliable services to individuals, startups, and businesses across India.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-20">

        {/* Why Choose Us — numbered list */}
        <div className="mb-20">
          <div className="flex items-end justify-between mb-10 flex-wrap gap-3">
            <div>
              <p className="text-xs font-bold tracking-widest uppercase mb-2" style={{color: '#007B2B'}}>Why Choose Us</p>
              <h3 className="text-4xl font-bold" style={{color: '#0f2044'}}>What Makes Us Different</h3>
            </div>
          </div>

          <div className="divide-y" style={{borderColor: '#e8e4dc'}}>
            {[
              { icon: 'award', title: 'Professional Services', desc: 'Expert team handling all your compliance and financial needs with precision.' },
              { icon: 'clock', title: 'Timely Delivery', desc: 'We respect your deadlines and ensure work is completed on time, every time.' },
              { icon: 'lock', title: 'Confidential Data Handling', desc: 'Your personal and business data is handled with the highest level of security.' },
              { icon: 'rupee', title: 'Affordable Pricing', desc: 'Quality services at transparent and pocket-friendly prices — no hidden charges.' },
              { icon: 'headset', title: 'Dedicated Support', desc: 'Our team is always available to answer queries and guide you through every step.' },
              { icon: 'check', title: '100% Compliance', desc: 'All filings done accurately as per latest government rules and regulations.' },
            ].map((item, i) => (
              <div key={item.title} className="flex items-center gap-6 py-6 group cursor-default" style={{borderColor: '#e8e4dc'}}>
                <span className="text-3xl font-bold w-12 shrink-0" style={{color: '#007B2B', fontFamily: 'Georgia, serif'}}>
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div className="w-11 h-11 rounded-full flex items-center justify-center shrink-0 transition-colors"
                  style={{background: '#102d50', color: '#fff'}}>
                  <Icon path={icons[item.icon]} size={19} />
                </div>
                <div className="flex-1">
                  <h4 className="font-bold mb-1" style={{color: '#0f2044'}}>{item.title}</h4>
                  <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Services — pill tags */}
        <div className="mb-20">
          <p className="text-xs font-bold tracking-widest uppercase mb-2" style={{color: '#08d24f'}}>What We Offer</p>
          <h3 className="text-4xl font-bold mb-8" style={{color: '#0f2044'}}>Our Services</h3>

          <div className="flex flex-wrap gap-3">
            {[
              'GST Registration', 'GST Return Filing', 'Income Tax Return (ITR)',
              'Accounting & Bookkeeping', 'MSME Registration', 'FSSAI License',
              'IEC Registration', 'DSC Services', 'Trademark Registration',
            ].map(service => (
              <span key={service}
                className="px-5 py-3 rounded-full text-sm font-semibold transition-all cursor-default"
                style={{background: 'white', color: '#0f2044', border: '1.5px solid #e8e4dc'}}
                onMouseOver={e => { e.currentTarget.style.background = '#0f2044'; e.currentTarget.style.color = 'white'; e.currentTarget.style.borderColor = '#0f2044' }}
                onMouseOut={e => { e.currentTarget.style.background = 'white'; e.currentTarget.style.color = '#0f2044'; e.currentTarget.style.borderColor = '#e8e4dc' }}>
                {service}
              </span>
            ))}
          </div>
        </div>

        {/* Contact strip */}
        <div className="rounded-3xl overflow-hidden grid md:grid-cols-2"
          style={{border: '1px solid #e8e4dc', boxShadow: '0 4px 24px rgba(0,0,0,0.06)'}}>

          <div className="p-10" style={{background: 'linear-gradient(135deg, #0f2044, #163060)'}}>
            <p className="text-xs font-bold tracking-widest uppercase mb-2" style={{color: '#08d24f'}}>Reach Us</p>
            <h3 className="text-3xl font-bold mb-5 text-white">Let's Talk</h3>
            <p className="text-gray-300 text-sm leading-relaxed mb-8">
              Have a question or ready to get started? Reach out — our team responds quickly.
            </p>
            <a href="https://wa.me/918287746345" target="_blank" rel="noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-bold text-sm transition-all hover:gap-3"
              style={{background: '#08d24f', color: '#fff'}}>
              Chat on WhatsApp <Icon path={icons.arrow} size={16}/>
            </a>
          </div>

          <div className="p-10 grid grid-cols-2 gap-6" style={{background: 'white'}}>
            {[
              { icon: 'phone', label: 'Phone / WhatsApp', value: '8287746345', href: 'tel:8287746345' },
              { icon: 'mail', label: 'Email', value: 'support.dhanna@gmail.com', href: 'mailto:support.dhanna@gmail.com' },
              { icon: 'globe', label: 'Website', value: 'dhannaenterprises.in', href: 'https://dhanna-enterprises.vercel.app/' },
              { icon: 'clock', label: 'Hours', value: 'Mon–Sat | 9–7', href: null },
            ].map(item => (
              <div key={item.label}>
                <div className="w-9 h-9 rounded-lg flex items-center justify-center mb-3"
                  style={{background: '#102d50', color: '#fff'}}>
                  <Icon path={icons[item.icon]} size={16} />
                </div>
                <p className="text-xs text-gray-400 mb-0.5">{item.label}</p>
                {item.href ? (
                  <a href={item.href} className="text-sm font-bold break-all transition-colors"
                    style={{color: '#0f2044'}}
                    onMouseOver={e => e.currentTarget.style.color='#d4a017'}
                    onMouseOut={e => e.currentTarget.style.color='#0f2044'}>
                    {item.value}
                  </a>
                ) : (
                  <p className="text-sm font-bold" style={{color: '#0f2044'}}>{item.value}</p>
                )}
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
    </>
  )
}

export default About