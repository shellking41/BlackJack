import { createContext, useState } from "react";

export const CardContext = createContext();

// Provider komponens
export const CardContextProvider = ({ children }) => {
  const [PlayerCards, setPlayerCards] = useState([]);
  const [AllPlayerCardFlipped, setAllPlayerCardFlipped] = useState(false);
  const [DealerCards, setDealerCards] = useState([]);

  const [PlayerCardsValue, setPlayerCardsValue] = useState(0);
  const [DealerCardsValue, setDealerCardsValue] = useState(0);
  const [PlayerAcesCount, setPlayerAcesCount] = useState(0);
  const [DealerAcesCount, setDealerAcesCount] = useState(0);

  // Függvények a state-ek kezelésére

  // Az értékek, amelyeket a context elérhetővé tesz
  const contextValue = {
    PlayerCards,
    setPlayerCards,
    DealerCards,
    setDealerCards,
    PlayerCardsValue,
    setPlayerCardsValue,
    DealerCardsValue,
    setDealerCardsValue,
    DealerAcesCount,
    setDealerAcesCount,
    PlayerAcesCount,
    setPlayerAcesCount,
    AllPlayerCardFlipped,
    setAllPlayerCardFlipped,
  };

  return <CardContext.Provider value={contextValue}>{children}</CardContext.Provider>;
};
