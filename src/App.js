
import Navbar from './features/Navbar/Navbar';
import Topbar from './features/Topbar/Topbar';
import Footer from './features/Footer/Footer';
import IntroSlide from './features/IntroSlide/IntroSlide';
import Bottombar from './features/Bottombar/Bottombar';
import Product from './features/Product/Product';
import { slideshow } from "./features/IntroSlide/productSlide";










/* 
import { createBrowserRouter, BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Home from './pages/Home/Home';
<Home/>

<BrowserRouter>
      <Routes>
        <Route index element={<Home />} />

y
      </Routes>
    </BrowserRouter>
    
*/      

export default function App() {
  return (
    <>
      <Topbar/>
      <Navbar/>
      <IntroSlide slides = {slideshow}/>
      <Product/>

      <br></br>
      <Footer/>
      <Bottombar/>
    </>
  );
}

