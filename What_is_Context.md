# What is React Context
React Context provides a way to pass data through the component tree without manually passing props at every level. It's useful for globally accessible values (theme, auth, locale) so deeply nested components can read/write them without prop drilling.

Key parts:

    - createContext(defaultValue) — creates a Context object.
    - Provider — supplies the context value to descendants.
    - Consumer or useContext(Context) — reads the current context value.
    - Context updates cause re-render of consuming components.

## Scenario 1 — Passing login data via props (no Context)
This example shows logging in, storing user data in App state, and passing it down to Profile via props.

```jsx
// App.jsx
import React, { useState } from "react";
import Login from "./Login";
import Profile from "./Profile";

export default function App() {
  const [user, setUser] = useState(null);

  return (
    <div>
      <h1>App</h1>
      <Login onLogin={(u) => setUser(u)} />
      <Profile user={user} />
    </div>
  );
}```

```jsx
// Login.jsx
import React from "react";

export default function Login({ onLogin }) {
  function handleLogin() {
    const userData = { id: 1, name: "Alice", email: "alice@example.com" };
    onLogin(userData);
  }
  return <button onClick={handleLogin}>Log in</button>;
}```

```jsx
// Profile.jsx
import React from "react";

export default function Profile({ user }) {
  if (!user) return <div>Please log in.</div>;
  return (
    <div>
      <h2>Profile</h2>
      <p><strong>Name:</strong> {user.name}</p>
      <p><strong>Email:</strong> {user.email}</p>
    </div>
  );
}
```

Notes: This requires passing `user` prop wherever needed; prop drilling can become cumbersome for many nested levels.

## Scenario 2 — Using React Context to share login data
This example creates an AuthContext so Login sets user in context and Profile reads from it without prop drilling.

```jsx
// authContext.js
import React, { createContext, useState } from "react";

export const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const login = (u) => setUser(u);
  // const logout = () => setUser(null);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
```

```jsx
// App.jsx
import React from "react";
import { AuthProvider } from "./authContext";
import Login from "./Login";
import Profile from "./Profile";

export default function App() {
  return (
    <AuthProvider>
      <h1>App with Context</h1>
      <Login />
      <Profile />
    </AuthProvider>
  );
}
```

```jsx
// Login.jsx
import React, { useContext } from "react";
import { AuthContext } from "./authContext";

export default function Login() {
  const { login } = useContext(AuthContext);
  function handleLogin() {
    const userData = { id: 1, name: "Alice", email: "alice@example.com" };
    login(userData);
  }
  return <button onClick={handleLogin}>Log in (Context)</button>;
}
```

```jsx
// Profile.jsx
import React, { useContext } from "react";
import { AuthContext } from "./authContext";

export default function Profile() {
  const { user, logout } = useContext(AuthContext);
  if (!user) return <div>Please log in.</div>;
  return (
    <div>
      <h2>Profile (Context)</h2>
      <p><strong>Name:</strong> {user.name}</p>
      <p><strong>Email:</strong> {user.email}</p>
      <button onClick={logout}>Log out</button>
    </div>
  );
}
```

When to use Context:
- Use for global app state like authenticated user, theme, or locale.
- Avoid overusing for frequently changing local state — it can cause extra re-renders; consider memoization or splitting contexts.

That’s it — two concrete implementations: one with props and one with Context.

--- 

# React Context — brief
React Context provides a way to share values (like auth user, theme, settings) across the component tree without passing props at every level. Create a Context, provide a value with a Provider, and consume it with useContext (or Context.Consumer).

## Example 1 — data passed from Login to Profile via props (no Context)
- App holds user state, passes setter to Login and user to Profile.

```jsx
// App.jsx
import React, { useState } from "react";
import Login from "./Login";
import Profile from "./Profile";

export default function App() {
  const [user, setUser] = useState(null);
  return (
    <div>
      <h1>App (No Context)</h1>
      <Login onLogin={setUser} />
      <hr />
      <Profile user={user} />
    </div>
  );
}```

```jsx
// Login.jsx
import React, { useState } from "react";

export default function Login({ onLogin }) {
  const [name, setName] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    // simulate login result
    const loggedUser = { id: 1, name, email: `${name.toLowerCase()}@example.com` };
    onLogin(loggedUser);
    setName("");
  }
  return (
    <form onSubmit={handleSubmit}>
      <input value={name} onChange={e => setName(e.target.value)} placeholder="Name" />
      <button type="submit">Login</button>
    </form>
  );
}```

// Profile.jsx
import React from "react";

export default function Profile({ user }) {
  if (!user) return <p>No user logged in.</p>;
  return (
    <div>
      <h2>Profile</h2>
      <p><strong>ID:</strong> {user.id}</p>
      <p><strong>Name:</strong> {user.name}</p>
      <p><strong>Email:</strong> {user.email}</p>
    </div>
  );
}
```

When the tree is shallow this is fine; passing props becomes verbose if many nested components need user.

## Example 2 — same flow using React Context
- Create AuthContext, provide it in App, consume in Login and Profile.

```jsx
// authContext.js
import React from "react";
export const AuthContext = React.createContext(null);```

```jsx
// App.jsx
import React, { useState } from "react";
import { AuthContext } from "./authContext";
import Login from "./LoginWithContext";
import Profile from "./ProfileWithContext";

export default function App() {
  const [user, setUser] = useState(null);
  const value = { user, setUser }; // provide both read/write
  return (
    <AuthContext.Provider value={value}>
      <h1>App (With Context)</h1>
      <Login />
      <hr />
      <Profile />
    </AuthContext.Provider>
  );
}```

```jsx
// LoginWithContext.jsx
import React, { useState, useContext } from "react";
import { AuthContext } from "./authContext";

export default function LoginWithContext() {
  const [name, setName] = useState("");
  const { setUser } = useContext(AuthContext);
  function handleSubmit(e) {
    e.preventDefault();
    const loggedUser = { id: 1, name, email: `${name.toLowerCase()}@example.com` };
    setUser(loggedUser);
    setName("");
  }
  return (
    <form onSubmit={handleSubmit}>
      <input value={name} onChange={e => setName(e.target.value)} placeholder="Name" />
      <button type="submit">Login</button>
    </form>
  );
}```

```jsx
// ProfileWithContext.jsx
import React, { useContext } from "react";
import { AuthContext } from "./authContext";

export default function ProfileWithContext() {
  const { user } = useContext(AuthContext);
  if (!user) return <p>No user logged in.</p>;
  return (
    <div>
      <h2>Profile (from Context)</h2>
      <p><strong>ID:</strong> {user.id}</p>
      <p><strong>Name:</strong> {user.name}</p>
      <p><strong>Email:</strong> {user.email}</p>
    </div>
  );
}
```

When to use which:
- Use props/state lifting for simple, shallow cases.
- Use Context when many components at various depths need the same value (auth, theme, locale). Context centralizes access and avoids prop drilling.
