import SEO from '../components/SEO'

export default function Privacy() {
  return (
    <>
    <SEO
  title="Privacy Policy"
  description="Privacy Policy of Dhanna Enterprises — how we collect, use and protect your personal information."
  keywords="privacy policy Dhanna Enterprises"
/>
    <div style={{background: '#f8f7f4'}} className="py-20 px-6 min-h-screen">
      <div className="max-w-3xl mx-auto">

        <div className="text-center mb-12">
          <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{color: '#d4a017'}}>Legal</p>
          <h2 className="text-5xl font-bold mb-3" style={{color: '#0f2044'}}>Privacy Policy</h2>
          <p className="text-gray-400 text-sm">Last updated: January 2025</p>
        </div>

        <div className="rounded-3xl p-10"
          style={{background: 'white', border: '1px solid #e8e4dc', boxShadow: '0 2px 20px rgba(0,0,0,0.05)'}}>

          <p className="text-gray-600 leading-relaxed text-sm mb-8">
            At Dhanna Enterprises, we respect your privacy.
          </p>

          {[
            {
              title: 'Information We May Collect',
              list: ['Name', 'Mobile Number', 'Email Address', 'Business Details', 'Documents shared for registration, tax filing, or compliance purposes']
            },
            {
              title: 'How We Use This Information',
              list: ['Providing requested services', 'Customer support', 'Legal and compliance requirements', 'Service updates and communication']
            },
          ].map(section => (
            <div key={section.title} className="mb-8 pb-8" style={{borderBottom: '1px solid #f0ece4'}}>
              <h3 className="text-lg font-bold mb-4" style={{color: '#0f2044'}}>{section.title}</h3>
              <ul className="space-y-2">
                {section.list.map(item => (
                  <li key={item} className="flex items-start gap-2 text-sm text-gray-600">
                    <span style={{color: '#d4a017'}}>✦</span> {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="mb-2">
            <p className="text-gray-600 leading-relaxed text-sm">
              We do not sell or share your personal information with third parties except where required by law
              or for service processing purposes. We take reasonable measures to protect your data.
            </p>
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