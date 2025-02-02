import { useState, useContext, useEffect } from "react";
import { CardContext } from "../Contexts/CardContext";
import { PlayerActionContext } from "../Contexts/PlayerActionContext";
import useGetACard from "./useGetACard";
// ha a flip megtortenik akkor csekkelje hogy nyert e vayg vesztett nem amikor a tényleges CardValue-k értéke kiszámitódik!!!!
// ha a flip megtortenik akkor frissitse a valueCounter Ui ját nem amikor a tényleges CardValue-k értéke kiszámitódik!!!!
function useDealerDraw() {
  const { DealerCardsValue, PlayerCardsValue, setDealerCards, DealerCards } = useContext(CardContext);
  const { Stand } = useContext(PlayerActionContext);
  const { GetACard } = useGetACard();
  useEffect(() => {
    if (!Stand) {
      return;
    }

    const wait = setTimeout(() => {
      const notFlippedCount = DealerCards.filter((item) => item.Flipped == false).length; //BEST!!
      const notMovedToPosition = DealerCards.filter((item) => item.MovedToPosition == false).length;

      if (DealerCardsValue < 17 && notFlippedCount == 0 && notMovedToPosition == 0) {
        GetACard(null, setDealerCards);
      }
    }, 200);

    return () => clearTimeout(wait);
  }, [DealerCards?.length, DealerCards, Stand, DealerCardsValue]);
}

export default useDealerDraw;
