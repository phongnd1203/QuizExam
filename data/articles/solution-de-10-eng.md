================================================================================
EXAM 10: SE OPEN - AI-POWERED CAREER & INTERNSHIP MATCHING PLATFORM
PROJECT: FPTU SMART CAREER & AI-POWERED INTERNSHIP MATCHING (CAREERHUB AI)
OFFICIAL EOS EXAM SOLUTION (ENGLISH VERSION)
================================================================================

REQUEST 1: PROJECT CHARTER STATEMENT (2.0 Points)
--------------------------------------------------------------------------------

1. Project Name:
   FPT University Smart Career & AI-Powered Internship Matching Platform (CareerHub AI).

2. Project Purpose & Justification:

- Current Pain Points:
  Currently, among the network of 50,000 FPT University students seeking on-the-job training (OJT) corporate internships, CV submissions are handled informally across scattered emails and social media groups. Response rates from recruiters fall below 15% due to mismatched candidate skills. Meanwhile, over 500 partner employers spend 5-10 minutes manually screening each CV, lacking tools to verify self-reported student GPAs and technical certifications.
- Project Purpose:
  Develop an intelligent career portal leveraging Natural Language Processing (NLP) and Machine Learning to automatically parse CVs in 5 seconds, calculate semantic compatibility scores (Match Score) against job descriptions (JDs), and sync officially verified transcripts directly from university databases.
- Value Delivered:

* Increase relevant, major-aligned internship placement rates by 60%.
* Cut candidate screening and interview scheduling turnaround for recruiters by 75%.
* Digitize and automate 100% of the three-way OJT performance evaluation workflow between University, Student, and Employer.

3. High-Level Requirements:

- Requirement 1 (AI CV Parsing & Semantic Skill Matching):
  Automatically parse and normalize multi-format CVs (.pdf,.docx), extract technical skills and experience via Named Entity Recognition (NER), perform semantic vector matching against JDs, and output compatibility scores (0-100%).
- Requirement 2 (Employer ATS & Virtual Video Interview Room):
  Provide an Applicant Tracking System (ATS) with interactive Kanban pipeline boards, automated invitation dispatching, and embedded HD WebRTC virtual video interview rooms.
- Requirement 3 (Verified Student Portfolio & OJT Evaluation System):
  Feature cryptographically verified student badges synced with official university records (GPA, outstanding capstone projects, professional certifications) and online OJT performance evaluation protocols for HR managers.

================================================================================
REQUEST 2: COST / BUDGET ESTIMATION (5 SE & AI COST ITEMS) (2.0 Points)
--------------------------------------------------------------------------------

Total Approved Budget (BAC): $140,000 USD | Project Duration: 7 Months (28 Weeks).

Cost Item 1: Software & AI Engineering Labor Cost

- Description: Engineering compensation: 1 Project Manager (7m), 1 AI/NLP Engineer (7m), 2 Fullstack Developers (7m), 1 UI/UX Designer (5m), 1 QA Automation Engineer (5m). Total 4,480 billable hours.
- Estimation Method: Bottom-up Estimation.

* PM (7m): $20,000
* AI/NLP Lead (7m): $22,000
* 2 Fullstack Devs (7m): $32,000
* UI/UX Designer (5m): $9,000
* QA Automation (5m): $7,000

- Estimated Cost: $90,000
- Person in Charge: Project Manager & Engineering Lead.

Cost Item 2: Cloud Infrastructure & Database Hosting

- Description: AWS EC2 backend compute, AWS RDS PostgreSQL managed database, Amazon S3 storage for 50,000 CV files, and CloudFront CDN for 10 months.
- Estimation Method: Parametric Estimation ($1,200/month x 10 months = $12,000).
- Estimated Cost: $12,000
- Person in Charge: Solution Architect & DevOps Lead.

Cost Item 3: AI NLP & OCR Parsing API Subscriptions

- Description: LLM and OCR parsing API subscriptions (OpenAI/Claude API & Document AI) for text extraction and vector embedding generation for 50,000 CV uploads.
- Estimation Method: Parametric Estimation (50,000 CVs x $0.25/CV = $12,500).
- Estimated Cost: $12,500
- Person in Charge: AI Lead & Procurement Officer.

Cost Item 4: Corporate Onboarding & Virtual Job Fair Setup

- Description: 4 onboarding training webinars for 200 corporate HR managers and live media streaming infrastructure for hosting an online Virtual Job Fair for 10,000 students.
- Estimation Method: Bottom-up Estimation.
- Estimated Cost: $10,500
- Person in Charge: Corporate Relations Lead & Event Coordinator.

Cost Item 5: Contingency Reserve

- Description: Dedicated risk reserve to absorb complex CV formatting variations requiring NER model fine-tuning, matching algorithm performance optimization overtime, or WebRTC interview room scaling during job fair traffic surges.
- Estimation Method: Reserve Analysis (Approx 10.71% of BAC).

* Base Total = $90,000 + $12,000 + $12,500 + $10,500 = $125,000.
* Contingency Reserve = $15,000.
* Total Project Budget (BAC) = $125,000 + $15,000 = $140,000.

- Estimated Cost: $15,000
- Person in Charge: Project Sponsor & Project Manager.

================================================================================
REQUEST 3: PROJECT COMMUNICATION PLAN (3.0 Points)
--------------------------------------------------------------------------------

Communication Plan Matrix:

Stakeholder 1: Project Engineering & AI Team (Project-Internal)

- Information: Daily sprint velocity, NLP NER parsing accuracy benchmarks, Cosine matching performance, technical blockers.
- Purpose: Ensure seamless technical synchronization across AI, Backend, Frontend, and QA teams.
- Frequency: Daily (15 minutes).
- Method / Format: Daily Standup via Slack Huddle + Jira Agile Scrum Board.
- Responsible Person: Scrum Master / AI Tech Lead.

Stakeholder 2: Corporate Relations Department & OJT Academic Board (Organization-Internal)

- Information: Partner enterprise participation metrics, transcript API security protocol sign-offs, online OJT evaluation standards.
- Purpose: Ensure absolute student data privacy and maintain full compliance with university internship regulations.
- Frequency: Bi-weekly.
- Method / Format: In-person Operations Review Meeting + Automated Dashboard via Email.
- Responsible Person: Project Manager & Head of Corporate Relations.

Stakeholder 3: Corporate Recruiters (HR) & Job-seeking Students (External)

- Information: JD posting and candidate filtering guides on ATS, personalized job match notifications, WebRTC interview invitations.
- Purpose: Assist recruiters in sourcing top talent and provide students with immediate, transparent career opportunities.
- Frequency: Weekly and event-driven automated notifications.
- Method / Format: Live Onboarding Webinars + Automated System Emails + In-app Live Chat Support.
- Responsible Person: Lead Business Analyst (BA) & User Operations Lead.

================================================================================
REQUEST 4: MILESTONES & 10 SDLC SOFTWARE ACTIVITIES (3.0 Points)
--------------------------------------------------------------------------------

1. Three Core Project Milestones:

- Milestone 1 (SRS & AI Pipeline Baseline Sign-off): Finalize Software Requirements Specification and AI CV Matching Pipeline Architecture (End of Month 2).
- Milestone 2 (AI Matching Engine & Employer ATS Complete): Complete AI Matching engine and Employer ATS recruitment portal (End of Month 5).
- Milestone 3 (Virtual Job Fair Trial & Official Go-Live): Successfully conduct Virtual Job Fair pilot trial and officially launch campus-wide (End of Month 7).

2. Milestone 2 (AI Matching & Employer ATS) 10 Activities & Logical Dependencies:

- Activity 1 (A1): Set up Backend Framework (Spring Boot/NestJS) and PostgreSQL relational database schema.

* Predecessors: Start (Milestone 1 Sign-off)
* Dependency: FS

- Activity 2 (A2): Build Multi-Format Document Parsing Pipeline (OCR & PDF/DOCX Parser).

* Predecessors: A1
* Dependency: FS (Database and storage foundations must exist before building parser workers).

- Activity 3 (A3): Develop NLP Entity Extraction Model for technical skills, education, and experience (NER Engine).

* Predecessors: A2
* Dependency: FS (Raw parsed text from A2 is required before semantic entity extraction).

- Activity 4 (A4): Implement Semantic Cosine Similarity Matching Algorithm between candidate CVs and employer JDs.

* Predecessors: A3
* Dependency: FS (Requires extracted NER skill vectors to compute match percentage scores).

- Activity 5 (A5): Develop Student Web Portal UI (ReactJS) for CV uploading and smart job recommendations.

* Predecessors: A1
* Dependency: FS (Student UI develops in parallel once database models are structured).

- Activity 6 (A6): Develop Employer ATS Management Subsystem with Kanban pipeline boards.

* Predecessors: A1
* Dependency: FS (Employer candidate management interface develops alongside student portal).

- Activity 7 (A7): Integrate Interview Scheduling Module & Automated Email/SMS Notification Engine.

* Predecessors: A6
* Dependency: SS (Scheduling module integrates in parallel with ATS board finalization).

- Activity 8 (A8): Integrate Embedded WebRTC HD Virtual Video Interview Rooms.

* Predecessors: A7
* Dependency: FS (Interview scheduling workflow A7 must exist to generate authenticated WebRTC room tokens).

- Activity 9 (A9): Build Candidate Compatibility Match Scoring Report & Skill Gap Analytics UI for HR.

* Predecessors: A4, A6
* Dependency: FF (Match Report UI finishes when both Matching Algorithm A4 and ATS Board A6 are ready).

- Activity 10 (A10): Automated End-to-End System Integration Testing: CV Upload -> AI Match -> HR Review -> Video Interview.

* Predecessors: A5, A8, A9
* Dependency: FS (Full integration testing commences only when Student Portal A5, Video Room A8, and HR Reports A9 are completed).
  \================================================================================
