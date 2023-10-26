import React, { useEffect, useState } from 'react';
import Products from './Products/Products';
import Order from './Order/Order';
import './Shop.css';
import { addToDb, getShoppingCart } from '../../utilities/fakedb';

export default function Shop() {

    const [product, setProduct] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(() => {
        fetch(`https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json`)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [])
    useEffect(()=>{
        const storedCart = getShoppingCart();
        console.log(storedCart);
    },[])
    const handleAddToCart = (product) => {
        const newCart = [...cart, product];
        setCart(newCart);
        addToDb(product.id)
    }
    return (
        <div className='shop-container'>
            <div className='product-container'>
                {
                    product.map(items => <Products key={items.id} items={items} handleAddToCart={handleAddToCart}></Products>)
                }
            </div>
            <div className='order-section'>
                <div>
                    <Order cart={cart}></Order>
                    {/* {
                        cart.map(cartinfo => <Order key={cartinfo.id} cartinfo={cartinfo}></Order>)
                    } */}
                </div>
            </div>
        </div>
    )
}
