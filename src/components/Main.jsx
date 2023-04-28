import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import {
  FaCodepen,
  FaLinkedin,
} from 'react-icons/fa';
import backgroundImg from '../assets/background.png';
import {BsGithub} from 'react-icons/bs'
const Main = () => {
  return (
    <div id='main'>
      <img
        className='w-full h-screen object-cover object-left scale-x-[1]'
        src={backgroundImg}
      />
      <div className='w-full h-screen absolute top-0 left-0 bg-white/50'>
        <div className='max-width-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-center items-center'>
          <h1 className='sm:text-6xl text-4xl font-bold  text-gray-900 py-3'>I'm Prathik K</h1>
          <h2 className='flex sm:text-3xl text-2xl text-gray-900 py-3'>
            I'm a
            <TypeAnimation
              sequence={[
                'Full-Stack </> Developer', // Types 'One'
                1000, // Waits 1s
                'and Designer.', // Deletes 'One' and types 'Two'
                1000, // Waits 2s
              ]}
              wrapper='span'
              cursor={true}
              repeat={Infinity}
              style={{
                fontSize: '1em',
                paddingLeft: '5px',
                fontWeight: 'bold',
              }}
            />
          </h2>
          <div className='flex justify-center gap-3 pt-6 max-w-[200px] w-full'>
           <a href='https://github.com/Prathikk017?tab=repositories'><BsGithub  className='cursor-pointer' size={40}/></a>
           <a href='https://www.linkedin.com/in/prathik-k-b7a11921b'><FaLinkedin  className='cursor-pointer' size={40}/></a> 
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
