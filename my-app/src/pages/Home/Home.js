import Navbar from './features/Navbar/Navbar';
import Topbar from './features/Topbar/Topbar';
import Footer from './features/Footer/Footer';
import IntroSlide from './features/IntroSlide/IntroSlide';
import Bottombar from './features/Bottombar/Bottombar';
import Product from './features/Product/Product';
import { slideshow } from "./features/IntroSlide/productSlide";



export default function Home() {
    return(
      <>
      <Topbar/>
      <Navbar/>
      <IntroSlide slides = {slideshow}/>
      <Product/>

      <br></br>
      <Footer/>
      <Bottombar/>
     </>
      
    )
}