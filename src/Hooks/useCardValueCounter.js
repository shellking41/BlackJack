import { useState, useEffect, useContext } from "react";
import { CardContext } from "../Contexts/CardContext";

function useCardValueCounter(PlayerCards, DealerCards) {
  const { setDealerCardsValue, setPlayerCardsValue,  } = useContext(CardContext);

  const Count = (Cards) => {
    let TotalCount = 0;
    let AcesCount = 0;

    Cards.forEach((item) => {
      if (!item.Flipped) {
        return;
      }
      if (["J", "Q", "K"].includes(item.Number)) {
        TotalCount += 10;
      } else if (["A"].includes(item.Number)) {
        TotalCount += 11;
        AcesCount++;
      } else {
        TotalCount = TotalCount + Number(item.Number);
      }

      while (TotalCount > 21 && AcesCount > 0) {
        TotalCount -= 10;
        AcesCount--;
      }
    });
    return TotalCount;
  };

  useEffect(() => {
    if (PlayerCards) setPlayerCardsValue(Count(PlayerCards));
    else if (DealerCards) setDealerCardsValue(Count(DealerCards));
  }, [DealerCards, PlayerCards]);
}

export default useCardValueCounter;
