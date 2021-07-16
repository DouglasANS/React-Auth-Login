import styles from '../styles/Footer.module.css'

export default function FooterComponent(){

    
    return(
        <div className={styles.container}>
            
        <div className="tamanhotamanho_1">
            <h1>Salvus.</h1>
            <h3>Criamos websites incríveis</h3>
        </div>
        <div className="tamanho">
            <h2>Sobre</h2>
            <h3>Transformamos digitalmente a gestão da operação e assistência<br/> 
                do Atendimento Domiciliar da indicação a alta do paciente.</h3>
        </div>
        <div className="tamanho">
            <h2>Contato</h2>
            <h3>R. Marquês de Valença<br/>
                Boa Viagem, Recife-PE, 51021-500<br/>
                contato@salvus.me<br/>
                </h3>
        </div>
        <div className="tamanho">
            <h2>Redes sociais</h2>
            <div className="social">
                <a href="face"><button className="face"></button></a>
                <a href="insta"><button className="insta"></button></a>
                <a href="twitter"><button className="twitter"></button></a>
            </div>
        </div>
        </div>
    )
}