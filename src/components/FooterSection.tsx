import React from 'react';
import styles from '../app/page.module.css';

export default function FooterSection() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <div>
          <h2 className={styles.footerTitle}>AI4TELECOM 2026</h2>
          <div className={styles.footerSubtitle}>HỘI THẢO KHOA HỌC QUỐC GIA AI & ĐIỆN TỬ VIỄN THÔNG (AI4TELECOM 2026)</div>
          <p className={styles.footerText}>Ngày tổ chức: 10/09/2026</p>
          <p className={styles.footerText}>Địa điểm: 122 đường Hoàng Quốc Việt – phường Nghĩa Tân – quận Cầu Giấy – TP. Hà Nội</p>
        </div>
        <div>
          <h2 className={styles.contactTitle}>THÔNG TIN LIÊN HỆ</h2>
          <p className={styles.footerText}><strong>Trụ sở chính:</strong> 122 đường Hoàng Quốc Việt – phường Nghĩa Tân – quận Cầu Giấy – TP. Hà Nội</p>
          <p className={styles.footerText}><strong>Cơ sở II:</strong> Số 271/10, An Dương Vương – Phường 3 – Quận 5 – Thành phố Hồ Chí Minh.</p>
          <p className={styles.footerText}><strong>Điện thoại:</strong> 02437561261</p>
          <p className={styles.footerText}><strong>Gmail:</strong> contact@ript.com</p>
        </div>
      </div>
      <div className={styles.footerCopyright}>
        Bản quyền © 2026 <a href="#">Học viện Công nghệ Bưu chính Viễn thông</a>.
      </div>
    </footer>
  );
}
