================================================================================
EXAM 01: OPEN IT PROJECT SCENARIO
PROJECT: FPT UNIVERSITY SMART CAMPUS SPACEHUB
OFFICIAL EOS EXAM SOLUTION (ENGLISH VERSION)
================================================================================

REQUEST 1: PROJECT CHARTER STATEMENT (2.0 Points)
--------------------------------------------------------------------------------

1. Project Name:
   FPT University Smart Campus Study Space & Equipment Booking System (FPTU SpaceHub).

2. Project Purpose / Justification:

- Current Pain Points:
  Currently, students and faculty members at FPT University face significant challenges when trying to book self-study rooms, group meeting spaces, and academic equipment (projectors, VR headsets, graphic tablets). The existing process is handled manually via physical logbooks and instant messages, resulting in frequent double-booking, inefficient utilization of available spaces, and long queue times (averaging 20-30 minutes per request).
- Project Purpose:
  Develop a centralized Web and Mobile App platform (FPTU SpaceHub) to digitize and automate 100% of the search, real-time reservation, and return tracking processes for campus academic spaces and equipment.
- Business & Academic Value:

* Reduce booking processing time by 85% (from 25 minutes down to under 2 minutes on the app).
* Increase facility utilization efficiency by 40%, serving over 15,000 students and staff.
* Provide full transparency and auditability of campus asset usage data for University Management.

3. High-Level Requirements:

- Requirement 1 (End-User Mobile & Web Portal):
  Provide an intuitive user interface allowing students to view real-time interactive campus room availability maps, reserve study rooms by time slots, request accompanying equipment, receive automated dynamic QR check-in/check-out codes, and receive push notifications for due dates.
- Requirement 2 (Facility Backoffice Management Module):
  Enable Campus Facility Officers to approve special room requests, automatically lock rooms for maintenance schedules, track real-time equipment status, and trigger automated alerts for overdue returns or reported equipment damage.
- Requirement 3 (Executive Analytics & Reporting Dashboard):
  Provide University Board of Management with interactive analytical dashboards detailing space utilization rates across time blocks/buildings, peak usage hours, and asset circulation metrics to inform future campus capital expenditure plans.

================================================================================
REQUEST 2: COST / BUDGET ESTIMATION (2.0 Points)
--------------------------------------------------------------------------------

Total Project Budget (BAC): $130,000 USD | Project Duration: 4 Months (16 Weeks).

Cost Item 1: Development Team Labor Cost

- Description: Salary and compensation for the core development team: 1 Project Manager (4 months), 1 Business Analyst (3 months), 1 UI/UX Designer (2 months), 2 Fullstack Developers (4 months), and 1 QA/Tester (3 months). Total of 2,720 billable hours.
- Estimation Method: Bottom-up Estimation.

* PM: 1 person x 640h x $25/h = $16,000
* BA: 1 person x 480h x $18/h = $8,640
* UI/UX: 1 person x 320h x $15/h = $4,800
* Devs: 2 persons x 640h x $20/h = $25,600
* QA: 1 person x 480h x $14/h = $6,720

- Estimated Cost: $61,760
- Person in Charge: Project Manager (PM) & HR Department Lead.

Cost Item 2: Cloud Infrastructure & Server Hosting

- Description: AWS Cloud Hosting services (EC2 compute instances, Managed PostgreSQL RDS, Amazon S3 storage, ElastiCache Redis) supporting Development, Staging, and Production environments across 4 development months and the first 6 operational months (Total 10 months).
- Estimation Method: Parametric Estimation.

* Standard AWS infrastructure tier: $850/month x 10 months = $8,500.

- Estimated Cost: $8,500
- Person in Charge: Technical Lead & DevOps Engineer.

Cost Item 3: Software Licenses & Third-party API Services

- Description: Team tooling licenses and external API integrations: GitHub Enterprise (8 seats), Figma Professional, Jira Software, Google Maps Platform API, and SMS/Email OTP delivery services (Twilio/SendGrid) for 10 months.
- Estimation Method: Parametric Estimation.

* Tooling subscriptions: $350/month x 10 months = $3,500.
* API consumption fees: $500/month x 10 months = $5,000.

- Estimated Cost: $8,500
- Person in Charge: Project Manager & Procurement Officer.

Cost Item 4: Hardware, QR Scanners & Pilot Deployment

- Description: Procurement of 20 dedicated fixed QR Code scanner terminals installed at study room doors, 500 RFID/NFC equipment asset tags, pilot installation labor, and 3 training workshops for 50 campus administration staff.
- Estimation Method: Analogous Estimation & Vendor Bid.

* 20 Dedicated QR Terminals: 20 units x $300 = $6,000.
* RFID tags and mounting accessories: $2,500.
* Training manuals & workshop logistics: $3,500.

- Estimated Cost: $12,000
- Person in Charge: Campus Facility Director & Operations Lead.

Cost Item 5: Quality Assurance, Security Pentest & External Audit

- Description: Engagement of an independent cybersecurity consulting firm to conduct penetration testing, high-concurrency load testing (5,000 simultaneous users), and formal security audit certification prior to production release.
- Estimation Method: Fixed-price Vendor Bid.

* Fixed-fee comprehensive audit contract: $15,000.

- Estimated Cost: $15,000
- Person in Charge: QA Lead & University IT Security Committee.

Cost Item 6: Contingency Reserve (Risk Buffer)

- Description: Budget reserve allocated to absorb identified project risks (e.g., unexpected SSO integration complexities, exchange rate variations, overtime pay due to technical bottlenecks).
- Estimation Method: Reserve Analysis (Allocated at approximately 22.8% of the baseline budget).

* Base Total = $61,760 + $8,500 + $8,500 + $12,000 + $15,000 = $105,760.
* Contingency Reserve = $24,240.
* Total Project Budget (BAC) = $105,760 + $24,240 = $130,000.

- Estimated Cost: $24,240
- Person in Charge: Project Sponsor & Project Manager.

================================================================================
REQUEST 3: PROJECT COMMUNICATION PLAN (3.0 Points)
--------------------------------------------------------------------------------

1. Definition of Three Stakeholder Categories:

- Category 1 (Project-Internal): Core Project Implementation Team (Developers, QA Tester, UI/UX Designer).
- Category 2 (Organization-Internal): Campus Facility Management & IT Department (FPT University Internal Depts).
- Category 3 (External): End-User Representatives (Student Union Executives & Faculty Members).

2. Communication Plan Matrix:

Stakeholder 1: Core Development Team (Project-Internal)

- Information: Daily task progress, defect backlog, technical impediments (blockers), upcoming Sprint deliverables.
- Purpose: Synchronize daily work between Frontend, Backend, and QA; identify and remove technical bottlenecks immediately.
- Frequency: Daily (15-minute morning standup).
- Method / Format: Daily Standup Meeting (In-person or MS Teams) + Jira Kanban Board.
- Responsible Person: Scrum Master / Project Manager.

Stakeholder 2: Campus Facility & University IT Department (Organization-Internal)

- Information: Milestone progress reports, QR hardware installation schedule at campus facilities, server network permissions.
- Purpose: Ensure software compliance with university administrative regulations and seamless IT infrastructure compatibility.
- Frequency: Weekly (Every Friday afternoon).
- Method / Format: Formal Executive Summary via Email + Face-to-Face Status Review Meeting.
- Responsible Person: Project Manager & Technical Lead.

Stakeholder 3: Student Union & End-User Representatives (External)

- Information: Product release demos, user guide manuals, UAT usability survey forms, and feature enhancement requests.
- Purpose: Gather real user feedback on UI/UX ergonomics and user experience before public rollout.
- Frequency: Bi-weekly or at the conclusion of each UAT testing phase.
- Method / Format: Interactive Hands-on Demo Workshop + Online Usability Questionnaire (Google Forms).
- Responsible Person: Lead Business Analyst (BA) & UI/UX Designer.

================================================================================
REQUEST 4: PROJECT MILESTONES & ACTIVITY SEQUENCING (3.0 Points)
--------------------------------------------------------------------------------

1. Three Major Project Milestones:

- Milestone 1 (Initiation & System Design Sign-off): Completion of requirements elicitation, SRS approval, database architecture, and UI/UX design sign-off (End of Month 1).
- Milestone 2 (Core System Development & Integration Complete): Completion of core backend modules, frontend implementation, and system-wide API integrations (End of Month 3).
- Milestone 3 (UAT Acceptance & Official Campus Go-Live): Completion of User Acceptance Testing, data migration, and campus-wide production launch (End of Month 4).

2. Detailed 10 Activities of Milestone 2 (Core Development) & Logical Precedence:

- Activity 1 (A1): Setup development/staging environments and initialize PostgreSQL database schema.

* Predecessors: Start (Milestone 1 Sign-off)
* Dependency: FS

- Activity 2 (A2): Develop Authentication & Role-Based Access Control (RBAC) Module with FPT SSO OAuth 2.0.

* Predecessors: A1
* Dependency: FS (Database schema must be active before developing authentication logic).

- Activity 3 (A3): Develop Mobile App Frontend UI (Flutter) for room browsing and space search.

* Predecessors: A1
* Dependency: FS (Frontend UI prototyping begins immediately once database schema is locked).

- Activity 4 (A4): Develop Real-time Room Booking Engine Backend APIs.

* Predecessors: A2
* Dependency: FS (User authentication must be finalized before booking logic can be implemented).

- Activity 5 (A5): Integrate Backend Booking APIs into Mobile App Frontend.

* Predecessors: A4
* Dependency: SS (Start-to-Start overlapping: Frontend integration begins as soon as initial backend API endpoints are available).

- Activity 6 (A6): Develop Academic Equipment Circulation Management Backend APIs.

* Predecessors: A2
* Dependency: FS (Executed in parallel with A4 after A2 completes).

- Activity 7 (A7): Implement Dynamic QR Code Generation and Integrate with Physical Scanner Terminals.

* Predecessors: A4
* Dependency: FS (Booking confirmation must be operational before generating QR tokens).

- Activity 8 (A8): Implement Webhook Event System and Push Notification Dispatcher for due reminders.

* Predecessors: A7
* Dependency: SS (Developed concurrently alongside QR check-in feature).

- Activity 9 (A9): Develop Facility Admin Web Dashboard for Campus Staff.

* Predecessors: A4, A6
* Dependency: FF (Finish-to-Finish: Admin dashboard development completes when both room booking and equipment backend APIs are finished).

- Activity 10 (A10): Execute Comprehensive System Integration Testing (SIT).

* Predecessors: A5, A8, A9
* Dependency: FS (System testing commences only when Mobile App, Admin Dashboard, and Backend APIs are fully interconnected).
  \================================================================================
