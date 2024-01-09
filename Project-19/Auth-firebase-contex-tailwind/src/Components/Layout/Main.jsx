/* eslint-disable no-unused-vars */
import React from 'react';
import { Outlet } from 'react-router-dom';
import Home from '../Home/Home';
import Header from '../Header/Header';

const Main = () => {
    return (
        <div>
            <Outlet></Outlet>
            <Header></Header>
            <Home></Home>
        </div>
    );
};

export default Main;