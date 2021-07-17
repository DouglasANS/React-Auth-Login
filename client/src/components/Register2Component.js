import React, { useContext, useState } from 'react'
import { RegisterContext } from '../context/RegisterContext'
import { Redirect } from 'react-router-dom';
const { isEmpty } = require('lodash');

export default function Register2Component(){

    const [valor, setvalor] = useState(false)

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


    return(
        <div>
            <div>
                <label>Cep: <input type="text" onChange={(e)=>{setCep(e.target.value)}}/></label> 
            </div>
            <div>
                <label>Logradouro: </label>
                <input type="text"  onChange={(e)=>{setLogradouro(e.target.value)}}/>
            </div>
            <div>
                <label>Cidade: </label>
                <input type="text" onChange={(e)=>{setCidade(e.target.value)}}/>
            </div>
            <div>
                <label>Bairro: </label>
                <input type="text"  onChange={(e)=>{setBairro(e.target.value)}}/>
            </div>
            <div>
                <label>Número Casa: </label>
                <input type="text" onChange={(e)=>{setNumCasa(e.target.value)}}/>
            </div>
            <button onClick={nextRegister2}>Próximo</button>
        </div>
    )
}