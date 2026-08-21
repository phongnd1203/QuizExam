# BÍ KÍP PHÒNG THI & HƯỚNG DẪN TRÌNH BÀY CHUẨN 10/10 PE PMG201c TRÊN EOS

---

## I. 5 BẪY ĐỀ THI KINH ĐIỂN & CÁCH HÓA GIẢI

```
┌─────────────────────────────────────────────────────────────────────────────────────────────┐
│ 5 NGUYÊN TẮC VÀNG TRONG PHÒNG THI PE │
├─────────────────────────────────────────────────────────────────────────────────────────────┤
│ 1. BẪY ĐƯỜNG GĂNG TIỀM ẨN: Khi Crashing đường găng chính, luôn kiểm tra các đường phụ. │
│ 2. BẪY NGÂN SÁCH CỐ ĐỊNH: Bảng chi phí tự lập (5 mục + Quỹ rủi ro) PHẢI CỘNG ĐÚNG BẰNG BAC.│
│ 3. BẪY RACI: Mỗi task chỉ được phép có DUY NHẤT 1 chữ cái 'A' (Accountable). │
│ 4. BẪY RỦI RO: Phân biệt rõ Rủi ro (Hiện tượng) -> Phòng ngừa (Trước) -> Ứng phó (Sau). │
│ 5. TRÌNH BÀY EOS: Không kẻ bảng viền kẻ, dùng gạch đầu dòng và Text Markdown sạch sẽ. │
└─────────────────────────────────────────────────────────────────────────────────────────────┘
```

### 1. Bẫy Đường găng Tiềm ẩn (Secondary Critical Path Trap)

- **Hiện tượng:** Khi đề yêu cầu rút ngắn dự án 3 tuần (ví dụ từ 19 tuần xuống 16 tuần, hoặc 23 tuần xuống 20 tuần), nếu thí sinh chỉ rút ngắn trên các công việc của đường găng chính, nhánh phụ có độ dài 17 tuần (hoặc 22 tuần) sẽ vượt lên thành đường găng mới!
- **Cách xử lý chuẩn 10/10:**
- Luôn liệt kê toàn bộ các đường đi ($Path_1, Path_2, Path_3...$) và ghi rõ độ dài.
- Chọn rút ngắn ở các hoạt động **dùng chung** (ví dụ node Start hoặc node End/G/H) để tất cả các đường cùng giảm.
- Hoặc rút ngắn song song: Giảm đường chính $x$ tuần và giảm thêm ở nhánh phụ $y$ tuần để tất cả các đường đều $\le$ thời gian mục tiêu.

---

### 2. Bẫy Ngân sách Cố định (Fixed Budget Balance Trap)

- **Hiện tượng:** Đề thi dạng đóng cho sẵn $BAC = 1.5\text{ tỷ}$ (như Đề 2) hoặc $3.2\text{ tỷ}$ (như SU26). Khi làm Request 2, nhiều thí sinh ước lượng ngẫu nhiên khiến tổng cộng bị lệch (thừa hoặc thiếu 50 - 100 triệu). Giám khảo sẽ trừ điểm nặng ở tiêu chí "Budget Constraint".
- **Cách xử lý chuẩn 10/10:**
- Lấy một tờ giấy nháp, cộng tổng 5 hạng mục chi phí chính trước.
- Lấy trần ngân sách trừ đi tổng 5 mục $\implies$ ra chính xác số tiền của mục thứ 6 (**Contingency Reserve**).
- Kiểm tra lại phép cộng: $\text{Tổng 6 mục} = \text{Ngân sách đề cho } 100\%$.

---

### 3. Bẫy Ma trận RACI (Single Accountability Trap)

- **Hiện tượng:** Trong một task, gán cho cả PM và Tech Lead đều là chữ 'A'.
- **Quy tắc bất di bất dịch:** Mỗi task **CHỈ ĐƯỢC CÓ DUY NHẤT 1 CHỮ 'A'**. Người làm thực tế ('R') có thể có nhiều người, người được hỏi ý kiến ('C') và nhận tin ('I') có thể có nhiều người.

---

### 4. Bẫy Quản lý Rủi ro (Mitigation vs Contingency)

- **Phòng ngừa (Mitigation Plan):** Hành động chuẩn bị **TRƯỚC** khi rủi ro diễn ra nhằm giảm thiểu xác suất ($P$) hoặc giảm thiệt hại ($I$) (ví dụ: Ký hợp đồng khóa giá, sao lưu dữ liệu hàng ngày, huấn luyện nhân sự).
- **Ứng phó sự cố (Contingency Plan):** Kế hoạch hành động ứng cứu **SAU KHI** sự cố đã thực sự xảy ra (ví dụ: Kích hoạt quỹ dự phòng tiền mặt, chuyển đổi sang máy chủ dự phòng Failover, huy động thợ làm ca đêm).

---

### 5. Bẫy Quản lý Giá trị Thu được (EVM - Thời gian vs Khối lượng hoàn thành)

- $PV$ (Planned Value) = $\frac{\text{Thời gian đã trôi qua}}{\text{Tổng thời gian kế hoạch}} \times BAC$.
- $EV$ (Earned Value) = $\text{Tỷ lệ \% công việc thực tế đã hoàn thành} \times BAC$.
- **Đừng nhầm lẫn giữa \% thời gian và \% công việc hoàn thành!**

---

## ️ II. HƯỚNG DẪN TRÌNH BÀY DẠNG TEXT CHUẨN TRÊN PHẦN MỀM THI EOS

Phần mềm thi EOS Client không hỗ trợ trình duyệt web đầy đủ và không vẽ được sơ đồ/kẻ bảng phức tạp. Hãy trình bày theo định dạng **Text phân cấp (Bullet Points)** sạch đẹp dưới đây để giám khảo chấm nhanh và cho trọn điểm:

### 1. Trình bày Cost Items:

```text
Cost Item 1: Development Team Labor Cost
- Description: Chi phí cho 1 PM, 2 Devs và 1 QA làm việc trong 4 tháng (1.920 giờ).
- Estimation Method: Bottom-up Estimation (160h x $25 + 1200h x $20 + 400h x $12).
- Estimated Cost: $32,800.
- Person in Charge: Project Manager & HR Lead.
```

### 2. Trình bày RACI:

```text
Task 1: Requirements Gathering (SRS) -> PM: I | BA: A, R | Dev: C | QA: I
Task 2: UI/UX & System Design -> PM: I | BA: C | Dev: A, R | QA: C
Task 3: Core Module Development -> PM: I | BA: I | Dev: A, R | QA: I
Task 4: Unit & Integration Testing -> PM: I | BA: I | Dev: C | QA: A, R
Task 5: User Acceptance Testing (UAT)-> PM: A | BA: R | Dev: C | QA: R
Task 6: Production Release -> PM: A, R | BA: I | Dev: R | QA: I
```

### 3. Trình bày Sơ đồ mạng CPM:

```text
All Paths & Durations:
- Path 1: Start -> A -> B -> D -> F -> H -> End = 3 + 4 + 5 + 4 + 6 = 22 weeks
- Path 2: Start -> C -> D -> F -> H -> End = 6 + 5 + 4 + 6 = 21 weeks
- Path 3: Start -> C -> E -> G -> H -> End = 6 + 8 + 3 + 6 = 23 weeks

Critical Path: Start -> C -> E -> G -> H -> End
Minimum Project Duration: 23 weeks

Calculations Table:
- Activity A | Duration: 3 | ES: 0 | EF: 3 | LS: 1 | LF: 4 | Float: 1 (Flexible)
- Activity B | Duration: 4 | ES: 3 | EF: 7 | LS: 4 | LF: 8 | Float: 1 (Flexible)
- Activity C | Duration: 6 | ES: 0 | EF: 6 | LS: 0 | LF: 6 | Float: 0 (Critical)
- Activity D | Duration: 5 | ES: 7 | EF: 12 | LS: 8 | LF: 13 | Float: 1 (Flexible)
- Activity E | Duration: 8 | ES: 6 | EF: 14 | LS: 6 | LF: 14 | Float: 0 (Critical)
- Activity F | Duration: 4 | ES: 12 | EF: 16 | LS: 13 | LF: 17 | Float: 1 (Flexible)
- Activity G | Duration: 3 | ES: 14 | EF: 17 | LS: 14 | LF: 17 | Float: 0 (Critical)
- Activity H | Duration: 6 | ES: 17 | EF: 23 | LS: 17 | LF: 23 | Float: 0 (Critical)
```
