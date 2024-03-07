## [1.5.6](https://github.com/joaotmdias/react-a11y-tools/compare/v1.5.5...v1.5.6) (2023-10-27)

## 1.6.1

### Patch Changes

- [#5](https://github.com/JoaoTMDias/frontend/pull/5) [`1a69d5f`](https://github.com/JoaoTMDias/frontend/commit/1a69d5f717a6faaf079ee1aa0593afa5631b5fef) Thanks [@JoaoTMDias](https://github.com/JoaoTMDias)! - - Adds jsdoc to helpers in "js-utilities".
  - "getBrowserTimeZone" is also exported as "getBrowserTimezone"
- Updated dependencies [[`1a69d5f`](https://github.com/JoaoTMDias/frontend/commit/1a69d5f717a6faaf079ee1aa0593afa5631b5fef)]:
  - @jtmdias/js-utilities@1.6.3

## 1.6.0

### Minor Changes

- [`2c95bce`](https://github.com/JoaoTMDias/frontend/commit/2c95bce49bc50a7a382570273dde5618d263013e) Thanks [@JoaoTMDias](https://github.com/JoaoTMDias)! - Added new cypress command pressUntil and fixed flakyness on "roving-tab-index" tests

### Bug Fixes

- Removed nullish coalescing operators ([64f0670](https://github.com/joaotmdias/react-a11y-tools/commit/64f0670590c1579bad59f6a56ef5fcad9e4bca39))

## [1.5.5](https://github.com/joaotmdias/react-a11y-tools/compare/v1.5.4...v1.5.5) (2023-10-27)

### Bug Fixes

- changed dependencies supported versions ([aa4fd8f](https://github.com/joaotmdias/react-a11y-tools/commit/aa4fd8fa340e5422e41b6f52d165c6c63adc882b))

## [1.5.4](https://github.com/joaotmdias/react-a11y-tools/compare/v1.5.3...v1.5.4) (2023-09-20)

### Bug Fixes

- fixed an issue where compareDocumentPosition would fail to load ([#4](https://github.com/joaotmdias/react-a11y-tools/issues/4)) ([fc65b8a](https://github.com/joaotmdias/react-a11y-tools/commit/fc65b8ad4f7663c000689970e2ba27212b93ed6a))

## [1.5.3](https://github.com/joaotmdias/react-a11y-tools/compare/v1.5.2...v1.5.3) (2023-06-19)

### Bug Fixes

- **build:** changed esmodules export to mjs ([7ab67df](https://github.com/joaotmdias/react-a11y-tools/commit/7ab67dfdc2addf750ccadf992d351cdbddb08eb9))

## [1.5.2](https://github.com/joaotmdias/react-a11y-tools/compare/v1.5.1...v1.5.2) (2023-06-06)

### Bug Fixes

- **useRover:** Removed console.log ([6955c7c](https://github.com/joaotmdias/react-a11y-tools/commit/6955c7c6070d174bcb81554e4fb58aa5a528bd74))

## [1.5.1](https://github.com/joaotmdias/react-a11y-tools/compare/v1.5.0...v1.5.1) (2023-06-06)

### Bug Fixes

- **useRover:** adds support for multiple options type ([#3](https://github.com/joaotmdias/react-a11y-tools/issues/3)) ([09ed05d](https://github.com/joaotmdias/react-a11y-tools/commit/09ed05d12898f0d321acd3ec018a8693c1660280))

# [1.5.0](https://github.com/joaotmdias/react-a11y-tools/compare/v1.4.0...v1.5.0) (2023-06-05)

### Features

- **useRover:** Allow scroll to be locked on rover ([#2](https://github.com/joaotmdias/react-a11y-tools/issues/2)) ([6de6a80](https://github.com/joaotmdias/react-a11y-tools/commit/6de6a8099d47fe16f770c0e337bd41c64a263772))

# 1.0.0 (2023-05-31)

### Bug Fixes

- Add @testing-library/jest-dom to tsconfig ([c1371ce](https://github.com/joaotmdias/react-a11y-tools/commit/c1371ce94af0f0fcf8a96e174df9d22c21404e93))
- Add src as root on jest config file ([9fd11ba](https://github.com/joaotmdias/react-a11y-tools/commit/9fd11bacb91478282b517593d2ff3654cb83662a))
- Changed color palette ([ef1117d](https://github.com/joaotmdias/react-a11y-tools/commit/ef1117d71a5464c70b1c477f2ed99468771bc930))
- **focus manager:** Couldn't restore focus ([288d529](https://github.com/joaotmdias/react-a11y-tools/commit/288d5293709475653c191d8b76e9a004c2559bd2))

### Features

- Add support for prefix on the useAutoId ([#12](https://github.com/joaotmdias/react-a11y-tools/issues/12)) ([3612a30](https://github.com/joaotmdias/react-a11y-tools/commit/3612a303e9cfc52a06e07fbeca0e55782225af73))
- Add support for useFocusVisible and useFocusWithin hooks ([7277e5b](https://github.com/joaotmdias/react-a11y-tools/commit/7277e5bc280ac1af02b6a282e586ffa2ff9c883a))
- Added display names and documentation examples ([ff3d6cc](https://github.com/joaotmdias/react-a11y-tools/commit/ff3d6cc94ae23eea0dbe179bc169cd4680dce568))
- **Heading:** Added support for parent Refs ([9c0868a](https://github.com/joaotmdias/react-a11y-tools/commit/9c0868aa317aba6b013fe7bac57c13d26f9b4abf))
- Import and configure lib ([4a697a5](https://github.com/joaotmdias/react-a11y-tools/commit/4a697a5dcf7a6afb63c7d9f984665921468cfe7b))

# 1.0.0 (2023-05-31)

### Bug Fixes

- Add @testing-library/jest-dom to tsconfig ([c1371ce](https://github.com/joaotmdias/react-a11y-tools/commit/c1371ce94af0f0fcf8a96e174df9d22c21404e93))
- Add src as root on jest config file ([9fd11ba](https://github.com/joaotmdias/react-a11y-tools/commit/9fd11bacb91478282b517593d2ff3654cb83662a))
- Changed color palette ([ef1117d](https://github.com/joaotmdias/react-a11y-tools/commit/ef1117d71a5464c70b1c477f2ed99468771bc930))
- **focus manager:** Couldn't restore focus ([288d529](https://github.com/joaotmdias/react-a11y-tools/commit/288d5293709475653c191d8b76e9a004c2559bd2))

### Features

- Add support for prefix on the useAutoId ([#12](https://github.com/joaotmdias/react-a11y-tools/issues/12)) ([3612a30](https://github.com/joaotmdias/react-a11y-tools/commit/3612a303e9cfc52a06e07fbeca0e55782225af73))
- Add support for useFocusVisible and useFocusWithin hooks ([7277e5b](https://github.com/joaotmdias/react-a11y-tools/commit/7277e5bc280ac1af02b6a282e586ffa2ff9c883a))
- **Heading:** Added support for parent Refs ([9c0868a](https://github.com/joaotmdias/react-a11y-tools/commit/9c0868aa317aba6b013fe7bac57c13d26f9b4abf))
- Import and configure lib ([4a697a5](https://github.com/joaotmdias/react-a11y-tools/commit/4a697a5dcf7a6afb63c7d9f984665921468cfe7b))
