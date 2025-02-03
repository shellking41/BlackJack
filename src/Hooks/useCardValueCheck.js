import React, { useContext, useEffect, useState } from "react";
import { CardContext } from "../Contexts/CardContext";
import { PlayerActionContext } from "../Contexts/PlayerActionContext";

function useCardValueCheck() {
  const { PlayerCardsValue, PlayerCards, DealerCards, DealerCardsValue, setDealerCardsValue } = useContext(CardContext);
  const { Stand, setStand, setGameOver, GameOverAnimationEnd } = useContext(PlayerActionContext);

  const [isBlackJack, setIsBlackJack] = useState(false);
  useEffect(() => {
    setIsBlackJack((prev) => (prev = false));
    console.log(isBlackJack);
    if (PlayerCardsValue == 21 && PlayerCards.length == 2) {
      let Count = 0;
      PlayerCards.forEach((item) => {
        if (["A", "J", "Q", "K"].includes(item.Number)) {
          Count++;
        }
        if (Count == 2) {
          console.log("BlackJAck");
          setIsBlackJack((prev) => (prev = true));
          setGameOver({ isGameOver: true, PushCards: 0, Status: "Win" });
          setStand(false);
          return;
        }
      });
    }

    if (DealerCardsValue == 21 && DealerCards.length == 2) {
      let Count = 0;
      DealerCards.forEach((item) => {
        if (["A", "J", "Q", "K"].includes(item.Number)) {
          Count++;
        }
        if (Count == 2) {
          console.log("BlackJAck");
          setIsBlackJack((prev) => (prev = true));
          setGameOver({ isGameOver: true, PushCards: 0, Status: "Lose" });
          setStand(false);
          return;
        }
      });
    }

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

    if (DealerCardsValue == PlayerCardsValue && Stand && !isBlackJack) {
      setGameOver({ isGameOver: true, PushCards: 0, Status: "Draw" });
      setStand(false);
      return;
    }
  }, [DealerCardsValue, PlayerCardsValue, GameOverAnimationEnd, isBlackJack]);
}

export default useCardValueCheck;
