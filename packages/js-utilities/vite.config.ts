import { resolve } from "path";
import type { RollupOptions } from "rollup";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import dts from "vite-plugin-dts";
import getBaseConfig, { BASE_ROLLUP_OPTIONS, getFilename } from "../../config/viteBaseConfig";

const ROLLUP_OPTIONS: RollupOptions = {
	...BASE_ROLLUP_OPTIONS,
	output: {
		preserveModules: true,
		inlineDynamicImports: false,
		...BASE_ROLLUP_OPTIONS.output,
	},
};

const CONFIG = getBaseConfig({
	plugins: [
		tsconfigPaths(),
		dts({
			insertTypesEntry: false,
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
