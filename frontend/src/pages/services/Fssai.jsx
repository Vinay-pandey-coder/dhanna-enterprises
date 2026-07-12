import SEO from '../../components/SEO'
import { useNavigate } from 'react-router-dom'

const services = [
  {
    title: 'FSSAI Registration',
    what: 'FSSAI Registration is mandatory for small food businesses with annual turnover up to Rs. 12 lakhs. It is the basic level of FSSAI authorization and is required for petty food manufacturers, small retailers, hawkers, and home-based food businesses.',
    who: ['Petty food manufacturers and retailers', 'Home-based food businesses', 'Small food stalls and hawkers', 'Food businesses with turnover up to Rs. 12 lakhs'],
    docs: ['Aadhaar Card and PAN Card', 'Passport size photograph', 'Business address proof', 'List of food products to be manufactured or sold'],
    process: ['Document collection and verification', 'Filing of FSSAI registration application', 'Submission on Food Safety Compliance System (FoSCOS)', 'Government review and approval', 'FSSAI Registration Certificate issued'],
    timeline: '7-10 working days',
  },
  {
    title: 'State License',
    what: 'FSSAI State License is required for medium-sized food businesses with annual turnover between Rs. 12 lakhs and Rs. 20 crores. It is issued by the state food safety authority and covers manufacturers, storage units, and transporters.',
    who: ['Food manufacturers with turnover Rs. 12 lakhs to Rs. 20 crores', 'Hotels and restaurants above petty food business threshold', 'Food storage and warehousing businesses', 'Food transporters and distributors within state'],
    docs: ['PAN Card and Aadhaar Card', 'Business registration certificate', 'Food safety management plan', 'Layout plan of premises', 'List of food products and equipment'],
    process: ['Assessment of eligibility for state license', 'Preparation of application and documents', 'Filing on FoSCOS portal', 'Inspection by food safety officer', 'License issued after inspection clearance'],
    timeline: '30-60 working days',
  },
  {
    title: 'Central License',
    what: 'FSSAI Central License is mandatory for large food businesses with turnover above Rs. 20 crores, importers, exporters, and businesses operating in multiple states. It is issued by the central government.',
    who: ['Large food manufacturers with turnover above Rs. 20 crores', 'Food importers and exporters', 'Businesses operating in more than one state', 'Airport, seaport and railway food operations'],
    docs: ['PAN Card and incorporation documents', 'Food safety management system plan', 'Layout and flow diagram of processing unit', 'List of machinery and equipment', 'Import/export documents (if applicable)'],
    process: ['Eligibility assessment for central license', 'Preparation of comprehensive application', 'Filing on FoSCOS central portal', 'Scrutiny by central food safety authority', 'Inspection and license issuance'],
    timeline: '60-90 working days',
  },
  {
    title: 'FSSAI Renewal',
    what: 'FSSAI licenses and registrations must be renewed before expiry to avoid penalties and business disruption. Renewal ensures continued legal authorization to operate your food business.',
    who: ['All FSSAI registered or licensed food businesses', 'Businesses with licenses expiring within 30 days', 'Food businesses wanting to avoid penalties for lapse', 'Companies needing continuous food business authorization'],
    docs: ['Existing FSSAI license/registration number', 'Updated business details (if changed)', 'Renewal fee payment details', 'Inspection report (if required for renewal)'],
    process: ['Check of current license expiry date', 'Preparation of renewal application', 'Filing on FoSCOS portal before expiry', 'Payment of renewal fees', 'Renewed license/registration certificate issued'],
    timeline: '7-30 working days depending on license type',
  },
  {
    title: 'FSSAI Modification',
    what: 'FSSAI Modification allows license/registration holders to update details such as business name, address, food products, manufacturing capacity, or authorized signatory on their existing FSSAI authorization.',
    who: ['Food businesses with change in address or premises', 'Businesses adding new food products', 'Companies with change in authorized signatory', 'Businesses expanding manufacturing capacity'],
    docs: ['Existing FSSAI license number', 'Documents supporting the modification', 'Updated food safety plan (if product change)', 'New premise documents (if address change)'],
    process: ['Identification of modification required', 'Preparation of modification application', 'Filing on FoSCOS portal', 'Inspection (if required for premise change)', 'Modified license/certificate issued'],
    timeline: '15-30 working days',
  },
  {
    title: 'FSSAI Annual Return',
    what: 'FSSAI licensed food businesses are required to file an annual return (Form D1) by 31st May every year, reporting quantity of food articles manufactured, imported, sold, etc. during the previous financial year.',
    who: ['All FSSAI licensed food businesses', 'Food manufacturers and processors', 'Food importers and exporters', 'Companies with state or central FSSAI license'],
    docs: ['FSSAI license number and login details', 'Details of food products manufactured or sold', 'Quantity data for the financial year', 'Previous year return for reference'],
    process: ['Collection of production and sales data', 'Preparation of annual return (Form D1)', 'Verification of data accuracy', 'Filing on FoSCOS portal before 31st May', 'Acknowledgment of filed return'],
    timeline: 'Due by 31st May — 1-2 working days for preparation',
  },
]

export default function Fssai() {
  const navigate = useNavigate()
  const handleGetStarted = () => {
    const token = localStorage.getItem('userToken')
    if (token) window.open('https://wa.me/918287746345', '_blank')
    else navigate('/login')
  }

  return (
    <>
      <SEO
        title="FSSAI Services"
        description="FSSAI registration, state and central license, renewal, modification and annual return filing for food businesses by Dhanna Enterprises."
        keywords="FSSAI registration, FSSAI license, food license India, FSSAI renewal, FSSAI annual return"
      />
      <div style={{background: '#f8f7f4'}} className="min-h-screen">
        <div className="py-16 px-6" style={{background: 'linear-gradient(135deg, #0f2044, #163060)'}}>
          <div className="max-w-5xl mx-auto">
            <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{color: '#d4a017'}}>Our Services</p>
            <h1 className="text-5xl font-bold text-white mb-4">FSSAI Services</h1>
            <p className="text-gray-300 max-w-2xl">Complete FSSAI licensing solutions — registration, state and central license, renewals, modifications and annual return filing for all food businesses.</p>
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
            <h3 className="text-3xl font-bold text-white mb-3">Need FSSAI license or renewal?</h3>
            <p className="text-gray-400 mb-6">Talk to our experts for free — we'll get your food business licensed quickly.</p>
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