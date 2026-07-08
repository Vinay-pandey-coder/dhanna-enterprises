import { useEffect } from 'react'

export default function SEO({ title, description, keywords }) {
  useEffect(() => {
    document.title = `${title} | Dhanna Enterprises`

    const setMeta = (name, content) => {
      let el = document.querySelector(`meta[name="${name}"]`)
      if (!el) {
        el = document.createElement('meta')
        el.setAttribute('name', name)
        document.head.appendChild(el)
      }
      el.setAttribute('content', content)
    }

    if (description) setMeta('description', description)
    if (keywords) setMeta('keywords', keywords)

  }, [title, description, keywords])

  return null
}