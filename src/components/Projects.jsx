import React from 'react';
import billManagerImg from '../assets/Bill_Manager.png';
import galleryAppImg from '../assets/GalleryApp.png';
import googleDocsImg from '../assets/Google_Docs_Clone.png';
import netflixImg from '../assets/Netflix.png';
import sudokuImg from '../assets/Sudoku.png';
import lekpayImg from '../assets/lekpay.png';
import Projectitem from './Projectitem';
import { projectList } from '../Helpers/ProjectList';

const Projects = () => {
  return (
    <div id='projects' className='max-w-[1040px] md:h-screen m-auto md:pl-19 p-4 py-10'>
      <h1 className='text-4xl font-bold text-center text-[#001b5e] py-8'>
        Projects
      </h1>
      <div className='grid md:grid-cols-3 sm:grid-cols-2 gap-10'>
        {projectList.map((project, idx)=>{
        return(
            <Projectitem  id={idx} image={project.image} title={project.title}  />
        );
        })}
      </div>
    </div>
  );
};

export default Projects;
