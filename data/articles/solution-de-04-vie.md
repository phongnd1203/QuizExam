================================================================================
ĐỀ 04: DẠNG ĐỀ QUẢN LÝ PHẠM VI WBS & MỤC TIÊU SMART (SMART HOSPITAL)
DỰ ÁN: SMART HOSPITAL & TELE-HEALTH CONSULTATION PORTAL
LỜI GIẢI MẪU CHUẨN PHÒNG THI EOS (BẢN TIẾNG VIỆT CÓ DẤU)
================================================================================

REQUEST 1: THIẾT LẬP MỤC TIÊU THEO NGUYÊN TẮC SMART (2.5 Điểm)
--------------------------------------------------------------------------------

Mục tiêu 1: Phân hệ Khám chữa bệnh Từ xa (Tele-Health Consultation System)

- S (Specific - Cụ thể):
  Xây dựng và tích hợp phân hệ Khám bệnh Từ xa (Tele-Health) đa nền tảng (Web & Mobile App) cho phép bệnh nhân ngoại trú đặt lịch hẹn, thực hiện cuộc gọi video tư vấn y tế trực tuyến độ nét cao với bác sĩ chuyên khoa và nhận đơn thuốc điện tử.
- M (Measurable - Đo lường được):

* Đạt tối thiểu 10.000 lượt khám tư vấn từ xa thành công/tháng sau 3 tháng đưa vào sử dụng.
* Thời gian kết nối cuộc gọi video ổn định dưới 3 giây (< 3s) với độ trễ âm thanh/hình ảnh < 200ms.
* Tỷ lệ bệnh nhân đánh giá hài lòng với chất lượng dịch vụ đạt >= 90%.

- A (Achievable - Khả thi):
  Hệ thống ứng dụng giao thức truyền thông thời gian thực WebRTC, máy chủ phân tán AWS Media Services có sẵn của tập đoàn viễn thông tài trợ, kết hợp cùng đội ngũ 50 bác sĩ nòng cốt được tập huấn nghiệp vụ.
- R (Relevant - Phù hợp & Thực tế):
  Giải quyết trực tiếp mục tiêu chiến lược của bệnh viện: cắt giảm 40% tình trạng quá tải và ùn tắc tại khu khám bệnh ngoại trú, tiết kiệm 60% thời gian chờ đợi và chi phí đi lại cho bệnh nhân.
- T (Time-bound - Có thời hạn):
  Hoàn thành việc phát triển, kiểm thử bảo mật và nghiệm thu đưa vào vận hành thử nghiệm tại tháng thứ 6 của dự án (trước thời hạn tổng thể 9 tháng).

Mục tiêu 2: Phân hệ Số hóa Bệnh án Điện tử (Electronic Medical Records - EMR)

- S (Specific - Cụ thể):
  Xây dựng cơ sở dữ liệu bệnh án điện tử tập trung đạt chuẩn mã hóa y tế quốc tế (HL7/FHIR), số hóa toàn bộ dữ liệu lịch sử khám chữa bệnh của bệnh nhân và tích hợp tính năng tra cứu tự động cho bác sĩ.
- M (Measurable - Đo lường được):

* Số hóa và chuyển đổi hoàn thành 100% mục tiêu (đạt đúng 10.000 hồ sơ bệnh án ngoại trú).
* Tỷ lệ trích xuất thông tin tự động bằng công nghệ OCR đạt độ chính xác >= 99.8%.
* Thời gian tra cứu và hiển thị đầy đủ lịch sử bệnh án của bệnh nhân dưới 1 giây (< 1s).

- A (Achievable - Khả thi):
  Sử dụng mô hình AI OCR chuyên biệt cho tài liệu y tế kết hợp với đội ngũ 10 chuyên viên số hóa dữ liệu y tế chuyên trách và hệ thống CSDL PostgreSQL phân vùng được mã hóa bảo mật cấp độ AES-256.
- R (Relevant - Phù hợp & Thực tế):
  Giúp bác sĩ truy xuất tiền sử bệnh tức thì khi hội chẩn từ xa, loại bỏ 100% rủi ro thất lạc bệnh án giấy, đồng thời tạo tiền đề số hóa toàn diện dữ liệu y tế cho bệnh viện.
- T (Time-bound - Có thời hạn):
  Hoàn tất số hóa toàn bộ 10.000 hồ sơ bệnh án và được Hội đồng Y khoa nghiệm thu tại tháng thứ 7 của dự án.

================================================================================
REQUEST 2: QUẢN LÝ PHẠM VI DỰ ÁN & SẢN PHẨM BÀN GIAO (2.5 Điểm)
--------------------------------------------------------------------------------

1. In-Scope (4 Hạng mục nằm trong phạm vi dự án):

- Hạng mục 1: Phát triển Cổng thông tin Web Portal và Mobile App (iOS/Android) cho bệnh nhân đặt lịch hẹn khám bệnh, theo dõi hồ sơ sức khỏe và thanh toán viện phí trực tuyến.
- Hạng mục 2: Xây dựng Phân hệ Cuộc gọi Video Khám bệnh Từ xa (Tele-Health) chuẩn WebRTC chất lượng HD, tích hợp ghi chú lâm sàng trong cuộc gọi cho bác sĩ.
- Hạng mục 3: Xây dựng Cơ sở dữ liệu và Phân hệ Quản lý Bệnh án Điện tử (EMR) chuẩn HL7/FHIR, số hóa 10.000 hồ sơ bệnh án lịch sử.
- Hạng mục 4: Xây dựng Phân hệ Kê đơn thuốc điện tử (E-Prescription) tích hợp cảnh báo tương tác thuốc và gửi mã QR nhận thuốc tự động cho bệnh nhân.

2. Out-of-Scope (4 Hạng mục loại trừ ngoài phạm vi nhằm tránh Scope Creep):

- Hạng mục 1: Không mua sắm, lắp đặt hoặc bảo trì các trang thiết bị phần cứng y tế chuyên dụng tại phòng khám (máy chụp X-quang, máy CT Scanner, máy siêu âm, máy đo điện tim).
- Hạng mục 2: Không trực tiếp cung cấp dịch vụ giao vận chuyển thuốc tận nhà cho bệnh nhân (Bệnh viện sẽ ký kết hợp đồng riêng với đơn vị vận chuyển bên thứ ba độc lập).
- Hạng mục 3: Không phát triển hệ thống điều phối xe cứu thương và cấp cứu ngoại viện khẩn cấp (115 Emergency Dispatch).
- Hạng mục 4: Không xây dựng phần mềm quản lý phòng mổ chuyên sâu hay hệ thống phân tích lưu trữ hình ảnh chẩn đoán phức tạp (PACS/RIS cao cấp).

3. Project Deliverables (3 Sản phẩm bàn giao chính của dự án):

- Deliverable 1 (Software Package): Bộ mã nguồn hoàn chỉnh và bản cài đặt ứng dụng Web Portal (ReactJS) & Mobile App (Flutter) đã được đóng gói và triển khai trên Cloud AWS.
- Deliverable 2 (Data Package): Cơ sở dữ liệu chứa 10.000 bệnh án điện tử đã được chuẩn hóa dữ liệu, số hóa hoàn chỉnh và mã hóa bảo mật theo chuẩn y tế HIPAA.
- Deliverable 3 (Documentation & Training Package): Bộ tài liệu thiết kế kiến trúc hệ thống, Sổ tay hướng dẫn sử dụng (User Manual) dành cho bệnh nhân và bác sĩ, cùng Biên bản đào tạo chuyển giao công nghệ cho 200 cán bộ y tế.

================================================================================
REQUEST 3: CẤU TRÚC PHÂN CHIA CÔNG VIỆC (WBS 5 GIAI ĐOẠN) (2.5 Điểm)
--------------------------------------------------------------------------------

Cấu trúc WBS chuẩn 5 giai đoạn phát triển phần mềm y tế:

1.0 Smart Hospital & Tele-Health Consultation Portal Project
1.1 Project Initiation & Planning (Giai đoạn Khởi tạo & Lập kế hoạch)
1.1.1 Xây dựng và phê duyệt Project Charter & Kế hoạch Quản lý Dự án
1.1.2 Xác định Ma trận Stakeholders & Quy chế Bảo mật Dữ liệu Y tế (HIPAA Compliance)
1.1.3 Lập Scope Baseline, WBS Dictionary và Kế hoạch Quản lý Chi phí
1.2 System Architecture & UI/UX Design (Giai đoạn Thiết kế Kiến trúc & Giao diện)
1.2.1 Khảo sát quy trình lâm sàng & Phê duyệt Tài liệu Đặc tả Yêu cầu Phần mềm (SRS)
1.2.2 Thiết kế Kiến trúc Microservices & CSDL Bệnh án Điện tử chuẩn HL7/FHIR
1.2.3 Thiết kế Giao diện Wireframe & UI/UX Prototype cho Bệnh nhân & Bác sĩ
1.3 Core Engineering & Digitization (Giai đoạn Lập trình & Số hóa)
1.3.1 Lập trình Module Đặt lịch hẹn & Cổng thanh toán viện phí trực tuyến
1.3.2 Lập trình Phân hệ Cuộc gọi Video Tele-Health HD qua WebRTC
1.3.3 Phát triển Phân hệ Quản lý Bệnh án Điện tử (EMR) & Đơn thuốc điện tử
1.3.4 Thực hiện Scan và Trích xuất AI OCR 10.000 Hồ sơ Bệnh án Lịch sử
1.3.5 Xây dựng Admin Dashboard giám sát vận hành và cảnh báo y khoa
1.4 Testing, Security Audit & Quality Assurance (Giai đoạn Kiểm thử & Đảm bảo Chất lượng)
1.4.1 Kiểm thử Tích hợp Toàn diện Hệ thống (System Integration Testing - SIT)
1.4.2 Kiểm thử Tải và Độ trễ truyền phát Video Tele-Health (Load & Stress Testing)
1.4.3 Kiểm thử Đánh giá An toàn Thông tin & Lỗ hổng Bảo mật (HIPAA Security Pentest)
1.4.4 Tổ chức Kiểm thử Nghiệm thu Người dùng (User Acceptance Testing - UAT Sign-off)
1.5 Deployment, Training & Handover (Giai đoạn Triển khai, Đào tạo & Bàn giao)
1.5.1 Cấu hình và triển khai Hệ thống lên Môi trường Production AWS Cloud
1.5.2 Tổ chức các buổi Tập huấn và Đào tạo Chuyển giao cho 200 Y Bác sĩ
1.5.3 Bàn giao Tài liệu Hướng dẫn, Đánh giá Bài học Kinh nghiệm (Lessons Learned) & Đóng dự án

================================================================================
REQUEST 4: BÀI TOÁN QUẢN LÝ GIÁ TRỊ THU ĐƯỢC (EVM) TẠI THÁNG THỨ 4 (2.5 Điểm)
--------------------------------------------------------------------------------

1. Tóm tắt Dữ kiện Đề bài:

- Tổng ngân sách phê duyệt (BAC): $300,000 USD
- Tổng thời gian kế hoạch (DAC): 9 tháng
- Thời điểm đánh giá (Status Date): Tháng thứ 4 (t = 4)
- Chi phí thực tế đã giải ngân (AC): $110,000 USD
- Khối lượng công việc đã hoàn thành: Số hóa thành công 4.000 / 10.000 hồ sơ bệnh án (tương đương 40% khối lượng toàn dự án).

2. Các bước Tính toán chi tiết:

- Bước 1: Tính Giá trị Kế hoạch (Planned Value - PV):
  Theo kế hoạch, tại mốc tháng thứ 4 trên tổng số 9 tháng:
  PV = (4 / 9) * BAC = (4 / 9) * $300,000 = $133,333.33 USD.

- Bước 2: Tính Giá trị Thu được (Earned Value - EV):
  Hệ thống đã hoàn thành 4.000 / 10.000 hồ sơ = 40% khối lượng dự án:
  EV = 40% * BAC = 0.40 * $300,000 = $120,000.00 USD.

- Bước 3: Tính Chỉ số Hiệu suất Tiến độ (Schedule Performance Index - SPI):
  SPI = EV / PV = 120,000 / 133,333.33 = 0.90 (hoặc 9/10).

(Ghi chú bổ sung: Chỉ số Hiệu suất Chi phí CPI = EV / AC = 120,000 / 110,000 = 1.091 > 1.0)

3. Nhận xét Đánh giá Tình trạng Dự án:

- Vì SPI = 0.90 < 1.0 (hoặc Sai số Tiến độ SV = EV - PV = 120,000 - 133,333.33 = -$13,333.33 < 0):
  => Dự án đang CHẬM TIẾN ĐỘ (Behind Schedule), chỉ đạt 90% khối lượng công việc so với kế hoạch đề ra tại tháng thứ 4.
- Mặt khác, vì CPI = 1.091 > 1.0 => Dự án đang TIẾT KIỆM CHI PHÍ (Under Budget), chi phí thực tế giải ngân ít hơn giá trị công việc đã tạo ra.

4. Đề xuất 2 Giải pháp Xử lý:

- Giải pháp 1 (Fast-tracking - Thực hiện công việc song song):
  Tiến hành cho phép đội kỹ thuật phát triển phân hệ Video Tele-Health và phân hệ Đơn thuốc điện tử song song cùng lúc với công tác số hóa dữ liệu bệnh án còn lại, thay vì chờ hoàn thành tuần tự. Giải pháp này giúp rút ngắn tiến độ mà không làm tăng chi phí.
- Giải pháp 2 (Crashing - Nén tiến độ bằng nguồn lực):
  Trích phần ngân sách đang tiết kiệm được (do CPI = 1.091) để thuê thêm 2 máy quét OCR công nghiệp tốc độ cao và bố trí thêm 4 nhân sự tăng ca (OT) vào ban đêm để đẩy nhanh tốc độ số hóa 6.000 hồ sơ còn lại, đưa tiến độ bắt kịp kế hoạch gốc.
  \================================================================================
