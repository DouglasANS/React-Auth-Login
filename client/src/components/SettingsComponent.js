import Axios from 'axios';
import {  useEffect, useState } from 'react';
import styles from '../styles/SettingComponent.module.css'

export default function SettingsComponent(){
    const [dataCurrentUser, setDatacurrentUser] = useState([])
    
    useEffect(()=>{
        const token = window.localStorage.getItem('currentEmail')
        Axios.get (`http://localhost:3002/api/SelectUserLogin/${token}`).then((response) => {
        setDatacurrentUser(response.data[0])
        })  
     },[])
     
     console.log('datasssa1: ', dataCurrentUser)
    return(
        <>
            <div className={styles.container}>
                <div className={styles.fundoimg}>
                    
                </div>
                <div >
                    <h1>username: {dataCurrentUser.username}</h1>
                    <h1>cpf: {dataCurrentUser.cpf}</h1>
                    
                    <input type="text" onChange={(e)=>{}}/>
                    <h1>localidadedeatuacao: {dataCurrentUser.localidadedeatuacao}</h1>
                    <input type="text" onChange={(e)=>{}}/>
                    <h1>deslocamentomax:{dataCurrentUser.deslocamentomax}</h1>
                    <input type="text" onChange={(e)=>{}}/>
                    <h1>SettingsComponent: {dataCurrentUser.id}</h1>
                    <input type="text" onChange={(e)=>{}}/>
                    <button >teste</button>
                </div>
            </div>
        </>
    )
}