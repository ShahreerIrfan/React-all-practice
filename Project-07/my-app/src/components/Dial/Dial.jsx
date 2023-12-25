/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import Knob from '../knob/Knob';

const Dial = (props) => {
    return (
        <div style={{border:'2px solid black',padding:'5px',marginTop:'5px'}}>
            <p>This is Dial component</p>
            <h3>Toyr spet is count: {props.steps}</h3>
            <Knob steps = {props.steps}></Knob>
        </div>
    );
};

export default Dial;