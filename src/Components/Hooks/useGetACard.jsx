import { useRef } from "react";

function useGetACard() {
  const GetACard = (setPlayerCards) => {
    setPlayerCards((prevItems) => [...prevItems, { Symbol: "Pikes", Number: "J" }]);
  };

  return { GetACard };
}

export default useGetACard;
