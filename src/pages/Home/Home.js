import Topbar from "../../features/Topbar/Topbar";
import Navbar from "../../features/Navbar/Navbar";
import IntroSlide from "../../features/IntroSlide/IntroSlide";
import Product from "../../features/Product/Product";
import Footer from "../../features/Footer/Footer";
import Bottombar from "../../features/Bottombar/Bottombar";
import { slideshow } from "../../data/productSlide";
import { Context } from "../../App";
import { useContext } from "react";

export default function Home() {
  
    const {cart,setCart, hidden, setHidden} = useContext(Context)
    return(
      <>
      <Topbar/>
      <Navbar/>
      <IntroSlide slides={slideshow}/>
      <Product cart={cart} setCart={setCart} hidden={hidden} setHidden={setHidden}/>
      <br></br>
      <Footer/>
      <Bottombar/>
     </>
      
    )
}