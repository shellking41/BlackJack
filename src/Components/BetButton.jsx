import { useContext, useEffect, useRef, useState } from "react";
import style from "../Components/ComponentStyles/BetButton.module.css";
import { PlayerActionContext } from "../Contexts/PlayerActionContext";
import { CardContext } from "../Contexts/CardContext";
function BetButton() {
  const { setGameOver, setStand, GameOver, setDouble } = useContext(PlayerActionContext);
  const { setDealerCards, setPlayerCards, setDealerCardsValue, setPlayerCardsValue } = useContext(CardContext);

  const [FirstBet, setFirstBet] = useState(true);
  const [TableClearWaitTime, setTableClearWaitTime] = useState(0);

  const BetButtonsRef = useRef(null);
  useEffect(() => {
    const BetButtons = BetButtonsRef.current;
    if (!GameOver.isGameOver) {
      BetButtons.style.setProperty("--Disabled-BetButtonColor", "#00e50079");
    } else {
      BetButtons.style.removeProperty("--Disabled-BetButtonColor");
    }
  }, [GameOver]);

  //Working but need approvement
  const handleBet = () => {
    if (!GameOver.isGameOver) {
      return;
    }
    setGameOver({ isGameOver: true, PushCards: 100, Status: null });

    if (FirstBet) {
      setFirstBet(false);
      setTableClearWaitTime(500);
    }
    const Wait = setTimeout(() => {
      setPlayerCards([]);
      setDealerCards([]);
      setDealerCardsValue(0);
      setPlayerCardsValue(0);
      setDouble(false);
      setGameOver({ isGameOver: false, PushCards: 0, Status: null });
    }, TableClearWaitTime);

    setStand(false);
    return () => clearTimeout(Wait);
  };

  return (
    <button className={style.BetButton} onClick={handleBet} ref={BetButtonsRef}>
      Bet
    </button>
  );
}

export default BetButton;
