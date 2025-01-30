import { useState, useContext, useEffect } from "react";
import { CardContext } from "../Contexts/CardContext";
import { PlayerActionContext } from "../Contexts/PlayerActionContext";
import useGetACard from "./useGetACard";

function useDealerDraw() {
  const { DealerCardsValue, PlayerCardsValue, setDealerCards, DealerCard } = useContext(CardContext);
  const { Stand } = useContext(PlayerActionContext);
  const { GetACard } = useGetACard();
  useEffect(() => {
    if (!Stand) {
      return;
    }
    if (DealerCardsValue <= 16) {
      GetACard(null, setDealerCards);
    }
  }, [Stand, DealerCardsValue]);
}

export default useDealerDraw;
