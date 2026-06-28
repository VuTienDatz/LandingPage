import React from 'react';
import { Calendar, MapPin } from 'lucide-react';
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
                <Calendar className={styles.btnIcon} />
                10/09/2026
              </div>
              <div className={styles.heroPill}>
                <MapPin className={styles.btnIcon} />
                Hà Nội, Việt Nam
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
