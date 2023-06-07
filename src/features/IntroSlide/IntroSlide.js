import { useState } from 'react'
import { slideshow } from '../../data/productSlide.js';
import IntroSlideCSS from './IntroSlide.module.css'


export default function IntroSlide({slides}){

const [currentIndex,setIndex] = useState(0);
const length = slides.length
const nextSlide = () => {
  setIndex(currentIndex === length - 1 ? 0: currentIndex + 1 )
} 
const prevSlide = () => {
  setIndex(currentIndex === 0? length - 1: currentIndex -1)
}


return(

   <div className={IntroSlideCSS.IntroSlide}>

    <div>
       <div className={IntroSlideCSS.slideshow}>
         <img className={IntroSlideCSS.slideImage} src={slideshow[currentIndex].url} alt='Products' ></img>
       </div>
       <div className={IntroSlideCSS.redirect}>
       <a className = {IntroSlideCSS.leftButton} onClick={prevSlide}> {`<`} </a>
       <a className = {IntroSlideCSS.rightButton} onClick={nextSlide}> {`>`} </a>
       </div>
    </div>
  
    <div className={IntroSlideCSS.promoBar}>
      <a href='#' className={IntroSlideCSS.newspaper}><div>SIGN UP FOR WEEKLY SPECIAL OFFERS & EXCLUSIVE PRODUCTS</div></a>
      <a href='#' className={IntroSlideCSS.newspaper}><div>FREE SHIPPING ON SINGLE PRODUCT</div></a>
      <a href='#' className={IntroSlideCSS.newspaper}><div>SELL TO US 25% BONUS</div></a>
      <a href='#' className={IntroSlideCSS.newspaper}><div>PCX EVO PLATFORM</div></a> 
    </div>

  </div> 
  


)

}