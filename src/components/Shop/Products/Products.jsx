import React from 'react';
import './Product.css';

export default function Products(props) {

  const { img, name, seller, category, id, price } = props.items;
  const handleAddToCart = props.handleAddToCart;

  return (
    <div>
      {/* <Sneaker></Sneaker>
      <Pant></Pant>
      <Other></Other>
      <Hat></Hat>
      <Backpack></Backpack>
      <Adidas></Adidas> */}

      <div className="card product-cart">
        <img src={img} className="card-img-top" alt="product-image" />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p>{seller}</p>
          <h3 className="card-text">${price}</h3>
          <button className="btn btn-outline-success card-btn" onClick={() => handleAddToCart(props.items)}>Add to Cart</button>
        </div>
      </div>
    </div>
  )
}
