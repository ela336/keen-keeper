import React from 'react';
import { FaPlus } from "react-icons/fa";

const Hero = () => {
    return (
        <div className='bg-[#F8FAFC] text-center p-6 space-y-5'>
            <h2 className='font-bold text-[48px] text-center'>Friends to keep close in your life</h2>
            <p className='text-[18px] text-[#64748B] text-center '>Your personal shelf of meaningful connections. Browse, tend, and nurture the <br />
relationships that matter most.</p>

<button className='bg-[#244D3F] text-white mx-auto flex items-center justify-center p-3 rounded-[5px]'><FaPlus className='text-white' /><p>Add a Friend</p></button>

        </div>
    );
};

export default Hero;