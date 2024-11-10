import React from 'react';
import { IoIosMail } from "react-icons/io";
import { FaPhoneVolume } from "react-icons/fa6";

const Contact = () => {
  return (
    <div id='contact' className='pt-32 container'>
      <div className='grid md:grid-cols-2 gap-10'>
        <div className='space-y-8'>
          <h2 className='text-5xl'data-aos="zoom-in-up">Get In Touch</h2>
          <p className='text-gray-600 text-[18px] pt-2'data-aos="zoom-in-up">
            Drop me a line, give me a call, or send me a message.
          </p>
          <div className='flex gap-3 items-center' data-aos="zoom-in-up">
            <IoIosMail size={30} />
            <span>abeerah193@gmail.com</span>
          </div>






          <div className='flex gap-3 items-center'>
            <FaPhoneVolume size={30} />
            <span>+92 314965956</span>
          </div>
        </div>
        <div className='space-y-8'>
            <div className='flex flex-col gap-1'>
                <label htmlFor="name">Name </label>
                <input type="text"
                className='h-[40px] bg-transparent border  border-accent'
                id='name' />
            </div>


            <div className='flex flex-col gap-1'>
                <label htmlFor="email">E-mail </label>
                <input type="text"
                className='h-[40px] bg-transparent border  border-accent'
                id='email' />
            </div>

            <div className='flex flex-col gap-1'>
                <label htmlFor="msgl">Message </label>
                <textarea 
                className='bg-transparent border  border-accent'
                id='msg'  rows={8}></textarea>
                   
            </div>
            <button className='bg-accent p-2 px-6'>Send</button>


        </div>
      </div>
    </div>
  );
}

export default Contact;

