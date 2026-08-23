import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import apple from '../assets/apple.png';
import banana from '../assets/banana.png';
import firstFoodCard from '../assets/first-foodcard.png';
import secondFoodCard from '../assets/2nd-foodcard.png';
import Products from "./Products";

const Home = ({ search }) => {
    return ( 

        <>

<section className="flex items-center justify-between gap-12 px-8 py-16">

  <div className="flex-1 max-w-xl">
    <h1 className="text-5xl font-bold leading-tight">
      Premium <span className="text-[#FC8019]">quality</span>
      <br /> food for your <img src={banana} alt="" className="inline-block w-10" />{" "}
      <span className="text-[#FC8019]">
        healthy <img src={apple} alt="" className="inline-block w-10" /> and daily life
      </span>
    </h1>

    <p className="mt-4 text-gray-500">
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. <br />
      Quis enim nisi reiciendis quas consectetur <br />
      inventore recusandae tenetur quam quos ipsam?
    </p>

    <div>
           <input type="text" placeholder="search here"/>
             <Link to='/Signup' className="bg-black p-1 rounded-[10px] text-white">Sign up</Link>
    </div>
  </div>

  <div className="flex justify-end gap-4 items-center">
    <img
      src={firstFoodCard}
      alt=""
      className="w-64 rounded-2xl shadow-lg transition-transform duration-300 hover:scale-105"
    />
    <img
      src={secondFoodCard}
      alt=""
      className="w-64 rounded-2xl shadow-lg transition-transform duration-300 hover:scale-105"
    />
  </div>

</section>



          <Products search={search}/>

        </>
     );
}
 
export default Home;