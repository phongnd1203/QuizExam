# ĐỀ SỐ 1: DẠNG ĐỀ MỞ - DỰ ÁN CÔNG NGHỆ THÔNG TIN (OPEN IT SCENARIO)

> **Môn học:** PMG201c (Project Management Fundamentals)
> **Thời gian làm bài:** 60 - 90 phút | **Hình thức thi:** Thực hành trên máy (EOS Client)

---

## PHẦN I: ĐỀ BÀI (EXAM QUESTIONS - 10.0 ĐIỂM)

### BỐI CẢNH & HƯỚNG DẪN CHUNG (GENERAL INSTRUCTION)

Select a project from the university training subjects or university activities that you are currently working on, have worked on in the past, or a relevant software/business project that you know. Give the solutions or answers for the following requests based on your understanding and assumptions.

---

### CÁC YÊU CẦU ĐỀ THI (EXAM REQUESTS)

- **Request 1 (20% - 2.0 Điểm): Project Charter Statement**
  Develop a narrative project charter statement that includes the following details:

1.  Project name.
2.  Project purpose or justification (reasons to implement this project).
3.  High-level requirements: describe in broad terms what you want the project to do or provide (provide at least two requirements).

- **Request 2 (20% - 2.0 Điểm): Cost / Budget Estimation**
  Provide at least five main cost/budget items. For each cost/budget item, you need to provide the following details:

1.  Name of the cost item.
2.  Detailed description (who/what, quantity, duration).
3.  Estimation method along with the way to estimate (how to estimate, detailed formula/calculation).
4.  Estimated cost.
5.  Person in charge (responsible for approving/paying).
    _(Must include a Contingency Reserve for risk management)._

- **Request 3 (30% - 3.0 Điểm): Project Communication Plan**
  Develop a communication plan for the project where you:

1.  Define at least three distinct project stakeholders representing 3 categories: **Project-Internal**, **Organization-Internal**, and **External**.
2.  Create a communication plan matrix for each stakeholder including: Information, Purpose, Frequency, Method or Format, and Responsible person.

- **Request 4 (30% - 3.0 Điểm): Project Milestones & Activity Sequencing**
  Provide at least three main project milestones that will be used to mark project progress. Select one project milestone that you know best, then determine at least **ten activities** and determine their sequences with relevant dependency relationships (**FS, SS, SF, FF**) among them to complete that milestone.

---

## PHẦN II: HƯỚNG DẪN CÁCH LÀM & KHUNG TRẢ LỜI CHUẨN EOS

---

### HƯỚNG DẪN REQUEST 1: PROJECT CHARTER STATEMENT (2.0 Điểm)

#### 1. Tiêu chí giám khảo chấm điểm:

- Tên dự án rõ ràng, đúng format chuẩn ngành phần mềm.
- Lý do thực hiện (Justification) nêu được: Thực trạng/nỗi đau cũ $\rightarrow$ Mục tiêu giải quyết $\rightarrow$ Giá trị kinh doanh/học thuật đem lại (định lượng được: giảm thời gian, tăng hiệu suất...).
- Liệt kê tối thiểu 2-3 yêu cầu cấp cao mô tả chức năng cốt lõi (không viết vụn vặt tính năng phụ).

#### 2. Khung sườn cấu trúc cần trả lời:

```text
1. Project Name: [Tên tổ chức/Thương hiệu] + [Chức năng cốt lõi] + [Nền tảng/Hệ thống]
 Ví dụ: FPT University Smart Campus Study Space & Equipment Booking System (FPTU SpaceHub)

2. Project Purpose / Justification:
 - Thực trạng (Pain Points): Quy trình hiện tại đang làm thủ công thế nào? Gây lãng phí hoặc tắc nghẽn gì?
 - Mục đích (Purpose): Xây dựng hệ thống gì trên nền tảng nào?
 - Giá trị mang lại (Value): Giảm bao nhiêu % thời gian xử lý? Phục vụ bao nhiêu người dùng? Tăng bao nhiêu % hiệu suất sử dụng?

3. High-Level Requirements (Nêu ít nhất 2 - 3 yêu cầu):
 - Yêu cầu 1: Phân hệ dành cho Người dùng cuối (Tra cứu, đặt chỗ, điểm danh QR...).
 - Yêu cầu 2: Phân hệ Nghiệp vụ quản lý (Quản lý thiết bị, duyệt mượn trả, nhắc hạn tự động...).
 - Yêu cầu 3: Phân hệ Quản trị & Báo cáo (Admin Dashboard, thống kê tần suất sử dụng...).
```

---

### HƯỚNG DẪN REQUEST 2: COST & BUDGET PLAN (2.0 Điểm)

#### 1. Tiêu chí giám khảo chấm điểm:

- Đủ ít nhất **5 hạng mục chi phí** (khuyên dùng: 4 hạng mục chi tiêu kỹ thuật + 1 mục Quỹ dự phòng _Contingency Reserve_).
- Mỗi mục **bắt buộc đủ 5 thông số**: Tên, Mô tả, Phương pháp ước lượng kèm công thức tính rõ ràng, Số tiền, Người phụ trách.

#### 2. Khung phân bổ 5 loại chi phí chuẩn IT/SE:

|  STT  | Tên loại chi phí                         | Phương pháp ước lượng khuyên dùng | Công thức tính chi tiết                                                                 |
| :---: | :--------------------------------------- | :-------------------------------- | :-------------------------------------------------------------------------------------- |
| **1** | **Labor Cost** (Lương đội dự án)         | **Bottom-up Estimation**          | $\sum (\text{Số lượng nhân sự} \times \text{Số giờ làm} \times \text{Đơn giá/giờ})$     |
| **2** | **Cloud Infrastructure** (Máy chủ, CSDL) | **Parametric Estimation**         | $\text{Đơn giá gói dịch vụ/tháng} \times \text{Số tháng sử dụng}$                       |
| **3** | **Software & Tooling Licenses**          | **Parametric Estimation**         | $\text{Đơn giá license/user/tháng} \times \text{Số lượng users} \times \text{Số tháng}$ |
| **4** | **Hardware / Training / Outsourcing**    | **Analogous / Vendor Bid**        | Tham khảo báo giá thị trường hoặc dự án tương đương                                     |
| **5** | **Contingency Reserve** (Quỹ dự phòng)   | **Reserve Analysis**              | Trích $8\% - 10\%$ trên tổng chi phí các mục trên                                       |

#### 3. Mẫu Text format nộp bài trên EOS:

```text
Cost Item [X]: [Tên chi phí]
- Description: [Mô tả cụ thể gồm ai/cái gì, số lượng bao nhiêu, sử dụng trong mấy tháng]
- Estimation Method: [Bottom-up / Parametric / Analogous / Reserve Analysis] kèm công thức: [Số lượng x Đơn giá]
- Estimated Cost: [Số tiền USD hoặc VNĐ]
- Person in Charge: [Vai trò người ký duyệt/chi trả, ví dụ: Project Manager, IT Lead, Finance Dept]
```

---

### HƯỚNG DẪN REQUEST 3: COMMUNICATION PLAN (3.0 Điểm)

#### 1. Tiêu chí giám khảo chấm điểm:

- Phân loại chính xác **3 nhóm Stakeholder**:
- **Project-Internal:** Thành viên trực tiếp trong đội dự án (PM, Devs, QA, UI/UX...).
- **Organization-Internal:** Các phòng ban nội bộ tổ chức/trường học (Ban Quản lý CSVC, Phòng Đào tạo, Phòng Kế toán...).
- **External:** Bên ngoài dự án và tổ chức (Khách hàng, Người dùng cuối, Hội sinh viên, Nhà cung cấp đối tác...).
- Bảng giao tiếp phải đủ **5 cột**: Thông tin trao đổi, Mục đích, Tần suất, Phương thức/Công cụ, Người chịu trách nhiệm.

#### 2. Mẫu khung Kế hoạch Giao tiếp chuẩn:

```text
1. Project-Internal Stakeholder: Development Team (Devs & QA)
 - Information: Tiến độ công việc hàng ngày, Task backlog, rào cản kỹ thuật (Blockers), lỗi phát sinh.
 - Purpose: Đồng bộ công việc giữa các thành viên, tháo gỡ khó khăn kỹ thuật tức thời.
 - Frequency: Hàng ngày (Daily).
 - Method / Format: Daily Standup Meeting (15 phút trực tiếp / MS Teams) + Bảng Jira/Trello.
 - Responsible: Project Manager (PM).

2. Organization-Internal Stakeholder: Ban Quản trị / Phòng ban chức năng nội bộ trường
 - Information: Báo cáo tiến độ Milestone, tình hình sử dụng ngân sách, yêu cầu phối hợp hạ tầng.
 - Purpose: Đảm bảo phần mềm tương thích quy trình nghiệp vụ và kiểm soát chi tiêu đúng định mức.
 - Frequency: Hàng tuần hoặc 2 tuần/lần (Weekly / Bi-weekly).
 - Method / Format: Báo cáo tóm tắt qua Email + Họp giao ban quản lý (Status Meeting).
 - Responsible: Project Manager & Business Analyst (BA).

3. External Stakeholder: Đại diện Người dùng cuối (Sinh viên / Giảng viên / Khách hàng)
 - Information: Bản demo tính năng, hướng dẫn sử dụng thử nghiệm, khảo sát ý kiến trải nghiệm UAT.
 - Purpose: Đánh giá độ thân thiện giao diện UI/UX và tiếp nhận phản hồi cải tiến trước khi Go-Live.
 - Frequency: 2 tuần/lần hoặc theo từng đợt Sprint Review (Bi-weekly / Monthly).
 - Method / Format: Workshop demo thực tế + Biểu mẫu khảo sát online (Google Forms).
 - Responsible: Lead BA & UI/UX Designer.
```

---

### HƯỚNG DẪN REQUEST 4: MILESTONES & 10 ACTIVITIES (3.0 Điểm)

#### 1. Tiêu chí giám khảo chấm điểm:

- Nêu đủ **ít nhất 3 Milestones** lớn đại diện cho các cổng kiểm soát tiến độ (Giai đoạn Khởi tạo/Thiết kế $\rightarrow$ Giai đoạn Lập trình cốt lõi $\rightarrow$ Giai đoạn Nghiệm thu UAT/Go-live).
- Chọn 1 Milestone và liệt kê **đủ 10 activities cụ thể** (được đánh mã $A_1 \rightarrow A_{10}$).
- Phải chỉ ra **mối quan hệ tiền nhiệm logic** giữa các hoạt động (bắt buộc dùng ký hiệu: **FS, SS, FF**; giải thích rõ vì sao có quan hệ đó).

#### 2. Ý nghĩa 3 loại quan hệ phụ thuộc phổ biến:

- **FS (Finish-to-Start):** Hoạt động trước xong thì hoạt động sau mới được bắt đầu (Quy tắc tuần tự: _Phải xong CSDL mới viết API_).
- **SS (Start-to-Start):** Hoạt động sau bắt đầu song song cùng lúc hoặc ngay sau khi hoạt động trước khởi động (Quy tắc gối đầu: _Lập trình giao diện Frontend song song khi Backend vừa dựng API được 2 ngày_).
- **FF (Finish-to-Finish):** Hoạt động sau chỉ hoàn thành khi hoạt động trước đã kết thúc (Quy tắc đóng gói: _Kiểm thử toàn bộ hệ thống chỉ hoàn tất khi cả Web và App đã code xong_).

#### 3. Khung sườn 10 Tasks chuẩn giai đoạn Lập trình & Tích hợp (Core Development):

```text
- Milestone 1: Phê duyệt Tài liệu Đặc tả Yêu cầu & Thiết kế Hệ thống (SRS & Design Sign-off).
- Milestone 2: Hoàn thành Lập trình các Module Cốt lõi & Tích hợp Hệ thống (Core System Development).
- Milestone 3: Hoàn tất Kiểm thử Chấp nhận Người dùng & Triển khai Go-Live (UAT & Production Release).

Chi tiết 10 Hoạt động của Milestone 2:
A1: Thiết lập môi trường lập trình và khởi tạo cơ sở dữ liệu (Predecessor: Start).
A2: Xây dựng Module Xác thực người dùng & Phân quyền (Predecessor: A1 -> Quan hệ: FS).
A3: Phát triển giao diện màn hình chính của Người dùng (Predecessor: A1 -> Quan hệ: FS).
A4: Xây dựng API xử lý nghiệp vụ cốt lõi ở Backend (Predecessor: A2 -> Quan hệ: FS).
A5: Tích hợp dữ liệu API Backend vào giao diện Frontend (Predecessor: A4 -> Quan hệ: SS).
A6: Xây dựng Module Nghiệp vụ phụ / Quản lý danh mục (Predecessor: A2 -> Quan hệ: FS).
A7: Tích hợp Dịch vụ bên thứ ba (Cổng thanh toán / QR Code / Bản đồ) (Predecessor: A3 -> Quan hệ: FS).
A8: Xây dựng cơ chế Xử lý sự cố và Webhook thông báo (Predecessor: A7 -> Quan hệ: SS).
A9: Phát triển Trang Quản trị viên (Admin Web Dashboard) (Predecessor: A4, A6 -> Quan hệ: FF).
A10: Thực hiện Kiểm thử Tích hợp Toàn hệ thống (Integration Test) (Predecessor: A5, A8, A9 -> Quan hệ: FS).
```
