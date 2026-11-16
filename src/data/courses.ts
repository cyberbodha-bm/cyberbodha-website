import {
  CEH_V13_MODULES,
  type CehModule,
  type CehModuleLab,
  type CehKnowledgeCheck,
  type ContentClassification,
} from "./ceh-v13-curriculum";

export type CourseCategory =
  | "SOC & Blue Team"
  | "Offensive Security & VAPT"
  | "SIEM Engineering"
  | "Cloud Security"
  | "Networking & Linux"
  | "AI & Cybersecurity"
  | "DevSecOps"
  | "Career Accelerator";

export type CourseLevel =
  | "Foundation"
  | "Foundation to Professional"
  | "Foundation to Advanced"
  | "Intermediate"
  | "Intermediate to Advanced"
  | "Foundation to Job Readiness";

export interface CourseModule {
  title: string;
  description: string;
  topics: string[];
  number?: number;
  officialNumber?: string;
  officialTitle?: string;
  category?: string;
  classification?: ContentClassification | string;
  learningObjectives?: string[];
  conceptExplanation?: string;
  aiAssistantFeatures?: string[];
  guidedLabs?: CehModuleLab[];
  practiceChallenges?: string[];
  knowledgeChecks?: CehKnowledgeCheck[];
  moduleAssessment?: string;
  summary?: string;
}

export interface CourseFAQ {
  question: string;
  answer: string;
}

export interface Course {
  id: string;
  slug: string;
  title: string;
  category: CourseCategory;
  level: CourseLevel;
  shortDescription: string;
  overview: string;
  audience: string[];
  prerequisites: string[];
  learningOutcomes: string[];
  skills: string[];
  curriculum: CourseModule[];
  labHighlights: string[];
  technologies: string[];
  format: string;
  duration?: string;
  certificationNote: string;
  faqs: CourseFAQ[];
  featured: boolean;
  published: boolean;
  badge?: string;
  relatedCourseSlugs: string[];
}

export const COURSE_CATEGORIES: CourseCategory[] = [
  "SOC & Blue Team",
  "Offensive Security & VAPT",
  "SIEM Engineering",
  "Cloud Security",
  "Networking & Linux",
  "AI & Cybersecurity",
  "DevSecOps",
  "Career Accelerator",
];

export const COURSES: Course[] = [
  {
    id: "cb-soc-01",
    slug: "soc-analyst-professional",
    title: "SOC Analyst Professional Program",
    category: "SOC & Blue Team",
    level: "Foundation to Professional",
    shortDescription:
      "Develop practical capabilities for SOC monitoring, alert triage, investigation, escalation, and incident handling in enterprise environments.",
    overview:
      "The SOC Analyst Professional Program equips aspiring and transitioning security professionals with rigorous operational readiness. Learn to analyze live event streams, detect malicious indicators, map intrusions to MITRE ATT&CK, investigate endpoint/network telemetry, and execute structured incident triage using leading SIEM and XDR tools.",
    audience: [
      "Aspiring SOC Analysts and Tier 1 / Tier 2 security operations candidates",
      "IT administrators, system administrators, and network engineers transitioning to security",
      "Computer science, IT, and engineering graduates seeking structured cybersecurity skills",
      "Junior security professionals seeking to validate enterprise monitoring workflows",
    ],
    prerequisites: [
      "Basic understanding of computer networking principles (IP addressing, ports, protocols)",
      "Familiarity with general operating system fundamentals (Windows and Linux)",
      "Strong analytical mindset and enthusiasm for investigating technical anomalies",
    ],
    learningOutcomes: [
      "Operate effectively within a modern Security Operations Center (SOC) framework",
      "Triage security alerts and prioritize critical threats using risk-based scoring",
      "Ingest, parse, and analyze endpoint and network event logs across Windows, Linux, and firewalls",
      "Formulate and evaluate correlation rules based on the MITRE ATT&CK framework",
      "Perform end-to-end incident investigation and draft actionable remediation and escalation tickets",
    ],
    skills: [
      "SOC Alert Triage",
      "Log & Telemetry Analysis",
      "MITRE ATT&CK Mapping",
      "Detection Correlation",
      "Incident Escalation",
      "Endpoint Forensics Basics",
      "Threat Hunting Fundamentals",
    ],
    curriculum: [
      {
        title: "Module 1: SOC Operations & Analyst Responsibilities",
        description:
          "Explore the structure, workflows, metrics (MTTD/MTTR), and analyst responsibilities across Tier 1, 2, and 3 security operations.",
        topics: [
          "SOC Architecture & Tier Structure",
          "Operational Workflows & Playbooks",
          "SLA & KPI Tracking",
          "Ticketing & Escalation Standards",
        ],
      },
      {
        title: "Module 2: SIEM Architecture & Data Ingestion",
        description:
          "Understand enterprise SIEM pipelines, log forwarders, agents, and collection architectures.",
        topics: [
          "Log Sources & Formats (Syslog, JSON, CEF)",
          "Agent vs. Agentless Collection",
          "Indexer & Storage Design",
          "Data Retention & Compliance",
        ],
      },
      {
        title: "Module 3: Log Analysis & Investigation",
        description:
          "Master querying and forensic breakdown of security logs across heterogeneous systems.",
        topics: [
          "Windows Security Event IDs (4624, 4625, 4688, 7045)",
          "Linux Syslog, Auth.log, and Auditd",
          "Web Server Logs (Apache, Nginx, IIS)",
          "Firewall & Proxy Log Analysis",
        ],
      },
      {
        title: "Module 4: Alert Triage & Prioritization",
        description:
          "Distinguish benign anomalies and false positives from genuine security incidents.",
        topics: [
          "Alert Triaging Methodology",
          "Severity vs. Impact Scoring",
          "Context Enrichment via Threat Intel",
          "Suppressing False Positives",
        ],
      },
      {
        title: "Module 5: Detection Rules & Correlation",
        description:
          "Build robust detection mechanisms that identify attacker techniques before impact.",
        topics: [
          "Correlation Logic & Threshold Rules",
          "Behavioral Anomaly Detection",
          "Sigma Rules & Rule Conversion",
          "Testing Detections Against Baselines",
        ],
      },
      {
        title: "Module 6: MITRE ATT&CK Mapping",
        description:
          "Structure security monitoring and coverage against real-world adversarial tactics and techniques.",
        topics: [
          "Tactics, Techniques & Sub-techniques",
          "Mapping Alerts to Attack Phases",
          "Coverage Heatmaps & Gap Analysis",
          "Adversary Profiling",
        ],
      },
      {
        title: "Module 7: Endpoint & Network Telemetry",
        description:
          "Harness rich telemetry from endpoint detection agents and network capture sensors.",
        topics: [
          "Sysmon Deep-Dive (Process Creation, Network Connections)",
          "EDR Telemetry & Process Trees",
          "Flow Logs & NetFlow Analysis",
          "DNS & HTTP Telemetry Inspection",
        ],
      },
      {
        title: "Module 8: Incident Investigation Workflows",
        description:
          "Lead methodical root-cause investigations from initial trigger to scope determination.",
        topics: [
          "Reconstructing Attack Timelines",
          "Identifying Patient Zero & Lateral Movement",
          "Artifact Preservation & Chain of Custody",
          "Scope of Compromise Assessment",
        ],
      },
      {
        title: "Module 9: Incident Escalation & Reporting",
        description:
          "Communicate technical findings clearly to incident response teams and executive stakeholders.",
        topics: [
          "Structured Incident Reporting",
          "Executive Summaries vs. Technical Details",
          "Actionable Containment Recommendations",
          "Post-Incident Reviews",
        ],
      },
      {
        title: "Module 10: Hands-on SOC Investigation Scenarios",
        description:
          "Simulated multi-stage attacks in a controlled environment mirroring real enterprise networks.",
        topics: [
          "Scenario: Phishing leading to Credential Theft",
          "Scenario: Ransomware Pre-Cursor Detection",
          "Scenario: Insider Data Exfiltration",
          "Scenario: Web Shell Persistence",
        ],
      },
      {
        title: "Module 11: Practical SOC Capstone Assessment",
        description:
          "Comprehensive timed evaluation simulating a full shift in a live enterprise SOC environment.",
        topics: [
          "Live Shift Simulation",
          "Independent Triage & Ticket Submission",
          "Investigation Accuracy Review",
          "Faculty Feedback & Readiness Evaluation",
        ],
      },
    ],
    labHighlights: [
      "Triaging active brute-force and password spraying attacks in Wazuh",
      "Correlating endpoint process launches with Sysmon event telemetry in Splunk",
      "Investigating simulated credential dumping (LSASS access) and privilege escalation",
      "Drafting professional incident escalation tickets using industry templates",
    ],
    technologies: [
      "Wazuh",
      "Splunk",
      "Microsoft Sentinel",
      "Sysmon",
      "Windows Event Logs",
      "Linux Auditd",
      "MITRE ATT&CK",
      "Wireshark",
    ],
    format: "Instructor-led training with hands-on cyber range labs",
    certificationNote:
      "Includes CyberBodha Certified SOC Analyst Practical Readiness Assessment and certificate of completion.",
    faqs: [
      {
        question: "Is this program suitable for beginners in cybersecurity?",
        answer:
          "Yes. While basic familiarity with networking and operating systems is recommended, the program builds step-by-step from foundational monitoring concepts to advanced investigation scenarios.",
      },
      {
        question: "Which SIEM platforms are used in the lab exercises?",
        answer:
          "The program emphasizes transferable analytical skills using open and enterprise platforms including Wazuh, Splunk, and Microsoft Sentinel environments depending on cohort delivery configuration.",
      },
      {
        question: "Does the course include live simulated attacks?",
        answer:
          "Yes. The capstone modules utilize simulated attack scenarios in our Cyber Range environment where students analyze real telemetry without putting production systems at risk.",
      },
    ],
    featured: true,
    published: true,
    badge: "Flagship Program",
    relatedCourseSlugs: [
      "siem-engineering-operations",
      "linux-networking-cybersecurity",
      "cybersecurity-career-accelerator",
    ],
  },
  {
    id: "cb-eh-02",
    slug: "ceh-v13-ai-ethical-hacking",
    title: "CEH v13 AI Integrated Ethical Hacking",
    category: "Offensive Security & VAPT",
    level: "Foundation to Advanced",
    shortDescription:
      "Official EC-Council CEH v13 aligned 20-module curriculum covering offensive security, penetration testing, and AI-accelerated cyber workflows.",
    overview:
      "This program delivers the official 20-module Certified Ethical Hacker (CEH v13 AI) curriculum mapped to EC-Council standards and enhanced with CyberBodha Cyber Range virtual labs. Learn authorized penetration testing, vulnerability exploitation, network attacks, cloud security, and post-exploitation workflows while mastering how artificial intelligence is transforming both offensive security testing and defensive threat countermeasures.",
    audience: [
      "Security specialists, penetration testers, and vulnerability analysts",
      "Network engineers, systems administrators, and IT auditors",
      "Cybersecurity professionals preparing for the EC-Council CEH v13 certification examination",
      "Engineering students aiming to understand offensive security, system defenses, and AI-assisted testing",
    ],
    prerequisites: [
      "Working knowledge of TCP/IP networking, subnetting, and port services",
      "Basic command line proficiency in Linux (Bash) and Windows",
      "Strict commitment to ethical conduct and legal testing boundaries",
    ],
    learningOutcomes: [
      "Master the official 20-module EC-Council CEH v13 ethical hacking body of knowledge",
      "Conduct systematic reconnaissance, network scanning, and deep service enumeration",
      "Execute authorized exploitation across systems, web applications, wireless, mobile, IoT/OT, and cloud architectures",
      "Leverage modern AI workflows for automated reconnaissance synthesis, exploit tuning, and remediation reporting",
      "Analyze and detect AI-driven threats including polymorphic malware, deepfakes, and prompt injection vulnerabilities",
      "Draft audit-grade executive and technical remediation reports to harden enterprise defenses",
    ],
    skills: [
      "Official CEH v13 20-Module Scope",
      "Active & Passive OSINT Reconnaissance",
      "Advanced Port & Network Scanning (Nmap/Masscan)",
      "System Exploitation & Privilege Escalation",
      "OWASP Top 10 Web Application Pentesting",
      "SQL Injection & Advanced Database Extraction",
      "Wireless & WPA2/WPA3 Security Auditing",
      "Mobile App (Android/iOS) Reverse Engineering",
      "IoT & OT / SCADA Modbus Interrogation",
      "AWS & Multi-Cloud IAM Privilege Escalation",
      "Applied Cryptography & Padding Oracle Attacks",
      "AI-Assisted Security & Prompt Defense Workflows",
    ],
    curriculum: CEH_V13_MODULES.map((m) => ({
      number: m.number,
      officialNumber: m.officialNumber,
      officialTitle: m.officialTitle,
      title: `${m.officialNumber}: ${m.officialTitle}`,
      description: m.description,
      topics: m.officialTopics,
      category: m.category,
      classification: m.classification,
      learningObjectives: m.learningObjectives,
      conceptExplanation: m.conceptExplanation,
      aiAssistantFeatures: m.aiAssistantFeatures,
      guidedLabs: m.guidedLabs,
      practiceChallenges: m.practiceChallenges,
      knowledgeChecks: m.knowledgeChecks,
      moduleAssessment: m.moduleAssessment,
      summary: m.summary,
    })),
    labHighlights: [
      "Targeted Footprinting & Reconnaissance using OSINT frameworks, Shodan, and automated certificate parsing",
      "Stealth Network Scanning, timing manipulation, and custom Nmap Scripting Engine (NSE) exploitation",
      "Active Directory, SMB, and SNMP enumeration in simulated multi-tier enterprise domains",
      "Windows Token Impersonation, unquoted service path exploitation, and Linux SUID privilege escalation",
      "Reverse engineering malware in isolated sandboxes and extracting outbound C2 communication IOCs",
      "Switched network packet sniffing, ARP cache poisoning, and credential stream decoding with Wireshark",
      "Simulated corporate spear-phishing with GoPhish and AI deepfake defense verification",
      "Application layer DoS testing, Slowloris mitigation, and WAF rate-limiting configuration",
      "Session hijacking, JWT signature tampering, and insecure cookie exploitation with Burp Suite",
      "IDS, WAF, and honeypot evasion using payload mutation, protocol fragmentation, and DNS tunneling",
      "Exploiting web server misconfigurations and directory traversal flaws on Apache/Nginx",
      "OWASP Top 10 web exploitation: Reflected/Stored XSS, SSRF to cloud metadata, and IDOR bypasses",
      "Manual and automated SQL injection with SQLMap to extract schemas and execute system commands",
      "WPA2 4-way handshake interception and PMKID extraction using Aircrack-ng and Hashcat",
      "Decompiling Android APKs with JADX, hooking methods with Frida, and bypassing SSL pinning",
      "Carving IoT firmware images with Binwalk and interrogating unauthenticated Modbus TCP industrial controllers",
      "AWS cloud penetration testing: IAM role privilege escalation, S3 bucket enumeration, and Terraform auditing",
      "Padding oracle cryptanalysis, SSL/TLS cipher suite auditing, and post-quantum cryptographic readiness",
    ],
    technologies: [
      "Kali Linux 2026",
      "Nmap & Masscan",
      "Burp Suite Professional",
      "Metasploit Framework",
      "Wireshark & Tcpdump",
      "Hashcat & John the Ripper",
      "SQLMap",
      "Aircrack-ng Suite",
      "JADX-GUI & Frida",
      "Binwalk & QEMU",
      "AWS CLI & Pacu",
      "OWASP ZAP",
      "OpenSSL",
      "Python 3",
    ],
    format: "Instructor-led training + dedicated Cyber Range practical lab environments",
    duration: "40 Hours Structured Curriculum + Unlimited Cyber Range Access",
    certificationNote:
      "Fully aligned with EC-Council Certified Ethical Hacker (CEH v13 AI) exam blueprint (125 Questions, 4 Hours) and CEH Practical (6 Hours).",
    faqs: [
      {
        question: "Does this course cover all 20 official CEH v13 modules?",
        answer:
          "Yes. CyberBodha strictly follows the complete official 20-module sequence established by EC-Council for CEH v13, covering everything from ethical foundations to IoT/OT, cloud platforms, and advanced cryptography.",
      },
      {
        question: "How is Artificial Intelligence (AI) integrated into this CEH v13 course?",
        answer:
          "CEH v13 incorporates AI across two fronts: using AI tools to accelerate ethical hacking tasks (code auditing, recon synthesis, payload variation, report generation) and evaluating threats from adversarial AI (deepfake social engineering, automated scanners, prompt injection vulnerabilities).",
      },
      {
        question: "Does CyberBodha provide hands-on lab access for all 20 modules?",
        answer:
          "Yes. Every module is paired with virtual Cyber Range exercises hosted in isolated sandbox topologies mirroring enterprise corporate networks, cloud platforms, and industrial control environments.",
      },
      {
        question: "Are certification exams included with this training?",
        answer:
          "The course delivers comprehensive curriculum preparation and practical range experience aligned with the official CEH v13 examination. Certification vouchers and proctored exam sessions are administered through official EC-Council testing channels.",
      },
      {
        question: "What are the recommended prerequisites?",
        answer:
          "Basic networking fundamentals (TCP/IP, subnetting) and familiarity with Linux/Windows command line navigation. No advanced programming is required.",
      },
    ],
    featured: true,
    published: true,
    badge: "Official 20 Modules Aligned",
    relatedCourseSlugs: [
      "vapt-professional",
      "linux-networking-cybersecurity",
      "cybersecurity-career-accelerator",
    ],
  },
  {
    id: "cb-vapt-03",
    slug: "vapt-professional",
    title: "Vulnerability Assessment & Penetration Testing Professional",
    category: "Offensive Security & VAPT",
    level: "Intermediate",
    shortDescription:
      "Master end-to-end VAPT methodologies, rigorous vulnerability verification, and client-ready reporting standards.",
    overview:
      "The VAPT Professional program focuses on the systematic execution of vulnerability assessments and penetration tests in enterprise environments. Moving beyond basic tool operation, this course teaches deep vulnerability validation, business logic testing, CVSS v3/v4 risk scoring, and the production of audit-grade remediation reports that security leadership relies upon.",
    audience: [
      "Security testers, ethical hackers, and vulnerability assessment engineers",
      "AppSec engineers and software developers seeking defensive validation techniques",
      "System administrators and network engineers responsible for internal security audits",
      "Cybersecurity practitioners moving from foundational security into specialized testing",
    ],
    prerequisites: [
      "Good working knowledge of Linux command line, networking protocols, and web architectures",
      "Prior foundational exposure to ethical hacking concepts or network administration",
      "Familiarity with HTTP/HTTPS request-response cycles and web application components",
    ],
    learningOutcomes: [
      "Execute structured penetration tests adhering to PTES and OWASP testing frameworks",
      "Thoroughly assess web applications for complex vulnerabilities including business logic flaws",
      "Accurately calculate risk scores using CVSS v3/v4 criteria to prioritize remediation",
      "Validate automated scanner outputs to eliminate false positives before reporting",
      "Author professional, executive-ready penetration testing reports and lead remediation retests",
    ],
    skills: [
      "VAPT Methodology & Scoping",
      "Web Application Penetration Testing",
      "Network Penetration Testing",
      "Business Logic Testing",
      "CVSS Risk Scoring",
      "Audit-Ready Reporting",
      "Retesting & Remediation Verification",
    ],
    curriculum: [
      {
        title: "Module 1: VAPT Methodology & Standards",
        description:
          "Understanding industry standards: PTES, OWASP Testing Guide, NIST SP 800-115, and CREST methodologies.",
        topics: [
          "Testing Frameworks Comparison",
          "Assessment Phases Breakdown",
          "Compliance Drivers (PCI-DSS, ISO 27001)",
          "Testing Frequency & Strategies",
        ],
      },
      {
        title: "Module 2: Rules of Engagement & Scoping",
        description:
          "Defining scope, communication channels, test windows, and liability protection agreements.",
        topics: [
          "Scope Documents & Questionnaires",
          "Third-Party & Cloud Provider Permissions",
          "Out-of-Scope Asset Identification",
          "Emergency Stop & Escalation Protocols",
        ],
      },
      {
        title: "Module 3: Scoping & Asset Discovery",
        description:
          "Active and passive discovery of live hosts, virtual hosts, API endpoints, and cloud assets.",
        topics: [
          "Subdomain Enumeration & Asset Tracking",
          "Port Mapping & Service Identification",
          "Hidden Asset & Archive Discovery",
          "Cloud Asset Footprinting",
        ],
      },
      {
        title: "Module 4: Vulnerability Validation & Verification",
        description:
          "Eliminating scanner noise through manual verification and proof-of-concept testing.",
        topics: [
          "Automated Scanner Deployment (Nessus/OpenVAS)",
          "Analyzing Scanner Outputs",
          "Crafting Proof-of-Concept (PoC) Checks",
          "Confirming False Positives",
        ],
      },
      {
        title: "Module 5: Advanced Web Application Testing",
        description:
          "Deep dive into web application vulnerabilities beyond automated scanner capabilities.",
        topics: [
          "Interception Proxies (Burp Suite Pro Features)",
          "Session Management & JWT Flaws",
          "Cross-Site Scripting (Stored, Reflected, DOM)",
          "SQL Injection & Second-Order Exploits",
        ],
      },
      {
        title: "Module 6: Authentication & Authorization Testing",
        description:
          "Evaluating access controls, multi-factor implementations, and privilege boundaries.",
        topics: [
          "Bypassing Ineffective 2FA/MFA",
          "OAuth 2.0 & SAML Flaws",
          "Horizontal & Vertical Privilege Escalation",
          "IDOR & Broken Object Level Authorization",
        ],
      },
      {
        title: "Module 7: API Security Testing",
        description:
          "Assessing RESTful, GraphQL, and microservice APIs using the OWASP API Security Top 10.",
        topics: [
          "API Endpoint Enumeration & Swagger Analysis",
          "Improper Asset Management",
          "Mass Assignment Vulnerabilities",
          "Rate Limiting & Resource Exhaustion",
        ],
      },
      {
        title: "Module 8: Internal Network Penetration Testing",
        description:
          "Testing internal enterprise networks, domain controllers, and segmented zones.",
        topics: [
          "Active Directory Enumeration",
          "LLMNR/NBT-NS Poisoning",
          "Pass-the-Hash & Token Impersonation",
          "Pivoting Across Segmented Subnets",
        ],
      },
      {
        title: "Module 9: Risk Rating & CVSS Scoring",
        description:
          "Standardizing vulnerability severity using the Common Vulnerability Scoring System.",
        topics: [
          "CVSS Base, Temporal & Environmental Metrics",
          "Calculating Exploitability vs. Impact",
          "Qualitative Risk Adjustments",
          "Aligning Risk with Business Context",
        ],
      },
      {
        title: "Module 10: Professional VAPT Reporting",
        description:
          "Authoring comprehensive reports containing executive summaries, technical findings, and CVSS scores.",
        topics: [
          "Executive Summary Composition",
          "Detailed Finding Documentation",
          "Step-by-Step Reproduction Steps",
          "Strategic vs. Tactical Remediation",
        ],
      },
      {
        title: "Module 11: Retesting, Validation & Closure",
        description:
          "Conducting post-remediation testing, verifying patch efficacy, and issuing final sign-off.",
        topics: [
          "Retesting Methodologies",
          "Verifying Incomplete Patches",
          "Updating Risk Registers",
          "Letter of Attestation Issuance",
        ],
      },
      {
        title: "Module 12: Comprehensive VAPT Practical Assessment",
        description:
          "Hands-on penetration test against a realistic multi-tier corporate staging environment.",
        topics: [
          "Full Scope Execution (Web + Network)",
          "Independent Report Compilation",
          "Scored Technical Presentation",
          "Faculty Assessment",
        ],
      },
    ],
    labHighlights: [
      "Performing authenticated web application tests on vulnerable modern web architectures",
      "Exploiting and proving Broken Object Level Authorization (BOLA) in REST APIs",
      "Pivoting through a multi-homed Linux target to access an internal Active Directory network",
      "Drafting a complete, audit-standard 20-page penetration testing deliverable",
    ],
    technologies: [
      "Burp Suite Professional",
      "Nessus",
      "Nmap",
      "OWASP ZAP",
      "SQLmap",
      "Postman",
      "Kali Linux",
      "Metasploit",
    ],
    format: "Instructor-led training with dedicated target environments",
    certificationNote:
      "Includes CyberBodha Certified VAPT Professional Assessment and Certificate of Completion.",
    faqs: [
      {
        question: "How does VAPT differ from general ethical hacking?",
        answer:
          "Ethical hacking covers broad offensive concepts, while VAPT focuses on professional, client-contracted testing methodologies, deep vulnerability verification, risk rating, and audit-grade reporting.",
      },
      {
        question: "Do students get access to licensed tools?",
        answer:
          "Students work within configured virtual lab environments equipped with industry-standard open and enterprise tools during guided sessions.",
      },
    ],
    featured: true,
    published: true,
    badge: "Industry Advanced",
    relatedCourseSlugs: [
      "ceh-v13-ai-ethical-hacking",
      "siem-engineering-operations",
      "soc-analyst-professional",
    ],
  },
  {
    id: "cb-siem-04",
    slug: "siem-engineering-operations",
    title: "SIEM Engineering & Detection Operations",
    category: "SIEM Engineering",
    level: "Intermediate to Advanced",
    shortDescription:
      "Design, build, and optimize enterprise SIEM architectures, log pipelines, detection rules, and threat hunting workflows.",
    overview:
      "SIEM Engineering & Detection Operations focuses on the technical engineering behind security visibility. Learn how to ingest high-volume telemetry from cloud and on-premises sources, write resilient parsers, build high-fidelity correlation rules, optimize search pipelines, and implement detection-as-code using Sigma and leading SIEM platforms.",
    audience: [
      "Security engineers, SIEM administrators, and detection engineers",
      "Senior SOC analysts transitioning into detection engineering or engineering roles",
      "Cloud and infrastructure engineers responsible for security telemetry and compliance logging",
      "IT professionals looking to specialize in high-demand enterprise monitoring engineering",
    ],
    prerequisites: [
      "Strong understanding of operating system internals (Windows Event Logging, Linux Auditd)",
      "Familiarity with regular expressions (Regex) and basic query languages (SPL, KQL, or Lucene)",
      "Knowledge of common network protocols and enterprise security architecture",
    ],
    learningOutcomes: [
      "Design and deploy scalable SIEM data ingestion pipelines using forwarders and collectors",
      "Write custom parsers and normalization logic adhering to common data models",
      "Author, test, and tune high-fidelity detection rules mapped to adversarial techniques",
      "Build operational dashboards that provide real-time visibility into enterprise risk",
      "Troubleshoot log pipeline bottlenecks, parsing drops, and system indexing performance",
    ],
    skills: [
      "SIEM Architecture Design",
      "Log Pipeline Engineering",
      "Log Parsing & Normalization",
      "KQL / SPL Query Mastery",
      "Detection Engineering",
      "Alert Tuning & Optimization",
      "Detection as Code",
    ],
    curriculum: [
      {
        title: "Module 1: Enterprise SIEM Architecture",
        description:
          "Architectural models: on-premises, hybrid, and cloud-native SIEM deployments.",
        topics: [
          "Architecture Components (Ingestion, Indexing, Search, Storage)",
          "Sizing & Capacity Planning",
          "Clustering & High Availability",
          "Data Lifecycle & Cold Storage",
        ],
      },
      {
        title: "Module 2: Log Collection & Ingestion Protocols",
        description: "Deploying and managing forwarders, syslog daemons, and cloud collectors.",
        topics: [
          "Universal Forwarders & Agents",
          "Syslog-ng & Rsyslog Configurations",
          "API-Based Telemetry Ingestion (AWS CloudTrail, MS Graph)",
          "Kafka & Message Broker Integration",
        ],
      },
      {
        title: "Module 3: Log Parsing, Extraction & Normalization",
        description:
          "Transforming raw, unstructured log strings into clean, queryable key-value pairs.",
        topics: [
          "Regular Expressions for Field Extraction",
          "Grok Patterns & Custom Parsers",
          "Splunk props.conf & transforms.conf",
          "Microsoft Sentinel KQL Parsers",
        ],
      },
      {
        title: "Module 4: Common Data Models & Standardization",
        description: "Mapping diverse log sources to normalized schemas (CIM, ECS, ASIM).",
        topics: [
          "Splunk Common Information Model (CIM)",
          "Elastic Common Schema (ECS)",
          "Microsoft Advanced Security Information Model (ASIM)",
          "Data Validation & Schema Compliance",
        ],
      },
      {
        title: "Module 5: Advanced Search & Investigation Queries",
        description:
          "Mastering search optimization, subsearches, lookups, and transaction aggregation.",
        topics: [
          "Query Performance Best Practices",
          "Using Subsearches & Macros",
          "Lookups & External Threat Intelligence Enrichment",
          "Statistical Aggregations & Time Charts",
        ],
      },
      {
        title: "Module 6: Correlation Rules & Detection Engineering",
        description:
          "Developing robust correlation searches to detect multi-stage adversarial behaviors.",
        topics: [
          "Threshold & Frequency Correlation",
          "Behavioral Anomaly Rules",
          "Temporal Event Sequencing",
          "Mapping to MITRE ATT&CK Techniques",
        ],
      },
      {
        title: "Module 7: Sigma Rules & Detection-as-Code",
        description:
          "Authoring platform-agnostic detection signatures and automated CI/CD deployments.",
        topics: [
          "Sigma Rule Syntax & Specifications",
          "Converting Sigma to SPL, KQL, and Wazuh XML",
          "Version Control for Detections (Git)",
          "Automated Rule Validation Testing",
        ],
      },
      {
        title: "Module 8: Alert Tuning & Noise Reduction",
        description:
          "Systematically reducing alert fatigue through baseline tuning and context filtering.",
        topics: [
          "Analyzing False Positive Root Causes",
          "Exception Handling & Suppression Logic",
          "Dynamic Thresholding",
          "Measuring Alert Fidelity & True Positive Rates",
        ],
      },
      {
        title: "Module 9: Operations & Executive Dashboards",
        description:
          "Designing high-impact visualizations for SOC operators, engineering teams, and CISOs.",
        topics: [
          "Real-time SOC Wallboard Design",
          "Threat Trend & KPI Visualizations",
          "Asset Risk & Vulnerability Overlays",
          "User Experience & Dashboard Performance",
        ],
      },
      {
        title: "Module 10: Proactive Threat Hunting with SIEM",
        description:
          "Executing hypothesis-driven threat hunting exercises across historical event stores.",
        topics: [
          "Hypothesis Formulation from Threat Intel",
          "Hunting for Living-off-the-Land (LotL) Binaries",
          "Detecting Beaconing Patterns in Proxy/DNS Logs",
          "Documenting Hunt Findings",
        ],
      },
      {
        title: "Module 11: Pipeline Health & Troubleshooting",
        description:
          "Monitoring SIEM infrastructure, diagnosing data loss, and optimizing indexing throughput.",
        topics: [
          "Diagnosing Log Ingestion Delays",
          "Troubleshooting Network Forwarder Outages",
          "Index Corruption & Recovery Procedures",
          "Resource Utilization Optimization",
        ],
      },
      {
        title: "Module 12: Capstone Engineering Assessment",
        description:
          "End-to-end pipeline implementation: ingest, parse, correlate, and build dashboards for a simulated enterprise.",
        topics: [
          "Multi-source Pipeline Setup",
          "Custom Parser & Detection Rule Creation",
          "Alert Validation Testing",
          "Engineering Defense Presentation",
        ],
      },
    ],
    labHighlights: [
      "Building a custom KQL parser in Microsoft Sentinel for legacy firewall logs",
      "Developing and testing Sigma detection rules for credential dumping attacks",
      "Troubleshooting dropped syslog telemetry and indexing lag in Splunk",
      "Constructing an executive threat visibility dashboard tracking MITRE ATT&CK coverage",
    ],
    technologies: [
      "Splunk Enterprise",
      "Microsoft Sentinel",
      "Wazuh SIEM/XDR",
      "Elasticsearch",
      "Logstash",
      "Kibana",
      "Sigma",
      "Sysmon",
    ],
    format: "Instructor-led engineering sessions with dedicated virtual lab nodes",
    certificationNote:
      "Includes CyberBodha Certified SIEM Engineer Assessment and Certificate of Completion.",
    faqs: [
      {
        question: "Is this course focused on a single SIEM vendor?",
        answer:
          "No. The course emphasizes architectural concepts and principles applicable across Splunk, Microsoft Sentinel, Wazuh, and Elastic, highlighting vendor-specific syntax where relevant.",
      },
      {
        question: "Do we learn to write Sigma rules?",
        answer:
          "Yes. An entire module is dedicated to authoring platform-neutral Sigma rules and converting them to SPL, KQL, and Elasticsearch queries.",
      },
    ],
    featured: true,
    published: true,
    badge: "Specialized Track",
    relatedCourseSlugs: [
      "soc-analyst-professional",
      "linux-networking-cybersecurity",
      "cybersecurity-career-accelerator",
    ],
  },
  {
    id: "cb-lnx-05",
    slug: "linux-networking-cybersecurity",
    title: "Linux & Networking for Cybersecurity",
    category: "Networking & Linux",
    level: "Foundation",
    shortDescription:
      "Build the foundational technical skills essential for all cybersecurity disciplines: command line mastery, Linux administration, and packet-level networking.",
    overview:
      "Linux and networking are the bedrock of modern cybersecurity. This course provides comprehensive, hands-on instruction in Linux system administration, bash shell operations, TCP/IP networking, packet dissection with Wireshark, and host-level defense configuration. Ideal for anyone entering cybersecurity or strengthening their technical core.",
    audience: [
      "Complete newcomers seeking a solid technical foundation for cybersecurity",
      "Students in computer science, IT, or engineering wanting hands-on systems experience",
      "IT helpdesk and desktop support technicians preparing for security roles",
      "Self-taught enthusiasts needing structured networking and Linux capabilities",
    ],
    prerequisites: [
      "Basic computer literacy (installing software, using standard operating systems)",
      "Curiosity about how operating systems, protocols, and the internet function",
      "No prior coding or Linux experience required",
    ],
    learningOutcomes: [
      "Navigate and manage Linux distributions efficiently via the terminal command line",
      "Configure Linux permissions, users, groups, system services, and process isolation",
      "Understand the mechanics of IPv4/IPv6, subnetting, DNS, DHCP, and routing",
      "Capture and analyze live network traffic at the packet level using Wireshark and tcpdump",
      "Configure host-level firewall rules and harden Linux systems against unauthorized access",
    ],
    skills: [
      "Linux Command Line (CLI)",
      "File Permissions & Ownership",
      "Process & Service Management",
      "TCP/IP & Protocol Analysis",
      "Wireshark Packet Dissection",
      "iptables / UFW Firewalls",
      "Basic Bash Scripting",
    ],
    curriculum: [
      {
        title: "Module 1: Linux Architecture & Terminal Basics",
        description:
          "Introduction to the Linux kernel, distributions, and essential navigation commands.",
        topics: [
          "Kernel vs. User Space",
          "Directory Hierarchy (FHS)",
          "Navigation (cd, ls, pwd, find)",
          "Viewing & Manipulating Files (cat, less, grep, head)",
        ],
      },
      {
        title: "Module 2: Filesystem Permissions & Security",
        description: "Mastering chmod, chown, SUID, SGID, and Sticky Bit security controls.",
        topics: [
          "Read, Write, Execute (rwx) Permissions",
          "Numeric vs. Symbolic Modes",
          "Special Permissions (SUID, SGID, Sticky Bit)",
          "Access Control Lists (ACLs)",
        ],
      },
      {
        title: "Module 3: User & Group Administration",
        description: "Managing local user accounts, sudo privileges, and authentication files.",
        topics: [
          "User Management (/etc/passwd, /etc/shadow)",
          "Group Creation & Assignment",
          "Configuring Sudoers Privileges Safely",
          "Securing Root Access",
        ],
      },
      {
        title: "Module 4: Process Management & Daemons",
        description:
          "Monitoring system activity, managing background jobs, and inspecting services.",
        topics: [
          "Process Viewing (ps, top, htop)",
          "Signals & Process Termination (kill, killall)",
          "Systemd Service Management (systemctl)",
          "Scheduled Tasks (Cron & Anacron)",
        ],
      },
      {
        title: "Module 5: Shell Scripting for Automation",
        description:
          "Writing practical Bash scripts to automate administrative and security checks.",
        topics: [
          "Variables, Loops & Conditionals in Bash",
          "Handling User Input & Exit Codes",
          "Automating System Health Checks",
          "Parsing Log Files with awk and sed",
        ],
      },
      {
        title: "Module 6: Fundamentals of Computer Networking",
        description:
          "Understanding network models, topologies, physical media, and data transmission.",
        topics: [
          "OSI 7-Layer Model vs. TCP/IP Model",
          "Encapsulation & Decapsulation",
          "MAC Addresses & Ethernet Frames",
          "Address Resolution Protocol (ARP)",
        ],
      },
      {
        title: "Module 7: The TCP/IP Protocol Suite",
        description: "Deep dive into IP addressing, CIDR subnetting, TCP handshakes, and UDP.",
        topics: [
          "IPv4 Addressing & CIDR Subnetting",
          "TCP 3-Way Handshake & Connection Teardown",
          "TCP Flags (SYN, ACK, FIN, RST)",
          "UDP Characteristics & Common Use Cases",
        ],
      },
      {
        title: "Module 8: Core Infrastructure Services",
        description: "How DNS, DHCP, HTTP, and TLS power internet communication.",
        topics: [
          "DNS Resolution Process & Record Types",
          "DHCP DORA Process",
          "HTTP/HTTPS Request-Response Lifecycle",
          "SSL/TLS Handshake & Certificates",
        ],
      },
      {
        title: "Module 9: Routing & Switching Concepts",
        description: "How packets travel across local networks and enterprise internetworks.",
        topics: [
          "VLANs & Trunking Fundamentals",
          "Default Gateways & Routing Tables",
          "Static Routing vs. Dynamic Protocols",
          "NAT & PAT Explained",
        ],
      },
      {
        title: "Module 10: Packet Analysis with Wireshark & tcpdump",
        description: "Capturing, filtering, and dissecting live network traffic.",
        topics: [
          "Capturing Packets with tcpdump",
          "Wireshark Display & Capture Filters",
          "Following TCP Streams",
          "Identifying Port Scans & Cleartext Credentials",
        ],
      },
      {
        title: "Module 11: Linux Firewalls & Network Hardening",
        description:
          "Protecting systems with stateful packet filtering and secure service configurations.",
        topics: [
          "Configuring UFW (Uncomplicated Firewall)",
          "iptables / nftables Packet Filtering Chains",
          "SSH Hardening (Key Authentication, Root Disallow)",
          "Disabling Unnecessary Services",
        ],
      },
      {
        title: "Module 12: Hands-on Practical Lab & Final Project",
        description:
          "Configuring and auditing a secure dual-homed Linux gateway inside a simulated network.",
        topics: [
          "Setting Up Network Interfaces",
          "Configuring Local DNS & DHCP",
          "Enforcing Firewall Restrictions",
          "Conducting a Traffic Capture Audit",
        ],
      },
    ],
    labHighlights: [
      "Configuring user accounts, sudoers rules, and file permissions on Ubuntu Server",
      "Capturing and analyzing a TCP 3-way handshake and HTTP traffic in Wireshark",
      "Writing a Bash script that audits open network ports and emails alert logs",
      "Building a custom iptables firewall policy blocking unauthorized external scans",
    ],
    technologies: [
      "Debian/Ubuntu",
      "Kali Linux",
      "Bash",
      "Wireshark",
      "tcpdump",
      "Nmap",
      "iptables/UFW",
      "systemd",
    ],
    format: "Instructor-led with guided hands-on lab environments",
    certificationNote:
      "Includes CyberBodha Certified Foundations Assessment and Certificate of Completion.",
    faqs: [
      {
        question: "Is this course necessary before taking SOC Analyst or Ethical Hacking?",
        answer:
          "If you are new to Linux or networking, taking this course first will significantly accelerate your progress in specialized offensive or defensive programs.",
      },
      {
        question: "Do I need to install Linux on my personal computer?",
        answer:
          "No. You will work in cloud-hosted browser virtual labs, though we also teach how to set up free local virtual machines in VirtualBox or VMware.",
      },
    ],
    featured: true,
    published: true,
    badge: "Foundation Pillar",
    relatedCourseSlugs: [
      "soc-analyst-professional",
      "ceh-v13-ai-ethical-hacking",
      "cybersecurity-career-accelerator",
    ],
  },
  {
    id: "cb-car-06",
    slug: "cybersecurity-career-accelerator",
    title: "Cybersecurity Career Accelerator",
    category: "Career Accelerator",
    level: "Foundation to Job Readiness",
    shortDescription:
      "A comprehensive, intensive program designed to take you from foundational knowledge to job-ready capability across blue team and offensive disciplines.",
    overview:
      "The Cybersecurity Career Accelerator is CyberBodha’s flagship career transformation pathway. Blending systems engineering, network defense, SOC operations, ethical hacking, and practical cyber range scenarios, this curriculum is tailored for candidates aiming to build demonstrable skills, build an authentic technical portfolio, and prepare for industry interviews.",
    audience: [
      "Career changers transitioning into cybersecurity from other technical or non-technical fields",
      "College graduates and final-year students seeking job-ready practical capabilities",
      "IT professionals looking to break into security analyst or engineering roles",
      "Self-directed learners wanting an end-to-end, structured technical roadmap",
    ],
    prerequisites: [
      "Strong dedication and willingness to engage in intense, regular practical lab work",
      "Basic familiarity with computers and operating systems",
      "No advanced cybersecurity background required",
    ],
    learningOutcomes: [
      "Master foundational systems, networking, and security concepts thoroughly",
      "Demonstrate competency in SOC alert triage, SIEM investigation, and log forensics",
      "Perform authorized vulnerability assessments and understand offensive methodologies",
      "Tackle multi-step cyber range challenge scenarios independently",
      "Produce a technical project portfolio and confidently navigate cybersecurity interviews",
    ],
    skills: [
      "End-to-End Cyber Fundamentals",
      "Linux & Windows Systems Defense",
      "SOC Analysis & Incident Handling",
      "Vulnerability Assessment",
      "Technical Portfolio Building",
      "Scenario-Based Problem Solving",
      "Interview Readiness",
    ],
    curriculum: [
      {
        title: "Module 1: Cybersecurity Foundations & Industry Landscape",
        description:
          "Understanding the modern threat landscape, security principles (CIA triad), and security career roles.",
        topics: [
          "The CIA Triad & Defense-in-Depth",
          "Threat Actors & Attack Motivations",
          "Security Frameworks (NIST CSF, ISO 27001)",
          "Career Roles: SOC, VAPT, GRC, Engineering",
        ],
      },
      {
        title: "Module 2: Linux & Networking for Security Professionals",
        description:
          "Mastering the command line, core networking protocols, and packet inspection.",
        topics: [
          "Linux Navigation & Administration",
          "TCP/IP & Protocol Fundamentals",
          "Wireshark Traffic Analysis",
          "Basic Network Troubleshooting",
        ],
      },
      {
        title: "Module 3: Windows Architecture & Active Directory Security",
        description:
          "Understanding Windows domains, Active Directory structures, and authentication protocols.",
        topics: [
          "Active Directory Objects, OUs & Trees",
          "Kerberos & NTLM Authentication",
          "Group Policy Objects (GPOs)",
          "Auditing Windows Security Logs",
        ],
      },
      {
        title: "Module 4: Security Operations (SOC) Fundamentals",
        description:
          "Learning the day-to-day operations, tools, and processes of a Security Operations Center.",
        topics: [
          "SOC Roles & Incident Lifecycles",
          "Alert Queues & Triage Methodologies",
          "Threat Intelligence Enrichment",
          "Ticketing & Case Management",
        ],
      },
      {
        title: "Module 5: SIEM Investigation & Telemetry Analysis",
        description: "Hands-on log investigation in Wazuh and Splunk.",
        topics: [
          "Ingesting Host & Network Telemetry",
          "Querying & Searching Event Stores",
          "Correlating Endpoint Events with Sysmon",
          "Identifying Malicious Indicators (IoCs)",
        ],
      },
      {
        title: "Module 6: Incident Response & Containment Strategies",
        description: "Responding to active incidents following structured playbooks.",
        topics: [
          "Incident Handling Steps (Preparation to Lessons Learned)",
          "Host Isolation & Containment Techniques",
          "Malware Artifact Identification",
          "Drafting Post-Incident Reports",
        ],
      },
      {
        title: "Module 7: Ethical Hacking & Defensive Mindset",
        description: "Understanding adversarial tactics to strengthen defensive posture.",
        topics: [
          "Vulnerability Assessment Methodologies",
          "OWASP Top 10 Web Vulnerabilities",
          "Common Network Attack Vectors",
          "Remediation & Patch Verification",
        ],
      },
      {
        title: "Module 8: Essential Security Tools Mastery",
        description: "Working fluently with the staple tools of the cybersecurity trade.",
        topics: [
          "Nmap, Wireshark, Burp Suite Community",
          "Wazuh Agent & Server Management",
          "Sysinternals Suite for Windows Diagnostics",
          "GitHub for Security Project Portfolios",
        ],
      },
      {
        title: "Module 9: Cyber Range Practical Scenarios",
        description:
          "Tackling realistic incident investigation and defense scenarios in simulated networks.",
        topics: [
          "Scenario: Investigating a Compromised Domain User",
          "Scenario: Detecting a Web Application Defacement",
          "Scenario: Isolating Lateral Movement via SMB",
          "Scenario: Ransomware Defense & Recovery",
        ],
      },
      {
        title: "Module 10: Technical Assessments & Capstone Project",
        description: "Completing a comprehensive, multifaceted practical defense capstone project.",
        topics: [
          "Independent Target Analysis",
          "Comprehensive Documentation",
          "Capstone Presentation & Code Walkthrough",
          "Faculty Assessment",
        ],
      },
      {
        title: "Module 11: Professional Portfolio Development",
        description:
          "Documenting hands-on projects, lab write-ups, and building a public GitHub portfolio.",
        topics: [
          "Structuring Technical Lab Reports",
          "Building a Security Project GitHub Repository",
          "LinkedIn Profile Optimization for Security Roles",
          "Showcasing Practical Readiness",
        ],
      },
      {
        title: "Module 12: Technical Interview Preparation & Mentorship",
        description:
          "Practicing technical interview scenarios, behavioral questions, and case studies.",
        topics: [
          "Common Technical Interview Questions Demystified",
          "Whiteboard & Scenario-based Problem Solving",
          "Mock Interview Sessions with Mentors",
          "Continuing Education & Career Planning",
        ],
      },
    ],
    labHighlights: [
      "Investigating simulated enterprise incidents across Windows Active Directory and Linux servers",
      "Building and deploying an end-to-end monitoring lab with Wazuh and Sysmon",
      "Completing 5 hands-on Cyber Range attack-and-defend scenario modules",
      "Publishing a verified GitHub technical portfolio with detailed incident investigation reports",
    ],
    technologies: [
      "Wazuh",
      "Splunk",
      "Sysmon",
      "Wireshark",
      "Active Directory",
      "Kali Linux",
      "Burp Suite",
      "Nmap",
    ],
    format:
      "Cohort-based instructor-led program with personal lab environments and 1-on-1 mentorship",
    certificationNote:
      "Includes CyberBodha Certified Career Accelerator Diploma and verified skill transcript.",
    faqs: [
      {
        question: "Does CyberBodha guarantee job placement?",
        answer:
          "We do not promise guaranteed jobs or fabricated placement statistics. We provide rigorous, practical training, verified lab scenarios, portfolio building, and interview preparation to position you strongly for real industry opportunities.",
      },
      {
        question: "How much time is required per week?",
        answer:
          "Learners typically spend 8 to 12 hours per week, balancing live mentor sessions, guided readings, and hands-on cyber range lab assignments.",
      },
    ],
    featured: true,
    published: true,
    badge: "Career Track",
    relatedCourseSlugs: [
      "soc-analyst-professional",
      "ceh-v13-ai-ethical-hacking",
      "linux-networking-cybersecurity",
    ],
  },
];

export function getCourseBySlug(slug: string): Course | undefined {
  return COURSES.find((course) => course.slug === slug);
}

export function getCoursesByCategory(category: CourseCategory): Course[] {
  return COURSES.filter((course) => course.category === category);
}

export function getFeaturedCourses(): Course[] {
  return COURSES.filter((course) => course.featured);
}
