import styles from '../styles/CardDashboardComponent.module.css'

const asd= require('../')

export default function CardDashboardComponent(props){
  
    return(  
        <div className={styles.container}>
        <div className={styles.five}>
            <h1>{props.title}</h1>
            <h1>{props.number}</h1>
        </div>
        <div className={styles.five}>
            <img src="/todos.png" /> 
        </div>
        
       
    </div>
    )
}

export function Card2(props){
  
    return(  
        <div className={styles.container}>
            <div className={styles.five}>
                <h1>{props.title}</h1>
                <h1>{props.number}</h1>
            </div>
            <div className={styles.five}>
                <img src="/medicoicon.png" /> 
            </div>
            
           
        </div>
    )
}

export function Card3(props){
  
    return(  
        <div className={styles.container}>
            <div className={styles.five}>
                <h1>{props.title}</h1>
                <h1>{props.number}</h1>
            </div>
            <div className={styles.five}>
                <img src="/enfermeiroicon.png" /> 
            </div>
            
           
        </div>
    )
}

export function Card4(props){
  
    return(  
        <div className={styles.container}>
            <div className={styles.five}>
                <h1>{props.title}</h1>
                <h1>{props.number}</h1>
            </div>
            <div className={styles.five}>
                <img src="/tecenfermagemicon.png" /> 
            </div>
            
           
        </div>
    )
}

export function Card5(props){
  
    return(  
        <div className={styles.container}>
            <div className={styles.five}>
                <h1>{props.title}</h1>
                <h1>{props.number}</h1>
            </div>
            <div className={styles.five}>
                <img src="/fonoicon.png" /> 
            </div>
            
           
        </div>
    )
}

export function Card6(props){
  
    return(  
        <div className={styles.container}>
            <div className={styles.five}>
                <h1>{props.title}</h1>
                <h1>{props.number}</h1>
            </div>
            <div className={styles.five}>
                <img src="/nutricionistaicon.png" /> 
            </div>
            
           
        </div>
    )
}

export function Card7(props){
  
    return(  
        <div className={styles.container}>
            <div className={styles.five}>
                <h1>{props.title}</h1>
                <h1>{props.number}</h1>
            </div>
            <div className={styles.five}>
                <img src="/fisioterapiaicon.png" /> 
            </div>
            
           
        </div>
    )
}

