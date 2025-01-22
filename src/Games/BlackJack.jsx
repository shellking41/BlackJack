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

function BlackJack() {
  const { PlayerCards, setPlayerCards, DealerCards, setDealerCards } = useContext(CardContext);

  const ShakerRef = useRef(null);
  const [hasRun, setHasRun] = useState(false);

  const [GameOver, setGameOver] = useState({ isGameOver: false, PushCards: 0 });

  const { BJGameStart } = useBJGameStart();
  const { GetACard } = useGetACard();

  useEffect(() => {
    console.log(PlayerCards);
  }, [PlayerCards]);

  useEffect(() => {
    if ((PlayerCards.length == 0 || DealerCards.length == 0) && !GameOver.isGameOver) {
      BJGameStart(setPlayerCards, setDealerCards, PlayerCards);

      console.log("asd");
    }
  }, []);

  return (
    <div className={style.GameContainer}>
      <InteractionContainer />

      <TableContainer GameOver={GameOver} />
    </div>
  );
}

export default BlackJack;
