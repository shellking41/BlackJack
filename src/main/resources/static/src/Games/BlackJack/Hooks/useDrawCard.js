import React, {useContext} from 'react'
import {UseApiCallHook} from "../../../GlobalHooks/useApiCallHook.js";
import {CardContext} from "../Contexts/CardContext.jsx";

function useDrawCard() {
    const {setDealerCards, setPlayerCards} = useContext(CardContext)

    const cardSetters = {
        PLAYER: setPlayerCards,
        DEALER: setDealerCards
    };

    const drawCard = async (cardType) => {
        if (cardSetters[cardType]) {
            UseApiCallHook.post(`${import.meta.env.VITE_API_URL}/Card/DrawCard`, {cardType})
                .then((card) => {
                    cardSetters[cardType]((prev) => [...prev, card]);
                })
                .catch((error) => console.error("Failed to draw card:", error));

        }
    };

    return drawCard;
}

export default useDrawCard
