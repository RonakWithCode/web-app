import React from 'react'
import HeroSection from '../Components/HeroSection'
import { WeAre } from '../Components/WeAre'
import ActionSection from '../Components/ActionSection'

const Home = ()=> {
  return (
    <div>
      <HeroSection/>
      <WeAre/>
      <ActionSection/>
    </div>
  )
}

export default Home