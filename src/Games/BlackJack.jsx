import { useState, useRef, useEffect } from "react";
import Header from "../Components/UI/Header/Header";

import BlackJackCard from "../Components/UI/Cards/BlackJackCard";
import style from "./BlackJack.module.css";
import ActionButton from "../Components/ActionButton";
import { v4 as uuidv4 } from "uuid";

function BlackJack() {
  const [PlayerCards, setPlayerCards] = useState([]);
  const [DealerCards, setDealerCards] = useState([]);

  return (
    <>
      <div className={style.BlackJack}>
        <Header text={"Black Jack"} />

        {DealerCards.map((item, index) => {
          return (
            <div className={style.SpanCard} key={index}>
              <BlackJackCard symbol={item.Symbol} number={item.Number} index={index} DealerCards={DealerCards} />
            </div>
          );
        })}

        {PlayerCards.map((item, index) => {
          return (
            <div className={style.SpanCard} key={index}>
              <BlackJackCard symbol={item.Symbol} number={item.Number} index={index} PlayerCards={PlayerCards} />
            </div>
          );
        })}

        <ActionButton Action={"GetACard"} setDealerCards={setDealerCards} />
        <ActionButton Action={"GetACard"} setPlayerCards={setPlayerCards} />
      </div>
    </>
  );
}

export default BlackJack;
