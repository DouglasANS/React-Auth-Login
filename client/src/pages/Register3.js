import Register3Component from '../components/Register3Component';
import FooterComponent from '../components/FooterComponent';
import { Redirect } from 'react-router-dom'

export default function Register3() {
    
    const token = window.localStorage.getItem('token')

    return (
        <div>
            {token ?
                (
                    <Redirect to='/dashboard' />
                ) : 
                (
                    <>
                        <Register3Component />
                        <FooterComponent />
                    </>

                )}
        </div>
    )
}