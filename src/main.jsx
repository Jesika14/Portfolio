import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { initScrollButtonVisibility } from './utils/scrollHelper.js'
import { initAnimationObservers } from './utils/animationObserver.js'
import { preventIframeZoom } from './utils/iframeHelper.js'

// Initialize helpers
initScrollButtonVisibility();
initAnimationObservers();
preventIframeZoom();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
