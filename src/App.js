import Home from "./pages/Home/Home";
import Basket from "./pages/Basket/Basket";
import { useState, createContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export const Context = createContext()



export default function App() {

  const [cart, setCart] = useState([])
  const [hidden, setHidden] = useState(true)



  return (
    <Context.Provider value={{cart, setCart, hidden, setHidden,}}>
      <BrowserRouter>
      <Routes>
      <Route path="basket" element={<Basket />} />
      <Route index element={<Home />} />
      </Routes>
      </BrowserRouter>
    </Context.Provider>
  );
}

