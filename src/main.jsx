// import { render } from 'react'
// import { App } from './App.jsx'
// import './index.css'

// render(<App />, document.getElementById('app'))

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('app')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

