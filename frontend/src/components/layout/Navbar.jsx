import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

const links = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Payment', to: '/payment' },
  { label: 'Contact', to: '/contact' },
  { label: 'Google Form', to: '/google-form' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className="sticky top-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? 'rgba(255,255,255,0.97)' : '#0f2044',
        boxShadow: scrolled ? '0 2px 20px rgba(0,0,0,0.1)' : 'none',
        backdropFilter: scrolled ? 'blur(10px)' : 'none'
      }}>
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="font-bold text-xl tracking-wide"
          style={{
            fontFamily: 'Cormorant Garamond, serif',
            color: scrolled ? '#0f2044' : '#d4a017',
            letterSpacing: '0.05em'
          }}>
          Dhanna Enterprises
        </Link>

        <ul className="hidden md:flex items-center gap-2">
          {links.map(link => {
            const isActive = location.pathname === link.to
            return (
              <li key={link.label}>
                <Link to={link.to}
                  className="px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200"
                  style={{
                    color: isActive
                      ? '#d4a017'
                      : scrolled ? '#0f2044' : 'rgba(255,255,255,0.85)',
                    background: isActive
                      ? scrolled ? 'rgba(212,160,23,0.1)' : 'rgba(212,160,23,0.15)'
                      : 'transparent',
                    borderBottom: isActive ? '2px solid #d4a017' : '2px solid transparent'
                  }}>
                  {link.label}
                </Link>
              </li>
            )
          })}
        </ul>

        <button className="md:hidden text-2xl cursor-pointer"
          style={{color: scrolled ? '#0f2044' : 'white'}}
          onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? '✕' : '☰'}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden border-t px-6 py-4 flex flex-col gap-2"
          style={{background: 'white', borderColor: '#e2e8f0'}}>
          {links.map(link => (
            <Link key={link.label} to={link.to}
              onClick={() => setMenuOpen(false)}
              className="py-2 px-3 rounded-lg text-sm font-medium transition-colors"
              style={{color: '#0f2044'}}
              onMouseOver={e => e.currentTarget.style.color='#d4a017'}
              onMouseOut={e => e.currentTarget.style.color='#0f2044'}>
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  )
}