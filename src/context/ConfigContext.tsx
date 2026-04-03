import React, { createContext, useContext, useState, useEffect } from "react";

// The base defaults as they are currently hardcoded across the app
const DEFAULT_CONFIG = {
  marquees: {
    home: "Driven by Passion, Built with Code ✺ Custom Web Experiences ✺ Innovative Self-Made Creations ✺ Tailored Web Development Solutions ✺ ",
    about: "✦ FULL-STACK DEVELOPER ✦ UI & UX ",
    blog: "✦ DECENTRALIZED WORK ✦ EXPLORE ECOSYSTEMS ",
    services: "✦ BUILD ✦ SCALE ✦ INNOVATE ✺ HIGH-FIDELITY ARCHITECTURE "
  },
  hero: {
    home: {
      title: "Product Engineer & Web3 Architect",
      subtitle: "I build the digital rails and decentralized ecosystems for the next generation of finance."
    },
    about: {
      title: "Web3 Architect",
      text: "I build the invisible rails and manage the human ecosystems of the decentralized economy."
    }
  },
  cta: {
    label: "Get in Touch",
    link: "https://wa.me/2347039662696"
  }
};

interface ConfigContextType {
  config: typeof DEFAULT_CONFIG;
  updateConfig: (newConfig: Partial<typeof DEFAULT_CONFIG> | ((prev: typeof DEFAULT_CONFIG) => typeof DEFAULT_CONFIG)) => void;
  resetToDefault: () => void;
}

const ConfigContext = createContext<ConfigContextType | undefined>(undefined);

export const ConfigProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [config, setConfig] = useState<typeof DEFAULT_CONFIG>(() => {
    const saved = localStorage.getItem("portfolio_site_config");
    return saved ? JSON.parse(saved) : DEFAULT_CONFIG;
  });

  useEffect(() => {
    localStorage.setItem("portfolio_site_config", JSON.stringify(config));
  }, [config]);

  const updateConfig: ConfigContextType["updateConfig"] = (newConfig) => {
    if (typeof newConfig === 'function') {
      setConfig(newConfig);
    } else {
      setConfig((prev) => ({ ...prev, ...newConfig }));
    }
  };

  const resetToDefault = () => setConfig(DEFAULT_CONFIG);

  return (
    <ConfigContext.Provider value={{ config, updateConfig, resetToDefault }}>
      {children}
    </ConfigContext.Provider>
  );
};

export const useConfig = () => {
  const context = useContext(ConfigContext);
  if (context === undefined) {
    throw new Error("useConfig must be used within a ConfigProvider");
  }
  return context;
};
