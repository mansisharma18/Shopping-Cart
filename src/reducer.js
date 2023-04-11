 export const reducer=(state,action) =>{
    if (action.type=== "REMOVE_ITEM"){
        return{
            ...state,
            item:state.item.filter((curElem) => {
                return curElem.id !== action.payload; // filtering out and returning only curElem whose id doesnt match action.payload
            }
            )
        }
    }
    if(action.type==="CLEAR_CART"){
        return{
            ...state,
            item:[]
        };
    }
   if(action.type==="INCREMENT"){
        let updatedCart = state.item.map((curElem)=>{
            if(curElem.id===action.payload){
                return{...curElem, quantity:curElem.quantity+1};
            }
            return curElem;
        });
        return {...state, item:updatedCart};
        
    } 
        
    
   if (action.type === "DECREMENT") {
        const updatedCart = state.item
          .map((curElem) => {
            if (curElem.id === action.payload) {
              return { ...curElem, quantity: curElem.quantity - 1 };
            }
            return curElem;
          })
          .filter((curElem) => {               // filtering and returning only curElem whose quantity!=0
            return curElem.quantity !== 0});
        return { ...state, item: updatedCart };
      } 
      if (action.type==="GET_TOTAL"){
         let{totalItem}=state.item.reduce(   // totalItem from initalstate value
            (accumulator,curVal)=>{
                let{quantity}=curVal;      // since array of objects so determine which current element of array
                accumulator.totalItem += quantity
                return accumulator;
            },{totalItem:0});

          let{totalAmount}=state.item.reduce(
            (accumulator,curValue)=>{
                let{price,quantity}=curValue;    // let has local scope so we can use curValue here also
                let updatedTotalAmount= price*quantity;
                accumulator.totalAmount += updatedTotalAmount;
                return accumulator;
            },{totalAmount:0});

            return{...state,totalItem,totalAmount}
  }








return state;

}