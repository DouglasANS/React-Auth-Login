import styles from '../styles/Register1Component.module.css'
import Axios from 'axios';
import { useState } from 'react'
import { Redirect } from 'react-router-dom'
import { changeEmail } from '../Request/tokenService';

export default function ForgotPasswordComponent() {
    const [changeEmailData, setChangeEmail] = useState('')
    const [proximo, setproximo] = useState(false)

    function sendEmailto() {
        const randomNumber = Math.floor(Math.random() * 100000 + 1)
        Axios.post(`http://localhost:3002/api/sendEmailto/${changeEmailData}/${randomNumber}`).then((response) => {
            console.log(response)
            if (response.data.message) {
                alert('Email Inexistente')
            } else {
                changeEmail(changeEmailData)
                setproximo(true)
            }
        })
    }

    if (proximo) {
        return <Redirect to='/ForgotPassword2' />
    }

    return (
        <div className={styles.container}>
            <div className={styles.caixa}>
                <h1>Digite o email para a nova senha</h1>
                <div>
                    <label>Email: </label>
                    <input type="text" onChange={(e) => { setChangeEmail(e.target.value) }} />
                </div>
                <div className={styles.Mudarsenha}>
                    <button onClick={sendEmailto} >Enviar Email</button>
                </div>
            </div>
        </div>
    )
}