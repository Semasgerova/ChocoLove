import React from 'react'
import { LinkContainer } from 'react-router-bootstrap'

const Cart = () => {
  return (
    <div className='cart'>
       <div className="main d-flex flex-column justify-content-center align-items-center h-100">
        <h1>Cart</h1>
        <p className='py-3'><LinkContainer to='/shop'><span>Product</span></LinkContainer> // Cart</p>
      </div>
    </div>
  )
}

export default Cart