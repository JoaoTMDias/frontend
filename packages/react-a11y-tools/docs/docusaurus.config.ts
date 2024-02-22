import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";
import { join, resolve } from "node:path";
import packageJSON from "../package.json";

const REPO_URL = "https://github.com/joaotmdias/react-a11y-tools/";
const PACKAGE_URL = "https://www.npmjs.com/package/@jtmdias/react-a11y-tools/";

const config: Config = {
	title: "Accessibility Tools for React",
	tagline: "Focus on Accessible Web experiences",
	favicon: "img/favicon.ico",

	customFields: {
		currentVersion: packageJSON.version,
		mainButton: "Documentation",
		githubLink: REPO_URL,
		githubLabel: "Code on Github",
		packageLink: PACKAGE_URL,
		packageLabel: "Package on NPM",
		author: packageJSON.author.name,
	},

	url: "https://joaotmdias.github.io",
	baseUrl: "/react-a11y-tools/",
	organizationName: "@jtmdias",
	projectName: "react-a11y-tools",
	onBrokenLinks: "throw",
	onBrokenMarkdownLinks: "warn",

	// Even if you don't use internationalization, you can use this field to set
	// useful metadata like html lang. For example, if your site is Chinese, you
	// may want to replace "en" with "zh-Hans".
	i18n: {
		defaultLocale: "en",
		locales: ["en"],
	},

	plugins: [
		() => ({
			name: "resolve-react",
			configureWebpack() {
				const NODE_MODULES = join(__dirname, "../../../node_modules");
				const REACT = `${NODE_MODULES}/react`;
				const REACT_DOM = `${NODE_MODULES}/react-dom`;

				return {
					resolve: {
						alias: {
							react: resolve(REACT),
							"react-dom": resolve(REACT_DOM),
						},
					},
				};
			},
		}),
		"docusaurus-plugin-sass",
		[
			"docusaurus-plugin-react-docgen-typescript",
			{
				src: ["../src/**/*.tsx"],
				global: true,
				parserOptions: {
					propFilter: (prop, component) => {
						if (prop.parent) {
							return !prop.parent.fileName.includes("@types/react");
						}

						return true;
					},
				},
			},
		],
	],

	presets: [
		[
			"classic",
			{
				docs: {
					sidebarPath: "./sidebars.ts",
				},
				theme: {
					customCss: "./src/css/custom.css",
				},
			} satisfies Preset.Options,
		],
	],

	themeConfig: {
		// Replace with your project's social card
		image: "img/docusaurus-social-card.jpg",
		navbar: {
			title: "React a11y tools",
			logo: {
				alt: "",
				src: "img/favicon.svg",
			},
			items: [
				{
					href: PACKAGE_URL,
					label: "NPM",
					position: "right",
				},
				{
					href: REPO_URL,
					label: "GitHub",
					position: "right",
				},
			],
		},
		prism: {
			theme: prismThemes.github,
			darkTheme: prismThemes.dracula,
		},
	} satisfies Preset.ThemeConfig,
};

export default config;
