import {useContext, useState, useRef, useEffect} from "react";

import style from "../Components/ComponentStyles/TableContainer.module.css";
import Deck from "./UI/Deck.jsx";
import BlackJackCard from "./UI/BlackJackCard.jsx";
import {CardContext} from "../Contexts/CardContext.jsx";
import useOnReload from "../Hooks/useOnReload.js";


function TableContainer() {

    const {dealerCards, playerCards} = useContext(CardContext)

    useOnReload()
    return (
        <>
            <div className={style.BlackJack}>
                <Deck/>

                <div className={style.dealerCardContainer}>
                    {dealerCards.map((item, index) => {
                        return (
                            <div key={index}>
                                <BlackJackCard symbol={item.symbol} number={item.value} index={index}
                                               isPlayerCard={false} cardId={item.id}/>
                            </div>
                        );
                    })}
                </div>

                <div className={style.playerCardContainer}>
                    {playerCards.map((item, index) => {
                        return (
                            <div key={index}>
                                <BlackJackCard symbol={item.symbol} number={item.value} index={index}
                                               isPlayerCard={true} cardId={item.id}/>
                            </div>
                        );
                    })}
                </div>
            </div>
        </>
    );
}

export default TableContainer;