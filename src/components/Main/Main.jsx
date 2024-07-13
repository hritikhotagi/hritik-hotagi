import React from 'react';
import { Outlet } from 'react-router-dom';
import Nav from "../Nav/Nav"; 
import styles from "./MainStyles.module.css"; 
import Hero from "../Hero/Hero"; 
import Skills from '../Skills/Skills';
// import Work from "./components/Work/Work";
// import Experience from "./components/Experience/Experience";

function Main() {
  return (
    <section id="main" className={styles.main}>
    <Nav />
      <div className={styles.container}>
        <Outlet />
        <Hero />
        <Skills />
      </div>
      
    </section>
  );
}

export default Main;
