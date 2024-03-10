import React from 'react'
import Navbar from '../Components/Navbar'
import Hero from '../Components/Hero'
import Aboutme from '../Components/Aboutme'
import Education from '../Components/Education'
import ToolKit from '../Components/ToolKit'
import ProjectSection from '../Components/ProjectSection'
import Section from '../Components/Section'
import Footer from '../Components/Footer'
import Contact from '../Components/Contact'

const HomePage = () => {
  return (
    <>
    <Navbar/>
    <Hero/>
    <Aboutme/>
    <Education/>
    <ToolKit/>
    <ProjectSection/>
    <Contact/>
    <Section/>
    <Footer/>
    </>
  )
}

export default HomePage