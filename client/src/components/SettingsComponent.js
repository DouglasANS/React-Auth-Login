import Axios from 'axios';
import {  useEffect, useState } from 'react';
import styles from '../styles/SettingComponent.module.css'
import { Redirect } from 'react-router-dom';
import { deleteAllStorage } from '../Request/tokenService';

const { isEmpty } = require('lodash');
export default function SettingsComponent(){
    const [valor, setvalor] = useState(false)
    const [dataCurrentUser, setDatacurrentUser] = useState([])
    const [localidadedeatuacao, setLocalidadedeatuacao] = useState('')
    const [deslocamentomax, setDeslocamentomax] = useState('')
    const [password, setPassword] = useState('')
    const id = dataCurrentUser.id

    useEffect(()=>{
        const token = window.localStorage.getItem('currentEmail')
        Axios.get (`http://localhost:3002/api/SelectUserLogin/${token}`).then((response) => {
        setDatacurrentUser(response.data[0])
        setLocalidadedeatuacao(response.data[0].localidadedeatuacao)
        setDeslocamentomax(response.data[0].deslocamentomax)
        setPassword(response.data[0].password)
        })  
     },[])

    function updateSettings(){
        Axios.put(`http://localhost:3002/api/update/${id}/${localidadedeatuacao}/${deslocamentomax}/${password}`).then((response) => {
        })
        window.location.reload();
    }

    function deleteAccount(){
        let deletarAccount = window.confirm("Deseja deletar a conta?")
        if(deletarAccount){
            console.log('deletou a conta')
            setvalor(true)
            deleteAllStorage()
            Axios.delete(`http://localhost:3002/api/delete/${id}`).then((response) => {})
        }
    }

    if (valor) {
        return <Redirect to='/' />
       }

     
    return(
        <>
            <div className={styles.container}>
                <div className={styles.fundoimg}>
                    
                </div>
                <div className={styles.upload}>
                    <div className={styles.formulario}>
                        <h2>Localidade de Atuação: {dataCurrentUser.localidadedeatuacao}</h2>
                        <input type="text" onChange={(e)=>{setLocalidadedeatuacao(e.target.value)}}/>
                        <h2>Deslocamento Máximo: {dataCurrentUser.deslocamentomax}</h2>
                        <input type="text" onChange={(e)=>{setDeslocamentomax(e.target.value)}}/>
                        <h2>Senha: {dataCurrentUser.password}</h2>
                        <input type="text" onChange={(e)=>{setPassword(e.target.value)}}/>
                        <button className={styles.salvar} onClick={updateSettings}>Salvar</button>
                    </div>
                    <div>
                        <h1>username: {dataCurrentUser.username}</h1>
                        <h1>cpf: {dataCurrentUser.cpf}</h1> 
                  
                        <div>
                       
                        </div>
                        <div>
                            <button className={styles.deletar} onClick={deleteAccount}>Deletar Account</button>
                        </div>
                    </div>
                    
                </div>
             
            </div>
        </>
    )
}