import React, { useEffect, useState } from "react";
import { HashLink } from "react-router-hash-link";
import styles from "./NavStyles.module.css";
import logo from "../../assets/logo.png";

function Nav() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={`${styles.nav} ${isScrolled ? styles.scrolled : ""}`}>
      <div className={styles.centre}>
        <HashLink to="#hero" className={styles.logoLink}>
          <img src={logo} alt="Logo" className={styles.logo} />
        </HashLink>
        <div
          className={`${styles.navigation} ${isMenuOpen ? styles.open : ""}`}
        >
          <HashLink
            smooth
            to="/#intro"
            className={styles.link}
            onClick={toggleMenu}
          >
            Intro
          </HashLink>
          <HashLink
            smooth
            to="/#skills"
            className={styles.link}
            onClick={toggleMenu}
          >
            Skills
          </HashLink>
          <HashLink
            smooth
            to="/#work"
            className={styles.link}
            onClick={toggleMenu}
          >
            Work
          </HashLink>
          <HashLink
            smooth
            to="/#experience"
            className={styles.link}
            onClick={toggleMenu}
          >
            Experience
          </HashLink>
          <HashLink
            smooth
            to="/#contact"
            className={styles.link}
            onClick={toggleMenu}
          >
            Reach out
          </HashLink>
        </div>
      </div>
      <div className={styles.hamburger} onClick={toggleMenu}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </nav>
  );
}

export default Nav;
