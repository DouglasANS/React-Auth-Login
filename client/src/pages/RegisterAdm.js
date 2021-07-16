import React, { useContext, useState } from 'react'
import { AuthContext } from '../context/AuthContext'
import Axios from 'axios';

export default function Pagina1(){
    const auth = useContext(AuthContext)

    
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  

  function cadastrarAdm(){
    Axios.post ('http://localhost:3002/api/adm/insert',{
      userUsername: username,
      userEmail: email,
      userPassword: password,
    })
  }



    return(
        <div>
            <h1>Página 1</h1>
            <h1>{auth.login}</h1>
            <a href="/pag2"><button>ir para pag 2</button></a>

        <div>
            <label>user:  <input type="password" onChange={(e)=>{setUsername(e.target.value)}}/></label>
        </div>
        <div>
            <label>email:  <input type="password" onChange={(e)=>{setEmail(e.target.value)}}/></label>
        </div>
        <div>
            <label>password:  <input type="password" onChange={(e)=>{setPassword(e.target.value)}}/></label>
        </div>
                <button onClick={cadastrarAdm}>Cadastrar Adm</button>
        </div>
    )
}