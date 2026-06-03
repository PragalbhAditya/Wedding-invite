import { createContext, useContext, useState } from 'react';
import { content } from '../data/content';

const LanguageContext = createContext({ lang: 'en', setLang: () => {} });

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState('en');
  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLang = () => useContext(LanguageContext);

export const useContent = () => {
  const { lang, setLang } = useLang();
  return { ...content[lang], lang, setLang };
};
