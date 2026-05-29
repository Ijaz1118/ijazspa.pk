import React from 'react'
import Hero from '../components/ui/Hero'
import Gallary from '../components/ui/Gallary'
import Prices from '../components/ui/Prices'
import Testimonials from '../components/ui/Testimonials'
import Cta from '../components/ui/Cta'

function Home() {
  return (
    <div>
      <Hero/>
      <Gallary/>
      <Prices/>
      <Testimonials/>
       <Cta/>
    </div>
  )
}

export default Home
