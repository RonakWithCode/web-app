import React from 'react'
import HeroSection from '../Components/HeroSection'
import WeDo from '../Components/WeDo'
import ActionSection from '../Components/ActionSection'
import { WeAre } from '../Components/WeAre'
import OurWork from '../Components/OurWork'
import OurPartners from '../Components/OurPartners'

const Home = () => {
  return (
    <div className="relative">
      <HeroSection />
      <WeAre />
      <ActionSection />
      <WeDo />
      <OurWork  />
      <OurPartners />
      </div>
  );
};

export default Home;
