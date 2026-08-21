# ĐỀ SỐ 11: SE MỞ - NỀN TẢNG CHẤM CODE TỰ ĐỘNG & THI LẬP TRÌNH (ONLINE JUDGE PLATFORM)

> **Chuyên ngành:** Kỹ thuật Phần mềm (Software Engineering - SE) | **Môn học:** PMG201c
> **Dạng đề:** Đề thi Mở (Open Project Scenario) | **Thời gian làm bài:** 60 - 90 phút | **Hình thức thi:** Thực hành trên máy (EOS Client)

---

## PHẦN I: ĐỀ BÀI (EXAM QUESTIONS - 10.0 ĐIỂM)

### BỐI CẢNH ĐỀ BÀI (OPEN SE SCENARIO)

Giả định bạn là Quản trị Dự án (Project Manager) được giao xây dựng dự án: **Nền tảng Đánh giá Năng lực Lập trình & Chấm Code Tự động (Automated Code Assessment & Real-time Online Judge Platform - FPTU CodeJudge)** phục vụ cho các môn học lập trình cơ sở và nâng cao (C, Java, Python, C++, C#) cho hơn $10,000$ sinh viên ngành Công nghệ Thông tin.

Hệ thống cho phép thực thi mã nguồn an toàn trong môi trường hộp cát cách ly (Sandboxed Container - Docker/gVisor), tự động chấm điểm theo bộ Test Cases trong vòng 2 giây, so khớp cây cú pháp AST phát hiện gian lận và hiển thị bảng xếp hạng trực tiếp (Real-time Leaderboard).

---

### CÁC YÊU CẦU ĐỀ THI (EXAM REQUESTS)

- **Request 1 (20% - 2.0 Điểm): Narrative Project Charter Statement**
  Xây dựng bản Điều lệ Dự án chi tiết bao gồm:

1.  Project Name (chuẩn quy tắc đặt tên phần mềm kỹ thuật).
2.  Project Purpose or Justification (nêu rõ các bất cập khi giảng viên chấm bài lập trình thủ công và rủi ro bảo mật khi chạy mã nguồn không an toàn của sinh viên).
3.  High-level Requirements (mô tả ít nhất 3 yêu cầu cấp cao của hệ thống: Động cơ Chấm Code Hộp cát Cách ly An toàn, Phân hệ Quản lý Đề thi & So khớp Gian lận Source Code, Giao diện Lập trình Trực tuyến Web IDE & Bảng xếp hạng Thời gian thực).

- **Request 2 (20% - 2.0 Điểm): Cost / Budget Estimation (5 Hạng mục Phần mềm SE)**
  Lập bảng dự toán 5 hạng mục chi phí: Chi phí Nhân sự Đội ngũ Kỹ sư Phần mềm & DevOps, Thuê Cụm Máy chủ Cloud AWS (Worker Nodes chấm code đa luồng & Database), Bản quyền Công cụ Bảo mật Hộp cát & IDE Editor (Monaco Editor / gVisor), Chi phí Tập huấn Giảng viên & Thử nghiệm Kỳ thi Thử, Quỹ dự phòng rủi ro Contingency Reserve. Nêu rõ: Tên, Mô tả, Phương pháp ước lượng, Công thức chi tiết, Số tiền và Người phụ trách.

- **Request 3 (30% - 3.0 Điểm): Project Communication Plan**
  Xây dựng kế hoạch giao tiếp chi tiết cho 3 nhóm Stakeholder:

1.  **Project-Internal:** Đội ngũ phát triển phần mềm (DevOps Sandbox Engineer, Backend, Frontend, QA, PM).
2.  **Organization-Internal:** Ban Chủ nhiệm Bộ môn Lập trình & Phòng Khảo thí Đại học FPT.
3.  **External:** Sinh viên làm bài thi lập trình & Giảng viên chấm thi.
    Bảng giao tiếp phải đủ 5 cột: Thông tin trao đổi, Mục đích, Tần suất, Phương thức/Công cụ, Người chịu trách nhiệm.

- **Request 4 (30% - 3.0 Điểm): Milestones & Chuỗi 10 Hoạt động Kỹ thuật (Activities Sequence)**
  Xác định ít nhất 3 Cột mốc kỹ thuật của dự án. Chọn Cột mốc **Phát triển Động cơ Chấm Code Sandbox & Tích hợp Bộ Test Cases Tự động**, liệt kê 10 hoạt động kỹ thuật chi tiết kèm mối quan hệ tiền nhiệm (**FS, SS, FF**).

---

## PHẦN II: HƯỚNG DẪN CÁCH LÀM & KHUNG TRẢ LỜI CHUẨN EOS

---

### HƯỚNG DẪN REQUEST 1: PROJECT CHARTER CHO HỆ THỐNG ONLINE JUDGE (2.0 Điểm)

#### 1. Khung tên dự án chuẩn:

`FPT University Real-time Online Judge & Automated Code Assessment Platform (FPTU CodeJudge)`

#### 2. Lập luận Mục đích & Lý do (Justification):

- **Thực trạng cũ:** Giảng viên phải tải hàng nghìn tệp mã nguồn (.c,.java,.py) về máy tính cá nhân để chạy và chấm thủ công, mất 2 - 3 tuần để trả kết quả bài tập lớn; việc chạy trực tiếp code sinh viên tiềm ẩn nguy cơ dính mã độc phá hoại máy chủ (Fork Bomb, Infinite Loop, File System Deletion); sinh viên không nhận được phản hồi lỗi tức thời để sửa bài.
- **Mục đích dự án:** Xây dựng hệ thống chấm code tự động chạy trên môi trường hộp cát cách ly (Docker / gVisor), tự động so sánh output với 100 test cases ẩn trong vòng dưới 2 giây ($\le 2\text{s}$), tự động giới hạn RAM/CPU và ngăn chặn mã độc. Dự án cắt giảm $95\%$ thời gian chấm bài của giảng viên và cung cấp phản hồi tức thời giúp sinh viên nâng cao kỹ năng code.

#### 3. 3 Yêu cầu cấp cao (High-Level Requirements):

- **Yêu cầu 1 (Isolated Sandboxed Code Execution Engine):** Trình chấm code đa luồng hỗ trợ biên dịch và thực thi an toàn 5 ngôn ngữ (C/C++, Java, Python, C#), kiểm soát nghiêm ngặt Time Limit (1.0s) và Memory Limit (256MB), tự động chặn các hàm hệ thống nguy hiểm (Syscall filtering).
- **Yêu cầu 2 (Test Case Management & AST Anti-Plagiarism):** Cho phép giảng viên tạo bộ test case phân tầng (Public Test Cases & Hidden Edge Cases), tích hợp thuật toán so khớp cây cú pháp trừu tượng AST quét trùng lặp mã nguồn giữa các thí sinh.
- **Yêu cầu 3 (Web IDE & Live Scoreboard Leaderboard):** Trình soạn thảo mã nguồn trực tuyến tích hợp gợi ý cú pháp (Monaco Editor), hiển thị kết quả kiểm thử (Passed / Wrong Answer / Time Limit Exceeded / Runtime Error) và bảng xếp hạng thời gian thực qua WebSockets.

---

### HƯỚNG DẪN REQUEST 2: DỰ TOÁN 5 HẠNG MỤC CHI PHÍ ($135k) (2.0 Điểm)

- **Mục 1 (Labor Cost):** 1 PM, 1 DevOps Sandbox Specialist, 2 Backend Devs, 1 Frontend Web Dev, 1 QA trong 6 tháng $\rightarrow$ **Bottom-up** ($\approx \$85,000$).
- **Mục 2 (Cloud Compute Cluster for Code Execution):** Cụm máy chủ chuyên dụng AWS EC2 c5.2xlarge (Compute Optimized) để biên dịch đa luồng, RDS PostgreSQL, Redis Queue trong 10 tháng $\rightarrow$ **Parametric** ($\$1,800/\text{tháng} \times 10 = \$18,000$).
- **Mục 3 (Security & Sandbox Licenses):** Bản quyền bảo mật hạt nhân Linux gVisor/Sysdig, công cụ kiểm thử tải Locust Pro $\rightarrow$ **Parametric** ($\approx \$5,000$).
- **Mục 4 (Faculty Training & Mock Exam Pilots):** Tổ chức 4 buổi tập huấn thiết lập đề thi cho 80 giảng viên CNTT và tổ chức 2 kỳ thi thử cho $2,000$ sinh viên $\rightarrow$ **Bottom-up** ($\approx \$12,000$).
- **Mục 5 (Contingency Reserve):** Quỹ dự phòng rủi ro $\rightarrow$ **Reserve Analysis** (Trích $\approx 11\% \approx \$15,000$).
- **Kiểm tra tổng cộng:** Khớp đúng $\$135,000$.

---

### HƯỚNG DẪN REQUEST 3: COMMUNICATION PLAN (3.0 Điểm)

- **Project-Internal (DevOps & Backend Team):** Daily Standup (15p) để kiểm tra độ an toàn của container Sandbox, tốc độ xử lý hàng đợi chấm bài (RabbitMQ/Celery) và tối ưu độ trễ trả điểm.
- **Organization-Internal (Chủ nhiệm Bộ môn & Khảo thí):** Họp định kỳ 2 tuần/lần để thống nhất quy chuẩn định dạng bộ Test Cases và các tiêu chí xử lý vi phạm gian lận mã nguồn.
- **External (Sinh viên & Giảng viên bộ môn):** Thông báo thể lệ thi qua Web Portal, cung cấp hệ thống làm quen giao diện Web IDE trước kỳ thi 1 tuần và giải đáp khiếu nại kết quả test case.

---

### HƯỚNG DẪN REQUEST 4: MILESTONES & 10 ACTIVITIES SE (3.0 Điểm)

#### 1. Xác định 3 Cột mốc:

- _Milestone 1:_ Phê duyệt Thiết kế Kiến trúc Sandbox An toàn & SRS (_Sandbox Architecture Sign-off_).
- _Milestone 2:_ Hoàn thành Phát triển Động cơ Chấm Code Sandbox & Phân hệ Quản lý Test Cases (_Judge Engine & Test Manager Complete_).
- _Milestone 3:_ Nghiệm thu Stress Test 5,000 Thí sinh Đồng thời & Triển khai Go-Live (_Stress Test Passed & Exam Go-Live_).

#### 2. Chuỗi 10 hoạt động lập trình & tích hợp Milestone 2:

- $A_1$: Thiết lập kiến trúc Backend (Go/Rust/Spring Boot) và CSDL PostgreSQL.
- $A_2$: Xây dựng Container Sandbox cách ly tài nguyên (Docker + gVisor/cgroups) (Predecessor: $A_1 \rightarrow$ **FS**).
- $A_3$: Lập trình module Trình biên dịch & Thực thi đa ngôn ngữ (C, Java, Python) (Predecessor: $A_2 \rightarrow$ **FS**).
- $A_4$: Xây dựng Hàng đợi Điều phối Chấm bài đa luồng (Message Queue RabbitMQ/Redis) (Predecessor: $A_2 \rightarrow$ **FS**).
- $A_5$: Lập trình Module So sánh Output & Đánh giá Test Cases (Passed/WA/TLE) (Predecessor: $A_3, A_4 \rightarrow$ **FS**).
- $A_6$: Xây dựng Engine Quét trùng lặp AST phát hiện sao chép mã nguồn (Predecessor: $A_1 \rightarrow$ **FS**).
- $A_7$: Tích hợp Trình soạn thảo Monaco Web IDE trên giao diện Frontend (Predecessor: $A_1 \rightarrow$ **FS**).
- $A_8$: Xây dựng kênh WebSockets truyền dữ liệu chấm bài và Bảng xếp hạng Real-time (Predecessor: $A_5, A_7 \rightarrow$ **SS**).
- $A_9$: Phát triển Cổng Quản trị cho Giảng viên tạo ngân hàng Test Cases ẩn (Predecessor: $A_5, A_6 \rightarrow$ **FF**).
- $A_{10}$: Kiểm thử tích hợp tự động luồng Nộp bài $\rightarrow$ Biên dịch Sandbox $\rightarrow$ Chấm Test Case $\rightarrow$ Trả kết quả (Predecessor: $A_8, A_9 \rightarrow$ **FS**).
