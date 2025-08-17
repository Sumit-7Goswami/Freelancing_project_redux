import {configureStore} from '@reduxjs/toolkit'; 
import {CartSlice} from './Slices/CartSlice';


export const Store = configureStore({
      reducer : {
            cart : CartSlice.reducer ,
      } , 
}) ; 


// redux.js:426 Store does not have a valid reducer. Make sure the argument passed to combineReducers is an object whose values are reducers.
