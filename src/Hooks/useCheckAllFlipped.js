import React, { useContext, useEffect } from "react";
import { CardContext } from "../Contexts/CardContext";

function useCheckAllFlipped() {
  const { PlayerCards, setAllPlayerCardFlipped } = useContext(CardContext);

  useEffect(() => {
    console.log(`${PlayerCards.filter((item) => item.Flipped == true).length} ${PlayerCards.length}`);
    if (PlayerCards.filter((item) => item.Flipped == true).length == PlayerCards.length) {
      setAllPlayerCardFlipped((prev) => (prev = true));
    } else {
      setAllPlayerCardFlipped((prev) => (prev = false));
    }
  }, [PlayerCards]);
}

export default useCheckAllFlipped;
