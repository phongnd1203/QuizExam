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
