================================================================================
ĐỀ 11: SE MỞ - NỀN TẢNG CHẤM CODE TỰ ĐỘNG & THI LẬP TRÌNH (CODEJUDGE)
DỰ ÁN: FPT UNIVERSITY ONLINE JUDGE & CODE ASSESSMENT (FPTU CODEJUDGE)
LỜI GIẢI MẪU CHUẨN PHÒNG THI EOS (BẢN TIẾNG VIỆT CÓ DẤU)
================================================================================

REQUEST 1: PROJECT CHARTER STATEMENT (2.0 Điểm)
--------------------------------------------------------------------------------

1. Project Name:
   FPT University Real-time Online Judge & Automated Code Assessment Platform (FPTU CodeJudge).

2. Project Purpose & Justification:

- Thực trạng & Điểm nghẽn (Current Pain Points):
  Mỗi học kỳ, hơn 10.000 sinh viên Công nghệ Thông tin tại Đại học FPT tham gia các môn học lập trình cơ sở và nâng cao (C, Java, Python, C++, C#). Giảng viên phải tải hàng nghìn tệp mã nguồn về máy tính cá nhân để chạy và chấm thủ công, mất 2 - 3 tuần để trả điểm bài tập lớn; việc thực thi trực tiếp mã nguồn sinh viên tiềm ẩn nguy cơ dính mã độc phá hoại máy chủ (Fork Bomb, Infinite Loop, xóa tệp hệ thống); sinh viên không nhận được phản hồi lỗi tức thời để sửa bài.
- Mục đích dự án (Project Purpose):
  Xây dựng nền tảng chấm code tự động chạy trên môi trường hộp cát cách ly bảo mật (Sandboxed Docker/gVisor), tự động so sánh output với 100 test cases ẩn trong vòng dưới 2 giây (< 2s), giới hạn RAM/CPU nghiêm ngặt và hiển thị bảng xếp hạng thời gian thực.
- Giá trị mang lại (Value Delivered):

* Cắt giảm 95% thời gian chấm bài thực hành của giảng viên và tự động hóa khâu tổng hợp điểm.
* Cung cấp kết quả chấm và giải thích lỗi tức thì trong 2 giây, giúp sinh viên cải thiện tư duy thuật toán.
* Ngăn chặn 100% rủi ro mã độc và phát hiện gian lận sao chép code thông qua phân tích cú pháp AST.

3. High-Level Requirements:

- Yêu cầu 1 (Động cơ Chấm Code Hộp cát Cách ly Bảo mật Cao):
  Trình chấm code đa luồng hỗ trợ biên dịch và thực thi an toàn 5 ngôn ngữ (C/C++, Java, Python, C#, Go) trong môi trường hộp cát cách ly (Docker + gVisor/cgroups), kiểm soát Time Limit (1.0s) và Memory Limit (256MB), chặn các hàm hệ thống nguy hiểm (Syscall filtering).
- Yêu cầu 2 (Phân hệ Quản lý Test Cases & So khớp Đạo văn Source Code AST):
  Cho phép giảng viên tạo bộ test case phân tầng (Public Test Cases & Hidden Edge Cases), tích hợp thuật toán so khớp cây cú pháp trừu tượng (AST) quét trùng lặp mã nguồn giữa các thí sinh.
- Yêu cầu 3 (Trình soạn thảo Web IDE & Bảng xếp hạng Thời gian thực):
  Tích hợp trình soạn thảo mã nguồn trực tuyến có gợi ý cú pháp (Monaco Editor), hiển thị kết quả kiểm thử chi tiết (Passed / Wrong Answer / Time Limit Exceeded / Memory Limit Exceeded / Runtime Error) và bảng xếp hạng trực tiếp qua WebSockets.

================================================================================
REQUEST 2: COST / BUDGET ESTIMATION (5 HẠNG MỤC SE) (2.0 Điểm)
--------------------------------------------------------------------------------

Tổng ngân sách phê duyệt (BAC): $135,000 USD | Thời gian thực hiện: 6 tháng (24 tuần).

Cost Item 1: Software & DevOps Engineering Labor Cost

- Description: Chi phí tiền lương đội ngũ kỹ thuật: 1 Project Manager (6m), 1 DevOps Sandbox Specialist (6m), 2 Backend Developers (6m), 1 Frontend Web Dev (5m), 1 QA Automation (5m). Tổng cộng 3.840 giờ làm việc.
- Estimation Method: Bottom-up Estimation.

* PM (6m): $18,000
* DevOps Sandbox Lead (6m): $20,000
* 2 Backend Devs (6m): $26,000
* Frontend Dev (5m): $13,000
* QA Automation (5m): $8,000

- Estimated Cost: $85,000
- Person in Charge: Project Manager & Technical Lead.

Cost Item 2: Cloud Compute Cluster for High-Throughput Code Execution

- Description: Thuê cụm máy chủ chuyên dụng AWS EC2 c5.2xlarge (Compute Optimized) để biên dịch đa luồng, CSDL quan hệ AWS RDS PostgreSQL, Message Queue Redis/RabbitMQ trong 10 tháng.
- Estimation Method: Parametric Estimation ($1,800/tháng x 10 tháng = $18,000).
- Estimated Cost: $18,000
- Person in Charge: DevOps Lead & Infrastructure Architect.

Cost Item 3: Security & Sandbox Tooling Subscriptions

- Description: Bản quyền công cụ bảo mật hạt nhân Linux Sysdig/gVisor Enterprise, công cụ kiểm thử tải mô phỏng hàng nghìn bài nộp đồng thời Locust Pro trong 6 tháng.
- Estimation Method: Parametric Estimation.
- Estimated Cost: $5,000
- Person in Charge: Security Lead & IT Procurement Officer.

Cost Item 4: Faculty Training & Mock Exam Pilots

- Description: Tổ chức 4 buổi tập huấn thiết lập ngân hàng đề thi cho 80 giảng viên CNTT và tổ chức 2 kỳ thi thử lập trình tải cao cho 2.000 sinh viên làm quen hệ thống.
- Estimation Method: Bottom-up Estimation.
- Estimated Cost: $12,000
- Person in Charge: Academic Affairs Representative & Testing Coordinator.

Cost Item 5: Contingency Reserve (Quỹ dự phòng rủi ro)

- Description: Dự phòng rủi ro biến động đột biến tải CPU trong kỳ thi chung toàn trường cần tăng cường tức thời các Worker Nodes, vá các lỗ hổng escape sandbox mới phát sinh hoặc tăng ca làm đêm tối ưu trình chấm.
- Estimation Method: Reserve Analysis (Trích lập xấp xỉ 11.11% trên tổng ngân sách BAC).

* Base Total = $85,000 + $18,000 + $5,000 + $12,000 = $120,000.
* Contingency Reserve = $15,000.
* Total Project Budget (BAC) = $120,000 + $15,000 = $135,000.

- Estimated Cost: $15,000
- Person in Charge: Project Sponsor & Project Manager.

================================================================================
REQUEST 3: PROJECT COMMUNICATION PLAN (3.0 Điểm)
--------------------------------------------------------------------------------

Kế hoạch Giao tiếp (Communication Plan Matrix):

Stakeholder 1: DevOps & Backend Engineering Team (Project-Internal)

- Information: Tiến độ lập trình, độ an toàn của container Sandbox, tốc độ xử lý hàng đợi RabbitMQ, tối ưu độ trễ trả kết quả chấm bài.
- Purpose: Đảm bảo hạ tầng Worker Nodes vận hành ổn định và bảo mật tuyệt đối trước các mã độc.
- Frequency: Hàng ngày (Daily 15 phút).
- Method / Format: Daily Standup qua Slack Huddle + Quản lý tiến độ Jira Kanban.
- Responsible Person: Scrum Master / DevOps Tech Lead.

Stakeholder 2: Ban Chủ nhiệm Bộ môn Lập trình & Phòng Khảo thí (Organization-Internal)

- Information: Báo cáo tính năng tạo đề thi, thống nhất định dạng chuẩn của bộ Test Cases, tiêu chí xác định gian lận mã nguồn AST.
- Purpose: Đảm bảo hệ thống chấm điểm chuẩn hóa theo barem điểm học thuật và quy chế khảo thí của nhà trường.
- Frequency: 2 tuần / lần (Bi-weekly).
- Method / Format: Cuộc họp giao ban trực tiếp + Biên bản thống nhất quy chuẩn kỹ thuật.
- Responsible Person: Project Manager & Academic Coordinator.

Stakeholder 3: Sinh viên làm bài thi & Giảng viên chấm thi (External)

- Information: Hướng dẫn sử dụng Web IDE, thông báo lịch mở phòng thi thử, tiếp nhận khiếu nại kết quả test case bài thi.
- Purpose: Giúp sinh viên làm quen môi trường thi và hỗ trợ giảng viên giám sát tiến độ làm bài thời gian thực.
- Frequency: Hàng tuần và tự động gửi thông báo theo từng kỳ thi.
- Method / Format: Thông báo trên Web Portal + Email hướng dẫn thể lệ + Kênh hỗ trợ trực tuyến Discord/Telegram.
- Responsible Person: Lead Business Analyst (BA) & Technical Support Specialist.

================================================================================
REQUEST 4: MILESTONES & 10 HOẠT ĐỘNG KỸ THUẬT PHẦN MỀM (3.0 Điểm)
--------------------------------------------------------------------------------

1. Ba Cột mốc Kỹ thuật chính của Dự án:

- Milestone 1 (Secure Sandbox Architecture & SRS Sign-off): Hoàn thiện Tài liệu Đặc tả Yêu cầu (SRS) và Thiết kế Kiến trúc Hộp cát Sandbox An toàn (Cuối Tháng 2).
- Milestone 2 (Judge Engine & Test Case Manager Complete): Hoàn thành Phát triển Động cơ Chấm Code Sandbox và Phân hệ Quản lý Test Cases (Cuối Tháng 4).
- Milestone 3 (Stress Test 5,000 Users Passed & Official Exam Go-Live): Vượt qua đợt kiểm thử ứng suất 5.000 thí sinh nộp bài đồng thời và Go-Live kỳ thi chính thức (Cuối Tháng 6).

2. Chi tiết 10 Hoạt động của Milestone 2 (Judge Engine & Test Cases) & Quan hệ Logic:

- Activity 1 (A1): Thiết lập kiến trúc Backend (Go/Rust/Spring Boot) và CSDL quan hệ PostgreSQL.

* Predecessors: Start (Milestone 1 Sign-off)
* Dependency: FS

- Activity 2 (A2): Xây dựng Container Sandbox cách ly tài nguyên hệ thống (Docker + gVisor/cgroups).

* Predecessors: A1
* Dependency: FS (Cấu hình máy chủ sẵn sàng mới dựng môi trường sandbox).

- Activity 3 (A3): Lập trình Module Trình biên dịch & Thực thi an toàn đa ngôn ngữ (C, Java, Python, C++).

* Predecessors: A2
* Dependency: FS (Có container sandbox cách ly mới cài đặt các compiler và runner).

- Activity 4 (A4): Xây dựng Hàng đợi Điều phối Chấm bài Đa luồng (Message Queue RabbitMQ & Redis Workers).

* Predecessors: A2
* Dependency: FS (Hạ tầng Worker Sandbox sẵn sàng mới kết nối hệ thống hàng đợi).

- Activity 5 (A5): Lập trình Module So sánh Output & Đánh giá Test Cases (Passed/WA/TLE/MLE/RTE).

* Predecessors: A3, A4
* Dependency: FS (Cả Trình biên dịch A3 và Hàng đợi A4 hoàn thành mới lập trình logic chấm điểm).

- Activity 6 (A6): Xây dựng Engine Quét trùng lặp AST phát hiện sao chép mã nguồn giữa các bài nộp.

* Predecessors: A1
* Dependency: FS (Xây dựng bộ phân tích AST độc lập sau khi có cấu trúc CSDL bài nộp).

- Activity 7 (A7): Tích hợp Trình soạn thảo Monaco Web IDE và hỗ trợ Syntax Highlighting trên giao diện Web.

* Predecessors: A1
* Dependency: FS (Dựng khung Web IDE giao diện độc lập sau khi hoàn tất thiết kế).

- Activity 8 (A8): Xây dựng kênh WebSockets truyền dữ liệu chấm bài tức thời và Bảng xếp hạng Real-time.

* Predecessors: A5, A7
* Dependency: SS (Gối đầu song song: Nối luồng WebSockets vào giao diện ngay khi module chấm bài phát tín hiệu điểm).

- Activity 9 (A9): Phát triển Cổng Quản trị cho Giảng viên tạo ngân hàng đề thi và bộ Test Cases ẩn.

* Predecessors: A5, A6
* Dependency: FF (Giao diện Quản trị đề thi hoàn thành khi cả module chấm A5 và phân tích AST A6 đã sẵn sàng).

- Activity 10 (A10): Kiểm thử Tích hợp Tự động Toàn luồng: Nộp bài -> Biên dịch Sandbox -> Chấm Test Case -> Báo điểm Real-time.

* Predecessors: A8, A9
* Dependency: FS (Kiểm thử tích hợp toàn diện chỉ bắt đầu khi cả Kênh Real-time A8 và Cổng Quản trị đề A9 hoàn tất).
  \================================================================================
