import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import union from '../assets/Union.png'
import apple from '../assets/apple.png';
import banana from '../assets/banana.png';
import firstFoodCard from '../assets/first-foodcard.png';
import secondFoodCard from '../assets/2nd-foodcard.png';
import Products from "./Products";
import Fooddetails from "./Fooddetails";
import Footer from "./Footer";

const Home = ({ search, setCard }) => {

  const [products, setProducts] = useState([])

  const [goods, setGoods] = useState([])

  useEffect(() => {
    fetch('https://dummyjson.com/recipes/?limit=6')
    .then(res => res.json())
    .then(data =>{
      setProducts(data.recipes)
    })
  }, [])


    useEffect(() => {
    fetch('https://dummyjson.com/recipes/?limit=4')
    .then(res => res.json())
    .then(data =>{
      setGoods(data.recipes)
    })
  }, [])

  const searchedItem = goods.filter((item) => item.name.toLowerCase().includes(search.toLowerCase()))

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
           <input type="text" placeholder="search here" className="border rounded-2xl w-[90%]"/>
            {/* <Link to='/Signup' className="inline-block bg-black p-1 rounded-[10px] text-white transition-transform duration-300 hover:scale-105">Sign up</Link> */}
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



          <Products search={search} setCard={setCard}/>

      <section className="flex items-center justify-center bg-orange-500 rounded-lg px-8 py-6 gap-4">
       <h3 className="text-white text-xl">Search by Restaurant</h3>

  <div className="border border-white w-[50%] rounded-2xl">
    <input type="text" placeholder="Enter item or restaurant you are looking for" className="px-5 py-3 text-sm w-[70%]"/>
  </div>

  <button className="bg-black text-white text-sm font-medium px-5 py-3 rounded-full whitespace-nowrap">Search Now</button>
</section>


        

        {/* <section>
          <h2>What's on your mind</h2>
          {products.map((item) => (
            <div key={item.id}>
              <img src={item.image} alt="" />
              <h2>{item.name}</h2>
            </div>
          ))}
        </section> */}

        <section className="py-10 mx-auto">
  <h2 className="text-lg font-semibold mb-6 ml-[20vw]">What's on your mind?</h2>

  <div className="flex justify-center gap-8">
    {products.map((item) => (
      <div key={item.id} className="flex flex-col items-center gap-2">
        <img src={item.image} alt="" className="w-20 h-20 rounded-full object-cover"/>
        <h3 className="text-sm font-medium">{item.name}</h3>
      </div>
    ))}
  </div>
</section>



  <section className="mt-[5vh]">

    <h2 className="text-lg font-semibold mb-2 ml-[20vw]">personalised recommendation</h2>
                <div className="flex justify-center gap-6 px-8 py-8">
  {searchedItem.map((item) => (
     <Link to='/fooddetails' key={item.id} onClick={()=>setCard(item)}>
         <div
      key={item.id}
      className="bg-white rounded-2xl shadow-md overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-xl"
    >
      <img src={item.image} alt={item.name} className="w-full h-[30vh] object-cover" />
      <div className="p-3">
        <h2 className="font-semibold text-sm truncate">{item.name}</h2>
        <p className="text-gray-500 text-xs mt-1">{item.cuisine}</p>
      </div>
    </div>
     </Link>
  ))}
</div>
  </section>

        </>
     );
}
 
export default Home;