export default function TopBar() {
  return (
    <div style={{background: '#081729'}} className="text-white text-sm py-2.5 px-6">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
        <div className="flex items-center gap-8">
          <a href="tel:8287746345"
            className="flex items-center gap-2 transition-colors"
            style={{color: '#08d24f'}}
            onMouseOver={e => e.currentTarget.style.color='#f0c040'}
            onMouseOut={e => e.currentTarget.style.color='#08d24f'}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-phone-icon lucide-phone"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"/></svg> <span className="font-medium">8287746345</span>
          </a>
          <a href="mailto:support.dhanna@gmail.com"
            className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-mail"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg> <span>support.dhanna@gmail.com</span>
          </a>
        </div>
        <a href="https://wa.me/918287746345" target="_blank" rel="noreferrer"
          className="font-semibold text-xs px-5 py-1.5 rounded-full transition-all"
          style={{background: '#007B2B', color: '#fff'}}
          onMouseOver={e => e.currentTarget.style.background='#f0c040'}
          onMouseOut={e => e.currentTarget.style.background='#d4a017'}>
          Connect Now
        </a>
      </div>
    </div>
  )
}