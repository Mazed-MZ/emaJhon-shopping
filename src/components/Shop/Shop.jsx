import React, { useEffect, useState } from 'react';
import Products from './Products/Products';
import Order from './Order/Order';
import './Shop.css';
import { addToDb, getShoppingCart } from '../../utilities/fakedb';
import toast from 'react-hot-toast';

export default function Shop() {

    const [product, setProduct] = useState([]);

    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('fakedata.json')
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [])

    useEffect(() => {
        const storedCart = getShoppingCart();
        const savedCart = [];
        // console.log(storedCart);
        //step-1 get id
        for (const id in storedCart) {
            //step-2 get the product by using id
            const savedProduct = product.find(products => products.id === id);
            // console.log(savedProduct);
            //step-3 get quantity of the product
            if (savedProduct) {
                const quantity = storedCart[id];
                savedProduct.quantity = quantity;
                // console.log(savedProduct);
                //step-4 add the savedProduct to the savedCart
                // savedProduct.stock = savedProduct.stock - quantity;
                savedCart.push(savedProduct);
                console.log(savedCart);
            }
            // console.log('added product', savedProduct);

        }
        //set-5 set the cart
        setCart(savedCart);
    }, [product])


    const handleAddToCart = (product) => {
        // const newCart = [...cart, product];
        //-->> Handle quantity from storage to cart <<--
        let newCart = [];
        const exists = cart.find(pd => pd.id === product.id)
        if (!exists) {
            product.quantity = 1;
            newCart = [...cart, product];
        }
        else {
            exists.quantity = exists.quantity + 1;
            exists.stock = product.stock - 1;
            if (exists.stock === 0 ) {
                exists.stock = 0;
                toast('Sorry! Stock Limited', {
                    icon: '😢',
                });
            }
            const remaining = cart.filter(pd => pd.id !== product.id)
            newCart = [...remaining, exists]
        }
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
