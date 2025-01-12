import { useEffect, useState } from "react";
import useGetACard from "./useGetACard";

function useBJGameStart() {
  const { GetACard } = useGetACard();
  const BJGameStart = async (setPlayerCards, setDealersCards) => {
    GetACard(setPlayerCards, null);

    GetACard(null, setDealersCards);

    GetACard(setPlayerCards, null);

    await GetACard(null, setDealersCards);
  };

  return { BJGameStart };
}

export default useBJGameStart;
