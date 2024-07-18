import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import styles from "./NavStyles.module.css";
import logo from "../../assets/logo.png";

function Nav() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={`${styles.nav} ${isScrolled ? styles.scrolled : ""}`}>
      <HashLink to="#hero" className={styles.logoLink}>
        <img src={logo} alt="Logo" className={styles.logo} />
      </HashLink>
      <div className={styles.navigation}>
        <HashLink smooth to="/#intro" className={styles.link}>
          Intro
        </HashLink>
        <HashLink smooth to="/#skills" className={styles.link}>
          Skills
        </HashLink>
        <HashLink smooth to="/#work" className={styles.link}>
          Work
        </HashLink>
        <HashLink smooth to="/#experience" className={styles.link}>
          Experience
        </HashLink>
        <HashLink smooth to="/#contact" className={styles.link}>
          Reach out
        </HashLink>
      </div>
    </nav>
  );
}

export default Nav;
