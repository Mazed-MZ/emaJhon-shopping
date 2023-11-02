import React from 'react';
import { useLoaderData } from 'react-router-dom';

export default function Inventory() {
    
  const data = useLoaderData();
  console.log(data)
    return (
        <div>
            <h3>This is inventory page</h3>
        </div>
    )
}
