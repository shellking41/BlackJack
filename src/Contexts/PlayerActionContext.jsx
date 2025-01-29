import { createContext, useState } from "react";

export const PlayerActionContext = createContext();
function PlayerActionContextProvider({ children }) {
  const [Stand, setStand] = useState(false);
  const [GameOver, setGameOver] = useState({ isGameOver: true, PushCards: 0 });
  const [GameOverAnimationEnd, setGameOverAnimationEnd] = useState(false);

  const ContextValue = { Stand, setStand, GameOver, setGameOver, GameOverAnimationEnd, setGameOverAnimationEnd };

  return <PlayerActionContext.Provider value={ContextValue}>{children}</PlayerActionContext.Provider>;
}

export default PlayerActionContextProvider;
