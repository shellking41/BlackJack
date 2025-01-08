import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./Components/UI/Header/Header";
import Hearth from "./Components/UI/Cards/Symbols/Hearth";
import Diamond from "./Components/UI/Cards/Symbols/Diamond";
import Clubs from "./Components/UI/Cards/Symbols/Clubs";
import Pikes from "./Components/UI/Cards/Symbols/Pikes";

function App() {
  return (
    <>
      <div style={{ width: "50%", height: "auto", backgroundColor: "white" }}>
        <Header text={"Black Jack"} />
      </div>
      <Header text={"Jack Black"} />

      <div style={{ width: "50%", height: "auto", backgroundColor: "white" }}>
        <Hearth />
      </div>
      <div style={{ width: "50%", height: "auto", backgroundColor: "white" }}>
        <Diamond />
      </div>
      <div style={{ width: "50%", height: "auto", backgroundColor: "white" }}>
        <Clubs />
      </div>
      <div style={{ width: "50%", height: "auto", backgroundColor: "white" }}>
        <Pikes />
      </div>
    </>
  );
}

export default App;
