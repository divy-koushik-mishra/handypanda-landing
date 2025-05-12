import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { Helmet } from 'react-helmet';


createRoot(document.getElementById('root')!).render(

  <StrictMode>
    <Helmet>
        <title>HandyPanda – Quality Construction Materials</title>
        <meta name="description" content="Get top-quality construction materials delivered quickly and reliably with HandyPanda. Trusted by contractors and builders across India." />
        <meta name="keywords" content="construction, materials, building supplies, cement, bricks, HandyPanda" />
        <meta name="author" content="HandyPanda" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="HandyPanda – Construction Materials at Your Doorstep" />
        <meta property="og:description" content="We supply quality building materials directly to your site. Save time, save money!" />
        <meta property="og:image" content="https://www.handypanda.in/logo.jpeg" />
        <meta property="og:url" content="https://www.handypanda.in/" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="HandyPanda – Construction Materials at Your Doorstep" />
        <meta name="twitter:description" content="We supply quality building materials directly to your site. Save time, save money!" />
        <meta name="twitter:image" content="https://www.handypanda.in/logo.jpeg" />

        {/* Favicon */}
        <link rel="icon" href="/logo.jpeg" />
      </Helmet>
    <App />
  </StrictMode>,
)
