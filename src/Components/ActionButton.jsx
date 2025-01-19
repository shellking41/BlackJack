import { useState } from "react";
import useGetACard from "./Hooks/useGetACard";
import style from "../Components/ComponentStyles/ActionButton.module.css";
function ActionButton({ Action, setPlayerCards, setDealerCards, setIgnore, setGameOver }) {
  const { GetACard } = useGetACard();

  const handleAction = async (Action) => {
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
    if (Action == "GameOver") {
      setGameOver({ isGameOver: true, PushCards: 100 });
    }
    if (Action == "StartGame") {
      await setPlayerCards([]);
      await setDealerCards([]);
      setGameOver({ isGameOver: false, PushCards: 0 });
    }
  };

  return (
    <button className={style.ActionButton} onClick={() => handleAction(Action)}>
      {Action}
    </button>
  );
}

export default ActionButton;
