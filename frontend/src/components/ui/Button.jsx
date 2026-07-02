export default function Button({ children, href, variant = 'primary', className = '' }) {
  const base = 'inline-block font-bold px-8 py-3 rounded-full transition-all hover:scale-105'
  const variants = {
    primary: 'bg-yellow-400 hover:bg-yellow-300 text-black shadow',
    outline: 'border-2 border-white text-white hover:bg-white/10',
  }
  return (
    <a href={href} className={`${base} ${variants[variant]} ${className}`}>
      {children}
    </a>
  )
}