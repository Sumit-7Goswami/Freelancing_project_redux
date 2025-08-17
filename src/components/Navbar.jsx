import React from 'react'
import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from 'react-redux';
import { NavLink, useSearchParams } from 'react-router-dom';

const Navbar = () => {

  const {cart} = useSelector((state) => state) ; // Access the cart state from Redux store
  // useSelector is a hook that allows you to extract data from the Redux store state.

  return (
    <nav className='flex flex-row justify-between items-centet h-20 max-w-6xl mx-auto'>


      <NavLink to="/"> 
        <div className='ml-5 flex items-center h-20'>
          <img 
            className='w-12 h-12 object-contain' 
            src="/logo.png" 
            alt="logo" 
          /> 
        </div>  
      </NavLink> 


    <div className='flex  items-center font-medium text-slate-100 mr-5 space-x-6 '>

        <NavLink to="/">

          <p>Home</p>

        </NavLink>

        <NavLink to="/cart">

          <div className='relative'>
            <FaShoppingCart  className='text-2xl' />

            {
              cart.length > 0 &&
              <span className='bg-green-500 text-white text-xs font-semibold absolute -top-1 -right-2 w-5 h-5 flex justify-center items-center rounded-full animate-bounce '>
                {cart.length} 
              </span>
            }
          </div>

        </NavLink >

      </div>


    </nav>
  )
}

export default Navbar