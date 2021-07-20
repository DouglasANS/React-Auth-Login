import React, { useContext, useState } from 'react'
import { RegisterContext } from '../context/RegisterContext'
import { Redirect } from 'react-router-dom';
import styles from '../styles/Register3Component.module.css'

const { isEmpty } = require('lodash');

export default function Register3Component(){

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
        cadastrarProfissional} = useContext(RegisterContext)

    function nextRegister3(){
        if( isEmpty(profissao) || isEmpty(numregistro) || isEmpty(especialidade)
            || isEmpty(localidadedeatuacao)|| isEmpty(deslocamentomax)){
            console.log("algum ta vazio")
            alert('Preencha os campos em branco')
            }else{
                console.log(profissao)
                console.log(numregistro)
                console.log("todos preenchidos")
                setvalor(true)
                cadastrarProfissional()
            }
    }

    if (valor) {
        return <Redirect to='/' />
       }


    return(
        <div className={styles.container}>
              <div className={styles.caixa}>
            <div>
                <label>Profissão: </label>
                <select onChange={(e)=>{setProfissao(e.target.value)}}>
                <option value="medico">Médico</option>
                <option value="enfermeiro">Enfermeiro</option>
                <option value="tecnicoEnfermagem">Técnico de Enfermagem</option>
                <option value="fonoaudiologia">Fonoaudiologia</option>
                <option value="nutricionista">Nutricionista</option>
                <option value="fisioterapeuta">Fisioterapia</option>
                </select>
            </div>
            <div>
                <label>Numero de Registro: </label>
                <input type="text" onChange={(e)=>{setNumRegistro(e.target.value)}}/>
            </div>
            <div>
                <label>Especialidade: </label>
                <input type="text" onChange={(e)=>{setEspecialidade(e.target.value)}}/>
            </div>
            <div>
                <label>Localidade de Atuacao: </label>
                <input type="text" onChange={(e)=>{setLocalidadedeatuacao(e.target.value)}}/>
            </div>
            <div>
                <label>Deslocamento de serviço máximo: </label>
                <input type="text" onChange={(e)=>{setDeslocamentomax(e.target.value)}}/>
            </div>

            <div className={styles.buttonProximo}>
                <button onClick={nextRegister3}>Finalizar</button>
            </div>
            </div>
        </div>
    )
}