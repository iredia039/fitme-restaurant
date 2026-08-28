import React from 'react';

function Fooddetails({ card, addCart, cart }) {
  if (!card) {
    return <p className="text-center py-10 text-gray-500">nothing clicked</p>;
  }

  return (
    <>
    <div className="px-4 sm:px-8 py-8 bg-black">
      <div className="flex flex-col md:flex-row md:justify-around items-center md:items-start gap-6">
        <img
          src={card.image}
          alt={card.name}
          className="w-full max-w-xs sm:w-64 h-48 object-cover rounded-2xl shadow-md"
        />

        <div>
          <h1 className="text-2xl font-bold">{card.name}</h1>
          <p className="text-gray-500 text-sm mt-1">{card.cuisine}</p>
          <div className="flex flex-wrap gap-4 items-center mt-3 text-sm text-gray-600">
            <p className="font-semibold"><span className='text-green-600'>&#x2605;</span> 4.0</p>
            <span>100+ ratings</span>
            <div className="hidden sm:block h-[5vh] bg-gray-600 w-0.5"></div>
            <span>30 Mins <br /> Delivery Time</span>
            <div className="hidden sm:block h-[5vh] bg-gray-600 w-0.5"></div>
            <p>$200 <br /> for each</p>
          </div>
        </div>

        <div className="border border-dashed border-amber-600 p-6 rounded-lg h-auto sm:h-[15vh]">
          <h3 className="font-semibold text-3xl text-amber-600">offers</h3>
          <p className="text-sm text-white">50% off up to ₹100 | Use code TRYNEW</p><br />
          <p className="text-sm text-white">20% off | Use code PARTY</p>
        </div>
      </div>
      
    </div>

<div className="grid grid-cols-1 sm:grid-cols-3 gap-6 px-4 sm:px-8 py-8">

  <div>
    <p className="text-orange-500 font-semibold text-sm mb-2">Recommended</p>
    <ul className="text-sm text-gray-600 flex flex-col gap-2">
      <li>Breakfast Box</li>
      <li>Lunch Box</li>
      <li>Combo Box</li>
      <li>Biriyani Box</li>
    </ul>
  </div>

  <div className="sm:col-span-1 flex flex-col sm:flex-row justify-between gap-4 sm:border-r sm:pr-6">
    <div>
      <h2 className="font-semibold">{card.name}</h2>
      <p className="mt-1 font-bold">$200</p>
      <p className="text-gray-500 text-sm mt-2 max-w-sm">
        {card.instructions}
      </p>
    </div>
    <div className="flex flex-col items-center gap-2">
      <img src={card.image} alt="" className="w-24 h-24 object-cover rounded-lg" />
      <button className="text-green-600 text-sm font-semibold cursor-pointer" onClick={() => addCart(card)}>Add +</button>
    </div>
  </div>


</div>
</>
  );
}

export default Fooddetails;