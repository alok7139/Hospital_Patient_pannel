import { useContext, useEffect, useState } from 'react'
import './App.css'
import {Route , Routes} from 'react-router-dom'
import Home   from './pages/Home'
import Appointment from './pages/Appointment'
import Login from './pages/Login'
import Register from './pages/Register'
import Aboutus from './pages/Aboutus'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from './components/Navbar'
import { Context } from './main'
import axios from 'axios'
import Footer from './components/Footer'


function App() {
  const {isauthenticated,setisauthenticated ,setuser } = useContext(Context);

  useEffect(() => {
    const fetchuser = async() => {
       try {
         const response = await axios.get("https://hospital-backened-system.onrender.com/api/v1/user/patient/me" , {withCredentials:true});
         setisauthenticated(true);
         setuser(response.data.user);
       } catch (error) {
          setisauthenticated(false)
          setuser({});
       }
    }
    fetchuser();
  } , [isauthenticated]);

  return (
    <>
    
    <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/appointment' element={<Appointment/>}/>
        <Route path='/about' element={<Aboutus/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
      </Routes>
      <Footer/>
      <ToastContainer position='top-center'/>
    
    </>
  )
}

export default App
