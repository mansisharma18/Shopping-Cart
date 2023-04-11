import React,{useContext} from 'react'
import { Scrollbars } from 'react-custom-scrollbars-2';
import Items from './Items'; 
//import  {products}  from './Products'; .... no need z passed globally in provider
import { cartContext } from './Cart';  // In {} bcz we havent used export default with this function. 

const ContextCart = () => {
   // const[item,setItem]=useState(products)   now replaced by useContext
   const {item,clearCart,totalItem,totalAmount}= useContext(cartContext)

   if(item.length===0){
    return(
        <>
        
        <header>
        <div className="continue-shopping">
        <img src="./arrow.png" alt="arrow"  className="arrow-icon"/>
        <h3>Continue Shopping</h3>
        </div>
        <div className="cart-icon">
            <img src="./cart.png" alt="cart"/>
            <p>0</p>
        </div>
    </header>
    <section className="main-cart-section">
        <h1>Shopping Cart</h1>
        <p className="total-items">You have <span className="total-items-count">0</span> items in shopping Cart</p>
        </section>
        </>
    )
   }

  return (
    <>
    <header>
        <div className="continue-shopping">
        <img src="./arrow.png" alt="arrow"  className="arrow-icon"/>
        <h3>Continue Shopping</h3>
        </div>
        <div className="cart-icon">
            <img src="./cart.png" alt="cart"/>
            <p>{totalItem}</p>
        </div>
    </header>
    <section className="main-cart-section">
        <h1>Shopping Cart</h1>
        <p className="total-items">You have <span className="total-items-count">{totalItem}</span> items in shopping Cart</p>
        <div className="cart-items">
            <div className="cart-items-container">
            <Scrollbars>
                {
                    item.map((curItem)=>{
                          return  <Items key={curItem.id} {...curItem}/>
                    }
                    )
                }
               
                
          </Scrollbars>
            </div> 
        </div>
        <div className="card-total">
            <h3>Card total <span> {totalAmount}₹</span></h3>
            <button>Checkout</button>
            <button className="clear-cart"onClick={clearCart} >Clear Cart</button>
        </div>
    </section>
    </>
  )
}

export default ContextCart
