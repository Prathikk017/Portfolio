import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { projectList } from '../Helpers/ProjectList';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';

const ProjectDisplay = () => {
  const { id } = useParams();
  const project = projectList[id];
  const [currentIndex, setCurrentIndex] = useState(0);
  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? project.img.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const nextSlide = () => {
    const isLastSlide = currentIndex === project.img.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  return (
    <div className='max-w-[1040px] m-auto md:pl-19 h-screen p-4 py-4 '>
      <h1 className='text-4xl text-center items-center justify-center font-bold py-4 text-[#001b5e]'>
        
        {project.title}
      </h1>
      {/* <button className='py-3 px-6 bg-[#001b5e] text-white rounded-xl font-semibold '>Back</button> */}
      <div className='grid lg:grid-cols-2 flex-col group'>
        <div className='lg:w-[30rem] sm:[25rem] lg:h-[300px] my-14 realtive'>
          <img
            className='object-fit lg:w-full lg:h-full md:h-[35vh] md:m-auto mt-10  mr-4  shadow-lg shadow-gray-400 border border-gray-200 rounded-lg '
            src={project.img[currentIndex]}
          />
          {/* Left Arrow */}
          <div
            className='absolute top-[40%] -translate-x-0 translate-y-[-50%] lg:left-[17%] lg:ml-3 text-2xl rounded-full p-2 group-hover:bg-gray-300/80 text-white cursor-pointer'
            onClick={prevSlide}
          >
            <BsChevronCompactLeft size={30} />
          </div>
          {/* Right Arrow */}
          <div
            className='absolute top-[40%] -translate-x-0 translate-y-[-50%] lg:left-[45%] lg:ml-0 text-2xl rounded-full p-2 group-hover:bg-gray-300/80 text-white cursor-pointer'
            onClick={nextSlide}
          >
            <BsChevronCompactRight size={30} />
          </div>
        </div>

        <div className='flex flex-col items-start'>
          <p className='flex flex-col items-start'>
            <span className='text-2xl font-medium py-2 mt-10 text-[#001b5e]'>
              Description:{' '}
            </span>
            <span className='justify-start'>{project.desc}</span>
          </p>
          <div className='flex-row items-center py-2 my-2'>
          <a href={`${project.git}`}><button className='text-center py-2 px-4 rounded-lg bg-white text-gray-700 font-bold cursor-pointer text-md border border-gray-500 ml-20 hover:scale-110 duration-500  shadow-sm shadow-gray-600'>
              Code
            </button></a>
           <a href={`${project.demo}`}><button className='text-center py-2 px-4 rounded-lg bg-white text-gray-700 font-bold cursor-pointer text-md border border-gray-500 ml-10 hover:scale-110 duration-500 shadow-sm shadow-gray-600'>
              Demo
            </button></a> 
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDisplay;
