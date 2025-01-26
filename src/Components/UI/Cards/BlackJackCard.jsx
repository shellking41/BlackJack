import style from "../../ComponentStyles/Cards.module.css";
import Clubs from "./Symbols/Clubs";
import Diamond from "./Symbols/Diamond";
import Hearth from "./Symbols/Heart";
import Pikes from "./Symbols/Pikes";

import { useContext, useEffect, useRef, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Rotator from "../../Rotator";
import { CardContext } from "../../../Contexts/CardContext";

function Card({ symbol, number, index, PlayerCards, DealerCards, Ignore, PushCards, FirstPlayerCardRef }) {
  const CardRef = useRef(null);
  const RotatorRef = useRef(null);

  useEffect(() => {
    const Card = CardRef.current;

    // Calculate horizontal position
    // Cards should be closer together when rotated
    const ySpread = -1;
    const xSpread = -2; // Adjust this value to control card spacing

    const xOffset = index * xSpread;
    let yOffset = index * ySpread - 10;

    if (DealerCards) {
      const ySpread = -5;
      yOffset = index * ySpread + 20;
      if (DealerCards?.length - 1 == index && index == 2) {
        Card.style.setProperty("--Delay", "200ms");
        Card.style.setProperty("--Animation-Speed", "500ms");
      }
    }

    // const zIndex = map_range(index, 0, 99, 99, 0);

    Card.style.setProperty("--zIndex", index + 1 * 10);
    Card.style.setProperty("--card-right", `${45 + xOffset}%`);
    Card.style.setProperty("--card-down", `${yOffset}%`);

    if (PlayerCards) {
      Card.style.setProperty("--starting-pointY", `-110%`);
      Card.style.setProperty("--starting-pointX", `5%`);
    }
  }, [index, Ignore, DealerCards?.length, PlayerCards, PlayerCards?.length]);

  function map_range(value, low1, high1, low2, high2) {
    return low2 + ((high2 - low2) * (value - low1)) / (high1 - low1);
  }

  return (
    <div
      className={style.CardContainer}
      ref={CardRef}
      id={index}
      style={{
        transition: "transform 0.5s ease-in-out",
        transform: PlayerCards
          ? `translateX(${(index - PlayerCards.length + 1) * 20 - PushCards * 20}%) translateY(${(index - PlayerCards.length + 1) * 10}%)  `
          : DealerCards
          ? `translateX(${(index - DealerCards.length + 1) * 20 - PushCards * 20}%)  `
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
  );
}

export default Card;
