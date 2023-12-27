/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import './Products.css'
const Products = (props) => {
    // eslint-disable-next-line react/prop-types
 
    const {img,name,seller,quantity,price,ratings} = props.product
    const handleAddToCart = props.handleAddToCart

    

    return (
        <div className='products'>
            <img src={img} alt="" />
            <div className="product-info">
            <h5 className='product-name'>{name}</h5>
            <p className='product-price'>Price$ {price}</p>
            <p>Manufacturer: {seller}</p>
            <p>Ratings: {ratings}</p>
            </div>
            <button onClick={()=>handleAddToCart(props.product)} className='button-cart'>Add to cart</button>
        </div>
    );
};

export default Products;