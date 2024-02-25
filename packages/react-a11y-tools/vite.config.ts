import { resolve } from "path";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

//@ts-ignore
import getBaseConfig from "../../config/viteBaseConfig";

const CONFIG = getBaseConfig({
	plugins: [tsconfigPaths()],
	build: {
		lib: {
			entry: resolve(__dirname, "src/index.ts"),
			name: "ReactA11yTools",
			formats: ["es", "umd"],
			fileName: (format) => {
				const OUTPUT: Partial<Record<typeof format, string>> = {
					es: "index.es.mjs",
					umd: "index.umd.cjs",
				};

				return OUTPUT[format] ?? "index.cjs";
			},
		},
	},
});

// https://vitejs.dev/config/
export default defineConfig(CONFIG);
