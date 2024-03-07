import Link from "@docusaurus/Link";
import Head from "@docusaurus/Head";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import styles from "./index.module.css";

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
					<Link href={project.url}>
						<h2 className={styles.title}>{project.name}</h2>
						<p className={styles.version}>
							<span className="sr-only">Current version is</span> {project.version}
						</p>
						<p className={styles.description}>{project.description}</p>
					</Link>
				</li>
			);
		});

		return <ul className={styles.list}>{list}</ul>;
	}

	return (
		<div className={styles.page}>
			<Head>
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
