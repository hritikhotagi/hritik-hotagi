import React, { useState } from "react";
import styles from "./WorkStyles.module.css";
import image1 from "../../assets/111.jpg";
import image2 from "../../assets/222.png";
import image3 from "../../assets/333.jpg";

function Work() {
  const sections = [
    "Software Applications",
    "Web",
    "UI/UX",
    "Logos",
    "Graphic Designs",
  ];

  const projects = {
    "Software Applications": [
      {
        title: "AR App for Autistic Children to Learn Social Skills",
        description:
          "Developed tailored learning experiences for special needs kids by implementing AR and VR technologies, resulting in a significant improvement in social skills among autistic children as measured by engagement metrics.",
        images: [image1, image2, image3],
      },
      {
        title: "Car Renting and Hiring Application.",
        description:
          "Accomplished a streamlined car rental and hiring process by implementing a Java application, which led to an efficient and user-friendly booking system.",
        images: [image1],
      },
    ],
    Web: [
      {
        title: "Analytics Application (Management Dashboard)",
        description:
          "Accomplished analysis of growth, sales, and user retention metrics by implementing a dynamic dashboard for monitoring real-time user activities and events, which led to great decision-making and strategic planning for clients.",
        images: [image1],
      },
      {
        title: "Covid Guide Application",
        description:
          "Accomplished dissemination of critical information about the COVID-19 virus by implementing a dynamic website, which led to increased public awareness and access to real-time data on available hospital beds and infection counts.",
        images: [image3],
      },
      {
        title: "Blog Application",
        description:
          "The Blog Application allows users to create, edit, view, and delete blog posts, with secure authentication ensuring users can only modify their own content. Built with React, it features a responsive design, a rich text editor, and a user-friendly interface for seamless blogging.",
        images: [image3],
      },
    ],
    "UI/UX": [
      {
        title: "Car and Bike Analysis",
        description:
          "Will get all the analytical information about the indian vechicles, application created by Lazurus Benjamin",
        images: [image1],
      },
      {
        title: "Deep Sea Exploration Application",
        description:
          "An application showcasing new ocean explorations, where users can post and view discoveries. The content is moderated by an admin to ensure the accuracy and validity of the information shared.",
        images: [image1],
      },
      {
        title: "Cab Booking System",
        description:
          "A replication of modern cab booking apps, offering similar features for booking rides.",
        images: [image1],
      },
      {
        title: "E-commerce Application",
        description:
          "A replication of modern e-commerce website, offering similar features for online shoping.",
        images: [image1],
      },
      {
        title: "Church Application",
        description:
          "An application designed for church communities, enabling members to stay connected, view events, and access church resources conveniently.",
        images: [image1],
      },
    ],
    Logos: [
      {
        title: "Metal Beats",
        description: "",
        images: [image1],
      },
      {
        title: "SB2 Group",
        description: "",
        images: [image1],
      },
      {
        title: "Wish Tank",
        description: "",
        images: [image1],
      },
      {
        title: "CentuRITon",
        description: "",
        images: [image1],
      },
    ],
    "Graphic Designs": [
      {
        title: "Banners",
        description: "",
        images: [image1],
      },
      {
        title: "Posters",
        description: "",
        images: [image1],
      },
    ],
  };

  const [selectedSection, setSelectedSection] = useState(sections[0]);
  const [activeProject, setActiveProject] = useState(0);
  const [activeImage, setActiveImage] = useState(0);

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
                onMouseEnter={() => setActiveProject(index)}
                onClick={() => {
                  setActiveProject(index);
                  setActiveImage(0);
                }}
              >
                {project.title}
              </button>
            ))}
          </div>
          <div className={styles.projectInfo}>
            {projects[selectedSection][activeProject] && (
              <>
                <div className={styles.carousel}>
                  <button className={`${styles.arrow} ${styles.left}`} onClick={handlePrevImage}>
                    &#10094;
                  </button>
                  {projects[selectedSection][activeProject].images.map((img, index) => (
                    <img
                      key={index}
                      src={img}
                      alt={`${projects[selectedSection][activeProject].title} ${index + 1}`}
                      className={`${styles.carouselImage} ${activeImage === index ? styles.active : ""}`}
                    />
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
