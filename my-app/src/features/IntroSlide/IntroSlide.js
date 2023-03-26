import { useState } from 'react'
import { slideshow } from './productSlide';
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

  <div>

    <div className={IntroSlideCSS.slideshow}>
    <button onClick={prevSlide}> Prev </button>
    <button onClick={nextSlide}> Next </button>
    <img className={IntroSlide.slide_image} src={slideshow[currentIndex].url} alt='Products' ></img>
    </div>


  </div>
)

}