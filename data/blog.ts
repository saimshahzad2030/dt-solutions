export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category:
    | "Government Tech"
    | "FinTech & Payments"
    | "Enterprise Software"
    | "Digital Platforms"
    | "Security & Engineering";
  readTime: string;
  publishDate: string;
  isoDate: string;
  author: {
    name: string;
    role: string;
  };
  featured: boolean;
  content: string[];
  takeaways: string[];
}

export const blogPosts: BlogPost[] = [
  {
    id: "post-1",
    slug: "when-an-enterprise-actually-needs-custom-software",
    title: "When an Organisation Actually Needs Custom Enterprise Software",
    excerpt:
      "A practical framework for evaluating whether an enterprise or public-sector institution needs a purpose-built system, deeper integration, or workflow redesign.",
    category: "Enterprise Software",
    readTime: "6 min read",
    publishDate: "October 2026",
    isoDate: "2026-10-15",
    author: {
      name: "DT Solutions Engineering",
      role: "Enterprise Architecture",
    },
    featured: true,
    content: [
      "Growing enterprises and public-sector institutions frequently reach a point where off-the-shelf software becomes either too rigid for institutional policies or too fragmented across departments. Commissioning custom software without isolating the underlying operational constraint, however, can introduce unnecessary complexity.",
      "We evaluate the decision to build custom software around three practical criteria: institutional or business workflow differentiation, cross-system integration requirements, and data governance or compliance boundaries.",
      "When an organisation relies on multi-tier approval chains, sector-specific regulatory rules, or unified reporting across ERP, CRM, and financial ledgers that commercial tools cannot accommodate cleanly, purpose-built enterprise software provides long-term operational control.",
      "Conversely, where core needs are standard communication or basic task tracking, disciplined adoption of existing tools is often the stronger first step. Mapping the exact manual workflow before writing code ensures that custom platforms eliminate friction rather than digitising existing bottlenecks.",
    ],
    takeaways: [
      "Purpose-built enterprise software is strongest when institutional rules or multi-department approvals cannot be served cleanly by off-the-shelf tools.",
      "Consolidating disconnected operational spreadsheets and siloed tools improves data integrity and management visibility.",
      "Always map manual operational workflows and governance boundaries before committing to system architecture.",
    ],
  },
  {
    id: "post-2",
    slug: "how-structured-workflows-reduce-response-delays",
    title: "Modernising Public-Sector Revenue Collection Through Digital Payment Rails",
    excerpt:
      "How transitioning from manual cash counters to integrated digital challan, Raast, 1LINK, and 1BILL workflows improves transparency and citizen convenience.",
    category: "Government Tech",
    readTime: "5 min read",
    publishDate: "October 2026",
    isoDate: "2026-10-02",
    author: {
      name: "DT Solutions Engineering",
      role: "Government Technology",
    },
    featured: false,
    content: [
      "Manual cash-based collection of provincial taxes, levies, vehicle tokens, and government challans places a heavy administrative burden on both public departments and citizens. Paper receipts require manual reconciliation across branches, creating reporting delays and limited visibility for finance leadership.",
      "Digital payment transformation replaces physical counter dependencies with structured digital challan generation and multi-channel payment connectivity. By integrating departmental fee engines with national payment rails such as Raast, 1LINK, and 1BILL through licensed payment gateway infrastructure, citizens can complete payments via mobile banking, wallets, and bank channels.",
      "Equally important is the administrative layer: department-level dashboards, tamper-evident audit logs, and automated settlement reconciliation allow public authorities to monitor collections accurately while maintaining strict accountability across every transaction.",
    ],
    takeaways: [
      "Digital challan generation and multi-channel payment rails reduce citizen dependency on physical collection counters.",
      "Clear separation between departmental platform logic and regulated payment gateway processing strengthens operational reliability.",
      "Automated transaction tracking and reconciliation dashboards give public finance teams accurate, auditable visibility.",
    ],
  },
  {
    id: "post-3",
    slug: "dashboards-that-owners-actually-keep-checking",
    title: "Designing Executive BI Dashboards That Leadership Actually Uses",
    excerpt:
      "The difference between decorative reporting interfaces and operational intelligence dashboards that support timely institutional and enterprise decisions.",
    category: "Digital Platforms",
    readTime: "4 min read",
    publishDate: "September 2026",
    isoDate: "2026-09-18",
    author: {
      name: "DT Solutions Engineering",
      role: "Data & BI Systems",
    },
    featured: false,
    content: [
      "Many business intelligence dashboards look impressive during initial demonstrations but lose adoption because they surface vanity charts rather than actionable operational indicators.",
      "An effective executive or departmental dashboard focuses on a concise set of decision-critical figures: revenue collection progress, pending approvals, reconciliation exceptions, departmental throughput, and system health.",
      "When designing enterprise and government dashboards, every visual indicator should tie directly to a clear operational review or action. Role-based access controls ensure each stakeholder sees the exact scope relevant to their mandate without unnecessary clutter.",
    ],
    takeaways: [
      "Focus executive dashboards on a concise set of decision-critical operational and financial indicators.",
      "Highlight reconciliation exceptions and pending bottlenecks so teams can intervene early.",
      "Enforce role-based permissions so each department and leadership tier accesses accurate, appropriately scoped data.",
    ],
  },
  {
    id: "post-4",
    slug: "ai-for-operations-teams-where-it-helps-and-where-it-doesnt",
    title: "Practical Workflow Automation: Where Intelligent Tools Fit in Enterprise Systems",
    excerpt:
      "A grounded engineering view on applying structured automation to document intake, routing, and administrative workflows while preserving deterministic oversight.",
    category: "Enterprise Software",
    readTime: "6 min read",
    publishDate: "September 2026",
    isoDate: "2026-09-05",
    author: {
      name: "DT Solutions Engineering",
      role: "Workflow & Systems Engineering",
    },
    featured: false,
    content: [
      "In enterprise and public-sector environments, predictability and auditability are non-negotiable. Automation should support operational discipline—not introduce opaque behaviour into financial or regulatory processes.",
      "Structured automation delivers its highest practical value in high-volume administrative steps: intake validation, document classification, internal routing, status notifications, and structured data preparation for human review.",
      "Core financial calculations, reconciliation ledgers, and formal approvals must always remain deterministic and governed by explicit role-based sign-off. Pairing deterministic backend rules with targeted workflow automation reduces repetitive overhead while keeping full accountability intact.",
    ],
    takeaways: [
      "Keep financial ledgers, calculations, and formal approvals strictly deterministic and auditable.",
      "Apply workflow automation to structured intake, routing, notifications, and repetitive administrative handling.",
      "Maintain explicit human review checkpoints wherever legal, financial, or policy accountability applies.",
    ],
  },
  {
    id: "post-5",
    slug: "website-credibility-fixes-that-matter-for-b2b-buyers",
    title: "Security Engineering Foundations for Payment & Public-Sector Platforms",
    excerpt:
      "Key architectural practices—encryption, access control, audit trails, secure APIs, and PCI DSS readiness engineering—for mission-critical digital platforms.",
    category: "Security & Engineering",
    readTime: "5 min read",
    publishDate: "August 2026",
    isoDate: "2026-08-22",
    author: {
      name: "DT Solutions Engineering",
      role: "Infrastructure & Security",
    },
    featured: false,
    content: [
      "Platforms serving government agencies, financial institutions, and large enterprises must treat security as a core architectural layer from day one rather than a post-launch checklist.",
      "Foundational security engineering includes strong encryption for data in transit and at rest, granular role-based access control (RBAC), cryptographic verification for API and webhook callbacks, and immutable audit trails recording administrative and transactional actions.",
      "For organisations operating payment workflows, PCI DSS readiness engineering—such as strict network segmentation, minimising sensitive data exposure, disciplined secrets management, proactive system monitoring, and tested disaster recovery procedures—prepares infrastructure for formal assessment and sustained operational resilience.",
    ],
    takeaways: [
      "Embed encryption, RBAC, and tamper-evident audit logging into the core platform architecture from the outset.",
      "Protect payment and third-party API boundaries with cryptographic signature verification and idempotent processing.",
      "Build PCI DSS readiness engineering, monitoring, and disaster recovery directly into deployment workflows.",
    ],
  },
];

export const blogCategories = [
  "All",
  "Government Tech",
  "FinTech & Payments",
  "Enterprise Software",
  "Digital Platforms",
  "Security & Engineering",
];
