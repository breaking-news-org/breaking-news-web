import './App.css';
import 'materialize-css'
import { BrowserRouter } from 'react-router-dom';
import {useRoutes} from './routes'
// import { useAuth } from './hooks/auth.hook';
// import { AuthContext } from './context/AuthContext';

function App() {
  // const {token, login, logout, userId} = useAuth()
  // const isAuthenticated = !!token
  const routes = useRoutes(false)
  return (
    // <AuthContext.Provider value={{
    //   token, login, logout, userId, isAuthenticated
    // }}>
    <BrowserRouter>
      <div className='container'>
        {routes}
      </div>
    </BrowserRouter>
    // </AuthContext.Provider>
  );
}

export default App;
