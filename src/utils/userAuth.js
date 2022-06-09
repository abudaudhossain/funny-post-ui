import { useContext } from "react";
import userContext from "../context/user/userContext";

const useAuth = () => {
    return useContext(userContext);
}

export default useAuth; 