import CartCSS from './Cart.module.css'
import CancelSharpIcon from '@mui/icons-material/CancelSharp';

export default function Cart ({handlePositiveChange, handleNegativeChange, handleRemove, totalPrice, cart}) {

             return(
                <>
                <div className={CartCSS.productList}>
                <article>
                    {cart.map( (product) => (
                        <div className={CartCSS.product}>
                        <div className = {CartCSS.timeAdded}>Added: {product.timeAdded}</div>
                        <div className = {CartCSS.productCart} key={product.id}>
                            <img src={product.imgSrc} alt={"Cart Image"}></img>
                            <div className = {CartCSS.productCart_elementWrapper}>
                               <h1 className = {CartCSS.productCart_element_name}>{product.name}</h1>
                               <p>${product.price} each</p>
                            </div>

                            <div className = {CartCSS.productCart_elementWrapper}>
                                <div>
                                <button className = {CartCSS.productCart_button} onClick={() => handlePositiveChange(product)}>+</button>
                                </div>
                                <div>
                                <button className = {CartCSS.productCart_button} style={{backgroundColor:'black', color:'white'}}>{product.quantity}</button>
                                </div>
                                <div>
                                <button className = {CartCSS.productCart_button} onClick={() => handleNegativeChange(product)}>-</button>
                                </div>
                            </div>
                            <CancelSharpIcon onClick ={() => handleRemove(product.id, product.quantity)} style={{fontSize:'50px', color: 'red'}}/>
                        </div>
                        </div>
                    ))}
                    <div className ={CartCSS.productCart_counter}>
                        <p className ={CartCSS.productCart_counter_total}>SUBTOTAL: ${totalPrice}</p>
                        <button className ={CartCSS.productCart_checkOutButton}>Checkout Now</button>
                    </div>
                </article>
                </div>
                </>
             )
}


