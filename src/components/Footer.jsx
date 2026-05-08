import React from 'react';
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
    return (
        <div className='bg-[#244D3F] p-9 '> 
            <div className='text-center space-y-2'>
                <h1 className='font-bold text-[45px] text-white'>KeenKeeper</h1>
                <p className='font-normal text-[16px] text-[#eef0f5]'>Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.</p>
                <h2 className='font-semibold text-[20px] text-white'>Social Links</h2>
                <div className='flex justify-center space-x-4'>
                    <div className='bg-white w-10 h-10 rounded-full flex justify-center items-center'><FaInstagramSquare /></div>
                    <div className='bg-white w-10 h-10 rounded-full flex justify-center items-center'><FaFacebookSquare /></div>
                    <div className='bg-white w-10 h-10 rounded-full flex justify-center items-center'><FaLinkedin /></div>
                </div>
                <div className='flex items-center justify-between mt-4'>
                    <p className='text-[#eef0f5]'>© 2026 KeenKeeper. All rights reserved.</p>
                    <div className='flex items-center justify-between gap-4'>
                        <span className='text-[#eef0f5]'>Privacy Policy </span>
                        <span className='text-[#eef0f5]'> Terms of Service </span>
                        <span className='text-[#eef0f5]' >  Cookies</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;