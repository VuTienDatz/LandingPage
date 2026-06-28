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
          <p className={styles.footerText}>Địa điểm: <a href="https://maps.google.com/?q=122+đường+Hoàng+Quốc+Việt+Nghĩa+Tân+Cầu+Giấy+Hà+Nội" target="_blank" rel="noopener noreferrer" className={styles.footerLink}>122 đường Hoàng Quốc Việt – phường Nghĩa Tân – quận Cầu Giấy – TP. Hà Nội</a></p>
        </div>
        <div>
          <h2 className={styles.contactTitle}>THÔNG TIN LIÊN HỆ</h2>
          <p className={styles.footerText}><strong>Trụ sở chính:</strong> <a href="https://maps.google.com/?q=122+đường+Hoàng+Quốc+Việt+Nghĩa+Tân+Cầu+Giấy+Hà+Nội" target="_blank" rel="noopener noreferrer" className={styles.footerLink}>122 đường Hoàng Quốc Việt – phường Nghĩa Tân – quận Cầu Giấy – TP. Hà Nội</a></p>
          <p className={styles.footerText}><strong>Cơ sở II:</strong> <a href="https://maps.google.com/?q=Số+271/10+An+Dương+Vương+Phường+3+Quận+5+Thành+phố+Hồ+Chí+Minh" target="_blank" rel="noopener noreferrer" className={styles.footerLink}>Số 271/10, An Dương Vương – Phường 3 – Quận 5 – Thành phố Hồ Chí Minh.</a></p>
          <p className={styles.footerText}><strong>Điện thoại:</strong> <a href="tel:02437561261" className={styles.footerLink}>02437561261</a></p>
          <p className={styles.footerText}><strong>Gmail:</strong> <a href="mailto:contact@ript.com" className={styles.footerLink}>contact@ript.com</a></p>
        </div>
      </div>
      <div className={styles.footerCopyright}>
        Bản quyền © 2026 <a href="#">Học viện Công nghệ Bưu chính Viễn thông</a>.
      </div>
    </footer>
  );
}
