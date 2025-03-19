import {useContext, useState, useRef} from "react";

import style from "../Components/ComponentStyles/TableContainer.module.css";
import Deck from "./UI/Deck.jsx";


function TableContainer() {


    return (
        <>
            <div className={style.BlackJack}>
                <Deck/>

                <div className={style.dealerCardContainer}>

                </div>

                <div className={style.playerCardContainer}>

                </div>
            </div>
        </>
    );
}

export default TableContainer;