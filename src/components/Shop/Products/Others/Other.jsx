import React, { useEffect, useState } from 'react'
import OtherCart from './OtherCart';
import '../Product.css';

export default function Other() {

  const [other, setOther] = useState([]);

    useEffect(() => {
        fetch('others.json')
            .then(res => res.json())
            .then(data => setOther(data))
    }, [])

  return (
    <div>
      <div className='products'>
        <h3>Tools Track</h3>
        <div className='product-container'>
          {
            other.map(items => <OtherCart key={items.id} items={items}></OtherCart>)
          }
        </div>
      </div>
    </div>
  )
}
