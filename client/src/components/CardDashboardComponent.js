import styles from '../styles/CardDashboardComponent.module.css'

export default function CardDashboardComponent(props) {

    return (
        <div className={styles.container}>
            <div className={styles.dados}>
                <h1>{props.title}</h1>
                <h2>{props.number}</h2>
            </div>
            <div>
                <img src="/todos.png" />
            </div>
        </div>
    )
}

export function Card2(props) {

    return (
        <div className={styles.container}>
            <div className={styles.dados}>
                <h1>{props.title}</h1>
                <h2>{props.number}</h2>
            </div>
            <div>
                <img src="/medicoicon.png" />
            </div>
        </div>
    )
}

export function Card3(props) {

    return (
        <div className={styles.container}>
            <div className={styles.dados}>
                <h1>{props.title}</h1>
                <h2>{props.number}</h2>
            </div>
            <div>
                <img src="/enfermeiroicon.png" />
            </div>
        </div>
    )
}

export function Card4(props) {

    return (
        <div className={styles.container}>
            <div className={styles.dados}>
                <h1>{props.title}</h1>
                <h2>{props.number}</h2>
            </div>
            <div>
                <img src="/tecenfermagemicon.png" />
            </div>
        </div>
    )
}

export function Card5(props) {

    return (
        <div className={styles.container}>
            <div className={styles.dados}>
                <h1>{props.title}</h1>
                <h2>{props.number}</h2>
            </div>
            <div>
                <img src="/fonoicon.png" />
            </div>
        </div>
    )
}

export function Card6(props) {

    return (
        <div className={styles.container}>
            <div className={styles.dados}>
                <h1>{props.title}</h1>
                <h2>{props.number}</h2>
            </div>
            <div>
                <img src="/nutricionistaicon.png" />
            </div>
        </div>
    )
}

export function Card7(props) {

    return (
        <div className={styles.container}>
            <div className={styles.dados}>
                <h1>{props.title}</h1>
                <h2>{props.number}</h2>
            </div>
            <div>
                <img src="/fisioterapiaicon.png" />
            </div>
        </div>
    )
}

