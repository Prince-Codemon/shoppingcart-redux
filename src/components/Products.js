import React from 'react'
import { useState, useEffect } from 'react'
import { add } from '../store/cartSlice'
import { useDispatch,useSelector } from 'react-redux'
import { fetchProducts, STATUSES } from '../store/productSlice'
import Skelton from './Skelton'
const Products = () => {
    const dispatch = useDispatch()
    const {data : products, status} = useSelector((state)=>state.products)
    
    const handleAdd =(product)=>{
            dispatch(add(product))
    }
    useEffect(()=>{
     dispatch(fetchProducts())
     
    //  const fetchProducts = async()=>{
    // const res = await fetch("https://fakestoreapi.com/products")
    // const data = await res.json()

    // setProducts(data)
    //  }
    //  fetchProducts()
    },[])

  
    if(status === STATUSES.ERROR){
        return <h2>
            something went wrong
        </h2>
    }
  return (
    <div className='productsWrapper'>
        {status === STATUSES.LOADING && <Skelton count={12}/>}
 {
    products.map((product)=>(
        <div className="card" key={product.id}>
            <img src={product.image} alt="product" />
            <h1>{product.title}</h1>
            <h5>{product.price}</h5>
            <button className='btn' onClick={()=>handleAdd(product)}>Add to Cart</button>
        </div>

    ))
 }
    </div>
  )
}

export default Products