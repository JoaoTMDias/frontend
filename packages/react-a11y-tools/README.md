<div align="center">

# @jtmdias/react-a11y-tools

Accessible React primitives for focus management, keyboard navigation, live announcements, and semantic content.

[Documentation](https://joaotmdias.github.io/frontend/docs/react-a11y-tools/introduction) · [npm](https://www.npmjs.com/package/@jtmdias/react-a11y-tools) · [Report an issue](https://github.com/JoaoTMDias/frontend/issues)

</div>

[![CI](https://github.com/JoaoTMDias/frontend/actions/workflows/pipeline.yaml/badge.svg?branch=main)](https://github.com/JoaoTMDias/frontend/actions/workflows/pipeline.yaml)
[![npm version](https://img.shields.io/npm/v/@jtmdias/react-a11y-tools.svg?style=flat-square)](https://www.npmjs.com/package/@jtmdias/react-a11y-tools)
[![npm downloads](https://img.shields.io/npm/dm/@jtmdias/react-a11y-tools.svg?style=flat-square)](https://www.npmjs.com/package/@jtmdias/react-a11y-tools)
[![MIT license](https://img.shields.io/npm/l/@jtmdias/react-a11y-tools.svg?style=flat-square)](./LICENSE)

## About

`@jtmdias/react-a11y-tools` provides unstyled React components, hooks, and helpers for common accessibility patterns. It handles behavior such as focus containment, roving tabindex, route and status announcements, skip links, and heading structure while leaving markup composition and visual design in your hands.

The package follows patterns from the [WAI-ARIA Authoring Practices Guide](https://www.w3.org/WAI/ARIA/apg/), but it is not a substitute for testing your application with a keyboard and assistive technologies.

This package is maintained in the [`JoaoTMDias/frontend`](https://github.com/JoaoTMDias/frontend) monorepo.

## Installation

```sh
npm install @jtmdias/react-a11y-tools
```

React 18 or newer and React DOM 18 or newer are required as peer dependencies.

## Usage

Import the tools you need from the package entry point:

```tsx
import {
	FocusManager,
	MessagesAnnouncer,
	SkipLinks,
	VisuallyHidden,
	useMessagesAnnouncer,
} from "@jtmdias/react-a11y-tools";
```

For detailed setup, API guidance, and examples, see the [package documentation](https://joaotmdias.github.io/frontend/docs/react-a11y-tools/introduction).

## What is included

- Announcements: `RouteAnnouncer`, `MessagesAnnouncer`, and `useMessagesAnnouncer`
- Focus management: `FocusManager`, `useFocusManager`, and focus helpers
- Roving tabindex: `RoverProvider`, `RoverConsumer`, `useRover`, and `useFocus`
- Content and navigation: `SkipLinks`, `Heading`, `Level`, and `VisuallyHidden`
- Interaction hooks: `useDisableEvent`, `useFocusVisible`, `useFocusWithin`, and `useTabbable`
- Keyboard testing: `KeyboardOnly`

## Development

The repository uses npm workspaces. From the monorepo root, install dependencies and run package commands with:

```sh
npm install
npm run build --workspace @jtmdias/react-a11y-tools
npm test --workspace @jtmdias/react-a11y-tools
```

Useful test commands:

```sh
# Open Cypress component tests
npm run test:open --workspace @jtmdias/react-a11y-tools

# Run Cypress component tests headlessly
npm run test:run --workspace @jtmdias/react-a11y-tools

# Run integration tests headlessly
npm run test:integration --workspace @jtmdias/react-a11y-tools
```

See the package [contribution guide](./CONTRIBUTING.md) before submitting a change.

## Issues and feature requests

Use the monorepo issue tracker to [report a bug](https://github.com/JoaoTMDias/frontend/issues/new?labels=bug) or [request a feature](https://github.com/JoaoTMDias/frontend/issues/new?labels=enhancement).

## License

Released under the [MIT License](./LICENSE).
