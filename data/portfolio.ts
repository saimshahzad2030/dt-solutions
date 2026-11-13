export interface PortfolioItem {
  id: string;
  slug: string;
  title: string;
  category: string;
  badge: string;
  client: string;
  coverage: string;
  timeline: string;
  status: "In Development" | "Live Production" | "Deployed";
  featured: boolean;
  shortDesc: string;
  fullDesc: string;
  challenge: string;
  approach: string;
  outcome: string;
  metrics: { label: string; value: string }[];
  keyDeliverables: string[];
  techStack: string[];
  image: string;
}

export const portfolioData: PortfolioItem[] = [
  {
    id: "B-Pay-balochistan",
    slug: "B-Pay-balochistan",
    title: "Building the B-Pay Balochistan Platform",
    category: "Institutional Integrations",
    badge: "Flagship Initiative",
    client: "Provincial Institutional Authority",
    coverage: "Multi-Department Provincial Scale",
    timeline: "2024 - Present (Active Development)",
    status: "In Development",
    featured: true,
    shortDesc: "End-to-end provincial digital payment platform replacing manual cash counters with online and mobile payment channels at provincial scale.",
    fullDesc: "DT Solutions is developing the B-Pay Balochistan digital payment platform, a high-impact provincial digital transformation initiative designed to replace manual cash-based counters and dispersed collections with a unified, scalable electronic payment infrastructure.",
    challenge: "Manual cash-based collections across provincial institutions created severe administrative overhead, lack of real-time fiscal tracking, long queues for citizens at payment centers, and reconciliation delays spanning multiple weeks.",
    approach: "Engineered an enterprise microservice architecture connecting provincial institutions directly to the 1-Link national switch, enabling citizens to pay taxes, vehicle tokens, and institutional fees via mobile apps, internet banking, ATMs, and over-the-counter channels with instant verification.",
    outcome: "Created a transparent, unified digital collection engine with sub-second payment callback processing, tamper-evident audit logs, and real-time treasury reconciliation dashboards for institutional leadership.",
    metrics: [
      { label: "Provincial Departments", value: "8+" },
      { label: "Target Transaction Capacity", value: "500K+/mo" },
      { label: "Reconciliation Time", value: "Real-time" },
      { label: "Citizen Wait Time", value: "Instant Digital" },
    ],
    keyDeliverables: [
      "Online citizen tax payment web portal and mobile responsive UI",
      "Vehicle token tax digital calculation and collection engine",
      "Revenue authority e-filing and assessment payment modules",
      "Direct 1-Link switch and inter-bank payment integration",
      "Department-level reconciliation and revenue tracking dashboards",
      "Citizen self-service tracking and digital payment receipt verification"
    ],
    techStack: ["Next.js", "Node.js", "PostgreSQL", "Redis", "1-Link Switch", "Docker", "Tailwind CSS"],
    image: "/images/orbit-glass.jpg"
  },
  {
    id: "institutional-digitization",
    slug: "institutional-digitization",
    title: "Institutional Web Systems & Digital Transformation",
    category: "Institutional Integrations",
    badge: "Institutional Solutions",
    client: "Regional Institutions",
    coverage: "Multi-Agency",
    timeline: "Ongoing",
    status: "In Development",
    featured: true,
    shortDesc: "Modernizing institutional operations through digital workflows, e-filing systems, and citizen self-service portals.",
    fullDesc: "A comprehensive institutional digital modernization project designed to transition traditional paper-based administrative processes into structured, auditable digital workflows that accelerate processing times.",
    challenge: "Legacy paper tracking and physical movement of files resulted in multi-week delays for service approvals, high document loss risk, and limited status visibility for senior officials.",
    approach: "Designed a secure role-based web system with digital document tracking, automated notifications, e-signatures, and user verification dashboards.",
    outcome: "Streamlined inter-departmental communication, cut average file processing times by 65%, and established transparent accountability across departments.",
    metrics: [
      { label: "Processing Speedup", value: "65%" },
      { label: "Audit Compliance", value: "100%" },
      { label: "Department Access", value: "24/7 Secure" },
    ],
    keyDeliverables: [
      "E-filing and case tracking web application",
      "Role-based administrative dashboards for department heads",
      "User status verification and automated SMS/email alerts",
      "Tamper-proof audit logs and document versioning"
    ],
    techStack: ["Next.js", "TypeScript", "PostgreSQL", "Tailwind CSS", "Prisma"],
    image: "/images/orbit-glass.jpg"
  },
  {
    id: "multi-bank-fintech-switch",
    slug: "multi-bank-fintech-switch",
    title: "Secure Multi-Bank & Payment Switch Infrastructure",
    category: "Integrations",
    badge: "Financial Technology",
    client: "Enterprise FinTech Organization",
    coverage: "Nationwide",
    timeline: "Completed",
    status: "Live Production",
    featured: false,
    shortDesc: "High-throughput financial integration gateway managing concurrent bank transaction routing with sub-second callbacks.",
    fullDesc: "Architected a distributed payment gateway middleware connecting enterprise ecommerce platforms with leading commercial banks, mobile wallets (JazzCash, Easypaisa), and card switches.",
    challenge: "High checkout abandonment due to erratic payment gateway timeouts, failed webhook deliveries, and unverified callback tampering.",
    approach: "Implemented an idempotent message queue architecture with cryptographic payload verification, dynamic fallback routing, and instant webhook listeners.",
    outcome: "Achieved 99.98% payment routing reliability, eliminated double-debit anomalies, and reduced checkout processing latency to under 800 milliseconds.",
    metrics: [
      { label: "Routing Latency", value: "<800ms" },
      { label: "Success Rate", value: "99.98%" },
      { label: "Monthly Volume", value: "$1.5M+" },
    ],
    keyDeliverables: [
      "Unified payment abstraction API layer",
      "Automated bank statement reconciliation parser",
      "Cryptographic webhook listener with HMAC SHA-256 verification",
      "Real-time transaction health monitor and auto-failover"
    ],
    techStack: ["Node.js", "Redis", "TypeScript", "PostgreSQL", "Docker", "AWS"],
    image: "/images/orbit-glass.jpg"
  },
  {
    id: "enterprise-operations-portal",
    slug: "enterprise-operations-portal",
    title: "Executive Operations & Revenue Dashboard",
    category: "Web Systems",
    badge: "Operations ERP",
    client: "Commercial Logistics & Supply Group",
    coverage: "Corporate",
    timeline: "Completed",
    status: "Live Production",
    featured: false,
    shortDesc: "Real-time analytics and departmental performance command center unifying ERP, inventory, and field service data.",
    fullDesc: "Built an executive command center that continuously ingests operational data across multi-city branches, transforming complex queries into clear actionable visual dashboards for board members.",
    challenge: "Executive management spent days each month waiting for compiled spreadsheets from branch managers, making dynamic inventory allocation impossible.",
    approach: "Developed an interactive Next.js dashboard backed by high-performance analytical database aggregations and automated nightly ETL jobs.",
    outcome: "Empowered leadership with live visibility into revenue, shipments, and inventory churn, reducing manual reporting labor from 40 hours to zero.",
    metrics: [
      { label: "Reporting Hours Saved", value: "40 hrs/mo" },
      { label: "Data Freshness", value: "Live Real-Time" },
      { label: "User Satisfaction", value: "98%" },
    ],
    keyDeliverables: [
      "Custom KPI charts, trend analyses, and variance monitors",
      "Branch-level drill-down capabilities with granular RBAC permissions",
      "Automated PDF executive summary generation",
      "Data export in Excel, CSV, and secure API formats"
    ],
    techStack: ["Next.js", "React", "Recharts", "PostgreSQL", "Tailwind CSS"],
    image: "/images/orbit-glass.jpg"
  },
  {
    id: "ai-intake-automation",
    slug: "ai-intake-automation",
    title: "Intelligent Customer Intake & Workflow Automation",
    category: "Integrations",
    badge: "AI Automation",
    client: "Global Consulting & Legal Practice",
    coverage: "International",
    timeline: "Completed",
    status: "Live Production",
    featured: false,
    shortDesc: "AI-powered inbound request triage and document classification pipeline saving hundreds of operational hours.",
    fullDesc: "Designed an automated inbound client intake system that parses unstructured emails, attached contracts, and form requests, categorizing priority and populating the internal CRM.",
    challenge: "Senior attorneys and consultants were spending 2+ hours each morning manually triaging inbound client documents and routing requests to appropriate departments.",
    approach: "Constructed an automated processing pipeline utilizing LLMs for entity extraction, sentiment analysis, and urgency scoring with Slack notifications.",
    outcome: "Cut enquiry response time from 14 hours to 15 minutes, with 94% accuracy in department auto-assignment.",
    metrics: [
      { label: "Response Delay", value: "-90%" },
      { label: "Auto-Triage Accuracy", value: "94%" },
      { label: "Weekly Hours Saved", value: "25+ hrs" },
    ],
    keyDeliverables: [
      "Secure document parsing and entity extraction engine",
      "Integration with HubSpot CRM and Slack alerts",
      "Human-in-the-loop review dashboard for ambiguous requests",
      "Automated confirmation email generation"
    ],
    techStack: ["Python", "FastAPI", "OpenAI API", "PostgreSQL", "Next.js"],
    image: "/images/orbit-glass.jpg"
  },



];

export const portfolioCategories = [
  "All",
  "Institutional Integrations",
  "Web Systems",
  "Integrations"
];

