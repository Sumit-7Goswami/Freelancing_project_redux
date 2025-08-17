import React from 'react'
import { MdDeleteForever } from "react-icons/md";
import toast from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { remove } from '../redux/Slices/CartSlice';

const CartItem = ({item , itemIndex }) => {

      const dispatch = useDispatch();

      const onRemoveCart = () => {
            // Dispatch an action to remove the item from the cart
            // Assuming you have a Redux action called 'remove' to handle this
            // dispatch(remove(item.id));
            console.log(`Removing item with id: ${item.id}`);


            dispatch(remove(item.id));

            toast.success("item removed from the cart");

      }; 

  return (
    <div className="flex justify-center items-center w-full my-4">
      <div className="flex flex-row border border-gray-300 p-4 rounded-lg w-full max-w-2xl bg-gray-50">
        <div className="h-[150px] w-[150px] flex items-center justify-center bg-white rounded-lg overflow-hidden">
          <img className="h-full w-full object-contain" src={item.image} alt="" />
        </div>
        <div className="flex flex-col justify-between m-7 w-1/2">
          <h1 className="text-gray-700 font-semibold text-lg text-left truncate w-full mt-1">{item.title}</h1>
          <h1>{item.description.split(" ").slice(0, 10).join(" ") + "..."}</h1>
          <div className="flex flex-row items-center justify-between mt-5">
            <p className="font-bold text-green-500">${item.price}</p>
            <div onClick={onRemoveCart} className="bg-red-300 rounded-lg p-5 cursor-pointer">
              <MdDeleteForever className="text-2xl" />
            </div>
          </div>
        </div>

      </div>
             
    </div>
    
  )
}

export default CartItem