/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "media",
  theme: {
    screens: {
      md: "950px",
      lg: "1500px",
    },
    extend: {
      fontFamily: {
        // "...": "..."
      },
      colors: {
        primary: "#111827",
        primary_transparent: "#11182794",
        text_primary: "#ffffff",
        text_secondary: "#ffffff",
        input_primary: "#1c849e",
        full_screen_shadow: "#111827b3",
        secondary: "#0891b2",
        hover_secondary: "#067793",

        // Dark mode theme here
        dark_primary: "#111827",
        dark_primary_transparent: "#11182794",
        dark_text_primary: "#ffffff",
        dark_text_secondary: "#ffffff",
        dark_input_primary: "#1c849e",
        dark_full_screen_shadow: "#111827b3",
        dark_secondary: "#0891b2",
        dark_hover_secondary: "#067793",
      },
    },
  },
  plugins: [],
};

// primary: "#e5e7eb",
// primary_transparent: "#11182794",
// text_primary: "#ffffff",
// text_secondary: "#2d3436",
// input_primary: "#b92e58",
// full_screen_shadow: "#e5e7ebb3",
// secondary: "#fc427b",
// hover_secondary: "#f8618e",
