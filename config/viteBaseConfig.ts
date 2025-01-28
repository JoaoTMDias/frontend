import type { UserConfig } from "vite";
import type { RollupOptions } from "rollup";
import dts from "vite-plugin-dts";
import istanbul from "vite-plugin-istanbul";
import react from "@vitejs/plugin-react-swc";
import { resolve } from "node:path";

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

export const BASE_EXTERNAL_LIBRARIES = {
	react: "React",
	"react-dom": "ReactDOM",
	"react/jsx-runtime": "react/jsx-runtime",
};

export const BASE_ROLLUP_OPTIONS: RollupOptions = {
	external: [...Object.keys(BASE_EXTERNAL_LIBRARIES)],
	output: {
		globals: {
			...BASE_EXTERNAL_LIBRARIES,
		},
	},
};

/**
 * Gets a per-file format filename.
 *
 * @param format
 * @returns
 */
export function getFilename(format: ModuleFormat, entryName: string) {
	const OUTPUT: Partial<Record<typeof format, string>> = {
		es: `${entryName}.mjs`,
		cjs: `${entryName}.cjs`,
	};

	return OUTPUT[format] ?? `${entryName}.cjs`;
}

/**
 * Returns the base vite config
 *
 * @see https://vitejs.dev/config
 * @param config
 * @returns parsedConfig
 */
function getBaseViteConfig({ plugins = [], build = {}, ...config }: UserConfig): UserConfig {
	const { lib, rollupOptions, ...buildConfig } = build;

	return {
		plugins: [
			react(),
			istanbul({
				cypress: true,
				requireEnv: false,
			}),
			dts({
				outDir: "./dist",
				insertTypesEntry: true,
			}),
			...plugins,
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
			lib,
			rollupOptions: {
				...BASE_ROLLUP_OPTIONS,
				...rollupOptions,
			},
			...buildConfig,
		},
		...config,
	};
}

export default getBaseViteConfig;
