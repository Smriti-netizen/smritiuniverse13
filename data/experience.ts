export type ExperienceEntry = {
  title: string;
  company: string;
  period: string;
  bullets: string[];
};

export const experience: ExperienceEntry[] = [
  {
    title: "Software Development Engineer 1",
    company: "Flipkart",
    period: "July 2024 – April 2026",
    bullets: [
      "Led My Orders & Order Details revamp for 2M+ users",
      "Migrated sync flows to async event-driven models via Apache Pulsar — 560% throughput boost",
      "Zero-downtime datastore migration via canary rollouts, feature flags, dual-write/read",
      "Real-time Kafka + HDFS streaming pipeline for order/inventory events",
      "Agentic GenAI framework auto-generating backend scaffolding — ~60% faster bootstrap",
    ],
  },
  {
    title: "Engineering Intern",
    company: "CSG International",
    period: "Jan 2024 – June 2024",
    bullets: [
      "Automated testing platform (performance, unit, integration) — 25% faster defect resolution",
    ],
  },
  {
    title: "Machine Learning Fellow",
    company: "Amazon",
    period: "July 2022 – Aug 2022",
    bullets: [
      "Selected from 50,000+ applicants, top 10% among 50+ teams",
      "Built PFine, a plant disease detection app (Kotlin, TensorFlow Lite, Firebase), 95% accuracy",
    ],
  },
];

export const education = {
  degree: "B.Tech, Computer Engineering (Data Science)",
  school: "J.C. Bose University, YMCA",
  period: "2020 – 2024",
};
