# React Context Toggle Theme Project

Here’s a clean, well-structured **project documentation/explanation** for your React + Tailwind + Vite + Bun theme toggle app. You can copy this into your README or project docs.

---

# 🌗 Theme Toggle App (React + Tailwind + Vite + Bun)

## 📌 Overview

This project is a simple **theme switcher (Light/Dark mode)** built using:

* React (component-based UI)
* Tailwind CSS (utility-first styling with dark mode support)
* Vite (fast build tool)
* Bun (runtime/package manager)

The app demonstrates how to:

* Use **React Context API** for global state
* Toggle between **light and dark themes**
* Dynamically update the DOM (`<html>` class) for Tailwind dark mode

---

## ⚙️ Project Architecture

```
src/
│
├── components/
│   ├── ThemeBtn.jsx   # Toggle switch component
│   └── Card.jsx       # UI card component
│
├── contexts/
│   └── theme.js       # Theme context & provider
│
├── App.jsx            # Root component
├── index.css          # Tailwind config & dark variant
```

---

## 🧠 Core Concept

Tailwind’s dark mode works by applying a `dark` class to a parent element (usually `<html>` or `<body>`).

👉 This project:

* Stores theme in React state
* Updates `<html>` class dynamically
* Uses Tailwind's `dark:` utilities for styling

---

## 🔁 Theme Flow

1. User toggles switch
2. `ThemeBtn` triggers `darkMode()` or `lightMode()`
3. State updates in `App.jsx`
4. `useEffect` updates `<html>` class
5. Tailwind applies dark styles automatically

---

## 📦 File Breakdown

---

### 🧩 `App.jsx`

**Purpose:** Root component managing global theme state.

### Key Features:

* Stores current theme (`light` or `dark`)
* Provides theme functions via Context
* Updates `<html>` class dynamically

```jsx
const [themeMode, setThemeMode] = useState('light')
```

### Theme Switch Functions:

```jsx
const lightMode = () => setThemeMode("light")
const darkMode = () => setThemeMode("dark")
```

### DOM Update Logic:

```jsx
useEffect(() => {
  document.querySelector('html').classList.remove("light", "dark")
  document.querySelector('html').classList.add(themeMode)
}, [themeMode])
```

👉 This ensures Tailwind applies correct theme styles.

---

### 🌐 `contexts/theme.js`

**Purpose:** Global theme state using React Context.

### Context Creation:

```jsx
export const ThemeContext = createContext({
  themeMode: "light",
  darkMode: () => {},
  lightMode: () => {},
})
```

### Provider:

```jsx
export const ThemeProvider = ThemeContext.Provider
```

### Custom Hook:

```jsx
export default function useTheme() {
  return useContext(ThemeContext)
}
```

👉 This makes theme accessible anywhere in the app.

---

### 🎛️ `ThemeBtn.jsx`

**Purpose:** Toggle switch UI for theme change.

### Logic:

```jsx
const { themeMode, lightMode, darkMode } = useTheme()
```

### Toggle Handler:

```jsx
const onChangeBtn = (e) => {
  const darkModeStatus = e.currentTarget.checked
  if (darkModeStatus) {
    darkMode()
  } else {
    lightMode()
  }
}
```

### Controlled Input:

```jsx
checked={themeMode === "dark"}
```

👉 Ensures UI always reflects current theme state.

---

### 🪪 `Card.jsx`

**Purpose:** UI component demonstrating dark mode styling.

### Key Feature:

Uses Tailwind’s `dark:` classes:

```jsx
<div className="bg-indigo-300 dark:bg-gray-800">
<h5 className="text-gray-900 dark:text-white">
```

👉 Automatically changes styles when theme switches.

---

### 🎨 `index.css`

**Purpose:** Tailwind setup with custom dark variant.

```css
@import "tailwindcss";
@custom-variant dark (&:where(.dark, .dark *));
```

👉 Enables class-based dark mode using `.dark`.

---

## 🌗 Tailwind Dark Mode Strategy

This project uses **class-based dark mode**:

* Light mode → default styles
* Dark mode → applied when `.dark` class exists

Example:

```html
<html class="dark">
```

---

## 🚀 How It Works (Step-by-Step)

1. App loads → default theme = `light`
2. User clicks toggle
3. `ThemeBtn` updates context state
4. `App.jsx` updates `<html>` class
5. Tailwind applies `dark:` styles instantly

---

## ✅ Key Advantages

* ✔ Clean separation of logic (Context API)
* ✔ Reusable theme hook (`useTheme`)
* ✔ Scalable for larger apps
* ✔ No external state libraries needed
* ✔ Tailwind handles styling efficiently

---

## ⚠️ Notes / Improvements

* You accidentally duplicated import in `Card.jsx`:

```jsx
import React from 'react'
import React from 'react' // ❌ duplicate
```

* `ThemeBtn` and `Card` are mixed in same file → should be separated

* Consider adding:

  * 💾 LocalStorage (persist theme)
  * 🌐 System preference detection (`prefers-color-scheme`)

---

## 🔮 Possible Enhancements

* Save theme:

```jsx
useEffect(() => {
  localStorage.setItem("theme", themeMode)
}, [themeMode])
```

* Load saved theme:

```jsx
useEffect(() => {
  const savedTheme = localStorage.getItem("theme")
  if (savedTheme) setThemeMode(savedTheme)
}, [])
```

* Detect system theme:

```jsx
window.matchMedia("(prefers-color-scheme: dark)")
```

---

## 🏁 Conclusion

This project is a solid example of:

* React Context API usage
* Tailwind dark mode integration
* Clean state-driven UI updates

It’s a great foundation for building **real-world apps with theme support**.

---

If you want, I can also:

* Convert this into a **GitHub README (with badges & screenshots)**
* Add **localStorage + system theme support fully implemented**
* Refactor your code into **best practices structure**
