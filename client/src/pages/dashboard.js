import DashBoardComponent from '../components/DashboardComponent'
import { Redirect } from "react-router-dom";
import HeaderComponent from '../components/HeaderComponent';
import FooterComponent from '../components/FooterComponent';

export default function DashBoard() {

  const token = window.localStorage.getItem('token')

  return (
    <div>
      {token ?
        (
          <div>
            <HeaderComponent />
            <DashBoardComponent />
            <FooterComponent />
          </div>
        ) :
        (
          <Redirect to='/' />
        )}
    </div>
  )
}