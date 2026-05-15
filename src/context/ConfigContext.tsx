import React, { createContext, useContext, useState, useEffect } from "react";
import { contact } from "../data/davidPortfolio";

const DEFAULT_CONFIG = {
  marquees: {
    home: "Web3 Strategy * Social Media Management * Community Growth * Campaign Execution * Project Coordination * ",
    about: "* MASS COMMUNICATION * PUBLIC RELATIONS * AUDIENCE ENGAGEMENT * BRAND STORYTELLING ",
    blog: "* WEB3 GROWTH NOTES * CAMPAIGN THINKING * COMMUNITY STRATEGY ",
    services: "* SOCIAL * STRATEGY * COMMUNITY * CONTENT * EXECUTION "
  },
  hero: {
    home: {
      title: "Project Manager & Social Media Manager for Web3 Brands.",
      subtitle: "I help gaming, NFT, RWA, wallet, protocol, and community-led projects build visibility, structure, and growth through strategy, content, and execution."
    },
    about: {
      title: "Strategy, Content & Community Execution",
      text: "I help Web3 brands communicate clearly, coordinate work, and grow active communities across fast-moving markets."
    }
  },
  cta: {
    label: "Book a Call",
    link: contact.calendly
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
    const saved = localStorage.getItem("david_grateful_web3_growth_config");
    return saved ? JSON.parse(saved) : DEFAULT_CONFIG;
  });

  useEffect(() => {
    localStorage.setItem("david_grateful_web3_growth_config", JSON.stringify(config));
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