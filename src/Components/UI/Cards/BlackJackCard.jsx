import style from "../../ComponentStyles/Cards.module.css";
import Clubs from "./Symbols/Clubs";
import Diamond from "./Symbols/Diamond";
import Hearth from "./Symbols/Heart";
import Pikes from "./Symbols/Pikes";

import { useContext, useEffect, useLayoutEffect, useRef, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Rotator from "../../Rotator";
import { CardContext } from "../../../Contexts/CardContext";
import { PlayerActionContext } from "../../../Contexts/PlayerActionContext";

function Card({ symbol, number, index, PlayerCards, DealerCards, Ignore, PushCards, FirstPlayerCardRef }) {
  const CardRef = useRef(null);
  const FrontCardRef = useRef(null);

  const { GameOver } = useContext(PlayerActionContext);
  const { setDealerCards, setPlayerCards } = useContext(CardContext);

  useLayoutEffect(() => {
    const Card = CardRef.current;
    const FrontCard = FrontCardRef.current;
    // Calculate horizontal position

    const ySpread = -1;
    const xSpread = -2; // Adjust this value to control card spacing

    const xOffset = index * xSpread;
    let yOffset = index * ySpread - 10;

    if (DealerCards) {
      const ySpread = -5;
      yOffset = index * ySpread + 20;
      // if (DealerCards?.length - 1 == index && index == 2) {
      //   Card.style.setProperty("--Delay", "200ms");
      //   Card.style.setProperty("--Animation-Speed", "500ms");
      // }
    }

    // const zIndex = map_range(index, 0, 99, 99, 0);

    Card.style.setProperty("--zIndex", index + 1 * 10);
    Card.style.setProperty("--card-right", `${45 + xOffset}%`);
    Card.style.setProperty("--card-down", `${yOffset}%`);

    if (PlayerCards) {
      Card.style.setProperty("--starting-pointY", `-110%`);
      Card.style.setProperty("--starting-pointX", `5%`);

      if (GameOver.Status == "Win") {
        Card.style.outline = "calc(0.3vw + 0.3vh)  solid #00e500";
        FrontCard.style.outline = "calc(0.3vw + 0.3vh)  solid #00e500";
      } else if (GameOver.Status == "Lose") {
        Card.style.outline = "calc(0.3vw + 0.3vh)  solid rgb(255, 0, 0)";
        FrontCard.style.outline = "calc(0.3vw + 0.3vh)  solid rgb(255, 0, 0)";
      } else {
        Card.style.outline = "none";
        FrontCard.style.outline = "none";
      }
    }
  }, [index, Ignore, DealerCards?.length, PlayerCards, PlayerCards?.length, GameOver]);

  const handleAnimationEnd = () => {
    if (DealerCards) {
      setDealerCards((prev) => {
        const NewState = [...prev];
        NewState[index] = { ...NewState[index], MovedToPosition: true };
        return NewState;
      });
    } else if (PlayerCards) {
      setPlayerCards((prev) => {
        const NewState = [...prev];
        NewState[index] = { ...NewState[index], MovedToPosition: true };
        return NewState;
      });
    }
  };

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
      }}
      onAnimationEnd={handleAnimationEnd}

      /*transform--> always push to the left if a new card initialized*/
    >
      <Rotator DealerCards={DealerCards} Ignore={Ignore} PlayerCards={PlayerCards} index={index}>
        <div className={`${style.FrontCard}`} ref={FrontCardRef}>
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
