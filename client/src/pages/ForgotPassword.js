import FooterComponent from '../components/FooterComponent';
import ForgotPasswordComponent from '../components/ForgotPasswordComponent';
import { Redirect } from 'react-router-dom'

export default function ForgotPassword() {
  
  const token = window.localStorage.getItem('token')

  return (
    <div>
      {token ?
        (
          <Redirect to='/dashboard' />
        ) :
        (
          <>
            <ForgotPasswordComponent />
            <FooterComponent />
          </>
        )}
    </div>
  )
}
