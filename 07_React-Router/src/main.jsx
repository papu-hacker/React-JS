import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import './index.css'
// import Contact from './pages/Contact.jsx'
// import About from './pages/About.jsx'
// import Users from './pages/Users.jsx'
// import Home from './pages/Home.jsx'
// import App from './App.jsx'
import Layout from './Layout.jsx'
import { About, Contact, Github, Home, Users, ghDataLoader } from './pages/index'
import Garud from './pages/Garud.jsx'

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout />,
//     children: [
//       {
//         path: "",
//         element: <Home />
//       },
//       {
//         path: 'about',
//         element:<About />
//       },
//       {
//         path: 'contact',
//         element:<Contact />
//       }
//     ]
//   }
// ])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />} />
      <Route path='about' element={<About />}>
        <Route path='garud' element={<Garud />} />
      </Route>
      <Route path='contact' element={<Contact />} />
      <Route path='users/:id' element={<Users />} />
      <Route loader={ghDataLoader} path='github' element={<Github />} />
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
    {/* <BrowserRouter>
      <App />
    </BrowserRouter> */}
  </StrictMode>,
)
