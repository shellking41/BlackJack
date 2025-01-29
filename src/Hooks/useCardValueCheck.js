import React, { useContext, useEffect } from "react";
import { CardContext } from "../Contexts/CardContext";
import { PlayerActionContext } from "../Contexts/PlayerActionContext";

function useCardValueCheck() {
  const { PlayerCardsValue, setDealerCards, setPlayerCards, DealerCardsValue } = useContext(CardContext);
  const { Stand, setStand, setGameOver, GameOverAnimationEnd } = useContext(PlayerActionContext);

  useEffect(() => {
    if (GameOverAnimationEnd) {
      setPlayerCards([]);
      setDealerCards([]);
      console.log("Animation ended");
    }

    console.log(PlayerCardsValue);
    if (PlayerCardsValue > 21) {
      console.log("You Lose");
      setGameOver({ isGameOver: true, PushCards: 100 });
      setStand(false);

      return;
    }

    if (DealerCardsValue > 21 && Stand) {
      console.log("You WIN");
      setGameOver({ isGameOver: true, PushCards: 100 });

      setStand(false);

      return;
    }

    if (PlayerCardsValue <= 21 && PlayerCardsValue > DealerCardsValue && Stand) {
      console.log("You WIN");
      setGameOver({ isGameOver: true, PushCards: 100 });
      setStand(false);

      return;
    }

    if (PlayerCardsValue < DealerCardsValue && DealerCardsValue > 16 && Stand) {
      console.log("You Lose");
      setGameOver({ isGameOver: true, PushCards: 100 });
      setStand(false);

      return;
    }
  }, [DealerCardsValue, PlayerCardsValue, GameOverAnimationEnd]);
}

export default useCardValueCheck;
