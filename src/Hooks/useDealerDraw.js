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
    // const wait = setTimeout(() => {
    //   if (DealerCards.length == 2) {
    //     GetACard(null, setDealerCards);
    //   }
    // }, 500); //2nd card flip time
    const notFlippedCount = DealerCards.filter((item) => item.Flipped == false).length;

    if (DealerCardsValue < 17 && notFlippedCount == 0) {
      GetACard(null, setDealerCards);
    }

    // return () => {
    //   clearTimeout(wait);
    // };
  }, [DealerCards?.length, DealerCards, Stand, DealerCardsValue]);
}

export default useDealerDraw;
