import React from "react";
import useGetACard from "./Hooks/useGetACard";

function ActionButton({ Action, setPlayerCards, setDealerCards, setIgnore }) {
  const { GetACard } = useGetACard();

  const handleAction = (Action) => {
    if (Action == "Stand") {
      setIgnore(true);
    }

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

  return <button onClick={() => handleAction(Action)}>{Action == "Stand" ? "Stand" : "Get A Card"}</button>;
}

export default ActionButton;
