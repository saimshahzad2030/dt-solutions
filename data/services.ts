export interface ServiceItem {
  id: string;
  slug: string;
  number: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  badge: string;
  targetAudience: string;
  deliverables: string[];
  outcomes: string[];
  features: string[];
  technologies: string[];
  faqs: { question: string; answer: string }[];
}

export const servicesData: ServiceItem[] = [
  {
    id: "service-1",
    slug: "web-design-development",
    number: "01",
    title: "Web Design & Development",
    shortDesc: "Business websites that present services clearly, strengthen credibility, and make it easy for customers to act.",
    fullDesc: "We build websites and landing pages that match how global enterprises look for services — clear page hierarchies, straightforward contact paths, high performance, and easy editing for your team.",
    iconName: "Layout",
    badge: "Enterprise Web",
    targetAudience: "SMEs, service firms, consultants, and founders who need a sharper digital presence and higher-converting web channels.",
    deliverables: [
      "Design templates and mobile-first responsive pages",
      "Next.js or CMS implementation with simple editing workflows",
      "Comprehensive on-page technical SEO and Core Web Vitals optimization",
      "Contact forms, CRM webhooks, analytics, and handover documentation"
    ],
    outcomes: [
      "Clearer presentation of services, capabilities, and pricing",
      "Higher-quality inbound enquiries that save sales team time",
      "Simple content updates anyone on your team can execute without developers"
    ],
    features: [
      "Lightning-fast server rendering and static site generation",
      "Custom responsive design tailored to corporate identity",
      "Micro-animations, smooth hover states, and interactive UI components",
      "Structured schema markup and meta tags for peak search rankings",
      "Accessibility (WCAG 2.1) compliance and cross-browser testing"
    ],
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion", "Vercel"],
    faqs: [
      {
        question: "How long does a typical corporate website redesign take?",
        answer: "A standard corporate website project usually takes between 3 to 6 weeks from initial discovery and design to final QA, performance tuning, and launch."
      },
      {
        question: "Can our internal marketing team update content after launch?",
        answer: "Yes. We configure intuitive CMS or structured content modules so non-technical team members can easily edit text, publish blog posts, and update service listings."
      },
      {
        question: "How do you ensure fast page speeds and high Lighthouse scores?",
        answer: "We use Next.js App Router with server-side rendering, next/image automatic WebP/AVIF compression, font preloading, and minimal JavaScript overhead to consistently score 95+ on Google Lighthouse."
      }
    ]
  },
  {
    id: "service-2",
    slug: "custom-software-development",
    number: "02",
    title: "Custom Software Development",
    shortDesc: "Internal tools, operational web apps, and management systems that eliminate spreadsheet chaos and coordinate teams.",
    fullDesc: "We deliver web applications for approvals, order processing, inventory notes, and other routine operations so teams stop relying on fragmented email chains and fragile spreadsheets.",
    iconName: "Code2",
    badge: "Custom Systems",
    targetAudience: "Growing enterprises whose operational workflows have outgrown off-the-shelf tools, email inboxes, or shared spreadsheets.",
    deliverables: [
      "Discovery sessions and practical requirements mapping",
      "Role-based secure web applications and admin interfaces",
      "Workflow automation, approval routing, and reporting modules",
      "Production deployment, automated backups, staff training, and handover documentation"
    ],
    outcomes: [
      "Fewer repetitive tasks and fewer missed operational actions",
      "Reliable real-time operational visibility for managers and executives",
      "Software tailored specifically to your daily workflow rather than forced compromises"
    ],
    features: [
      "Role-based access control (RBAC) with granular permissions",
      "Auditable action logging and tamper-evident revision history",
      "Responsive web consoles optimized for desktop, tablet, and mobile field access",
      "Relational database architecture built for high data integrity",
      "REST & GraphQL APIs for seamless internal system interoperability"
    ],
    technologies: ["Node.js", "TypeScript", "PostgreSQL", "React", "Prisma", "Docker", "Tailwind CSS"],
    faqs: [
      {
        question: "When should a business invest in custom software versus SaaS?",
        answer: "Custom software becomes essential when your core operational processes provide a competitive edge, when subscription costs for multiple tools spiral, or when off-the-shelf SaaS cannot accommodate your unique compliance and approval rules."
      },
      {
        question: "Who owns the intellectual property and source code?",
        answer: "You do. 100% of the custom source code, documentation, and database assets belong entirely to your company upon project completion."
      }
    ]
  },
  {
    id: "service-3",
    slug: "ai-automation-workflows",
    number: "03",
    title: "AI Automation & Workflows",
    shortDesc: "Automations that eliminate repetitive administrative tasks and triage workflows while maintaining human oversight.",
    fullDesc: "We map routine processes — from customer enquiry intake to data categorization, document processing, and internal notifications — then automate the parts that save time while keeping human checks where they matter.",
    iconName: "Bot",
    badge: "Intelligent Ops",
    targetAudience: "Teams managing high-volume enquiries, document reviews, employee onboarding, invoice processing, or cross-department handoffs.",
    deliverables: [
      "Comprehensive workflow mapping and sensible automation architecture",
      "Intelligent text extraction, classification, and summarization pipelines",
      "API, email, CRM, and internal database connector integration",
      "Real-time monitoring, threshold alerts, and safe human-in-the-loop fallback paths"
    ],
    outcomes: [
      "Up to 80% faster turnaround time on routine customer and internal requests",
      "Drastic reduction in hours spent on manual data re-entry and filing",
      "Consistent, auditable handling of repetitive cases without fatigue errors"
    ],
    features: [
      "LLM integration with strict safety boundaries and prompt grounding",
      "Automated document OCR and structured JSON extraction",
      "Multi-step conditional logic with human approval triggers",
      "Integration with Slack, WhatsApp, email, and ERP databases",
      "Self-healing workflows with automated retry mechanisms and dead-letter queues"
    ],
    technologies: ["Python", "OpenAI / Claude API", "LangChain", "Node.js", "Zapier / Make", "PostgreSQL"],
    faqs: [
      {
        question: "How do you prevent AI hallucinations in business workflows?",
        answer: "We employ deterministic business logic for core calculations and use AI strictly for constrained extraction, summarization, and classification. Any critical decision requires explicit human-in-the-loop sign-off."
      },
      {
        question: "Will our proprietary business data be shared with public AI models?",
        answer: "No. We utilize enterprise API agreements with zero-data-retention policies or host private on-premise models to ensure your proprietary business records remain strictly confidential."
      }
    ]
  },
  {
    id: "service-4",
    slug: "business-dashboards-portals",
    number: "04",
    title: "Business Dashboards & Portals",
    shortDesc: "Unified executive dashboards and customer portals that deliver clarity on key metrics without hunting across tools.",
    fullDesc: "We turn fragmented, siloed data into focused, real-time dashboards and portals so business leaders and department heads can inspect performance instantly and make evidence-based decisions.",
    iconName: "LineChart",
    badge: "Executive Insights",
    targetAudience: "Leadership teams, financial controllers, and operational managers who need dependable figures without chasing weekly manual status spreadsheets.",
    deliverables: [
      "Executive KPI dashboards and operational department consoles",
      "Customer or vendor self-service portals with secure authenticated access",
      "Custom metric calculations, dynamic filtering, and one-click PDF/CSV export",
      "Automated scheduled data synchronization and granular team permissions"
    ],
    outcomes: [
      "Faster, high-conviction decision-making backed by real-time numbers",
      "Elimination of hours spent compiling manual weekly reports across departments",
      "Transparent customer experience through dedicated self-service portals"
    ],
    features: [
      "Interactive data visualizations with drill-down capabilities",
      "Real-time WebSocket data updates for live operations monitoring",
      "Role-segmented viewing permissions ensuring each stakeholder sees only relevant figures",
      "Optimized SQL indexing for instant aggregation across millions of records"
    ],
    technologies: ["Next.js", "React", "Recharts", "Tremor", "PostgreSQL", "ClickHouse", "Tailwind CSS"],
    faqs: [
      {
        question: "Can the dashboard pull data from different disconnected software?",
        answer: "Yes. We build data adapters that unify information from your accounting software, CRM, payment processors, and proprietary databases into a coherent single source of truth."
      }
    ]
  },
  {
    id: "service-5",
    slug: "api-integrations",
    number: "05",
    title: "API Integrations",
    shortDesc: "Reliable synchronization pipelines connecting CRMs, ERPs, logistics partners, and internal systems without double data entry.",
    fullDesc: "We connect CRMs, payment gateways, courier/shipping partners, and legacy internal software so critical business records flow smoothly across platforms without manual copy-paste or fragile spreadsheet syncing.",
    iconName: "Network",
    badge: "System Sync",
    targetAudience: "Enterprises juggling multiple software platforms and struggling with duplicate entries, reconciliation mismatches, and delayed updates.",
    deliverables: [
      "Integration architecture design and bidirectional data schema mapping",
      "Custom middleware adapters and third-party connector pipelines",
      "Webhook listeners, event queues, and automated synchronization monitors",
      "Comprehensive error logging, retry policies, and alert mechanisms"
    ],
    outcomes: [
      "Zero data mismatches and drastic reduction in manual data entry corrections",
      "Instant real-time handoffs between customer-facing apps and backend fulfillment",
      "Substantial time saved across accounting, sales, and logistics teams"
    ],
    features: [
      "Robust webhook security with cryptographic signature verification",
      "Idempotent processing preventing duplicate order or invoice creations",
      "Rate-limit handling with exponential backoff and message queues",
      "Comprehensive health check endpoints and visual uptime monitoring"
    ],
    technologies: ["REST", "GraphQL", "Webhooks", "Node.js", "Redis", "RabbitMQ", "AWS Lambda"],
    faqs: [
      {
        question: "What happens if a third-party API goes down or changes its endpoints?",
        answer: "Our integration architecture incorporates durable message queues (like Redis/RabbitMQ) with exponential retry policies. If an external service experiences downtime, messages are securely buffered and retried automatically once the service restores."
      }
    ]
  },
  {
    id: "service-6",
    slug: "payment-gateway-integrations",
    number: "06",
    title: "Payment Gateway Integrations",
    shortDesc: "Seamless digital payment collection via 1-Link, JazzCash, Easypaisa, Stripe, and banking switches with automated reconciliation.",
    fullDesc: "We connect local and international payment gateways to your application, manage secure payment callbacks, and engineer automated logging so your accounting team can reconcile digital collections with 100% confidence.",
    iconName: "CreditCard",
    badge: "FinTech & Payments",
    targetAudience: "Organizations selling online, collecting fees/deposits, collecting recurring subscriptions, or handling provincial government tax collections.",
    deliverables: [
      "Checkout and payment flow user experience optimization",
      "Integration with 1-Link, JazzCash, Easypaisa, Stripe, and direct bank switches",
      "Encrypted callback verification, webhooks, and auditable transaction ledgers",
      "Instant digital receipts, customer notifications, and automated reconciliation exports"
    ],
    outcomes: [
      "Lower checkout drop-off rates and clear, unalterable digital audit trails",
      "Immediate automated confirmation of customer orders and paid service invoices",
      "Elimination of manual bank statement reconciliations for accounting teams"
    ],
    features: [
      "Hosted checkout, embedded iFrames, and dynamic QR payment flows",
      "PCI-DSS compliant handling with zero storage of sensitive card details",
      "Automated callback verification preventing fraudulent transaction approvals",
      "Multi-currency processing and real-time exchange rate conversion",
      "Automated dispute handling and instant refund processing triggers"
    ],
    technologies: ["1-Link Switch", "JazzCash", "Easypaisa", "Stripe", "Bank APIs", "Next.js", "Node.js"],
    faqs: [
      {
        question: "Can you integrate both Pakistani local payment gateways and international gateways?",
        answer: "Yes! We specialize in local integrations (1-Link, JazzCash, Easypaisa, Kuickpay, Bank APIs) as well as global payment networks (Stripe, PayPal, Checkout.com) in unified checkout flows."
      }
    ]
  },
  {
    id: "service-7",
    slug: "maintenance-support",
    number: "07",
    title: "Maintenance & Support",
    shortDesc: "Ongoing performance audits, security patches, uptime monitoring, and continuous enhancements so your systems stay dependable.",
    fullDesc: "After launch, our dedicated engineering team handles bug fixes, proactive security patches, performance audits, and iterative improvements so your systems scale smoothly as user adoption grows.",
    iconName: "ShieldAlert",
    badge: "24/7 SLA Support",
    targetAudience: "Enterprises that require dependable ongoing engineering support rather than relying on inconsistent freelancer availability for critical systems.",
    deliverables: [
      "Rapid bug resolution and scheduled minor improvement sprint cycles",
      "24/7 server uptime, SSL, firewall, and database performance monitoring",
      "Regular package dependency upgrades and zero-day security patching",
      "Monthly performance reports, database optimization, and strategic technical advice"
    ],
    outcomes: [
      "Maximized uptime with 99.9% availability SLAs on mission-critical applications",
      "Peace of mind knowing a seasoned engineering team is on standby 24/7",
      "Predictable maintenance costs with zero surprise operational interruptions"
    ],
    features: [
      "Automated daily encrypted offsite backups with rapid disaster recovery",
      "Real-time error tracking with Sentry and instant engineering alerts",
      "Proactive server load balancing and CDN cache warming",
      "Dedicated Slack/WhatsApp support channel with priority SLA response"
    ],
    technologies: ["Docker", "AWS CloudWatch", "Sentry", "GitHub Actions", "Vercel", "Linux", "Nginx"],
    faqs: [
      {
        question: "What is your response time for high-severity emergency issues?",
        answer: "For critical production outages, our emergency response SLA guarantees active engineering attention within 30 minutes to 1 hour, supported 24/7."
      }
    ]
  }
];

