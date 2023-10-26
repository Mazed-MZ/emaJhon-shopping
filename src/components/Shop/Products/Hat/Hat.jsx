import React, { useEffect, useState } from 'react';
import HatCart from './HatCart';
import '../Product.css';

export default function Hat() {

  const [Hat, setHat] = useState([]);

    useEffect(() => {
        fetch('hat.json')
            .then(res => res.json())
            .then(data => setHat(data))
    }, [])

  return (
    <div className = 'products'>
            <h3>Hats Heap</h3>
            <div className='product-container'>
                {
                    Hat.map(items => <HatCart key={items.id} items={items}></HatCart>)
                }
            </div>
        </div >
  )
}
