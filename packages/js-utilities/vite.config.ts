import { resolve } from "path";
import type { RollupOptions } from "rollup";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import dts from "vite-plugin-dts";

//@ts-ignore
import getBaseConfig, { BASE_ROLLUP_OPTIONS } from "../../config/viteBaseConfig";

type ModuleFormat =
	| "amd"
	| "cjs"
	| "es"
	| "iife"
	| "system"
	| "umd"
	| "commonjs"
	| "esm"
	| "module"
	| "systemjs";

const ROLLUP_OPTIONS: RollupOptions = {
	...BASE_ROLLUP_OPTIONS,
	output: {
		...BASE_ROLLUP_OPTIONS.output,
		preserveModules: true,
		inlineDynamicImports: false,
	},
};

/**
 * Gets a per-file format filename.
 *
 * @param format
 * @returns
 */
function getFilename(format: ModuleFormat, entryName: string) {
	const OUTPUT: Partial<Record<typeof format, string>> = {
		es: `${entryName}.mjs`,
		cjs: `${entryName}.cjs`,
	};

	return OUTPUT[format] ?? `${entryName}.cjs`;
}

const CONFIG = getBaseConfig({
	plugins: [
		tsconfigPaths(),
		dts({
			outDir: "./dist",
			insertTypesEntry: true,
		}),
	],
	resolve: {
		alias: [
			{
				find: "src",
				replacement: resolve(__dirname, "./src"),
			},
		],
	},
	build: {
		lib: {
			entry: {
				index: resolve(__dirname, "src/index.ts"),
				hooks: resolve(__dirname, "src/hooks.ts"),
			},
			name: "JSUtilities",
			formats: ["es", "cjs"],
			fileName: getFilename,
		},
		terserOptions: {
			format: {
				comments: false,
			},
		},
		rollupOptions: ROLLUP_OPTIONS,
	},
});

export default defineConfig(CONFIG);
