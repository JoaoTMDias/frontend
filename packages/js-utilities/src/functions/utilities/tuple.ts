// https://stackoverflow.com/questions/46176165/ways-to-get-string-literal-type-of-array-values-without-enum-overhead
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const tuple = <T extends string[]>(...args: T) => args;
