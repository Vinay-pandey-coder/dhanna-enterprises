import React from 'react'
import { useNavigate, Link } from 'react-router-dom'
import SEO from '../components/SEO'

function Icon({ path, size = 22 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      {path}
    </svg>
  )
}

const icons = {
  gst: <><rect x="3" y="4" width="18" height="16" rx="2"/><path d="M7 9h6M7 13h10"/></>,
  itr: <><rect x="4" y="3" width="16" height="18" rx="2"/><path d="M8 7h8M8 11h5M8 15h8"/></>,
  account: <><path d="M3 17l5-5 4 4 8-8"/><path d="M14 8h6v6"/></>,
  audit: <><path d="M12 3l8 4v5c0 5-3.5 8-8 9-4.5-1-8-4-8-9V7l8-4z"/><path d="M9 12l2 2 4-4"/></>,
  msme: <><path d="M3 21V10l5-4 5 4v11"/><path d="M13 21V7l5-3 3 2v15"/></>,
  fssai: <><circle cx="12" cy="12" r="9"/><path d="M8 12h8M12 8v8"/></>,
  iec: <><path d="M3 12h18M12 3l9 9-9 9M3 3l9 9-9 9"/></>,
  biz: <><path d="M3 21h18"/><path d="M5 21V8l7-5 7 5v13"/><path d="M9 21v-6h6v6"/></>,
  trademark: <><circle cx="12" cy="9" r="6"/><path d="M9 14l-2 7 5-3 5 3-2-7"/></>,
  dsc: <><rect x="5" y="3" width="14" height="18" rx="2"/><path d="M9 8h6M9 12h6M9 16h3"/></>,
  pan: <><rect x="2" y="6" width="20" height="12" rx="2"/><circle cx="8" cy="12" r="2"/><path d="M14 10h4M14 14h4"/></>,
  tds: <><path d="M6 5h12M6 9h12M6 5c4 0 6 1.5 6 4s-2 4-6 4h6l4 7"/></>,
  arrow: <><path d="M5 12h14M13 6l6 6-6 6"/></>,
}

const allServices = [
  {
    icon: 'itr', color: '#1e3a8a', title: 'Income Tax (ITR)', tag: 'Most Popular',
    desc: 'Salary, business, capital gains, NRI returns — filed accurately and on time with complete tax planning support.',
    link: '/services/itr'
  },
  {
    icon: 'gst', color: '#0f2044', title: 'GST Services',
    desc: 'End-to-end GST management — registration, monthly filings, amendments, notice replies and LUT filing for exporters.',
    link: '/services/gst'
  },
  {
    icon: 'account', color: '#b8860b', title: 'Accounting & Bookkeeping',
    desc: 'Day-to-day accounting, reconciliation, P&L and balance sheet preparation so you always know where your business stands.',
    link: '/services/accounting'
  },
  {
    icon: 'audit', color: '#0f2044', title: 'Audit & Compliance',
    desc: 'Internal and statutory audits, TDS compliance and notice handling to keep your business legally protected.',
    link: '/services/audit'
  },
  {
    icon: 'biz', color: '#1e3a8a', title: 'Business Registration',
    desc: 'From proprietorship to private limited — we help you choose and register the right business structure from day one.',
    link: '/services/business-registration'
  },
  {
    icon: 'msme', color: '#b8860b', title: 'MSME / Udyam Services',
    desc: 'Quick Udyam registration to unlock government subsidies, easier loans and priority benefits for your business.',
    link: '/services/msme'
  },
  {
    icon: 'fssai', color: '#b8860b', title: 'FSSAI Services',
    desc: 'Registration, license upgrades, renewals and annual returns for all food businesses.',
    link: '/services/fssai'
  },
  {
    icon: 'iec', color: '#0f2044', title: 'Import Export Services',
    desc: 'IEC registration, modifications, renewals and export documentation for smooth cross-border trade.',
    link: '/services/iec'
  },
  {
    icon: 'trademark', color: '#b8860b', title: 'Trademark & Brand Services',
    desc: 'Protect your brand — trademark search, registration, renewals and objection replies.',
    link: '/services/trademark'
  },
  {
    icon: 'dsc', color: '#0f2044', title: 'DSC Services',
    desc: 'New DSC, renewal and update for all government filing requirements.',
    link: '/services/dsc'
  },
  {
    icon: 'pan', color: '#1e3a8a', title: 'PAN & TAN Services',
    desc: 'New PAN, corrections, TAN application and reprint — quick and hassle-free.',
    link: '/services/pan-tan'
  },
  {
    icon: 'tds', color: '#b8860b', title: 'TDS Services',
    desc: 'TDS return filing, corrections, Form 16/16A and notice replies handled accurately.',
    link: '/services/tds'
  },
  {
  icon: 'biz', color: '#1e3a8a', title: 'Shop Act Registration',
  desc: 'Complete Shop & Establishment Act registration — new registration, renewal, amendments and compliance for businesses across India.',
  link: '/services/shop-act'
},
]

export default function Services() {
  const navigate = useNavigate()

  const handleGetStarted = () => {
    const token = localStorage.getItem('userToken')
    if (token) {
      window.open('https://wa.me/918287746345', '_blank')
    } else {
      navigate('/login')
    }
  }

  return (
    <>
      <SEO
        title="Our Services"
        description="Dhanna Enterprises offers GST Registration, ITR Filing, Accounting, Audit, MSME Registration, FSSAI License, Trademark Registration and more."
        keywords="GST services, ITR filing, accounting bookkeeping, MSME registration, FSSAI license, trademark registration, DSC services"
      />
      <div style={{background: '#f8f7f4'}} className="py-20 px-6 min-h-screen">
        <div className="max-w-6xl mx-auto">

          <div className="text-center mb-16">
            <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{color: '#007B2B'}}>What We Offer</p>
            <h2 className="text-5xl font-bold mb-4" style={{color: '#0f2044'}}>Our Services</h2>
            <p className="text-gray-500 max-w-xl mx-auto">Comprehensive tax and financial solutions tailored for every need</p>
          </div>

          {/* ALL 12 SERVICES — same card design */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {allServices.map(service => (
              <div key={service.title}
                className="rounded-2xl p-8 transition-all duration-300 relative overflow-hidden flex flex-col"
                style={{background: 'white', border: '1px solid #e8e4dc', boxShadow: '0 2px 12px rgba(0,0,0,0.04)'}}
                onMouseOver={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 16px 32px rgba(15,32,68,0.12)' }}
                onMouseOut={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 2px 12px rgba(0,0,0,0.04)' }}>

                {service.tag && (
                  <span className="absolute top-5 right-5 text-xs font-semibold px-2.5 py-1 rounded-full"
                    style={{background: 'rgba(212,160,23,0.15)', color: '#d4a017'}}>
                    {service.tag}
                  </span>
                )}

                <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-5"
                  style={{background: '#144d92', color: 'white'}}>
                  <Icon path={icons[service.icon]} size={26} />
                </div>
                <h3 className="text-lg font-bold mb-2" style={{color: '#0f2044'}}>{service.title}</h3>
                <p className="text-sm leading-relaxed text-gray-500 mb-6 flex-1">{service.desc}</p>

                <div className="flex items-center justify-between mt-auto">
                  <button onClick={handleGetStarted}
                    className="text-xs font-semibold"
                    style={{color: '#0f2044', background: 'none', border: 'none', padding: 0, cursor: 'pointer'}}>
                    Get Started
                  </button>
                  <Link to={service.link}
                    className="inline-flex items-center gap-1 text-xs font-semibold px-3 py-1.5 rounded-lg transition-all"
                    style={{background: '#0f2044', color: '#fff'}}>
                    View More <Icon path={icons.arrow} size={12}/>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Banner */}
          <div className="rounded-3xl p-10 text-center"
            style={{background: 'linear-gradient(135deg, #0f2044, #163060)', border: '1px solid rgba(212,160,23,0.2)'}}>
            <h3 className="text-3xl font-bold text-white mb-3">Not sure which service you need?</h3>
            <p className="text-gray-400 mb-6">Talk to our experts for free — we'll guide you to the right solution.</p>
            <button onClick={handleGetStarted}
              className="inline-block px-8 py-3 rounded-full font-semibold text-sm transition-all hover:scale-105"
              style={{background: '#007B2B', color: 'white', border: 'none', cursor: 'pointer'}}>
              Free WhatsApp Consultation
            </button>
          </div>
        </div>
      </div>
    </>
  )
}