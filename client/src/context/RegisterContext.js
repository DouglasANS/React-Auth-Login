import React, { createContext, useState } from "react"

export const RegisterContext = createContext();

export default function RegisterProvider({ children }){
    const [login, setLogin] = useState(false)

   

    return (
    <div>
        <RegisterContext.Provider value={{login, setLogin}}>
            {children}
        </RegisterContext.Provider>
    </div>
       
    )
}
