import api from "../api";
import { useState } from "react";

const useUser = () => {
    const [userToken, setUserToken] = useState(localStorage.getItem("userAccessToken"));

    const saveToken = (token) => {
        localStorage.setItem("userAccessToken");
        api.defaults.headers.common['Authorization'] = token;
        setUserToken(token);
    }

    return {
        userToken,
        saveToken,
    }
}

export default useUser;