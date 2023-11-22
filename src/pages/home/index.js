// import NavbarComp from '@/components/NavbarComp'
import React from 'react'
import NewNavBarComp from '@/components/NewNavBarComp'
import HeroSection from '@/modules/HomePageModule/HeroSection'
import WhySD from '@/modules/HomePageModule/WhySD'
import Importance from '@/modules/HomePageModule/importance'
import About from '@/modules/HomePageModule/About'

const Home = () => {
  return (
    <div className='customcontainer'>
      <NewNavBarComp />
      <HeroSection />
      <WhySD />
      <Importance />
      <About/>


    </div>
  )
}

export default Home
