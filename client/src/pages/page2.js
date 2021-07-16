import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'

export default function Pagina2(){
    const auth = useContext(AuthContext)

    function teste(){
        auth.setLogin('123456')
    }

    return(
        <div>
            <h1>Página 2</h1>
            <h1>{auth.login}</h1>
            <button onClick={teste}>setar 123456</button>
        </div>
    )
}