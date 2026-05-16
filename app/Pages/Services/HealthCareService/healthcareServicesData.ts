export interface HealthcareService {
  slug: string;
  title: string;
  shortTitle: string;
  eyebrow: string;
  heroTitle: string;
  heroHighlight: string;
  description: string;
  metaTitle: string;
  metaDescription: string;
  serviceType: string;
  primaryCta: string;
  secondaryCta: string;
  trustIndicators: string[];
  metrics: Array<{
    value: string;
    label: string;
  }>;
  painPoints: string[];
  solutions: string[];
  capabilities: Array<{
    title: string;
    description: string;
  }>;
  process: Array<{
    title: string;
    description: string;
  }>;
  benefits: Array<{
    title: string;
    description: string;
  }>;
  differentiators: string[];
  expertise: string[];
  faqs: Array<{
    question: string;
    answer: string;
  }>;
}

export const healthcareServices: HealthcareService[] = [
  {
    slug: "revenue-cycle-management",
    title: "Revenue Cycle Management (RCM)",
    shortTitle: "Revenue Cycle Management",
    eyebrow: "Healthcare RCM Services",
    heroTitle: "Revenue Cycle Management built for cleaner claims and faster cash flow",
    heroHighlight: "cleaner claims",
    description:
      "End-to-end RCM support for healthcare organizations that need stronger charge capture, fewer denials, cleaner AR, and more predictable reimbursement operations.",
    metaTitle: "Revenue Cycle Management Services | Healthcare RCM | Error Hive Solutions",
    metaDescription:
      "Healthcare revenue cycle management services for claims, AR follow-up, denial management, payment posting, reporting, and compliance-ready billing operations.",
    serviceType: "Healthcare Revenue Cycle Management",
    primaryCta: "Discuss RCM Operations",
    secondaryCta: "Review Billing Gaps",
    trustIndicators: ["HIPAA-aware workflows", "Denial prevention focus", "AR performance reporting", "Payer-specific billing discipline"],
    metrics: [
      { value: "30-45%", label: "faster denial response cycles" },
      { value: "95%+", label: "clean claim process target" },
      { value: "24-48h", label: "payment posting rhythm" },
    ],
    painPoints: [
      "Delayed claim submission creates avoidable cash-flow pressure.",
      "Manual eligibility, coding, and documentation gaps increase denial risk.",
      "AR teams often lack clear payer-level prioritization and follow-up visibility.",
    ],
    solutions: [
      "We structure front-end verification, charge review, claim scrubbing, submission, payment posting, and AR follow-up into one measurable operating cadence.",
      "Denials are categorized by root cause so teams can correct upstream process gaps instead of repeatedly working the same issues.",
      "Leadership receives KPI-focused reporting across claim status, denial aging, collections, and payer trends.",
    ],
    capabilities: [
      {
        title: "Eligibility and benefits verification",
        description: "Confirm coverage, plan rules, authorization needs, and patient responsibility before claims enter the cycle.",
      },
      {
        title: "Claims preparation and submission",
        description: "Review claim data, documentation, modifiers, payer rules, and scrub outputs before timely submission.",
      },
      {
        title: "Denial management",
        description: "Classify denials, prepare corrected claims or appeals, and build prevention loops for recurring issues.",
      },
      {
        title: "AR follow-up and reporting",
        description: "Prioritize aging buckets, payer status, underpayments, and unresolved balances with transparent reporting.",
      },
    ],
    process: [
      { title: "Audit the current revenue cycle", description: "Map intake, coding, claim, denial, posting, and AR workflows to identify leakage points." },
      { title: "Define payer and specialty rules", description: "Document billing requirements, authorization rules, and claim submission standards." },
      { title: "Operate daily claim workflows", description: "Run structured checks for submission, rejections, denials, payment posting, and AR follow-up." },
      { title: "Report and optimize", description: "Review KPIs, denial trends, root causes, and monthly improvement actions with your team." },
    ],
    benefits: [
      { title: "Improved collections", description: "Clean claim discipline and faster follow-up help reduce avoidable revenue delays." },
      { title: "Lower denial volume", description: "Root-cause tracking improves front-end accuracy and documentation quality." },
      { title: "Operational clarity", description: "Leadership gets cleaner visibility into AR, payer behavior, and billing bottlenecks." },
    ],
    differentiators: [
      "Healthcare-specific operating playbooks rather than generic back-office support.",
      "KPI dashboards aligned to revenue, denial, and aging outcomes.",
      "Process discipline across front-end, mid-cycle, and back-end RCM.",
      "Flexible support for growing practices, clinics, and healthcare SaaS teams.",
    ],
    expertise: [
      "Physician groups and specialty practices",
      "Multi-location clinics",
      "Healthcare SaaS and billing platforms",
      "Outpatient and ambulatory workflows",
    ],
    faqs: [
      {
        question: "What parts of the revenue cycle can you support?",
        answer:
          "We support eligibility checks, claims preparation, submission, rejection handling, denial management, payment posting coordination, AR follow-up, and performance reporting.",
      },
      {
        question: "Can you work with our existing billing software?",
        answer:
          "Yes. We align with your current systems and processes, then document repeatable workflows so operations remain visible and measurable.",
      },
      {
        question: "How do you reduce denials?",
        answer:
          "We categorize denials by root cause, correct active claims, and create prevention checks for eligibility, authorization, coding, documentation, and payer-specific rules.",
      },
    ],
  },
  {
    slug: "dental-rcm",
    title: "Dental RCM",
    shortTitle: "Dental RCM",
    eyebrow: "Dental Billing Services",
    heroTitle: "Dental RCM support for claims, attachments, payments, and insurance follow-up",
    heroHighlight: "Dental RCM",
    description:
      "Dental revenue cycle support designed for practices that need cleaner insurance workflows, stronger patient billing, attachment accuracy, and reliable reimbursement follow-up.",
    metaTitle: "Dental RCM Services | Dental Billing Support | Error Hive Solutions",
    metaDescription:
      "Dental RCM services for insurance verification, dental claims, attachments, payment posting, denial follow-up, and patient billing workflows.",
    serviceType: "Dental Revenue Cycle Management",
    primaryCta: "Improve Dental Billing",
    secondaryCta: "Assess Claim Workflow",
    trustIndicators: ["Dental payer workflows", "Attachment-ready claims", "Patient balance support", "Procedure-level follow-up"],
    metrics: [
      { value: "98%", label: "documentation checklist coverage" },
      { value: "7-14d", label: "routine AR review cadence" },
      { value: "100%", label: "payer response tracking" },
    ],
    painPoints: [
      "Missing narratives, perio charts, X-rays, or attachments delay dental claims.",
      "Coordination of benefits and plan limitations are often handled inconsistently.",
      "Patient balances can age when insurance estimates and payment posting are unclear.",
    ],
    solutions: [
      "We standardize verification, pre-authorization, claim preparation, attachment review, and insurance follow-up for dental workflows.",
      "Claims are prepared with documentation checks tied to procedure and payer expectations.",
      "Patient responsibility and insurance responses are tracked so practices can communicate with confidence.",
    ],
    capabilities: [
      {
        title: "Dental insurance verification",
        description: "Verify eligibility, frequencies, waiting periods, deductibles, maximums, and coordination of benefits.",
      },
      {
        title: "Claim and attachment review",
        description: "Prepare claims with required narratives, X-rays, perio charting, and procedure-specific documentation.",
      },
      {
        title: "Payment posting support",
        description: "Track EOBs, adjustments, patient responsibility, and unresolved insurance balances.",
      },
      {
        title: "Dental AR follow-up",
        description: "Follow unresolved claims by payer, aging bucket, procedure type, and response status.",
      },
    ],
    process: [
      { title: "Review practice billing flow", description: "Assess verification, treatment planning, claims, attachments, posting, and collections." },
      { title: "Build payer documentation rules", description: "Create checklists for narratives, images, pre-auths, and procedure-specific claim needs." },
      { title: "Run insurance follow-up", description: "Work pending claims, denials, rejected attachments, and unpaid balances by priority." },
      { title: "Surface billing insights", description: "Report aging, payer issues, attachment gaps, and patient balance trends." },
    ],
    benefits: [
      { title: "Fewer avoidable claim delays", description: "Attachment and narrative checks reduce preventable follow-up work." },
      { title: "Cleaner patient billing", description: "Better estimate and EOB tracking improves balance communication." },
      { title: "More predictable insurance follow-up", description: "Dental AR work becomes visible, prioritized, and repeatable." },
    ],
    differentiators: [
      "Dental-specific billing workflows, not generic medical billing templates.",
      "Attachment, pre-auth, and procedure documentation discipline.",
      "Clear reporting around unresolved claims and patient balances.",
      "Support for growing dental groups and specialty dental practices.",
    ],
    expertise: [
      "General dentistry",
      "Orthodontics and periodontics",
      "Multi-location dental groups",
      "Dental SaaS and billing operations",
    ],
    faqs: [
      {
        question: "Do you support dental attachments and narratives?",
        answer:
          "Yes. We can help organize documentation checks for required narratives, X-rays, perio charts, and payer-specific attachment expectations.",
      },
      {
        question: "Can you help with dental insurance verification?",
        answer:
          "Yes. We support eligibility, benefits, waiting periods, frequencies, deductibles, plan maximums, and coordination of benefits workflows.",
      },
      {
        question: "How is Dental RCM different from medical RCM?",
        answer:
          "Dental RCM depends heavily on procedure-specific documentation, attachments, pre-authorizations, benefit maximums, and patient estimates, so it needs a dedicated workflow.",
      },
    ],
  },
  {
    slug: "credentialing-enrollment",
    title: "Credentialing & Enrollment",
    shortTitle: "Credentialing",
    eyebrow: "Provider Enrollment Services",
    heroTitle: "Credentialing and payer enrollment built for faster provider readiness",
    heroHighlight: "provider readiness",
    description:
      "Credentialing and enrollment support that helps healthcare organizations organize provider data, reduce payer delays, and maintain enrollment visibility.",
    metaTitle: "Credentialing & Enrollment Services | Provider Enrollment | Error Hive Solutions",
    metaDescription:
      "Provider credentialing and payer enrollment services for CAQH maintenance, application tracking, recredentialing, document management, and enrollment operations.",
    serviceType: "Provider Credentialing and Enrollment",
    primaryCta: "Start Enrollment Review",
    secondaryCta: "Fix Credentialing Delays",
    trustIndicators: ["CAQH maintenance", "Payer application tracking", "Document control", "Recredentialing calendars"],
    metrics: [
      { value: "100%", label: "application status visibility" },
      { value: "60-120d", label: "typical payer enrollment window" },
      { value: "30d", label: "recredentialing reminder cadence" },
    ],
    painPoints: [
      "Provider onboarding stalls when documents, attestations, and payer forms are incomplete.",
      "Enrollment status often lives in spreadsheets without clear owner accountability.",
      "Recredentialing deadlines can be missed without a structured calendar.",
    ],
    solutions: [
      "We centralize provider data, documentation, CAQH updates, payer applications, follow-ups, and status tracking.",
      "Enrollment work is organized by payer, provider, location, taxonomy, and due date.",
      "Teams gain clear visibility into pending requests, missing items, approvals, and recredentialing requirements.",
    ],
    capabilities: [
      {
        title: "Provider file readiness",
        description: "Collect and validate licenses, insurance, board details, IDs, taxonomies, locations, and practice data.",
      },
      {
        title: "CAQH profile support",
        description: "Maintain provider data accuracy, document uploads, attestations, and payer access requirements.",
      },
      {
        title: "Payer enrollment tracking",
        description: "Prepare applications, monitor payer responses, and keep follow-up status transparent.",
      },
      {
        title: "Recredentialing management",
        description: "Maintain reminders and evidence trails for renewals, expirations, and recurring payer requests.",
      },
    ],
    process: [
      { title: "Organize provider data", description: "Create a complete profile with documents, identifiers, practice locations, and payer needs." },
      { title: "Prepare and submit applications", description: "Complete payer forms, CAQH updates, and enrollment packets with quality checks." },
      { title: "Track payer responses", description: "Monitor status, missing information requests, effective dates, and approval milestones." },
      { title: "Maintain credentialing hygiene", description: "Run renewal calendars, document updates, and recredentialing reminders." },
    ],
    benefits: [
      { title: "Faster provider onboarding", description: "Cleaner data and organized application workflows reduce preventable enrollment delays." },
      { title: "Less administrative drag", description: "Teams spend less time chasing documents and payer status manually." },
      { title: "Better compliance visibility", description: "Licenses, attestations, expirations, and recredentialing tasks stay visible." },
    ],
    differentiators: [
      "Structured enrollment trackers built around provider, payer, location, and status.",
      "Document readiness discipline before applications go out.",
      "Operational transparency for internal teams and leadership.",
      "Support for onboarding, maintenance, and recredentialing cycles.",
    ],
    expertise: [
      "Medical groups and specialty practices",
      "Behavioral health providers",
      "Dental and ancillary provider networks",
      "Healthcare platforms onboarding provider supply",
    ],
    faqs: [
      {
        question: "Can you manage CAQH updates?",
        answer:
          "Yes. We can help maintain CAQH profiles, document uploads, attestations, provider data accuracy, and payer access requirements.",
      },
      {
        question: "How do you track payer enrollment status?",
        answer:
          "We track each payer application by provider, location, submitted date, current status, missing items, follow-up date, and effective date.",
      },
      {
        question: "Do you support recredentialing?",
        answer:
          "Yes. We can maintain renewal calendars and support recurring payer requests, document updates, and recredentialing workflows.",
      },
    ],
  },
  {
    slug: "client-patient-centric-enablement",
    title: "Client/Patient Centric Enablement",
    shortTitle: "Patient Enablement",
    eyebrow: "Patient Operations Enablement",
    heroTitle: "Patient-centric enablement that improves access, communication, and operational follow-through",
    heroHighlight: "Patient-centric",
    description:
      "Enablement support for healthcare teams that need smoother intake, better patient communication, stronger workflow coordination, and clearer operational handoffs.",
    metaTitle: "Patient Centric Enablement Services | Healthcare Operations | Error Hive Solutions",
    metaDescription:
      "Patient-centric enablement services for healthcare intake, scheduling support, communication workflows, care coordination, and operational follow-through.",
    serviceType: "Patient Centric Healthcare Enablement",
    primaryCta: "Improve Patient Workflows",
    secondaryCta: "Map Access Gaps",
    trustIndicators: ["Patient-first operations", "Access workflow support", "Communication playbooks", "Experience-focused reporting"],
    metrics: [
      { value: "40%+", label: "lower avoidable handoff friction" },
      { value: "24h", label: "recommended response rhythm" },
      { value: "360deg", label: "patient journey visibility" },
    ],
    painPoints: [
      "Patients experience friction when intake, scheduling, billing, and follow-up are disconnected.",
      "Front-office teams often lack standard scripts, escalation paths, and workflow visibility.",
      "Missed handoffs lead to lower satisfaction, delayed care, and avoidable support volume.",
    ],
    solutions: [
      "We design operational workflows that connect patient intake, verification, scheduling, communication, billing support, and follow-up.",
      "Teams get clearer scripts, status definitions, escalation paths, and service-level expectations.",
      "Leadership gains visibility into access bottlenecks, patient requests, and experience-impacting delays.",
    ],
    capabilities: [
      {
        title: "Patient intake workflow design",
        description: "Structure forms, verification handoffs, appointment requests, and document collection workflows.",
      },
      {
        title: "Communication playbooks",
        description: "Create patient-friendly scripts, status templates, escalation paths, and follow-up cadences.",
      },
      {
        title: "Scheduling and access support",
        description: "Improve request routing, appointment coordination, no-show prevention, and queue visibility.",
      },
      {
        title: "Experience reporting",
        description: "Track response time, issue categories, access blockers, handoff quality, and recurring patient friction.",
      },
    ],
    process: [
      { title: "Map the patient journey", description: "Review every patient touchpoint from inquiry to visit, billing, support, and follow-up." },
      { title: "Define service workflows", description: "Document ownership, scripts, status states, response expectations, and escalation rules." },
      { title: "Enable operating teams", description: "Roll out playbooks, intake checklists, communication templates, and dashboard views." },
      { title: "Measure patient friction", description: "Track bottlenecks, unresolved requests, handoff misses, and experience improvements." },
    ],
    benefits: [
      { title: "Better patient experience", description: "Clearer communication and follow-through reduce confusion and frustration." },
      { title: "Higher team efficiency", description: "Standardized workflows reduce repeated questions and avoidable manual coordination." },
      { title: "Stronger access operations", description: "Scheduling and intake teams gain better visibility into demand and blockers." },
    ],
    differentiators: [
      "Healthcare operations design with patient experience at the center.",
      "Practical workflows that front-office and support teams can actually use.",
      "Measurement across access, communication, handoffs, and support quality.",
      "Works alongside billing, credentialing, and healthcare SaaS operations.",
    ],
    expertise: [
      "Patient intake and scheduling operations",
      "Care coordination and support workflows",
      "Healthcare SaaS customer operations",
      "Multi-location clinic enablement",
    ],
    faqs: [
      {
        question: "What does patient-centric enablement include?",
        answer:
          "It includes workflow design, intake support, communication playbooks, scheduling coordination, escalation paths, and reporting that improves patient access and follow-through.",
      },
      {
        question: "Can this work with our current practice management system?",
        answer:
          "Yes. We design workflows around your existing systems and help standardize the operational process around them.",
      },
      {
        question: "How do you measure patient experience improvements?",
        answer:
          "We track response times, unresolved request volume, scheduling blockers, handoff misses, escalation reasons, and recurring friction themes.",
      },
    ],
  },
  {
    slug: "billing-assessment-compliance",
    title: "Billing Assessment & Compliance",
    shortTitle: "Billing Compliance",
    eyebrow: "Healthcare Billing Assessment",
    heroTitle: "Billing assessment and compliance reviews for stronger revenue integrity",
    heroHighlight: "revenue integrity",
    description:
      "Structured billing assessment and compliance support to identify revenue leakage, documentation gaps, payer risk, process weakness, and audit readiness opportunities.",
    metaTitle: "Billing Assessment & Compliance Services | Healthcare Billing Audit | Error Hive Solutions",
    metaDescription:
      "Healthcare billing assessment and compliance services for revenue leakage review, claims process audits, documentation checks, denial trends, and compliance-ready operations.",
    serviceType: "Healthcare Billing Assessment and Compliance",
    primaryCta: "Request Billing Assessment",
    secondaryCta: "Review Compliance Risk",
    trustIndicators: ["Audit-ready documentation", "Revenue leakage review", "Denial trend analysis", "Compliance-focused workflows"],
    metrics: [
      { value: "360deg", label: "billing workflow review" },
      { value: "10+", label: "risk categories assessed" },
      { value: "30d", label: "action plan cadence" },
    ],
    painPoints: [
      "Revenue leakage hides in eligibility gaps, coding patterns, underpayments, write-offs, and unworked denials.",
      "Billing teams may not have a documented compliance trail for decisions and follow-up.",
      "Leadership often sees collections outcomes without understanding process risk behind them.",
    ],
    solutions: [
      "We assess billing workflows across intake, documentation, claim creation, posting, adjustments, denials, AR, and reporting.",
      "Findings are categorized by revenue impact, compliance risk, operational effort, and recommended priority.",
      "Your team receives a practical improvement roadmap with owners, metrics, and recurring review cadence.",
    ],
    capabilities: [
      {
        title: "Revenue leakage assessment",
        description: "Review missed charges, preventable denials, underpayments, aging AR, and avoidable write-offs.",
      },
      {
        title: "Documentation and workflow review",
        description: "Assess handoffs, notes, payer evidence, claim corrections, adjustment reasons, and audit trails.",
      },
      {
        title: "Compliance readiness checks",
        description: "Evaluate billing controls, payer policy alignment, access practices, and process documentation.",
      },
      {
        title: "Improvement roadmap",
        description: "Prioritize findings into actionable workflow changes, training needs, reporting, and control updates.",
      },
    ],
    process: [
      { title: "Collect workflow evidence", description: "Gather sample claims, denial data, AR reports, adjustment codes, and team process notes." },
      { title: "Assess billing controls", description: "Review claim readiness, documentation quality, payer rules, approvals, and audit trails." },
      { title: "Prioritize findings", description: "Score revenue impact, compliance exposure, operational complexity, and speed to improve." },
      { title: "Deliver action plan", description: "Create a roadmap with process changes, reporting improvements, owner alignment, and review cadence." },
    ],
    benefits: [
      { title: "Reduced revenue leakage", description: "Identify missed reimbursement opportunities and recurring process breakdowns." },
      { title: "Stronger audit readiness", description: "Improve documentation, decision trails, and billing control visibility." },
      { title: "More confident leadership decisions", description: "Turn billing risk into a prioritized operational improvement plan." },
    ],
    differentiators: [
      "Assessment output is practical, prioritized, and implementation-ready.",
      "Revenue integrity and compliance are reviewed together.",
      "Findings connect process gaps to measurable billing outcomes.",
      "Works before, during, or after an RCM operating engagement.",
    ],
    expertise: [
      "Billing workflow audits",
      "Denial and AR trend analysis",
      "Healthcare revenue integrity",
      "Compliance-ready process documentation",
    ],
    faqs: [
      {
        question: "What do you review in a billing assessment?",
        answer:
          "We review eligibility, claim readiness, documentation, denial trends, payment posting, adjustments, write-offs, AR follow-up, reporting, and compliance controls.",
      },
      {
        question: "Is this a formal legal compliance audit?",
        answer:
          "No. We provide operational billing assessment and compliance-readiness support. Legal or regulatory opinions should come from qualified healthcare counsel.",
      },
      {
        question: "What deliverables do we receive?",
        answer:
          "You receive prioritized findings, revenue leakage opportunities, compliance-readiness observations, workflow recommendations, and an action plan.",
      },
    ],
  },
];

export const healthcareHub = {
  title: "Health Care Service",
  metaTitle: "Health Care Service | Healthcare RCM & Billing Operations | Error Hive Solutions",
  metaDescription:
    "Explore healthcare services for RCM, Dental RCM, credentialing, patient-centric enablement, and billing assessment and compliance.",
  description:
    "Healthcare operations support for revenue cycle management, dental billing, provider credentialing, patient enablement, and compliance-ready billing assessment.",
};

export function getHealthcareService(slug: string) {
  return healthcareServices.find((service) => service.slug === slug);
}
