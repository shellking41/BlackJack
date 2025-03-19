import React from "react";

import style from "../ComponentStyles/Deck.module.css";

function Deck() {
    const DeckSize = new Array(5).fill(null);

    return DeckSize.map((item, index) => (
        <div key={index} className={style.CardContainer} style={{top: `calc(-10% - ${index * 0.8}%)`}}>
            <div className={style.CardsBack}></div>
        </div>
    ));
}

export default Deck;