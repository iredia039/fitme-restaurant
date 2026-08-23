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

function App() {


  const [search, setSearch] = useState('')
  

  return (
    <>

  <Navbar search={search} setSearch={setSearch}/>

    <Routes>
      <Route path='/Signup' element={<Signup />}/>
    </Routes>

    <Home search={search}/>
    </>
  )
}

export default App
