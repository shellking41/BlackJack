import { useContext, useState } from "react";
import useGetACard from "../Hooks/useGetACard";
import style from "../Components/ComponentStyles/ActionButton.module.css";
import { PlayerActionContext } from "../Contexts/PlayerActionContext";
import { CardContext } from "../Contexts/CardContext";
function ActionButton({ Action, setPlayerCards, setDealerCards, Text }) {
  const { GetACard } = useGetACard();
  const { setStand, Stand, GameOver } = useContext(PlayerActionContext);
  const { PlayerCards, DealerCards } = useContext(CardContext);

  const handleAction = async (Action) => {
    if (GameOver.isGameOver || Stand || PlayerCards.some((item) => item.Flipped == false)) {
      return;
    }
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
