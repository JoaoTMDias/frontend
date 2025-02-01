# [1.5.0](https://github.com/JoaoTMDias/js-utilities/compare/v1.4.0...v1.5.0) (2024-02-21)

## 3.1.0

### Minor Changes

- [#18](https://github.com/JoaoTMDias/frontend/pull/18) [`cb984fb`](https://github.com/JoaoTMDias/frontend/commit/cb984fbf65d7e8e8200d2b158659555b61f5a153) Thanks [@JoaoTMDias](https://github.com/JoaoTMDias)! - Bumped dependencies to their latest version

## 3.0.0

### Major Changes

- [#16](https://github.com/JoaoTMDias/frontend/pull/16) [`90fbf92`](https://github.com/JoaoTMDias/frontend/commit/90fbf922a9e2d8c868e3d6e7967bed24a46640f3) Thanks [@JoaoTMDias](https://github.com/JoaoTMDias)! - Changed minimum node version to 20 and npm to 10 on all packages

## 2.2.0

### Minor Changes

- [`4cc937a`](https://github.com/JoaoTMDias/frontend/commit/4cc937aebedd09610cfac2e5daa155bcabccc78c) - WHY

  - Removed duplicated code and documentation from @jtmdias/react-a11y-tools
  - Sets the minimum React version to 18.

  WHAT

  - There was duplicated code on @jtmdias/react-a11y-tools that already existed on @jtmdias/js-utilities
  - The React version was still on 16

## 2.1.1

### Patch Changes

- [`e9aa988`](https://github.com/JoaoTMDias/frontend/commit/e9aa988fb0050fe901750993c39fe308e84c7fae) - Fixed the field value in the 'repo' section of package.json

## 2.1.0

### Minor Changes

- [#12](https://github.com/JoaoTMDias/frontend/pull/12) [`b44bf4c`](https://github.com/JoaoTMDias/frontend/commit/b44bf4c32ea9b474506a97f6090b5c0b0dead6ad) Thanks [@JoaoTMDias](https://github.com/JoaoTMDias)! - Adds support for generating random ids using crypto.randomUUID

## 2.0.1

### Patch Changes

- [#10](https://github.com/JoaoTMDias/frontend/pull/10) [`b28a5ae`](https://github.com/JoaoTMDias/frontend/commit/b28a5ae4b355fbe621a2b452a690050f649bfeb9) Thanks [@JoaoTMDias](https://github.com/JoaoTMDias)! - Added minor react version to 18 and added also react as an optional dependency

## 2.0.0

### Major Changes

- [`c5c0b30`](https://github.com/JoaoTMDias/frontend/commit/c5c0b30996c382a5aff6c30ba01a06d37b7b79dc) - Features

  - clone-valid-element: added tests and improved jsdocs
  - cookies: added tests and improved jsdoc
  - useControlledState: added tests and improved jsdoc
  - useEnsuredForwardedRef: added tests and improved jsdoc and docs
  - usePageVisibility: added tests
  - usePermission: added tests
  - useIntersection: adds new hook
  - package.json: added typesVersions entry
  - useAutoId: Add support for react 18 useId hook
  - bundle: split between pure javascript and react modules
  - bundle: changed config to support preserving modules

  Bug Fixes

  - at: improved types
  - get: improved types
  - getValue: improved types
  - package.json: wrong main, module and types folders

## 1.6.3

### Patch Changes

- [#5](https://github.com/JoaoTMDias/frontend/pull/5) [`1a69d5f`](https://github.com/JoaoTMDias/frontend/commit/1a69d5f717a6faaf079ee1aa0593afa5631b5fef) Thanks [@JoaoTMDias](https://github.com/JoaoTMDias)! - - Adds jsdoc to helpers in "js-utilities".
  - "getBrowserTimeZone" is also exported as "getBrowserTimezone"

## 1.6.2

### Patch Changes

- [`be66841`](https://github.com/JoaoTMDias/frontend/commit/be66841cddfec5cfb6e48cb1e26593de1dd21c34) Thanks [@JoaoTMDias](https://github.com/JoaoTMDias)! - Added prerelease script to build before publishing to npm

## 1.6.1

### Patch Changes

- [`3a43ef0`](https://github.com/JoaoTMDias/frontend/commit/3a43ef05f44db4b8e9a9f01f95795b5f652d8c59) Thanks [@JoaoTMDias](https://github.com/JoaoTMDias)! - Added missing dist folder (wrong changesets configuration)

## 1.6.0

### Minor Changes

- [`b1e8dad`](https://github.com/JoaoTMDias/frontend/commit/b1e8dadd6f007cb7303752953ab54ec3ad59bd3a) Thanks [@JoaoTMDias](https://github.com/JoaoTMDias)! - Added new draw function that randomly picks an item from a list.

### Features

- add formatNumber function ([32c5474](https://github.com/JoaoTMDias/js-utilities/commit/32c5474932f3b8b675482ae43750b30024119686))
- add getValue function ([9318890](https://github.com/JoaoTMDias/js-utilities/commit/9318890982bd52016dea83f76d6c0c231694fdd0))
- add shortenNumber function ([870b0ac](https://github.com/JoaoTMDias/js-utilities/commit/870b0acf16ede77d31d8de2d6b0fbf5da3d3503b))
- add stripUnit function ([0b655f2](https://github.com/JoaoTMDias/js-utilities/commit/0b655f22fc3d50b27ce1402b503de7c36fdc8de6))
- Added at lodash utility ([34c5243](https://github.com/JoaoTMDias/js-utilities/commit/34c5243cda35f03e01aed478838e729189b7b3c7))
- added isPlainObject utility ([dcb9912](https://github.com/JoaoTMDias/js-utilities/commit/dcb9912cabc769e1d990467ecb5f3cfab0f27d30))
- added size limit verification on post build ([9418475](https://github.com/JoaoTMDias/js-utilities/commit/9418475da111cc0bd5290fb8fea3206743b08137))
- Added useScript hook ([6d953cc](https://github.com/JoaoTMDias/js-utilities/commit/6d953cc057a8339bc51ff797eaa6ee4865079f2a))
- improved code and docs for classNames utility ([a661482](https://github.com/JoaoTMDias/js-utilities/commit/a661482a29f0f43ceb3fbc825be3e2608b18eec9))

# [1.4.0](https://github.com/JoaoTMDias/js-utilities/compare/v1.3.0...v1.4.0) (2024-02-19)

### Features

- added more lodash replacements ([70430f7](https://github.com/JoaoTMDias/js-utilities/commit/70430f71770dbe9e8dd59c3783391b748dccad0d))
- added new generic types ([bcd3271](https://github.com/JoaoTMDias/js-utilities/commit/bcd327100c274b5a61fd63f849fc6d4e44c1db5b))
- Improved uniq function typing ([065b669](https://github.com/JoaoTMDias/js-utilities/commit/065b669105cf3d7b9118512dd622bef6963483c7))
- migrated to vite 5 and cypress 13 ([022b9fa](https://github.com/JoaoTMDias/js-utilities/commit/022b9fa0269d776bde9313de24c235749afb2a63))
- moved utils into the functions folder ([30bba7b](https://github.com/JoaoTMDias/js-utilities/commit/30bba7baa00adaf55a5dae106ec427e5a62ad862))
- split lodash into separate files ([f1c5a6d](https://github.com/JoaoTMDias/js-utilities/commit/f1c5a6d008c5b35bb1fa8e98fccd4a038ac4a019))

# [1.3.0](https://github.com/JoaoTMDias/js-utilities/compare/v1.2.0...v1.3.0) (2023-06-14)

### Features

- **useCopyToClipboard:** Adds a new hook ([9747255](https://github.com/JoaoTMDias/js-utilities/commit/9747255efb3c89b7d645f9179ed0a14f9c0554a4))
- **useEffectOnce:** Adds a new hook ([c10c2b9](https://github.com/JoaoTMDias/js-utilities/commit/c10c2b9ff9c2336242c9a8db9b3065149102156e))
- **useLifecycle:** Adds a new hook ([cc529e9](https://github.com/JoaoTMDias/js-utilities/commit/cc529e98251966346fd0c72ff24aa4fbcb85c573))
- **useMount:** Adds a new hook ([eb5ab7d](https://github.com/JoaoTMDias/js-utilities/commit/eb5ab7d7acadb43426d9c99568c6f2c60856658d))
- **useMountedState:** Adds a new hook ([4d18008](https://github.com/JoaoTMDias/js-utilities/commit/4d1800896bcf90ae1ec598e3fddd611230fd62ab))

# [1.2.0](https://github.com/JoaoTMDias/js-utilities/compare/v1.1.0...v1.2.0) (2023-03-24)

### Features

- **useClickOutside:** add custom hook ([212c633](https://github.com/JoaoTMDias/js-utilities/commit/212c63356b636bc869da716b622b2ae97ad5b9b0))
- **useNetworkState:** :sparkles: add custom hook to track the state of browser's network connection ([05dac4b](https://github.com/JoaoTMDias/js-utilities/commit/05dac4bcbcf768332d064a91808ee0ece83761da))
- **usePageVisibility:** add new custom hook ([1762b62](https://github.com/JoaoTMDias/js-utilities/commit/1762b6204ef24a49a6c3bf517a3549f3a5a80058))
- **usePermission:** :sparkles: add custom hook to handle browser permissions ([4f6a61e](https://github.com/JoaoTMDias/js-utilities/commit/4f6a61e2a0c7fb6a627fa2791ee095ec6de866fa))

# CHANGELOG

The changelog is automatically updated using
[semantic-release](https://github.com/semantic-release/semantic-release). You
can see it on the [releases page](../../releases).

# [1.1.0](https://github.com/JoaoTMDias/js-utilities/compare/v1.0.5...v1.1.0) (2023-03-09)

### Bug Fixes

- wrong step name ([1a21e32](https://github.com/JoaoTMDias/js-utilities/commit/1a21e32cd3471ea59f34afebc8289a0f25655162))

### Features

- **classNames:** added utility ([56fe99b](https://github.com/JoaoTMDias/js-utilities/commit/56fe99b0ff1a319fce8e1083b7c012cdc27d874c))
- **usePrevious:** added custom hook ([e341532](https://github.com/JoaoTMDias/js-utilities/commit/e3415325efaf570d8cfc51a3849219d27823343c))

## [1.0.5](https://github.com/JoaoTMDias/js-utilities/compare/v1.0.4...v1.0.5) (2023-03-08)

### Bug Fixes

- issue with release commit on github ([6608552](https://github.com/JoaoTMDias/js-utilities/commit/66085522a03d5065d8dba604d943d5c4b2d36d4d))

## [1.0.4](https://github.com/JoaoTMDias/js-utilities/compare/v1.0.3...v1.0.4) (2023-03-08)

### Bug Fixes

- removed dist folder and changed docs ([499f3c3](https://github.com/JoaoTMDias/js-utilities/commit/499f3c3db8b7a14d7ceccd0ccf5d45d149dfde89))

## [1.0.2](https://github.com/JoaoTMDias/js-utilities/compare/v1.0.1...v1.0.2) (2023-03-08)

### Bug Fixes

- added missing script ([ada2fe2](https://github.com/JoaoTMDias/js-utilities/commit/ada2fe2d6232d47bfa13ae63d7c9cd5b292d230f))
- changed publish step on github action ([a6e5f9c](https://github.com/JoaoTMDias/js-utilities/commit/a6e5f9c4dd4d3f8274767c5ef127ceb301d1ce40))
- dist folder was not being added to package ([74f099d](https://github.com/JoaoTMDias/js-utilities/commit/74f099d322e57ad80066b73df3cda5464909398e))
- removed dist from being generated into repo ([196f444](https://github.com/JoaoTMDias/js-utilities/commit/196f444d36f23c41a0589e422e2340c8cffa13f2))

## [1.0.2](https://github.com/JoaoTMDias/js-utilities/compare/v1.0.1...v1.0.2) (2023-03-08)

### Bug Fixes

- added missing script ([ada2fe2](https://github.com/JoaoTMDias/js-utilities/commit/ada2fe2d6232d47bfa13ae63d7c9cd5b292d230f))
- changed publish step on github action ([a6e5f9c](https://github.com/JoaoTMDias/js-utilities/commit/a6e5f9c4dd4d3f8274767c5ef127ceb301d1ce40))
- dist folder was not being added to package ([74f099d](https://github.com/JoaoTMDias/js-utilities/commit/74f099d322e57ad80066b73df3cda5464909398e))

## [1.0.1](https://github.com/JoaoTMDias/js-utilities/compare/v1.0.0...v1.0.1) (2023-03-08)

### Bug Fixes

- changed package name ([57168eb](https://github.com/JoaoTMDias/js-utilities/commit/57168ebfd67eec64c5a525fba6fa2514c240df5a))

# 1.0.0 (2023-03-08)

### Bug Fixes

- publish.yml ([def3b9c](https://github.com/JoaoTMDias/js-utilities/commit/def3b9c8aab55f4ee3098157c443155584368fcf))

### Features

- added missing packages ([f748149](https://github.com/JoaoTMDias/js-utilities/commit/f748149e398ca2cb409b4e254a1b7845e264eae5))
- changed name of github token ([7ab1624](https://github.com/JoaoTMDias/js-utilities/commit/7ab1624f15f508da4666eb410f980f1557328fe2))
- changed to package-lock.json ([311eea1](https://github.com/JoaoTMDias/js-utilities/commit/311eea1059c7f8c059bed2cd8e3dd2283947863c))
- configured publish.yml file ([78907d8](https://github.com/JoaoTMDias/js-utilities/commit/78907d8357a84f6365905935147dde37635c91ae))
- **releases:** setup semantic-release ([e7c1217](https://github.com/JoaoTMDias/js-utilities/commit/e7c121721ac0baeeb7787b38e9f4f1cb92608ef8))
- removed node 16 from build script ([6a45d60](https://github.com/JoaoTMDias/js-utilities/commit/6a45d6007be7d83d158c9278e6d7b042ad446b0d))
- trigger semantic release ([26c388b](https://github.com/JoaoTMDias/js-utilities/commit/26c388b28d1a3e63333cacf0fbfc2f98295da48d))
