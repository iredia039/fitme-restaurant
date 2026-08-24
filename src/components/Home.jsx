import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import union from '../assets/Union.png'
import apple from '../assets/apple.png';
import banana from '../assets/banana.png';
import firstFoodCard from '../assets/first-foodcard.png';
import secondFoodCard from '../assets/2nd-foodcard.png';
import Products from "./Products";

const Home = ({ search }) => {
    return ( 

        <>

<section className="flex items-center justify-around py-16">


  

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
            <Link to='/Signup' className="inline-block bg-black p-1 rounded-[10px] text-white transition-transform duration-300 hover:scale-105">Sign up</Link>
    </div>
  </div>

  <div className="flex justify-end gap-4 items-center">
    <img
      src={firstFoodCard}
      alt=""
      className="w-80 rounded-2xl shadow-lg transition-transform duration-300 hover:scale-105"
    />
    <img
      src={secondFoodCard}
      alt=""
      className="w-80 rounded-2xl shadow-lg transition-transform duration-300 hover:scale-105"
    />
  </div>
  
  

</section>


  <img src={union} alt="" className="absolute top-[25vh] w-[8vw]"/>



{/* <section className="relative flex items-center justify-between gap-12 py-16 px-8 overflow-hidden">

  
  <div className="relative flex-1 max-w-xl">

    
    <img
      src={union}
      alt=""
      className="absolute -z-10 -top-10 -left-10 w-72 opacity-80"
    />

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

    <div className="flex mt-6 gap-2">
      <input
        type="text"
        placeholder="Enter your delivery location"
        className="flex-1 border border-gray-300 rounded-lg px-4 py-2 outline-none"
      />
      <Link
        to="/Signup"
        className="inline-block bg-black px-5 py-2 rounded-[10px] text-white transition-transform duration-300 hover:scale-105"
      >
        Sign up
      </Link>
    </div>
  </div>

  
  <div className="flex flex-1 justify-end gap-4 items-center">
    <img
      src={firstFoodCard}
      alt=""
      className="w-80 rounded-2xl shadow-lg transition-transform duration-300 hover:scale-105"
    />
    <img
      src={secondFoodCard}
      alt=""
      className="w-80 rounded-2xl shadow-lg transition-transform duration-300 hover:scale-105"
    />
  </div>

</section> */}



          <Products search={search}/>

        </>
     );
}
 
export default Home;