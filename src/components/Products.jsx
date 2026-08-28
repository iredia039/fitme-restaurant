import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Products = ({search, setCard}) => {


   let [products, setProducts] = useState([])
     

      useEffect(() => {
         fetch('https://dummyjson.com/recipes')
         .then(res => {
           return res.json()
         })
         .then(data =>{
            setProducts(data.recipes)
         })
      }, [])


      const searchedItem = products.filter((item) => item.name.toLowerCase().includes(search.toLowerCase()))

      const nearby = searchedItem.slice(0, 4)
      const recommended = searchedItem.slice(4, 8)

      // console.log(nearby);
      


    return ( 

        <>

        <h2>Nearby restaurant</h2>


        <div className="flex flex-col lg:flex-row lg:justify-around gap-6">
          <div>
          <h2 className="px-4 sm:px-8">nearby restaurant</h2>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 px-4 sm:px-8 py-8">
  {nearby.map((item) => (
     <Link to='/fooddetails' key={item.id} onClick={()=>setCard(item)}>
         <div
      key={item.id}
      className="bg-white rounded-2xl shadow-md overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-xl"
    >
      <img src={item.image} alt={item.name} className="w-full h-40 object-cover" />
      <div className="p-3">
        <h2 className="font-semibold text-sm truncate">{item.name}</h2>
        <p className="text-gray-500 text-xs mt-1">{item.cuisine}</p>
      </div>
    </div>
     </Link>
  ))}
</div>
</div>

<div>
  <h2 className="px-4 sm:px-8">recommended</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 px-4 sm:px-8 py-8">
  {recommended.map((item) => (
     <Link to='/fooddetails' key={item.id} onClick={()=>setCard(item)}>
         <div
      key={item.id}
      className="bg-white rounded-2xl shadow-md overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-xl"
    >
      <img src={item.image} alt={item.name} className="w-full h-40 object-cover" />
      <div className="p-3">
        <h2 className="font-semibold text-sm truncate">{item.name}</h2>
        <p className="text-gray-500 text-xs mt-1">{item.cuisine}</p>
      </div>
    </div>
     </Link>
  ))}
</div>
</div>
        </div>
        </>
     );
}
 
export default Products;