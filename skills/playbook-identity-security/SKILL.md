---
name: Identity & Access Security Playbook
description: Comprehensive playbook for testing and securing identity systems. Covers Active Directory attacks, modern OAuth/AuthZ patterns, session management, and common authentication bypasses.
risk: offensive
source: community
---

# Identity & Access Security Playbook

> [!WARNING]
> **AUTHORIZED USE ONLY**: This skill is for authorized security testing and research purposes only. Use of this skill for unauthorized activities is strictly prohibited.

This playbook provides a unified framework for assessing and securing identity and access management (IAM) systems. It merges patterns for legacy Active Directory environments with modern web authentication protocols like OAuth2, OpenID Connect, and Supabase/Clerk integrations.

## When to Use

- Use when performing security audits on authentication and authorization layers.
- Active during Active Directory penetration testing (Kerberoasting, DCSync, etc.).
- Use when designing or assessing session management and password policies.
- Relevant for testing "Broken Authentication" vulnerabilities (OWASP Top 10).

## Core Assessment Areas

### 1. Active Directory (AD) Environment
Targets the core of enterprise identity.
- **Enumeration**: Use `BloodHound` or `SharpHound` to map attack paths.
- **Initial Access**: Spray common passwords or target LLMNR/NBT-NS (Responder).
- **Lateral Movement**: Pass-the-Hash (PtH), Pass-the-Ticket (PtT).
- **Privilege Escalation**:
    - **Kerberoasting**: Requesting service tickets to crack offline.
    - **AS-REP Roasting**: Targeting users with "Do not require Kerberos preauthentication".
    - **DCSync**: Mimicking a Domain Controller to pull password hashes.

### 2. Modern Web Authentication (OAuth2/OIDC)
Assessments for cloud-native and SaaS-heavy environments.
- **Session Management**: Check for session fixation, predictable IDs, or lack of secure/HttpOnly flags.
- **JWT Assessment**: Verify signature validation, "none" algorithm bypass, and sensitive data in payloads.
- **OAuth Flows**: Test for redirect URI leakage, state parameter omission (CSRF), and scope escalation.
- **Integration Specifics**:
    - **Supabase/Clerk**: Verify RLS (Row Level Security) policies and frontend vs backend validation consistency.

### 3. Common Auth Flaws
- **Credential Stuffing**: Automated testing of leaked credentials against login endpoints.
- **Brute Force**: Evaluating lockout policies and MFA effectiveness.
- **Insecure Password Reset**: Testing for predictable tokens or host header injection in reset links.

## Remediation Patterns

- **MFA Enforcement**: Require Multi-Factor Authentication for all administrative and user accounts.
- **Least Privilege**: Implement RBAC (Role-Based Access Control) with minimal necessary permissions.
- **Secure Storage**: Use salted, slow hashing algorithms (Argon2, bcrypt) for credentials.
- **Rotate Secrets**: Regularly rotate machine account passwords and service account keys.
