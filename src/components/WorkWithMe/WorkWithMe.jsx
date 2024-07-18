import React from 'react';
import styles from "./WorkWithMeStyles.module.css";

function WorkWithMe() {
  return (
    <section id="workwithme" className={styles.workwithme}>  
        <div className={styles.container}>
            <p className={styles.tag}>Hritik S Hotagi</p>
            <p className={styles.title}>Work with me </p>
            <div className={styles.linksContainer}>
                <p className={styles.linkName}>Client Intake Form:</p>
                <a className={styles.link} href="http://google.com">asddsfsdfsadfadsfasdfasdfsadfasdfasdfsad</a>
                <p className={styles.linkName}>Email:</p>
                <p className={styles.link}>hritikhotagiofficial@gmail.com</p>
            </div>
        </div>
        <div className={styles.footer}>
            <p>Designed & Developed by Hritik</p>
        </div>
    </section>
  )
}

export default WorkWithMe;
