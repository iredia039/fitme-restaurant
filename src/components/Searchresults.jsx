import React from 'react';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import Products from './Products';
import { Link } from 'react-router-dom';

function Searchresults({ setCard }) {

    const [searchParams, setSearchParams] = useSearchParams();


    const [products, setProducts] = useState([]);

          useEffect(() => {
             fetch('https://dummyjson.com/recipes')
             .then(res => {
               return res.json()
             })
             .then(data =>{
                setProducts(data.recipes)
             })
          }, [])

    const query = searchParams.get('q') ??'';


          const searchedItem = products.filter( item => item.name.toLowerCase().includes(query.toLowerCase()))



    
    return (

        <>
                <div className="px-4 sm:px-8 py-8 bg-black min-h-screen">
            <h4 className="text-xl sm:text-2xl font-semibold text-white mb-6">results for {query}</h4>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6">
                {searchedItem.map((item) => (
        <Link to='/fooddetails' key={item.id} onClick={()=>setCard(item)} className='border cursor-pointer'>

                    <div key={item.id} className="bg-white rounded-2xl shadow-md overflow-hidden">
                        <img src={item.image} alt="" className="w-full h-32 sm:h-40 object-cover" />
                        <h2 className="p-3 font-semibold text-sm truncate">{item.name}</h2>
                    </div>
        </Link>

                ))}
            </div>
            {/* <p className="text-gray-400 mt-4">{products.length}</p> */}
        </div>
        </>
    );
}

export default Searchresults;