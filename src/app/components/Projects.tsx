import React from 'react';
import Heading from './Heading';
import Card from './card'; // Ensure the correct path and capitalization

const data = [
  {
    id: 0,
    title: "Dynamic Resume Builder",
    desc: "A next.js & typescript based website to generate Dynamic resume for ease of your daily use",
    img: "/dynamic.png",
    tags: ["Next.js", "Node", "Typescript", "Css"]
  },
  {
    id: 1,
    title: "Editable Resume Builder",
    desc: "A next.js & typescript based website to generate editable resume for ease of your daily use",
    img: "/editable.png",
    tags: ["Next.js", "Node", "Typescript", "Css"]
  },
  {
    id: 2,
    title: "Countdown Timer",
    desc: "A next.js & typescript powered website to track time",
    img: "/countdown.png",
    tags: ["Next.js", "Node", "Typescript", "Css"]
  },
  {
    id: 3,
    title: "Simple Calculator",
    desc: "A simple calculator",
    img: "/simple.png",
    tags: ["HTML", "Typescript", "Css"]
  },
  {
    id: 4,
    title: "Shareable Resume Builder",
    desc: "A next.js & typescript based website to generate and share resume with pdf downloading feature",
    img: "/shareble.png",
    tags: ["Node", "Next.js", "Typescript", "Css"]
  },
];

const Projects = () => {
  return (
    <div id="projects" className='container pt-32'>
      <Heading title='My Projects' />
      <div className='grid gap-10 xl:gap-0 xl:gap-y-10 md:grid-cols-2 lg:grid-cols-3 place-items-center'>
        {data.map((el) => (
          <Card
            key={el.id}
            title={el.title}
            desc={el.desc}
            img={el.img}
            tags={el.tags}
          />
        ))}
      </div>
    </div>
  );
}

export default Projects;
