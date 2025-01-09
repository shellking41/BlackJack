import React from "react";
import useGetACard from "./Hooks/useGetACard";

function ActionButton({ Action, setPlayerCards }) {
  const { GetACard } = useGetACard();

  const handleAction = (Action) => {
    if (Action == "GetACard") {
      GetACard(setPlayerCards);
    }
  };

  return <button onClick={() => handleAction(Action)}>Get A Card</button>;
}

export default ActionButton;
