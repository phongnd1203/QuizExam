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
