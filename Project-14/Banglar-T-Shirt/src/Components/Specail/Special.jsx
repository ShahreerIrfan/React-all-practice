/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { RingContex } from '../Grandpa/Grandpa';

const Special = ({ring}) => {
    const angti = useContext(RingContex)
    return (
        <div>
            <h2>Special</h2>
            <h4>Ring: {angti}</h4>
            <h3>Ring: {angti}</h3>
        </div>
    );
};

export default Special;