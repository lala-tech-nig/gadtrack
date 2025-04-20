import React from 'react'
import Nav from './nav'
import Hero from './hero'
import About from './about'
import Services from './services'
import Testimonial from './testimonial'
import Footer from './footer'

const PageWeb = () => {
  return (
    <div className='text-white'>
      <>
      <Nav/>
      <Hero/>
      <About/>
      <Services/>
      <Testimonial/>
      <Footer/>
      </>
    </div>
  )
}

export default PageWeb
