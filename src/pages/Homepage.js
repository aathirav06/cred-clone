import React from 'react'
import Header from "../components/common/Header/Header"
import FeelSpecial from '../components/FeelSpecial/FeelSpecial'
import HeroSection from '../components/HeroSection/HeroSection'
import ProductShowcase from '../components/ProductShowcase/ProductShowcase'


const Homepage = () => {
  return (
    <>

<Header />
<HeroSection />
<ProductShowcase/>
<FeelSpecial/>
    </>
  )
}

export default Homepage