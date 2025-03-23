import React, {useContext, useEffect} from 'react'
import {UseApiCallHook} from "../../../GlobalHooks/useApiCallHook.js";
import style from "../Components/ComponentStyles/Rotator.module.css";
import {CardContext} from "../Contexts/CardContext.jsx";

function UseFlipCard(isPlayerCard, index, Stand, Rotator, cardId) {

    const {setPlayerCards, setDealerCards, dealerCards, playerCards} = useContext(CardContext)

    const flipCard = async (isPlayerCard) => {

        if (isPlayerCard ? playerCards[index]?.flipped : dealerCards[index]?.flipped) {
            return
        }

        if (!isPlayerCard && index != 1) {
            const flippedCard = await UseApiCallHook.put(`${import.meta.env.VITE_API_URL}/Card/Flip/${cardId}`)
            console.log(flippedCard)
            setDealerCards((prev) => {
                const newState = [...prev]
                newState[index] = {...newState[index], flipped: flippedCard.flipped}

                return newState
            })

        } else if (!isPlayerCard && index == 1 && Stand) {
            const flippedCard = await UseApiCallHook.put(`${import.meta.env.VITE_API_URL}/Card/Flip/${cardId}`)
            console.log(flippedCard)

            setDealerCards((prev) => {
                const newState = [...prev]
                newState[index] = {...newState[index], flipped: flippedCard.flipped}

                return newState
            })
        }

        if (isPlayerCard) {
            const flippedCard = await UseApiCallHook.put(`${import.meta.env.VITE_API_URL}/Card/Flip/${cardId}`)
            console.log(flippedCard)
            setPlayerCards((prev) => {
                const newState = [...prev]
                newState[index] = {...newState[index], flipped: flippedCard.flipped}

                return newState
            })

        }


    }

    useEffect(() => {

        flipCard(isPlayerCard)
        if (isPlayerCard ? playerCards[index]?.flipped : dealerCards[index]?.flipped) {
            Rotator.classList.add(style.animated);
        }

    }, [index, dealerCards, playerCards, Stand]);
}

export default UseFlipCard
