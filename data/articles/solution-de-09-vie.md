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
