# ĐỀ SỐ 5: SE - HỆ THỐNG THƯƠNG MẠI ĐIỆN TỬ MICROSERVICES & CỔNG THANH TOÁN (E-COMMERCE PLATFORM)

> **Chuyên ngành:** Kỹ thuật Phần mềm (Software Engineering - SE) | **Môn học:** PMG201c
> **Thời gian làm bài:** 60 - 90 phút | **Hình thức thi:** Thực hành trên máy (EOS Client)

---

## PHẦN I: ĐỀ BÀI (EXAM QUESTIONS - 10.0 ĐIỂM)

### BỐI CẢNH DỰ ÁN KỸ THUẬT PHẦN MỀM (SE CASE STUDY)

- **Tên dự án:** _Next-Gen Microservices E-Commerce & Omnichannel Payment Platform (NovaShop)_.
- **Chủ đầu tư / Khách hàng:** Tập đoàn Bán lẻ Đa kênh Quốc tế (Nova Retail Corp).
- **Đơn vị phát triển:** Đội ngũ Kỹ thuật Phần mềm (Software Engineering Project Team).
- **Thời gian thực hiện (DAC):** $8\text{ tháng}$ | **Tổng ngân sách phê duyệt (BAC):** $\$160,000$.
- **Mục tiêu kỹ thuật:**

1.  Chuyển đổi hệ thống nguyên khối (_Monolithic_) cũ sang kiến trúc **Microservices** (chạy trên Kubernetes/Docker) để chịu tải $500,000$ giao dịch/ngày trong các dịp Flash Sale.
2.  Tích hợp đa cổng thanh toán bảo mật chuẩn **PCI-DSS** (VNPay, MoMo, ZaloPay, Thẻ tín dụng quốc tế qua Stripe).
3.  Xây dựng phân hệ gợi ý sản phẩm thời gian thực sử dụng **AI Recommendation Engine**.

---

### CÁC YÊU CẦU ĐỀ THI (EXAM REQUESTS)

- **Request 1 (20% - 2.0 Điểm): Narrative Project Charter Statement**
  Xây dựng bản Điều lệ Dự án chi tiết bao gồm:

1.  Project Name (chuẩn quy tắc đặt tên dự án SE).
2.  Project Purpose & Justification (nêu rõ các rào cản kỹ thuật của hệ thống cũ và giá trị kinh doanh mà hệ thống Microservices mới mang lại).
3.  High-level Technical Requirements (mô tả chi tiết ít nhất 3 yêu cầu cấp cao của hệ thống: Kiến trúc Microservices & CSDL phân tán, Cổng thanh toán PCI-DSS, AI Recommendation Engine).

- **Request 2 (20% - 2.0 Điểm): Cost / Budget Estimation (5 Hạng mục SE)**
  Lập bảng dự toán 5 hạng mục chi phí đặc thù của dự án Kỹ thuật Phần mềm (Labor Cost cho Dev Team đa chuyên môn, Chi phí Hạ tầng Cloud AWS/Kubernetes, Bản quyền Công cụ CI/CD & IDE, Chi phí Kiểm định Bảo mật Pentest & PCI-DSS, Quỹ dự phòng rủi ro Contingency Reserve). Nêu rõ: Tên, Mô tả, Phương pháp ước lượng, Công thức chi tiết, Số tiền và Người phụ trách.

- **Request 3 (30% - 3.0 Điểm): Kế hoạch Giao tiếp (Communication Plan) & Ma trận RACI Kỹ thuật**

1.  Xây dựng Kế hoạch Giao tiếp chi tiết cho 3 nhóm Stakeholder: **Project-Internal** (Backend, Frontend, DevOps, QA Lead), **Organization-Internal** (CTO / Head of Engineering), và **External** (Nova Retail Product Owner & Cổng thanh toán đối tác).
2.  Lập bảng **RACI Matrix** cho 4 vai trò kỹ thuật (**PM**, **Solution Architect**, **Senior Dev**, **QA/Security Tester**) trên 8 công việc phát triển phần mềm Microservices.

- **Request 4 (30% - 3.0 Điểm): Milestones & Chuỗi 10 Hoạt động Kỹ thuật Phần mềm (SDLC Activity Sequencing)**
  Xác định 3 Cột mốc kỹ thuật chính. Chọn Cột mốc **Phát triển Module Cốt lõi & Tích hợp Cổng thanh toán (Core Services & Payment Integration)**, liệt kê 10 hoạt động lập trình/kiểm thử chi tiết kèm mối quan hệ tiền nhiệm (**FS, SS, FF**) thể hiện tính chất gối đầu của quy trình Agile/DevOps.

---

## PHẦN II: HƯỚNG DẪN CÁCH LÀM & KHUNG TRẢ LỜI CHUẨN EOS

---

### HƯỚNG DẪN REQUEST 1: PROJECT CHARTER CHO DỰ ÁN SE (2.0 Điểm)

#### 1. Yêu cầu lập luận kỹ thuật:

- **Tên dự án:** Kết hợp Tên Doanh nghiệp + Công nghệ (Microservices E-Commerce) + Tên Nền tảng (NovaShop Platform).
- **Justification:** Phân tích rõ 2 góc nhìn:
- _Góc độ Kỹ thuật (Technical Debt):_ Hệ thống cũ là Monolithic bị nghẽn CSDL khi vượt $10,000$ concurrent users, thời gian xử lý đơn hàng $>5\text{s}$, tỷ lệ rớt thanh toán cao ($12\%$).
- _Góc độ Giá trị Kinh doanh (Business Value):_ Chuyển sang Microservices giúp hệ thống chịu tải $50,000$ concurrent users, xử lý thanh toán $\le 2\text{s}$, tăng $35\%$ doanh thu online.
- **3 Yêu cầu cấp cao:**
- _Yêu cầu 1:_ Tách thành 6 microservices độc lập (Auth, Catalog, Order, Cart, Inventory, Payment) giao tiếp qua Message Broker Kafka và chạy trên Kubernetes (EKS).
- _Yêu cầu 2:_ Tích hợp đa cổng thanh toán chuẩn PCI-DSS Level 1 với cơ chế Tokenization.
- _Yêu cầu 3:_ Tích hợp công cụ tìm kiếm Elasticsearch và thuật toán Machine Learning gợi ý sản phẩm thời gian thực.

---

### HƯỚNG DẪN REQUEST 2: DỰ TOÁN 5 HẠNG MỤC CHI PHÍ SE (2.0 Điểm)

#### 1. Khung 5 hạng mục chi phí chuẩn cho dự án Phần mềm lớn ($BAC = \$160,000$):

1. **Labor Cost (Chi phí lương kỹ sư):** Đội ngũ gồm PM, Solution Architect, Backend Devs, Frontend Devs, DevOps, QA Automation trong 8 tháng $\rightarrow$ Phương pháp: **Bottom-up Estimation** ($\sum \text{Giờ} \times \text{Đơn giá/giờ} \approx \$115,000$).
2. **Cloud Infrastructure Cost:** Thuê cụm AWS EKS, RDS Aurora PostgreSQL, Managed Kafka, Redis Cache $\rightarrow$ Phương pháp: **Parametric Estimation** ($\text{Giá gói/tháng} \times 10\text{ tháng} \approx \$18,000$).
3. **Software & Tooling Licenses:** Bản quyền GitHub Enterprise, JetBrains, Jira, Figma, Postman $\rightarrow$ Phương pháp: **Parametric** ($\text{Đơn giá/user} \times 8\text{ dev} \times 8\text{ tháng} \approx \$3,200$).
4. **Third-party Security Audit & PCI-DSS:** Thuê kiểm thử xâm nhập Pentest và chứng nhận bảo mật $\rightarrow$ Phương pháp: **Vendor Bid Analysis** ($\approx \$9,800$).
5. **Contingency Reserve:** Quỹ dự phòng rủi ro $\rightarrow$ Phương pháp: **Reserve Analysis** (Trích $\approx 9\%$ ngân sách $\approx \$14,000$).

- **Kiểm tra tổng cộng:** Phải khớp đúng $\$160,000$.

---

### HƯỚNG DẪN REQUEST 3: COMMUNICATION PLAN & RACI MATRIX (3.0 Điểm)

#### 1. Kế hoạch Giao tiếp (Communication Plan):

- **Project-Internal (Dev Team):** Daily Standup (15 phút) qua Slack/Jira để đồng bộ task và tháo gỡ blocker.
- **Organization-Internal (CTO / Head of Engineering):** Họp Architecture Review (2 tuần/lần) báo cáo chỉ số tải Cloud và tiến độ kỹ thuật.
- **External (Nova Retail Product Owner & Cổng đối tác):** Demo Sprint Review (hàng tháng) để nghiệm thu tính năng và phối hợp cổng thanh toán.

#### 2. Ma trận RACI Kỹ thuật Phần mềm (Bắt buộc duy nhất 1 'A' mỗi hàng):

```text
Task 1: Requirements & API Contract -> PM: I | Architect: A | Dev: R | QA: C
Task 2: Microservices & Distributed DB -> PM: I | Architect: A, R | Dev: C | QA: I
Task 3: AWS Kubernetes (EKS) & CI/CD Setup -> PM: I | Architect: C | Dev (DevOps): A, R | QA: I
Task 4: Order & Catalog Services Coding -> PM: I | Architect: C | Dev: A, R | QA: I
Task 5: Payment Gateway SDK Integration -> PM: I | Architect: C | Dev: A, R | QA: C
Task 6: Automated Load & Stress Testing -> PM: I | Architect: I | Dev: C | QA: A, R
Task 7: Security Audit & Pentest -> PM: I | Architect: C | Dev: C | QA/Sec: A, R
Task 8: Production Release & Go-Live -> PM: A | Architect: R | Dev: R | QA: R
```

---

### HƯỚNG DẪN REQUEST 4: MILESTONES & 10 ACTIVITIES SE (3.0 Điểm)

#### 1. Xác định 3 Cột mốc:

- _Milestone 1:_ Phê duyệt Thiết kế Kiến trúc & Thiết lập Môi trường CI/CD (_Architecture & CI/CD Baseline_).
- _Milestone 2:_ Hoàn thành Lập trình Microservices Cốt lõi & Tích hợp Cổng thanh toán (_Core Microservices & Payment_).
- _Milestone 3:_ Nghiệm thu Bảo mật PCI-DSS, Đạt Kiểm thử Tải & Go-Live (_PCI-DSS, Load Test & Release_).

#### 2. Trình tự 10 hoạt động lập trình Milestone 2:

- $A_1$: Thiết kế Schema CSDL phân tán PostgreSQL & Redis Cache.
- $A_2$: Xây dựng API Gateway & Auth Service (JWT/OAuth2) (Predecessor: $A_1 \rightarrow$ **FS**).
- $A_3$: Phát triển Product Catalog Service & Elasticsearch (Predecessor: $A_1 \rightarrow$ **FS**).
- $A_4$: Phát triển Order Service kết nối Apache Kafka (Predecessor: $A_2 \rightarrow$ **FS**).
- $A_5$: Lập trình giao diện Frontend Web/Mobile Giỏ hàng (Predecessor: $A_4 \rightarrow$ **SS**).
- $A_6$: Lập trình Payment Microservice xử lý giao dịch nội bộ (Predecessor: $A_4 \rightarrow$ **FS**).
- $A_7$: Tích hợp API Cổng thanh toán Stripe & VNPay (Predecessor: $A_6 \rightarrow$ **FS**).
- $A_8$: Xây dựng Webhook Listener & Cơ chế Idempotency chống trừ tiền trùng (Predecessor: $A_7 \rightarrow$ **SS**).
- $A_9$: Tích hợp giao diện Checkout an toàn (Predecessor: $A_5, A_7 \rightarrow$ **FF**).
- $A_{10}$: Kiểm thử tích hợp tự động End-to-End toàn bộ luồng mua hàng (Predecessor: $A_3, A_8, A_9 \rightarrow$ **FS**).
