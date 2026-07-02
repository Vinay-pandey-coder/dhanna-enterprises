import React, { useState } from 'react'

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
  chevron: <><path d="M6 9l6 6 6-6"/></>,
  arrow: <><path d="M5 12h14M13 6l6 6-6 6"/></>,
}

const serviceCategories = [
  {
    icon: 'itr', color: '#1e3a8a', title: 'Income Tax (ITR)', tag: 'Most Popular',
    desc: 'Whether you are a salaried employee, a freelancer, or running a business, we handle every type of income tax return with complete accuracy. Our team also takes care of revised filings, notice replies and year-round tax planning so you stay compliant without the stress.',
    items: ['ITR-1 (Salary)', 'ITR-2 (Capital Gain)', 'ITR-3 (Business & Profession)', 'ITR-4 (Presumptive Income)', 'NRI ITR Filing', 'Revised Return', 'Defective Return Response', 'Income Tax Notice Reply', 'Tax Planning', 'ITR Computation']
  },
  {
    icon: 'gst', color: '#0f2044', title: 'GST Services',
    desc: 'From new GST registration to monthly and quarterly return filing, we manage the entire GST lifecycle for your business. We also assist with amendments, cancellations, notice replies and LUT filing for exporters — keeping your compliance worry-free.',
    items: ['GST Registration', 'GST Amendment', 'GST Cancellation', 'GST Return Filing (GSTR-1, GSTR-3B)', 'Annual Return (GSTR-9)', 'GST Notice Reply', 'GST Compliance Support', 'LUT Filing', 'GST Consultation']
  },
  {
    icon: 'account', color: '#b8860b', title: 'Accounting & Bookkeeping',
    desc: 'Good books make good decisions. We handle your day-to-day accounting, bank reconciliation, and ledger maintenance, and prepare your profit & loss and balance sheet so you always know exactly where your business stands.',
    items: ['Monthly Accounting', 'Bookkeeping', 'Bank Reconciliation', 'Ledger Maintenance', 'Profit & Loss Statement', 'Balance Sheet Preparation', 'MIS Reports', 'Zoho Books Accounting', 'Tally Accounting']
  },
  {
    icon: 'audit', color: '#0f2044', title: 'Audit & Compliance',
    desc: 'Internal and statutory audits help you catch problems before they become costly. Our team reviews your financial records, ensures TDS and GST compliance, and helps you respond confidently to any notices from authorities.',
    items: ['Internal Audit', 'Tax Audit', 'GST Audit Support', 'TDS Compliance', 'Statutory Audit', 'Compliance Management', 'Notice Handling']
  },
  {
    icon: 'biz', color: '#1e3a8a', title: 'Business Registration',
    desc: 'Starting a new venture? We help you choose and register the right business structure — from a simple proprietorship to a full private limited company — so you start on solid legal footing from day one.',
    items: ['Proprietorship Registration', 'Partnership Firm Registration', 'LLP Registration', 'OPC Registration', 'Private Limited Company Registration', 'Shop & Establishment Registration']
  },
  {
    icon: 'msme', color: '#b8860b', title: 'MSME / Udyam Services',
    desc: 'Registering as MSME under Udyam opens the door to government subsidies, easier loans, and priority benefits. We handle your registration, updates, and certificate verification end to end.',
    items: ['Udyam Registration', 'Udyam Update', 'Udyam Certificate Download', 'Udyam Verification']
  },
]

const moreCategories = [
  {
    icon: 'fssai', color: '#b8860b', title: 'FSSAI Services',
    desc: 'If your business deals with food in any form, FSSAI licensing is mandatory. We handle new registration, license upgrades, renewals and annual returns so you stay legally compliant.',
    items: ['FSSAI Registration', 'State License', 'Central License', 'FSSAI Renewal', 'FSSAI Modification', 'FSSAI Annual Return']
  },
  {
    icon: 'iec', color: '#0f2044', title: 'Import Export Services',
    desc: 'Planning to import or export goods? An IEC code is your first step. We assist with registration, modifications, renewals, and the documentation needed for smooth cross-border trade.',
    items: ['IEC Registration', 'IEC Modification', 'IEC Renewal Support', 'Export Documentation', 'Import Compliance']
  },
  {
    icon: 'trademark', color: '#b8860b', title: 'Trademark & Brand Services',
    desc: 'Protect your brand name and identity before someone else does. We handle trademark search, registration, renewals, and respond to objections on your behalf.',
    items: ['Trademark Registration', 'Trademark Search', 'Trademark Renewal', 'Trademark Objection Reply', 'Brand Name Registration']
  },
  {
    icon: 'dsc', color: '#0f2044', title: 'DSC Services',
    desc: 'A Digital Signature Certificate is required for most government filings today. We help you get a new DSC quickly, or renew and update an existing one.',
    items: ['New DSC', 'DSC Renewal', 'DSC Update']
  },
  {
    icon: 'pan', color: '#1e3a8a', title: 'PAN & TAN Services',
    desc: 'From a fresh PAN card to corrections and TAN applications for businesses deducting tax, we manage all your PAN and TAN related paperwork.',
    items: ['New PAN Card', 'PAN Correction', 'TAN Application', 'PAN Reprint']
  },
  {
    icon: 'tds', color: '#b8860b', title: 'TDS Services',
    desc: 'If you deduct tax at source, timely TDS return filing is essential. We handle filing, corrections, Form 16/16A issuance, and replies to TDS notices.',
    items: ['TDS Return Filing', 'TDS Correction', 'Form 16 & 16A', 'TDS Notice Reply']
  },
]

function ServiceCard({ service }) {
  const [expanded, setExpanded] = useState(false)
  const visibleItems = expanded ? service.items : service.items.slice(0, 4)

  return (
    <div className="group rounded-2xl p-8 transition-all duration-300 relative overflow-hidden"
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
        style={{background: service.color, color: 'white'}}>
        <Icon path={icons[service.icon]} size={26} />
      </div>
      <h3 className="text-lg font-bold mb-2" style={{color: '#0f2044'}}>{service.title}</h3>
      <p className="text-sm leading-relaxed text-gray-500 mb-5">{service.desc}</p>

      <div className="space-y-1.5 mb-4">
        {visibleItems.map(item => (
          <div key={item} className="flex items-center gap-2 text-xs text-gray-500">
            <span style={{color: '#d4a017'}}>✦</span> {item}
          </div>
        ))}
      </div>

      {service.items.length > 4 && (
        <button onClick={() => setExpanded(!expanded)}
          className="text-xs font-semibold mb-4 block transition-colors"
          style={{color: '#d4a017'}}>
          {expanded ? '− Show less' : `+${service.items.length - 4} more services`}
        </button>
      )}

      <a href="https://wa.me/918287746345" target="_blank" rel="noreferrer"
        className="inline-flex items-center gap-1 text-xs font-semibold" style={{color: '#0f2044'}}>
        Get Started <Icon path={icons.arrow} size={13}/>
      </a>
    </div>
  )
}

export default function Services() {
  const [openIndex, setOpenIndex] = useState(-1)

  return (
    <div style={{background: '#f8f7f4'}} className="py-20 px-6 min-h-screen">
      <div className="max-w-6xl mx-auto">

        <div className="text-center mb-16">
          <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{color: '#d4a017'}}>What We Offer</p>
          <h2 className="text-5xl font-bold mb-4" style={{color: '#0f2044'}}>Our Services</h2>
          <p className="text-gray-500 max-w-xl mx-auto">Comprehensive tax and financial solutions tailored for every need</p>
        </div>

        {/* ===== MAIN SERVICES ===== */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {serviceCategories.map(service => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </div>

        {/* ===== COMPLETE DIRECTORY — accordion ===== */}
        <div className="mb-10">
          <p className="text-xs font-bold tracking-widest uppercase mb-2" style={{color: '#d4a017'}}>More Services</p>
          <h3 className="text-3xl font-bold" style={{color: '#0f2044'}}>Complete Service Directory</h3>
        </div>

        <div className="space-y-3">
          {moreCategories.map((cat, i) => {
            const isOpen = openIndex === i
            return (
              <div key={cat.title} className="rounded-2xl overflow-hidden transition-all"
                style={{background: 'white', border: isOpen ? '1.5px solid #d4a017' : '1px solid #e8e4dc', boxShadow: isOpen ? '0 8px 30px rgba(212,160,23,0.12)' : '0 2px 8px rgba(0,0,0,0.03)'}}>

                <button onClick={() => setOpenIndex(isOpen ? -1 : i)}
                  className="w-full flex items-center gap-4 p-5 text-left">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                    style={{background: cat.color, color: 'white'}}>
                    <Icon path={icons[cat.icon]} size={22} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold" style={{color: '#0f2044'}}>{cat.title}</h3>
                    <p className="text-xs text-gray-400 mt-0.5">{cat.items.length} services available</p>
                  </div>
                  <span className="shrink-0 transition-transform"
                    style={{color: '#d4a017', transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)'}}>
                    <Icon path={icons.chevron} size={20} />
                  </span>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5">
                    <p className="text-sm text-gray-500 leading-relaxed mb-4">{cat.desc}</p>
                    <div className="grid sm:grid-cols-2 gap-2 pt-2" style={{borderTop: '1px solid #f0ece4'}}>
                      {cat.items.map(item => (
                        <div key={item} className="flex items-center gap-2 py-2 px-3 rounded-lg text-sm mt-2"
                          style={{background: '#f8f7f4', color: '#0f2044'}}>
                          <span style={{color: '#d4a017'}}>✦</span> {item}
                        </div>
                      ))}
                    </div>
                    <a href="https://wa.me/918287746345" target="_blank" rel="noreferrer"
                      className="inline-flex items-center gap-2 mt-4 text-sm font-semibold"
                      style={{color: '#d4a017'}}>
                      Get Started with {cat.title} <Icon path={icons.arrow} size={14}/>
                    </a>
                  </div>
                )}
              </div>
            )
          })}
        </div>

        {/* CTA Banner */}
        <div className="mt-16 rounded-3xl p-10 text-center"
          style={{background: 'linear-gradient(135deg, #0f2044, #163060)', border: '1px solid rgba(212,160,23,0.2)'}}>
          <h3 className="text-3xl font-bold text-white mb-3">Not sure which service you need?</h3>
          <p className="text-gray-400 mb-6">Talk to our experts for free — we'll guide you to the right solution.</p>
          <a href="https://wa.me/918287746345" target="_blank" rel="noreferrer"
            className="inline-block px-8 py-3 rounded-full font-semibold text-sm transition-all hover:scale-105"
            style={{background: '#d4a017', color: '#050d1a'}}>
            Free WhatsApp Consultation
          </a>
        </div>
      </div>
    </div>
  )
}