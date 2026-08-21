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
