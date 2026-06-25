export type Skill = {
  name: string;
  cat: 'cybersec' | 'backend' | 'mobile' | 'frontend' | 'web3' | 'devops';
  pct: number;
  tags: string[];
  glow: string;
};

export type Project = {
  icon: string;
  title: string;
  desc: string;
  tech: string[];
  cats: ('security' | 'python' | 'mobile' | 'ai' | 'web3')[];
  status: 'live' | 'beta';
  sec: number;
  link: string;
  a: string;
  b: string;
};

export type CyberDomain = {
  title: string;
  sev: 'EXPERT' | 'ADVANCED' | 'HIGH';
  badge: 'csev-exp' | 'csev-adv' | 'csev-hi';
  desc: string;
  items: string[];
};

export type MitreRow = {
  id: string;
  phase: string;
  name: string;
  tools: string;
};

export type PentestStep = {
  num: string;
  title: string;
  desc: string;
  c: string;
};

export type CaseStudy = {
  slug: string;
  badge: string;
  badge2: string;
  bc: string;
  bb: string;
  bt: string;
  title: string;
  problem: string;
  arch: string;
  security: string;
  threats: string[];
  r1: string; r1l: string;
  r2: string; r2l: string;
  r3: string; r3l: string;
  r4: string; r4l: string;
};

export type ExperienceEntry = {
  title: string;
  co: string;
  period: string;
  desc: string;
  tags: string[];
};

export type Service = {
  num: string;
  icon: string;
  title: string;
  desc: string;
  feats: string[];
};

export type Cert = {
  icon: string;
  name: string;
  issuer: string;
  year: string;
  done: boolean;
};

export type ToolEntry = {
  name: string;
  cat: string;
};

export type TickerItem = {
  label: string;
  cls: 't-alert' | 't-warn' | 't-hi';
  msg: string;
};

export const SITE = {
  name: 'ILYA',
  title: 'ILYA — Cyber Intelligence Division',
  shortTitle: 'ILYA // CYBER INTELLIGENCE DIVISION',
  description:
    'Ilya — Elite Cybersecurity Engineer, Penetration Tester, Full Stack Developer & Web3 Architect. Offensive security, secure software, and next-generation digital infrastructure.',
  keywords: [
    'cybersecurity engineer',
    'penetration tester',
    'ethical hacking',
    'web3 developer',
    'python developer',
    'flutter developer',
  ],
  email: 'ilianothingg@gmail.com',
  phone: '+989928102005',
  phoneDisplay: '+98 992 810 2005',
  instagram: 'https://instagram.com/ilianothing',
  freelance: 'https://www.karlancer.com/profile/703128',
  githubMain: 'https://github.com/niproot',
  githubOrg: 'https://github.com/V0IDNETWORK',
  url: process.env.SITE_URL || 'https://ilya-cyberops.dev',
};

export const NAV_ITEMS = [
  { id: 'home', label: 'Home', href: '/' },
  { id: 'about', label: 'About', href: '/about' },
  { id: 'skills', label: 'Skills', href: '/skills' },
  { id: 'projects', label: 'Projects', href: '/projects' },
  { id: 'cybersec', label: 'Security', href: '/cybersecurity' },
  { id: 'casestudies', label: 'Case Studies', href: '/case-studies' },
  { id: 'experience', label: 'Experience', href: '/experience' },
  { id: 'services', label: 'Services', href: '/services' },
  { id: 'certs', label: 'Certifications', href: '/certifications' },
  { id: 'blog', label: 'Blog', href: '/blog' },
  { id: 'contact', label: 'Contact', href: '/contact' },
] as const;

export const SKILLS: Skill[] = [
  { name: 'Web App Pentesting', cat: 'cybersec', pct: 92, tags: ['OWASP', 'Burp Suite', 'SQLi', 'XSS', 'SSRF'], glow: 'rgba(0,245,255,0.06)' },
  { name: 'Network Penetration', cat: 'cybersec', pct: 88, tags: ['Nmap', 'Wireshark', 'Metasploit'], glow: 'rgba(255,75,107,0.05)' },
  { name: 'OSINT & Recon', cat: 'cybersec', pct: 85, tags: ['Shodan', 'Maltego', 'theHarvester'], glow: 'rgba(0,245,255,0.06)' },
  { name: 'Python Development', cat: 'backend', pct: 94, tags: ['FastAPI', 'Django', 'asyncio'], glow: 'rgba(123,97,255,0.06)' },
  { name: 'Flutter / Dart', cat: 'mobile', pct: 88, tags: ['Flutter', 'Dart', 'iOS', 'Android'], glow: 'rgba(0,255,136,0.05)' },
  { name: 'JavaScript & Node', cat: 'frontend', pct: 82, tags: ['React', 'Node.js', 'TypeScript'], glow: 'rgba(255,215,0,0.04)' },
  { name: 'Go (Golang)', cat: 'backend', pct: 72, tags: ['Go', 'REST APIs', 'CLI'], glow: 'rgba(0,245,255,0.05)' },
  { name: 'Web3 & Solidity', cat: 'web3', pct: 75, tags: ['Solidity', 'Web3.js', 'DeFi'], glow: 'rgba(123,97,255,0.07)' },
  { name: 'Linux & Shell', cat: 'devops', pct: 90, tags: ['Bash', 'Kali Linux', 'Ubuntu'], glow: 'rgba(0,255,136,0.05)' },
  { name: 'Docker & DevOps', cat: 'devops', pct: 78, tags: ['Docker', 'CI/CD', 'Nginx'], glow: 'rgba(0,245,255,0.05)' },
  { name: 'Cryptography', cat: 'cybersec', pct: 86, tags: ['Fernet', 'AES', 'RSA', 'PBKDF2'], glow: 'rgba(0,245,255,0.06)' },
  { name: 'Ruby & Metasploit', cat: 'cybersec', pct: 70, tags: ['Ruby', 'Metasploit', 'Exploits'], glow: 'rgba(255,75,107,0.05)' },
];

export const PROJECTS: Project[] = [
  { icon: '🔐', title: 'Guard Password Manager', desc: 'Military-grade local password manager with Fernet encryption. Zero-knowledge architecture — vault data never leaves the device. PBKDF2-derived master key with OS keyring integration.', tech: ['Python', 'Fernet', 'Cryptography', 'Tkinter', 'Keyring'], cats: ['security', 'python'], status: 'live', sec: 5, link: 'https://github.com/niproot', a: 'var(--c)', b: 'var(--p)' },
  { icon: '🐍', title: 'Venom Mobile App', desc: 'Feature-rich cybersecurity mobile application for field penetration testers. Real-time threat intelligence, security scanning, and vulnerability assessments on iOS & Android.', tech: ['Flutter', 'Dart', 'REST APIs', 'Security'], cats: ['security', 'mobile'], status: 'live', sec: 4, link: 'https://github.com/niproot', a: 'var(--g)', b: 'var(--c)' },
  { icon: '🛡️', title: 'Shutdown Guard', desc: 'Windows security utility preventing unauthorized shutdowns and reboots. Multi-layer authentication with event logging. Protects critical infrastructure during live assessments.', tech: ['Python', 'Windows API', 'Registry'], cats: ['security', 'python'], status: 'live', sec: 4, link: 'https://github.com/niproot', a: 'var(--c)', b: 'var(--p)' },
  { icon: '🤖', title: 'AI Telegram Bot Platform', desc: 'Advanced Telegram bot with intelligent DeepSeek + GPT-4 routing, premium subscription management, face detection pipeline, and comprehensive admin control panel.', tech: ['Python', 'DeepSeek', 'ChatGPT', 'Telegram API', 'OpenCV'], cats: ['ai', 'python'], status: 'live', sec: 3, link: 'https://github.com/V0IDNETWORK', a: 'var(--p)', b: 'var(--c)' },
  { icon: '👁️', title: 'Face Detection System', desc: 'Real-time AI facial analysis using deep learning. Identifies faces with age, gender, emotion, and identity detection. Production REST API with concurrent processing.', tech: ['Python', 'OpenCV', 'DeepFace', 'TensorFlow', 'FastAPI'], cats: ['ai', 'python'], status: 'live', sec: 3, link: 'https://github.com/niproot', a: 'var(--g)', b: 'var(--p)' },
  { icon: '⛓️', title: 'Web3 Security Toolkit', desc: 'Smart contract auditing utilities and blockchain security research tools. Automated detection of reentrancy, integer overflow, and access control vulnerabilities in Solidity contracts.', tech: ['Solidity', 'Python', 'Web3.js', 'ethers.js'], cats: ['security', 'web3'], status: 'beta', sec: 5, link: 'https://github.com/V0IDNETWORK', a: 'var(--p)', b: 'var(--g)' },
  { icon: '🔭', title: 'OSINT Automation Suite', desc: 'Automated open-source intelligence platform aggregating Shodan, Censys, VirusTotal, and social data into structured intelligence reports for penetration testing engagements.', tech: ['Python', 'Shodan API', 'VirusTotal', 'Maltego'], cats: ['security', 'python'], status: 'live', sec: 4, link: 'https://github.com/niproot', a: 'var(--c)', b: 'var(--g)' },
  { icon: '🌐', title: 'Personal Portfolio', desc: 'This experience — a cyberpunk-themed intelligence system with WebGL shaders, GPU particles, boot sequences, and real-time visualizations. Rebuilt as a full Next.js application with routing, a blog, and a working contact system.', tech: ['Next.js', 'TypeScript', 'WebGL', 'GLSL'], cats: ['python'], status: 'live', sec: 2, link: '#', a: 'var(--c)', b: 'var(--p)' },
];

export const PROJECT_FILTERS: { cat: string; label: string }[] = [
  { cat: 'all', label: 'All Projects' },
  { cat: 'security', label: 'Security' },
  { cat: 'python', label: 'Python' },
  { cat: 'mobile', label: 'Mobile' },
  { cat: 'ai', label: 'AI/ML' },
  { cat: 'web3', label: 'Web3' },
];

export const CYBER_DOMAINS: CyberDomain[] = [
  { title: 'Web Application Security', sev: 'EXPERT', badge: 'csev-exp', desc: 'OWASP Top 10, SQL Injection, XSS, CSRF, SSRF, Auth bypass, JWT exploitation, API security audits using Burp Suite Professional.', items: ['SQL Injection & Blind SQLi', 'Cross-Site Scripting (XSS)', 'Authentication & Session Bypass', 'Server-Side Request Forgery'] },
  { title: 'Network Penetration Testing', sev: 'ADVANCED', badge: 'csev-adv', desc: 'Port scanning, service enumeration, network protocol analysis, firewall evasion, MitM attacks, and exploitation of misconfigured services.', items: ['Port Scanning (Nmap/Masscan)', 'Protocol Analysis (Wireshark)', 'Firewall & IDS Evasion', 'Man-in-the-Middle Attacks'] },
  { title: 'OSINT & Reconnaissance', sev: 'EXPERT', badge: 'csev-exp', desc: 'Open-source intelligence using Shodan, Maltego, theHarvester, and custom Python scripts. Full digital footprint mapping and pre-engagement intel.', items: ['Shodan & Censys Intelligence', 'DNS Enumeration & Transfers', 'Employee & Org OSINT', 'Social Engineering Support'] },
  { title: 'Privilege Escalation', sev: 'HIGH', badge: 'csev-hi', desc: 'Linux and Windows privilege escalation via SUID exploitation, kernel exploits, misconfigurations, and credential abuse for post-compromise scenarios.', items: ['SUID/SGID Binary Exploitation', 'Windows UAC Bypass', 'Kernel Exploit Development', 'Credential Dumping (pypykatz)'] },
  { title: 'Secure Code Review', sev: 'EXPERT', badge: 'csev-exp', desc: 'Static and dynamic analysis across Python, JavaScript, and Solidity. OWASP-aligned vulnerability identification with remediation guidance.', items: ['Static Analysis & AST Inspection', 'Dependency Supply Chain Audit', 'Cryptographic Implementation Review', 'Input Validation & Encoding'] },
  { title: 'Vulnerability Research', sev: 'HIGH', badge: 'csev-adv', desc: 'Independent research, CVE triage, PoC development, and responsible disclosure. Experience in bug bounty programs and CTF competitions.', items: ['CVE Analysis & PoC Development', 'Bug Bounty Programs', 'CTF Competitions & Writeups', 'Responsible Disclosure Process'] },
];

export const MITRE_ROWS: MitreRow[] = [
  { id: 'T1595', phase: 'Reconnaissance', name: 'Active Scanning', tools: 'Nmap, Masscan, Shodan, Censys' },
  { id: 'T1589', phase: 'Reconnaissance', name: 'Gather Victim Identity', tools: 'theHarvester, Maltego, LinkedIn' },
  { id: 'T1190', phase: 'Initial Access', name: 'Exploit Public Application', tools: 'Burp Suite, SQLMap, Custom PoCs' },
  { id: 'T1059.006', phase: 'Execution', name: 'Python Script Execution', tools: 'Custom Python scripts' },
  { id: 'T1068', phase: 'Privilege Escalation', name: 'Exploitation for PrivEsc', tools: 'LinPEAS, WinPEAS, GTFOBins' },
  { id: 'T1555', phase: 'Credential Access', name: 'Credentials from Password Stores', tools: 'Mimikatz, pypykatz' },
  { id: 'T1040', phase: 'Credential Access', name: 'Network Sniffing', tools: 'Wireshark, tcpdump, Bettercap' },
  { id: 'T1087', phase: 'Discovery', name: 'Account Discovery', tools: 'BloodHound, ldapsearch, net' },
  { id: 'T1046', phase: 'Discovery', name: 'Network Service Scanning', tools: 'Nmap, Masscan, Nessus' },
  { id: 'T1210', phase: 'Lateral Movement', name: 'Remote Services Exploitation', tools: 'Metasploit, custom exploits' },
];

export const PENTEST_STEPS: PentestStep[] = [
  { num: '01', title: 'Reconnaissance', desc: 'Passive & active intel, OSINT, attack surface mapping', c: 'var(--c)' },
  { num: '02', title: 'Scanning', desc: 'Port scan, service fingerprinting, vuln assessment', c: 'var(--c)' },
  { num: '03', title: 'Exploitation', desc: 'Controlled exploitation of identified vulnerabilities', c: 'var(--p)' },
  { num: '04', title: 'Post-Exploitation', desc: 'Priv-esc, persistence, lateral movement', c: 'var(--p)' },
  { num: '05', title: 'Reporting', desc: 'CVSS-scored findings, risk ratings, remediation roadmap', c: 'var(--g)' },
  { num: '06', title: 'Remediation', desc: 'Verify fixes, re-test, confirm vulnerability closure', c: 'var(--g)' },
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    slug: 'guard-password-manager',
    badge: 'Security Tool', badge2: 'Python', bc: 'rgba(0,245,255,0.1)', bb: 'rgba(0,245,255,0.28)', bt: 'var(--c)',
    title: 'Guard — Cryptographic Password Manager',
    problem: 'Cloud-based password managers create single points of failure and trust dependencies. Users with sensitive credentials needed a truly offline, cryptographically secure vault with zero external dependencies.',
    arch: 'Local SQLite database encrypted at rest. Master password derives AES-128-CBC key via PBKDF2 (100k iterations, SHA-256). Fernet authenticated encryption per credential entry. OS keyring for in-session key caching. Cross-platform Tkinter GUI.',
    security: 'Fernet encryption (AES-128-CBC + HMAC-SHA256). PBKDF2-HMAC-SHA256 key derivation. Zero-knowledge — no network calls ever. Memory zeroing on close. Database integrity checks on load.',
    threats: ['Brute Force Master Password', 'Memory Scraping Attack', 'Database File Theft', 'Supply Chain Compromise'],
    r1: '0', r1l: 'Cloud Exposure', r2: '256-bit', r2l: 'Key Strength', r3: '<12ms', r3l: 'Decrypt Time', r4: '100k', r4l: 'PBKDF2 Rounds',
  },
  {
    slug: 'venom-mobile-platform',
    badge: 'Mobile App', badge2: 'Flutter / Dart', bc: 'rgba(0,255,136,0.07)', bb: 'rgba(0,255,136,0.22)', bt: 'var(--g)',
    title: 'Venom — Cybersecurity Mobile Platform',
    problem: 'Security professionals needed a portable toolkit for on-site assessments. Existing mobile security apps were either too simplistic for professional use or too complex for rapid field deployment.',
    arch: 'Flutter cross-platform (iOS/Android) with modular feature architecture. REST integrations for threat intelligence feeds. Local Hive AES-256 encrypted storage for findings. Dark-mode-first interface optimized for field use.',
    security: 'Local Hive AES-256 storage. Certificate pinning on all API calls. No sensitive data in app logs. ProGuard obfuscated release builds. Encrypted inter-module data transfer.',
    threats: ['Device Theft & Data Exfiltration', 'MitM on API Communications', 'Reverse Engineering Logic', 'Sensitive Data in Logs'],
    r1: 'iOS+Android', r1l: 'Platform Coverage', r2: '10+', r2l: 'Security Modules', r3: 'Encrypted', r3l: 'Local Storage', r4: 'TLS 1.3', r4l: 'API Layer',
  },
  {
    slug: 'ai-telegram-bot-platform',
    badge: 'AI Integration', badge2: 'Python + OpenCV', bc: 'rgba(123,97,255,0.08)', bb: 'rgba(123,97,255,0.22)', bt: 'var(--p)',
    title: 'AI Telegram Bot — Multi-Model Intelligence Platform',
    problem: 'Organizations needed an intelligent, scalable bot integrating multiple AI providers, managing premium subscriptions, and providing advanced facial analysis through a simple chat interface.',
    arch: 'Python async architecture. Intelligent model routing: DeepSeek for cost-efficient inference, GPT-4 for premium users. SQLite user/subscription management. OpenCV + DeepFace pipeline for real-time facial analysis from image messages.',
    security: 'API key rotation via env management. Subscription validation middleware on every request. Per-user rate limiting. RBAC admin panel. Comprehensive audit logging of all AI queries and user actions.',
    threats: ['Prompt Injection Attacks', 'Subscription Bypass Attempts', 'API Key Leakage', 'Unauthorized Admin Access'],
    r1: '2 AI Models', r1l: 'Integrated', r2: 'Premium', r2l: 'Subscription System', r3: 'Real-time', r3l: 'Face Detection', r4: 'RBAC', r4l: 'Admin Controls',
  },
];

export const EXPERIENCES: ExperienceEntry[] = [
  { title: 'Senior Penetration Tester & Developer', co: 'Freelance / Karlancer Platform', period: '2022 — Present', desc: 'Conducting web application penetration tests, network security audits, and developing custom security tools for clients across multiple industries. Building mobile and web applications with security as a first-class concern.', tags: ['Pentesting', 'Python', 'Flutter', 'Security Audit', 'OSINT', 'Reporting'] },
  { title: 'Full Stack Developer & Security Engineer', co: 'Independent — GitHub: niproot / V0IDNETWORK', period: '2021 — Present', desc: 'Developing security-focused applications: Guard password manager, AI Telegram platform, face detection systems, and Web3 security utilities. Contributing to open-source security tooling under both GitHub organizations.', tags: ['Python', 'Flutter', 'JavaScript', 'Go', 'Cryptography', 'Web3'] },
  { title: 'Security Researcher & CTF Competitor', co: 'Bug Bounty Programs & CTF Competitions', period: '2020 — Present', desc: 'Participating in CTF competitions and bug bounty programs. Identifying and responsibly disclosing vulnerabilities. Building research tooling and publishing writeups. TryHackMe Top 5% global ranking.', tags: ['Ethical Hacking', 'Vuln Research', 'CTF', 'Bug Bounty', 'Writeups'] },
];

export const SERVICES: Service[] = [
  { num: '01', icon: '🎯', title: 'Penetration Testing', desc: 'Full-scope penetration testing for web applications, APIs, and network infrastructure. CVSS-scored reporting with detailed remediation roadmaps.', feats: ['Web Application Testing', 'Network & Infrastructure', 'API Security Testing', 'Vulnerability Assessment'] },
  { num: '02', icon: '🔍', title: 'Security Audits', desc: 'Comprehensive code reviews and architecture audits. Identify vulnerabilities before adversaries with systematic static and dynamic analysis.', feats: ['Source Code Review', 'Architecture Security Review', 'Supply Chain Auditing', 'Compliance Gap Analysis'] },
  { num: '03', icon: '💻', title: 'Secure Software Dev', desc: 'Security-first software development in Python, Go, and JavaScript. Secure SDLC from threat modeling to production hardening.', feats: ['Python & Go Development', 'REST API Development', 'CLI Security Tools', 'Automation Scripts'] },
  { num: '04', icon: '📱', title: 'Mobile Development', desc: 'Cross-platform mobile apps built with Flutter. Performance-optimized and security-hardened from the ground up.', feats: ['Flutter / Dart Development', 'iOS & Android Deployment', 'Security-First Mobile Design', 'API Integration'] },
  { num: '05', icon: '⛓️', title: 'Web3 & Smart Contracts', desc: 'Smart contract development and security auditing for DeFi, NFT, and blockchain applications. On-chain and off-chain integration.', feats: ['Smart Contract Dev (Solidity)', 'Contract Security Auditing', 'Web3.js / ethers.js', 'DeFi Protocol Analysis'] },
  { num: '06', icon: '⚡', title: 'Security Consulting', desc: 'Strategic advisory for startups and enterprises. Build a security-first culture with incident response readiness and threat modeling.', feats: ['Security Strategy & Roadmap', 'Threat Modeling (STRIDE)', 'Security Training', 'Incident Response Planning'] },
];

export const CERTS: Cert[] = [
  { icon: '🎯', name: 'eJPT — eLearnSecurity Junior Penetration Tester', issuer: 'eLearnSecurity / INE', year: 'Completed', done: true },
  { icon: '🔴', name: 'CEH — Certified Ethical Hacker', issuer: 'EC-Council', year: 'In Progress', done: false },
  { icon: '⚔️', name: 'OSCP — Offensive Security Certified Professional', issuer: 'Offensive Security', year: 'Pursuing', done: false },
  { icon: '🌐', name: 'CompTIA Security+', issuer: 'CompTIA', year: 'In Progress', done: false },
  { icon: '🐍', name: 'PCEP — Python Institute Certified', issuer: 'Python Institute', year: 'Completed', done: true },
  { icon: '📱', name: 'Associate Android Developer', issuer: 'Google', year: 'Completed', done: true },
  { icon: '⛓️', name: 'Ethereum & Solidity Developer', issuer: 'Cyfrin / Udemy', year: 'Completed', done: true },
  { icon: '🏆', name: 'TryHackMe — Top 5% Global', issuer: 'TryHackMe Platform', year: 'Active', done: true },
];

export const TOOLS: ToolEntry[] = [
  { name: 'Burp Suite Pro', cat: 'Web Security' }, { name: 'Metasploit', cat: 'Exploitation' }, { name: 'Nmap / Masscan', cat: 'Scanning' },
  { name: 'Wireshark', cat: 'Analysis' }, { name: 'Kali Linux', cat: 'OS' }, { name: 'SQLMap', cat: 'SQL Injection' },
  { name: 'Shodan', cat: 'OSINT' }, { name: 'John / Hashcat', cat: 'Password' }, { name: 'Maltego', cat: 'OSINT' },
  { name: 'theHarvester', cat: 'Recon' }, { name: 'Ghidra', cat: 'Reverse Eng' }, { name: 'Hydra', cat: 'Brute Force' },
  { name: 'Nikto', cat: 'Web Scanner' }, { name: 'BloodHound', cat: 'AD Recon' }, { name: 'Bettercap', cat: 'MitM' }, { name: 'Frida', cat: 'Mobile' },
];

export const TICKER: TickerItem[] = [
  { label: 'CVE-2024-21762', cls: 't-alert', msg: 'CRITICAL — Fortinet FortiOS auth bypass — PATCHED' },
  { label: 'THREAT INTEL', cls: 't-warn', msg: 'RaaS group targeting healthcare sectors — MONITORING' },
  { label: 'OSINT UPDATE', cls: 't-hi', msg: 'New subdomain enumeration vectors identified — LOGGED' },
  { label: 'CVE-2025-0282', cls: 't-alert', msg: 'CRITICAL — Ivanti stack overflow — PoC AVAILABLE' },
  { label: 'RED TEAM', cls: 't-hi', msg: 'Active engagement in progress — STATUS: OPERATIONAL' },
  { label: 'CVE-2024-3400', cls: 't-alert', msg: 'CRITICAL — PAN-OS command injection — ANALYZING' },
  { label: 'WEB3 INTEL', cls: 't-warn', msg: 'Flash loan attack vector in DeFi protocol — REPORTED' },
  { label: 'RECON ALERT', cls: 't-hi', msg: 'New attack surface mapping technique documented — OK' },
];

export const HERO_STATS = [
  { id: 'hs1', end: 5, label: 'Yrs Experience' },
  { id: 'hs2', end: 23, label: 'Projects Shipped' },
  { id: 'hs3', end: 47, label: 'Vulns Reported' },
  { id: 'hs4', end: 31, label: 'Clients Served' },
];

export const DASHBOARD_METRICS = [
  { id: 'm1', end: 47, label: 'Vulns Discovered' },
  { id: 'm2', end: 12, label: 'Tools Built' },
  { id: 'm3', end: 156, label: 'CVEs Analyzed' },
  { id: 'm4', end: 31, label: 'Clients Secured' },
];

export const TERM_SEQS: { t: 'p' | 'o' | 'w' | 'i' | 'e'; s: string }[][] = [
  [
    { t: 'p', s: 'whoami' },
    { t: 'o', s: 'ilya — cybersecurity engineer & pentester' },
    { t: 'p', s: 'cat /etc/clearance' },
    { t: 'o', s: 'LEVEL: TOP SECRET | DIVISION: CYBER-OPS' },
    { t: 'p', s: 'nmap -sV --script vuln target.com' },
    { t: 'w', s: '[*] Starting vulnerability scan...' },
    { t: 'o', s: '[+] Port 443 — Apache 2.4.49 (CRITICAL: CVE-2021-41773)' },
    { t: 'o', s: '[+] Path traversal + RCE confirmed — severity: CRITICAL' },
    { t: 'p', s: './exploit.py --target target.com --vuln cve-2021-41773' },
    { t: 'w', s: '[*] Deploying payload...' },
    { t: 'o', s: '[✓] Shell obtained — root@target:/var/www/html#' },
  ],
  [
    { t: 'p', s: 'python3 guard.py --status' },
    { t: 'o', s: '[✓] Vault initialized — Fernet AES-128-CBC active' },
    { t: 'o', s: '[✓] PBKDF2 key derivation — 100,000 iterations' },
    { t: 'o', s: '[✓] 0 cloud dependencies — air-gapped storage' },
    { t: 'p', s: 'cat skills.json | jq .stack' },
    { t: 'o', s: '["Python","Flutter","Go","JS","Solidity","Ruby"]' },
    { t: 'p', s: 'git log --oneline | wc -l' },
    { t: 'o', s: '2847' },
    { t: 'p', s: 'burpsuite --proxy 127.0.0.1:8080 &' },
    { t: 'o', s: '[*] Burp Suite Pro initialized — intercepting HTTPS' },
    { t: 'o', s: '[+] IDOR vulnerability detected at /api/v2/user/{id}' },
    { t: 'o', s: '[+] Severity: HIGH — CVSS: 8.1 — Report generated' },
  ],
];

export const BOOT_LINES: { t: number; ok: boolean; warn?: boolean; txt: string }[] = [
  { t: 200, ok: true, txt: 'Initializing secure kernel... v4.2.1' },
  { t: 600, ok: true, txt: 'Loading cryptographic modules... AES-256 / RSA-4096' },
  { t: 1000, ok: true, txt: 'Establishing encrypted channel... TLS 1.3' },
  { t: 1350, ok: true, warn: true, txt: 'Scanning threat environment... 0 active threats' },
  { t: 1700, ok: true, txt: 'Neural network firewall initialized... ACTIVE' },
  { t: 2000, ok: true, txt: 'Loading operative profile: ILYA...' },
  { t: 2300, ok: true, txt: 'Clearance level: CYBER-OPS / TOP SECRET' },
  { t: 2600, ok: true, txt: 'All systems nominal — AUTHORIZED' },
];
