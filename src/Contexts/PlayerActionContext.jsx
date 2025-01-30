import { createContext, useState } from "react";

export const PlayerActionContext = createContext();
function PlayerActionContextProvider({ children }) {
  const [Stand, setStand] = useState(false);
  const [GameOver, setGameOver] = useState({ isGameOver: true, PushCards: 0, Status: null });

  const ContextValue = { Stand, setStand, GameOver, setGameOver };

  return <PlayerActionContext.Provider value={ContextValue}>{children}</PlayerActionContext.Provider>;
}

export default PlayerActionContextProvider;
