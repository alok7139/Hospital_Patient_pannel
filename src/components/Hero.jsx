import React from 'react'

function Hero({title,imageUrl}) {
  return (
    <div className='hero container'>
        <div className='banner'>
            <h1>{title}</h1>
            <p>
           
             "Jeevan Healthcare: Offering a Diverse Range
             of Healthcare Services with Limited Expenses"
             <br/>    
             Jeevan Healthcare is a healthcare provider that offers a wide range 
            of medical services aimed at catering to various healthcare needs. 
            Despite the comprehensive range of services provided, the expenses incurred are kept minimal,
             ensuring accessibility to healthcare for individuals from different financial backgrounds.
            </p>

        </div>
        <div className="banner">
            <img src={imageUrl} alt='hero' className='animated-image'/>
            <span>
                <img src='/Vector.png' alt='vector'/>
            </span>
        </div>
      
    </div>
  )
}

export default Hero
