import { useSelector } from 'react-redux'
import TopbarCSS from './Topbar.module.css'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link, Outlet } from 'react-router-dom';


export default function Topbar() {

    const count = useSelector((state) =>state.counter.value);
    return (
    <>
    <div className={TopbarCSS.topbar}>

      <div className={TopbarCSS.topbar_element}>
          <Link to="/" style={{textDecoration:'none'}}>
            <h4>PCX</h4>
          </Link>            
      </div>

      <div className={TopbarCSS.topbar_element}>
        <div className={TopbarCSS.topbar_searcher}>
          <input type='text' placeholder='Search for products' ></input> 
        </div>
      </div>

      <div className={TopbarCSS.topbar_element}>
        <div className={TopbarCSS.topbar_language}>
          <p>LANGUAGE</p>
          <div className={TopbarCSS.topbar_language_option}>     
            <div><a href='#'>EN - English</a></div>
            <div><a href='#'>DE - Deutsch</a></div>
            <div><a href='#'>ES - Espanol</a></div>         
          </div>
         </div>     
      </div>
    
      <div className={TopbarCSS.topbar_element}>
        <div className={TopbarCSS.topbar_login}>
           <button type='button'>SIGN IN</button>
        </div>      
      </div>   

      <div className={TopbarCSS.topbar_element} style={{marginLeft: "1%",paddingTop: "2px"}}>
          <Link to='/basket'>
          <ShoppingCartIcon style = {{color:'orange', fontSize: "2em"}}/>
          </Link>
          <span className={TopbarCSS.topbar_productCounter}>{count}</span>
      </div>

  </div>
  <Outlet/>
  </> 
    )
}


  /*
  <div className={TopbarCSS.topbar_element}>
        <div className={TopbarCSS.topbar_geo}>
          Deliver to {geolocation}
        </div>
      </div>
  const successCallback = (position) => {
    console.log(position);
  };
  
  const errorCallback = (error) => {
    console.log(error);
  };
  var geolocation = navigator.geolocation.getCurrentPosition(successCallback, errorCallback);

  <form className={TopbarCSS.topbar_credentials} method='post' action='action.php'>
              <div>
                <p>Enter Email or Phone Number</p>
                <input type='text'></input>
              </div>
              <div>
                <p>Enter Password</p>
                <input type='text'></input>
              </div>
              <div>
                <input type='checkbox' id='checkbox'></input>
                <button type='text'>Cancel</button>
              </div>
             </form>           
  */