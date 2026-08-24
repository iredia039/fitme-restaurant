import React from "react";
import { useState, useEffect } from "react";
import { BrowserRouter, Router, Route, Routes, Link } from "react-router-dom";
import { FaSearch, FaShoppingBag } from "react-icons/fa";
import Signup from "./Signup";
import Favicon from '../assets/favicon.png'

const Navbar = ({search, setSearch}) => {
    return ( 

        <>
        

        <nav className="flex justify-around">
         <div className="flex gap-1.5">
            <img src={Favicon} alt="" />
               <Link to='/' className="text-4xl font-extrabold">FITME</Link>
         </div>
            <div className="flex justify-between items-center">
            <div className="flex items-center flex-1 max-w-md mx-8 border rounded-full px-4 py-2">
                <input type="text" placeholder="search here" value={search} onChange={(e)=>setSearch(e.target.value)}/>
                <FaSearch className="text-gray-400"/>
            </div>

            <FaShoppingBag size={20} className="text-gray-500"/>
            <Link to='/Signup' className="bg-black p-1 rounded-[10px] text-white">Sign up</Link>
            </div>
        </nav>
        </>
     );
}
 
export default Navbar;