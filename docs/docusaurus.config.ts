import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";
import appRoot from "app-root-path";
import fs from "fs";
import path from "path";

interface PackageInfo {
	url?: string;
	name: string;
	version: string;
	description: string;
}

function getPackageInfo(packagePath: string): PackageInfo {
	const packageJsonPath = path.join(packagePath, "package.json");
	const packageJsonContent = fs.readFileSync(packageJsonPath, "utf-8");
	const packageJson = JSON.parse(packageJsonContent);
	return {
		name: packageJson.name,
		version: packageJson.version,
		description: packageJson.description,
	};
}

function getPackageDirectories(directory: string): string[] {
	const packagesDir = path.join(directory, "packages");
	return fs
		.readdirSync(packagesDir, { withFileTypes: true })
		.filter((dirent) => dirent.isDirectory())
		.map((dirent) => path.join(packagesDir, dirent.name));
}

function getMonorepoProjects() {
	const docsConfigPath = path.join(appRoot.path, "./docs/docusaurus.config.ts");

	if (!fs.existsSync(docsConfigPath)) {
		console.error("docusaurus.config.ts file not found");
		return;
	}

	const packageDirectories = getPackageDirectories(appRoot.path);

	return packageDirectories.map((packageDirectory) => {
		const packageInfo = getPackageInfo(packageDirectory);

		const name = packageInfo.name.split("@jtmdias/")[1];

		return {
			url: `docs/${name}/introduction`,
			name,
			version: packageInfo.version,
			description: packageInfo.description,
		};
	});
}

const config: Config = {
	title: "@jtmdias/frontend",
	url: "https://joaotmdias.github.io",
	baseUrl: "/frontend/",
	organizationName: "@jtmdias",
	projectName: "frontend",
	onBrokenLinks: "throw",
	onBrokenMarkdownLinks: "warn",
	i18n: {
		defaultLocale: "en",
		locales: ["en"],
	},
	plugins: ["docusaurus-plugin-sass"],
	customFields: {
		projects: getMonorepoProjects(),
	},
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
		algolia: {
			appId: "ZNK3OJZQK5",
			apiKey: "c605e568f6304ad77a9cc92d1442c13d",
			indexName: "jtmdias-frontend",
		},
		navbar: {
			title: "@jtmdias",
			logo: {
				alt: "",
				src: "img/logo.svg",
			},
			items: [
				{
					type: "docSidebar",
					sidebarId: "tutorialSidebar",
					position: "left",
					label: "Packages",
				},
				{
					href: "https://github.com/joaotmdias/frontend",
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
