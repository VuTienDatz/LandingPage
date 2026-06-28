import React from 'react';
import styles from '../app/page.module.css';

export default function FooterSection() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <div>
          <h2 className={styles.footerTitle}>IEEE ICCE 2026</h2>
          <div className={styles.footerSubtitle}>2026 IEEE 11TH INTERNATIONAL CONFERENCE ON COMMUNICATIONS AND ELECTRONICS (ICCE 2026)</div>
          <p className={styles.footerText}>July 29th-31st, 2026</p>
          <p className={styles.footerText}>Sheraton Nha Trang Hotel & Spa, Nha Trang City, Khanh Hoa Province, Vietnam</p>
        </div>
        <div>
          <h2 className={styles.contactTitle}>Contact Us</h2>
          <p className={styles.footerText}>School of Electrical and Electronic Engineering</p>
          <p className={styles.footerText}>Hanoi University of Science and Technology</p>
          <p className={styles.footerText}>Address: 1 Dai Co Viet, Hanoi, Vietnam</p>
          <p className={styles.footerText}>Tel: +84-(0)2438694957</p>
          <p className={styles.footerText}>E-mail: secretariat@ieee-icce.org</p>
        </div>
      </div>
      <div className={styles.footerCopyright}>
        Copyright © 2026 <a href="#">The ICCE</a>. All rights reserved.
      </div>
    </footer>
  );
}
