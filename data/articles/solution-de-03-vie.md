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
