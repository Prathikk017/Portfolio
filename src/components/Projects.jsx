import React from 'react';
import billManagerImg from '../assets/Bill_Manager.png';
import galleryAppImg from '../assets/GalleryApp.png';
import googleDocsImg from '../assets/Google_Docs_Clone.png';
import netflixImg from '../assets/Netflix.png';
import sudokuImg from '../assets/Sudoku.png';
import lekpayImg from '../assets/lekpay.png';
import Projectitem from './Projectitem';


const Projects = () => {
  return (
    <div id='projects' className='max-w-[1040px] md:h-screen m-auto md:pl-19 p-4 py-10'>
      <h1 className='text-4xl font-bold text-center text-[#001b5e] py-8'>
        Projects
      </h1>
      <div className='grid sm:grid-cols-3 gap-10'>
        <Projectitem img={billManagerImg} title='Bill Manager' />
        <Projectitem img={galleryAppImg} title='Gallery App' />
        <Projectitem img={googleDocsImg} title='Google Docs' />
        <Projectitem img={netflixImg} title='Netflix App' />
        <Projectitem img={sudokuImg} title='Sudoku App' />
        <Projectitem img={lekpayImg} title='lekpay App' />
      </div>
    </div>
  );
};

export default Projects;
