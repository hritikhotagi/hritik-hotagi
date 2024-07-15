import React, { useState } from 'react';
import styles from "./WorkStyles.module.css";
import image1 from "../../assets/111.jpg";
import image2 from "../../assets/222.png";
import image3 from "../../assets/333.jpg";

function Work() {
  const projects = [
    {
      title: 'Project 1',
      description: 'Description of project 1',
      image: image1
    },
    {
      title: 'Project 2',
      description: 'Description of project 2',
      image: image2
    },
    {
      title: 'Project 3',
      description: 'Description of project 3',
      image: image3
    },

  ];

  const [activeProject, setActiveProject] = useState(0);

  return (
    <section id="work" className={styles.work}>  
      <div className={styles.container}>
        <p className={styles.title}>Key Projects</p>
        <div className={styles.content}>
          <div className={styles.index}>
            {projects.map((project, index) => (
              <button
                key={index}
                className={`${styles.projectButton} ${activeProject === index ? styles.active : ''}`}
                onMouseEnter={() => setActiveProject(index)}
                onClick={() => setActiveProject(index)}
              >
                {project.title}
              </button>
            ))}
          </div>
          <div className={styles.projectInfo}>
            {activeProject !== null && (
              <>
                <img 
                  src={projects[activeProject].image} 
                  alt={projects[activeProject].title} 
                  className={styles.projectImage} 
                />
                <div className={styles.projectDetails}>
                  <h2 className={styles.projecttitle}>{projects[activeProject].title}</h2>
                  <p className={styles.projectdesc}>{projects[activeProject].description}</p>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Work;
