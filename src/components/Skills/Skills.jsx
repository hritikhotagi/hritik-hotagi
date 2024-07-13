import React from 'react';
import styles from "./SkillsStyles.module.css";

function Skills() {
  const skills = [
    'JavaScript', 'React', 'Angular', 'Node.js', 'Python', 'Docker', 'AWS',
    'MongoDB', 'Express.js', 'Redux', 'HTML', 'CSS', 'GraphQL', 'TypeScript',
    'Kubernetes', 'Figma', 'Git', 'Postman', 'MySQL', 'Java', 'Django'
  ];

  return ( 
    <section id="skills" className={styles.skills}> 
        <div className={styles.container}>
            <div>Skills</div>
        </div>
    </section>
  );
}

export default Skills;
