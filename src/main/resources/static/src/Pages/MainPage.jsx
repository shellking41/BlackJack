import React, {useEffect} from 'react';
import Form from "../GlobalCompoundComponents/Form.jsx";
import BlackJack from "../Games/BlackJack/BlackJack.jsx";
import {UseApiCallHook} from "../GlobalHooks/useApiCallHook.js";
import Main from "../GlobalCompoundComponents/Main.jsx";


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