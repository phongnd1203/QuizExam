================================================================================
EXAM 11: SE OPEN - AUTOMATED CODE ASSESSMENT & ONLINE JUDGE PLATFORM
PROJECT: FPT UNIVERSITY ONLINE JUDGE & CODE ASSESSMENT (FPTU CODEJUDGE)
OFFICIAL EOS EXAM SOLUTION (ENGLISH VERSION)
================================================================================

REQUEST 1: PROJECT CHARTER STATEMENT (2.0 Points)
--------------------------------------------------------------------------------

1. Project Name:
   FPT University Real-time Online Judge & Automated Code Assessment Platform (FPTU CodeJudge).

2. Project Purpose & Justification:

- Current Pain Points:
  Each academic semester, over 10,000 IT students at FPT University enroll in foundational and advanced programming courses (C, Java, Python, C++, C#). Faculty members must download thousands of source code files to personal computers to compile and grade manually, resulting in a 2-3 week grading turnaround. Executing student code directly creates severe security hazards (Fork bombs, infinite loops, and filesystem deletions). Students also lack immediate feedback to debug code iteratively.
- Project Purpose:
  Develop an automated code execution platform running in secure isolated sandboxes (Docker / gVisor), evaluating student submissions against 100 hidden test cases within 2 seconds (< 2s), strictly enforcing RAM/CPU limits, and rendering live leaderboards.
- Value Delivered:

* Eliminate 95% of manual grading overhead for faculty and automate grade ledger synchronization.
* Deliver sub-2-second automated feedback and compiler diagnostics to accelerate student algorithmic mastery.
* Prevent 100% of malicious execution threats and detect source code copying via AST syntax tree analysis.

3. High-Level Requirements:

- Requirement 1 (Isolated High-Security Sandboxed Execution Engine):
  Multi-threaded judge runner compiling and executing 5 languages (C/C++, Java, Python, C#, Go) within isolated containers (Docker + gVisor/cgroups), strictly enforcing Time Limits (1.0s) and Memory Limits (256MB) with kernel syscall filtering.
- Requirement 2 (Test Case Management & AST Anti-Plagiarism Subsystem):
  Allow instructors to configure multi-tiered test cases (Public Test Cases & Hidden Edge Cases), integrated with an Abstract Syntax Tree (AST) plagiarism detector to detect structural code copying.
- Requirement 3 (Web IDE & Real-Time Live Scoreboard):
  Embed an in-browser code editor with syntax autocompletion (Monaco Editor), displaying granular status outputs (Passed / Wrong Answer / Time Limit Exceeded / Memory Limit Exceeded / Runtime Error) and WebSocket-driven live leaderboards.

================================================================================
REQUEST 2: COST / BUDGET ESTIMATION (5 SE COST ITEMS) (2.0 Points)
--------------------------------------------------------------------------------

Total Approved Budget (BAC): $135,000 USD | Project Duration: 6 Months (24 Weeks).

Cost Item 1: Software & DevOps Engineering Labor Cost

- Description: Technical team payroll: 1 Project Manager (6m), 1 DevOps Sandbox Specialist (6m), 2 Backend Developers (6m), 1 Frontend Web Dev (5m), 1 QA Automation Engineer (5m). Total 3,840 billable hours.
- Estimation Method: Bottom-up Estimation.

* PM (6m): $18,000
* DevOps Sandbox Lead (6m): $20,000
* 2 Backend Devs (6m): $26,000
* Frontend Dev (5m): $13,000
* QA Automation (5m): $8,000

- Estimated Cost: $85,000
- Person in Charge: Project Manager & Technical Lead.

Cost Item 2: Cloud Compute Cluster for High-Throughput Code Execution

- Description: AWS EC2 c5.2xlarge Compute-Optimized worker clusters for parallel compilation, AWS RDS PostgreSQL managed database, and Redis/RabbitMQ message brokers for 10 months.
- Estimation Method: Parametric Estimation ($1,800/month x 10 months = $18,000).
- Estimated Cost: $18,000
- Person in Charge: DevOps Lead & Infrastructure Architect.

Cost Item 3: Security & Sandbox Tooling Subscriptions

- Description: Commercial licenses for Linux kernel security (Sysdig / gVisor Enterprise) and Locust Pro high-concurrency load testing tools for 6 months.
- Estimation Method: Parametric Estimation.
- Estimated Cost: $5,000
- Person in Charge: Security Lead & IT Procurement Officer.

Cost Item 4: Faculty Training & Mock Exam Pilots

- Description: 4 problem bank authoring workshops for 80 Computer Science lecturers and 2 large-scale mock exam simulations for 2,000 students.
- Estimation Method: Bottom-up Estimation.
- Estimated Cost: $12,000
- Person in Charge: Academic Affairs Representative & Testing Coordinator.

Cost Item 5: Contingency Reserve

- Description: Dedicated risk reserve to absorb unforeseen peak CPU surges during final exams requiring dynamic worker node burst capacity, patching emerging sandbox escape vulnerabilities, or overtime debugging.
- Estimation Method: Reserve Analysis (Approx 11.11% of BAC).

* Base Total = $85,000 + $18,000 + $5,000 + $12,000 = $120,000.
* Contingency Reserve = $15,000.
* Total Project Budget (BAC) = $120,000 + $15,000 = $135,000.

- Estimated Cost: $15,000
- Person in Charge: Project Sponsor & Project Manager.

================================================================================
REQUEST 3: PROJECT COMMUNICATION PLAN (3.0 Points)
--------------------------------------------------------------------------------

Communication Plan Matrix:

Stakeholder 1: DevOps & Backend Engineering Team (Project-Internal)

- Information: Development velocity, sandbox container security benchmarks, RabbitMQ job queue processing rates, score reporting latency.
- Purpose: Ensure worker nodes operate with zero security breaches and maintain low latency under load.
- Frequency: Daily (15 minutes).
- Method / Format: Daily Standup via Slack Huddle + Jira Kanban Board.
- Responsible Person: Scrum Master / DevOps Tech Lead.

Stakeholder 2: Programming Department & Examination Office (Organization-Internal)

- Information: Test case format standardization, AST similarity violation thresholds, grading rubric baseline.
- Purpose: Ensure automated grading strictly matches academic assessment policies and examination regulations.
- Frequency: Bi-weekly.
- Method / Format: In-person Coordination Meeting + Formal Technical Protocol Sign-off.
- Responsible Person: Project Manager & Academic Coordinator.

Stakeholder 3: Students & Course Lecturers (External)

- Information: Web IDE interface guidelines, mock trial announcements, test case dispute resolution workflow.
- Purpose: Ensure students are proficient with the IDE and empower lecturers to monitor submissions in real time.
- Frequency: Weekly and event-driven exam announcements.
- Method / Format: Web Portal Announcements + Email Bulletins + Discord/Telegram Real-time Support.
- Responsible Person: Lead Business Analyst (BA) & Technical Support Specialist.

================================================================================
REQUEST 4: MILESTONES & 10 SDLC SOFTWARE ACTIVITIES (3.0 Points)
--------------------------------------------------------------------------------

1. Three Core Project Milestones:

- Milestone 1 (Secure Sandbox Architecture & SRS Sign-off): Finalize Software Requirements Specification and Secure Sandbox Architecture Design (End of Month 2).
- Milestone 2 (Judge Engine & Test Case Manager Complete): Complete Sandboxed Judge Engine and Test Case Management Subsystem (End of Month 4).
- Milestone 3 (Stress Test 5,000 Users Passed & Official Exam Go-Live): Pass 5,000-user concurrent submission stress test and launch for live exams (End of Month 6).

2. Milestone 2 (Judge Engine & Test Cases) 10 Activities & Logical Dependencies:

- Activity 1 (A1): Set up Backend Framework (Go/Rust/Spring Boot) and PostgreSQL relational database schema.

* Predecessors: Start (Milestone 1 Sign-off)
* Dependency: FS

- Activity 2 (A2): Build Isolated Container Sandbox with resource limits (Docker + gVisor/cgroups).

* Predecessors: A1
* Dependency: FS (Base server environment must exist before configuring sandboxes).

- Activity 3 (A3): Develop Multi-Language Compiler & Safe Execution Runner (C, Java, Python, C++).

* Predecessors: A2
* Dependency: FS (Requires operational sandbox environment before installing compilers).

- Activity 4 (A4): Implement Multi-threaded Job Queue and Dispatcher (RabbitMQ & Redis Workers).

* Predecessors: A2
* Dependency: FS (Worker nodes must be provisioned before wiring message queues).

- Activity 5 (A5): Develop Output Comparison & Verdict Evaluation Module (Passed/WA/TLE/MLE/RTE).

* Predecessors: A3, A4
* Dependency: FS (Both Runner A3 and Job Queue A4 must be ready before grading logic coding).

- Activity 6 (A6): Build AST Syntax Tree Anti-Plagiarism Engine to detect source code copying.

* Predecessors: A1
* Dependency: FS (AST engine develops independently after submission data schema is established).

- Activity 7 (A7): Embed Monaco Web IDE with syntax highlighting on the student web interface.

* Predecessors: A1
* Dependency: FS (Web IDE scaffolding builds in parallel once UI designs are completed).

- Activity 8 (A8): Implement Real-Time WebSockets Channel for instant verdict delivery and Live Scoreboards.

* Predecessors: A5, A7
* Dependency: SS (WebSockets connect to UI in parallel once grading engine emits result events).

- Activity 9 (A9): Develop Faculty Administration Portal for question bank authoring and hidden test cases.

* Predecessors: A5, A6
* Dependency: FF (Question bank UI finishes when both Judge Module A5 and AST Engine A6 are ready).

- Activity 10 (A10): Automated End-to-End System Integration Testing: Submission -> Sandbox Compile -> Test Case -> Live Verdict.

* Predecessors: A8, A9
* Dependency: FS (Full integration testing starts only after Real-time Channels A8 and Faculty Portal A9 are verified).
  \================================================================================
