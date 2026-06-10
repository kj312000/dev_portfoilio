import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import '@fontsource-variable/outfit'
import '@fontsource-variable/figtree'
import '@fontsource/dm-mono/400.css'
import '@fontsource/dm-mono/500.css'

import './index.css'
import App from './App'

// Privacy-friendly analytics — enabled only when VITE_ANALYTICS_DOMAIN is set
const analyticsDomain = import.meta.env.VITE_ANALYTICS_DOMAIN
if (analyticsDomain) {
  const s = document.createElement('script')
  s.defer = true
  s.dataset.domain = analyticsDomain
  s.src = 'https://plausible.io/js/script.js'
  document.head.appendChild(s)
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
