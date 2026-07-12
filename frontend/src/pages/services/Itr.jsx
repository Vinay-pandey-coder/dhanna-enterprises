import SEO from '../../components/SEO'
import { useNavigate } from 'react-router-dom'

const services = [
  {
    title: 'ITR-1 (Salary)',
    what: 'ITR-1 (Sahaj) is for salaried individuals with income from salary, one house property, and other sources like interest. Filing ITR ensures compliance, helps in loan processing, visa applications, and avoids penalties.',
    who: ['Salaried employees (government or private)', 'Pensioners with pension income', 'Individuals with income from one house property', 'Total income up to Rs. 50 lakhs'],
    docs: ['Form 16 issued by employer', 'PAN Card and Aadhaar Card', 'Bank account details', 'Interest certificates from banks/FD', 'Investment proofs for deductions (80C, 80D)'],
    process: ['Collection of Form 16 and income documents', 'Verification of TDS with Form 26AS', 'Calculation of total income and tax', 'Preparation of ITR-1 with deductions', 'Filing and acknowledgment (ITR-V)'],
    timeline: '1-2 working days after documents',
  },
  {
    title: 'ITR-2 (Capital Gain)',
    what: 'ITR-2 is for individuals with income from capital gains — profit from sale of property, shares, or mutual funds. It covers both short-term and long-term capital gains.',
    who: ['Individuals with income from sale of property', 'Investors with profit from shares or mutual funds', 'Individuals with foreign income or foreign assets', 'Individuals with more than one house property'],
    docs: ['Form 16 (if salaried)', 'Capital gain statement from broker', 'Sale deed and purchase deed (for property)', 'Foreign income/asset details (if applicable)', 'Bank statements'],
    process: ['Collection of all income and capital gain documents', 'Calculation of short-term and long-term gains', 'Verification of TDS and advance tax paid', 'Preparation of ITR-2', 'Filing and ITR-V generation'],
    timeline: '2-3 working days after documents',
  },
  {
    title: 'ITR-3 (Business & Profession)',
    what: 'ITR-3 is for individuals with income from business or profession — freelancers, consultants, doctors, lawyers, traders, and other self-employed professionals.',
    who: ['Self-employed professionals (doctors, lawyers, CAs)', 'Freelancers and consultants', 'Business owners', 'Partners in a partnership firm'],
    docs: ['Books of accounts (P&L and Balance Sheet)', 'Bank statements', 'GST returns (if registered)', 'TDS certificates and Form 26AS', 'Investment and expense proofs'],
    process: ['Review of books of accounts', 'Computation of business income', 'Verification of TDS and advance tax', 'Preparation of ITR-3 with P&L and Balance Sheet', 'Filing and acknowledgment'],
    timeline: '3-5 working days after documents',
  },
  {
    title: 'ITR-4 (Presumptive Income)',
    what: 'ITR-4 (Sugam) is for individuals opting for presumptive taxation under Section 44AD, 44ADA, or 44AE. Income is assumed at a fixed percentage of turnover, simplifying compliance for small businesses.',
    who: ['Small businesses with turnover up to Rs. 2 crores (44AD)', 'Professionals with receipts up to Rs. 50 lakhs (44ADA)', 'Transporters with up to 10 goods vehicles (44AE)'],
    docs: ['PAN Card and Aadhaar Card', 'Bank statements showing business receipts', 'GST returns (if registered)', 'TDS certificates', 'Investment proof for deductions'],
    process: ['Assessment of eligibility for presumptive scheme', 'Calculation of presumptive income on turnover', 'Verification of tax paid and TDS credits', 'Preparation and filing of ITR-4', 'Acknowledgment generation'],
    timeline: '1-2 working days after documents',
  },
  {
    title: 'NRI ITR Filing',
    what: 'NRIs have specific tax obligations in India on income earned in India. NRI ITR filing ensures compliance, helps in claiming TDS refunds, and avoids future tax complications.',
    who: ['NRIs with income from Indian property (rent)', 'NRIs with capital gains from Indian assets', 'NRIs with interest income from NRO accounts', 'NRIs with TDS deducted seeking refund'],
    docs: ['PAN Card and passport copy', 'Residential status details', 'NRO/NRE account statements', 'TDS certificates on Indian income', 'Capital gain documents (if any)'],
    process: ['Determination of residential status', 'Identification of India-sourced income', 'Computation of tax liability', 'Selection of appropriate ITR form', 'Filing and claiming refund if applicable'],
    timeline: '3-5 working days after documents',
  },
  {
    title: 'Revised Return',
    what: 'If you filed your original ITR and discovered an error or omission, you can file a Revised Return to correct it before the end of the relevant assessment year.',
    who: ['Taxpayers who made errors in original ITR', 'Individuals who forgot to declare some income', 'Taxpayers who missed claiming deductions', 'Individuals who entered wrong bank details'],
    docs: ['Original ITR acknowledgment (ITR-V)', 'Documents supporting the correction', 'Revised income or deduction details'],
    process: ['Review of original ITR to identify errors', 'Preparation of corrected return', 'Selection of Revised option on portal', 'Reference to original acknowledgment number', 'Filing and revised ITR-V generation'],
    timeline: '1-2 working days after documents',
  },
  {
    title: 'Defective Return Response',
    what: 'Income Tax Department may declare your ITR defective under Section 139(9) for major errors. A proper response must be filed within 15 days to avoid the return being treated as not filed.',
    who: ['Taxpayers who received defective return notice', 'Individuals with incomplete ITR filing', 'Taxpayers with mismatch in tax computation'],
    docs: ['Copy of defective return notice', 'Original ITR acknowledgment', 'Documents to rectify the defect'],
    process: ['Analysis of the defect in notice', 'Collection of documents to resolve defect', 'Preparation of corrected return', 'Filing response within 15 days', 'Confirmation of acceptance'],
    timeline: '1-2 working days (response due within 15 days of notice)',
  },
  {
    title: 'Income Tax Notice Reply',
    what: 'Income Tax Department issues notices for scrutiny, demand, mismatch, or non-filing. A timely and well-documented reply is critical to avoid penalties and litigation.',
    who: ['Taxpayers who received scrutiny notice', 'Individuals with tax demand notice', 'Taxpayers with high-value transaction notice', 'Individuals who have not filed returns'],
    docs: ['Copy of the income tax notice', 'Original ITR and all supporting documents', 'Bank statements for relevant year', 'Investment and transaction documents'],
    process: ['Detailed analysis of notice and grounds', 'Collection and organization of evidence', 'Drafting comprehensive written reply', 'Submission on income tax portal', 'Follow-up and representation if required'],
    timeline: 'As per notice timeline (typically 30 days)',
  },
  {
    title: 'Tax Planning',
    what: 'Tax planning involves legal arrangements to minimize tax liability using available deductions, exemptions, and investment options while remaining fully compliant.',
    who: ['Salaried employees wanting to optimize tax savings', 'Business owners looking to reduce tax burden', 'Individuals planning major investments or asset sales'],
    docs: ['Current salary/income details', 'Existing investments and insurance', 'Planned investments or transactions'],
    process: ['Analysis of current income and tax liability', 'Identification of applicable deductions', 'Recommendation of tax-saving investments (80C, 80D, NPS)', 'Planning for capital gains and HRA', 'Tax planning report and action plan'],
    timeline: '2-3 working days for detailed report',
  },
  {
    title: 'ITR Computation',
    what: 'ITR Computation is the detailed calculation of total taxable income, applicable deductions, tax liability, and net tax payable or refundable before filing.',
    who: ['Individuals wanting to understand tax before filing', 'Businesses requiring accurate income computation', 'Taxpayers with multiple income sources'],
    docs: ['All income documents (salary, business, capital gains)', 'Investment and deduction proofs', 'TDS certificates and Form 26AS'],
    process: ['Collection of all income sources', 'Computation of gross total income', 'Application of eligible deductions', 'Calculation of tax as per applicable slab', 'Preparation of detailed computation sheet'],
    timeline: '1-2 working days after documents',
  },
]

export default function Itr() {
  const navigate = useNavigate()
  const handleGetStarted = () => {
    const token = localStorage.getItem('userToken')
    if (token) window.open('https://wa.me/918287746345', '_blank')
    else navigate('/login')
  }

  return (
    <>
      <SEO
        title="Income Tax (ITR) Services"
        description="ITR filing for salary, capital gains, business, NRI — along with notice reply, tax planning and ITR computation by Dhanna Enterprises."
        keywords="ITR filing, income tax return, salary ITR, capital gain ITR, NRI ITR, tax planning, income tax notice reply"
      />
      <div style={{background: '#f8f7f4'}} className="min-h-screen">
        <div className="py-16 px-6" style={{background: 'linear-gradient(135deg, #0f2044, #163060)'}}>
          <div className="max-w-5xl mx-auto">
            <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{color: '#d4a017'}}>Our Services</p>
            <h1 className="text-5xl font-bold text-white mb-4">Income Tax (ITR) Services</h1>
            <p className="text-gray-300 max-w-2xl">Accurate and on-time ITR filing for individuals, businesses and NRIs — with complete tax planning and notice handling support.</p>
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
            <h3 className="text-3xl font-bold text-white mb-3">Have an ITR query?</h3>
            <p className="text-gray-400 mb-6">Talk to our tax experts for free — we'll guide you to the right solution.</p>
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