# ĐỀ SỐ 10: SE MỞ - CỔNG TUYỂN DỤNG VIỆC LÀM & KHỚP HỒ SƠ AI (CAREER & INTERNSHIP MATCHING)

> **Chuyên ngành:** Kỹ thuật Phần mềm (Software Engineering - SE) | **Môn học:** PMG201c
> **Dạng đề:** Đề thi Mở (Open Project Scenario) | **Thời gian làm bài:** 60 - 90 phút | **Hình thức thi:** Thực hành trên máy (EOS Client)

---

## PHẦN I: ĐỀ BÀI (EXAM QUESTIONS - 10.0 ĐIỂM)

### BỐI CẢNH ĐỀ BÀI (OPEN SE SCENARIO)

Giả định bạn là Quản trị Dự án (Project Manager) được giao xây dựng dự án: **Cổng Thông tin Hướng nghiệp, Thực tập & Khớp Hồ sơ Ứng viên Bằng AI (University Career & AI-Powered Internship Matching Platform - CareerHub AI)** cho mạng lưới 50,000 sinh viên và hơn 500 doanh nghiệp đối tác tuyển dụng của trường Đại học.

Hệ thống ứng dụng công nghệ Xử lý Ngôn ngữ Tự nhiên (NLP) để tự động trích xuất thông tin CV (CV Parsing), chấm điểm độ tương thích giữa năng lực sinh viên với yêu cầu tuyển dụng của doanh nghiệp (Job Match Score) và tổ chức phỏng vấn trực tuyến.

---

### CÁC YÊU CẦU ĐỀ THI (EXAM REQUESTS)

- **Request 1 (20% - 2.0 Điểm): Narrative Project Charter Statement**
  Xây dựng bản Điều lệ Dự án chi tiết bao gồm:

1.  Project Name (chuẩn quy tắc đặt tên phần mềm kỹ thuật).
2.  Project Purpose or Justification (nêu rõ thực trạng khó khăn khi sinh viên tìm kiếm nơi thực tập OJT và sự lãng phí thời gian của nhà tuyển dụng khi lọc CV thủ công).
3.  High-level Requirements (mô tả ít nhất 3 yêu cầu cấp cao của hệ thống: Phân tích & Chấm điểm CV tự động bằng AI, Hệ thống Quản trị Tuyển dụng ATS dành cho Doanh nghiệp, Phân hệ Xác thực Năng lực Sinh viên & Lên lịch Phỏng vấn Video).

- **Request 2 (20% - 2.0 Điểm): Cost / Budget Estimation (5 Hạng mục Phần mềm SE & AI)**
  Lập bảng dự toán 5 hạng mục chi phí: Chi phí Nhân sự Đội ngũ Kỹ sư Phần mềm & AI, Thuê Hạ tầng Máy chủ Cloud AWS (EC2, S3, RDS), Bản quyền API Mô hình Ngôn ngữ Lớn / OCR CV Parser, Chi phí Tổ chức Ngày hội Tuyển dụng Ảo (Virtual Job Fair) & Tập huấn Doanh nghiệp, Quỹ dự phòng rủi ro Contingency Reserve. Nêu rõ: Tên, Mô tả, Phương pháp ước lượng, Công thức chi tiết, Số tiền và Người phụ trách.

- **Request 3 (30% - 3.0 Điểm): Project Communication Plan**
  Xây dựng kế hoạch giao tiếp chi tiết cho 3 nhóm Stakeholder:

1.  **Project-Internal:** Đội ngũ phát triển phần mềm (AI Engineer, Backend, Frontend, QA, PM).
2.  **Organization-Internal:** Phòng Quan hệ Doanh nghiệp & Quản lý Đào tạo Thực tập OJT.
3.  **External:** Nhà tuyển dụng Doanh nghiệp (HR Managers) & Sinh viên tìm việc.
    Bảng giao tiếp phải đủ 5 cột: Thông tin trao đổi, Mục đích, Tần suất, Phương thức/Công cụ, Người chịu trách nhiệm.

- **Request 4 (30% - 3.0 Điểm): Milestones & Chuỗi 10 Hoạt động Kỹ thuật (Activities Sequence)**
  Xác định ít nhất 3 Cột mốc kỹ thuật của dự án. Chọn Cột mốc **Phát triển Module Khớp CV Bằng AI & Tích hợp Phân hệ Nhà tuyển dụng ATS**, liệt kê 10 hoạt động kỹ thuật chi tiết kèm mối quan hệ tiền nhiệm (**FS, SS, FF**).

---

## PHẦN II: HƯỚNG DẪN CÁCH LÀM & KHUNG TRẢ LỜI CHUẨN EOS

---

### HƯỚNG DẪN REQUEST 1: PROJECT CHARTER CHO CỔNG TUYỂN DỤNG AI (2.0 Điểm)

#### 1. Khung tên dự án chuẩn:

`FPT University Smart Career & AI-Powered Internship Matching Platform (CareerHub AI)`

#### 2. Lập luận Mục đích & Lý do (Justification):

- **Thực trạng cũ:** Sinh viên chuẩn bị đi thực tập OJT phải gửi CV rải rác qua email hoặc các nhóm mạng xã hội; tỷ lệ phản hồi thấp ($< 15\%$), nhiều sinh viên nộp nhầm vị trí không phù hợp năng lực. Về phía doanh nghiệp, HR mất 5 - 10 phút để đọc 1 CV thủ công, khó kiểm chứng bảng điểm và chứng chỉ do sinh viên tự khai.
- **Mục đích dự án:** Xây dựng cổng thông tin nghề nghiệp thông minh tích hợp AI tự động trích xuất kỹ năng từ CV trong 5 giây, chấm điểm độ phù hợp (Match Rate) với Job Description và đồng bộ bảng điểm chính thức từ CSDL nhà trường. Dự án giúp tăng $60\%$ tỷ lệ sinh viên tìm được việc làm thực tập đúng chuyên ngành và giảm $75\%$ thời gian sàng lọc ứng viên cho doanh nghiệp đối tác.

#### 3. 3 Yêu cầu cấp cao (High-Level Requirements):

- **Yêu cầu 1 (AI CV Parsing & Smart Skill Matching):** Tự động đọc và chuẩn hóa dữ liệu từ CV định dạng PDF/DOCX (kinh nghiệm, kỹ năng lập trình, dự án đã làm), so khớp ngữ nghĩa (Semantic Matching) với tin tuyển dụng và xuất điểm Match Score từ $0 - 100\%$.
- **Yêu cầu 2 (Employer ATS & Virtual Interview Room):** Cung cấp giao diện quản lý ứng viên (Applicant Tracking System) theo dạng kéo-thả Kanban, tự động gửi thư mời phỏng vấn và tích hợp phòng phỏng vấn trực tuyến qua Video WebRTC.
- **Yêu cầu 3 (Verified Student Portfolio & OJT Evaluation):** Hồ sơ năng lực sinh viên được tích hợp huy hiệu chứng thực (Verified Badges) từ nhà trường (GPA, đồ án xuất sắc, chứng chỉ Coursera/Udemy) và phân hệ cho phép HR đánh giá kết quả thực tập OJT online.

---

### HƯỚNG DẪN REQUEST 2: DỰ TOÁN 5 HẠNG MỤC CHI PHÍ ($140k) (2.0 Điểm)

- **Mục 1 (Labor Cost):** 1 PM, 1 AI/NLP Engineer, 2 Fullstack Devs, 1 UI/UX Designer, 1 QA trong 7 tháng $\rightarrow$ **Bottom-up** ($\approx \$90,000$).
- **Mục 2 (Cloud Infrastructure):** Thuê máy chủ AWS EC2, CSDL PostgreSQL, Lưu trữ CV trên S3, CloudFront CDN $\rightarrow$ **Parametric** ($\$1,200/\text{tháng} \times 10\text{ tháng} = \$12,000$).
- **Mục 3 (AI NLP & OCR API Subscription):** Bản quyền API trích xuất tài liệu và Embedding Model cho $50,000$ lượt tải CV $\rightarrow$ **Parametric** ($50,000\text{ CVs} \times \$0.25 = \$12,500$).
- **Mục 4 (Corporate Onboarding & Virtual Job Fair):** Tổ chức hội thảo trực tuyến hướng dẫn 200 HR doanh nghiệp và ngày hội phỏng vấn ảo $\rightarrow$ **Bottom-up** ($\approx \$10,500$).
- **Mục 5 (Contingency Reserve):** Quỹ dự phòng rủi ro $\rightarrow$ **Reserve Analysis** (Trích $\approx 10.7\% \approx \$15,000$).
- **Kiểm tra tổng cộng:** Khớp đúng $\$140,000$.

---

### HƯỚNG DẪN REQUEST 3: COMMUNICATION PLAN (3.0 Điểm)

- **Project-Internal (Dev & AI Team):** Daily Standup (15p) qua Slack để đồng bộ tiến độ API parser CV và tinh chỉnh độ chính xác thuật toán matching.
- **Organization-Internal (Phòng Quan hệ Doanh nghiệp):** Họp giao ban 2 tuần/lần để thống nhất tiêu chuẩn đánh giá kỳ thực tập OJT và chính sách bảo mật dữ liệu sinh viên.
- **External (HR Doanh nghiệp & Sinh viên):** Workshop demo tính năng (hàng tháng), gửi thông báo tin tuyển dụng mới qua Email/App và thu thập phản hồi trải nghiệm phỏng vấn.

---

### HƯỚNG DẪN REQUEST 4: MILESTONES & 10 ACTIVITIES SE (3.0 Điểm)

#### 1. Xác định 3 Cột mốc:

- _Milestone 1:_ Phê duyệt SRS & Thiết kế Kiến trúc Pipeline AI CV (_SRS & AI Pipeline Sign-off_).
- _Milestone 2:_ Hoàn thành Lập trình Module Khớp CV Bằng AI & Phân hệ ATS Doanh nghiệp (_AI Matching & ATS Complete_).
- _Milestone 3:_ Nghiệm thu Ngày hội Phỏng vấn Ảo Thử nghiệm & Go-Live (_Virtual Job Fair Pilot & Go-Live_).

#### 2. Chuỗi 10 hoạt động lập trình & tích hợp Milestone 2:

- $A_1$: Thiết lập kiến trúc Backend (Spring Boot/NestJS) và CSDL quan hệ PostgreSQL.
- $A_2$: Xây dựng Pipeline trích xuất văn bản CV (OCR & PDF Text Extractor) (Predecessor: $A_1 \rightarrow$ **FS**).
- $A_3$: Xây dựng mô hình NLP trích xuất thực thể kỹ năng (Named Entity Recognition - NER) (Predecessor: $A_2 \rightarrow$ **FS**).
- $A_4$: Lập trình thuật toán tính toán độ tương đồng ngữ nghĩa (Cosine Similarity) giữa CV và JD (Predecessor: $A_3 \rightarrow$ **FS**).
- $A_5$: Phát triển giao diện Web Portal (ReactJS) cho Sinh viên tải CV và xem gợi ý việc làm (Predecessor: $A_1 \rightarrow$ **FS**).
- $A_6$: Phát triển Phân hệ Quản trị Tuyển dụng ATS dành cho Nhà tuyển dụng (Predecessor: $A_1 \rightarrow$ **FS**).
- $A_7$: Tích hợp Module Lên lịch phỏng vấn và gửi thông báo tự động (Predecessor: $A_6 \rightarrow$ **SS**).
- $A_8$: Tích hợp phòng phỏng vấn trực tuyến Video Call WebRTC (Predecessor: $A_7 \rightarrow$ **FS**).
- $A_9$: Phát triển giao diện Báo cáo Chấm điểm Độ tương thích Ứng viên cho HR (Predecessor: $A_4, A_6 \rightarrow$ **FF**).
- $A_{10}$: Kiểm thử tích hợp tự động toàn luồng Nộp CV $\rightarrow$ AI Chấm điểm $\rightarrow$ HR Duyệt $\rightarrow$ Lên lịch phỏng vấn (Predecessor: $A_5, A_8, A_9 \rightarrow$ **FS**).
