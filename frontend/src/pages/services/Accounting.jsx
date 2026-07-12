import SEO from '../../components/SEO'
import { useNavigate } from 'react-router-dom'

const services = [
  {
    title: 'Monthly Accounting',
    what: 'Monthly accounting ensures your books are always up to date. We record all transactions, categorize expenses, and prepare monthly summaries so you always have a clear financial picture of your business.',
    who: ['Small and medium businesses', 'Startups needing regular bookkeeping', 'Businesses without in-house accountant', 'Professionals with regular income and expenses'],
    docs: ['Bank statements', 'Sales invoices and receipts', 'Purchase bills and expenses', 'Salary and payroll details'],
    process: ['Collection of monthly data from client', 'Recording of all transactions', 'Categorization of income and expenses', 'Preparation of monthly summary report', 'Sharing report with client'],
    timeline: 'Monthly — completed by 7th of following month',
  },
  {
    title: 'Bookkeeping',
    what: 'Bookkeeping is the systematic recording of all financial transactions of a business. Accurate bookkeeping forms the foundation for tax filing, financial analysis, and business decision-making.',
    who: ['All businesses regardless of size', 'Sole proprietors and freelancers', 'Companies requiring audit-ready books', 'Businesses needing organized financial records'],
    docs: ['All sales and purchase invoices', 'Bank and cash transaction records', 'Expense receipts', 'Loan and credit statements'],
    process: ['Collection of all transaction documents', 'Entry of transactions in accounting software', 'Reconciliation of accounts', 'Maintenance of ledgers and journals', 'Periodic review and correction'],
    timeline: 'Ongoing — updated weekly or monthly as agreed',
  },
  {
    title: 'Bank Reconciliation',
    what: 'Bank reconciliation is the process of matching your company\'s internal records with bank statements to identify discrepancies, ensure accuracy, and detect errors or unauthorized transactions.',
    who: ['All businesses with bank accounts', 'Companies with high transaction volumes', 'Businesses preparing for audit', 'Organizations detecting payment discrepancies'],
    docs: ['Bank statements for the period', 'Cash book or ledger records', 'Cheque and payment details', 'Outstanding entries list'],
    process: ['Collection of bank statement and internal records', 'Matching of transactions one by one', 'Identification of discrepancies', 'Investigation and resolution of differences', 'Preparation of reconciliation statement'],
    timeline: 'Monthly — 2-3 working days',
  },
  {
    title: 'Ledger Maintenance',
    what: 'Ledger maintenance involves keeping accurate, up-to-date records for each account — including debtors, creditors, expenses, and income — ensuring clean and organized books at all times.',
    who: ['Businesses with multiple accounts and parties', 'Companies tracking debtors and creditors', 'Businesses requiring detailed account-wise records', 'Organizations preparing for GST or income tax filing'],
    docs: ['All transaction vouchers', 'Party-wise account details', 'Bank and cash entries', 'Opening balance details'],
    process: ['Setup of chart of accounts', 'Recording transactions to respective ledgers', 'Regular updating and verification', 'Debtors and creditors reconciliation', 'Period-end ledger summary preparation'],
    timeline: 'Ongoing — updated as per agreed frequency',
  },
  {
    title: 'Profit & Loss Statement',
    what: 'A Profit & Loss (P&L) Statement summarizes revenues, costs, and expenses during a specific period, showing whether the business made a profit or loss. It is essential for tax filing, loan applications, and business decisions.',
    who: ['All businesses for annual tax filing', 'Companies applying for bank loans', 'Businesses tracking financial performance', 'Startups presenting to investors'],
    docs: ['All income and expense records for the period', 'Sales and purchase registers', 'Bank statements', 'Depreciation and other adjustment details'],
    process: ['Collection of all income and expense data', 'Verification and categorization of entries', 'Calculation of gross profit and net profit', 'Preparation of P&L in standard format', 'Review and finalization'],
    timeline: '2-3 working days after data submission',
  },
  {
    title: 'Balance Sheet Preparation',
    what: 'A Balance Sheet shows the financial position of a business at a specific date — listing assets, liabilities, and equity. It is mandatory for companies and essential for loan applications and audits.',
    who: ['Companies required to maintain balance sheet', 'Businesses applying for loans or investments', 'Organizations undergoing audit', 'Businesses filing ITR-3 or ITR-6'],
    docs: ['P&L statement for the period', 'Fixed assets list with depreciation', 'Loan and liability details', 'Capital and investment details'],
    process: ['Preparation of trial balance', 'Classification of assets and liabilities', 'Adjustment entries for depreciation and provisions', 'Preparation of balance sheet in Schedule III format', 'Review and finalization'],
    timeline: '3-5 working days after data submission',
  },
  {
    title: 'MIS Reports',
    what: 'Management Information System (MIS) reports provide business owners with key financial and operational data to make informed decisions. Reports include sales analysis, expense tracking, cash flow, and performance summaries.',
    who: ['Business owners needing regular financial insights', 'Management teams tracking KPIs', 'Startups monitoring cash flow and burn rate', 'Companies presenting to investors or board'],
    docs: ['Monthly accounting data', 'Sales and purchase data', 'Operational expense details', 'Previous period reports for comparison'],
    process: ['Understanding client\'s reporting requirements', 'Collection and compilation of relevant data', 'Preparation of customized MIS reports', 'Analysis and commentary on key figures', 'Monthly sharing with management'],
    timeline: 'Monthly — customized as per client needs',
  },
  {
    title: 'Zoho Books Accounting',
    what: 'We help businesses set up, manage, and maintain their accounts on Zoho Books — a cloud-based accounting software. This includes invoicing, expense tracking, bank feeds, GST compliance, and financial reporting within Zoho Books.',
    who: ['Businesses wanting to move to cloud accounting', 'Companies already using Zoho Books', 'Startups setting up accounting systems', 'Businesses needing real-time financial visibility'],
    docs: ['Existing accounts data for migration', 'Business and GST details', 'Bank account information for integration', 'Chart of accounts details'],
    process: ['Zoho Books account setup and configuration', 'Chart of accounts creation', 'Bank feed integration', 'GST settings configuration', 'Ongoing transaction recording and reporting'],
    timeline: 'Setup in 2-3 days — ongoing monthly service',
  },
  {
    title: 'Tally Accounting',
    what: 'Tally is India\'s most widely used accounting software. We provide complete Tally accounting services — from data entry and voucher creation to GST return preparation and financial statement generation.',
    who: ['Businesses using Tally for accounting', 'Companies needing Tally data entry support', 'Businesses preparing GST returns via Tally', 'Organizations requiring Tally-based financial reports'],
    docs: ['All transaction vouchers and invoices', 'Bank statements for reconciliation', 'Opening balance and master data', 'GST details and rate configuration'],
    process: ['Tally setup and master configuration', 'Daily/monthly transaction entry', 'Bank reconciliation in Tally', 'GST report generation and verification', 'Financial statement preparation from Tally'],
    timeline: 'Ongoing — daily or monthly entry as agreed',
  },
]

export default function Accounting() {
  const navigate = useNavigate()
  const handleGetStarted = () => {
    const token = localStorage.getItem('userToken')
    if (token) window.open('https://wa.me/918287746345', '_blank')
    else navigate('/login')
  }

  return (
    <>
      <SEO
        title="Accounting & Bookkeeping Services"
        description="Complete accounting and bookkeeping services — monthly accounting, P&L, balance sheet, MIS reports, Tally and Zoho Books by Dhanna Enterprises."
        keywords="accounting services, bookkeeping, P&L statement, balance sheet, MIS reports, Tally accounting, Zoho Books"
      />
      <div style={{background: '#f8f7f4'}} className="min-h-screen">
        <div className="py-16 px-6" style={{background: 'linear-gradient(135deg, #0f2044, #163060)'}}>
          <div className="max-w-5xl mx-auto">
            <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{color: '#08d24f'}}>Our Services</p>
            <h1 className="text-5xl font-bold text-white mb-4">Accounting & Bookkeeping</h1>
            <p className="text-gray-300 max-w-2xl">Complete accounting solutions — from daily bookkeeping to financial statements, MIS reports and software-based accounting on Tally and Zoho Books.</p>
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
            <h3 className="text-3xl font-bold text-white mb-3">Need accounting support?</h3>
            <p className="text-gray-400 mb-6">Talk to our accounting experts for free — we'll set up the right system for your business.</p>
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