import React, { useState } from 'react';
import {AiOutlineHome, AiOutlineMail, AiOutlineMenu, AiOutlineProject} from 'react-icons/ai';
import { IoGridOutline } from "react-icons/io5";
const Sidenav = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () =>{
    setNav(!nav);
  };
  
  return (
    <div>
        <AiOutlineMenu onClick={handleNav} className='absolute top-4 right-4 z-10   md:hidden cursor-pointer ' size={35}/>
      {
        nav ? (
          <div className='fixed w-full h-screen bg-white/90 flex flex-col justify-center items-center z-20'>
            <a onClick={handleNav} href="#main" className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
              <AiOutlineHome size={20}/>
              <span className='pl-4'>Home</span>
            </a>
            <a onClick={handleNav} href="#work" className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
              <IoGridOutline size={20}/>
              <span className='pl-4'>Experience</span>
            </a>
            <a onClick={handleNav} href="#projects" className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
              <AiOutlineProject size={20}/>
              <span className='pl-4'>Projects</span>
            </a>
            
            <a onClick={handleNav} href="#contact" className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
              <AiOutlineMail size={20}/>
              <span className='pl-4'>Contact</span>
            </a>
          </div>
        )
        : (
          ''
        )}
        <div className='md:inline-flex hidden fixed bottom-4 z-10 '>
          <div className='flex flex-row lg:mx-[38rem] md:mx-[18rem]  bg-gray-200/50  shadow-gray-400 rounded-full'>
            <a href="#main" className='rounded-full shadow-lg bg-gray-100  m-3 p-4 cursor-pointer hover:scale-110 hover:bg-sky-300/50 ease-in duration-200'>
              <AiOutlineHome size={20} className='hover:text-yellow'/>
            </a>
            <a href="#work" className='rounded-full shadow-lg bg-gray-100  m-3 p-4 cursor-pointer hover:scale-110 hover:bg-sky-300/50  ease-in duration-200'>
              <IoGridOutline size={20}/>
            </a>
            <a href="#projects" className='rounded-full shadow-lg bg-gray-100  m-3 p-4 cursor-pointer hover:scale-110 hover:bg-sky-300/50  ease-in duration-200'>
              <AiOutlineProject size={20}/>
            </a>
            
            <a href="#contact" className='rounded-full shadow-lg bg-gray-100  m-3 p-4 cursor-pointer hover:scale-110 hover:bg-sky-300/50  ease-in duration-200'>
              <AiOutlineMail size={20}/>
            </a>
          </div>
        </div>
    </div>
  )
}

export default Sidenav