import { createContext , useState } from "react";

import findLanguageObject from "../src/findLanguageObject";

const LanguagesContext = createContext();

const LanguagesProvider = ({ children }) => {
  
  const [language, setLanguage] = useState(findLanguageObject("en"));

  return (
    <LanguagesContext.Provider value={{ language, setLanguage }}>
    {children}
    </LanguagesContext.Provider>
    );
  };
  
  export {
    LanguagesContext,
    LanguagesProvider
  }
  