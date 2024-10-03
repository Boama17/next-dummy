import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
    fontFamily: { 
      'sans': ['ui-sans-serif', 'system-ui', '...'],
      'serif': ['ui-serif', 'Georgia', '...'],
      'mono': ['ui-monospace', 'SFMono-Regular', '...'],
      'display': ['Poppins', '...'],
      'body': ['"Poppins"', '...'],
    }
  },
  plugins: [],
};
export default config;
