import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaTimes } from "react-icons/fa";

function Cart({ addQuantity, removeQuantity, show, setShow, cart }) {

  const subtotal = cart.reduce(
    (total, item) => total + (item.price || 200) * item.quantity,
    0
  );

  const navigate = useNavigate();

  return (
    <>
      {show ? (
        <section className="fixed top-0 right-0 h-screen w-96 bg-white shadow-2xl z-50 flex flex-col">

          {/* Header */}
          <div className="flex items-center justify-between px-6 py-5 border-b">
            <h2 className="text-xl font-bold">Cart</h2>
            <div className="flex items-center gap-4">
              <span className="text-gray-500 text-sm">{cart.length} Items</span>
              <button onClick={() => setShow(false)} className="text-gray-400 hover:text-black">
                <FaTimes size={16} />
              </button>
            </div>
          </div>

          {/* Items */}
          <div className="flex-1 overflow-y-auto px-6 py-4">
            {cart.length === 0 ? (
              <p className="text-gray-400 text-sm mt-10 text-center">Your cart is empty</p>
            ) : (
              cart.map(item => (
                <div key={item.id} className="flex items-center justify-between py-4 border-b last:border-none">
                  <div>
                    <p className="font-semibold text-sm">{item.name}</p>
                    <p className="text-gray-500 text-sm mt-1">₹{item.price || 200}</p>
                  </div>

                  <div className="flex items-center gap-3 border rounded-full px-3 py-1">
                    <button
                      onClick={() => removeQuantity(item.id)}
                      className="text-[#FC8019] font-bold w-4 flex items-center justify-center"
                    >
                      -
                    </button>
                    <span className="text-sm font-medium w-4 text-center">{item.quantity}</span>
                    <button
                      onClick={() => addQuantity(item.id)}
                      className="text-[#FC8019] font-bold w-4 flex items-center justify-center"
                    >
                      +
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer */}
          {cart.length > 0 && (
            <div className="px-6 py-4 border-t">
              <div className="flex items-center justify-between">
                <p className="font-semibold">Subtotal</p>
                <p className="font-semibold">₹{subtotal}</p>
              </div>
              <p className="text-xs text-gray-400 mt-1">Extra charges may apply</p>

              <button  onClick={() => { setShow(false); navigate('/checkout'); }} className="w-full bg-[#FC8019] text-white font-semibold py-3 rounded-lg mt-4 hover:bg-orange-600 transition-colors">
                Checkout
              </button>
            </div>
          )}
        </section>
      ) : null}
    </>
  );
}

export default Cart;