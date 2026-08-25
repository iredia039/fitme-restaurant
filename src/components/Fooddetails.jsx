// import React from 'react';

// function Fooddetails({ card }) {
// if (!card) {
//     return <p>nothing clicked</p>
// } else {
//     return (
//         <div>
//             <img src={card.image} alt="" />
//             <h1>{card.name}</h1>
//             <h2>{card.cuisine}</h2>
//             <div>
//                 {card.ingredients.map((item)=>(
//                     <p>{item}</p>
//                 ))}
//             </div>
//         </div>
//     )
// }

//  if (!card) {
//     return <p className="text-center py-10 text-gray-500">nothing clicked</p>;
//   }

//   return (
//     <div className="px-8 py-8 bg-black">
    
//       <div className="flex gap-6 items-start">
//         <img
//           src={card.image}
//           alt={card.name}
//           className="w-64 h-48 object-cover rounded-2xl shadow-md"
//         />
//         <div className="flex-1">
//           <h1 className="text-2xl font-bold">{card.name}</h1>
//           <p className="text-gray-500 text-sm mt-1">{card.cuisine}</p>
//           <div className="flex gap-4 items-center mt-3 text-sm text-gray-600">
            
//             <span className="text-green-600 font-semibold">★ 4.0</span>
//             <span>100+ ratings</span>
//             <div className='h-[5vh] bg-gray-600 w-0.5'></div>
//             {/* <span>|</span> */}
//             <span>30 Mins <br /> Delivery Time</span>
//             {/* <span>|</span> */}
//             <div className='h-[5vh] bg-gray-600 w-0.5'></div>


//             <p>$200 <br /> for each</p>
//           </div>
//         </div>

//         <div className='border border-dotted border-amber-600'>
//             <h3>offer</h3>
//             <p>ends</p>
//         </div>
//       </div>
    

      
//       <div className="mt-8 bg-white rounded-2xl shadow-md p-6 max-w-xl">
//         <h2 className="font-semibold text-lg mb-3">Ingredients</h2>
//         <div className="flex flex-col gap-1">
//           {card.ingredients.map((item, i) => (
//             <p key={i} className="text-gray-600 text-sm">{item}</p>
//           ))}
//         </div>
//       </div>
//     </div>
//   );


//     return (
//         <div>
            
//         </div>
//     );
// }

// export default Fooddetails;

import React from 'react';

function Fooddetails({ card }) {
  if (!card) {
    return <p className="text-center py-10 text-gray-500">nothing clicked</p>;
  }

  return (
    <>
    <div className="px-8 py-8 bg-black">
      <div className="flex justify-around items-start gap-6">
        <img
          src={card.image}
          alt={card.name}
          className="w-64 h-48 object-cover rounded-2xl shadow-md"
        />

        <div>
          <h1 className="text-2xl font-bold">{card.name}</h1>
          <p className="text-gray-500 text-sm mt-1">{card.cuisine}</p>
          <div className="flex gap-4 items-center mt-3 text-sm text-gray-600">
            <span className="text-green-600 font-semibold">★ 4.0</span>
            <span>100+ ratings</span>
            <div className="h-[5vh] bg-gray-600 w-0.5"></div>
            <span>30 Mins <br /> Delivery Time</span>
            <div className="h-[5vh] bg-gray-600 w-0.5"></div>
            <p>$200 <br /> for each</p>
          </div>
        </div>

        <div className="border border-dashed border-amber-600 p-6 rounded-lg h-[15vh]">
          <h3 className="font-semibold text-3xl text-amber-600">offers</h3>
          <p className="text-sm text-white">50% off up to ₹100 | Use code TRYNEW</p><br />
          <p className="text-sm text-white">20% off | Use code PARTY</p>
        </div>
      </div>
      
    </div>


    {/* Below the hero */}
<div className="grid grid-cols-3 gap-6 px-8 py-8">

  {/* Recommended sidebar */}
  <div>
    <p className="text-orange-500 font-semibold text-sm mb-2">Recommended</p>
    <ul className="text-sm text-gray-600 flex flex-col gap-2">
      <li>Breakfast Box</li>
      <li>Lunch Box</li>
      <li>Combo Box</li>
      <li>Biriyani Box</li>
    </ul>
  </div>

  {/* Dish detail */}
  <div className="col-span-1 flex justify-between border-r pr-6">
    <div>
      <h2 className="font-semibold">{card.name}</h2>
      <p className="mt-1 font-bold">$200</p>
      <p className="text-gray-500 text-sm mt-2 max-w-sm">
        {card.instructions}
      </p>
    </div>
    <div className="flex flex-col items-center gap-2">
      <img src={card.image} alt="" className="w-24 h-24 object-cover rounded-lg" />
      <button className="text-green-600 text-sm font-semibold">Add +</button>
    </div>
  </div>

  {/* Cart */}
  <div>
    <div className="flex justify-between font-semibold">
      <span>Cart</span>
      <span className="text-gray-400 text-sm">0 items</span>
    </div>
    {/* cart items would map here once you have cart state */}
    <div className="flex justify-between mt-4 font-bold">
      <span>Subtotal</span>
      <span>₹0</span>
    </div>
    <button className="bg-orange-500 text-white w-full py-2 rounded-lg mt-3">
      Checkout
    </button>
  </div>

</div>
</>
  );
}

export default Fooddetails;