import type { Config } from "tailwindcss"
// @ts-expect-error - Missing type definitions for tailwindcss-animate
import animate from "tailwindcss-animate"

const config = {
  darkMode: "class",
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
	],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        chart: {
          1: "oklch(var(--chart-1))",
          2: "oklch(var(--chart-2))",
          3: "oklch(var(--chart-3))",
          4: "oklch(var(--chart-4))",
          5: "oklch(var(--chart-5))",
          6: "oklch(var(--chart-6))",
          7: "oklch(var(--chart-7))",
          8: "oklch(var(--chart-8))",
          9: "oklch(var(--chart-9))",
          10: "oklch(var(--chart-10))",
          11: "oklch(var(--chart-11))",
          12: "oklch(var(--chart-12))",
        },
        // Custom colors for generative AI theme
        ai: {
          purple: {
            DEFAULT: "#8964FF",
            50: "#F5F2FF",
            100: "#E5DDFF",
            200: "#C8B7FF",
            300: "#AB92FF",
            400: "#8E6DFF",
            500: "#8964FF",
            600: "#6A4CFF",
            700: "#4B34FF",
            800: "#2C1CFF",
            900: "#0D04FF"
          },
          blue: {
            DEFAULT: "#6495FF",
            50: "#F2F6FF",
            100: "#DDEBFF",
            200: "#B7D7FF",
            300: "#92C3FF",
            400: "#6DAFFF",
            500: "#6495FF",
            600: "#4C7BFF",
            700: "#3461FF",
            800: "#1C47FF",
            900: "#042DFF"
          }
        }
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "blob": {
          "0%, 100%": { transform: "translate(0, 0) scale(1)" },
          "25%": { transform: "translate(20px, -30px) scale(1.1)" },
          "50%": { transform: "translate(-20px, 20px) scale(0.9)" },
          "75%": { transform: "translate(20px, 30px) scale(1.05)" }
        },
        "rotate-gradient": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" }
        },
        "text-slide": {
          "0%, 20%": { transform: "translateY(0)" },
          "25%, 45%": { transform: "translateY(-100%)" },
          "50%, 70%": { transform: "translateY(-200%)" },
          "75%, 95%": { transform: "translateY(-300%)" },
          "100%": { transform: "translateY(-400%)" }
        },
        "pulse-glow": {
          "0%, 100%": { boxShadow: "0 0 10px 2px rgba(137, 100, 255, 0.3)" },
          "50%": { boxShadow: "0 0 20px 6px rgba(137, 100, 255, 0.6)" }
        },
        "float": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" }
        }
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "blob": "blob 10s infinite alternate",
        "rotate-gradient": "rotate-gradient 3s linear infinite",
        "text-slide": "text-slide 10s cubic-bezier(0.83, 0, 0.17, 1) infinite",
        "pulse-glow": "pulse-glow 2s infinite",
        "float": "float 3s ease-in-out infinite"
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "grid-pattern": "linear-gradient(to right, rgba(137, 100, 255, 0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(137, 100, 255, 0.05) 1px, transparent 1px)",
      },
      backgroundSize: {
        "grid": "30px 30px",
      },
    },
  },
  plugins: [animate],
} satisfies Config

export default config 