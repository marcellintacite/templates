import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import Login from './Components/example';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/home';
import {toast, ToastContainer} from 'react-toastify'
import { useState } from 'react';
import 'react-toastify/dist/ReactToastify.css'
import AddPoem from './Components/ajouterPoeme';
import Navbar from './Components/navbar';
import Poemes from './Components/poemes';
import 'font-awesome/css/font-awesome.css'

function App() {
  const [isAuth, setIsAuth] = useState(false)
 
  return (
    <div className='body'>
      <Navbar isAuth={isAuth}/>
      <div className="container-fluid">
          <ToastContainer/>
          <Routes>
            <Route path='/' element={<Login setIsAuth = {setIsAuth}/>}/>
            <Route path='/home' element={<Home/>}/>
            <Route path='/add' element={<AddPoem isAuth={isAuth}/>}/>
            <Route path='/poemes' element={<Poemes/>}/>
          </Routes>
      </div>
    </div>
  );
}

export default App;
