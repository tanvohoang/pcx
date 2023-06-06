import NavbarCSS from './Navbar.module.css'
import { Link, Outlet } from 'react-router-dom';

export default function Navbar() {


  return (
      <>
      <div className = {NavbarCSS.navbar_container}>
        <ul className = {NavbarCSS.navbar_bar}>
          <li className ={NavbarCSS.navbar_navlinks}><Link to="/">Home</Link></li>
          <li className ={NavbarCSS.navbar_navlinks}><a href="#">Customer Service</a></li>
          <li className ={NavbarCSS.navbar_navlinks}><a href="#">About Us</a></li>
          <li className ={NavbarCSS.navbar_navlinks}><a href="#">Gift</a></li> 
           
          <li className ={NavbarCSS.navbar_navlinks}>
          <div className={NavbarCSS.navbar_dropdown}>
            <a>Products</a>
            <div className={NavbarCSS.navbar_dropdown_content}>
                <div><a href='#'>Top Seller</a></div>
                <div><a href='#'>Discount</a></div>
                <div><a href='#'>Newest Products</a></div>
            </div>
            </div>
          </li>

          <li className ={NavbarCSS.navbar_navlinks}>
            <a href="#">
            </a>
          </li>
        </ul>
      </div>
      <Outlet/>
      </>
  )
}


