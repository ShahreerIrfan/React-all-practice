/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import Special from '../Specail/Special';

const MySelf = ({ring}) => {
    return (
        <div>
            <h2>My Self</h2>
            <Special
            ring ={ring}
            ></Special>
        </div>
    );
};

export default MySelf;