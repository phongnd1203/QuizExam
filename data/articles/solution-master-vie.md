################################################################################

# BỘ ĐÁP ÁN MASTER SOLUTIONS PE PMG201c (BẢN TIẾNG VIỆT ĐẦY ĐỦ 11 ĐỀ)

# CHUẨN FORMAT VĂN BẢN THUẦN TÚY COPY-PASTE PHÒNG THI EOS CLIENT

# ĐẠI HỌC FPT - PROJECT MANAGEMENT FUNDAMENTALS (PMG201c)

################################################################################

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

################################################################################

================================================================================
ĐỀ 02: DẠNG ĐỀ ĐÓNG - SỰ KIỆN & CHIẾN DỊCH XÃ HỘI (CHUẨN SP26 / SU26)
DỰ ÁN: CHIẾN DỊCH "CAMPUS XANH - KHÔNG RÁC THẢI NHỰA 2026" (GREEN CAMPUS 2026)
LỜI GIẢI MẪU CHUẨN PHÒNG THI EOS (BẢN TIẾNG VIỆT CÓ DẤU)
================================================================================

QUESTION 1: PROJECT CHARTER & 4 CONSTRAINTS (2.5 Điểm)
--------------------------------------------------------------------------------

1. Project Name:
   Green Campus & Zero-Waste Initiative 2026 (Chiến dịch "Campus Xanh - Không Rác Thải Nhựa 2026").

2. Project Purpose & Justification:

- Main Purpose:
  Thiết lập hệ sinh thái quản lý rác thải bền vững tại Đại học FPT, giảm thiểu 80% lượng rác thải nhựa dùng một lần, nâng cao ý thức phân loại rác tại nguồn cho 15.000 sinh viên và cán bộ giảng viên thông qua kết hợp hạ tầng thông minh, công nghệ số và truyền thông tương tác.
- Reason 1 (Bảo vệ Môi trường & Tiết kiệm Chi phí):
  Giảm tải lượng rác thải nhựa phát thải ra môi trường khuôn viên mỗi ngày, giảm 50% chi phí thu gom và xử lý rác thải cho Nhà trường hàng năm.
- Reason 2 (Giáo dục Ý thức & Trách nhiệm Xã hội):
  Xây dựng thói quen sống xanh (mang bình nước cá nhân, phân loại rác đúng quy chuẩn) cho sinh viên, định vị Đại học FPT là trường đại học tiên phong về phát triển bền vững (ESG Campus).

3. 4 Project Constraints (4 Ràng buộc cốt lõi):

- 1. Scope Constraint:

* In-Scope (Thuộc phạm vi):

- Lắp đặt 50 trạm phân loại rác 3 ngăn và 10 cây cấp nước uống miễn phí tại các giảng đường.
- Sản xuất và phát sóng chuỗi 8 video truyền thông viral trên TikTok/Facebook kết hợp cùng các CLB Sinh viên.
- Tổ chức Ngày hội "Đổi Rác Tái Chế Lấy Quà Xanh" (Green Swap Day) diễn ra trong 2 ngày cuối tuần.
- Phát triển và vận hành Web Mini App "Green Points" tích điểm đổi quà trên điện thoại di động.

* Out-of-Scope (Ngoài phạm vi):

- Xử lý rác thải xây dựng và công nghiệp nặng trong khuôn viên.
- Tài trợ chi phí vận hành căng tin / chuỗi cà phê thương mại ngoài trường.
- Mua sắm xe gom rác chuyên dụng cỡ lớn.

* 2. Time Constraint:
     Toàn bộ dự án phải hoàn thành nghiêm ngặt trong vòng đúng 5 tháng (từ ngày khởi động đến ngày tổng kết quyết toán).
* 3. Cost Constraint:
     Tổng ngân sách trần cố định là 1,500,000,000 VNĐ (1.5 tỷ đồng). Tuyệt đối không được phép vượt qua giới hạn này.
* 4. Quality Constraint:

- 100% các trạm rác và cây nước uống được nghiệm thu đạt tiêu chuẩn kỹ thuật và vệ sinh an toàn trước tháng thứ 3.
- Tối thiểu 10.000 sinh viên đăng ký tài khoản và tích điểm trên Mini App Green Points.
- Thu gom được ít nhất 5 tấn rác tái chế trong sự kiện Green Swap Day.
- Tỷ lệ hài lòng của sinh viên về chiến dịch đạt từ 85% trở lên qua khảo sát độc lập.

================================================================================
QUESTION 2: COST & BUDGET PLAN (NGÂN SÁCH CỐ ĐỊNH 1.5 TỶ VNĐ) (2.5 Điểm)
--------------------------------------------------------------------------------

Tổng ngân sách dự án (BAC): Đúng 1,500,000,000 VNĐ | Thời gian: 5 tháng.

Cost Item 1: Smart Waste Stations & Water Refill Units Procurement

- Description: Mua sắm 50 trạm phân loại rác thông minh 3 ngăn bằng thép sơn tĩnh điện chống gỉ và 10 máy lọc nước uống tự động công cộng có cảm biến rò rỉ; chi phí lắp đặt và kết nối đường ống nước.
- Estimation Method: Vendor Bid Analysis (So sánh 3 báo giá nhà thầu uy tín).

* 50 Trạm rác 3 ngăn: 50 bộ x 7,500,000 VNĐ = 375,000,000 VNĐ
* 10 Cây nước nóng lạnh công cộng: 10 bộ x 20,000,000 VNĐ = 200,000,000 VNĐ
* Chi phí vật tư lắp đặt, thi công đường ống: 45,000,000 VNĐ

- Estimated Cost: 620,000,000 VNĐ
- Person in Charge: Project Manager & Facility Procurement Lead.

Cost Item 2: "Green Points" Web Mini App Software Development

- Description: Chi phí nhân sự phát triển phần mềm Mini App tích hợp Web/Zalo: 1 PM (2 tháng), 2 Developers (3 tháng), 1 UI/UX Designer (1.5 tháng), 1 QA (1.5 tháng) và chi phí Cloud Server 5 tháng.
- Estimation Method: Bottom-up Estimation.

* Chi phí nhân sự lập trình: 215,000,000 VNĐ
* Thuê Cloud Server & domain 5 tháng: 25,000,000 VNĐ

- Estimated Cost: 240,000,000 VNĐ
- Person in Charge: Technical Lead & Software PM.

Cost Item 3: Media Production & Multi-channel Viral Marketing

- Description: Sản xuất chuỗi 8 video ngắn chất lượng cao (TikTok/Facebook Reels), cát-xê cho 4 KOLs/Influencers sinh viên, chi phí chạy quảng cáo mục tiêu Campus và ấn phẩm banner/standee.
- Estimation Method: Parametric Estimation.

* Sản xuất 8 video viral: 8 video x 22,500,000 VNĐ = 180,000,000 VNĐ
* Cát-xê KOLs & chi phí quảng cáo truyền thông: 40,000,000 VNĐ

- Estimated Cost: 220,000,000 VNĐ
- Person in Charge: Marketing & Communications Lead.

Cost Item 4: "Green Swap Day" 2-Day Festival Logistics & Gifts

- Description: Chi phí thuê sân khấu, gian hàng triển lãm, hệ thống âm thanh ánh sáng trong 2 ngày hội; 3.000 phần quà xanh (bình giữ nhiệt inox khắc logo, cây sen đá, voucher sách) để đổi rác lấy quà.
- Estimation Method: Bottom-up Estimation.

* Thuê sân khấu, gian hàng, âm thanh: 60,000,000 VNĐ
* 3.000 Phần quà xanh đổi rác: 3.000 phần x 36,666 VNĐ = 110,000,000 VNĐ
* Hậu cần, ăn uống BTC 2 ngày sự kiện: 30,000,000 VNĐ

- Estimated Cost: 200,000,000 VNĐ
- Person in Charge: Event Manager & Student Affairs Lead.

Cost Item 5: Volunteer Training, Uniforms & Field Operations

- Description: May 150 áo đồng phục TNV Xanh, in 5.000 tờ rơi hướng dẫn phân loại rác, tổ chức 2 buổi tập huấn nghiệp vụ hướng dẫn tại chỗ và chi phí hỗ trợ xăng xe/ăn trưa cho đội tình nguyện viên.
- Estimation Method: Analogous Estimation.

* 150 Áo đồng phục & thẻ đeo: 30,000,000 VNĐ
* Chi phí tập huấn & ăn trưa hỗ trợ TNV: 40,000,000 VNĐ
* Sổ tay, ấn phẩm in hướng dẫn tại chỗ: 30,000,000 VNĐ

- Estimated Cost: 100,000,000 VNĐ
- Person in Charge: Volunteer Coordinator & HR Lead.

Cost Item 6: Contingency Reserve (Quỹ dự phòng rủi ro - Khớp đúng ngân sách)

- Description: Quỹ dự phòng tài chính ứng phó với các phát sinh ngoài ý muốn (giá thiết bị biến động, phát sinh chi phí đường ống khi thi công, tăng cường quà tặng do lượng sinh viên tham gia vượt dự kiến).
- Estimation Method: Reserve Analysis (Tính đúng phần chênh lệch để khớp chính xác 100% BAC 1.5 tỷ).

* Base Total = 620M + 240M + 220M + 200M + 100M = 1,380,000,000 VNĐ.
* Contingency Reserve = 1,500,000,000 - 1,380,000,000 = 120,000,000 VNĐ (Chiếm đúng 8.0% BAC).
* Total Project Budget = 1,380,000,000 + 120,000,000 = 1,500,000,000 VNĐ (Khớp chính xác 100%).

- Estimated Cost: 120,000,000 VNĐ
- Person in Charge: Project Sponsor & Project Manager.

================================================================================
QUESTION 3: RISK MANAGEMENT (2.5 Điểm)
--------------------------------------------------------------------------------

Risk 1: Vượt chi phí thiết bị và vật tư thi công (Cost Overrun Risk)

- Mô tả & Ảnh hưởng: Giá thép và máy lọc nước tăng trên thị trường hoặc phát sinh thêm chi phí đường ống dẫn đến vượt ngân sách trần 1.5 tỷ VNĐ.
- Đánh giá rủi ro: Likelihood: Medium | Impact: High.
- Chiến lược: Mitigate (Giảm thiểu) & Transfer (Chuyển giao).
- Biện pháp phòng ngừa (Mitigation Plan - Trước khi xảy ra):

* Ký hợp đồng đơn giá cố định trọn gói (Fixed-price contract) với nhà cung cấp thiết bị ngay tháng thứ nhất.
* Khảo sát kỹ lưỡng hiện trạng đường nước trước khi lắp đặt để chốt khối lượng thi công chính xác.

- Kế hoạch ứng phó (Contingency Plan - Sau khi xảy ra):

* Kích hoạt trích quỹ dự phòng rủi ro Contingency Reserve (trong hạn mức 120 triệu VNĐ).
* Đàm phán giảm bớt số lượng chi tiết trang trí phụ để bù vào chi phí thiết bị cốt lõi.

Risk 2: Chậm tiến độ lắp đặt trạm rác và cây nước (Schedule Delay Risk)

- Mô tả & Ảnh hưởng: Nhà thầu giao thiết bị chậm hoặc việc đấu nối hệ thống nước gây ảnh hưởng giờ học, không kịp hoàn thành trước tháng thứ 3.
- Đánh giá rủi ro: Likelihood: High | Impact: High.
- Chiến lược: Mitigate (Giảm thiểu).
- Biện pháp phòng ngừa (Mitigation Plan - Trước khi xảy ra):

* Lập tiến độ thi công chi tiết, chia nhỏ thành 3 đợt nghiệm thu cuốn chiếu.
* Đăng ký lịch thi công vào khung giờ cuối tuần và buổi tối để tránh ảnh hưởng giờ học của sinh viên.
* Đưa điều khoản phạt 1% giá trị hợp đồng cho mỗi ngày chậm trễ vào hợp đồng nhà thầu.

- Kế hoạch ứng phó (Contingency Plan - Sau khi xảy ra):

* Huy động đội kỹ thuật tăng ca làm thêm giờ (Fast-tracking).
* Ưu tiên lắp đặt hoàn thiện trước tại các khu vực giảng đường chính tập trung đông người.

Risk 3: Tỷ lệ tương tác và sử dụng ứng dụng Mini App thấp (Low Engagement Risk)

- Mô tả & Ảnh hưởng: Sinh viên ngại tải app, không tích điểm đổi quà và tiếp tục vứt rác bừa bãi, không đạt KPI 10.000 người dùng.
- Đánh giá rủi ro: Likelihood: Medium | Impact: High.
- Chiến lược: Mitigate (Giảm thiểu).
- Biện pháp phòng ngừa (Mitigation Plan - Trước khi xảy ra):

* Tối ưu trải nghiệm Mini App cực kỳ đơn giản: Không bắt cài đặt phức tạp, chỉ cần quét mã QR trên Web/Zalo là tích điểm ngay trong 5 giây.
* Phối hợp cùng Đoàn Trường và Giảng viên đưa việc tham gia vào điểm rèn luyện sinh viên.
* Chạy các chuỗi mini-game trên mạng xã hội có giải thưởng hấp dẫn trước ngày phát động.

- Kế hoạch ứng phó (Contingency Plan - Sau khi xảy ra):

* Tăng gấp đôi điểm thưởng (x2 Green Points) trong tuần đầu tiên để tạo hiệu ứng lan tỏa.
* Bố trí thêm bàn hướng dẫn trực tiếp của TNV tại tất cả 10 cây cấp nước để hỗ trợ sinh viên tại chỗ.

================================================================================
QUESTION 4: PROJECT MILESTONES & 10 ACTIVITIES (2.5 Điểm)
--------------------------------------------------------------------------------

1. Bốn Cột mốc chính của dự án (4 Project Milestones):

- Milestone 1 (Initiation & Partnership Sign-off): Phê duyệt Kế hoạch tổng thể & Ký kết hợp đồng với Nhà tài trợ và Nhà thầu thiết bị (Cuối Tháng 1).
- Milestone 2 (Procurement & Software Launch): Hoàn tất sản xuất thiết bị trạm rác & Phát hành Web Mini App Green Points (Cuối Tháng 2).
- Milestone 3 (Campus Execution & Green Swap Day Festival): Hoàn thành lắp đặt toàn bộ cơ sở vật chất & Tổ chức thành công Ngày hội 2 ngày (Cuối Tháng 4).
- Milestone 4 (Project Closing & Impact Handover): Nghiệm thu tổng thể, bàn giao hệ thống cho trường vận hành & Công bố báo cáo tổng kết (Cuối Tháng 5).

2. Chi tiết 10 Hoạt động giai đoạn Thực thi & Tổ chức Ngày hội (Milestone 3) & Quan hệ logic:

- Activity 1 (A1): Khảo sát hiện trường vị trí lắp đặt 50 trạm rác và 10 cây cấp nước.

* Predecessors: Start (Milestone 2 hoàn thành)
* Dependency: FS

- Activity 2 (A2): Thi công hệ thống cấp thoát nước và nguồn điện cho 10 cây cấp nước.

* Predecessors: A1
* Dependency: FS (Khảo sát xong mới tiến hành đục tường, kéo ống nước).

- Activity 3 (A3): Lắp đặt 50 trạm phân loại rác 3 ngăn tại các hành lang giảng đường.

* Predecessors: A1
* Dependency: FS (Lắp đặt đồng thời hoặc song song với thi công cây nước).

- Activity 4 (A4): Dán mã QR Code Mini App và bảng hướng dẫn phân loại lên tất cả các trạm rác và cây nước.

* Predecessors: A2, A3
* Dependency: FF (Hoạt động dán mã và bảng biển chỉ hoàn tất khi cả trạm rác và cây nước đã lắp đặt xong).

- Activity 5 (A5): Kiểm tra vận hành thử nghiệm nguồn nước uống và nghiệm thu chất lượng vệ sinh an toàn.

* Predecessors: A2
* Dependency: FS (Lắp đặt xong mới lấy mẫu nước xét nghiệm vi sinh).

- Activity 6 (A6): Chiêu mộ và tổ chức tập huấn nghiệp vụ cho 150 Tình nguyện viên Xanh.

* Predecessors: A1
* Dependency: SS (Khởi động công tác tuyển dụng TNV song song với giai đoạn khảo sát hiện trường).

- Activity 7 (A7): Thi công lắp đặt sân khấu, gian hàng triển lãm và hệ thống âm thanh ánh sáng cho ngày hội.

* Predecessors: A4
* Dependency: FS (Xong cơ sở vật chất giảng đường mới bắt đầu dựng sân khấu chính).

- Activity 8 (A8): Tập kết 3.000 phần quà xanh và chuẩn bị kho lưu trữ rác tái chế tạm thời.

* Predecessors: A7
* Dependency: SS (Tập kết quà về các gian hàng song song khi đang hoàn thiện sân khấu).

- Activity 9 (A9): Tổ chức Ngày hội "Green Swap Day" thu hút sinh viên đổi rác lấy quà trong 2 ngày cuối tuần.

* Predecessors: A5, A6, A7, A8
* Dependency: FS (Khai mạc ngày hội khi tất cả kỹ thuật, nước uống, TNV và quà tặng đã sẵn sàng 100%).

- Activity 10 (A10): Thu gom, đóng bao tải và bàn giao toàn bộ 5 tấn rác tái chế cho Nhà máy xử lý rác thải môi trường.

* Predecessors: A9
* Dependency: FS (Ngày hội kết thúc mới tổng kiểm kê và bàn giao rác tái chế cho xe chuyên dụng).
  \================================================================================

################################################################################

================================================================================
ĐỀ 03: DẠNG ĐỀ CHUYÊN SÂU KỸ THUẬT (CPM, EVM, RACI & RỦI RO - CHUẨN CA 2 SP26)
DỰ ÁN: HỆ THỐNG KHẢO THÍ & GIÁM SÁT THI TRỰC TUYẾN AI (AUTOPROCTOR)
LỜI GIẢI MẪU CHUẨN PHÒNG THI EOS (BẢN TIẾNG VIỆT CÓ DẤU)
================================================================================

REQUEST 1: CƠ CẤU TỔ CHỨC DỰ ÁN (ORGANIZATIONAL STRUCTURE - 2.0 Điểm)
--------------------------------------------------------------------------------

1. Đánh giá mô hình Cơ cấu Chức năng hiện tại (Functional Structure):

- Mô hình phòng ban chức năng truyền thống của Đại học FPT KHÔNG PHÙ HỢP để triển khai dự án công nghệ phức tạp như AutoProctor.
- Lý do: Nhân sự phân tán tại các phòng ban độc lập (Phòng Khảo thí, Phòng IT, Phòng Đào tạo), PM có quyền hạn rất thấp (Low/No PM Authority), không kiểm soát được ngân sách $200,000, phụ thuộc vào quyết định của các Trưởng phòng chức năng và quy trình phê duyệt hành chính kéo dài gây chậm trễ tiến độ.

2. Đề xuất Cơ cấu tối ưu nhất:

- Cấu trúc đề xuất: Strong Matrix Structure (Cơ cấu Ma trận Mạnh).

3. Bốn lý do bảo vệ đề xuất (4 Key Justifications):

- 1. Quyền hạn PM cao (High PM Authority): Project Manager nắm toàn quyền kiểm soát ngân sách $200,000 và tiến độ dự án, trực tiếp giao việc và đánh giá hiệu suất của nhân sự trong suốt vòng đời dự án.
- 2. Huy động tối ưu nguồn lực liên phòng ban (Cross-Functional Synergy): Dễ dàng điều động các kỹ sư AI cốt lõi, chuyên viên an ninh mạng từ Phòng IT và các giám thị dày dạn kinh nghiệm từ Phòng Khảo thí vào cùng một đội dự án tập trung.
- 3. Trách nhiệm giải trình duy nhất (Clear Single-point Accountability): Có một đầu mối duy nhất (PM) chịu trách nhiệm trước Ban Giám hiệu về chất lượng, an toàn bảo mật và thời hạn bàn giao hệ thống.
- 4. Ra quyết định nhanh và linh hoạt (Rapid Decision-Making): Đội ngũ dự án phản ứng linh hoạt trước các thay đổi công nghệ và xử lý kịp thời các sự cố kỹ thuật phát sinh mà không phải chờ duyệt qua nhiều tầng phòng ban.

================================================================================
REQUEST 2: MA TRẬN PHÂN CÔNG TRÁCH NHIỆM (RACI MATRIX - 2.0 Điểm)
--------------------------------------------------------------------------------

Quy tắc vàng: Mỗi công việc chỉ có DUY NHẤT 1 chữ cái 'A' (Accountable - Người chịu trách nhiệm phê duyệt cuối cùng).

Danh sách 4 vai trò:

- PM: Project Manager (Quản trị viên Dự án)
- BA: Business Analyst (Chuyên viên Phân tích Nghiệp vụ)
- Dev: Solution Architect / Lead Developer (Kiến trúc sư / Trưởng nhóm Lập trình)
- QA: QA / Test Lead (Trưởng nhóm Kiểm thử Chất lượng)

Bảng Ma trận RACI cho 8 công việc chính (SDLC):

Task 1: Khảo sát nghiệp vụ & Phê duyệt Tài liệu SRS
-> PM: I | BA: A, R | Dev: C | QA: I

Task 2: Thiết kế Kiến trúc Hệ thống & Cơ sở dữ liệu
-> PM: I | BA: C | Dev: A, R | QA: C

Task 3: Thiết kế Giao diện Wireframe & Trải nghiệm UI/UX
-> PM: I | BA: R | Dev: A | QA: C

Task 4: Lập trình Module AI Nhận diện Khuôn mặt & Ánh mắt
-> PM: I | BA: I | Dev: A, R | QA: I

Task 5: Lập trình Backend Giám sát Thời gian thực & Gửi Cảnh báo
-> PM: I | BA: I | Dev: A, R | QA: I

Task 6: Kiểm thử Tải (5.000 users) & Kiểm thử Xâm nhập Bảo mật
-> PM: I | BA: I | Dev: C | QA: A, R

Task 7: Kiểm thử Nghiệm thu Người dùng (UAT Sign-off)
-> PM: A | BA: R | Dev: C | QA: R

Task 8: Triển khai Hệ thống lên Môi trường Production & Go-Live
-> PM: A, R | BA: I | Dev: R | QA: I

================================================================================
REQUEST 3: BÀI TOÁN SƠ ĐỒ MẠNG CPM & NÉN TIẾN ĐỘ (2.0 Điểm)
--------------------------------------------------------------------------------

1. Liệt kê tất cả các đường đi (Paths) và Độ dài từng đường:

- Path 1: Start -> A -> B -> D -> F -> H -> End

* Độ dài = 3 + 4 + 5 + 4 + 6 = 22 tuần.

- Path 2: Start -> C -> D -> F -> H -> End

* Độ dài = 6 + 5 + 4 + 6 = 21 tuần.

- Path 3: Start -> C -> E -> G -> H -> End

* Độ dài = 6 + 8 + 3 + 6 = 23 tuần.

2. Xác định Đường găng & Thời gian tối thiểu hoàn thành dự án:

- Critical Path (Đường dài nhất): Start -> C -> E -> G -> H -> End (Path 3).
- Thời gian tối thiểu hoàn thành dự án (Minimum Project Duration): 23 tuần.

3. Bảng tính thông số ES, EF, LS, LF và Float (Độ trễ):

Quy tắc tính:

- Forward Pass: ES(Start) = 0; EF = ES + Duration; ES = Max(EF của các task trước).
- Backward Pass: LF(End) = 23; LS = LF - Duration; LF = Min(LS của các task sau).
- Float = LS - ES = LF - EF.

Bảng kết quả tính toán chi tiết:

- Activity A | Duration: 3 | ES: 0 | EF: 3 | LS: 1 | LF: 4 | Float: 1 (Linh hoạt)
- Activity B | Duration: 4 | ES: 3 | EF: 7 | LS: 4 | LF: 8 | Float: 1 (Linh hoạt)
- Activity C | Duration: 6 | ES: 0 | EF: 6 | LS: 0 | LF: 6 | Float: 0 (Găng - Critical)
- Activity D | Duration: 5 | ES: 7 | EF: 12 | LS: 8 | LF: 13 | Float: 1 (Linh hoạt)
- Activity E | Duration: 8 | ES: 6 | EF: 14 | LS: 6 | LF: 14 | Float: 0 (Găng - Critical)
- Activity F | Duration: 4 | ES: 12 | EF: 16 | LS: 13 | LF: 17 | Float: 1 (Linh hoạt)
- Activity G | Duration: 3 | ES: 14 | EF: 17 | LS: 14 | LF: 17 | Float: 0 (Găng - Critical)
- Activity H | Duration: 6 | ES: 17 | EF: 23 | LS: 17 | LF: 23 | Float: 0 (Găng - Critical)

* Công việc có tính linh hoạt cao nhất (Most Flexible Activities): Các công việc A, B, D, F (đều có Float = 1 tuần, có thể trễ tối đa 1 tuần mà không làm ảnh hưởng đến tiến độ chung 23 tuần của dự án).

4. Giải pháp Nén tiến độ 3 tuần (từ 23 tuần xuống 20 tuần) & Phân tích bẫy đường găng mới:

- Phân tích bẫy đường găng tiềm ẩn (Secondary Critical Path Trap):

* Path 3 (Đường găng chính) = 23 tuần.
* Path 1 (Đường phụ dài thứ 2) = 22 tuần.
* Nếu chỉ nén 3 tuần trên Path 3 (ví dụ giảm E đi 3 tuần), Path 3 giảm còn 20 tuần nhưng Path 1 (22 tuần) sẽ vượt lên thành ĐƯỜNG GĂNG MỚI, khiến dự án vẫn mất 22 tuần chứ không đạt được 20 tuần!

- Phương án nén tiến độ khả thi và tối ưu nhất:

* Bước 1: Áp dụng kỹ thuật Crashing (bổ sung nhân sự cao cấp) rút ngắn 2 tuần tại Activity H (hoạt động dùng chung ở cuối của cả 3 đường: giảm từ 6 tuần xuống 4 tuần).

- Khi đó: Path 1 còn 20 tuần, Path 2 còn 19 tuần, Path 3 còn 21 tuần.

* Bước 2: Áp dụng kỹ thuật Fast-tracking (cho làm song song một phần) rút ngắn tiếp 1 tuần tại Activity E trên Path 3 (giảm từ 8 tuần xuống 7 tuần).

- Khi đó: Path 3 giảm từ 21 tuần xuống đúng 20 tuần.

* Kết quả cuối cùng: Cả Path 3 và Path 1 đều có độ dài 20 tuần, Path 2 có độ dài 19 tuần. Dự án hoàn thành đúng mục tiêu 20 tuần mà không bị tắc nghẽn bởi đường găng phụ.

================================================================================
REQUEST 4: BÀI TOÁN QUẢN TRỊ GIÁ TRỊ THU ĐƯỢC (EVM CALCULATION - 2.0 Điểm)
--------------------------------------------------------------------------------

1. Các thông số đầu vào tại mốc Đánh giá Tháng thứ 4:

- Tổng ngân sách phê duyệt (BAC): $200,000.
- Chi phí thực tế đã giải ngân (AC): $90,000.
- Giá trị kế hoạch dự kiến (PV): $80,000.
- Tỷ lệ khối lượng công việc hoàn thành thực tế: 35%.

2. Các bước tính toán chỉ số EVM:

- Tính Giá trị thu được (Earned Value - EV):
  EV = % Hoàn thành thực tế x BAC = 35% x $200,000 = $70,000.
- Tính Chỉ số Hiệu suất Chi phí (Cost Performance Index - CPI):
  CPI = EV / AC = $70,000 / $90,000 = 0.778 (xấp xỉ 0.78).
- Tính Chỉ số Hiệu suất Tiến độ (Schedule Performance Index - SPI):
  SPI = EV / PV = $70,000 / $80,000 = 0.875.

3. Nhận xét về Tình trạng Sức khỏe của Dự án:

- Về Chi phí (Cost Health):
  CPI = 0.778 < 1.0 (Độ lệch chi phí CV = EV - AC = $70,000 - $90,000 = -$20,000 < 0).
 => Dự án đang BỘI CHI NGÂN SÁCH (Over Budget). Cứ mỗi $1.00 chi tiêu thực tế, dự án hiện chỉ thu lại được khoảng $0.78 giá trị công việc hoàn thành.
- Về Tiến độ (Schedule Health):
  SPI = 0.875 < 1.0 (Độ lệch tiến độ SV = EV - PV = $70,000 - $80,000 = -$10,000 < 0).
  => Dự án đang CHẬM TIẾN ĐỘ (Behind Schedule). Tiến độ thực tế mới chỉ đạt 87.5% so với khối lượng công việc đáng lẽ phải hoàn thành tại tháng thứ 4.

4. Đề xuất 2 Giải pháp Quản trị Khắc phục (Corrective Actions):

- Giải pháp 1 (Khắc phục Tiến độ): Áp dụng kỹ thuật Fast-tracking, cho phép lập trình giao diện Frontend và xây dựng Backend API chạy gối đầu song song; tăng cường họp Daily Standup 15 phút để giải quyết ngay các vướng mắc kỹ thuật của đội AI mà không làm phát sinh thêm chi phí nhân sự.
- Giải pháp 2 (Khắc phục Chi phí): Thực hiện kiểm soát phạm vi nghiêm ngặt (Prevent Scope Creep), tạm hoãn các tính năng phụ chưa cần thiết; rà soát và tối ưu hóa hạ tầng Cloud GPU, đàm phán lại đơn giá thuê máy chủ để cắt giảm chi phí vận hành hàng tháng.

================================================================================
REQUEST 5: QUẢN TRỊ RỦI RO (RISK MANAGEMENT - 2.0 Điểm)
--------------------------------------------------------------------------------

Risk 1: AI nhận diện sai sinh viên gian lận (AI False Positive Detection Risk)

- Mô tả & Ảnh hưởng: Thuật toán AI gắn cờ nhầm sinh viên vô tội (do ánh sáng phòng tối hoặc cử động mắt tự nhiên), gây hoang mang cho thí sinh và khiếu nại học thuật.
- Đánh giá rủi ro: Likelihood: High | Impact: High.
- Chiến lược: Mitigate (Giảm thiểu).
- Biện pháp phòng ngừa (Mitigation Plan - Trước khi xảy ra):

* Huấn luyện mô hình AI trên bộ dữ liệu đa dạng hơn 50.000 hình ảnh thí sinh FPT với nhiều góc chụp và điều kiện ánh sáng khác nhau.
* Thiết lập cơ chế cảnh báo nhiều cấp độ (Warning Level 1-3) thay vì tự động khóa bài thi ngay lập tức.

- Kế hoạch ứng phó (Contingency Plan - Sau khi xảy ra):

* Tự động ghi lại video clip 10 giây trước và sau thời điểm cảnh báo để giám thị con người phúc tra thủ công (Human-in-the-loop review).
* Mở cổng tiếp nhận khiếu nại khảo thí trực tuyến phản hồi trong vòng 2 giờ.

Risk 2: Sập máy chủ khi 5.000 sinh viên truy cập thi đồng thời (High-Concurrency Server Crash Risk)

- Mô tả & Ảnh hưởng: Hệ thống nghẽn mạng hoặc sập cơ sở dữ liệu tại thời điểm phát đề thi đồng loạt, làm gián đoạn toàn bộ kỳ thi chung của trường.
- Đánh giá rủi ro: Likelihood: Medium | Impact: High.
- Chiến lược: Mitigate (Giảm thiểu).
- Biện pháp phòng ngừa (Mitigation Plan - Trước khi xảy ra):

* Triển khai kiến trúc phân tán Microservices trên AWS EKS kết hợp cơ chế Auto-scaling tự động tăng số lượng máy chủ khi lưu lượng tăng vọt.
* Tổ chức 3 đợt thi thử tải quy mô lớn (Stress testing với dữ liệu giả lập 10.000 kết nối) trước kỳ thi chính thức 2 tuần.

- Kế hoạch ứng phó (Contingency Plan - Sau khi xảy ra):

* Kích hoạt hệ thống máy chủ dự phòng thảm họa Failover trong vòng 3 phút.
* Tự động lưu bài làm của sinh viên mỗi 15 giây xuống bộ nhớ cục bộ (Local Storage/Cache) để không bị mất dữ liệu khi rớt mạng.

Risk 3: Rò rỉ đề thi hoặc dữ liệu khuôn mặt qua mạng nội bộ (Data Breach & Exam Leak Risk)

- Mô tả & Ảnh hưởng: Hacker hoặc sinh viên nội bộ can thiệp vào đường truyền mạng để đánh cắp đề thi hoặc dữ liệu sinh trắc học, vi phạm nghiêm trọng tính liêm chính học thuật.
- Đánh giá rủi ro: Likelihood: Low | Impact: High.
- Chiến lược: Mitigate & Avoid.
- Biện pháp phòng ngừa (Mitigation Plan - Trước khi xảy ra):

* Mã hóa toàn bộ dữ liệu đề thi và video giám sát bằng chuẩn mã hóa đầu cuối AES-256 bit và giao thức HTTPS/TLS 1.3.
* Áp dụng chính sách Zero-Trust, phân quyền truy cập nghiêm ngặt và xác thực 2 yếu tố (2FA) đối với cán bộ ra đề.

- Kế hoạch ứng phó (Contingency Plan - Sau khi xảy ra):

* Thu hồi ngay lập tức đề thi bị rò rỉ và kích hoạt bộ đề thi dự phòng (Backup Exam Package).
* Khóa phiên truy cập của tài khoản bị xâm nhập, truy xuất nhật ký hệ thống (Audit Logs) để báo cáo Hội đồng Kỷ luật.
  \================================================================================

################################################################################

================================================================================
ĐỀ 04: DẠNG ĐỀ QUẢN LÝ PHẠM VI WBS & MỤC TIÊU SMART (SMART HOSPITAL)
DỰ ÁN: SMART HOSPITAL & TELE-HEALTH CONSULTATION PORTAL
LỜI GIẢI MẪU CHUẨN PHÒNG THI EOS (BẢN TIẾNG VIỆT CÓ DẤU)
================================================================================

REQUEST 1: THIẾT LẬP MỤC TIÊU THEO NGUYÊN TẮC SMART (2.5 Điểm)
--------------------------------------------------------------------------------

Mục tiêu 1: Phân hệ Khám chữa bệnh Từ xa (Tele-Health Consultation System)

- S (Specific - Cụ thể):
  Xây dựng và tích hợp phân hệ Khám bệnh Từ xa (Tele-Health) đa nền tảng (Web & Mobile App) cho phép bệnh nhân ngoại trú đặt lịch hẹn, thực hiện cuộc gọi video tư vấn y tế trực tuyến độ nét cao với bác sĩ chuyên khoa và nhận đơn thuốc điện tử.
- M (Measurable - Đo lường được):

* Đạt tối thiểu 10.000 lượt khám tư vấn từ xa thành công/tháng sau 3 tháng đưa vào sử dụng.
* Thời gian kết nối cuộc gọi video ổn định dưới 3 giây (< 3s) với độ trễ âm thanh/hình ảnh < 200ms.
* Tỷ lệ bệnh nhân đánh giá hài lòng với chất lượng dịch vụ đạt >= 90%.

- A (Achievable - Khả thi):
  Hệ thống ứng dụng giao thức truyền thông thời gian thực WebRTC, máy chủ phân tán AWS Media Services có sẵn của tập đoàn viễn thông tài trợ, kết hợp cùng đội ngũ 50 bác sĩ nòng cốt được tập huấn nghiệp vụ.
- R (Relevant - Phù hợp & Thực tế):
  Giải quyết trực tiếp mục tiêu chiến lược của bệnh viện: cắt giảm 40% tình trạng quá tải và ùn tắc tại khu khám bệnh ngoại trú, tiết kiệm 60% thời gian chờ đợi và chi phí đi lại cho bệnh nhân.
- T (Time-bound - Có thời hạn):
  Hoàn thành việc phát triển, kiểm thử bảo mật và nghiệm thu đưa vào vận hành thử nghiệm tại tháng thứ 6 của dự án (trước thời hạn tổng thể 9 tháng).

Mục tiêu 2: Phân hệ Số hóa Bệnh án Điện tử (Electronic Medical Records - EMR)

- S (Specific - Cụ thể):
  Xây dựng cơ sở dữ liệu bệnh án điện tử tập trung đạt chuẩn mã hóa y tế quốc tế (HL7/FHIR), số hóa toàn bộ dữ liệu lịch sử khám chữa bệnh của bệnh nhân và tích hợp tính năng tra cứu tự động cho bác sĩ.
- M (Measurable - Đo lường được):

* Số hóa và chuyển đổi hoàn thành 100% mục tiêu (đạt đúng 10.000 hồ sơ bệnh án ngoại trú).
* Tỷ lệ trích xuất thông tin tự động bằng công nghệ OCR đạt độ chính xác >= 99.8%.
* Thời gian tra cứu và hiển thị đầy đủ lịch sử bệnh án của bệnh nhân dưới 1 giây (< 1s).

- A (Achievable - Khả thi):
  Sử dụng mô hình AI OCR chuyên biệt cho tài liệu y tế kết hợp với đội ngũ 10 chuyên viên số hóa dữ liệu y tế chuyên trách và hệ thống CSDL PostgreSQL phân vùng được mã hóa bảo mật cấp độ AES-256.
- R (Relevant - Phù hợp & Thực tế):
  Giúp bác sĩ truy xuất tiền sử bệnh tức thì khi hội chẩn từ xa, loại bỏ 100% rủi ro thất lạc bệnh án giấy, đồng thời tạo tiền đề số hóa toàn diện dữ liệu y tế cho bệnh viện.
- T (Time-bound - Có thời hạn):
  Hoàn tất số hóa toàn bộ 10.000 hồ sơ bệnh án và được Hội đồng Y khoa nghiệm thu tại tháng thứ 7 của dự án.

================================================================================
REQUEST 2: QUẢN LÝ PHẠM VI DỰ ÁN & SẢN PHẨM BÀN GIAO (2.5 Điểm)
--------------------------------------------------------------------------------

1. In-Scope (4 Hạng mục nằm trong phạm vi dự án):

- Hạng mục 1: Phát triển Cổng thông tin Web Portal và Mobile App (iOS/Android) cho bệnh nhân đặt lịch hẹn khám bệnh, theo dõi hồ sơ sức khỏe và thanh toán viện phí trực tuyến.
- Hạng mục 2: Xây dựng Phân hệ Cuộc gọi Video Khám bệnh Từ xa (Tele-Health) chuẩn WebRTC chất lượng HD, tích hợp ghi chú lâm sàng trong cuộc gọi cho bác sĩ.
- Hạng mục 3: Xây dựng Cơ sở dữ liệu và Phân hệ Quản lý Bệnh án Điện tử (EMR) chuẩn HL7/FHIR, số hóa 10.000 hồ sơ bệnh án lịch sử.
- Hạng mục 4: Xây dựng Phân hệ Kê đơn thuốc điện tử (E-Prescription) tích hợp cảnh báo tương tác thuốc và gửi mã QR nhận thuốc tự động cho bệnh nhân.

2. Out-of-Scope (4 Hạng mục loại trừ ngoài phạm vi nhằm tránh Scope Creep):

- Hạng mục 1: Không mua sắm, lắp đặt hoặc bảo trì các trang thiết bị phần cứng y tế chuyên dụng tại phòng khám (máy chụp X-quang, máy CT Scanner, máy siêu âm, máy đo điện tim).
- Hạng mục 2: Không trực tiếp cung cấp dịch vụ giao vận chuyển thuốc tận nhà cho bệnh nhân (Bệnh viện sẽ ký kết hợp đồng riêng với đơn vị vận chuyển bên thứ ba độc lập).
- Hạng mục 3: Không phát triển hệ thống điều phối xe cứu thương và cấp cứu ngoại viện khẩn cấp (115 Emergency Dispatch).
- Hạng mục 4: Không xây dựng phần mềm quản lý phòng mổ chuyên sâu hay hệ thống phân tích lưu trữ hình ảnh chẩn đoán phức tạp (PACS/RIS cao cấp).

3. Project Deliverables (3 Sản phẩm bàn giao chính của dự án):

- Deliverable 1 (Software Package): Bộ mã nguồn hoàn chỉnh và bản cài đặt ứng dụng Web Portal (ReactJS) & Mobile App (Flutter) đã được đóng gói và triển khai trên Cloud AWS.
- Deliverable 2 (Data Package): Cơ sở dữ liệu chứa 10.000 bệnh án điện tử đã được chuẩn hóa dữ liệu, số hóa hoàn chỉnh và mã hóa bảo mật theo chuẩn y tế HIPAA.
- Deliverable 3 (Documentation & Training Package): Bộ tài liệu thiết kế kiến trúc hệ thống, Sổ tay hướng dẫn sử dụng (User Manual) dành cho bệnh nhân và bác sĩ, cùng Biên bản đào tạo chuyển giao công nghệ cho 200 cán bộ y tế.

================================================================================
REQUEST 3: CẤU TRÚC PHÂN CHIA CÔNG VIỆC (WBS 5 GIAI ĐOẠN) (2.5 Điểm)
--------------------------------------------------------------------------------

Cấu trúc WBS chuẩn 5 giai đoạn phát triển phần mềm y tế:

1.0 Smart Hospital & Tele-Health Consultation Portal Project
1.1 Project Initiation & Planning (Giai đoạn Khởi tạo & Lập kế hoạch)
1.1.1 Xây dựng và phê duyệt Project Charter & Kế hoạch Quản lý Dự án
1.1.2 Xác định Ma trận Stakeholders & Quy chế Bảo mật Dữ liệu Y tế (HIPAA Compliance)
1.1.3 Lập Scope Baseline, WBS Dictionary và Kế hoạch Quản lý Chi phí
1.2 System Architecture & UI/UX Design (Giai đoạn Thiết kế Kiến trúc & Giao diện)
1.2.1 Khảo sát quy trình lâm sàng & Phê duyệt Tài liệu Đặc tả Yêu cầu Phần mềm (SRS)
1.2.2 Thiết kế Kiến trúc Microservices & CSDL Bệnh án Điện tử chuẩn HL7/FHIR
1.2.3 Thiết kế Giao diện Wireframe & UI/UX Prototype cho Bệnh nhân & Bác sĩ
1.3 Core Engineering & Digitization (Giai đoạn Lập trình & Số hóa)
1.3.1 Lập trình Module Đặt lịch hẹn & Cổng thanh toán viện phí trực tuyến
1.3.2 Lập trình Phân hệ Cuộc gọi Video Tele-Health HD qua WebRTC
1.3.3 Phát triển Phân hệ Quản lý Bệnh án Điện tử (EMR) & Đơn thuốc điện tử
1.3.4 Thực hiện Scan và Trích xuất AI OCR 10.000 Hồ sơ Bệnh án Lịch sử
1.3.5 Xây dựng Admin Dashboard giám sát vận hành và cảnh báo y khoa
1.4 Testing, Security Audit & Quality Assurance (Giai đoạn Kiểm thử & Đảm bảo Chất lượng)
1.4.1 Kiểm thử Tích hợp Toàn diện Hệ thống (System Integration Testing - SIT)
1.4.2 Kiểm thử Tải và Độ trễ truyền phát Video Tele-Health (Load & Stress Testing)
1.4.3 Kiểm thử Đánh giá An toàn Thông tin & Lỗ hổng Bảo mật (HIPAA Security Pentest)
1.4.4 Tổ chức Kiểm thử Nghiệm thu Người dùng (User Acceptance Testing - UAT Sign-off)
1.5 Deployment, Training & Handover (Giai đoạn Triển khai, Đào tạo & Bàn giao)
1.5.1 Cấu hình và triển khai Hệ thống lên Môi trường Production AWS Cloud
1.5.2 Tổ chức các buổi Tập huấn và Đào tạo Chuyển giao cho 200 Y Bác sĩ
1.5.3 Bàn giao Tài liệu Hướng dẫn, Đánh giá Bài học Kinh nghiệm (Lessons Learned) & Đóng dự án

================================================================================
REQUEST 4: BÀI TOÁN QUẢN LÝ GIÁ TRỊ THU ĐƯỢC (EVM) TẠI THÁNG THỨ 4 (2.5 Điểm)
--------------------------------------------------------------------------------

1. Tóm tắt Dữ kiện Đề bài:

- Tổng ngân sách phê duyệt (BAC): $300,000 USD
- Tổng thời gian kế hoạch (DAC): 9 tháng
- Thời điểm đánh giá (Status Date): Tháng thứ 4 (t = 4)
- Chi phí thực tế đã giải ngân (AC): $110,000 USD
- Khối lượng công việc đã hoàn thành: Số hóa thành công 4.000 / 10.000 hồ sơ bệnh án (tương đương 40% khối lượng toàn dự án).

2. Các bước Tính toán chi tiết:

- Bước 1: Tính Giá trị Kế hoạch (Planned Value - PV):
  Theo kế hoạch, tại mốc tháng thứ 4 trên tổng số 9 tháng:
  PV = (4 / 9) * BAC = (4 / 9) * $300,000 = $133,333.33 USD.

- Bước 2: Tính Giá trị Thu được (Earned Value - EV):
  Hệ thống đã hoàn thành 4.000 / 10.000 hồ sơ = 40% khối lượng dự án:
  EV = 40% * BAC = 0.40 * $300,000 = $120,000.00 USD.

- Bước 3: Tính Chỉ số Hiệu suất Tiến độ (Schedule Performance Index - SPI):
  SPI = EV / PV = 120,000 / 133,333.33 = 0.90 (hoặc 9/10).

(Ghi chú bổ sung: Chỉ số Hiệu suất Chi phí CPI = EV / AC = 120,000 / 110,000 = 1.091 > 1.0)

3. Nhận xét Đánh giá Tình trạng Dự án:

- Vì SPI = 0.90 < 1.0 (hoặc Sai số Tiến độ SV = EV - PV = 120,000 - 133,333.33 = -$13,333.33 < 0):
  => Dự án đang CHẬM TIẾN ĐỘ (Behind Schedule), chỉ đạt 90% khối lượng công việc so với kế hoạch đề ra tại tháng thứ 4.
- Mặt khác, vì CPI = 1.091 > 1.0 => Dự án đang TIẾT KIỆM CHI PHÍ (Under Budget), chi phí thực tế giải ngân ít hơn giá trị công việc đã tạo ra.

4. Đề xuất 2 Giải pháp Xử lý:

- Giải pháp 1 (Fast-tracking - Thực hiện công việc song song):
  Tiến hành cho phép đội kỹ thuật phát triển phân hệ Video Tele-Health và phân hệ Đơn thuốc điện tử song song cùng lúc với công tác số hóa dữ liệu bệnh án còn lại, thay vì chờ hoàn thành tuần tự. Giải pháp này giúp rút ngắn tiến độ mà không làm tăng chi phí.
- Giải pháp 2 (Crashing - Nén tiến độ bằng nguồn lực):
  Trích phần ngân sách đang tiết kiệm được (do CPI = 1.091) để thuê thêm 2 máy quét OCR công nghiệp tốc độ cao và bố trí thêm 4 nhân sự tăng ca (OT) vào ban đêm để đẩy nhanh tốc độ số hóa 6.000 hồ sơ còn lại, đưa tiến độ bắt kịp kế hoạch gốc.
  \================================================================================

################################################################################

================================================================================
ĐỀ 05: SE - HỆ THỐNG THƯƠNG MẠI ĐIỆN TỬ MICROSERVICES & CỔNG THANH TOÁN
DỰ ÁN: NEXT-GEN MICROSERVICES E-COMMERCE & PAYMENT PLATFORM (NOVASHOP)
LỜI GIẢI MẪU CHUẨN PHÒNG THI EOS (BẢN TIẾNG VIỆT CÓ DẤU)
================================================================================

REQUEST 1: PROJECT CHARTER STATEMENT DỰ ÁN SE (2.0 Điểm)
--------------------------------------------------------------------------------

1. Project Name:
   Next-Generation Microservices E-Commerce & Omnichannel Payment Platform (NovaShop Platform Project).

2. Project Purpose & Justification:

- Bối cảnh & Điểm nghẽn kỹ thuật (Technical Pain Points):
  Hệ thống thương mại điện tử hiện tại của Nova Retail Corp được xây dựng theo kiến trúc khối nguyên khối (Monolithic), thường xuyên bị sập hệ thống và nghẽn cơ sở dữ liệu khi lượng truy cập vượt quá 10.000 người dùng đồng thời trong các đợt Flash Sale. Thời gian xử lý đơn hàng kéo dài trên 5 giây, tỷ lệ lỗi giao dịch thanh toán lên tới 12%, và việc cập nhật một module nhỏ đòi hỏi phải dừng toàn bộ hệ thống gây tổn thất doanh thu nghiêm trọng.
- Mục đích dự án (Project Purpose):
  Tái cấu trúc và xây dựng nền tảng thương mại điện tử thế hệ mới dựa trên kiến trúc Microservices phân tán chạy trên cụm Kubernetes (AWS EKS), tích hợp cổng thanh toán đa kênh chuẩn quốc tế và công cụ AI gợi ý sản phẩm.
- Giá trị kinh doanh mang lại (Business Value):

* Tăng khả năng chịu tải lên 50.000 người dùng đồng thời và xử lý 500.000 giao dịch/ngày.
* Giảm thời gian phản hồi trang thanh toán xuống dưới 2 giây (< 2s) và giảm tỷ lệ lỗi thanh toán xuống < 0.5%.
* Đạt tốc độ triển khai tính năng mới nhanh gấp 4 lần nhờ quy trình CI/CD tự động, tăng 35% doanh thu bán lẻ trực tuyến.

3. High-Level Technical Requirements:

- Yêu cầu 1 (Kiến trúc Microservices & CSDL phân tán):
  Chia tách toàn bộ hệ thống thành 6 microservices độc lập (Authentication, Product Catalog, Shopping Cart, Order Management, Inventory, Payment) giao tiếp bất đồng bộ qua Message Broker Apache Kafka và triển khai trên cụm AWS EKS với cơ chế Auto-scaling.
- Yêu cầu 2 (Cổng thanh toán Đa kênh & Bảo mật PCI-DSS):
  Tích hợp đa dạng cổng thanh toán (VNPay, MoMo, ZaloPay, Thẻ tín dụng quốc tế qua Stripe), áp dụng cơ chế Tokenization mã hóa dữ liệu thẻ, cơ chế Idempotency chống trừ tiền 2 lần và đạt chứng chỉ an toàn thanh toán PCI-DSS Level 1.
- Yêu cầu 3 (Động cơ Tìm kiếm & Gợi ý AI thời gian thực):
  Tích hợp cụm phân tán Elasticsearch phục vụ tìm kiếm sản phẩm với độ trễ < 100ms, kết hợp mô hình AI Recommendation Engine cá nhân hóa danh mục gợi ý sản phẩm dựa trên hành vi duyệt web và lịch sử mua sắm.

================================================================================
REQUEST 2: COST / BUDGET ESTIMATION CHO DỰ ÁN SE (2.0 Điểm)
--------------------------------------------------------------------------------

Tổng ngân sách phê duyệt (BAC): $160,000 USD | Thời gian thực hiện: 8 tháng (32 tuần).

Cost Item 1: Software Engineering Labor Cost

- Description: Chi phí tiền lương cho đội ngũ kỹ sư phát triển phần mềm gồm: 1 Project Manager (8 tháng), 1 Solution Architect (6 tháng), 2 Backend Developers (8 tháng), 2 Frontend/Mobile Devs (7 tháng), 1 DevOps Cloud Engineer (6 tháng), 1 QA Automation Engineer (6 tháng). Tổng cộng 5.440 giờ làm việc.
- Estimation Method: Bottom-up Estimation.

* PM: 1 người x 1.280h x $22/h = $28,160
* Solution Architect: 1 người x 960h x $25/h = $24,000
* Backend Devs: 2 người x 1.280h x $18/h = $46,080
* Frontend Devs: 2 người x 1.120h x $15/h = $33,600 (điều chỉnh phân bổ) -> Chuẩn hóa tổng quỹ:

- Chi tiết tổng hợp lương:

* PM (8m): $22,000
* Solution Architect (6m): $21,000
* 2 Backend Devs (8m): $36,000
* 2 Frontend Devs (7m): $22,000
* 1 DevOps Engineer (6m): $8,000
* 1 QA Automation (6m): $6,000

- Estimated Cost: $115,000
- Person in Charge: Project Manager & Engineering Department Head.

Cost Item 2: Cloud Infrastructure & Distributed Middleware

- Description: Thuê cụm hạ tầng đám mây AWS EKS Kubernetes, CSDL quan hệ phân tán AWS RDS Aurora PostgreSQL, Apache Kafka Managed Streaming (MSK), Redis ElastiCache, S3 Storage và CloudFront CDN phục vụ môi trường Dev, Staging và Production (12 tháng).
- Estimation Method: Parametric Estimation ($1,500/tháng x 12 tháng).
- Estimated Cost: $18,000
- Person in Charge: Solution Architect & DevOps Lead.

Cost Item 3: Software Licenses & CI/CD Tooling Subscriptions

- Description: Bản quyền công cụ phát triển và kiểm thử: GitHub Enterprise (8 seats), JetBrains IDEs, Jira Cloud & Confluence, Postman Enterprise, Datadog APM Performance Monitoring trong 8 tháng dự án.
- Estimation Method: Parametric Estimation (8 kỹ sư x $50/user/tháng x 8 tháng = $3,200).
- Estimated Cost: $3,200
- Person in Charge: Project Manager & IT Procurement Officer.

Cost Item 4: Security Pentest & PCI-DSS Level 1 Compliance Audit

- Description: Thuê đơn vị an ninh mạng độc lập tiến hành kiểm thử xâm nhập chuyên sâu (Penetration Testing), quét mã độc CI/CD và thẩm định cấp chứng chỉ tuân thủ an toàn bảo mật thanh toán thẻ PCI-DSS Level 1.
- Estimation Method: Fixed-price Vendor Bid.
- Estimated Cost: $9,800
- Person in Charge: QA Lead & Security Compliance Committee.

Cost Item 5: Contingency Reserve (Quỹ dự phòng rủi ro)

- Description: Khoản dự phòng ngân sách cho các rủi ro kỹ thuật đã nhận diện (tinh chỉnh độ trễ hàng đợi Kafka, thay đổi đặc tả API từ cổng thanh toán, chi phí tăng ca OT fix bug gấp).
- Estimation Method: Reserve Analysis (Trích lập xấp xỉ 8.75% trên tổng ngân sách BAC).

* Base Total = $115,000 + $18,000 + $3,200 + $9,800 = $146,000.
* Contingency Reserve = $14,000.
* Total Project Budget (BAC) = $146,000 + $14,000 = $160,000.

- Estimated Cost: $14,000
- Person in Charge: Project Sponsor & Project Manager.

================================================================================
REQUEST 3: KẾ HOẠCH GIAO TIẾP & MA TRẬN RACI KỸ THUẬT (3.0 Điểm)
--------------------------------------------------------------------------------

1. Kế hoạch Giao tiếp (Communication Plan Matrix) cho 3 Nhóm Stakeholders:

Stakeholder 1: Project Engineering Team (Project-Internal)

- Information: Tiến độ Sprint hàng ngày, mã lỗi phát sinh, thiết kế API Contract, gỡ vướng blocker hạ tầng EKS.
- Purpose: Đảm bảo tính liên tục và đồng bộ kỹ thuật giữa Backend, Frontend, DevOps và QA.
- Frequency: Hàng ngày (Daily 15 phút).
- Method / Format: Daily Standup qua Slack Huddle + Quản lý tiến độ trên Jira Agile Board.
- Responsible Person: Scrum Master / Lead Developer.

Stakeholder 2: CTO & Head of Engineering (Organization-Internal)

- Information: Báo cáo Kiến trúc hệ thống, chỉ số tải máy chủ Cloud, tình hình tiêu hao ngân sách và bảo mật PCI-DSS.
- Purpose: Đảm bảo mã nguồn và hạ tầng tuân thủ đúng định hướng công nghệ của tập đoàn.
- Frequency: 2 tuần / lần (Bi-weekly).
- Method / Format: Họp Architecture Review trực tiếp + Báo cáo Dashboard tự động qua Grafana/Datadog.
- Responsible Person: Solution Architect & Project Manager.

Stakeholder 3: Nova Retail Product Owner & Payment Gateway Partners (External)

- Information: Bản thử nghiệm tính năng (Demo Sprint Release), biên bản nghiệm thu UAT, kế hoạch kết nối API thanh toán.
- Purpose: Thống nhất yêu cầu nghiệp vụ kinh doanh và đảm bảo kết nối cổng thanh toán an toàn, thông suốt.
- Frequency: Hàng tháng (Monthly) hoặc sau mỗi đợt phát hành Sprint.
- Method / Format: Buổi Sprint Review Demo trực tiếp + Biên bản nghiệm thu ký điện tử.
- Responsible Person: Project Manager & Product Owner.

2. Ma trận RACI Kỹ thuật Phần mềm (RACI Matrix) - Chuẩn DUY NHẤT 1 'A' mỗi dòng:

- PM: Project Manager
- Arch: Solution Architect
- Dev: Senior Fullstack / DevOps Lead
- QA: QA Automation & Security Tester

Bảng phân bổ RACI cho 8 công việc phát triển hệ thống Microservices:

- Task 1: Thu thập Yêu cầu & Phê duyệt Thiết kế API Contract
  -> PM: I | Arch: A | Dev: R | QA: C
- Task 2: Thiết kế Kiến trúc Microservices & CSDL Phân tán
  -> PM: I | Arch: A, R | Dev: C | QA: I
- Task 3: Thiết lập Cụm AWS EKS Kubernetes & CI/CD Pipeline
  -> PM: I | Arch: C | Dev (DevOps): A, R | QA: I
- Task 4: Lập trình Microservices Đặt hàng (Order) & Danh mục (Catalog)
  -> PM: I | Arch: C | Dev: A, R | QA: I
- Task 5: Tích hợp SDK Cổng thanh toán & Cơ chế Idempotency
  -> PM: I | Arch: C | Dev: A, R | QA: C
- Task 6: Kiểm thử Tự động Tải và Ứng suất (50.000 concurrent users)
  -> PM: I | Arch: I | Dev: C | QA: A, R
- Task 7: Đánh giá Bảo mật & Kiểm định Chứng chỉ PCI-DSS
  -> PM: I | Arch: C | Dev: C | QA/Sec: A, R
- Task 8: Triển khai Cắt chuyển Hệ thống Lên Production & Go-Live
  -> PM: A | Arch: R | Dev: R | QA: R

================================================================================
REQUEST 4: MILESTONES & 10 HOẠT ĐỘNG KỸ THUẬT PHẦN MỀM (3.0 Điểm)
--------------------------------------------------------------------------------

1. Ba Cột mốc Kỹ thuật chính của Dự án:

- Milestone 1 (Architecture & CI/CD Baseline): Phê duyệt Kiến trúc Microservices, Thiết kế API Contract và hoàn tất thiết lập cụm AWS EKS (Cuối Tháng 2).
- Milestone 2 (Core Microservices & Payment Gateway Integration): Hoàn thành lập trình 6 Microservices cốt lõi và tích hợp đa cổng thanh toán (Cuối Tháng 5).
- Milestone 3 (PCI-DSS Certification & Production Go-Live): Đạt chứng chỉ PCI-DSS Level 1, vượt qua đợt kiểm thử tải 50.000 user và chính thức Go-Live (Cuối Tháng 8).

2. Chi tiết 10 Hoạt động của Milestone 2 (Core Services & Payment) & Quan hệ Logic:

- Activity 1 (A1): Thiết kế Schema CSDL phân tán PostgreSQL và mô hình dữ liệu Redis Cache.

* Predecessors: Start (Milestone 1 Sign-off)
* Dependency: FS

- Activity 2 (A2): Xây dựng API Gateway & Authentication Service (OAuth2 / JWT).

* Predecessors: A1
* Dependency: FS (Hoàn thành schema CSDL người dùng mới lập trình Auth Service).

- Activity 3 (A3): Phát triển Product Catalog Microservice & Đồng bộ dữ liệu sang Elasticsearch.

* Predecessors: A1
* Dependency: FS (Chạy song song với A2 sau khi CSDL sẵn sàng).

- Activity 4 (A4): Lập trình Order Microservice kết nối Message Broker Apache Kafka.

* Predecessors: A2
* Dependency: FS (Cần có Authentication & API Gateway để điều phối đơn hàng).

- Activity 5 (A5): Lập trình giao diện Frontend Web & Mobile Giỏ hàng (Shopping Cart UI).

* Predecessors: A4
* Dependency: SS (Gối đầu song song: Frontend bắt đầu ghép giao diện ngay khi Backend có API Order phác thảo).

- Activity 6 (A6): Lập trình Payment Microservice xử lý giao dịch và định tuyến cổng thanh toán.

* Predecessors: A4
* Dependency: FS (Nghiệp vụ Order xong mới xây dựng luồng tiếp nhận thanh toán).

- Activity 7 (A7): Tích hợp SDK Cổng thanh toán bên thứ ba (Stripe, VNPay, MoMo).

* Predecessors: A6
* Dependency: FS (Có khung Payment Microservice mới cắm SDK đối tác).

- Activity 8 (A8): Xây dựng Webhook Listener & Cơ chế Idempotency chống trừ tiền trùng lặp.

* Predecessors: A7
* Dependency: SS (Xây dựng bộ lắng nghe Webhook song song với quá trình tích hợp SDK cổng).

- Activity 9 (A9): Phát triển giao diện Thanh toán An toàn (Secure Checkout UI) & Mã hóa Thẻ.

* Predecessors: A5, A7
* Dependency: FF (Giao diện Checkout chỉ hoàn thành khi cả Giỏ hàng A5 và Cổng thanh toán A7 đã sẵn sàng).

- Activity 10 (A10): Kiểm thử Tích hợp Tự động End-to-End toàn bộ luồng Mua sắm & Thanh toán.

* Predecessors: A3, A8, A9
* Dependency: FS (Chỉ kiểm thử tích hợp toàn diện khi toàn bộ Catalog, Webhook và Checkout UI đã hoàn tất).
  \================================================================================

################################################################################

================================================================================
ĐỀ 06: SE - HỆ THỐNG QUẢN LÝ HỌC TẬP THÔNG MINH TÍCH HỢP AI (AI LMS)
DỰ ÁN: AI-POWERED ADAPTIVE LEARNING MANAGEMENT SYSTEM (EDUAI SMARTLMS)
LỜI GIẢI MẪU CHUẨN PHÒNG THI EOS (BẢN TIẾNG VIỆT CÓ DẤU)
================================================================================

REQUEST 1: MỤC TIÊU SMART & QUẢN LÝ PHẠM VI DỰ ÁN (2.5 Điểm)
--------------------------------------------------------------------------------

1. Thiết lập 2 Mục tiêu theo Nguyên tắc SMART:

Mục tiêu 1: Phân hệ Trợ lý AI Tutor RAG (AI-Powered Virtual Tutor)

- S (Specific - Cụ thể):
  Xây dựng Trợ lý ảo AI (AI Tutor) tích hợp trong từng khóa học, cho phép sinh viên hỏi đáp thắc mắc nội dung bài giảng 24/7 và nhận giải thích chi tiết bám sát giáo trình.
- M (Measurable - Đo lường được):

* Đạt độ chính xác nội dung câu trả lời đối chiếu theo tài liệu gốc >= 92%.
* Thời gian phản hồi câu trả lời của AI dưới 3 giây (< 3s).
* Hỗ trợ tối thiểu 5.000 sinh viên hỏi đáp đồng thời trong các tuần ôn thi.

- A (Achievable - Khả thi):
  Áp dụng kiến trúc RAG (Retrieval-Augmented Generation) kết hợp Vector Database (Pinecone) và mô hình ngôn ngữ lớn LLM được fine-tune cùng bộ Guardrails kiểm soát nội dung.
- R (Relevant - Phù hợp & Thực tế):
  Cắt giảm 60% số lượng câu hỏi thắc mắc lặp đi lặp lại gửi đến giảng viên, nâng cao chất lượng tự học và tính chủ động của người học.
- T (Time-bound - Có thời hạn):
  Hoàn thành phát triển, kiểm thử độ chính xác và tích hợp vào hệ thống tại tháng thứ 5 của dự án.

Mục tiêu 2: Động cơ Thi trắc nghiệm Thích ứng & Phân tích Học tập (Adaptive Testing & Analytics)

- S (Specific - Cụ thể):
  Phát triển phân hệ tự động sinh đề thi trắc nghiệm thích ứng (Adaptive Quiz) và phân tích hành vi học tập (Learning Analytics) để tự động điều chỉnh độ khó theo năng lực từng sinh viên.
- M (Measurable - Đo lường được):

* Cải thiện ít nhất 25% điểm số trung bình của nhóm sinh viên có học lực trung bình/yếu sau 1 học kỳ.
* Tự động phát hiện và cảnh báo sớm chính xác >= 80% sinh viên có nguy cơ trượt môn trước kỳ thi 3 tuần.

- A (Achievable - Khả thi):
  Áp dụng lý thuyết khảo thí Item Response Theory (IRT) kết hợp thuật toán phân loại Machine Learning chạy trên cụm máy chủ GPU.
- R (Relevant - Phù hợp & Thực tế):
  Cá nhân hóa lộ trình học tập, nâng cao tỷ lệ sinh viên qua môn và hỗ trợ giảng viên có dữ liệu định lượng để can thiệp kịp thời.
- T (Time-bound - Có thời hạn):
  Hoàn thành nghiệm thu phân hệ thi thích ứng tại tháng thứ 6 của dự án.

2. Ranh giới Phạm vi Dự án (Scope Management):

- In-Scope (4 Hạng mục trong phạm vi):

* Phân hệ Quản lý Khóa học, bài giảng Video, bài tập và ngân hàng câu hỏi trắc nghiệm.
* Phân hệ Trợ lý ảo AI Tutor RAG hỏi đáp 24/7 và tóm tắt bài giảng.
* Động cơ Thi trắc nghiệm thích ứng (Adaptive Quiz) & Dashboard Phân tích học tập (Learning Analytics).
* Ứng dụng Web Portal (ReactJS) và Mobile App (Flutter) dành cho Sinh viên và Giảng viên.

- Out-of-Scope (4 Hạng mục loại trừ):

* Không trực tiếp quay video bài giảng hoặc soạn thảo giáo trình môn học cho giảng viên.
* Không cung cấp hoặc bảo hành thiết bị máy tính cá nhân cho sinh viên.
* Không xây dựng phân hệ kế toán thu học phí hay kết nối cổng ngân hàng của tập đoàn.
* Không tự nghiên cứu và huấn luyện mô hình Foundation LLM từ đầu (chỉ sử dụng API và Fine-tuning/RAG).

- 3 Deliverables (Sản phẩm bàn giao chính):

* Bộ mã nguồn hoàn chỉnh của Web Portal, Mobile App và AI Engine.
* Cơ sở dữ liệu Vector Database chứa dữ liệu giáo trình đã chuẩn hóa của 50 môn học.
* Tài liệu hướng dẫn sử dụng (User Manual) và Biên bản nghiệm thu kỹ thuật UAT.

================================================================================
REQUEST 2: CẤU TRÚC PHÂN CHIA CÔNG VIỆC WBS 5 GIAI ĐOẠN (2.5 Điểm)
--------------------------------------------------------------------------------

Cấu trúc WBS chuẩn 5 giai đoạn phát triển hệ thống EduAI SmartLMS:

1.0 EduAI SmartLMS Platform Development Project
1.1 Project Initiation & Requirements (Khởi tạo & Đặc tả Yêu cầu)
1.1.1 Lập và phê duyệt Project Charter & Stakeholder Management Plan
1.1.2 Xây dựng Chính sách Bảo mật Dữ liệu & Đạo đức AI (AI Governance Baseline)
1.1.3 Phê duyệt Tài liệu Đặc tả Yêu cầu Phần mềm (SRS Sign-off)
1.2 Architecture, UI/UX & AI System Design (Thiết kế Hệ thống & Prompt AI)
1.2.1 Thiết kế Kiến trúc Microservices & CSDL Vector Database (Pinecone/PostgreSQL)
1.2.2 Thiết kế Pipeline RAG, Bộ Guardrails và Kỹ thuật Prompt Engineering
1.2.3 Thiết kế Giao diện Wireframe & UI/UX Prototype cho Web và Mobile App
1.3 Core Engineering & AI Model Integration (Lập trình Cốt lõi & Tích hợp AI)
1.3.1 Phát triển Microservices Quản lý Khóa học, Video & Ngân hàng Đề thi
1.3.2 Lập trình Phân hệ Trợ lý AI Tutor RAG & Tìm kiếm Ngữ nghĩa
1.3.3 Phát triển Động cơ Thi Thích ứng (Adaptive Quiz IRT) & Learning Analytics
1.3.4 Lập trình Giao diện Web Portal (ReactJS) và Mobile App (Flutter)
1.4 Testing, Model Optimization & QA (Kiểm thử & Tối ưu Mô hình AI)
1.4.1 Kiểm thử Tích hợp Toàn diện Hệ thống (System Integration Testing - SIT)
1.4.2 Đánh giá Tỷ lệ Ảo giác AI (AI Hallucination) & Độ chính xác Câu trả lời
1.4.3 Kiểm thử Tải Nộp bài Thi Cuối kỳ Đồng thời (Stress Test 30.000 users)
1.4.4 Tổ chức Kiểm thử Nghiệm thu Người dùng (User Acceptance Testing - UAT)
1.5 Deployment, Training & Project Closing (Triển khai, Đào tạo & Bàn giao)
1.5.1 Cấu hình và Triển khai Hạ tầng Production AWS EKS & Auto-scaling
1.5.2 Tổ chức Tập huấn Chuyển giao Hệ thống cho 1.200 Giảng viên
1.5.3 Bàn giao Tài liệu, Tổng kết Bài học Kinh nghiệm & Đóng dự án

================================================================================
REQUEST 3: QUẢN LÝ RỦI RO KỸ THUẬT & TRÍ TUỆ NHÂN TẠO (2.5 Điểm)
--------------------------------------------------------------------------------

Risk 1: AI Hallucination Risk (Mô hình AI phản hồi sai lệch kiến thức môn học)

- Probability: Medium | Impact: High | Strategy: Mitigate
- Mitigation (Phòng ngừa trước sự cố):
  Thiết lập ngưỡng tương đồng ngữ nghĩa nghiêm ngặt trong Vector DB (Cosine Similarity >= 0.85); áp dụng hệ thống NeMo Guardrails chặn triệt để câu trả lời nằm ngoài giáo trình; gắn chỉ thị System Prompt nghiêm cấm AI tự suy diễn kiến thức.
- Contingency (Ứng phó sau sự cố):
  Bổ sung nút bấm "Báo cáo câu trả lời sai" trên giao diện sinh viên; tự động gắn cờ và chuyển tiếp câu hỏi đó đến Giảng viên phụ trách trong vòng 12h; tạm thời cách ly tài liệu bị lỗi để cập nhật lại Vector DB.

Risk 2: API Cost Surge Risk (Chi phí Token API mô hình AI tăng đột biến)

- Probability: High | Impact: Medium | Strategy: Mitigate
- Mitigation (Phòng ngừa trước sự cố):
  Cài đặt Redis Semantic Caching lưu trữ câu trả lời cho các câu hỏi phổ biến; thiết lập giới hạn định mức (Rate Limiting) tối đa 30 câu hỏi AI/ngày/sinh viên; tối ưu độ dài context prompt.
- Contingency (Ứng phó sau sự cố):
  Tự động chuyển mạch (Failover) sang mô hình ngôn ngữ mã nguồn mở nhỏ gọn (Llama 3 8B) tự host trên máy chủ GPU nội bộ khi chi phí API trong tháng chạm ngưỡng 80% ngân sách phân bổ.

Risk 3: Server Overload during Finals (Sập hệ thống khi hàng nghìn sinh viên nộp bài thi đồng thời)

- Probability: Medium | Impact: High | Strategy: Mitigate
- Mitigation (Phòng ngừa trước sự cố):
  Áp dụng kiến trúc hàng đợi Message Queue (RabbitMQ) để tiếp nhận và xếp hàng bài nộp; cấu hình Kubernetes Horizontal Pod Autoscaler (HPA) tự động nhân rộng số lượng Pods khi CPU vượt quá 70%.
- Contingency (Ứng phó sau sự cố):
  Tự động lưu trữ bài làm tạm thời tại IndexedDB trên trình duyệt của sinh viên; tự động gia hạn thêm 15 phút làm bài cho toàn bộ thí sinh khi phát hiện có sự cố mạng.

================================================================================
REQUEST 4: BÀI TOÁN QUẢN LÝ GIÁ TRỊ THU ĐƯỢC (EVM) TẠI THÁNG THỨ 3 (2.5 Điểm)
--------------------------------------------------------------------------------

1. Tóm tắt Dữ kiện:

- Tổng ngân sách phê duyệt (BAC): $140,000 USD
- Tổng thời gian kế hoạch (DAC): 7 tháng
- Thời điểm đánh giá (Status Date): Tháng thứ 3 (t = 3)
- Chi phí thực tế đã giải ngân (AC): $68,000 USD
- Khối lượng công việc đã hoàn thành: 45% tổng khối lượng toàn dự án.

2. Các bước Tính toán chi tiết:

- Bước 1: Tính Giá trị Kế hoạch (Planned Value - PV):
  Theo kế hoạch phân bổ tại mốc tháng thứ 3 trên tổng 7 tháng:
  PV = (3 / 7) * BAC = (3 / 7) * $140,000 = $60,000.00 USD.

- Bước 2: Tính Giá trị Thu được (Earned Value - EV):
  Dự án đã hoàn thành 45% tổng khối lượng công việc:
  EV = 45% * BAC = 0.45 * $140,000 = $63,000.00 USD.

- Bước 3: Tính Chỉ số Hiệu suất Chi phí (CPI) và Chỉ số Hiệu suất Tiến độ (SPI):

* CPI = EV / AC = 63,000 / 68,000 ≈ 0.926 (hoặc 63/68).
* SPI = EV / PV = 63,000 / 60,000 = 1.050.

(Sai số Chi phí CV = EV - AC = 63,000 - 68,000 = -$5,000 USD < 0)
(Sai số Tiến độ SV = EV - PV = 63,000 - 60,000 = +$3,000 USD > 0)

3. Nhận xét Đánh giá Tình trạng Dự án:

- Về Tiến độ: Vì SPI = 1.050 > 1.0 (SV = +$3,000 > 0) => Dự án đang VƯỢT TIẾN ĐỘ (Ahead of Schedule), nhanh hơn 5% so với kế hoạch ban đầu tại tháng thứ 3.
- Về Chi phí: Vì CPI = 0.926 < 1.0 (CV = -$5,000 < 0) => Dự án đang BỘI CHI NGÂN SÁCH (Over Budget), mỗi $1.0 chi ra chỉ tạo ra khoảng $0.926 giá trị công việc.

4. Đề xuất 2 Giải pháp Xử lý:

- Giải pháp 1 (Kiểm soát chi phí phát sinh):
  Tắt bớt các cụm máy chủ Cloud GPU thử nghiệm không dùng liên tục, chuyển đổi các tác vụ Fine-tune và nhúng Vector sang máy chủ Local hoặc mua các gói AWS Savings Plans/Spot Instances để cắt giảm chi phí hạ tầng đám mây.
- Giải pháp 2 (Tận dụng lợi thế tiến độ):
  Vì tiến độ đang chạy nhanh hơn 5%, đội ngũ PM có thể cắt giảm chi phí thuê chuyên gia tư vấn bên ngoài đắt đỏ và giao lại công việc cho kỹ sư nội bộ hoàn thiện trong các Sprint tiếp theo, đồng thời kéo dài thời gian kiểm thử UAT để đảm bảo chất lượng AI hoàn hảo nhất trước khi Go-Live.
  \================================================================================

################################################################################

================================================================================
ĐỀ 07: SE - ỨNG DỤNG ĐẶT XE & GIAO ĐỒ ĂN NỘI KHU CAMPUS (CAMPUS EXPRESS)
DỰ ÁN: FPT CAMPUS EXPRESS - ALL-IN-ONE MOBILITY & FOOD DELIVERY PLATFORM
LỜI GIẢI MẪU CHUẨN PHÒNG THI EOS (BẢN TIẾNG VIỆT CÓ DẤU)
================================================================================

REQUEST 1: PROJECT CHARTER STATEMENT (2.0 Điểm)
--------------------------------------------------------------------------------

1. Project Name:
   FPT Campus Express - All-in-One Smart Mobility & Food Delivery Platform (UniRide & UniFood).

2. Project Purpose / Justification:

- Thực trạng & Điểm nghẽn (Current Pain Points):
  Khuôn viên Đại học FPT rộng lớn, sinh viên và cán bộ giảng viên thường xuyên mất 15 - 20 phút đi bộ dưới thời tiết nắng nóng hoặc mưa gió giữa các tòa nhà và khu ký túc xá. Căng tin và các quán ăn quanh campus luôn quá tải vào giờ nghỉ trưa, dẫn đến cảnh xếp hàng kéo dài gây trễ giờ học. Ngoài ra, nhiều sinh viên có xe điện muốn tìm việc làm thêm nhưng thiếu nền tảng kết nối điều phối an toàn.
- Mục đích dự án (Project Purpose):
  Xây dựng nền tảng ứng dụng di động toàn diện kết nối dịch vụ gọi xe điện nội khu và đặt đồ ăn giao tận nơi từ các quán ăn đối tác, số hóa 100% quy trình vận hành và thanh toán không tiền mặt.
- Giá trị mang lại (Value Delivered):

* Giảm 70% thời gian chờ nhận đồ ăn và đón xe di chuyển trong khuôn viên trường dưới 3 phút.
* Tạo việc làm thêm tăng thu nhập cho hơn 100 tài xế là sinh viên Đại học FPT.
* Tối ưu hóa lưu thông giao thông nội khu và minh bạch hóa doanh thu bán lẻ căng tin.

3. High-Level Technical Requirements:

- Yêu cầu 1 (Định vị GPS thời gian thực & Ghép chuyến thông minh):
  Xây dựng hệ thống định vị bản đồ số hóa nội khu khuôn viên trường qua WebSockets/Socket.IO, tự động khớp lệnh chuyến xe gần nhất và ghép đơn hàng cùng tuyến đường (Batching Algorithm) để tối ưu thời gian giao hàng.
- Yêu cầu 2 (Hệ sinh thái 3 ứng dụng chuyên biệt):
  Phát triển 3 phân hệ ứng dụng độc lập: Customer App (Flutter) cho người đặt xe/đồ ăn; Driver App (Flutter) cho tài xế sinh viên nhận cuốc; Merchant Web Portal (ReactJS) cho chủ quán ăn quản lý thực đơn và đơn hàng.
- Yêu cầu 3 (Cổng thanh toán Ví nội bộ Campus Pay & Điểm thưởng):
  Tích hợp ví điện tử nội bộ liên kết tài khoản sinh viên FPT, thanh toán tức thời qua mã QR Napas 24/7 và hệ thống tích lũy điểm thưởng đổi voucher giảm giá.

================================================================================
REQUEST 2: COST / BUDGET ESTIMATION (5 HẠNG MỤC PHẦN MỀM DI ĐỘNG) (2.0 Điểm)
--------------------------------------------------------------------------------

Tổng ngân sách phê duyệt (BAC): $120,000 USD | Thời gian thực hiện: 6 tháng (24 tuần).

Cost Item 1: Mobile & Backend Engineering Labor Cost

- Description: Chi phí tiền lương đội ngũ kỹ thuật: 1 Project Manager (6 tháng), 1 Backend Engineer (6 tháng), 2 Flutter Mobile Developers (6 tháng), 1 Frontend Web Dev (5 tháng), 1 QA/Tester (5 tháng). Tổng cộng 4.000 giờ làm việc.
- Estimation Method: Bottom-up Estimation.

* PM (6m): $18,000
* Backend Dev (6m): $18,000
* 2 Flutter Devs (6m): $32,000
* Frontend Dev (5m): $10,000
* QA/Tester (5m): $7,000

- Estimated Cost: $85,000
- Person in Charge: Project Manager & Technical Lead.

Cost Item 2: Map API Subscriptions & Real-Time Cloud Infrastructure

- Description: Thuê máy chủ AWS EC2 (Node.js/Socket.IO), cơ sở dữ liệu Firebase Realtime Database, Redis Pub/Sub và bản quyền dịch vụ bản đồ Mapbox/Google Maps Platform SDKs trong 8 tháng.
- Estimation Method: Parametric Estimation ($1,500/tháng x 8 tháng = $12,000).
- Estimated Cost: $12,000
- Person in Charge: Technical Lead & Cloud Infrastructure Lead.

Cost Item 3: Hardware IoT GPS Trackers & Beacons

- Description: Mua sắm 30 thiết bị định vị GPS chuyên dụng gắn trên đội xe điện thử nghiệm và 20 trạm Bluetooth Low Energy (BLE) Beacon định vị vị trí đón trả khách nội khu.
- Estimation Method: Analogous Estimation & Vendor Quote.
- Estimated Cost: $3,500
- Person in Charge: Campus Facility Manager & Operations Lead.

Cost Item 4: Driver Onboarding, Merchant POS Setup & Training

- Description: Chi phí tổ chức 4 buổi tập huấn lái xe an toàn cho 100 tài xế sinh viên, trang bị 30 máy in nhiệt nhận đơn cho các quán ăn căng tin và truyền thông ra mắt ứng dụng.
- Estimation Method: Bottom-up Estimation.
- Estimated Cost: $4,500
- Person in Charge: Student Affairs Representative & Marketing Lead.

Cost Item 5: Contingency Reserve (Quỹ dự phòng rủi ro)

- Description: Dự phòng biến động số lượng gọi API bản đồ, rủi ro thiết bị GPS hỏng hóc cần thay thế, hoặc tăng ca làm đêm tối ưu hiệu năng ứng dụng trên các dòng máy Android/iOS đời cũ.
- Estimation Method: Reserve Analysis (Trích lập 12.5% trên tổng ngân sách BAC).

* Base Total = $85,000 + $12,000 + $3,500 + $4,500 = $105,000.
* Contingency Reserve = $15,000.
* Total Project Budget (BAC) = $105,000 + $15,000 = $120,000.

- Estimated Cost: $15,000
- Person in Charge: Project Sponsor & Project Manager.

================================================================================
REQUEST 3: KẾ HOẠCH GIAO TIẾP CHO 3 NHÓM STAKEHOLDERS (3.0 Điểm)
--------------------------------------------------------------------------------

Kế hoạch Giao tiếp (Communication Plan Matrix):

Stakeholder 1: Project Engineering Team (Project-Internal)

- Information: Tiến độ Sprint hàng ngày, thiết kế Socket Contract, xử lý lỗi kết nối GPS trên thiết bị di động, gỡ blocker kỹ thuật.
- Purpose: Đồng bộ công việc giữa Mobile, Backend, Web và QA để đảm bảo tiến độ bàn giao.
- Frequency: Hàng ngày (Daily 15 phút).
- Method / Format: Daily Standup qua Slack Huddle / Google Meet + Bảng Kanban trên Jira.
- Responsible Person: Scrum Master / Tech Lead.

Stakeholder 2: Ban Quản lý Campus & Phòng Công tác Sinh viên (Organization-Internal)

- Information: Báo cáo tiến độ hoàn thành các mốc kỹ thuật, thống nhất vị trí cắm trạm đón xe điện, quy chế xử phạt an toàn giao thông nội khu.
- Purpose: Đảm bảo hoạt động gọi xe và giao hàng phù hợp quy định an ninh và trật tự của nhà trường.
- Frequency: 2 tuần / lần (Bi-weekly).
- Method / Format: Cuộc họp giao ban trực tiếp + Báo cáo Dashboard tóm tắt gửi qua Email.
- Responsible Person: Project Manager & Campus Operations Coordinator.

Stakeholder 3: Chủ Quán ăn Căng tin & Đội ngũ Tài xế Sinh viên (External)

- Information: Hướng dẫn cài đặt và sử dụng ứng dụng, thông báo biểu phí chiết khấu đơn hàng, tiếp nhận phản hồi lỗi ứng dụng khi nhận cuốc xe.
- Purpose: Đảm bảo đối tác vận hành thông suốt và nâng cao chất lượng dịch vụ phục vụ sinh viên.
- Frequency: Hàng tuần (Weekly) và hỗ trợ thời gian thực 24/7.
- Method / Format: Nhóm Zalo/Telegram hỗ trợ đối tác + Cuộc họp tóm tắt cuối tuần.
- Responsible Person: Customer Support Lead & Lead Business Analyst (BA).

================================================================================
REQUEST 4: BÀI TOÁN SƠ ĐỒ MẠNG CPM & NÉN TIẾN ĐỘ (3.0 Điểm)
--------------------------------------------------------------------------------

1. Liệt kê tất cả các Đường đi (Paths) và Tính Độ dài từng đường:

- Path 1: Start -> A -> B -> D -> G -> H -> End

* Độ dài = 3 + 4 + 4 + 3 + 3 = 17 tuần.

- Path 2: Start -> A -> B -> F -> H -> End

* Độ dài = 3 + 4 + 4 + 3 = 14 tuần.

- Path 3: Start -> A -> E -> F -> H -> End

* Độ dài = 3 + 3 + 4 + 3 = 13 tuần.

- Path 4: Start -> A -> C -> G -> H -> End

* Độ dài = 3 + 5 + 3 + 3 = 14 tuần.

2. Xác định Đường găng (Critical Path) & Thời gian tối thiểu hoàn thành:

- Đường găng (Critical Path): Start -> A -> B -> D -> G -> H -> End (Path 1 - Đường dài nhất).
- Thời gian tối thiểu hoàn thành dự án (Minimum Project Duration): 17 tuần.

3. Bảng Tính Thông số ES, EF, LS, LF và Float (Độ trễ):

Quy tắc tính toán:

- Forward Pass: ES = Max(EF trước); EF = ES + Duration (bắt đầu tại ES=0).
- Backward Pass: LF = Min(LS sau); LS = LF - Duration (kết thúc tại LF=17).
- Total Float = LS - ES = LF - EF.

+-------------+----------+----+----+----+----+-------+----------------------+
| Activity | Duration | ES | EF | LS | LF | Float | Trạng thái |
+-------------+----------+----+----+----+----+-------+----------------------+
| Start | 0 | 0 | 0 | 0 | 0 | 0 | Găng (Critical) |
| A | 3 | 0 | 3 | 0 | 3 | 0 | Găng (Critical) |
| B | 4 | 3 | 7 | 3 | 7 | 0 | Găng (Critical) |
| C | 5 | 3 | 8 | 6 | 11 | 3 | Không găng |
| D | 4 | 7 | 11 | 7 | 11 | 0 | Găng (Critical) |
| E | 3 | 3 | 6 | 7 | 10 | 4 | Linh hoạt cao nhất |
| F | 4 | 7 | 11 | 10 | 14 | 3 | Không găng |
| G | 3 | 11 | 14 | 11 | 14 | 0 | Găng (Critical) |
| H | 3 | 14 | 17 | 14 | 17 | 0 | Găng (Critical) |
| End | 0 | 17 | 17 | 17 | 17 | 0 | Găng (Critical) |
+-------------+----------+----+----+----+----+-------+----------------------+

- Hoạt động có tính linh hoạt cao nhất: Activity E (Web Portal Quản lý Quán ăn) có Total Float lớn nhất = 4 tuần (có thể trì hoãn tối đa 4 tuần mà không làm ảnh hưởng đến tiến độ 17 tuần của toàn dự án).

4. Đề xuất Giải pháp Rút ngắn Tiến độ 2 Tuần (từ 17 tuần xuống 15 tuần):

- Phân tích rủi ro đường găng phụ:
  Đường găng chính Path 1 dài 17 tuần. Các đường phụ Path 2 (14 tuần), Path 3 (13 tuần), Path 4 (14 tuần) đều ngắn hơn hoặc bằng 14 tuần. Khi nén Path 1 đi 2 tuần xuống còn 15 tuần, độ dài 15 tuần vẫn lớn hơn 14 tuần của các đường phụ, do đó không xuất hiện đường găng mới!

- Giải pháp 1 (Crashing - Tăng cường nguồn lực):
  Bổ sung thêm 1 Senior Flutter Developer làm việc cùng đội Mobile tại Activity D (Phát triển App Tài xế) để nén thời gian từ 4 tuần xuống còn 2 tuần.
- Giải pháp 2 (Fast-tracking - Thực hiện song song):
  Cho phép đội Mobile bắt đầu ghép giao diện và xử lý logic nhận cuốc của Activity D song song ngay khi Activity B hoàn thành được 50% khối lượng (bằng cách sử dụng Mock API định vị), giúp hoàn thành Activity D sớm hơn 2 tuần mà không phát sinh chi phí.
  \================================================================================

################################################################################

================================================================================
ĐỀ 08: SE - HỆ THỐNG QUẢN LÝ ĐỒ ÁN TỐT NGHIỆP & KIỂM TRA ĐẠO VĂN
DỰ ÁN: FPTU CAPSTONE PROJECT MANAGEMENT & ANTI-PLAGIARISM SYSTEM (CAPSTONEHUB)
LỜI GIẢI MẪU CHUẨN PHÒNG THI EOS (BẢN TIẾNG VIỆT CÓ DẤU)
================================================================================

REQUEST 1: PROJECT CHARTER STATEMENT (2.0 Điểm)
--------------------------------------------------------------------------------

1. Project Name:
   FPT University Student Capstone Project Management & Anti-Plagiarism Evaluation System (FPTU CapstoneHub).

2. Project Purpose & Justification:

- Thực trạng & Điểm nghẽn (Current Pain Points):
  Hiện nay, quy trình quản lý Đồ án Tốt nghiệp (Capstone Project) cho hơn 3.000 sinh viên và 300 giảng viên mỗi năm tại Đại học FPT được thực hiện rời rạc qua Google Drive, bảng tính Excel và Email. Điều này dẫn đến tình trạng thất lạc tài liệu, trễ hạn nộp các đợt Sprint, mất trung bình 2 tuần để phân công thủ công hội đồng phản biện. Việc kiểm tra đạo văn báo cáo và sao chép mã nguồn chủ yếu dựa vào cảm tính của giảng viên, tiềm ẩn nguy cơ gian lận học thuật nghiêm trọng.
- Mục đích dự án (Project Purpose):
  Xây dựng nền tảng phần mềm tập trung số hóa 100% vòng đời đồ án tốt nghiệp, tự động hóa quy trình đăng ký đề tài, theo dõi tiến độ nộp bài theo Sprint, quét đạo văn văn bản và phân tích so khớp cú pháp cây AST mã nguồn trong vòng 60 giây.
- Giá trị mang lại (Value Delivered):

* Giảm 80% thời gian xử lý thủ tục hành chính và xếp lịch hội đồng của Ban Đào tạo.
* Chuẩn hóa 100% quy trình chấm thi trực tuyến theo tiêu chí Rubric và xuất biên bản bảo vệ có ký số.
* Nâng cao uy tín học thuật, ngăn chặn 100% các hành vi sao chép mã nguồn và đạo văn đồ án.

3. High-Level Requirements:

- Yêu cầu 1 (Phân hệ Đăng ký Đề tài, Ghép nhóm & Quản trị Tiến độ Sprint):
  Cho phép sinh viên ghép nhóm tự động, đề xuất đề tài, nhận phản hồi từ Mentor, nộp báo cáo theo từng giai đoạn Sprint và theo dõi biểu đồ tiến độ Burndown Chart thời gian thực.
- Yêu cầu 2 (Động cơ Kiểm tra Đạo văn Văn bản & So khớp Cú pháp AST Source Code):
  Tích hợp API quét đạo văn tài liệu (.pdf,.docx) đối chiếu với kho dữ liệu đồ án 10 năm và Internet; xây dựng thuật toán phân tích cây cú pháp trừu tượng (Abstract Syntax Tree - AST) để phát hiện hành vi đổi tên biến, xáo trộn hàm trong mã nguồn (.java,.cs,.js,.py).
- Yêu cầu 3 (Phân hệ Phân công Hội đồng, Chấm điểm Online & Ký số):
  Tự động phân bổ lịch bảo vệ và thành viên hội đồng chấm thi tránh trùng lịch, cung cấp giao diện chấm điểm theo thang Rubric trực tiếp trên máy tính và xuất biên bản kết quả bảo vệ có chữ ký số điện tử.

================================================================================
REQUEST 2: COST / BUDGET PLAN (5 HẠNG MỤC PHẦN MỀM GIÁO DỤC) (2.0 Điểm)
--------------------------------------------------------------------------------

Tổng ngân sách phê duyệt (BAC): $150,000 USD | Thời gian thực hiện: 8 tháng (32 tuần).

Cost Item 1: Software Engineering Labor Cost

- Description: Chi phí lương đội ngũ phát triển: 1 Project Manager (8m), 1 Solution Architect (6m), 2 Backend Developers (8m), 2 Frontend Web Devs (7m), 1 QA Automation Engineer (6m). Tổng cộng 5.120 giờ làm việc.
- Estimation Method: Bottom-up Estimation.

* PM (8m): $22,000
* Solution Architect (6m): $21,000
* 2 Backend Devs (8m): $34,000
* 2 Frontend Devs (7m): $20,000
* 1 QA Automation (6m): $8,000

- Estimated Cost: $105,000
- Person in Charge: Project Manager & Engineering Lead.

Cost Item 2: Cloud Storage & Database Hosting

- Description: Thuê máy chủ AWS EC2, CSDL phân tán PostgreSQL trên AWS RDS, kho lưu trữ tài liệu đồ án an toàn AWS S3 (dung lượng 20TB cho 10 năm lưu trữ) và CloudFront CDN trong 12 tháng.
- Estimation Method: Parametric Estimation ($1,200/tháng x 12 tháng = $14,400).
- Estimated Cost: $14,400
- Person in Charge: Solution Architect & DevOps Engineer.

Cost Item 3: Plagiarism & AI Code Detection API Licenses

- Description: Mua gói bản quyền API tích hợp quét đạo văn văn bản và nhận diện mã nguồn do AI sinh ra (Turnitin / Copyleaks API) với định mức 15.000 lượt quét tài liệu.
- Estimation Method: Parametric Estimation (15.000 lượt x $0.80/lượt = $12,000).
- Estimated Cost: $12,000
- Person in Charge: Project Manager & Academic Board Representative.

Cost Item 4: Faculty Training Workshops & System Onboarding

- Description: Tổ chức 6 buổi hội thảo tập huấn cho 300 Giảng viên (Mentors & Reviewers) và 3.000 sinh viên làm đồ án về quy trình nộp bài, chấm điểm online và tra cứu báo cáo đạo văn.
- Estimation Method: Bottom-up Estimation.
- Estimated Cost: $4,600
- Person in Charge: Academic Affairs Lead & Training Coordinator.

Cost Item 5: Contingency Reserve (Quỹ dự phòng rủi ro)

- Description: Khoản dự phòng ngân sách cho biến động số lượng gọi API đạo văn vượt dự kiến, chi phí mở rộng thêm dung lượng AWS S3 lưu trữ video demo đồ án, hoặc tăng ca làm đêm tối ưu thuật toán AST.
- Estimation Method: Reserve Analysis (Trích lập xấp xỉ 9.33% trên tổng ngân sách BAC).

* Base Total = $105,000 + $14,400 + $12,000 + $4,600 = $136,000.
* Contingency Reserve = $14,000.
* Total Project Budget (BAC) = $136,000 + $14,000 = $150,000.

- Estimated Cost: $14,000
- Person in Charge: Project Sponsor & Project Manager.

================================================================================
REQUEST 3: MA TRẬN POWER/INTEREST GRID & KẾ HOẠCH GIAO TIẾP (3.0 Điểm)
--------------------------------------------------------------------------------

1. Phân loại Stakeholders vào Ma trận Quyền lực - Mức độ Quan tâm (Power/Interest Grid):

- Góc 1: High Power – High Interest -> MANAGE CLOSELY (Quản lý chặt chẽ):

* Đối tượng: Ban Đào tạo & Hội đồng Khoa học Nhà trường.
* Chiến lược: Tham vấn chuyên sâu 2 tuần/lần về quy chế xét duyệt đồ án, thống nhất tiêu chuẩn Rubric chấm điểm và kiểm soát tiến độ hoàn thành các mốc.

- Góc 2: High Power – Low Interest -> KEEP SATISFIED (Giữ hài lòng):

* Đối tượng: Ban Giám hiệu Đại học FPT (Project Sponsor).
* Chiến lược: Gửi báo cáo tổng quan tiến độ Milestone và tỷ lệ giải ngân ngân sách hàng quý qua Dashboard tóm tắt; chỉ xin ý kiến khi có thay đổi lớn về ngân sách hoặc thời hạn.

- Góc 3: Low Power – High Interest -> KEEP INFORMED (Cung cấp đầy đủ thông tin):

* Đối tượng: Giảng viên Hướng dẫn (Mentors), Giám khảo phản biện & Sinh viên làm đồ án.
* Chiến lược: Cung cấp đầy đủ tài liệu hướng dẫn, gửi thông báo tự động về thời hạn nộp bài qua Email/App, mở kênh tiếp nhận góp ý để tinh chỉnh trải nghiệm giao diện người dùng.

- Góc 4: Low Power – Low Interest -> MONITOR (Giám sát định kỳ):

* Đối tượng: Đội ngũ Quản trị IT hệ thống cũ & Nhân viên Văn thư Lưu trữ.
* Chiến lược: Cập nhật định kỳ hàng tháng về trạng thái chuyển đổi dữ liệu và tính tương thích của hạ tầng lưu trữ.

2. Ma trận Kế hoạch Giao tiếp (Communication Plan Matrix):

Stakeholder 1: Ban Đào tạo & Hội đồng Khoa học (Manage Closely)

- Information: Tiến độ phát triển tính năng, báo cáo kiểm thử thuật toán quét AST, cấu hình tiêu chí Rubric chấm điểm.
- Purpose: Đảm bảo phần mềm bám sát 100% quy chế đào tạo và chuẩn đầu ra của nhà trường.
- Frequency: 2 tuần / lần (Bi-weekly).
- Method / Format: Cuộc họp giao ban trực tiếp + Biên bản nghiệm thu từng giai đoạn.
- Responsible Person: Project Manager & Lead Business Analyst (BA).

Stakeholder 2: Ban Giám hiệu Nhà trường (Keep Satisfied)

- Information: Báo cáo Executive Dashboard về tiến độ tổng thể, ngân sách thực tế so với BAC, các rủi ro chiến lược.
- Purpose: Cập nhật sức khỏe dự án cho lãnh đạo cao nhất để duy trì sự ủng hộ và nguồn lực tài trợ.
- Frequency: Hàng quý (Quarterly).
- Method / Format: Báo cáo văn bản tóm tắt gửi Email + Buổi báo cáo định kỳ 30 phút.
- Responsible Person: Project Sponsor & Project Manager.

Stakeholder 3: Giảng viên & Sinh viên (Keep Informed)

- Information: Lịch nộp bài theo Sprint, kết quả quét đạo văn tự động, lịch bảo vệ và hướng dẫn sử dụng phần mềm.
- Purpose: Đảm bảo sinh viên và giảng viên thao tác đúng hạn, minh bạch kết quả học thuật.
- Frequency: Hàng tuần và tự động gửi thông báo theo từng sự kiện nộp bài.
- Method / Format: Email tự động từ hệ thống + Thông báo trên Web Portal + Hội thảo Webinar.
- Responsible Person: Academic Affairs Coordinator & Technical Support Lead.

================================================================================
REQUEST 4: MILESTONES & 10 HOẠT ĐỘNG KỸ THUẬT PHẦN MỀM (3.0 Điểm)
--------------------------------------------------------------------------------

1. Ba Cột mốc Kỹ thuật chính của Dự án:

- Milestone 1 (SRS & Database Schema Sign-off): Phê duyệt Tài liệu Đặc tả Yêu cầu (SRS) và Thiết kế CSDL Đồ án (Cuối Tháng 2).
- Milestone 2 (Core Capstone Modules & Plagiarism Engine Complete): Hoàn thành lập trình Module Quản lý Đồ án và tích hợp thành công Động cơ Quét đạo văn (Cuối Tháng 5).
- Milestone 3 (Live Defense Trial Acceptance & Official Go-Live): Nghiệm thu đợt bảo vệ tốt nghiệp thử nghiệm thực tế và chính thức Go-Live toàn trường (Cuối Tháng 8).

2. Chi tiết 10 Hoạt động của Milestone 2 (Core Capstone & Plagiarism API) & Quan hệ Logic:

- Activity 1 (A1): Thiết lập kiến trúc Backend (Spring Boot) và CSDL phân tán PostgreSQL.

* Predecessors: Start (Milestone 1 Sign-off)
* Dependency: FS

- Activity 2 (A2): Xây dựng Module Phân quyền Người dùng (RBAC) & Xác thực tài khoản FPT SSO.

* Predecessors: A1
* Dependency: FS (CSDL sẵn sàng mới cấu hình bảng phân quyền sinh viên/giảng viên/admin).

- Activity 3 (A3): Phát triển API Đăng ký Đề tài & Ghép nhóm sinh viên tự động.

* Predecessors: A2
* Dependency: FS (Xác thực người dùng xong mới mở tính năng đăng ký đề tài).

- Activity 4 (A4): Phát triển Giao diện Web Portal nộp bài theo Sprint & Biểu đồ Burndown Chart.

* Predecessors: A3
* Dependency: FS (Có API nhóm và đề tài mới dựng giao diện nộp bài).

- Activity 5 (A5): Xây dựng Phân hệ Tải lên (Upload) & Lưu trữ Tài liệu Báo cáo lên AWS S3.

* Predecessors: A3
* Dependency: FS (Triển khai luồng lưu trữ file độc lập sau khi có thông tin đề tài).

- Activity 6 (A6): Tích hợp API Quét Đạo văn Văn bản (Turnitin / Copyleaks REST API).

* Predecessors: A5
* Dependency: FS (File tải lên AWS S3 thành công mới chuyển tiếp sang API quét đạo văn).

- Activity 7 (A7): Xây dựng Engine Phân tích So khớp Cây Cú pháp Trừu tượng (AST Plagiarism Engine) cho Source Code.

* Predecessors: A5
* Dependency: SS (Gối đầu song song: Ngay khi có file mã nguồn tải lên, thuật toán AST bắt đầu phân tích cây cú pháp).

- Activity 8 (A8): Phát triển Giao diện Báo cáo Đạo văn & Heatmap Trùng lặp dành cho Giảng viên.

* Predecessors: A6, A7
* Dependency: FF (Giao diện hiển thị báo cáo hoàn thành khi cả 2 luồng quét văn bản A6 và quét code AST A7 đều đã xử lý xong).

- Activity 9 (A9): Lập trình Phân hệ Chấm điểm Online theo Thang Rubric & Xuất Biên bản Ký số.

* Predecessors: A4
* Dependency: FS (Có giao diện nộp bài và xem tài liệu mới xây dựng luồng chấm điểm trực tuyến).

- Activity 10 (A10): Kiểm thử Tích hợp Tự động Toàn bộ Luồng: Nộp bài -> Quét đạo văn -> Chấm điểm -> Ký số.

* Predecessors: A8, A9
* Dependency: FS (Kiểm thử tích hợp toàn diện chỉ bắt đầu khi cả Phân hệ Đạo văn A8 và Chấm điểm A9 đã hoàn tất).
  \================================================================================

################################################################################

================================================================================
ĐỀ 09: SE MỞ - HỆ THỐNG BÃI ĐỖ XE THÔNG MINH IOT & ALPR (SMARTPARK)
DỰ ÁN: SMART CAMPUS IOT PARKING & AUTOMATIC LICENSE PLATE RECOGNITION (SMARTPARK)
LỜI GIẢI MẪU CHUẨN PHÒNG THI EOS (BẢN TIẾNG VIỆT CÓ DẤU)
================================================================================

REQUEST 1: PROJECT CHARTER STATEMENT (2.0 Điểm)
--------------------------------------------------------------------------------

1. Project Name:
   Smart Campus IoT Parking Management & Automatic License Plate Recognition Platform (FPTU SmartPark).

2. Project Purpose & Justification:

- Thực trạng & Điểm nghẽn (Current Pain Points):
  Bãi giữ xe hiện tại của trường Đại học FPT sử dụng thẻ từ quẹt tay thủ công, mất trung bình 10 - 15 giây cho mỗi lượt xe ra/vào. Tình trạng này gây ùn tắc giao thông kéo dài hơn 100m tại cổng trường vào đầu mỗi ca học. Người điều khiển xe mất từ 10 - 15 phút chạy lòng vòng tìm chỗ đỗ do không biết khu vực nào còn trống. Việc quản lý bằng thẻ nhựa tiềm ẩn rủi ro mất vé, gian lận doanh thu và phát sinh rác thải nhựa.
- Mục đích dự án (Project Purpose):
  Xây dựng hệ thống bãi đỗ xe thông minh kết hợp thiết bị IoT và Camera AI nhận diện biển số tự động (ALPR) tại biên (Edge AI) trong vòng 1 giây, tự động mở barie không cần dừng xe và dẫn đường người lái đến ô đỗ còn trống qua ứng dụng di động.
- Giá trị mang lại (Value Delivered):

* Giảm 90% thời gian chờ tại cổng (từ 15 giây xuống dưới 1 giây/xe), xóa bỏ hoàn toàn ùn tắc giờ cao điểm.
* Tiết kiệm 80% thời gian tìm kiếm chỗ đỗ xe trong bãi nhờ bản đồ số hóa cảm biến thời gian thực.
* Loại bỏ 100% chi phí in thẻ từ nhựa và tự động hóa minh bạch 100% doanh thu giữ xe.

3. High-Level Requirements:

- Yêu cầu 1 (Edge AI ALPR & Điều khiển Barie Tự động):
  Camera AI độ phân giải cao chụp và nhận dạng ký tự biển số xe (độ chính xác >= 98%), đối chiếu CSDL xe hợp lệ và gửi lệnh điều khiển mở barie tự động qua giao thức MQTT/Modbus với độ trễ < 1 giây.
- Yêu cầu 2 (Ứng dụng Di động Tìm Chỗ Đỗ & Thanh toán Không Tiền Mặt):
  Ứng dụng di động (Flutter) hiển thị sơ đồ 200 ô đỗ xe thời gian thực (thu thập từ cảm biến siêu âm gắn trần), dẫn đường tới ô trống gần nhất, hỗ trợ đặt chỗ trước và thanh toán tiền gửi tự động qua mã QR Napas 24/7.
- Yêu cầu 3 (Phân hệ Quản trị & Giám sát An ninh Tập trung):
  Dashboard giám sát thời gian thực tại buồng bảo vệ hiển thị hình ảnh camera các làn vào/ra, tự động phát cảnh báo khi phát hiện biển số xe lạ/xe bị báo mất và xuất báo cáo lưu lượng phương tiện theo giờ.

================================================================================
REQUEST 2: COST / BUDGET ESTIMATION (5 HẠNG MỤC SE & IOT) (2.0 Điểm)
--------------------------------------------------------------------------------

Tổng ngân sách phê duyệt (BAC): $130,000 USD | Thời gian thực hiện: 6 tháng (24 tuần).

Cost Item 1: Software & Embedded Engineering Labor Cost

- Description: Tiền lương đội ngũ kỹ sư: 1 Project Manager (6m), 1 AI & Embedded Engineer (6m), 2 Backend Developers (6m), 1 Mobile Flutter Dev (5m), 1 QA/Tester (5m). Tổng cộng 3.840 giờ làm việc.
- Estimation Method: Bottom-up Estimation.

* PM (6m): $18,000
* AI/Embedded Lead (6m): $20,000
* 2 Backend Devs (6m): $24,000
* Mobile Dev (5m): $11,000
* QA/Tester (5m): $7,000

- Estimated Cost: $80,000
- Person in Charge: Project Manager & Engineering Lead.

Cost Item 2: Hardware & IoT Equipment Procurement

- Description: Mua sắm thiết bị phần cứng bãi xe: 4 Camera AI 4K ALPR chuyên dụng, 200 Cảm biến siêu âm gắn trần chỉ báo ô đỗ, 4 Cần barie tự động tốc độ cao (0.6s) và 2 Bảng LED ma trận chỉ dẫn số lượng chỗ trống tại lối vào.
- Estimation Method: Vendor Bid Analysis.
- Estimated Cost: $22,000
- Person in Charge: Campus Facility Lead & Hardware Procurement Officer.

Cost Item 3: Cloud Servers & Edge AI Computing Hardware

- Description: Trang bị 2 bộ máy tính nhúng công nghiệp Edge AI (NVIDIA Jetson Orin Nano) xử lý ảnh tại trạm kiểm soát, thuê máy chủ AWS EC2 backend, AWS RDS PostgreSQL và Message Broker MQTT (EMQX) trong 10 tháng.
- Estimation Method: Parametric Estimation ($1,000/tháng x 10 tháng = $10,000).
- Estimated Cost: $10,000
- Person in Charge: Embedded Engineer & Cloud DevOps Lead.

Cost Item 4: Software Licenses & Computer Vision Tooling

- Description: Bản quyền Computer Vision SDKs, YOLOv8 Commercial License, GitHub Enterprise, Postman, Jira Cloud trong 6 tháng dự án.
- Estimation Method: Parametric Estimation.
- Estimated Cost: $4,000
- Person in Charge: Project Manager & IT Procurement Lead.

Cost Item 5: Contingency Reserve (Quỹ dự phòng rủi ro)

- Description: Quỹ dự phòng rủi ro hư hỏng thiết bị phần cứng trong quá trình thi công kéo cáp ngoài trời, thời tiết mưa bão làm gián đoạn lắp đặt cơ khí hoặc tăng ca làm đêm tối ưu thuật toán nhận diện biển số ban đêm và góc nghiêng.
- Estimation Method: Reserve Analysis (Trích lập xấp xỉ 10.77% trên tổng ngân sách BAC).

* Base Total = $80,000 + $22,000 + $10,000 + $4,000 = $116,000.
* Contingency Reserve = $14,000.
* Total Project Budget (BAC) = $116,000 + $14,000 = $130,000.

- Estimated Cost: $14,000
- Person in Charge: Project Sponsor & Project Manager.

================================================================================
REQUEST 3: PROJECT COMMUNICATION PLAN (3.0 Điểm)
--------------------------------------------------------------------------------

Kế hoạch Giao tiếp (Communication Plan Matrix):

Stakeholder 1: Dev & Embedded Engineering Team (Project-Internal)

- Information: Tiến độ lập trình Backend/Mobile, độ trễ xử lý ảnh Edge AI, kiểm thử tín hiệu điều khiển barie qua MQTT, gỡ blocker phần cứng.
- Purpose: Đảm bảo phần mềm và phần cứng IoT tích hợp đồng bộ, chuẩn xác.
- Frequency: Hàng ngày (Daily 15 phút).
- Method / Format: Daily Standup trực tiếp tại phòng Lab / Slack Huddle + Quản lý tiến độ Jira Kanban.
- Responsible Person: Scrum Master / Embedded Tech Lead.

Stakeholder 2: Ban Quản lý Campus & Đội Bảo vệ Tòa nhà (Organization-Internal)

- Information: Báo cáo tiến độ lắp đặt thiết bị, lịch cắt điện thi công kéo cáp, quy trình xử lý sự cố xe biển số mờ hoặc mất mạng.
- Purpose: Thống nhất lịch thi công không gây ảnh hưởng đến giao thông trường và đào tạo nhân viên bảo vệ vận hành hệ thống mới.
- Frequency: 2 tuần / lần (Bi-weekly).
- Method / Format: Cuộc họp giao ban trực tiếp + Buổi diễn tập quy trình vận hành bãi xe thực tế.
- Responsible Person: Project Manager & Campus Operations Coordinator.

Stakeholder 3: Người điều khiển phương tiện (Sinh viên, Cán bộ) & Nhà thầu Phần cứng (External)

- Information: Thông báo hướng dẫn đăng ký biển số trên app, lộ trình triển khai barie tự động và họp bảo hành kỹ thuật với nhà thầu cung cấp thiết bị.
- Purpose: Hướng dẫn người dùng làm quen công nghệ mới và đảm bảo nhà thầu hỗ trợ khắc phục sự cố phần cứng trong vòng 24h.
- Frequency: Hàng tuần và khi phát sinh sự cố bảo hành.
- Method / Format: Email thông báo toàn trường + Thông tin chỉ dẫn tại cổng + Họp kỹ thuật trực tuyến với hãng thiết bị.
- Responsible Person: Lead Business Analyst (BA) & Hardware Support Specialist.

================================================================================
REQUEST 4: MILESTONES & 10 HOẠT ĐỘNG KỸ THUẬT IOT (3.0 Điểm)
--------------------------------------------------------------------------------

1. Ba Cột mốc Kỹ thuật chính của Dự án:

- Milestone 1 (Survey & Architecture Baseline Sign-off): Hoàn tất khảo sát mặt bằng bãi xe, phê duyệt Thiết kế Kiến trúc IoT & SRS (Cuối Tháng 2).
- Milestone 2 (ALPR Engine & Barrier Hardware Integration Complete): Hoàn thành lập trình Module AI ALPR và tích hợp điều khiển đóng mở Barie tự động (Cuối Tháng 4).
- Milestone 3 (Live Gate Pilot Testing & Official Go-Live): Nghiệm thu đợt thử nghiệm thực tế tại làn xe giờ cao điểm và chính thức Go-Live toàn bãi xe (Cuối Tháng 6).

2. Chi tiết 10 Hoạt động của Milestone 2 (ALPR Engine & Hardware Integration) & Quan hệ Logic:

- Activity 1 (A1): Thiết lập kiến trúc Backend (Node.js/Spring Boot) và CSDL PostgreSQL lưu trữ lịch sử phương tiện ra/vào.

* Predecessors: Start (Milestone 1 Sign-off)
* Dependency: FS

- Activity 2 (A2): Huấn luyện và tối ưu hóa mô hình AI nhận diện biển số xe (YOLOv8 + OCR) trên thiết bị Edge AI Jetson.

* Predecessors: A1
* Dependency: FS (Môi trường Backend sẵn sàng mới triển khai mô hình nhận diện).

- Activity 3 (A3): Xây dựng REST API tiếp nhận luồng hình ảnh từ Camera 4K và trả về kết quả biển số nhận dạng.

* Predecessors: A2
* Dependency: FS (Mô hình AI hoàn thiện mới đóng gói thành API dịch vụ).

- Activity 4 (A4): Lập trình Firmware điều khiển đóng/mở Barie và rơ-le qua vi điều khiển ESP32/Raspberry Pi.

* Predecessors: A1
* Dependency: FS (Triển khai song song với nhánh AI sau khi cấu trúc lệnh CSDL được định nghĩa).

- Activity 5 (A5): Tích hợp cảm biến vòng từ (Loop Detector) xác định xe vào vị trí kích hoạt Camera chụp ảnh.

* Predecessors: A4
* Dependency: SS (Gối đầu song song: Đấu nối cảm biến vòng từ đồng thời với khâu viết firmware điều khiển).

- Activity 6 (A6): Xây dựng cơ chế liên lạc nội bộ thời gian thực qua giao thức MQTT giữa AI Box và Bộ điều khiển Barie.

* Predecessors: A3, A4
* Dependency: FS (Cả API biển số A3 và Firmware Barie A4 phải hoàn thành mới kết nối luồng MQTT điều khiển).

- Activity 7 (A7): Phát triển Module Quản lý trạng thái Cảm biến 200 ô đỗ xe thời gian thực.

* Predecessors: A1
* Dependency: FS (Xây dựng phân hệ cảm biến ô đỗ độc lập với làn xe vào/ra).

- Activity 8 (A8): Lập trình Giao diện App Mobile (Flutter) hiển thị sơ đồ bãi đỗ xe và mã QR thanh toán tiền gửi.

* Predecessors: A7
* Dependency: SS (Ghép giao diện Mobile song song ngay khi module trạng thái ô đỗ A7 phát tín hiệu mẫu).

- Activity 9 (A9): Phát triển Dashboard màn hình giám sát thời gian thực tại buồng điều khiển của bảo vệ.

* Predecessors: A6, A7
* Dependency: FF (Màn hình Dashboard hoàn thành khi cả luồng Barie A6 và luồng Cảm biến ô đỗ A7 đã sẵn sàng).

- Activity 10 (A10): Kiểm thử Tích hợp Toàn diện Luồng: Xe vào -> Nhận diện biển số -> Mở barie -> Cập nhật ô đỗ xe.

* Predecessors: A8, A9
* Dependency: FS (Kiểm thử tích hợp toàn diện chỉ bắt đầu khi cả Mobile App A8 và Dashboard buồng bảo vệ A9 đã hoàn tất).
  \================================================================================

################################################################################

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

################################################################################

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

################################################################################
