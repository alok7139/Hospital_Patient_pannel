import React, { useContext, useState } from 'react'
import { Context } from '../main'
import { Navigate, useNavigate  ,Link} from 'react-router-dom'
import axios from 'axios'
import { toast } from 'react-toastify'

function Login() {
  const {isauthenticated,setisauthenticated} = useContext(Context)

   const [email, setemail] = useState("")
   const [password, setpassword] = useState("")
   const [confirmpassword, setconfirmpassword] = useState("")


   const navigate = useNavigate();

   const handlelogin = async(e) => {
        e.preventDefault();
        try {
          const response  = await axios.post("https://hospital-backened-system.onrender.com/api/v1/user/login" , {email,password,confirmpassword, role:"Patient"} , {withCredentials:true , headers:{"Content-Type": "application/json"}})

          toast.success(response.data.message);
          setisauthenticated(true);
          navigate('/');
        } catch (error) {
          toast.error(error.response.data.message);
          
        }
   }

   if(isauthenticated){
    return <Navigate to={'/'}/>
   }


  return (
    <div className='container form-component login-form' > 
       <h2>Sign In</h2>
       <p>Please Login to continue</p>
       <p></p>
       <form onSubmit={handlelogin}>
        <input type='text' value={email} onChange={(e) => setemail(e.target.value)} placeholder='Enter your email'/>
        <input type='password' value={password} onChange={(e) => setpassword(e.target.value)} placeholder='Enter your password'/>
        <input type='password' value={confirmpassword} onChange={(e) => setconfirmpassword(e.target.value)} placeholder='Enter your confirm password'/>

        <div style={{gap:"10px" , justifyContent:"flex-end" , flexDirection:"row"}}>
          <p style={{marginBottom:0}}>Not Have a Account?</p>
          <Link to={'/register'} style={{textDecoration:"none" , alignItem:"center"}}>Register Now</Link>

        </div>
        <div style={{justifyContent:"center" , alignItems:"center"}}>
            <button type='submit'>Login</button>
        </div>
       </form>
    </div>
  )
}

export default Login
