import { useEffect, useState } from "react";
import useGetACard from "./useGetACard";

function useBJGameStart() {
  const { GetACard } = useGetACard();
  const BJGameStart = (setPlayerCards, setDealerCards, PlayerCards) => {
    const DrawStartCards = (setPlayer, setDealer) => {
      GetACard(setPlayer, setDealer);
    };
    DrawStartCards(setPlayerCards, null);
    // setPlayerCards((prevItems) => [
    //   ...prevItems,
    //   {
    //     Symbol: "Heart",
    //     Number: "7",
    //     Flipped: false,
    //     MovedToPosition: false,
    //   },
    // ]);
    const PlayerTimeoutId = setTimeout(() => {
      DrawStartCards(setPlayerCards, null);
      // setPlayerCards((prevItems) => [
      //   ...prevItems,
      //   {
      //     Symbol: "Heart",
      //     Number: "10",
      //     Flipped: false,
      //     MovedToPosition: false,
      //   },
      // ]);
    }, 1000);

    const DealerTimeoutId1 = setTimeout(() => {
      DrawStartCards(null, setDealerCards);
      // setDealerCards((prevItems) => [
      //   ...prevItems,
      //   {
      //     Symbol: "Heart",
      //     Number: "7",
      //     Flipped: false,
      //     MovedToPosition: false,
      //   },
      // ]);
    }, 500);

    const DealerTimeoutId2 = setTimeout(() => {
      DrawStartCards(null, setDealerCards);
      // setDealerCards((prevItems) => [
      //   ...prevItems,
      //   {
      //     Symbol: "Heart",
      //     Number: "10",
      //     Flipped: false,
      //     MovedToPosition: false,
      //   },
      // ]);
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
