import SEO from '../../components/SEO'
import { useNavigate } from 'react-router-dom'

const services = [
  {
    title: 'Udyam Registration',
    what: 'Udyam Registration is the official government registration for Micro, Small and Medium Enterprises (MSMEs) in India. It replaces the old Udyog Aadhaar and provides businesses with a unique Udyam Registration Number (URN) and certificate.',
    who: ['Micro enterprises with investment up to Rs. 1 crore', 'Small enterprises with investment up to Rs. 10 crores', 'Medium enterprises with investment up to Rs. 50 crores', 'Manufacturers and service providers wanting MSME benefits'],
    docs: ['Aadhaar Card of proprietor/partner/director', 'PAN Card of business', 'GSTIN (if registered)', 'Bank account details', 'Business activity details'],
    process: ['Collection of Aadhaar and business details', 'Filing on Udyam Registration portal', 'OTP verification on Aadhaar-linked mobile', 'Automatic PAN and GST verification', 'Udyam Registration Certificate issued instantly'],
    timeline: '1 working day',
  },
  {
    title: 'Udyam Update',
    what: 'Udyam Update allows registered MSMEs to modify their registration details such as business activity, address, investment details, or turnover. Keeping Udyam registration updated ensures you continue to avail MSME benefits correctly.',
    who: ['MSMEs with change in business activity', 'Businesses with change in investment or turnover', 'MSMEs with change in address or contact details', 'Businesses that have upgraded from micro to small or medium'],
    docs: ['Existing Udyam Registration Number', 'Aadhaar Card of proprietor/partner/director', 'Updated business details and supporting documents'],
    process: ['Login to Udyam Registration portal', 'Verification via Aadhaar OTP', 'Updating required fields', 'Submission and verification', 'Updated certificate generated'],
    timeline: '1 working day',
  },
  {
    title: 'Udyam Certificate Download',
    what: 'The Udyam Registration Certificate is required for availing government schemes, bank loans, tenders, and subsidies. We assist in downloading and verifying the official Udyam certificate from the government portal.',
    who: ['MSMEs needing certificate for bank loans', 'Businesses applying for government tenders', 'Companies needing certificate for subsidies', 'Businesses requiring proof of MSME status'],
    docs: ['Udyam Registration Number', 'Aadhaar-linked mobile number for OTP'],
    process: ['Login to Udyam portal with registration number', 'OTP verification', 'Certificate download in PDF format', 'Verification of certificate details', 'Sharing with client'],
    timeline: 'Same day',
  },
  {
    title: 'Udyam Verification',
    what: 'Udyam Verification confirms the authenticity of an MSME registration — used by banks, government departments, and large companies before extending benefits, loans, or vendor registration to an MSME.',
    who: ['Banks verifying MSME status before loan disbursement', 'Government departments verifying vendors', 'Large companies verifying MSME suppliers', 'MSMEs wanting to confirm their registration is valid'],
    docs: ['Udyam Registration Number to be verified'],
    process: ['Search on Udyam Registration portal', 'Verification of registration details', 'Confirmation of enterprise classification', 'Preparation of verification report', 'Sharing with client or requesting authority'],
    timeline: 'Same day',
  },
]

export default function Msme() {
  const navigate = useNavigate()
  const handleGetStarted = () => {
    const token = localStorage.getItem('userToken')
    if (token) window.open('https://wa.me/918287746345', '_blank')
    else navigate('/login')
  }

  return (
    <>
      <SEO
        title="MSME / Udyam Services"
        description="Udyam Registration, update, certificate download and verification services for MSMEs by Dhanna Enterprises."
        keywords="MSME registration, Udyam registration, Udyam certificate, MSME benefits, small business registration India"
      />
      <div style={{background: '#f8f7f4'}} className="min-h-screen">
        <div className="py-16 px-6" style={{background: 'linear-gradient(135deg, #0f2044, #163060)'}}>
          <div className="max-w-5xl mx-auto">
            <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{color: '#d4a017'}}>Our Services</p>
            <h1 className="text-5xl font-bold text-white mb-4">MSME / Udyam Services</h1>
            <p className="text-gray-300 max-w-2xl">Quick and accurate Udyam Registration to unlock government subsidies, priority lending, and business benefits for your enterprise.</p>
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
                  <h4 className="text-xs font-bold tracking-widest uppercase mb-3" style={{color: '#d4a017'}}>Who Needs This</h4>
                  <ul className="space-y-1.5">{s.who.map(item => <li key={item} className="flex items-start gap-2 text-sm text-gray-600"><span style={{color: '#d4a017'}}>✦</span>{item}</li>)}</ul>
                </div>
                <div>
                  <h4 className="text-xs font-bold tracking-widest uppercase mb-3" style={{color: '#d4a017'}}>Documents Required</h4>
                  <ul className="space-y-1.5">{s.docs.map(item => <li key={item} className="flex items-start gap-2 text-sm text-gray-600"><span style={{color: '#d4a017'}}>✦</span>{item}</li>)}</ul>
                </div>
                <div>
                  <h4 className="text-xs font-bold tracking-widest uppercase mb-3" style={{color: '#d4a017'}}>Our Process</h4>
                  <ul className="space-y-1.5">{s.process.map((step, j) => <li key={step} className="flex items-start gap-2 text-sm text-gray-600"><span className="font-bold shrink-0" style={{color: '#d4a017'}}>{j+1}.</span>{step}</li>)}</ul>
                  <p className="text-xs mt-3 font-semibold" style={{color: '#0f2044'}}>Timeline: <span className="font-normal text-gray-500">{s.timeline}</span></p>
                </div>
              </div>
              <div className="ml-14 mt-6 pt-5" style={{borderTop: '1px solid #f0ece4'}}>
                <button onClick={handleGetStarted}
                  className="px-6 py-2.5 rounded-full text-sm font-semibold transition-all hover:scale-105"
                  style={{background: '#d4a017', color: '#050d1a', border: 'none', cursor: 'pointer'}}>
                  Get Started with {s.title}
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="max-w-5xl mx-auto px-6 pb-16">
          <div className="rounded-3xl p-10 text-center"
            style={{background: 'linear-gradient(135deg, #0f2044, #163060)', border: '1px solid rgba(212,160,23,0.2)'}}>
            <h3 className="text-3xl font-bold text-white mb-3">Ready to register your MSME?</h3>
            <p className="text-gray-400 mb-6">Get your Udyam Registration done today and start availing government benefits.</p>
            <button onClick={handleGetStarted}
              className="px-10 py-4 rounded-full font-bold text-sm transition-all hover:scale-105"
              style={{background: '#d4a017', color: '#050d1a', border: 'none', cursor: 'pointer'}}>
              Free WhatsApp Consultation
            </button>
          </div>
        </div>
      </div>
    </>
  )
}