import { useState } from "react";

function useGetACard() {
  const GetACard = (setPlayerCards, setDealersCards) => {
    if (setPlayerCards) {
      setPlayerCards((prevItems) => [...prevItems, { Symbol: "Diamond", Number: "10" }]);
    }
    if (setDealersCards) {
      setDealersCards((prevItems) => [...prevItems, { Symbol: "Diamond", Number: "10" }]);
    }
  };

  return { GetACard };
}

export default useGetACard;
