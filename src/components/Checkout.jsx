import React from 'react';
import { FaMapMarkerAlt } from "react-icons/fa";

function Checkout({ cart }) {

  const itemTotal = cart.reduce((sum, item) => sum + (item.price || 200) * item.quantity, 0);
  const deliveryFee = 130;
  const taxes = 20;
  const discount = 4000;
  const total = itemTotal + deliveryFee + taxes - discount;

  return (
    <div className="px-8 py-8 max-w-6xl mx-auto">
      <h2 className="text-xl font-bold border-b pb-3 mb-6">Secure Checkout</h2>

      <div className="grid grid-cols-3 gap-10">

        {/* Left: form */}
        <div className="col-span-2">

          {/* Delivery address */}
          <div className="mb-8">
            <h3 className="flex items-center gap-2 font-semibold mb-3">
              <FaMapMarkerAlt className="text-orange-500" /> Delivery address
            </h3>
            <div className="flex gap-4">
              <div className="text-left text-sm p-4 rounded-lg border w-64 flex gap-2 items-start bg-[#FC8019] text-white border-[#FC8019]">
                <FaMapMarkerAlt className="mt-0.5 shrink-0" />
                <span>Dno. 12-34-12, XYC Apartments, DOOR Colony, Hyderabad, Telangana</span>
              </div>
              <div className="text-left text-sm p-4 rounded-lg border w-64 flex gap-2 items-start border-gray-300 text-gray-700">
                <FaMapMarkerAlt className="mt-0.5 shrink-0" />
                <span>Dno. 12-34-12, XYC Apartments, DOOR Colony, Hyderabad, Telangana</span>
              </div>
            </div>
          </div>

          {/* Type of order */}
          <div className="mb-6">
            <h3 className="flex items-center gap-2 font-semibold mb-3">
              <FaMapMarkerAlt className="text-orange-500" /> Type of Order
            </h3>
            <div className="flex gap-3">
              <div className="text-sm font-medium px-4 py-2 rounded-lg border bg-[#FC8019] text-white border-[#FC8019]">
                Subscription
              </div>
              <div className="text-sm font-medium px-4 py-2 rounded-lg border border-gray-300 text-gray-600">
                Schedule Order
              </div>
              <div className="text-sm font-medium px-4 py-2 rounded-lg border border-gray-300 text-gray-600">
                Order Now
              </div>
            </div>
          </div>

          {/* Subscription details */}
          <div className="flex gap-8 border-b mb-6">
            <div className="pb-3 text-sm font-medium text-[#FC8019] border-b-2 border-[#FC8019]">Monthly</div>
            <div className="pb-3 text-sm font-medium text-gray-500">Weekly</div>
            <div className="pb-3 text-sm font-medium text-gray-500">Custom</div>

            <div className="ml-auto pb-3">
              <p className="text-xs text-gray-500 mb-1">What's the plan?</p>
              <div className="flex border rounded-lg overflow-hidden">
                <div className="text-xs px-3 py-1.5 bg-[#FC8019] text-white">3-Days/Week</div>
                <div className="text-xs px-3 py-1.5 border-l text-gray-600">5-Days/Week</div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 mb-6">
            <div>
              <label className="text-sm font-medium block mb-2">What time do you want us to deliver?</label>
              <p className="border-b w-full py-1 text-sm">16:30</p>
            </div>
            <div>
              <label className="text-sm font-medium block mb-2">Any Note for us?</label>
              <div className="border rounded-lg w-full p-3 text-sm text-gray-400 h-20">
                Type you note here
              </div>
            </div>
          </div>
        </div>

        {/* Right: cart summary */}
        <div className="border rounded-2xl p-5 h-fit">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-bold">Cart</h3>
            <span className="text-gray-500 text-sm">{cart.length} Items</span>
          </div>

          {cart.map(item => (
            <div key={item.id} className="mb-4">
              <p className="text-xs text-gray-400">from <span className="text-orange-500 font-medium">Lunch box</span></p>
              <div className="flex justify-between items-center mt-1">
                <div>
                  <p className="text-sm font-medium">{item.name}</p>
                  <p className="text-xs text-gray-500 mt-0.5">₹{item.price || 200}</p>
                </div>
                <div className="flex items-center gap-2 border rounded-full px-2 py-0.5">
                  <span className="text-[#FC8019] font-bold">-</span>
                  <span className="text-xs w-3 text-center">{item.quantity}</span>
                  <span className="text-[#FC8019] font-bold">+</span>
                </div>
              </div>
            </div>
          ))}

          <hr className="my-3" />

          <p className="text-sm font-semibold mb-2">Bill details</p>
          <div className="text-sm text-gray-600 space-y-1.5">
            <div className="flex justify-between">
              <span>Item Total</span>
              <span>₹{itemTotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span>Delivery Fee (12.9 kms)</span>
              <span>₹{deliveryFee.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span>Taxes and Charges</span>
              <span>₹{taxes.toFixed(2)}</span>
            </div>
          </div>

          <p className="text-xs text-gray-400 mt-3">
            Monthly + 3 Days/Week plan + 16:30 Delivery time
          </p>

          <hr className="my-3" />

          <div className="flex justify-between text-sm text-gray-600 mb-1">
            <span>Total</span>
            <span>₹{(itemTotal + deliveryFee + taxes).toFixed(2)}</span>
          </div>
          <div className="flex justify-between text-sm text-gray-600 mb-3">
            <span>Discount</span>
            <span>-₹{discount.toFixed(2)}</span>
          </div>

          <div className="flex justify-between font-bold text-base mb-4">
            <span>Total</span>
            <span>₹{total.toFixed(2)}</span>
          </div>

          <button className="w-full bg-[#FC8019] text-white font-semibold py-3 rounded-lg">
            Proceed To Payment
          </button>
        </div>
      </div>
    </div>
  );
}

export default Checkout;