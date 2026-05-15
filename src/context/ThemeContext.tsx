import React, { createContext, useContext, useEffect, useState } from 'react';

type Theme = 'light' | 'dark';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>('light');

  useEffect(() => {
    setTheme('light');
  }, []);

  useEffect(() => {
    document.documentElement.classList.remove('dark');
    document.documentElement.style.setProperty('--color-main', '#ffffff');
    document.documentElement.style.setProperty('--color-sec', '#0f2d5c');
    document.documentElement.style.setProperty('--color-thr', '#2563eb');
    document.body.style.backgroundColor = '#ffffff';
    document.body.style.color = '#0f2d5c';
  }, [theme]);

  const toggleTheme = () => {
    setTheme('light');
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}