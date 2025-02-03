import { useState } from "react";

function useGetACard() {
  const GetACard = (setPlayerCards, setDealersCards) => {
    const PossibleNumbers = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
    const PossibleSymbols = ["Heart", "Diamond", "Clubs", "Pikes"];

    const DrawCard = (setState) => {
      setState((prevItems) => [
        ...prevItems,
        {
          Symbol: PossibleSymbols[Math.floor(Math.random() * (PossibleSymbols.length - 1 - 0 + 1) + 0)],
          Number: PossibleNumbers[Math.floor(Math.random() * (PossibleNumbers.length - 1 - 0 + 1) + 0)],
          Flipped: false,
          MovedToPosition: false,
        },
      ]);
    };
    if (setPlayerCards) {
      DrawCard(setPlayerCards);
    }
    if (setDealersCards) {
      DrawCard(setDealersCards);
    }
  };

  return { GetACard };
}

export default useGetACard;
