import React, {useContext, useEffect} from 'react'
import {CardContext} from "../Contexts/CardContext.jsx";
import {UseApiCallHook} from "../../../GlobalHooks/useApiCallHook.js";

function UseOnReload() {

    const {setPlayerCards, setDealerCards} = useContext(CardContext)

    const getAllCards = async () => {
        const cards = await UseApiCallHook.get(`${import.meta.env.VITE_API_URL}/Card/AllCard`)
        const dealerCards = cards.DealerCards
        const playerCards = cards.PlayerCards
        console.log(playerCards)


        setPlayerCards((prev) => [...prev, playerCards])
        setDealerCards((prev) => [...prev, dealerCards])

    }

    useEffect(() => {

        getAllCards()
    }, []);


}

export default UseOnReload
