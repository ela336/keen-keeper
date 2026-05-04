import React from 'react';
import Navbar from '../navbar/Navbar.jsx';
import { Outlet } from 'react-router';

const Mainlayout = () => {
    return (
        <div>
            <Navbar/>
            <Outlet/>




        </div>
    );
};

export default Mainlayout;