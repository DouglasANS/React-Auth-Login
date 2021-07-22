import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import styles from '../styles/HeaderComponent.module.css'
import { deleteAllStorage } from '../Request/tokenService';
import { Redirect } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

export default function HeaderComponent() {

    const [valor, setvalor] = useState(false)
    const { currentUser } = useContext(AuthContext)

    function sair() {
        setvalor(true)
        deleteAllStorage()
    }

    if (valor) {
        return <Redirect to='/' />
    }

    return (
        <div className={styles.container}>
            <div className={styles.logo}>
            </div>
            <div className={styles.element1}>
                <h1>Bem Vindo: {currentUser}</h1>
            </div>
            <div className={styles.element}>
                <Link className={styles.linkk} to="/dashboard">Dashboard</Link>
                <Link className={styles.linkk} to="/settings">Configuração</Link>
            </div>
            <div className={styles.sair}>
                <a><button onClick={sair}>Sair</button></a>
            </div>
        </div>
    )
}