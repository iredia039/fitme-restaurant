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
  
  console.log(cart);
  

  return (
    <>

  <Navbar search={search} setSearch={setSearch} cart={addCart} show={show} setShow={setShow}/>

{show ? 
  <section  className="fixed top-10 right-0 h-screen w-72 bg-white shadow-lg z-50 p-4">
    <div>
        <h2>Cart</h2>
        <p>{cart.length} items</p>
    </div>
</section> : null}

    <Routes>
        <Route path='/' element={<Home search={search} card={card} setCard={setCard}/>} />
        <Route path="/fooddetails" element={<Fooddetails card={card} addCart={addCart} cart={cart}/>}/>
      <Route path='/Signup' element={<Signup />}/>
        <Route path='/search' element={<Searchresults setCard={setCard}/>} />
    </Routes>

    {/* <Home search={search}/> */}
    </>
  )
}

export default App
