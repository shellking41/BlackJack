import React from "react";
import useGetACard from "./Hooks/useGetACard";
import style from "./ComponentStyles/Shaker.module.css";

function ActionButton({ Action, setPlayerCards, setDealerCards, setIgnore, ShakerRef }) {
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

  const handleHoverAction = (Action) => {
    if (!ShakerRef?.current) {
      return;
    }
    if (Action == "Shake") {
      ShakerRef.current.classList.add(style.Shaker);
    }
  };

  return (
    <button
      onClick={() => handleAction(Action)}
      onMouseMove={() => {
        if (Action === "Shake") {
          handleHoverAction(Action);
        }
      }}
    >
      {Action == "Stand" ? "Stand" : "Get A Card"}
    </button>
  );
}

export default ActionButton;
