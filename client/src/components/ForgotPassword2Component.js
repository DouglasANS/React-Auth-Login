import  styles  from '../styles/Register1Component.module.css'
import Axios from 'axios';
import { useState } from 'react'

export default function ForgotPassword2Component(){
    
   
    return(
        <div className={styles.container}>
              <div className={styles.caixa}>
                
                <div>
                    <label>Nova senha: </label>
                    <input type="text" onChange={(e)=>{}}/>
                </div>
                <div>
                    <label>Nova senha: </label>
                    <input type="text" onChange={(e)=>{}}/>
                </div>

            <div className={styles.Mudarsenha}>
                <button >Finalizar</button>
            </div>
            </div>
        </div>
    )
}