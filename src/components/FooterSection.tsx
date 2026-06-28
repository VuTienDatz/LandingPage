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
          <p className={styles.footerText}><strong>Trụ sở chính:</strong> <a href="https://maps.google.com/?q=Số+122+Hoàng+Quốc+Việt+phường+Nghĩa+Đô+thành+phố+Hà+Nội" target="_blank" rel="noopener noreferrer" className={styles.footerLink}>Số 122 Hoàng Quốc Việt, phường Nghĩa Đô, thành phố Hà Nội</a></p>
          <p className={styles.footerText}><strong>Cơ sở đào tạo tại Hà Nội:</strong> <a href="https://maps.google.com/?q=Số+96A+Trần+Phú+phường+Hà+Đông+thành+phố+Hà+Nội" target="_blank" rel="noopener noreferrer" className={styles.footerLink}>Số 96A Trần Phú, phường Hà Đông, thành phố Hà Nội.</a></p>
          <p className={styles.footerText}><strong>Học viện cơ sở tại TP. Hồ Chí Minh:</strong> <a href="https://maps.google.com/?q=Số+11+Nguyễn+Đình+Chiểu+phường+Sài+Gòn+Thành+phố+Hồ+Chí+Minh" target="_blank" rel="noopener noreferrer" className={styles.footerLink}>Số 11 Nguyễn Đình Chiểu, phường Sài Gòn, Thành phố Hồ Chí Minh.</a></p>
          <p className={styles.footerText}><strong>Cơ sở đào tạo tại TP Hồ Chí Minh:</strong> <a href="https://maps.google.com/?q=Số+97+Man+Thiện+phường+Tăng+Nhơn+Phú+thành+phố+Hồ+Chí+Minh" target="_blank" rel="noopener noreferrer" className={styles.footerLink}>Số 97 Man Thiện, phường Tăng Nhơn Phú, thành phố Hồ Chí Minh.</a></p>
          <p className={styles.footerText}><strong>Email:</strong> <a href="mailto:ript@ptit.edu.vn" className={styles.footerLink}>ript@ptit.edu.vn</a></p>
        </div>
      </div>
      <div className={styles.footerCopyright}>
        Bản quyền © 2026 <a href="#">Học viện Công nghệ Bưu chính Viễn thông</a>.
      </div>
    </footer>
  );
}
