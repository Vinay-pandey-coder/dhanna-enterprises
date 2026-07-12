import SEO from '../../components/SEO'
import { useNavigate } from 'react-router-dom'

const services = [
  {
    title: 'Proprietorship Registration',
    what: 'A sole proprietorship is the simplest business structure where one individual owns and operates the business. While there is no formal registration required, obtaining a Shop & Establishment License, GST registration, and business bank account makes it legally recognized.',
    who: ['Individuals starting a small business or shop', 'Freelancers wanting formal business identity', 'Local traders and small service providers', 'First-time entrepreneurs with low investment'],
    docs: ['Aadhaar Card and PAN Card', 'Business address proof', 'Bank account details', 'Trade name details'],
    process: ['Business name and activity finalization', 'Shop & Establishment registration', 'GST registration (if applicable)', 'Business bank account opening support', 'MSME/Udyam registration (optional but recommended)'],
    timeline: '3-5 working days',
  },
  {
    title: 'Partnership Firm Registration',
    what: 'A partnership firm is a business owned by two or more individuals governed by a partnership deed. Registration with the Registrar of Firms provides legal recognition, right to sue, and access to business loans and government contracts.',
    who: ['Two or more individuals starting a business together', 'Family businesses with multiple members', 'Professionals wanting to share business responsibilities', 'Businesses wanting legal partnership structure'],
    docs: ['PAN Card and Aadhaar of all partners', 'Partnership deed (we prepare this)', 'Business address proof', 'Passport size photographs of all partners'],
    process: ['Drafting of partnership deed', 'Stamp duty payment on deed', 'Filing with Registrar of Firms', 'Certificate of registration issued', 'PAN and bank account opening support'],
    timeline: '7-10 working days',
  },
  {
    title: 'LLP Registration',
    what: 'Limited Liability Partnership (LLP) combines the flexibility of a partnership with limited liability protection for partners. It is a separate legal entity, has no minimum capital requirement, and is ideal for professionals and service businesses.',
    who: ['Professionals wanting limited liability protection', 'Businesses with 2 or more partners', 'Companies wanting partnership benefits with corporate structure', 'Startups with moderate compliance requirements'],
    docs: ['PAN Card and Aadhaar of all partners', 'Digital Signature Certificate (DSC) of all partners', 'DIN (Director Identification Number)', 'Registered office address proof', 'Subscriber sheet and consent'],
    process: ['Name approval on MCA portal (RUN-LLP)', 'DSC and DIN procurement', 'Filing of incorporation documents (FiLLiP)', 'LLP Agreement drafting and filing', 'Certificate of Incorporation issued by MCA'],
    timeline: '10-15 working days',
  },
  {
    title: 'OPC Registration',
    what: 'One Person Company (OPC) allows a single individual to form a company with limited liability. It is a separate legal entity with perpetual succession, making it ideal for solo entrepreneurs who want corporate benefits without partners.',
    who: ['Solo entrepreneurs wanting corporate structure', 'Individuals wanting limited liability protection', 'Professionals wanting to incorporate their practice', 'Businesses planning to raise funding in future'],
    docs: ['PAN Card and Aadhaar of promoter', 'Digital Signature Certificate (DSC)', 'Director Identification Number (DIN)', 'Registered office address proof', 'Nominee details and consent'],
    process: ['Name approval on MCA portal (RUN)', 'DSC and DIN procurement', 'MOA and AOA drafting', 'Filing of SPICe+ form on MCA', 'Certificate of Incorporation and PAN/TAN issued'],
    timeline: '10-15 working days',
  },
  {
    title: 'Private Limited Company Registration',
    what: 'A Private Limited Company is the most preferred business structure for startups and growing businesses. It offers limited liability, separate legal identity, easy fundraising, and credibility with customers, investors and banks.',
    who: ['Startups planning to raise venture capital', 'Businesses wanting maximum credibility', 'Companies with 2 or more promoters', 'Businesses planning international expansion'],
    docs: ['PAN Card and Aadhaar of all directors', 'Digital Signature Certificate (DSC) of all directors', 'Director Identification Number (DIN)', 'Registered office address proof', 'MOA and AOA (we draft these)'],
    process: ['Name approval on MCA portal (RUN)', 'DSC and DIN procurement for all directors', 'Drafting of MOA and AOA', 'Filing of SPICe+ form on MCA portal', 'Certificate of Incorporation, PAN and TAN issued'],
    timeline: '10-15 working days',
  },
  {
    title: 'Shop & Establishment Registration',
    what: 'Shop & Establishment Registration is mandatory for all commercial establishments including shops, offices, restaurants, hotels, and other businesses under the state\'s Shop and Establishment Act. It is one of the first registrations needed to start a business.',
    who: ['All shops and retail establishments', 'Offices and commercial establishments', 'Restaurants, hotels and food outlets', 'Service providers with a physical business location'],
    docs: ['Aadhaar Card and PAN Card of proprietor/manager', 'Business address proof (rent agreement or ownership proof)', 'Photographs of establishment', 'Business commencement date'],
    process: ['Collection of business and owner details', 'Filing of application with local municipal authority or labour department', 'Payment of registration fee', 'Inspection (if required by state)', 'Shop & Establishment Certificate issued'],
    timeline: '3-7 working days',
  },
]

export default function BusinessRegistration() {
  const navigate = useNavigate()
  const handleGetStarted = () => {
    const token = localStorage.getItem('userToken')
    if (token) window.open('https://wa.me/918287746345', '_blank')
    else navigate('/login')
  }

  return (
    <>
      <SEO
        title="Business Registration Services"
        description="Proprietorship, partnership, LLP, OPC, private limited company and shop establishment registration by Dhanna Enterprises."
        keywords="business registration India, LLP registration, private limited company, OPC registration, partnership firm, shop establishment"
      />
      <div style={{background: '#f8f7f4'}} className="min-h-screen">
        <div className="py-16 px-6" style={{background: 'linear-gradient(135deg, #0f2044, #163060)'}}>
          <div className="max-w-5xl mx-auto">
            <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{color: '#08d24f'}}>Our Services</p>
            <h1 className="text-5xl font-bold text-white mb-4">Business Registration</h1>
            <p className="text-gray-300 max-w-2xl">From proprietorship to private limited company — we help you choose and register the right business structure so you start on solid legal footing from day one.</p>
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
            <h3 className="text-3xl font-bold text-white mb-3">Ready to register your business?</h3>
            <p className="text-gray-400 mb-6">Talk to our experts for free — we'll help you choose the right structure and get registered quickly.</p>
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