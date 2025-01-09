import style from "../../ComponentStyles/Cards.module.css";
import Clubs from "./Symbols/Clubs";
import Diamond from "./Symbols/Diamond";
import Hearth from "./Symbols/Hearth";
import Pikes from "./Symbols/Pikes";
import { useEffect, useRef } from "react";
import { v4 as uuidv4 } from "uuid";
function Card({ symbol, number, index }) {
  const CardRef = useRef(null);

  useEffect(() => {
    const Card = CardRef.current;
    const rightValue = `calc(${20}% + ${index} * (clamp(15%, 100px, 20%) / 1.5))`;

    // Set the custom property on the Card element
    Card.style.setProperty("--card-right", rightValue);
  }, []);

  return (
    <div className={style.cardContainer} ref={CardRef}>
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
