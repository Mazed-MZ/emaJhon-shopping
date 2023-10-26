import React from 'react';
import Products from './Products/Products';
import Order from './Order/Order';
import './Shop.css';

export default function Shop() {
    return (
        <div className='shop-container'>
            <div>
                <Products></Products>
            </div>
            <div className='order-section'>
                <Order></Order>
            </div>
        </div>
    )
}
