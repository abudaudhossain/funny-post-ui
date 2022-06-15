import { useContext } from "react";
import userContext from "../context/user/userContext";

const UseUser = () => {
    return useContext(userContext);
}

export default UseUser;  