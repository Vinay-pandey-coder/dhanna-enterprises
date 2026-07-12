import SEO from '../../components/SEO'
import { useNavigate } from 'react-router-dom'

const services = [
  {
    title: 'TDS Return Filing',
    what: 'TDS Return Filing involves submitting quarterly statements of tax deducted at source to the Income Tax Department. It is mandatory for all deductors and must be filed within due dates to avoid interest, penalties, and late filing fees.',
    who: ['All businesses deducting TDS on salary (Form 24Q)', 'Companies deducting TDS on contractor/professional payments (Form 26Q)', 'Businesses with TDS on rent or other payments', 'Organizations with TDS on foreign payments (Form 27Q)'],
    docs: ['TAN number and login credentials', 'Details of all deductees (name, PAN, amount paid, TDS deducted)', 'TDS challan payment details (BSR code, challan date, serial number)', 'Previous quarter return (if correction needed)'],
    process: ['Collection of deductee and payment details', 'Preparation of TDS return data', 'Validation using RPU (Return Preparation Utility)', 'Generation of FVU file', 'Filing on TRACES portal or through TIN-FC'],
    timeline: 'Quarterly — due 31st of month after quarter end',
  },
  {
    title: 'TDS Correction',
    what: 'TDS Correction allows deductors to rectify errors in filed TDS returns — such as wrong PAN, incorrect amount, wrong challan details, or missing deductee entries. Corrections are essential for deductees to claim proper TDS credit.',
    who: ['Deductors who filed TDS return with errors', 'Businesses with wrong PAN of deductees', 'Companies with challan mismatch in TDS returns', 'Organizations needing to add missed deductee entries'],
    docs: ['Original TDS return acknowledgment (PRN)', 'Correct details for the fields to be amended', 'Correct PAN of deductees (if PAN was wrong)', 'Correct challan details (if challan was wrong)'],
    process: ['Identification of errors in original TDS return', 'Download of original return from TRACES', 'Preparation of correction statement', 'Validation and generation of corrected FVU file', 'Filing of correction statement on TRACES'],
    timeline: '2-3 working days after information provided',
  },
  {
    title: 'Form 16 & 16A',
    what: 'Form 16 is issued to employees showing salary paid and TDS deducted. Form 16A is issued for non-salary TDS deductions like professional fees, rent, and interest. Both are mandatory and must be issued within due dates.',
    who: ['Employers needing to issue Form 16 to employees', 'Companies issuing Form 16A to contractors or professionals', 'Businesses issuing TDS certificates for rent or interest payments', 'Organizations with request from deductees for TDS certificate'],
    docs: ['Filed TDS return details', 'TRACES login credentials', 'Employee/deductee PAN details', 'Salary breakup or payment details (for Form 16)'],
    process: ['Login to TRACES portal', 'Request for Form 16/16A download', 'Download of Part A from TRACES (government generated)', 'Preparation of Part B for Form 16 (salary details)', 'Digital signing and issuance to employees/deductees'],
    timeline: 'Form 16 due by 15th June — Form 16A within 15 days of each quarter',
  },
  {
    title: 'TDS Notice Reply',
    what: 'Income Tax Department may issue notices for TDS short deduction, non-deduction, late payment, or mismatch between TDS return and Form 26AS. A timely and accurate reply is essential to avoid demand and penalty orders.',
    who: ['Deductors who received TDS demand notice', 'Businesses with short deduction notices', 'Companies with late payment interest demands', 'Organizations with mismatch notices from TRACES'],
    docs: ['Copy of TDS notice received', 'TDS returns filed for relevant periods', 'Challan payment details', 'Books of accounts for the relevant period'],
    process: ['Detailed analysis of notice and demand', 'Verification of TDS deducted and deposited', 'Identification of discrepancy or genuine demand', 'Drafting of detailed reply with supporting documents', 'Submission on income tax portal within due date'],
    timeline: 'As per notice timeline — typically 30 days',
  },
]

export default function Tds() {
  const navigate = useNavigate()
  const handleGetStarted = () => {
    const token = localStorage.getItem('userToken')
    if (token) window.open('https://wa.me/918287746345', '_blank')
    else navigate('/login')
  }

  return (
    <>
<SEO
  title="TDS Services"
  description="TDS return filing, TDS correction, Form 16 and 16A issuance and TDS notice reply services by Dhanna Enterprises."
  keywords="TDS return filing, TDS correction, Form 16, Form 16A, TDS notice reply, TDS compliance India"
/>
      <div style={{background: '#f8f7f4'}} className="min-h-screen">
        <div className="py-16 px-6" style={{background: 'linear-gradient(135deg, #0f2044, #163060)'}}>
          <div className="max-w-5xl mx-auto">
            <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{color: '#08d24f'}}>Our Services</p>
            <h1 className="text-5xl font-bold text-white mb-4">TDS Services</h1>
            <p className="text-gray-300 max-w-2xl">TDS return filing, corrections, Form 16/16A and notice replies — complete TDS compliance support for businesses and individuals.</p>
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
<h3 className="text-3xl font-bold text-white mb-3">Need TDS filing support?</h3>
<p className="text-gray-400 mb-6">Talk to our TDS experts — we'll ensure accurate and timely TDS compliance for your business.</p>
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