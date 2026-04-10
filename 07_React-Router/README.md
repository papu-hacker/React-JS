## Install and configure React Router in a Vite + Bun React project

Assumptions: you created the project with Vite + Bun and have React already working. These steps use React Router v6+.

1) Install packages
  ```
  bun add react-router-dom
  ```

2) Basic file structure (example)
- src/
  - main.jsx
  - App.jsx
  - pages/
    - Home.jsx
    - About.jsx
    - NotFound.jsx

3) Configure routing Main.jsx: define routes using Routes and Route.
```jsx
import { createRoot } from 'react-dom/client'
import { BrowserRouter, createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
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
//     ]}])
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
  </StrictMode>,
)```


4) Nested routes and layouts (quick example)
  ```jsx
  // routes: /dashboard and /dashboard/settings
  import { Routes, Route, Outlet, Link } from "react-router-dom";

  function DashboardLayout(){
    return (
      <div>
        <h2>Dashboard</h2>
        <nav><Link to="settings">Settings</Link></nav>
        <Outlet />
      </div>
    );
  }

  <Routes>
    <Route path="/dashboard" element={<DashboardLayout />}>
      <Route index element={<DashboardHome />} />
      <Route path="settings" element={<DashboardSettings />} />
    </Route>
  </Routes>
  ```


  


