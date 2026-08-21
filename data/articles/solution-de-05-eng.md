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
