/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import  { multiply,add } from '../Utilities/calculate';
import Cosmetic from '../Cosmetic/cosmetic';

const Cosmetics = () => {
    const num1 =56;
    const num2 = 67;
    const result = add(num1,num2)

    const  [cosmetics,setCosmetics] = useState([]);
    useEffect(()=>{
        fetch('data.json')
        .then(res=>res.json())
        .then(data=>setCosmetics(data))
    } ,[])
    
    
    return (
        <div>
            
            <h5>Welcome to my cosmetics store</h5>
            <h5>Total cost is {result}</h5>
            <h5>Total multiply result is: {multiply(num1,num2)}</h5>
            <p>...............................................................</p>

            {
                cosmetics.map(cosmetic=><Cosmetic 
                cosmetic = {cosmetic}
                key = {cosmetic.id}
                ></Cosmetic>)
            }
        </div>
    );
};

export default Cosmetics;