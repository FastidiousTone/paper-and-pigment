# Start here

1. Extract this ZIP using Windows **Extract All**. Move the `paper-and-pigment` folder into your usual projects folder. Keep it separate from creative-portfolio.
2. Open that folder in VS Code using File > Open Folder. The correct root contains package.json and index.html.
3. Open a PowerShell terminal there. Run `node --version` and `npm --version`. Use Node 22.12+ or a newer supported LTS release. Vite's official requirement is documented at https://vite.dev/guide/.
4. Run `npm install` once, then `npm run dev`. Open the exact local URL printed by Vite. A plain heading is expected: this is starter code, not a completed app.
5. Read README.md and style-guide.md. Open design/desktop-empty.png and design/mobile-empty.png side by side. See design/README.md for the remaining states.
6. Your first task: identify the page's major content regions, then write the header markup. Do not implement the cart yet. Send your attempt when ready.

Use Ctrl+C to stop the server. Subsequent sessions usually only need `npm run dev`.
Do not run `npm create vite` inside this folder: the Vite setup is already included. No custom vite.config.js is needed for this single-page project.

## Work in stages
1. Header and page introduction.
2. One static product card.
3. Six-card responsive grid and empty cart.
4. Product data rendering.
5. Cart state, quantity controls, and calculated totals.
6. Confirmation dialog and reset.
7. Keyboard/accessibility checks, production build, GitHub, and deployment.

Commit small milestones as you go. `npm install` generates package-lock.json: commit it. Keep node_modules and dist ignored. Reuse the workflow from your printable Git guide.
