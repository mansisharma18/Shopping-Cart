import React,{createContext,useReducer,useEffect } from 'react'
import "./App.css"
import  {products}  from './Products';
import ContextCart from './ContextCart';
import {reducer} from './reducer'

export const cartContext=createContext(); // cartContext can be any name

const initialState={
  item:products,
  totalAmount:0,
  totalItem:0
};


const Cart = () => {
   // const[item,setItem]=useState(products)......... when we were not using context api
   const[state,dispatch]=useReducer(reducer,initialState);

   // to delete individual items from cart by onClick fn
   const removeItem =(id)=> {
    return dispatch({

      type:"REMOVE_ITEM",
      payload:id
       });

   };
   // to clear cart
   const clearCart = () =>  {
    return dispatch({type:"CLEAR_CART"});
   }
   // to increment individual item
   const increment=(id) =>{
    return dispatch({
      type:"INCREMENT",
       payload:id
      });
   }
   // to dec individual item
   const decrement = (id) => {
    return dispatch({
      type: "DECREMENT",
      payload: id,
    });
  };

  // using UseEffect to update total items and amount when there is change in state.

   useEffect(()=>{
      dispatch({type:"GET_TOTAL"});
      console.log("MANSIIII")
         },[state.item]
 );

  return (
    <>
    {/* <cartContext.Provider value={products}>  ...when useReducer not used */}
    <cartContext.Provider value={{...state,removeItem,clearCart,increment,decrement}}>
        <ContextCart/>
        </cartContext.Provider>
    
    </>
  )
}

export default Cart
