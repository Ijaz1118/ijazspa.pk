import React from 'react'
import Feature from '../components/ui/Feature'
import Prices from '../components/ui/Prices'
import Stats from '../components/ui/Stats'
import Team from '../components/ui/Team'
import Testimonials from '../components/ui/Testimonials'
import Cta from '../components/ui/Cta'

function About() {
  return (
    <div>
      <Feature/>
      <Prices/>
      <Team/>
      <Stats/>
      <Testimonials/>
       <Cta/>
    </div>
  )
}

export default About
