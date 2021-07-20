import Register2Component from '../components/Register2Component';
import FooterComponent from '../components/FooterComponent';
import { Redirect } from 'react-router-dom'

export default function Register2(){
    const token = window.localStorage.getItem('token')
    
    return(
        <div>   
            { token ? 
                (
                    <Redirect to='/dashboard' />
                ) : (
                <>
                    <Register2Component />
                    <FooterComponent />
                </>
                
                )}
        </div>
    )
}