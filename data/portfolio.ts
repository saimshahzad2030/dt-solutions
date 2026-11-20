export interface PortfolioItem {
  id: string;
  slug: string;
  title: string;
  subtitle?: string;
  category: "Government Technology" | "Payment Infrastructure" | "Enterprise Platforms";
  badge: string;
  client: string;
  isAnonymised?: boolean;
  coverage: string;
  timeline: string;
  status: "Active Delivery" | "In Progress" | "Deployed";
  featured: boolean;
  shortDesc: string;
  fullDesc: string;
  challenge: string;
  approach: string;
  outcome: string;
  highlights: { label: string; value: string }[];
  keyDeliverables: string[];
  plannedCapabilities?: string[];
  consortiumRoles?: {
    dtSolutions: string[];
    partnerName: string;
    partnerRoles: string[];
    verificationNote: string;
  };
  techStack: string[];
  image: string;
}

export const portfolioData: PortfolioItem[] = [
  {
    id: "B-Pay-balochistan",
    slug: "B-Pay-balochistan",
    title: "B-Pay – Government of Balochistan",
    subtitle: "Provincial Digital Payment & Revenue Collection Platform",
    category: "Government Technology",
    badge: "Flagship Initiative",
    client: "Government of Balochistan (in collaboration with PayFast)",
    isAnonymised: false,
    coverage: "Province of Balochistan",
    timeline: "Active Delivery (Phased Rollout)",
    status: "Active Delivery",
    featured: true,
    shortDesc:
      "DT Solutions, in collaboration with PayFast, is delivering B-Pay, a digital payment platform designed to transform the collection of government taxes, fees, levies, challans and other public-sector payments across Balochistan.",
    fullDesc:
      "DT Solutions, in collaboration with PayFast, is delivering B-Pay, a digital payment platform designed to transform the collection of government taxes, fees, levies, challans and other public-sector payments across Balochistan. The platform establishes a unified digital alternative to manual cash counters, connecting public-sector departments, citizen channels, and regulated payment gateway processing into a structured, auditable ecosystem.",
    challenge:
      "Traditional manual cash-based collection of provincial taxes, fees, levies, and challans creates administrative overhead for departments, queues and physical travel for citizens, and fragmented manual reconciliation across branches.",
    approach:
      "B-Pay is architected with a clear separation of platform engineering and regulated payment processing. DT Solutions leads technology development, citizen-facing mobile application delivery, government department integrations, digital tax and fee collection modules, administrative dashboards, and reconciliation capabilities, while PayFast provides payment gateway infrastructure, banking and payment channel connectivity, and gateway transaction processing.",
    outcome:
      "Establishes a scalable provincial foundation for transparent digital public-sector revenue collection, structured transaction tracking, and departmental reporting as participating departments and payment services are onboarded in phases.",
    highlights: [
      { label: "Initiative", value: "Provincial Public Sector" },
      { label: "Collaboration", value: "DT Solutions & PayFast" },
      { label: "Platform Role", value: "Digital Revenue & Challans" },
      { label: "Delivery Model", value: "Phased Rollout" },
    ],
    keyDeliverables: [
      "Core digital payment platform architecture and platform management",
      "Citizen-facing mobile application for digital public-sector payments",
      "Digital tax, fee, levy, and challan collection modules",
      "Government department integration interfaces",
      "Administrative dashboards and departmental reporting",
      "Transaction tracking and reconciliation capabilities",
    ],
    plannedCapabilities: [
      "Phased onboarding of additional provincial departments and fee categories",
      "Expanded citizen self-service payment history and digital receipt services",
      "Broader payment channel and departmental reporting enhancements aligned with operational agreements",
    ],
    consortiumRoles: {
      dtSolutions: [
        "Technology development and platform management",
        "Citizen-facing mobile application",
        "Government department integrations",
        "Digital tax and fee collection modules",
        "Administrative dashboards and reporting",
        "Transaction tracking and reconciliation capabilities",
      ],
      partnerName: "PayFast",
      partnerRoles: [
        "Payment gateway infrastructure",
        "Banking and payment channel connectivity",
        "Payment processing through supported channels",
        "Gateway transaction processing and related services",
      ],
      verificationNote:
        "Responsibilities reflect the current collaborative delivery framework and remain subject to formal consortium and operational agreements.",
    },
    techStack: [
      "Next.js",
      "Node.js",
      "PostgreSQL",
      "Mobile Application",
      "Payment Gateway APIs",
      "Docker",
    ],
    image: "/editech/b-pay-balochistan.jpg",
  },
  {
    id: "institutional-digitization",
    slug: "institutional-digitization",
    title: "Government Digitisation & E-Filing Workflows",
    subtitle: "Public-Sector Workflow Modernisation",
    category: "Government Technology",
    badge: "Government Digitisation",
    client: "Anonymised Public-Sector Engagement (Confidential)",
    isAnonymised: true,
    coverage: "Multi-Department Institutional Scope",
    timeline: "Structured Delivery",
    status: "In Progress",
    featured: true,
    shortDesc:
      "Modernising administrative workflows through structured e-filing, role-based approval routing, and citizen self-service tracking portals.",
    fullDesc:
      "An anonymised public-sector digital transformation initiative focused on transitioning paper-based departmental file movement and application approvals into auditable, role-based digital workflows with status visibility for authorised officials and applicants.",
    challenge:
      "Manual paper tracking and physical file transfers across offices resulted in limited visibility into pending approvals, duplicated record keeping, and administrative delays.",
    approach:
      "Designed a modular web application with structured case intake, role-based access controls, digital status tracking, automated notifications, and verifiable audit trails across departmental stages.",
    outcome:
      "Delivered a structured digital workflow foundation that centralises case records, clarifies approval ownership across roles, and provides auditable activity logs for institutional governance.",
    highlights: [
      { label: "Engagement", value: "Anonymised (Confidential)" },
      { label: "Focus", value: "E-Government Workflows" },
      { label: "Governance", value: "RBAC & Audit Trails" },
      { label: "Delivery", value: "Web Portal & Admin" },
    ],
    keyDeliverables: [
      "Digital e-filing and structured case tracking web application",
      "Role-based administrative dashboards for departmental oversight",
      "Applicant status tracking and structured notification workflows",
      "Revision history and immutable administrative audit logs",
    ],
    techStack: ["Next.js", "TypeScript", "PostgreSQL", "Tailwind CSS", "REST APIs"],
    image: "/editech/institutional-digitization.jpg",
  },
  {
    id: "multi-bank-fintech-switch",
    slug: "multi-bank-fintech-switch",
    title: "Payment Gateway & Multi-Channel Integration Architecture",
    subtitle: "FinTech Middleware & Settlement Reconciliation",
    category: "Payment Infrastructure",
    badge: "Payment Infrastructure",
    client: "Anonymised Commercial FinTech Engagement (Confidential)",
    isAnonymised: true,
    coverage: "Multi-Channel Payment Rails",
    timeline: "Deployed",
    status: "Deployed",
    featured: false,
    shortDesc:
      "Payment integration middleware unifying commercial gateways, banking APIs, and wallet channels with cryptographic callback verification and reconciliation.",
    fullDesc:
      "An anonymised payment engineering engagement delivering a unified integration layer connecting commercial applications with supported payment gateways, banking channels, and digital wallets alongside automated callback verification and settlement matching.",
    challenge:
      "Maintaining separate point-to-point integrations across multiple payment providers introduced inconsistent webhook handling, reconciliation mismatches, and fragile error recovery.",
    approach:
      "Architected a unified payment abstraction API with idempotent transaction handling, cryptographic callback signature verification, structured retry queues, and standardised settlement reconciliation outputs.",
    outcome:
      "Simplified multi-channel payment operations under a single integration interface, improved callback integrity checks, and provided finance teams with structured reconciliation reports.",
    highlights: [
      { label: "Engagement", value: "Anonymised (Confidential)" },
      { label: "Focus", value: "Payment Middleware" },
      { label: "Integrity", value: "Idempotent & Verified" },
      { label: "Output", value: "Settlement Reconciliation" },
    ],
    keyDeliverables: [
      "Unified payment integration abstraction API layer",
      "Cryptographic webhook and callback verification pipeline",
      "Idempotent transaction ledger preventing duplicate postings",
      "Structured settlement matching and reconciliation export module",
    ],
    techStack: ["Node.js", "TypeScript", "Redis", "PostgreSQL", "Docker"],
    image: "/editech/multi-bank-fintech-switch.jpg",
  },
  {
    id: "enterprise-operations-portal",
    slug: "enterprise-operations-portal",
    title: "Enterprise Operations & Business Intelligence Portal",
    subtitle: "Unified Management Console & Executive Reporting",
    category: "Enterprise Platforms",
    badge: "Enterprise Platforms",
    client: "Anonymised Enterprise Client (Confidential)",
    isAnonymised: true,
    coverage: "Multi-Branch Corporate Operations",
    timeline: "Deployed",
    status: "Deployed",
    featured: false,
    shortDesc:
      "Centralised enterprise portal and BI dashboard consolidating operational workflows, approvals, and branch reporting into a single web platform.",
    fullDesc:
      "An anonymised enterprise software build replacing disconnected regional spreadsheets and manual status compilation with a unified web portal combining operational data capture, role-based approvals, and executive business intelligence reporting.",
    challenge:
      "Operational leadership relied on manually consolidated branch spreadsheets, delaying visibility into operational exceptions, inventory status, and departmental performance.",
    approach:
      "Engineered a role-segmented enterprise web portal backed by relational data models, scheduled synchronisation pipelines, interactive KPI views, and structured CSV/PDF reporting.",
    outcome:
      "Provided branch managers and executive leadership with a single source of operational truth, structured approval workflows, and consistent periodic reporting.",
    highlights: [
      { label: "Engagement", value: "Anonymised (Confidential)" },
      { label: "Focus", value: "Enterprise ERP & BI" },
      { label: "Access", value: "Multi-Branch RBAC" },
      { label: "Reporting", value: "Dashboards & Exports" },
    ],
    keyDeliverables: [
      "Role-based enterprise operations and approval web portal",
      "Executive BI dashboard with branch-level drill-down views",
      "Automated data aggregation and exception highlighting",
      "Structured Excel, CSV, and PDF management report exports",
    ],
    techStack: ["Next.js", "React", "TypeScript", "PostgreSQL", "Tailwind CSS"],
    image: "/editech/enterprise-operations-portal.jpg",
  },
  {
    id: "ai-intake-automation",
    slug: "ai-intake-automation",
    title: "Structured Intake & Operational Workflow Automation",
    subtitle: "Enterprise Process Automation & Document Routing",
    category: "Enterprise Platforms",
    badge: "Process Automation",
    client: "Anonymised Professional Services Engagement (Confidential)",
    isAnonymised: true,
    coverage: "Internal Operations & CRM",
    timeline: "Deployed",
    status: "Deployed",
    featured: false,
    shortDesc:
      "Automated client intake, document classification, and internal routing pipeline built with human-in-the-loop review and CRM integration.",
    fullDesc:
      "An anonymised enterprise automation engagement focused on structuring unstructured client requests and supporting documents into categorised internal tickets with human review checkpoints before downstream CRM updates.",
    challenge:
      "Operations teams manually sorted incoming emails, forms, and attachments across shared inboxes, leading to inconsistent categorisation and slow handoffs between departments.",
    approach:
      "Implemented a structured intake and workflow routing pipeline combining deterministic validation rules, supporting document extraction, internal team alerts, and a human review interface for ambiguous cases.",
    outcome:
      "Standardised inbound request handling, improved routing consistency across internal teams, and preserved clear human oversight over client communications.",
    highlights: [
      { label: "Engagement", value: "Anonymised (Confidential)" },
      { label: "Focus", value: "Workflow Automation" },
      { label: "Governance", value: "Human-in-the-Loop" },
      { label: "Integration", value: "CRM & Notifications" },
    ],
    keyDeliverables: [
      "Structured inbound document parsing and routing workflow",
      "CRM and internal workspace notification integrations",
      "Human review dashboard for exception handling and approval",
      "Audit trail of intake categorisation and assignment actions",
    ],
    techStack: ["Python", "Node.js", "PostgreSQL", "Next.js", "REST APIs"],
    image: "/editech/ai-intake-automation.jpg",
  },
];

export const portfolioCategories = [
  "All",
  "Government Technology",
  "Payment Infrastructure",
  "Enterprise Platforms",
];
