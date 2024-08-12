import React, { useEffect, useRef, useState } from 'react';
import styles from "./IntroStyles.module.css";

function Intro() {
  const [isVisible, setIsVisible] = useState(false);
  const introRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      });
    }, {
      threshold: 0.1, // Trigger when 10% of the element is visible
    });

    if (introRef.current) {
      observer.observe(introRef.current);
    }

    return () => {
      if (introRef.current) {
        observer.unobserve(introRef.current);
      }
    };
  }, []);

  return (
    <section 
      id="intro" 
      className={`${styles.intro} ${isVisible ? styles.visible : styles.hidden}`} 
      ref={introRef}
    >  
        <div className={styles.container}>
            <span className={styles.hello}>Hello</span>
            <span className={styles.name}>, I'm Hritik..!</span>

            <p className={styles.paragraph}>
                A passionate developer specializing in web development and design. With a background in Computer Applications and extensive experience in various technologies, I aim to create optimal solutions that enhance user experiences and drive business growth. Let's work together to bring your vision to life.
            </p>
            <div className={styles.waveContainer}></div>
        </div>
    </section>
  )
}

export default Intro;
