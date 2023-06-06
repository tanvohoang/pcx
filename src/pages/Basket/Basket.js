import Topbar from "../../features/Topbar/Topbar";
import Navbar from "../../features/Navbar/Navbar";
import Footer from "../../features/Footer/Footer";
import Bottombar from "../../features/Bottombar/Bottombar";
import Cart from "../../features/Cart/Cart";
import { useDispatch, useSelector } from "react-redux";
import { useContext, useState, useEffect } from "react";
import { Context } from "../../App";
import { incrementByAmount, decrementByAmount, selectCount } from "../../reducer/counterReducer";
import BasketCSS from './Basket.module.css'

export default function Basket() {
  
  const cartQuantity = useSelector(selectCount)
  const dispatch = useDispatch();  
  const {cart, setCart, hidden, setHidden, handlePrice} = useContext(Context)
  const [totalPrice,setTotalPrice] = useState(0);
    
    const handleEmptyCart = () => {
        if (cartQuantity ===0){
            setHidden(true)
        }; 
    }

    const handleTotalPrice = () => {
        let initialPrice = 0;
        cart.map((product) => (initialPrice += product.quantity * product.price))
        setTotalPrice(initialPrice)
    }

    const handleRemove = (id,amount) => {
        const removeProduct = cart.filter((product) => product.id !== id)
        setCart(removeProduct);
        dispatch(decrementByAmount(amount))
        
    }

    const handlePositiveChange = (product) => {
        const productIndex = cart.indexOf(product);
        cart[productIndex].quantity += 1;
        dispatch(incrementByAmount(1));
        setCart([...cart]);
    }

    const handleNegativeChange = (product) => {
        const productIndex = cart.indexOf(product);
        cart[productIndex].quantity -= 1;
        dispatch(decrementByAmount(1));
        setCart([...cart])
        if(product.quantity === 0) {
            handleRemove(product.id, product.quantity)
        };
    }

    useEffect(() => {
        handleTotalPrice();
        handleEmptyCart();
    });

    return(
      <>
      <Topbar/>
      <Navbar/>

      { hidden ?  <div className={BasketCSS.emptyCart}>Your cart is currently empty. Please add something here</div> :
      <Cart cart={cart} setCart={setCart} handleNegativeChange={handleNegativeChange} handlePositiveChange={handlePositiveChange} handleRemove={handleRemove} totalPrice={totalPrice}  />
       }

      <br></br>
      <Footer/>
      <Bottombar/>
     </>
      
    )
}

