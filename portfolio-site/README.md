# Rafi Siddiki — Portfolio

Personal portfolio site built with React 19 and Vite, deployed to GitHub Pages at
<https://rafi-siddiki.github.io/>.

## Scripts

```bash
npm install       # install dependencies
npm run dev       # start the dev server
npm run build     # production build into dist/
npm run preview   # serve the production build locally
npm run lint      # run ESLint
```

Every push to `main` builds and deploys the site through
`.github/workflows/deploy.yml` at the repository root.

## Project layout

```
src/
  main.jsx            entry point; loads global styles
  App.jsx             page shell: background, navbar, sections, footer
  data/               site content — edit these to update the page
    navigation.js     section ids and nav labels
    projects.js       project cards
    about.js          highlights and skill groups
    socials.js        contact links
    themes.js         theme list (icon, browser colour, background media)
  hooks/
    useTheme.js               active theme, saved to localStorage
    useActiveSection.js       highlights the nav link for the section in view
    usePrefersReducedMotion.js
  components/         reusable pieces, each next to its .css file
  sections/           Home, Projects, About, Contact, each next to its .css file
  styles/
    themes.css        colour and font tokens per theme
    global.css        reset, section layout, site-wide reduced-motion rule
public/
  backgrounds/        animated theme backgrounds (WebP) and still posters
  icons/              theme switcher icons
  rafi.webp           profile photo
```

## Common edits

- **Add a project:** add an entry to `src/data/projects.js`. Put screenshots in
  `public/projects/` and set `image`, `liveUrl` and `sourceUrl` as needed.
- **Add a theme:** add tokens in `src/styles/themes.css`, an entry in
  `src/data/themes.js`, and any background styles in
  `src/components/AnimatedBackground.css`.
- **Add a section:** add it to `src/data/navigation.js` and to `SECTIONS` in
  `src/App.jsx`.
