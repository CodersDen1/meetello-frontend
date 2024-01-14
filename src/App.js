
import './App.css';
import { BrowserRouter , Switch , Route, Router, Routes , Redirect, Navigate } from 'react-router-dom';
import Home from './pages/Home/Home';
import Navigation from './components/shared/Navigation/Navigation';

import  GuestRoutes  from './utils/routes/GuestRoutes';
import Authenticate from './pages/authenticate/Authenticate';
import SemiProtectRoutes from './utils/routes/SemiProtectRoutes';
import Activate from './pages/activate/Activate' 
import ProtectedRoutes from './utils/routes/ProtectedRoutes';
import Rooms from './pages/Rooms/Rooms';



function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
       
        <Route element={<GuestRoutes />} >
            <Route element={< Authenticate />} path='/authenticate' exact/>
            <Route path='/' exact element={<Home />} />
        </Route>
        <Route element={<SemiProtectRoutes/>}>
          <Route element={<Activate />} path='/activated'  />
        </Route>

        <Route element = {<ProtectedRoutes />}>
          <Route element={<Rooms/>} path='/rooms' />
        </Route>

        </Routes>
    </BrowserRouter>
  );
}



export default App;
