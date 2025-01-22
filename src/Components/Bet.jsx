import style from "../Components/ComponentStyles/Bet.module.css";

function Bet() {
  return (
    <div className={style.BetContainer}>
      <div>
        <p className={style.BetAmount}>Bet Amount</p>
        <p className={style.MoneyLeft}>999.99$</p>
      </div>
      <div className={style.BetInputQuickBetContainer}>
        <div className={style.BetInputContainer}>
          <input type="number" className={style.BetInput} />
        </div>
        <div className={style.QuickBetContainer}>
          <button>½</button>
          <button>2x</button>
        </div>
      </div>
    </div>
  );
}

export default Bet;
