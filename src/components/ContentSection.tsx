import React from 'react';
import { Building2, Mail } from 'lucide-react';
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
            Học viện Công nghệ Bưu chính Viễn thông – đơn vị đào tạo và nghiên cứu hàng đầu trong lĩnh vực công nghệ thông tin và truyền thông tại Việt Nam – phối hợp cùng Câu lạc bộ Khoa - Trường - Viện Công nghệ Thông tin - Truyền thông Việt Nam (FISU Việt Nam), Hội Vô tuyến Điện tử Việt Nam (REV) và Hội Tin học Việt Nam (VAIP) tổ chức Hội thảo Khoa học Quốc gia có ý nghĩa đặc biệt với chủ đề: <strong>&quot;AI & Điện tử Viễn thông: Cơ hội, Thách thức và Hướng đi Tương lai&quot; (AI4TELECOM 2026)</strong>.
          </p>
          <p>
            Hội thảo là diễn đàn để các nhà quản lý, kỹ sư, chuyên gia, nhà nghiên cứu trong lĩnh vực điện tử viễn thông và trí tuệ nhân tạo cùng nhau trao đổi, thảo luận về những vấn đề cốt lõi.
          </p>

          <h2 className={styles.sectionTitle} style={{ marginTop: '2rem' }}>
            THÔNG TIN CHUNG
          </h2>

          <div className={styles.twoColumnText}>
            {/* Column 1 */}
            <div>
              <div className={styles.committeeSection}>
                <h3>1. Mục đích, yêu cầu</h3>
                <p>- Nhận diện và phân tích những cơ hội và thách thức mà AI mang lại cho ngành điện tử và viễn thông Việt Nam trong bối cảnh chuyển đổi số quốc gia.</p>
                <p>- Chia sẻ kinh nghiệm, ý tưởng và mô hình ứng dụng AI thành công trong mạng 5G/6G, IoT, xử lý tín hiệu, bảo mật mạng và các dịch vụ viễn thông thế hệ mới.</p>
                <p>- Đề xuất các giải pháp kỹ thuật, chính sách và định hướng chiến lược để tận dụng tối đa lợi ích của AI, đồng thời kiểm soát các rủi ro tiềm ẩn.</p>
                <p>- Xây dựng lộ trình phát triển và hợp tác nghiên cứu giữa các tổ chức khoa học, doanh nghiệp viễn thông và cơ quan quản lý nhà nước.</p>
              </div>

              <div className={styles.committeeSection}>
                <h3>2. Thời gian, địa điểm, hình thức tổ chức</h3>
                <p>- <strong>Thời gian (dự kiến):</strong> 08:00 – 17:00, ngày 10/09/2026.</p>
                <p>- <strong>Địa điểm:</strong> Viện Khoa học Kỹ thuật Bưu Điện, Học viện Công nghệ Bưu chính Viễn thông, 122 Hoàng Quốc Việt, Nghĩa Đô, Hà Nội.</p>
                <p>- <strong>Hình thức tổ chức:</strong> Trực tiếp.</p>
              </div>
            </div>

            {/* Column 2 */}
            <div>
              <div className={styles.committeeSection}>
                <h3>3. Thành phần tham gia</h3>
                <p><strong>3.1. Đại biểu mời</strong></p>
                <p>- Đại diện lãnh đạo Bộ Khoa học và Công nghệ, Bộ Giáo dục và Đào tạo;</p>
                <p>- Đại diện lãnh đạo Hội Vô tuyến Điện tử Việt Nam (REV), Hội Tin học Việt Nam (VAIP), FISU Việt Nam;</p>
                <p>- Chuyên gia, nhà nghiên cứu trong lĩnh vực AI, điện tử và viễn thông;</p>
                <p>- Đại diện các doanh nghiệp viễn thông và công nghệ (Viettel, VNPT, MobiFone, FPT, Nokia, Ericsson, Qualcomm, Huawei...);</p>
                <p>- Đại biểu viết báo cáo khoa học và trình bày tham luận tại Hội thảo;</p>
                <p>- Đại diện các trường đại học, viện nghiên cứu thuộc lĩnh vực CNTTTT;</p>
                <p>- Nhà quản lý, hoạch định chính sách quan tâm đến AI trong viễn thông.</p>
                <p><strong>3.2. Đơn vị tổ chức</strong></p>
                <p>- Đơn vị chủ trì: Học viện Công nghệ Bưu chính Viễn thông (PTIT)</p>
                <p>- Đơn vị phối hợp chuyên môn: Câu lạc bộ Khoa - Trường - Viện CNTT-TT Việt Nam (FISU Việt Nam)</p>
                <p>- Đơn vị bảo trợ dự kiến: Bộ Khoa học và Công nghệ; Hội Vô tuyến Điện tử Việt Nam (REV); Hội Tin học Việt Nam (VAIP)</p>
                <p><em>Tổng số đại biểu và khách mời dự kiến: khoảng 200 - 250 đại biểu.</em></p>
              </div>

              <div className={styles.committeeSection}>
                <h3>4. Nội dung Hội thảo</h3>
                <p><strong>4.1. Số lượng báo cáo/tham luận (dự kiến)</strong></p>
                <p>- Tổng số: 40 bài viết</p>
                <p>- Số báo cáo/tham luận trình bày trực tiếp dự kiến: 17 báo cáo, gồm các báo cáo keynote và báo cáo tại các phiên chuyên đề.</p>
                <p>&nbsp;&nbsp;+ Số báo cáo trình bày phiên toàn thể: 05 báo cáo (Keynote);</p>
                <p>&nbsp;&nbsp;+ Số báo cáo tại các phiên chuyên đề buổi sáng: 12 báo cáo, dự kiến 03 phiên, mỗi phiên 04 báo cáo;</p>
                <p>&nbsp;&nbsp;+ Các báo cáo viên gửi tiêu đề, tóm tắt (abstract) và slide trình bày; bài full paper là tùy chọn, không xác định trước số lượng.</p>
              </div>
            </div>
          </div>

          <hr style={{ border: 'none', borderTop: '1px solid #e2e8f0', margin: '3rem 0' }} />

          <div className={styles.twoColumnText}>
            {/* Column 1 */}
            <div>
              <div className={styles.committeeSection}>
                <h3>I. BAN CHỈ ĐẠO</h3>
                <p><strong>GS.TS. Nguyễn Thanh Thủy</strong><br/>Chủ tịch FISU Việt Nam - Trưởng Ban</p>
                <p><strong>PGS.TS. Đặng Hoài Bắc</strong><br/>Giám đốc Học viện - Đồng Trưởng ban</p>
                <p><strong>Ông Trần Đức Lai</strong><br/>Chủ tịch Hội Vô tuyến Điện tử Việt Nam</p>
                <p><strong>Ông Nguyễn Khắc Lịch</strong><br/>Cục trưởng Cục Công nghiệp Công nghệ Thông tin, Bộ Khoa học và Công nghệ</p>
                <p><strong>Ông Nguyễn Phong Nhã</strong><br/>Phó Cục trưởng Cục Viễn thông, Bộ Khoa học và Công nghệ</p>
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
                <p><strong>Phiên hội thảo 1:</strong> AI trong đào tạo điện tử viễn thông: Tác động và Ứng dụng</p>
                <p><strong>Phiên hội thảo 2:</strong> AI trong thiết kế, vận hành và tối ưu hóa mạng viễn thông</p>
                <p><strong>Phiên hội thảo 3:</strong> Bảo mật và an toàn mạng viễn thông trong thời đại AI</p>
              </div>
            </div>
          </div>
        </article>

        {/* Sidebar (Sponsor Logos) */}
        <aside className={styles.sidebar}>
          
          <div className={styles.sponsorCategory}>
            <div className={styles.categoryTitle}>
              <span className={styles.categoryIcon}><Building2 size={24} /></span>
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
              <span className={styles.categoryIcon}><Mail size={24} /></span>
              Liên hệ Thư ký Hội thảo
            </div>
            <div style={{fontSize: '0.9rem', width: '100%', color: '#000', textAlign: 'center', lineHeight: '1.6'}}>
              <p><strong>TS. Nguyễn Huy Trung</strong></p>
              <p>Email: <a href="https://mail.google.com/mail/?view=cm&fs=1&to=trungnh@ptit.edu.vn" target="_blank" rel="noopener noreferrer" style={{color: '#2563eb', textDecoration: 'none'}}>trungnh@ptit.edu.vn</a></p>
            </div>
          </div>

        </aside>
      </div>
    </section>
  );
}
