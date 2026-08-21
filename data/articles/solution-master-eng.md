################################################################################

# PMG201c PRACTICAL EXAM (PE) MASTER SOLUTIONS (COMPLETE 11 EXAMS IN ENGLISH)

# OFFICIAL EOS CLIENT PLAIN TEXT FORMAT FOR FPT UNIVERSITY

# COURSE: PROJECT MANAGEMENT FUNDAMENTALS (PMG201c)

################################################################################

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

################################################################################

================================================================================
EXAM 02: CLOSED CAMPAIGN & EVENT SCENARIO (SP26 / SU26 BENCHMARK)
PROJECT: "GREEN CAMPUS & ZERO-WASTE INITIATIVE 2026"
OFFICIAL EOS EXAM SOLUTION (ENGLISH VERSION)
================================================================================

QUESTION 1: PROJECT CHARTER & 4 CONSTRAINTS (2.5 Points)
--------------------------------------------------------------------------------

1. Project Name:
   Green Campus & Zero-Waste Initiative 2026.

2. Project Purpose & Justification:

- Main Purpose:
  Establish a sustainable waste management ecosystem across FPT University Campus, eliminating 80% of single-use plastic waste, and instilling source-separation waste habits for 15,000 students and university staff by combining smart infrastructure, digital micro-apps, and viral community campaigns.
- Reason 1 (Environmental Protection & Operational Cost Reduction):
  Drastically reduce single-use plastic discarded into the environment daily, cutting the university's annual waste handling and disposal operational expenses by 50%.
- Reason 2 (Civic Education & Community Leadership):
  Cultivate eco-friendly habits (carrying reusable bottles, sorting recyclables correctly) among students, positioning FPT University as a pioneer in Environmental, Social, and Governance (ESG) campus sustainability.

3. 4 Project Constraints:

- 1. Scope Constraint:

* In-Scope:

- Procurement and installation of 50 smart 3-compartment recycling bins and 10 automatic filtered water refill stations across academic buildings.
- Production and broadcasting of 8 short viral awareness videos across TikTok/Facebook in collaboration with Student Clubs.
- Planning and execution of a 2-day "Green Swap Day" festival (exchanging sorted recyclables for eco-gifts).
- Development and deployment of the "Green Points" Web Mini App for mobile reward tracking.

* Out-of-Scope:

- Handling heavy construction and industrial demolition debris on campus.
- Subsidizing operations of external commercial cafeteria franchises.
- Purchasing large specialized municipal waste collection trucks.

* 2. Time Constraint:
     The entire initiative must strictly conclude within exactly 5 months from project charter authorization to final handover and financial audit.
* 3. Cost Constraint:
     The project budget is capped at a strict ceiling of 1,500,000,000 VND (1.5 Billion VND) with zero budget overrun tolerance.
* 4. Quality Constraint:

- 100% of waste sorting stations and water refill points pass strict hygienic and mechanical acceptance tests prior to Month 3.
- At least 10,000 registered student accounts actively earning points on the "Green Points" Mini App.
- Minimum of 5 metric tons of sorted recyclables collected during Green Swap Day.
- Student satisfaction rate on post-campaign surveys reaches at least 85%.

================================================================================
QUESTION 2: COST & BUDGET PLAN (FIXED 1.5 BILLION VND BUDGET) (2.5 Points)
--------------------------------------------------------------------------------

Total Budget at Completion (BAC): 1,500,000,000 VND (Strict 100% Balance) | Duration: 5 Months.

Cost Item 1: Smart Waste Stations & Water Refill Units Procurement

- Description: Purchase of 50 powder-coated stainless steel 3-compartment sorting stations and 10 high-capacity filtered water refill stations; plumbing fixtures, pipeline installation, and electrical hookups.
- Estimation Method: Vendor Bid Analysis (Selected lowest competitive quote among 3 ISO-certified suppliers).

* 50 Smart 3-compartment bins: 50 units x 7,500,000 VND = 375,000,000 VND
* 10 Public water refill units: 10 units x 20,000,000 VND = 200,000,000 VND
* Installation labor & plumbing accessories: 45,000,000 VND

- Estimated Cost: 620,000,000 VND
- Person in Charge: Project Manager & Facility Procurement Officer.

Cost Item 2: "Green Points" Web Mini App Software Development

- Description: Engineering compensation and hosting for the mobile web mini app: 1 PM (2 months), 2 Developers (3 months), 1 UI/UX Designer (1.5 months), 1 QA (1.5 months), plus 5 months of cloud server hosting.
- Estimation Method: Bottom-up Estimation.

* Engineering labor: 215,000,000 VND
* Cloud Server & Domain (5 months): 25,000,000 VND

- Estimated Cost: 240,000,000 VND
- Person in Charge: Technical Lead & Software Development Lead.

Cost Item 3: Media Production & Multi-channel Viral Marketing

- Description: Production of 8 high-production-value viral video shorts (TikTok/Reels), influencer endorsement fees for 4 campus student KOLs, targeted social media ads, and physical banner/standee marketing.
- Estimation Method: Parametric Estimation.

* 8 Viral videos: 8 videos x 22,500,000 VND = 180,000,000 VND
* KOL endorsement fees & targeted digital ads: 40,000,000 VND

- Estimated Cost: 220,000,000 VND
- Person in Charge: Marketing & Communications Manager.

Cost Item 4: "Green Swap Day" 2-Day Festival Logistics & Gifts

- Description: Rental of main stage, modular exhibition booths, professional audio/lighting for 2 festival days; 3,000 eco-reward packages (laser-engraved stainless steel thermal tumblers, potted succulents, bookstore vouchers).
- Estimation Method: Bottom-up Estimation.

* Stage, sound, lighting & booth rental: 60,000,000 VND
* 3,000 Eco-gift reward packages: 3,000 sets x 36,666 VND = 110,000,000 VND
* 2-day on-site event logistics & staff catering: 30,000,000 VND

- Estimated Cost: 200,000,000 VND
- Person in Charge: Event Operations Lead & Student Affairs Director.

Cost Item 5: Volunteer Training, Uniforms & Field Operations

- Description: Manufacturing 150 branded Green Volunteer uniforms, printing 5,000 waste-sorting educational infographics, conducting 2 onboarding workshops, and providing volunteer meal/transport allowances.
- Estimation Method: Analogous Estimation.

* 150 Uniforms & accreditation lanyards: 30,000,000 VND
* Onboarding workshop & daily volunteer meals: 40,000,000 VND
* Educational printed handbooks & field materials: 30,000,000 VND

- Estimated Cost: 100,000,000 VND
- Person in Charge: Volunteer Coordinator & HR Officer.

Cost Item 6: Contingency Reserve (100% Fixed Budget Balance)

- Description: Financial risk reserve designated to absorb identified contingencies (e.g., equipment price variations, plumbing rework, emergency eco-gift restocking due to higher student turnout).
- Estimation Method: Reserve Analysis (Calculated to achieve exact 100% BAC balance).

* Base Total = 620M + 240M + 220M + 200M + 100M = 1,380,000,000 VND.
* Contingency Reserve = 1,500,000,000 - 1,380,000,000 = 120,000,000 VND (Exact 8.0% of BAC).
* Total Project Budget = 1,380,000,000 + 120,000,000 = 1,500,000,000 VND (Exact 100% balance).

- Estimated Cost: 120,000,000 VND
- Person in Charge: Project Sponsor & Project Manager.

================================================================================
QUESTION 3: RISK MANAGEMENT (2.5 Points)
--------------------------------------------------------------------------------

Risk 1: Cost Overrun in Hardware Procurement and Plumbing Installation

- Description & Impact: Market steel price inflation or unexpected architectural plumbing complexities lead to costs exceeding the 1.5 Billion VND fixed budget.
- Assessment: Likelihood: Medium | Impact: High.
- Strategy: Mitigate & Transfer.
- Mitigation Plan (Pre-emptive Action):

* Execute fixed-price turnkey procurement contracts with suppliers during Month 1.
* Perform comprehensive campus architectural plumbing surveys prior to final quotation signing.

- Contingency Plan (Post-event Action):

* Draw down up to 120,000,000 VND from the Contingency Reserve.
* Descope non-essential aesthetic decorations to protect core functionality.

Risk 2: Schedule Delays in Station Installation and Plumbing Integration

- Description & Impact: Equipment delivery delays or construction disruptions interfering with class hours result in missing the Month 3 completion milestone.
- Assessment: Likelihood: High | Impact: High.
- Strategy: Mitigate.
- Mitigation Plan (Pre-emptive Action):

* Develop a rolling installation schedule with 3 progressive acceptance batches.
* Schedule all noisy drilling and pipe routing exclusively during weekend and night windows.
* Insert strict contractual liquidated damages clauses (1% penalty per day of supplier delay).

- Contingency Plan (Post-event Action):

* Authorize overtime weekend shifts for technical contractors (Fast-tracking).
* Prioritize immediate completion of high-traffic main lecture hall stations first.

Risk 3: Low Student Engagement and Poor App Adoption

- Description & Impact: Students resist downloading the app or ignore waste sorting, failing to achieve the 10,000-user target and causing initiative failure.
- Assessment: Likelihood: Medium | Impact: High.
- Strategy: Mitigate.
- Mitigation Plan (Pre-emptive Action):

* Build a zero-friction Web/Zalo Mini App requiring no app-store installation; instant QR scan logs points in under 5 seconds.
* Collaborate with University Youth Union and Faculty to link eco-points with Extracurricular Activity Credits.
* Launch interactive social media mini-challenges with attractive early-bird prizes.

- Contingency Plan (Post-event Action):

* Activate a "Double Points Week" (x2 Green Points) during the campaign kickoff.
* Deploy on-site volunteers at all 10 water refill stations to guide students hands-on.

================================================================================
QUESTION 4: PROJECT MILESTONES & 10 ACTIVITIES (2.5 Points)
--------------------------------------------------------------------------------

1. Four Major Project Milestones:

- Milestone 1 (Initiation & Partnership Sign-off): Comprehensive plan approval and sponsorship/vendor contract execution (End of Month 1).
- Milestone 2 (Procurement & Software Launch): Completion of station manufacturing and public release of "Green Points" Mini App (End of Month 2).
- Milestone 3 (Campus Execution & Green Swap Day Festival): Full infrastructure installation and successful execution of 2-day festival (End of Month 4).
- Milestone 4 (Project Closing & Impact Handover): Comprehensive audit, asset handover to campus facilities, and post-campaign impact report (End of Month 5).

2. Detailed 10 Activities for Milestone 3 (Campus Execution & Festival) & Logical Precedence:

- Activity 1 (A1): Conduct comprehensive architectural site survey for 50 bin stations and 10 water units.

* Predecessors: Start (Milestone 2 completed)
* Dependency: FS

- Activity 2 (A2): Execute plumbing pipeline routing and electrical power connections for 10 water stations.

* Predecessors: A1
* Dependency: FS (Site survey must finalize exact tap locations before pipe routing commences).

- Activity 3 (A3): Install 50 smart 3-compartment waste sorting stations in lecture hall corridors.

* Predecessors: A1
* Dependency: FS (Installed concurrently alongside water station plumbing).

- Activity 4 (A4): Mount Mini App QR codes and sorting guideline infographic panels on all units.

* Predecessors: A2, A3
* Dependency: FF (Signage mounting concludes once both bins and water units are physically mounted).

- Activity 5 (A5): Conduct water quality filtration lab tests and obtain hygienic safety certification.

* Predecessors: A2
* Dependency: FS (Water plumbing must be fully pressurized and sanitized before laboratory sampling).

- Activity 6 (A6): Recruit and onboard 150 Green Student Volunteers.

* Predecessors: A1
* Dependency: SS (Volunteer onboarding commences concurrently alongside site survey).

- Activity 7 (A7): Construct main stage, exhibition pavilions, and audio/visual rigs for the festival.

* Predecessors: A4
* Dependency: FS (Commences after campus-wide bin mounting is completed).

- Activity 8 (A8): Stockpile 3,000 eco-reward packages and prepare temporary recycling storage bays.

* Predecessors: A7
* Dependency: SS (Gift stocking proceeds in parallel as festival booths are erected).

- Activity 9 (A9): Host the 2-day "Green Swap Day" campus-wide festival.

* Predecessors: A5, A6, A7, A8
* Dependency: FS (Festival kickoff requires certified water units, trained volunteers, stage, and gifts ready).

- Activity 10 (A10): Sort, package, weigh, and transfer 5 metric tons of recyclables to certified recycling plant.

* Predecessors: A9
* Dependency: FS (Final weighing and vehicle dispatch take place immediately following festival closure).
  \================================================================================

################################################################################

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

################################################################################

================================================================================
EXAM 04: WBS SCOPE MANAGEMENT & SMART GOALS (SMART HOSPITAL)
PROJECT: SMART HOSPITAL & TELE-HEALTH CONSULTATION PORTAL
OFFICIAL EOS EXAM SOLUTION (ENGLISH VERSION)
================================================================================

REQUEST 1: ESTABLISHING SMART PROJECT OBJECTIVES (2.5 Points)
--------------------------------------------------------------------------------

Objective 1: Tele-Health Consultation Subsystem

- S (Specific):
  Develop and integrate a cross-platform (Web & Mobile App) Tele-Health Consultation subsystem allowing outpatients to schedule appointments, conduct HD encrypted real-time video medical consultations with specialists, and receive digital prescriptions.
- M (Measurable):

* Achieve at least 10,000 completed tele-health consultation sessions per month within 3 months post-launch.
* Maintain video connection latency under 3 seconds (< 3s) with audio/video jitter < 200ms.
* Achieve patient service satisfaction rating of >= 90%.

- A (Achievable):
  Leverage WebRTC real-time media protocol, sponsor's pre-existing enterprise AWS Media Streaming infrastructure, and an active pool of 50 trained hospital doctors.
- R (Relevant):
  Directly addresses the hospital's strategic goal of reducing outpatient department overcrowding by 40% while saving 60% of travel time and commuting costs for patients.
- T (Time-bound):
  Complete software development, security pentest, and operational user acceptance by Month 6 of the project (well within the 9-month overall DAC).

Objective 2: Electronic Medical Records (EMR) Digitization Subsystem

- S (Specific):
  Build a centralized electronic medical records database compliant with international healthcare data standards (HL7/FHIR), digitizing all historical patient physical charts and providing instant automated querying for physicians.
- M (Measurable):

* 100% digitization completion of all 10,000 outpatient medical paper records within the project scope.
* Achieve automated OCR text and data extraction accuracy of >= 99.8%.
* Maintain patient record retrieval and rendering response time under 1 second (< 1s).

- A (Achievable):
  Utilize medical-grade AI OCR scanning technology combined with a dedicated team of 10 data entry specialists and an AES-256 encrypted PostgreSQL database cluster.
- R (Relevant):
  Enables attending doctors to instantly access patient medical history during remote tele-consultations, eliminating 100% of lost paper charts and establishing foundational data infrastructure for digital healthcare.
- T (Time-bound):
  Complete digitization and obtain Medical Board sign-off by Month 7 of the project.

================================================================================
REQUEST 2: PROJECT SCOPE MANAGEMENT & DELIVERABLES (2.5 Points)
--------------------------------------------------------------------------------

1. In-Scope (4 Items within Project Boundaries):

- Item 1: Development of responsive Web Portal and Mobile App (iOS/Android) for outpatient appointment scheduling, medical profile management, and secure online fee payment.
- Item 2: Development of WebRTC HD Video Tele-Health consultation subsystem with in-call clinical note-taking for doctors.
- Item 3: Centralized EMR database architecture design and OCR digitization of 10,000 historical patient charts compliant with HL7/FHIR standards.
- Item 4: Digital E-Prescription module featuring drug-drug interaction warning checks and automated QR prescription issuance sent via SMS/App.

2. Out-of-Scope (4 Items to Prevent Scope Creep):

- Item 1: Procurement, installation, or hardware maintenance of hospital medical equipment (e.g., MRI, CT scanners, ultrasound units, ECG devices).
- Item 2: Direct provision of home medicine delivery courier services (the hospital will maintain separate contracts with independent third-party logistics providers).
- Item 3: Development of 115 emergency dispatch or mobile ambulance response tracking systems.
- Item 4: Development of specialized surgical room management software or advanced diagnostic imaging PACS/RIS archiving systems.

3. Project Deliverables (3 Key Deliverables):

- Deliverable 1 (Software Package): Complete source code repository and deployed production builds of the Web Portal (ReactJS) and Mobile Application (Flutter) hosted on AWS Cloud.
- Deliverable 2 (Data Package): Fully digitized, standardized, and HIPAA-compliant AES-256 encrypted database containing 10,000 historical electronic medical records.
- Deliverable 3 (Documentation & Training Package): Comprehensive technical architecture documentation, User Manuals for patients and clinical staff, and training sign-off sheets for 200 medical personnel.

================================================================================
REQUEST 3: WORK BREAKDOWN STRUCTURE (WBS 5 PHASES) (2.5 Points)
--------------------------------------------------------------------------------

Standard 5-Phase SDLC Work Breakdown Structure:

1.0 Smart Hospital & Tele-Health Consultation Portal Project
1.1 Project Initiation & Planning
1.1.1 Project Charter & Project Management Plan Sign-off
1.1.2 Stakeholder Matrix & HIPAA Healthcare Compliance Policy Baseline
1.1.3 Scope Baseline, WBS Dictionary & Cost Management Plan
1.2 System Architecture & UI/UX Design
1.2.1 Clinical Workflow Requirements & SRS Specification Approval
1.2.2 Microservices Architecture & HL7/FHIR Database Schema Design
1.2.3 Patient & Doctor UI/UX Wireframing and Interactive Prototypes
1.3 Core Engineering & Digitization
1.3.1 Appointment Booking Engine & Payment Gateway Integration
1.3.2 WebRTC HD Tele-Health Video Streaming Service
1.3.3 EMR Module & E-Prescription Engine Coding
1.3.4 Physical Scanning & AI OCR Extraction of 10,000 Medical Records
1.3.5 Hospital Admin Dashboard & Clinical Alert Subsystem
1.4 Testing, Security Audit & Quality Assurance
1.4.1 System Integration Testing (SIT) & End-to-End Workflow Validation
1.4.2 Video Streaming Stress & Concurrency Load Testing
1.4.3 HIPAA Vulnerability Assessment & Cybersecurity Penetration Testing
1.4.4 User Acceptance Testing (UAT Sign-off with Medical Board)
1.5 Deployment, Training & Handover
1.5.1 AWS Cloud Production Environment Provisioning & Release
1.5.2 Clinical Staff & Doctor Training Workshops (200 Personnel)
1.5.3 User Manual Handover, Lessons Learned Workshop & Project Closing

================================================================================
REQUEST 4: EARNED VALUE MANAGEMENT (EVM) ANALYSIS AT MONTH 4 (2.5 Points)
--------------------------------------------------------------------------------

1. Summary of Given Project Parameters:

- Total Budget at Completion (BAC): $300,000 USD
- Planned Duration at Completion (DAC): 9 Months
- Current Status Evaluation Date: Month 4 (t = 4)
- Actual Cost Incurred (AC): $110,000 USD
- Physical Progress Accomplished: 4,000 / 10,000 patient records digitized (representing 40% of total project scope).

2. Step-by-Step Calculations:

- Step 1: Calculate Planned Value (PV):
  According to the planned baseline at Month 4 out of 9 months:
  PV = (4 / 9) * BAC = (4 / 9) * $300,000 = $133,333.33 USD.

- Step 2: Calculate Earned Value (EV):
  With 4,000 out of 10,000 records completed (40% total project work completed):
  EV = 40% * BAC = 0.40 * $300,000 = $120,000.00 USD.

- Step 3: Calculate Schedule Performance Index (SPI):
  SPI = EV / PV = 120,000 / 133,333.33 = 0.90 (or 9/10).

(Supplementary Metric: Cost Performance Index CPI = EV / AC = 120,000 / 110,000 = 1.091 > 1.0)

3. Project Status Evaluation:

- Since SPI = 0.90 < 1.0 (or Schedule Variance SV = EV - PV = -$13,333.33 < 0):
  => The project is BEHIND SCHEDULE, having delivered only 90% of the planned work expected by Month 4.
- However, since CPI = 1.091 > 1.0 (or Cost Variance CV = EV - AC = +$10,000.00 > 0):
  => The project is UNDER BUDGET (cost efficient), spending less money than the value of work completed.

4. Recommended Corrective Actions:

- Action 1 (Fast-tracking):
  Execute the Tele-Health Video Consultation development and E-Prescription modules in parallel with the ongoing medical record digitization activities rather than waiting sequentially. This accelerates the critical timeline without incurring additional financial costs.
- Action 2 (Crashing):
  Reallocate a portion of the saved budget (justified by CPI = 1.091) to procure 2 additional high-speed industrial OCR scanners and authorize overtime shifts for digitization operators to process the remaining 6,000 records faster and recover the baseline schedule.
  \================================================================================

################################################################################

================================================================================
EXAM 05: SE - MICROSERVICES E-COMMERCE PLATFORM & PAYMENT GATEWAYS
PROJECT: NEXT-GEN MICROSERVICES E-COMMERCE & PAYMENT PLATFORM (NOVASHOP)
OFFICIAL EOS EXAM SOLUTION (ENGLISH VERSION)
================================================================================

REQUEST 1: NARRATIVE PROJECT CHARTER STATEMENT (2.0 Points)
--------------------------------------------------------------------------------

1. Project Name:
   Next-Generation Microservices E-Commerce & Omnichannel Payment Platform (NovaShop Platform Project).

2. Project Purpose & Technical Justification:

- Technical Pain Points:
  The existing legacy e-commerce platform of Nova Retail Corp is built upon a monolithic architecture, suffering severe downtime and database connection lockups whenever traffic exceeds 10,000 concurrent users during peak Flash Sale campaigns. Order checkout latency exceeds 5 seconds, payment transaction error rates climb to 12%, and deploying minor feature updates necessitates full system downtime, resulting in significant brand damage and lost revenue.
- Project Purpose:
  Re-architect and develop a cloud-native, microservices-driven e-commerce platform running on containerized AWS EKS (Kubernetes), integrating international PCI-DSS Level 1 compliant payment gateways and real-time AI product recommendation engines.
- Business & Engineering Value:

* Scale system concurrency capacity up to 50,000 concurrent active users and handle 500,000 transactions/day.
* Reduce checkout response time to under 2 seconds (< 2s) and lower payment processing error rate to < 0.5%.
* Accelerate feature deployment velocity by 4x via automated CI/CD pipelines, driving a 35% growth in online retail revenue.

3. High-Level Technical Requirements:

- Requirement 1 (Microservices & Distributed Architecture):
  Decouple into 6 independent microservices (Auth, Catalog, Cart, Order, Inventory, Payment) communicating asynchronously via Apache Kafka event bus, deployed on AWS Elastic Kubernetes Service (EKS) with Horizontal Pod Auto-scaling.
- Requirement 2 (Omnichannel Payment Integration & PCI-DSS):
  Integrate multiple payment channels (VNPay, MoMo, ZaloPay, International Credit Cards via Stripe) utilizing secure tokenization, asynchronous Webhook listeners, and distributed idempotency keys to prevent double-charging, achieving PCI-DSS Level 1 compliance.
- Requirement 3 (AI Real-time Recommendation & Elasticsearch):
  Deploy a distributed Elasticsearch cluster for sub-100ms full-text catalog queries, coupled with a machine learning recommendation engine to deliver personalized product feeds based on real-time browsing behavior.

================================================================================
REQUEST 2: COST / BUDGET ESTIMATION (5 SE COST ITEMS) (2.0 Points)
--------------------------------------------------------------------------------

Total Approved Budget (BAC): $160,000 USD | Project Duration: 8 Months (32 Weeks).

Cost Item 1: Software Engineering Labor Cost

- Description: Compensation for core engineering team: 1 Project Manager (8m), 1 Solution Architect (6m), 2 Backend Developers (8m), 2 Frontend/Mobile Devs (7m), 1 DevOps Engineer (6m), 1 QA Automation Engineer (6m). Total 5,440 billable hours.
- Estimation Method: Bottom-up Estimation.

* PM (8m): $22,000
* Solution Architect (6m): $21,000
* 2 Backend Devs (8m): $36,000
* 2 Frontend Devs (7m): $22,000
* 1 DevOps Engineer (6m): $8,000
* 1 QA Automation (6m): $6,000

- Estimated Cost: $115,000
- Person in Charge: Project Manager & Engineering Department Head.

Cost Item 2: Cloud Infrastructure & Distributed Middleware

- Description: AWS Cloud infrastructure: Managed Kubernetes (EKS), RDS Aurora PostgreSQL, Managed Streaming for Kafka (MSK), ElastiCache Redis, S3 Storage, and CloudFront CDN across 8 development months and 4 post-launch operational months (12 months total).
- Estimation Method: Parametric Estimation ($1,500/month x 12 months = $18,000).
- Estimated Cost: $18,000
- Person in Charge: Solution Architect & DevOps Lead.

Cost Item 3: Software Licenses & CI/CD Tooling Subscriptions

- Description: Engineering tool subscriptions: GitHub Enterprise (8 seats), JetBrains IDEs, Jira Cloud & Confluence, Postman Enterprise, Datadog APM Performance Monitoring for 8 project months.
- Estimation Method: Parametric Estimation (8 engineers x $50/seat/month x 8 months = $3,200).
- Estimated Cost: $3,200
- Person in Charge: Project Manager & Procurement Officer.

Cost Item 4: Security Pentest & PCI-DSS Level 1 Compliance Audit

- Description: External independent cybersecurity firm conducting comprehensive white-hat penetration testing, SAST/DAST automated vulnerability scanning, and formal PCI-DSS Level 1 audit certification.
- Estimation Method: Fixed-price Vendor Bid Analysis.
- Estimated Cost: $9,800
- Person in Charge: QA Lead & Security Compliance Committee.

Cost Item 5: Contingency Reserve

- Description: Dedicated risk contingency reserve to absorb technical uncertainties (e.g., Kafka message queue tuning, third-party payment API schema modifications, overtime for emergency patch fixes).
- Estimation Method: Reserve Analysis (Approx 8.75% of BAC).

* Base Total = $115,000 + $18,000 + $3,200 + $9,800 = $146,000.
* Contingency Reserve = $14,000.
* Total Project Budget (BAC) = $146,000 + $14,000 = $160,000.

- Estimated Cost: $14,000
- Person in Charge: Project Sponsor & Project Manager.

================================================================================
REQUEST 3: COMMUNICATION PLAN & TECHNICAL RACI MATRIX (3.0 Points)
--------------------------------------------------------------------------------

1. Communication Plan Matrix for 3 Key Stakeholder Groups:

Stakeholder 1: Project Engineering Team (Project-Internal)

- Information: Daily sprint velocity, blocking issues, API contracts, AWS EKS infrastructure sync.
- Purpose: Ensure seamless technical alignment across Backend, Frontend, DevOps, and QA.
- Frequency: Daily (15-minute timebox).
- Method / Format: Daily Standup via Slack Huddle + Jira Agile Scrum Board.
- Responsible Person: Scrum Master / Lead Developer.

Stakeholder 2: CTO & Head of Engineering (Organization-Internal)

- Information: System architecture diagrams, cloud capacity telemetry, budget burn rate, PCI-DSS compliance milestones.
- Purpose: Ensure architecture aligns with corporate standards and enterprise cloud security policy.
- Frequency: Bi-weekly.
- Method / Format: Formal Architecture Review Meeting + Grafana/Datadog executive dashboard.
- Responsible Person: Solution Architect & Project Manager.

Stakeholder 3: Nova Retail Product Owner & Payment Gateway Partners (External)

- Information: Sprint release demos, user story acceptance sign-off, payment partner API integration schedule.
- Purpose: Align software deliverables with business value and validate external gateway contracts.
- Frequency: Monthly (or end of each major sprint release).
- Method / Format: In-person Sprint Demo Review + E-signed UAT Acceptance Protocol.
- Responsible Person: Project Manager & Product Owner.

2. Technical RACI Matrix (Strictly ONE 'A' per Row):

- PM: Project Manager
- Arch: Solution Architect
- Dev: Senior Fullstack / DevOps Lead
- QA: QA Automation & Security Tester

RACI Breakdown for 8 Microservices Development Tasks:

- Task 1: Requirements Gathering & API Contract Sign-off
  -> PM: I | Arch: A | Dev: R | QA: C
- Task 2: Microservices Architecture & Distributed DB Schema
  -> PM: I | Arch: A, R | Dev: C | QA: I
- Task 3: AWS EKS Kubernetes Cluster & CI/CD Pipeline Setup
  -> PM: I | Arch: C | Dev (DevOps): A, R | QA: I
- Task 4: Order & Product Catalog Microservices Development
  -> PM: I | Arch: C | Dev: A, R | QA: I
- Task 5: Payment Gateway SDK Integration & Idempotency Engine
  -> PM: I | Arch: C | Dev: A, R | QA: C
- Task 6: Automated Concurrency & Stress Testing (50,000 users)
  -> PM: I | Arch: I | Dev: C | QA: A, R
- Task 7: Cybersecurity Vulnerability Assessment & PCI-DSS Audit
  -> PM: I | Arch: C | Dev: C | QA/Sec: A, R
- Task 8: Production Release, Traffic Cutover & Go-Live
  -> PM: A | Arch: R | Dev: R | QA: R

================================================================================
REQUEST 4: MILESTONES & 10 SDLC SOFTWARE ACTIVITIES (3.0 Points)
--------------------------------------------------------------------------------

1. Three Core Technical Milestones:

- Milestone 1 (Architecture & CI/CD Baseline): Complete Architecture Design, API contracts, and AWS EKS cluster deployment (End of Month 2).
- Milestone 2 (Core Microservices & Payment Gateway Integration): Complete 6 microservices backend logic and external payment gateway integrations (End of Month 5).
- Milestone 3 (PCI-DSS Certification, Stress Testing & Production Go-Live): Pass 50,000-user stress test, obtain PCI-DSS Level 1 compliance certificate, and launch platform (End of Month 8).

2. Milestone 2 (Core Services & Payment) 10 Activities & Logical Dependencies:

- Activity 1 (A1): Design distributed PostgreSQL schemas and Redis caching data models.

* Predecessors: Start (Milestone 1 Sign-off)
* Dependency: FS

- Activity 2 (A2): Develop API Gateway & Authentication Service (OAuth2 / JWT tokens).

* Predecessors: A1
* Dependency: FS (Requires database user schema completion).

- Activity 3 (A3): Develop Product Catalog Microservice & Sync data with Elasticsearch.

* Predecessors: A1
* Dependency: FS (Executes in parallel with A2 once database models exist).

- Activity 4 (A4): Develop Order Microservice connected to Apache Kafka event bus.

* Predecessors: A2
* Dependency: FS (Requires Auth & API Gateway for order routing).

- Activity 5 (A5): Develop Frontend Web & Mobile Shopping Cart UI.

* Predecessors: A4
* Dependency: SS (Fast-tracked: UI development starts as soon as Order API contract is drafted).

- Activity 6 (A6): Develop Payment Microservice for internal routing and transaction states.

* Predecessors: A4
* Dependency: FS (Order processing logic must be established before handling payments).

- Activity 7 (A7): Integrate Third-party Payment Gateway SDKs (Stripe, VNPay, MoMo).

* Predecessors: A6
* Dependency: FS (Requires internal payment service skeleton before wiring SDKs).

- Activity 8 (A8): Build Webhook Listeners & Distributed Idempotency Key Handling.

* Predecessors: A7
* Dependency: SS (Webhook listener development runs in parallel with SDK integration).

- Activity 9 (A9): Develop Secure Checkout UI & Tokenized Payment Form.

* Predecessors: A5, A7
* Dependency: FF (Checkout UI can only complete when both Cart UI A5 and Payment SDKs A7 are ready).

- Activity 10 (A10): Automated End-to-End System Integration Testing for Order & Checkout Flow.

* Predecessors: A3, A8, A9
* Dependency: FS (Full end-to-end testing begins only after Catalog, Webhooks, and Checkout UI are finished).
  \================================================================================

################################################################################

================================================================================
EXAM 06: SE - AI-POWERED LEARNING MANAGEMENT SYSTEM (AI LMS)
PROJECT: AI-POWERED ADAPTIVE LEARNING MANAGEMENT SYSTEM (EDUAI SMARTLMS)
OFFICIAL EOS EXAM SOLUTION (ENGLISH VERSION)
================================================================================

REQUEST 1: SMART GOALS & SCOPE MANAGEMENT (2.5 Points)
--------------------------------------------------------------------------------

1. Establishing Two SMART Project Goals:

Goal 1: AI-Powered Virtual Tutor Subsystem (RAG AI Assistant)

- S (Specific):
  Develop a 24/7 AI-powered virtual tutor integrated within every course module, allowing students to ask curriculum-specific questions and receive instant, grounded explanations.
- M (Measurable):

* Achieve factual accuracy score of >= 92% validated against official course textbooks.
* Maintain average AI response latency under 3 seconds (< 3s).
* Concurrently support at least 5,000 active student inquiries during peak exam review weeks.

- A (Achievable):
  Utilize Retrieval-Augmented Generation (RAG) architecture coupled with Pinecone Vector Database and fine-tuned Large Language Models wrapped in NeMo Guardrails.
- R (Relevant):
  Reduces repetitive faculty inquiry load by 60%, empowering student autonomous learning.
- T (Time-bound):
  Complete development, accuracy validation, and platform integration by Month 5 of the project.

Goal 2: Adaptive Testing & Learning Analytics Engine

- S (Specific):
  Develop an adaptive testing quiz engine (Adaptive Quiz) and learning analytics pipeline to dynamically adjust question difficulty based on individual student mastery.
- M (Measurable):

* Improve average midterm/final test scores of lower-quartile students by at least 25% within one semester.
* Accurately detect and flag >= 80% of at-risk failing students at least 3 weeks prior to final examinations.

- A (Achievable):
  Implement psychometric Item Response Theory (IRT) algorithms combined with machine learning classification models running on cloud GPU compute clusters.
- R (Relevant):
  Personalizes learning pathways, improves overall course passing rates, and provides actionable data-driven insights for course instructors.
- T (Time-bound):
  Complete system integration and obtain academic validation sign-off by Month 6 of the project.

2. Scope Management & Boundary Definition:

- In-Scope (4 Core Capabilities):

* Course syllabus, video lecture streaming, homework, and quiz bank management.
* 24/7 RAG-powered AI Tutor assistant and automated lecture summarization.
* Adaptive Quiz Engine (IRT) & Learning Analytics predictive dashboard.
* Responsive Web Portal (ReactJS) and Mobile Application (Flutter) for students and faculty.

- Out-of-Scope (4 Explicit Exclusions):

* Direct video production/recording or textbook writing for academic staff.
* Procurement or warranty maintenance of student personal laptops/hardware.
* Development of university tuition billing or accounting ERP modules.
* Training foundation LLM models from scratch (strictly using pre-trained APIs with RAG/Fine-tuning).

- 3 Deliverables:

* Full source code repository for Web, Mobile, and AI Backend Services.
* Populated Vector Database covering standardized course knowledge bases for 50 core subjects.
* User Manuals, Faculty Training Documentation, and signed UAT Acceptance Protocol.

================================================================================
REQUEST 2: WORK BREAKDOWN STRUCTURE (WBS 5 PHASES) (2.5 Points)
--------------------------------------------------------------------------------

Standard 5-Phase SDLC Work Breakdown Structure:

1.0 EduAI SmartLMS Platform Development Project
1.1 Project Initiation & Requirements
1.1.1 Project Charter & Stakeholder Management Plan Sign-off
1.1.2 AI Ethics, Privacy & Data Governance Baseline
1.1.3 Software Requirements Specification (SRS) Approval
1.2 Architecture, UI/UX & AI System Design
1.2.1 Microservices Architecture & Vector DB Schema Design (Pinecone/PostgreSQL)
1.2.2 RAG Data Pipeline, Guardrails & Prompt Engineering Specification
1.2.3 Web Portal & Mobile App UI/UX Wireframing & Interactive Prototypes
1.3 Core Engineering & AI Model Integration
1.3.1 Course Management, Video Streaming & Question Bank Microservices
1.3.2 RAG AI Tutor Subsystem & Semantic Search Integration
1.3.3 Adaptive Testing Engine (IRT) & Learning Analytics Dashboard
1.3.4 Student Web Portal (ReactJS) & Cross-Platform Mobile App (Flutter)
1.4 Testing, Model Optimization & Quality Assurance
1.4.1 Automated System Integration Testing (SIT)
1.4.2 AI Hallucination & Answer Accuracy Benchmark Testing
1.4.3 High-concurrency Final Exam Load & Stress Testing (30,000 users)
1.4.4 User Acceptance Testing (UAT Sign-off with Faculty Representatives)
1.5 Deployment, Training & Project Handover
1.5.1 AWS EKS Production Cloud Provisioning & Auto-scaling Setup
1.5.2 Faculty & Instructor Onboarding Training Workshops (1,200 Lecturers)
1.5.3 Handover Documentation, Lessons Learned Workshop & Final Sign-off

================================================================================
REQUEST 3: AI & SOFTWARE ENGINEERING RISK MANAGEMENT (2.5 Points)
--------------------------------------------------------------------------------

Risk 1: AI Hallucination Risk (AI Generating Inaccurate Academic Information)

- Probability: Medium | Impact: High | Strategy: Mitigate
- Mitigation (Proactive Measures):
  Enforce strict semantic similarity thresholds in Vector DB (Cosine Similarity >= 0.85); deploy NeMo Guardrails to block ungrounded responses; configure System Prompts with strict instruction to refuse out-of-curriculum answers.
- Contingency (Reactive Action):
  Embed a "Report Incorrect Answer" button on student interface; automatically flag and forward reported questions to course instructors within 12 hours; quarantine problematic document embeddings for immediate re-indexing.

Risk 2: API Cost Surge Risk (Unexpected LLM Token API Consumption Spikes)

- Probability: High | Impact: Medium | Strategy: Mitigate
- Mitigation (Proactive Measures):
  Implement Redis Semantic Caching to serve cached answers for frequent duplicate queries; enforce rate limiting (maximum 30 AI queries/day/student); optimize prompt token lengths.
- Contingency (Reactive Action):
  Trigger automated failover to self-hosted open-source lightweight models (e.g., Llama 3 8B) running on internal GPU nodes when monthly API consumption reaches 80% of budget cap.

Risk 3: Server Overload during Final Exams (System Crash Under Concurrent Submission)

- Probability: Medium | Impact: High | Strategy: Mitigate
- Mitigation (Proactive Measures):
  Deploy asynchronous RabbitMQ message queues to buffer exam submissions; configure Kubernetes Horizontal Pod Autoscaler (HPA) to scale worker pods when CPU exceeds 70%.
- Contingency (Reactive Action):
  Automatically cache unsaved responses locally in client-side IndexedDB; trigger an automatic 15-minute global exam time extension for all affected students if an outage is detected.

================================================================================
REQUEST 4: EARNED VALUE MANAGEMENT (EVM) ANALYSIS AT MONTH 3 (2.5 Points)
--------------------------------------------------------------------------------

1. Summary of Project Parameters:

- Total Budget at Completion (BAC): $140,000 USD
- Planned Duration at Completion (DAC): 7 Months
- Current Status Evaluation Date: Month 3 (t = 3)
- Actual Cost Incurred (AC): $68,000 USD
- Physical Progress Accomplished: 45% of total project scope completed.

2. Step-by-Step Calculations:

- Step 1: Calculate Planned Value (PV):
  PV = (3 / 7) * BAC = (3 / 7) * $140,000 = $60,000.00 USD.

- Step 2: Calculate Earned Value (EV):
  EV = 45% * BAC = 0.45 * $140,000 = $63,000.00 USD.

- Step 3: Calculate Cost Performance Index (CPI) and Schedule Performance Index (SPI):

* CPI = EV / AC = 63,000 / 68,000 ≈ 0.926.
* SPI = EV / PV = 63,000 / 60,000 = 1.050.

(Cost Variance CV = EV - AC = 63,000 - 68,000 = -$5,000.00 USD < 0)
(Schedule Variance SV = EV - PV = 63,000 - 60,000 = +$3,000.00 USD > 0)

3. Project Health Evaluation:

- Schedule Health: Since SPI = 1.050 > 1.0 (SV = +$3,000 > 0) => The project is AHEAD OF SCHEDULE (5% faster than baseline at Month 3).
- Cost Health: Since CPI = 0.926 < 1.0 (CV = -$5,000 < 0) => The project is OVER BUDGET (spending $1.00 to generate only $0.926 of earned value).

4. Recommended Corrective Actions:

- Action 1 (Cost Control Measures):
  Decommission idle experimental cloud GPU instances; migrate embedding generation to local hardware or purchase AWS Compute Savings Plans/Spot Instances to curb infrastructure spending.
- Action 2 (Capitalizing on Schedule Advantage):
  Leverage the 5% schedule buffer to transition remaining specialized tasks from high-rate external contractors to internal engineering teams, and allocate additional buffer time for thorough UAT testing before official launch.
  \================================================================================

################################################################################

================================================================================
EXAM 07: SE - CAMPUS MOBILITY & FOOD DELIVERY PLATFORM
PROJECT: FPT CAMPUS EXPRESS - ALL-IN-ONE MOBILITY & FOOD DELIVERY PLATFORM
OFFICIAL EOS EXAM SOLUTION (ENGLISH VERSION)
================================================================================

REQUEST 1: PROJECT CHARTER STATEMENT (2.0 Points)
--------------------------------------------------------------------------------

1. Project Name:
   FPT Campus Express - All-in-One Smart Mobility & Food Delivery Platform (UniRide & UniFood).

2. Project Purpose / Justification:

- Current Pain Points:
  The university campus spans tens of hectares, forcing students and staff to spend 15-20 minutes walking between academic blocks and dormitories under extreme weather. Campus canteens experience severe lunch-hour crowding, resulting in long queues and delayed afternoon classes. Meanwhile, students possessing electric bikes seek part-time income but lack a safe, managed ride-hailing dispatch platform.
- Project Purpose:
  Develop an all-in-one mobile and web ecosystem connecting campus electric shuttle rides with on-demand canteen food delivery, digitizing 100% of order dispatching and cashless payments.
- Business & Campus Value:

* Cut meal pickup waiting time by 70% and reduce on-campus ride arrival times to under 3 minutes.
* Create flexible part-time income opportunities for over 100 student driver-partners.
* Optimize campus traffic circulation and provide transparent digital sales tracking for food vendors.

3. High-Level Technical Requirements:

- Requirement 1 (Real-time GPS Tracking & Smart Batching Algorithm):
  Implement WebSocket/Socket.IO-based real-time mapping across the campus, featuring an automated ride-matching and multi-order batching algorithm to optimize delivery routes.
- Requirement 2 (Tri-App Ecosystem):
  Engineer 3 specialized applications: Customer Mobile App (Flutter), Driver Mobile App (Flutter), and Merchant Web Management Portal (ReactJS).
- Requirement 3 (Internal Campus Pay Digital Wallet):
  Integrate an internal digital wallet system linked with university student IDs, featuring 24/7 instant Napas QR code payments and student loyalty reward points.

================================================================================
REQUEST 2: COST / BUDGET PLAN (5 MOBILE SOFTWARE COST ITEMS) (2.0 Points)
--------------------------------------------------------------------------------

Total Approved Budget (BAC): $120,000 USD | Project Duration: 6 Months (24 Weeks).

Cost Item 1: Mobile & Backend Engineering Labor Cost

- Description: Salary for engineering team: 1 Project Manager (6m), 1 Backend Engineer (6m), 2 Flutter Mobile Developers (6m), 1 Frontend Web Dev (5m), 1 QA/Tester (5m). Total 4,000 billable hours.
- Estimation Method: Bottom-up Estimation.

* PM (6m): $18,000
* Backend Dev (6m): $18,000
* 2 Flutter Devs (6m): $32,000
* Frontend Dev (5m): $10,000
* QA/Tester (5m): $7,000

- Estimated Cost: $85,000
- Person in Charge: Project Manager & Technical Lead.

Cost Item 2: Map API Subscriptions & Real-Time Cloud Infrastructure

- Description: AWS EC2 (Node.js/Socket.IO), Firebase Realtime Database, Redis Pub/Sub, and Mapbox/Google Maps Platform SDK subscriptions for 8 months.
- Estimation Method: Parametric Estimation ($1,500/month x 8 months = $12,000).
- Estimated Cost: $12,000
- Person in Charge: Technical Lead & Cloud Infrastructure Lead.

Cost Item 3: Hardware IoT GPS Trackers & Beacons

- Description: Procurement of 30 specialized GPS tracking units for pilot electric shuttles and 20 Bluetooth Low Energy (BLE) beacon positioning stations across campus.
- Estimation Method: Analogous Estimation & Vendor Quote.
- Estimated Cost: $3,500
- Person in Charge: Campus Facility Manager & Operations Lead.

Cost Item 4: Driver Onboarding, Merchant POS Setup & Training

- Description: 4 safe driving workshop sessions for 100 student drivers, 30 thermal order receipt printers for canteen vendors, and campus marketing launch campaigns.
- Estimation Method: Bottom-up Estimation.
- Estimated Cost: $4,500
- Person in Charge: Student Affairs Representative & Marketing Lead.

Cost Item 5: Contingency Reserve

- Description: Risk reserve for fluctuations in map API query volumes, GPS tracker replacement hardware, and overtime for legacy Android/iOS performance tuning.
- Estimation Method: Reserve Analysis (12.5% of BAC).

* Base Total = $85,000 + $12,000 + $3,500 + $4,500 = $105,000.
* Contingency Reserve = $15,000.
* Total Project Budget (BAC) = $105,000 + $15,000 = $120,000.

- Estimated Cost: $15,000
- Person in Charge: Project Sponsor & Project Manager.

================================================================================
REQUEST 3: COMMUNICATION PLAN FOR 3 STAKEHOLDER GROUPS (3.0 Points)
--------------------------------------------------------------------------------

Communication Plan Matrix:

Stakeholder 1: Project Engineering Team (Project-Internal)

- Information: Daily sprint velocity, Socket contracts, mobile GPS hardware debugging, technical blockers.
- Purpose: Maintain cross-functional synchronization between Mobile, Backend, Web, and QA teams.
- Frequency: Daily (15 minutes).
- Method / Format: Daily Standup via Slack Huddle / Google Meet + Jira Scrum Board.
- Responsible Person: Scrum Master / Technical Lead.

Stakeholder 2: Campus Facility & Student Affairs Department (Organization-Internal)

- Information: Technical milestone status reports, electric shuttle pick-up station zoning, traffic safety protocols.
- Purpose: Ensure transport and food operations strictly comply with campus security and safety guidelines.
- Frequency: Bi-weekly.
- Method / Format: Formal In-Person Status Meeting + Summary KPI Dashboard via Email.
- Responsible Person: Project Manager & Campus Operations Coordinator.

Stakeholder 3: Canteen Merchant Partners & Student Driver Team (External)

- Information: Merchant app training guides, commission policy updates, driver order dispatch escalation support.
- Purpose: Ensure seamless merchant order fulfillment and maintain high service quality for students.
- Frequency: Weekly and 24/7 real-time escalation channel.
- Method / Format: Dedicated Support Group (Zalo/Telegram) + Weekly Operations Debrief.
- Responsible Person: Customer Support Lead & Lead Business Analyst (BA).

================================================================================
REQUEST 4: CPM NETWORK DIAGRAM & SCHEDULE COMPRESSION (3.0 Points)
--------------------------------------------------------------------------------

1. Enumerate All Network Paths and Calculate Their Durations:

- Path 1: Start -> A -> B -> D -> G -> H -> End

* Duration = 3 + 4 + 4 + 3 + 3 = 17 weeks.

- Path 2: Start -> A -> B -> F -> H -> End

* Duration = 3 + 4 + 4 + 3 = 14 weeks.

- Path 3: Start -> A -> E -> F -> H -> End

* Duration = 3 + 3 + 4 + 3 = 13 weeks.

- Path 4: Start -> A -> C -> G -> H -> End

* Duration = 3 + 5 + 3 + 3 = 14 weeks.

2. Determine Critical Path & Minimum Project Duration:

- Critical Path: Start -> A -> B -> D -> G -> H -> End (Path 1 - Longest Path).
- Minimum Project Duration: 17 weeks.

3. Calculation Table for ES, EF, LS, LF, and Float:

Calculation Rules:

- Forward Pass: ES = Max(EF of predecessors); EF = ES + Duration (Starts at ES=0).
- Backward Pass: LF = Min(LS of successors); LS = LF - Duration (Finishes at LF=17).
- Total Float = LS - ES = LF - EF.

+-------------+----------+----+----+----+----+-------+----------------------+
| Activity | Duration | ES | EF | LS | LF | Float | Critical Status |
+-------------+----------+----+----+----+----+-------+----------------------+
| Start | 0 | 0 | 0 | 0 | 0 | 0 | Critical |
| A | 3 | 0 | 3 | 0 | 3 | 0 | Critical |
| B | 4 | 3 | 7 | 3 | 7 | 0 | Critical |
| C | 5 | 3 | 8 | 6 | 11 | 3 | Non-critical |
| D | 4 | 7 | 11 | 7 | 11 | 0 | Critical |
| E | 3 | 3 | 6 | 7 | 10 | 4 | Most Flexible |
| F | 4 | 7 | 11 | 10 | 14 | 3 | Non-critical |
| G | 3 | 11 | 14 | 11 | 14 | 0 | Critical |
| H | 3 | 14 | 17 | 14 | 17 | 0 | Critical |
| End | 0 | 17 | 17 | 17 | 17 | 0 | Critical |
+-------------+----------+----+----+----+----+-------+----------------------+

- Activity with the highest schedule flexibility: Activity E (Merchant Web Portal) has the highest Total Float = 4 weeks (can be delayed up to 4 weeks without delaying the 17-week project completion).

4. Schedule Compression Strategy by 2 Weeks (from 17 weeks down to 15 weeks):

- Secondary Critical Path Risk Analysis:
  The primary critical path is 17 weeks. The longest non-critical paths are Path 2 (14w) and Path 4 (14w). Compressing Path 1 by 2 weeks yields 15 weeks, which remains strictly longer than 14 weeks. Therefore, NO new critical path emerges!

- Strategy 1 (Crashing):
  Assign 1 additional Senior Flutter Mobile Developer to Activity D (Driver App Development) to crash its duration from 4 weeks down to 2 weeks.
- Strategy 2 (Fast-tracking):
  Allow the mobile team to initiate Activity D frontend UI and dispatch logic in parallel once Activity B reaches 50% completion (using Mock GPS APIs), finishing Activity D 2 weeks earlier without adding labor costs.
  \================================================================================

################################################################################

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

################################################################################

================================================================================
EXAM 09: SE OPEN - IOT SMART PARKING & ALPR RECOGNITION PLATFORM
PROJECT: SMART CAMPUS IOT PARKING & AUTOMATIC LICENSE PLATE RECOGNITION (SMARTPARK)
OFFICIAL EOS EXAM SOLUTION (ENGLISH VERSION)
================================================================================

REQUEST 1: PROJECT CHARTER STATEMENT (2.0 Points)
--------------------------------------------------------------------------------

1. Project Name:
   Smart Campus IoT Parking Management & Automatic License Plate Recognition Platform (FPTU SmartPark).

2. Project Purpose & Justification:

- Current Pain Points:
  The current parking facilities at FPT University rely on manual RFID plastic cards, taking 10-15 seconds per vehicle at entry and exit gates. This bottlenecks gate flow, causing vehicle queues exceeding 100 meters during peak morning class transitions. Drivers waste 10-15 minutes circling parking lots looking for vacant spots due to lack of space visibility. Furthermore, plastic cards lead to ticket loss, revenue leakage, and plastic waste.
- Project Purpose:
  Develop an intelligent parking platform combining IoT sensors and Edge AI Computer Vision for Automatic License Plate Recognition (ALPR) in under 1 second, automating barrier gate lifting and navigating drivers to available parking slots via mobile app.
- Value Delivered:

* Cut gate transaction processing time by 90% (from 15s down to < 1s), completely eliminating rush-hour gate congestion.
* Save 80% of parking search time through real-time ultrasonic sensor floor mapping.
* Eliminate 100% of plastic card printing costs and automate 100% of parking fee accounting.

3. High-Level Requirements:

- Requirement 1 (Edge AI ALPR & Automated Barrier Control):
  High-resolution AI cameras capture and extract license plate characters (>= 98% accuracy), validate access permissions against database records, and trigger automated barrier gates via MQTT/Modbus in < 1 second.
- Requirement 2 (Real-time Space Navigation Mobile App & Cashless Payment):
  A cross-platform mobile application (Flutter) displaying a real-time layout of 200 parking bays (fed by ceiling-mounted ultrasonic sensors), providing shortest-path navigation, advance reservations, and 24/7 Napas QR payments.
- Requirement 3 (Centralized Security & Revenue Dashboard):
  A real-time guardhouse monitoring dashboard showing multi-lane camera feeds, triggering automated alerts for unregistered/blacklisted license plates, and generating hourly traffic volume analytics.

================================================================================
REQUEST 2: COST / BUDGET ESTIMATION (5 SE & IOT COST ITEMS) (2.0 Points)
--------------------------------------------------------------------------------

Total Approved Budget (BAC): $130,000 USD | Project Duration: 6 Months (24 Weeks).

Cost Item 1: Software & Embedded Engineering Labor Cost

- Description: Engineering payroll: 1 Project Manager (6m), 1 AI & Embedded Engineer (6m), 2 Backend Developers (6m), 1 Mobile Flutter Dev (5m), 1 QA/Tester (5m). Total 3,840 billable hours.
- Estimation Method: Bottom-up Estimation.

* PM (6m): $18,000
* AI/Embedded Lead (6m): $20,000
* 2 Backend Devs (6m): $24,000
* Mobile Dev (5m): $11,000
* QA/Tester (5m): $7,000

- Estimated Cost: $80,000
- Person in Charge: Project Manager & Engineering Lead.

Cost Item 2: Hardware & IoT Equipment Procurement

- Description: Physical parking lot hardware: 4 Specialized 4K ALPR AI Cameras, 200 Ceiling-mounted Ultrasonic Space Sensors, 4 High-speed Automatic Barrier Gates (0.6s opening time), and 2 LED Entrance Guidance Display Boards.
- Estimation Method: Vendor Bid Analysis.
- Estimated Cost: $22,000
- Person in Charge: Campus Facility Lead & Hardware Procurement Officer.

Cost Item 3: Cloud Servers & Edge AI Computing Hardware

- Description: 2 Industrial Edge AI computing units (NVIDIA Jetson Orin Nano) for on-premise inference, AWS EC2 backend servers, AWS RDS PostgreSQL, and MQTT Message Broker (EMQX) for 10 months.
- Estimation Method: Parametric Estimation ($1,000/month x 10 months = $10,000).
- Estimated Cost: $10,000
- Person in Charge: Embedded Engineer & Cloud DevOps Lead.

Cost Item 4: Software Licenses & Computer Vision Tooling

- Description: Computer Vision SDKs, YOLOv8 Commercial License, GitHub Enterprise, Postman, Jira Cloud for 6 project months.
- Estimation Method: Parametric Estimation.
- Estimated Cost: $4,000
- Person in Charge: Project Manager & IT Procurement Lead.

Cost Item 5: Contingency Reserve

- Description: Dedicated risk reserve to absorb outdoor cabling damage, adverse weather delays during outdoor mechanical installations, and night-shift overtime for low-light/angled license plate model fine-tuning.
- Estimation Method: Reserve Analysis (Approx 10.77% of BAC).

* Base Total = $80,000 + $22,000 + $10,000 + $4,000 = $116,000.
* Contingency Reserve = $14,000.
* Total Project Budget (BAC) = $116,000 + $14,000 = $130,000.

- Estimated Cost: $14,000
- Person in Charge: Project Sponsor & Project Manager.

================================================================================
REQUEST 3: PROJECT COMMUNICATION PLAN (3.0 Points)
--------------------------------------------------------------------------------

Communication Plan Matrix:

Stakeholder 1: Dev & Embedded Engineering Team (Project-Internal)

- Information: Backend/Mobile progress, Edge AI inference latency benchmarks, MQTT barrier signal testing, hardware blockers.
- Purpose: Ensure seamless synchronization between software services and IoT hardware actuators.
- Frequency: Daily (15 minutes).
- Method / Format: Daily Standup in Hardware Lab / Slack Huddle + Jira Kanban Board.
- Responsible Person: Scrum Master / Embedded Tech Lead.

Stakeholder 2: Campus Facility & Security Guard Team (Organization-Internal)

- Information: Equipment installation schedule, cabling power outages, standard operating procedures for unrecognized plates or network outages.
- Purpose: Coordinate installation without disrupting campus traffic and train security personnel on the new gate system.
- Frequency: Bi-weekly.
- Method / Format: In-person Operations Review Meeting + Live Drill Simulation at Gate.
- Responsible Person: Project Manager & Campus Operations Coordinator.

Stakeholder 3: Commuter Community (Students & Faculty) & Hardware Vendors (External)

- Information: In-app license plate registration guidelines, smart gate rollout schedule, and vendor technical warranty escalations.
- Purpose: Guide drivers on mobile app usage and ensure vendors maintain 24-hour hardware replacement SLAs.
- Frequency: Weekly and event-driven warranty escalations.
- Method / Format: Campus-wide Announcement Emails + Physical Gate Signage + Virtual Vendor Sync.
- Responsible Person: Lead Business Analyst (BA) & Hardware Support Specialist.

================================================================================
REQUEST 4: MILESTONES & 10 IOT SOFTWARE ACTIVITIES (3.0 Points)
--------------------------------------------------------------------------------

1. Three Core Project Milestones:

- Milestone 1 (Survey & Architecture Baseline Sign-off): Complete site survey, finalize IoT Architecture Design & approve SRS (End of Month 2).
- Milestone 2 (ALPR Engine & Barrier Hardware Integration Complete): Complete AI ALPR module and integrate automatic barrier gate controls (End of Month 4).
- Milestone 3 (Live Gate Pilot Testing & Official Go-Live): Pass peak-hour live traffic pilot acceptance and launch campus-wide (End of Month 6).

2. Milestone 2 (ALPR Engine & Hardware Integration) 10 Activities & Logical Dependencies:

- Activity 1 (A1): Set up Backend Framework (Node.js/Spring Boot) and PostgreSQL database schema for vehicle access logs.

* Predecessors: Start (Milestone 1 Sign-off)
* Dependency: FS

- Activity 2 (A2): Train and optimize license plate recognition AI model (YOLOv8 + OCR) on Jetson Edge AI hardware.

* Predecessors: A1
* Dependency: FS (Requires database schema definition before deploying recognition outputs).

- Activity 3 (A3): Build REST API to ingest 4K camera image streams and output parsed plate strings.

* Predecessors: A2
* Dependency: FS (AI model must be operational before exposing inference endpoints).

- Activity 4 (A4): Develop firmware logic for Relay and Barrier Gate actuation via ESP32/Raspberry Pi microcontrollers.

* Predecessors: A1
* Dependency: FS (Executes in parallel with AI stream once command structures are defined).

- Activity 5 (A5): Integrate Inductive Loop Vehicle Detectors to trigger camera snapshots upon vehicle arrival.

* Predecessors: A4
* Dependency: SS (Loop detector wiring runs in parallel with barrier firmware coding).

- Activity 6 (A6): Implement MQTT real-time messaging pipeline between Edge AI Box and Barrier Controllers.

* Predecessors: A3, A4
* Dependency: FS (Both Plate API A3 and Barrier Firmware A4 must be completed before wiring MQTT commands).

- Activity 7 (A7): Develop Real-time Sensor State Aggregator for 200 parking slot ultrasonic nodes.

* Predecessors: A1
* Dependency: FS (Slot tracking service develops independently from gate lane controllers).

- Activity 8 (A8): Develop Mobile App UI (Flutter) for interactive parking lot layout visualization and QR fee checkout.

* Predecessors: A7
* Dependency: SS (Mobile UI integration starts as soon as mock sensor data feeds are available).

- Activity 9 (A9): Develop Guardhouse Real-time Security & Multi-lane Video Monitoring Dashboard.

* Predecessors: A6, A7
* Dependency: FF (Guardhouse Dashboard finishes when both Gate Control A6 and Bay Sensor A7 streams are ready).

- Activity 10 (A10): End-to-End System Integration Testing: Vehicle Arrival -> Plate Recognition -> Barrier Open -> Slot Update.

* Predecessors: A8, A9
* Dependency: FS (Full testing commences only after Mobile App A8 and Guardhouse Dashboard A9 are verified).
  \================================================================================

################################################################################

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

################################################################################

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

################################################################################
