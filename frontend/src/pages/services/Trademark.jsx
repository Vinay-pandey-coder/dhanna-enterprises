import SEO from '../../components/SEO'
import { useNavigate } from 'react-router-dom'

const services = [
  {
    title: 'Trademark Registration',
    what: 'Trademark Registration gives you exclusive legal rights over your brand name, logo, or slogan. A registered trademark prevents others from using a similar mark and gives you the right to take legal action against infringement.',
    who: ['Businesses wanting to protect their brand name', 'Startups registering their logo or slogan', 'E-commerce sellers protecting their product brand', 'Companies expanding to new markets'],
    docs: ['PAN Card of applicant', 'Aadhaar Card or business registration certificate', 'Logo or brand name to be registered (in JPG format)', 'Business address proof', 'Power of Attorney (Form TM-48)'],
    process: ['Trademark search to check availability', 'Selection of appropriate class of goods/services', 'Filing of trademark application (Form TM-A)', 'Application number and acknowledgment received', 'Examination and publication in Trademark Journal'],
    timeline: 'Application filed in 1-2 days — registration in 18-24 months',
  },
  {
    title: 'Trademark Search',
    what: 'Trademark Search is done before filing an application to check if an identical or similar mark already exists in the trademark registry. A proper search reduces the risk of objections and rejection of your application.',
    who: ['Businesses planning to register a trademark', 'Startups choosing a brand name', 'Companies wanting to verify brand availability', 'Lawyers and IP professionals'],
    docs: ['Brand name or logo to be searched', 'Class of goods/services for the search'],
    process: ['Search on IP India Trademark Registry', 'Check for identical and similar marks', 'Review of pending and registered marks', 'Preparation of search report', 'Advisory on registration feasibility'],
    timeline: '1 working day',
  },
  {
    title: 'Trademark Renewal',
    what: 'A trademark registration is valid for 10 years and must be renewed before expiry to maintain your exclusive rights. Renewal can be done 6 months before expiry. Failure to renew leads to removal from the registry.',
    who: ['All trademark holders approaching 10-year expiry', 'Businesses wanting to maintain brand protection', 'Companies with trademarks expiring within 6 months', 'Assignees of transferred trademarks'],
    docs: ['Trademark registration number', 'Power of Attorney (Form TM-48)', 'Current registration certificate'],
    process: ['Verification of trademark expiry date', 'Preparation of renewal application (Form TM-R)', 'Payment of renewal fees', 'Filing on IP India portal', 'Renewal certificate issued'],
    timeline: '7-15 working days',
  },
  {
    title: 'Trademark Objection Reply',
    what: 'After filing, a trademark examiner may raise objections on grounds like similarity with existing marks or descriptiveness. A well-drafted reply within 30 days is critical to proceed with registration.',
    who: ['Applicants who received trademark examination report', 'Businesses with objections on similarity grounds', 'Companies with descriptiveness or deceptiveness objections', 'Applicants needing legal representation before registry'],
    docs: ['Copy of trademark examination report', 'Original trademark application details', 'Evidence of use of the mark (if applicable)', 'Supporting documents for distinctiveness'],
    process: ['Analysis of objection grounds', 'Research and preparation of counter-arguments', 'Drafting of detailed reply with evidence', 'Filing of reply on IP India portal within 30 days', 'Hearing representation if required'],
    timeline: 'Reply filed within 30 days of objection',
  },
  {
    title: 'Brand Name Registration',
    what: 'Brand Name Registration involves securing your business name or product name as a trademark, giving you exclusive rights across India. We handle end-to-end brand protection — from name availability check to final registration.',
    who: ['New businesses choosing and protecting their name', 'Product companies registering product brand names', 'E-commerce brands wanting legal protection', 'Businesses facing brand name copying issues'],
    docs: ['Proposed brand name details', 'Business PAN and registration documents', 'Logo or wordmark (if applicable)', 'Details of goods/services under the brand'],
    process: ['Brand name availability and search', 'Class selection for registration', 'Application filing on IP India portal', 'Monitoring of application status', 'Certificate of registration upon approval'],
    timeline: 'Application in 1-2 days — full registration 18-24 months',
  },
]

export default function Trademark() {
  const navigate = useNavigate()
  const handleGetStarted = () => {
    const token = localStorage.getItem('userToken')
    if (token) window.open('https://wa.me/918287746345', '_blank')
    else navigate('/login')
  }

  return (
    <>
<SEO
  title="Trademark & Brand Services"
  description="Trademark registration, search, renewal, objection reply and brand name registration services by Dhanna Enterprises."
  keywords="trademark registration India, trademark search, brand name registration, trademark renewal, trademark objection reply"
/>
      <div style={{background: '#f8f7f4'}} className="min-h-screen">
        <div className="py-16 px-6" style={{background: 'linear-gradient(135deg, #0f2044, #163060)'}}>
          <div className="max-w-5xl mx-auto">
            <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{color: '#08d24f'}}>Our Services</p>
<h1 className="text-5xl font-bold text-white mb-4">Trademark & Brand Services</h1>
<p className="text-gray-300 max-w-2xl">Protect your brand name and identity — trademark search, registration, renewals and objection replies handled by our experts.</p>
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
            <h3 className="text-3xl font-bold text-white mb-3">Want to protect your brand?</h3>
            <p className="text-gray-400 mb-6">Talk to our experts — we'll get your trademark registered quickly and securely.</p>
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