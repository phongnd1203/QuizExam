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
