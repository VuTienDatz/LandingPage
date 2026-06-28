import React from 'react';
import styles from '../app/page.module.css';

export default function InfoSection() {
  return (
    <section className={styles.topSection}>
      <div className={styles.topContainer}>
        
        {/* Column 1: Countdown */}
        <div className={styles.countdownCol}>
          <div className={styles.countdownTitle}>COUNTDOWN</div>
          <div className={styles.countdownBox}>
            <div className={`${styles.countItem} ${styles.days}`}>
              <div className={styles.countNumber}>30</div>
              <div className={styles.countLabel}>DAYS</div>
            </div>
            <div className={styles.countItem}>
              <div className={styles.countNumber}>21</div>
              <div className={styles.countLabel}>HOURS</div>
            </div>
            <div className={styles.countItem}>
              <div className={styles.countNumber}>55</div>
              <div className={styles.countLabel}>MINUTES</div>
            </div>
            <div className={styles.countItem}>
              <div className={styles.countNumber}>34</div>
              <div className={styles.countLabel}>SECONDS</div>
            </div>
          </div>
          
          <div className={styles.conferenceCard}>
            <h3>IEEE ICCE 2026</h3>
            <p style={{marginBottom: '0.5rem'}}>July 29th-31st, 2026</p>
            <p>Sheraton Nha Trang Hotel & Spa, Nha Trang City,<br/>Khanh Hoa Province, Vietnam</p>
          </div>
        </div>

        {/* Column 2: Submission */}
        <div className={styles.submissionCol}>
          <h3>IEEE ICCE 2026</h3>
          <p>SUBMISSION</p>
        </div>

        {/* Column 3: Important Dates */}
        <div className={styles.datesCol}>
          <div className={styles.datesTitle}>IMPORTANT DATES</div>
          <div className={styles.dateList}>
            <div className={`${styles.dateRow} ${styles.urgent}`}>
              <div className={styles.datePill} style={{color: '#ef4444'}}>March 15th, 2026</div>
              <div className={styles.dateLabel}>Extended Submission Deadline</div>
            </div>
            <div className={styles.dateRow}>
              <div className={styles.datePill}>May 24th, 2026</div>
              <div className={styles.dateLabel}>Acceptance Notification</div>
            </div>
            <div className={styles.dateRow}>
              <div className={styles.datePill}>June 05th, 2026</div>
              <div className={styles.dateLabel}>Camera Ready</div>
            </div>
            <div className={styles.dateRow}>
              <div className={styles.datePill}>June 12th, 2026</div>
              <div className={styles.dateLabel}>Registration Deadline</div>
            </div>
            <div className={styles.dateRow}>
              <div className={styles.datePill}>July 29th-31st, 2026</div>
              <div className={styles.dateLabel}>Conference Date</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
