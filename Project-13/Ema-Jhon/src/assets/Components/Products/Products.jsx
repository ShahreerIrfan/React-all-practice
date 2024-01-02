/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import './Products.css'
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons'

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
            <button onClick={()=>handleAddToCart(props.product)} className='button-cart'>Add to cart
            <FontAwesomeIcon icon={faShoppingCart}/>
            </button>
        </div>
    );
};

export default Products;