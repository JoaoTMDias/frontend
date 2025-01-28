/**
 * Styles to visually hide an element
 * but make it accessible to screen-readers
 */
export const visuallyHiddenStyle: React.CSSProperties = {
	border: "0px",
	clip: "rect(0px, 0px, 0px, 0px)",
	margin: "-1px",
	overflow: "hidden",
	height: "1px",
	width: "1px",
	padding: "0",
	position: "absolute",
	whiteSpace: "nowrap",
};
