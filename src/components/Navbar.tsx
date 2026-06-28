import React from 'react';
import styles from './Navbar.module.css';

export default function Navbar() {
  return (
    <header className={styles.header}>
      <div className={styles.archived}>
        Archived: 
        <a href="#">2006</a> | <a href="#">2008</a> | <a href="#">2010</a> | <a href="#">2012</a> | <a href="#">2014</a> | <a href="#">2016</a> | <a href="#">2018</a> | <a href="#">2020</a> | <a href="#">2022</a> | <a href="#">2024</a>
      </div>
      <nav className={styles.nav}>
        <div className={styles.navLink}>Home</div>
        <div className={styles.navLink}>Call for Papers</div>
        <div className={styles.navLink}>Sponsor and Exhibition</div>
        <div className={`${styles.navLink} ${styles.active}`}>What&apos;s news</div>
        <div className={styles.navLink}>Committees</div>
        <div className={styles.navLink}>Keynotes</div>
        <div className={styles.navLink}>Tutorials</div>
        <div className={styles.navLink}>Workshops</div>
        <div className={styles.navLink}>Submission</div>
        <div className={styles.navLink}>Special Sessions</div>
        <div className={styles.navLink}>Registration</div>
        <div className={styles.navLink}>Program</div>
        <div className={styles.navLink}>Visa, Hotel and Travel</div>
        <div className={styles.navLink}>Customer support</div>
        <div className={styles.navLink}>Privacy Policy</div>
        <div className={styles.navLink}>Terms Of Service</div>
      </nav>
    </header>
  );
}
