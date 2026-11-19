export interface ServiceItem {
  id: string;
  slug: string;
  number: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  badge: string;
  image: string;
  targetAudience: string;
  capabilities: string[];
  deliverables: string[];
  outcomes: string[];
  features: string[];
  technologies: string[];
  faqs: { question: string; answer: string }[];
}

export const servicesData: ServiceItem[] = [
  {
    id: "vertical-1",
    slug: "government-digital-transformation",
    number: "01",
    title: "Government Digital Transformation",
    shortDesc:
      "Public-sector revenue collection platforms, e-government applications, digital challan management, and citizen self-service portals.",
    fullDesc:
      "DT Solutions designs and engineers digital transformation platforms for provincial and public-sector institutions. We replace manual counter dependencies and paper-heavy processes with structured e-government applications, digital challan and levy systems, citizen portals, and unified revenue management platforms.",
    iconName: "Landmark",
    badge: "Government Technology",
    image: "/editech/11.jpg",
    targetAudience:
      "Provincial ministries, public authorities, municipal departments, and government agencies modernising tax, fee, levy, and citizen service delivery.",
    capabilities: [
      "Government tax and fee collection platforms",
      "E-Government applications",
      "Digital challan and levy management",
      "Citizen portals and self-service applications",
      "Government revenue management systems",
    ],
    deliverables: [
      "Digital tax, fee, levy, and challan generation and collection modules",
      "Citizen-facing web portals and mobile self-service applications",
      "Departmental integration adapters and unified administrative consoles",
      "Revenue tracking, treasury reporting, and reconciliation dashboards",
    ],
    outcomes: [
      "Transparent, auditable digital alternatives to manual cash counters",
      "Improved convenience for citizens accessing public-sector services online",
      "Structured departmental reporting and consolidated revenue visibility",
    ],
    features: [
      "Multi-department onboarding architecture with strict institutional isolation",
      "Granular role-based access control (RBAC) for departmental officers and auditors",
      "Tamper-evident audit trails and verifiable digital payment receipts",
      "Integration readiness with national payment rails and licensed payment gateways",
      "Accessible, mobile-responsive interfaces engineered for broad citizen reach",
    ],
    technologies: ["Next.js", "TypeScript", "Node.js", "PostgreSQL", "REST APIs", "Docker"],
    faqs: [
      {
        question: "How does DT Solutions approach multi-department government integrations?",
        answer:
          "We design modular integration layers with standardised API contracts so individual departments—such as excise, revenue, or transport—can onboard in structured phases without disrupting existing operations.",
      },
      {
        question: "Can citizen portals support both web and mobile access?",
        answer:
          "Yes. Our public-sector platforms are engineered with responsive web portals and companion mobile applications so citizens can generate challans, track status, and complete payments across devices.",
      },
    ],
  },
  {
    id: "vertical-2",
    slug: "fintech-payment-infrastructure",
    number: "02",
    title: "FinTech & Payment Infrastructure",
    shortDesc:
      "Payment gateway integrations, provincial payment switches, Raast, 1LINK and 1BILL connectivity, bank and wallet rails, and reconciliation systems.",
    fullDesc:
      "We engineer reliable payment infrastructure and financial integration layers for government initiatives, financial institutions, and high-volume enterprises. Our work spans payment gateway integration, provincial payment switch engineering, Raast, 1LINK and 1BILL connectivity, bank and digital wallet integrations, and automated settlement reconciliation.",
    iconName: "CreditCard",
    badge: "FinTech Infrastructure",
    image: "/editech/12.jpg",
    targetAudience:
      "Government collection programs, financial institutions, payment aggregators, utilities, and commercial enterprises managing multi-channel digital collections.",
    capabilities: [
      "Payment gateway integration",
      "Provincial payment switches",
      "Raast, 1LINK and 1BILL integration",
      "Digital payment collection",
      "Bank and wallet integrations",
      "Transaction reconciliation and settlement systems",
    ],
    deliverables: [
      "Payment gateway and multi-channel collection integration middleware",
      "Raast, 1LINK, 1BILL, commercial bank, and digital wallet connectors",
      "Encrypted callback verification, webhook processing, and idempotent transaction ledgers",
      "Automated transaction tracking, settlement matching, and finance reconciliation exports",
    ],
    outcomes: [
      "Unified multi-channel payment acceptance across banking and wallet rails",
      "Clear, auditable transaction ledgers that simplify accounting reconciliation",
      "Structured separation between platform application logic and payment gateway processing",
    ],
    features: [
      "Idempotent transaction processing to guard against duplicate postings",
      "Cryptographic callback and webhook signature verification",
      "Structured settlement matching and exception reporting for finance teams",
      "Support for over-the-counter, internet banking, mobile wallet, and QR collection flows",
      "PCI DSS readiness engineering and strict data minimisation practices",
    ],
    technologies: ["Node.js", "TypeScript", "PostgreSQL", "Redis", "Raast / 1LINK / 1BILL", "REST APIs"],
    faqs: [
      {
        question: "Which national and commercial payment rails can DT Solutions integrate?",
        answer:
          "We engineer integrations for Raast, 1LINK, 1BILL, licensed payment gateways (including consortium delivery alongside PayFast), commercial bank APIs, and digital wallets according to project licensing and operational agreements.",
      },
      {
        question: "How is transaction reconciliation handled across multiple payment channels?",
        answer:
          "Our platforms maintain structured transaction ledgers that match payment callbacks against gateway settlement reports, surfacing exceptions clearly for finance and audit teams.",
      },
    ],
  },
  {
    id: "vertical-3",
    slug: "enterprise-software-solutions",
    number: "03",
    title: "Enterprise Software Solutions",
    shortDesc:
      "ERP and CRM systems, workflow and process automation, business intelligence dashboards, enterprise portals, and custom software development.",
    fullDesc:
      "We build dependable internal software tailored to complex organisational operations. From ERP and CRM modules to workflow and process automation (including targeted AI-assisted workflows as a supporting capability), business intelligence dashboards, and enterprise portals, our software eliminates fragmented spreadsheets and strengthens operational visibility.",
    iconName: "Code2",
    badge: "Enterprise Solutions",
    image: "/editech/13.jpg",
    targetAudience:
      "Mid-market and large enterprises, logistics groups, service organisations, and multi-branch institutions streamlining core internal operations.",
    capabilities: [
      "ERP and CRM systems",
      "Workflow and process automation",
      "Business intelligence dashboards",
      "Enterprise portals",
      "Custom software development",
    ],
    deliverables: [
      "Role-based ERP, CRM, approval, and operational management web applications",
      "Structured workflow and process automation pipelines with human oversight",
      "Executive business intelligence dashboards and operational reporting modules",
      "System deployment, technical documentation, and team onboarding",
    ],
    outcomes: [
      "Unified operational data replacing disconnected spreadsheets and email chains",
      "Clearer management visibility into departmental performance and bottlenecks",
      "Software shaped around actual governance rules rather than rigid workarounds",
    ],
    features: [
      "Role-based access control (RBAC) aligned with departmental hierarchies",
      "Auditable approval workflows and full change history logging",
      "Interactive BI reporting with filtering and structured CSV/PDF exports",
      "Supporting workflow automation and intelligent document triage where appropriate",
      "Clean API interfaces for connecting existing accounting and operational tools",
    ],
    technologies: ["Next.js", "React", "TypeScript", "Node.js", "Python", "PostgreSQL"],
    faqs: [
      {
        question: "Can DT Solutions integrate custom enterprise software with our existing ERP or accounting tools?",
        answer:
          "Yes. We design clean API middleware and data synchronisation adapters so new operational portals and BI dashboards work seamlessly alongside your existing systems.",
      },
      {
        question: "Who retains ownership of custom-built software?",
        answer:
          "Intellectual property and source code ownership terms are defined clearly in each client agreement, with full handover documentation provided upon delivery.",
      },
    ],
  },
  {
    id: "vertical-4",
    slug: "digital-platforms-applications",
    number: "04",
    title: "Digital Platforms & Applications",
    shortDesc:
      "Mobile and web application development, white-label digital platforms, customer engagement platforms, and loyalty and rewards solutions.",
    fullDesc:
      "We architect and deliver modern customer-facing digital products built for usability, scale, and brand consistency. Our capabilities cover mobile application development, enterprise web applications, white-label digital platforms, customer engagement ecosystems, and loyalty and rewards solutions.",
    iconName: "Smartphone",
    badge: "Digital Platforms",
    image: "/editech/14.jpg",
    targetAudience:
      "Enterprises, financial institutions, consumer brands, and public-service programmes launching scalable mobile, web, and white-label digital channels.",
    capabilities: [
      "Mobile application development",
      "Web application development",
      "White-label digital platforms",
      "Customer engagement platforms",
      "Loyalty and rewards solutions",
    ],
    deliverables: [
      "Cross-platform and native mobile applications with responsive companion web portals",
      "Configurable white-label platform architectures supporting multi-tenant branding",
      "Customer engagement, notification, and loyalty/rewards management modules",
      "Performance-optimised corporate web applications and digital self-service journeys",
    ],
    outcomes: [
      "Consistent, intuitive user experiences across mobile and web touchpoints",
      "Faster time-to-market for multi-brand or partner-deployed white-label products",
      "Stronger digital adoption and sustained customer engagement",
    ],
    features: [
      "Modular front-end and API architecture designed for multi-channel reuse",
      "Clean responsive interfaces built for desktop, tablet, and mobile accessibility",
      "Structured onboarding, profile management, and transactional history views",
      "Configurable engagement rules, digital notifications, and rewards tracking",
      "Supporting corporate web development and technical SEO engineering",
    ],
    technologies: ["React", "Next.js", "React Native / Flutter", "TypeScript", "Tailwind CSS", "Node.js"],
    faqs: [
      {
        question: "What is included in a white-label digital platform build?",
        answer:
          "We architect configurable multi-tenant platforms where branding, workflows, feature flags, and partner integrations can be tailored per deployment without duplicating the core codebase.",
      },
      {
        question: "Do you handle both mobile apps and the supporting backend APIs?",
        answer:
          "Yes. We deliver end-to-end digital platforms including mobile clients, web administration panels, backend APIs, database architecture, and third-party integrations.",
      },
    ],
  },
  {
    id: "vertical-5",
    slug: "technology-infrastructure-security",
    number: "05",
    title: "Technology Infrastructure & Security",
    shortDesc:
      "API development and integration, cloud infrastructure, cybersecurity implementation, PCI DSS readiness engineering, and system monitoring.",
    fullDesc:
      "Mission-critical government and financial platforms demand resilient foundations. DT Solutions delivers API engineering, cloud infrastructure architecture, cybersecurity implementation, PCI DSS readiness and security engineering, and structured system monitoring and maintenance.",
    iconName: "ShieldCheck",
    badge: "Infrastructure & Security",
    image: "/editech/15.jpg",
    targetAudience:
      "Government bodies, FinTech operators, and enterprise IT leaders strengthening system resilience, API interoperability, and security posture.",
    capabilities: [
      "API development and integration",
      "Cloud infrastructure",
      "Cybersecurity implementation",
      "PCI DSS readiness and security engineering",
      "System monitoring and maintenance",
    ],
    deliverables: [
      "Secure REST/GraphQL API gateways, middleware adapters, and webhook pipelines",
      "Containerised cloud infrastructure, automated backup strategies, and disaster recovery plans",
      "Security hardening covering encryption, access controls, audit trails, and vulnerability remediation",
      "PCI DSS readiness engineering support and ongoing application monitoring and maintenance",
    ],
    outcomes: [
      "Dependable interoperability between internal databases, banking rails, and partner systems",
      "Stronger security posture built on defence-in-depth engineering practices",
      "Proactive observability and structured maintenance reducing operational risk",
    ],
    features: [
      "Encryption in transit (TLS) and at rest alongside strict secrets management",
      "Granular role-based access control (RBAC) and immutable security audit trails",
      "PCI DSS readiness engineering (architecture hardening without claiming formal certification)",
      "Containerised CI/CD pipelines, health monitoring, and structured incident response workflows",
      "Scheduled dependency patching, database tuning, and backup verification",
    ],
    technologies: ["Docker", "Cloud Infrastructure", "Nginx", "PostgreSQL", "Redis", "CI/CD Pipelines"],
    faqs: [
      {
        question: "What does PCI DSS readiness and security engineering involve?",
        answer:
          "We design and harden platform architectures in alignment with PCI DSS security engineering principles—including network segmentation, data minimisation, access controls, encryption, and audit logging—to prepare systems for formal third-party assessment where required.",
      },
      {
        question: "Do you provide ongoing system monitoring and post-launch maintenance?",
        answer:
          "Yes. We offer structured maintenance engagements covering security updates, monitoring, backup verification, performance reviews, and iterative enhancements tailored to each client agreement.",
      },
    ],
  },
];
