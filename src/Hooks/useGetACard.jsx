import { useState } from "react";

function useGetACard() {
  const GetACard = async (setPlayerCards, setDealersCards) => {
    try {
      if (setPlayerCards) {
        setPlayerCards((prevItems) => [...prevItems, { Symbol: "Diamond", Number: "10" }]);
      }
      if (setDealersCards) {
        setDealersCards((prevItems) => [...prevItems, { Symbol: "Diamond", Number: "10" }]);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return { GetACard };
}

export default useGetACard;
