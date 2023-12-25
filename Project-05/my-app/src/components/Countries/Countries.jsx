// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import Country from '../Country/country';
import './Countries.css'

const Countries = () => {
    const [countries, setCountries] = useState([])
    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountries(data))
    }, [])
    return (
        <>
            <h3>Hello mello tello Countries are: {countries.length}</h3>
            <div className='countries-container'>
                {
                    // eslint-disable-next-line react/jsx-key
                    countries.map(country => <Country
                        country={country}
                        key = {country.cca3}
                    ></Country>)
                }
            </div>
        </>
    );
};

export default Countries;