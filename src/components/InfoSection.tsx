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
    // 0h ngày 10-9-2026. Month is 0-indexed, so 8 is September.
    const targetDate = new Date(2026, 8, 10, 0, 0, 0).getTime();

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
            <h3 className={styles.cardTitle}>AI4TELECOM 2026</h3>
            <p className={styles.cardTextDate}>10/09/2026</p>
            <p className={styles.cardTextLocation}>Hà Nội, Việt Nam</p>
          </div>
        </div>

        {/* Column 2: Submission */}
        <div className={styles.submissionCol}>
          <div className={styles.submissionCard}>
            <h3 className={styles.cardTitle}>AI4TELECOM 2026</h3>
            <p className={styles.cardHeader}>SUBMISSION</p>
            <p className={styles.cardText}>
              Gửi bài thông qua địa chỉ Email:<br/>
              <strong>ript@ptit.edu.vn</strong><br/>
              trước ngày <span className={styles.highlight}>31/08/2026</span>
            </p>
          </div>
        </div>

        {/* Column 3: Important Dates */}
        <div className={styles.datesCol}>
          <div className={styles.datesTitle}>IMPORTANT DATES</div>
          <div className={styles.dateList}>
            <div className={`${styles.dateRow} ${styles.urgent}`}>
              <div className={styles.datePill}>31/08/2026</div>
              <div className={styles.dateLabel}>Hạn cuối nhận bài</div>
            </div>
            <div className={styles.dateRow}>
              <div className={styles.datePill}>--/--/2026</div>
              <div className={styles.dateLabel}>Thông báo kết quả</div>
            </div>
            <div className={styles.dateRow}>
              <div className={styles.datePill}>--/--/2026</div>
              <div className={styles.dateLabel}>Gửi bài bản cuối</div>
            </div>
            <div className={styles.dateRow}>
              <div className={styles.datePill}>10/09/2026</div>
              <div className={styles.dateLabel}>Khai mạc hội thảo</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
