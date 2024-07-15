import React from 'react';
import styles from "./IntroStyles.module.css";

function Intro() {
  return (
    <section id="intro" className={styles.intro}>  
        <div className={styles.container}>
    
            <span className={styles.hello}>Hello</span><span className={styles.name}>, I'm Hritik..!</span>

            <p className={styles.paragraph}>
                A passionate freelancer specializing in web development and design. With a background in Computer Applications and extensive experience in various technologies, I aim to create optimal solutions that enhance user experiences and drive business growth. Let's work together to bring your vision to life.
            </p>
            <div className={styles.waveContainer}>
            </div>
        </div>
    </section>
  )
}

export default Intro;
