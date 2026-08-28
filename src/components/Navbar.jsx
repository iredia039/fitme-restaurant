import React from "react";
import { useState, useEffect } from "react";
import { BrowserRouter, Router, Route, Routes, Link } from "react-router-dom";
import { FaSearch, FaShoppingBag } from "react-icons/fa";
import Signup from "./Signup";
import Favicon from '../assets/favicon.png'

const Navbar = ({search, setSearch, addCart, cartItems, show, setShow}) => {

   const [typed, setTyped] = useState('')

     const cartCount = cartItems?.reduce((total, item) => total + item.quantity, 0) || 0

   


    return ( 

        <>
        

        <nav className="flex flex-col sm:flex-row items-center justify-around gap-3 sm:gap-2 px-4 py-3">
         <div className="flex gap-1.5 items-center">
            <img src={Favicon} alt="" />
               <Link to='/' className="text-3xl sm:text-4xl font-extrabold">FITME</Link>
         </div>
            <div className="flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4 w-full sm:w-auto">
            <div className="flex items-center flex-1 w-full sm:max-w-md sm:mx-8 border rounded-full px-4 py-2">
                <input type="text" placeholder="search here" value={typed} onChange={(e)=>setTyped(e.target.value)} className="w-full min-w-0 outline-none"/>
               <Link to={`/search?q=${typed}`}>
               <FaSearch className="text-gray-400 cursor-pointer"/>
               </Link>
            </div>

            <div className="flex items-center gap-4">
            <button onClick={()=>setShow(!show)} className="relative">
            <FaShoppingBag size={20} className="text-gray-500"/>
            <span className="absolute -top-2 -right-2 bg-[#FC8019] text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
              {cartCount}
            </span>
            </button>
            <Link to='/Signup' className="bg-black py-0.5 px-3 rounded-[10px] text-white whitespace-nowrap">Sign up</Link>
            </div>
            </div>
        </nav>
        </>
     );
}
 
export default Navbar;