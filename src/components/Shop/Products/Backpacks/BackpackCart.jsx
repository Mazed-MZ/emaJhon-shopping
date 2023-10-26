import React from 'react';
import '../Product.css';

export default function BackpackCart(props) {
  const { img, name, seller, category, id, price } = props.items;
  return (
    <div>
      <div className="card product-cart">
        <img src={img} className="card-img-top" alt="product-image" />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p>{seller}</p>
          <h3 className="card-text">${price}</h3>
          <button href="#" className="btn btn-outline-success card-btn">Add to Cart</button>
        </div>
      </div>
    </div>
  )
}
