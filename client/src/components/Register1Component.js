import React, { useContext, useState } from 'react'
import { Redirect } from 'react-router-dom';
import { RegisterContext } from '../context/RegisterContext'
import styles from '../styles/Register1Component.module.css'

const { isEmpty } = require('lodash');

export default function Register1Component(){

  const [valor, setvalor] = useState(false)

    const { 
        username, 
        date,
        email, 
        cpf, 
        telefone,
        password, 
        sexo,
        setUsername,
        setDate,
        setEmail,
        setCpf,
        setTelefone,
        setPassword,
        setSexo,} = useContext(RegisterContext)

    function nextRegister1(){
        if( isEmpty(username) || isEmpty(date)||
            isEmpty(email) || isEmpty(cpf)||
            isEmpty(telefone) || isEmpty(password)||
            isEmpty(sexo)){
            console.log("algum ta vazio")
            alert('Preencha os campos em branco')
            }else{
                console.log(username)
                console.log(date)
                console.log(email)
                console.log(cpf)
                console.log(telefone)
                console.log(password)
                console.log(sexo)
                console.log("todos preenchidos")
                setvalor(true)
            }
    }

    if (valor) {
        return <Redirect to='/register2' />
       }
    


    return(
        <div className={styles.container}>
            <div className={styles.caixa}>
                <div>
                    <label>Nome: <input type="text"  onChange={(e)=>{setUsername(e.target.value)}}/></label>
                </div>
                <div>
                    <label>Data: <input type="date" onChange={(e)=>{setDate(e.target.value)}}/></label>
                </div>
                <div>
                    <label>E-mail:  <input type="email"  onChange={(e)=>{setEmail(e.target.value)}}/></label>
                </div>
                <div>
                    <label>CPF: <input type="text" onChange={(e)=>{setCpf(e.target.value)}}/></label>
                </div>
                <div>
                    <label>Telefone: <input type="text"  onChange={(e)=>{setTelefone(e.target.value)}}/></label>
                </div>
                <div>
                    <label>password:  <input type="password" onChange={(e)=>{setPassword(e.target.value)}}/></label>
                </div>
                <div>
                <label>Sexo: </label>
                    <select onChange={(e)=>{setSexo(e.target.value)}}>
                    <option value="masculino">Masculino</option>
                    <option value="feminino">Feminino</option>
                    </select>
                </div>
                <button onClick={nextRegister1}>Próximo</button>
            </div>
        </div>
    )
}