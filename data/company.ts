export interface CompanyInfo {
  name: string;
  legalName: string;
  tagline: string;
  description: string;
  email: string;
  country: string;
  operatingHours: string;
  socials: {
    linkedin: string;
    github?: string;
    twitter?: string;
  };
}

export const companyData: CompanyInfo = {
  name: "DT Solutions",
  legalName: "DT SOLUTIONS (PRIVATE) LIMITED",
  tagline: "Powering Digital Transformation Through Technology & Innovation",
  description:
    "DT Solutions delivers enterprise technology, digital payment infrastructure and government transformation platforms that simplify complex operations and enable scalable digital services.",
  email: "info@dtsolutions.pk",
  country: "PK",
  operatingHours: "Monday to Saturday (10:00 AM to 7:00 PM PKT)",
  socials: {
    linkedin: "https://www.linkedin.com/company/dtsolutionspk",
  },
};

export const focusAreas = [
  "Government Technology",
  "FinTech Infrastructure",
  "Enterprise Solutions",
  "Digital Platforms",
] as const;

export const coreValues = [
  {
    title: "Public-Sector & Institutional Clarity",
    description:
      "We design systems around institutional workflows, regulatory requirements, and public-service delivery rather than unnecessary complexity.",
    icon: "Target",
  },
  {
    title: "Security-First Engineering",
    description:
      "Every platform is built with encryption, role-based access control, auditable transaction trails, and disciplined release governance.",
    icon: "ShieldCheck",
  },
  {
    title: "Scalable Architecture",
    description:
      "We build resilient payment rails, API integrations, and enterprise applications engineered to grow cleanly across departments and user bases.",
    icon: "TrendingUp",
  },
  {
    title: "Long-Term Stewardship",
    description:
      "From architecture discovery through deployment, integration, and ongoing system maintenance, we work alongside client teams as a dependable technical partner.",
    icon: "Users2",
  },
];

export const processSteps = [
  {
    step: "01",
    phase: "Phase 01",
    title: "Discovery & Governance Mapping",
    subtitle: "Requirements & Institutional Scope",
    description:
      "We map operational workflows, stakeholder roles, integration dependencies, and security controls before defining system architecture.",
    deliverables: [
      "Requirements Specification",
      "Integration & Architecture Blueprint",
      "Security & Access Control Plan",
    ],
  },
  {
    step: "02",
    phase: "Phase 02",
    title: "Architecture & Prototyping",
    subtitle: "System Design & Milestones",
    description:
      "Structured delivery milestones covering data models, API contracts, payment integration flows, and interface design.",
    deliverables: [
      "Delivery Roadmap",
      "API & Schema Specifications",
      "Interface Prototypes",
    ],
  },
  {
    step: "03",
    phase: "Phase 03",
    title: "Iterative Engineering & QA",
    subtitle: "Build, Integrate & Verify",
    description:
      "Milestone-driven software development with automated testing, security reviews, and structured stakeholder validation.",
    deliverables: [
      "Milestone Review Demos",
      "Automated & Integration Testing",
      "Staging Verification",
    ],
  },
  {
    step: "04",
    phase: "Phase 04",
    title: "Deployment & Ongoing Support",
    subtitle: "Rollout & System Maintenance",
    description:
      "Controlled production rollout, operational documentation, team onboarding, and structured post-launch monitoring and maintenance.",
    deliverables: [
      "Production Deployment",
      "Operational Documentation & Training",
      "Ongoing Monitoring & Maintenance",
    ],
  },
];
