export interface CompanyInfo {
  name: string;
  legalName: string;
  tagline: string;
  description: string;
  email: string;
  phone: string;
  whatsapp: string;
  location: string;
  address: string;
  country: string;
  operatingHours: string;
  responseTime: string;
  socials: {
    linkedin: string;
    github?: string;
    twitter?: string;
  };
  stats: {
    projectsDelivered: number;
    clientSatisfaction: number;
    responseTimeHours: number;
    uptimePercentage: number;
    transactionsProcessed: string;
  };
}

export const companyData: CompanyInfo = {
  name: "DT Solutions",
  legalName: "DT SOLUTIONS (PRIVATE) LIMITED",
  tagline: "Premium software, websites, and automation for global enterprises",
  description:
    "DT Solutions builds enterprise websites, custom software, executive dashboards, and AI automation systems for organizations that want practical digital growth and dependable operational execution.",
  email: "info@dtsolutions.pk",
  phone: "+92 300 0000000",
  whatsapp: "+92 300 0000000",
  location: "Islamabad & Provincial Centers, Pakistan",
  address: "Islamabad, Pakistan",
  country: "PK",
  operatingHours: "Monday to Saturday (10:00 AM to 7:00 PM PKT)",
  responseTime: "Within 24 hours",
  socials: {
    linkedin: "https://www.linkedin.com/company/dtsolutionspk",
    twitter: "https://twitter.com/dtsolutionspk",
    github: "https://github.com/dtsolutions",
  },
  stats: {
    projectsDelivered: 50,
    clientSatisfaction: 99,
    responseTimeHours: 24,
    uptimePercentage: 99.9,
    transactionsProcessed: "100K+",
  },
};

export const coreValues = [
  {
    title: "Operational Clarity",
    description:
      "We build systems around how decisions get made and how teams actually work, avoiding unnecessary complexity.",
    icon: "Target",
  },
  {
    title: "Production Discipline",
    description:
      "Every module is engineered for enterprise security, auditable data flow, and long-term maintainability.",
    icon: "ShieldCheck",
  },
  {
    title: "Measurable Impact",
    description:
      "We focus on real outcomes: less manual work, faster response times, and clear data for leadership.",
    icon: "TrendingUp",
  },
  {
    title: "Dedicated Partnership",
    description:
      "From requirements discovery to long-term post-launch support, we remain an accessible technical ally.",
    icon: "Users2",
  },
];

export const processSteps = [
  {
    step: "01",
    phase: "Phase 01",
    title: "Discover & Map",
    subtitle: "Workflow & Strategy",
    description:
      "We map your current workflows, bottlenecks, and business priorities before proposing an architecture.",
    deliverables: ["Requirements Specification", "Architecture Blueprint", "Tech Stack Selection"],
  },
  {
    step: "02",
    phase: "Phase 02",
    title: "Plan & Architect",
    subtitle: "Milestones & Scope",
    description:
      "A clear implementation roadmap with transparent milestones, deliverables, and security benchmarks.",
    deliverables: ["Sprint Roadmap", "API Specifications", "Interactive UI Mockups"],
  },
  {
    step: "03",
    phase: "Phase 03",
    title: "Build & Iterate",
    subtitle: "Agile Development",
    description:
      "Iterative sprints with regular demos, automated testing, and active stakeholder feedback at every stage.",
    deliverables: ["Weekly Checkpoint Demos", "Unit & Integration Tests", "Staging Deployments"],
  },
  {
    step: "04",
    phase: "Phase 04",
    title: "Launch & Support",
    subtitle: "Rollout & Reliability",
    description:
      "Smooth production rollout, staff training, and proactive ongoing maintenance to guarantee system health.",
    deliverables: ["Production Handover", "User Training Guides", "24/7 SLA & Monitoring"],
  },
];

