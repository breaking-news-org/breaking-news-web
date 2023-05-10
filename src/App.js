import './App.css';
import 'materialize-css'
import { BrowserRouter } from 'react-router-dom';
import {useRoutes} from './routes'
import { useAuth } from './hooks/auth.hook';
import { AuthContext } from './context/AuthContext';
import { Navbar } from './components/Navbar';
import { Loader } from './components/Loader';

function App() {
  const auth = useAuth()
  const {refreshToken, login, logout, accessToken, ready} = auth
  const isAuthenticated = !!refreshToken
  const routes = useRoutes(isAuthenticated)

  if (!ready) {
    return <Loader />
  }

  return (
    <AuthContext.Provider value={{
      refreshToken, login, logout, accessToken, isAuthenticated
    }}>
    <BrowserRouter>
      {isAuthenticated && <Navbar />}
      <div className='container'>
        {routes}
      </div>
    </BrowserRouter>
    </AuthContext.Provider>
  );
}

export default App;
