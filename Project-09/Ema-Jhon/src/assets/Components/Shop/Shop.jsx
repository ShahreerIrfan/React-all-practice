/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import './Shop.css'
import Products from '../Products/Products';

const Shop = () => {
    const[products,setProducts] = useState([])

    useEffect( ()=>{
        fetch('products.json')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])

    return (
        <div className='shop-container'>
            <div className="product-container">
                {
                    products.map(product=><Products
                        key = {product.id}
                        product = {product}
                    ></Products>)
                }
            </div>

            <div className="cart-container">
                <h3>Order summary</h3>
            </div>

        </div>
    );
};

export default Shop;