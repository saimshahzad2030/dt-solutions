export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  company: string;
  quote: string;
  rating: number;
  avatarInitials: string;
  accentColor: string;
}

export const testimonialsData: TestimonialItem[] = [
  {
    id: "test-1",
    name: "Faraz Ahmed",
    role: "Operations Lead",
    company: "Provincial Logistics Partner",
    quote: "DT Solutions understood our workflow quickly and built something practical instead of overcomplicating it. Communication stayed clear from start to finish, and our team adopted the platform without disruption.",
    rating: 5,
    avatarInitials: "FA",
    accentColor: "#5e6fb5",
  },
  {
    id: "test-2",
    name: "Hina Raza",
    role: "Director",
    company: "SME Commercial Services",
    quote: "The team set realistic expectations and trained our staff so the system was adopted quickly. Their technical understanding and responsiveness made all the difference in modernizing our client management.",
    rating: 5,
    avatarInitials: "HR",
    accentColor: "#ee6196",
  },
  {
    id: "test-3",
    name: "Usman Tariq",
    role: "Founder",
    company: "Enterprise Technology Venture",
    quote: "After the website redesign and the new workflow automations, our enquiries are clearer and follow-ups happen faster. It made a visible difference to our pipeline and operational credibility.",
    rating: 5,
    avatarInitials: "UT",
    accentColor: "#47579a",
  },
  {
    id: "test-4",
    name: "Kamran Siddiqui",
    role: "Head of Digital Initiatives",
    company: "Public Sector Program",
    quote: "Developing b-pay infrastructure requires intense regulatory attention and bulletproof security. DT Solutions demonstrated rigorous discipline, proactive problem-solving, and delivered rock-solid engineering.",
    rating: 5,
    avatarInitials: "KS",
    accentColor: "#5e6fb5",
  }
];

