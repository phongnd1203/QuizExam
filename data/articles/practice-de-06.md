# ĐỀ SỐ 6: SE - HỆ THỐNG QUẢN LÝ HỌC TẬP THÔNG MINH TÍCH HỢP AI (AI-POWERED LMS PLATFORM)

> **Chuyên ngành:** Kỹ thuật Phần mềm (Software Engineering - SE) | **Môn học:** PMG201c
> **Thời gian làm bài:** 60 - 90 phút | **Hình thức thi:** Thực hành trên máy (EOS Client)

---

## PHẦN I: ĐỀ BÀI (EXAM QUESTIONS - 10.0 ĐIỂM)

### BỐI CẢNH DỰ ÁN (CASE STUDY)

- **Tên dự án:** _AI-Powered Adaptive Learning Management System (EduAI SmartLMS)_ - Hệ thống Quản lý Học tập Thông minh Tích hợp Trợ lý Trí tuệ Nhân tạo Cá nhân hóa.
- **Chủ đầu tư:** Tổ chức Giáo dục Quốc tế (Global Education Group).
- **Đơn vị thực hiện:** Đội ngũ Kỹ thuật Phần mềm EdTech.
- **Thời gian kế hoạch (DAC):** $7\text{ tháng}$ | **Tổng ngân sách phê duyệt (BAC):** $\$140,000$.
- **Mục tiêu hệ thống:**

1.  Phục vụ $30,000$ sinh viên và $1,200$ giảng viên học tập, chấm bài và làm bài tập trực tuyến.
2.  Tích hợp mô hình ngôn ngữ lớn (LLM AI Tutor) giải đáp thắc mắc bài giảng 24/7 và tự động sinh câu hỏi luyện tập theo trình độ sinh viên (_Adaptive Quiz_).
3.  Phân tích dữ liệu học tập (_Learning Analytics_) cảnh báo sớm sinh viên có nguy cơ trượt môn.

---

### CÁC YÊU CẦU ĐỀ THI (EXAM REQUESTS)

- **Request 1 (2.5 Điểm): Mục tiêu SMART & Phạm vi Dự án (Scope Management)**

1.  Thiết lập **2 Mục tiêu SMART** cho hệ thống EduAI SmartLMS (phân tích chi tiết S, M, A, R, T).
2.  Xác định ranh giới phạm vi hệ thống: **In-Scope (4 tính năng kỹ thuật cốt lõi)**, **Out-of-Scope (4 hạng mục loại trừ)**, và **3 Deliverables bàn giao**.

- **Request 2 (2.5 Điểm): Cấu trúc Phân chia Công việc (WBS 5 Giai đoạn SDLC)**
  Xây dựng Cấu trúc Phân rã Công việc (**WBS**) chuẩn 5 giai đoạn phát triển phần mềm (Khởi tạo, Thiết kế Kiến trúc & AI Prompting, Lập trình Microservices, Kiểm thử & Tối ưu AI, Triển khai & Chuyển giao) theo định dạng số phân cấp (`1.0 -> 1.1 -> 1.1.1`).

- **Request 3 (2.5 Điểm): Quản lý Rủi ro Kỹ thuật & Trí tuệ Nhân tạo (AI & SE Risk Management)**
  Lập bảng phân tích 3 rủi ro kỹ thuật đặc thù của dự án phần mềm AI:

1.  Mô hình AI phản hồi sai kiến thức chuyên môn (_AI Hallucination Risk_).
2.  Chi phí Token API mô hình ngôn ngữ lớn tăng đột biến (_API Cost Surge Risk_).
3.  Nghẽn mạng và sập hệ thống khi hàng nghìn sinh viên nộp bài thi cuối kỳ (_Server Overload during Finals_).
    Mỗi rủi ro nêu rõ: Xác suất, Tác động, Chiến lược, **Biện pháp phòng ngừa (Mitigation)** và **Kế hoạch ứng phó sự cố (Contingency)**.

- **Request 4 (2.5 Điểm): Bài toán Quản lý Giá trị Thu được (EVM)**
  Tại mốc đánh giá sau **3 tháng** triển khai dự án ($DAC = 7\text{ tháng}, BAC = \$140,000$):
- Chi phí thực tế đã giải ngân ($AC$): $\$68,000$.
- Hệ thống đã hoàn thành việc xây dựng CSDL, hoàn thiện UI/UX và tích hợp xong phân hệ Khóa học (tương đương $45\%$ tổng khối lượng công việc toàn dự án).

1.  Tính Giá trị Kế hoạch ($PV$) và Giá trị Thu được ($EV$).
2.  Tính Chỉ số Hiệu suất Chi phí ($CPI$) và Chỉ số Hiệu suất Tiến độ ($SPI$).
3.  Nhận xét tình trạng dự án và đề xuất 2 giải pháp điều chỉnh tiến độ và chi phí.

---

## PHẦN II: HƯỚNG DẪN CÁCH LÀM & KHUNG TRẢ LỜI CHUẨN EOS

---

### HƯỚNG DẪN REQUEST 1: MỤC TIÊU SMART & SCOPE SE (2.5 Điểm)

#### 1. Hướng dẫn thiết lập 2 mục tiêu SMART cho hệ thống AI EdTech:

- **Mục tiêu 1 (Trợ lý AI Tutor RAG):**
- _S (Specific):_ Xây dựng Trợ lý ảo AI hỏi đáp kiến thức 24/7.
- _M (Measurable):_ Độ chính xác $\ge 92\%$, độ trễ $< 3\text{s}$, chịu tải $5,000$ user hỏi đáp đồng thời.
- _A (Achievable):_ Sử dụng kỹ thuật Retrieval-Augmented Generation (RAG) với Vector Database (Pinecone).
- _R (Relevant):_ Giảm $60\%$ câu hỏi lặp lại gửi đến giảng viên.
- _T (Time-bound):_ Hoàn thành tại tháng thứ 5 của dự án.
- **Mục tiêu 2 (Adaptive Testing Engine):**
- _S (Specific):_ Thuật toán tự động sinh và điều chỉnh độ khó bài tập trắc nghiệm theo năng lực từng sinh viên.
- _M (Measurable):_ Cải thiện $25\%$ điểm số của nhóm sinh viên yếu sau 1 học kỳ.
- _A (Achievable):_ Áp dụng lý thuyết Item Response Theory (IRT) & Machine Learning.
- _R (Relevant):_ Cá nhân hóa lộ trình học tập, nâng cao tỷ lệ qua môn.
- _T (Time-bound):_ Hoàn thành tại tháng thứ 6 của dự án.

#### 2. Phân định ranh giới Phạm vi (Scope Boundary):

- **In-Scope:** Phân hệ Khóa học/Video, Trợ lý AI Tutor RAG, Dashboard Phân tích học tập, Web Portal & Flutter Mobile App.
- **Out-of-Scope:** Tự quay bài giảng cho giảng viên, cấp phát máy tính cá nhân, tích hợp phần mềm kế toán thu học phí, đào tạo mô hình Foundation LLM từ đầu.
- **3 Deliverables:** Bộ mã nguồn Web/App/AI, Vector Database tài liệu 50 môn học, Tài liệu hướng dẫn sử dụng & bàn giao kỹ thuật.

---

### HƯỚNG DẪN REQUEST 2: CẤU TRÚC PHÂN RÃ CÔNG VIỆC WBS (2.5 Điểm)

#### 1. Khung WBS chuẩn 5 giai đoạn cho dự án Phần mềm AI:

```text
1.0 EduAI SmartLMS Platform Development Project
├── 1.1 Project Initiation & Requirements (Lấy yêu cầu SRS, Chính sách bảo mật dữ liệu AI)
├── 1.2 Architecture, UI/UX & AI System Design (Kiến trúc Microservices, Vector DB, UI/UX)
├── 1.3 Core Engineering & AI Integration (Lập trình Khóa học, AI RAG Tutor, Analytics)
├── 1.4 Testing, Model Optimization & QA (Kiểm thử tải, Kiểm tra ảo giác AI, UAT)
└── 1.5 Cloud Deployment, Training & Project Handover (Triển khai EKS, Tập huấn giảng viên)
```

---

### HƯỚNG DẪN REQUEST 3: QUẢN LÝ RỦI RO KỸ THUẬT & AI (2.5 Điểm)

#### 1. Hướng dẫn xây dựng biện pháp cho 3 rủi ro:

1. **AI phản hồi sai kiến thức (Hallucination):**

- _Mitigation:_ Thiết lập ngưỡng tương đồng nghiêm ngặt trong Vector DB (Strict Similarity Threshold), áp dụng Guardrails chặn câu trả lời ngoài giáo trình.
- _Contingency:_ Bổ sung nút bấm "Báo cáo câu trả lời sai" cho sinh viên; tự động chuyển tiếp câu hỏi khó đến Giảng viên phụ trách.

2. **Chi phí Token API mô hình LLM tăng vọt:**

- _Mitigation:_ Cài đặt Redis Semantic Caching lưu câu trả lời cho các câu hỏi trùng lặp; giới hạn định mức (Rate Limiting) tối đa 30 câu hỏi AI/ngày/sinh viên.
- _Contingency:_ Tự động chuyển đổi sang mô hình ngôn ngữ mã nguồn mở nhỏ gọn (Llama 3 8B) tự host trên máy chủ GPU nội bộ.

3. **Sập máy chủ khi nộp bài thi cuối kỳ đồng thời:**

- _Mitigation:_ Áp dụng hàng đợi Message Queue (RabbitMQ); cấu hình Kubernetes Auto-scaling tự động tăng số lượng Pod khi CPU $>70\%$.
- _Contingency:_ Tự động lưu bài làm tạm thời tại IndexedDB trên trình duyệt máy sinh viên; tự động cộng thêm 15 phút nộp bài khi có sự cố mạng.

---

### HƯỚNG DẪN REQUEST 4: BÀI TOÁN EVM TẠI THÁNG THỨ 3 (2.5 Điểm)

#### 1. Dữ kiện: $DAC = 7\text{ tháng}, BAC = \$140,000, t = 3\text{ tháng}, AC = \$68,000$, Hoàn thành $45\%$.

#### 2. Các bước giải:

- **Bước 1 (Tính $PV$):** $PV = \frac{3}{7} \times \$140,000 = \mathbf{\$60,000}$.
- **Bước 2 (Tính $EV$):** $EV = 45\% \times \$140,000 = \mathbf{\$63,000}$.
- **Bước 3 (Tính $CPI$ & $SPI$):**
- $CPI = \frac{EV}{AC} = \frac{63,000}{68,000} \approx \mathbf{0.926} < 1.0 \implies$ **Bội chi ngân sách (_Over Budget_)**.
- $SPI = \frac{EV}{PV} = \frac{63,000}{60,000} = \mathbf{1.05} > 1.0 \implies$ **Vượt tiến độ (_Ahead of Schedule_)**.
- **Bước 4 (Đề xuất giải pháp):**
- _Kiểm soát chi phí:_ Tắt bớt các máy chủ Cloud GPU thử nghiệm không dùng đến, chuyển các tác vụ huấn luyện AI về máy chủ Local để giảm chi phí phát sinh.
- _Tận dụng tiến độ:_ Dành khoảng thời gian sớm hơn kế hoạch để gia tăng kiểm thử tải và tối ưu hóa trải nghiệm người dùng trước khi bàn giao.
