import './App.css';
import 'materialize-css'
import { BrowserRouter } from 'react-router-dom';
import {useRoutes} from './routes'
import { useAuth } from './hooks/auth.hook';
import { AuthContext } from './context/AuthContext';

function App() {
  // const {refreshToken, login, logout, accessToken} = useAuth()
  const auth = (0 , useAuth)();
  const {refreshToken, login, logout, accessToken} = auth ? auth : {};
    
  const isAuthenticated = !!refreshToken
  // const isAuthenticated = false
  const routes = useRoutes(isAuthenticated)

  return (
    <AuthContext.Provider value={{
      refreshToken, login, logout, accessToken, isAuthenticated
    }}>
    <BrowserRouter>
      <div className='container'>
        {routes}
      </div>
    </BrowserRouter>
    </AuthContext.Provider>
  );
}

export default App;
