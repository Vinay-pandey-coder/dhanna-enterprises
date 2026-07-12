import SEO from '../../components/SEO'
import { useNavigate } from 'react-router-dom'

const services = [
  {
    title: 'GST Registration',
    what: 'GST Registration is mandatory for businesses whose annual turnover exceeds the prescribed threshold limit. Once registered, you receive a unique GSTIN that allows you to legally collect tax from customers and claim input tax credits.',
    who: ['Businesses with annual turnover above Rs. 20 lakhs', 'E-commerce operators and sellers', 'Businesses involved in interstate supply', 'Casual taxable persons'],
    docs: ['PAN Card', 'Aadhaar Card', 'Business address proof', 'Bank account details', 'Photographs'],
    process: ['Document collection and verification', 'Filing of GST registration application', 'ARN generation', 'Government verification', 'GSTIN issued within 3-7 working days'],
    timeline: '3-7 working days',
  },
  {
    title: 'GST Amendment',
    what: 'GST Amendment allows registered taxpayers to modify or update their GST registration details such as business name, address, contact information, or authorized signatory.',
    who: ['Businesses with change in address', 'Businesses with change in authorized signatory', 'Businesses with change in partners/directors', 'Businesses adding new business verticals'],
    docs: ['Existing GSTIN details', 'Supporting documents for the change', 'Board resolution (for companies)', 'Partnership deed amendment (if applicable)'],
    process: ['Identification of fields to be amended', 'Preparation of supporting documents', 'Filing amendment application on GST portal', 'Approval by tax officer', 'Updated registration certificate issued'],
    timeline: '7-15 working days',
  },
  {
    title: 'GST Cancellation',
    what: 'GST Cancellation is the process of surrendering your GSTIN when your business closes down, turnover falls below threshold, or you no longer need to be registered.',
    who: ['Businesses that have closed down', 'Businesses whose turnover fell below threshold', 'Businesses that have been amalgamated', 'Businesses switching to composition scheme'],
    docs: ['GSTIN and login credentials', 'Reason for cancellation with documents', 'Details of stock held on cancellation date', 'Last filed GST return details'],
    process: ['Filing of cancellation application (GST REG-16)', 'Declaration of stock and pending liabilities', 'Payment of any pending tax liability', 'Officer review and approval', 'Final cancellation order issued'],
    timeline: '30 days',
  },
  {
    title: 'GST Return Filing (GSTR-1 & GSTR-3B)',
    what: 'GSTR-1 reports outward supplies (sales) while GSTR-3B is a monthly summary return for net GST liability. Both are mandatory for all regular GST taxpayers. Timely filing avoids interest and late fees.',
    who: ['All regular GST registered taxpayers', 'Businesses with B2B and B2C transactions', 'Exporters and importers', 'Businesses claiming input tax credit'],
    docs: ['Sales invoices and debit/credit notes', 'Purchase invoices for ITC claims', 'Bank statements', 'HSN/SAC codes for goods/services'],
    process: ['Collection and verification of sales/purchase data', 'Reconciliation with books of accounts', 'Preparation of GSTR-1', 'Preparation and filing of GSTR-3B', 'Payment of net GST liability'],
    timeline: 'Monthly (11th for GSTR-1, 20th for GSTR-3B)',
  },
  {
    title: 'Annual Return (GSTR-9)',
    what: 'GSTR-9 consolidates all monthly/quarterly returns filed during the financial year. It provides a comprehensive view of annual GST transactions and helps in reconciling data reported in periodic returns.',
    who: ['All regular GST taxpayers above Rs. 2 crores', 'Taxpayers below Rs. 2 crores (optional)', 'Businesses filing GSTR-1 and GSTR-3B regularly'],
    docs: ['All GSTR-1 and GSTR-3B returns of the year', 'Books of accounts for full financial year', 'Input tax credit details', 'HSN-wise summary of supplies'],
    process: ['Collection of all periodic return data', 'Reconciliation of books with GST returns', 'Preparation of annual summary', 'Review and correction of discrepancies', 'Filing before 31st December'],
    timeline: 'Once a year — due by 31st December',
  },
  {
    title: 'GST Notice Reply',
    what: 'GST authorities may issue notices for mismatch in returns, non-filing, excess ITC claims, or audit observations. A timely and proper reply is essential to avoid penalties and demand orders.',
    who: ['Taxpayers who received Show Cause Notice', 'Businesses with mismatch between GSTR-2A and GSTR-3B', 'Taxpayers under GST audit or scrutiny', 'Businesses with pending demands'],
    docs: ['Copy of the GST notice', 'Relevant invoices and supporting documents', 'Previous returns and payment challans', 'Books of accounts for relevant period'],
    process: ['Analysis of the notice and grounds', 'Collection of supporting evidence', 'Drafting of detailed written reply', 'Filing of reply on GST portal', 'Follow-up with department if required'],
    timeline: 'As per notice timeline (15-30 days to respond)',
  },
  {
    title: 'GST Compliance Support',
    what: 'Ongoing GST compliance support covers all aspects of your GST obligations — from invoice preparation and reconciliation to return filing and record maintenance throughout the year.',
    who: ['Businesses needing ongoing GST management', 'SMEs without in-house GST team', 'Startups requiring end-to-end GST support', 'Businesses with multiple GST registrations'],
    docs: ['Monthly sales and purchase data', 'Bank statements', 'Credit/debit notes', 'Import/export documents (if applicable)'],
    process: ['Monthly data collection from client', 'Invoice verification and reconciliation', 'GSTR-1 and GSTR-3B filing', 'ITC reconciliation with GSTR-2B', 'Monthly compliance report shared with client'],
    timeline: 'Ongoing monthly service',
  },
  {
    title: 'LUT Filing',
    what: 'Letter of Undertaking (LUT) allows registered exporters to export goods or services without paying IGST. It must be filed at the beginning of each financial year.',
    who: ['Exporters of goods or services', 'SEZ suppliers', 'Businesses with zero-rated supplies', 'Companies with export turnover'],
    docs: ['GSTIN and login credentials', 'Previous year LUT (if applicable)', 'IEC code (for goods exporters)', 'Authorized signatory details'],
    process: ['Login to GST portal', 'Filing of LUT application (GST RFD-11)', 'Declaration by authorized signatory', 'Submission and acknowledgment', 'LUT reference number generated'],
    timeline: '1-2 working days',
  },
  {
    title: 'GST Consultation',
    what: 'Expert GST consultation helps businesses understand their obligations, plan tax efficiently, resolve complex GST issues, and stay updated with the latest GST amendments.',
    who: ['Businesses planning GST registration', 'Companies with complex multi-state operations', 'Businesses facing GST disputes or audits', 'Startups needing GST planning'],
    docs: ['Business details and nature of operations', 'Existing GST registration (if any)', 'Specific query or issue details', 'Relevant invoices or documents'],
    process: ['Initial discussion to understand the issue', 'Research and analysis of applicable GST provisions', 'Preparation of detailed opinion', 'Discussion of recommendations with client', 'Follow-up support if required'],
    timeline: '1-3 working days for written opinion',
  },
]

export default function Gst() {
  const navigate = useNavigate()

  const handleGetStarted = () => {
    const token = localStorage.getItem('userToken')
    if (token) window.open('https://wa.me/918287746345', '_blank')
    else navigate('/login')
  }

  return (
    <>
      <SEO
        title="GST Services"
        description="Complete GST services — registration, return filing, amendments, notice reply, LUT filing and GST consultation by Dhanna Enterprises."
        keywords="GST registration, GST return filing, GSTR-1, GSTR-3B, GST notice reply, LUT filing, GST consultation"
      />
      <div style={{background: '#f8f7f4'}} className="min-h-screen">

        {/* Header */}
        <div className="py-16 px-6" style={{background: 'linear-gradient(135deg, #0f2044, #163060)'}}>
          <div className="max-w-5xl mx-auto">
            <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{color: '#d4a017'}}>Our Services</p>
            <h1 className="text-5xl font-bold text-white mb-4">GST Services</h1>
            <p className="text-gray-300 max-w-2xl">Complete GST lifecycle management — from registration to annual returns, amendments, notice replies and expert consultation.</p>
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
                  <h4 className="text-xs font-bold tracking-widest uppercase mb-3" style={{color: '#d4a017'}}>Who Needs This</h4>
                  <ul className="space-y-1.5">
                    {s.who.map(item => (
                      <li key={item} className="flex items-start gap-2 text-sm text-gray-600">
                        <span style={{color: '#d4a017'}}>✦</span> {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="text-xs font-bold tracking-widest uppercase mb-3" style={{color: '#d4a017'}}>Documents Required</h4>
                  <ul className="space-y-1.5">
                    {s.docs.map(item => (
                      <li key={item} className="flex items-start gap-2 text-sm text-gray-600">
                        <span style={{color: '#d4a017'}}>✦</span> {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="text-xs font-bold tracking-widest uppercase mb-3" style={{color: '#d4a017'}}>Our Process</h4>
                  <ul className="space-y-1.5">
                    {s.process.map((step, j) => (
                      <li key={step} className="flex items-start gap-2 text-sm text-gray-600">
                        <span className="font-bold shrink-0" style={{color: '#d4a017'}}>{j + 1}.</span> {step}
                      </li>
                    ))}
                  </ul>
                  <p className="text-xs mt-3 font-semibold" style={{color: '#0f2044'}}>
                    Timeline: <span className="font-normal text-gray-500">{s.timeline}</span>
                  </p>
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

        {/* CTA */}
        <div className="max-w-5xl mx-auto px-6 pb-16">
          <div className="rounded-3xl p-10 text-center"
            style={{background: 'linear-gradient(135deg, #0f2044, #163060)', border: '1px solid rgba(212,160,23,0.2)'}}>
            <h3 className="text-3xl font-bold text-white mb-3">Have a GST query?</h3>
            <p className="text-gray-400 mb-6">Talk to our GST experts for free — we'll guide you to the right solution.</p>
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