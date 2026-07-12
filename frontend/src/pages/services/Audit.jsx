import SEO from '../../components/SEO'
import { useNavigate } from 'react-router-dom'

const services = [
  {
    title: 'Internal Audit',
    what: 'Internal audit is an independent review of a company\'s operations, financial records, and internal controls to identify risks, inefficiencies, and areas of improvement. It helps management make better decisions and strengthens governance.',
    who: ['Companies wanting to improve internal processes', 'Businesses preparing for statutory audit', 'Organizations with multiple departments or locations', 'Businesses facing operational risks or control gaps'],
    docs: ['Financial statements for the period', 'Internal policies and procedures', 'Transaction records and vouchers', 'Previous audit reports (if any)'],
    process: ['Planning and scope definition', 'Review of financial records and controls', 'Identification of risks and weaknesses', 'Testing of transactions and processes', 'Preparation of internal audit report with recommendations'],
    timeline: '5-10 working days depending on business size',
  },
  {
    title: 'Tax Audit',
    what: 'Tax audit under Section 44AB of the Income Tax Act is mandatory for businesses with turnover exceeding Rs. 1 crore and professionals with receipts above Rs. 50 lakhs. Our CAs conduct thorough tax audits and file Form 3CA/3CB and 3CD accurately.',
    who: ['Businesses with turnover above Rs. 1 crore', 'Professionals with receipts above Rs. 50 lakhs', 'Companies not opting for presumptive taxation', 'Businesses with losses claiming carry forward'],
    docs: ['Books of accounts for the financial year', 'Bank statements and cash book', 'GST returns and TDS details', 'Fixed assets register', 'Loan and liability details'],
    process: ['Collection and review of books of accounts', 'Verification of financial statements', 'Checking compliance with tax laws', 'Preparation of Form 3CA/3CB and Form 3CD', 'Filing of tax audit report on income tax portal'],
    timeline: '7-10 working days after document submission',
  },
  {
    title: 'GST Audit Support',
    what: 'GST audit involves verification of GST returns, books of accounts, and other records to ensure correctness of turnover, taxes paid, and ITC claimed. We provide complete GST audit support and representation.',
    who: ['Businesses with GST turnover above Rs. 5 crores', 'Companies selected for departmental GST audit', 'Businesses with ITC discrepancies or mismatches', 'Companies receiving GST audit notices'],
    docs: ['All GST returns filed during the year', 'Books of accounts and ledgers', 'Purchase invoices and ITC details', 'E-way bills and delivery challans'],
    process: ['Review of all GST returns for the audit period', 'Reconciliation of books with GST returns', 'Identification and resolution of discrepancies', 'Preparation of audit response and documentation', 'Representation during GST department audit'],
    timeline: '7-15 working days depending on complexity',
  },
  {
    title: 'TDS Compliance',
    what: 'TDS compliance involves deducting tax at source on specified payments, depositing it with the government within due dates, and filing quarterly TDS returns. Non-compliance leads to interest, penalties, and disallowance of expenses.',
    who: ['All businesses making salary payments above threshold', 'Companies making payments to contractors or professionals', 'Organizations paying rent above Rs. 2.4 lakhs per year', 'Businesses making interest or commission payments'],
    docs: ['Details of payments made during the quarter', 'PAN details of deductees', 'TDS challan payment details', 'Previous TDS returns (if any)'],
    process: ['Review of all payments and applicable TDS rates', 'Calculation of TDS on each payment', 'Preparation and verification of TDS challan', 'Filing of quarterly TDS return (Form 24Q/26Q/27Q)', 'Issuance of Form 16/16A to deductees'],
    timeline: 'Quarterly returns — due 31st of month after quarter end',
  },
  {
    title: 'Statutory Audit',
    what: 'Statutory audit is a legally required examination of the financial records of a company by an independent chartered accountant. It ensures financial statements are true and fair and comply with applicable accounting standards.',
    who: ['All companies under Companies Act 2013', 'LLPs with turnover above Rs. 40 lakhs', 'Businesses required by law or regulation', 'Companies applying for loans or investments'],
    docs: ['Complete books of accounts', 'Financial statements for the year', 'Minutes of board meetings', 'Statutory registers and records', 'Bank statements and loan documents'],
    process: ['Engagement letter and audit planning', 'Review of internal controls', 'Substantive testing of transactions', 'Verification of assets and liabilities', 'Preparation and signing of audit report'],
    timeline: '10-20 working days depending on company size',
  },
  {
    title: 'Compliance Management',
    what: 'Compliance management involves ensuring your business meets all regulatory, legal, and tax obligations on an ongoing basis. We track due dates, file required returns, and keep your business fully compliant throughout the year.',
    who: ['Businesses needing end-to-end compliance support', 'Companies with multiple tax and regulatory obligations', 'Startups without dedicated compliance team', 'Organizations wanting to avoid penalties and notices'],
    docs: ['Business registration documents', 'All existing tax registrations', 'Previous compliance records', 'Details of all business activities'],
    process: ['Comprehensive compliance calendar creation', 'Tracking of all due dates and obligations', 'Timely preparation and filing of all returns', 'Alerts and reminders to management', 'Monthly compliance status report'],
    timeline: 'Ongoing monthly service',
  },
  {
    title: 'Notice Handling',
    what: 'Tax and regulatory authorities may issue notices for various reasons. We handle all types of income tax, GST, TDS, and ROC notices — from analyzing the grounds to drafting replies and representing before authorities.',
    who: ['Businesses that received income tax notices', 'Companies with GST department notices', 'Organizations with TDS demand notices', 'Businesses facing ROC or MCA notices'],
    docs: ['Copy of the notice received', 'All supporting documents mentioned in notice', 'Relevant returns and financial records', 'Previous correspondence with the department'],
    process: ['Detailed analysis of notice grounds', 'Collection of all required documents', 'Drafting of comprehensive reply', 'Submission within due date', 'Follow-up and representation if required'],
    timeline: 'As per notice due date (typically 15-30 days)',
  },
]

export default function Audit() {
  const navigate = useNavigate()
  const handleGetStarted = () => {
    const token = localStorage.getItem('userToken')
    if (token) window.open('https://wa.me/918287746345', '_blank')
    else navigate('/login')
  }

  return (
    <>
      <SEO
        title="Audit & Compliance Services"
        description="Internal audit, tax audit, GST audit support, TDS compliance, statutory audit and notice handling by Dhanna Enterprises."
        keywords="tax audit, internal audit, GST audit, TDS compliance, statutory audit, notice handling, compliance management"
      />
      <div style={{background: '#f8f7f4'}} className="min-h-screen">
        <div className="py-16 px-6" style={{background: 'linear-gradient(135deg, #0f2044, #163060)'}}>
          <div className="max-w-5xl mx-auto">
            <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{color: '#d4a017'}}>Our Services</p>
            <h1 className="text-5xl font-bold text-white mb-4">Audit & Compliance</h1>
            <p className="text-gray-300 max-w-2xl">Internal and statutory audits, TDS compliance, GST audit support and complete notice handling to keep your business legally protected.</p>
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
            <h3 className="text-3xl font-bold text-white mb-3">Need audit or compliance support?</h3>
            <p className="text-gray-400 mb-6">Talk to our experts for free — we'll ensure your business stays fully compliant.</p>
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