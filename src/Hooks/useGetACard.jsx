import { useState } from "react";

function useGetACard() {
  const GetACard = (setPlayerCards, setDealersCards) => {
    if (setPlayerCards) {
      setPlayerCards((prevItems) => [...prevItems, { Symbol: "Diamond", Number: "K" }]);
      console.log("PLAYER");
    }
    if (setDealersCards) {
      setDealersCards((prevItems) => [...prevItems, { Symbol: "Clubs", Number: "2" }]);
      console.log("DEALER");
    }
  };

  return { GetACard };
}

export default useGetACard;
