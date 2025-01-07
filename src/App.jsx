import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./Components/UI/Header/Header";

function App() {
  return (
    <>
      <Header text={"Black Jack"} />
      <Header text={"Jack Black"} />
    </>
  );
}

export default App;
