import {createContext, useState} from 'react';


export const UserContext = createContext();

function UserContextProvider({children}) {

    const [userInfo, setUserInfo] = useState({
        firstName: "",
        lastName: "",
        userName: "",
        money: "0",
        currentBet: "0"
    });


    const values = {userInfo, setUserInfo}

    return (
        <UserContext.Provider value={values}>{children}</UserContext.Provider>
    );

}

export default UserContextProvider

