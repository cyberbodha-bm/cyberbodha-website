/**
 * CyberBodha Canonical CEH v13 AI Curriculum Contract
 *
 * Official EC-Council Certified Ethical Hacker (CEH v13 AI) Alignment:
 * Exactly 20 Official Modules with structured learning objectives, lessons,
 * concept explanations, Cyber Range guided labs, practice challenges,
 * AI learning assistant integrations, knowledge checks, and content classifications.
 */

export type ContentClassification =
  | "Official Curriculum Mapping"
  | "CyberBodha Explanation"
  | "CyberBodha Supplementary Lab"
  | "AI-Assisted Explanation"
  | "Practice Assessment"
  | "Certification Preparation";

export interface CehModuleLab {
  id: string;
  title: string;
  environment: string;
  scenario: string;
  tools: string[];
  classification: ContentClassification;
  isAiEnhanced?: boolean;
}

export interface CehKnowledgeCheck {
  id: string;
  question: string;
  options: string[];
  answerIndex: number;
  explanation: string;
  classification: ContentClassification;
}

export interface CehModuleLesson {
  id: string;
  title: string;
  description: string;
  durationMin: number;
  classification: ContentClassification;
  aiWorkflow?: string;
}

export interface CehModule {
  number: number;
  officialNumber: string; // e.g. "Module 01"
  officialTitle: string;
  category:
    | "Foundations & Recon"
    | "Network & System Exploitation"
    | "Offensive Web & Apps"
    | "Specialized Platforms & Cloud"
    | "Defensive Defense & Crypto";
  durationHours: number;
  description: string;
  classification: ContentClassification;
  learningObjectives: string[];
  officialTopics: string[];
  lessons: CehModuleLesson[];
  conceptExplanation: string;
  aiAssistantFeatures: string[];
  guidedLabs: CehModuleLab[];
  practiceChallenges: string[];
  knowledgeChecks: CehKnowledgeCheck[];
  moduleAssessment: string;
  summary: string;
}

export const CEH_V13_METADATA = {
  courseCode: "CB-CEH-V13-AI",
  officialTitle: "CEH v13 AI Integrated Ethical Hacking & Offensive Security",
  credentialMapped: "EC-Council Certified Ethical Hacker (CEH v13)",
  totalOfficialModules: 20,
  recommendedHours: 40,
  labHoursRatio: "65% Hands-on Labs & Virtual Cyber Range / 35% Theory",
  examFormat: "125 Multiple-Choice Questions (4 Hours) + Optional Practical 6-Hour Exam",
  accreditation: "ANSI 17024 Accredited & DoD 8140 / 8570 Aligned Baseline",
};

export const CEH_V13_MODULES: CehModule[] = [
  {
    number: 1,
    officialNumber: "Module 01",
    officialTitle: "Introduction to Ethical Hacking",
    category: "Foundations & Recon",
    durationHours: 2,
    description:
      "Foundational concepts of information security, ethical boundaries, the cyber kill chain, legal frameworks, and how AI is altering the threat landscape.",
    classification: "Official Curriculum Mapping",
    learningObjectives: [
      "Distinguish between black-hat, white-hat, and grey-hat methodologies",
      "Analyze the five distinct phases of ethical hacking and penetration testing frameworks",
      "Understand compliance guidelines, computer crime legislation, and Rules of Engagement (RoE)",
      "Evaluate generative AI threats, prompt security, and dual-use ethical hacking tooling",
    ],
    officialTopics: [
      "Information Security & Threat Landscape",
      "Cyber Kill Chain & MITRE ATT&CK Mapping",
      "Hacking Concepts, Phases & Hacker Classes",
      "Ethical Hacking Scope, Legality & Standards (PTES, OSSTMM, NIST)",
      "Information Assurance & Compliance (ISO 27001, HIPAA, PCI-DSS)",
      "AI in Ethical Hacking: Emerging Opportunities & Security Governance",
    ],
    lessons: [
      {
        id: "l01-1",
        title: "Ethical Hacking Principles & Legal Mandates",
        description:
          "Understanding legal authorizations, NDAs, and liabilities prior to security assessments.",
        durationMin: 35,
        classification: "CyberBodha Explanation",
      },
      {
        id: "l01-2",
        title: "The 5 Phases of an Offensive Engagement",
        description:
          "Reconnaissance, Scanning, Gaining Access, Maintaining Access, and Clearing Tracks.",
        durationMin: 45,
        classification: "Official Curriculum Mapping",
      },
      {
        id: "l01-3",
        title: "AI Integration in Attack and Defense Lifecycles",
        description:
          "How automated threat agents and LLM-assisted security testing change engagement velocity.",
        durationMin: 40,
        classification: "AI-Assisted Explanation",
        aiWorkflow: "Generating structured Rules of Engagement (RoE) templates using AI prompts.",
      },
    ],
    conceptExplanation:
      "Ethical hacking is authorized probing of digital assets to discover vulnerabilities and validate security controls. In CEH v13, ethical hacking integrates AI assistance to model sophisticated adversary behaviors while upholding strict legal compliance.",
    aiAssistantFeatures: [
      "Automated Rules of Engagement (RoE) scope verification",
      "AI-driven regulatory compliance cross-referencing (HIPAA, GDPR, DPDP)",
      "Threat model synthesis based on client architecture descriptions",
    ],
    guidedLabs: [
      {
        id: "lab-01",
        title: "Setting Up the Cyber Range & Kali Linux Testing Machine",
        environment: "Cyber Range Kali Linux Container",
        scenario:
          "Configure an isolated offensive assessment sandbox, verify egress rules, and establish encrypted workspace persistence.",
        tools: ["Kali Linux 2026", "OpenVPN", "ProxyChains"],
        classification: "CyberBodha Supplementary Lab",
        isAiEnhanced: false,
      },
    ],
    practiceChallenges: [
      "Draft a compliant RoE document for a simulated financial services audit",
      "Analyze simulated unauthorized intrusion telemetry and identify violations of test boundaries",
    ],
    knowledgeChecks: [
      {
        id: "qc-01",
        question:
          "Which document legally protects an ethical hacker from criminal prosecution during an authorized engagement?",
        options: [
          "Non-Disclosure Agreement (NDA)",
          "Signed Rules of Engagement (RoE) & Scope Authorization Document",
          "Written Vulnerability Assessment Summary",
          "Service Level Agreement (SLA)",
        ],
        answerIndex: 1,
        explanation:
          "A written and signed Rules of Engagement (RoE) detailing testing boundaries and formal authorization protects the ethical hacker from legal liabilities.",
        classification: "Practice Assessment",
      },
    ],
    moduleAssessment: "Legal compliance check and engagement authorization diagnostic challenge.",
    summary:
      "Establishes legal boundaries, hacker taxonomies, cyber kill chain stages, and initial setup of the Cyber Range virtual testing environment.",
  },
  {
    number: 2,
    officialNumber: "Module 02",
    officialTitle: "Footprinting and Reconnaissance",
    category: "Foundations & Recon",
    durationHours: 2.5,
    description:
      "Systematic information gathering using passive OSINT, search engine dorking, DNS harvesting, and AI-accelerated intelligence gathering.",
    classification: "Official Curriculum Mapping",
    learningObjectives: [
      "Execute passive OSINT workflows without triggering client defensive telemetry",
      "Leverage advanced search engine operators and public code repository scanning",
      "Conduct DNS interrogation, WHOIS enumeration, and email address harvesting",
      "Deploy AI models to correlate fragmented OSINT data into coherent target dossiers",
    ],
    officialTopics: [
      "Footprinting Concepts & Methodologies",
      "Search Engine Dorking (Google, Bing, Shodan, Censys)",
      "Web Services & Social Networking Reconnaissance",
      "Website & Web Server Footprinting",
      "Email & Domain Name System (DNS) Footprinting",
      "Network & Competitive Intelligence Gathering",
      "AI-Assisted OSINT Data Aggregation & Pattern Recognition",
    ],
    lessons: [
      {
        id: "l02-1",
        title: "Passive OSINT Frameworks & Digital Footprinting",
        description: "Querying public registers, certificates, and passive DNS records.",
        durationMin: 45,
        classification: "Official Curriculum Mapping",
      },
      {
        id: "l02-2",
        title: "Active Footprinting & Infrastructure Probing",
        description: "DNS zone transfers, ping sweeps, and perimeter asset discovery.",
        durationMin: 45,
        classification: "CyberBodha Explanation",
      },
      {
        id: "l02-3",
        title: "AI-Powered Reconnaissance Intelligence",
        description:
          "Using AI to parse leaked credential databases and cluster corporate subdomains.",
        durationMin: 35,
        classification: "AI-Assisted Explanation",
        aiWorkflow:
          "Parsing thousands of certificate transparency logs to identify staging and dev infrastructure.",
      },
    ],
    conceptExplanation:
      "Footprinting gathers actionable intelligence about a target's perimeter, employee exposure, and digital infrastructure. Passive reconnaissance leaves zero trace on target loggers, while active reconnaissance directly interacts with target DNS and perimeter routers.",
    aiAssistantFeatures: [
      "Automated extraction of employee email patterns and organizational hierarchies from public data",
      "AI-assisted Shodan dork composition targeting vulnerable infrastructure",
      "Certificate Transparency log analysis for unlisted staging domains",
    ],
    guidedLabs: [
      {
        id: "lab-02",
        title: "Comprehensive OSINT Investigation on Corporate Target",
        environment: "Cyber Range Terminal & Recon Suite",
        scenario:
          "Harvest subdomains, identify MX records, query historical DNS changes, and locate exposed git repositories.",
        tools: ["theHarvester", "Amass", "whois", "dig", "Shodan CLI"],
        classification: "CyberBodha Supplementary Lab",
        isAiEnhanced: true,
      },
    ],
    practiceChallenges: [
      "Identify 5 shadow-IT domains for a mock enterprise without sending a single packet to target IP space",
      "Map corporate executive footprint across public social and code-sharing registries",
    ],
    knowledgeChecks: [
      {
        id: "qc-02",
        question:
          "Which of the following DNS records should an ethical hacker query to uncover potential mail server exposure?",
        options: ["PTR Record", "MX Record", "TXT SPF Record only", "SOA Record only"],
        answerIndex: 1,
        explanation:
          "MX (Mail Exchange) records designate the mail servers responsible for accepting email on behalf of a domain.",
        classification: "Practice Assessment",
      },
    ],
    moduleAssessment: "Target asset inventory reconstruction through hands-on OSINT validation.",
    summary:
      "Covers passive intelligence, search operators, DNS interrogation, Shodan queries, and AI-accelerated target profile generation.",
  },
  {
    number: 3,
    officialNumber: "Module 03",
    officialTitle: "Scanning Networks",
    category: "Foundations & Recon",
    durationHours: 2.5,
    description:
      "Network probing techniques, host discovery, TCP/UDP port scanning, OS fingerprinting, IDS evasion scans, and automated network mapping.",
    classification: "Official Curriculum Mapping",
    learningObjectives: [
      "Master TCP three-way handshake manipulation (SYN, ACK, FIN, Xmas, Null scans)",
      "Perform high-speed host discovery and ARP ping sweeps across internal subnets",
      "Identify active services, service version banners, and underlying operating systems",
      "Utilize AI-driven traffic pattern randomization to minimize scanner detection",
    ],
    officialTopics: [
      "Network Scanning Overview & Methodology",
      "Host Discovery & Ping Sweep Techniques (ICMP, ARP, TCP SYN)",
      "Port Scanning Mechanics (TCP Connect, SYN Stealth, UDP, Idle Zombie Scan)",
      "Service & OS Fingerprinting with Nmap Scripting Engine (NSE)",
      "IDS/Firewall Scanning Evasion (Fragmentation, Decoys, Source Port Manipulation)",
      "AI-Assisted Scan Scheduling & Heuristic Fingerprint Matching",
    ],
    lessons: [
      {
        id: "l03-1",
        title: "TCP/IP Header Manipulation & Scanning Types",
        description:
          "Deep dive into TCP flags and how firewalls respond to unexpected flag combinations.",
        durationMin: 50,
        classification: "Official Curriculum Mapping",
      },
      {
        id: "l03-2",
        title: "Nmap Mastery & Advanced NSE Scripting",
        description:
          "Constructing custom Nmap commands for stealth, speed, and deep protocol dissection.",
        durationMin: 50,
        classification: "CyberBodha Explanation",
      },
      {
        id: "l03-3",
        title: "AI-Augmented Anomaly & Scanning Detection",
        description:
          "How modern network behavioral monitors detect port scans and how testers simulate evasion.",
        durationMin: 30,
        classification: "AI-Assisted Explanation",
        aiWorkflow:
          "Synthesizing custom Nmap NSE scripts using AI to probe uncommon proprietary ports.",
      },
    ],
    conceptExplanation:
      "Scanning is the transition from intelligence gathering to active network probing. It reveals live hosts, open ports, service versions, and system fingerprints while evaluating how defensive filters handle anomalous packet traffic.",
    aiAssistantFeatures: [
      "AI generation of complex Nmap timing, decoy, and rate-limiting flags",
      "Automated conversion of raw Nmap XML output into prioritized attack surface matrices",
      "AI prediction of underlying OS versions based on subtle TCP stack anomalies",
    ],
    guidedLabs: [
      {
        id: "lab-03",
        title: "Enterprise Perimeter & Subnet Discovery Scanning",
        environment: "Multi-Subnet Cyber Range Topology",
        scenario:
          "Execute stealth SYN scans, identify hidden services behind NAT firewalls, and evade simple snort detection rules.",
        tools: ["Nmap", "Masscan", "Hping3", "Wireshark"],
        classification: "CyberBodha Supplementary Lab",
        isAiEnhanced: true,
      },
    ],
    practiceChallenges: [
      "Conduct a zombie idle scan using a silent host to discover filtered ports without revealing your IP",
      "Fingerprint an obfuscated Linux kernel running custom TCP stack parameters",
    ],
    knowledgeChecks: [
      {
        id: "qc-03",
        question:
          "In an Nmap SYN Stealth Scan (-sS), what packet is sent back by the scanner after receiving a SYN/ACK from an open port?",
        options: ["ACK packet", "RST packet", "FIN packet", "No response is transmitted"],
        answerIndex: 1,
        explanation:
          "In a SYN scan, the scanner transmits an RST (Reset) packet immediately upon receiving SYN/ACK to tear down the connection before it fully opens.",
        classification: "Practice Assessment",
      },
    ],
    moduleAssessment: "Full subnet port and service enumeration capstone exercise.",
    summary:
      "Teaches packet crafting, flag combinations, stealth port scanning, banner grabbing, and Nmap scripting engine deployment.",
  },
  {
    number: 4,
    officialNumber: "Module 04",
    officialTitle: "Enumeration",
    category: "Foundations & Recon",
    durationHours: 2,
    description:
      "Extracting detailed machine data: NetBIOS, SMB shares, SNMP MIB trees, LDAP directories, NFS exports, and SMTP user validation.",
    classification: "Official Curriculum Mapping",
    learningObjectives: [
      "Extract valid user accounts, groups, and shares from SMB and NetBIOS services",
      "Enumerate SNMP community strings, MIB tables, and network device configurations",
      "Interrogate LDAP and Active Directory hierarchies for organizational objects",
      "Leverage AI tools to parse, structure, and prioritize enumerated credential data",
    ],
    officialTopics: [
      "Enumeration Concepts & Protocols (NetBIOS, SMB, SNMP, LDAP, NTP, SMTP, DNS)",
      "NetBIOS & SMB Enumeration (Null Sessions, IPC$, enum4linux)",
      "SNMP Enumeration & MIB Interrogation (snmpwalk, snmpset, snmp-check)",
      "LDAP, Active Directory & Kerberos User Enumeration",
      "NFS, SMTP (VRFY/EXPN) & IPsec Enumeration",
      "AI-Assisted Credential Formatting & Active Directory Relationship Graphing",
    ],
    lessons: [
      {
        id: "l04-1",
        title: "SMB & Active Directory Enumeration",
        description: "Null sessions, IPC$, RPCclient, and SMB share permissions.",
        durationMin: 40,
        classification: "Official Curriculum Mapping",
      },
      {
        id: "l04-2",
        title: "SNMP & Network Infrastructure Enumeration",
        description: "Community strings, public/private MIBs, routing tables, and interface lists.",
        durationMin: 40,
        classification: "CyberBodha Explanation",
      },
      {
        id: "l04-3",
        title: "AI Analysis of Active Directory Telemetry",
        description:
          "Using AI to analyze BloodHound graphs and find shortest paths to Domain Admin.",
        durationMin: 35,
        classification: "AI-Assisted Explanation",
        aiWorkflow:
          "Automating BloodHound JSON export analysis with AI to identify lateral movement paths.",
      },
    ],
    conceptExplanation:
      "Enumeration establishes active connections with target systems to harvest user accounts, network shares, routing tables, and service configurations. It provides the detailed blueprint needed to plan privilege escalation and exploitation.",
    aiAssistantFeatures: [
      "AI correlation of enumerated usernames with leaked corporate password patterns",
      "Automated extraction of system usernames from raw RPC and SMB dumps",
      "Natural language querying of SNMP Management Information Bases (MIBs)",
    ],
    guidedLabs: [
      {
        id: "lab-04",
        title: "Active Directory & Linux NFS/SMB Enumeration",
        environment: "Simulated Windows Server & Linux Enterprise Forest",
        scenario:
          "Enumerate Domain users, map accessible administrative shares, and query SNMP v2c community strings on target routers.",
        tools: ["enum4linux-ng", "rpcclient", "snmpwalk", "ldapsearch", "CrackMapExec"],
        classification: "CyberBodha Supplementary Lab",
        isAiEnhanced: true,
      },
    ],
    practiceChallenges: [
      "Extract 10 valid corporate usernames through an open SMTP relay using VRFY and RCPT TO probes",
      "Identify unauthenticated SMB shares containing sensitive backup scripts in a simulated domain",
    ],
    knowledgeChecks: [
      {
        id: "qc-04",
        question:
          "Which default SNMP port is probed by attackers to interrogate public community strings via UDP?",
        options: ["Port 161", "Port 162", "Port 389", "Port 445"],
        answerIndex: 0,
        explanation:
          "SNMP queries are sent to UDP port 161; SNMP traps are received on UDP port 162.",
        classification: "Practice Assessment",
      },
    ],
    moduleAssessment: "Simulated Domain enumeration and share harvesting scenario.",
    summary:
      "Covers deep interrogation of NetBIOS, SMB, RPC, SNMP, LDAP, and Active Directory objects to establish target attack vectors.",
  },
  {
    number: 5,
    officialNumber: "Module 05",
    officialTitle: "Vulnerability Analysis",
    category: "Foundations & Recon",
    durationHours: 2,
    description:
      "Vulnerability identification, scoring (CVSS v3/v4), weaponization triage, false-positive elimination, and automated scanner orchestration.",
    classification: "Official Curriculum Mapping",
    learningObjectives: [
      "Classify vulnerabilities using CVE, CWE, and national vulnerability databases (NVD)",
      "Calculate and interpret CVSS base, temporal, and environmental vector scores",
      "Perform authenticated and unauthenticated scans with Nessus and OpenVAS",
      "Utilize AI to evaluate proof-of-concept reliability and exploit risk factors",
    ],
    officialTopics: [
      "Vulnerability Assessment Concepts, Lifecycle & Methodologies",
      "Vulnerability Classification & Databases (CVE, CWE, NVD, Exploit-DB)",
      "Vulnerability Scoring Systems (CVSS v3.1, CVSS v4.0)",
      "Vulnerability Assessment Tools (OpenVAS, Nessus, Nexpose, Qualys)",
      "Vulnerability Triage, False-Positive Filtering & Risk Prioritization",
      "AI-Assisted Exploit Feasibility & Patch Prioritization Analysis",
    ],
    lessons: [
      {
        id: "l05-1",
        title: "CVSS Architecture & Severity Calculation",
        description:
          "Breaking down Attack Vector (AV), Complexity (AC), Privileges Required (PR), and Impact metrics.",
        durationMin: 40,
        classification: "Official Curriculum Mapping",
      },
      {
        id: "l05-2",
        title: "Enterprise Vulnerability Scanning & Management",
        description:
          "Configuring credentialed audits, agent-based scans, and policy compliance verification.",
        durationMin: 45,
        classification: "CyberBodha Explanation",
      },
      {
        id: "l05-3",
        title: "AI-Driven Vulnerability Prioritization",
        description:
          "Using AI to cross-reference discovered CVEs with known actively exploited threats (CISA KEV).",
        durationMin: 35,
        classification: "AI-Assisted Explanation",
        aiWorkflow:
          "Evaluating whether a detected CVE has public weaponized exploit chains using AI intelligence.",
      },
    ],
    conceptExplanation:
      "Vulnerability analysis identifies weaknesses in applications, systems, and network designs. Rather than relying solely on automated scan outputs, professional testers validate findings, calculate true business impact, and prioritize remediations.",
    aiAssistantFeatures: [
      "AI-driven CVSS v4.0 vector scoring and justification drafting",
      "Automated false-positive triage by analyzing service banners against scan signatures",
      "Matching detected software versions against the CISA Known Exploited Vulnerabilities (KEV) catalog",
    ],
    guidedLabs: [
      {
        id: "lab-05",
        title: "Vulnerability Scanning & Triaging on Unhardened Enterprise Assets",
        environment: "Cyber Range Multi-Tier Application Server",
        scenario:
          "Execute credentialed and uncredentialed vulnerability scans, filter noisy false positives, and document critical unpatched CVEs.",
        tools: ["OpenVAS / Greenbone", "Nessus Essentials", "Searchsploit", "Vulners"],
        classification: "CyberBodha Supplementary Lab",
        isAiEnhanced: true,
      },
    ],
    practiceChallenges: [
      "Given 50 scanner outputs, identify the 3 genuinely weaponizable remote code execution vulnerabilities",
      "Calculate the adjusted CVSS score for a critical flaw mitigated by strict network segmentation",
    ],
    knowledgeChecks: [
      {
        id: "qc-05",
        question:
          "In the CVSS v3.1 scoring standard, which metric captures whether an attacker needs existing credentials to exploit a vulnerability?",
        options: [
          "Attack Complexity (AC)",
          "Privileges Required (PR)",
          "User Interaction (UI)",
          "Scope (S)",
        ],
        answerIndex: 1,
        explanation:
          "Privileges Required (PR) measures the level of privileges an attacker must possess before successfully exploiting the vulnerability.",
        classification: "Practice Assessment",
      },
    ],
    moduleAssessment: "Full vulnerability scan triage and executive prioritization exercise.",
    summary:
      "Examines vulnerability scoring, scanning frameworks, false positive identification, and AI-accelerated patch prioritization.",
  },
  {
    number: 6,
    officialNumber: "Module 06",
    officialTitle: "System Hacking",
    category: "Network & System Exploitation",
    durationHours: 3,
    description:
      "Exploiting system vulnerabilities, password cracking, Windows/Linux privilege escalation, persistence mechanisms, and hiding data with steganography.",
    classification: "Official Curriculum Mapping",
    learningObjectives: [
      "Execute buffer overflow and memory exploitation fundamentals in a controlled lab",
      "Perform offline password cracking and pass-the-hash attacks against NTLM hashes",
      "Escalate privileges on Windows (Token impersonation, DLL hijacking) and Linux (SUID, sudo)",
      "Establish persistence via backdoors and registry keys, and clear forensic logs",
    ],
    officialTopics: [
      "System Hacking Methodology & Steps (Gaining Access, Escalating Privileges, Maintaining Access, Clearing Tracks)",
      "Password Cracking Techniques (Dictionary, Brute-Force, Rainbow Tables, Pass-the-Hash)",
      "Windows Privilege Escalation (UAC Bypass, Token Impersonation, Unquoted Service Paths)",
      "Linux Privilege Escalation (SUID Binaries, Sudo Misconfigs, Kernel Exploits)",
      "Persistence & Backdoors (Rootkits, Scheduled Tasks, Registry Run Keys)",
      "Covert Channels, Steganography & Log Clearing (wevtutil, bash history evasion)",
      "AI-Assisted Exploit Modification & Payload Obfuscation",
    ],
    lessons: [
      {
        id: "l06-1",
        title: "Password Extraction & Hash Cracking Dynamics",
        description:
          "SAM database dumping, LSASS memory harvesting, and GPU-accelerated hash cracking.",
        durationMin: 55,
        classification: "Official Curriculum Mapping",
      },
      {
        id: "l06-2",
        title: "Windows & Linux Local Privilege Escalation",
        description:
          "Exploiting misconfigured permissions, weak services, and kernel vectors to attain SYSTEM/root.",
        durationMin: 55,
        classification: "CyberBodha Explanation",
      },
      {
        id: "l06-3",
        title: "AI in Automated Payload Tuning",
        description:
          "Using AI to identify syntax modifications that prevent known signatures from matching payloads.",
        durationMin: 40,
        classification: "AI-Assisted Explanation",
        aiWorkflow:
          "Synthesizing custom PowerShell and C# payload wrappers to evade simple static Defender rules.",
      },
    ],
    conceptExplanation:
      "System hacking represents the active exploitation phase: cracking authentication, escalating from low-privilege access to administrative control, embedding reliable persistence, and obfuscating evidence of testing.",
    aiAssistantFeatures: [
      "AI explanation of complex privilege escalation path findings from WinPEAS and LinPEAS",
      "Assisted customization of public exploit scripts for specific architecture targets",
      "Analysis of Windows Event Log formats to verify log cleansing techniques",
    ],
    guidedLabs: [
      {
        id: "lab-06",
        title: "Privilege Escalation and Hash Extraction Lab",
        environment: "Cyber Range Windows 11 & Ubuntu Target Hosts",
        scenario:
          "Exploit an unquoted service path on Windows, dump SAM hashes with Mimikatz, and escalate a SUID binary on Linux to gain root shell.",
        tools: ["Metasploit", "Mimikatz", "Hashcat", "John the Ripper", "WinPEAS", "LinPEAS"],
        classification: "CyberBodha Supplementary Lab",
        isAiEnhanced: true,
      },
    ],
    practiceChallenges: [
      "Extract the NTLM hash of local Administrator from a memory dump and pass the hash to gain shell access",
      "Identify and exploit a cron job running with root privileges on a misconfigured web server",
    ],
    knowledgeChecks: [
      {
        id: "qc-06",
        question:
          "Which Windows tool allows security testers to perform pass-the-hash attacks by extracting credentials from the LSASS process?",
        options: ["Nessus", "Mimikatz", "Wireshark", "OpenVAS"],
        answerIndex: 1,
        explanation:
          "Mimikatz is an open-source tool capable of extracting plaintext passwords, Kerberos tickets, and NTLM hashes directly from LSASS memory.",
        classification: "Practice Assessment",
      },
    ],
    moduleAssessment: "Full system exploitation, privilege escalation, and persistence scenario.",
    summary:
      "Covers password recovery, pass-the-hash, privilege escalation vectors across Windows/Linux, persistence, and audit log management.",
  },
  {
    number: 7,
    officialNumber: "Module 07",
    officialTitle: "Malware Threats",
    category: "Network & System Exploitation",
    durationHours: 2.5,
    description:
      "Malware architectures: trojans, ransomware, viruses, worms, crypters, fileless malware, static/dynamic reverse engineering, and AI-crafted malware.",
    classification: "Official Curriculum Mapping",
    learningObjectives: [
      "Analyze the infection and execution lifecycle of trojans, ransomware, and rootkits",
      "Perform basic static analysis (strings, PE headers, imports, hashes) in a sandbox",
      "Perform dynamic analysis (process monitoring, registry changes, network beacons)",
      "Understand how threat actors utilize AI to generate polymorphic and fileless malware",
    ],
    officialTopics: [
      "Malware Concepts, Types & Infection Vectors",
      "Trojans, RATs, Backdoors & Covert C2 Channels",
      "Ransomware Architecture, Cryptographic Payloads & Extortion Models",
      "Worms, Fileless Malware, Living-off-the-Land Binaries (LOLBins)",
      "Malware Analysis Fundamentals (Static vs. Dynamic Analysis, Sandboxing)",
      "AI-Generated Polymorphic Code & Adversarial Evasion Techniques",
    ],
    lessons: [
      {
        id: "l07-1",
        title: "Malware Taxonomy & Ransomware Dissection",
        description:
          "Anatomy of modern ransomware: asymmetric encryption, key exchange, and shadow copy deletion.",
        durationMin: 50,
        classification: "Official Curriculum Mapping",
      },
      {
        id: "l07-2",
        title: "Static and Dynamic Reverse Engineering Basics",
        description: "Peering into executables with Ghidra, PEview, ProcMon, and Regshot.",
        durationMin: 50,
        classification: "CyberBodha Explanation",
      },
      {
        id: "l07-3",
        title: "AI in Modern Malware Crafting & Defense",
        description:
          "How machine learning models are used both to author polymorphic droppers and to detect novel binaries.",
        durationMin: 35,
        classification: "AI-Assisted Explanation",
        aiWorkflow:
          "Deobfuscating suspicious PowerShell scripts and extracting C2 IP addresses using LLM analysis.",
      },
    ],
    conceptExplanation:
      "Malware represents malicious software designed to compromise host integrity or confidentiality. Ethical hackers must dissect malware behaviors to understand attacker persistence, communication protocols, and defensive detection signatures.",
    aiAssistantFeatures: [
      "AI-assisted disassembly and decompilation explanation for C and Go binaries",
      "Automated extraction of indicators of compromise (IOCs) from behavioral sandbox reports",
      "Deciphering obfuscated PowerShell and JavaScript payloads using AI analysis",
    ],
    guidedLabs: [
      {
        id: "lab-07",
        title: "Isolated Sandbox Malware Behavioral Analysis",
        environment: "Isolated Analysis Sandbox VM",
        scenario:
          "Execute a simulated trojan binary in an isolated sandbox, trace registry modifications, record outbound C2 beaconing, and extract malware IOCs.",
        tools: ["Ghidra", "PE-bear", "Process Hacker", "Regshot", "Wireshark", "Cuckoo Sandbox"],
        classification: "CyberBodha Supplementary Lab",
        isAiEnhanced: true,
      },
    ],
    practiceChallenges: [
      "Extract hardcoded C2 domain strings from an obfuscated malicious Word document macro",
      "Identify the encryption algorithm and persistence registry keys utilized by a simulated ransomware sample",
    ],
    knowledgeChecks: [
      {
        id: "qc-07",
        question:
          "What term describes malware that operates entirely in volatile system memory (RAM) without writing executable files to disk?",
        options: ["Boot Sector Virus", "Fileless Malware", "Macro Trojan", "Stegware"],
        answerIndex: 1,
        explanation:
          "Fileless malware executes in RAM using existing system utilities (like PowerShell or WMI) without dropping traditional binaries onto disk.",
        classification: "Practice Assessment",
      },
    ],
    moduleAssessment: "Malware behavioral analysis and threat intelligence report formulation.",
    summary:
      "Explores malware categories, trojans, ransomware, reverse engineering workflows, sandbox execution, and AI malware detection.",
  },
  {
    number: 8,
    officialNumber: "Module 08",
    officialTitle: "Sniffing",
    category: "Network & System Exploitation",
    durationHours: 2,
    description:
      "Packet capture, network protocol analysis, ARP poisoning, DHCP starvation, MAC flooding, DNS spoofing, and sniffing countermeasures.",
    classification: "Official Curriculum Mapping",
    learningObjectives: [
      "Differentiate between passive sniffing and active sniffing on switched networks",
      "Execute ARP spoofing, MAC flooding, and DHCP starvation attacks in a virtual LAN",
      "Decode unencrypted credentials (HTTP, FTP, Telnet) within captured packet dumps",
      "Deploy detection strategies and defensive configurations (Dynamic ARP Inspection, 802.1X)",
    ],
    officialTopics: [
      "Sniffing Concepts & Packet Analysis Foundations",
      "Active vs. Passive Sniffing Mechanics",
      "MAC Attacks (CAM Table Flooding, Switch Port Stealing)",
      "DHCP Attacks (DHCP Starvation, Rogue DHCP Servers)",
      "ARP Poisoning & Man-in-the-Middle (MitM) Attacks",
      "DNS Poisoning & Spoofing Techniques",
      "AI-Assisted Deep Packet Inspection & Protocol Anomaly Detection",
    ],
    lessons: [
      {
        id: "l08-1",
        title: "Switched Network Attack Vectors",
        description:
          "Breaking switch isolation through CAM table exhaustion and ARP cache poisoning.",
        durationMin: 40,
        classification: "Official Curriculum Mapping",
      },
      {
        id: "l08-2",
        title: "Wireshark Packet Analysis & Protocol Decoding",
        description:
          "Applying Wireshark display filters to extract credentials, sessions, and transferred binaries.",
        durationMin: 45,
        classification: "CyberBodha Explanation",
      },
      {
        id: "l08-3",
        title: "AI-Powered Threat Detection in Network Traffic",
        description:
          "Leveraging machine learning algorithms to identify beaconing, data exfiltration, and anomalous packet sequences.",
        durationMin: 35,
        classification: "AI-Assisted Explanation",
        aiWorkflow:
          "Writing targeted Wireshark display filters and Zeek scripts using natural language prompts.",
      },
    ],
    conceptExplanation:
      "Sniffing involves capturing network traffic across a wired or wireless transmission medium. While passive sniffing observes hub traffic, active sniffing on modern switches requires packet manipulation such as ARP poisoning or MAC flooding.",
    aiAssistantFeatures: [
      "AI generation of complex Wireshark display and capture filters",
      "Automated extraction of credentials and session tokens from PCAP capture files",
      "Anomaly detection assistance for network flow metrics",
    ],
    guidedLabs: [
      {
        id: "lab-08",
        title: "ARP Spoofing and Cleartext Credential Interception",
        environment: "Cyber Range Switched Virtual LAN",
        scenario:
          "Execute an ARP poisoning attack between a client and gateway, intercept unencrypted authentication sessions, and evaluate switch port security defenses.",
        tools: ["Wireshark", "Ettercap", "Bettercap", "Tcpdump", "Macof"],
        classification: "CyberBodha Supplementary Lab",
        isAiEnhanced: false,
      },
    ],
    practiceChallenges: [
      "Filter a 500MB network capture to locate exfiltrated database backup files within 5 minutes",
      "Configure switch security defenses (Port Security and DAI) to neutralize ARP spoofing",
    ],
    knowledgeChecks: [
      {
        id: "qc-08",
        question:
          "Which switch security feature validates ARP packets within an enterprise network to prevent ARP cache poisoning?",
        options: [
          "BPDU Guard",
          "Dynamic ARP Inspection (DAI)",
          "Spanning Tree Protocol (STP)",
          "Storm Control",
        ],
        answerIndex: 1,
        explanation:
          "Dynamic ARP Inspection (DAI) intercepts and validates all ARP requests and responses, dropping invalid packets based on DHCP snooping bindings.",
        classification: "Practice Assessment",
      },
    ],
    moduleAssessment: "Man-in-the-Middle credential interception and network telemetry analysis.",
    summary:
      "Teaches packet sniffing, switch exploitation, ARP cache manipulation, Wireshark filtering, and enterprise mitigation techniques.",
  },
  {
    number: 9,
    officialNumber: "Module 09",
    officialTitle: "Social Engineering",
    category: "Network & System Exploitation",
    durationHours: 2,
    description:
      "Human vulnerability factors, spear phishing, vishing, smishing, credential harvesting, physical security bypass, and AI-enabled deepfakes.",
    classification: "Official Curriculum Mapping",
    learningObjectives: [
      "Understand psychological triggers (authority, urgency, scarcity) exploited by attackers",
      "Configure and deploy simulated spear-phishing campaigns with credential harvesting",
      "Evaluate physical security controls, tailgating, RFID badge cloning, and dumpster diving",
      "Analyze the threat of Generative AI deepfake voice cloning, synthetic media, and hyper-personalized phishing",
    ],
    officialTopics: [
      "Social Engineering Concepts & Psychological Principles",
      "Human-Based Social Engineering (Impersonation, Tailgating, Shoulder Surfing, Elicitation)",
      "Computer-Based Social Engineering (Phishing, Spear Phishing, Whaling, Pharming)",
      "Mobile-Based Social Engineering (Smishing, Vishing, Malicious QR Codes/Quishing)",
      "Physical Security Assessments & Identity Token Cloning",
      "AI-Enabled Deepfakes, Voice Synthesis & Hyper-Personalized Social Engineering",
    ],
    lessons: [
      {
        id: "l09-1",
        title: "Psychological Triggers & Phishing Infrastructures",
        description:
          "Deploying GoPhish, configuring sender domains (SPF/DKIM/DMARC), and tracking click-through rates.",
        durationMin: 40,
        classification: "Official Curriculum Mapping",
      },
      {
        id: "l09-2",
        title: "Physical Penetration Testing & Token Bypass",
        description: "Bypassing perimeter gates, RFID badge cloning, and hardware keyloggers.",
        durationMin: 40,
        classification: "CyberBodha Explanation",
      },
      {
        id: "l09-3",
        title: "AI Voice Cloning & Deepfake Threats",
        description:
          "How synthetic audio and generative text engines circumvent traditional corporate verification protocols.",
        durationMin: 40,
        classification: "AI-Assisted Explanation",
        aiWorkflow:
          "Analyzing simulated deepfake voice audio artifacts to differentiate synthetic audio from authentic communications.",
      },
    ],
    conceptExplanation:
      "Social engineering targets the human element rather than technical software bugs. With the advent of Generative AI, social engineering has evolved from generic spam to hyper-personalized phishing emails and real-time deepfake voice impersonation.",
    aiAssistantFeatures: [
      "AI analysis of phishing lures to evaluate detection likelihood by enterprise email gateways",
      "Simulation of multilingual corporate communication templates for awareness training",
      "Detection guidelines for synthetic and AI-generated audio/video samples",
    ],
    guidedLabs: [
      {
        id: "lab-09",
        title: "Simulated Corporate Phishing & Credential Harvester",
        environment: "Isolated Phishing Simulation Sandbox",
        scenario:
          "Configure an ethical phishing simulation with GoPhish, analyze user interaction telemetry, and verify DMARC alignment defenses.",
        tools: ["GoPhish", "Social-Engineer Toolkit (SET)", "Evilginx", "DMARC Analyzer"],
        classification: "CyberBodha Supplementary Lab",
        isAiEnhanced: true,
      },
    ],
    practiceChallenges: [
      "Analyze email headers to determine if SPF, DKIM, and DMARC checks passed or failed on a suspicious message",
      "Design an enterprise employee verification procedure resistant to AI voice cloning attacks",
    ],
    knowledgeChecks: [
      {
        id: "qc-09",
        question:
          "What term describes a phishing attack specifically targeting high-profile corporate executives such as the CEO or CFO?",
        options: ["Vishing", "Whaling", "Smishing", "Pharming"],
        answerIndex: 1,
        explanation:
          "Whaling is a specialized type of spear-phishing attack directed at senior corporate leadership or high-profile executives.",
        classification: "Practice Assessment",
      },
    ],
    moduleAssessment: "Social engineering campaign design and technical anti-spoofing audit.",
    summary:
      "Covers psychological tactics, phishing infrastructure deployment, physical security assessments, and AI deepfake defense measures.",
  },
  {
    number: 10,
    officialNumber: "Module 10",
    officialTitle: "Denial-of-Service",
    category: "Network & System Exploitation",
    durationHours: 2,
    description:
      "DoS and DDoS attack mechanisms, volumetric floods, protocol attacks, application layer exhaustion, botnets, and cloud DDoS scrubbing mitigations.",
    classification: "Official Curriculum Mapping",
    learningObjectives: [
      "Analyze the differences between volumetric, protocol, and application-layer DoS attacks",
      "Understand amplification mechanisms using DNS, NTP, and SNMP reflection vectors",
      "Examine botnet command-and-control (C2) architectures and IoT botnet propagation",
      "Implement mitigation controls including rate limiting, BGP Anycast routing, and cloud scrubbing",
    ],
    officialTopics: [
      "DoS/DDoS Concepts & Categorization",
      "Volumetric Floods (UDP Floods, ICMP Floods, Amplification Attacks)",
      "Protocol Attacks (SYN Floods, Ping of Death, Smurf, Fraggle)",
      "Application-Layer Attacks (HTTP GET/POST Floods, Slowloris, Slow Read)",
      "Botnets Architecture (Mirai, C2 Topologies, P2P Botnets)",
      "DDoS Detection Strategies, Scrubbing Centers & Cloudflare/Akamai Mitigations",
    ],
    lessons: [
      {
        id: "l10-1",
        title: "Volumetric and Amplification Attacks",
        description: "How open UDP resolvers amplify attack bandwidth by factors exceeding 50x.",
        durationMin: 40,
        classification: "Official Curriculum Mapping",
      },
      {
        id: "l10-2",
        title: "Application-Layer Exhaustion & Slowloris",
        description:
          "Starving web server connection pools using minimal client bandwidth and persistent partial headers.",
        durationMin: 40,
        classification: "CyberBodha Explanation",
      },
      {
        id: "l10-3",
        title: "AI in Autonomous DDoS Mitigation",
        description:
          "How machine learning filters out malicious bot traffic in real-time without impacting legitimate users.",
        durationMin: 35,
        classification: "AI-Assisted Explanation",
        aiWorkflow:
          "Analyzing synthetic network flow traffic to construct adaptive iptables and Cloudflare WAF rate-limiting rules.",
      },
    ],
    conceptExplanation:
      "Denial-of-Service aims to render services unavailable to intended users by exhausting computing resources, network bandwidth, or application threads. In modern enterprise environments, mitigation relies on intelligent edge scrubbing and rate-limiting.",
    aiAssistantFeatures: [
      "AI pattern recognition for distributed HTTP flood signatures",
      "Synthesis of WAF rate-limiting rules based on attack telemetry",
      "Calculation of reflection amplification factors for external infrastructure audits",
    ],
    guidedLabs: [
      {
        id: "lab-10",
        title: "SYN Flood and Slowloris Stress Testing",
        environment: "Isolated Cyber Range Load Test Range",
        scenario:
          "Simulate a SYN flood and Slowloris attack against a test web service in an isolated environment, then configure SYN cookies and connection limits to protect availability.",
        tools: ["Hping3", "Slowloris", "Wireshark", "iptables", "Nginx Rate Limiting"],
        classification: "CyberBodha Supplementary Lab",
        isAiEnhanced: false,
      },
    ],
    practiceChallenges: [
      "Configure an Nginx reverse proxy to withstand a Slowloris exhaustion attack without dropping normal connections",
      "Identify an active NTP amplification attack within a live packet capture trace",
    ],
    knowledgeChecks: [
      {
        id: "qc-10",
        question:
          "Which kernel defense mechanism protects a Linux server from exhausting its connection table during a SYN flood attack?",
        options: ["SYN Cookies", "Spanning Tree", "Reverse Path Forwarding", "Split Horizon"],
        answerIndex: 0,
        explanation:
          "SYN Cookies allow a server to avoid allocating memory resources for incomplete TCP handshakes until the final ACK packet is returned.",
        classification: "Practice Assessment",
      },
    ],
    moduleAssessment: "Stress testing simulation and defensive configuration validation.",
    summary:
      "Covers flood mechanisms, amplification vectors, application starvation, botnet structures, and enterprise scrubbing solutions.",
  },
  {
    number: 11,
    officialNumber: "Module 11",
    officialTitle: "Session Hijacking",
    category: "Offensive Web & Apps",
    durationHours: 2,
    description:
      "Network and application layer session hijacking, token prediction, session fixation, blind hijacking, and secure session management.",
    classification: "Official Curriculum Mapping",
    learningObjectives: [
      "Understand the lifecycle and security mechanisms of HTTP cookies and JWT tokens",
      "Execute network-level session hijacking (TCP sequence prediction, RST hijacking)",
      "Execute application-level hijacking (XSS cookie theft, session fixation, session side-jacking)",
      "Implement defensive session token configurations (HttpOnly, Secure, SameSite, short TTLs)",
    ],
    officialTopics: [
      "Session Hijacking Concepts & Threats",
      "Application-Level Session Hijacking (Cookie Sniffing, XSS, Session Fixation, CSRF)",
      "Network-Level Session Hijacking (TCP Sequence Number Prediction, Man-in-the-Middle)",
      "Token-Based Authentication Hijacking (JWT Tampering, Weak Secret Cracking)",
      "Session Hijacking Tools & Methodologies (Zed Attack Proxy, Burp Suite)",
      "Session Security Defenses, Encryption (TLS 1.3), & Cookie Flags",
    ],
    lessons: [
      {
        id: "l11-1",
        title: "Network vs. Application Session Hijacking",
        description: "Anatomy of TCP session desynchronization versus browser session token theft.",
        durationMin: 40,
        classification: "Official Curriculum Mapping",
      },
      {
        id: "l11-2",
        title: "JWT Token Security & Tampering",
        description:
          "Exploiting weak HMAC secrets, the 'none' algorithm bug, and key confusion vulnerabilities.",
        durationMin: 45,
        classification: "CyberBodha Explanation",
      },
      {
        id: "l11-3",
        title: "AI in Session Anomaly Detection",
        description:
          "How identity providers use AI to detect hijacked sessions based on impossible travel and device fingerprint anomalies.",
        durationMin: 35,
        classification: "AI-Assisted Explanation",
        aiWorkflow:
          "Using AI to generate Python scripts that test session tokens for statistical entropy and randomness flaws.",
      },
    ],
    conceptExplanation:
      "Session hijacking enables an attacker to take over an authenticated user's active session without knowing their underlying credentials. It bridges network-level packet manipulation and application-level token exploitation.",
    aiAssistantFeatures: [
      "AI analysis of session token entropy and predictability flaws",
      "Automated decoding and structural review of JSON Web Tokens (JWT)",
      "Drafting secure cookie configuration policies for web application developers",
    ],
    guidedLabs: [
      {
        id: "lab-11",
        title: "Intercepting and Hijacking Web Sessions",
        environment: "Cyber Range Web Application Testbed",
        scenario:
          "Capture an authenticated session cookie across an unencrypted link, tamper with a JWT token signature, and hijack an administrative session.",
        tools: ["Burp Suite", "OWASP ZAP", "jwt_tool", "Wireshark"],
        classification: "CyberBodha Supplementary Lab",
        isAiEnhanced: true,
      },
    ],
    practiceChallenges: [
      "Modify a JWT payload to claim administrator privileges and crack a weak HS256 signing secret",
      "Demonstrate session fixation on a vulnerable mock banking platform",
    ],
    knowledgeChecks: [
      {
        id: "qc-11",
        question:
          "Which cookie flag prevents client-side JavaScript from accessing session cookies, mitigating theft via Cross-Site Scripting (XSS)?",
        options: ["SameSite=Strict", "HttpOnly", "Secure", "Domain"],
        answerIndex: 1,
        explanation:
          "The HttpOnly flag blocks client-side scripts from reading document.cookie, protecting the session cookie against XSS extraction.",
        classification: "Practice Assessment",
      },
    ],
    moduleAssessment: "Token interception and JWT signature tampering capstone exercise.",
    summary:
      "Examines token interception, TCP sequence manipulation, JWT exploitation, session fixation, and secure cookie architecture.",
  },
  {
    number: 12,
    officialNumber: "Module 12",
    officialTitle: "Evading IDS, Firewalls, and Honeypots",
    category: "Offensive Web & Apps",
    durationHours: 2.5,
    description:
      "Intrusion detection mechanisms, firewall architectures, packet fragmentation, decoy scanning, protocol tunneling, and honeypot detection.",
    classification: "Official Curriculum Mapping",
    learningObjectives: [
      "Analyze the difference between signature-based and anomaly-based IDS/IPS engines",
      "Deploy packet fragmentation, source routing, and decoy techniques to bypass perimeter filters",
      "Bypass egress firewall restrictions using DNS tunneling and SSH/HTTP proxy encapsulation",
      "Detect and identify honeypots and honeynets using protocol interrogation and AI heuristics",
    ],
    officialTopics: [
      "IDS, Firewall & Honeypot Architectures",
      "IDS Evasion Techniques (Fragmentation, Obfuscation, Overlapping Frags, Unicode)",
      "Firewall Evasion Techniques (Port Hopping, Tunneling, Proxy Chains, Custom Headers)",
      "Honeypot Concepts, Architectures & Honeypot Detection Techniques",
      "Bypassing Web Application Firewalls (WAFs) & Content Filters",
      "AI in Adversarial Evasion & Autonomous Defense Bypass Modeling",
    ],
    lessons: [
      {
        id: "l12-1",
        title: "Intrusion Detection Mechanics & Signature Evasion",
        description:
          "How Snort and Suricata parse packets and how payload encoding masks malicious signatures.",
        durationMin: 50,
        classification: "Official Curriculum Mapping",
      },
      {
        id: "l12-2",
        title: "Firewall Bypass & Protocol Encapsulation",
        description: "Tunneling non-standard traffic through port 53 (DNS) and port 443 (HTTPS).",
        durationMin: 50,
        classification: "CyberBodha Explanation",
      },
      {
        id: "l12-3",
        title: "AI-Assisted Adversarial Evasion Modeling",
        description:
          "Using AI to analyze WAF regex patterns and craft mutations that pass inspection while executing successfully on backend servers.",
        durationMin: 35,
        classification: "AI-Assisted Explanation",
        aiWorkflow:
          "Mutating SQL and XSS payloads using genetic algorithms and LLM variations to bypass modern ModSecurity rule sets.",
      },
    ],
    conceptExplanation:
      "Defensive perimeter technologies detect and block unauthorized traffic. Ethical hackers must understand how security filters inspect packets, recognize signature limitations, and determine whether simulated attacks reach target assets.",
    aiAssistantFeatures: [
      "AI-driven payload mutation to test WAF regex rule completeness",
      "Heuristic detection of honeypots based on unnatural response times and open service profiles",
      "Synthesizing customized Snort and Suricata signatures to block evasive techniques",
    ],
    guidedLabs: [
      {
        id: "lab-12",
        title: "Bypassing WAF and Honeypot Detection",
        environment: "Cyber Range Firewalled DMZ Topology",
        scenario:
          "Execute fragmented scans against an active Snort IDS, bypass an open-source WAF using payload mutation, and differentiate a real server from a honeypot.",
        tools: [
          "Nmap",
          "Snort",
          "ModSecurity",
          "Kippo / Cowrie Honeypot",
          "Iodine (DNS Tunneling)",
        ],
        classification: "CyberBodha Supplementary Lab",
        isAiEnhanced: true,
      },
    ],
    practiceChallenges: [
      "Tunnel an SSH interactive shell through a restrictive outbound firewall using DNS queries",
      "Craft a payload that triggers zero alerts in an active Suricata IDS while executing a test ping on the target",
    ],
    knowledgeChecks: [
      {
        id: "qc-12",
        question:
          "What evasion technique involves splitting an attack packet into tiny fragments so an inspection engine cannot assemble the signature across fragments?",
        options: ["Source Routing", "Packet Fragmentation", "TTL Manipulation", "Session Splicing"],
        answerIndex: 1,
        explanation:
          "Packet fragmentation splits the TCP or IP payload across multiple small packets, attempting to bypass an IDS that does not properly reassemble fragments before inspection.",
        classification: "Practice Assessment",
      },
    ],
    moduleAssessment: "Firewall bypass, IDS evasion, and honeypot identification scenario.",
    summary:
      "Covers signature evasion, packet fragmentation, DNS tunneling, WAF bypass methodologies, and honeypot detection.",
  },
  {
    number: 13,
    officialNumber: "Module 13",
    officialTitle: "Hacking Web Servers",
    category: "Offensive Web & Apps",
    durationHours: 2,
    description:
      "Web server architectures, misconfigurations, directory traversal, HTTP response splitting, web cache poisoning, and web server patch auditing.",
    classification: "Official Curriculum Mapping",
    learningObjectives: [
      "Identify common web server misconfigurations across Apache, Nginx, and Microsoft IIS",
      "Execute web server enumeration, banner grabbing, and hidden path discovery",
      "Exploit directory traversal, unauthenticated upload handlers, and server-side templates",
      "Apply hardening standards (CIS Benchmarks) to remediate web server attack surfaces",
    ],
    officialTopics: [
      "Web Server Concepts, Architecture & Attack Methodologies",
      "Web Server Misconfigurations & Default Configurations",
      "Directory Traversal & Path Manipulation Attacks",
      "Web Cache Poisoning & HTTP Response Splitting",
      "Web Server Exploitation Tools (Nikto, Dirsearch, Gobuster)",
      "Web Server Hardening, Patch Management & Security Headers",
    ],
    lessons: [
      {
        id: "l13-1",
        title: "Web Server Attack Surface & Directory Traversal",
        description:
          "Exploiting path traversal (../..) and unauthenticated file access on Apache and IIS.",
        durationMin: 45,
        classification: "Official Curriculum Mapping",
      },
      {
        id: "l13-2",
        title: "Automated Web Server Auditing with Nikto & Gobuster",
        description:
          "Discovering hidden endpoints, exposed backups, and unlinked administrative panels.",
        durationMin: 40,
        classification: "CyberBodha Explanation",
      },
      {
        id: "l13-3",
        title: "AI Analysis of Web Server Configuration Hardening",
        description: "Using AI to review Nginx and Apache server blocks against CIS Benchmarks.",
        durationMin: 35,
        classification: "AI-Assisted Explanation",
        aiWorkflow:
          "Auditing complex Nginx configuration files using AI to identify dangerous proxy_pass and regex misconfigurations.",
      },
    ],
    conceptExplanation:
      "Web servers host the public face of modern organizations. Vulnerabilities in server software, default sample scripts, and file access permissions can give attackers direct shell access to backend hosting operating systems.",
    aiAssistantFeatures: [
      "AI auditing of web server configuration files (nginx.conf, httpd.conf) for security missteps",
      "Automated extraction of high-priority findings from Nikto vulnerability scan logs",
      "Synthesis of security header recommendations (CSP, HSTS, X-Frame-Options)",
    ],
    guidedLabs: [
      {
        id: "lab-13",
        title: "Exploiting Web Server Misconfigurations",
        environment: "Cyber Range Apache & Nginx Infrastructure",
        scenario:
          "Enumerate hidden directories, exploit a directory traversal flaw to read /etc/passwd, and secure the server block with strict access controls.",
        tools: ["Nikto", "Gobuster", "Burp Suite", "Curl"],
        classification: "CyberBodha Supplementary Lab",
        isAiEnhanced: false,
      },
    ],
    practiceChallenges: [
      "Discover a hidden .git repository exposed on an Apache server and reconstruct the source code",
      "Harden an Apache configuration to achieve an A+ score on public security header evaluators",
    ],
    knowledgeChecks: [
      {
        id: "qc-13",
        question:
          "Which HTTP response header mitigates clickjacking attacks by dictating whether a browser is allowed to render a page inside an <iframe>?",
        options: [
          "Strict-Transport-Security",
          "X-Frame-Options",
          "X-Content-Type-Options",
          "Content-Encoding",
        ],
        answerIndex: 1,
        explanation:
          "The X-Frame-Options header (and CSP frame-ancestors directive) prevents clickjacking by restricting whether a site can be embedded within frames.",
        classification: "Practice Assessment",
      },
    ],
    moduleAssessment: "Web server enumeration and directory traversal exploitation challenge.",
    summary:
      "Covers server architecture, directory traversal, hidden file discovery, IIS/Apache misconfigurations, and CIS hardening.",
  },
  {
    number: 14,
    officialNumber: "Module 14",
    officialTitle: "Hacking Web Applications",
    category: "Offensive Web & Apps",
    durationHours: 3,
    description:
      "OWASP Top 10 vulnerabilities, Cross-Site Scripting (XSS), Cross-Site Request Forgery (CSRF), IDOR, SSRF, Broken Access Control, and API security testing.",
    classification: "Official Curriculum Mapping",
    learningObjectives: [
      "Master the OWASP Top 10 vulnerability categories and testing methodologies",
      "Exploit Reflected, Stored, and DOM-based Cross-Site Scripting (XSS)",
      "Execute Server-Side Request Forgery (SSRF) and Insecure Direct Object References (IDOR)",
      "Analyze RESTful and GraphQL API vulnerabilities, authentication flaws, and mass assignment",
    ],
    officialTopics: [
      "Web App Architecture, OWASP Top 10 & Threat Vectors",
      "Cross-Site Scripting (Reflected, Stored, DOM XSS)",
      "Cross-Site Request Forgery (CSRF) & SameSite Defenses",
      "Server-Side Request Forgery (SSRF) & Cloud Metadata Attacks",
      "Broken Access Control, IDOR & Privilege Escalation",
      "API Security Testing (REST, GraphQL, JWT, Mass Assignment)",
      "AI-Assisted Code Auditing & Vulnerability Discovery",
    ],
    lessons: [
      {
        id: "l14-1",
        title: "XSS Exploitation & Contextual Filter Evasion",
        description: "Crafting payloads across HTML, attribute, and script contexts.",
        durationMin: 55,
        classification: "Official Curriculum Mapping",
      },
      {
        id: "l14-2",
        title: "SSRF and Cloud Metadata Exfiltration",
        description:
          "Leveraging vulnerable URL handlers to query internal cloud metadata endpoints (169.254.169.254).",
        durationMin: 50,
        classification: "CyberBodha Explanation",
      },
      {
        id: "l14-3",
        title: "AI in Web Application Security Auditing",
        description:
          "Deploying LLMs to audit frontend JavaScript and backend API route handlers for business logic flaws.",
        durationMin: 45,
        classification: "AI-Assisted Explanation",
        aiWorkflow:
          "Auditing full-stack React and Express.js source code with AI to locate IDOR and authorization gaps.",
      },
    ],
    conceptExplanation:
      "Web application hacking identifies flaws in application code, business logic, and API endpoints. Rather than network perimeter flaws, web app exploits abuse trusted browser-to-server interactions, input sanitation gaps, and flawed access controls.",
    aiAssistantFeatures: [
      "AI-assisted vulnerability triage for complex Single Page Application (SPA) source code",
      "Context-aware XSS payload generation for non-standard browser DOM environments",
      "Automated mapping of API endpoints and authorization parameters from OpenAPI/Swagger specs",
    ],
    guidedLabs: [
      {
        id: "lab-14",
        title: "OWASP Top 10 Exploitation Lab",
        environment: "Cyber Range OWASP Juice Shop & Custom Web Target",
        scenario:
          "Execute Stored XSS to hijack session tokens, exploit an IDOR vulnerability to view customer profiles, and trigger an SSRF query against internal services.",
        tools: ["Burp Suite Professional / Community", "OWASP ZAP", "Postman", "ffuf"],
        classification: "CyberBodha Supplementary Lab",
        isAiEnhanced: true,
      },
    ],
    practiceChallenges: [
      "Extract cloud temporary credentials from an internal metadata endpoint via blind SSRF",
      "Bypass a client-side role check to access an administrative dashboard via API parameter tampering",
    ],
    knowledgeChecks: [
      {
        id: "qc-14",
        question:
          "What vulnerability occurs when an application fetches a remote resource without properly validating the user-supplied destination URL?",
        options: [
          "Cross-Site Scripting (XSS)",
          "Server-Side Request Forgery (SSRF)",
          "Insecure Deserialization",
          "Directory Indexing",
        ],
        answerIndex: 1,
        explanation:
          "Server-Side Request Forgery (SSRF) abuses server functionality to make outbound requests to unauthorized internal or external destinations.",
        classification: "Practice Assessment",
      },
    ],
    moduleAssessment: "OWASP Top 10 multi-stage web application penetration test.",
    summary:
      "Covers OWASP Top 10, Reflected/Stored XSS, SSRF to cloud metadata, IDOR, API security auditing, and secure coding remediation.",
  },
  {
    number: 15,
    officialNumber: "Module 15",
    officialTitle: "SQL Injection",
    category: "Offensive Web & Apps",
    durationHours: 2,
    description:
      "In-band, error-based, union-based, blind (boolean/time-based), and out-of-band SQL injection, database fingerprinting, and defense with parameterized queries.",
    classification: "Official Curriculum Mapping",
    learningObjectives: [
      "Understand SQL parsing logic and why string concatenation causes injection vulnerabilities",
      "Execute In-Band (Error & UNION-based) SQL injection to dump schema data and credentials",
      "Perform Blind SQL injection (Boolean-based and Time-based delayed responses)",
      "Remediate SQL injection using parameterized prepared statements and ORM frameworks",
    ],
    officialTopics: [
      "SQL Injection Concepts & Mechanics",
      "In-Band SQLi (UNION-Based, Error-Based Attacks)",
      "Blind SQLi (Boolean-Based, Time-Based Heavy Queries)",
      "Out-of-Band SQLi (DNS/SMB Exfiltration via xp_dirtree)",
      "Database Fingerprinting (MySQL, PostgreSQL, MSSQL, Oracle)",
      "Automated SQLi with SQLMap & Defensive Prepared Statements",
    ],
    lessons: [
      {
        id: "l15-1",
        title: "Union-Based SQL Injection Mechanics",
        description:
          "Determining column count, data type alignment, and extracting information_schema tables.",
        durationMin: 45,
        classification: "Official Curriculum Mapping",
      },
      {
        id: "l15-2",
        title: "Blind SQL Injection & Out-of-Band Exfiltration",
        description:
          "Extracting data bit-by-bit using conditional responses, sleep queries, and DNS requests.",
        durationMin: 45,
        classification: "CyberBodha Explanation",
      },
      {
        id: "l15-3",
        title: "AI Analysis of SQL Injection Vulnerabilities",
        description:
          "Using AI to locate subtle Second-Order SQLi flaws in legacy application codebases.",
        durationMin: 30,
        classification: "AI-Assisted Explanation",
        aiWorkflow: "Writing safe parameterized query refactors using AI code assistant.",
      },
    ],
    conceptExplanation:
      "SQL Injection occurs when untrusted user input is directly concatenated into database query strings. This allows attackers to alter query logic, bypass authentication, extract sensitive tables, and in some environments execute operating system commands.",
    aiAssistantFeatures: [
      "AI deconstruction of complex nested SQL queries to identify injection points",
      "Automated conversion of vulnerable dynamic SQL queries into safe parameterized statements",
      "AI-assisted tuning of SQLMap tamper scripts for custom web application filters",
    ],
    guidedLabs: [
      {
        id: "lab-15",
        title: "Manual and Automated SQL Injection Lab",
        environment: "Cyber Range Multi-Database Target (MySQL & MSSQL)",
        scenario:
          "Manually extract database user credentials using UNION-based injection, automate extraction of sensitive tables using SQLMap, and execute xp_cmdshell on MSSQL.",
        tools: ["SQLMap", "Burp Suite", "DBeaver", "Custom Python Exploit Scripts"],
        classification: "CyberBodha Supplementary Lab",
        isAiEnhanced: true,
      },
    ],
    practiceChallenges: [
      "Extract the database version string through a time-based blind injection with less than 20 requests",
      "Bypass a login authentication screen without knowing the password using boolean SQLi",
    ],
    knowledgeChecks: [
      {
        id: "qc-15",
        question:
          "Which programming practice completely neutralizes SQL injection by ensuring input is always treated as data, never executable code?",
        options: [
          "Input Sanitization Blacklists",
          "Parameterized Prepared Statements",
          "Client-Side Input Length Constraints",
          "Base64 Input Encoding",
        ],
        answerIndex: 1,
        explanation:
          "Parameterized queries (prepared statements) ensure the database engine compiles the query structure first and treats user parameters strictly as literal values.",
        classification: "Practice Assessment",
      },
    ],
    moduleAssessment: "Database enumeration and schema exfiltration capstone challenge.",
    summary:
      "Covers in-band, error-based, UNION-based, blind, and out-of-band SQL injection, SQLMap automation, and parameterized query remediation.",
  },
  {
    number: 16,
    officialNumber: "Module 16",
    officialTitle: "Hacking Wireless Networks",
    category: "Specialized Platforms & Cloud",
    durationHours: 2,
    description:
      "Wireless encryption protocols (WEP, WPA2, WPA3), 4-way handshake capture, Evil Twin rogue APs, PMKID cracking, and enterprise 802.1X security.",
    classification: "Official Curriculum Mapping",
    learningObjectives: [
      "Analyze the cryptographic differences between WEP, WPA2-PSK, and WPA3-SAE",
      "Capture the WPA/WPA2 4-way handshake using deauthentication frames",
      "Execute PMKID extraction and offline dictionary attacks without client deauthentication",
      "Deploy rogue access points (Evil Twin) and implement wireless defensive controls",
    ],
    officialTopics: [
      "Wireless Concepts, Standards (802.11a/b/g/n/ac/ax) & Topologies",
      "Wireless Encryption Flaws (WEP, WPA/WPA2 Personal & Enterprise, WPA3-SAE)",
      "4-Way Handshake Capture & Deauthentication Attacks",
      "PMKID Attacks against Modern Access Points",
      "Rogue Access Points, Evil Twin & Captive Portal Harvesting",
      "Wireless Security Countermeasures, WIPS & Enterprise 802.1X",
    ],
    lessons: [
      {
        id: "l16-1",
        title: "802.11 Frame Analysis & Handshake Capture",
        description: "Deauthentication mechanics, monitor mode, and 4-way handshake interception.",
        durationMin: 45,
        classification: "Official Curriculum Mapping",
      },
      {
        id: "l16-2",
        title: "Evil Twin & Rogue Access Point Deployments",
        description: "Deploying fake enterprise access points with captive portal phishing pages.",
        durationMin: 45,
        classification: "CyberBodha Explanation",
      },
      {
        id: "l16-3",
        title: "AI in Wireless Signal & Traffic Analysis",
        description:
          "Using machine learning models to detect rogue AP signal anomalies and MAC spoofing.",
        durationMin: 30,
        classification: "AI-Assisted Explanation",
        aiWorkflow:
          "Analyzing wireless packet logs using AI to identify unauthorized rogue beacons in real-time.",
      },
    ],
    conceptExplanation:
      "Wireless networks broadcast radio signals across physical boundaries, allowing attackers to probe authentication without physical cabling. Ethical testing examines wireless encryption resilience, client isolation, and rogue access point vulnerability.",
    aiAssistantFeatures: [
      "AI-driven dictionary generation targeting regional corporate Wi-Fi naming conventions",
      "Automated detection of rogue AP signal strength and BSSID anomalies",
      "Verification of enterprise 802.1X certificate validation settings",
    ],
    guidedLabs: [
      {
        id: "lab-16",
        title: "WPA2 Handshake Capture and PMKID Cracking",
        environment: "Cyber Range Simulated 802.11 Environment",
        scenario:
          "Capture a simulated 4-way handshake using Aircrack-ng, extract PMKID from a target access point, and crack the pre-shared key with Hashcat.",
        tools: ["Aircrack-ng Suite", "Airmon-ng", "Airodump-ng", "Hashcat", "Wireshark"],
        classification: "CyberBodha Supplementary Lab",
        isAiEnhanced: false,
      },
    ],
    practiceChallenges: [
      "Extract the PMKID from an EAPOL packet and prepare the hash format for Hashcat mode 16800",
      "Design an enterprise Wireless Intrusion Prevention System (WIPS) alert policy for deauthentication floods",
    ],
    knowledgeChecks: [
      {
        id: "qc-16",
        question:
          "Which attack against WPA2 access points allows an ethical hacker to obtain cryptographic material without disconnecting any active client?",
        options: ["Deauthentication Flood", "PMKID Attack", "Beacon Flooding", "Replay Attack"],
        answerIndex: 1,
        explanation:
          "The PMKID attack extracts the PMKID header directly from the first EAPOL message between the router and client, eliminating the need to wait for or force client re-authentication.",
        classification: "Practice Assessment",
      },
    ],
    moduleAssessment: "Handshake capture, PMKID cracking, and rogue AP identification exercise.",
    summary:
      "Covers 802.11 standards, WPA2/WPA3 analysis, handshake interception, PMKID attacks, Evil Twin simulations, and WIPS mitigations.",
  },
  {
    number: 17,
    officialNumber: "Module 17",
    officialTitle: "Hacking Mobile Platforms",
    category: "Specialized Platforms & Cloud",
    durationHours: 2,
    description:
      "Android and iOS security architectures, APK reverse engineering, mobile app sandboxing, rooting/jailbreaking, MDM bypass, and mobile malware.",
    classification: "Official Curriculum Mapping",
    learningObjectives: [
      "Understand Android (IPC, Intents, Manifest) and iOS (Sandboxing, Secure Enclave) security models",
      "Decompile and reverse engineer Android APK files using JADX and APKTool",
      "Inspect mobile app network traffic using dynamic instrumentation (Frida, Objection)",
      "Analyze mobile malware vectors, side-loading risks, and enterprise Mobile Device Management (MDM)",
    ],
    officialTopics: [
      "Mobile Platform Attack Vectors & OWASP Mobile Top 10",
      "Android Security Architecture & APK Reverse Engineering",
      "iOS Security Architecture & App Sandboxing",
      "Dynamic Instrumentation & SSL Pinning Bypass (Frida, Objection)",
      "Mobile Device Management (MDM) & Enterprise Security Policies",
      "AI in Mobile Malware Analysis & App Store Fraud Detection",
    ],
    lessons: [
      {
        id: "l17-1",
        title: "Android Architecture & APK Decompilation",
        description: "Decompiling Dalvik bytecode (DEX) back into readable Java using JADX.",
        durationMin: 45,
        classification: "Official Curriculum Mapping",
      },
      {
        id: "l17-2",
        title: "Runtime Mobile Instrumentation & SSL Pinning Bypass",
        description:
          "Using Frida scripts to hook into mobile processes and intercept encrypted HTTPS traffic.",
        durationMin: 45,
        classification: "CyberBodha Explanation",
      },
      {
        id: "l17-3",
        title: "AI Analysis of Mobile App Vulnerabilities",
        description:
          "Using AI to inspect AndroidManifest.xml for exported activities and insecure content providers.",
        durationMin: 30,
        classification: "AI-Assisted Explanation",
        aiWorkflow:
          "Scanning decompiled mobile Java code with AI to locate hardcoded API keys and private endpoints.",
      },
    ],
    conceptExplanation:
      "Mobile devices store sensitive personal and enterprise data on mobile operating systems with sandboxed apps. Ethical mobile testing reviews application storage, insecure network communications, and client-side authorization bypasses.",
    aiAssistantFeatures: [
      "AI identification of hardcoded cryptographic keys and endpoints in decompiled mobile apps",
      "Automated extraction of high-risk permissions from AndroidManifest.xml files",
      "Writing customized Frida instrumentation scripts to hook target mobile functions",
    ],
    guidedLabs: [
      {
        id: "lab-17",
        title: "Decompiling Android APK and Bypassing SSL Pinning",
        environment: "Cyber Range Android Emulator & Mobile Test Sandbox",
        scenario:
          "Decompile a vulnerable Android APK, extract hardcoded Firebase API tokens, and hook the application with Frida to inspect encrypted traffic.",
        tools: ["JADX-GUI", "APKTool", "Frida", "Objection", "Burp Suite"],
        classification: "CyberBodha Supplementary Lab",
        isAiEnhanced: true,
      },
    ],
    practiceChallenges: [
      "Locate an insecurely stored user credentials file in a simulated mobile device filesystem",
      "Bypass a local biometric fingerprint check using dynamic runtime method hooking",
    ],
    knowledgeChecks: [
      {
        id: "qc-17",
        question:
          "Which dynamic instrumentation toolkit allows penetration testers to hook native functions in real time on mobile applications?",
        options: ["Ghidra", "Frida", "Wireshark", "OpenVAS"],
        answerIndex: 1,
        explanation:
          "Frida is a dynamic code instrumentation toolkit that lets security professionals inject JavaScript snippets into native apps on Android, iOS, Windows, and Linux.",
        classification: "Practice Assessment",
      },
    ],
    moduleAssessment: "APK reverse engineering and dynamic instrumentation assessment.",
    summary:
      "Covers Android/iOS models, APK decompilation, Frida hooking, SSL certificate pinning bypass, and OWASP Mobile Top 10.",
  },
  {
    number: 18,
    officialNumber: "Module 18",
    officialTitle: "IoT and OT Hacking",
    category: "Specialized Platforms & Cloud",
    durationHours: 2,
    description:
      "Internet of Things (IoT) and Operational Technology (OT/SCADA) architectures, firmware extraction, industrial protocols (Modbus, DNP3), and hardware interfaces.",
    classification: "Official Curriculum Mapping",
    learningObjectives: [
      "Analyze the convergence of IT, IoT, and Industrial Operational Technology (OT/ICS)",
      "Inspect and extract IoT firmware images using Binwalk and firmware analysis tools",
      "Understand industrial communication protocols including Modbus, DNP3, and Profinet",
      "Implement defensive segmentation (Purdue Enterprise Reference Architecture) for OT networks",
    ],
    officialTopics: [
      "IoT Architecture, Hardware Platforms & Communication Protocols (MQTT, CoAP, Zigbee)",
      "IoT Vulnerabilities (OWASP IoT Top 10, Hardcoded Credentials, Insecure Firmware)",
      "OT & SCADA Concepts, Components (PLC, RTU, HMI) & Purdue Model",
      "Industrial Protocols (Modbus TCP, DNP3, Ethernet/IP)",
      "Firmware Analysis, Decompilation & Emulation (Binwalk, QEMU)",
      "AI in Industrial Anomaly Detection & Critical Infrastructure Protection",
    ],
    lessons: [
      {
        id: "l18-1",
        title: "IoT Firmware Extraction & Reverse Engineering",
        description:
          "Carving file systems from binary firmware files using Binwalk and inspecting startup scripts.",
        durationMin: 45,
        classification: "Official Curriculum Mapping",
      },
      {
        id: "l18-2",
        title: "OT, SCADA and Modbus Protocol Manipulation",
        description:
          "Interrogating PLC holding registers and understanding unauthenticated industrial control commands.",
        durationMin: 45,
        classification: "CyberBodha Explanation",
      },
      {
        id: "l18-3",
        title: "AI in Industrial Control System Security",
        description:
          "How machine learning models monitor sensor readings and physical process invariants to detect cyber-physical sabotage.",
        durationMin: 30,
        classification: "AI-Assisted Explanation",
        aiWorkflow:
          "Using AI to analyze proprietary IoT firmware binaries for outdated BusyBox and OpenSSL libraries.",
      },
    ],
    conceptExplanation:
      "IoT and OT systems control critical physical infrastructure: energy grids, water filtration, smart facilities, and connected industrial hardware. Attacks often exploit unauthenticated legacy protocols, hardcoded credentials, and unpatchable firmware.",
    aiAssistantFeatures: [
      "AI analysis of extracted firmware configuration scripts for hidden administrative backdoors",
      "Decoding industrial Modbus and DNP3 packet captures into human-readable operations",
      "Synthesizing network segmentation policies aligned with the Purdue Enterprise Model",
    ],
    guidedLabs: [
      {
        id: "lab-18",
        title: "IoT Firmware Carving and Modbus Interrogation",
        environment: "Cyber Range Simulated OT & Firmware Lab",
        scenario:
          "Extract a Linux root filesystem from an IoT router firmware dump with Binwalk, discover hardcoded root credentials, and interrogate a simulated Modbus PLC.",
        tools: [
          "Binwalk",
          "Firmware Analysis Toolkit",
          "Nmap (Modbus scripts)",
          "QEMU",
          "Wireshark",
        ],
        classification: "CyberBodha Supplementary Lab",
        isAiEnhanced: true,
      },
    ],
    practiceChallenges: [
      "Extract a private RSA server key embedded inside a compiled IoT camera firmware image",
      "Simulate reading and writing coils on an unauthenticated Modbus TCP industrial simulator",
    ],
    knowledgeChecks: [
      {
        id: "qc-18",
        question:
          "Which architectural model divides industrial automation and control networks into distinct hierarchical levels to isolate critical physical processes?",
        options: [
          "OSI 7-Layer Model",
          "Purdue Enterprise Reference Architecture",
          "DoD TCP/IP Model",
          "Bell-LaPadula Model",
        ],
        answerIndex: 1,
        explanation:
          "The Purdue Model (ISA-95) segments industrial networks into distinct levels (from Level 0 sensors to Level 4 enterprise IT) to prevent IT compromises from affecting OT processes.",
        classification: "Practice Assessment",
      },
    ],
    moduleAssessment: "IoT firmware extraction and industrial protocol audit scenario.",
    summary:
      "Covers IoT/OT ecosystems, firmware extraction with Binwalk, industrial protocols like Modbus, Purdue segmentation, and critical infrastructure defense.",
  },
  {
    number: 19,
    officialNumber: "Module 19",
    officialTitle: "Cloud Computing",
    category: "Specialized Platforms & Cloud",
    durationHours: 2.5,
    description:
      "Cloud service models (IaaS, PaaS, SaaS), AWS/Azure/GCP identity misconfigurations, S3 bucket enumeration, serverless flaws, and cloud security posture management.",
    classification: "Official Curriculum Mapping",
    learningObjectives: [
      "Understand the Shared Responsibility Model across IaaS, PaaS, and SaaS environments",
      "Identify and exploit IAM privilege escalation, misconfigured policies, and over-permissive roles",
      "Enumerate exposed public storage (AWS S3, Azure Blob Storage) and misconfigured databases",
      "Deploy AI tools to audit Infrastructure-as-Code (Terraform, CloudFormation) for security flaws",
    ],
    officialTopics: [
      "Cloud Computing Concepts, Architectures & Shared Responsibility",
      "Cloud Threat Vectors & OWASP Cloud Top 10",
      "IAM Misconfigurations, Role Chaining & Privilege Escalation",
      "Storage Bucket Misconfigurations (S3, Azure Blobs, GCS)",
      "Serverless & Container Security (Docker, Kubernetes, AWS Lambda)",
      "Cloud Security Posture Management (CSPM), CIEM & Cloud Guardrails",
      "AI in Autonomous Cloud Compliance & Misconfiguration Remediation",
    ],
    lessons: [
      {
        id: "l19-1",
        title: "IAM Role Chaining & Privilege Escalation in AWS/Azure",
        description:
          "Exploiting AssumeRole trust relationships and excessive IAM permissions to achieve admin access.",
        durationMin: 50,
        classification: "Official Curriculum Mapping",
      },
      {
        id: "l19-2",
        title: "Cloud Storage Enumeration & Container Security",
        description:
          "Automated scanning of misconfigured S3 buckets, exposed Docker sockets, and Kubernetes API servers.",
        durationMin: 50,
        classification: "CyberBodha Explanation",
      },
      {
        id: "l19-3",
        title: "AI in Cloud Infrastructure-as-Code Auditing",
        description:
          "Deploying AI to review Terraform and Bicep scripts before deployment to prevent cloud misconfigurations.",
        durationMin: 35,
        classification: "AI-Assisted Explanation",
        aiWorkflow:
          "Auditing multi-cloud Terraform templates with AI to detect exposed ports and unencrypted storage volumes.",
      },
    ],
    conceptExplanation:
      "Cloud computing shifts infrastructure from physical datacenters to dynamic software-defined environments. The vast majority of cloud breaches stem not from hypervisor flaws, but from human misconfiguration of IAM policies, unauthenticated storage, and exposed API keys.",
    aiAssistantFeatures: [
      "AI analysis of complex AWS IAM policy JSON documents for privilege escalation vectors",
      "Automated scanning of Terraform and CloudFormation templates for CIS benchmark compliance",
      "Synthesis of least-privilege role policies to replace over-permissive administrator access",
    ],
    guidedLabs: [
      {
        id: "lab-19",
        title: "AWS/Azure Cloud Privilege Escalation and Bucket Enumeration",
        environment: "Cyber Range Multi-Cloud Sandbox Topology",
        scenario:
          "Enumerate an exposed S3 bucket, obtain compromised IAM access keys, escalate privileges via an over-permissive role policy, and extract database snapshot data.",
        tools: ["AWS CLI", "Pacu (AWS Exploitation Framework)", "ScoutSuite", "TruffleHog"],
        classification: "CyberBodha Supplementary Lab",
        isAiEnhanced: true,
      },
    ],
    practiceChallenges: [
      "Extract compromised AWS secret keys from a publicly exposed Git commit history using automated tools",
      "Audit a multi-region IAM configuration to locate all users with PassRole permissions",
    ],
    knowledgeChecks: [
      {
        id: "qc-19",
        question:
          "Under the Cloud Shared Responsibility Model, which party is primarily responsible for configuring Identity and Access Management (IAM) and securing customer data in an IaaS environment?",
        options: [
          "Cloud Service Provider (CSP)",
          "Customer / Cloud Consumer",
          "Third-Party Cloud Security Broker",
          "Hardware Vendor",
        ],
        answerIndex: 1,
        explanation:
          "In Infrastructure-as-a-Service (IaaS), the cloud consumer is responsible for configuring access permissions, operating system updates, customer data protection, and network firewall rules.",
        classification: "Practice Assessment",
      },
    ],
    moduleAssessment: "Cloud IAM privilege escalation and storage enumeration capstone exercise.",
    summary:
      "Covers cloud architecture, IAM privilege escalation, S3 bucket exposure, container security, Terraform auditing, and CSPM posture management.",
  },
  {
    number: 20,
    officialNumber: "Module 20",
    officialTitle: "Cryptography",
    category: "Defensive Defense & Crypto",
    durationHours: 2.5,
    description:
      "Symmetric and asymmetric encryption, hashing algorithms, Public Key Infrastructure (PKI), TLS 1.3, cryptographic attacks, and post-quantum cryptography.",
    classification: "Official Curriculum Mapping",
    learningObjectives: [
      "Compare symmetric ciphers (AES, ChaCha20) and asymmetric ciphers (RSA, ECC, Diffie-Hellman)",
      "Analyze hashing algorithms (SHA-256, SHA-3) and password hashing mechanisms (bcrypt, Argon2)",
      "Understand Public Key Infrastructure (PKI), Digital Certificates (X.509), and certificate authorities",
      "Execute cryptographic attacks (known-plaintext, chosen-ciphertext, padding oracle) and examine Post-Quantum Cryptography (PQC)",
    ],
    officialTopics: [
      "Cryptography Concepts, Ciphers & Historical Algorithms",
      "Symmetric Encryption Algorithms (DES, 3DES, AES, ChaCha20)",
      "Asymmetric Encryption Algorithms (RSA, ECC, Diffie-Hellman Key Exchange)",
      "Cryptographic Hash Functions (MD5, SHA-1, SHA-2, SHA-3) & Integrity Checks",
      "Public Key Infrastructure (PKI), Certificate Authorities & Digital Signatures",
      "Cryptographic Attacks (Padding Oracle, Replay, Downgrade, Weak Randomness)",
      "Post-Quantum Cryptography (PQC) & AI in Cryptanalysis",
    ],
    lessons: [
      {
        id: "l20-1",
        title: "Modern Symmetric & Asymmetric Encryption",
        description:
          "Mathematical principles of AES-GCM, RSA key pairs, and Elliptic Curve Cryptography.",
        durationMin: 50,
        classification: "Official Curriculum Mapping",
      },
      {
        id: "l20-2",
        title: "Cryptographic Attacks & Padding Oracle Exploitation",
        description: "Breaking CBC mode encryption without the key using padding oracle feedback.",
        durationMin: 50,
        classification: "CyberBodha Explanation",
      },
      {
        id: "l20-3",
        title: "AI in Cryptographic Key Strength & Post-Quantum Readiness",
        description:
          "How machine learning evaluates cipher entropy and the transition to NIST Post-Quantum standards (ML-KEM, ML-DSA).",
        durationMin: 35,
        classification: "AI-Assisted Explanation",
        aiWorkflow:
          "Auditing enterprise cipher suites and SSL/TLS certificates using AI to identify deprecated algorithms like 3DES and RC4.",
      },
    ],
    conceptExplanation:
      "Cryptography secures digital assets through mathematical algorithms providing confidentiality, integrity, non-repudiation, and authentication. Ethical hackers must recognize weak cipher implementations, misconfigured keys, and prepare for quantum-resistant standards.",
    aiAssistantFeatures: [
      "AI analysis of SSL/TLS cipher suites to detect deprecated ciphers and insecure protocol versions",
      "Identification of hardcoded cryptographic initialization vectors (IVs) and weak pseudo-random generators",
      "Evaluation of post-quantum readiness across enterprise cryptographic assets",
    ],
    guidedLabs: [
      {
        id: "lab-20",
        title: "Cryptographic Attacks, Certificate Auditing & Hash Cracking",
        environment: "Cyber Range Cryptographic Testing Lab",
        scenario:
          "Identify weak SSL/TLS cipher suites on an enterprise web server, exploit a padding oracle vulnerability to decrypt ciphertext, and analyze password hash collisions.",
        tools: ["OpenSSL", "testssl.sh", "Hashcat", "CyberChef", "PadBuster"],
        classification: "CyberBodha Supplementary Lab",
        isAiEnhanced: true,
      },
    ],
    practiceChallenges: [
      "Decrypt a secret message encrypted with CBC mode using a simulated padding oracle web service",
      "Verify the digital signature of an executable and detect certificate tampering using OpenSSL",
    ],
    knowledgeChecks: [
      {
        id: "qc-20",
        question:
          "Which cryptographic algorithm is widely recognized as a secure asymmetric algorithm built on the mathematical difficulty of elliptic curve discrete logarithms?",
        options: ["AES-256", "Elliptic Curve Cryptography (ECC)", "RC4", "SHA-384"],
        answerIndex: 1,
        explanation:
          "Elliptic Curve Cryptography (ECC) is an asymmetric encryption method that provides equal or greater cryptographic strength with significantly smaller key sizes than RSA.",
        classification: "Practice Assessment",
      },
    ],
    moduleAssessment: "Cryptographic implementation audit and padding oracle challenge.",
    summary:
      "Covers symmetric/asymmetric algorithms, PKI infrastructure, digital signatures, padding oracle attacks, and post-quantum cryptographic transitions.",
  },
];
