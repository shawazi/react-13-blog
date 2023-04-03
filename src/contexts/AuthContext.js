import { createContext, useState } from "react";
import { toast } from "react-toastify";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [loggedIn, setLoggedIn] = useState(false);
    const [user, setUser] = useState({
        currentUser: "",
        accessToken: "",
        refreshToken: "",
        restToken: ""
    });

    const login = () => {
        toast.success("Logged in.");
        setLoggedIn(true);
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