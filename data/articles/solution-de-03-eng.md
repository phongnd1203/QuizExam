================================================================================
EXAM 03: TECHNICAL QUANTITATIVE SCENARIO (CPM, EVM, RACI & RISK - CA 2 BENCHMARK)
PROJECT: AI AUTOMATED ONLINE EXAM PROCTORING SYSTEM (AUTOPROCTOR)
OFFICIAL EOS EXAM SOLUTION (ENGLISH VERSION)
================================================================================

REQUEST 1: ORGANIZATIONAL STRUCTURE ANALYSIS (2.0 Points)
--------------------------------------------------------------------------------

1. Evaluation of Current Functional Structure:

- FPT University's traditional functional department model is INAPPROPRIATE for delivering a complex, high-stakes software project like AutoProctor.
- Justification: Functional silos isolate personnel across independent departments (Examination Center, IT Department, Academic Affairs). The Project Manager possesses little to no authority (Low/No PM Authority), lacks direct control over the $200,000 budget, and must navigate multi-layered administrative approvals from functional managers, inevitably resulting in critical project delivery delays.

2. Proposed Optimal Organizational Structure:

- Recommended Structure: Strong Matrix Structure.

3. Four Key Justifications:

- 1. High PM Authority: The Project Manager holds primary authority over the $200,000 budget and project master schedule, directly assigning tasks and assessing project team member performance throughout the project lifecycle.
- 2. Cross-Functional Resource Synergy: Enables seamless pooling of specialized AI machine learning engineers, cybersecurity experts from the IT department, and experienced test proctors from the Examination Center into one dedicated cross-functional team.
- 3. Clear Single-Point Accountability: Establishes a single point of responsibility (the PM) accountable directly to the University Board of Management for overall software quality, data security, and on-time delivery.
- 4. Rapid Decision-Making & Agility: Empowers the project team to quickly respond to technical roadblocks, shifting requirements, and architectural issues without waiting for bureaucratic approvals across separate departments.

================================================================================
REQUEST 2: RESPONSIBILITY ASSIGNMENT MATRIX (RACI MATRIX - 2.0 Points)
--------------------------------------------------------------------------------

Golden Rule: Exactly ONE 'A' (Accountable - Final approval authority) per task row.

Project Roles:

- PM: Project Manager
- BA: Business Analyst
- Dev: Solution Architect / Lead Developer
- QA: QA / Test Lead

RACI Matrix for 8 Core SDLC Activities:

Task 1: Requirements Elicitation & SRS Document Approval
-> PM: I | BA: A, R | Dev: C | QA: I

Task 2: System Architecture & Database Schema Design
-> PM: I | BA: C | Dev: A, R | QA: C

Task 3: UI/UX Wireframing & Interactive Prototype Design
-> PM: I | BA: R | Dev: A | QA: C

Task 4: AI Facial Recognition & Eye-Gaze Tracking Engine Development
-> PM: I | BA: I | Dev: A, R | QA: I

Task 5: Real-time Proctoring Dashboard & Live Alert Backend Development
-> PM: I | BA: I | Dev: A, R | QA: I

Task 6: High-Concurrency Load Testing (5,000 users) & Security Pentest
-> PM: I | BA: I | Dev: C | QA: A, R

Task 7: User Acceptance Testing (UAT Sign-off)
-> PM: A | BA: R | Dev: C | QA: R

Task 8: Production Deployment & Campus Go-Live
-> PM: A, R | BA: I | Dev: R | QA: I

================================================================================
REQUEST 3: CPM NETWORK ANALYSIS & CRASHING (2.0 Points)
--------------------------------------------------------------------------------

1. Identification of All Network Paths and Durations:

- Path 1: Start -> A -> B -> D -> F -> H -> End

* Duration = 3 + 4 + 5 + 4 + 6 = 22 weeks.

- Path 2: Start -> C -> D -> F -> H -> End

* Duration = 6 + 5 + 4 + 6 = 21 weeks.

- Path 3: Start -> C -> E -> G -> H -> End

* Duration = 6 + 8 + 3 + 6 = 23 weeks.

2. Critical Path & Minimum Project Duration:

- Critical Path (Longest path): Start -> C -> E -> G -> H -> End (Path 3).
- Minimum Project Duration: 23 weeks.

3. Forward/Backward Pass Computations Table (ES, EF, LS, LF, Float):

Formulas:

- Forward Pass: ES(Start) = 0; EF = ES + Duration; ES = Max(EF of predecessors).
- Backward Pass: LF(End) = 23; LS = LF - Duration; LF = Min(LS of successors).
- Float (Total Slack) = LS - ES = LF - EF.

Calculations Table:

- Activity A | Duration: 3 | ES: 0 | EF: 3 | LS: 1 | LF: 4 | Float: 1 (Flexible)
- Activity B | Duration: 4 | ES: 3 | EF: 7 | LS: 4 | LF: 8 | Float: 1 (Flexible)
- Activity C | Duration: 6 | ES: 0 | EF: 6 | LS: 0 | LF: 6 | Float: 0 (Critical)
- Activity D | Duration: 5 | ES: 7 | EF: 12 | LS: 8 | LF: 13 | Float: 1 (Flexible)
- Activity E | Duration: 8 | ES: 6 | EF: 14 | LS: 6 | LF: 14 | Float: 0 (Critical)
- Activity F | Duration: 4 | ES: 12 | EF: 16 | LS: 13 | LF: 17 | Float: 1 (Flexible)
- Activity G | Duration: 3 | ES: 14 | EF: 17 | LS: 14 | LF: 17 | Float: 0 (Critical)
- Activity H | Duration: 6 | ES: 17 | EF: 23 | LS: 17 | LF: 23 | Float: 0 (Critical)

* Most Flexible Activities: Activities A, B, D, and F (each has Float = 1 week and can be delayed by up to 1 week without affecting the project finish date).

4. 3-Week Schedule Compression Strategy (from 23 weeks down to 20 weeks) & Secondary Path Trap Analysis:

- Secondary Critical Path Trap Analysis:

* Primary Critical Path (Path 3) = 23 weeks.
* Secondary Longest Path (Path 1) = 22 weeks.
* If the team only compresses Path 3 by 3 weeks (e.g., reducing Activity E by 3 weeks), Path 3 becomes 20 weeks, but Path 1 (22 weeks) immediately becomes the NEW CRITICAL PATH. The project would still take 22 weeks instead of 20 weeks!

- Optimal Compression Solution:

* Step 1: Apply Crashing (adding senior engineering resources) to shorten shared Activity H by 2 weeks (from 6 weeks down to 4 weeks).

- Impact: Path 1 reduces to 20 weeks, Path 2 reduces to 19 weeks, Path 3 reduces to 21 weeks.

* Step 2: Apply Fast-tracking / Crashing to shorten Activity E (on Path 3) by 1 week (from 8 weeks down to 7 weeks).

- Impact: Path 3 reduces from 21 weeks down to exactly 20 weeks.

* Final Result: Both Path 3 and Path 1 reach exactly 20 weeks, and Path 2 is 19 weeks. The 20-week compression objective is successfully achieved without secondary path bottlenecks.

================================================================================
REQUEST 4: EARNED VALUE MANAGEMENT (EVM CALCULATION - 2.0 Points)
--------------------------------------------------------------------------------

1. Given Parameters at Month 4 Milestone:

- Budget at Completion (BAC): $200,000.
- Actual Cost (AC): $90,000.
- Planned Value (PV): $80,000.
- Actual Work Completed (% Complete): 35%.

2. EVM Calculations:

- Earned Value (EV):
  EV = % Complete x BAC = 35% x $200,000 = $70,000.
- Cost Performance Index (CPI):
  CPI = EV / AC = $70,000 / $90,000 = 0.778 (approx. 0.78).
- Schedule Performance Index (SPI):
  SPI = EV / PV = $70,000 / $80,000 = 0.875.

3. Project Health Evaluation:

- Cost Health:
  CPI = 0.778 < 1.0 (Cost Variance CV = EV - AC = $70,000 - $90,000 = -$20,000 < 0).
 => The project is OVER BUDGET. For every $1.00 spent, the project only generates approximately $0.78 worth of actual deliverables.
- Schedule Health:
  SPI = 0.875 < 1.0 (Schedule Variance SV = EV - PV = $70,000 - $80,000 = -$10,000 < 0).
  => The project is BEHIND SCHEDULE. The team has completed only 87.5% of the work originally planned for Month 4.

4. Two Corrective Management Actions:

- Action 1 (Schedule Recovery): Implement Fast-tracking by executing frontend screen development and backend API construction in parallel; establish 15-minute daily standups to unblock AI team issues without adding personnel costs.
- Action 2 (Cost Recovery): Enforce strict scope control to eliminate Scope Creep, defer non-essential secondary features, review GPU Cloud instance utilization, and renegotiate vendor subscription pricing.

================================================================================
REQUEST 5: RISK MANAGEMENT (2.0 Points)
--------------------------------------------------------------------------------

Risk 1: AI Model High False-Positive Rate in Cheating Detection

- Description & Impact: AI algorithm erroneously flags innocent test-takers (due to dim ambient lighting or natural eye strain movements), causing widespread student distress and academic disputes.
- Assessment: Likelihood: High | Impact: High.
- Strategy: Mitigate.
- Mitigation Plan (Pre-emptive Action):

* Train the AI model on a diverse dataset of 50,000+ FPT student facial recordings across various angles and illumination conditions.
* Implement a progressive multi-tier alert threshold (Warning Levels 1-3) instead of instant automated exam locking.

- Contingency Plan (Post-event Action):

* Automatically record 10-second video clips before and after flagged events for mandatory human proctor review (Human-in-the-loop audit).
* Establish an online real-time examination appeals portal responding within 2 hours.

Risk 2: Server Crash under High Concurrency of 5,000 Simultaneous Students

- Description & Impact: System bottleneck or database connection pool exhaustion at exam paper distribution time disrupts campus-wide final exams.
- Assessment: Likelihood: Medium | Impact: High.
- Strategy: Mitigate.
- Mitigation Plan (Pre-emptive Action):

* Deploy a distributed Microservices architecture on AWS EKS with horizontal pod autoscaling (HPA).
* Conduct 3 full-scale load and stress simulation tests (simulating 10,000 concurrent socket connections) 2 weeks prior to exams.

- Contingency Plan (Post-event Action):

* Trigger automated hot-standby disaster recovery failover clusters within 3 minutes.
* Automatically persist student exam answers every 15 seconds to encrypted local browser cache to prevent data loss during network dropouts.

Risk 3: Exam Paper Leakage or Biometric Data Breach via Internal Network

- Description & Impact: Cyberattackers or internal actors intercept exam transmissions or exfiltrate sensitive biometric face embeddings, violating academic integrity.
- Assessment: Likelihood: Low | Impact: High.
- Strategy: Mitigate & Avoid.
- Mitigation Plan (Pre-emptive Action):

* Enforce end-to-end AES-256 bit encryption for all exam packages and surveillance video streams over HTTPS/TLS 1.3.
* Implement Zero-Trust network access with mandatory Multi-Factor Authentication (2FA) for exam creation staff.

- Contingency Plan (Post-event Action):

* Immediately revoke compromised exam packages and deploy the encrypted Backup Exam Set.
* Terminate compromised user sessions, pull tamper-proof audit trails, and report the incident to the Academic Disciplinary Board.
  \================================================================================
