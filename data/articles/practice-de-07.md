# ĐỀ SỐ 7: SE - ỨNG DỤNG ĐẶT XE & GIAO ĐỒ ĂN NỘI KHU CAMPUS (CAMPUS EXPRESS)

> **Chuyên ngành:** Kỹ thuật Phần mềm (Software Engineering - SE) | **Môn học:** PMG201c
> **Thời gian làm bài:** 60 - 90 phút | **Hình thức thi:** Thực hành trên máy (EOS Client)

---

## PHẦN I: ĐỀ BÀI (EXAM QUESTIONS - 10.0 ĐIỂM)

### BỐI CẢNH DỰ ÁN (CASE STUDY)

- **Tên dự án:** _FPT Campus Express - All-in-One Smart Mobility & Food Delivery Platform_ (Ứng dụng Đặt xe Điện và Giao đồ ăn Nội khu Đại học FPT).
- **Chủ đầu tư / Đơn vị quản lý:** Ban Quản lý Khuôn viên Campus phối hợp với Đoàn Thanh niên & Hội Sinh viên.
- **Thời gian kế hoạch (DAC):** $6\text{ tháng}$ | **Tổng ngân sách phê duyệt (BAC):** $\$120,000$.
- **Mục tiêu hệ thống:**

1.  Phục vụ việc di chuyển bằng xe điện nội khu và giao đồ ăn từ các căng tin/quán ăn quanh campus cho $20,000$ sinh viên và cán bộ giảng viên.
2.  Định vị GPS thời gian thực (Real-time GPS Tracking), thuật toán ghép chuyến thông minh (_Batching Algorithm_) và hỗ trợ tài xế là các bạn sinh viên làm thêm (_Student Drivers_).
3.  Tích hợp thanh toán không tiền mặt qua ví điện tử nội bộ Campus Pay.

---

### CÁC YÊU CẦU ĐỀ THI (EXAM REQUESTS)

- **Request 1 (20% - 2.0 Điểm): Project Charter Statement**
  Xây dựng bản Điều lệ Dự án chi tiết bao gồm: Tên dự án, Mục đích & Lý do triển khai, 3 Yêu cầu kỹ thuật cấp cao (Định vị thời gian thực & Ghép đơn, Phân hệ 3 ứng dụng: Khách hàng/Tài xế/Quán ăn, Cổng thanh toán ví nội bộ Campus Pay).

- **Request 2 (20% - 2.0 Điểm): Cost & Budget Plan (5 Hạng mục Phần mềm Di động)**
  Lập bảng dự toán 5 hạng mục chi phí phát triển ứng dụng di động: Chi phí Đội ngũ Lập trình viên Mobile/Backend, Bản quyền API Bản đồ (Google Maps / Mapbox), Thuê Máy chủ Đám mây & Cơ sở dữ liệu thời gian thực (Firebase / Redis), Chi phí Thiết bị GPS cho đội xe điện thử nghiệm, Quỹ dự phòng rủi ro Contingency Reserve.

- **Request 3 (30% - 3.0 Điểm): Kế hoạch Giao tiếp (Communication Plan) 3 Nhóm Stakeholders**
  Xác định 3 nhóm Stakeholder: **Project-Internal** (Mobile Devs, Backend Devs, UI/UX, QA), **Organization-Internal** (Ban Quản lý Campus & Phòng CTSV), và **External** (Chủ các quán ăn đối tác & Đội ngũ Tài xế sinh viên). Lập bảng kế hoạch giao tiếp chi tiết với đầy đủ 5 thông số.

- **Request 4 (30% - 3.0 Điểm): Bài toán Sơ đồ Mạng CPM cho Giai đoạn Phát triển Hệ thống**
  Cho bảng danh mục các công việc lập trình và tích hợp hệ thống như sau:

| Activity  | Description                                              | Preceding Activity | Duration (weeks) |
| :-------: | :------------------------------------------------------- | :----------------: | :--------------: |
| **Start** | Bắt đầu dự án                                            |         —          |        0         |
|   **A**   | Thiết kế API Contract & CSDL PostgreSQL                  |       Start        |        3         |
|   **B**   | Xây dựng Service Định vị & Socket.IO Realtime            |         A          |        4         |
|   **C**   | Phát triển App Khách hàng (Customer Flutter App)         |         A          |        5         |
|   **D**   | Phát triển App Tài xế (Driver Flutter App)               |         B          |        4         |
|   **E**   | Phát triển Web Portal Quản lý Quán ăn (Merchant Portal)  |         A          |        3         |
|   **F**   | Xây dựng Thuật toán Ghép đơn & Điều phối chuyến xe       |        B, E        |        4         |
|   **G**   | Tích hợp Cổng thanh toán Campus Pay API                  |        C, D        |        3         |
|   **H**   | Kiểm thử Tích hợp Toàn hệ thống (End-to-End System Test) |        F, G        |        3         |
|  **End**  | Hoàn thành & Sẵn sàng UAT                                |         H          |        0         |

1.  Liệt kê tất cả các đường đi (Paths) từ Start đến End và tính độ dài từng đường.
2.  Xác định **Đường găng (Critical Path)** và **Thời gian tối thiểu hoàn thành (_Minimum Duration_)**.
3.  Lập bảng tính **ES, EF, LS, LF, Float**. Chỉ ra công việc có tính linh hoạt cao nhất.
4.  Đề xuất giải pháp **Crashing / Fast-tracking** nếu cần rút ngắn tiến độ đi **2 tuần**.

---

## PHẦN II: HƯỚNG DẪN CÁCH LÀM & KHUNG TRẢ LỜI CHUẨN EOS

---

### HƯỚNG DẪN REQUEST 1: PROJECT CHARTER MOBILE APP (2.0 Điểm)

- **Tên dự án:** `FPT Campus Express - All-in-One Smart Mobility & Food Delivery Platform`
- **Justification:** Nêu rõ khuôn viên trường rộng lớn, sinh viên mất 15-20 phút đi bộ nắng mưa giữa các ca học; căng tin quá tải giờ ăn trưa. Mục đích: xây dựng ứng dụng di động kết nối xe điện sinh viên và đặt đồ ăn, giảm 70% thời gian chờ nhận đồ ăn và đón xe trong vòng 3 phút.
- **3 Yêu cầu cấp cao:**
- _Yêu cầu 1:_ Định vị GPS thời gian thực trên bản đồ số hóa nội khu qua WebSockets/Socket.IO, tự động ghép chuyến gần nhất.
- _Yêu cầu 2:_ Hệ sinh thái 3 ứng dụng chuyên biệt: Customer App, Driver App, Merchant Web Portal.
- _Yêu cầu 3:_ Tích hợp ví điện tử nội bộ Campus Pay thanh toán QR Napas 24/7 và tích điểm đổi quà.

---

### HƯỚNG DẪN REQUEST 2: DỰ TOÁN 5 HẠNG MỤC CHI PHÍ MOBILE ($120k) (2.0 Điểm)

- **Mục 1 (Labor Cost):** 1 PM, 1 Backend, 2 Flutter Mobile Devs, 1 Frontend Web, 1 QA trong 6 tháng $\rightarrow$ **Bottom-up** ($\approx \$85,000$).
- **Mục 2 (Map API & Cloud Realtime):** Bản quyền Mapbox API, máy chủ Socket.IO, Firebase Realtime DB, Redis trong 8 tháng $\rightarrow$ **Parametric** ($\$1,500/\text{tháng} \times 8 = \$12,000$).
- **Mục 3 (Hardware IoT Trackers):** Mua 30 thiết bị GPS gắn trên xe điện $\rightarrow$ **Analogous** ($\approx \$3,500$).
- **Mục 4 (Training & Onboarding):** Tập huấn lái xe an toàn cho 100 tài xế sinh viên và cài đặt thiết bị in hóa đơn quán ăn $\rightarrow$ **Bottom-up** ($\approx \$4,500$).
- **Mục 5 (Contingency Reserve):** Quỹ dự phòng rủi ro $\rightarrow$ **Reserve Analysis** ($12.5\% \approx \$15,000$).
- **Kiểm tra tổng cộng:** Khớp đúng $\$120,000$.

---

### HƯỚNG DẪN REQUEST 3: COMMUNICATION PLAN 3 NHÓM (3.0 Điểm)

- **Project-Internal (Dev Team):** Daily Standup (15p) & Slack/Jira để cập nhật tiến độ Sprint và sửa lỗi tương thích iOS/Android.
- **Organization-Internal (Ban Quản lý Campus & CTSV):** Họp giao ban 2 tuần/lần để báo cáo lộ trình thử nghiệm xe điện và cấp phép trạm dừng.
- **External (Chủ Quán ăn & Đội Tài xế sinh viên):** Họp hàng tuần và nhóm Zalo để hướng dẫn nhận đơn và giải đáp thắc mắc chiết khấu cuốc xe.

---

### HƯỚNG DẪN REQUEST 4: BÀI TOÁN SƠ ĐỒ MẠNG CPM & NÉN TIẾN ĐỘ (3.0 Điểm)

#### 1. Bước 1: Liệt kê các đường đi (Paths)

- $Path_1 (A-B-D-G-H) = 3 + 4 + 4 + 3 + 3 = \mathbf{17\text{ tuần}}$
- $Path_2 (A-B-F-H) = 3 + 4 + 4 + 3 = \mathbf{14\text{ tuần}}$
- $Path_3 (A-E-F-H) = 3 + 3 + 4 + 3 = \mathbf{13\text{ tuần}}$
- $Path_4 (A-C-G-H) = 3 + 5 + 3 + 3 = \mathbf{14\text{ tuần}}$
- $\Rightarrow$ **Critical Path:** $Path_1 (\text{Start} \rightarrow A \rightarrow B \rightarrow D \rightarrow G \rightarrow H \rightarrow \text{End})$.
- $\Rightarrow$ **Thời gian tối thiểu hoàn thành dự án:** $\mathbf{17\text{ tuần}}$.

#### 2. Bước 2: Bảng tính ES, EF, LS, LF & Float

- Áp dụng quy tắc Forward ($ES \rightarrow EF$) lấy $\max$, Backward ($LF \rightarrow LS$) lấy $\min$.
- Các hoạt động trên đường găng (A, B, D, G, H) có $\text{Float} = 0$.
- Hoạt động có tính linh hoạt cao nhất: **Activity E** có $\text{Float} = 4\text{ tuần}$ ($ES=3, EF=6, LS=7, LF=10$).

#### 3. Bước 3: Đề xuất giải pháp nén tiến độ 2 tuần (từ 17 tuần xuống 15 tuần)

- Vì các đường phụ (Path 2, 3, 4) dài tối đa 14 tuần, nên khi giảm Path 1 từ 17 xuống 15 tuần thì **không có đường phụ nào vượt lên thành đường găng mới**.
- **Giải pháp 1 (Crashing):** Bổ sung thêm 1 Flutter Developer vào Activity D để giảm thời gian từ 4 tuần xuống 2 tuần.
- **Giải pháp 2 (Fast-tracking):** Cho phép đội Mobile bắt đầu ghép giao diện với Mock API của Activity D ngay khi Activity B đạt 50% khối lượng.
