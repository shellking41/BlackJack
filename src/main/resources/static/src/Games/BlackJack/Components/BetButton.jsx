import {useContext, useEffect, useRef, useState} from "react";
import style from "../Components/ComponentStyles/BetButton.module.css";


function BetButton() {


    //Working but need approvement
    const handleBet = () => {

    };

    return (
        <button className={style.BetButton} onClick={handleBet}>
            Bet
        </button>
    );
}

export default BetButton;
