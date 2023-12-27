/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';

import Cosmetic from '../Cosmetic/cosmetic';

const Cosmetics = () => {


    const  [cosmetics,setCosmetics] = useState([]);
    useEffect(()=>{
        fetch('data.json')
        .then(res=>res.json())
        .then(data=>setCosmetics(data))
    } ,[])
    
    
    return (
        <div>
            
            <h5>Welcome to my cosmetics store</h5>

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