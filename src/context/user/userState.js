import { useState } from "react";
import userContext from "./userContext";

const UserContext  = userContext;

const UserState = ({children}) =>{
    const [user, setUser] = useState({})
    
    return (
        <UserContext.Provider value={{user, setUser}}>
            {children}
        </UserContext.Provider>
    )
}

export default UserState;