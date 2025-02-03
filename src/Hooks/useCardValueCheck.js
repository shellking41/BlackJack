import React, { useContext, useEffect } from "react";
import { CardContext } from "../Contexts/CardContext";
import { PlayerActionContext } from "../Contexts/PlayerActionContext";

function useCardValueCheck() {
  const { PlayerCardsValue, setPlayerCardsValue, DealerAcesCount, setDealerAcesCount, PlayerAcesCount, setPlayerAcesCount, DealerCardsValue, setDealerCardsValue } = useContext(CardContext);
  const { Stand, setStand, setGameOver, GameOverAnimationEnd } = useContext(PlayerActionContext);

  useEffect(() => {
    console.log(PlayerAcesCount);
    if (PlayerCardsValue > 21) {
      console.log("You Lose");
      setGameOver({ isGameOver: true, PushCards: 0, Status: "Lose" });
      setStand(false);

      return;
    }
    if (DealerCardsValue <= 16 && PlayerCardsValue > DealerCardsValue) {
      return;
    }

    if (DealerCardsValue > 21 && Stand) {
      console.log("You WIN");

      setGameOver({ isGameOver: true, PushCards: 0, Status: "Win" });

      setStand(false);

      return;
    }

    if (PlayerCardsValue <= 21 && PlayerCardsValue > DealerCardsValue && Stand) {
      console.log("You WIN");
      setGameOver({ isGameOver: true, PushCards: 0, Status: "Win" });
      setStand(false);

      return;
    }

    if (PlayerCardsValue < DealerCardsValue && DealerCardsValue > 16 && Stand) {
      console.log("You Lose");
      setGameOver({ isGameOver: true, PushCards: 0, Status: "Lose" });
      setStand(false);

      return;
    }

    if (DealerCardsValue == PlayerCardsValue && Stand) {
      setGameOver({ isGameOver: true, PushCards: 0, Status: "Draw" });
      setStand(false);
      return;
    }
  }, [DealerCardsValue, PlayerCardsValue, GameOverAnimationEnd, PlayerAcesCount]);
}

export default useCardValueCheck;
