import style from "../../ComponentStyles/Cards.module.css";
import Clubs from "./Symbols/Clubs";
import Diamond from "./Symbols/Diamond";
import Hearth from "./Symbols/Hearth";
import Pikes from "./Symbols/Pikes";
import { useEffect, useRef, useState } from "react";
import { v4 as uuidv4 } from "uuid";

function Card({ symbol, number, index, PlayerCards, DealerCards, Ignore }) {
  const CardRef = useRef(null);
  const RotatorRef = useRef(null);

  useEffect(() => {
    const Card = CardRef.current;
    const Rotator = RotatorRef.current;
    // Calculate horizontal position
    // Cards should be closer together when rotated
    const spread = -6; // Adjust this value to control card spacing
    const xOffset = index * spread;
    const zIndex = map_range(index, 0, 99, 99, 0);

    Card.style.setProperty("--zIndex", zIndex);
    Card.style.setProperty("--card-right", `${50 + xOffset}%`);

    if (DealerCards && !(DealerCards?.length == 2 && DealerCards?.length - 1 == index)) {
      Rotator.classList.add(style.animated);
    }
    if (PlayerCards || Ignore == true) {
      Rotator.classList.add(style.animated);
    }

    // Calculate z-index for proper layering
  }, [index, Ignore, DealerCards?.length]);

  function map_range(value, low1, high1, low2, high2) {
    return low2 + ((high2 - low2) * (value - low1)) / (high1 - low1);
  }

  return (
    <div
      className={style.CardContainer}
      ref={CardRef}
      style={{
        transition: "transform 0.5s ease-in-out",
        transform: PlayerCards ? `translateX(${(index - PlayerCards.length + 1) * 60}%) ` : DealerCards ? `translateX(${(index - DealerCards.length + 1) * 60}%) ` : null,
      }}
    >
      <div className={style.Rotator} ref={RotatorRef}>
        <div className={`${style.FrontCard}`}>
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
        <div className={style.CardsBack}></div>
      </div>
    </div>
  );
}

export default Card;
