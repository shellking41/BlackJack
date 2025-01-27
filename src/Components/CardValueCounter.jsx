import { useContext, useEffect, useState } from "react";
import style from "../Components/ComponentStyles/CardValueCounter.module.css";
import { useRef } from "react";
import { CardContext } from "../Contexts/CardContext";
function CardValueCounter({ PlayerCards, DealerCards }) {
  const { setDealerCardsValue, DealerCardsValue, setPlayerCardsValue, PlayerCardsValue } = useContext(CardContext);

  useEffect(() => {
    requestAnimationFrame(() => {
      const WaitForTheFlip = setTimeout(() => {
        if (PlayerCards) {
          setPlayerCardsValue(
            PlayerCards.reduce((accumulator, currentValue) => {
              if (["J", "Q", "K"].includes(currentValue.Number)) {
                return accumulator + 10;
              }
              return accumulator + Number(currentValue.Number);
            }, 0)
          );
        } else {
          setDealerCardsValue(
            DealerCards.reduce((accumulator, currentValue) => {
              if (["J", "Q", "K"].includes(currentValue.Number)) {
                return accumulator + 10;
              }
              return accumulator + Number(currentValue.Number);
            }, 0)
          );
        }
      }, 800);
      return () => clearTimeout(WaitForTheFlip);
    });
    console.log(PlayerCardsValue);
  }, [PlayerCards?.length, DealerCards?.length]);

  return (
    <div
      className={style.CardValueCounterContainer}
      style={{
        transition: "all 0.5s ease-in-out",
        right: PlayerCards ? `${40 + (PlayerCards.length - 1) * -2}%` : DealerCards ? `${40.2 + (DealerCards.length - 1) * -2}%` : null,
        top: PlayerCards ? `  ${35.5 + (PlayerCards.length - 1) * -4}%  ` : null,
      }}
    >
      <p>{PlayerCards ? `${PlayerCardsValue}` : `${DealerCardsValue}`}</p>
    </div>
  );
}

export default CardValueCounter;
