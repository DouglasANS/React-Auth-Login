import './App.css';
import {Switch, Route} from 'react-router-dom'
import AuthProvider from './context/AuthContext';
import RegisterProvider from './context/RegisterContext';
import RegisterAdm from './pages/RegisterAdm';
import Pagina2 from './pages/page2';
import Login from './pages/Login';
import RegisterProfessional from './pages/RegisterProfessional';
import DashBoard from './pages/dashboard';
import Register1 from './pages/Register1';
import Register2 from './pages/Register2';
import Register3 from './pages/Register3';

function App() {
  return (
    <>
    <header>
    </header>
    <main>
      <AuthProvider>
        <RegisterProvider>
          <Switch>
            <Route path='/' exact component={Login}/>
            <Route path='/registerAdm' component={RegisterAdm}/>
            <Route path='/registerProfessional' component={RegisterProfessional}/>
            <Route path='/register1' exact component={Register1}/>
            <Route path='/register2' exact component={Register2}/>
            <Route path='/register3' exact component={Register3}/>
            <Route path='/pag2' component={Pagina2}/>
            <Route path='/dashboard' component={DashBoard}/>
          </Switch>
        </RegisterProvider>
      </AuthProvider>
    </main>
    </>
  );
}

export default App;
//<Link to='/registerAdm'>Adm register</Link>
//<Link to='/registerProfessional'>Professional register</Link>
//<Link to='/'>Home</Link>