import React from 'react'
import Hero from '../components/Hero'
import Departments from '../components/Departments'
import Biography from '../components/Biography'
import Messageform from '../components/Messageform'

function Home() {
  return (
    <>
      <Hero title={"Welcome to Jeevan Healthcare | your trusted Healthcare provider "} imageUrl={"/hero.png"}/>
      <Biography imageUrl={'/about.png'}/>
      <Departments/>
      <Messageform/>
    </>
  )
}

export default Home
