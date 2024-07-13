import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
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
      <NavLink to="/" className={styles.logoLink}>
        <img src={logo} alt="Logo" className={styles.logo} />
      </NavLink>
      <div className={styles.navigation}>
        <NavLink to="/skills" className={({ isActive }) => isActive ? `${styles.link} ${styles.active}` : styles.link}>
          Skills
        </NavLink>
        <NavLink to="/work" className={({ isActive }) => isActive ? `${styles.link} ${styles.active}` : styles.link}>
          Work
        </NavLink>
        <NavLink to="/experience" className={({ isActive }) => isActive ? `${styles.link} ${styles.active}` : styles.link}>
          Experience
        </NavLink>
      </div>
    </nav>
  );
}

export default Nav;
