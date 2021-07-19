import React, { useContext, useEffect, useState } from 'react'
import {CountRequest} from '../Request/CountGetRequest'
import styles from '../styles/Dashboard.module.css'
import { AuthContext } from '../context/AuthContext';

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
            <h1>medico: {medico}</h1>
            <h1>enfermeiro: {enfermeiro}</h1>
            <h1>tecnicoEnfermagem :{tecnicoEnfermagem}</h1>
            <h1>fonoaudiologia: {fonoaudiologia}</h1>
     
     

        </div>
    )
}