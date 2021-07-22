import styles from '../styles/CardHomeComponent.module.css'

export default function CardHomeComponent(props) {

    return (
        <div className={styles.container}>
            <div className={styles.imgNoticia}>
                <img src="/medicoicon.png" />
            </div>
            <div>
                <h2>{props.title}</h2>
            </div>
        </div>
    )
}

export function CardHome2(props) {

    return (
        <div className={styles.container}>
            <div className={styles.noticia1}>
            </div>
            <div className={styles.text}>
                <h2>{props.title}</h2>
            </div>
        </div>
    )
}

export function CardHome3(props) {

    return (
        <div className={styles.container}>
            <div className={styles.noticia2}>
            </div>
            <div className={styles.text}>
                <h2>{props.title}</h2>
            </div>
        </div>
    )
}

export function CardHome4(props) {

    return (
        <div className={styles.container}>
            <div className={styles.noticia3}>
            </div>
            <div className={styles.text}>
                <h2>{props.title}</h2>
            </div>
        </div>
    )
}


