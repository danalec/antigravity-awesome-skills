---
name: Cloud Security Playbook
description: Comprehensive playbook for securing and assessing cloud infrastructure (AWS, Azure, GCP) and containerized environments. Covers IAM exploitation, metadata attacks, and serverless security.
risk: offensive
source: community
---

# Cloud Security Playbook

> [!WARNING]
> **AUTHORIZED USE ONLY**: This skill is for authorized security testing and research purposes only. Use of this skill for unauthorized activities is strictly prohibited.

A consolidated guide for identifying and exploiting vulnerabilities in modern cloud environments and container orchestration platforms. This playbook merges specific techniques for AWS/Azure/GCP penetration testing with container security best practices.

## When to Use

- Use when performing security audits on AWS, Azure, or GCP infrastructure.
- Active during Kubernetes (K8s) security assessments or container audits.
- Use to test for IAM misconfigurations, S3 bucket exposure, and serverless flaws.
- Relevant for assessing the security of CI/CD pipelines and infrastructure-as-code (IaC).

## Core Assessment Areas

### 1. IAM & Persistence
- **Enumeration**: Use `Pacu` or `CloudHunter` to identify user permissions and potential privilege escalation paths.
- **Credential Harvesting**: Search for hardcoded keys in user data, Lambda environment variables, and private Git repos.
- **Persistence**: Create backdoored IAM roles or add unauthorized SSH keys to EC2 instances.

### 2. Compute & Compute-less (AWS/Azure)
- **Lambda/Serverless**: Test for SSRF in functions, insecure environment variables, and lack of function-level isolation.
- **Meta-data SSRF**: Target the IMDSv1 service (`169.254.169.254`) on EC2 to pull session tokens.
- **Container Escape**: Test for misconfigured Docker sockets or shared namespaces in Kubernetes pods.

### 3. Storage & Databases (S3/RDS)
- **Public Buckets**: Scan for publicly accessible S3 buckets or Azure Blobs using automated tools.
- **Snapshot Exposure**: Identify publicly shared EBS or RDS snapshots containing sensitive data.

### 4. Kubernetes (K8s) Security
- **RBAC Audit**: Find over-privileged service accounts using `rbac-lookup` or `kubescape`.
- **Policy Evasion**: Test if NetworkPolicies or PodSecurityPolicies can be bypassed.

## Remediation Patterns

- **Enable IMDSv2**: Force the use of the session-oriented Metadata Service to prevent SSRF-based token theft.
- **Zero Trust IAM**: Implement least-privilege IAM policies with condition keys (e.g., `aws:SourceIp`).
- **Secret Management**: Use managed services like AWS Secrets Manager or HashiCorp Vault instead of environment variables.
- **Shift-Left Security**: Integrate IaC scanning (Checkov, Terrascan) into CI/CD pipelines.
