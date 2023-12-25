/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';

const Knob = (props) => {
    return (
        <div style={{border:'2px solid red',padding:'4px',borderRadius:'5px',marginTop:'5px'}}>
            <p>This is intside knob component</p>
            <h2>Knob update value is {props.steps*0.5}</h2>
        </div>
    );
};

export default Knob;