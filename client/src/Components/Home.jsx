import React, { useEffect } from 'react'
import { useGlobleContext } from '../context';
import HeroSection from './HeroSection'

const Home = () => {
  
  const {updateHomePage} = useGlobleContext();
   useEffect(()=>updateHomePage(),[])
 
  return (
   
   <div>
      <HeroSection/>
   </div>  
  )
}

export default Home