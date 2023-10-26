import React from 'react';
import './Product.css';
import Sneaker from './Sneakers/Sneaker';
import Pant from './Pants/Pant';
import Other from './Others/Other';
import Hat from './Hat/Hat';
import Backpack from './Backpacks/Backpack';
import Adidas from './Adidas/Adidas';

export default function Products() {

  return (
    <div>
      <Sneaker></Sneaker>
      <Pant></Pant>
      <Other></Other>
      <Hat></Hat>
      <Backpack></Backpack>
      <Adidas></Adidas>
    </div>
  )
}
