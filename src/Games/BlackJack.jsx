import { useState, useRef, useEffect } from "react";
import Header from "../Components/UI/Header/Header";

import Card from "../Components/UI/Cards/Card";
import style from "./BlackJack.module.css";
import ActionButton from "../Components/ActionButton";
import { v4 as uuidv4 } from "uuid";

function BlackJack() {
  const [PlayerCards, setPlayerCards] = useState([]);

  return (
    <>
      <div className={style.BlackJack}>
        <Header text={"Black Jack"} />

        {PlayerCards.map((item, index) => {
          return (
            <span className={style.SpanCard} key={index}>
              <Card symbol={item.Symbol} number={item.Number} index={index} PlayerCards={PlayerCards} />
            </span>
          );
        })}

        <ActionButton Action={"GetACard"} setPlayerCards={setPlayerCards} />
      </div>
    </>
  );
}

export default BlackJack;
