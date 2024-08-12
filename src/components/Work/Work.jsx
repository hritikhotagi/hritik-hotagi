import React, { useState } from "react";
import styles from "./WorkStyles.module.css";
import a1 from "../../assets/web/a1.png";
import a2 from "../../assets/web/a2.png";
import a3 from "../../assets/web/a3.png";
import a4 from "../../assets/web/a4.png";
import c1 from "../../assets/web/c1.png";
import c2 from "../../assets/web/c2.png";
import c3 from "../../assets/web/c3.png";
import c4 from "../../assets/web/c4.png";
import c5 from "../../assets/web/c5.png";
import blog from "../../assets/web/blog.png";


import car1 from "../../assets/app/car1.png";
import ar1 from "../../assets/app/ar1.png";
import ar2 from "../../assets/app/ar2.png";
import ar3 from "../../assets/app/ar3.png";
import ar4 from "../../assets/app/ar4.png";

import cnbd from "../../assets/uiux/cnbd.png";
import cba11 from "../../assets/uiux/cba11.png";
import cba12 from "../../assets/uiux/cba12.png";
import cba2 from "../../assets/uiux/cba2.png";
import cba21 from "../../assets/uiux/cba21.png";
import cba3 from "../../assets/uiux/cba3.png";
import cba4 from "../../assets/uiux/cba4.png";
import cba5 from "../../assets/uiux/cba5.png";
import d1 from "../../assets/uiux/d1.png";
import d2 from "../../assets/uiux/d2.png";
import d3 from "../../assets/uiux/d3.png";
import d4 from "../../assets/uiux/d4.png";
import d5 from "../../assets/uiux/d5.png";
import d6 from "../../assets/uiux/d6.png";
import v1 from "../../assets/uiux/v1.png";
import v2 from "../../assets/uiux/v2.png";
import v3 from "../../assets/uiux/v3.png";
import v4 from "../../assets/uiux/v4.png";
import v5 from "../../assets/uiux/v5.png";
import v6 from "../../assets/uiux/v6.png";
import v7 from "../../assets/uiux/v7.png";
import v8 from "../../assets/uiux/v8.png";
import v9 from "../../assets/uiux/v9.png";
import e1 from "../../assets/uiux/e1.png";
import e2 from "../../assets/uiux/e2.png";
import e3 from "../../assets/uiux/e3.png";
import e4 from "../../assets/uiux/e4.png";
import e5 from "../../assets/uiux/e5.png";
import e6 from "../../assets/uiux/e6.png";
import e7 from "../../assets/uiux/e7.png";
import e8 from "../../assets/uiux/e8.png";
import e9 from "../../assets/uiux/e9.png";
import ddm1 from "../../assets/uiux/ddm1.png";
import ddm2 from "../../assets/uiux/ddm2.png";
import ddm3 from "../../assets/uiux/ddm3.png";
import ddm4 from "../../assets/uiux/ddm4.png";
import ddm5 from "../../assets/uiux/ddm5.png";
import ddm6 from "../../assets/uiux/ddm6.png";
import ddm7 from "../../assets/uiux/ddm7.png";
import ddm8 from "../../assets/uiux/ddm8.png";
import ddm9 from "../../assets/uiux/ddm9.png";
import ddm10 from "../../assets/uiux/ddm10.png";
import ddm11 from "../../assets/uiux/ddm11.png";

import mb1 from "../../assets/logo/mb1.png";
import mb2 from "../../assets/logo/mb2.png";
import rit from "../../assets/logo/rit.png";
import sb21 from "../../assets/logo/sb21.png";
import sb22 from "../../assets/logo/sb22.png";
import sb23 from "../../assets/logo/sb23.png";
import sb24 from "../../assets/logo/sb24.png";
import w from "../../assets/logo/w.png";

function Work() {
  const sections = [
    "Software Applications",
    "Web",
    "UI/UX",
    "Logos",
  ];

  const projects = {
    "Software Applications": [
      {
        title: "AR App for Autistic Children to Learn Social Skills",
        description:
          "Developed tailored learning experiences for special needs kids by implementing AR and VR technologies, resulting in a significant improvement in social skills among autistic children as measured by engagement metrics.",
        images: [ar2, ar1, ar3,ar4],
        githubLink: "https://github.com/hritikhotagi/AutismAR.github.io.git"
      },
      {
        title: "Car Renting and Hiring Application.",
        description:
          "Accomplished a streamlined car rental and hiring process by implementing a Java application, which led to an efficient and user-friendly booking system.",
        images: [car1],
      },
    ],
    Web: [
      {
        title: "Analytics Application (Management Dashboard)",
        description:
          "Accomplished analysis of growth, sales, and user retention metrics by implementing a dynamic dashboard for monitoring real-time user activities and events, which led to great decision-making and strategic planning for clients.",
        images: [a1,a2,a3,a4],
      },
      {
        title: "Covid Guide Application",
        description:
          "Accomplished dissemination of critical information about the COVID-19 virus by implementing a dynamic website, which led to increased public awareness and access to real-time data on available hospital beds and infection counts.",
        images: [c1,c2,c3,c4,c5],
        githubLink: "https://github.com/hritikhotagi/covidguidewebsite.github.io.git"
      },
      {
        title: "Blog Application",
        description:
          "The Blog Application allows users to create, edit, view, and delete blog posts, with secure authentication ensuring users can only modify their own content. Built with React, it features a responsive design, a rich text editor, and a user-friendly interface for seamless blogging.",
        images: [blog],
      },
    ],
    "UI/UX": [
      {
        title: "Car and Bike Analysis",
        description:
          "Will get all the analytical information about the indian vechicles, application created by Lazurus Benjamin",
        images: [cnbd,cba11,cba12,cba2,cba21,cba3,cba4,cba5],
      },
      {
        title: "Deep Sea Exploration Application",
        description:
          "An application showcasing new ocean explorations, where users can post and view discoveries. The content is moderated by an admin to ensure the accuracy and validity of the information shared.",
        images: [d1,d2,d3,d4,d5,d6],
      },
      {
        title: "Cab Booking System",
        description:
          "A replication of modern cab booking apps, offering similar features for booking rides.",
        images: [v1,v2,v3,v4,v5,v6,v7,v8,v9],
      },
      {
        title: "E-commerce Application",
        description:
          "A replication of modern e-commerce website, offering similar features for online shoping.",
        images: [e1,e2,e3,e4,e5,e6,e7,e8,e9],
      },
      {
        title: "Church Application",
        description:
          "An application designed for church communities, enabling members to stay connected, view events, and access church resources conveniently.",
        images: [ddm1,ddm2,ddm3,ddm4,ddm5,ddm6,ddm7,ddm8,ddm9,ddm10,ddm11],
      },
    ],
    Logos: [
      {
        title: "Metal Beats",
        description: "",
        images: [mb1,mb2],
      },
      {
        title: "SB2 Group",
        description: "",
        images: [sb23,sb24,sb21,sb22],
      },
      {
        title: "Wish Tank",
        description: "",
        images: [w],
      },
      {
        title: "CentuRITon",
        description: "",
        images: [rit],
      },
    ],
    "Graphic Designs": [
      {
        title: "Banners",
        description: "",
        images: [cba11],
      },
      {
        title: "Posters",
        description: "",
        images: [cba11],
      },
    ],
  };

  const [selectedSection, setSelectedSection] = useState(sections[0]);
  const [activeProject, setActiveProject] = useState(0);
  const [activeImage, setActiveImage] = useState(0);
  const [fade, setFade] = useState(true);

  const handleNextImage = () => {
    setActiveImage((prevImage) => (prevImage + 1) % projects[selectedSection][activeProject].images.length);
  };

  const handlePrevImage = () => {
    setActiveImage((prevImage) =>
      prevImage === 0 ? projects[selectedSection][activeProject].images.length - 1 : prevImage - 1
    );
  };

  const handleDotClick = (index) => {
    setActiveImage(index);
  };

  const handleProjectChange = (index) => {
    setFade(false); // Trigger fade-out
    setTimeout(() => {
      setActiveProject(index);
      setActiveImage(0);
      setFade(true); // Trigger fade-in after fade-out is complete
    }, 300); // Duration of fade-out
  };

  return (
    <section id="work" className={styles.work}>
      <div className={styles.container}>
        <p className={styles.title}>Key Projects</p>
        <div className={styles.sectionMenu}>
          {sections.map((section, index) => (
            <button
              key={index}
              className={`${styles.sectionButton} ${
                selectedSection === section ? styles.activeSection : ""
              }`}
              onClick={() => {
                setSelectedSection(section);
                setActiveProject(0);
                setActiveImage(0);
              }}
            >
              {section}
            </button>
          ))}
        </div>
        <div className={styles.content}>
          <div className={styles.index}>
            {projects[selectedSection].map((project, index) => (
              <button
                key={index}
                className={`${styles.projectButton} ${
                  activeProject === index ? styles.active : ""
                }`}
                onMouseEnter={() => handleProjectChange(index)}
                onClick={() => handleProjectChange(index)}
              >
                {project.title}
              </button>
            ))}
          </div>
          <div className={`${styles.projectInfo} ${fade ? styles.fadeIn : styles.fadeOut}`}>
            {projects[selectedSection][activeProject] && (
              <>
                <div className={styles.carousel}>
                  <button className={`${styles.arrow} ${styles.left}`} onClick={handlePrevImage}>
                    &#10094;
                  </button>
                  {projects[selectedSection][activeProject].images.map((img, index) => (
                    <div className={styles.imageContainer} key={index}>
                      <img
                        src={img}
                        alt={`${projects[selectedSection][activeProject].title} ${index + 1}`}
                        className={`${styles.carouselImage} ${activeImage === index ? styles.active : ""}`}
                        loading="lazy"
                      />
                    </div>
                  ))}
                  <button className={`${styles.arrow} ${styles.right}`} onClick={handleNextImage}>
                    &#10095;
                  </button>
                  <div className={styles.dots}>
                    {projects[selectedSection][activeProject].images.map((_, index) => (
                      <span
                        key={index}
                        className={`${styles.dot} ${activeImage === index ? styles.active : ""}`}
                        onClick={() => handleDotClick(index)}
                      ></span>
                    ))}
                  </div>
                </div>
                <div className={styles.projectDetails}>
                  <h2 className={styles.projecttitle}>
                    {projects[selectedSection][activeProject].title}
                  </h2>
                  <p className={styles.projectdesc}>
                    {projects[selectedSection][activeProject].description}
                  </p>
                  
                  {projects[selectedSection][activeProject].githubLink && (
                    <a
                      href={projects[selectedSection][activeProject].githubLink}
                      className={styles.githubButton}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View on GitHub
                    </a>
                  )}
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