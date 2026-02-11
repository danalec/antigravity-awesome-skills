---
name: Infrastructure-as-Code (IaC) Suite
description: Unified suite for infrastructure automation using Terraform and Ansible. Covers module design, state management, and production-grade provisioning across multiple cloud providers.
risk: safe
source: community
---

# Infrastructure-as-Code (IaC) Suite

A consolidated guide for automating infrastructure provisioning and configuration management. This suite merges patterns for Terraform module development with Ansible-driven system configuration into a unified automation framework.

## When to Use

- Use when provisioning cloud resources (AWS, Azure, GCP) or on-premises infrastructure.
- Active when building reusable Terraform modules or managing application configuration with Ansible.
- Use to audit infrastructure-as-code for security, maintainability, and scalability.

## Core Capabilities

### 1. Terraform Module Design
- **Reusability**: Build modular, parameterizable code that can be shared across multiple environments.
- **State Management**: Use remote backends (e.g., S3, Terraform Cloud) with state locking to prevent concurrency issues.
- **Provider Parity**: Maintain consistent patterns across different cloud providers using official provider modules.

### 2. Configuration Management (Ansible)
- **Playbook Design**: Use roles and collections to organize configuration tasks by domain.
- **Safe Execution**: Use `--check` and `--diff` flags for dry runs before applying changes.
- **Inventory Management**: Use dynamic inventories to automatically discover and manage cloud instances.

### 3. CI/CD Integration
- **Plan-Apply Workflow**: Enforce external review of Terraform plans before application.
- **Security Scanning**: Integrate tools like `tfsec` or `checkov` to find misconfigurations in IaC templates.
- **Automated Testing**: Use `terratest` or `molecule` to verify that infrastructure and configuration function as expected.

## Patterns

- **Least Privilege Provisioning**: Use dedicated service accounts with minimal necessary permissions for IaC execution.
- **Tagging Discipline**: Implement a mandatory tagging strategy for all resources to enable cost tracking and ownership.
- **Version Pinning**: Always pin provider and module versions to ensure reproducible deployments.
