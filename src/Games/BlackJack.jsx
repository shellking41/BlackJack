import { useState, useRef, useEffect, useContext } from "react";
import Header from "../Components/UI/Header/Header";

import BlackJackCard from "../Components/UI/Cards/BlackJackCard";
import style from "./BlackJack.module.css";
import ActionButton from "../Components/ActionButton";
import { v4 as uuidv4 } from "uuid";
import useBJGameStart from "../Hooks/useBJGameStart";
import { CardContext } from "../Contexts/CardContext";
import InteractionContainer from "../Components/InteractionContainer";
import useGetACard from "../Hooks/useGetACard";
import TableContainer from "../Components/TableContainer";
import useCardValueCheck from "../Hooks/useCardValueCheck";
import { PlayerActionContext } from "../Contexts/PlayerActionContext";

function BlackJack() {
  const { PlayerCards, setPlayerCards, DealerCards, setDealerCards } = useContext(CardContext);
  const { GameOver, setGameOver } = useContext(PlayerActionContext);

  const ShakerRef = useRef(null);

  const { BJGameStart } = useBJGameStart();
  const { GetACard } = useGetACard();

  useCardValueCheck();

  useEffect(() => {
    console.log(DealerCards);
  }, [DealerCards]);

  useEffect(() => {
    if ((PlayerCards.length == 0 || DealerCards.length == 0) && !GameOver.isGameOver) {
      setGameOver({ isGameOver: false, PushCards: 0, Status: null });

      BJGameStart(setPlayerCards, setDealerCards, PlayerCards);

      console.log("asd");
    }
  }, [GameOver.isGameOver]);

  return (
    <div className={style.GameContainer}>
      <InteractionContainer />

      <TableContainer GameOver={GameOver} />
    </div>
  );
}

export default BlackJack;
