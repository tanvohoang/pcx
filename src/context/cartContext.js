import { useState, createContext } from "react";

export const Context = createContext()
export default function CartContext({children}) {
    
    const [cart, setCart] = useState([])

    return (
        <Context.Provider value = {{cart, setCart}}>
            {children}
        </Context.Provider>
    )
}