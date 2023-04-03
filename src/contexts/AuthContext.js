import { createContext, useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [loggedIn, setLoggedIn] = useState(false);
    const [user, setUser] = useState({
        currentUser: "",
        accessToken: "",
        refreshToken: "",
        restToken: ""
    });

    const login = async (values) => {
        try {
            const currentUserToken = await axios.post("http://22112.fullstack.clarusway.com/account/login/", values);
            console.log(currentUserToken);
            toast.success("Logged in.");
            setLoggedIn(true);
        } catch (error) {
            console.error(error)
            toast.error("Bruh, that account does not exist. Perhaps you entered the wrong email or password.");
            setLoggedIn(false);
        }
    }

    const logout = () => {
        toast.success("Logged out.")
        setLoggedIn(false);
    }

    const values = {
        loggedIn,
        setLoggedIn,
        user,
        setUser,
        login,
        logout
    }

    return (
        <AuthContext.Provider value={values}>
            {children}
        </AuthContext.Provider>
    )
}