Great — I'll teach React Router from scratch with concise, hands-on lessons and examples you can run in a Vite + Bun React project. I'll assume JavaScript (not TypeScript). We'll progress in small steps you can try locally.

Lesson plan (fast path)
1) Install and setup
2) Basic routing (Routes, Route)
3) Navigation (Link, NavLink)
4) Route params and useParams
5) Nested routes and Outlet
6) Index routes and default child
7) Redirects / navigation programmatically (Navigate, useNavigate)
8) Protected routes (auth example)
9) Data loading patterns (loaders / fetch inside components)
10) Useful hooks (useLocation, useSearchParams, useMatch)
11) Deployment notes (SPA fallback)
Follow along: create a Vite+React project (if you already have one skip)
- bun create vite ./my-app --template react
- cd my-app
- bun add react-router-dom
- bun run dev

1) Minimal app wiring
- Wrap app with BrowserRouter in entry (src/main.jsx):
```jsx
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
createRoot(document.getElementById("root")).render(
  <BrowserRouter><App /></BrowserRouter>
);
```

2) Basic routing
- src/App.jsx:
```jsx
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
export default function App(){
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/about" element={<About/>} />
      <Route path="*" element={<div>404</div>} />
    </Routes>
  );
}
```
Try: visiting / and /about.

3) Navigation
- Use Link to navigate without reload:
```jsx
import { Link } from "react-router-dom";
<Link to="/about">About</Link>
```
- NavLink highlights active route:
```jsx
<NavLink to="/about" style={({isActive})=>({fontWeight:isActive?'bold':'normal'})}>About</NavLink>
```

4) Route params
- Define param in path: /posts/:id
- Read with useParams:
```jsx
// route: <Route path="/posts/:id" element={<Post/>}/>
import { useParams } from "react-router-dom";
const { id } = useParams();
```

5) Nested routes & Outlet
- Parent route renders common UI and <Outlet/> for children.
```jsx
// App.jsx
<Routes>
  <Route path="/dashboard" element={<DashboardLayout/>}>
    <Route index element={<DashboardHome/>} />
    <Route path="settings" element={<Settings/>} />
  </Route>
</Routes>

// DashboardLayout.jsx
import { Outlet, Link } from "react-router-dom";
export default function DashboardLayout(){
  return (<div><nav><Link to=".">Home</Link><Link to="settings">Settings</Link></nav><Outlet/></div>);
}
```
- Access child at /dashboard and /dashboard/settings.

6) Index routes
- Use index prop for default child when path matches parent:
<Route index element={<DashboardHome/>} />

7) Redirects and programmatic navigation
- Redirect: <Route path="/old" element={<Navigate to="/new" replace />} />
- Imperative navigation: useNavigate()
```jsx
const nav = useNavigate();
nav('/dashboard'); // push
nav('/login', { replace:true }); // replace
```

8) Protected routes (basic)
- Create an Auth wrapper that checks login and either renders children or redirects.
```jsx
function RequireAuth({ children, isAuth }){
  if(!isAuth) return <Navigate to="/login" replace />;
  return children;
}
// usage
<Route path="/dashboard" element={
  <RequireAuth isAuth={user!=null}><Dashboard/></RequireAuth>
} />
```

9) Data loading patterns
- Simple: fetch in useEffect inside component.
- For larger apps, centralize API calls in services and fetch before render, or adopt React Router data APIs (loaders) in future versions. Example:
```jsx
useEffect(()=>{ fetch(`/api/posts`).then(r=>r.json()).then(setPosts); },[]);
```

10) Useful hooks quick reference
- useLocation() — current location object (pathname, search, state)
- useNavigate() — programmatic nav
- useParams() — route params
- useSearchParams() — read/set query params
- useMatch(pattern) — test a match against current URL

11) SPA deployment note
- Configure static host to fallback to index.html for client-side routes (rewrites). On many hosts enable single-page app fallback.

Practice exercises (do these)
1) Add a /posts list and /posts/:id detail using fetch mock data.
2) Implement nested /dashboard with index and child routes.
3) Add login state and a RequireAuth wrapper for /dashboard.
4) Use search params to implement pagination: /blog?page=2 using useSearchParams.

A minimal example to paste and run (pages + routes) — tell me if you want that exact repo created. Which lesson next? I can send full code for any single lesson (e.g., nested routes + layout, or auth + protected routes).