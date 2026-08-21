================================================================================
ĐỀ 10: SE MỞ - CỔNG TUYỂN DỤNG VIỆC LÀM & KHỚP CV AI (CAREERHUB AI)
DỰ ÁN: FPTU SMART CAREER & AI-POWERED INTERNSHIP MATCHING (CAREERHUB AI)
LỜI GIẢI MẪU CHUẨN PHÒNG THI EOS (BẢN TIẾNG VIỆT CÓ DẤU)
================================================================================

REQUEST 1: PROJECT CHARTER STATEMENT (2.0 Điểm)
--------------------------------------------------------------------------------

1. Project Name:
   FPT University Smart Career & AI-Powered Internship Matching Platform (CareerHub AI).

2. Project Purpose & Justification:

- Thực trạng & Điểm nghẽn (Current Pain Points):
  Hiện nay, mạng lưới 50.000 sinh viên Đại học FPT khi tìm kiếm nơi thực tập học kỳ doanh nghiệp (OJT) phải gửi CV rải rác qua email hoặc các nhóm mạng xã hội tự phát. Tỷ lệ phản hồi từ doanh nghiệp đạt dưới 15% do sinh viên nộp hồ sơ không khớp với yêu cầu tuyển dụng. Về phía hơn 500 doanh nghiệp đối tác, bộ phận HR phải mất từ 5 - 10 phút để đọc và sàng lọc thủ công từng CV, đồng thời không có công cụ xác thực độ tin cậy của bảng điểm và chứng chỉ kỹ năng do sinh viên tự khai.
- Mục đích dự án (Project Purpose):
  Xây dựng cổng thông tin hướng nghiệp và khớp hồ sơ thông minh ứng dụng công nghệ Trí tuệ Nhân tạo (NLP & Machine Learning), tự động trích xuất thông tin CV trong 5 giây, chấm điểm mức độ phù hợp (Match Score) với tin tuyển dụng và đồng bộ bảng điểm xác thực trực tiếp từ CSDL nhà trường.
- Giá trị mang lại (Value Delivered):

* Tăng 60% tỷ lệ sinh viên tìm được vị trí thực tập đúng chuyên ngành đào tạo.
* Giảm 75% thời gian sàng lọc và lên lịch phỏng vấn ứng viên cho doanh nghiệp đối tác.
* Số hóa 100% quy trình đánh giá kết quả thực tập OJT giữa Nhà trường - Sinh viên - Doanh nghiệp.

3. High-Level Requirements:

- Yêu cầu 1 (AI CV Parsing & Smart Semantic Skill Matching):
  Tự động đọc và chuẩn hóa dữ liệu từ CV đa định dạng (.pdf,.docx), trích xuất thực thể kỹ năng lập trình (NER), so khớp ngữ nghĩa với bản mô tả công việc (JD) và xuất điểm độ phù hợp Match Score từ 0 - 100%.
- Yêu cầu 2 (Employer ATS & Virtual Video Interview Room):
  Cung cấp phân hệ Quản lý Tuyển dụng (Applicant Tracking System - ATS) theo dạng kéo thả Kanban, tự động gửi thư mời phỏng vấn và tích hợp phòng phỏng vấn trực tuyến qua Video WebRTC độ nét cao.
- Yêu cầu 3 (Verified Student Portfolio & OJT Evaluation System):
  Hồ sơ sinh viên được tích hợp huy hiệu chứng thực (Verified Badges) kết nối từ CSDL nhà trường (GPA, đồ án môn học xuất sắc, chứng chỉ quốc tế) và phân hệ cho phép HR doanh nghiệp đánh giá kết quả kỳ OJT trực tuyến.

================================================================================
REQUEST 2: COST / BUDGET ESTIMATION (5 HẠNG MỤC SE & AI) (2.0 Điểm)
--------------------------------------------------------------------------------

Tổng ngân sách phê duyệt (BAC): $140,000 USD | Thời gian thực hiện: 7 tháng (28 tuần).

Cost Item 1: Software & AI Engineering Labor Cost

- Description: Tiền lương cho đội ngũ kỹ sư phát triển: 1 Project Manager (7m), 1 AI/NLP Engineer (7m), 2 Fullstack Developers (7m), 1 UI/UX Designer (5m), 1 QA Automation (5m). Tổng cộng 4.480 giờ làm việc.
- Estimation Method: Bottom-up Estimation.

* PM (7m): $20,000
* AI/NLP Lead (7m): $22,000
* 2 Fullstack Devs (7m): $32,000
* UI/UX Designer (5m): $9,000
* QA Automation (5m): $7,000

- Estimated Cost: $90,000
- Person in Charge: Project Manager & Engineering Lead.

Cost Item 2: Cloud Infrastructure & Database Hosting

- Description: Thuê máy chủ AWS EC2 backend, AWS RDS PostgreSQL, AWS S3 lưu trữ an toàn 50.000 tệp CV ứng viên và CloudFront CDN trong 10 tháng.
- Estimation Method: Parametric Estimation ($1,200/tháng x 10 tháng = $12,000).
- Estimated Cost: $12,000
- Person in Charge: Solution Architect & DevOps Lead.

Cost Item 3: AI NLP & OCR Parsing API Subscriptions

- Description: Bản quyền gói API mô hình ngôn ngữ lớn (OpenAI/Claude API) và OCR Parser phục vụ trích xuất và sinh Embedding cho 50.000 lượt tải CV.
- Estimation Method: Parametric Estimation (50.000 CVs x $0.25/CV = $12,500).
- Estimated Cost: $12,500
- Person in Charge: AI Lead & Procurement Officer.

Cost Item 4: Corporate Onboarding & Virtual Job Fair Setup

- Description: Tổ chức 4 buổi tập huấn trực tuyến cho 200 HR doanh nghiệp đối tác và chi phí hạ tầng truyền phát phục vụ Ngày hội Tuyển dụng Ảo (Virtual Job Fair) cho 10.000 sinh viên.
- Estimation Method: Bottom-up Estimation.
- Estimated Cost: $10,500
- Person in Charge: Corporate Relations Lead & Event Coordinator.

Cost Item 5: Contingency Reserve (Quỹ dự phòng rủi ro)

- Description: Dự phòng rủi ro định dạng CV phức tạp làm giảm độ chính xác trích xuất NER cần fine-tune mô hình, chi phí tăng ca tối ưu thuật toán matching hoặc mở rộng băng thông phòng phỏng vấn WebRTC trong ngày hội việc làm.
- Estimation Method: Reserve Analysis (Trích lập xấp xỉ 10.71% trên tổng ngân sách BAC).

* Base Total = $90,000 + $12,000 + $12,500 + $10,500 = $125,000.
* Contingency Reserve = $15,000.
* Total Project Budget (BAC) = $125,000 + $15,000 = $140,000.

- Estimated Cost: $15,000
- Person in Charge: Project Sponsor & Project Manager.

================================================================================
REQUEST 3: PROJECT COMMUNICATION PLAN (3.0 Điểm)
--------------------------------------------------------------------------------

Kế hoạch Giao tiếp (Communication Plan Matrix):

Stakeholder 1: Project Engineering & AI Team (Project-Internal)

- Information: Tiến độ Sprint hàng ngày, độ chính xác mô hình NLP NER trích xuất CV, hiệu năng thuật toán Cosine Matching, gỡ blocker kỹ thuật.
- Purpose: Đồng bộ công việc giữa AI, Backend, Frontend và QA để đảm bảo chất lượng hệ thống.
- Frequency: Hàng ngày (Daily 15 phút).
- Method / Format: Daily Standup qua Slack Huddle + Quản lý tiến độ Jira Agile.
- Responsible Person: Scrum Master / AI Tech Lead.

Stakeholder 2: Phòng Quan hệ Doanh nghiệp & Ban Đào tạo OJT (Organization-Internal)

- Information: Báo cáo số lượng doanh nghiệp tham gia, tiến độ kết nối API CSDL bảng điểm sinh viên, quy chế đánh giá OJT trực tuyến.
- Purpose: Đảm bảo dữ liệu sinh viên được bảo mật tuyệt đối và quy trình khớp nối tuân thủ quy chế thực tập của Nhà trường.
- Frequency: 2 tuần / lần (Bi-weekly).
- Method / Format: Cuộc họp giao ban trực tiếp + Báo cáo Dashboard tự động qua Email.
- Responsible Person: Project Manager & Head of Corporate Relations.

Stakeholder 3: HR Doanh nghiệp & Sinh viên tìm việc (External)

- Information: Hướng dẫn đăng tin tuyển dụng và lọc CV trên ATS, thông báo gợi ý việc làm phù hợp cho sinh viên, thư mời phỏng vấn video trực tuyến.
- Purpose: Hỗ trợ doanh nghiệp tuyển đúng nhân tài và giúp sinh viên tiếp cận cơ hội thực tập nhanh nhất.
- Frequency: Hàng tuần và tự động gửi thông báo theo từng sự kiện ứng tuyển.
- Method / Format: Workshop Webinar trực tuyến + Email thông báo tự động từ hệ thống + Live Chat hỗ trợ.
- Responsible Person: Lead Business Analyst (BA) & User Operations Lead.

================================================================================
REQUEST 4: MILESTONES & 10 HOẠT ĐỘNG KỸ THUẬT PHẦN MỀM (3.0 Điểm)
--------------------------------------------------------------------------------

1. Ba Cột mốc Kỹ thuật chính của Dự án:

- Milestone 1 (SRS & AI Pipeline Baseline Sign-off): Hoàn thiện Tài liệu Đặc tả Yêu cầu (SRS) và Thiết kế Kiến trúc Pipeline AI CV Matching (Cuối Tháng 2).
- Milestone 2 (AI Matching Engine & Employer ATS Complete): Hoàn thành lập trình Động cơ Khớp CV bằng AI và Phân hệ ATS dành cho Nhà tuyển dụng (Cuối Tháng 5).
- Milestone 3 (Virtual Job Fair Trial & Official Go-Live): Nghiệm thu thành công Ngày hội Tuyển dụng Ảo thử nghiệm và chính thức Go-Live toàn trường (Cuối Tháng 7).

2. Chi tiết 10 Hoạt động của Milestone 2 (AI Matching & Employer ATS) & Quan hệ Logic:

- Activity 1 (A1): Thiết lập kiến trúc Backend (Spring Boot/NestJS) và CSDL quan hệ PostgreSQL.

* Predecessors: Start (Milestone 1 Sign-off)
* Dependency: FS

- Activity 2 (A2): Xây dựng Pipeline trích xuất văn bản từ CV đa định dạng (OCR & PDF/DOCX Parser).

* Predecessors: A1
* Dependency: FS (CSDL và dịch vụ lưu trữ sẵn sàng mới triển khai module đọc file).

- Activity 3 (A3): Xây dựng mô hình NLP trích xuất thực thể kỹ năng, học vấn và kinh nghiệm (NER Engine).

* Predecessors: A2
* Dependency: FS (Phải có văn bản thô từ A2 mới tiến hành trích xuất thực thể ngữ nghĩa).

- Activity 4 (A4): Lập trình thuật toán tính toán độ tương đồng ngữ nghĩa (Cosine Similarity) giữa CV và JD.

* Predecessors: A3
* Dependency: FS (Cần có vector kỹ năng từ NER mới tính điểm độ phù hợp Match Score).

- Activity 5 (A5): Phát triển Giao diện Web Portal (ReactJS) cho Sinh viên tải CV và xem gợi ý việc làm.

* Predecessors: A1
* Dependency: FS (Xây dựng khung giao diện sinh viên độc lập ngay sau khi có cấu trúc CSDL).

- Activity 6 (A6): Phát triển Phân hệ Quản trị Tuyển dụng ATS (Kanban Board) dành cho Doanh nghiệp.

* Predecessors: A1
* Dependency: FS (Triển khai giao diện quản lý ứng viên cho HR song song với giao diện sinh viên).

- Activity 7 (A7): Tích hợp Module Lên lịch Phỏng vấn và Tự động Gửi Thư mời qua Email/SMS.

* Predecessors: A6
* Dependency: SS (Gối đầu song song: Xây dựng module lịch phỏng vấn đồng thời với hoàn thiện bảng ATS).

- Activity 8 (A8): Tích hợp Phòng Phỏng vấn Trực tuyến Video Call WebRTC độ nét cao.

* Predecessors: A7
* Dependency: FS (Có luồng tạo phòng và lịch hẹn A7 mới khởi tạo phòng Video Call).

- Activity 9 (A9): Phát triển Giao diện Báo cáo Chấm điểm Độ tương thích Ứng viên (Match Report) cho HR.

* Predecessors: A4, A6
* Dependency: FF (Giao diện hiển thị điểm Match hoàn thành khi cả Thuật toán A4 và Bảng ATS A6 đã xong).

- Activity 10 (A10): Kiểm thử Tích hợp Tự động Toàn luồng: Nộp CV -> AI Chấm điểm -> HR Duyệt -> Lên lịch Phỏng vấn Video.

* Predecessors: A5, A8, A9
* Dependency: FS (Kiểm thử tích hợp toàn diện chỉ bắt đầu khi toàn bộ Portal sinh viên A5, Video Call A8 và Báo cáo HR A9 hoàn tất).
  \================================================================================
