import { useEffect, useState } from "react";
import useGetACard from "./useGetACard";

function useBJGameStart() {
  const { GetACard } = useGetACard();
  const BJGameStart = (setPlayerCards, setDealerCards, PlayerCards) => {
    const DrawStartCards = (setPlayer, setDealer) => {
      GetACard(setPlayer, setDealer);
    };
    DrawStartCards(setPlayerCards, null);

    const PlayerTimeoutId = setTimeout(() => {
      DrawStartCards(setPlayerCards, null);
    }, 1000);

    const DealerTimeoutId1 = setTimeout(() => {
      DrawStartCards(null, setDealerCards);
    }, 500);

    const DealerTimeoutId2 = setTimeout(() => {
      DrawStartCards(null, setDealerCards);
    }, 1500);
    return () => {
      clearTimeout(PlayerTimeoutId);
      clearTimeout(DealerTimeoutId1);
      clearTimeout(DealerTimeoutId2);
    };
  };

  return { BJGameStart };
}

export default useBJGameStart;
