import React, { useState } from 'react';
import {
  AiOutlineHome,
  AiOutlineMail,
  AiOutlineMenu,
  AiOutlineProject,
} from 'react-icons/ai';
import { IoGridOutline } from 'react-icons/io5';
import { Link } from 'react-router-dom';
const Sidenav = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div>
      <AiOutlineMenu
        onClick={handleNav}
        className='absolute top-4 right-4 z-10   md:hidden cursor-pointer '
        size={35}
      />
      {nav ? (
        <div className='fixed w-full h-screen bg-white/90 flex flex-col justify-center items-center z-20'>
          <Link
            onClick={handleNav}
            to='/'
            className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'
          >
            <AiOutlineHome size={20} />
            <span className='pl-4'>Home</span>
          </Link>
          <Link
            onClick={handleNav}
            to='/experience'
            className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'
          >
            <IoGridOutline size={20} />
            <span className='pl-4'>Experience</span>
          </Link>
          <Link
            onClick={handleNav}
            to='/projects'
            className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'
          >
            <AiOutlineProject size={20} />
            <span className='pl-4'>Projects</span>
          </Link>

          <Link
            onClick={handleNav}
            to='/contact'
            className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'
          >
            <AiOutlineMail size={20} />
            <span className='pl-4'>Contact</span>
          </Link>
        </div>
      ) : (
        ''
      )}

      <div className='md:block hidden fixed bottom-4 left-1/2 transform -translate-x-1/2 z-20'>
        <div className='flex flex-row bg-gray-100/60 shadow-md shadow-gray-300 rounded-full'>
          <Link
            to='/'
            className='rounded-full shadow-lg bg-gray-100 m-3 p-3 cursor-pointer hover:scale-110 hover:bg-gray-50 ease-in duration-200'
          >
            <AiOutlineHome size={20} className='hover:text-yellow' />
          </Link>
          <Link
            to='/experience'
            className='rounded-full shadow-lg bg-gray-100 m-3 p-3 cursor-pointer hover:scale-110 hover:bg-gray-50 ease-in duration-200'
          >
            <IoGridOutline size={20} />
          </Link>
          <Link
            to='/projects'
            className='rounded-full shadow-lg bg-gray-100 m-3 p-3 cursor-pointer hover:scale-110 hover:bg-gray-50 ease-in duration-200'
          >
            <AiOutlineProject size={20} />
          </Link>
          <Link
            to='/contact'
            className='rounded-full shadow-lg bg-gray-100 m-3 p-3 cursor-pointer hover:scale-110 hover:bg-gray-50 ease-in duration-200'
          >
            <AiOutlineMail size={20} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sidenav;
