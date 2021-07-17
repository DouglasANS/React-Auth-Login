import React, { useContext, useState } from 'react'
import { RegisterContext } from '../context/RegisterContext'
import { Redirect } from 'react-router-dom';
const { isEmpty } = require('lodash');

export default function Register3Component(){

    const [valor, setvalor] = useState(false)

    const { 
        profissao,
        numregistro,
        setProfissao,
        setNumRegistro,
        cadastrarProfissional} = useContext(RegisterContext)

    function nextRegister3(){
        if( isEmpty(profissao) || isEmpty(numregistro)){
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
        <div>
            <div>
                <label>Profissão: </label>
                <select onChange={(e)=>{setProfissao(e.target.value)}}>
                <option value="medico">Médico</option>
                <option value="enfermeiro">Enfermeiro</option>
                </select>
            </div>
            <div>
                <label>Numero de Registro: </label>
                <input type="text" onChange={(e)=>{setNumRegistro(e.target.value)}}/>
            </div>
            <button onClick={nextRegister3}>Próximo</button>
        </div>
    )
}