import FooterComponent from "../components/FooterComponent";
import HeaderComponent from "../components/HeaderComponent";
import UploadComponent from "../components/uploadComponent";
import { Redirect } from 'react-router-dom'

export default function Upload() {

    const token = window.localStorage.getItem('token')

    return (
       
         <div>
         {token ?
             (
             <>
                <HeaderComponent />
                <UploadComponent />
                <FooterComponent />
             </>
             ) :
             (
                 <Redirect to='/' />
             )}
     </div>
    )
}