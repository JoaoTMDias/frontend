import { resolve } from "path";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import istanbul from "vite-plugin-istanbul";
import react from "@vitejs/plugin-react-swc";
import tsconfigPaths from "vite-tsconfig-paths";
import packageJSON from "./package.json";

// https://vitejs.dev/config/
export default defineConfig({
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
	],
	build: {
		lib: {
			entry: resolve(__dirname, "src/index.ts"),
			name: "JSUtilities",
			formats: ["es", "umd"],
			fileName: (format) => {
				const OUTPUT = {
					es: "index.es.mjs",
					umd: "index.umd.cjs",
				};

				return OUTPUT[format] ?? "index.js";
			},
		},
		rollupOptions: {
			external: Object.keys(packageJSON.peerDependencies),
			output: {
				globals: {
					react: "React",
					"react-dom": "ReactDOM",
				},
			},
		},
	},
});
