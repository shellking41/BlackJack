import {useContext, useState} from 'react';
import BlackJack from "../Games/BlackJack/BlackJack.jsx";
import UserContextProvider from "../GlobalContext/UserContext.jsx";
import CardContextProvider from "../Games/BlackJack/Contexts/CardContext.jsx";
import PlayerActionContextProvider from "../Games/BlackJack/Contexts/PlayerActionContext.jsx";


function BlackJackPage() {
    return (

        <UserContextProvider>
            <CardContextProvider>
                <PlayerActionContextProvider>
                    <BlackJack/>
                </PlayerActionContextProvider>
            </CardContextProvider>
        </UserContextProvider>


    )
        ;
}

export default BlackJackPage;