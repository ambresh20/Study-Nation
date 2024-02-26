import './App.css';
import Navbar from './Component/Navbar';
import Footer from './Component/Footer';
import {Route, Routes} from 'react-router-dom' ;
import Home from './Pages/Home' ;
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import Dashboard from './Pages/Dashboard';
import { useState } from 'react';
import PrivateRoute from './Component/PrivateRoute';

function App() {
  
  const [isLoggedIn, setIsLoggedIn] = useState(false) ;

  return (
    <div className='w-full h-full flex flex-col bg-gray-900 '>
      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login  setIsLoggedIn={setIsLoggedIn}/>} />
        <Route path='/signup' element={<Signup setIsLoggedIn={setIsLoggedIn} />} />
        <Route path='/dashboard' element={
          <PrivateRoute isLoggedIn={isLoggedIn}>
            <Dashboard />
          </PrivateRoute> } />
      </Routes>

      {/* <Footer />  */}
    </div>
  );

}

export default App;
