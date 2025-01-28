import { useContext, useState } from "react";
import useGetACard from "../Hooks/useGetACard";
import style from "../Components/ComponentStyles/ActionButton.module.css";
import { PlayerActionContext } from "../Contexts/PlayerActionContext";
function ActionButton({ Action, setPlayerCards, setDealerCards, setIgnore, setGameOver, Text }) {
  const { GetACard } = useGetACard();
  const { setStand } = useContext(PlayerActionContext);

  const handleAction = async (Action) => {
    if (setPlayerCards) {
      if (Action == "GetACard") {
        GetACard(setPlayerCards, null);
      }
    }

    if (setDealerCards) {
      if (Action == "GetACard") {
        GetACard(null, setDealerCards);
      }
    }

    if (Action == "Stand") {
      setStand(true);
    }
  };

  return (
    <button className={style.ActionButton} onClick={() => handleAction(Action)}>
      {Text}
    </button>
  );
}

export default ActionButton;
