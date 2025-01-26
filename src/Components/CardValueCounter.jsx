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
          if (
            PlayerCards.some((item, index) => {
              return index === PlayerCards?.length - 1 && (item.Number === "J" || item.Number === "Q" || item.Number === "K");
            })
          ) {
            setPlayerCardsValue((prev) => prev + 10);
          } else setPlayerCardsValue(PlayerCards.reduce((accumulator, currentValue) => accumulator + Number(currentValue.Number), 0));
        } else {
          if (
            DealerCards.some((item) => {
              return item.Number === "J" || item.Number === "Q" || item.Number === "K";
            })
          ) {
            setDealerCardsValue((prev) => prev + 10);
          } else setDealerCardsValue(DealerCards.reduce((accumulator, currentValue) => accumulator + Number(currentValue.Number), 0));
        }
      }, 800);
      return () => clearTimeout(WaitForTheFlip);
    });
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
