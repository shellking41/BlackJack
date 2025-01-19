import { useState, useRef, useEffect } from "react";
import Header from "../Components/UI/Header/Header";

import BlackJackCard from "../Components/UI/Cards/BlackJackCard";
import style from "./BlackJack.module.css";
import ActionButton from "../Components/ActionButton";
import { v4 as uuidv4 } from "uuid";
import useBJGameStart from "../Components/Hooks/useBJGameStart";

function BlackJack() {
  const ShakerRef = useRef(null);

  const [PlayerCards, setPlayerCards] = useState([]);
  const [DealerCards, setDealerCards] = useState([]);
  const [Ignore, setIgnore] = useState(false);
  const [GameOver, setGameOver] = useState({ isGameOver: false, PushCards: 0 });

  const { BJGameStart } = useBJGameStart();

  if ((PlayerCards.length == 0 || DealerCards.length == 0) && !GameOver.isGameOver) {
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
        <div className={style.dealerCardContainer}>
          {DealerCards.map((item, index) => {
            return (
              <div key={index}>
                <BlackJackCard symbol={item.Symbol} number={item.Number} index={index} DealerCards={DealerCards} Ignore={Ignore} PushCards={GameOver.PushCards} />
              </div>
            );
          })}
        </div>

        <div className={style.CenterContainer}>
          <div className={style.headerContainer}>
            <Header text={"Black Jack"} />
          </div>
          <div className={style.playButtons}>
            <ActionButton Action={"GetACard"} setDealerCards={setDealerCards} />
            <ActionButton Action={"GetACard"} setPlayerCards={setPlayerCards} />
            <ActionButton Action={"Stand"} setIgnore={setIgnore} />
            <ActionButton Action={"GameOver"} setGameOver={setGameOver} />
            <ActionButton Action={"StartGame"} setGameOver={setGameOver} setDealerCards={setDealerCards} setPlayerCards={setPlayerCards} />
          </div>
        </div>

        <div className={style.playerCardContainer}>
          {PlayerCards.map((item, index) => {
            return (
              <div key={index}>
                <BlackJackCard symbol={item.Symbol} number={item.Number} index={index} PlayerCards={PlayerCards} Ignore={Ignore} PushCards={GameOver.PushCards} />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default BlackJack;
