import React from 'react'
import { CiSearch, CiGrid41 } from "react-icons/ci";
import { FaBell } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
const Navbar = () => {
  return (
      <div className='navbar flex justify-between items-center text-white pt-3 px-2 pb-5'>
          <h1 className='text-2xl font-semibold '>Admin</h1>
          <div className='flex gap-5 text-xl max-sm:hidden'>
              <CiSearch />
              <CiGrid41 />
              <FaBell />
              <IoMdSettings /> 
          </div>
      </div>
  )
}

export default Navbar