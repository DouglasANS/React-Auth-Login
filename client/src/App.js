import './App.css';
import {Switch, Route} from 'react-router-dom'
import AuthProvider from './context/AuthContext';
import RegisterAdm from './pages/RegisterAdm';
import Pagina2 from './pages/page2';
import Login from './pages/Login';
import RegisterProfessional from './pages/RegisterProfessional';
import DashBoard from './pages/dashboard';

function App() {
  return (
    <>
    <header>
      
    </header>
    <main>
      <AuthProvider>
        <Switch>
          <Route path='/' exact component={Login}/>
          <Route path='/registerAdm' component={RegisterAdm}/>
          <Route path='/registerProfessional' component={RegisterProfessional}/>
          <Route path='/pag2' component={Pagina2}/>
          <Route path='/dashboard' component={DashBoard}/>
        </Switch>
      </AuthProvider>
    </main>
    </>
  );
}

export default App;
//<Link to='/registerAdm'>Adm register</Link>
//<Link to='/registerProfessional'>Professional register</Link>
//<Link to='/'>Home</Link>