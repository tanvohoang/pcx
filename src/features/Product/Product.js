import ProductCSS from './Product.module.css'
import { useDispatch } from 'react-redux'
import { incrementByAmount } from '../../reducer/counterReducer'
import { useState, useEffect } from 'react';
import { productInfo } from '../../data/productInfo';

export default function Product({cart, setCart, hidden, setHidden}){

    const [moment, setMoment] = useState(new Date());
    const currentTime = moment.toString();
    useEffect(() => {
       setInterval(()=>
         setMoment(new Date()), 1000
       )},[])


    const [incrementAmount, setIncrementAmount] = useState('1');
    const dispatch = useDispatch();
    const quantityChange = e => setIncrementAmount(e.target.value);
    

    const handleClick = (data) => {
        const addQuantity = (amount) => {
          return { ...data, quantity: amount, timeAdded: currentTime };
        };
        const amountNumber = Number(incrementAmount)
        const ReceivedData = addQuantity(amountNumber);
        setCart([...cart, ReceivedData]);
        setHidden(false)
        dispatch(incrementByAmount( amountNumber || 0));
      };

    const allProduct = productInfo.map(product =>
        <div className={ProductCSS.item_layout} key={product.id}>
        <div className={ProductCSS.item_card}>
            <a href='#'>
            <img className={ProductCSS.item_card_image} src= {product.imgSrc}></img>
            <div className={ProductCSS.item_card_header}>{product.name} </div>
            </a>
            <div className={ProductCSS.item_card_price}>${product.price}</div>
            <div className={ProductCSS.item_card_condition} condition={product.condition} >{product.condition}</div>
            <input className={ProductCSS.item_card_quantity}  type = "number" min ="0" placeholder={incrementAmount} onChange={quantityChange} ></input>
            <button type="button" className={ProductCSS.item_card_button} onClick={() => handleClick(product)} disabled={!product.availability}>TO CART</button>
        </div>
        </div>
    )        

    return (
        <div className={ProductCSS.item_gallery}>{allProduct}</div>
    )
}