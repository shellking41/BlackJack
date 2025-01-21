import { createContext, useState } from "react";

export const CardContext = createContext();

// Provider komponens
export const CardContextProvider = ({ children }) => {
  const [PlayerCards, setPlayerCards] = useState([]);
  const [DealerCards, setDealerCards] = useState([]);

  // Függvények a state-ek kezelésére

  // Az értékek, amelyeket a context elérhetővé tesz
  const contextValue = {
    PlayerCards,
    setPlayerCards,
    DealerCards,
    setDealerCards,
  };

  return <CardContext.Provider value={contextValue}>{children}</CardContext.Provider>;
};
