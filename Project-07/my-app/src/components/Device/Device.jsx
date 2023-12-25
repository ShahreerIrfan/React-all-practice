/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react';
import DeviceDetails from '../DeviceDetails/DeviceDetails';

const Device = (props) => {
    return (
        <div>
            <h3>Device name is {props.name}</h3>
            <DeviceDetails price = {props.price}></DeviceDetails>
        </div>
    );
};

export default Device;