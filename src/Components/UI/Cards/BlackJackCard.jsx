import style from "../../ComponentStyles/Cards.module.css";
import Clubs from "./Symbols/Clubs";
import Diamond from "./Symbols/Diamond";
import Hearth from "./Symbols/Heart";
import Pikes from "./Symbols/Pikes";

import { useEffect, useRef, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Rotator from "../../Rotator";

function Card({ symbol, number, index, PlayerCards, DealerCards, Ignore, PushCards }) {
  const CardRef = useRef(null);
  const RotatorRef = useRef(null);

  useEffect(() => {
    const Card = CardRef.current;

    // Calculate horizontal position
    // Cards should be closer together when rotated
    const spread = -1; // Adjust this value to control card spacing
    const yOffset = index * spread;

    // const zIndex = map_range(index, 0, 99, 99, 0);

    Card.style.setProperty("--zIndex", index);
    Card.style.setProperty("--card-right", `${45}%`);
    Card.style.setProperty("--card-down", `${yOffset}%`);
  }, [index, Ignore, DealerCards?.length]);

  function map_range(value, low1, high1, low2, high2) {
    return low2 + ((high2 - low2) * (value - low1)) / (high1 - low1);
  }

  return (
    // <Shaker ShakerRef={ShakerRef}>
    <div
      className={style.CardContainer}
      ref={CardRef}
      style={{
        transition: "transform 0.5s ease-in-out",
        transform: PlayerCards
          ? `translateX(${(index - PlayerCards.length + 1) * 38 - PushCards * 20}%) translateY(${(index - PlayerCards.length + 1) * 10}%)  `
          : DealerCards
          ? `translateX(${(index - DealerCards.length + 1) * 38 - PushCards * 20}%) translateY(${(index - DealerCards.length + 1) * 10}%) `
          : null,
      }} /*transform--> always push to the left if a new card initialized*/
    >
      <Rotator DealerCards={DealerCards} Ignore={Ignore} PlayerCards={PlayerCards} index={index}>
        <div className={`${style.FrontCard}`}>
          <div className={style.numberContainerTop}>
            <h1>{number}</h1>
          </div>
          <div className={style.symbolContainer}>
            {symbol == "Heart" ? <Hearth /> : symbol == "Pikes" ? <Pikes /> : symbol == "Clubs" ? <Clubs /> : symbol == "Diamond" ? <Diamond /> : <p>Something wrong</p>}
          </div>
        </div>
        <div className={style.CardsBack}></div>
      </Rotator>
    </div>
    // </Shaker>
  );
}

export default Card;
