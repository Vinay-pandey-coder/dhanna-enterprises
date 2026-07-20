import SEO from '../../components/SEO'
import { useNavigate } from 'react-router-dom'

const services = [
  {
    title: 'IEC Registration',
    what: 'Import Export Code (IEC) is a 10-digit code issued by the Directorate General of Foreign Trade (DGFT) and is mandatory for any business that wants to import or export goods or services from India. Without IEC, customs clearance is not possible.',
    who: ['Businesses planning to import goods from abroad', 'Companies wanting to export products or services', 'E-commerce sellers selling to international customers', 'Individuals importing goods for commercial purposes'],
    docs: ['PAN Card of business/proprietor', 'Aadhaar Card of proprietor/director', 'Bank certificate or cancelled cheque', 'Business address proof', 'Digital Signature Certificate (DSC) or Aadhaar OTP'],
    process: ['Document collection and verification', 'Filing of IEC application on DGFT portal', 'Payment of government fee (Rs. 500)', 'Aadhaar OTP or DSC verification', 'IEC issued instantly after verification'],
    timeline: '1-2 working days',
  },
  {
    title: 'IEC Modification',
    what: 'IEC Modification allows IEC holders to update their registration details such as business name, address, bank details, authorized signatory, or addition of new branch or manufacturing unit. Keeping IEC updated is mandatory for smooth trade operations.',
    who: ['Businesses with change in address or bank details', 'Companies with change in authorized signatory', 'Businesses adding new branches or units', 'IEC holders with change in business name or structure'],
    docs: ['Existing IEC number and login credentials', 'Documents supporting the modification', 'Updated bank account details (if changing bank)', 'New address proof (if address change)'],
    process: ['Login to DGFT portal with existing IEC', 'Selection of fields to be modified', 'Upload of supporting documents', 'Aadhaar OTP or DSC verification', 'Updated IEC certificate generated'],
    timeline: '1-2 working days',
  },
  {
    title: 'IEC Renewal Support',
    what: 'While IEC does not have an expiry date, it requires annual updation/confirmation on the DGFT portal every year between April and June. Failure to update can result in deactivation of IEC. We assist with timely annual IEC updation.',
    who: ['All IEC holders for annual updation', 'Businesses whose IEC has been deactivated', 'Companies wanting to reactivate their IEC', 'Exporters needing active IEC for shipping'],
    docs: ['Existing IEC number and DGFT login credentials', 'Updated business details (if any changes)', 'Current bank account details'],
    process: ['Login to DGFT portal', 'Verification of existing IEC details', 'Update of any changed information', 'Annual confirmation submission', 'Updated IEC status confirmation'],
    timeline: '1 working day',
  },
  {
    title: 'Export Documentation',
    what: 'Export documentation involves preparing and verifying all documents required for smooth export of goods — including commercial invoice, packing list, bill of lading, certificate of origin, and export declaration. Proper documentation ensures quick customs clearance.',
    who: ['First-time exporters needing documentation guidance', 'Businesses exporting to new countries', 'Companies facing customs documentation issues', 'Exporters wanting to ensure compliance with importing country requirements'],
    docs: ['Purchase order from buyer', 'Commercial invoice details', 'Packing list and shipment details', 'Certificate of origin requirements', 'Letter of credit (if applicable)'],
    process: ['Review of buyer requirements and country regulations', 'Preparation of commercial invoice and packing list', 'Assistance with bill of lading or airway bill', 'Certificate of origin from chamber of commerce', 'Export declaration and customs filing support'],
    timeline: '2-3 working days per shipment',
  },
  {
    title: 'Import Compliance',
    what: 'Import compliance involves ensuring all imports are done in accordance with Indian customs regulations, import policies, and applicable duties. We help businesses understand import duties, file bills of entry, and comply with import licensing requirements.',
    who: ['Businesses importing raw materials or finished goods', 'Companies with restricted or licensed import items', 'Importers facing customs duty disputes', 'Businesses setting up import operations for the first time'],
    docs: ['Import invoice and packing list', 'Bill of lading or airway bill', 'IEC certificate', 'Import license (if applicable)', 'GST registration details'],
    process: ['Review of import documents and product classification', 'Calculation of applicable customs duties and GST', 'Filing of bill of entry for customs clearance', 'Compliance check with import policy', 'Coordination for duty payment and goods release'],
    timeline: '2-5 working days depending on customs clearance',
  },
]

export default function Iec() {
  const navigate = useNavigate()
  const handleGetStarted = () => {
    const token = localStorage.getItem('userToken')
    if (token) window.open('https://wa.me/918287746345', '_blank')
    else navigate('/login')
  }

  return (
    <>
      <SEO
        title="Import Export Services"
        description="IEC registration, modification, renewal, export documentation and import compliance services by Dhanna Enterprises."
        keywords="IEC registration, import export code, DGFT registration, export documentation, import compliance India"
      />
      <div style={{background: '#f8f7f4'}} className="min-h-screen">
        <div className="py-16 px-6" style={{background: 'linear-gradient(135deg, #0f2044, #163060)'}}>
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">
            <div>
            <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{color: '#08d24f'}}>Our Services</p>
            <h1 className="text-5xl font-bold text-white mb-4">Import Export Services</h1>
            <p className="text-gray-300 max-w-2xl">IEC registration, modifications, annual updation, export documentation and import compliance — complete support for your international trade operations.</p>
            </div>
                <div className="hidden md:flex justify-center">
      <img
        src="/images/iec.webp"
        alt="IEC Services"
        className="w-full max-w-sm object-contain rounded-2xl"
        style={{maxHeight: '280px'}}
      />
    </div>
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
            <h3 className="text-3xl font-bold text-white mb-3">Ready to start importing or exporting?</h3>
            <p className="text-gray-400 mb-6">Get your IEC registered today and expand your business globally.</p>
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