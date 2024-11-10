import React from 'react';

const Hero = () => {
  return (
    <div
      id="hero"
      className='min-h-screen bg-no-repeat bg-[url(/banner.jpeg)] bg-left'
      style={{ backgroundSize: "380px", backgroundPosition: "left" }}
    >
      <div className="container grid lg:grid-cols-2 h-[calc(100vh-60px)]">
        <div className='hidden lg:block'></div>
        <div className='flex items-center justify-end'>
          <div className='text-[80px] sm:text-[80px] font-bold leading-tight text-white'>
            <p data-aos="zoom-in-up">Hello</p>
            <p data-aos="zoom-in-up">I&apos;Am</p>
            <p data-aos="zoom-in-up">Abeerah</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
