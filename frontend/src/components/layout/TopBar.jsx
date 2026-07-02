export default function TopBar() {
  return (
    <div style={{background: '#050d1a'}} className="text-white text-sm py-2.5 px-6">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
        <div className="flex items-center gap-8">
          <a href="tel:8287746345"
            className="flex items-center gap-2 transition-colors"
            style={{color: '#d4a017'}}
            onMouseOver={e => e.currentTarget.style.color='#f0c040'}
            onMouseOut={e => e.currentTarget.style.color='#d4a017'}>
            📞 <span className="font-medium">8287746345</span>
          </a>
          <a href="mailto:support.dhanna@gmail.com"
            className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors">
            ✉️ <span>support.dhanna@gmail.com</span>
          </a>
        </div>
        <a href="https://wa.me/918287746345" target="_blank" rel="noreferrer"
          className="font-semibold text-xs px-5 py-1.5 rounded-full transition-all"
          style={{background: '#d4a017', color: '#050d1a'}}
          onMouseOver={e => e.currentTarget.style.background='#f0c040'}
          onMouseOut={e => e.currentTarget.style.background='#d4a017'}>
          Connect Now
        </a>
      </div>
    </div>
  )
}