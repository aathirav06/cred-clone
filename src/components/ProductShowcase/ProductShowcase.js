import React from 'react'
import './ProductShowcase.css'

const ProductShowcase = () => {
  return (
      <div className="product-showcase">
<div className='showcase-wrapper'>
        <img
            src="https://web-images.credcdn.in/_next/assets/images/home-page/phone/left-2.png" alt='phonleft2'
            className="showcase-ui showcase-mockup-1"
          />
          <img
            src="https://web-images.credcdn.in/_next/assets/images/home-page/phone/left-1.png" alt='phoneleft1'
            className="showcase-ui showcase-mockup-2"
          />
          <img
            src="https://web-images.credcdn.in/_next/assets/images/home-page/phone/center.png" alt='phonecenter'
            className="showcase-ui showcase-mockup-3"
          />
          <img
            src="https://web-images.credcdn.in/_next/assets/images/home-page/phone/right-1.png" alt='phoneright1'
            className="showcase-ui showcase-mockup-4"
          />
          <img
            src="https://web-images.credcdn.in/_next/assets/images/home-page/phone/right-2.png" alt='phoneright2'
            className="showcase-ui showcase-mockup-5"
          />
      </div>
    
    </div>
  )
}

export default ProductShowcase