import { useEffect, useState } from "react";
import useGetACard from "./useGetACard";

function useBJGameStart() {
  const { GetACard } = useGetACard();
  const BJGameStart = (setPlayerCards, setDealersCards) => {
    GetACard(setPlayerCards, null);

    GetACard(null, setDealersCards);

    GetACard(setPlayerCards, null);

    const timer = setTimeout(() => {
      GetACard(null, setDealersCards);
    }, 100);

    return () => clearTimeout(timer); // A timeout törlésére a komponens eltávolításakor
  };

  return { BJGameStart };
}

export default useBJGameStart;
