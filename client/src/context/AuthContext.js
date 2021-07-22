import React, { createContext, useState } from "react"
import Axios from 'axios';
export const AuthContext = createContext();

export default function AuthProvider({ children }) {
    const [login, setLogin] = useState(false)
    const [currentUser, setCurrentUser] = useState(false)
    const [currentEmail, setCurrentEmail] = useState(false)

    function currentUserData() {
        const token = window.localStorage.getItem('currentEmail')
        Axios.get(`http://localhost:3002/api/SelectUserLogin/${token}`).then((response) => {
            setCurrentUser(response.data[0].username)
            setCurrentEmail(response.data[0].email)
        })
    }

    return (
        <div>
            <AuthContext.Provider value={{ login, setLogin, currentUserData, currentUser, currentEmail }}>
                {children}
            </AuthContext.Provider>
        </div>
    )
}
