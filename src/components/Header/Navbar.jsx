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
                <a href="/shop">shop</a>
                <a href="/order">order</a>
                <a href="/inventory">inventory</a>
                <a href="/login">login</a>
            </div>
        </nav>
    )
}
