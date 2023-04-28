import React from 'react'

const Skillitem = ({img}) => {
  return (
    <div className='w-auto justify-center items-center text-center '>
        <img src={img} alt='' className=' hover:scale-110 duration-500 w-[60%] justify-center items-center object-cover'/>
        
    </div>
  )
}

export default Skillitem