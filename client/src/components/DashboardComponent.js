import React, { useContext, useEffect, useState } from 'react'
import {CountRequest} from '../Request/CountGetRequest'
import styles from '../styles/DashboardComponent.module.css'
import { AuthContext } from '../context/AuthContext';
import CardDashboardComponent, { Card2 } from '../components/CardDashboardComponent';

export default function DashBoardComponent(){
    const [all, setAll] = useState([])
    const [medico, setMedico] = useState([])
    const [enfermeiro, setEnfermeiro] = useState([])
    const [tecnicoEnfermagem, setTecnicoEnfermagem] = useState([])
    const [fonoaudiologia, setFonoaudiologia] = useState([])
    const [nutricionista, setNutricionista] = useState([])
    const [fisioterapeuta, setFisioterapeuta] = useState([])

    const {currentUserData} = useContext(AuthContext)
    

    useEffect(()=>{
       CountRequest(setAll, setMedico, setEnfermeiro, setTecnicoEnfermagem, setFonoaudiologia, setNutricionista, setFisioterapeuta)
       currentUserData()
    },[])

 

    
    return(  
        <div >
            <div className={styles.container}>
            <CardDashboardComponent title="Todos" number={all}  />
            <Card2  title="Medicina" number={medico} />
            <CardDashboardComponent title="Enfermagem" number={enfermeiro} />
            <CardDashboardComponent title="Técnico em enfermagem" number={tecnicoEnfermagem} />
            </div>
            <div className={styles.container}>
                
            <CardDashboardComponent title="Fonoaudiologia" number={fonoaudiologia} />
            <CardDashboardComponent title="Nutrição" number={nutricionista} />
            <CardDashboardComponent title="Fisioterapia" number={fisioterapeuta} />
            </div>
     
     

        </div>
    )
}