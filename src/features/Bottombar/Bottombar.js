import BottombarCSS from './Bottombar.module.css'


export default function Bottombar() {
    return(
        <div className = {BottombarCSS.bottombar}>


            <div className = {BottombarCSS.bottombar_column}>
            <div className = {BottombarCSS.bottombar_headline}>
                <a href="#">
                   <p>Samsung</p>
                   <p>Exquisite Outlooks</p>
                </a>
            </div>

            <div className = {BottombarCSS.bottombar_headline}>
                <a href="#">
                   <p>Dell Technologies</p>
                   <p>Top Trusted Brand </p>
                </a>
            </div>

            <div className = {BottombarCSS.bottombar_headline}>
                <a href="#">
                   <p>Apple</p>
                   <p>Tablets, Smart Phones</p>
                </a>
            </div>

            <div className = {BottombarCSS.bottombar_headline}>
                <a href="#">
                   <p>AsusTek</p>
                   <p>Gaming Laptops</p>
                </a>
            </div>           
            </div>



            <div className = {BottombarCSS.bottombar_column}>
            <div className = {BottombarCSS.bottombar_headline}>
                <a href="#">
                   <p>LG</p>
                   <p>Smart Tvs</p>
                </a>
            </div>

            <div className = {BottombarCSS.bottombar_headline}>
                <a href="#">
                   <p>Lenovo</p>
                   <p>Versatile Laptops</p>
                </a>
            </div>

            <div className = {BottombarCSS.bottombar_headline}>
                <a href="#">
                   <p>MSI</p>
                   <p>Gaming Equipment</p>
                </a>
            </div>

            <div className = {BottombarCSS.bottombar_headline}>
                <a href="#">
                   <p>HP</p>
                   <p>Digital Notebooks</p>
                </a>
            </div>           
            </div>



            <div className = {BottombarCSS.bottombar_column}>
            <div className = {BottombarCSS.bottombar_headline}>
                <a href="#">
                   <p>Razer</p>
                   <p>Revolutionary Gadgets</p>
                </a>
            </div>

            <div className = {BottombarCSS.bottombar_headline}>
                <a href="#">
                   <p>Microsoft</p>
                   <p>User-friendly Designs</p>
                </a>
            </div>

            <div className = {BottombarCSS.bottombar_headline}>
                <a href="#">
                   <p>Acer</p>
                   <p>High-end Technologies</p>
                </a>
            </div>   
            </div>



            <div className = {BottombarCSS.bottombar_column}>
            <div className = {BottombarCSS.bottombar_nav}>
                <a href="#">
                   <p>Terms and Conditions</p>       
                </a>
            </div>

            <div className = {BottombarCSS.bottombar_nav}>
                <a href="#">
                   <p>Privacy Notice</p>
                </a>
            </div>

            <div className = {BottombarCSS.bottombar_nav}>
                <a href="#">
                   <p>Your Ads Privacy Choices</p>
                </a>
            </div>        
            </div>


            <div className = {BottombarCSS.bottombar_column}>
                <p1 className = {BottombarCSS.bottombar_brand}>© 1996-2023, PCX.com, Inc. or its affiliates</p1>
            </div>



            

        
            

        </div>
    )
}