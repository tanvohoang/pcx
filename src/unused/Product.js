import ProductCSS from './Product.module.css'
import { useSelector, useDispatch } from 'react-redux'
import { incrementByAmount } from './counterReducer'
import { useState } from 'react';

export default function Product(){
    
    const dispatch = useDispatch();
    const [incrementAmount, setIncrementAmount] = useState('1');
    const incrementer = () => dispatch(incrementByAmount(Number(incrementAmount) || 0))
    const quantityChange = e => setIncrementAmount(e.target.value)


    return(
        <div className={ProductCSS.item_gallery}>

            <div className={ProductCSS.item_layout}>
                <div className={ProductCSS.item_card}>
                    <a href='#'>
                    <img className={ProductCSS.item_card_image} src= 'https://cdn.tgdd.vn/Products/Images/44/279259/TimerThumb/asus-tuf-gaming-fx506lhb-i5-hn188w-(44).jpg'></img>
                    <div className={ProductCSS.item_card_header}>Laptop Asus TUF Gaming F15 FX506LHB i5 10300H/8GB/512GB/4GB GTX1650/144Hz/Win11 </div>
                    </a>
                    <div className={ProductCSS.item_card_price}>$875</div>
                    <div className={ProductCSS.item_card_condition_inStock}>In Stock</div>
                    <input className={ProductCSS.item_card_quantity}  type = "number" placeholder={incrementAmount} onChange={quantityChange} ></input>
                    <button type="button" className={ProductCSS.item_card_button} onClick={incrementer}>TO CART</button>
                </div>
            </div>

            <div className={ProductCSS.item_layout}>
                <div className={ProductCSS.item_card}>
                    <a href='#'>
                    <img className={ProductCSS.item_card_image} src= 'https://cdn.tgdd.vn/Products/Images/44/292389/lenovo-legion-5-15iah7-i5-82rc003wvn-a-thumb-600x600.jpg'></img>
                    <div className={ProductCSS.item_card_header}>Laptop Lenovo Legion 5 15IAH7 i5 12500H/8GB/512GB/4GB RTX3050Ti/165Hz/Win11 (82RC003WVN)  </div>
                    </a>
                    <div className={ProductCSS.item_card_price}>$1,164</div>
                    <div className={ProductCSS.item_card_condition_outOfStock}>Out of Stock</div>
                    <input className={ProductCSS.item_card_quantity}  type = "number" placeholder={incrementAmount} onChange={quantityChange} ></input>
                    <button type="button" className={ProductCSS.item_card_button} onClick={incrementer}>TO CART</button>
                </div>
            </div>

            <div className={ProductCSS.item_layout}>
                <div className={ProductCSS.item_card}>
                    <a href='#'>
                    <img className={ProductCSS.item_card_image} src= 'https://cdn.tgdd.vn/Products/Images/44/256265/msi-gaming-stealth-15m-a11uek-i7-254vn-600x600.jpg'></img>
                    <div className={ProductCSS.item_card_header}>Laptop MSI Gaming Stealth 15M A11UEK i7 11375H/16GB/512GB/6GB RTX3060 Max-Q/144Hz/Win10 (254VN)  </div>
                    </a>
                    <div className={ProductCSS.item_card_price}>$1,354</div>
                    <div className={ProductCSS.item_card_condition_inStock}>In Stock</div>
                    <input className={ProductCSS.item_card_quantity}  type = "number" placeholder={incrementAmount} onChange={quantityChange} ></input>
                    <button type="button" className={ProductCSS.item_card_button} onClick={incrementer}>TO CART</button>
                </div>
            </div>

            <div className={ProductCSS.item_layout}>
                <div className={ProductCSS.item_card}>
                    <a href='#'>
                    <img className={ProductCSS.item_card_image} src= 'https://cdn.tgdd.vn/Products/Images/44/256566/msi-gaming-pulse-gl66-11udk-i7-816vn-051121-023122-600x600.jpg'></img>
                    <div className={ProductCSS.item_card_header}> MSI Gaming Pulse GL66 11UDK i7 11800H  </div>
                    </a>
                    <div className={ProductCSS.item_card_price}>$1,064</div>
                    <div className={ProductCSS.item_card_condition_inStock}>In Stock</div>
                    <input className={ProductCSS.item_card_quantity}  type = "number" placeholder={incrementAmount} onChange={quantityChange} ></input>
                    <button type="button" className={ProductCSS.item_card_button} onClick={incrementer}>TO CART</button>
                </div>
            </div>

            <div className={ProductCSS.item_layout}>
                <div className={ProductCSS.item_card}>
                    <a href='#'>
                    <img className={ProductCSS.item_card_image} src= 'https://cdn.tgdd.vn/Products/Images/44/302473/asus-gaming-rog-strix-scar-18-g834jy-i9-n6039w-thumb-600x600.jpg'></img>
                    <div className={ProductCSS.item_card_header}>Laptop Asus Gaming ROG Strix SCAR 18 G834JY i9 13980HX/64GB/2TB/16GB RTX4090/240Hz  </div>
                    </a>
                    <div className={ProductCSS.item_card_price}>$1,864</div>
                    <div className={ProductCSS.item_card_condition_inStock}>In Stock</div>
                    <input className={ProductCSS.item_card_quantity}  type = "number" placeholder={incrementAmount} onChange={quantityChange} ></input>
                    <button type="button" className={ProductCSS.item_card_button} onClick={incrementer}>TO CART</button>
                </div>
            </div>

            <div className={ProductCSS.item_layout}>
                <div className={ProductCSS.item_card}>
                    <a href='#'>
                    <img className={ProductCSS.item_card_image} src= 'https://cdn.tgdd.vn/Products/Images/44/302982/hp-omen-16-n0085ax-r9-7c144pa-thumb-fix-600x600.jpg'></img>
                    <div className={ProductCSS.item_card_header}>HP Omen 16 n0085AX R9 6900HX (7C144PA)  </div>
                    </a>
                    <div className={ProductCSS.item_card_price}>$1,234</div>
                    <div className={ProductCSS.item_card_condition_inStock}>In Stock</div>
                    <input className={ProductCSS.item_card_quantity}  type = "number" placeholder={incrementAmount} onChange={quantityChange} ></input>
                    <button type="button" className={ProductCSS.item_card_button} onClick={incrementer}>TO CART</button>
                </div>
            </div>


            <div className={ProductCSS.item_layout}>
                <div className={ProductCSS.item_card}>
                    <a href='#'>
                    <img className={ProductCSS.item_card_image} src= 'https://cdn.tgdd.vn/Products/Images/44/271545/dell-gaming-alienware-m15-r6-i7-p109f001dbl-020322-112012-600x600.jpg'></img>
                    <div className={ProductCSS.item_card_header}>Laptop Lenovo Legion 5 15IAH7 i5 12500H/8GB/512GB/4GB RTX3050Ti/165Hz/Win11 (82RC003WVN)  </div>
                    </a>
                    <div className={ProductCSS.item_card_price}>$1,144</div>
                    <div className={ProductCSS.item_card_condition_inStock}>In Stock</div>
                    <input className={ProductCSS.item_card_quantity}  type = "number" placeholder={incrementAmount} onChange={quantityChange} ></input>
                    <button type="button" className={ProductCSS.item_card_button} onClick={incrementer}>TO CART</button>
                </div>
            </div>

            <div className={ProductCSS.item_layout}>
                <div className={ProductCSS.item_card}>
                    <a href='#'>
                    <img className={ProductCSS.item_card_image} src= 'https://cdn.tgdd.vn/Products/Images/44/292389/lenovo-legion-5-15iah7-i5-82rc003wvn-a-thumb-600x600.jpg'></img>
                    <div className={ProductCSS.item_card_header}>Dell Gaming Alienware m15 R6 i7 11800H (P109F001DBL)  </div>
                    </a>
                    <div className={ProductCSS.item_card_price}>$1,165</div>
                    <div className={ProductCSS.item_card_condition_outOfStock}>Out of Stock</div>
                    <input className={ProductCSS.item_card_quantity}  type = "number" placeholder={incrementAmount} onChange={quantityChange} ></input>
                    <button type="button" className={ProductCSS.item_card_button} onClick={incrementer}>TO CART</button>
                </div>
            </div>

            <div className={ProductCSS.item_layout}>
                <div className={ProductCSS.item_card}>
                    <a href='#'>
                    <img className={ProductCSS.item_card_image} src= 'https://cdn.tgdd.vn/Products/Images/44/275734/msi-gaming-vector-gp66-12ugs-i7-432vn-010422-115123-600x600.jpg'></img>
                    <div className={ProductCSS.item_card_header}>MSI Gaming Vector GP66 12UGS i7 12700H (432VN)  </div>
                    </a>
                    <div className={ProductCSS.item_card_price}>$1,452</div>
                    <div className={ProductCSS.item_card_condition_inStock}>In Stock</div>
                    <input className={ProductCSS.item_card_quantity}  type = "number" placeholder={incrementAmount} onChange={quantityChange} ></input>
                    <button type="button" className={ProductCSS.item_card_button} onClick={incrementer}>TO CART</button>
                </div>
            </div>

            <div className={ProductCSS.item_layout}>
                <div className={ProductCSS.item_card}>
                    <a href='#'>
                    <img className={ProductCSS.item_card_image} src= 'https://cdn.tgdd.vn/Products/Images/44/302466/asus-gaming-rog-zephyrus-g14-ga402rj-r7-l8030w-thumb-600x600.jpg'></img>
                    <div className={ProductCSS.item_card_header}>Asus Gaming ROG Zephyrus G14 GA402RJ R7 6800HS  </div>
                    </a>
                    <div className={ProductCSS.item_card_price}>$1,654</div>
                    <div className={ProductCSS.item_card_condition_outOfStock}>Out of Stock</div>
                    <input className={ProductCSS.item_card_quantity}  type = "number" placeholder={incrementAmount} onChange={quantityChange} ></input>
                    <button type="button" className={ProductCSS.item_card_button} onClick={incrementer}>TO CART</button>
                </div>
            </div>

            <div className={ProductCSS.item_layout}>
                <div className={ProductCSS.item_card}>
                    <a href='#'>
                    <img className={ProductCSS.item_card_image} src= 'https://cdn.tgdd.vn/Products/Images/44/249147/msi-gaming-gs66-stealth-11ug-i7-219vn-600x600.jpg'></img>
                    <div className={ProductCSS.item_card_header}>MSI Gaming GS66 Stealth 11UG i7 11800H (219VN)  </div>
                    </a>
                    <div className={ProductCSS.item_card_price}>$1,424</div>
                    <div className={ProductCSS.item_card_condition_inStock}>In Stock</div>
                    <input className={ProductCSS.item_card_quantity}  type = "number" placeholder={incrementAmount} onChange={quantityChange} ></input>
                    <button type="button" className={ProductCSS.item_card_button} onClick={incrementer}>TO CART</button>
                </div>
            </div>

            <div className={ProductCSS.item_layout}>
                <div className={ProductCSS.item_card}>
                    <a href='#'>
                    <img className={ProductCSS.item_card_image} src= 'https://cdn.tgdd.vn/Products/Images/44/249152/msi-gaming-ge66-raider-11ug-i7-258vn-600x600.jpg'></img>
                    <div className={ProductCSS.item_card_header}>MSI Gaming GE66 Raider 11UG i7 11800H (258VN) </div>
                    </a>
                    <div className={ProductCSS.item_card_price}>$1,321</div>
                    <div className={ProductCSS.item_card_condition_inStock}>In Stock</div>
                    <input className={ProductCSS.item_card_quantity}  type = "number" placeholder={incrementAmount} onChange={quantityChange} ></input>
                    <button type="button" className={ProductCSS.item_card_button} onClick={incrementer}>TO CART</button>
                </div>
            </div>

            <div className={ProductCSS.item_layout}>
                <div className={ProductCSS.item_card}>
                    <a href='#'>
                    <img className={ProductCSS.item_card_image} src= 'https://cdn.tgdd.vn/Products/Images/44/283458/acer-nitro-5-tiger-an515-58-773y-i7-nhqfksv001-thumb-600x600.jpg'></img>
                    <div className={ProductCSS.item_card_header}>Acer Nitro 5 Tiger AN515 58 773Y i7 12700H </div>
                    </a>
                    <div className={ProductCSS.item_card_price}>$1,258</div>
                    <div className={ProductCSS.item_card_condition_inStock}>In Stock</div>
                    <input className={ProductCSS.item_card_quantity}  type = "number" placeholder={incrementAmount} onChange={quantityChange} ></input>
                    <button type="button" className={ProductCSS.item_card_button} onClick={incrementer}>TO CART</button>
                </div>
            </div>

            
            






        </div>
    )
}