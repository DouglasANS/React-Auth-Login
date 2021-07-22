import React, { useContext, useEffect, useState } from 'react'
import { CountRequest } from '../Request/CountGetRequest'
import styles from '../styles/DashboardComponent.module.css'
import { AuthContext } from '../context/AuthContext';
import CardDashboardComponent, { Card2, Card3, Card4, Card5, Card6, Card7 } from '../components/CardDashboardComponent';

export default function DashBoardComponent() {
    const [all, setAll] = useState([])
    const [medico, setMedico] = useState([])
    const [enfermeiro, setEnfermeiro] = useState([])
    const [tecnicoEnfermagem, setTecnicoEnfermagem] = useState([])
    const [fonoaudiologia, setFonoaudiologia] = useState([])
    const [nutricionista, setNutricionista] = useState([])
    const [fisioterapeuta, setFisioterapeuta] = useState([])

    const { currentUserData } = useContext(AuthContext)


    useEffect(() => {
        CountRequest(setAll, setMedico, setEnfermeiro, setTecnicoEnfermagem, setFonoaudiologia, setNutricionista, setFisioterapeuta)
        currentUserData()
    }, [])




    return (
        <div className={styles.fundo}>
            <div className={styles.container}>
                <CardDashboardComponent title="Total" number={all} />
            </div>
            <div className={styles.container}>
                <Card2 title="Medicina" number={medico} />
                <Card3 title="Enfermagem" number={enfermeiro} />
                <Card4 title="Técnico em Enfermagem" number={tecnicoEnfermagem} />
            </div>
            <div className={styles.container}>
                <Card5 title="Fonoaudiologia" number={fonoaudiologia} />
                <Card6 title="Nutrição" number={nutricionista} />
                <Card7 title="Fisioterapia" number={fisioterapeuta} />
            </div>
        </div>
    )
}