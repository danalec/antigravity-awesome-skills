---
name: React Architecture Suite
description: Unified suite for modern React (v19+) development. Covers Server Components, Server Actions, clean architecture, cross-platform Native patterns, and advanced state management.
risk: safe
source: community
---

# React Architecture Suite

A definitive guide for building and maintaining production-grade React applications across Web and Mobile. This suite merges patterns for component composition, state management, hooks, and architectural scalability.

## When to Use

- Use for all React development tasks, including Next.js (App Router), Vite-based SPAs, and React Native.
- Active when refactoring legacy Class components to Hooks or moving to Server Components.
- Use to design state management architectures (Zustand, React Query, Redux Toolkit).

## Core Capabilities

### 1. Modern Component Patterns
- **Server vs Client**: Default to Server Components for data fetching; use Client Components (`'use client'`) for interactivity/hooks.
- **Composition over Inheritance**: Use the `children` prop and specialized components to build flexible UIs.
- **Custom Hooks**: Isolate business logic into reusable, testable hooks (e.g., `useAuth`, `useSubmit`).

### 2. Scalable State Management
- **URL as Truth**: Prefer search params for UI state (pagination, filters).
- **Server State**: Use `React Query` (TanStack Query) for caching, synchronization, and optimistic updates.
- **Global Store**:
  - `Zustand`: Simple, high-performance atomic state.
  - `Redux Toolkit`: For complex, highly structured enterprise state.

### 3. Architecture & Reliability
- **Feature-Based Folders**: Organize by domain (e.g., `features/auth`, `features/billing`) rather than just `components/`.
- **Zod Validation**: Use Zod for runtime schema validation of API responses and form inputs.
- **Error Boundaries**: Implement granular error boundaries to prevent app-wide failures.

### 4. Cross-Platform (Native)
- **Shared Logic**: Isolate business logic into framework-agnostic services to share between Web and React Native.
- **Primitive Mapping**: Use appropriate primitives for each target (e.g., `div` vs `View`) while sharing core state logic.

## Patterns

- **Compound Components**: Build complex UI components (e.g., Select, Accordion) that share state implicitly.
- **Render Props / HOCs**: Use sparingly; prefer Hooks for most logic reuse.
- **Clean Architecture**: Decouple the UI layer from infrastructure and domain logic.
