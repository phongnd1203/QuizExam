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
