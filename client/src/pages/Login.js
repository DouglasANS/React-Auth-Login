import LoginComponent from '../components/LoginComponent';
import FooterComponent from '../components/FooterComponent';
import { Redirect } from 'react-router-dom'

export default function Login() {

  const token = window.localStorage.getItem('token')

  return (
    <div>
      {token ?
        (
          <Redirect to='/home' />
        ) :
        (
          <>
            <LoginComponent />
            <FooterComponent />
          </>
        )}
    </div>
  )
}
