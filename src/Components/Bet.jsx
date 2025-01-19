import style from "../Components/ComponentStyles/Bet.module.css";

function Bet() {
  return (
    <>
      <input type="number" className={style.BetInput} />
      <button className={style.BetButton}>Bet</button>
    </>
  );
}

export default Bet;
