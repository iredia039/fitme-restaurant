import React from "react";
import { useState, useEffect } from "react";
import { BrowserRouter, Router, Route, Routes, Link } from "react-router-dom";
import { FaSearch, FaShoppingBag } from "react-icons/fa";
import Signup from "./Signup";
import Favicon from '../assets/favicon.png'

const Navbar = ({search, setSearch, addCart, cartItems, show, setShow}) => {

   //  const [searched, setSearched] = useState('')
   const [typed, setTyped] = useState('')

     const cartCount = cartItems?.reduce((total, item) => total + item.quantity, 0) || 0

   


    return ( 

        <>
        

        <nav className="flex justify-around">
         <div className="flex gap-1.5">
            <img src={Favicon} alt="" />
               <Link to='/' className="text-4xl font-extrabold">FITME</Link>
         </div>
            <div className="flex justify-between items-center">
            <div className="flex items-center flex-1 max-w-md mx-8 border rounded-full px-4 py-2">
                <input type="text" placeholder="search here" value={typed} onChange={(e)=>setTyped(e.target.value)} className=""/>
               <Link to={`/search?q=${typed}`}>
               <FaSearch className="text-gray-400 cursor-pointer"/>
               </Link>
            </div>


            <button onClick={()=>setShow(!show)} className="relative">
            <FaShoppingBag size={20} className="text-gray-500"/>
            <span className="absolute -top-2 -right-2 bg-[#FC8019] text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
              {cartCount}
            </span>
            </button>
            <Link to='/Signup' className="bg-black p-1 rounded-[10px] text-white">Sign up</Link>
            </div>
        </nav>
        </>
     );
}
 
export default Navbar;