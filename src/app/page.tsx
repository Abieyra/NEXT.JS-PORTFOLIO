"use client";



import React, { useEffect } from 'react';
import Hero from '@/app/components/Hero';
import Navbar from '@/app/components/Navbar';
import Projects from '@/app/components/Projects';
import Skills from '@/app/components/skills';
import Contact from '@/app/components/contact';
import About from '@/app/components/About';
import AOS from 'aos';
import "aos/dist/aos.css";

const Home: React.FC = () => {
  useEffect(() => {
    AOS.init({
      easing: "ease-out-back",
      duration: 1200,
      delay: 100,
      mirror: true,
      anchorPlacement: "bottom-bottom",
      offset: 160,
    });
    AOS.refresh();
  }, []);

  return (
    <main>
      <Navbar />
      <Hero />
      <Projects />
      <Skills />
      <Contact />
      <About />
    </main>
  );
};

export default Home;

