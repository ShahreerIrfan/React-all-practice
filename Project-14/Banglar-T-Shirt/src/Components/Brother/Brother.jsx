/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { RingContex } from '../Grandpa/Grandpa';

const Brother = () => {
    const ring = useContext(RingContex)
    return (
        <div>
            <h2>Brother</h2>
            <h5>Ring: {ring}</h5>
        </div>
    );
};

export default Brother;