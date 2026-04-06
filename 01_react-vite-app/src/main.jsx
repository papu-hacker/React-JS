import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

// function MyApp() {
//   return (
//     <h1>custom app! </h1>
//   )
// }

// const reactElement = React.createElement(
//   'a',
//   { href: 'https://example.com', target: '_blank' },
//   'click to visit example'
// )

createRoot(document.getElementById('root')).render(

  <App />
  // <MyApp />
  // reactElement
)
