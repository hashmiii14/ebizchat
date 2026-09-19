/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        border: '#e2e8f0',
        input: '#e2e8f0',
        ring: '#00b575',
        background: '#ffffff',
        foreground: '#111921',
        primary: {
          DEFAULT: '#00b575',
          foreground: '#ffffff',
        },
        secondary: {
          DEFAULT: '#f0f4f2',
          foreground: '#111921',
        },
        destructive: {
          DEFAULT: '#ef4444',
          foreground: '#ffffff',
        },
        muted: {
          DEFAULT: '#f0f4f2',
          foreground: '#5f6b74',
        },
        accent: {
          DEFAULT: '#dff7eb',
          foreground: '#004638',
        },
        popover: {
          DEFAULT: '#ffffff',
          foreground: '#111921',
        },
        card: {
          DEFAULT: '#ffffff',
          foreground: '#111921',
        },
        surface: '#f7fbf9',
        'brand-deep': '#00847e',
        'accent-fg': '#004638',
        'muted-fg': '#5f6b74',
        whatsapp: {
          light: '#25D366',
          teal: '#075E54',
          darkTeal: '#128C7E',
          outgoing: '#DCF8C6',
          incoming: '#FFFFFF',
          bubbleBorder: '#E1E9EB',
          bg: '#EFEAE2',
          header: '#F0F2F5',
        }
      },
      fontFamily: {
        display: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
        body: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'Geist Mono', 'monospace'],
      },
      boxShadow: {
        'subtle': '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        'card': '0 1px 3px 0 rgba(0, 0, 0, 0.06), 0 1px 2px 0 rgba(0, 0, 0, 0.04)',
        'card-hover': '0 12px 30px -10px rgba(0, 0, 0, 0.08), 0 4px 10px -4px rgba(0, 0, 0, 0.04)',
        'float': '0 20px 40px -15px rgba(0, 0, 0, 0.12)',
        'teal-glow': '0 0 24px 6px rgba(0, 164, 140, 0.25)',
        'orange-glow': '0 0 18px 4px rgba(255, 59, 0, 0.25)',
        'btn': '0 1px 2px 0 rgba(0, 164, 140, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.25)',
      },
    },
  },
  plugins: [],
}
