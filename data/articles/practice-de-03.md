# ĐỀ SỐ 3: DẠNG ĐỀ CHUYÊN SÂU KỸ THUẬT (CPM, EVM, RACI & RỦI RO - CHUẨN CA 2 SP26)

> **Môn học:** PMG201c (Project Management Fundamentals)
> **Thời gian làm bài:** 60 - 90 phút | **Hình thức thi:** Thực hành trên máy (EOS Client)

---

## PHẦN I: ĐỀ BÀI (EXAM QUESTIONS - 10.0 ĐIỂM)

### BỐI CẢNH CASE STUDY

- **Tên dự án:** _Automated Online Exam Proctoring System (AutoProctor)_ - Hệ thống Tự động hóa Khảo thí và Giám sát Thi Trực tuyến Bằng Trí tuệ Nhân tạo (AI) cho Đại học FPT.
- **Thời gian kế hoạch (DAC):** $10\text{ tháng}$ | **Tổng ngân sách phê duyệt (BAC):** $\$200,000$.
- **Bối cảnh:** Nhằm đáp ứng nhu cầu tổ chức thi trực tuyến quy mô lớn và đảm bảo tính liêm chính học thuật, Ban Giám hiệu quyết định giao cho Trung tâm Khảo thí phối hợp với Phòng Phát triển Phần mềm xây dựng hệ thống AutoProctor có khả năng giám sát tự động 5,000 thí sinh đồng thời.

---

### CÁC CÂU HỎI THI (EXAM REQUESTS)

- **Request 1 (2.0 Điểm): Cơ cấu Tổ chức Dự án (Organizational Structure)**
  Đại học FPT hiện đang vận hành theo mô hình phòng ban chức năng truyền thống (Functional Structure). Hãy phân tích xem mô hình này có phù hợp để triển khai dự án AutoProctor không? Đề xuất cấu trúc phù hợp nhất (**Strong Matrix Structure**) và nêu 4 lý do bảo vệ đề xuất.

- **Request 2 (2.0 Điểm): Ma trận Phân công Trách nhiệm (RACI Matrix)**
  Lập bảng RACI Matrix cho 4 vai trò: **Project Manager (PM)**, **Business Analyst (BA)**, **Solution Architect / Dev Lead (Dev)**, và **QA / Tester (QA)** thực hiện 8 công việc chính theo vòng đời phát triển phần mềm (SDLC).

- **Request 3 (2.0 Điểm): Bài toán Sơ đồ Mạng & Critical Path Method (CPM)**
  Cho bảng danh mục công việc của dự án AutoProctor như sau:

| Activity  | Preceding Activity | Duration (weeks) |
| :-------: | :----------------: | :--------------: |
| **Start** |         —          |        0         |
|   **A**   |       Start        |        3         |
|   **B**   |         A          |        4         |
|   **C**   |       Start        |        6         |
|   **D**   |        B, C        |        5         |
|   **E**   |         C          |        8         |
|   **F**   |         D          |        4         |
|   **G**   |         E          |        3         |
|   **H**   |        F, G        |        6         |
|  **End**  |         H          |        0         |

1.  Liệt kê tất cả các đường đi (Paths) từ Start đến End và tính độ dài của từng đường.
2.  Xác định **Đường găng (Critical Path)** và **Thời gian tối thiểu hoàn thành dự án (_Minimum Project Duration_)**.
3.  Lập bảng tính các giá trị **ES, EF, LS, LF, Float** cho từng Activity. Chỉ ra công việc có tính linh hoạt cao nhất (_Most Flexible Activity_).
4.  **Bẫy nén tiến độ:** Nếu Ban Giám hiệu yêu cầu rút ngắn thời gian hoàn thành dự án đi **3 tuần** (từ 23 tuần xuống 20 tuần), hãy đề xuất các phương án nén tiến độ (Crashing / Fast-tracking) khả thi và phân tích xem có xuất hiện đường găng mới nào không.

- **Request 4 (2.0 Điểm): Bài toán Quản trị Giá trị Thu được (EVM Calculation)**
  Tại mốc đánh giá sau **4 tháng** triển khai dự án:
- Chi phí thực tế đã giải ngân ($AC$): $\$90,000$.
- Giá trị kế hoạch dự kiến đạt được ($PV$): $\$80,000$.
- Tỷ lệ hoàn thành công việc thực tế đạt $35\%$ toàn bộ dự án ($BAC = \$200,000$).

1.  Tính Giá trị Thu được ($EV$).
2.  Tính Chỉ số Hiệu suất Chi phí ($CPI$) và Chỉ số Hiệu suất Tiến độ ($SPI$).
3.  Nhận xét về tình trạng sức khỏe của dự án (Về chi phí: Tiết kiệm hay Bội chi? Về tiến độ: Sớm hay Trễ?).
4.  Đề xuất 2 giải pháp quản trị tương ứng để đưa dự án về đúng quỹ đạo.

- **Request 5 (2.0 Điểm): Quản trị Rủi ro (Risk Management)**
  Trình bày bảng quản lý 3 rủi ro kỹ thuật và bảo mật của hệ thống AutoProctor (AI nhận diện sai sinh viên gian lận, Sập máy chủ khi 5,000 sinh viên thi đồng thời, Rò rỉ đề thi qua mạng nội bộ).

---

## PHẦN II: HƯỚNG DẪN CÁCH LÀM & KHUNG PHƯƠNG PHÁP GIẢI

---

### HƯỚNG DẪN REQUEST 1: ORGANIZATIONAL STRUCTURE (2.0 Điểm)

#### 1. Các bước phân tích & lập luận:

1. **Chỉ ra nhược điểm của Functional Structure:** Trong mô hình chức năng, nhân sự thuộc về các phòng ban riêng (Phòng Khảo thí, Phòng IT, Phòng Đào tạo). PM có quyền hạn rất thấp (Low Authority), không tự quyết định được ngân sách và tài nguyên, thủ tục phê duyệt hành chính kéo dài.
2. **Khẳng định mô hình tối ưu:** **Strong Matrix Structure (Cấu trúc Ma trận Mạnh)**.
3. **4 Luận điểm bảo vệ đề xuất (Key Selling Points):**

- _High PM Authority:_ PM nắm toàn quyền kiểm soát ngân sách $200,000 và tiến độ dự án.
- _Cross-functional Collaboration:_ Dễ dàng điều động kỹ sư AI, chuyên viên khảo thí và tester vào chung một đội dự án chuyên trách.
- _Clear Accountability:_ Có một đầu mối duy nhất (PM) chịu trách nhiệm về thành công của sản phẩm.
- _Rapid Decision-Making:_ Phản ứng nhanh với các thay đổi yêu cầu và xử lý sự cố kỹ thuật.

---

### HƯỚNG DẪN REQUEST 2: RACI MATRIX (2.0 Điểm)

#### 1. Quy tắc sống còn của RACI:

- **R (Responsible):** Người trực tiếp làm task (có thể có nhiều R).
- **A (Accountable):** Người chịu trách nhiệm phê duyệt cuối cùng (**BẮT BUỘC CHỈ CÓ DUY NHẤT 1 'A' TRÊN MỖI DÒNG**).
- **C (Consulted):** Người được hỏi ý kiến tham vấn 2 chiều trước khi thực hiện.
- **I (Informed):** Người nhận thông báo kết quả 1 chiều sau khi hoàn thành.

#### 2. Khung phân bổ vai trò cho 8 Tasks SDLC:

- _Task 1 (Lấy yêu cầu SRS):_ BA là **A / R**, PM nhận tin (I), Dev tham vấn (C).
- _Task 2-3 (Thiết kế Kiến trúc CSDL & UI/UX):_ Dev/Architect là **A / R**, BA tham vấn (C), PM nhận tin (I).
- _Task 4-5 (Coding các module AI & Giám sát):_ Dev Team là **A / R**, PM/QA nhận tin (I).
- _Task 6 (Kiểm thử tải & Tự động hóa):_ QA là **A / R**, Dev tham vấn sửa bug (C).
- _Task 7 (Kiểm thử UAT Người dùng):_ PM là **A** (người ký nghiệm thu), BA là **R**, QA/Dev hỗ trợ.
- _Task 8 (Triển khai Go-Live Production):_ PM là **A / R**, Dev là **R** (hỗ trợ kỹ thuật).

---

### HƯỚNG DẪN REQUEST 3: BÀI TOÁN SƠ ĐỒ MẠNG CPM & NÉN TIẾN ĐỘ (2.0 Điểm)

#### 1. Bước 1: Tìm tất cả các đường đi (Paths) từ Start đến End

Lần theo các mũi tên phụ thuộc từ `Start` đến `End`:

- $Path_1: \text{Start} \rightarrow A \rightarrow B \rightarrow D \rightarrow F \rightarrow H \rightarrow \text{End} = 3 + 4 + 5 + 4 + 6 = \mathbf{22\text{ tuần}}$
- $Path_2: \text{Start} \rightarrow C \rightarrow D \rightarrow F \rightarrow H \rightarrow \text{End} = 6 + 5 + 4 + 6 = \mathbf{21\text{ tuần}}$
- $Path_3: \text{Start} \rightarrow C \rightarrow E \rightarrow G \rightarrow H \rightarrow \text{End} = 6 + 8 + 3 + 6 = \mathbf{23\text{ tuần}}$
- $\Rightarrow$ **Critical Path (Đường dài nhất):** $Path_3 (\text{Start} \rightarrow C \rightarrow E \rightarrow G \rightarrow H \rightarrow \text{End})$.
- $\Rightarrow$ **Thời gian tối thiểu hoàn thành dự án:** $\mathbf{23\text{ tuần}}$.

#### 2. Bước 2: Thuật toán tính Forward & Backward Pass để lập bảng Float

- **Forward Pass ($ES \rightarrow EF$):** $ES_{\text{Start}} = 0$, $EF = ES + \text{Duration}$. Khi có nhiều nhánh nhập vào: $ES = \max(EF_{\text{các nhánh trước}})$.
- **Backward Pass ($LF \rightarrow LS$):** $LF_{\text{End}} = 23$, $LS = LF - \text{Duration}$. Khi có nhiều nhánh lùi về: $LF = \min(LS_{\text{các nhánh sau}})$.
- **Tính Float (Total Slack):** $\text{Float} = LS - ES = LF - EF$.
- Hoạt động có $\text{Float} = 0$: Thuộc **Critical Path** (C, E, G, H).
- Hoạt động có $\text{Float} > 0$: Có độ trễ linh hoạt (A, B, D, F đều có Float = 1).

#### 3. Bước 3: Hóa giải bẫy nén tiến độ 3 tuần (từ 23 tuần xuống 20 tuần)

> ️ **BẪY ĐƯỜNG GĂNG MỚI:**
>
> - $Path_3 = 23\text{ tuần}$ (Đường găng chính).
> - $Path_1 = 22\text{ tuần}$ (Đường phụ dài thứ hai).
> - Nếu chỉ giảm $Path_3$ đi 3 tuần $\implies Path_3$ còn $20\text{ tuần}$, nhưng $Path_1 (22\text{ tuần})$ sẽ vượt lên thành đường găng mới $\implies$ Dự án vẫn mất 22 tuần!

- **Cách giải bài toán nén tiến độ:**
- **Cách tối ưu 1:** Rút ngắn ở **Activity H** (công việc chung của cả 3 đường) đi 2 tuần bằng **Crashing** $\implies Path_1=20, Path_2=19, Path_3=21$. Sau đó rút ngắn tiếp 1 tuần tại **Activity E** (trên $Path_3$) bằng **Fast-tracking** $\implies Path_3$ về đúng $20\text{ tuần}$.
- Kết quả: Cả $Path_3$ và $Path_1$ đều đạt mức $20\text{ tuần}$, hoàn thành đúng mục tiêu nén 3 tuần của Ban Giám hiệu.

---

### HƯỚNG DẪN REQUEST 4: BÀI TOÁN TÍNH TOÁN EVM (2.0 Điểm)

#### 1. Hệ thống công thức cốt lõi cần nhớ:

1. $PV = \text{Giá trị kế hoạch tại mốc đánh giá } t$
2. $EV = \text{Tỷ lệ \% hoàn thành thực tế} \times BAC$
3. $AC = \text{Chi phí thực tế đã giải ngân (đề bài cho)}$
4. $\mathbf{CPI = \frac{EV}{AC}}$ (Chỉ số hiệu suất Chi phí):

- $CPI > 1.0 \rightarrow$ Tiết kiệm chi phí (_Under Budget_).
- $CPI < 1.0 \rightarrow$ Vượt ngân sách / Bội chi (_Over Budget_).

5. $\mathbf{SPI = \frac{EV}{PV}}$ (Chỉ số hiệu suất Tiến độ):

- $SPI > 1.0 \rightarrow$ Nhanh hơn tiến độ (_Ahead of Schedule_).
- $SPI < 1.0 \rightarrow$ Chậm tiến độ (_Behind Schedule_).

#### 2. Các bước tính toán cho đề bài:

- $EV = 35\% \times \$200,000 = \$70,000$.
- $CPI = \frac{70,000}{90,000} \approx 0.78 < 1.0 \implies$ **Bội chi ngân sách**.
- $SPI = \frac{70,000}{80,000} = 0.875 < 1.0 \implies$ **Chậm tiến độ kế hoạch**.
- **2 Hành động khắc phục:**
- _Tiến độ:_ Áp dụng **Fast-tracking** (làm song song các khâu độc lập để không tốn thêm tiền).
- _Chi phí:_ Rà soát quy trình mua sắm, kiểm soát phạm vi (_Prevent Scope Creep_), cắt giảm tài nguyên Cloud dư thừa.

---

### HƯỚNG DẪN REQUEST 5: RISK MANAGEMENT (2.0 Điểm)

- Lập bảng quản lý 3 rủi ro: Lỗi nhận diện AI, Sập máy chủ quá tải, Rò rỉ đề thi.
- Phân loại đầy đủ: Xác suất (P), Mức độ tác động (I), Chiến lược ứng phó (Mitigate/Avoid).
- Nêu cụ thể hành động **Phòng ngừa trước (Mitigation)** và **Xử lý sự cố sau (Contingency)** theo khung chuẩn ở Đề 1 & Đề 2.
