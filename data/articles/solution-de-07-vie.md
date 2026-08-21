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
