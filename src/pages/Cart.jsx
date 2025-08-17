import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom';
import CartItem from '../components/CartItem';
import { useEffect, useState } from 'react';

const Cart = () => {

  const { cart } = useSelector((state) => state);
  // useSelector is a hook that allows you to extract data from the Redux store state.
  // In this case, it retrieves the 'cart' state from the Redux store.

  const [total, setTotalAmount] = useState(0);


  const totalAmount = cart.reduce((accumulator, item) => {
    return accumulator + item.price;
  }, 0);  


  useEffect(() => {
    setTotalAmount(totalAmount);
  }, [cart, totalAmount]);
  // please explain this useEffect hook , why we are giving two dependencies here
  // The useEffect hook is used to update the total amount whenever the cart or totalAmount changes.

  return (
    //pput background color
    <div className="bg-gray-50 min-h-screen">
      <div>
        {
          cart.length > 0 ?
            (
              <div className='flex flex-row justify-center items-center flex-wrap md:flex-nowrap'>
                <div className='flex flex-col items-center justify-between gap-3 p-4 mt-10 ml-0 w-full md:ml-5 md:w-auto'>
                  {
                    cart.map((item, index) => (
                      <CartItem key={item.id} item={item} itemIndex={index} />
                    ))
                  }
                </div>
                <div className='flex flex-col justify-center items-center w-full md:w-auto md:fixed md:right-5 md:top-1/2 bg-white p-6 md:p-8 rounded-xl shadow-2xl border border-gray-200 min-w-[260px] max-w-full md:max-w-xs mt-8 md:mt-0'>
                  <div className="mb-6 w-full text-center">
                    <p className="text-lg font-semibold text-gray-700 mb-2">Your Cart</p>
                    <h1 className="text-2xl font-bold text-green-600 mb-2">Summary</h1>
                    <p className="text-base text-gray-600">
                      <span className="font-medium">Total Items:</span> <span className="font-bold text-gray-800">{cart.length}</span>
                    </p>
                  </div>
                  <div className='flex flex-col items-center justify-center gap-4 mt-2 w-full'>
                    <div>
                      <p className="text-xl font-bold text-gray-800">
                        Total Amount: <span className="text-green-500">${total}</span>
                      </p>
                    </div>
                    <div>
                      <button className='bg-green-500 text-white px-6 py-3 rounded-full font-semibold text-lg shadow hover:bg-green-600 transition duration-200'>
                        Checkout Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )
            :
            (
              <div className="flex flex-col items-center justify-center min-h-[60vh] bg-gradient-to-br from-green-100 via-white to-green-50 rounded-xl shadow-lg mx-auto mt-20 p-4 md:p-8 w-full max-w-lg">
                <img
                  src="/logo.png"
                  alt="Clothing Logo"
                  className="w-16 h-16 md:w-20 md:h-20 object-contain mb-6 drop-shadow-lg"
                />
                <h1 className="text-2xl md:text-3xl font-bold text-green-700 mb-4 text-center">
                  Welcome to Clothing! Enjoy
                </h1>
                <NavLink to="/">
                  <button className="mt-5 px-6 py-2 md:px-8 md:py-3 bg-green-500 text-white rounded-full font-semibold text-lg shadow hover:bg-green-600 transition duration-200">
                    Shop Now
                  </button>
                </NavLink>
              </div>
            )
        }
      </div>
    </div>
  )
}

export default Cart