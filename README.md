## Design-workflow — Mastra Blog UI Clone

Next.js 15 App Router project that clones the Mastra blog UI and applies a strict design token system via CSS custom properties. Playwright MCP was used to snapshot the original and iterate until visual parity.

### Stack
- Next.js 15 + App Router + TypeScript
- Global CSS with tokens in `src/app/globals.css`
- Tailwind preflight via `@import "tailwindcss";` (utilities are not required; tokens drive styling)

### Run locally
```bash
pnpm install
pnpm dev
# open http://localhost:3000
```

### Design tokens (CSS variables)
Defined in `src/app/globals.css` under `:root`:
- Colors: black/greys/white family including `--color-darth-vader-2: rgb(10, 10, 10)` (page bg) and `--color-black-metal: rgb(8, 8, 8)` (card bg), plus semantic greys like `--color-desired-dawn` (text), `--color-carbon`, etc.
- Typography: `--font-mastra-*` families for headings/body/small/caption
- Spacing: `--vspace-*` and `--hspace-*`
- Radius: `--border-radius-*`
- Shadows: `--shadow-*`

Key decisions:
- Dark theme parity: body uses `--color-darth-vader-2`; cards use `--color-black-metal` for subtle contrast; text uses `--color-desired-dawn`.
- Interactive states implemented via global classes (no inline handlers) to keep Server/Client boundaries clean.

### App structure
```
src/app/
  page.tsx          # layout composing Header, BlogContent, Footer
  components/
    Header.tsx      # top nav, logo, actions (client)
    BlogContent.tsx # categories, search, post grid (client)
    Footer.tsx      # links + newsletter (client)
  globals.css       # token definitions + interaction styles
```

### Screenshots (generated with Playwright MCP)
Saved under `.playwright-mcp/`:
- `original-mastra-blog.png` — source reference
- `current-implementation.png` / `updated-implementation.png` — iteration
- `dark-theme-implementation.png` / `corrected-colors-implementation.png` — final dark parity

### Troubleshooting
- If you see "Event handlers cannot be passed to Client Component props", ensure interactive components include `'use client'` and rely on CSS hover/focus classes vs inline events.
- If styles don’t apply, confirm global classes exist in `globals.css` (e.g., `.nav-link:hover`, `.search-input:focus`).

### Scripts
- `pnpm dev` — start dev server
- `pnpm build` — production build
- `pnpm start` — run built app

### License
MIT
