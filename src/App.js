import './App.css';
import {  Routes, Route, useNavigate } from 'react-router-dom';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Login from './pages/Login';
import Navbar from './components/Navbar';
import { useState } from 'react';

function App() {
  const [userIn, setUserIn] = useState(false);

  const navigate = useNavigate()

 const handleLogin = () => {
     localStorage.setItem("user", true)
     setUserIn(true)
     navigate("/")
 }
  return (
    <div className="App">
      <Navbar />
      {/* {userIn && <Navbar /> } */}
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/login' element={<Login setUserIn={setUserIn} handleLogin={handleLogin}/>} />
        </Routes>
    </div>
  );
}

export default App;
