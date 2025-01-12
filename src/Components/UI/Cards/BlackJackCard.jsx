import style from "../../ComponentStyles/Cards.module.css";
import Clubs from "./Symbols/Clubs";
import Diamond from "./Symbols/Diamond";
import Hearth from "./Symbols/Hearth";
import Pikes from "./Symbols/Pikes";
import { useEffect, useRef, useState } from "react";
import { v4 as uuidv4 } from "uuid";

function Card({ symbol, number, index, PlayerCards, DealerCards }) {
  const FrontCardRef = useRef(null);

  useEffect(() => {
    const FrontCard = FrontCardRef.current;

    // Calculate horizontal position
    // Cards should be closer together when rotated
    const spread = -5; // Adjust this value to control card spacing
    const xOffset = index * spread;
    const zIndex = map_range(index, 0, 99, 99, 0);

    FrontCard.style.setProperty("--zIndex", zIndex);
    FrontCard.style.setProperty("--card-right", `${50 + xOffset}%`);

    if (!PlayerCards) {
      FrontCard.style.setProperty("--VerticalPos", " calc(0% + min(30%, 20%))");
      FrontCard.style.setProperty("--VerticalPos-small-Height", " calc(0% + min(20vw, 20%))");
      FrontCard.style.setProperty("--VerticalPos-small-Width", " calc(0% + min(20vh, 20%))");
      FrontCard.style.setProperty("--TranslateX", `${(index - DealerCards.length + 1) * 62}%`);
    }

    if (!DealerCards) {
      FrontCard.style.setProperty("--VerticalPos", " calc(98% - min(30%, 20%))");
      FrontCard.style.setProperty("--VerticalPos-small-Height", " calc(98% - min(20vw, 20%))");
      FrontCard.style.setProperty("--VerticalPos-small-Width", " calc(98% - min(20vh, 20%))");
      FrontCard.style.setProperty("--TranslateX", `${(index - PlayerCards.length + 1) * 62}%`);
    }

    // Calculate z-index for proper layering
  }, [index]);

  function map_range(value, low1, high1, low2, high2) {
    return low2 + ((high2 - low2) * (value - low1)) / (high1 - low1);
  }

  return (
    <div
      className={style.CardContainer}
      ref={FrontCardRef}
      style={{
        transition: "transform 0.5s ease-in-out",
        transform: PlayerCards ? `translateX(${(index - PlayerCards.length + 1) * 62}%) ` : DealerCards ? `translateX(${(index - DealerCards.length + 1) * 62}%) ` : null,
      }}
    >
      <div className={style.Rotator}>
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
