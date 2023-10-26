import React, { useEffect, useState } from 'react';
import '../Product.css';
import PantCart from './PantCart';

export default function Pant() {

    const [pant, setPant] = useState([]);

    useEffect(() => {
        fetch('pants.json')
            .then(res => res.json())
            .then(data => setPant(data))
    }, [])
    return (
        <div className = 'products'>
            <h3>Pants Pack</h3>
            <div className='product-container'>
                {
                    pant.map(items => <PantCart key={items.id} items={items}></PantCart>)
                }
            </div>
        </div >
    )
}
