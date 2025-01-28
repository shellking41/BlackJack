import { useContext, useEffect, useState } from "react";
import style from "../Components/ComponentStyles/CardValueCounter.module.css";
import { useRef } from "react";
import { CardContext } from "../Contexts/CardContext";
import useCardValueCounter from "../Hooks/useCardValueCounter.js";
import useCardValueCheck from "../Hooks/useCardValueCheck.js";
function CardValueCounter({ PlayerCards, DealerCards }) {
  const { setDealerCardsValue, DealerCardsValue, setPlayerCardsValue, PlayerCardsValue } = useContext(CardContext);

  useCardValueCounter(PlayerCards, DealerCards);

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
