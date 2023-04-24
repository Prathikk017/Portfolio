import React from 'react'
import Workitem from './Workitem'
const data = [
    {
        year: 2023,
        title: 'Powaha Infotech PVT LTD',
        duration:'6 months',
        details: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    }, 
]


const Experience = () => {
  return (
   <div id='work' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
    <h1 className='text-4xl font-bold text-center text-[#001b5e] pb-4'>Experience</h1>
   {data.map((item, index) => (
    <Workitem key={index} year={item.year} title={item.title} duration={item.duration} details={item.details}/>
   ))}
   </div>
  )
}

export default Experience