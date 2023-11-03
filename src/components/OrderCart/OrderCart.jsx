import React, { useState } from 'react';
import OrderReviewCart from './OrderReviewCart';
import './OrderCart.css';
import { useLoaderData } from 'react-router-dom';
import ReviewCart from './ReviewCart';
import { deleteShoppingCart, removeFromDb } from '../../utilities/fakedb';
import Order from '../Shop/Order/Order';

export default function OrderCart() {

    const savedCart = useLoaderData([]);
    const [remove, setRemove] = useState(savedCart);

    const handleRemoveFromCart = (id) =>{
        const remaining = remove.filter(product => product.id !== id);
        setRemove(remaining);
        removeFromDb(id)
    };

    const handleClearCart = () =>{
        setRemove([]);
        deleteShoppingCart();
    }
    
    console.log(remove)

    return (
        <div>
            <div className='shop-container'>
                <div>
                    {
                        savedCart.map(review => <ReviewCart key={review.id} review={review} handleRemoveFromCart={handleRemoveFromCart}></ReviewCart>)
                    }
                </div>
                <div className='order-section'>
                    <div>
                        {/* <OrderReviewCart remove={remove} handleClearCart={handleClearCart}></OrderReviewCart> */}
                        <Order cart={remove} handleClearCart={handleClearCart}></Order>
                    </div>
                </div>
            </div>
        </div>
    )
}
