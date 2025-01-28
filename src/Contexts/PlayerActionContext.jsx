import { createContext, useState } from "react";

export const PlayerActionContext = createContext();
function PlayerActionContextProvider({ children }) {
  const [Stand, setStand] = useState(false);

  const ContextValue = { Stand, setStand };

  return <PlayerActionContext.Provider value={ContextValue}>{children}</PlayerActionContext.Provider>;
}

export default PlayerActionContextProvider;
