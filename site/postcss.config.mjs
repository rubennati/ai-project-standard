// Tailwind v4 via the PostCSS plugin. We use this instead of @tailwindcss/vite
// because Astro 6 switched its build to Rolldown, which the Vite plugin does not
// yet fully support.
export default {
  plugins: {
    '@tailwindcss/postcss': {},
  },
};
