import React, { useEffect } from 'react'
import { useGlobleContext } from '../context';
import Home from './Home';

const About = () => {
  const {updateAboutPage} = useGlobleContext();
  useEffect(()=> updateAboutPage() ,[])
  return (
    <Home />
  )
}

export default About