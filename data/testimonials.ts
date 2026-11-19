export interface DeliveryCapability {
  id: string;
  title: string;
  category: string;
  description: string;
}

export const deliveryCapabilities: DeliveryCapability[] = [
  {
    id: "cap-1",
    title: "Government Digital Transformation",
    category: "Public Sector",
    description:
      "End-to-end digital tax, levy, challan, and citizen service platforms engineered for multi-department governance and transparent reporting.",
  },
  {
    id: "cap-2",
    title: "FinTech & Payment Rails",
    category: "Payments",
    description:
      "Payment gateway connectivity, provincial payment switches, Raast, 1LINK, and 1BILL integrations with structured settlement and reconciliation.",
  },
  {
    id: "cap-3",
    title: "Enterprise Software & Platforms",
    category: "Enterprise",
    description:
      "Role-based ERP/CRM applications, executive BI dashboards, web and mobile portals, and automated operational workflows.",
  },
  {
    id: "cap-4",
    title: "Security & Infrastructure Engineering",
    category: "Security",
    description:
      "Encryption, role-based access control, auditable transaction logging, PCI DSS readiness engineering, cloud resilience, and ongoing monitoring.",
  },
];

export const engineeringPerspective = {
  eyebrow: "DELIVERY ETHOS",
  heading: "Built for Institutional Reliability & Long-Term Stewardship",
  statement:
    "Public-sector platforms and financial infrastructure leave no room for guesswork. Our engineering practice prioritises clear requirements, auditable workflows, secure integration boundaries, and maintainable architectures that organisations can operate with confidence.",
  attributionTitle: "DT Solutions Engineering Practice",
  attributionSubtitle: "Government Technology, Payment Infrastructure & Enterprise Systems",
};
