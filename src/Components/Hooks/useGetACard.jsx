import { useRef } from "react";

function useGetACard() {
  const GetACard = (setPlayerCards) => {
    setPlayerCards((prevItems) => [...prevItems, { Symbol: "Diamond", Number: "5" }]);
  };

  return { GetACard };
}

export default useGetACard;
