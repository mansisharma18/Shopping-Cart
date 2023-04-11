import React,{useContext} from 'react'
import { cartContext } from './Cart'

const Items = ({id,title,description,price,img,amount,quantity}) => {  // destructuring props
 const {removeItem,increment,decrement }= useContext(cartContext)
  return (
    <>
    <div className='items-info'>
                    <div className="product-img">
                        <img src={img} alt=""/>
                    </div>
                    <div className="title">
                        <h2>{title}</h2>
                        <p>{description}</p>
                    </div>
                    <div className="add-minus-quantity">
                     <i className="fas fa-minus" onClick={()=> decrement(id)}></i>
                    <input type="text" placeholder={quantity} disabled/>
                    <i className="fas fa-plus add" onClick={() =>increment(id)}></i>
                    </div>
                    <div>
                        <h3 className="price">{price}₹</h3>
                    </div>
                    <div className="remove-item">
                    <i class="fas fa-trash-alt remove "
                     onClick={() =>removeItem(id)}></i>
                    
                    </div>
                </div>
                <hr/>
    </>
      
    
  )
}

export default Items
