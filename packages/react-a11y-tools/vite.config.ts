import type { RollupOptions } from "rollup";
import { resolve } from "path";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

//@ts-ignore
import getBaseConfig, { BASE_EXTERNAL_LIBRARIES, getFilename } from "../../config/viteBaseConfig";

const EXTERNAL_LIBRARIES = {
	...BASE_EXTERNAL_LIBRARIES,
	"focus-trap-react": "FocusTrapReact",
};

const ROLLUP_OPTIONS: RollupOptions = {
	external: [...Object.keys(EXTERNAL_LIBRARIES)],
	output: {
		globals: {
			...EXTERNAL_LIBRARIES,
		},
	},
};

const CONFIG = getBaseConfig({
	plugins: [tsconfigPaths()],
	css: {
		modules: {
			generateScopedName: "css-[hash:base64:8]",
		},
	},
	build: {
		minify: true,
		lib: {
			entry: resolve(__dirname, "src/index.ts"),
			name: "ReactA11yTools",
			formats: ["es", "cjs"],
			fileName: getFilename,
		},
		rollupOptions: ROLLUP_OPTIONS,
	},
});
// https://vitejs.dev/config/
export default defineConfig(CONFIG);
