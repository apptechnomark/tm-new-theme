import type { Config } from "tailwindcss";

export default {
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
      container: {
        screens: {
          default: "1390px",
          lg: "1360px",
        },
        center: true,
        padding: {
          default: "15px",
          lg: "15px",
        },
      },
      backgroundImage: {
        "tech-startup": "url('/images/tech-startup.png')",
        featurebullet: "url(/images/icons/Featurebullet.svg)",
        footerBg: "url(/images/footerBackground.jpeg)",
      },
    },
  },
  plugins: [],
} satisfies Config;
