import React from 'react';
import htmlImg from '../assets/html.png';
import cssImg from '../assets/css.png';
import javascriptImg from '../assets/javascript.png';
import nodeImg from '../assets/node.png';
import reactImg from '../assets/react.png';
import tailwindImg from '../assets/tailwind.png';
import gitImg from '../assets/git.png';
import githubImg from '../assets/github.png';
import Skillitem from './Skillitem';

const Skills = () => {
  return (
    <div id='work' className='max-w-[1040px]  m-auto md:pl-19 p-4 py-4  '>
      <h1 className='text-4xl font-bold text-center text-[#001b5e] py-10'>
        Skills
      </h1>
      <div className='grid sm:grid-cols-4 grid-cols-3 gap-4'>
        <Skillitem img={htmlImg}  />
        <Skillitem img={cssImg} />
        <Skillitem img={javascriptImg} />
        <Skillitem img={reactImg} />
        <Skillitem img={nodeImg} />
        <Skillitem img={tailwindImg} />
        <Skillitem img={gitImg} />
        <Skillitem img={githubImg} />
      </div>
    </div>
  )
}

export default Skills;