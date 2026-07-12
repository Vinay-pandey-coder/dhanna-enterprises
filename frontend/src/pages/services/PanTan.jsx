import SEO from '../../components/SEO'
import { useNavigate } from 'react-router-dom'

const services = [
  {
    title: 'New PAN Card',
    what: 'PAN (Permanent Account Number) is a 10-digit alphanumeric identifier issued by the Income Tax Department. It is mandatory for filing income tax returns, opening bank accounts, making investments, and most financial transactions above Rs. 50,000.',
    who: ['Individuals filing income tax for the first time', 'New businesses requiring PAN for registration', 'Foreign nationals with income in India', 'Minors needing PAN for investments'],
    docs: ['Aadhaar Card (for e-PAN)', 'Proof of identity (passport/voter ID/driving license)', 'Proof of address', 'Proof of date of birth', 'Passport size photograph'],
    process: ['Collection of applicant details', 'Filing of Form 49A (for Indian citizens) or 49AA (for foreigners)', 'Submission on NSDL or UTIITSL portal', 'Payment of PAN card fees', 'PAN allotted in 5-7 days — physical card in 15 days'],
    timeline: 'e-PAN in 5-7 days — physical card in 15-20 days',
  },
  {
    title: 'PAN Correction',
    what: 'PAN Correction is needed when there are errors in name, date of birth, address, or father\'s name on the existing PAN card. Incorrect PAN details cause issues in income tax filing, bank KYC, and other financial processes.',
    who: ['PAN holders with name spelling errors', 'Individuals with wrong date of birth on PAN', 'Persons with change in name after marriage', 'PAN holders needing address or father\'s name correction'],
    docs: ['Existing PAN card', 'Proof of correct details (Aadhaar/passport/birth certificate)', 'Marriage certificate (for name change after marriage)', 'Passport size photograph'],
    process: ['Collection of existing PAN and correction documents', 'Filing of correction request on NSDL or UTIITSL portal', 'Upload of supporting documents', 'Payment of correction fees', 'Corrected PAN card dispatched'],
    timeline: '15-20 working days',
  },
  {
    title: 'TAN Application',
    what: 'TAN (Tax Deduction and Collection Account Number) is a 10-digit alphanumeric number required by businesses and individuals who are required to deduct TDS or collect TCS. It is mandatory for filing TDS returns and issuing Form 16/16A.',
    who: ['All businesses deducting TDS on salary or payments', 'Companies making payments to contractors or professionals', 'Organizations paying rent above Rs. 2.4 lakhs per year', 'Businesses collecting TCS on specified transactions'],
    docs: ['PAN Card of business/applicant', 'Business registration proof', 'Address proof of business', 'Authorized signatory details'],
    process: ['Collection of business and applicant details', 'Filing of Form 49B on NSDL portal', 'Payment of TAN application fees', 'Submission and acknowledgment', 'TAN allotted in 7-10 working days'],
    timeline: '7-10 working days',
  },
  {
    title: 'PAN Reprint',
    what: 'PAN Reprint is needed when your PAN card is lost, damaged, or stolen. The PAN number remains the same — only a duplicate physical card is issued. You can also request an e-PAN (digital version) instantly.',
    who: ['PAN holders whose card is lost or stolen', 'Individuals with damaged or faded PAN card', 'Persons needing duplicate PAN for KYC purposes', 'Anyone needing e-PAN for digital use'],
    docs: ['Existing PAN number', 'Aadhaar Card for verification', 'FIR copy (if card stolen — optional)', 'Passport size photograph'],
    process: ['Verification of existing PAN details', 'Filing of reprint request on NSDL or UTIITSL', 'Payment of reprint fees', 'Address verification', 'Duplicate PAN card dispatched to registered address'],
    timeline: 'e-PAN instantly — physical card in 15-20 days',
  },
]

export default function PanTan() {
  const navigate = useNavigate()
  const handleGetStarted = () => {
    const token = localStorage.getItem('userToken')
    if (token) window.open('https://wa.me/918287746345', '_blank')
    else navigate('/login')
  }

  return (
    <>
<SEO
  title="PAN & TAN Services"
  description="New PAN card, PAN correction, TAN application and PAN reprint services by Dhanna Enterprises."
  keywords="PAN card apply, new PAN card, PAN correction, TAN application, PAN reprint India"
/>
      <div style={{background: '#f8f7f4'}} className="min-h-screen">
        <div className="py-16 px-6" style={{background: 'linear-gradient(135deg, #0f2044, #163060)'}}>
          <div className="max-w-5xl mx-auto">
            <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{color: '#d4a017'}}>Our Services</p>
<h1 className="text-5xl font-bold text-white mb-4">PAN & TAN Services</h1>
<p className="text-gray-300 max-w-2xl">New PAN card, corrections, TAN application and reprint — quick and accurate processing for all your PAN and TAN requirements.</p>
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
              <h3 className="text-3xl font-bold text-white mb-3">Need PAN or TAN assistance?</h3>
              <p className="text-gray-400 mb-6">Get your PAN or TAN processed quickly — we handle the complete application process.</p>
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