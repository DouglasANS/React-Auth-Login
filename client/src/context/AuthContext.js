import React, { createContext, useState } from "react"

export const AuthContext = createContext();

export default function AuthProvider({ children }){
    const [login, setLogin] = useState(false)

   

    return (
    <div>
        <AuthContext.Provider value={{login, setLogin}}>
            {children}
        </AuthContext.Provider>
    </div>
       
    )
}
