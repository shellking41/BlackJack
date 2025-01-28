import { useContext } from "react";
import style from "../Components/ComponentStyles/BetButton.module.css";
import { PlayerActionContext } from "../Contexts/PlayerActionContext";
import { CardContext } from "../Contexts/CardContext";
function BetButton() {
  const { setGameOver } = useContext(PlayerActionContext);
  const { setDealerCards, setPlayerCards } = useContext(CardContext);
  const handleBet = async () => {
    await setPlayerCards([]);
    await setDealerCards([]);

    setGameOver({ isGameOver: false, PushCards: 0 });
  };

  return (
    <button className={style.BetButton} onClick={handleBet}>
      Bet
    </button>
  );
}

export default BetButton;
