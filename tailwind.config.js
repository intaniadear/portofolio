/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: 'var(--color-bg)',
        surface: 'var(--color-surface)',
        'surface-subtle': 'var(--color-surface-subtle)',
        border: 'var(--color-border)',
        'border-hover': 'var(--color-border-hover)',
        primary: {
          DEFAULT: '#0f766e', // Refined teal / sage
          light: '#14b8a6',
          dark: '#115e59',
          50: '#f0fdfa',
          100: '#ccfbf1',
          500: '#14b8a6',
          700: '#0f766e',
          900: '#134e4a',
        },
        accent: {
          DEFAULT: '#ea580c', // Warm rust / terracotta accent
          light: '#f97316',
          dark: '#c2410c',
        },
        typography: {
          heading: 'var(--color-heading)',
          body: 'var(--color-body)',
          muted: 'var(--color-muted)',
        },
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        display: ['Newsreader', 'Playfair Display', 'Georgia', 'serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      boxShadow: {
        'soft-sm': '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        'soft-md': '0 4px 16px -2px rgba(15, 23, 42, 0.06), 0 2px 6px -1px rgba(15, 23, 42, 0.04)',
        'soft-lg': '0 12px 32px -4px rgba(15, 23, 42, 0.08), 0 4px 12px -2px rgba(15, 23, 42, 0.04)',
        'subtle-dark': '0 4px 24px -2px rgba(0, 0, 0, 0.45)',
      },
    },
  },
  plugins: [],
};

