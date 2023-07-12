import React from 'react'
import leftarrow from '../../assets/left-arrow.svg'
import rightarrow from '../../assets/right-arrow.svg'
import "./Slider.css"


export default function Slider() {
  return (
    <>
      <p className='index-number'>3/5</p>
      <div className="slider">
        <p className="image-description">Bedroom</p>
        <img src="/images/img-3.jpg" alt="estate room" className="slider-image" />
        <button className="navigation-button-previous">
          <img src={leftarrow} alt='previous image'/>
        </button>
        <button className="navigation-button-next">
          <img src={rightarrow} alt='next image'/>
        </button>
      </div>
    </>
  )
}
