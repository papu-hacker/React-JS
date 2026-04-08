# bun-react-template

To install dependencies:

```bash
bun install
```

To start a development server:

```bash
bun dev
```

To run for production:

```bash
bun start
```

This project was created using `bun init` in bun v1.3.11. [Bun](https://bun.com) is a fast all-in-one JavaScript runtime.

---

#### Here’s the simplest way to install and configure Tailwind CSS in a React + Vite project made with Bun.

```bash
bun add -d tailwindcss @tailwindcss/vite
```

```bash
import { defineConfig } from 'vite' # already
import react from '@vitejs/plugin-react' # already
import tailwindcss from '@tailwindcss/vite' # new

export default defineConfig({
  plugins: [
    react(), 
    tailwindcss() # new
    ],
})
```

```bash
@import "tailwindcss"; # new
```
