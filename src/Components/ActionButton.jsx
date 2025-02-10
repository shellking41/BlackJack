import { useContext, useEffect, useState } from "react";
import useGetACard from "../Hooks/useGetACard";
import style from "../Components/ComponentStyles/ActionButton.module.css";
import { PlayerActionContext } from "../Contexts/PlayerActionContext";
import { CardContext } from "../Contexts/CardContext";
import useCheckAllFlipped from "../Hooks/useCheckAllFlipped";

function ActionButton({ Action, setPlayerCards, setDealerCards, Text }) {
  const { GetACard } = useGetACard();
  const { setStand, Stand, GameOver,setDouble } = useContext(PlayerActionContext);
  const { PlayerCards, DealerCards, AllPlayerCardFlipped } = useContext(CardContext);

  useCheckAllFlipped();

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

    if (setPlayerCards) {
      if (Action == "Double") {
        GetACard(setPlayerCards, null);
        setDouble(true);
        const wait = setTimeout(() => {
          setStand(true);
        }, 400);
      }
    }

    if (Action == "Stand") {
      setStand(true);
    }

    return () => clearTimeout(wait);
  };

  return (
    <button className={style.ActionButton} onClick={() => handleAction(Action)}>
      {Text}
    </button>
  );
}

export default ActionButton;
