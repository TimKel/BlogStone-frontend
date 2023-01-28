import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState(JSON.parse(localStorage.getItem("user")) || null)

    const login = async(formData) => {
        let result = await login(formData);
        setCurrentUser(result.data)
    }

    const logout = async(formData) => {
        let result = await logout(formData);
        setCurrentUser(null)
    }

    useEffect(() => {
        localStorage.setItem("user", JSON.stringify(currentUser));
    }, [currentUser]);

    return (
        <AuthContextProvider value={{currentUser, login, logout}}>
            {children}
        </AuthContextProvider>
    )
}