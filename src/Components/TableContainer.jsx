import { useContext, useState, useRef } from "react";
import BlackJackCard from "../Components/UI/Cards/BlackJackCard";
import { CardContext } from "../Contexts/CardContext";
import ActionButton from "./ActionButton";
import style from "../Components/ComponentStyles/TableContainer.module.css";
import Deck from "./UI/Deck";
import CardValueCounter from "./CardValueCounter";
function TableContainer({ GameOver }) {
  const { setDealerCards, setPlayerCards, PlayerCards, DealerCards } = useContext(CardContext);
  const [Ignore, setIgnore] = useState(false);
  const FirstPlayerCardRef = useRef(null);
  return (
    <>
      <div className={style.BlackJack}>
        <Deck />

        <div className={style.dealerCardContainer}>
          {DealerCards.map((item, index) => {
            return (
              <div key={index}>
                <BlackJackCard symbol={item.Symbol} number={item.Number} index={index} DealerCards={DealerCards} Ignore={Ignore} PushCards={GameOver.PushCards} />
              </div>
            );
          })}
        </div>

        <div className={style.playerCardContainer}>
          <CardValueCounter />
          {PlayerCards.map((item, index) => {
            return (
              <div key={index}>
                <BlackJackCard
                  symbol={item.Symbol}
                  FirstPlayerCardRef={FirstPlayerCardRef}
                  number={item.Number}
                  index={index}
                  PlayerCards={PlayerCards}
                  Ignore={Ignore}
                  PushCards={GameOver.PushCards}
                />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default TableContainer;
