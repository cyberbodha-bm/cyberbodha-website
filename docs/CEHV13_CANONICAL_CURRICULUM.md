# CEH v13 AI — Canonical Curriculum Specification

## 1. Specification Overview
- **Credential**: EC-Council Certified Ethical Hacker (CEH v13 AI)
- **Course Code**: `CB-CEH-V13-AI`
- **Canonical Module Count**: Exactly 20 Official Modules
- **Governing Standard**: ANSI 17024 Accredited & DoD 8140 / 8570 Directive Aligned
- **Target Page**: `https://cyberbodha.com/courses/ceh-v13-ai-ethical-hacking`
- **Format**: 40 Hours Instructor-Led Curriculum + Practical Cyber Range Virtual Labs

---

## 2. Content Classification Hierarchy
To maintain strict academic integrity and distinguish between proprietary courseware, authoritative curriculum outlines, and CyberBodha virtual lab infrastructure, every learning asset is tagged with one of six canonical classifications:

| Classification | Definition & Scope |
| :--- | :--- |
| **Official Curriculum Mapping** | Direct alignment with the 20 official EC-Council CEH v13 syllabus modules and domain objectives. |
| **CyberBodha Explanation** | Technical conceptual deep-dive, architecture breakdowns, and methodology explanations authored by CyberBodha practitioners. |
| **CyberBodha Supplementary Lab** | Dedicated hands-on virtual lab scenarios hosted in the CyberBodha Cyber Range sandbox. |
| **AI-Assisted Explanation** | Workflows demonstrating generative AI tooling (e.g. prompt engineering, automated script auditing, payload variations, and adversarial defense). |
| **Practice Assessment** | Self-assessment knowledge checks, diagnostic quizzes, and flag validation questions. |
| **Certification Preparation** | Exam blueprint alignment, domain weighting, time management strategies, and scenario question analysis. |

---

## 3. Official 20-Module Sequence & Domain Groupings

### Domain Group 1: Foundations & Reconnaissance (Modules 01 – 05)
1. **Module 01: Introduction to Ethical Hacking**
   - *Official Topics*: Information security concepts, cyber kill chain, MITRE ATT&CK, legal frameworks, PTES standards, AI governance.
   - *Learning Objectives*: Understand authorization scope, hacker categories, legal mandates, and ethical boundaries.
   - *Cyber Range Lab*: Isolated Kali Linux testing sandbox setup, encrypted egress, workspace persistence.
   - *AI Integration*: Automated Rules of Engagement (RoE) scope verification and compliance cross-referencing.

2. **Module 02: Footprinting and Reconnaissance**
   - *Official Topics*: Passive OSINT, search engine dorking (Google, Shodan, Censys), DNS harvesting, email tracking, whois interrogation.
   - *Learning Objectives*: Perform non-intrusive intelligence gathering without alerting target security operations.
   - *Cyber Range Lab*: Comprehensive OSINT reconnaissance on mock enterprise infrastructure.
   - *AI Integration*: Automated subdomain clustering, certificate transparency log analysis, and employee dossier synthesis.

3. **Module 03: Scanning Networks**
   - *Official Topics*: Host discovery, ping sweeps, TCP/UDP flag manipulation (SYN, ACK, FIN, Null, Xmas, Idle), Nmap Scripting Engine (NSE).
   - *Learning Objectives*: Map attack surfaces, probe open ports, determine service versions, and identify underlying operating systems.
   - *Cyber Range Lab*: Enterprise perimeter and subnet discovery scanning with Nmap and Masscan.
   - *AI Integration*: AI composition of custom Nmap timing, decoy flags, and rate-limiting rules.

4. **Module 04: Enumeration**
   - *Official Topics*: NetBIOS, SMB shares (Null sessions, IPC$), SNMP community interrogation, LDAP, Active Directory, Kerberos, SMTP VRFY.
   - *Learning Objectives*: Harvest valid usernames, network shares, routing tables, and service configurations via active connections.
   - *Cyber Range Lab*: Active Directory and Linux NFS/SMB enumeration using enum4linux-ng, rpcclient, and snmpwalk.
   - *AI Integration*: Correlation of enumerated accounts with known credential patterns and BloodHound graph analysis.

5. **Module 05: Vulnerability Analysis**
   - *Official Topics*: CVE/CWE taxonomy, CVSS v3.1/v4.0 scoring, automated vulnerability scanners (OpenVAS, Nessus), false-positive triage.
   - *Learning Objectives*: Classify vulnerabilities, calculate risk severity, eliminate scanner noise, and prioritize weaponizable flaws.
   - *Cyber Range Lab*: Credentialed and uncredentialed vulnerability scanning on multi-tier application servers.
   - *AI Integration*: Cross-referencing detected CVEs against the CISA Known Exploited Vulnerabilities (KEV) catalog.

---

### Domain Group 2: Network & System Exploitation (Modules 06 – 10)
6. **Module 06: System Hacking**
   - *Official Topics*: Password cracking (hashes, rainbow tables, pass-the-hash), privilege escalation (Windows UAC/tokens, Linux SUID/sudo), persistence, log evasion.
   - *Learning Objectives*: Attain initial access, escalate to SYSTEM/root, establish backdoors, and clear audit telemetry.
   - *Cyber Range Lab*: Exploiting unquoted service paths on Windows and abusing SUID binaries on Linux for root access.
   - *AI Integration*: AI-guided privilege escalation path analysis from WinPEAS/LinPEAS logs.

7. **Module 07: Malware Threats**
   - *Official Topics*: Trojans, ransomware architecture, worms, fileless malware (LOLBins), static and dynamic analysis, crypters.
   - *Learning Objectives*: Dissect malware infection lifecycles, inspect headers and strings, monitor behavioral processes, and extract IOCs.
   - *Cyber Range Lab*: Executing and analyzing a simulated trojan in an isolated sandbox with Ghidra, ProcMon, and Wireshark.
   - *AI Integration*: Deobfuscating polymorphic PowerShell and JavaScript droppers using LLM analysis.

8. **Module 08: Sniffing**
   - *Official Topics*: Passive vs. active sniffing, CAM table flooding, ARP cache poisoning, DHCP starvation, rogue DHCP, DNS spoofing.
   - *Learning Objectives*: Intercept network packets on switched topologies, decode unencrypted protocols, and configure switch defenses (DAI, Port Security).
   - *Cyber Range Lab*: ARP poisoning and cleartext credential harvesting in a switched virtual LAN.
   - *AI Integration*: Automated PCAP anomaly detection and protocol extraction.

9. **Module 09: Social Engineering**
   - *Official Topics*: Human psychology triggers, spear phishing, whaling, vishing, smishing, physical security bypass, RFID cloning, synthetic media.
   - *Learning Objectives*: Design simulated phishing campaigns, evaluate physical access security, and analyze Generative AI deepfake voice threats.
   - *Cyber Range Lab*: Deploying GoPhish simulations, tracking click-through telemetry, and verifying DMARC/SPF configurations.
   - *AI Integration*: Analyzing simulated deepfake voice audio artifacts and testing corporate verification guardrails.

10. **Module 10: Denial-of-Service**
    - *Official Topics*: Volumetric floods (UDP, ICMP), protocol attacks (SYN flood, Ping of Death), application exhaustion (Slowloris), botnets (Mirai), cloud scrubbing.
    - *Learning Objectives*: Understand DDoS attack categories, analyze amplification reflection vectors, and configure rate-limiting and SYN cookies.
    - *Cyber Range Lab*: Simulating SYN floods and Slowloris exhaustion, then configuring Nginx rate limits and kernel SYN cookies.
    - *AI Integration*: Recognizing distributed HTTP flood patterns and generating adaptive WAF blocking rules.

---

### Domain Group 3: Offensive Web & Applications (Modules 11 – 15)
11. **Module 11: Session Hijacking**
    - *Official Topics*: Network session hijacking (TCP sequence prediction), application hijacking (session fixation, XSS cookie theft), JWT signature tampering, cookie attributes.
    - *Learning Objectives*: Steal or spoof active authenticated sessions, manipulate JSON Web Tokens, and implement HttpOnly/SameSite defenses.
    - *Cyber Range Lab*: Intercepting session cookies and tampering with JWT signatures in Burp Suite and jwt_tool.
    - *AI Integration*: Statistical entropy testing on session tokens to identify predictability flaws.

12. **Module 12: Evading IDS, Firewalls, and Honeypots**
    - *Official Topics*: Signature vs. anomaly detection, packet fragmentation, decoy scans, protocol tunneling (DNS, SSH), WAF evasion, honeypot detection.
    - *Learning Objectives*: Bypass network perimeter filters, tunnel traffic over unrestricted ports, and identify deceptive honeynet architectures.
    - *Cyber Range Lab*: Evading Snort alerts using fragmented traffic and bypassing ModSecurity WAF rules with mutated payloads.
    - *AI Integration*: Genetic algorithm and LLM payload mutations designed to test WAF regex rule coverage.

13. **Module 13: Hacking Web Servers**
    - *Official Topics*: Web server architectures (Apache, Nginx, IIS), misconfigurations, directory traversal, HTTP response splitting, security headers.
    - *Learning Objectives*: Enumerate web server banners, identify exposed administrative endpoints, and audit configurations against CIS benchmarks.
    - *Cyber Range Lab*: Directory traversal exploitation and web server configuration hardening.
    - *AI Integration*: Natural language auditing of complex web server configuration files (nginx.conf).

14. **Module 14: Hacking Web Applications**
    - *Official Topics*: OWASP Top 10, Reflected/Stored/DOM XSS, CSRF, Server-Side Request Forgery (SSRF), IDOR, Broken Access Control, REST/GraphQL API pentesting.
    - *Learning Objectives*: Identify and exploit application logic flaws, extract cloud metadata via SSRF, and test API endpoints.
    - *Cyber Range Lab*: Comprehensive OWASP Juice Shop web application exploitation in Burp Suite.
    - *AI Integration*: Code auditing Single Page Applications (SPAs) and API route handlers for authorization gaps.

15. **Module 15: SQL Injection**
    - *Official Topics*: In-band (UNION-based, error-based), blind (boolean, time-based), out-of-band (DNS exfiltration), SQLMap automation, prepared statements.
    - *Learning Objectives*: Construct manual SQL injection payloads, extract database schemas, automate dumping with SQLMap, and implement parameterized queries.
    - *Cyber Range Lab*: Manual UNION-based extraction and automated SQLMap exploitation on MySQL and MSSQL targets.
    - *AI Integration*: Automated conversion of vulnerable dynamic SQL code into secure parameterized queries.

---

### Domain Group 4: Specialized Platforms & Cloud (Modules 16 – 19)
16. **Module 16: Hacking Wireless Networks**
    - *Official Topics*: 802.11 standards, WEP/WPA2/WPA3 encryption, 4-way handshake capture, PMKID attacks, Evil Twin captive portals, 802.1X enterprise.
    - *Learning Objectives*: Intercept wireless handshakes, extract PMKID without client disruption, crack pre-shared keys, and deploy wireless defense controls.
    - *Cyber Range Lab*: Capturing WPA2 handshakes and cracking PMKID hashes with Aircrack-ng and Hashcat.
    - *AI Integration*: Generating targeted Wi-Fi wordlists and detecting rogue access point beacons.

17. **Module 17: Hacking Mobile Platforms**
    - *Official Topics*: Android/iOS architectures, APK reverse engineering with JADX, dynamic instrumentation with Frida, SSL pinning bypass, OWASP Mobile Top 10.
    - *Learning Objectives*: Decompile mobile binaries, inspect inter-process communication, bypass certificate pinning, and audit mobile app security.
    - *Cyber Range Lab*: Reverse engineering an Android APK and hooking native authentication methods with Frida.
    - *AI Integration*: Automated scanning of decompiled Java code for hardcoded secrets and insecure content providers.

18. **Module 18: IoT and OT Hacking**
    - *Official Topics*: IoT communication protocols (MQTT, CoAP), hardware interfaces, OT/SCADA architectures, Purdue Model, Modbus TCP, firmware extraction with Binwalk.
    - *Learning Objectives*: Carve IoT firmware file systems, extract hardcoded credentials, interrogate industrial Modbus controllers, and enforce network segmentation.
    - *Cyber Range Lab*: Firmware extraction using Binwalk and simulated Modbus TCP coil interrogation.
    - *AI Integration*: Deconstructing extracted firmware scripts to locate hidden administrative backdoors.

19. **Module 19: Cloud Computing**
    - *Official Topics*: Cloud service models, Shared Responsibility Model, AWS/Azure IAM privilege escalation, S3 bucket exposure, container security, Terraform auditing.
    - *Learning Objectives*: Exploit cloud role trust relationships, identify exposed cloud storage, audit Kubernetes/Docker configurations, and enforce CSPM policies.
    - *Cyber Range Lab*: AWS privilege escalation via AssumeRole and public S3 bucket credential harvesting.
    - *AI Integration*: Auditing Terraform and CloudFormation Infrastructure-as-Code (IaC) templates for least-privilege compliance.

---

### Domain Group 5: Defensive Defense & Cryptography (Module 20)
20. **Module 20: Cryptography**
    - *Official Topics*: Symmetric (AES, ChaCha20) vs. asymmetric (RSA, ECC), hashing (SHA-256, Argon2), PKI certificates, padding oracle attacks, Post-Quantum Cryptography (PQC).
    - *Learning Objectives*: Analyze cipher mathematics, evaluate digital signatures, execute padding oracle attacks, and assess post-quantum algorithm readiness.
    - *Cyber Range Lab*: Cryptographic auditing with testssl.sh, padding oracle decryption with PadBuster, and hash analysis.
    - *AI Integration*: Auditing enterprise cipher suites and evaluating cryptographic entropy across legacy assets.

---

## 4. Verification & Consistency Checklist
- [x] Exactly 20 modules numbered 01 to 20
- [x] Official EC-Council titles match exactly
- [x] Clear classification badges on every learning component
- [x] Interactive Module Workspace implemented in Course Detail page
- [x] Learner progress tracking persisted in client storage
- [x] Automated test suite verifying contract integrity (`ceh-v13-curriculum.test.ts`)
