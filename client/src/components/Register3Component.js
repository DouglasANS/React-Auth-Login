import React, { useContext, useState } from 'react'
import { RegisterContext } from '../context/RegisterContext'
import { Redirect } from 'react-router-dom';
import styles from '../styles/Register3Component.module.css'

const { isEmpty } = require('lodash');

export default function Register3Component() {

    const [valor, setvalor] = useState(false)

    const {
        profissao,
        numregistro,
        especialidade,
        localidadedeatuacao,
        deslocamentomax,
        setProfissao,
        setNumRegistro,
        setEspecialidade,
        setLocalidadedeatuacao,
        setDeslocamentomax,
        cadastrarProfissional } = useContext(RegisterContext)

    function nextRegister3() {
        if (isEmpty(profissao) || isEmpty(numregistro) || isEmpty(especialidade)
            || isEmpty(localidadedeatuacao) || isEmpty(deslocamentomax)) {
            alert('Preencha os campos em branco')
        } else {
            setvalor(true)
            cadastrarProfissional()
        }
    }

    if (valor) {
        return <Redirect to='/' />
    }

    return (
        <div className={styles.container}>
            <div className={styles.caixa}>
                <div className={styles.logo}>
                </div>
                <label>Profissão: </label>
                <select onChange={(e) => { setProfissao(e.target.value) }}>
                    <option value="medico">Médico</option>
                    <option value="enfermeiro">Enfermeiro</option>
                    <option value="tecnicoEnfermagem">Técnico de Enfermagem</option>
                    <option value="fonoaudiologia">Fonoaudiologia</option>
                    <option value="nutricionista">Nutricionista</option>
                    <option value="fisioterapeuta">Fisioterapia</option>
                </select>

                <label>Número de Registro: </label>
                <input type="text" onChange={(e) => { setNumRegistro(e.target.value) }} />

                <label>Especialidade: </label>
                <input type="text" onChange={(e) => { setEspecialidade(e.target.value) }} />

                <label>Localidade de Atuação: </label>
                <input type="text" onChange={(e) => { setLocalidadedeatuacao(e.target.value) }} />

                <label>Deslocamento de serviço máximo: </label>
                <input type="text" onChange={(e) => { setDeslocamentomax(e.target.value) }} />

                <div className={styles.buttonProximo}>
                    <button onClick={nextRegister3}>Finalizar</button>
                </div>
            </div>
        </div>
    )
}