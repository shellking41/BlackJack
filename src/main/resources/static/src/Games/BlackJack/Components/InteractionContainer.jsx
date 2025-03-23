import {useContext, useEffect, useRef, useState} from "react";
import style from "../Components/ComponentStyles/InteractionContainer.module.css";

import Bet from "./Bet";

import {GiCardDraw} from "react-icons/gi";
import {TbCardsFilled} from "react-icons/tb";
import {TbBoxMultiple2} from "react-icons/tb";
import {BsSignStopFill} from "react-icons/bs";
import BetButton from "./BetButton";
import SimpleButton from "../../../GlobalComponents/SimpleButton.jsx";
import useDrawCard from "../Hooks/useDrawCard.js";


function InteractionContainer() {
    const drawCard = useDrawCard()


    return (
        <div className={style.InteractionContainer}>
            <Bet/>
            <div className={style.ActionButtonContainer}>

                <div className={style.ActionButtonContainerRow1}>
                    <SimpleButton text={<p>Hit{" "}<span style={{color: "orange"}}><GiCardDraw/></span></p>}
                                  classname={style.ActionButton} onclick={() => drawCard("PLAYER")}/>

                    <SimpleButton text={<p>Stand{" "}<span style={{color: "red"}}><BsSignStopFill/></span></p>}
                                  classname={style.ActionButton}/>
                </div>
                <div className={style.ActionButtonContainerRow2}>
                    <SimpleButton text={<p>Double{" "}<span style={{color: "white"}}><TbBoxMultiple2/></span></p>}
                                  classname={style.ActionButton}/>
                </div>
            </div>
            <BetButton/>
        </div>
    );
}

export default InteractionContainer;