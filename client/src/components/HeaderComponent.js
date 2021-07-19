import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import styles from '../styles/HeaderComponent.module.css'

import { AuthContext } from '../context/AuthContext';
export default function HeaderComponent(){

    const { currentUser } = useContext(AuthContext)
    return(
        <>
            <div className={styles.container}>
                <h1>Bem vindo: {currentUser}</h1>
                <Link className={styles.linkk} to="/dashboard">Dashboard</Link>
                <Link className={styles.linkk} to="/conf">Configuração</Link>
            </div>
        
        </>
    )
}