import { useContext, useEffect, useState } from "react";
import style from "../Components/ComponentStyles/CardValueCounter.module.css";
import { useRef } from "react";
import { CardContext } from "../Contexts/CardContext";
import useCardValueCounter from "../Hooks/useCardValueCounter.js";
import useCardValueCheck from "../Hooks/useCardValueCheck.js";
import { PlayerActionContext } from "../Contexts/PlayerActionContext.jsx";

function CardValueCounter({ PlayerCards, DealerCards }) {
  const { setDealerCardsValue, DealerCardsValue, setPlayerCardsValue, PlayerCardsValue, DealerAcesCount, PlayerAcesCount } = useContext(CardContext);
  const { GameOver, GameOverAnimationEnd } = useContext(PlayerActionContext);

  const ValueCounterRef = useRef(null);
  useCardValueCounter(PlayerCards, DealerCards);

  useEffect(() => {
    const ValueCounter = ValueCounterRef.current;
    if (GameOver.isGameOver && GameOver.PushCards) {
      ValueCounter.style.opacity = "0";
      ValueCounter.style.visibility = "hidden";
    } else if (!GameOver.isGameOver) {
      ValueCounter.style.opacity = "1";
      ValueCounter.style.visibility = "visible";
    }

    if (DealerCards) {
      return;
    }

    if (GameOver.Status == "Win") {
      ValueCounterRef.current.style.backgroundColor = "#00e500";
    } else if (GameOver.Status == "Lose") {
      ValueCounterRef.current.style.backgroundColor = "rgb(255, 0, 0)";
    } else if (GameOver.Status == "Draw") {
      ValueCounterRef.current.style.backgroundColor = "rgb(255, 196, 0)";
    } else {
      ValueCounterRef.current.style.backgroundColor = "#2e4655";
    }
  }, [GameOver]);

  return (
    <div
      className={style.CardValueCounterContainer}
      ref={ValueCounterRef}
      style={{
        transition: "all 0.5s ease-in-out",
        right: PlayerCards ? `${40 + (PlayerCards.length - 1) * -2}%` : DealerCards ? `${40.2 + (DealerCards.length - 1) * -2}%` : null,
        top: PlayerCards ? `  ${35.5 + (PlayerCards.length - 1) * -4}%  ` : null,
      }}
    >
      <p>{PlayerCards ? (PlayerAcesCount == 0 ? `${PlayerCardsValue}` : `${PlayerCardsValue}/${PlayerCardsValue}`) : `${DealerCardsValue}`}</p>
    </div>
  );
}

export default CardValueCounter;
