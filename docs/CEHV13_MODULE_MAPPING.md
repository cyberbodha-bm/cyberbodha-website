# CEH v13 AI — Official 20-Module Detailed Mapping Matrix

This document provides a comprehensive mapping of all 20 canonical modules of the **EC-Council Certified Ethical Hacker (CEH v13 AI)** course as implemented within CyberBodha.

---

| # | Official CEH v13 Module Title | Previous State | Domain Group | Cyber Range Lab Scenario | Primary Tools Mastered | AI Workflow Feature |
| :---: | :--- | :---: | :--- | :--- | :--- | :--- |
| **01** | Introduction to Ethical Hacking | Mod 1 (Partial) | Foundations & Recon | Setting Up the Cyber Range & Kali Linux Sandbox | Kali Linux, OpenVPN, ProxyChains | Automated RoE Scope & Compliance Verification |
| **02** | Footprinting and Reconnaissance | Mod 2 | Foundations & Recon | Comprehensive OSINT Investigation on Corporate Target | theHarvester, Amass, whois, dig, Shodan | Subdomain Clustering & Certificate Log Parsing |
| **03** | Scanning Networks | Mod 3 (Merged) | Foundations & Recon | Enterprise Perimeter & Subnet Discovery Scanning | Nmap, Masscan, Hping3, Wireshark | Heuristic Fingerprinting & Timing Synthesis |
| **04** | Enumeration | Mod 3 (Merged) | Foundations & Recon | Active Directory & Linux NFS/SMB Enumeration | enum4linux-ng, rpcclient, snmpwalk, ldapsearch | BloodHound AD Graph Analysis & Querying |
| **05** | Vulnerability Analysis | Mod 4 | Foundations & Recon | Vulnerability Scanning & Triage on Enterprise Assets | OpenVAS, Nessus Essentials, Searchsploit | CISA KEV Catalog Matching & CVSS v4 Scoring |
| **06** | System Hacking | Mod 5 | Network & System | Privilege Escalation and Hash Extraction Lab | Metasploit, Mimikatz, Hashcat, WinPEAS, LinPEAS | AI Exploit Tuning & PEAS Output Analysis |
| **07** | Malware Threats | Mod 10 | Network & System | Isolated Sandbox Malware Behavioral Analysis | Ghidra, PE-bear, Regshot, Wireshark | Polymorphic Script Deobfuscation |
| **08** | Sniffing | Mod 6 (Partial) | Network & System | ARP Spoofing and Cleartext Credential Interception | Wireshark, Ettercap, Bettercap, Tcpdump | Automated PCAP Threat & Anomaly Extraction |
| **09** | Social Engineering | Mod 9 | Network & System | Simulated Corporate Phishing & Credential Harvester | GoPhish, SET, Evilginx, DMARC Analyzer | Deepfake Voice Detection & Lure Analysis |
| **10** | Denial-of-Service | *New* | Network & System | SYN Flood and Slowloris Stress Testing | Hping3, Slowloris, iptables, Nginx Rate Limiting | Distributed Flood Pattern Recognition |
| **11** | Session Hijacking | *New* | Offensive Web & Apps | Intercepting and Hijacking Web Sessions | Burp Suite, OWASP ZAP, jwt_tool | Session Token Entropy & Randomness Audit |
| **12** | Evading IDS, Firewalls, & Honeypots | *New* | Offensive Web & Apps | Bypassing WAF and Honeypot Detection | Snort, ModSecurity, Cowrie, Iodine (DNS Tunnel) | WAF Regex Rule Mutation via LLM |
| **13** | Hacking Web Servers | *New* | Offensive Web & Apps | Exploiting Web Server Misconfigurations | Nikto, Gobuster, Burp Suite, Curl | Nginx/Apache Configuration Security Auditing |
| **14** | Hacking Web Applications | Mod 7 | Offensive Web & Apps | OWASP Top 10 Exploitation Lab | Burp Suite, OWASP ZAP, Postman, ffuf | Code Auditing for Authorization & Logic Gaps |
| **15** | SQL Injection | Mod 7 (Nested) | Offensive Web & Apps | Manual and Automated SQL Injection Lab | SQLMap, Burp Suite, DBeaver, Python | Automated Parameterized Query Refactoring |
| **16** | Hacking Wireless Networks | Mod 8 (Merged) | Specialized Platforms | WPA2 Handshake Capture and PMKID Cracking | Aircrack-ng Suite, Airmon-ng, Hashcat | Wireless Wordlist Generation & Beacon Analysis |
| **17** | Hacking Mobile Platforms | *New* | Specialized Platforms | Decompiling Android APK and Bypassing SSL Pinning | JADX-GUI, APKTool, Frida, Objection | Manifest Vulnerability Scanning with AI |
| **18** | IoT and OT Hacking | Mod 8 (Merged) | Specialized Platforms | IoT Firmware Carving and Modbus Interrogation | Binwalk, FAT, Nmap Modbus scripts, QEMU | Automated Firmware Decompilation Analysis |
| **19** | Cloud Computing | Mod 11 | Specialized Platforms | AWS/Azure Privilege Escalation & Bucket Enumeration | AWS CLI, Pacu, ScoutSuite, TruffleHog | Terraform Infrastructure-as-Code Auditing |
| **20** | Cryptography | *New* | Defensive & Crypto | Cryptographic Attacks, Certificate Auditing & Hashes | OpenSSL, testssl.sh, Hashcat, PadBuster | Post-Quantum Readiness & Cipher Suite Review |

---

## 2. Summary of Structural Additions

1. **6 Net-New Dedicated Modules Introduced**:
   - Module 10: Denial-of-Service
   - Module 11: Session Hijacking
   - Module 12: Evading IDS, Firewalls, and Honeypots
   - Module 13: Hacking Web Servers
   - Module 17: Hacking Mobile Platforms
   - Module 20: Cryptography

2. **4 Compound Modules Disentangled into Dedicated Scope**:
   - Scanning Networks (Mod 03) and Enumeration (Mod 04)
   - Wireless Networks (Mod 16) and IoT/OT Hacking (Mod 18)
   - Web Servers (Mod 13) and Web Applications (Mod 14)
   - Web App Security (Mod 14) and SQL Injection (Mod 15)

3. **100% Lab Alignment**:
   - Every single module is backed by a specific virtual Cyber Range scenario, designated environment, and industry-standard tools.
