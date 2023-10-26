import React from 'react';
import './Navbar.css';
import Logo from '../../images/Logo.svg';

export default function Navbar() {
    return (
        <nav className='navbar'>
            <div>
                <img src={Logo} alt="" />
            </div>
            <div className='tab'>
                <a href="/shop">Shop</a>
                <a href="/order">Order</a>
                <a href="/inventory">Inventory</a>
                <a href="/login">Login</a>
            </div>
        </nav>
    )
}
