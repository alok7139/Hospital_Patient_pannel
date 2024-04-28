import React from 'react'
import Hero from '../components/Hero'
import Biography from '../components/Biography'

function Aboutus() {
  return (
    <>
      <Hero title={"Learn More about Us"} imageUrl={'/about.png'}/>
      <Biography imageUrl={'/whoweare.png'}/>

     
    </>
  )
}

export default Aboutus
