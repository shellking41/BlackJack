import {createContext, useState} from 'react';


export const UserContext = createContext();

function UserContextProvider({children}) {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");


    const values = {
        firstName,
        lastName,
        userName,
        password,
        setPassword,
        setUserName,
        setLastName,
        setFirstName
    }

    return (
        <UserContext.provider value={{values}}>{children}</UserContext.provider>
    );
}

export default UserContextProvider;