import {useContext, useEffect, useRef, useState} from "react";
import style from "../Components/ComponentStyles/InteractionContainer.module.css";
import ActionButton from "./ActionButton";
import Bet from "./Bet";

import {GiCardDraw} from "react-icons/gi";
import {TbCardsFilled} from "react-icons/tb";
import {TbBoxMultiple2} from "react-icons/tb";
import {BsSignStopFill} from "react-icons/bs";
import BetButton from "./BetButton";


function InteractionContainer() {


    return (
        <div className={style.InteractionContainer}>
            <Bet/>
            <div className={style.ActionButtonContainer}>

                <div className={style.ActionButtonContainerRow1}>
                    <ActionButton
                        Text={
                            <p>
                                Hit{" "}
                                <span style={{color: "orange"}}>
                  <GiCardDraw/>
                </span>
                            </p>
                        }
                    />
                    <ActionButton
                        Text={
                            <p>
                                Stand{" "}
                                <span style={{color: "red"}}>
                  <BsSignStopFill/>
                </span>
                            </p>
                        }
                    />
                </div>
                <div className={style.ActionButtonContainerRow2}>
                    <ActionButton
                        Text={
                            <p>
                                Double{" "}
                                <span style={{color: "white"}}>
                  <TbBoxMultiple2/>
                </span>
                            </p>
                        }
                    />
                </div>
            </div>
            <BetButton/>
        </div>
    );
}

export default InteractionContainer;