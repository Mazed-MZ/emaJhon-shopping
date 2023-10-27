import React, { useEffect, useState } from 'react';
import './Order.css';

export default function Order({ cart }) {

  console.log(cart)
  // const cart = props.cart; --->> Option One <<---

  // const {cart} = props; -->> Option two <<--

  let total = 0;
  let totalShipping = 0;
  let quantity = 0;
  for (const product of cart) {
    //-->> Handle quantity from storage to cart <<--
    // if(product.quantity === 0){
    //   product.quantity = 1
    // }
    // product.quantity = product.quantity || 1;
    total = total + product.price * product.quantity;
    totalShipping = totalShipping + product.shipping;
    quantity = quantity + product.quantity;
  }
  const tax = total * 7 / 100;
  const grandTotal = total + totalShipping + tax;
  console.log(quantity);

  return (
    <div className='order-cart'>
      <h2>Order Summery</h2>
      <table className="table table-warning">
        <thead>
          <tr>
            <th scope="col" colspan="2">Selected Items</th>
            <td className="table-info">{cart.length}</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="col" colspan="2">Quantity</th>
            <td className="table-info">{quantity}</td>
          </tr>
          <tr>
            <th scope="col" colspan="2">Total Price</th>
            <td className="table-info">${total}</td>
          </tr>
          <tr>
            <th scope="col" colspan="2">Total shipping charge</th>
            <td className="table-info">${totalShipping}</td>
          </tr>
          <tr>
            <th scope="col" colspan="2">Tax added</th>
            <td className="table-info">${tax.toFixed(2)}</td>
          </tr>
          <tr className="table-success">
            <th scope="col" colspan="2">Grand Total</th>
            <td className="table-info">${grandTotal.toFixed(2)}</td>
          </tr>
        </tbody>
        <button className="btn btn-outline-warning order-btn">Place Order</button>
      </table>
      {/* <h2>Order summury</h2>
      <h4>Selected Items: {cart.length}</h4>
      <h4>Quantity: {quantity}</h4>
      <h4>Total Price: ${total}</h4>
      <h4>Total shipping charge: ${totalShipping}</h4>
      <h4>Tax added: ${tax.toFixed(2)}</h4>
      <h4>Grand Total: ${grandTotal.toFixed(2)}</h4> */}
    </div>
  )
}
