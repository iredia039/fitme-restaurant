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

<section className="flex flex-col lg:flex-row items-center justify-around gap-10 px-4 py-10 sm:py-16 text-center lg:text-left">


  

    <div className="flex-1 max-w-xl">
    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
      Premium <span className="text-[#FC8019]">quality</span>
      <br /> food for your <img src={banana} alt="" className="inline-block w-10" />{" "}
      <span className="text-[#FC8019]">
        healthy <img src={apple} alt="" className="inline-block w-10" /> and daily life
      </span>
    </h1>

    <p className="mt-4 text-gray-500">
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. <br className="hidden sm:block" />
      Quis enim nisi reiciendis quas consectetur <br className="hidden sm:block" />
      inventore recusandae tenetur quam quos ipsam?
    </p>

    <div>
           <input type="text" placeholder="search here" className="border rounded-2xl w-[90%] max-w-md"/>
    </div>
  </div>

  <div className="flex flex-col sm:flex-row justify-end gap-4 items-center w-full lg:w-auto">
    <img
      src={firstFoodCard}
      alt=""
      className="w-full max-w-xs sm:w-80 rounded-2xl shadow-lg transition-transform duration-300 hover:scale-105"
    />
    <img
      src={secondFoodCard}
      alt=""
      className="w-full max-w-xs sm:w-80 rounded-2xl shadow-lg transition-transform duration-300 hover:scale-105"
    />
  </div>
  
  

</section>


  <img src={union} alt="" className="hidden lg:block absolute top-[25vh] w-[8vw]"/>



          <Products search={search} setCard={setCard}/>

      <section className="flex flex-col sm:flex-row items-center justify-center bg-orange-500 rounded-lg px-4 sm:px-8 py-6 gap-4 mx-4 sm:mx-0">
       <h3 className="text-white text-xl text-center">Search by Restaurant</h3>

  <div className="border border-white w-full sm:w-[50%] rounded-2xl">
    <input type="text" placeholder="Enter item or restaurant you are looking for" className="px-5 py-3 text-sm w-full sm:w-[70%]"/>
  </div>

  <button className="bg-black text-white text-sm font-medium px-5 py-3 rounded-full whitespace-nowrap">Search Now</button>
</section>


        

        <section className="py-10 mx-auto px-4">
  <h2 className="text-lg font-semibold mb-6 text-center sm:ml-[20vw] sm:text-left">What's on your mind?</h2>

  <div className="flex flex-wrap justify-center gap-6 sm:gap-8">
    {products.map((item) => (
      <div key={item.id} className="flex flex-col items-center gap-2">
        <img src={item.image} alt="" className="w-20 h-20 rounded-full object-cover"/>
        <h3 className="text-sm font-medium">{item.name}</h3>
      </div>
    ))}
  </div>
</section>



  <section className="mt-[5vh]">

    <h2 className="text-lg font-semibold mb-2 text-center sm:ml-[20vw] sm:text-left">personalised recommendation</h2>
                <div className="flex flex-wrap justify-center gap-6 px-4 sm:px-8 py-8">
  {searchedItem.map((item) => (
     <Link to='/fooddetails' key={item.id} onClick={()=>setCard(item)} className="w-full max-w-xs sm:w-auto">
         <div
      key={item.id}
      className="bg-white rounded-2xl shadow-md overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-xl"
    >
      <img src={item.image} alt={item.name} className="w-full h-[30vh] sm:h-52 object-cover" />
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