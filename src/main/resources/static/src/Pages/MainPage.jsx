import React, {useEffect} from 'react';
import Form from "../GlobalCompoundComponents/Form.jsx";
import BlackJack from "../Games/BlackJack/BlackJack.jsx";
import {UseApiCallHook} from "../Hooks/useApiCallHook.js";
import Main from "../GlobalCompoundComponents/Main.jsx";
import UserContextProvider from "../GlobalContext/UserContext.jsx";

function MainPage() {


    return (
        <>
            {/*<UserContextProvider>*/}
            <Main/>
            {/*</UserContextProvider>*/}


        </>
    );
}

export default MainPage;