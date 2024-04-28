import React, { useState } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'

function Messageform() {
   const [firstname, setfirstname] = useState("")
   const [lastname, setlastname] = useState("")
   const [email, setemail] = useState("")
   const [phone, setphone] = useState("")
   const [message, setmessage] = useState("")



    const handleMessage = async(e) => {
       e.preventDefault();
       try {
        await axios.post("https://hospital-backened-system.onrender.com/api/v1/message/send" , {firstname,lastname,email,phone,message},
        {
            withCredentials:true,
            headers:{
                "Content-Type" : "application/json",
            },
        }).then((res) => {
            toast.success(res.data.message)
            setfirstname("");
            setlastname("");
            setemail("");
            setphone("");
            setmessage("");
        })
       } catch (error) {
            toast.error(error.response.data.message);
       }

    }
  return (
    <div className='container form-component message-form'>
        <h2>Send us a message</h2>
        <form onSubmit={handleMessage}>
            <div>
                <input type='text' placeholder='first name' value={firstname} onChange={(e) => setfirstname(e.target.value)} />
                <input type='text' placeholder='last name' value={lastname} onChange={(e) => setlastname(e.target.value)}/>
                
            </div>
            <div>
            <input type='text' placeholder='email' value={email} onChange={(e) => setemail(e.target.value)}/>
                <input type='number' placeholder='Phone' value={phone} onChange={(e) => setphone(e.target.value)}/>
                
            </div>
            <textarea rows={7} placeholder='Message' value={message} onChange={(e) => setmessage(e.target.value)}>
            </textarea>
            <div style={{justifyContent:"center" , alignItems:"center"}}>
                <button type='submit'>Submit</button>

            </div>
        </form>
    </div>
  )
}

export default Messageform
