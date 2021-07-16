import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'

import styles from '../styles/Home.module.css'

export default function DashBoardComponent(){
    const auth = useContext(AuthContext)

    
    return(
        <div className={styles.container}>
            <h1>DashBoard</h1>
            <h1>{auth.login}</h1>
           <a href="/"> <button >voltar</button></a>
        </div>
    )
}