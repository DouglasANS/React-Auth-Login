
import  styles  from '../styles/Register1Component.module.css'

export default function ForgotPasswordComponent(){

   
    return(
        <div className={styles.container}>
              <div className={styles.caixa}>
                  <h1>Digite o email para a nova senha</h1>
                <div>
                    <label>Email: </label>
                    <input type="text" onChange={(e)=>{}}/>
                </div>
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