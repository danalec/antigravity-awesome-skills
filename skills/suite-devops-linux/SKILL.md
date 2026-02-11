---
name: DevOps & Linux Shell Suite
description: Unified suite for high-performance Linux administration, defensive shell scripting, and container orchestration. Merges best practices for Bash, POSIX shell, Docker, and Kubernetes management.
risk: safe
source: community
---

# DevOps & Linux Shell Suite

A consolidated guide for managing Linux environments and orchestrating containerized applications with a focus on safety, portability, and scale. This suite merges defensive scripting patterns with modern infrastructure-as-code principles for Docker and Kubernetes.

## When to Use

- Use for all Linux-related tasks, including system administration, shell scripting, and CI/CD pipeline development.
- Active when containerizing applications or managing Kubernetes manifests and architectures.
- Use to audit or refactor shell scripts for production readiness and fault tolerance.

## Core Capabilities

### 1. Defensive Shell Scripting (Bash/POSIX)
- **Safety First**: Always use `set -euo pipefail` in Bash scripts to catch errors early.
- **Portability**: Prefer POSIX-compliant syntax unless Bash-specific features (like arrays or associative arrays) are strictly required.
- **Static Analysis**: Use `shellcheck` to identify common pitfalls and security vulnerabilities in scripts.

### 2. Linux System Administration
- **Privilege Management**: Use `sudo` with granular permissions; avoid running as root where possible.
- **Process Orchestration**: Use `systemd` or `init` systems for managing persistent services.
- **Troubleshooting**: Use standard tools (`top`, `htop`, `netstat`, `journalctl`) for system performance and error diagnosis.

### 3. Container Management (Docker)
- **Image Optimization**: Use multi-stage builds and minimal base images (Alpine, Distroless) to reduce attack surface and size.
- **Runtime Safety**: Avoid running containers as root; use `USER` directive in Dockerfiles.
- **Ephemeral Storage**: Leverage volumes for persistent data and keep container layers immutable.

### 4. Kubernetes (K8s) Orchestration
- **Declarative Manifests**: Use `YAML` for all infrastructure definitions; prefer `Kustomize` or `Helm` for configuration management.
- **Reliability**: Implement Readiness and Liveness probes for all deployed services.
- **Security Policies**: Enforce `NetworkPolicies` and `PodSecurityPolicies` (or Admission Controllers) to harden the cluster.

## Patterns

- **IDempotency**: Design scripts and deployments to be re-run safely without side effects.
- **Logging**: Ensure all automated tasks produce machine-readable logs with timestamps and exit statuses.
- **Air-Gapped Ops**: Design for environments with restricted internet access by pre-pulling images and dependencies.
