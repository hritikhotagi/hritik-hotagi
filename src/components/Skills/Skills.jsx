import React, { useEffect, useRef, useState } from 'react';
import styles from "./SkillsStyles.module.css";

function Skills() {
  const [isVisible, setIsVisible] = useState(false);
  const skillsRef = useRef(null);

  const skills = [
    { name: 'JavaScript', level: 90 },
    { name: 'React', level: 70 },
    { name: 'Angular', level: 95 },
    { name: 'Node.js', level: 80 },
    { name: 'Python', level: 70 },
    { name: 'Docker', level: 65 },
    { name: 'AWS', level: 50 },
    { name: 'MongoDB', level: 80 },
    { name: 'Express.js', level: 90 },
    { name: 'Redux', level: 80 },
    { name: 'HTML', level: 100 },
    { name: 'CSS', level: 95 },
    { name: 'GraphQL', level: 40 },
    { name: 'TypeScript', level: 80 },
    { name: 'Kubernetes', level: 50 },
    { name: 'Figma', level: 90 },
    { name: 'Git', level: 85 },
    { name: 'Postman', level: 95 },
    { name: 'MySQL', level: 90 },
    { name: 'Java', level: 60 },
    { name: 'Django', level: 65 },
    { name: 'Graphic Designing', level: 100 },
    { name: 'Logo', level: 100 },
    { name: 'Web Development', level: 95 }
  ];

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

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => {
      if (skillsRef.current) {
        observer.unobserve(skillsRef.current);
      }
    };
  }, []);

  return ( 
    <section 
      id="skills" 
      className={`${styles.skills} ${isVisible ? styles.visible : styles.hidden}`} 
      ref={skillsRef}
    > 
      <p className={styles.tag}>Developer | Freelancer</p>
      <p className={styles.title}>Skills & Proficiencies</p>
      <div className={styles.container}>
        <div className={styles.grid}>
          {skills.map((skill, index) => (
            <div key={index} className={`${styles.skillBox} ${isVisible ? styles.skillBoxVisible : styles.skillBoxHidden}`}>
              <div className={styles.skillName}>{skill.name}</div>
              <div className={styles.progressBarContainer}>
                <div 
                  className={styles.progressBar} 
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
