import style from "../Components/ComponentStyles/Bet.module.css";
import { useRef } from "react";
function Bet() {
  const BetAmountRef = useRef(null);

  const handleDouble = () => {
    const BetAmount = BetAmountRef.current;
    BetAmount.value = BetAmount.value * 2;
  };
  const handleHalf = () => {
    const BetAmount = BetAmountRef.current;
    BetAmount.value = BetAmount.value / 2;
    BetAmount.value = Math.round(BetAmount.value * 100) / 100;
  };

  return (
    <div className={style.BetContainer}>
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
