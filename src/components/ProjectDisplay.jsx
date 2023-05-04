import React from 'react'
import { useParams } from 'react-router-dom';
import { projectList } from '../Helpers/ProjectList';

const ProjectDisplay = () => {
    const { id } = useParams();
    const project = projectList[id];
  return (
    <div className='max-w-[1040px] m-auto md:pl-19 h-screen p-4 py-4'>
        <h1 className='text-4xl text-center items-center justify-center font-bold py-4 text-[#001b5e]'>{project.title}</h1>
        <div className='flex lg:flex-row flex-col'>
        <img className='lg:w-[30rem] sm:[25rem] h-[40vh] mt-10  mr-4  shadow-lg shadow-gray-400 border border-gray-200 rounded-lg' src={project.image}  />
       <div className='flex flex-col items-start'>
       <p className='flex flex-col items-start'><span className='text-2xl font-medium py-2 mt-10 text-[#001b5e]'>Description: </span><span className='justify-start'>{project.desc}</span></p>
        <div className='flex-row items-center py-2 my-2'>
        <button className='text-center py-2 px-4 rounded-lg bg-white text-gray-700 font-bold cursor-pointer text-md border border-gray-500 ml-20 hover:scale-110 duration-500  shadow-sm shadow-gray-600'>Code</button>
        <button className='text-center py-2 px-4 rounded-lg bg-white text-gray-700 font-bold cursor-pointer text-md border border-gray-500 ml-10 hover:scale-110 duration-500 shadow-sm shadow-gray-600'>Demo</button>
        </div>
        
       </div>
        
        </div>
        

    </div>
  )
}

export default ProjectDisplay;