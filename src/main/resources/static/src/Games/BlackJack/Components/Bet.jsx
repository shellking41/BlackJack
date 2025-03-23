import style from "../Components/ComponentStyles/Bet.module.css";
import SimpleInput from "../../../GlobalComponents/SimpleInput.jsx";
import {useContext, useState, useRef} from "react";
import {UserContext} from "../../../GlobalContext/UserContext.jsx";


function Bet() {

    const {userInfo, setUserInfo} = useContext(UserContext);


    const BetAmountRef = useRef(null);

    const handleDouble = () => {
        const BetAmount = BetAmountRef.current;
        BetAmount.value = BetAmount.value * 2;
    }
    const handleHalf = () => {
        const BetAmount = BetAmountRef.current;
        BetAmount.value = BetAmount.value / 2;
        BetAmount.value = Math.round(BetAmount.value * 100) / 100;
    };

    const handlePlaceBetting = (e) => {
        setUserInfo(prev => ({
            ...prev,
            currentBet: e.target.value
        }));
        console.log(userInfo);
    };

    return (
        <div className={style.BetContainer}>
            <div>
                <p className={style.BetAmount}>Bet Amount</p>
                <p className={style.MoneyLeft}>{userInfo.money}$</p>
            </div>
            <div className={style.BetInputQuickBetContainer}>
                <div className={style.BetInputContainer}>
                    <SimpleInput classname={style.BetInput} type={"number"} placeholder={"Place your Bet"}
                                 reference={BetAmountRef} onChange={handlePlaceBetting}/>
                </div>
                <div className={style.QuickBetContainer}>
                    <button onClick={handleHalf}>½</button>
                    <button onClick={handleDouble}>2x</button>
                </div>
            </div>
        </div>
    );

}

export default Bet;