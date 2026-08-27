import { useState, useEffect } from "react";
import { BrowserRouter, Router, Route, Routes, Link } from "react-router-dom";
import { FaSearch, FaShoppingBag } from "react-icons/fa";
import Navbar from './components/Navbar';
import Signup from './components/Signup';
import Home from "./components/Home";
import apple from './assets/apple.png';
import banana from './assets/banana.png';
import firstFoodCard from './assets/first-foodcard.png';
import secondFoodCard from './assets/2nd-foodcard.png';
import Products from "./components/Products";
import Searchresults from "./components/Searchresults";
import Fooddetails from "./components/Fooddetails";
import Footer from "./components/Footer";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";

function App() {


  const [search, setSearch] = useState('')
  const [card, setCard] = useState(null)
  const [cart, setCart] = useState([]);
  const [show, setShow] = useState(false)

  function addCart(item) {
    setCart(goods => {
      let exists = goods.find(food => food.id === item.id)
      if (exists) {
        return goods.map((food)=>(
          food.id === item.id ? {...food, quantity: food.quantity + 1} : food
        
        ))
      } else {
       return [...goods, {...item, quantity: 1}]
      }
    })
  }
  
  function addQuantity(id) {

    setCart(goods => (
      goods.map(item => (
        item.id === id ? {...item, quantity: item.quantity + 1} : item
      )
    )))
    
  }

  function removeQuantity(id) {
    setCart(goods => {
      const updated = goods.map(item =>
        item.id === id ? { ...item, quantity: item.quantity - 1 } : item
      );
      return updated.filter(item => item.quantity > 0);
    });
  }
  

  return (
    <>

  <Navbar search={search} setSearch={setSearch} cartItems={cart} cart={addCart} show={show} setShow={setShow}/>

  <Cart cart={cart} addQuantity={addQuantity} removeQuantity={removeQuantity} show={show} setShow={setShow}/>



    <Routes>
        <Route path='/' element={<Home search={search} card={card} setCard={setCard}/>} />
        <Route path="/fooddetails" element={<Fooddetails card={card} addCart={addCart} cart={cart}/>}/>
      <Route path='/Signup' element={<Signup />}/>
        <Route path='/search' element={<Searchresults setCard={setCard}/>} />
<Route path="/checkout" element={<Checkout cart={cart} addQuantity={addQuantity} removeQuantity={removeQuantity} />} />

    </Routes>

    <Footer />
    </>
  )
}

export default App
