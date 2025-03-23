import React, {createContext, useState} from 'react'

export const CardContext = createContext()

function CardContextProvider({children}) {

    const [playerCards, setPlayerCards] = useState([])
    const [dealerCards, setDealerCards] = useState([])

    const values = {
        playerCards,
        setPlayerCards,
        dealerCards,
        setDealerCards
    }

    return (
        <CardContext.Provider value={values}>
            {children}
        </CardContext.Provider>
    )
}

export default CardContextProvider
