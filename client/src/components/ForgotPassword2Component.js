import  styles  from '../styles/Register1Component.module.css'
import Axios from 'axios';
import { useState } from 'react'

import { Redirect } from 'react-router-dom'
const { isEmpty } = require('lodash');

export default function ForgotPassword2Component(){
    const [password1, setPassword1] = useState('')
    const [senha2, setSenha2] = useState('')
    const [codVerification, setcodVerification] = useState('')
    
    const [proximo, setproximo] = useState(false)
    const Email = window.localStorage.getItem('changeEmail')


    function RequisicaoMudarSenha(){
        Axios.put (`http://localhost:3002/api/Mudarsenha/${Email}/${codVerification}/${password1}`).then((response) => {
            console.log(response)
            if(response.data.message){
               // alert('Codigo de verificação errado')
               setproximo(true)
            }else{
                setproximo(true)
            }
        })
    }

    if(proximo){
        console.log("asdasda")
        return <Redirect to='/' />
    }


    function Mudarsenha(){
        if((isEmpty(password1)) || (isEmpty(senha2)) ){
            alert('Um ou mais campos de senha estão vazio')
        }else if(password1 !== senha2){
            alert('Digitar senhas com os mesmos caracteres')
        }else if(isEmpty(codVerification)){
            alert('Código de varificação está vazio')
        }else{
            RequisicaoMudarSenha()
        }
    }
   
    return(
        <div className={styles.container}>
              <div className={styles.caixa}>
                <h1>Digite o código que foi enviado ao Email {Email} junto com a escolha da nova senha</h1>
                <div>
                    <label>Código de Verificação: </label>
                    <input type="text" onChange={(e)=>{setcodVerification(e.target.value)}}/>
                </div>
                <div>
                    <label>Nova senha: </label>
                    <input type="password" onChange={(e)=>{setPassword1(e.target.value)}}/>
                </div>
                <div>
                    <label>Nova senha: </label>
                    <input type="password" onChange={(e)=>{setSenha2(e.target.value)}}/>
                </div>

            <div className={styles.Mudarsenha}>
                <button onClick={Mudarsenha}>Finalizar</button>
            </div>
            </div>
        </div>
    )
}