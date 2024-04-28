import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
// import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'

function AppointmentForm() {

    const navigate = useNavigate();

  const [firstname, setfirstname] = useState("")
  const [lastname, setlastname] = useState("")
  const [email, setemail] = useState("")
  const [phone, setphone] = useState("")
  const [dob, setdob] = useState("")
  const [gender, setgender] = useState("")
  const [appointment_date, setappointment_date] = useState("")
  const [department, setdepartment] = useState("")
  const [doctor_firstname, setdoctor_firstname] = useState("")
  const [doctor_lastname, setdoctor_lastname] = useState("")
  const [address, setaddress] = useState("")
  const [hasvisited, sethasvisited] = useState("")

  const departmentarray = [
    "Pediatrics",
    "Orthopedics",
    "Cardiology",
    "Neurology",
    "Oncology",
    "Radiology",
    "Physical Therapy",
    "Dermatology",
    "ENT",

  ]


  const [doctors, setdoctors] = useState([]);
  useEffect(() => {
    const fetchdoctors = async() => {
        const {data} = await axios.get("https://hospital-backened-system.onrender.com/api/v1/user/doctors" , {withCredentials:true});

        setdoctors(data.doctors);
    }
    fetchdoctors();
  } , [])

  const handleappointment = async(e) => {
    e.preventDefault();
    try {
        const hasvisitedBool = Boolean(hasvisited);
        const {data} = await axios.post("https://hospital-backened-system.onrender.com/api/v1/appointment/post" , 
        {firstname,lastname,email,phone,dob,gender,appointment_date,department,doctor_firstname,doctor_lastname,address,hasvisited:hasvisitedBool},
        {withCredentials:true,headers:{
            "Content-Type":"application/json"
        }});
        toast.success(data.message);
        navigate('/');


    } catch (error) {
        toast.error(error.response.data.message);
    }
  }

  return (
    <>
        <div className='container form-component appointment-form'>
      <h2 >Appointment</h2>
      
        
      <form onSubmit={handleappointment}>
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
          {/* <input */}
        </div>
        <div>
            {/* <input type='text' placeholder='Staff Number'/> */}
           <input type='date' placeholder='Appointment Date' value={appointment_date} onChange={(e) => setappointment_date(e.target.value)}/>

           <select value={department} onChange={(e) => {setdepartment(e.target.value) ; 
            setdoctor_firstname("")
            setdoctor_lastname("");
            }}>
                {
                    departmentarray.map((item,index) => {
                        return (
                            <option value={item} key={index}>{item}</option>
                        )
                    })
                }
            </select>
        </div>
        <div>
            <select value={`${doctor_firstname} ${doctor_lastname}`}
             onChange={(e) => {
                const [firstname,lastname] = e.target.value.split(" ");
                setdoctor_firstname(firstname);
                setdoctor_lastname(lastname);
             }}
             disabled = {!department}
            >
                <option value="">Select Doctor</option>
                {
                    doctors
                    .filter((doctor) => doctor.doctorDepartment === department)
                    .map((doctor,index) =>  (
                            <option value={`${doctor.firstname} ${doctor.lastname}`} key={index}> {doctor.firstname} {doctor.lastname} </option>
                        )
                    )
                }
            </select>
        </div>

        <textarea rows="4" value={address} onChange={(e) => setaddress(e.target.value)} placeholder='Enter your Address'/>

        <div style={{gap:"10px" , justifyContent:"flex-end" , flexDirection:"row"}}>
          <p style={{marginBottom:0}}>Have you Visited before?</p>

          <input type="checkbox" checked={hasvisited} onChange={(e) => sethasvisited(e.target.checked)} style={{flex:"none" , width:"25px"}}/>      
    
        </div>
        <div style={{justifyContent:"center" , alignItems:"center"}}>
            <button type='submit'>Get Appointment</button>
        </div>

      </form>
    </div>
    </>
  )
}

export default AppointmentForm
