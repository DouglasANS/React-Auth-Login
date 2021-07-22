import HomeComponent from '../components/HomeComponent';
import FooterComponent from '../components/FooterComponent';
import { Redirect } from 'react-router-dom'
import HeaderComponent from '../components/HeaderComponent';

export default function Home() {

    const token = window.localStorage.getItem('token')

    return (
        <div>
            {token ?
                (
                <>
                    <HeaderComponent />
                    <HomeComponent />
                    <FooterComponent />
                </>
                ) :
                (
                    <Redirect to='/' />
                )}
        </div>
    )
}
