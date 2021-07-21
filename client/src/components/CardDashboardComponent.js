import styles from '../styles/CardDashboardComponent.module.css'

export default function CardDashboardComponent(props){
  
    return(  
        <div className={styles.container}>
            <h1>{props.title}</h1>
            <h1>{props.number}</h1>
        </div>
    )
}

export function Card2(props){
  
    return(  
        <div className={styles.container}>
            <h1>{props.title}</h1>
            <h1>{props.number}</h1>
        </div>
    )
}

export function Card3(props){
  
    return(  
        <div className={styles.container}>
            <h1>{props.title}</h1>
            <h1>{props.number}</h1>
            
        </div>
    )
}