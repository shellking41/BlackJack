import style from "../../ComponentStyles/Cards.module.css";
import Clubs from "./Symbols/Clubs";
import Diamond from "./Symbols/Diamond";
import Hearth from "./Symbols/Hearth";
import Pikes from "./Symbols/Pikes";

function Card({ symbol, number }) {
  return (
    <div className={style.cardContainer}>
      <div className={style.numberContainerTop}>
        <h1>{number}</h1>
      </div>
      <div className={style.symbolContainer}>
        {symbol == "Hearth" ? <Hearth /> : symbol == "Pikes" ? <Pikes /> : symbol == "Clubs" ? <Clubs /> : symbol == "Diamond" ? <Diamond /> : <p>Something wrong</p>}
      </div>
      <div className={style.numberContainerBottom}>
        <h1>{number}</h1>
      </div>
    </div>
  );
}

export default Card;
