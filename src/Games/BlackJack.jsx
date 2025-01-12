import { useState, useRef, useEffect } from "react";
import Header from "../Components/UI/Header/Header";

import BlackJackCard from "../Components/UI/Cards/BlackJackCard";
import style from "./BlackJack.module.css";
import ActionButton from "../Components/ActionButton";
import { v4 as uuidv4 } from "uuid";
import useBJGameStart from "../Components/Hooks/useBJGameStart";

function BlackJack() {
  const [PlayerCards, setPlayerCards] = useState([]);
  const [DealerCards, setDealerCards] = useState([]);
  const [Ignore, setIgnore] = useState(false);
  const { BJGameStart } = useBJGameStart();

  if (PlayerCards.length == 0 || DealerCards.length == 0) {
    BJGameStart(setPlayerCards, setDealerCards);
    console.log("asd");
  }

  useEffect(() => {
    // BJGameStart(setDealerCards, setPlayerCards); // commented but still present
    console.log(DealerCards);
    console.log("-----");
    console.log(PlayerCards);
  }, [DealerCards, PlayerCards]);

  return (
    <>
      <div className={style.BlackJack}>
        <div className={style.headerContainer}>
          <Header text={"Black Jack"} />
        </div>

        <div className={style.dealerCardContainer}>
          {DealerCards.map((item, index) => {
            return (
              <div key={index}>
                <BlackJackCard symbol={item.Symbol} number={item.Number} index={index} DealerCards={DealerCards} Ignore={Ignore} />
              </div>
            );
          })}
        </div>

        <div className={style.playButtons}>
          <ActionButton Action={"GetACard"} setDealerCards={setDealerCards} />
          <ActionButton Action={"GetACard"} setPlayerCards={setPlayerCards} />
          <ActionButton Action={"Stand"} setIgnore={setIgnore} />
        </div>

        <div className={style.playerCardContainer}>
          {PlayerCards.map((item, index) => {
            return (
              <div key={index}>
                <BlackJackCard symbol={item.Symbol} number={item.Number} index={index} PlayerCards={PlayerCards} Ignore={Ignore} />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default BlackJack;
