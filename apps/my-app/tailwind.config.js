// Keep config file extension as '.js' so the tailwind extension works properly.
/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './apps/my-app/{App,app,Error,error}.vue',
    './apps/my-app/src/{components,layouts,pages,composables,plugins}/**/*.{js,jsx,ts,tsx,vue}',
  ],
  theme: {
    extend: {
      colors: {},
    },
  },
};
