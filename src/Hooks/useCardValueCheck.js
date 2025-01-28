import React, { useContext, useEffect } from "react";
import { CardContext } from "../Contexts/CardContext";
import { PlayerActionContext } from "../Contexts/PlayerActionContext";

function useCardValueCheck() {
  const { PlayerCardsValue, DealerCardsValue } = useContext(CardContext);
  const { Stand } = useContext(PlayerActionContext);

  useEffect(() => {
    console.log(PlayerCardsValue);
    if (PlayerCardsValue > 21) {
      console.log("You Lose");
      return;
    }

    if (DealerCardsValue > 21 && Stand) {
      console.log("You WIN");
      return;
    }

    if (PlayerCardsValue <= 21 && PlayerCardsValue > DealerCardsValue && Stand) {
      console.log("You WIN");
      return;
    }

    if (PlayerCardsValue < DealerCardsValue && DealerCardsValue > 16 && Stand) {
      console.log("You Lose");
      return;
    }
  }, [DealerCardsValue, PlayerCardsValue]);
}

export default useCardValueCheck;
