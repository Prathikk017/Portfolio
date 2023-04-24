import React from 'react';
import billManagerImg from '../assets/Bill_Manager.png';
import galleryAppImg from '../assets/GalleryApp.png';
import googleDocsImg from '../assets/Google_Docs_Clone.png';
import netflixImg from '../assets/Netflix.png';
import sudokuImg from '../assets/Sudoku.png';
import Projectitem from './Projectitem';

const Projects = () => {
  return (
    <div id='projects' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
      <h1 className='text-4xl font-bold text-center text-[#001b5e]'>
        Projects
      </h1>
      <p className='text-center py-8'>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto
        voluptatibus aperiam, beatae assumenda dolores sint cumque odio
        doloremque deleniti porro consectetur optio temporibus suscipit minus
        reiciendis praesentium non, voluptatem quibusdam!
      </p>
      <div className='grid sm:grid-cols-2 gap-10'>
        <Projectitem img={billManagerImg} title='Bill Manager' />
        <Projectitem img={galleryAppImg} title='Gallery App' />
        <Projectitem img={googleDocsImg} title='Google Docs' />
        <Projectitem img={netflixImg} title='Netflix App' />
        <Projectitem img={sudokuImg} title='Sudoku App' />
      </div>
    </div>
  );
};

export default Projects;
