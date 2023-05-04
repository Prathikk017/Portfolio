import React from 'react'
import {BsFillSendFill} from 'react-icons/bs';
const Contact = () => {
  return (
    <div id='contact' className='max-w-[1040px] m-auto h-screen md:pl-19 p-4 py-12 '>
        <h1 className='py-0 text-4xl font-bold text-center text-[#001b5e]'>Contact</h1>
        <form action="https://getform.io/f/0afa3c2c-f13a-4871-a10b-b6720a4db998" method='POST' encType='multipart/form-data'>
            <div className='flex flex-col py-2'>
            <label className='upppercse text-sm py-2'>Name</label>
                    <input className='border-2 rounded-lg p-2 flex border-gray-300 outline-[#0437b8] duration-200'type="text" name='name'/>
            </div>
            <div className='flex flex-col py-2'>
                <label className='upppercse text-sm py-2'>Email</label>
                <input className='border-2 rounded-lg p-2 flex border-gray-300 outline-[#0437b8] duration-200' type="email" name='email' />
            </div>
            <div className='flex flex-col py-2'>
                <label className='upppercse text-sm py-2'>Subject</label>
                <input className='border-2 rounded-lg p-2 flex border-gray-300 outline-[#0437b8] duration-200' type="text" name='subject' />
            </div>
            <div className='flex flex-col py-2'>
                <label className='upppercse text-sm py-2'>Message</label>
                <textarea className='border-2 rounded-lg p-2 border-gray-300 outline-[#0437b8] duration-200' rows='6' name='message' ></textarea>
            </div>
            <button className='bg-[#001b5e] text-gray-100 mt-4 w-full p-4 rounded-lg flex flex-row items-center justify-center'>
                Send Message
                <span className='ml-2'><BsFillSendFill size={20}/></span>
            </button>
        </form>
    </div>
  )
}

export default Contact