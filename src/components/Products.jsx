import { useState, useEffect } from "react";

const Products = () => {


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


    return ( 

        <>

        <h2>Nearby restaurant</h2>


        {/* <div className="grid grid-cols-5 gap-2.5">
                 {products.map((item) => (
         <div key={item.id}>
            <img src={item.image} alt="" />
            <h2>{item.name}</h2>
            <p>{item.cuisine}</p>
         </div>
        ))}
        </div> */}

        <div className="grid grid-cols-5 gap-6 px-8 py-8">
  {products.map((item) => (
    <div
      key={item.id}
      className="bg-white rounded-2xl shadow-md overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-xl"
    >
      <img
        src={item.image}
        alt={item.name}
        className="w-full h-40 object-cover"
      />
      <div className="p-3">
        <h2 className="font-semibold text-sm truncate">{item.name}</h2>
        <p className="text-gray-500 text-xs mt-1">{item.cuisine}</p>
      </div>
    </div>
  ))}
</div>
        
        </>
     );
}
 
export default Products;