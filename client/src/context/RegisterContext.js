import React, { createContext, useState } from "react"
import Axios from 'axios';
export const RegisterContext = createContext();

export default function RegisterProvider({ children }){
    
    const [username, setUsername] = useState('')
    const [date, setDate] = useState('')
    const [email, setEmail] = useState('')
    const [cpf, setCpf] = useState('')
    const [telefone, setTelefone] = useState('')
    const [password, setPassword] = useState('')
    const [sexo, setSexo] = useState('Masculino')
    const [cep, setCep] = useState('')
    const [logradouro, setLogradouro] = useState('')
    const [cidade, setCidade] = useState('')
    const [bairro, setBairro] = useState('')
    const [numcasa, setNumCasa] = useState('')
    const [profissao, setProfissao] = useState('medico')
    const [numregistro, setNumRegistro] = useState('')

    function cadastrarProfissional(){
        Axios.post ('http://localhost:3002/api/insert',{
          userUsername: username,
          userDate: date.replace('-', '').replace('-', ''),
          userEmail: email,
          userCpf: cpf,
          userTelefone: telefone,
          userPassword: password,
          userSexo: sexo,
          userCep: cep,
          userLogradouro: logradouro,
          userCidade: cidade,
          userBairro: bairro,
          userNumCasa: numcasa,
          userProfissao: profissao,
          userNumRegistro: numregistro,
        })
      }
  

    return (
    <div>
        <RegisterContext.Provider value={{
            username, 
            date,
            email, 
            cpf, 
            telefone,
            password, 
            sexo,
            cep,
            logradouro,
            cidade,
            bairro,
            numcasa,
            profissao,
            numregistro,
            setUsername,
            setDate,
            setEmail,
            setCpf,
            setTelefone,
            setPassword,
            setSexo,
            setCep,
            setLogradouro,
            setCidade,
            setBairro,
            setNumCasa,
            setProfissao,
            setNumRegistro,
            cadastrarProfissional
            }}>
            {children}
        </RegisterContext.Provider>
    </div>
       
    )
}

