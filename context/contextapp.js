import React, { createContext, useState } from "react";
export const AppContext = createContext();

export const ContextProvider = ({ children }) => {
  const [mode, setmode] = useState("sun");
  return (
    <AppContext.Provider value={[mode, setmode]}>
      {children}
    </AppContext.Provider>
  );
};
