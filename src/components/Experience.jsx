import React from 'react'
import Workitem from './Workitem'
import Skills from './Skills'
const data = [
    {
        year: 2023,
        title: 'Powaha Infotech PVT LTD',
        duration:'5 months',
        details: "A user friendly website using OVI hosting panel is designed and completely developed. STS offers contact-less payment methods for public transport, allows IT support to track, manage, speed up and deal effectively with incidents. Front-end development is done using React.JS and Tailwind.CSS for styling, which provides a better user interface. MySQL, Node.JS and Express.JS are utilized for Back-end development, with 100% client satisfaction. Fixed bugs from the previous versions of the website and implemented enhancements and better functionality that increased the efficiency by 30%. Working in a team of 4 for the project, designed and implemented both the Front-end and Back-end of a website used by company admins and operators."
    }, 
]


const Experience = () => {
  return (
   <div id='work' className='max-w-[1040px] m-auto md:pl-19 h-full p-4 py-4'>
    <div className='flex-row mb-2'>
      <Skills/>
    <h1 className='text-4xl font-bold text-center text-[#001b5e] pb-4'>Experience</h1>
   {data.map((item, index) => (
    <Workitem key={index} year={item.year} title={item.title} duration={item.duration} details={item.details}/>
   ))}
    </div>
    
   </div>
  )
}

export default Experience