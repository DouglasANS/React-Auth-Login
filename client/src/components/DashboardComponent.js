import React, { useContext, useEffect, useState } from 'react'
import {CountRequest} from '../Request/CountGetRequest'
import styles from '../styles/DashboardComponent.module.css'
import { AuthContext } from '../context/AuthContext';
import CardDashboardComponent from '../components/CardDashboardComponent';

export default function DashBoardComponent(){

    const [medico, setMedico] = useState([])
    const [enfermeiro, setEnfermeiro] = useState([])
    const [tecnicoEnfermagem, setTecnicoEnfermagem] = useState([])
    const [fonoaudiologia, setFonoaudiologia] = useState([])

    const {currentUserData} = useContext(AuthContext)
    

    useEffect(()=>{
       CountRequest(setMedico, setEnfermeiro, setTecnicoEnfermagem, setFonoaudiologia)
       currentUserData()
    },[])

 

    
    return(  
        <div className={styles.container}>
            <CardDashboardComponent title="médicos" number={medico} />
            <CardDashboardComponent title="Enfermeiros(as)" number={enfermeiro} />
            <CardDashboardComponent title="técnicos(as) de Enfermagem" number={tecnicoEnfermagem} />
            <CardDashboardComponent title="Fonoaudiólogos(gas)" number={fonoaudiologia} />
     
     

        </div>
    )
}