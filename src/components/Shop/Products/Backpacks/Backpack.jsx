import React, { useEffect, useState } from 'react';
import BackpackCart from './BackpackCart';
import '../Product.css';

export default function Backpack() {

  const [backpack, setBackpack] = useState([]);

  useEffect(() => {
    fetch('backpack.json')
      .then(res => res.json())
      .then(data => setBackpack(data))
  }, [])

  return (
    <div className='products'>
      <h3>Backpack Bundle</h3>
      <div className='product-container'>
        {
          backpack.map(items => <BackpackCart key={items.id} items={items}></BackpackCart>)
        }
      </div>
    </div >
  )
}
