import React, { useContext, useState } from 'react'
import { Link  ,useNavigate} from 'react-router-dom'
import { Context } from '../main'
import axios from 'axios'
import { toast } from 'react-toastify'
import {GiHamburgerMenu} from 'react-icons/gi'

function Navbar() {

    const [show, setshow] = useState(false)

    

    const {isauthenticated , setisauthenticated} = useContext(Context)

    const navigate = useNavigate();

    const handleClick = () => {
      setshow(!show);
    }
    const handlenavbaritemclick = () => {
      setshow(false);
    }

    const handlelogout = async() => {
         
            await axios.get("https://hospital-backened-system.onrender.com/api/v1/user/patient/logout" , 
            {withCredentials:true, }).then(res => {
                toast.success(res.data.message);
                setisauthenticated(false);
            }).catch(err => {
                toast.error(err.response.data.message);
            })
            
          
    } 

    const gotologin = async() => {
        navigate('/login');
        //  await axios.post("https://hospital-backened-system.onrender.com/api/v1/user/login" , 
        // {withCredentials:true,}).then(res => {
        //     toast.success(res.data.message);
        //     setisauthenticated(true);
        // }).catch(err =>{
        //     toast.error(err.response.data.message);
        // })
    }

  return (
    
      <nav className='container'>
        <div className="logo">
            <img src='https://static.vecteezy.com/system/resources/thumbnails/025/093/941/small/medical-cross-hospital-3d-medical-and-healthcare-icon-png.png' style={{width:"50px" , marginRight:"10px" , backgroundImage:"none"}} title='logo'/>
            Jeevan</div>
        <div className={show ? "navLinks showmenu" : "navLinks"} >
            <div className="links" style={{justifyContent:"center" , alignItems:"center" , left:"50%" , right:"50%"}}>
                <Link to={'/'} onClick={handlenavbaritemclick}>Home</Link>
                <Link to={'/appointment'} onClick={handlenavbaritemclick}>Appointment</Link>
                <Link to={'/about'} onClick={handlenavbaritemclick}>About Us</Link>
            </div>
            {isauthenticated ? (<button className='logoutBtn btn' onClick={handlelogout}>Logout</button>) : (<button className='logoutBtn btn' onClick={gotologin}>Login</button>)}
        </div>
         <div className='hamburger' onClick={handleClick}>
             <GiHamburgerMenu/>
         </div>
      </nav>
    
  )
}

export default Navbar
