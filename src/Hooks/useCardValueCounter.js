import { useState, useEffect, useContext } from "react";
import { CardContext } from "../Contexts/CardContext";

function useCardValueCounter(PlayerCards, DealerCards) {
  const { setDealerCardsValue, setPlayerCardsValue } = useContext(CardContext);
  useEffect(() => {
    if (PlayerCards) {
      setPlayerCardsValue(
        PlayerCards.reduce((accumulator, currentValue) => {
          if (["J", "Q", "K"].includes(currentValue.Number) && currentValue.Flipped == true) {
            return accumulator + 10;
          } else if (currentValue.Flipped == true) {
            return accumulator + Number(currentValue.Number);
          } else {
            return accumulator;
          }
        }, 0)
      );
    } else {
      setDealerCardsValue(
        DealerCards.reduce((accumulator, currentValue) => {
          if (["J", "Q", "K"].includes(currentValue.Number)) {
            return accumulator + 10;
          } else {
            return accumulator + Number(currentValue.Number);
          }
        }, 0)
      );
    }
  }, [PlayerCards?.length, DealerCards?.length, DealerCards, PlayerCards]);
}

export default useCardValueCounter;
