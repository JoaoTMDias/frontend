import type { UserConfig } from "vite";
import type { RollupOptions } from "rollup";
import dts from "vite-plugin-dts";
import istanbul from "vite-plugin-istanbul";
import react from "@vitejs/plugin-react-swc";
import tsconfigPaths from "vite-tsconfig-paths";

const BASE_EXTERNAL_LIBRARIES = {
	react: "React",
	"react-dom": "ReactDOM",
	"react/jsx-runtime": "react/jsx-runtime",
};

const BASE_ROLLUP_OPTIONS: RollupOptions = {
	external: [...Object.keys(BASE_EXTERNAL_LIBRARIES)],
	output: {
		globals: {
			...BASE_EXTERNAL_LIBRARIES,
		},
	},
};

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
			tsconfigPaths(),
			react(),
			istanbul({
				cypress: true,
				requireEnv: false,
			}),
			dts({
				outDir: "dist/types",
				insertTypesEntry: true,
			}),
			...plugins,
		],
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
