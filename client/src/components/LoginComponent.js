import { useState } from 'react'
import Axios from 'axios';
import styles from '../styles/Login.module.css'
import { saveToken, saveCurrentUser, saveCurrentEmail } from '../Request/tokenService';
import { Redirect } from 'react-router-dom'


export default function LoginComponent() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [valor, setvalor] = useState(false)

  function checkLogin() {
    Axios.post('http://localhost:3002/api/login', {
      userEmail: email,
      userPassword: password,
    }).then((response) => {

      if (response.data.message) {
        alert('Usuário e/ou senha inválidos')
        //Não encontrado
        // console.log('email: ' + email + '  Senha: ' + password)
      } else {
        //Usuário encontrado 
        //auth.setLogin(true)
        saveCurrentEmail(email)
        saveToken(true)
        setvalor(true)
      }
    })
  }



  if (valor) {
    return <Redirect to='/dashboard' />
  }

  return (
    <div className={styles.container}>

      <div className={styles.image}>



        <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
          <div class="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src="/imghospital.png" class="d-block w-100" alt="..." />
            </div>
            <div class="carousel-item">
              <img src="/imgcovid.png" class="d-block w-100" alt="..." />
            </div>
            <div class="carousel-item">
              <img src="/imgreuniao.png" class="d-block w-100" alt="..." />
            </div>
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>


      </div>
















      <div className={styles.login}>
        <div className={styles.logo}></div>
        <h2>Bem vindo! </h2>
        <h3>Conectando a Saúde para melhorar a Vida das pessoas.</h3>
        <h1>Login</h1>
        <div>
          <input placeholder="Email" type="email" onChange={(e) => { setEmail(e.target.value) }} />
        </div>
        <div>
          <input placeholder="Password" type="password" onChange={(e) => { setPassword(e.target.value) }} />
        </div>
        <a href="/ForgotPassword"><div>Esqueceu a senha?</div></a>

        <div>
          <button className={styles.loginbutton} onClick={checkLogin}>Login</button>
        </div>


        <h3 className={styles.text}>
          Faça parte dessa rede de profissionais para que
          juntos possamos melhorar o cuidado, satisfação e
          qualidade de vida de quem mais precisa.
          Através do sistema Salvus podemos direcionar 
          profissionais em diferentes localidades
          do país, de forma rápida e segura.
        </h3>
        <div >
          <a href="/register1"><button>Register</button></a>
        </div>

      </div>








    </div>
  )
}