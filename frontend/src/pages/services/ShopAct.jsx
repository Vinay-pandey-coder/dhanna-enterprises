import SEO from '../../components/SEO'
import { useNavigate } from 'react-router-dom'

const services = [
  {
    title: 'New Shop Act Registration',
    what: 'Shop & Establishment Act Registration is mandatory for all shops, offices, startups, and commercial establishments. It provides legal recognition to your business and is required for opening a business bank account and obtaining other registrations.',
    who: ['Retail shops and stores', 'Offices and service providers', 'Startups and small businesses', 'Proprietorship and partnership firms'],
    docs: ['Aadhaar Card and PAN Card of owner', 'Business address proof (rent agreement/ownership)', 'Photographs of establishment', 'Business commencement date', 'Details of employees (if any)'],
    process: ['Collection of owner and business details', 'Preparation of registration application', 'Filing with local municipal authority or labour department', 'Payment of registration fees', 'Shop & Establishment Certificate issued'],
    timeline: '3-7 working days',
  },
  {
    title: 'Shop & Establishment Certificate',
    what: 'The Shop & Establishment Certificate is the official document issued after successful registration under the Shop & Establishment Act. It serves as proof of legal existence of your business and is required for various business purposes.',
    who: ['Newly registered businesses needing certificate', 'Businesses opening bank accounts', 'Companies applying for other licenses', 'Establishments needing proof of legal status'],
    docs: ['Completed Shop Act registration', 'Application acknowledgment number', 'Owner identity proof'],
    process: ['Verification of registration status', 'Download of certificate from government portal', 'Physical certificate collection if required', 'Verification of all details on certificate', 'Sharing with client'],
    timeline: 'Same day after registration approval',
  },
  {
    title: 'Registration Renewal',
    what: 'Shop & Establishment registration must be renewed periodically as per state regulations — annually or every 1-5 years depending on the state. Timely renewal avoids penalties and ensures your business remains legally compliant.',
    who: ['All registered shops and establishments', 'Businesses with expiring Shop Act license', 'Companies wanting to avoid compliance penalties', 'Establishments with annual renewal requirement'],
    docs: ['Existing Shop Act registration certificate', 'Updated business details (if changed)', 'Employee details for the renewal period', 'Renewal fee payment details'],
    process: ['Verification of renewal due date', 'Preparation of renewal application', 'Filing with concerned authority', 'Payment of renewal fees', 'Renewed certificate issued'],
    timeline: '3-7 working days',
  },
  {
    title: 'Amendment & Modification',
    what: 'Any change in business details such as address, owner name, nature of business, or number of employees requires an amendment to the Shop Act registration. We handle all types of amendments quickly.',
    who: ['Businesses with change in address', 'Establishments with change in ownership', 'Businesses with change in number of employees', 'Companies with change in nature of business'],
    docs: ['Existing Shop Act certificate', 'Documents supporting the change', 'New address proof (if address change)', 'Updated owner details (if ownership change)'],
    process: ['Identification of amendment required', 'Preparation of amendment application', 'Filing with concerned authority', 'Processing of amendment', 'Amended certificate issued'],
    timeline: '5-10 working days',
  },
  {
    title: 'Compliance Assistance',
    what: 'Ongoing compliance assistance ensures your establishment follows all rules under the Shop & Establishment Act — including working hours, employee registers, leave records, and timely renewals throughout the year.',
    who: ['Businesses with multiple employees', 'Establishments undergoing labour department inspection', 'Companies needing ongoing compliance support', 'Businesses wanting to avoid penalties'],
    docs: ['Shop Act registration certificate', 'Employee attendance and leave records', 'Salary and wage registers', 'Working hours details'],
    process: ['Review of current compliance status', 'Identification of compliance gaps', 'Preparation of required registers and records', 'Guidance on ongoing compliance requirements', 'Support during inspections if required'],
    timeline: 'Ongoing support as required',
  },
  {
    title: 'Documentation Support',
    what: 'We provide complete documentation support for Shop Act registration — from preparing applications and affidavits to organizing all required documents and ensuring everything is in order for smooth and quick registration.',
    who: ['First-time business owners unfamiliar with documentation', 'Businesses facing document rejection issues', 'Startups needing complete registration guidance', 'Establishments in multiple states needing documentation'],
    docs: ['All identity and address proofs', 'Business details and incorporation documents', 'Premises and lease documents', 'Photographs as required'],
    process: ['Checklist preparation for specific state requirements', 'Document collection and verification', 'Preparation of application forms', 'Organizing complete document set', 'Submission support and follow-up'],
    timeline: '1-2 working days for documentation',
  },
]

const states = ['Delhi', 'Haryana', 'Uttar Pradesh', 'Rajasthan', 'Maharashtra', 'Gujarat', 'Punjab', 'Madhya Pradesh', 'Uttarakhand', 'Himachal Pradesh']

export default function ShopAct() {
  const navigate = useNavigate()
  const handleGetStarted = () => {
    const token = localStorage.getItem('userToken')
    if (token) window.open('https://wa.me/918287746345', '_blank')
    else navigate('/login')
  }

  return (
    <>
      <SEO
        title="Shop Act Registration Services"
        description="Shop & Establishment Act registration, renewal, amendment and compliance assistance for businesses across India by Dhanna Enterprises."
        keywords="shop act registration, shop establishment certificate, shop act renewal, shop act Delhi, shop act Maharashtra"
      />
      <div style={{background: '#f8f7f4'}} className="min-h-screen">

        {/* Header */}
        <div className="py-16 px-6" style={{background: 'linear-gradient(135deg, #0f2044, #163060)'}}>
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{color: '#08d24f'}}>Our Services</p>
              <h1 className="text-5xl font-bold text-white mb-4">Shop Act Registration</h1>
              <p className="text-gray-300 max-w-2xl">Complete Shop & Establishment Act registration services — new registration, renewal, amendments and compliance assistance for businesses across India.</p>
            </div>
                            <div className="hidden md:flex justify-center">
      <img
        src="/images/shop.webp"
        alt="SHOP Services"
        className="w-full max-w-sm object-contain rounded-2xl"
        style={{maxHeight: '280px'}}
      />
    </div>
            {/* States covered */}
            <div className="hidden md:block rounded-2xl p-6" style={{background: 'rgba(255,255,255,0.07)'}}>
              <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{color: '#08d24f'}}>States Covered</p>
              <div className="flex flex-wrap gap-2">
                {states.map(state => (
                  <span key={state} className="text-xs px-3 py-1 rounded-full text-white"
                    style={{background: 'rgba(212,160,23,0.2)', border: '1px solid rgba(212,160,23,0.3)'}}>
                    {state}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Services */}
        <div className="max-w-5xl mx-auto px-6 py-16 space-y-12">
          {services.map((s, i) => (
            <div key={s.title} className="rounded-2xl p-8"
              style={{background: 'white', border: '1px solid #e8e4dc', boxShadow: '0 2px 12px rgba(0,0,0,0.04)'}}>
              <div className="flex items-start gap-4 mb-6">
                <span className="text-3xl font-bold shrink-0 w-10" style={{color: 'rgba(15,32,68,0.15)', fontFamily: 'Georgia, serif'}}>
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h2 className="text-2xl font-bold" style={{color: '#0f2044'}}>{s.title}</h2>
              </div>
              <p className="text-gray-600 leading-relaxed mb-6 ml-14">{s.what}</p>
              <div className="ml-14 grid md:grid-cols-3 gap-6">
                <div>
                  <h4 className="text-xs font-bold tracking-widest uppercase mb-3" style={{color: '#08d24f'}}>Who Needs This</h4>
                  <ul className="space-y-1.5">{s.who.map(item => <li key={item} className="flex items-start gap-2 text-sm text-gray-600"><span style={{color: '#08d24f'}}>✦</span>{item}</li>)}</ul>
                </div>
                <div>
                  <h4 className="text-xs font-bold tracking-widest uppercase mb-3" style={{color: '#08d24f'}}>Documents Required</h4>
                  <ul className="space-y-1.5">{s.docs.map(item => <li key={item} className="flex items-start gap-2 text-sm text-gray-600"><span style={{color: '#08d24f'}}>✦</span>{item}</li>)}</ul>
                </div>
                <div>
                  <h4 className="text-xs font-bold tracking-widest uppercase mb-3" style={{color: '#08d24f'}}>Our Process</h4>
                  <ul className="space-y-1.5">{s.process.map((step, j) => <li key={step} className="flex items-start gap-2 text-sm text-gray-600"><span className="font-bold shrink-0" style={{color: '#08d24f'}}>{j+1}.</span>{step}</li>)}</ul>
                  <p className="text-xs mt-3 font-semibold" style={{color: '#0f2044'}}>Timeline: <span className="font-normal text-gray-500">{s.timeline}</span></p>
                </div>
              </div>
              <div className="ml-14 mt-6 pt-5" style={{borderTop: '1px solid #f0ece4'}}>
                <button onClick={handleGetStarted}
                  className="px-6 py-2.5 rounded-full text-sm font-semibold transition-all hover:scale-105"
                  style={{background: '#08d24f', color: '#050d1a', border: 'none', cursor: 'pointer'}}>
                  Get Started with {s.title}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="max-w-5xl mx-auto px-6 pb-16">
          <div className="rounded-3xl p-10 text-center"
            style={{background: 'linear-gradient(135deg, #0f2044, #163060)', border: '1px solid rgba(212,160,23,0.2)'}}>
            <h3 className="text-3xl font-bold text-white mb-3">Need Shop Act Registration?</h3>
            <p className="text-gray-400 mb-6">Get your Shop & Establishment registration done quickly — we cover 10+ states across India.</p>
            <button onClick={handleGetStarted}
              className="px-10 py-4 rounded-full font-bold text-sm transition-all hover:scale-105"
              style={{background: '#08d24f', color: '#050d1a', border: 'none', cursor: 'pointer'}}>
              Free WhatsApp Consultation
            </button>
          </div>
        </div>
      </div>
    </>
  )
}