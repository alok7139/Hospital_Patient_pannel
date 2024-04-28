import React, { useState } from 'react'
import { useContext } from 'react'
import { Context } from '../main'
import { Navigate, useNavigate , Link } from 'react-router-dom'
import axios from 'axios'
import { toast } from 'react-toastify'

export default function Register() {

  const {isauthenticated,setisauthenticated} = useContext(Context)

  const [firstname, setfirstname] = useState("")
  const [lastname, setlastname] = useState("")
  const [email, setemail] = useState("")
  const [phone, setphone] = useState("")
  const [dob, setdob] = useState("")
  const [gender, setgender] = useState("")
  const [password, setpassword] = useState("")

  const navigate = useNavigate();

  const handleregister = async(e) => {
    e.preventDefault();
    try {
      await axios.post("https://hospital-backened-system.onrender.com/api/v1/user/patient/register" , {firstname,lastname,email,phone,dob,gender,password ,role:"Patient"} , {withCredentials:true , headers:{"Content-Type": "application/json"}})
      .then((res) => {
        toast.success(res.data.message);
        setisauthenticated(true);
        navigate("/");
        setfirstname("");
        setlastname("");
        setemail("");
        setphone("");
        // setNic("");
        setdob("");
        setgender("");
        setpassword("");
      });
      
    } catch (error) {
      toast.error(error.response.data.message);
      
    }
  }

  if(isauthenticated){
    return <Navigate to={'/'}/>
  }

  return (
    <>
    <div className='container form-component register-form'>
      <h2 >Sign Up</h2>
      <p style={{margin:"auto"}}>Please Sign Up to continue</p>
      <p></p>
        
      <form onSubmit={handleregister}>
        <div>
          <input type='text' placeholder='Enter Firstname' value={firstname} onChange={(e) => setfirstname(e.target.value)}/>
          <input type='text' placeholder='Enter Lastname' value={lastname} onChange={(e) => setlastname(e.target.value)}/>
        </div>
       
        <div>
          <input type='text' placeholder='Enter Email' value={email} onChange={(e) => setemail(e.target.value)}/>
          <input type='number' placeholder='Enter Phone Number' value={phone} onChange={(e) => setphone(e.target.value)}/>
        </div>
       
        <div>
          <input type='date' placeholder='Enter Date of Birth' value={dob} onChange={(e) => setdob(e.target.value)}/>
          <select value={gender} onChange={(e) => setgender(e.target.value)}>
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Others">Others</option>
          </select>
        </div>
        <div>
        <input type='password' placeholder='Enter Password' value={password} onChange={(e) => setpassword(e.target.value)}/>
        </div>

        <div style={{gap:"10px" , justifyContent:"flex-end" , flexDirection:"row"}}>
          <p style={{marginBottom:0}}>Already have an account?</p>
          <Link to={'/login'} style={{textDecoration:"none" , alignItem:"center"}}>Login Now</Link>

        </div>
        <div style={{justifyContent:"center" , alignItems:"center"}}>
            <button type='submit'>Create Account</button>
        </div>

      </form>
    </div>
    </>
  )
}
