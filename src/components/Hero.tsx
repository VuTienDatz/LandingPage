import React from 'react';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroLeft}>
        <div className={styles.heroLeftLogo}>
          20
          <span className={styles.yearText}>YEAR</span>
          <span className={styles.anniversaryText}>ANNIVERSARY</span>
          <span className={styles.ieeeText}>IEEE ICCE</span>
        </div>
      </div>
      
      {/* SVG Curve Separator */}
      {/* SVG Curve Separator */}
      <svg className={styles.curveSvg} viewBox="0 0 100 800" preserveAspectRatio="none">
        <path d="M0 0 C 100 200, -50 600, 100 800 L 100 0 Z" fill="var(--ptit-dark-light)" />
        <path d="M10 0 C 110 200, -40 600, 110 800 L 110 0 Z" fill="var(--ptit-dark)" />
      </svg>

      <div className={styles.heroRight}>
        <div className={styles.heroRightLogo}>
          <span className={styles.logoNumber}>70</span>
          <div className={styles.logoTextCol}>
            <div className={styles.logoYears}>
              <span>1956</span>
              <span>2026</span>
            </div>
            <strong className={styles.logoHust}>HUST</strong>
          </div>
        </div>

        {/* Removed text gradient, using solid color */}
        <h1 className={styles.heroTitleSolid}>IEEE ICCE 2026</h1>
        <h2 className={styles.heroTitleMain}>THE 11th IEEE INTERNATIONAL CONFERENCE ON COMMUNICATIONS AND ELECTRONICS 2026</h2>
        
        {/* Overlapping/Grouped Buttons */}
        <div className={styles.heroButtons}>
          <div className={styles.heroPill}>29 - 31/7/2026</div>
          <div className={styles.heroPill}>Nha Trang, Vietnam</div>
        </div>
      </div>
    </section>
  );
}
