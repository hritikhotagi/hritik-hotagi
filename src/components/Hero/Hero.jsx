import React from "react";
import styles from "./HeroStyles.module.css";
import avatar from "../../assets/hsh.png"; 
import { FaDownload } from 'react-icons/fa'; 

function Hero() {
  return (
    <section id="hero" className={styles.hero}>  
      <div className={styles.container}>
        <div className={styles.textContainer}>
          <h1 className={styles.name}>Hritik S Hotagi</h1>
          <p className={styles.title}>Freelancer | Software Developer |</p>
          <p className={styles.title}>Full Stack Developer | UI / UX Designer</p>
          <div className={styles.icons}>
            <a href="https://www.linkedin.com/in/hritikhotagi/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="https://github.com/hritikhotagi" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://www.instagram.com/hritech_studio" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
          <a href="https://drive.google.com/file/d/1TaQGlp8jVhyChQukKJq730Y3cnEFy36r/view?usp=sharing" target="_blank" rel="noopener noreferrer">
            <button className={styles.downloadBtn}>
                <FaDownload className={styles.downloadIcon} /> Download CV
            </button>
          </a>
        </div>
        <div className={styles.avatarContainer}>
          <img src={avatar} alt="Hritik Hotagi" className={styles.avatar} />
        </div>
      </div>
      </section>
  );
}

export default Hero;
