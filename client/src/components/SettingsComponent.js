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
                <div >
                    <h1>username: {dataCurrentUser.username}</h1>
                    <h1>cpf: {dataCurrentUser.cpf}</h1>
                    
                    <h1>Localidade de atuação: {dataCurrentUser.localidadedeatuacao}</h1>
                    <input type="text" onChange={(e)=>{setLocalidadedeatuacao(e.target.value)}}/>
                    <h1>deslocamento máximo: {dataCurrentUser.deslocamentomax}</h1>
                    <input type="text" onChange={(e)=>{setDeslocamentomax(e.target.value)}}/>
                    <h1>Password: {dataCurrentUser.password}</h1>
                    <input type="text" onChange={(e)=>{setPassword(e.target.value)}}/>
                    <div>
                    <button onClick={updateSettings}>Salvar</button>
                    </div>
                    <div>
                    <button onClick={deleteAccount}>Deletar Account</button>
                    </div>
                </div>
             
            </div>
        </>
    )
}