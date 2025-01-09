import React from "react";
import Header from "../Components/UI/Header/Header";
import Diamond from "../Components/UI/Cards/Symbols/Diamond";
import Hearth from "../Components/UI/Cards/Symbols/Hearth";
import Pikes from "../Components/UI/Cards/Symbols/Pikes";
import Clubs from "../Components/UI/Cards/Symbols/Clubs";
import Card from "../Components/UI/Cards/Card";
import style from "./BlackJack.module.css";

function BlackJack() {
  return (
    <>
      {/* <Header text={"Jack Black"} />

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
      </div> */}
      <div className={style.BlackJack}>
        <Header text={"Black Jack"} />

        <span className={style.Cards}>
          <Card symbol={"Diamond"} number={"5"} />
          <Card symbol={"Hearth"} number={"J"} />
          <Card symbol={"Clubs"} number={"A"} />
          <Card symbol={"Pikes"} number={"10"} />
        </span>
      </div>
    </>
  );
}

export default BlackJack;
