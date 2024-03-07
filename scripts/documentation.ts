import { execSync } from "child_process";
import appRoot from "app-root-path";

/**
 * Starts the Docusaurus server
 */
function startDocusaurus(): void {
	const rootDir = appRoot.path;

	if (!rootDir) {
		console.error("Unable to find root directory of the project");
		return;
	}

	try {
		// Change directory to the docs folder and execute npm run start
		execSync("npm run docs:start", { cwd: rootDir, stdio: "inherit" });
	} catch (error) {
		console.error("Error occurred while starting docs server:", error);
	}
}

// Call the main function to start the docs server
startDocusaurus();
