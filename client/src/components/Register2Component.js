import React, { useContext, useState } from 'react'
import { RegisterContext } from '../context/RegisterContext'
import { Redirect } from 'react-router-dom';
import Axios from 'axios';
import styles from '../styles/Register2Component.module.css'

const { isEmpty } = require('lodash');

export default function Register2Component(){

    const [valor, setvalor] = useState(false)
    const [requestCep, setRequestCep] = useState('')

    const { 
        cep,
        logradouro,
        cidade,
        bairro,
        numcasa,
        setCep,
        setLogradouro,
        setCidade,
        setBairro,
        setNumCasa,} = useContext(RegisterContext)

    function nextRegister2(){
        if( isEmpty(cep) || isEmpty(logradouro)||
            isEmpty(cidade) || isEmpty(bairro)||
            isEmpty(numcasa)){
            console.log("algum ta vazio")
            alert('Preencha os campos em branco')
            }else{
                console.log(cep)
                console.log(logradouro)
                console.log(cidade)
                console.log(bairro)
                console.log(numcasa)
                console.log("todos preenchidos")
                setvalor(true)
            }
    }

    if (valor) {
        return <Redirect to='/register3' />
       }

    function RequestCepV(){
            Axios.get(`https://viacep.com.br/ws/${cep}/json/`).then((response) => {
                setRequestCep(response.data)
                console.log('kokode', requestCep)
            
                document.querySelector("[name='logradouro']").value = response.data.logradouro;
                document.querySelector("[name='cidade']").value = response.data.localidade;
                document.querySelector("[name='bairro']").value = response.data.bairro;

                setLogradouro(response.data.logradouro)
                setCidade(response.data.localidade)
                setBairro(response.data.bairro)
              }).catch(error => alert('O Cep é inválido', error))
        }

    return(
        <div className={styles.container}>
            <div className={styles.caixa}>
                <label>Cep: </label> 
                <input type="text" onChange={(e)=>{setCep(e.target.value)}}/>
                <button onClick={RequestCepV}>Consultar CEP</button>
            
                <label>Logradouro: </label>
                <input type="text" name="logradouro"  onChange={(e)=>{setLogradouro(e.target.value)}}/>
            
                <label>Cidade: </label>
                <input type="text" name="cidade"  onChange={(e)=>{setCidade(e.target.value)}}/>
           
                <label>Bairro: </label>
                <input type="text" name="bairro"  onChange={(e)=>{setBairro(e.target.value)}}/>
            
                <label>Número Casa: </label>
                <input type="text" onChange={(e)=>{setNumCasa(e.target.value)}}/>

                <div className={styles.buttonProximo}>
                       <button onClick={nextRegister2}>Próximo</button>
                </div>
            </div>
         
        </div>
    )
}