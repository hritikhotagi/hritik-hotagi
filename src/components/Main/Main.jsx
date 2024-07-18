import React from 'react';
import { Outlet } from 'react-router-dom';
import Nav from "../Nav/Nav"; 
import styles from "./MainStyles.module.css"; 
import Hero from "../Hero/Hero"; 
import Skills from '../Skills/Skills';
import Work from '../Work/Work';
import Intro from '../Intro/Intro';
import Experience from "../Experience/Experience";
import Contact from "../Contact/Contact";
import WorkWithMe from '../WorkWithMe/WorkWithMe';


function Main() {
  return (
    <section id="main" className={styles.main}>
    <Nav />
      <div className={styles.container}>
        <Outlet />
        <Hero />
        <Intro />
        <Skills />
        <Work />
        <Experience />
        <Contact />
        <WorkWithMe />
      </div>
      
    </section>
  );
}

export default Main;
