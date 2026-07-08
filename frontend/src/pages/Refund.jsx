import SEO from '../components/SEO'


export default function Refund() {
  return (
    <>
    <SEO
  title="Refund Policy"
  description="Refund and Cancellation Policy of Dhanna Enterprises for tax and compliance services."
  keywords="refund policy Dhanna Enterprises"
/>
    <div style={{background: '#f8f7f4'}} className="py-20 px-6 min-h-screen">
      <div className="max-w-3xl mx-auto">

        <div className="text-center mb-12">
          <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{color: '#d4a017'}}>Legal</p>
          <h2 className="text-5xl font-bold mb-3" style={{color: '#0f2044'}}>Refund & Cancellation Policy</h2>
          <p className="text-gray-400 text-sm">Last updated: January 2025</p>
        </div>

        <div className="rounded-3xl p-10"
          style={{background: 'white', border: '1px solid #e8e4dc', boxShadow: '0 2px 20px rgba(0,0,0,0.05)'}}>

          <ul className="space-y-4 mb-8">
            {[
              'Fees paid for government registrations, licenses, DSC, GST, ITR, FSSAI, IEC, Trademark, or similar services are generally non-refundable once the application process has started.',
              'If payment is made by mistake and work has not started, a refund request may be considered.',
              'Government fees and third-party charges are non-refundable.',
              'Refund requests must be submitted via email or WhatsApp within 24 hours of payment.',
              'Approved refunds will be processed within 7–10 working days.',
              'For customized professional services, work already started or delivered is not refundable.',
            ].map(point => (
              <li key={point} className="flex items-start gap-3 text-sm text-gray-600 leading-relaxed">
                <span style={{color: '#d4a017'}} className="mt-0.5">✦</span> {point}
              </li>
            ))}
          </ul>

          <div className="pt-8" style={{borderTop: '1px solid #f0ece4'}}>
            <h3 className="text-lg font-bold mb-4" style={{color: '#0f2044'}}>By Using This Website, You Agree To:</h3>
            <ul className="space-y-3">
              {[
                'Provide accurate information.',
                'Use the website only for lawful purposes.',
                'Not misuse or copy website content without permission.',
                'Pay applicable service fees before work begins.',
                'Understand that government approvals depend on respective authorities and cannot be guaranteed.',
                'Any disputes shall be subject to the jurisdiction of the courts in your city/state.',
              ].map(point => (
                <li key={point} className="flex items-start gap-3 text-sm text-gray-600 leading-relaxed">
                  <span style={{color: '#d4a017'}} className="mt-0.5">✦</span> {point}
                </li>
              ))}
            </ul>
          </div>

          <p className="text-xs text-gray-400 text-center mt-10">
            © 2025 Dhanna Enterprises. All Rights Reserved.
          </p>
        </div>
      </div>
    </div>
    </>
  )
}