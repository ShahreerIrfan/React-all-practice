// eslint-disable-next-line no-unused-vars
import React from 'react';
import './Country.css'

const country = (props) => {
    console.log(props.country)
    const {area,region,population,name,flags} = props.country
    return (
        <div className='country bg-warning'>
            <h3>Country name is : {name.common}</h3>
            <img src={flags.png} alt="" />
            <p>Country population is: {population}</p>
            <p>Area is: {area}</p>
            <h5>Regioun is : {region}</h5>
            
        </div>
    );
};

export default country;