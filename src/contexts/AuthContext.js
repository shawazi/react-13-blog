import { createContext, useState } from "react";
import { toast } from "react-toastify";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [loggedIn, setLoggedIn] = useState(false);

    const login = () => {
        toast.success("Logged in.");
        setLoggedIn(true);
    }

    const logout = () => {
        toast.success("Logged out.")
        setLoggedIn(false);
    }

    const createAccount = () => {

        setLoggedIn(true);
    }

    return (
        <AuthContext.Provider value={{loggedIn, login, logout, createAccount}}>
            {children}
        </AuthContext.Provider>
    )
}