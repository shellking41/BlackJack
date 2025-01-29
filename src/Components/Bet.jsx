import style from "../Components/ComponentStyles/Bet.module.css";
import { useContext, useEffect, useRef } from "react";
import { PlayerActionContext } from "../Contexts/PlayerActionContext";
function Bet() {
  const { GameOver } = useContext(PlayerActionContext);

  const BetAmountRef = useRef(null);
  const BetContainerRef = useRef(null);

  useEffect(() => {
    const BetContainer = BetContainerRef.current;
    if (!GameOver.isGameOver) {
      BetContainer.style.setProperty("--Disabled-BackGround-color-Bet", "#1c3441");
      BetContainer.style.setProperty("--Disabled-BackGround-color-Bet-Input", "#00e50079");
      BetContainer.style.setProperty("--Disabled-Font-Color-Bet", "#7d7d7d");
    } else {
      BetContainer.style.removeProperty("--Disabled-BackGround-color-Bet");
      BetContainer.style.removeProperty("--Disabled-Font-Color-Bet");
      BetContainer.style.removeProperty("--Disabled-BackGround-color-Bet-Input");
    }
  }, [GameOver]);

  const handleDouble = () => {
    if (!GameOver.isGameOver) {
      return;
    }

    const BetAmount = BetAmountRef.current;
    BetAmount.value = BetAmount.value * 2;
  };

  const handleHalf = () => {
    if (!GameOver.isGameOver) {
      return;
    }

    const BetAmount = BetAmountRef.current;
    BetAmount.value = BetAmount.value / 2;
    BetAmount.value = Math.round(BetAmount.value * 100) / 100;
  };

  return (
    <div className={style.BetContainer} ref={BetContainerRef}>
      <div>
        <p className={style.BetAmount}>Bet Amount</p>
        <p className={style.MoneyLeft}>999.99$</p>
      </div>
      <div className={style.BetInputQuickBetContainer}>
        <div className={style.BetInputContainer}>
          <input type="number" className={style.BetInput} ref={BetAmountRef} />
        </div>
        <div className={style.QuickBetContainer}>
          <button onClick={handleHalf}>½</button>
          <button onClick={handleDouble}>2x</button>
        </div>
      </div>
    </div>
  );
}

export default Bet;
