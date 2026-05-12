import React, { useState } from 'react';
import { CiHome } from "react-icons/ci";
import { CiTimer } from "react-icons/ci";
import { GoGraph } from "react-icons/go";
import { NavLink } from 'react-router';
import { RxHamburgerMenu } from "react-icons/rx";

const Navbar = () => {
  const [isopen, setopen] = useState(false);
  console.log(isopen);

  return (
    <div className="relative">
      <div className="navbar bg-base-100 shadow-sm px-6 flex justify-between">
        <div className="navbar-start">
          <h2 className="text-[24px] font-bold">KeenKeeper</h2>
        </div>

        
        <div className="navbar-end gap-2 hidden md:flex">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `btn ${isActive
                ? 'bg-[#244D3F] text-white'
                : 'border-none bg-white'}`
            }
          >
            <CiHome className="text-xl" />
            Home
          </NavLink>

          <NavLink
            to="/timeline"
            className={({ isActive }) =>
              `btn ${isActive
                ? 'bg-[#244D3F] text-white'
                : 'border-none bg-white'}`
            }
          >
            <CiTimer className="text-xl" />
            Timeline
          </NavLink>

          <NavLink
            to="/status"
            className={({ isActive }) =>
              `btn ${isActive
                ? 'bg-[#244D3F] text-white'
                : 'border-none bg-white'}`
            }
          >
            <GoGraph className="text-xl" />
            Stats
          </NavLink>
        </div>

        
        <div
          className="flex md:hidden text-2xl cursor-pointer"
          onClick={() => setopen(!isopen)}
        >
          <RxHamburgerMenu />
        </div>
      </div>

      
      {isopen && (
        <div className="md:hidden bg-base-100 shadow-sm px-6 py-4 flex flex-col gap-2">
          <NavLink
            to="/"
            onClick={() => setopen(false)}
            className={({ isActive }) =>
              `btn ${isActive
                ? 'bg-[#244D3F] text-white'
                : 'border-none bg-white'}`
            }
          >
            <CiHome className="text-xl" />
            Home
          </NavLink>

          <NavLink
            to="/timeline"
            onClick={() => setopen(false)}
            className={({ isActive }) =>
              `btn ${isActive
                ? 'bg-[#244D3F] text-white'
                : 'border-none bg-white'}`
            }
          >
            <CiTimer className="text-xl" />
            Timeline
          </NavLink>

          <NavLink
            to="/status"
            onClick={() => setopen(false)}
            className={({ isActive }) =>
              `btn ${isActive
                ? 'bg-[#244D3F] text-white'
                : 'border-none bg-white'}`
            }
          >
            <GoGraph className="text-xl" />
            Stats
          </NavLink>
        </div>
      )}
    </div>
  );
};

export default Navbar;