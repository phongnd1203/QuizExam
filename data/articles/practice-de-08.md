# ĐỀ SỐ 8: SE - HỆ THỐNG QUẢN LÝ ĐỒ ÁN TỐT NGHIỆP & KIỂM TRA ĐẠO VĂN (CAPSTONE MANAGEMENT SYSTEM)

> **Chuyên ngành:** Kỹ thuật Phần mềm (Software Engineering - SE) | **Môn học:** PMG201c
> **Thời gian làm bài:** 60 - 90 phút | **Hình thức thi:** Thực hành trên máy (EOS Client)

---

## PHẦN I: ĐỀ BÀI (EXAM QUESTIONS - 10.0 ĐIỂM)

### BỐI CẢNH DỰ ÁN (CASE STUDY)

- **Tên dự án:** _FPT University Student Capstone Project Management & Anti-Plagiarism Evaluation System (FPTU CapstoneHub)_.
- **Chủ đầu tư / Tài trợ:** Ban Đào tạo & Hội đồng Khoa học Trường Đại học FPT.
- **Thời gian kế hoạch (DAC):** $8\text{ tháng}$ | **Tổng ngân sách phê duyệt (BAC):** $\$150,000$.
- **Mục tiêu hệ thống:**

1.  Quản lý toàn bộ quy trình làm Đồ án Tốt nghiệp (Capstone Project / Khóa luận tốt nghiệp) cho hơn $3,000$ sinh viên và $300$ Giảng viên hướng dẫn (Mentor) / Giám khảo phản biện mỗi năm.
2.  Tự động hóa quy trình ghép nhóm, nộp báo cáo theo các mốc Sprint, phân công Hội đồng chấm bảo vệ và lưu trữ kho luận văn số.
3.  Tích hợp phân hệ **Kiểm tra Đạo văn và Mã nguồn AI (Anti-Plagiarism & AI Code Detection)** so khớp với cơ sở dữ liệu đồ án các kỳ trước và Internet.

---

### CÁC YÊU CẦU ĐỀ THI (EXAM REQUESTS)

- **Request 1 (20% - 2.0 Điểm): Project Charter Statement**
  Xây dựng bản Điều lệ Dự án chi tiết bao gồm: Tên dự án, Mục đích & 2 Lý do thực hiện, 3 Yêu cầu cấp cao của hệ thống (Ghép nhóm & Quản lý tiến độ Sprint, Phân hệ Hội đồng chấm thi & Ký số điểm, Công cụ Kiểm tra Đạo văn Báo cáo & So khớp Source Code).

- **Request 2 (20% - 2.0 Điểm): Cost & Budget Plan (5 Hạng mục Phần mềm Giáo dục)**
  Lập bảng dự toán 5 hạng mục chi phí: Nhân sự Đội ngũ Kỹ sư Phần mềm, Bản quyền Công cụ Check đạo văn & AI Detection API (Turnitin / Copyleaks API), Hạ tầng Lưu trữ File & Cơ sở dữ liệu Cloud AWS S3/RDS, Chi phí Đào tạo Hội đồng Giảng viên & Chuyển giao, Quỹ dự phòng rủi ro Contingency Reserve.

- **Request 3 (30% - 3.0 Điểm): Ma trận Quyền lực - Mức độ Quan tâm (Power/Interest Grid) & Kế hoạch Giao tiếp**

1.  Phân loại 4 bên liên quan chính (**Ban Đào tạo/Giám hiệu**, **Đội ngũ Phát triển Phần mềm**, **Giảng viên Hướng dẫn & Giám khảo**, **Sinh viên làm đồ án**) vào 4 góc phần tư của ma trận Power/Interest Grid (_Manage Closely, Keep Satisfied, Keep Informed, Monitor_).
2.  Lập bảng Kế hoạch Giao tiếp chi tiết tương ứng với từng nhóm Stakeholder.

- **Request 4 (30% - 3.0 Điểm): Project Milestones & Chuỗi 10 Hoạt động Phát triển Phần mềm**
  Xác định 3 Cột mốc kỹ thuật của dự án. Chọn Cột mốc **Lập trình Phân hệ Quản lý Đồ án & Tích hợp Module Check Đạo văn**, liệt kê 10 hoạt động lập trình chi tiết kèm mối quan hệ tiền nhiệm (**FS, SS, FF**).

---

## PHẦN II: HƯỚNG DẪN CÁCH LÀM & KHUNG TRẢ LỜI CHUẨN EOS

---

### HƯỚNG DẪN REQUEST 1: PROJECT CHARTER CHO HỆ THỐNG CAPSTONE (2.0 Điểm)

- **Tên dự án:** `FPT University Student Capstone Project Management & Anti-Plagiarism Evaluation System (FPTU CapstoneHub)`
- **Mục đích & Lý do:**
- _Thực trạng:_ Quản lý đồ án thủ công qua Google Drive/Excel gây chậm trễ, thất lạc tài liệu; kiểm tra đạo văn báo cáo và mã nguồn bằng cảm tính, dễ xảy ra gian lận học thuật.
- _Mục đích:_ Tự động hóa 100% quy trình nộp đồ án theo Sprint, quét đạo văn trong 60 giây, giảm 80% thời gian hành chính của Ban Đào tạo.
- **3 Yêu cầu cấp cao:**
- _Yêu cầu 1:_ Đăng ký đề tài, ghép nhóm sinh viên, nộp báo cáo theo các mốc Checkpoint và theo dõi Burndown Chart.
- _Yêu cầu 2:_ Tự động quét trùng lặp tài liệu (.pdf,.docx) và so khớp cây cú pháp AST mã nguồn (.java,.cs,.js,.py) với kho dữ liệu 10 năm.
- _Yêu cầu 3:_ Phân công hội đồng phản biện, chấm điểm online theo Rubric và xuất biên bản bảo vệ có ký số.

---

### HƯỚNG DẪN REQUEST 2: DỰ TOÁN 5 HẠNG MỤC CHI PHÍ ($150k) (2.0 Điểm)

- **Mục 1 (Labor Cost):** 1 PM, 1 Architect, 2 Backend Devs, 2 Frontend Devs, 1 QA trong 8 tháng $\rightarrow$ **Bottom-up** ($\approx \$105,000$).
- **Mục 2 (Cloud Infrastructure):** Máy chủ AWS EC2, CSDL PostgreSQL, Lưu trữ tài liệu AWS S3 $\rightarrow$ **Parametric** ($\$1,200/\text{tháng} \times 12\text{ tháng} = \$14,400$).
- **Mục 3 (Plagiarism API Subscription):** Mua $15,000$ lượt quét tài liệu Turnitin/Copyleaks API $\rightarrow$ **Parametric** ($15,000 \times \$0.80/\text{lượt} = \$12,000$).
- **Mục 4 (Training & Onboarding):** Tổ chức 6 buổi tập huấn cho 300 Giảng viên và 3,000 sinh viên $\rightarrow$ **Bottom-up** ($\approx \$4,600$).
- **Mục 5 (Contingency Reserve):** Quỹ dự phòng rủi ro $\rightarrow$ **Reserve Analysis** ($9.3\% \approx \$14,000$).
- **Kiểm tra tổng cộng:** Khớp đúng $\$150,000$.

---

### HƯỚNG DẪN REQUEST 3: POWER/INTEREST GRID & COMMUNICATION PLAN (3.0 Điểm)

#### 1. Ma trận Power/Interest Grid 4 góc phần tư:

- **High Power – High Interest $\rightarrow$ Manage Closely (Ban Đào tạo / Hội đồng Khoa học):** Họp tiến độ 2 tuần/lần, tham vấn thiết kế quy trình chấm điểm và duyệt Rubric.
- **High Power – Low Interest $\rightarrow$ Keep Satisfied (Ban Giám hiệu / Nhà tài trợ):** Báo cáo tóm tắt tiến độ Milestone và tình hình giải ngân ngân sách theo quý.
- **Low Power – High Interest $\rightarrow$ Keep Informed (Giảng viên & Sinh viên):** Gửi email thông báo lộ trình, mở đợt dùng thử Beta Test và tổ chức hội thảo hướng dẫn.
- **Low Power – Low Interest $\rightarrow$ Monitor (Đơn vị IT quản trị hệ thống cũ):** Theo dõi định kỳ về tính tương thích dữ liệu chuyển đổi.

#### 2. Kế hoạch Giao tiếp (Communication Plan):

- Đủ 5 cột: Thông tin trao đổi, Mục đích, Tần suất, Phương thức/Công cụ, Người chịu trách nhiệm.

---

### HƯỚNG DẪN REQUEST 4: MILESTONES & 10 ACTIVITIES SE (3.0 Điểm)

#### 1. 3 Cột mốc chính của dự án:

- _Milestone 1:_ Phê duyệt SRS & Thiết kế CSDL Đồ án (_SRS & Database Sign-off_).
- _Milestone 2:_ Hoàn thành Lập trình Module Cốt lõi & Tích hợp Quét Đạo văn (_Core Capstone & Plagiarism API Complete_).
- _Milestone 3:_ Nghiệm thu Thử nghiệm Bảo vệ Tốt nghiệp Thực tế & Go-Live (_Live Defense Trial & Go-Live_).

#### 2. Chuỗi 10 hoạt động Milestone 2:

- $A_1$: Thiết lập môi trường Backend (Spring Boot) và CSDL PostgreSQL.
- $A_2$: Xây dựng module Phân quyền & Đăng nhập SSO (Predecessor: $A_1 \rightarrow$ **FS**).
- $A_3$: Phát triển API Đăng ký đề tài & Ghép nhóm sinh viên (Predecessor: $A_2 \rightarrow$ **FS**).
- $A_4$: Phát triển giao diện Web Portal nộp bài theo Sprint (Predecessor: $A_3 \rightarrow$ **FS**).
- $A_5$: Xây dựng phân hệ Upload và lưu trữ file lên AWS S3 (Predecessor: $A_3 \rightarrow$ **FS**).
- $A_6$: Tích hợp API quét đạo văn Turnitin/Copyleaks (Predecessor: $A_5 \rightarrow$ **FS**).
- $A_7$: Xây dựng Engine phân tích so khớp cây cú pháp AST mã nguồn (Predecessor: $A_5 \rightarrow$ **SS**).
- $A_8$: Phát triển giao diện Báo cáo Đạo văn cho Giảng viên (Predecessor: $A_6, A_7 \rightarrow$ **FF**).
- $A_9$: Lập trình phân hệ Chấm điểm Online và Xuất Biên bản ký số (Predecessor: $A_4 \rightarrow$ **FS**).
- $A_{10}$: Kiểm thử tích hợp tự động toàn bộ luồng Nộp bài - Quét đạo văn - Chấm điểm (Predecessor: $A_8, A_9 \rightarrow$ **FS**).
