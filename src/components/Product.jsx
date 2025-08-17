import React from 'react'
import toast from 'react-hot-toast';
import { useSelector, useDispatch } from 'react-redux';
import { add, remove } from '../redux/Slices/CartSlice';

const Product = ({ post }) => {

      const { cart } = useSelector((state) => state);
      const dispatch = useDispatch();

      const addToCart = () => {
            dispatch(add(post));
            toast.success("Item added to cart");
      }

      const removeFromCart = () => {
            dispatch(remove(post.id));
            toast.error("Item removed from cart");
      }



      return (
            <div className='flex flex-col items-center justify-between gap-3 p-5 mt-10 ml-5 rounded-2xl outline outline-gray-200 bg-white transition duration-300 ease-in hover:scale-105 hover:shadow-2xl transition-shadow cursor-pointer'>

                  <div>
                        <p className='text-gray-800 font-bold text-lg text-center truncate w-44 mt-2'>{post.title}</p>
                  </div>

                  <div>
                        <p className='w-44 text-gray-500 font-normal text-sm text-center'>{post.description.split(" ").slice(0, 10).join(" ") + "..."}</p>
                  </div>

                  <div className='h-[160px] w-[160px] flex items-center justify-center bg-gray-100 rounded-xl overflow-hidden'>
                        <img src={post.image} className='h-full w-full object-contain' alt="" />
                  </div>

                  <div className='flex gap-8 items-center justify-between w-full mt-6'>
                        <div>
                              <p className='text-green-600 font-bold text-lg'>${post.price}</p>
                        </div>

                        <div className='text-gray-700 font-semibold border-2 border-gray-700 text-xs flex items-center gap-2 cursor-pointer rounded-full py-2 px-4 uppercase hover:bg-gray-700 hover:text-white transition duration-300 ease-in-out'>
                              {
                                    cart.some((item) => item.id === post.id) ?
                                          (
                                                <button onClick={removeFromCart}>
                                                      Remove item
                                                </button>
                                          )
                                          :
                                          (
                                                <button onClick={addToCart}>
                                                      Add to Cart
                                                </button>
                                          )
                              }
                        </div>
                  </div>
            </div>
      )
}

export default Product