import React, { useEffect, useState } from 'react';
import './Order.css';

export default function Order({cart}) {

  // const cart = props.cart; --->> Option One <<---

  // const {cart} = props; -->> Option two <<--

  let total = 0;
  let totalShipping = 0;
  for(const product of cart){
    total = total + product.price;
    totalShipping = totalShipping + product.shipping;
  }
  const tax = total*7/100;
  const grandTotal = total + totalShipping + tax;

  return (
    <div className='order-cart'>
      <h2>Order summury</h2>
      <h4>Selected Items: {cart.length}</h4>
      <h4>Total Price: ${total}</h4>
      <h4>Total shipping charge: ${totalShipping}</h4>
      <h4>Tax added: ${tax.toFixed(2)}</h4>
      <h4>Grand Total: ${grandTotal.toFixed(2)}</h4>
    </div>
  )
}
