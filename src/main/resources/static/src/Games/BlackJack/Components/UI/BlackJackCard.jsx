import style from "../ComponentStyles/Cards.module.css";
import Clubs from "./Symbols/Clubs";
import Diamond from "./Symbols/Diamond";
import Hearth from "./Symbols/Heart";
import Spades from "./Symbols/Spades.jsx";

import {useContext, useEffect, useLayoutEffect, useRef, useState} from "react";

import Rotator from "../Rotator";
import {CardContext} from "../../Contexts/CardContext";


function Card({symbol, number, index, isPlayerCard, cardId}) {
    const CardRef = useRef(null);
    const FrontCardRef = useRef(null);

    const {setDealerCards, setPlayerCards, dealerCards, playerCards} = useContext(CardContext);


    useLayoutEffect(() => {
        const Card = CardRef.current;
        const FrontCard = FrontCardRef.current;
        // Calculate horizontal position

        const ySpread = -1;
        const xSpread = -2; // Adjust this value to control card spacing

        const xOffset = index * xSpread;
        let yOffset = index * ySpread - 10;

        if (!isPlayerCard) {
            const ySpread = -5;
            yOffset = index * ySpread + 20;
        }

        Card.style.setProperty("--zIndex", index + 1 * 10);
        Card.style.setProperty("--card-right", `${45 + xOffset}%`);
        Card.style.setProperty("--card-down", `${yOffset}%`);
        Card.style.setProperty("--Middle", "100%");

        if (isPlayerCard) {
            Card.style.setProperty("--Middle", "0%");
            Card.style.setProperty("--starting-pointY", `-110%`);
            Card.style.setProperty("--starting-pointX", `5%`);


        }
    }, [index, isPlayerCard]);

    const handleAnimationEnd = () => {

    };

    let PushCards = 0;
    return (
        <div
            className={style.CardContainer}
            ref={CardRef}
            id={index}
            style={{
                transition: "all 0.5s ease-in-out",
                transform: isPlayerCard
                    ? `translateX(${(index - playerCards.length + 1) * 20 - PushCards * 20}%) translateY(${(index - playerCards.length + 1) * 10}%)  `
                    :
                    `translateX(${(index - dealerCards.length + 1) * 20 - PushCards * 20}%)  `

            }}
            onAnimationEnd={handleAnimationEnd}

            /*transform--> always push to the left if a new card initialized*/
        >
            <Rotator isPlayerCard={isPlayerCard} index={index} cardId={cardId}>
                <div className={`${style.FrontCard}`} ref={FrontCardRef}>
                    <div className={style.numberContainerTop}>
                        <h1>{number}</h1>
                    </div>
                    <div className={style.symbolContainer}>
                        {symbol == "Heart" ? <Hearth/> : symbol == "Spades" ? <Spades/> : symbol == "Clubs" ?
                            <Clubs/> : symbol == "Diamond" ? <Diamond/> : <p>Something wrong</p>}
                    </div>
                </div>
                <div className={style.CardsBack}></div>
            </Rotator>
        </div>
    );
}

export default Card;
