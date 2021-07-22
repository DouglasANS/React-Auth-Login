import FooterComponent from '../components/FooterComponent';
import ForgotPassword2Component from '../components/ForgotPassword2Component';
import { Redirect } from 'react-router-dom'

export default function ForgotPassword2() {

  const token = window.localStorage.getItem('token')

  return (
    <div>
      {token ?
        (
          <Redirect to='/home' />
        ) : 
        (
          <>
            <ForgotPassword2Component />
            <FooterComponent />
          </>

        )}
    </div>
  )
}
