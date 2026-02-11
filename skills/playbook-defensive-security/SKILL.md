---
name: Defensive Security & Hardening Playbook
description: Comprehensive playbook for defensive security, code auditing, and system hardening. Covers SAST/DAST patterns, secure coding standards (SDE), and compliance verification.
risk: safe
source: community
---

# Defensive Security & Hardening Playbook

A consolidated guide for building and maintaining secure systems. This playbook merges defensive patterns for backend, frontend, and mobile development with automated security scanning and architectural hardening strategies.

## When to Use

- Use when performing security-focused code reviews or software audits.
- Active during the implementation of security guardrails in CI/CD pipelines.
- Use to harden cloud infrastructure (e.g., K8s policies) or backend APIs.
- Relevant for ensuring compliance with security standards (SOC2, OWASP MASVS, etc.).

## Core Defensive Strategies

### 1. Secure Development (SDE)
- **Backend**: Implement robust input validation, centralized authentication middleware, and secure secret management.
- **Frontend**: Enforce CSP (Content Security Policy), use context-aware encoding, and audit third-party dependencies.
- **Mobile**: Implement certificate pinning, secure storage (Keychain/Keystore), and root/jailbreak detection.

### 2. Automated Scanning (SAST/DAST)
- **Static Analysis (SAST)**: Integrate tools like `Semgrep`, `SonarQube`, or `Bandit` into the dev workflow to catch patterns before commit.
- **Dynamic Analysis (DAST)**: Run automated scans against running test environments to find runtime vulnerabilities.
- **Dependency Audit**: Regularly run `npm audit` or `snyk` to identify and patch vulnerable packages.

### 3. System Hardening
- **Container Security**: Use minimal base images (Distroless, Alpine), run as non-root, and implement Kubernetes NetworkPolicies.
- **Network Hardening**: Restrict inter-service communication to verified requirements (Microsegmentation).
- **Service Hardening**: Disable unnecessary features/ports, enforce TLS 1.3, and implement robust rate limiting.

### 4. Compliance & Auditing
- **Requirement Extraction**: Translate security requirements into actionable engineering tickets.
- **Continuous Compliance**: Use automated checks to verify that infrastructure remains in a compliant state.
- **Audit Logging**: Ensure all security-critical actions are logged with sufficient context for forensic analysis.

## Essential Tools

- **Scanning**: `Semgrep`, `Snyk`, `Checkov`, `Trivy`.
- **Infrastructure**: `Kubescape`, `AWS Config`, `Azure Policy`.
- **Auditing**: `Gitleaks`, `Talisman`.

## Remediation Workflow

1. **Identify**: Detect vulnerability through manual audit or automated scan.
2. **Triaging**: Assess impact and likelihood.
3. **Patch**: Apply code or infrastructure change.
4. **Verify**: Re-run scans to confirm the fix is effective.
