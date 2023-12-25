/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import Dial from '../Dial/Dial';
import Knob from '../knob/Knob';

const Watch = () => {
    const [steps,setStep] = useState(0);

    const increaseStep = ()=>{
        const nextStep = steps+1;
        setStep(nextStep)
    }

    useEffect( ()=>{
        console.log(steps)
    } ,[steps])

    return (
        <div style={{border:'2px solid green',padding:'10px'}}>
            <h2>This is my smart watch</h2>
            <h3>Steps {steps}</h3>
            <button onClick={increaseStep} className='btn btn-success'>De dour</button>
            <Dial steps={steps}></Dial>

        </div>
    );
};

export default Watch;