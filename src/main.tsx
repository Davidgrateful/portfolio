import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import Root from './App.tsx';
import './index.css';
import { ThemeProvider } from './context/ThemeContext.tsx';
import { ConfigProvider } from './context/ConfigContext.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ConfigProvider>
      <ThemeProvider>
        <Root />
      </ThemeProvider>
    </ConfigProvider>
  </StrictMode>,
);
