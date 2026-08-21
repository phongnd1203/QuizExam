================================================================================
ĐỀ 01: DẠNG ĐỀ MỞ - DỰ ÁN CÔNG NGHỆ THÔNG TIN (OPEN IT SCENARIO)
DỰ ÁN: FPT UNIVERSITY SMART CAMPUS SPACEHUB
LỜI GIẢI MẪU CHUẨN PHÒNG THI EOS (BẢN TIẾNG VIỆT CÓ DẤU)
================================================================================

REQUEST 1: PROJECT CHARTER STATEMENT (2.0 Điểm)
--------------------------------------------------------------------------------

1. Project Name:
   FPT University Smart Campus Study Space & Equipment Booking System (FPTU SpaceHub).

2. Project Purpose / Justification:

- Thực trạng (Current Pain Points):
  Hiện nay, sinh viên và giảng viên tại Campus Đại học FPT gặp nhiều bất tiện trong việc đặt phòng tự học, phòng họp nhóm và mượn các thiết bị học tập (máy chiếu, kính VR, bảng vẽ Wacom). Quy trình hiện tại đang xử lý thủ công qua sổ ghi chép và tin nhắn, dẫn đến tình trạng trùng lịch (double-booking), lãng phí không gian trống và mất trung bình 20 - 30 phút cho mỗi lượt đăng ký mượn phòng.
- Mục đích dự án (Project Purpose):
  Xây dựng hệ thống phần mềm nền tảng tập trung gồm Mobile App và Web Portal (FPTU SpaceHub) nhằm số hóa và tự động hóa 100% quy trình tìm kiếm, đặt chỗ không gian tự học và mượn trả thiết bị học thuật theo thời gian thực (Real-time).
- Giá trị mang lại (Business & Academic Value):

* Giảm 85% thời gian xử lý thủ tục đặt phòng và thiết bị (từ 25 phút xuống dưới 2 phút trên ứng dụng).
* Tối ưu hóa hiệu suất sử dụng cơ sở vật chất thêm 40%, phục vụ hơn 15.000 sinh viên và cán bộ giảng viên.
* Minh bạch hóa dữ liệu quản lý tài sản cơ sở vật chất và lịch sử sử dụng cho Ban Quản trị Campus.

3. High-Level Requirements:

- Yêu cầu 1 (Phân hệ Người dùng cuối - Mobile & Web App):
  Cung cấp giao diện trực quan cho phép sinh viên tra cứu sơ đồ phòng trống theo thời gian thực (Interactive Campus Floor Map), đặt phòng học nhóm theo khung giờ, mượn thiết bị đi kèm, nhận mã QR Check-in/Check-out tự động và nhận thông báo nhắc hạn mượn qua ứng dụng.
- Yêu cầu 2 (Phân hệ Quản lý & Điều phối - Backoffice Module):
  Cho phép Cán bộ Quản lý Cơ sở vật chất duyệt các yêu cầu mượn phòng đặc biệt, tự động khóa phòng khi bảo trì, theo dõi trạng thái sử dụng thiết bị và tự động gửi cảnh báo khi có vi phạm quá hạn hoặc hư hỏng.
- Yêu cầu 3 (Phân hệ Quản trị & Báo cáo Thông minh - Analytics Dashboard):
  Cung cấp cho Ban Giám hiệu và Ban Quản trị bảng thống kê trực quan (Dashboard) về tần suất sử dụng không gian theo khung giờ/khu vực, tỷ lệ lấp đầy phòng học và lịch sử mượn trả thiết bị để làm căn cứ lập kế hoạch đầu tư nâng cấp cơ sở vật chất.

================================================================================
REQUEST 2: COST / BUDGET ESTIMATION (2.0 Điểm)
--------------------------------------------------------------------------------

Tổng ngân sách ước tính (BAC): $130,000 USD | Thời gian thực hiện: 4 tháng (16 tuần).

Cost Item 1: Development Team Labor Cost

- Description: Chi phí tiền lương cho đội ngũ phát triển phần mềm gồm: 1 Project Manager (4 tháng), 1 Business Analyst (3 tháng), 1 UI/UX Designer (2 tháng), 2 Fullstack Developers (4 tháng), 1 QA/Tester (3 tháng). Tổng cộng 2.720 giờ làm việc.
- Estimation Method: Bottom-up Estimation.

* PM: 1 người x 640h x $25/h = $16,000
* BA: 1 người x 480h x $18/h = $8,640
* UI/UX: 1 người x 320h x $15/h = $4,800
* Devs: 2 người x 640h x $20/h = $25,600
* QA: 1 người x 480h x $14/h = $6,720

- Estimated Cost: $61,760
- Person in Charge: Project Manager (PM) & Human Resources Lead.

Cost Item 2: Cloud Infrastructure & Server Hosting

- Description: Chi phí thuê máy chủ đám mây AWS (EC2 compute instances, AWS RDS PostgreSQL, S3 Bucket lưu trữ, ElastiCache Redis) phục vụ môi trường Dev, Staging và Production trong 4 tháng dự án và 6 tháng vận hành đầu tiên (Tổng 10 tháng).
- Estimation Method: Parametric Estimation.

* Gói dịch vụ hạ tầng AWS tiêu chuẩn: $850/tháng x 10 tháng = $8,500.

- Estimated Cost: $8,500
- Person in Charge: Technical Lead & DevOps Engineer.

Cost Item 3: Software Licenses & Third-party API Services

- Description: Chi phí mua bản quyền công cụ làm việc và tích hợp API bên thứ ba: GitHub Enterprise (8 seats), Figma Professional, Jira Software, Google Maps Platform API, dịch vụ gửi SMS/Email OTP (Twilio/SendGrid) trong 10 tháng.
- Estimation Method: Parametric Estimation.

* Tooling licenses: $350/tháng x 10 tháng = $3,500.
* API usage fees: $500/tháng x 10 tháng = $5,000.

- Estimated Cost: $8,500
- Person in Charge: Project Manager & Procurement Lead.

Cost Item 4: Hardware, QR Scanners & Pilot Deployment

- Description: Chi phí mua sắm 20 bộ máy quét mã QR cố định đặt tại cửa các phòng tự học, 500 thẻ định danh thiết bị NFC/RFID, chi phí lắp đặt thử nghiệm và tổ chức 3 buổi Workshop đào tạo chuyển giao cho 50 cán bộ quản lý trường.
- Estimation Method: Analogous Estimation & Vendor Bid.

* 20 QR Scanners chuyên dụng: 20 bộ x $300 = $6,000.
* Thẻ RFID & vật tư lắp đặt: $2,500.
* Chi phí tài liệu, tập huấn & Workshop: $3,500.

- Estimated Cost: $12,000
- Person in Charge: Campus Facility Manager & Operations Lead.

Cost Item 5: Quality Assurance, Security Pentest & External Audit

- Description: Thuê đơn vị an ninh mạng độc lập kiểm thử xâm nhập bảo mật (Penetration Testing), đánh giá tải hệ thống (Load testing 5.000 user đồng thời) và cấp chứng nhận an toàn dữ liệu trước khi Go-Live chính thức.
- Estimation Method: Fixed-price Vendor Bid.

* Hợp đồng dịch vụ bảo mật trọn gói: $15,000.

- Estimated Cost: $15,000
- Person in Charge: QA Lead & University IT Security Committee.

Cost Item 6: Contingency Reserve (Quỹ dự phòng rủi ro)

- Description: Khoản dự phòng ngân sách nhằm ứng phó với các rủi ro đã nhận diện (phát sinh lỗi tích hợp API cổng trường, biến động tỷ giá phần mềm, tăng ca làm đêm do chậm tiến độ).
- Estimation Method: Reserve Analysis (Trích lập xấp xỉ 22.8% trên tổng chi phí cơ sở).

* Base Total = $61,760 + $8,500 + $8,500 + $12,000 + $15,000 = $105,760.
* Contingency Reserve = $24,240.
* Total Project Budget (BAC) = $105,760 + $24,240 = $130,000.

- Estimated Cost: $24,240
- Person in Charge: Project Sponsor & Project Manager.

================================================================================
REQUEST 3: PROJECT COMMUNICATION PLAN (3.0 Điểm)
--------------------------------------------------------------------------------

1. Định nghĩa 3 nhóm Stakeholder:

- Nhóm 1 (Project-Internal): Đội ngũ trực tiếp phát triển phần mềm dự án (Developers, QA/Tester, UI/UX Designer).
- Nhóm 2 (Organization-Internal): Ban Quản lý Cơ sở vật chất & Phòng Công nghệ thông tin Đại học FPT (Campus Facility & IT Dept).
- Nhóm 3 (External): Đại diện Người dùng cuối (Ban Chấp hành Hội Sinh viên FPT & Cán bộ Giảng viên sử dụng phòng).

2. Ma trận Kế hoạch Giao tiếp (Communication Plan Matrix):

Stakeholder 1: Project Development Team (Project-Internal)

- Information: Tiến độ công việc hàng ngày, danh sách bugs phát sinh, khó khăn kỹ thuật (blockers), kế hoạch Sprint tiếp theo.
- Purpose: Đồng bộ công việc giữa Frontend, Backend và QA; phát hiện và tháo gỡ sự cố kỹ thuật ngay lập tức.
- Frequency: Hàng ngày (Daily, 15 phút mỗi sáng).
- Method / Format: Daily Standup Meeting (Trực tiếp hoặc qua Google Meet / MS Teams) + Bảng công việc Jira Kanban.
- Responsible Person: Scrum Master / Project Manager.

Stakeholder 2: Campus Facility & IT Department (Organization-Internal)

- Information: Báo cáo tiến độ hoàn thành các Cột mốc (Milestone status), kế hoạch triển khai lắp đặt thiết bị QR tại phòng học, phối hợp cấp quyền truy cập máy chủ nội bộ.
- Purpose: Đảm bảo phần mềm tương thích hoàn toàn với hạ tầng mạng và quy định quản lý tài sản của Nhà trường.
- Frequency: Hàng tuần (Weekly, chiều thứ Sáu hàng tuần).
- Method / Format: Báo cáo văn bản tóm tắt gửi qua Email + Cuộc họp giao ban trực tiếp (Weekly Status Meeting).
- Responsible Person: Project Manager & Technical Lead.

Stakeholder 3: Student Union & End-User Representatives (External)

- Information: Bản thử nghiệm sản phẩm (Demo Release), tài liệu hướng dẫn sử dụng, khảo sát đánh giá trải nghiệm người dùng (UAT Feedback) và tiếp nhận đề xuất cải tiến tính năng.
- Purpose: Thu thập phản hồi thực tế từ sinh viên và giảng viên để tinh chỉnh giao diện UI/UX trước khi phát hành chính thức.
- Frequency: 2 tuần / lần (Bi-weekly) hoặc vào cuối mỗi đợt kiểm thử UAT.
- Method / Format: Buổi Workshop trải nghiệm trực tiếp + Biểu mẫu khảo sát trực tuyến (Google Forms / MS Forms).
- Responsible Person: Lead Business Analyst (BA) & UI/UX Designer.

================================================================================
REQUEST 4: PROJECT MILESTONES & ACTIVITY SEQUENCING (3.0 Điểm)
--------------------------------------------------------------------------------

1. Ba Cột mốc chính của dự án (Main Project Milestones):

- Milestone 1 (Initiation & System Design Sign-off): Hoàn thành khảo sát, phê duyệt Tài liệu Đặc tả Yêu cầu (SRS) và Thiết kế Kiến trúc Hệ thống, giao diện UI/UX (Cuối Tháng 1).
- Milestone 2 (Core System Development & Integration Complete): Hoàn tất lập trình các Module chức năng cốt lõi, tích hợp API bản đồ và cổng xác thực SSO (Cuối Tháng 3).
- Milestone 3 (UAT Acceptance & Official Campus Go-Live): Hoàn thành Kiểm thử nghiệm thu người dùng (UAT), bàn giao hệ thống và chính thức vận hành toàn trường (Cuối Tháng 4).

2. Chi tiết 10 Hoạt động của Milestone 2 (Core System Development) & Mối quan hệ logic:

- Activity 1 (A1): Thiết lập môi trường lập trình (Dev/Staging) và khởi tạo cơ sở dữ liệu PostgreSQL.

* Predecessors: Start (Milestone 1 Sign-off)
* Dependency: FS

- Activity 2 (A2): Xây dựng Module Xác thực tài khoản (FPT SSO OAuth 2.0) & Phân quyền Người dùng (RBAC).

* Predecessors: A1
* Dependency: FS (Phải cấu hình xong CSDL mới lập trình Module xác thực).

- Activity 3 (A3): Phát triển giao diện người dùng Mobile App (Flutter) cho sinh viên tra cứu và đặt phòng.

* Predecessors: A1
* Dependency: FS (Có thể bắt đầu dựng khung giao diện ngay sau khi hạ tầng CSDL sẵn sàng).

- Activity 4 (A4): Lập trình Backend API cho Nghiệp vụ Đặt phòng theo thời gian thực (Booking Engine).

* Predecessors: A2
* Dependency: FS (Xác thực xong mới xây dựng luồng nghiệp vụ tạo đơn đặt chỗ).

- Activity 5 (A5): Tích hợp dữ liệu API Booking Engine vào giao diện Mobile App Frontend.

* Predecessors: A4
* Dependency: SS (Gối đầu song song: Ngay khi Backend vừa có API mẫu, Frontend bắt đầu tích hợp ngay).

- Activity 6 (A6): Lập trình Backend API cho Phân hệ Quản lý & Mượn trả Thiết bị học thuật.

* Predecessors: A2
* Dependency: FS (Chạy song song với A4 nhưng yêu cầu hoàn thành Module A2).

- Activity 7 (A7): Xây dựng tính năng Sinh mã QR động Check-in phòng và tích hợp máy quét vật lý.

* Predecessors: A4
* Dependency: FS (Phải có logic đặt phòng thành công thì mới sinh mã QR Check-in).

- Activity 8 (A8): Xây dựng hệ thống Webhook & Push Notification nhắc lịch trả phòng/thiết bị.

* Predecessors: A7
* Dependency: SS (Triển khai song song cùng lúc với hoàn thiện tính năng QR Check-in).

- Activity 9 (A9): Phát triển Giao diện Quản trị viên (Admin Web Dashboard) dành cho Cán bộ Quản lý CSVC.

* Predecessors: A4, A6
* Dependency: FF (Hoạt động giao diện Admin chỉ hoàn thành khi cả hai luồng nghiệp vụ Booking và Device Management đã xong).

- Activity 10 (A10): Thực hiện Kiểm thử Tích hợp Toàn diện Hệ thống (System Integration Testing - SIT).

* Predecessors: A5, A8, A9
* Dependency: FS (Kiểm thử tích hợp toàn diện chỉ bắt đầu khi toàn bộ Frontend, Backend, QR và Admin Web đã hoàn tất kết nối).
  \================================================================================
