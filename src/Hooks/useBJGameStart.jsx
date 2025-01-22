import { useEffect, useState } from "react";
import useGetACard from "./useGetACard";

function useBJGameStart() {
  const { GetACard } = useGetACard();
  const BJGameStart = (setPlayerCards, setDealerCards, PlayerCards) => {
    setPlayerCards([{ Symbol: "Diamond", Number: "10" }]);

    const PlayerTimeoutId = setTimeout(() => {
      setPlayerCards((prevItems) =>
        prevItems.length === 1 // Additional check
          ? [...prevItems, { Symbol: "Diamond", Number: "9" }]
          : prevItems
      );
    }, 1000);

    const DealerTimeoutId1 = setTimeout(() => {
      setDealerCards([{ Symbol: "Diamond", Number: "9" }]);
    }, 500);

    const DealerTimeoutId2 = setTimeout(() => {
      setDealerCards((prevItems) =>
        prevItems.length === 1 // Additional check
          ? [...prevItems, { Symbol: "Diamond", Number: "9" }]
          : prevItems
      );
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
