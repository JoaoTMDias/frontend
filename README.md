# Frontend Monorepo

A collection of JavaScript and React libraries focused on utilities, accessibility, and developer tools.

[![MIT License][license-badge]][license]
[![PRs Welcome][prs-badge]][prs]

## 📦 Packages

This monorepo contains the following packages:

### [@jtmdias/js-utilities](packages/js-utilities)

A collection of JavaScript utilities, functions, and React hooks for sharing across projects.
[![npm version](https://img.shields.io/npm/v/@jtmdias/js-utilities.svg?style=flat-square)](https://www.npmjs.com/package/@jtmdias/js-utilities)

### [@jtmdias/react-a11y-tools](packages/react-a11y-tools)

A React component library focused on making accessibility implementation easier in React applications.
[![npm version](https://img.shields.io/npm/v/@jtmdias/react-a11y-tools.svg?style=flat-square)](https://www.npmjs.com/package/@jtmdias/react-a11y-tools)

### [@jtmdias/merge-coverage](packages/merge-coverage)

A CLI tool for combining code coverage from different test runners (Jest, Vitest, Cypress).
[![npm version](https://img.shields.io/npm/v/@jtmdias/merge-coverage.svg?style=flat-square)](https://www.npmjs.com/package/@jtmdias/merge-coverage)

## 📚 Documentation

Comprehensive documentation for all packages is available at [https://joaotmdias.github.io/frontend/](https://joaotmdias.github.io/frontend/)

## 🚀 Getting Started

### Prerequisites

-   Node.js >= 18
-   npm or yarn

### Installation

1. Clone the repository:

```bash
git clone https://github.com/joaotmdias/frontend.git
cd frontend
```

2. Install dependencies:

```bash
npm install
```

3. Build all packages:

```bash
npm run build
```

## 🧪 Testing

Each package contains its own test suite. To run all tests across all packages:

```bash
npm test
```

For package-specific tests, navigate to the package directory and run:

```bash
cd packages/<package-name>
npm test
```

## 🤝 Contributing

Contributions are welcome! Please read our [Contributing Guide](CONTRIBUTING.md) for details on our code of conduct and the process for submitting pull requests.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'feat: add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

Special thanks to all [contributors](https://github.com/joaotmdias/frontend/graphs/contributors) who have helped shape and maintain this project.

[license-badge]: https://img.shields.io/npm/l/@jtmdias/js-utilities.svg?style=flat-square
[license]: https://github.com/joaotmdias/frontend/blob/main/LICENSE
[prs-badge]: https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square
[prs]: http://makeapullrequest.com
