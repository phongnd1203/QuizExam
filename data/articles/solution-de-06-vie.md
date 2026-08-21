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
