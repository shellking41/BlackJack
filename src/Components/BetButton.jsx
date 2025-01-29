import { useContext, useEffect, useRef } from "react";
import style from "../Components/ComponentStyles/BetButton.module.css";
import { PlayerActionContext } from "../Contexts/PlayerActionContext";
import { CardContext } from "../Contexts/CardContext";
function BetButton() {
  const { setGameOver, setStand, GameOver } = useContext(PlayerActionContext);
  const { setDealerCards, setPlayerCards } = useContext(CardContext);

  const BetButtonsRef = useRef(null);
  useEffect(() => {
    const BetButtons = BetButtonsRef.current;
    if (!GameOver.isGameOver) {
      BetButtons.style.setProperty("--Disabled-BetButtonColor", "#00e50079");
    } else {
      BetButtons.style.removeProperty("--Disabled-BetButtonColor");
    }
  }, [GameOver]);

  const handleBet = async () => {
    if (!GameOver.isGameOver) {
      return;
    }

    setGameOver({ isGameOver: false, PushCards: 0 });
    setStand(false);
  };

  return (
    <button className={style.BetButton} onClick={handleBet} ref={BetButtonsRef}>
      Bet
    </button>
  );
}

export default BetButton;
