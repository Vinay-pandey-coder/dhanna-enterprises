export default function Terms() {
  return (
    <div style={{background: '#f8f7f4'}} className="py-20 px-6 min-h-screen">
      <div className="max-w-3xl mx-auto">

        <div className="text-center mb-12">
          <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{color: '#d4a017'}}>Legal</p>
          <h2 className="text-5xl font-bold mb-3" style={{color: '#0f2044'}}>Terms & Conditions</h2>
          <p className="text-gray-400 text-sm">Last updated: January 2025</p>
        </div>

        <div className="rounded-3xl p-10"
          style={{background: 'white', border: '1px solid #e8e4dc', boxShadow: '0 2px 20px rgba(0,0,0,0.05)'}}>

          {[
            {
              title: '1. Acceptance of Terms',
              content: 'By accessing and using the services of Dhanna Enterprises, you agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, please do not use our services.'
            },
            {
              title: '2. Services Offered',
              content: 'Dhanna Enterprises provides tax and financial services including but not limited to Income Tax Return (ITR) filing, GST Registration and Return Filing, Accounting, Bookkeeping, Audit & Compliance, MSME/Udyam Registration, and TDS Filing. All services are subject to availability and applicable government regulations.'
            },
            {
              title: '3. Client Responsibilities',
              content: 'Clients are responsible for providing accurate, complete and timely information and documents required for service delivery. Dhanna Enterprises shall not be held liable for errors or penalties arising from incorrect or incomplete information provided by the client.'
            },
            {
              title: '4. Fees & Payment',
              content: 'Service fees are communicated to the client before commencement of work. Payments are to be made as agreed. Dhanna Enterprises reserves the right to pause or discontinue services in case of non-payment. All fees paid are non-refundable unless otherwise agreed in writing.'
            },
            {
              title: '5. Confidentiality',
              content: 'We treat all client information as strictly confidential. Your personal, financial and business information will not be shared with any third party without your explicit consent, except where required by law or government authorities.'
            },
            {
              title: '6. Accuracy of Filing',
              content: 'While we take every care to ensure accurate and timely filing, Dhanna Enterprises shall not be held responsible for any penalties, interest or legal consequences arising from government system errors, client-provided incorrect information, or changes in tax laws after the work has been completed.'
            },
            {
              title: '7. Turnaround Time',
              content: 'We aim to complete all filings within the committed timeframe. However, delays caused by government portal issues, incomplete client documents, or force majeure events are beyond our control and we shall not be liable for such delays.'
            },
            {
              title: '8. Limitation of Liability',
              content: 'Dhanna Enterprises\' total liability in any matter arising out of these terms shall not exceed the fees paid by the client for the specific service in question. We shall not be liable for any indirect, incidental or consequential damages.'
            },
            {
              title: '9. Governing Law',
              content: 'These Terms and Conditions shall be governed by and construed in accordance with the laws of India. Any disputes arising shall be subject to the jurisdiction of courts in India.'
            },
            {
              title: '10. Changes to Terms',
              content: 'Dhanna Enterprises reserves the right to modify these terms at any time. Updated terms will be posted on this page. Continued use of our services after changes constitutes acceptance of the revised terms.'
            },
            {
              title: '11. Contact',
              content: 'For any questions regarding these Terms & Conditions, contact us at support.dhanna@gmail.com or call 8287746345.'
            },
          ].map(section => (
            <div key={section.title} className="mb-8 pb-8"
              style={{borderBottom: '1px solid #f0ece4'}}>
              <h3 className="text-lg font-bold mb-3" style={{color: '#0f2044'}}>{section.title}</h3>
              <p className="text-gray-600 leading-relaxed text-sm">{section.content}</p>
            </div>
          ))}

          <p className="text-xs text-gray-400 text-center mt-4">
            © 2025 Dhanna Enterprises. All Rights Reserved.
          </p>
        </div>
      </div>
    </div>
  )
}