export interface Program {
  slug: string;
  title: string;
  category: string;
  badge: string;
  subtitle: string;
  overview: string;
  audience: string[];
  skills: string[];
  curriculumHighlights: { title: string; desc: string }[];
  labMethodology: string;
  /** Three short lab facts shown under the methodology paragraph. */
  labHighlights: { title: string; note: string }[];
  careerRelevance: string;
  careerRoles: string[];
  recommendedCourseSlugs: string[];
  duration?: string;
  investment?: {
    options: { name: string; price: string; includes: string }[];
    addon?: { name: string; price: string; note: string };
    note?: string;
  };
}

export const PROGRAMS: Program[] = [
  {
    slug: "soc-analyst",
    title: "SOC & Blue Team Career Track",
    category: "Blue Team & Defensive Operations",
    badge: "Operations Track",
    subtitle: "From alert triage to enterprise incident containment",
    overview:
      "The SOC & Blue Team program prepares learners to step into frontline security operations. Built around authentic threat monitoring pipelines, you will gain fluency in analyzing endpoint telemetry, mapping adversarial movements using MITRE ATT&CK, creating detection rules, and executing triage under simulated operational pressure.",
    audience: [
      "Aspiring SOC Analysts and Incident Responders",
      "IT Support and Systems Administrators seeking security specialization",
      "Network Engineers transitioning to security monitoring",
      "Graduates seeking hands-on defensive operations credentials",
    ],
    skills: [
      "SOC Shift Workflows & Triage",
      "SIEM Querying (SPL / KQL / Wazuh)",
      "Log Normalization & Parsing",
      "Detection Engineering Basics",
      "Endpoint Telemetry Analysis (Sysmon)",
      "Incident Escalation & Playbooks",
    ],
    curriculumHighlights: [
      {
        title: "Tier 1 & Tier 2 SOC Operational Workflows",
        desc: "Master alert queues, SLA management, context enrichment, and ticket escalation standards.",
      },
      {
        title: "Telemetry Ingestion & SIEM Architecture",
        desc: "Deploy collectors and ingest heterogeneous Windows, Linux, and network event logs.",
      },
      {
        title: "Threat Correlation & MITRE ATT&CK Mapping",
        desc: "Connect multi-source alerts into coherent attack chains across adversarial tactics.",
      },
      {
        title: "Live Incident Triage in Cyber Range",
        desc: "Handle simulated phishing, brute force, and lateral movement attacks in real-time.",
      },
    ],
    labMethodology:
      "Every student works in an isolated multi-host virtual environment feeding active telemetry into enterprise SIEM instances. Attacks are injected programmatically, giving you real hands-on triage practice.",
    labHighlights: [
      { title: "Isolated VMs", note: "Safe execution sandboxes" },
      { title: "Real Event Feeds", note: "Heterogeneous logs & Sysmon" },
      { title: "Instructor Feedback", note: "Detailed triage reviews" },
    ],
    careerRelevance:
      "Demand for qualified SOC analysts continues to outpace supply globally. This program focuses strictly on demonstrable operational competencies that hiring managers look for in technical interviews.",
    careerRoles: [
      "SOC Analyst (Tier 1 / Tier 2)",
      "Incident Response Specialist",
      "Cyber Threat Monitor",
      "Security Operations Engineer",
    ],
    recommendedCourseSlugs: [
      "soc-analyst-professional",
      "siem-engineering-operations",
      "linux-networking-cybersecurity",
    ],
  },
  {
    slug: "ethical-hacking",
    title: "CEH v13 Ethical Hacking Training",
    category: "Offensive Security",
    badge: "Offensive Track",
    subtitle:
      "60 hours of live, instructor-led CEH v13 training in Hyderabad — take the training alone or with the certification pathway",
    overview:
      "A 60-hour instructor-led programme built on the 20-module CEH v13 syllabus. Learn how attackers scout, probe, exploit and hold a foothold in enterprise networks — inside isolated labs — so you can test and fix those weaknesses, and prepare for the CEH v13 exam on the certification track.",
    audience: [
      "IT professionals and graduates preparing for the CEH v13 certification",
      "Security Analysts aiming to understand the offensive perspective",
      "Network Engineers and System Administrators auditing internal networks",
      "Software Developers wanting to identify code-level vulnerabilities",
      "Cybersecurity enthusiasts dedicated to ethical, authorized security testing",
    ],
    skills: [
      "Active & Passive OSINT",
      "Network Probing & Service Enumeration",
      "Vulnerability Scanning & Manual Validation",
      "Web Application Attack Vectors (OWASP)",
      "AI-Assisted Security Scripting",
      "Remediation Documentation",
    ],
    curriculumHighlights: [
      {
        title: "Reconnaissance & Footprinting Frameworks",
        desc: "Discover public-facing attack surfaces using OSINT and automated reconnaissance tools.",
      },
      {
        title: "Network & System Exploitation Validation",
        desc: "Identify and safely validate known CVEs across Linux and Windows lab architectures.",
      },
      {
        title: "Web Application Security (OWASP Top 10)",
        desc: "Test for Injection, Broken Access Control, SSRF, and authentication weaknesses.",
      },
      {
        title: "AI Integration in Ethical Hacking",
        desc: "Leverage AI models for payload analysis, script acceleration, and report drafting.",
      },
    ],
    labMethodology:
      "100% of testing is conducted inside isolated sandbox networks hosting realistic, vulnerable target hosts and modern web applications.",
    labHighlights: [
      { title: "Vulnerable Targets", note: "Linux, Windows and web apps built to be attacked" },
      { title: "Full Attack Chains", note: "Recon → exploitation → reporting" },
      { title: "Instructor Feedback", note: "Review of every lab write-up" },
    ],
    careerRelevance:
      "Offensive testing skills are essential for vulnerability management, red teaming, and application security roles across mid-market and enterprise businesses.",
    careerRoles: [
      "Ethical Hacker",
      "Security Assessment Specialist",
      "Junior Penetration Tester",
      "Vulnerability Management Analyst",
    ],
    recommendedCourseSlugs: [
      "ceh-v13-ai-ethical-hacking",
      "vapt-professional",
      "linux-networking-cybersecurity",
    ],
    duration: "60 hours · live instructor-led",
    investment: {
      options: [
        {
          name: "Training Only",
          price: "₹20,000",
          includes: "60-hour instructor-led CEH v13 training with hands-on labs",
        },
        {
          name: "Training + Certification",
          price: "₹45,000",
          includes: "60-hour training, exam preparation and the CEH v13 exam voucher",
        },
      ],
      addon: {
        name: "Cyber Range Labs",
        price: "₹6,000 extra",
        note: "6 months lab access validity",
      },
      note: "The Training + Certification fee includes the CEH v13 exam voucher; EC-Council's exam terms apply. GST charged where applicable.",
    },
  },
  {
    slug: "vapt",
    title: "Vulnerability Assessment & Penetration Testing",
    category: "Professional Services & Testing",
    badge: "Testing Specialist",
    subtitle:
      "Authorized assessment methodologies, deep verification, and audit-grade deliverables",
    overview:
      "The VAPT program bridges technical testing with professional client-facing delivery. Move beyond basic automated scanners to master deep manual testing, business logic flaw identification, risk scoring, and audit-grade reporting that security leaders rely upon.",
    audience: [
      "Security Testers and Vulnerability Management Specialists",
      "Application Security (AppSec) Engineers",
      "Compliance and IT Audit Professionals",
      "Technical consultants delivering security assessment services",
    ],
    skills: [
      "PTES & OWASP Testing Frameworks",
      "Manual Vulnerability Verification",
      "API & Web Application Pentesting",
      "CVSS v3/v4 Risk Rating",
      "Audit-Grade Report Writing",
      "Client Retesting & Attestation",
    ],
    curriculumHighlights: [
      {
        title: "Scoping & Legal Rules of Engagement",
        desc: "Establish clear testing boundaries, safety protocols, and client communication channels.",
      },
      {
        title: "Deep Web & API Security Testing",
        desc: "Evaluate complex authentication, session tokens, and business logic authorization.",
      },
      {
        title: "Risk Rating & CVSS Scoring Matrices",
        desc: "Quantify technical impact and probability to prioritize organizational remediation.",
      },
      {
        title: "Executive & Technical Reporting",
        desc: "Author comprehensive, professional reports with verifiable remediation instructions.",
      },
    ],
    labMethodology:
      "Assess realistic multi-tier corporate architectures and modern API backends, validating automated scanner findings through manual exploitation proof-of-concepts.",
    labHighlights: [
      { title: "Multi-tier Targets", note: "Corporate networks and API backends" },
      { title: "Manual Verification", note: "Proof of concept for every finding" },
      { title: "Report Reviews", note: "Instructor feedback on deliverables" },
    ],
    careerRelevance:
      "Regulatory mandates like PCI-DSS, ISO 27001, and SOC 2 require continuous independent penetration testing, making skilled VAPT professionals a cornerstone of security engineering.",
    careerRoles: [
      "VAPT Consultant",
      "Penetration Tester",
      "AppSec Engineer",
      "Security Assessment Lead",
    ],
    recommendedCourseSlugs: [
      "vapt-professional",
      "ceh-v13-ai-ethical-hacking",
      "siem-engineering-operations",
    ],
  },
  {
    slug: "cybersecurity-career",
    title: "Cybersecurity Career Accelerator",
    category: "Career Pathway",
    badge: "Flagship Accelerator",
    subtitle:
      "Comprehensive, structured roadmap from technical fundamentals to job-ready capability",
    overview:
      "Designed specifically for ambitious learners seeking a career in cybersecurity, this end-to-end program combines Linux, networking, Windows Active Directory defense, SOC operations, ethical hacking, and real cyber range scenarios.",
    audience: [
      "Career changers entering tech and cybersecurity",
      "Graduates in Computer Science, IT, and related fields",
      "Helpdesk technicians aiming for security analyst roles",
      "Self-taught enthusiasts needing a structured, validated path",
    ],
    skills: [
      "End-to-End Systems & Networking",
      "Windows Active Directory Defense",
      "SOC Operations & Log Analysis",
      "Vulnerability Identification",
      "Technical Lab Portfolio Building",
      "Technical Interview Fluency",
    ],
    curriculumHighlights: [
      {
        title: "Core Systems & Protocol Foundation",
        desc: "Build rock-solid fluency in Linux administration, TCP/IP, and Wireshark traffic analysis.",
      },
      {
        title: "Defensive Operations & SIEM Triage",
        desc: "Gain hands-on experience in Wazuh and Splunk investigating live simulated attacks.",
      },
      {
        title: "Offensive Concepts & Vulnerability Testing",
        desc: "Understand adversarial techniques to effectively defend enterprise infrastructures.",
      },
      {
        title: "Portfolio Development & Mock Interviews",
        desc: "Build verified GitHub lab portfolios and practice technical scenario problem-solving.",
      },
    ],
    labMethodology:
      "Comprehensive access to all CyberBodha range modules, including individual lab environments, guided scenario walkthroughs, and capstone challenges.",
    labHighlights: [
      { title: "Isolated VMs", note: "Safe execution sandboxes" },
      { title: "Attack & Defend", note: "Both sides of every scenario" },
      { title: "Lab Portfolio", note: "Write-ups you keep after the course" },
    ],
    careerRelevance:
      "Focuses on genuine hands-on capability, demonstrable lab projects, and verified readiness rather than unproven shortcuts.",
    careerRoles: [
      "Cybersecurity Analyst",
      "Junior SOC Analyst",
      "Information Security Specialist",
      "Security Operations Associate",
    ],
    recommendedCourseSlugs: [
      "cybersecurity-career-accelerator",
      "soc-analyst-professional",
      "linux-networking-cybersecurity",
    ],
  },
  {
    slug: "cloud-security",
    title: "Cloud Security & DevSecOps",
    category: "Cloud & Infrastructure",
    badge: "Modern Architecture",
    subtitle: "Securing multi-cloud environments, containers, and automated delivery pipelines",
    overview:
      "Modern organizations run on the cloud. This program prepares you to secure AWS, Azure, and containerized architectures. Learn Identity and Access Management (IAM) governance, infrastructure-as-code security scanning, container hardening, and cloud detection engineering.",
    audience: [
      "Cloud Engineers and DevOps professionals expanding into security",
      "Security Analysts shifting to cloud-native monitoring",
      "System Administrators managing AWS or Azure environments",
      "Engineers seeking to implement DevSecOps automated pipelines",
    ],
    skills: [
      "Cloud Shared Responsibility Model",
      "IAM Policy Hardening & Least Privilege",
      "CloudTrail & Activity Log Auditing",
      "Container & Kubernetes Security",
      "Infrastructure as Code (IaC) Scanning",
      "Cloud Security Posture Management (CSPM)",
    ],
    curriculumHighlights: [
      {
        title: "Multi-Cloud Governance & IAM Architecture",
        desc: "Enforce least-privilege access, role-based controls, and multi-factor guardrails.",
      },
      {
        title: "Cloud Telemetry & Detection Monitoring",
        desc: "Analyze AWS CloudTrail, VPC Flow Logs, and Azure Monitor logs in SIEM pipelines.",
      },
      {
        title: "Container & Kubernetes Security",
        desc: "Harden Docker images, secure Kubernetes pods, and scan container registries.",
      },
      {
        title: "CI/CD Pipeline Security Integration",
        desc: "Implement automated static code analysis (SAST) and dependency vulnerability checks.",
      },
    ],
    labMethodology:
      "Deploy real cloud architectures using Terraform and evaluate automated security scanners against misconfigured infrastructure and vulnerable container deployments.",
    labHighlights: [
      { title: "Real Cloud Stacks", note: "Terraform-built AWS & Azure labs" },
      { title: "Misconfigured Targets", note: "IAM, storage and containers" },
      { title: "Instructor Feedback", note: "Review of every finding" },
    ],
    careerRelevance:
      "As enterprise workloads migrate to the cloud, cloud security and DevSecOps engineers command some of the fastest-growing hiring demands in the industry.",
    careerRoles: [
      "Cloud Security Engineer",
      "DevSecOps Specialist",
      "Cloud Security Analyst",
      "Infrastructure Security Architect",
    ],
    recommendedCourseSlugs: [
      "siem-engineering-operations",
      "soc-analyst-professional",
      "vapt-professional",
    ],
  },
];

export function getProgramBySlug(slug: string): Program | undefined {
  return PROGRAMS.find((program) => program.slug === slug);
}

/** First message of a WhatsApp enquiry started from a programme page. */
export function programWhatsappMessage(program: Pick<Program, "title">): string {
  return `Hi CyberBodha, I'd like details of the ${program.title} programme — fees and next batch.`;
}
