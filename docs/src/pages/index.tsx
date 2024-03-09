import Link from "@docusaurus/Link";
import Head from "@docusaurus/Head";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import "../css/custom.css";
import styles from "./index.module.scss";

interface ProjectInfo {
	url: string;
	name: string;
	version: string;
	description: string;
}

export default function Home(): JSX.Element {
	const { siteConfig } = useDocusaurusContext();

	function renderProjects() {
		const PROJECTS = siteConfig.customFields?.projects as ProjectInfo[];
		const list = PROJECTS.map((project, index) => {
			const key = `${project.name}-${index}`;

			return (
				<li key={key} className={styles["list-item"]}>
					<Link
						href={project.url}
						className={styles["list-item__link"]}
						aria-describedby={key}
					>
						<h3 className={styles["list-item__title"]}>{project.name}</h3>
						<p className={styles["list-item__version"]}>
							<span className="sr-only">Current version is</span> {project.version}
						</p>
						<p id={key} className={styles["list-item__description"]}>
							{project.description}
						</p>
					</Link>
				</li>
			);
		});

		return <ul className={styles.list}>{list}</ul>;
	}

	return (
		<div className={styles.page}>
			<Head>
				<title>@jtmdias/frontend</title>
				<meta
					name="description"
					content="Documentation for the monorepo of all the javascript-related packages for JoaoTMDias"
				/>
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
				<link
					href="https://fonts.googleapis.com/css2?family=Work+Sans:ital,wght@0,100..900;1,100..900&display=swap"
					rel="stylesheet"
				/>
			</Head>
			<header className={styles.header}>
				<h1>@jtmdias</h1>
			</header>
			<main className={styles.main}>
				<h2>Packages</h2>
				<nav>{renderProjects()}</nav>
			</main>
		</div>
	);
}
