import React from 'react'
import {BsFillSendFill} from 'react-icons/bs';
const Contact = () => {
  return (
    <div id='contact' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
        <h1 className='py-4 text-4xl font-bold text-center text-[#001b5e]'>Contact</h1>
        <form action="" method='POST' encType='multipart/form-data'>
            <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
                <div className='flex flex-col'>
                    <label className='upppercse text-sm py-2'>Name</label>
                    <input className='border-2 rounded-lg p-3 flex border-gray-300 hover:border-[#0437b8] duration-200'type="text" name='name'/>
                </div>
                <div className='flex flex-col'>
                    <label className='upppercse text-sm py-2'>Phone Number</label>
                    <input  className='border-2 rounded-lg p-3 flex border-gray-300 hover:border-[#0437b8] duration-200' type="text" name='phone'/>
                </div>
            </div>
            <div className='flex flex-col py-2'>
                <label className='upppercse text-sm py-2'>Email</label>
                <input className='border-2 rounded-lg p-3 flex border-gray-300 hover:border-[#0437b8] duration-200' type="email" name='email' />
            </div>
            <div className='flex flex-col py-2'>
                <label className='upppercse text-sm py-2'>Subject</label>
                <input className='border-2 rounded-lg p-3 flex border-gray-300 hover:border-[#0437b8] duration-200' type="text" name='subject' />
            </div>
            <div className='flex flex-col py-2'>
                <label className='upppercse text-sm py-2'>Message</label>
                <textarea className='border-2 rounded-lg p-3 border-gray-300 hover:border-[#0437b8] duration-200' rows='10' name='message' ></textarea>
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