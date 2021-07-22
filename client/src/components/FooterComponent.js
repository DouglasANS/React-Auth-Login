import styles from '../styles/Footer.module.css'

export default function FooterComponent() {

    return (
        <div className={styles.container}>
            <div className={styles.div1}>
                <h1>Salvus.</h1>
                <h3>Saúde em sua casa</h3>
            </div>
            <div className={styles.tamanho}>
                <h2>Sobre</h2>
                <h3>Transformamos digitalmente a gestão da operação e assistência
                    do Atendimento Domiciliar da indicação a alta do paciente.</h3>
            </div>
            <div className={styles.tamanho}>
                <h2>Contato</h2>
                <h3>R. Marquês de Valença
                    Boa Viagem, Recife-PE, 51021-500
                    contato@salvus.me
                </h3>
            </div>
            <div className={styles.tamanho}>
                <h2>Redes sociais</h2>
                <div className="social">
                    <a href="https://www.facebook.com/salvus.me/"><button className={styles.face}></button></a>
                    <a href="https://www.instagram.com/salvus.me/?hl=pt-br"><button className={styles.insta}></button></a>
                    <a href="https://www.linkedin.com/company/salvus-me/"><button className={styles.linkedin}></button></a>
                </div>
            </div>
            <div className={styles.logosalvus}>
            </div>
        </div>
    )
}