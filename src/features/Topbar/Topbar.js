import TopbarCSS from './Topbar.module.css'

export default function Topbar() {

  const successCallback = (position) => {
    console.log(position);
  };
  
  const errorCallback = (error) => {
    console.log(error);
  };
  var geolocation = navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
  
    return (
    <div className={TopbarCSS.topbar}>

      <div className={TopbarCSS.topbar_element}>
        <div className={TopbarCSS.topbar_logo}>
          <a href="#">
            <h3>PCX</h3>
          </a>            
        </div>
      </div>
      
      <div className={TopbarCSS.topbar_element}>
        <div className={TopbarCSS.topbar_geo}>
          Deliver to {geolocation}
        </div>
      </div>

      <div className={TopbarCSS.topbar_element}>

        <div className={TopbarCSS.topbar_searcher}>
          <input type='text' placeholder='Search for products' ></input> 
        </div>
      </div>

      <div className={TopbarCSS.topbar_element}>
        <div className={TopbarCSS.topbar_language}>
           <p>Language</p>
           <div className={TopbarCSS.topbar_language_option}>     
              <div><a href='#'>EN - English</a></div>
              <div><a href='#'>DE - Deutsch</a></div>
              <div><a href='#'>ES - Espanol</a></div>         
            </div>
        </div>     
      </div>
    
    <div className={TopbarCSS.topbar_element}>
         <div className={TopbarCSS.topbar_login}>
           <button type='button'>Sign in</button>
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
                <label for="checkbox"> Remember Me</label>
                <button type='text'>Cancel</button>
              </div>

             </form>
            

         </div>

            
    </div> 
         
  </div>
    )
}