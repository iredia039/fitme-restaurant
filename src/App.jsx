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
  

  return (
    <>

  <Navbar search={search} setSearch={setSearch}/>

    <Routes>
        <Route path='/' element={<Home search={search} card={card} setCard={setCard}/>} />
        <Route path="/fooddetails" element={<Fooddetails card={card}/>}/>
      <Route path='/Signup' element={<Signup />}/>
        <Route path='/search' element={<Searchresults />} />
    </Routes>

    {/* <Home search={search}/> */}
    </>
  )
}

export default App
