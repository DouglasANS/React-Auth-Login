import Axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import styles from '../styles/SettingComponent.module.css'
import { Redirect } from 'react-router-dom';
import { deleteAllStorage } from '../Request/tokenService';
import { AuthContext } from '../context/AuthContext';

export default function SettingsComponent() {
    const [valor, setvalor] = useState(false)
    const [dataCurrentUser, setDatacurrentUser] = useState([])
    const [localidadedeatuacao, setLocalidadedeatuacao] = useState('')
    const [deslocamentomax, setDeslocamentomax] = useState('')
    const [password, setPassword] = useState('')
    const id = dataCurrentUser.id

    const { currentUserData } = useContext(AuthContext)

    useEffect(() => {
        const token = window.localStorage.getItem('currentEmail')
        Axios.get(`http://localhost:3002/api/SelectUserLogin/${token}`).then((response) => {
            setDatacurrentUser(response.data[0])
            setLocalidadedeatuacao(response.data[0].localidadedeatuacao)
            setDeslocamentomax(response.data[0].deslocamentomax)
            setPassword(response.data[0].password)
            currentUserData()
        })
    }, [])

    function updateSettings() {
        Axios.put(`http://localhost:3002/api/update/${id}/${localidadedeatuacao}/${deslocamentomax}/${password}`).then((response) => {
        })
        window.location.reload();
    }

    function deleteAccount() {
        let deletarAccount = window.confirm("Deseja deletar a conta?")
        if (deletarAccount) {
            setvalor(true)
            deleteAllStorage()
            Axios.delete(`http://localhost:3002/api/delete/${id}`).then((response) => { })
        }
    }

    if (valor) {
        return <Redirect to='/' />
    }

    return (
        <>
            <div className={styles.container}>
                <div className={styles.fundoimg}>
                </div>
                <div className={styles.upload}>
                    <div className={styles.formularioUpload}>
                        <h1>Atualize seus dados </h1>
                        <h2>Localidade de Atuação: {dataCurrentUser.localidadedeatuacao}</h2>
                        <input type="text" onChange={(e) => { setLocalidadedeatuacao(e.target.value) }} />
                        <h2>Deslocamento Máximo: {dataCurrentUser.deslocamentomax}</h2>
                        <input type="text" onChange={(e) => { setDeslocamentomax(e.target.value) }} />
                        <h2>Senha: {dataCurrentUser.password}</h2>
                        <input type="text" onChange={(e) => { setPassword(e.target.value) }} />
                        <div className={styles.buttonAtualizar}>
                            <button onClick={updateSettings}>Atualizar</button>
                        </div>
                    </div>
                    <div className={styles.formularioDelete}>
                        <div>
                            <h1>Nome: {dataCurrentUser.username}</h1>
                            <div className={styles.usericon}>
                                <img src='/usericon.png' />
                            </div>
                            <h2>CPF: {dataCurrentUser.cpf}</h2>
                        </div>
                        <div className={styles.buttonDeletar} >
                            <button onClick={deleteAccount}>Deletar Conta</button>
                        </div>
                        <div>
                            <h3>Caso aperte em "Deletar conta", você aceita que perdera todos os dados, assim como o vínculo com a salvus.</h3>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}