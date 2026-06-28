import React from 'react';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.heroWrapper}>
      <div className={styles.hero}>
        
        {/* Background Image (Left 60%) */}
        <div className={styles.heroLeft}></div>

        {/* Fog Overlay (30% to 60%, sitting on top of heroLeft) */}
        <div className={styles.heroOverlay}></div>

        <div className={styles.heroContent}>
          {/* Right Side: Information */}
          <div className={styles.heroRight}>
            
            {/* 1. Đơn vị phối hợp tổ chức (Sponsors first) */}
            <div className={styles.sponsorsWrapper}>
              <p className={styles.sponsorsTitle}>ĐƠN VỊ PHỐI HỢP TỔ CHỨC</p>
              <div className={styles.heroRightLogosGroup}>
                <img src="/ptit.png" alt="PTIT Logo" className={styles.topLogo} />
                <img src="/ict.png" alt="ICT FISU Logo" className={styles.topLogo} />
                <img src="/ript.png" alt="RIPT Logo" className={styles.topLogo} />
              </div>
            </div>

            {/* 2. AI4TELECOM */}
            <div className={styles.redBlock}>
              AI4TELECOM 2026
            </div>
            
            {/* 3. Các chữ tiếp theo (Titles) */}
            <h3 className={styles.subTitle}>HỘI THẢO KHOA HỌC QUỐC GIA</h3>
            <h2 className={styles.mainTitle}>
              AI & ĐIỆN TỬ VIỄN THÔNG:<br />
              CƠ HỘI, THÁCH THỨC VÀ HƯỚNG ĐI TƯƠNG LAI
            </h2>
            
            {/* 4. Hai nút thời gian địa điểm (Buttons at the bottom) */}
            <div className={styles.heroButtons}>
              <div className={styles.heroPill}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.btnIcon}>
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                  <line x1="16" y1="2" x2="16" y2="6"></line>
                  <line x1="8" y1="2" x2="8" y2="6"></line>
                  <line x1="3" y1="10" x2="21" y2="10"></line>
                </svg>
                10/09/2026
              </div>
              <div className={styles.heroPill}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.btnIcon}>
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
                Hà Nội, Việt Nam
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
