import React from 'react';

function Cart({ addQuantity, removeQuantity, show, setShow, cart}) {
    return (
    <>
    {show ? 
      <section  className="fixed top-10 right-0 h-screen w-72 bg-white shadow-lg z-50 p-4">
        <div>
            <h2>Cart</h2>
            <p>{cart.length} items</p>

            {cart.map(item => (
            <div key={item.id}>
                <h2>{item.name}</h2>
          </div>
            ))}
        </div>
    </section> : null}
    
    </>
    );
}

export default Cart;