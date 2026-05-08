import React from 'react';
import Navbar from '../navbar/Navbar.jsx';
import { Outlet } from 'react-router';
import Footer from '../components/Footer.jsx';

const Mainlayout = () => {
    return (
        <div>
            <Navbar/>
            <Outlet/>
            <Footer/>




        </div>
    );
};

export default Mainlayout;