import React, { useEffect, useState, useRef } from 'react';
import styles from "./WorkWithMeStyles.module.css";

function WorkWithMe() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

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
      threshold: 0.1, // Trigger when 10% of the section is visible
    });

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section 
      id="workwithme" 
      className={`${styles.workwithme} ${isVisible ? styles.fadeIn : styles.fadeOut}`} 
      ref={sectionRef}
    >
      <div className={styles.container}>
        <p className={styles.tag}>Hritik S Hotagi</p>
        <p className={styles.title}>Work with me</p>
        <div className={styles.linksContainer}>
          <p className={styles.linkName}>Email:</p>
          <p className={styles.link}>hritikhotagiofficial@gmail.com</p>
          <p className={styles.linkName}>Mobile No:</p>
          <p className={styles.link}>+91 7975244290</p>
        </div>
      </div>
      <div className={styles.footer}>
        <p>&copy; Designed & Developed by Hritik</p>
      </div>
    </section>
  );
}

export default WorkWithMe;
