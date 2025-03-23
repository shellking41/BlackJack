import {useContext, useEffect, useRef, useState} from "react";
import style from "./ComponentStyles/Rotator.module.css";
import {PlayerActionContext} from "../Contexts/PlayerActionContext";
import {CardContext} from "../Contexts/CardContext";
import {UseApiCallHook} from "../../../GlobalHooks/useApiCallHook.js";
import UseFlipCard from "../Hooks/useFlipCard.js";

//Flipping the card
function Rotator({children, index, isPlayerCard, cardId}) {


    const RotatorRef = useRef(null);
    const {Stand} = useContext(PlayerActionContext);
    UseFlipCard(isPlayerCard, index, Stand, RotatorRef.current, cardId)


    return (
        <div className={style.Rotator} ref={RotatorRef}>
            {children}
        </div>
    );
}

export default Rotator;
