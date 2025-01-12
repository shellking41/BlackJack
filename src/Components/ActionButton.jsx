import React from "react";
import useGetACard from "./Hooks/useGetACard";

function ActionButton({ Action, setPlayerCards, setDealerCards }) {
  const { GetACard } = useGetACard();

  const handleAction = (Action) => {
    if (setPlayerCards) {
      if (Action == "GetACard") {
        GetACard(setPlayerCards);
      }
    }

    if (setDealerCards) {
      if (Action == "GetACard") {
        GetACard(setDealerCards);
      }
    }
  };

  return <button onClick={() => handleAction(Action)}>Get A Card</button>;
}

export default ActionButton;
