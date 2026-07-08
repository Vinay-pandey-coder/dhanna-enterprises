import { Helmet } from 'react-helmet-async'

export default function SEO({ title, description, keywords }) {
  return (
    <Helmet>
      <title>{title} | Dhanna Enterprises</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Dhanna Enterprises" />
      <meta property="og:title" content={`${title} | Dhanna Enterprises`} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      {/* <meta property="og:url" content="https://dhanna-enterprises.vercel.app/" /> */}
      <link rel="canonical" href="https://dhanna-enterprises.vercel.app/" />
    </Helmet>
  )
}