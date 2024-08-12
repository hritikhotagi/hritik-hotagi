import React, { useEffect, useState, useRef } from "react";
import styles from "./ExperienceStyles.module.css";
import image1 from "../../assets/line2.png";

function Experience() {
  const [isVisible, setIsVisible] = useState(false);
  const experienceRef = useRef(null);

  const experiences = [
    {
      role: "Solutions Engineer Level – 1",
      company: "Meltwater",
      location: "Bengaluru, Karnataka",
      duration: "1st March 2024 – 18th June 2024",
      responsibilities: [
        "Created optimal web application solutions for client and internal use cases by utilizing technologies such as Angular, Node, JavaScript, MongoDB, Docker, Kubernetes, and Auth0.",
      ],
    },
    {
      role: "Solutions Engineer Intern",
      company: "Meltwater",
      location: "Bengaluru, Karnataka",
      duration: "17th July 2023 – 29th February 2024",
      responsibilities: [
        "Accomplished robust and innovative web solutions by implementing technologies such as Angular, MongoDB, Docker, Kubernetes, and Auth0, which led to a seamless blend of front-end and back-end development and effective team leadership.",
      ],
    },
    {
      role: "Intern",
      company: "TECHNOLOGICS",
      location: "Bengaluru, Karnataka",
      duration: "Mar 2023 - Apr 2023",
      responsibilities: [
        "AI & ML analysis"],
    },
    {
      role: "Founder | Self Employeed",
      company: "Hritech Studio",
      location: "Hubli, Karnataka",
      duration: "Mar 2021 - Present",
      responsibilities: [
        "Working on UI / UX designs, Web development and Graphic Designs",
      ],
    },
    {
      role: "Freelancer",
      company: "Yespeal Technology",
      location: "Hubli, Karnataka",
      duration: "Apr 2019 - Feb 2020",
      responsibilities: [
        "Creative Freelancer, Web Designer and Content Creator."
      ],
    },
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
      threshold: 0.1, // Trigger when 10% of the section is visible
    });

    if (experienceRef.current) {
      observer.observe(experienceRef.current);
    }

    return () => {
      if (experienceRef.current) {
        observer.unobserve(experienceRef.current);
      }
    };
  }, []);

  return (
    <section id="experience" className={styles.experience} ref={experienceRef}>
      <p className={styles.title}>Experience</p>
      <div className={styles.container}>
        <div className={styles.image}>
          <img
            src={image1}
            alt="abstract image"
            className={styles.projectImage}
          />
        </div>
        <div className={styles.experienceList}>
          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`${styles.experienceItem} ${
                isVisible ? styles.fadeIn : styles.fadeOut
              }`}
            >
              <h3 className={styles.role}>{exp.role}</h3>
              <p className={styles.company}>
                {exp.company}, {exp.location}
              </p>
              <p className={styles.duration}>{exp.duration}</p>
              <div className={styles.responsibilities}>
                {exp.responsibilities.map((resp, idx) => (
                  <span key={idx}>{resp}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
