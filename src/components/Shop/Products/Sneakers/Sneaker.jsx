import React, { useEffect, useState } from 'react'
import SneakerCart from './SneakerCart';
import '../Product.css';

export default function Sneaker() {


    const [sneaker, setSneaker] = useState([]);

    useEffect(() => {
        fetch('sneaker.json')
            .then(res => res.json())
            .then(data => setSneaker(data))
    }, [])

    const handleAddToCart = (sneaker) =>{
        console.log('product added', sneaker)
    }

    return (
        <div className='products'>
            <h2>Men's Sneakers Set</h2>
            <div className='product-container'>
                {
                    sneaker.map(items => <SneakerCart key={items.id} items={items} handleAddToCart={handleAddToCart}></SneakerCart>)
                }
            </div>
        </div>
    )
}
