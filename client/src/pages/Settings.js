import SettingsComponent from '../components/SettingsComponent';
import FooterComponent from '../components/FooterComponent';
import HeaderComponent from '../components/HeaderComponent';
import { Redirect } from 'react-router-dom'

export default function Settings(){
    const token = window.localStorage.getItem('token')

    return(
    <div>   
         { token ? 
             (
            <> 
                <HeaderComponent />
                <SettingsComponent />
                <FooterComponent />
            </>  
             ) : (
            <>
                <Redirect to='/' />
            </>
             
             )}
     </div>
    )
}