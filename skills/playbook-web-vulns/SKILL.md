---
name: Web Vulnerabilities Playbook
description: Advanced playbook for discovering and exploiting web application vulnerabilities. Covers OWASP Top 10, API security, injection techniques, and modern XSS/SSRF vectors.
risk: offensive
source: community
---

# Web Vulnerabilities Playbook

> [!WARNING]
> **AUTHORIZED USE ONLY**: This skill is for authorized security testing and research purposes only. Use of this skill for unauthorized activities is strictly prohibited.

A consolidated guide for performing end-to-end web application security assessments. This playbook merges specific techniques for various injection attacks, API-specific flaws, and cross-site vulnerabilities into a unified testing methodology.

## When to Use

- Use when auditing web applications or REST/GraphQL APIs.
- Active during bug bounty hunting or formal penetration tests.
- Use to test for SQLi, XSS, SSRF, IDOR, and Command Injection.
- Relevant for assessing the security of modern single-page applications (SPAs).

## Core Testing Methodology

### 1. Injections (SQLi, NoSQLi, Template)
- **SQL Injection**: Test for blind, error-based, and union-based injections. Use `sqlmap` for automated exploitation of confirmed vulnerabilities.
- **HTML/XSS**: Identify stored, reflected, and DOM-based XSS. Test for filter bypasses using encoding and polyglots.
- **Command Injection**: Test for arbitrary command execution via unsanitized system calls.
- **Server-Side Template Injection (SSTI)**: Identify and exploit template engine vulnerabilities (Jinja2, Mustache, etc.).

### 2. API Security & Fuzzing
- **Endpoint Discovery**: Use wordlist-based fuzzing to find hidden endpoints (e.g., `/v2/`, `/admin/`, `/debug/`).
- **IDOR (Insecure Direct Object Reference)**: Test for unauthorized access to data by manipulating IDs in requests.
- **GraphQL Specifics**: Check for introspection enabled, excessive depth, and mass assignment in mutations.
- **Broken Function Level Authorization**: Test if low-privileged users can access administrative APIs.

### 3. Server-Side Request Forgery (SSRF)
- **Metadata Services**: Target cloud metadata endpoints (e.g., `169.254.169.254` for AWS/GCP).
- **Internal Scanning**: Use the server as a proxy to scan internal networks or access internal-only services (e.g., Redis, database).

### 4. Broken Business Logic
- **Negative Quantities**: Test if inputs allow negative numbers for price or quantity in e-commerce flows.
- **Privilege Escalation**: Attempt to elevate user permissions through profile manipulation or JWT tampering.

## Essential Tools

- **Proxy**: Burp Suite (Professional or Community), OWASP ZAP.
- **Fuzzing**: `ffuf`, `gobuster`, `dirb`.
- **Injection**: `sqlmap`, `nmap`.
- **Scanning**: `nuclei` for template-based vulnerability scanning.

## Remediation Patterns

- **Input Validation**: Strictly validate all user-supplied data against a whitelist of expected formats.
- **Output Encoding**: Encode data before rendering it in the browser to prevent XSS.
- **Parameterized Queries**: Always use prepared statements/parameterized queries to prevent SQL injection.
- **Secret Management**: Never hardcode API keys or credentials in frontend code or Git repositories.
