import FooterCSS from './Footer.module.css';

export default function Footer (){
    return (
        <div className={FooterCSS.footer}>
            <div className={FooterCSS.footer_column}>
                <ul className={FooterCSS.footer_column_options}>
                    <li><h2>Get to Know Us</h2></li>

                    <li><a href='#'>Careers</a></li>
                    <li><a href='#'>Blog</a></li>
                    <li><a href='#'>Investor Relation</a></li>
                    <li><a href='#'>PCX Devices</a></li>
                    <li><a href='#'> PCX Science</a></li>
                </ul>
            </div>


            <div className={FooterCSS.footer_column}>
                <ul className={FooterCSS.footer_column_options}> 
                    <li><h2>Make Money With Us</h2></li>

                    <li><a href='#'>Sell products on PCX</a></li>
                    <li><a href='#'>Sell products on PCX Business</a></li>
                    <li><a href='#'>Become an affiliate</a></li>
                    <li><a href='#'>Advertise your products</a></li>
                    <li><a href='#'>Self-Publish with us</a></li>
                </ul>
            </div>


            <div className={FooterCSS.footer_column}>
                <ul className={FooterCSS.footer_column_options}>
                    <li><h2>Payment</h2></li>

                    <li><a href='#'>Payment Method</a></li>
                    <li><a href='#'>Reload your Balance</a></li>
                    <li><a href='#'>PCX Currency Converter</a></li>
                    <li><a href='#'>PCX Bonus Points</a></li>
                </ul>
            </div>

            <div className={FooterCSS.footer_column}>
                <ul className={FooterCSS.footer_column_options}>
                    <li><h2>Help</h2></li>

                    <li><a href='#'>PCX and COVID-19</a></li>
                    <li><a href='#'>Account</a></li>
                    <li><a href='#'>Orders</a></li>
                    <li><a href='#'>Shipping Rates & Policies</a></li>
                    <li><a href='#'>Return & Replacement</a></li>
                    <li><a href='#'>PCX Assitant</a></li>

                </ul>
            </div>

        </div>
    )
}