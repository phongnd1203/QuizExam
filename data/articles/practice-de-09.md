# ĐỀ SỐ 9: SE MỞ - HỆ THỐNG BÃI ĐỖ XE THÔNG MINH IOT & NHẬN DIỆN BIỂN SỐ (SMART PARKING ALPR)

> **Chuyên ngành:** Kỹ thuật Phần mềm (Software Engineering - SE) | **Môn học:** PMG201c
> **Dạng đề:** Đề thi Mở (Open Project Scenario) | **Thời gian làm bài:** 60 - 90 phút | **Hình thức thi:** Thực hành trên máy (EOS Client)

---

## PHẦN I: ĐỀ BÀI (EXAM QUESTIONS - 10.0 ĐIỂM)

### BỐI CẢNH ĐỀ BÀI (OPEN SE SCENARIO)

Giả định bạn là Quản trị Dự án (Project Manager) của một nhóm kỹ sư phần mềm được giao nhiệm vụ phát triển dự án: **Hệ thống Quản lý Bãi đỗ xe Thông minh Tích hợp Nhận diện Biển số Tự động (Smart Campus Parking & Automatic License Plate Recognition - ALPR System)** cho trường Đại học hoặc Tòa nhà Doanh nghiệp.

Hệ thống kết hợp giữa phần mềm Web/Mobile, Camera AI xử lý ảnh nhận diện biển số tại biên (Edge AI), cảm biến IoT báo chỗ trống và barie tự động nhằm giải quyết tình trạng ùn tắc giao thông giờ cao điểm.

---

### CÁC YÊU CẦU ĐỀ THI (EXAM REQUESTS)

- **Request 1 (20% - 2.0 Điểm): Narrative Project Charter Statement**
  Xây dựng bản Điều lệ Dự án chi tiết bao gồm:

1.  Project Name (chuẩn quy tắc đặt tên phần mềm kỹ thuật).
2.  Project Purpose or Justification (nêu rõ thực trạng ùn tắc của bãi giữ xe truyền thống và giá trị vận hành/kinh tế mà hệ thống thông minh mang lại).
3.  High-level Requirements (mô tả ít nhất 3 yêu cầu cấp cao của hệ thống: Camera AI ALPR & Điều khiển Barie tự động, Ứng dụng di động tìm và đặt trước chỗ đỗ, Phân hệ Quản trị & Thống kê doanh thu thời gian thực).

- **Request 2 (20% - 2.0 Điểm): Cost / Budget Estimation (5 Hạng mục SE & IoT)**
  Lập bảng dự toán 5 hạng mục chi phí: Chi phí Nhân sự Đội ngũ Kỹ sư Phần mềm & IoT, Chi phí Thiết bị Phần cứng (Camera AI, Cảm biến siêu âm bãi đỗ, Bộ điều khiển Barie), Thuê Máy chủ Cloud AWS & Cơ sở dữ liệu, Bản quyền Phần mềm AI/Edge Computing, Quỹ dự phòng rủi ro Contingency Reserve. Nêu rõ: Tên, Mô tả, Phương pháp ước lượng, Công thức chi tiết, Số tiền và Người phụ trách.

- **Request 3 (30% - 3.0 Điểm): Project Communication Plan**
  Xây dựng kế hoạch giao tiếp chi tiết cho 3 nhóm Stakeholder:

1.  **Project-Internal:** Đội ngũ phát triển phần mềm (AI/Embedded Engineer, Backend, Mobile Dev, QA).
2.  **Organization-Internal:** Ban Quản lý Tòa nhà / Phòng Quản trị Cơ sở vật chất & Đội ngũ Bảo vệ.
3.  **External:** Người điều khiển phương tiện (Sinh viên, Giảng viên, Khách vãng lai) & Nhà cung cấp thiết bị phần cứng.
    Bảng giao tiếp phải đủ 5 cột: Thông tin trao đổi, Mục đích, Tần suất, Phương thức/Công cụ, Người chịu trách nhiệm.

- **Request 4 (30% - 3.0 Điểm): Milestones & Chuỗi 10 Hoạt động Kỹ thuật (Activities Sequence)**
  Xác định ít nhất 3 Cột mốc kỹ thuật của dự án. Chọn Cột mốc **Phát triển Phân hệ Nhận diện Biển số & Tích hợp Điều khiển Phần cứng Barie**, liệt kê 10 hoạt động kỹ thuật chi tiết kèm mối quan hệ tiền nhiệm (**FS, SS, FF**) phản ánh đúng bản chất tích hợp giữa phần mềm và thiết bị IoT.

---

## PHẦN II: HƯỚNG DẪN CÁCH LÀM & KHUNG TRẢ LỜI CHUẨN EOS

---

### HƯỚNG DẪN REQUEST 1: PROJECT CHARTER CHO HỆ THỐNG IOT & AI (2.0 Điểm)

#### 1. Khung tên dự án chuẩn:

`Smart Campus IoT Parking Management & Automatic License Plate Recognition Platform (FPTU SmartPark)`

#### 2. Lập luận Mục đích & Lý do (Justification):

- **Thực trạng cũ:** Bãi đỗ xe truyền thống dùng thẻ từ quẹt tay mất 10 - 15 giây/xe, thường xuyên gây ùn tắc kéo dài 100m tại cổng trường vào đầu mỗi ca học; người gửi xe mất 10-15 phút chạy quanh bãi tìm chỗ trống; khó kiểm soát tình trạng mất vé xe hoặc gian lận tiền gửi.
- **Mục đích dự án:** Tự động hóa hoàn toàn quy trình nhận diện biển số xe qua camera AI trong vòng 1 giây ($\le 1\text{s}$), mở barie tự động không cần dừng xe, hiển thị sơ đồ vị trí trống trên điện thoại thời gian thực. Dự án cắt giảm $90\%$ thời gian chờ tại cổng bãi đỗ, loại bỏ $100\%$ thẻ nhựa và tăng $40\%$ hiệu suất khai thác diện tích bãi xe.

#### 3. 3 Yêu cầu cấp cao (High-Level Requirements):

- **Yêu cầu 1 (Edge AI ALPR & Barrier Automation):** Camera AI độ nét cao chụp và nhận dạng ký tự biển số xe tự động (độ chính xác $\ge 98\%$), kiểm tra tính hợp lệ và tự động gửi tín hiệu kích hoạt mở barie qua giao thức MQTT/Modbus trong $<1\text{s}$.
- **Yêu cầu 2 (Real-time Parking Space Navigation Mobile App):** Ứng dụng di động hiển thị bản đồ bãi đỗ xe thời gian thực, dẫn đường đến ô đỗ còn trống gần nhất, hỗ trợ đặt trước chỗ đỗ và thanh toán tiền gửi xe tự động qua QR Napas/Ví điện tử.
- **Yêu cầu 3 (Centralized Admin Dashboard & Security Monitoring):** Cổng thông tin dành cho Ban Quản lý giám sát camera các làn vào/ra, cảnh báo biển số xe lạ/xe vi phạm, kiểm soát tổng doanh thu và xuất báo cáo lưu lượng phương tiện theo giờ.

---

### HƯỚNG DẪN REQUEST 2: DỰ TOÁN 5 HẠNG MỤC CHI PHÍ SE & IOT (2.0 Điểm)

#### 1. Khung phân bổ 5 hạng mục chi phí (Giả định tổng ngân sách $\approx \$130,000$):

- **Mục 1 (Labor Cost):** 1 PM, 1 AI/Embedded Engineer, 2 Backend Devs, 1 Mobile Dev, 1 QA trong 6 tháng $\rightarrow$ Phương pháp: **Bottom-up Estimation** ($\approx \$80,000$).
- **Mục 2 (Hardware & IoT Equipment):** 4 Camera AI 4K, 200 Cảm biến siêu âm ô đỗ, 4 Cần barie tự động tốc độ cao, 2 Màn hình LED chỉ dẫn $\rightarrow$ Phương pháp: **Vendor Bid Analysis** ($\approx \$22,000$).
- **Mục 3 (Cloud Server & Edge Computing Devices):** Máy chủ biên Jetson Orin Nano tại cổng bãi đỗ, Cloud AWS EC2 & RDS PostgreSQL $\rightarrow$ Phương pháp: **Parametric Estimation** ($\approx \$10,000$).
- **Mục 4 (Software Licenses & Tooling):** Bản quyền phần mềm Computer Vision, SDK nhận diện biển số, Jira, GitHub $\rightarrow$ Phương pháp: **Parametric Estimation** ($\approx \$4,000$).
- **Mục 5 (Contingency Reserve):** Quỹ dự phòng rủi ro $\rightarrow$ Phương pháp: **Reserve Analysis** (Trích $\approx 10\% \approx \$14,000$).
- **Kiểm tra tổng cộng:** Khớp đúng $\$130,000$.

---

### HƯỚNG DẪN REQUEST 3: COMMUNICATION PLAN (3.0 Điểm)

- **Project-Internal (Dev & Embedded Team):** Daily Standup (15 phút) trao đổi tiến độ viết API, kết nối mạch điều khiển barie và kiểm thử độ trễ nhận diện biển số.
- **Organization-Internal (Ban Quản lý Tòa nhà & Bảo vệ):** Họp giao ban 2 tuần/lần để hướng dẫn xử lý các tình huống xe biển số mờ, mất mạng hoặc cúp điện; thống nhất lịch thi công lắp đặt barie ngoài giờ cao điểm.
- **External (Người điều khiển xe & Nhà cung cấp phần cứng):** Email thông báo lộ trình chuyển đổi số bãi xe, bản tin hướng dẫn tải app và họp trực tuyến với nhà thầu cung cấp thiết bị camera khi có lỗi phần cứng.

---

### HƯỚNG DẪN REQUEST 4: MILESTONES & 10 IOT ACTIVITIES (3.0 Điểm)

#### 1. Xác định 3 Cột mốc:

- _Milestone 1:_ Hoàn thành Khảo sát Mặt bằng Bãi đỗ & Phê duyệt Thiết kế Kiến trúc Hệ thống (_Hardware & Architecture Sign-off_).
- _Milestone 2:_ Hoàn thành Lập trình Module AI Nhận diện Biển số & Tích hợp Điều khiển Barie (_ALPR & Hardware Integration Complete_).
- _Milestone 3:_ Nghiệm thu Thử nghiệm Thực tế tại Cổng bãi xe & Bàn giao Go-Live (_Live Pilot Trial & Go-Live_).

#### 2. Chuỗi 10 hoạt động lập trình & tích hợp Milestone 2:

- $A_1$: Thiết lập môi trường Backend (Node.js/Spring Boot) và CSDL lưu trữ lịch sử ra/vào.
- $A_2$: Huấn luyện và tối ưu mô hình AI nhận diện biển số xe (YOLOv8 + OCR) trên thiết bị biên (Predecessor: $A_1 \rightarrow$ **FS**).
- $A_3$: Xây dựng API tiếp nhận hình ảnh từ Camera và trả kết quả biển số (Predecessor: $A_2 \rightarrow$ **FS**).
- $A_4$: Lập trình module điều khiển đóng/mở Barie qua vi điều khiển ESP32/Raspberry Pi (Predecessor: $A_1 \rightarrow$ **FS**).
- $A_5$: Tích hợp cảm biến vòng từ (Loop Detector) xác định xe vào vị trí chụp ảnh (Predecessor: $A_4 \rightarrow$ **SS**).
- $A_6$: Xây dựng cơ chế liên lạc nội bộ thời gian thực qua giao thức MQTT giữa AI Box và Barie (Predecessor: $A_3, A_4 \rightarrow$ **FS**).
- $A_7$: Phát triển module Quản lý trạng thái Cảm biến 200 ô đỗ xe thời gian thực (Predecessor: $A_1 \rightarrow$ **FS**).
- $A_8$: Lập trình giao diện App Mobile hiển thị sơ đồ bãi đỗ và mã QR thanh toán (Predecessor: $A_7 \rightarrow$ **SS**).
- $A_9$: Phát triển Dashboard màn hình giám sát tại buồng điều khiển của bảo vệ (Predecessor: $A_6, A_7 \rightarrow$ **FF**).
- $A_{10}$: Kiểm thử tích hợp toàn diện luồng Xe vào $\rightarrow$ Nhận diện biển số $\rightarrow$ Mở barie $\rightarrow$ Cập nhật ô đỗ (Predecessor: $A_8, A_9 \rightarrow$ **FS**).
