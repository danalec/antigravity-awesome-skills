---
name: Angular Enterprise Suite
description: Elite Angular (v20+) development suite. Covers Signals, Standalone Components, Zoneless architecture, RxJS/Signal state management, and enterprise migration strategies.
risk: safe
source: self
---

# Angular Enterprise Suite

A consolidated guide for building and maintaining modern, high-performance Angular applications. This suite merges patterns for component architecture, state management, performance optimization, and legacy modernization.

## When to Use

- Use for all Angular-related tasks, including new feature development, performance audits, and state management architectural decisions.
- Active when migrating from AngularJS to modern Angular (v13+ to v20+).
- Use to implement Signals-based reactive patterns or complex RxJS data streams.

## Core Capabilities

### 1. Modern Architecture (v19-20+)
- **Standalone Everything**: Use standalone components, directives, and pipes as the default.
- **Signals Core**: Prefer `signal()`, `computed()`, and `effect()` for local state.
- **Zoneless**: Favor zoneless change detection using `provideExperimentalZonelessChangeDetection()`.
- **Hydration**: Implement full-client hydration for SSR/SSG.

### 2. Reactive State Management
- **Signal Services**: Use Signals for synchronous state that needs to be consumed in templates.
- **RxJS Integration**: Use RxJS for asynchronous event streams and complex side effects (e.g., `toSignal`, `toObservable`).
- **Store Selection**:
  - `ComponentStore`: For local component-tree state.
  - `NgRx Global Store`: Only for truly global, cross-feature state.

### 3. Performance & Design Systems
- **OnPush Always**: Use `ChangeDetectionStrategy.OnPush` to minimize re-renders.
- **Control Flow**: Use `@if`, `@for`, `@switch` for optimal template performance.
- **Deferrable Views**: Leverage `@defer` for automatic code splitting of non-critical UI.

### 4. Modernization & Migration
- **Incremental Upgrades**: Use hybrid mode (ngUpgrade) for AngularJS migrations.
- **Component Bridging**: Wrap legacy components in modern shells to enable incremental rewrites.

## Patterns

- **Data Access Layer**: Isolate API calls into specific `DataService` classes with typed responses.
- **Feature Modules**: Organize code by domain feature rather than technical type (Core, Shared, Features).
- **Barrel Exports**: Use `index.ts` to manage public APIs for libraries and features.
