## React-Context
What is React Context

React Context provides a way to pass data through the component tree without manually passing props at every level. It's useful for globally accessible values (theme, auth, locale) so deeply nested components can read/write them without prop drilling.

Key parts:

    - createContext(defaultValue) — creates a Context object.
    - Provider — supplies the context value to descendants.
    - Consumer or useContext(Context) — reads the current context value.
    - Context updates cause re-render of consuming components.

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
}

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
}

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
export const AuthContext = React.createContext(null);

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
}

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
}

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
