import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Components/Layout/Layout";
import Home from "./Components/Home/Home";
import Cart from "./Components/Cart/Cart";
import FormC from "./Components/Form/form.js";
import Details from "./Components/Details/Details.js";
import { useEffect, useState } from "react";

function App() {

  const [cart, setCart] = useState([]);
  const [total, settotal] = useState(0);
  const [products, setproducts] = useState([])
  const addtoCart = (prf) =>{
    if(prf.state === "In Stock"){
      setCart(prev => {
        const exist = prev.some(item => item.id === prf.id);
        if(exist){
          return prev.map(item => 
            item.id === prf.id?
            {...item, quant: (item.quant || 1) + 1 , pricen: (Number(prf.price) * ((item.quant || 1) + 1))}:
            item
          )
        }else{
          return[...prev, {...prf, quant: 1, pricen : prf.price}];
        }
      })
    }else{
      alert("Sorry this product is out of stock try later!")
    }
  }



  const removeforCart = (itm) =>{
    setCart((prev) => prev.filter(item => item !== itm));
  }

  useEffect(()=>{
    console.log(cart);
  }, [cart])

  useEffect(() =>{
    settotal(
        cart.reduce((acemulater, item) => acemulater + Number(item.pricen), 0)
    )
},[cart])

useEffect(() =>{
  setproducts(cart.map(product => ({
    prodName: product.name,
    prodBrand: product.brand,
    prodPrice: product.price
  })))
},[cart])

  return (
    <BrowserRouter>
      <Routes >
        <Route path="/" element ={<Layout/>}>
            <Route index element={<Home addtoCart={addtoCart}/>}/>
            <Route path="/cart" element={<Cart cart = {cart} removeforCart ={removeforCart} total = {total}/>}/>
            <Route path="/form" element={<FormC total = {total} products = {products}/>}/>
            <Route path="/Details/:id" element={<Details />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;