import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { remove } from '../store/cartSlice'

const Cart = () => {
    
    const products =useSelector((state)=>state.cart)
    const dispatch= useDispatch()
    const handleRemove = (id) => {
       dispatch(remove(id))
      }
  return (
    <div style={{ width: "100%" }}>
      <h3>Cart</h3>
      <div className="cartWrapper" style={{ width: "100%" }}>
        {products.map((product) => (
          <div className="cartCard">
            <img src={product.image} alt="" />
            <h5>{product.title}</h5>
            <h5>{product.price}</h5>
            <button className="btn" onClick={()=>handleRemove(product.id)}>Remove</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cart