import React, { useContext, useEffect } from "react";
import { CardContext } from "../Contexts/CardContext";
import { PlayerActionContext } from "../Contexts/PlayerActionContext";

function useCardValueCheck() {
  const { PlayerCardsValue, DealerCardsValue } = useContext(CardContext);
  const { Stand, setGameOver } = useContext(PlayerActionContext);

  useEffect(() => {
    console.log(PlayerCardsValue);
    if (PlayerCardsValue > 21) {
      console.log("You Lose");
      setGameOver({ isGameOver: true, PushCards: 100 });
      return;
    }

    if (DealerCardsValue > 21 && Stand) {
      console.log("You WIN");
      setGameOver({ isGameOver: true, PushCards: 100 });
      return;
    }

    if (PlayerCardsValue <= 21 && PlayerCardsValue > DealerCardsValue && Stand) {
      console.log("You WIN");
      setGameOver({ isGameOver: true, PushCards: 100 });
      return;
    }

    if (PlayerCardsValue < DealerCardsValue && DealerCardsValue > 16 && Stand) {
      console.log("You Lose");
      setGameOver({ isGameOver: true, PushCards: 100 });
      return;
    }
  }, [DealerCardsValue, PlayerCardsValue]);
}

export default useCardValueCheck;
