import React, { useEffect, useState } from 'react';
import AdidasCart from './AdidasCart';
import '../Product.css';

export default function Adidas() {

  const [adidas, setAdidas] = useState([]);

  useEffect(() => {
    fetch('adidas.json')
      .then(res => res.json())
      .then(data => setAdidas(data))
  }, [])

  return (
    <div className='products'>
      <h3>Backpack Bundle</h3>
      <div className='product-container'>
        {
          adidas.map(items => <AdidasCart key={items.id} items={items}></AdidasCart>)
        }
      </div>
    </div >
  )
}
