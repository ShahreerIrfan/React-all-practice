/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import './TShirt.css'

const Tshirt = ({tshirt,handleAddToCart}) => {
    const {name,price,picture,_id,gender,index} = tshirt
    return (
        <div className='t-shirt'>
            <img src={picture} alt="" />
            <h4>Name: {name}</h4>
            <h5>Price: {price}$</h5>
            <button onClick={()=>handleAddToCart(tshirt)}>Buy Now</button>
        </div>
    );
};

export default Tshirt;