import SEO from '../../components/SEO'
import { useNavigate } from 'react-router-dom'

const services = [
  {
    title: 'New DSC',
    what: 'A Digital Signature Certificate (DSC) is an electronic form of signature used to authenticate identity for online government filings including Income Tax, GST, MCA, EPFO, and tender submissions. Class 3 DSC is now mandatory for most government portals.',
    who: ['Directors filing on MCA or ROC portal', 'Taxpayers filing income tax returns or audits', 'Businesses filing GST applications or LUT', 'Professionals filing on government portals'],
    docs: ['PAN Card', 'Aadhaar Card', 'Passport size photograph', 'Mobile number linked to Aadhaar', 'Email ID'],
    process: ['Collection of applicant details and documents', 'Filling of DSC application form', 'Video verification or Aadhaar OTP verification', 'Payment of DSC fees', 'DSC issued on USB token within 1-2 days'],
    timeline: '1-2 working days',
  },
  {
    title: 'DSC Renewal',
    what: 'DSC is typically valid for 1 or 2 years. After expiry, it must be renewed to continue using it for government filings. Expired DSC causes delays in compliance and filings. We assist with quick DSC renewal before or after expiry.',
    who: ['All DSC holders with expiring or expired certificates', 'Professionals needing continuous DSC for filings', 'Directors and signatories on government portals', 'Businesses whose filings are blocked due to expired DSC'],
    docs: ['Existing DSC token', 'PAN Card', 'Aadhaar Card', 'Passport size photograph'],
    process: ['Verification of existing DSC expiry', 'Filling of renewal application', 'Video verification or Aadhaar OTP', 'Payment of renewal fees', 'Renewed DSC updated on token'],
    timeline: '1-2 working days',
  },
  {
    title: 'DSC Update',
    what: 'DSC Update involves updating the details linked to your existing DSC such as email, mobile number, or organization details. It also covers porting DSC from one token to another or updating the DSC on government portals.',
    who: ['DSC holders with changed contact details', 'Professionals needing to update organization details', 'Users wanting to port DSC to new token', 'Directors updating DSC on MCA or income tax portal'],
    docs: ['Existing DSC token', 'PAN Card', 'Updated contact or organization details', 'Aadhaar Card for verification'],
    process: ['Assessment of update required', 'Application for detail update or token porting', 'Verification process completion', 'Update of DSC details or porting to new token', 'Confirmation of updated DSC'],
    timeline: '1-2 working days',
  },
]

export default function Dsc() {
  const navigate = useNavigate()
  const handleGetStarted = () => {
    const token = localStorage.getItem('userToken')
    if (token) window.open('https://wa.me/918287746345', '_blank')
    else navigate('/login')
  }

  return (
    <>
<SEO
  title="DSC Services"
  description="New Digital Signature Certificate, DSC renewal and DSC update services for all government filings by Dhanna Enterprises."
  keywords="DSC certificate, digital signature certificate, DSC renewal, new DSC India, DSC update"
/>
      <div style={{background: '#f8f7f4'}} className="min-h-screen">
        <div className="py-16 px-6" style={{background: 'linear-gradient(135deg, #0f2044, #163060)'}}>
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">
            <div>

            <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{color: '#08d24f'}}>Our Services</p>
<h1 className="text-5xl font-bold text-white mb-4">DSC Services</h1>
<p className="text-gray-300 max-w-2xl">New DSC, renewal and update services — quick and hassle-free digital signature certificates for all government filings.</p>
            </div>
    <div className="hidden md:flex justify-center">
      <img
        src="/images/dsc.webp"
        alt="DSC Services"
        className="w-full max-w-sm object-contain rounded-2xl"
        style={{maxHeight: '280px'}}
      />
    </div>
          </div>
        </div>

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

        <div className="max-w-5xl mx-auto px-6 pb-16">
          <div className="rounded-3xl p-10 text-center"
            style={{background: 'linear-gradient(135deg, #0f2044, #163060)', border: '1px solid rgba(212,160,23,0.2)'}}>
<h3 className="text-3xl font-bold text-white mb-3">Need a Digital Signature Certificate?</h3>
<p className="text-gray-400 mb-6">Get your DSC issued quickly — we handle everything from application to delivery.</p>
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