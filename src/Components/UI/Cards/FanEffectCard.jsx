import style from "../../ComponentStyles/Cards.module.css";
import Clubs from "./Symbols/Clubs";
import Diamond from "./Symbols/Diamond";
import Hearth from "./Symbols/Hearth";
import Pikes from "./Symbols/Pikes";
import { useEffect, useRef, useState } from "react";
import { v4 as uuidv4 } from "uuid";

function Card({ symbol, number, index, PlayerCards }) {
  const CardRef = useRef(null);
  const [RotationValue, setRotationValue] = useState();

  useEffect(() => {
    const Card = CardRef.current;
    const centerIndex = Math.floor((PlayerCards.length - 1) / 2);

    // Calculate rotation (fan effect)
    // Adjust the multiplier (15) to control the spread of the fan
    const rotation = (index - centerIndex) * 8;
    setRotationValue(rotation);

    // Calculate horizontal position
    // Cards should be closer together when rotated
    const spread = -3; // Adjust this value to control card spacing
    const xOffset = index * spread;
    const zIndex = map_range(index, 0, 99, 99, 0);

    Card.style.setProperty("--zIndex", zIndex);
    Card.style.setProperty("--card-right", `${50 + xOffset}%`);

    // Calculate z-index for proper layering
  }, [index, PlayerCards.length]);

  function map_range(value, low1, high1, low2, high2) {
    return low2 + ((high2 - low2) * (value - low1)) / (high1 - low1);
  }

  return (
    <div
      className={`${style.cardContainer}`}
      ref={CardRef}
      style={{
        transition: "transform 0.5s ease-in-out",
        transform: `
          translateX(${(index - PlayerCards.length + 1) * 40}%) 
          rotateZ(${RotationValue}deg)
          translateY(${Math.abs(RotationValue) * 0.6}px)
        `, //A   translateX pusholja el a kártyát
        transformOrigin: "bottom center",
      }}
    >
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
