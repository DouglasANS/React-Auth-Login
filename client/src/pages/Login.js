import { useContext } from 'react'
import LoginComponent from '../components/LoginComponent';
import FooterComponent from '../components/FooterComponent';
import { AuthContext } from '../context/AuthContext';
import Pagina2 from './page2';

export default function Login() {
  const auth = useContext(AuthContext)
  
  return (
    <div>
      
       { auth.Login ? 
            (
              <Pagina2  />
            ) : (
              <>
                <LoginComponent />
                <FooterComponent />
              </>
           
            )}
    </div>
   
  )
}
