import React from 'react'
import AppointmentForm from '../components/AppointmentForm'
import Hero from '../components/Hero'

export default function Appointment() {
  return (
    <>
      <Hero title={'"Hurry up and schedule your appointment with one of our finest doctors today!"'} imageUrl={'/signin.png'}/>

      <AppointmentForm/>
    </>
  )
}
