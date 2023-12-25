/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';

const DeviceDetails = (props) => {
    console.log(props)
    return (
        <div>
            <p>Information about your device</p>
            <p>Device price is: {props.price}</p>
        </div>
    );
};

export default DeviceDetails;