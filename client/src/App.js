import './App.css';
import {Switch, Route} from 'react-router-dom'
import AuthProvider from './context/AuthContext';
import RegisterProvider from './context/RegisterContext';
import Login from './pages/Login';
import DashBoard from './pages/dashboard';
import Register1 from './pages/Register1';
import Register2 from './pages/Register2';
import Register3 from './pages/Register3';
import ForgotPassword from './pages/ForgotPassword'
import ForgotPassword2 from './pages/ForgotPassword2'
import Settings from './pages/Settings'

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
            <Route path='/register1' exact component={Register1}/>
            <Route path='/register2' exact component={Register2}/>
            <Route path='/register3' exact component={Register3}/>
            <Route path='/dashboard' component={DashBoard}/>
            <Route path='/ForgotPassword' component={ForgotPassword}/>
            <Route path='/ForgotPassword2' component={ForgotPassword2}/>
            <Route path='/settings' component={Settings}/>
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