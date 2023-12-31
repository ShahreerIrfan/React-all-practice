/* eslint-disable no-unused-vars */
import React, { createContext } from 'react';
import Father from '../Father/Father';
import Uncle from '../Uncle/Uncle';
import Aunty from '../Aunty/Aunty';
import './Grandpa.css'
import MySelf from '../MySelf/MySelf';
import Brother from '../Brother/Brother';

export const RingContex = createContext('Goald')

const Grandpa = () => {
    const ring = 'diamond';

    return (
        <div className='grandpa'>
            <h3 className='grandpa'>GrandPa</h3>
            <RingContex.Provider value='golden Ring'>
                <section className='flex'>

                    <Father
                        ring={ring}
                    ></Father>
                    <Uncle></Uncle>
                    <Aunty></Aunty>

                </section>
            </RingContex.Provider>
        </div>
    );
};

export default Grandpa;