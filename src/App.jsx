import { useEffect, useState } from "react";

import "./App.css";

import BlackJack from "./Games/BlackJack";

import { CardContextProvider } from "./Contexts/CardContext";
import PlayerActionContextProvider from "./Contexts/PlayerActionContext";

function App() {
  return (
    <>
      <PlayerActionContextProvider>
        <CardContextProvider>
          <BlackJack />
        </CardContextProvider>
      </PlayerActionContextProvider>
    </>
  );
}

export default App;
