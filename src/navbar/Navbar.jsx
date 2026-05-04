import React from 'react';
import { CiHome } from "react-icons/ci";
import { CiTimer } from "react-icons/ci";
import { GoGraph } from "react-icons/go";
import { NavLink } from 'react-router';

const Navbar = () => {
    return (
        <div>
            <div className="navbar bg-base-100 shadow-sm px-6">
  <div className="navbar-start ">
    
    <h2 className='text-[24px] font-bold'>KeenKeeper</h2>
  </div>
 
  <div className="navbar-end gap-2">
    <NavLink to="/" className={({ isActive }) => `btn ${isActive ? 'bg-[#244D3F] text-white' : 'border-none bg-white'}`}><CiHome className='text-xl text-white'/>Home</NavLink>
     <NavLink to="/timeline" className={({ isActive }) => `btn ${isActive ? 'bg-[#244D3F] text-white' : 'border-none bg-white'}`}><CiTimer className='text-xl'/>Timeline</NavLink>
      <NavLink to="/status" className={({ isActive }) => `btn ${isActive ? 'bg-[#244D3F] text-white' : 'border-none bg-white'}`}><GoGraph className='text-xl'/>Stats</NavLink>
  </div>
</div>
        </div>
    );
};

export default Navbar;