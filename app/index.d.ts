declare module '*.css';

type Themes = 'dark' | 'light'

declare global {
  interface Window {
    __onThemeChange: (theme: Themes) => void
    __setPreferredTheme: (theme: Themes) => void
    __theme: string
  }
}
