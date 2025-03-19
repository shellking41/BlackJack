import {useState, useRef, useEffect, useContext} from "react";


import style from "./BlackJack.module.css";
import TableContainer from "./Components/TableContainer.jsx";
import InteractionContainer from "./Components/InteractionContainer.jsx";


function BlackJack() {


    return (
        <div className={style.GameContainer}>
            <InteractionContainer/>
            <TableContainer/>

        </div>
    );
}

export default BlackJack;
