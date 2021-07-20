import FooterComponent from '../components/FooterComponent';
import Register1Component from '../components/Register1Component';
import { Redirect } from 'react-router-dom'

export default function Register1(){
    const token = window.localStorage.getItem('token')
  
    return(

        <div>
            
        { token ? 
            (
                <Redirect to='/dashboard' />
            ) : (
            <>
                <Register1Component />
                <FooterComponent />
            </>
            
            )}
        </div>
    )
}