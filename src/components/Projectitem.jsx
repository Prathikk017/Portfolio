import React from 'react'
import {useNavigate} from 'react-router-dom';

const Projectitem = ({image, title , id}) => {
  const navigate = useNavigate();
  return (
    <div className='relative flex items-center justify-center h-auto w-auto shadow-xl shadow-gray-400 rounded-xl group hover:bg-gradient-to-r from-gray-200 to-[#001b5e]'>
        <img src={image} alt='' className='rounded-xl group-hover:opacity-10  w-[100%] h-[100%] object-fit'/>
        <div className='hidden group-hover:block absolute top-[40%] left-[50%] translate-x-[-50%] translate-y-[-50%] '>
            <h3 className='text-xl font-bold text-white tracking-wider text-center mt-2'>
                {title}
            </h3>
            <p className='pb-4 pt-2 text-white text-center'>React Js</p>
              <p className='text-center p-3 rounded-lg bg-white text-gray-700 font-bold cursor-pointer text-md' onClick={()=>{navigate("/project/" + id)}}>More Info</p>
            
        </div>
    </div>
  )
}

export default Projectitem