---
"@jtmdias/react-a11y-tools": patch
---

Fix package export metadata for TypeScript resolution in modern ESM/CJS consumers by exposing the generated declaration file via the root export map. This resolves missing declaration errors for @jtmdias/react-a11y-tools when using modern TypeScript configs such as moduleResolution: "bundler".
