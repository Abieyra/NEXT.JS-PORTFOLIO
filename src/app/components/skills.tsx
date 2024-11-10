import React from 'react';

const Skills = () => {
  return (
    <div id="skills" className='container pt-32'>
      <div className='grid md:grid-cols-2 gap-20 items-center'>
        <div data-aos="zoom-in-up">
          <h2 className='text-4xl md:text-5xl'>Technologies I Work With</h2>
          <p className='text-gray-500 pt-2'>
            Over the years, I have honed my skills in various technologies that enable me to build robust and scalable web applications. My expertise lies in both front-end and back-end development, ensuring a seamless and efficient user experience.
          </p>
        </div>
        <div>
          <div className='grid grid-cols-2 text-accent text-3xl sm:text-4xl space-y-2'>
            
            <h2 data-aos="zoom-in-up">REACT.JS</h2>
            <h2 data-aos="zoom-in-up">NEXT.JS</h2>
            <h2 data-aos="zoom-in-up">TAILWIND</h2>
            <h2 data-aos="zoom-in-up">CSS</h2>
            <h2 data-aos="zoom-in-up" >NODE.JS</h2>
            <h2 data-aos="zoom-in-up">HTML</h2>
            <h2 data-aos="zoom-in-up">TYPESCRIPT</h2>
           
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;

