================================================================================
EXAM 08: SE - CAPSTONE PROJECT MANAGEMENT & ANTI-PLAGIARISM SYSTEM
PROJECT: FPTU CAPSTONE PROJECT MANAGEMENT & ANTI-PLAGIARISM SYSTEM (CAPSTONEHUB)
OFFICIAL EOS EXAM SOLUTION (ENGLISH VERSION)
================================================================================

REQUEST 1: PROJECT CHARTER STATEMENT (2.0 Points)
--------------------------------------------------------------------------------

1. Project Name:
   FPT University Student Capstone Project Management & Anti-Plagiarism Evaluation System (FPTU CapstoneHub).

2. Project Purpose & Justification:

- Current Pain Points:
  Currently, the capstone graduation thesis process for over 3,000 students and 300 faculty members each year at FPT University is managed manually via scattered Google Drive folders, Excel spreadsheets, and email chains. This causes lost submissions, missed sprint milestones, and up to 2 weeks of administrative delay in organizing defense committees. Furthermore, plagiarism and source code copying checks are performed subjectively by instructors, creating substantial risks of academic misconduct.
- Project Purpose:
  Develop a centralized digital capstone lifecycle management platform that automates team formation, sprint-based deliverable tracking, document plagiarism scanning, and Abstract Syntax Tree (AST) source code similarity analysis within 60 seconds.
- Value Delivered:

* Cut academic administration workload and defense scheduling turnaround by 80%.
* Standardize 100% of grading workflows based on transparent Rubrics with verifiable digital signatures.
* Elevate university academic integrity by eliminating 100% of undetected source code copying and document plagiarism.

3. High-Level Technical Requirements:

- Requirement 1 (Topic Registration, Team Formation & Sprint Progress Tracker):
  Enable automated student team matching, mentor topic approval, iterative sprint milestone submission, and real-time Burndown Chart tracking.
- Requirement 2 (Document Plagiarism & AST Source Code Similarity Engine):
  Integrate document text plagiarism APIs (Turnitin/Copyleaks) against a 10-year historical capstone repository and the web; develop an AST parser engine to detect variable renaming, function shuffling, and structural copying across multiple languages (.java,.cs,.js,.py).
- Requirement 3 (Committee Scheduling, Online Rubric Scoring & Digital Signatures):
  Automate defense committee schedule allocation to prevent timetable conflicts, provide an online scoring interface compliant with Rubric criteria, and generate tamper-proof digitally signed defense protocols.

================================================================================
REQUEST 2: COST / BUDGET PLAN (5 EDUCATIONAL SOFTWARE COST ITEMS) (2.0 Points)
--------------------------------------------------------------------------------

Total Approved Budget (BAC): $150,000 USD | Project Duration: 8 Months (32 Weeks).

Cost Item 1: Software Engineering Labor Cost

- Description: Salary for core technical team: 1 Project Manager (8m), 1 Solution Architect (6m), 2 Backend Developers (8m), 2 Frontend Web Devs (7m), 1 QA Automation Engineer (6m). Total 5,120 billable hours.
- Estimation Method: Bottom-up Estimation.

* PM (8m): $22,000
* Solution Architect (6m): $21,000
* 2 Backend Devs (8m): $34,000
* 2 Frontend Devs (7m): $20,000
* 1 QA Automation (6m): $8,000

- Estimated Cost: $105,000
- Person in Charge: Project Manager & Engineering Lead.

Cost Item 2: Cloud Storage & Database Hosting

- Description: AWS EC2 backend compute, Managed RDS PostgreSQL database, Amazon S3 storage (20TB secure encrypted bucket for 10-year archive), and CloudFront CDN for 12 months.
- Estimation Method: Parametric Estimation ($1,200/month x 12 months = $14,400).
- Estimated Cost: $14,400
- Person in Charge: Solution Architect & DevOps Engineer.

Cost Item 3: Plagiarism & AI Code Detection API Licenses

- Description: Commercial API license integration for document similarity and AI code detection (Turnitin / Copyleaks REST API) covering a quota of 15,000 document scans.
- Estimation Method: Parametric Estimation (15,000 scans x $0.80/scan = $12,000).
- Estimated Cost: $12,000
- Person in Charge: Project Manager & Academic Board Representative.

Cost Item 4: Faculty Training Workshops & System Onboarding

- Description: 6 comprehensive training workshops for 300 Faculty Mentors/Reviewers and 3,000 capstone students covering online submissions, grading workflows, and similarity reports.
- Estimation Method: Bottom-up Estimation.
- Estimated Cost: $4,600
- Person in Charge: Academic Affairs Lead & Training Coordinator.

Cost Item 5: Contingency Reserve

- Description: Risk reserve for potential document scanning quota overages, S3 video storage expansion, or overtime shifts for multi-language AST syntax tree parser optimization.
- Estimation Method: Reserve Analysis (Approx 9.33% of BAC).

* Base Total = $105,000 + $14,400 + $12,000 + $4,600 = $136,000.
* Contingency Reserve = $14,000.
* Total Project Budget (BAC) = $136,000 + $14,000 = $150,000.

- Estimated Cost: $14,000
- Person in Charge: Project Sponsor & Project Manager.

================================================================================
REQUEST 3: POWER/INTEREST GRID & COMMUNICATION PLAN (3.0 Points)
--------------------------------------------------------------------------------

1. Stakeholder Classification on the Power/Interest Grid:

- Quadrant 1: High Power – High Interest -> MANAGE CLOSELY:

* Key Group: Academic Affairs Department & University Scientific Council.
* Strategy: Conduct bi-weekly in-depth review sessions on academic policies, rubric criteria alignment, and milestone progress.

- Quadrant 2: High Power – Low Interest -> KEEP SATISFIED:

* Key Group: University Board of Management (Project Sponsor).
* Strategy: Deliver high-level quarterly executive dashboard summaries on budget burn rate and milestone sign-offs.

- Quadrant 3: Low Power – High Interest -> KEEP INFORMED:

* Key Group: Faculty Mentors, Reviewing Jurors & Capstone Students.
* Strategy: Distribute automated deadline notifications, user manuals, and host interactive onboarding webinars.

- Quadrant 4: Low Power – Low Interest -> MONITOR:

* Key Group: Legacy IT Administration & Archival Clerks.
* Strategy: Send periodic monthly technical status bulletins regarding data migration and server backups.

2. Communication Plan Matrix:

Stakeholder 1: Academic Affairs & Scientific Council (Manage Closely)

- Information: Feature release status, AST plagiarism engine benchmark reports, rubric configuration updates.
- Purpose: Ensure complete adherence to institutional academic standards and examination regulations.
- Frequency: Bi-weekly.
- Method / Format: In-person Status Review Meeting + Formal Milestone Protocol Sign-off.
- Responsible Person: Project Manager & Lead Business Analyst (BA).

Stakeholder 2: University Board of Management (Keep Satisfied)

- Information: Executive milestone summaries, BAC vs AC financial reports, strategic risk registers.
- Purpose: Maintain top-level sponsorship and executive alignment.
- Frequency: Quarterly.
- Method / Format: Summary Executive Memo via Email + 30-minute Quarterly Briefing.
- Responsible Person: Project Sponsor & Project Manager.

Stakeholder 3: Faculty Mentors & Capstone Students (Keep Informed)

- Information: Sprint submission deadlines, automated similarity scores, defense timetables, user guides.
- Purpose: Ensure smooth, timely submission and transparent academic evaluations.
- Frequency: Weekly and event-driven automated notifications.
- Method / Format: Automated System Emails + Web Portal Announcements + Onboarding Webinars.
- Responsible Person: Academic Affairs Coordinator & Technical Support Lead.

================================================================================
REQUEST 4: MILESTONES & 10 SDLC SOFTWARE ACTIVITIES (3.0 Points)
--------------------------------------------------------------------------------

1. Three Core Project Milestones:

- Milestone 1 (SRS & Database Schema Sign-off): Finalize Software Requirements Specification and Database Schema Design (End of Month 2).
- Milestone 2 (Core Capstone Modules & Plagiarism Engine Complete): Complete Capstone Management modules and Plagiarism API integration (End of Month 5).
- Milestone 3 (Live Defense Trial Acceptance & Official Go-Live): Successfully complete end-to-end live defense trials and launch campus-wide (End of Month 8).

2. Milestone 2 (Core Capstone & Plagiarism Engine) 10 Activities & Logical Dependencies:

- Activity 1 (A1): Set up Backend Framework (Spring Boot) and PostgreSQL relational database.

* Predecessors: Start (Milestone 1 Sign-off)
* Dependency: FS

- Activity 2 (A2): Build Role-Based Access Control (RBAC) & FPT SSO Authentication.

* Predecessors: A1
* Dependency: FS (Database user tables must exist before authentication coding).

- Activity 3 (A3): Develop Topic Registration & Student Team Matching API.

* Predecessors: A2
* Dependency: FS (Requires authentication before accessing registration services).

- Activity 4 (A4): Develop Web Portal UI for Sprint Deliverable Submissions & Burndown Charts.

* Predecessors: A3
* Dependency: FS (Team and topic APIs must exist before building submission interfaces).

- Activity 5 (A5): Develop File Upload Subsystem with Secure AWS S3 Object Storage.

* Predecessors: A3
* Dependency: FS (Executes independently after team registration is ready).

- Activity 6 (A6): Integrate Document Plagiarism REST APIs (Turnitin / Copyleaks).

* Predecessors: A5
* Dependency: FS (File upload to S3 must succeed prior to sending documents to plagiarism API).

- Activity 7 (A7): Develop Multi-Language AST Source Code Similarity Engine.

* Predecessors: A5
* Dependency: SS (Fast-tracked: AST parser begins syntax tree generation as soon as source code files upload).

- Activity 8 (A8): Build Faculty Plagiarism Heatmap & Detailed Inspection Report UI.

* Predecessors: A6, A7
* Dependency: FF (Inspection UI completes only when both text scan A6 and AST code scan A7 are finalized).

- Activity 9 (A9): Develop Online Rubric Scoring Module & Digitally Signed Defense Protocol Generation.

* Predecessors: A4
* Dependency: FS (Requires submission portal completion before building juror scoring forms).

- Activity 10 (A10): Automated End-to-End System Integration Testing: Submission -> Plagiarism Scan -> Grading -> Digital Signing.

* Predecessors: A8, A9
* Dependency: FS (Full integration testing commences only when both Plagiarism Engine A8 and Scoring Module A9 are finished).
  \================================================================================
