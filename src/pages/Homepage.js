import React from 'react'
import BrandsLove from '../components/BrandsLove/BrandsLove'
import Header from "../components/common/Header/Header"
import Experience from '../components/Experience/Experience'
import FeelSpecial from '../components/FeelSpecial/FeelSpecial'
import HeroSection from '../components/HeroSection/HeroSection'
import MobileScroll from '../components/MobileScroll/MobileScroll'
import ProductShowcase from '../components/ProductShowcase/ProductShowcase'
import Security from '../components/Security/Security'
import Windowpeak from '../components/Windowpeak/Windowpeak'

const Homepage = () => {
  return (
    <>

<Header />
<HeroSection />
<ProductShowcase/>
<FeelSpecial/>
<BrandsLove/>
<Experience/>
<MobileScroll/>
<div className="non-mobile">
<Windowpeak/>
</div>

<Security/>
    </>
  )
}

export default Homepage