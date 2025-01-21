import { useEffect, useState } from "react";

import "./App.css";

import BlackJack from "./Games/BlackJack";

import { CardContextProvider } from "./Contexts/CardContext";

function App() {
  return (
    <>
      <CardContextProvider>
        <BlackJack />
      </CardContextProvider>
    </>
  );
}

export default App;
