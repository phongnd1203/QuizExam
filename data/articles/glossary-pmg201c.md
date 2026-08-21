# BÁCH KHOA TOÀN THƯ THUẬT NGỮ QUẢN TRỊ DỰ ÁN PMG201c

### _(PMG201c Project Management Dictionary & Pocket Knowledge Base)_

---

> **Mục tiêu tài liệu:** Cung cấp hệ thống tra cứu thuật ngữ, định nghĩa chuẩn PMBOK & IT Project Management, công thức toán học, từ viết tắt và hướng dẫn áp dụng thực tế cho kỳ thi Practical Exam (PE) môn PMG201c tại FPT University.

```
┌──────────────────────────────────────────────────────────────────────────────┐
│ MỤC LỤC CHÍNH │
├──────────────────────────────────────────────────────────────────────────────┤
│ PHẦN 1: BẢNG TRA CỨU VIẾT TẮT NHANH (QUICK ACRONYMS INDEX) │
│ PHẦN 2: TỪ ĐIỂN THUẬT NGỮ THEO MIỀN KIẾN THỨC (KNOWLEDGE DOMAINS) │
│ • Miền 1: Khởi tạo & Tổng quan Dự án (Project Initiation & Overview) │
│ • Miền 2: Cấu trúc Phân chia Công việc & Phạm vi (WBS & Scope Management) │
│ • Miền 3: Quản lý Tiến độ & Sơ đồ Mạng (Schedule & CPM) │
│ • Miền 4: Quản lý Chi phí & Dự toán Ngân sách (Cost & Budget Estimation) │
│ • Miền 5: Quản trị Giá trị Thu được (Earned Value Management - EVM) │
│ • Miền 6: Ma trận RACI & Quản lý Các bên Liên quan (Stakeholders) │
│ • Miền 7: Kế hoạch Giao tiếp (Communication Management) │
│ • Miền 8: Quản lý Rủi ro (Risk Management) │
│ • Miền 9: Quản lý Chất lượng & Đóng Dự án (Quality & Project Closing) │
│ PHẦN 3: TỪ ĐIỂN ANH - VIỆT A-Z TOÀN DIỆN (A-Z COMPREHENSIVE GLOSSARY) │
│ PHẦN 4: BẢNG TỔNG HỢP CÔNG THỨC TOÁN HỌC & QUY TẮC PHÒNG THI EOS │
└──────────────────────────────────────────────────────────────────────────────┘
```

---

# PHẦN 1: BẢNG TRA CỨU VIẾT TẮT NHANH (QUICK ACRONYMS INDEX)

| Viết tắt   | Tên đầy đủ tiếng Anh                                       | Tên tiếng Việt & Ý nghĩa cốt lõi                                                                                                 |
| :--------- | :--------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------- |
| **AC**     | Actual Cost                                                | Chi phí thực tế đã chi ra tính đến thời điểm đánh giá.                                                                           |
| **AON**    | Activity-On-Node                                           | Phương pháp biểu diễn sơ đồ mạng với công việc đặt tại nút (node).                                                               |
| **BA**     | Business Analyst                                           | Chuyên viên phân tích nghiệp vụ, cầu nối giữa khách hàng và kỹ thuật.                                                            |
| **BAC**    | Budget at Completion                                       | Tổng ngân sách dự toán ban đầu được phê duyệt của toàn bộ dự án.                                                                 |
| **BCWP**   | Budgeted Cost of Work Performed                            | Chi phí kế hoạch của khối lượng đã thực hiện (tương đương **EV**).                                                               |
| **BCWS**   | Budgeted Cost of Work Scheduled                            | Chi phí kế hoạch của khối lượng dự kiến theo lịch (tương đương **PV**).                                                          |
| **CCB**    | Change Control Board                                       | Hội đồng kiểm soát thay đổi (phê duyệt các yêu cầu CR).                                                                          |
| **CI/CD**  | Continuous Integration / Continuous Deployment             | Tích hợp liên tục và triển khai liên tục mã nguồn tự động.                                                                       |
| **COCOMO** | Constructive Cost Model                                    | Mô hình ước tính chi phí phần mềm dựa trên số dòng mã (KLOC).                                                                    |
| **CPI**    | Cost Performance Index                                     | Chỉ số hiệu suất chi phí: $CPI = EV / AC$ ($>1$: tốt, $<1$: vượt ngân sách).                                                     |
| **CPM**    | Critical Path Method                                       | Phương pháp đường găng xác định thời gian tối thiểu hoàn thành dự án.                                                            |
| **CR**     | Change Request                                             | Yêu cầu thay đổi phạm vi, tiến độ hoặc ngân sách.                                                                                |
| **CV**     | Cost Variance                                              | Độ lệch chi phí: $CV = EV - AC$ ($>0$: tiết kiệm, $<0$: bội chi).                                                                |
| **DAC**    | Duration at Completion                                     | Tổng thời lượng kế hoạch ban đầu của toàn bộ dự án.                                                                              |
| **DevOps** | Development & Operations                                   | Văn hóa/quy trình kết hợp phát triển phần mềm và vận hành hạ tầng.                                                               |
| **EAC**    | Estimate at Completion                                     | Ước tính tổng chi phí khi hoàn thành toàn bộ dự án: $EAC = BAC / CPI$.                                                           |
| **EF**     | Early Finish                                               | Thời điểm sớm nhất mà một công việc có thể kết thúc.                                                                             |
| **EOS**    | Exam Online System                                         | Hệ thống phần mềm tổ chức thi PE/Final tại FPT University.                                                                       |
| **ES**     | Early Start                                                | Thời điểm sớm nhất mà một công việc có thể bắt đầu.                                                                              |
| **ETC**    | Estimate to Complete                                       | Ước tính chi phí còn lại cần bỏ ra để hoàn thành nốt dự án: $ETC = EAC - AC$.                                                    |
| **EV**     | Earned Value                                               | Giá trị thu được từ khối lượng công việc đã thực tế hoàn thành.                                                                  |
| **EVM**    | Earned Value Management                                    | Kỹ thuật quản trị tích hợp Phạm vi - Tiến độ - Chi phí.                                                                          |
| **FF**     | Finish-to-Finish                                           | Mối quan hệ: Việc sau kết thúc phụ thuộc việc trước kết thúc.                                                                    |
| **FS**     | Finish-to-Start                                            | Mối quan hệ phổ biến nhất: Việc trước xong thì việc sau mới được bắt đầu.                                                        |
| **KLOC**   | Kilo Lines of Code                                         | Đơn vị đo độ dài phần mềm (nghìn dòng lệnh).                                                                                     |
| **LF**     | Late Finish                                                | Thời điểm muộn nhất công việc phải hoàn thành để không làm chậm dự án.                                                           |
| **LS**     | Late Start                                                 | Thời điểm muộn nhất công việc phải bắt đầu để không làm chậm dự án.                                                              |
| **MVP**    | Minimum Viable Product                                     | Sản phẩm khả thi tối thiểu mang lại giá trị nhanh nhất để thu thập phản hồi.                                                     |
| **OBS**    | Organizational Breakdown Structure                         | Cấu trúc phân rã tổ chức/phòng ban thực hiện dự án.                                                                              |
| **PDM**    | Precedence Diagramming Method                              | Phương pháp lập sơ đồ mạng công việc theo quan hệ tiền nhiệm.                                                                    |
| **PERT**   | Program Evaluation and Review Technique                    | Kỹ thuật ước tính 3 điểm dựa trên phân phối xác suất beta.                                                                       |
| **PM**     | Project Manager                                            | Quản trị viên dự án (người chịu trách nhiệm toàn diện về dự án).                                                                 |
| **PMBOK**  | Project Management Body of Knowledge                       | Bộ hướng dẫn các chuẩn mực kiến thức quản lý dự án quốc tế của PMI.                                                              |
| **PMI**    | Project Management Institute                               | Viện Quản lý Dự án Quốc tế Hoa Kỳ.                                                                                               |
| **PV**     | Planned Value                                              | Giá trị kế hoạch của khối lượng công việc dự kiến phải làm tại mốc $t$.                                                          |
| **QA**     | Quality Assurance                                          | Đảm bảo chất lượng (tập trung vào quy trình sản xuất phần mềm).                                                                  |
| **QC**     | Quality Control                                            | Kiểm soát chất lượng (tập trung vào kiểm tra sản phẩm đầu ra).                                                                   |
| **RACI**   | Responsible - Accountable - Consulted - Informed           | Ma trận phân công trách nhiệm công việc trong dự án.                                                                             |
| **RBS**    | Risk Breakdown Structure                                   | Cấu trúc phân rã rủi ro theo nguồn gốc/chuyên mục.                                                                               |
| **RFP**    | Request for Proposal                                       | Yêu cầu báo giá/đề xuất giải pháp gửi đến các nhà thầu.                                                                          |
| **ROI**    | Return on Investment                                       | Tỷ suất hoàn vốn đầu tư: $(\text{Lợi nhuận ròng} / \text{Chi phí}) \times 100\%$.                                                |
| **SDLC**   | Software Development Life Cycle                            | Vòng đời phát triển phần mềm (Khảo sát $\rightarrow$ Thiết kế $\rightarrow$ Lập trình $\rightarrow$ Test $\rightarrow$ Release). |
| **SF**     | Start-to-Finish                                            | Mối quan hệ: Việc trước bắt đầu thì việc sau mới được kết thúc.                                                                  |
| **SLA**    | Service Level Agreement                                    | Thỏa thuận cam kết mức độ dịch vụ và chất lượng với khách hàng/vendor.                                                           |
| **SMART**  | Specific - Measurable - Achievable - Relevant - Time-bound | Tiêu chuẩn thiết lập mục tiêu dự án khoa học và khả thi.                                                                         |
| **SPI**    | Schedule Performance Index                                 | Chỉ số hiệu suất tiến độ: $SPI = EV / PV$ ($>1$: nhanh, $<1$: chậm tiến độ).                                                     |
| **SRS**    | Software Requirement Specification                         | Tài liệu đặc tả yêu cầu kỹ thuật và nghiệp vụ phần mềm.                                                                          |
| **SS**     | Start-to-Start                                             | Mối quan hệ: Việc sau có thể bắt đầu ngay khi việc trước vừa bắt đầu.                                                            |
| **SSO**    | Single Sign-On                                             | Cơ chế đăng nhập một lần (Google OAuth, Microsoft Azure AD...).                                                                  |
| **SV**     | Schedule Variance                                          | Độ lệch tiến độ theo tiền tệ: $SV = EV - PV$ ($>0$: vượt tiến độ, $<0$: chậm trễ).                                               |
| **TCPI**   | To-Complete Performance Index                              | Chỉ số hiệu suất cần đạt trong phần còn lại để về đích đúng ngân sách.                                                           |
| **TF**     | Total Float (hoặc Total Slack)                             | Độ trôi tổng thể: Khoảng thời gian công việc được phép trễ mà không ảnh hưởng hạn chót dự án.                                    |
| **UAT**    | User Acceptance Testing                                    | Kiểm thử chấp nhận người dùng cuối trước khi ký biên bản nghiệm thu.                                                             |
| **UI/UX**  | User Interface / User Experience                           | Giao diện người dùng và Trải nghiệm tương tác người dùng.                                                                        |
| **VAC**    | Variance at Completion                                     | Chênh lệch ngân sách khi hoàn thành: $VAC = BAC - EAC$.                                                                          |
| **WBS**    | Work Breakdown Structure                                   | Cấu trúc phân rã công việc theo thứ bậc sản phẩm bàn giao.                                                                       |

---

# PHẦN 2: TỪ ĐIỂN THUẬT NGỮ THEO MIỀN KIẾN THỨC

```
 ┌─────────────────────────────────────────────────────────────┐
 │ 9 MIỀN KIẾN THỨC CỐT LÕI PMG201c │
 └──────────────┬──────────────────────────────┬───────────────┘
 │ │
 ┌────────────────────────┼──────────────────────────────┼────────────────────────┐

┌──────────────────┐ ┌──────────────────┐ ┌──────────────────┐ ┌──────────────────┐
│ INITIATION │ │ WBS & SCOPE │ │ SCHEDULE & CPM │ │ COST & BUDGET │
│ Charter & Roles │ │ SMART & In/Out │ │ Forward/Backward │ │ 6 Cost & 5 Est │
└──────────────────┘ └──────────────────┘ └──────────────────┘ └──────────────────┘
 │ │ │ │
 ├────────────────────────┼──────────────────────────────┼────────────────────────┤

┌──────────────────┐ ┌──────────────────┐ ┌──────────────────┐ ┌──────────────────┐
│ EVM CALCULATE │ │ RACI & STAKEHOLD │ │ COMMUNICATION │ │ RISK MANAGEMENT │
│ PV, EV, AC, SPI │ │ Grid & 4 Roles │ │ 3 Groups Matrix │ │ 4 Action Matrix │
└──────────────────┘ └──────────────────┘ └──────────────────┘ └──────────────────┘
```

---

## ️ MIỀN 1: KHỞI TẠO & TỔNG QUAN DỰ ÁN (PROJECT INITIATION & OVERVIEW)

### 1. Project (Dự án)

- **Định nghĩa:** Một nỗ lực tạm thời (_temporary endeavor_) được tiến hành để tạo ra một sản phẩm, dịch vụ hoặc kết quả duy nhất (_unique product, service, or result_).
- **Đặc tính:** Có điểm bắt đầu và kết thúc xác định, có mục tiêu cụ thể, chịu ràng buộc về tài nguyên.

### 2. Project Charter (Điều lệ Dự án)

- **Định nghĩa:** Văn bản chính thức do Nhà tài trợ (Sponsor) hoặc cấp quản lý cao nhất ban hành, phê duyệt sự tồn tại của dự án và trao quyền cho Project Manager (PM) sử dụng tài nguyên của tổ chức.
- **Các thành phần bắt buộc trong bài thi PE:**

1.  `Project Name`: Tên dự án rõ ràng, định danh phạm vi và công nghệ.
2.  `Project Purpose / Justification`: Bối cảnh thực trạng, lý do cấp thiết cần làm dự án và giá trị kinh doanh/xã hội mang lại.
3.  `High-Level Requirements`: Ít nhất 2-3 yêu cầu nghiệp vụ / tính năng kỹ thuật cấp cao.
4.  `Project Constraints`: Ràng buộc về Phạm vi (Scope), Thời gian (Time/DAC), Chi phí (Cost/BAC) và Tiêu chuẩn chất lượng (Quality).

### 3. Project Sponsor (Nhà tài trợ Dự án)

- **Định nghĩa:** Cá nhân hoặc cơ quan cấp vốn, phê duyệt Điều lệ dự án và bảo trợ nguồn lực cao nhất (ví dụ: _Ban Giám hiệu Trường ĐH, Cục Xuất bản, UBND Quận, Giám đốc khối..._).

### 4. Triple Constraint / Iron Triangle (Tam giác Ràng buộc Dự án)

- **Định nghĩa:** Mô hình 3 ràng buộc nền tảng của mọi dự án: **Scope (Phạm vi) – Time (Thời gian) – Cost (Chi phí)**, đặt trong trọng tâm cân bằng của **Quality (Chất lượng)**. Thay đổi bất kỳ một yếu tố nào sẽ trực tiếp tác động đến 2 yếu tố còn lại.

### 5. Organizational Structures (Cấu trúc Tổ chức Dự án)

- **Functional Organization (Tổ chức theo chức năng):** Chia theo phòng ban nghiệp vụ (IT, Kế toán, Marketing). Quyền lực của PM rất thấp hoặc chỉ đóng vai trò điều phối viên (_Coordinator_).
- **Projectized Organization (Tổ chức theo dự án):** Mọi nhân sự được gom về dự án độc quyền. Quyền lực của PM ở mức cao nhất (_Total Authority_).
- **Matrix Organization (Tổ chức Ma trận):** Kết hợp giữa phòng ban chức năng và dự án.
- _Weak Matrix (Ma trận yếu):_ PM có quyền hạn thấp, tương tự tổ chức chức năng.
- _Balanced Matrix (Ma trận cân bằng):_ PM chia sẻ quyền hạn ngang hàng với Trưởng phòng chức năng (_Functional Manager_).
- _Strong Matrix (Ma trận mạnh):_ PM có quyền hạn rất cao trong quản lý ngân sách và phân công công việc, tối ưu nhất cho các dự án đa chuyên môn.

---

## MIỀN 2: CẤU TRÚC PHÂN CHIA CÔNG VIỆC & PHẠM VI (WBS & SCOPE)

### 1. Work Breakdown Structure - WBS (Cấu trúc Phân rã Công việc)

- **Định nghĩa:** Sự phân rã thứ bậc toàn bộ khối lượng công việc của dự án thành các phần nhỏ hơn, hướng đến các kết quả/sản phẩm bàn giao cụ thể (_Deliverable-oriented hierarchical decomposition_).
- **Quy tắc 100% Rule:** WBS phải bao gồm đầy đủ $100\%$ khối lượng công việc của dự án, không thừa, không thiếu.
- **4 Cấp bậc chuẩn (Levels Hierarchy):**
- `Level 1 (Dự án tổng thể)`: Tên dự án.
- `Level 2 (Các giai đoạn - Phases)`: Initiation, Requirements, Design, Development, Testing, Deployment, Closing.
- `Level 3 (Gói công việc / Sản phẩm con - Work Packages)`: UI Design, Core Database, Backend API, Frontend Module.
- `Level 4 (Hoạt động / Nhiệm vụ cụ thể - Tasks/Activities)`: Viết script schema, tạo API authentication, test giao diện.

### 2. SMART Goals (Mục tiêu chuẩn SMART)

- **Specific (Cụ thể):** Chỉ rõ đối tượng, tính năng, hành động cần làm.
- **Measurable (Đo lường được):** Có số liệu định lượng, chỉ số KPI cụ thể (ví dụ: _tăng 20% doanh thu, xử lý 1 triệu request/giây, độ chính xác $\ge 95\%$_).
- **Achievable (Khả thi):** Nằm trong năng lực công nghệ và nhân sự hiện có.
- **Relevant (Phù hợp):** Đóng góp trực tiếp vào mục tiêu chiến lược của tổ chức/dự án.
- **Time-bound (Có thời hạn):** Có mốc thời gian hoàn thành rõ ràng (ví dụ: _trước tháng thứ 5 của dự án_).

### 3. Project Scope Boundary (Ranh giới Phạm vi Dự án)

- **In-Scope (Hạng mục trong phạm vi):** Tất cả các công việc, tính năng, sản phẩm đã cam kết trong hợp đồng/đặc tả mà đội ngũ dự án có trách nhiệm thực hiện.
- **Out-of-Scope (Hạng mục ngoài phạm vi):** Những công việc, nền tảng, tính năng KHÔNG thuộc dự án nhằm kiểm soát kỳ vọng khách hàng và chống rủi ro phình to phạm vi.
- **Scope Creep (Bùng nổ phạm vi):** Hiện tượng các yêu cầu bổ sung liên tục phát sinh mà không qua quy trình đánh giá tác động và phê duyệt ngân sách/thời gian.

---

## ️ MIỀN 3: QUẢN LÝ TIẾN ĐỘ & SƠ ĐỒ MẠNG (SCHEDULE & CPM)

### 1. Activity / Task (Hoạt động / Công việc)

- **Định nghĩa:** Một đơn vị công việc nhỏ nhất trong dự án có thời lượng ước tính, chi phí và nhân sự thực hiện cụ thể.

### 2. Milestone (Cột mốc Dự án)

- **Định nghĩa:** Điểm đánh dấu hoàn thành một sự kiện, sản phẩm hoặc giai đoạn quan trọng trong dự án.
- **Đặc tính:** **Thời lượng của Milestone luôn bằng 0 (Duration = 0)**.

### 3. Logical Relationships / Dependencies (Mối quan hệ Phụ thuộc giữa các Công việc)

- **Finish-to-Start (FS):** Hoạt động A phải kết thúc thì Hoạt động B mới được bắt đầu (phổ biến nhất, chiếm $90\%$ các bài thi).
- **Start-to-Start (SS):** Hoạt động B có thể bắt đầu ngay khi Hoạt động A bắt đầu (thực hiện song song).
- **Finish-to-Finish (FF):** Hoạt động B không thể kết thúc chừng nào Hoạt động A chưa kết thúc (hoàn thành đồng thời).
- **Start-to-Finish (SF):** Hoạt động B không thể kết thúc cho đến khi Hoạt động A bắt đầu (rất hiếm gặp).

### 4. Critical Path Method - CPM (Phương pháp Đường găng)

- **Critical Path (Đường găng):** Chuỗi công việc liên tiếp từ điểm bắt đầu (_Start_) đến điểm kết thúc (_End_) có **tổng thời lượng dài nhất**.
- **Minimum Project Duration (Thời gian tối thiểu hoàn thành dự án):** Bằng chính độ dài của Đường găng dài nhất.
- **Critical Activity (Hoạt động găng):** Mọi hoạt động nằm trên đường găng (có $Float = 0$). Bất kỳ sự chậm trễ nào tại các hoạt động này đều làm trễ hạn hoàn thành của toàn bộ dự án.

### 5. Thuật toán Forward Pass & Backward Pass

- **Early Start (ES) & Early Finish (EF):**
- $ES_{\text{Start}} = 0$
- $EF = ES + \text{Duration}$
- Tại điểm hội tụ nhiều công việc trước: $ES_{\text{sau}} = \max(EF_{\text{tất cả công việc liền trước}})$
- **Late Finish (LF) & Late Start (LS):**
- $LF_{\text{End}} = \text{Độ dài Critical Path}$
- $LS = LF - \text{Duration}$
- Tại điểm rẽ nhiều công việc sau (khi lùi): $LF_{\text{trước}} = \min(LS_{\text{tất cả công việc liền sau}})$
- **Total Float / Total Slack (Thời gian trôi dự phòng):**
  $$\mathbf{Float = LS - ES = LF - EF}$$
- $Float = 0 \implies$ Hoạt động thuộc đường găng (**Critical Activity**).
- $Float > 0 \implies$ Hoạt động có tính linh hoạt (**Flexibility**). Hoạt động có $Float$ lớn nhất là hoạt động có **Most Flexibility**.

### 6. Schedule Compression Techniques (Kỹ thuật Rút ngắn / Nén Tiến độ)

- **Crashing (Nén tiến độ):** Bổ sung thêm nguồn lực (tuyển thêm lập trình viên, làm thêm giờ OT, thuê thiết bị tốc độ cao) để rút ngắn thời gian các hoạt động găng. $\rightarrow$ **Hệ quả: TĂNG CHI PHÍ DỰ ÁN**.
- **Fast-tracking (Thực hiện song song):** Chuyển các công việc vốn thực hiện tuần tự sang làm gối đầu hoặc làm song song cùng lúc. $\rightarrow$ **Hệ quả: TĂNG RỦI RO LỖI & LÀM LẠI (REWORK)**.
- **De-scoping (Cắt giảm phạm vi):** Lược bỏ một số yêu cầu không thiết yếu khi có sự phê duyệt của khách hàng để hoàn thành đúng hạn.

---

## MIỀN 4: QUẢN LÝ CHI PHÍ & DỰ TOÁN (COST & BUDGET ESTIMATION)

### 1. 6 Hạng mục Chi phí Chính trong Bài thi PE (Main Cost Items)

1. **Labor Cost (Chi phí nhân sự):** Chi phí trả lương/thù lao theo giờ hoặc tháng cho PM, BA, Developers, QA Testers, Designers, KOLs, nhân sự hiện trường.
2. **Software & Tooling Licenses (Bản quyền công cụ & phần mềm):** Bản quyền IntelliJ, GitHub Enterprise, Jira, Figma, Cloud Server (AWS/Azure), OpenAI API.
3. **Materials, Equipment & Facilities (Vật tư, thiết bị & hạ tầng vật lý):** Mua/thuê máy chủ vật lý, thiết bị test mobile, dựng khung gian hàng, âm thanh ánh sáng, in ấn tài liệu.
4. **Training Cost (Chi phí đào tạo):** Chi phí thuê chuyên gia hướng dẫn công nghệ mới (AI, Microservices) hoặc đào tạo người dùng cuối sử dụng phần mềm.
5. **Overhead / Operational Expenses (Chi phí vận hành chung):** Tiền thuê văn phòng, điện nước, internet, chi phí dọn vệ sinh, bảo vệ an ninh.
6. **Contingency Reserve (Quỹ dự phòng rủi ro):** Ngân sách dự phòng cho các phát sinh đột xuất, thường trích $5\% - 10\%$ tổng chi phí dự toán.

### 2. 5 Phương pháp Ước lượng Chi phí (Estimation Methods)

1. **Bottom-up Estimation (Ước lượng từ dưới lên):** Chia nhỏ dự án thành từng task, tính toán chi phí chi tiết từng task theo công thức:
   $$\text{Chi phí} = \text{Số lượng nhân sự} \times \text{Số giờ làm việc} \times \text{Đơn giá/giờ}$$
   _Thích hợp nhất cho: Labor Cost._
2. **Parametric Estimation (Ước lượng tham số):** Sử dụng quan hệ thống kê giữa dữ liệu lịch sử và biến số dự án:
   $$\text{Chi phí} = \text{Số lượng đơn vị} \times \text{Đơn giá/đơn vị}$$
   _Thích hợp nhất cho: Software Licenses, Thuê máy chủ Cloud, Marketing Ads._
3. **Analogous Estimation / Top-down (Ước lượng tương tự):** Dựa trên chi phí thực tế của các dự án tương tự trong quá khứ. Nhanh nhưng độ chính xác phụ thuộc tính tương đồng.
   _Thích hợp nhất cho: Materials, Equipment, Overhead._
4. **Expert Judgment (Tham vấn chuyên gia):** Lấy ý kiến từ các kỹ sư trưởng, cố vấn kỹ thuật giàu kinh nghiệm hoặc chuyên gia độc lập.
   _Thích hợp nhất cho: Training Cost, Kiến trúc công nghệ mới._
5. **Reserve Analysis (Phân tích quỹ dự phòng):** Trích một tỷ lệ phần trăm cố định ($5\% - 10\%$) trên tổng ngân sách dự án để tạo quỹ dự phòng rủi ro.
   _Thích hợp nhất cho: Contingency Reserve._
6. **Vendor Bid Analysis (Phân tích báo giá nhà thầu):** Lấy báo giá cạnh tranh từ tối thiểu 3 nhà thầu/agency bên ngoài để chọn ra phương án tối ưu.
   _Thích hợp nhất cho: Thuê ngoài Outsourcing, Thi công sự kiện._

---

## MIỀN 5: QUẢN LÝ GIÁ TRỊ THU ĐƯỢC (EARNED VALUE MANAGEMENT - EVM)

### 1. 3 Tham số Nền tảng

- **Planned Value (PV - Giá trị Kế hoạch):** Giá trị ngân sách phân bổ cho khối lượng công việc dự kiến phải hoàn thành tính đến thời điểm đánh giá $t$:
  $$\mathbf{PV = \% \text{Tiến độ kế hoạch} \times BAC = \frac{t}{DAC} \times BAC}$$
- **Earned Value (EV - Giá trị Thu được Thực tế):** Giá trị ngân sách tương ứng với khối lượng công việc thực tế đã hoàn thành được tại thời điểm $t$:
  $$\mathbf{EV = \% \text{Khối lượng thực tế hoàn thành} \times BAC}$$
- **Actual Cost (AC - Chi phí Thực tế):** Tổng số tiền thực tế đã chi tiêu để làm được khối lượng công việc tính đến thời điểm $t$.

### 2. Các Chỉ số Đánh giá Độ lệch & Hiệu suất

```
┌─────────────────────────────────────────────────────────────────────────────┐
│ MA TRẬN ĐÁNH GIÁ CHỈ SỐ EVM │
├──────────────────────┬─────────────────────────────┬────────────────────────┤
│ CHỈ SỐ │ KẾT QUẢ > 1 (HOẶC > 0)│ KẾT QUẢ < 1 (HOẶC < 0)│
├──────────────────────┼─────────────────────────────┼────────────────────────┤
│ **Cost (CV / CPI)** │ **Dưới ngân sách (Tốt)** │ **Vượt ngân sách (Xấu)**│
│ • $CV = EV - AC$ │ $CV > 0$: Tiết kiệm chi phí │ $CV < 0$: Bội chi tiền │
│ • $CPI = EV / AC$ │ $CPI > 1.0$: Hiệu quả vốn cao│ $CPI < 1.0$: Tiêu hao vốn│
├──────────────────────┼─────────────────────────────┼────────────────────────┤
│ **Schedule (SV/SPI)**│ **Nhanh tiến độ (Tốt)** │ **Chậm tiến độ (Xấu)** │
│ • $SV = EV - PV$ │ $SV > 0$: Vượt tiến độ │ $SV < 0$: Bị trễ hạn │
│ • $SPI = EV / PV$ │ $SPI > 1.0$: Nhanh hơn dự kiến│ $SPI < 1.0$: Chậm hơn dự kiến│
└──────────────────────┴─────────────────────────────┴────────────────────────┘
```

### 3. Các Chỉ số Dự báo Tương lai (EVM Forecasting)

- **Estimate at Completion (EAC):** Ước tính tổng chi phí toàn dự án khi hoàn tất:
  $$\mathbf{EAC = \frac{BAC}{CPI}}$$
- **Estimate to Complete (ETC):** Chi phí còn lại cần bỏ ra để về đích:
  $$\mathbf{ETC = EAC - AC = \frac{BAC - EV}{CPI}}$$
- **Variance at Completion (VAC):** Chênh lệch ngân sách cuối cùng:
  $$\mathbf{VAC = BAC - EAC}$$
  Note: ($VAC > 0$: Dư tiền, $VAC < 0$: Thiếu tiền).

---

## MIỀN 6: MA TRẬN RACI & QUẢN LÝ CÁC BÊN LIÊN QUAN (STAKEHOLDERS)

### 1. Ma trận RACI (RACI Matrix)

- **R - Responsible (Người thực hiện):** Trực tiếp bắt tay vào thực hiện công việc/task (có thể có nhiều người R).
- **A - Accountable (Người chịu trách nhiệm giải trình cuối cùng):** Người phê duyệt/ký duyệt kết quả cuối cùng. **QUY TẮC BẮT BUỘC: Mỗi task chỉ được có DUY NHẤT 1 chữ A**.
- **C - Consulted (Người được tham vấn):** Chuyên gia, người có chuyên môn được hỏi ý kiến hai chiều trước khi ra quyết định hoặc thực hiện.
- **I - Informed (Người được thông báo):** Người nhận thông tin một chiều sau khi công việc/quyết định đã hoàn thành.

### 2. Ma trận Quyền lực - Mức độ Quan tâm (Power / Interest Grid)

```
 Power (Quyền lực / Ảnh hưởng)
 │
 High │ [ KEEP SATISFIED ] │ [ MANAGE CLOSELY ]
 │ (Giữ cho họ hài lòng) │ (Quản lý sát sao, liên tục)
 │ VD: Ban Giám hiệu, Cục QL │ VD: Dev Team, PM, Product Owner
 ├───────────────────────────┼───────────────────────────
 Low │ [ MONITOR ] │ [ KEEP INFORMED ]
 │ (Theo dõi tối thiểu) │ (Thường xuyên cập nhật tin)
 │ VD: Công chúng ngoài cuộc│ VD: Người dùng cuối, Sinh viên
 └───────────────────────────┴───────────────────────────
 Low High Interest (Quan tâm)
```

### 3. Các Mức độ Tham gia của Stakeholder (Stakeholder Engagement Levels)

1. **Unaware:** Hoàn toàn chưa biết gì về dự án và các tác động tiềm ẩn.
2. **Resistant:** Biết về dự án nhưng có thái độ phản đối, cản trở sự thay đổi.
3. **Neutral:** Nắm thông tin nhưng giữ thái độ trung lập (không ủng hộ, không chống đối).
4. **Supportive:** Thấu hiểu và tích cực ủng hộ sự thành công của dự án.
5. **Leading:** Tiên phong, tích cực tham gia dẫn dắt và thúc đẩy dự án thành công.

---

## MIỀN 7: KẾ HOẠCH GIAO TIẾP (COMMUNICATION MANAGEMENT)

### 1. 3 Nhóm Stakeholder Bắt buộc trong Bài thi PE

- **Project-Internal (Nội bộ nhóm dự án):** Những người trực tiếp thực hiện công việc hàng ngày trong dự án (ví dụ: _PM, Developers, UI/UX Designers, QA Testers, Content Team, Event Coordinator_).
- **Organization-Internal (Nội bộ tổ chức chủ quản):** Cấp quản lý hoặc phòng ban bên trong cùng một công ty/tổ chức nhưng không trực tiếp tham gia làm dự án hàng ngày (ví dụ: _Ban Giám hiệu, Ban Giám đốc FPT Software, Phòng Tài chính - Kế toán, Khối Đảm bảo Chất lượng QA/QC công ty_).
- **External (Bên ngoài tổ chức):** Các cá nhân, đối tác hoặc tổ chức độc lập bên ngoài (ví dụ: _Khách hàng Shopee, Nhà xuất bản đối tác, Nhà cung cấp dịch vụ Cloud, Nhà thầu thi công, Người dùng cuối/Sinh viên_).

### 2. 5 Thành phần Bắt buộc của Một Mục Giao tiếp

1. `Information`: Loại thông tin cần trao đổi (tiến độ task hàng ngày, báo cáo giải ngân, demo sản phẩm).
2. `Purpose`: Mục đích của việc trao đổi (đồng bộ tiến độ, tháo gỡ rào cản kỹ thuật, nghiệm thu tính năng).
3. `Frequency`: Tần suất giao tiếp (Hàng ngày - Daily, Hàng tuần - Weekly, 2 tuần/lần - Bi-weekly, Hàng tháng - Monthly).
4. `Method / Format`: Phương thức và định dạng truyền đạt (Họp Daily Standup trực tiếp, Dashboard Jira, Báo cáo PDF qua Email, Họp Demo Teams/Zoom).
5. `Responsible`: Người chịu trách nhiệm tổ chức giao tiếp và chuẩn bị tài liệu (PM, BA, Lead Technical).

---

## ️ MIỀN 8: QUẢN LÝ RỦI RO (RISK MANAGEMENT)

### 1. Các Khái niệm Cốt lõi

- **Risk (Rủi ro):** Một sự kiện hoặc điều kiện không chắc chắn mà nếu xảy ra, sẽ gây ảnh hưởng tiêu cực (hoặc tích cực) đến ít nhất một mục tiêu của dự án.
- **Probability / Likelihood ($P$):** Xác suất rủi ro có thể xảy ra (Low / Medium / High).
- **Impact ($I$):** Mức độ thiệt hại/ảnh hưởng nếu rủi ro xảy ra (Low / Medium / High).
- **Risk Rating / Score:** Điểm số đánh giá mức độ ưu tiên của rủi ro: $\text{Risk Score} = P \times I$.

### 2. 4 Chiến lược Ứng phó Rủi ro Tiêu cực (Negative Risk Response Strategies)

1. **Avoid (Né tránh):** Thay đổi hoàn toàn kế hoạch, đổi công nghệ hoặc loại bỏ phạm vi công việc có nguy cơ cao nhằm triệt tiêu $100\%$ nguồn gốc rủi ro trước khi nó xảy ra.
2. **Mitigate (Giảm thiểu):** Thực hiện các biện pháp kỹ thuật, quy trình hoặc kiểm thử nhằm giảm xác suất xảy ra ($P$) hoặc giảm mức độ thiệt hại ($I$) nếu rủi ro xảy ra.
3. **Transfer (Chuyển giao):** Chuyển dịch trách nhiệm và hậu quả tài chính sang bên thứ ba (mua bảo hiểm rủi ro, ký hợp đồng trọn gói Fixed-Price với Vendor, thuê dịch vụ Cloud có cam kết SLA).
4. **Accept (Chấp nhận):** Thừa nhận sự tồn tại của rủi ro mà không can thiệp trước (do chi phí phòng ngừa quá lớn hoặc rủi ro bất khả kháng), chỉ thiết lập quỹ dự phòng sự cố (_Contingency Reserve_).

### 3. Phân biệt Mitigation Plan vs. Contingency Plan

- **Mitigation Plan (Kế hoạch Phòng ngừa - Action BEFORE event):** Hành động chuẩn bị và áp dụng **TRƯỚC KHI** sự cố xảy ra nhằm ngăn chặn rủi ro (ví dụ: _Tài liệu hóa quy trình code, ký hợp đồng ràng buộc tiến độ từ sớm, kiểm định vệ sinh thực phẩm trước ngày khai mạc_).
- **Contingency Plan (Kế hoạch Ứng cứu Sự cố - Action AFTER event):** Hành động kích hoạt **SAU KHI** rủi ro đã thực sự xảy ra để khống chế và khắc phục thiệt hại (ví dụ: _Trích quỹ dự phòng rủi ro, kích hoạt server dự phòng, thuê nhân công làm thêm ca đêm_).

---

## MIỀN 9: QUẢN LÝ CHẤT LƯỢNG & ĐÓNG DỰ ÁN (QUALITY & CLOSING)

### 1. Quality Assurance (QA) vs Quality Control (QC)

- **Quality Assurance (QA):** Tập trung vào việc xây dựng và giám sát **quy trình làm việc** (Process-oriented) để đảm bảo không sản sinh ra lỗi ngay từ đầu.
- **Quality Control (QC / Testing):** Tập trung vào việc **kiểm tra sản phẩm đầu ra** (Product-oriented) để phát hiện và sửa các lỗi kỹ thuật trước khi bàn giao cho khách hàng.

### 2. Các Cấp bậc Kiểm thử Phần mềm (Testing Hierarchy)

- **Unit Testing (Kiểm thử Đơn vị):** Kiểm thử từng hàm, module hoặc thành phần nhỏ nhất của mã nguồn do chính Developer viết.
- **Integration Testing (Kiểm thử Tích hợp):** Kiểm thử sự tương tác và truyền tải dữ liệu giữa các module hoặc giữa hệ thống với API bên thứ 3.
- **System Testing (Kiểm thử Toàn hệ thống):** Kiểm thử chức năng toàn diện, hiệu năng tải và bảo mật trên toàn bộ hệ thống hoàn chỉnh.
- **User Acceptance Testing - UAT (Kiểm thử Chấp nhận Người dùng):** Đợt kiểm thử do người dùng cuối hoặc đại diện khách hàng thực hiện trên môi trường Staging/Production để ký biên bản nghiệm thu bàn giao.

### 3. Project Closing (Kết thúc & Đóng Dự án)

- **Final Deliverables Handover:** Bàn giao sản phẩm hoàn chỉnh, mã nguồn, cơ sở dữ liệu và tài liệu hướng dẫn sử dụng (_User Manual_) cho khách hàng.
- **Post-Mortem / Lessons Learned:** Cuộc họp tổng kết rút kinh nghiệm giữa đội ngũ dự án để ghi chép lại các bài học thành công và thất bại cho các dự án sau.
- **Financial & Contractual Closure:** Thanh quyết toán toàn bộ hợp đồng với các nhà thầu phụ, giải phóng nguồn lực nhân sự.

---

# PHẦN 3: TỪ ĐIỂN THUẬT NGỮ ANH - VIỆT A-Z TOÀN DIỆN

```
[ A ] ──────────────────────────────────────────────────────────────────────────
```

- **Acceptance Criteria (Tiêu chí chấp nhận):** Các điều kiện tiên quyết mà một sản phẩm bàn giao hoặc tính năng phần mềm phải đáp ứng để được khách hàng phê duyệt.
- **Activity (Hoạt động/Công việc):** Phần công việc nhỏ nhất trong dự án có thời lượng, tài nguyên và chi phí xác định.
- **Activity-On-Node - AON (Sơ đồ hoạt động trên nút):** Định dạng sơ đồ mạng biểu diễn các công việc trong các hình hộp chữ nhật (node) và mối liên kết bằng các mũi tên.
- **Actual Cost - AC (Chi phí thực tế):** Số tiền thực tế đã chi tiêu tính đến một mốc thời gian cụ thể.
- **Analogous Estimation (Ước lượng tương tự):** Phương pháp ước lượng chi phí/thời gian dựa trên dữ liệu quá khứ của các dự án có quy mô tương đương.
- **Assumption (Giả định):** Những yếu tố được xem là đúng và chắc chắn trong quá trình lập kế hoạch mà không cần bằng chứng tuyệt đối.
- **Authority (Quyền hạn):** Mức độ quyền lực hợp pháp được trao cho PM để ra quyết định, phân bổ chi phí và điều động nhân sự.
- **Avoidance (Chiến lược né tránh rủi ro):** Loại bỏ hoàn toàn nguồn gốc rủi ro bằng cách thay đổi thiết kế hoặc phạm vi.

```
[ B ] ──────────────────────────────────────────────────────────────────────────
```

- **Backward Pass (Tính toán chiều ngược):** Kỹ thuật duyệt ngược từ cuối dự án về đầu trên sơ đồ mạng để tính $LF$ và $LS$.
- **Baseline (Đường cơ sở):** Bản kế hoạch được phê duyệt chính thức về Phạm vi (Scope Baseline), Tiến độ (Schedule Baseline) hoặc Chi phí (Cost Baseline) dùng làm chuẩn để so sánh hiệu suất thực tế.
- **Bottom-up Estimation (Ước lượng từ dưới lên):** Kỹ thuật tính chi phí chi tiết từ các task nhỏ nhất rồi cộng dồn lên cấp dự án.
- **Budget at Completion - BAC (Tổng ngân sách dự toán):** Tổng số tiền được phê duyệt ban đầu cho toàn bộ dự án.
- **Buffer (Vùng đệm dự phòng):** Khoảng thời gian hoặc ngân sách được bổ sung để phòng ngừa các biến động rủi ro.
- **Business Analyst - BA (Chuyên viên phân tích nghiệp vụ):** Người khảo sát, làm rõ nhu cầu của khách hàng và chuyển giao thành tài liệu đặc tả SRS cho đội kỹ thuật.

```
[ C ] ──────────────────────────────────────────────────────────────────────────
```

- **Change Request - CR (Yêu cầu thay đổi):** Đề xuất chính thức bằng văn bản nhằm thay đổi phạm vi, thời gian hoặc ngân sách dự án.
- **Closing Phase (Giai đoạn đóng dự án):** Giai đoạn hoàn tất nghiệm thu, bàn giao sản phẩm và giải phóng nguồn lực.
- **Communication Management Plan (Kế hoạch quản lý giao tiếp):** Tài liệu quy định thông tin, mục đích, tần suất, phương thức và người phụ trách việc trao đổi thông tin.
- **Constraint (Ràng buộc):** Yếu tố giới hạn sự lựa chọn của đội dự án (về thời gian, ngân sách, công nghệ hoặc chất lượng).
- **Contingency Plan (Kế hoạch ứng phó sự cố):** Chuỗi hành động dự phòng được kích hoạt sau khi một rủi ro xác định đã xảy ra.
- **Contingency Reserve (Quỹ dự phòng rủi ro):** Khoản tiền trích trong ngân sách dự án để xử lý các rủi ro đã được nhận diện (_Known-Unknowns_).
- **Cost Performance Index - CPI (Chỉ số hiệu suất chi phí):** Tỷ số giữa giá trị thu được và chi phí thực tế: $CPI = EV / AC$.
- **Cost Variance - CV (Độ lệch chi phí):** Chênh lệch giữa giá trị thu được và chi phí thực tế: $CV = EV - AC$.
- **Crashing (Nén tiến độ):** Kỹ thuật rút ngắn thời gian đường găng bằng cách tăng thêm nhân sự, làm thêm giờ, chấp nhận tăng chi phí.
- **Critical Activity (Hoạt động găng):** Hoạt động nằm trên đường găng có độ trôi $Float = 0$.
- **Critical Path (Đường găng):** Chuỗi công việc liên tiếp từ đầu đến cuối có tổng thời lượng dài nhất.

```
[ D ] ──────────────────────────────────────────────────────────────────────────
```

- **Daily Standup Meeting (Họp nhanh hàng ngày):** Cuộc họp ngắn 15 phút của đội dự án để cập nhật 3 câu hỏi: Hôm qua làm gì? Hôm nay làm gì? Có vướng mắc gì không?
- **Deliverable (Sản phẩm bàn giao):** Kết quả hữu hình hoặc vô hình có thể đo lường và bàn giao được (phần mềm, tài liệu SRS, báo cáo, CSDL).
- **De-scoping (Cắt giảm phạm vi):** Lược bớt các tính năng hoặc yêu cầu không cốt lõi để bảo vệ tiến độ và ngân sách dự án.
- **Duration at Completion - DAC (Tổng thời lượng dự toán):** Tổng thời gian theo kế hoạch ban đầu của dự án.

```
[ E ] ──────────────────────────────────────────────────────────────────────────
```

- **Early Finish - EF (Thời điểm kết thúc sớm nhất):** Thời điểm sớm nhất mà một hoạt động có thể kết thúc ($EF = ES + \text{Duration}$).
- **Early Start - ES (Thời điểm bắt đầu sớm nhất):** Thời điểm sớm nhất mà một hoạt động có thể bắt đầu.
- **Earned Value - EV (Giá trị thu được):** Giá trị ngân sách tương ứng với khối lượng công việc thực tế đã hoàn thành.
- **Earned Value Management - EVM (Quản trị giá trị thu được):** Phương pháp đo lường tích hợp tiến độ và chi phí thực tế so với kế hoạch.
- **Estimate at Completion - EAC (Ước tính tổng chi phí khi hoàn thành):** Tổng chi phí dự báo cần chi khi dự án kết thúc: $EAC = BAC / CPI$.
- **Estimate to Complete - ETC (Ước tính chi phí còn lại):** Số tiền dự kiến cần chi tiếp để hoàn tất phần công việc còn lại: $ETC = EAC - AC$.
- **Expert Judgment (Tham vấn chuyên gia):** Ý kiến chuyên môn được cung cấp bởi các chuyên gia kỹ thuật có kinh nghiệm sâu sắc.
- **External Stakeholders (Bên liên quan ngoài tổ chức):** Các bên bên ngoài tổ chức chủ quản (khách hàng, cơ quan quản lý, nhà cung cấp).

```
[ F ] ──────────────────────────────────────────────────────────────────────────
```

- **Fast-tracking (Thực hiện song song):** Kỹ thuật nén tiến độ bằng cách thực hiện đồng thời các công việc vốn diễn ra tuần tự, làm tăng rủi ro lỗi.
- **Finish-to-Finish - FF (Quan hệ kết thúc - kết thúc):** Hoạt động B chỉ được kết thúc sau khi hoạt động A đã kết thúc.
- **Finish-to-Start - FS (Quan hệ kết thúc - bắt đầu):** Hoạt động B chỉ được bắt đầu sau khi hoạt động A đã kết thúc hoàn toàn.
- **Fixed-Price Contract (Hợp đồng trọn gói):** Hợp đồng quy định một mức giá cố định duy nhất cho toàn bộ sản phẩm bàn giao, chuyển giao rủi ro trượt giá cho nhà thầu.
- **Flexibility (Tính linh hoạt về thời gian):** Khả năng trì hoãn của một hoạt động mà không làm ảnh hưởng đến ngày kết thúc dự án (hoạt động có $Float > 0$).
- **Float / Total Slack (Thời gian trôi dự phòng):** Khoảng thời gian một công việc có thể bị chậm trễ mà không làm trễ tiến độ chung của toàn dự án: $Float = LS - ES = LF - EF$.
- **Forward Pass (Tính toán chiều xuôi):** Kỹ thuật duyệt xuôi từ đầu dự án đến cuối trên sơ đồ mạng để tính $ES$ và $EF$.
- **Functional Organization (Tổ chức theo chức năng):** Cấu trúc phân quyền theo các phòng ban chức năng nghiệp vụ, quyền hạn của PM rất hạn chế.

```
[ G ] ──────────────────────────────────────────────────────────────────────────
```

- **Gantt Chart (Biểu đồ Gantt):** Biểu đồ dạng thanh ngang biểu diễn trực quan lịch trình thực hiện các công việc theo dòng thời gian.
- **Gold Plating (Mạ vàng sản phẩm):** Hành vi tự ý thêm vào các tính năng bổ sung không có trong yêu cầu ban đầu của khách hàng mà không được phê duyệt.

```
[ I ] ──────────────────────────────────────────────────────────────────────────
```

- **Impact (Mức độ tác động/ảnh hưởng):** Độ nghiêm trọng của hậu quả nếu một rủi ro xảy ra đối với tiến độ, chi phí, chất lượng dự án.
- **Informed - I (Người được thông báo):** Vai trò trong ma trận RACI nhận thông tin một chiều sau khi công việc đã xong.
- **Initiating Phase (Giai đoạn khởi tạo):** Giai đoạn đầu tiên định nghĩa dự án, xây dựng Project Charter và xác định các bên liên quan ban đầu.
- **In-Scope (Trong phạm vi):** Các tính năng, công việc được cam kết và bao gồm trong kế hoạch thực hiện của dự án.
- **Integration Testing (Kiểm thử tích hợp):** Giai đoạn kiểm tra tính tương thích và liên kết dữ liệu giữa các module phần mềm độc lập.
- **Iron Triangle (Tam giác sắt):** Mô hình biểu diễn mối quan hệ phụ thuộc giữa Phạm vi, Thời gian, Chi phí và Chất lượng.
- **Issue (Sự cố/Vấn đề):** Một biến cố tiêu cực đang thực tế diễn ra ở hiện tại và cần xử lý ngay lập tức (khác với Risk là biến cố trong tương lai).

```
[ L ] ──────────────────────────────────────────────────────────────────────────
```

- **Labor Cost (Chi phí nhân sự):** Tổng tiền lương, thù lao chi trả cho đội ngũ nhân lực tham gia vào dự án.
- **Lag Time (Độ trễ thời gian):** Khoảng thời gian bắt buộc phải chờ đợi sau khi công việc trước kết thúc rồi công việc sau mới được bắt đầu.
- **Late Finish - LF (Thời điểm kết thúc muộn nhất):** Thời điểm trễ nhất mà một hoạt động phải kết thúc để không làm chậm dự án ($LF = \min(LS_{\text{sau}})$).
- **Late Start - LS (Thời điểm bắt đầu muộn nhất):** Thời điểm trễ nhất mà một hoạt động phải bắt đầu để không làm chậm dự án ($LS = LF - \text{Duration}$).
- **Lead Time (Thời gian đẩy sớm):** Khoảng thời gian mà công việc sau có thể bắt đầu sớm hơn khi công việc trước chưa kết thúc hoàn toàn.
- **Lessons Learned (Bài học kinh nghiệm):** Tri thức, kinh nghiệm thu thập được trong quá trình thực hiện dự án được ghi chép lại trong giai đoạn đóng dự án.
- **Likelihood / Probability (Xác suất xảy ra):** Khả năng một rủi ro có thể xảy ra trong tương lai.

```
[ M ] ──────────────────────────────────────────────────────────────────────────
```

- **Manage Closely (Quản lý sát sao):** Chiến lược áp dụng cho các bên liên quan có Quyền lực cao và Mức độ quan tâm cao (_High Power - High Interest_).
- **Matrix Organization (Tổ chức ma trận):** Cấu trúc kết hợp giữa tổ chức theo chức năng và tổ chức theo dự án nhằm tối ưu hóa chia sẻ nguồn lực.
- **Milestone (Cột mốc):** Sự kiện quan trọng đánh dấu hoàn thành một chặng đường dự án, có thời lượng $Duration = 0$.
- **Mitigation (Chiến lược giảm thiểu rủi ro):** Các biện pháp hành động trước nhằm làm giảm xác suất hoặc mức độ thiệt hại của rủi ro.
- **Monitor (Theo dõi tối thiểu):** Chiến lược dành cho bên liên quan có Quyền lực thấp và Quan tâm thấp (_Low Power - Low Interest_).

```
[ O ] ──────────────────────────────────────────────────────────────────────────
```

- **Organization-Internal Stakeholders (Bên liên quan nội bộ tổ chức):** Các cá nhân, lãnh đạo, phòng ban thuộc cùng tổ chức nhưng không trực tiếp làm task dự án hàng ngày.
- **Out-of-Scope (Ngoài phạm vi):** Các hạng mục, công việc được chỉ định rõ ràng là không thuộc trách nhiệm thực hiện của dự án.
- **Overhead Cost (Chi phí vận hành chung):** Các chi phí gián tiếp phục vụ vận hành dự án (tiền điện, nước, internet, thuê văn phòng).

```
[ P ] ──────────────────────────────────────────────────────────────────────────
```

- **Parametric Estimation (Ước lượng tham số):** Kỹ thuật tính chi phí dựa trên mối tương quan thống kê giữa dữ liệu quá khứ và các tham số kỹ thuật ($\text{Đơn giá} \times \text{Số lượng}$).
- **Planned Value - PV (Giá trị kế hoạch):** Ngân sách kế hoạch phân bổ cho khối lượng công việc dự kiến phải hoàn thành tại một thời điểm.
- **Power/Interest Grid (Ma trận Quyền lực/Quan tâm):** Công cụ phân loại các bên liên quan dựa trên mức độ quyền lực và mức độ quan tâm để lựa chọn chiến lược giao tiếp thích hợp.
- **Precedence Diagramming Method - PDM (Phương pháp sơ đồ tiền nhiệm):** Kỹ thuật xây dựng sơ đồ mạng công việc bằng các nút và mũi tên thể hiện 4 loại quan hệ phụ thuộc (FS, SS, FF, SF).
- **Predecessor Activity (Hoạt động tiền nhiệm):** Hoạt động diễn ra trước và quyết định thời điểm bắt đầu/kết thúc của hoạt động liền sau.
- **Project Manager - PM (Quản trị viên dự án):** Người được tổ chức giao toàn quyền lãnh đạo và chịu trách nhiệm cao nhất về sự thành bại của dự án.
- **Projectized Organization (Tổ chức theo dự án):** Mô hình tổ chức phân bổ nhân sự tập trung $100\%$ cho dự án, quyền hạn của PM ở mức cao nhất.

```
[ Q ] ──────────────────────────────────────────────────────────────────────────
```

- **Quality Assurance - QA (Đảm bảo chất lượng):** Quy trình phòng ngừa lỗi tập trung vào việc tuân thủ các quy trình sản xuất và tiêu chuẩn phát triển.
- **Quality Control - QC (Kiểm soát chất lượng):** Quy trình kiểm tra, dò tìm và khắc phục lỗi trực tiếp trên sản phẩm bàn giao đầu ra.

```
[ R ] ──────────────────────────────────────────────────────────────────────────
```

- **RACI Matrix (Ma trận RACI):** Ma trận gán quyền hạn và trách nhiệm cho từng vai trò trong từng công việc (Responsible, Accountable, Consulted, Informed).
- **Reserve Analysis (Phân tích quỹ dự phòng):** Kỹ thuật xác định tỷ lệ phần trăm ngân sách cần giữ lại để xử lý rủi ro và các biến động chi phí.
- **Responsible - R (Người thực hiện):** Người trực tiếp bắt tay vào thực hiện và hoàn thành công việc cụ thể.
- **Risk (Rủi ro):** Sự kiện không chắc chắn có khả năng tác động tích cực hoặc tiêu cực đến các mục tiêu của dự án.
- **Risk Assessment (Đánh giá rủi ro):** Quá trình phân tích xác suất xảy ra và mức độ ảnh hưởng của các rủi ro được nhận diện.
- **Risk Breakdown Structure - RBS (Cấu trúc phân rã rủi ro):** Bảng phân cấp phân loại rủi ro theo từng nhóm nguồn gốc (Kỹ thuật, Quản lý, Thương mại, Bên ngoài).
- **Risk Register (Sổ đăng ký rủi ro):** Tài liệu ghi nhận danh sách rủi ro, phân tích $P \times I$, chiến lược ứng phó và người phụ trách theo dõi.

```
[ S ] ──────────────────────────────────────────────────────────────────────────
```

- **Schedule Compression (Nén tiến độ):** Kỹ thuật rút ngắn thời gian thực hiện dự án mà không làm thay đổi phạm vi (gồm Crashing và Fast-tracking).
- **Schedule Performance Index - SPI (Chỉ số hiệu suất tiến độ):** Tỷ số giữa giá trị thu được và giá trị kế hoạch: $SPI = EV / PV$.
- **Schedule Variance - SV (Độ lệch tiến độ):** Chênh lệch giữa giá trị thu được và giá trị kế hoạch: $SV = EV - PV$.
- **Scope Creep (Bùng nổ phạm vi):** Sự mở rộng phạm vi dự án không được kiểm soát do không có sự đánh giá tác động và phê duyệt chính thức.
- **Single Sign-On - SSO (Đăng nhập một lần):** Giải pháp xác thực cho phép người dùng đăng nhập bằng một tài khoản duy nhất để truy cập nhiều hệ thống.
- **SMART Criteria (Tiêu chuẩn SMART):** Bộ 5 tiêu chuẩn thiết lập mục tiêu: Cụ thể (Specific), Đo lường được (Measurable), Khả thi (Achievable), Phù hợp (Relevant), Có thời hạn (Time-bound).
- **Software Development Life Cycle - SDLC (Vòng đời phát triển phần mềm):** Quy trình 5 bước: Khảo sát yêu cầu $\rightarrow$ Thiết kế $\rightarrow$ Lập trình $\rightarrow$ Kiểm thử $\rightarrow$ Triển khai & Vận hành.
- **Software Requirement Specification - SRS (Tài liệu đặc tả yêu cầu phần mềm):** Bản mô tả chi tiết toàn bộ các yêu cầu chức năng, phi chức năng và giao diện của phần mềm cần phát triển.
- **Sponsor (Nhà tài trợ):** Bên cấp ngân sách và ban hành Điều lệ dự án.
- **Stakeholder (Bên liên quan):** Cá nhân, nhóm hoặc tổ chức có thể bị ảnh hưởng hoặc gây ảnh hưởng đến quyết định, hoạt động của dự án.
- **Start-to-Start - SS (Quan hệ bắt đầu - bắt đầu):** Hoạt động B có thể bắt đầu ngay khi hoạt động A vừa bắt đầu.
- **Success Criteria (Tiêu chí thành công):** Các chỉ số đo lường cụ thể dùng để đánh giá xem dự án đã hoàn thành thắng lợi hay chưa.
- **System Testing (Kiểm thử hệ thống):** Giai đoạn kiểm tra tổng thể phần mềm trên toàn bộ môi trường tích hợp đầy đủ.

```
[ T ] ──────────────────────────────────────────────────────────────────────────
```

- **Total Float / Total Slack (Độ trôi tổng thể):** Xem mục _Float_.
- **To-Complete Performance Index - TCPI (Chỉ số hiệu suất cần đạt):** Hiệu suất chi phí cần duy trì trong phần công việc còn lại để hoàn thành đúng ngân sách.
- **Transfer (Chiến lược chuyển giao rủi ro):** Chuyển giao trách nhiệm và hậu quả thiệt hại của rủi ro cho bên thứ ba (mua bảo hiểm, thuê ngoài).

```
[ U ] ──────────────────────────────────────────────────────────────────────────
```

- **User Acceptance Testing - UAT (Kiểm thử chấp nhận người dùng):** Đợt kiểm thử cuối cùng do người dùng thực tế thực hiện trước khi chính thức nghiệm thu đưa vào vận hành.
- **User Interface / User Experience - UI/UX (Giao diện và Trải nghiệm người dùng):** Phần thiết kế mỹ thuật trực quan và cảm nhận tương tác người dùng trên ứng dụng.

```
[ V ] ──────────────────────────────────────────────────────────────────────────
```

- **Variance at Completion - VAC (Chênh lệch ngân sách khi hoàn thành):** Chênh lệch giữa tổng ngân sách ban đầu và chi phí dự báo khi kết thúc: $VAC = BAC - EAC$.
- **Vendor Bid Analysis (Phân tích đấu thầu nhà cung cấp):** Phương pháp đánh giá và lựa chọn từ báo giá cạnh tranh của nhiều nhà thầu bên ngoài.

```
[ W ] ──────────────────────────────────────────────────────────────────────────
```

- **Work Breakdown Structure - WBS (Cấu trúc phân rã công việc):** Xem mục _WBS_.
- **Work Package (Gói công việc):** Đơn vị công việc ở cấp thấp nhất của cấu trúc WBS có thể ước tính chi phí, thời gian và giao cho một người chịu trách nhiệm.

---

# PHẦN 4: BẢNG TỔNG HỢP CÔNG THỨC & MẸO PHÒNG THI EOS

## 1. BẢNG TỔNG HỢP TOÀN BỘ CÔNG THỨC TOÁN HỌC

### A. Công thức Quản lý Giá trị Thu được (EVM Formulas)

|  STT  | Tên chỉ số                 | Ký hiệu | Công thức tính toán                              | Ý nghĩa & Đánh giá                                                                                                                 |
| :---: | :------------------------- | :-----: | :----------------------------------------------- | :--------------------------------------------------------------------------------------------------------------------------------- |
| **1** | Planned Value              | **PV**  | $PV = \frac{t}{DAC} \times BAC$                  | Giá trị ngân sách kế hoạch tại mốc $t$.                                                                                            |
| **2** | Earned Value               | **EV**  | $EV = \% \text{Khối lượng thực tế} \times BAC$   | Giá trị thực tế đã làm ra tại mốc $t$.                                                                                             |
| **3** | Cost Variance              | **CV**  | $\mathbf{CV = EV - AC}$                          | $\begin{cases} > 0: \text{Tiết kiệm chi phí (Dưới ngân sách)} \\ < 0: \text{Bội chi (Vượt ngân sách)} \end{cases}$                 |
| **4** | Schedule Variance          | **SV**  | $\mathbf{SV = EV - PV}$                          | $\begin{cases} > 0: \text{Nhanh tiến độ hơn kế hoạch} \\ < 0: \text{Chậm tiến độ (Trễ hạn)} \end{cases}$                           |
| **5** | Cost Performance Index     | **CPI** | $\mathbf{CPI = \frac{EV}{AC}}$                   | $\begin{cases} > 1.0: \text{Chi phí tốt (1\$ vốn tạo > 1\$ giá trị)} \\ < 1.0: \text{Chi phí kém (Bội chi ngân sách)} \end{cases}$ |
| **6** | Schedule Performance Index | **SPI** | $\mathbf{SPI = \frac{EV}{PV}}$                   | $\begin{cases} > 1.0: \text{Tiến độ nhanh hơn kế hoạch} \\ < 1.0: \text{Tiến độ chậm hơn kế hoạch} \end{cases}$                    |
| **7** | Estimate at Completion     | **EAC** | $\mathbf{EAC = \frac{BAC}{CPI}}$                 | Tổng ngân sách dự kiến tiêu tốn khi hoàn tất dự án.                                                                                |
| **8** | Estimate to Complete       | **ETC** | $\mathbf{ETC = EAC - AC = \frac{BAC - EV}{CPI}}$ | Số tiền cần chi thêm để làm nốt phần còn lại.                                                                                      |
| **9** | Variance at Completion     | **VAC** | $\mathbf{VAC = BAC - EAC}$                       | $\begin{cases} > 0: \text{Dư ngân sách khi kết thúc} \\ < 0: \text{Thiếu hụt ngân sách khi kết thúc} \end{cases}$                  |

---

### B. Công thức Phương pháp Đường găng (CPM Formulas)

|  STT  | Bước tính                  |  Chỉ số   | Công thức                                                             | Quy tắc đặc biệt                                                                                                                 |
| :---: | :------------------------- | :-------: | :-------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------- |
| **1** | Forward Pass               |  **EF**   | $EF = ES + \text{Duration}$                                           | Tính xuôi từ $Start \rightarrow End$ ($ES_{\text{Start}} = 0$).                                                                  |
| **2** | Forward Pass (Merge Node)  |  **ES**   | $\mathbf{ES_{\text{sau}} = \max(EF_{\text{tất cả công việc trước}})}$ | Lấy giá trị **LỚN NHẤT** trong các node trước.                                                                                   |
| **3** | Backward Pass              |  **LS**   | $LS = LF - \text{Duration}$                                           | Tính lùi từ $End \rightarrow Start$ ($LF_{\text{End}} = \text{Critical Path}$).                                                  |
| **4** | Backward Pass (Split Node) |  **LF**   | $\mathbf{LF_{\text{trước}} = \min(LS_{\text{tất cả công việc sau}})}$ | Lấy giá trị **NHỎ NHẤT** trong các node sau.                                                                                     |
| **5** | Total Float (Slack)        | **Float** | $\mathbf{Float = LS - ES = LF - EF}$                                  | $\begin{cases} = 0: \text{Hoạt động găng (Critical Activity)} \\ > 0: \text{Hoạt động có tính linh hoạt (Flexible)} \end{cases}$ |

---

## 2. 7 BẪY ĐỀ THI PE & NGUYÊN TẮC "BẤT DI BẤT DỊCH" TRÊN PHẦN MỀM EOS

```
┌─────────────────────────────────────────────────────────────────────────────┐
│ 7 BẪY PHÒNG THI PE PMG201c CẦN TRÁNH │
├─────────────────────────────────────────────────────────────────────────────┤
│ 1. BẪY ĐƯỜNG GĂNG TIỀM ẨN: Khi nén đường găng chính đi X tuần, phải kiểm tra│
│ xem các đường phụ có bị vượt lên thành đường găng mới hay không! │
│ 2. BẪY MA TRẬN RACI: Mỗi một task bắt buộc chỉ có DUY NHẤT 1 chữ A. │
│ 3. BẪY CỘNG DỒN NGÂN SÁCH: Tổng 5-6 hạng mục chi phí phải BẰNG CHÍNH XÁC │
│ con số đề bài yêu cầu (không được dư hay thiếu dù chỉ 1 đồng). │
│ 4. BẪY 3 NHÓM STAKEHOLDER: Luôn phân rõ Project-Internal, Org-Internal và │
│ External Stakeholders. │
│ 5. BẪY DURATION CỦA MILESTONE: Milestone luôn có Duration = 0 ngày. │
│ 6. BẪY MITIGATION VS CONTINGENCY: Mitigation là phòng ngừa TRƯỚC khi sự cố │
│ xảy ra; Contingency là ứng phó xử lý SAU KHI sự cố đã xảy ra. │
│ 7. ĐỊNH DẠNG EOS TEXT: Trình bày dạng văn bản sạch, gạch đầu dòng rõ ràng, │
│ dùng dấu gạch đứng (|) hoặc mũi tên (->) để tránh lỗi font kẻ bảng. │
└──────────────────────────────────────────────────────────────────────────────┘
```

---

## 3. KHUNG TRÌNH BÀY CHUẨN ĐẠT ĐIỂM TỐI ĐA CHO 4 REQUEST

### Request 1: Narrative Charter Statement (20%)

```text
1. Project Name: [Tên thương hiệu] + [Lĩnh vực/Sản phẩm] + Project
2. Project Description: [Mô tả tổng quan sản phẩm, thời gian, ngân sách, công nghệ]
3. Project Purpose & Justification:
 - Problem Statement: [Thực trạng khó khăn hiện tại]
 - Business Value & Objectives: [Giá trị mang lại, mục tiêu tăng trưởng, số lượng user]
4. High-Level Requirements:
 - Requirement 1: [Module 1 - Mô tả chi tiết]
 - Requirement 2: [Module 2 - Mô tả chi tiết]
 - Requirement 3: [Module 3 - Mô tả chi tiết]
5. Project Constraints (4 Ràng buộc):
 - Scope Constraint: [In-scope & Out-of-scope]
 - Time Constraint: [Thời gian hoàn thành nghiêm ngặt]
 - Cost Constraint: [Giới hạn ngân sách tối đa BAC]
 - Quality Constraint: [Tiêu chí chất lượng, độ chịu tải, bảo mật]
```

### Request 2: Cost / Budget Items (20%)

```text
Cost Item [X]: [Tên loại chi phí]
- Description: [Mô tả chi tiết nhân sự/thiết bị/công cụ trong bao lâu]
- Estimation Method & Details: [Nêu 1 trong 5 phương pháp: Bottom-up / Parametric / Analogous...]
 Công thức tính: [Số lượng x Đơn giá x Thời gian]
- Estimated Cost: [$xxx,xxx hoặc xxx,000,000 VNĐ]
- Person in Charge: [PM, HR Manager, Lead DevOps...]
```

### Request 3: Communication Plan (30%)

```text
Stakeholder Group: [Project-Internal / Organization-Internal / External]
- Stakeholder Name: [Tên chức danh/đối tác cụ thể]
- Information: [Nội dung thông tin cần trao đổi]
- Purpose: [Mục đích trao đổi]
- Frequency: [Daily / Weekly / Bi-weekly / Monthly]
- Method / Format: [Daily Standup Meeting / Dashboard / Báo cáo PDF qua Email]
- Responsible: [PM / BA / Tech Lead]
```

### Request 4: Milestones & 10 Activities Sequence (30%)

```text
Main Milestones:
- Milestone 1: [Khởi tạo & Ký kết - Initiation Sign-off]
- Milestone 2: [Phát triển tính năng cốt lõi - Core Development]
- Milestone 3: [Nghiệm thu UAT & Triển khai Go-Live]

10 Activities for Milestone [X]:
- A1: [Tên công việc 1] | Duration: [x ngày] | Predecessor: [None/Start] | Relationship: Start
- A2: [Tên công việc 2] | Duration: [x ngày] | Predecessor: [A1] | Relationship: FS
- A3: [Tên công việc 3] | Duration: [x ngày] | Predecessor: [A2] | Relationship: FS
...
- A10: [Tên công việc 10] | Duration: [x ngày] | Predecessor: [A8, A9] | Relationship: FS
```

---

_Tài liệu được biên soạn và chuẩn hóa toàn diện phục vụ ôn tập & phòng thi môn PMG201c._
