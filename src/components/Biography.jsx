import React from 'react'

function Biography({imageUrl}) {
  return (
    <div className='container biography'>
        <div className='banner'>
            <img src={imageUrl} alt='about'/>
        </div>
        <div className='banner'>
            {/* <p>Biography</p> */}
            <h3><i>Who we are</i></h3>
            <p>
            "Our Team of Doctors Leads Successful Global Operation"
             <br/>
             <br/>
            Led by a team of highly skilled and dedicated doctors,
             our recent global operation stands as a testament to our commitment to excellence
              in healthcare. Through meticulous planning and expert execution,
               we successfully performed a groundbreaking medical procedure that has garnered international acclaim. 
               This achievement not only highlights the exceptional expertise of our doctors but also underscores our unwavering dedication to advancing medical science and improving patient outcomes worldwide.
            </p>
            <p><span style={{color:"red"}}>Jeevan</span> Healthcare stands out as the leading provider of healthcare solutions,
                 offering unparalleled services tailored to meet diverse needs. With a steadfast commitment to excellence,
                  we excel in delivering high-quality medical care that surpasses industry standards.</p>
            <p>
            Our team of seasoned professionals comprises some of the finest doctors and medical experts in the field. Their unwavering dedication and expertise ensure that every patient receives personalized and compassionate care, setting a benchmark for medical excellence.
            </p>
            {/* <p>
            At Jeevan Healthcare, we take pride in our track record of success, which includes pioneering breakthrough procedures and achieving remarkable outcomes. Our recent global operation exemplifies our ability to tackle complex medical challenges with precision and innovation, earning accolades and recognition on a global scale.
            </p>
            <p></p> */}
        </div>
      
    </div>
  )
}

export default Biography
