import React from 'react'
import NavBar from './NavBar'
import './container.css'
import Hero from './Hero'
import WorkHours from './WorkHours'

const Container = () => {
  return (
    <div className='container'>
      <NavBar />
      <Hero />
      <WorkHours />
    </div>
  )
}

export default Container