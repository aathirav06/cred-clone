import { isVisible } from '@testing-library/user-event/dist/utils';
import React from 'react'
import {useRef, useState ,useEffect} from 'react'
import './MobileScroll.css'
 
const ScreenText = ({screen,setCurrentImg,i}) => {

  const[showAnimation, setShowAnimation]=useState(false);
const ref = useRef(null);

const toggleAnimation = (e) => {
  if (e[0]?.isIntersecting) {
    setShowAnimation(true);
  }
};

const options = {
  root: null,
  rootMargin: "0px",
  threshold: 0.6,
};

useEffect(() => {
  const observer = new IntersectionObserver(toggleAnimation, options);
  if (!showAnimation) {
    if (ref.current) {
      observer.observe(ref.current);
    }
  }
  return () => {
    if (ref.current) {
      observer.unobserve(ref.current);
    }
  };
});


  return (
    <div className={`screen-text ${isVisible ? "text-visible" : ""}`} ref={ref}>
       <div className="screen-heading">
           {screen.heading}
       </div>
       <div className='mobile-mockup-wrapper only-mobile'>
        <div className="mobile-mockup">
          <div className="mobile-mockup-screen flex absolute-center">
            <img
              src={screen.mobile_img}
              className='mobile-screen-img' />
          </div>
        </div>

      </div>
      <div className='screen-description'>{screen.description}</div>

    </div>
  )
}

export default ScreenText