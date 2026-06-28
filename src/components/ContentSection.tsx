import React from 'react';
import styles from '../app/page.module.css';

export default function ContentSection() {
  return (
    <section className={styles.contentSection}>
      <div className={styles.contentContainer}>
        {/* Main Content (2-Column Text Layout) */}
        <article className={styles.article}>
          <p>
            Trí tuệ nhân tạo (AI) đang trở thành động lực cốt lõi trong cuộc cách mạng công nghiệp lần thứ tư, đặc biệt trong lĩnh vực điện tử và viễn thông. AI mang đến những cơ hội đột phá trong thiết kế mạng thế hệ mới (5G/6G), xử lý tín hiệu thông minh, tự động hóa hạ tầng mạng, bảo mật không gian mạng và phát triển các dịch vụ viễn thông tích hợp. Tuy nhiên, sự hội tụ giữa AI và viễn thông cũng đặt ra không ít thách thức về chuẩn hóa kỹ thuật, bảo mật dữ liệu, độ trễ thời gian thực, tính minh bạch của thuật toán và nhu cầu cấp bách về nguồn nhân lực chất lượng cao.
          </p>
          <p>
            Học viện Công nghệ Bưu chính Viễn thông – đơn vị đào tạo và nghiên cứu hàng đầu trong lĩnh vực công nghệ thông tin và truyền thông tại Việt Nam – phối hợp cùng Câu lạc bộ Khoa - Trường - Viện Công nghệ Thông tin - Truyền thông Việt Nam (FISU Việt Nam), Hội Vô tuyến Điện tử Việt Nam (REV) và Hội Tin học Việt Nam (VAIP) với sự bảo trợ của Bộ Khoa học và Công nghệ tổ chức Hội thảo Khoa học Quốc gia có ý nghĩa đặc biệt với chủ đề: <strong>"AI & Điện tử Viễn thông: Cơ hội, Thách thức và Hướng đi Tương lai" (AI4TELECOM 2026)</strong>.
          </p>
          <p>
            Hội thảo là diễn đàn để các nhà quản lý, kỹ sư, chuyên gia, nhà nghiên cứu trong lĩnh vực điện tử viễn thông và trí tuệ nhân tạo cùng nhau trao đổi, thảo luận về những vấn đề cốt lõi.
          </p>

          <h2 style={{ fontSize: '1.2rem', color: '#000', marginTop: '2.5rem', marginBottom: '1rem', textTransform: 'uppercase', paddingBottom: '0.5rem', display: 'inline-block' }}>
            CƠ CẤU TỔ CHỨC
          </h2>

          <div className={styles.twoColumnText}>
            {/* Column 1 */}
            <div>
              <div className={styles.committeeSection}>
                <h3>I. BAN CHỈ ĐẠO</h3>
                <p><strong>GS.TS. Nguyễn Thanh Thủy</strong><br/>Chủ tịch FISU Việt Nam - Trưởng Ban</p>
                <p><strong>PGS.TS. Đặng Hoài Bắc</strong><br/>Giám đốc Học viện - Đồng Trưởng ban</p>
                <p><strong>Ông Trần Đức Lai</strong><br/>Chủ tịch Hội Vô tuyến Điện tử Việt Nam</p>
                <p><strong>Ông Nguyễn Khắc Lịch</strong><br/>Cục trưởng Cục Công nghiệp Công nghệ Thông tin, Bộ Khoa học và Công nghệ</p>
                <p><strong>Ông Nguyễn Thành Chung</strong><br/>Cục trưởng Cục Viễn thông, Bộ Khoa học và Công nghệ</p>
                <p><strong>GS.TS. Từ Minh Phương</strong><br/>Phó Giám đốc Học viện</p>
              </div>

              <div className={styles.committeeSection}>
                <h3>II. BAN TỔ CHỨC</h3>
                <p><strong>TS. Nguyễn Trung Kiên</strong><br/>Phó Giám đốc Học viện - Trưởng Ban</p>
                <p><strong>PGS.TS. Ngô Quốc Dũng (PTIT)</strong><br/>Phó trưởng Ban</p>
                <p><strong>TS. Ngô Đức Thiện (PTIT)</strong><br/>Phó trưởng Ban</p>
                <p><strong>TS. Đỗ Trung Anh (PTIT)</strong></p>
              </div>
            </div>

            {/* Column 2 */}
            <div>
              <div className={styles.committeeSection}>
                <h3>III. BAN CHƯƠNG TRÌNH</h3>
                <p><strong>PGS.TS. Bùi Thu Lâm (FISU)</strong> - Trưởng Ban</p>
                <p><strong>PGS.TS. Đặng Thế Ngọc (PTIT)</strong> - Đồng Trưởng ban</p>
                <p><strong>GS.TS. Lê Sỹ Vinh (VNU)</strong></p>
                <p><strong>PGS.TS. Nguyễn Việt Hùng (MTA)</strong></p>
                <p><strong>PGS. TS. Nguyễn Hữu Quỳnh (CMCU)</strong></p>
                <p><strong>PGS.TS. Nguyễn Long Giang (IOIT)</strong></p>
                <p><strong>PGS. TS. Phạm Văn Cường (PTIT)</strong></p>
                <p><strong>PGS.TS. Hoàng Trọng Minh (PTIT)</strong></p>
                <p><strong>TS. Trần Tiến Công (PTIT)</strong></p>
                <p><strong>TS. Nguyễn Trung Hiếu (PTIT)</strong></p>
                <p><strong>PGS.TS. Ngô Quốc Dũng (PTIT)</strong></p>
              </div>

              <div className={styles.committeeSection}>
                <h3>IV. BAN CHUYÊN MÔN</h3>
                <p><strong>Tiểu ban 1:</strong> AI trong đào tạo điện tử viễn thông: Tác động và Ứng dụng</p>
                <p><strong>Tiểu ban 2:</strong> AI trong thiết kế, vận hành và tối ưu hóa mạng viễn thông</p>
                <p><strong>Tiểu ban 3:</strong> Bảo mật và an toàn mạng viễn thông trong thời đại AI</p>
              </div>
            </div>
          </div>
        </article>

        {/* Sidebar (Sponsor Logos) */}
        <aside className={styles.sidebar}>
          
          <div className={styles.sponsorCategory}>
            <div className={styles.categoryTitle}>
              <span className={styles.categoryIcon}>🏢</span>
              Đơn Vị Tổ Chức & Phối Hợp
            </div>
            <div className={styles.categoryLogos}>
              <div className={styles.logoItem}>
                <img src="/ptit.png" alt="PTIT Logo" />
                <span className={styles.logoText}>Học viện Công nghệ Bưu chính Viễn thông (PTIT)</span>
              </div>
              <div className={styles.logoItem}>
                <img src="/ict.png" alt="FISU Logo" />
                <span className={styles.logoText}>Câu lạc bộ Khoa - Trường - Viện CNTT-TT (FISU)</span>
              </div>
              <div className={styles.logoItem}>
                <img src="/REV.jpg" alt="REV Logo" />
                <span className={styles.logoText}>Hội Vô tuyến Điện tử Việt Nam (REV)</span>
              </div>
              <div className={styles.logoItem}>
                <img src="/Vaip.jpg" alt="VAIP Logo" />
                <span className={styles.logoText}>Hội Tin học Việt Nam (VAIP)</span>
              </div>
              <div className={styles.logoItem}>
                <img src="/ript.png" alt="RIPT Logo" />
                <span className={styles.logoText}>Viện Khoa học Kỹ thuật Bưu điện (RIPT)</span>
              </div>
            </div>
          </div>

          <div className={styles.sponsorCategory}>
            <div className={styles.categoryTitle}>
              <span className={styles.categoryIcon}>✉</span>
              Liên hệ Thư ký Hội thảo
            </div>
            <div style={{fontSize: '0.9rem', width: '100%', color: '#000', textAlign: 'center', lineHeight: '1.6'}}>
              <p><strong>TS. Nguyễn Huy Trung</strong></p>
              <p>Email: <a href="mailto:trungnh@ptit.edu.vn" style={{color: 'var(--ptit-red)'}}>trungnh@ptit.edu.vn</a></p>
            </div>
          </div>

        </aside>
      </div>
    </section>
  );
}
