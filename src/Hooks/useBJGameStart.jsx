import { useEffect, useState } from "react";
import useGetACard from "./useGetACard";

function useBJGameStart() {
  const { GetACard } = useGetACard();
  const BJGameStart = (setPlayerCards, setDealerCards, PlayerCards) => {
    setPlayerCards([{ Symbol: "Diamond", Number: "3", Flipped: false }]);

    const PlayerTimeoutId = setTimeout(() => {
      setPlayerCards((prevItems) =>
        prevItems.length === 1 // Additional check
          ? [...prevItems, { Symbol: "Diamond", Number: "2", Flipped: false }]
          : prevItems
      );
    }, 1000);

    const DealerTimeoutId1 = setTimeout(() => {
      setDealerCards([{ Symbol: "Diamond", Number: "3", Flipped: false }]);
    }, 500);

    const DealerTimeoutId2 = setTimeout(() => {
      setDealerCards((prevItems) =>
        prevItems.length === 1 // Additional check
          ? [...prevItems, { Symbol: "Diamond", Number: "2", Flipped: false }]
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
