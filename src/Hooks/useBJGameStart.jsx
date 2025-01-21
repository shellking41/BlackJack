import { useEffect, useState } from "react";
import useGetACard from "./useGetACard";

function useBJGameStart() {
  const { GetACard } = useGetACard();
  const BJGameStart = (setPlayerCards, setDealersCards) => {
    setPlayerCards([
      { Symbol: "Diamond", Number: "10" },
      { Symbol: "Diamond", Number: "10" },
    ]);
    setDealersCards([
      { Symbol: "Diamond", Number: "10" },
      { Symbol: "Diamond", Number: "10" },
    ]);

    return () => clearTimeout(timer);
  };

  return { BJGameStart };
}

export default useBJGameStart;
