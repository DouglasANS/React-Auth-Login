import React, { useContext, useState } from 'react'
import { Redirect } from 'react-router-dom';
import { RegisterContext } from '../context/RegisterContext'
import styles from '../styles/Register1Component.module.css'

const { isEmpty } = require('lodash');

export default function Register1Component() {

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
        setSexo, } = useContext(RegisterContext)

    function nextRegister1() {
        if (isEmpty(username) || isEmpty(date) ||
            isEmpty(email) || isEmpty(cpf) ||
            isEmpty(telefone) || isEmpty(password) ||
            isEmpty(sexo)) {
            console.log("algum ta vazio")
            alert('Preencha os campos em branco')
        } else {
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



    return (
        <div className={styles.container}>
            <div className={styles.caixa}>
                <div className={styles.logo}>

                </div>
                <label>Nome: </label>
                <input type="text" onChange={(e) => { setUsername(e.target.value) }} />

                <label>Data de Nascimento: </label>
                <input type="date" onChange={(e) => { setDate(e.target.value) }} />

                <label>E-mail:  </label>
                <input type="email" onChange={(e) => { setEmail(e.target.value) }} />

                <label>CPF:</label>
                <input type="text" onChange={(e) => { setCpf(e.target.value) }} />

                <label>Telefone:</label>
                <input type="text" onChange={(e) => { setTelefone(e.target.value) }} />

                <label>Senha:  </label>
                <input type="password" onChange={(e) => { setPassword(e.target.value) }} />

                <label>Sexo: </label>
                <select onChange={(e) => { setSexo(e.target.value) }}>
                    <option value="masculino">Masculino</option>
                    <option value="feminino">Feminino</option>
                </select>
                <div className={styles.buttonProximo}>
                    <button onClick={nextRegister1}>Próximo</button>
                </div>
            </div>
        </div>
    )
}