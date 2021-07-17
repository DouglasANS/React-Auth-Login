import React, { useEffect, useState } from 'react'
import Axios from 'axios';

import styles from '../styles/Dashboard.module.css'

export default function DashBoardComponent(){

    const [medico, setMedico] = useState([])
    const [enfermeiro, setEnfermeiro] = useState([])
    const [tecnicoEnfermagem, setTecnicoEnfermagem] = useState([])
    const [fonoaudiologia, setFonoaudiologia] = useState([])


    useEffect(()=>{
        Axios.get ('http://localhost:3002/api/countMedico').then((response) => {
        console.log(response.data)
        setMedico(response.data)
        })

        Axios.get ('http://localhost:3002/api/countEnfermeiro').then((response) => {
        console.log(response.data)
        setEnfermeiro(response.data)
        })

        Axios.get ('http://localhost:3002/api/countTecnicoEnfermagem').then((response) => {
        console.log(response.data)
        setTecnicoEnfermagem(response.data)
        })

        Axios.get ('http://localhost:3002/api/countFonoaudiologia').then((response) => {
        console.log(response.data)
        setFonoaudiologia(response.data)
        })
 
    },[])

    

    
    return(  
        <div className={styles.container}>
            
            {medico.map((val) => { return (
                    <>
                        <h1 key={1}>Medico : {val.a}</h1>
                    </>)})}
            {enfermeiro.map((val) => { return (
                    <>
                        <h1 key={2}>enfermeiro : {val.a}</h1>
                    </>)})} 
            {tecnicoEnfermagem.map((val) => { return (
                    <>
                        <h1 key={3}>tecnicoEnfermagem : {val.a}</h1>
                    </>)})} 
            {fonoaudiologia.map((val) => { return (
                    <>
                        <h1 key={4}>fonoaudiologia : {val.a}</h1>
                    </>)})} 




        </div>
    )
}