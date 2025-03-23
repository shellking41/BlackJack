import {useContext, useEffect, useRef, useState} from "react";
import style from "../Components/ComponentStyles/BetButton.module.css";
import {UserContext} from "../../../GlobalContext/UserContext.jsx";
import SimpleButton from "../../../GlobalComponents/SimpleButton.jsx";
import {UseApiCallHook} from "../../../GlobalHooks/useApiCallHook.js";


function BetButton() {

    const {userInfo} = useContext(UserContext)
    console.log({currentBet: userInfo.currentBet})

    const handleBet = () => {
        UseApiCallHook.post(`${import.meta.env.VITE_API_URL}/GameState/StartGame`, {currentBet: userInfo.currentBet})
    };

    return (
        <SimpleButton classname={style.BetButton} onclick={handleBet} text={"Bet"}/>
    );
}

export default BetButton;
