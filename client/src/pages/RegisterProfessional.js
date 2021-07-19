import { useState } from 'react'
import styles from '../styles/Home.module.css'
import Axios from 'axios';

export default function Register() {
  
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

  console.log(date)
  // APAGAR ESSE AQUIVO// APAGAR ESSE AQUIVO
  // APAGAR ESSE AQUIVO
  // APAGAR ESSE AQUIVO
  // APAGAR ESSE AQUIVO
  // APAGAR ESSE AQUIVO// APAGAR ESSE AQUIVO

  // APAGAR ESSE AQUIVO
  // APAGAR ESSE AQUIVO

  // APAGAR ESSE AQUIVO

  // APAGAR ESSE AQUIVO
  // APAGAR ESSE AQUIVO

  function cadastrarProfissional(){
    console.log("testando")
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
    <div className={styles.container}>

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

      <a href="/"><button onClick={cadastrarProfissional}>Cadastrar</button></a>
    </div>
  )
}
