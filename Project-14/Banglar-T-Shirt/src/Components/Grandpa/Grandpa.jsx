/* eslint-disable no-unused-vars */
import React from 'react';
import Father from '../Father/Father';
import Uncle from '../Uncle/Uncle';
import Aunty from '../Aunty/Aunty';
import './Grandpa.css'
import MySelf from '../MySelf/MySelf';
import Brother from '../Brother/Brother';

const Grandpa = () => {
    return (
        <div className='grandpa'>
            <h3 className='grandpa'>GrandPa</h3>
            <section className='flex'>
                <Father></Father>
                <Uncle></Uncle>
                <Aunty></Aunty>
            </section>
        </div>
    );
};

export default Grandpa;