"use client";

import React, { useState, useEffect } from 'react';
import styles from '../app/page.module.css';

export default function InfoSection() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const targetDate = new Date("July 29, 2026 00:00:00").getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000)
      });
    };

    updateCountdown(); // Run immediately
    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className={styles.topSection}>
      <div className={styles.topContainer}>
        
        {/* Column 1: Countdown */}
        <div className={styles.countdownCol}>
          <div className={styles.countdownTitle}>COUNTDOWN</div>
          <div className={styles.countdownBox}>
            <div className={`${styles.countItem} ${styles.days}`}>
              <div className={styles.countNumber}>
                {isMounted ? String(timeLeft.days).padStart(2, '0') : "00"}
              </div>
              <div className={styles.countLabel}>DAYS</div>
            </div>
            <div className={styles.countItem}>
              <div className={styles.countNumber}>
                {isMounted ? String(timeLeft.hours).padStart(2, '0') : "00"}
              </div>
              <div className={styles.countLabel}>HOURS</div>
            </div>
            <div className={styles.countItem}>
              <div className={styles.countNumber}>
                {isMounted ? String(timeLeft.minutes).padStart(2, '0') : "00"}
              </div>
              <div className={styles.countLabel}>MINUTES</div>
            </div>
            <div className={styles.countItem}>
              <div className={styles.countNumber}>
                {isMounted ? String(timeLeft.seconds).padStart(2, '0') : "00"}
              </div>
              <div className={styles.countLabel}>SECONDS</div>
            </div>
          </div>
          
          <div className={styles.conferenceCard}>
            <h3 style={{fontSize: '1.2rem', marginBottom: '0.5rem', fontWeight: 'bold'}}>IEEE ICCE 2026</h3>
            <p style={{marginBottom: '0.5rem', color: '#333'}}>July 29th-31st, 2026</p>
            <p style={{color: '#555'}}>Sheraton Nha Trang Hotel & Spa, Nha Trang City,<br/>Khanh Hoa Province, Vietnam</p>
          </div>
        </div>

        {/* Column 2: Submission */}
        <div className={styles.submissionCol}>
          <h3 style={{fontSize: '1.1rem', marginBottom: '1rem'}}>IEEE ICCE 2026</h3>
          <p style={{fontSize: '1.5rem', fontWeight: 'bold', color: '#fff', letterSpacing: '2px'}}>SUBMISSION</p>
        </div>

        {/* Column 3: Important Dates */}
        <div className={styles.datesCol}>
          <div className={styles.datesTitle}>IMPORTANT DATES</div>
          <div className={styles.dateList}>
            <div className={`${styles.dateRow} ${styles.urgent}`}>
              <div className={styles.datePill} style={{color: 'var(--ptit-red)'}}>March 15th, 2026</div>
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
