import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

const reactDom = ReactDOM.createRoot(
   document.getElementById('root') as HTMLElement
)

reactDom.render(
   <React.StrictMode>
      <App />
   </React.StrictMode>
)
