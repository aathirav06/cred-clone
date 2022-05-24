import React from 'react'
import BrandsLove from '../components/BrandsLove/BrandsLove'
import Header from "../components/common/Header/Header"
import Experience from '../components/Experience/Experience'
import FeelSpecial from '../components/FeelSpecial/FeelSpecial'
import HeroSection from '../components/HeroSection/HeroSection'
import ProductShowcase from '../components/ProductShowcase/ProductShowcase'
import Security from '../components/Security/Security'

const Homepage = () => {
  return (
    <>

<Header />
<HeroSection />
<ProductShowcase/>
<FeelSpecial/>
<BrandsLove/>
<Experience/>
<Security/>
    </>
  )
}

export default Homepage