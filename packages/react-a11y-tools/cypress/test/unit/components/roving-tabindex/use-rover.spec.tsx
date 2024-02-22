/*
 * Please refer to the terms of the license
 * agreement.
 *
 * (c) 2023 joaodias.me, Rights Reserved.
 */
import React from "react";
import {
	RoverProvider,
	useRover,
	useFocus,
	RoverProviderProps,
} from "../../../../../src/components/roving-tabindex/index";

const TestButton: React.FC<{
	disabled: boolean;
	rowIndex?: number | null;
	lockScrollOnRover?: boolean;
	id?: string;
}> = ({ disabled, rowIndex = null, lockScrollOnRover = true, children, id }) => {
	const ref = React.useRef(null);

	const [tabIndex, focused, handleKeyDown, handleClick] = useRover(ref, {
		disabled,
		rowIndex,
		lockScrollOnRover,
	});

	useFocus(ref, focused);

	return (
		<button
			ref={ref}
			id={id}
			onKeyDown={handleKeyDown}
			onClick={handleClick}
			tabIndex={tabIndex}
			disabled={disabled}
			data-focused={focused}
		>
			{children}
		</button>
	);
};

const TestToolbar: React.FC<{
	direction?: "horizontal" | "vertical" | "both";
	flags?: Array<boolean>;
}> = ({ flags = [false, false, false], direction = "vertical" }) => (
	<RoverProvider direction={direction}>
		<TestButton disabled={flags[0]}>Button One</TestButton>
		<div>
			<TestButton disabled={flags[1]}>Button Two</TestButton>
		</div>
		<TestButton disabled={flags[2]}>Button Three</TestButton>
	</RoverProvider>
);

const TestToolbarWithOptions: React.FC<{
	options?: RoverProviderProps["options"];
	flags?: Array<boolean>;
}> = ({
	flags = [false, false, false],
	options = {
		direction: "vertical",
	},
}) => (
	<RoverProvider options={options}>
		<TestButton disabled={flags[0]}>Button One</TestButton>
		<div>
			<TestButton disabled={flags[1]}>Button Two</TestButton>
		</div>
		<TestButton disabled={flags[2]}>Button Three</TestButton>
	</RoverProvider>
);

const TestGrid: React.FC<{ flags?: Array<boolean> }> = ({ flags = [false, false, false] }) => (
	<RoverProvider>
		<TestButton disabled={flags[0]} rowIndex={0}>
			Button One
		</TestButton>
		<div>
			<TestButton disabled={flags[1]} rowIndex={0}>
				Button Two
			</TestButton>
		</div>
		<TestButton disabled={flags[2]} rowIndex={1}>
			Button Three
		</TestButton>
	</RoverProvider>
);

const TestToolbarWithIDs: React.FC<{
	flags?: Array<boolean>;
}> = ({ flags = [false, false, false] }) => (
	<RoverProvider>
		<TestButton disabled={flags[0]} id="user-id-1">
			Button One
		</TestButton>
		<div>
			<TestButton disabled={flags[1]} id="user-id-2">
				Button Two
			</TestButton>
		</div>
		<TestButton disabled={flags[2]} id="user-id-3">
			Button Three
		</TestButton>
	</RoverProvider>
);

describe("useRover", () => {
	context("tabindex", () => {
		context("when used as part of a toolbar", () => {
			it("displays correctly initially when no buttons are disabled", () => {
				const flags = [false, false, false];
				cy.mount(<TestToolbar flags={flags} />);

				cy.findByText("Button One").should("have.attr", "tabindex", "0");
				cy.findByText("Button One").should("have.attr", "data-focused", "false");

				cy.findByText("Button Two").should("have.attr", "tabindex", "-1");
				cy.findByText("Button Two").should("have.attr", "data-focused", "false");

				cy.findByText("Button Three").should("have.attr", "tabindex", "-1");
				cy.findByText("Button Three").should("have.attr", "data-focused", "false");
			});

			it("displays correctly initially when custom IDs are used", () => {
				const flags = [false, false, false];
				cy.mount(<TestToolbarWithIDs flags={flags} />);

				cy.findByText("Button One").should("have.id", "user-id-1");
				cy.findByText("Button Two").should("have.id", "user-id-2");
				cy.findByText("Button Three").should("have.id", "user-id-3");
			});

			it("updates correctly when a button changes to being disabled", () => {
				let flags = [false, false, false];
				cy.mount(<TestToolbar flags={flags} />).then(({ rerender }) => {
					flags = [true, false, false];
					rerender(<TestToolbar flags={flags} />);

					cy.findByText("Button One").should("have.attr", "tabindex", "-1");
					cy.findByText("Button Two").should("have.attr", "tabindex", "0");
					cy.findByText("Button Three").should("have.attr", "tabindex", "-1");
				});
			});

			it("displays correctly initially when first button is disabled", () => {
				const flags = [true, false, false];
				cy.mount(<TestToolbar flags={flags} />);
				cy.findByText("Button One").should("have.attr", "tabindex", "-1");
				cy.findByText("Button Two").should("have.attr", "tabindex", "0");
				cy.findByText("Button Three").should("have.attr", "tabindex", "-1");
			});
		});
		context("when used as part of a grid", () => {
			it("displays correctly initially when no buttons are disabled", () => {
				const flags = [false, false, false];

				cy.mount(<TestGrid flags={flags} />);

				cy.findByText("Button One").should("have.attr", "tabindex", "0");
				cy.findByText("Button One").should("have.attr", "data-focused", "false");

				cy.findByText("Button Two").should("have.attr", "tabindex", "-1");
				cy.findByText("Button Two").should("have.attr", "data-focused", "false");

				cy.findByText("Button Three").should("have.attr", "tabindex", "-1");
				cy.findByText("Button Three").should("have.attr", "data-focused", "false");
			});

			it("displays correctly initially when first button is disabled", () => {
				const flags = [true, false, false];

				cy.mount(<TestGrid flags={flags} />);

				cy.findByText("Button One").should("have.attr", "tabindex", "-1");
				cy.findByText("Button Two").should("have.attr", "tabindex", "0");
				cy.findByText("Button Three").should("have.attr", "tabindex", "-1");
			});

			it("updates correctly when a button changes to being disabled", () => {
				let flags = [false, false, false];
				cy.mount(<TestGrid flags={flags} />).then(({ rerender }) => {
					flags = [true, false, false];
					rerender(<TestGrid flags={flags} />);

					cy.findByText("Button One").should("have.attr", "tabindex", "-1");
					cy.findByText("Button Two").should("have.attr", "tabindex", "0");
					cy.findByText("Button Three").should("have.attr", "tabindex", "-1");
				});
			});
		});
	});

	context("direction", () => {
		context("direction is 'horizontal'", () => {
			beforeEach(() => {
				cy.mount(
					<TestToolbarWithOptions
						options={{
							direction: "horizontal",
						}}
					/>,
				);
			});

			it("pressing arrow right key", () => {
				cy.findByText("Button One").type("{rightarrow}");
				cy.findByText("Button One").should("have.attr", "tabindex", "-1");
				cy.findByText("Button One").should("have.attr", "data-focused", "false");
				cy.findByText("Button Two").should("have.attr", "tabindex", "0");
				cy.findByText("Button Two").should("have.attr", "data-focused", "true");
				cy.findByText("Button Three").should("have.attr", "tabindex", "-1");
				cy.findByText("Button Three").should("have.attr", "data-focused", "false");

				cy.findByText("Button Two").type("{rightarrow}");
				cy.findByText("Button One").should("have.attr", "tabindex", "-1");
				cy.findByText("Button One").should("have.attr", "data-focused", "false");
				cy.findByText("Button Two").should("have.attr", "tabindex", "-1");
				cy.findByText("Button Two").should("have.attr", "data-focused", "false");
				cy.findByText("Button Three").should("have.attr", "tabindex", "0");
				cy.findByText("Button Three").should("have.attr", "data-focused", "true");

				cy.findByText("Button Three").type("{rightarrow}");
				cy.findByText("Button One").should("have.attr", "tabindex", "0");
				cy.findByText("Button One").should("have.attr", "data-focused", "true");
				cy.findByText("Button Two").should("have.attr", "tabindex", "-1");
				cy.findByText("Button Two").should("have.attr", "data-focused", "false");
				cy.findByText("Button Three").should("have.attr", "tabindex", "-1");
				cy.findByText("Button Three").should("have.attr", "data-focused", "false");
			});

			it("pressing arrow left key", () => {
				cy.findByText("Button One").type("{leftarrow}");
				cy.findByText("Button One").should("have.attr", "tabindex", "-1");
				cy.findByText("Button One").should("have.attr", "data-focused", "false");
				cy.findByText("Button Two").should("have.attr", "tabindex", "-1");
				cy.findByText("Button Two").should("have.attr", "data-focused", "false");
				cy.findByText("Button Three").should("have.attr", "tabindex", "0");
				cy.findByText("Button Three").should("have.attr", "data-focused", "true");

				cy.findByText("Button Three").type("{leftarrow}");
				cy.findByText("Button One").should("have.attr", "tabindex", "-1");
				cy.findByText("Button One").should("have.attr", "data-focused", "false");
				cy.findByText("Button Two").should("have.attr", "tabindex", "0");
				cy.findByText("Button Two").should("have.attr", "data-focused", "true");
				cy.findByText("Button Three").should("have.attr", "tabindex", "-1");
				cy.findByText("Button Three").should("have.attr", "data-focused", "false");

				cy.findByText("Button Two").type("{leftarrow}");
				cy.findByText("Button One").should("have.attr", "tabindex", "0");
				cy.findByText("Button One").should("have.attr", "data-focused", "true");
				cy.findByText("Button Two").should("have.attr", "tabindex", "-1");
				cy.findByText("Button Two").should("have.attr", "data-focused", "false");
				cy.findByText("Button Three").should("have.attr", "tabindex", "-1");
				cy.findByText("Button Three").should("have.attr", "data-focused", "false");
			});

			it("pressing arrow up key", () => {
				cy.findByText("Button One").type("{uparrow}");

				cy.findByText("Button One").should("have.attr", "tabindex", "0");
				cy.findByText("Button Two").should("have.attr", "tabindex", "-1");
				cy.findByText("Button Three").should("have.attr", "tabindex", "-1");
			});

			it("pressing down up key", () => {
				cy.mount(<TestToolbar direction="horizontal" />);

				cy.findByText("Button One").type("{downarrow}");

				cy.findByText("Button One").should("have.attr", "tabindex", "0");
				cy.findByText("Button Two").should("have.attr", "tabindex", "-1");
				cy.findByText("Button Three").should("have.attr", "tabindex", "-1");
			});
		});

		context("direction is 'vertical'", () => {
			beforeEach(() => {
				cy.mount(
					<TestToolbarWithOptions
						options={{
							direction: "vertical",
						}}
					/>,
				);
			});

			it("pressing arrow down key", () => {
				cy.findByText("Button One").type("{downarrow}");
				cy.findByText("Button One").should("have.attr", "tabindex", "-1");
				cy.findByText("Button One").should("have.attr", "data-focused", "false");
				cy.findByText("Button Two").should("have.attr", "tabindex", "0");
				cy.findByText("Button Two").should("have.attr", "data-focused", "true");
				cy.findByText("Button Three").should("have.attr", "tabindex", "-1");
				cy.findByText("Button Three").should("have.attr", "data-focused", "false");

				cy.findByText("Button Two").type("{downarrow}");
				cy.findByText("Button One").should("have.attr", "tabindex", "-1");
				cy.findByText("Button One").should("have.attr", "data-focused", "false");
				cy.findByText("Button Two").should("have.attr", "tabindex", "-1");
				cy.findByText("Button Two").should("have.attr", "data-focused", "false");
				cy.findByText("Button Three").should("have.attr", "tabindex", "0");
				cy.findByText("Button Three").should("have.attr", "data-focused", "true");

				cy.findByText("Button Three").type("{downarrow}");
				cy.findByText("Button One").should("have.attr", "tabindex", "0");
				cy.findByText("Button One").should("have.attr", "data-focused", "true");
				cy.findByText("Button Two").should("have.attr", "tabindex", "-1");
				cy.findByText("Button Two").should("have.attr", "data-focused", "false");
				cy.findByText("Button Three").should("have.attr", "tabindex", "-1");
				cy.findByText("Button Three").should("have.attr", "data-focused", "false");
			});

			it("pressing arrow up key", () => {
				cy.findByText("Button One").type("{uparrow}");
				cy.findByText("Button One").should("have.attr", "tabindex", "-1");
				cy.findByText("Button One").should("have.attr", "data-focused", "false");
				cy.findByText("Button Two").should("have.attr", "tabindex", "-1");
				cy.findByText("Button Two").should("have.attr", "data-focused", "false");
				cy.findByText("Button Three").should("have.attr", "tabindex", "0");
				cy.findByText("Button Three").should("have.attr", "data-focused", "true");

				cy.findByText("Button Three").type("{uparrow}");
				cy.findByText("Button One").should("have.attr", "tabindex", "-1");
				cy.findByText("Button One").should("have.attr", "data-focused", "false");
				cy.findByText("Button Two").should("have.attr", "tabindex", "0");
				cy.findByText("Button Two").should("have.attr", "data-focused", "true");
				cy.findByText("Button Three").should("have.attr", "tabindex", "-1");
				cy.findByText("Button Three").should("have.attr", "data-focused", "false");

				cy.findByText("Button Two").type("{uparrow}");
				cy.findByText("Button One").should("have.attr", "tabindex", "0");
				cy.findByText("Button One").should("have.attr", "data-focused", "true");
				cy.findByText("Button Two").should("have.attr", "tabindex", "-1");
				cy.findByText("Button Two").should("have.attr", "data-focused", "false");
				cy.findByText("Button Three").should("have.attr", "tabindex", "-1");
				cy.findByText("Button Three").should("have.attr", "data-focused", "false");
			});

			it("pressing arrow right key", () => {
				cy.findByText("Button One").type("{rightarrow}");

				cy.findByText("Button One").should("have.attr", "tabindex", "0");
				cy.findByText("Button Two").should("have.attr", "tabindex", "-1");
				cy.findByText("Button Three").should("have.attr", "tabindex", "-1");
			});

			it("pressing arrow down key", () => {
				cy.findByText("Button One").type("{leftarrow}");

				cy.findByText("Button One").should("have.attr", "tabindex", "0");
				cy.findByText("Button Two").should("have.attr", "tabindex", "-1");
				cy.findByText("Button Three").should("have.attr", "tabindex", "-1");
			});
		});

		context("direction is 'both'", () => {
			beforeEach(() => {
				cy.mount(
					<TestToolbarWithOptions
						options={{
							direction: "both",
						}}
					/>,
				);
			});

			it("pressing arrow right key", () => {
				cy.findByText("Button One").type("{rightarrow}");
				cy.findByText("Button One").should("have.attr", "tabindex", "-1");
				cy.findByText("Button One").should("have.attr", "data-focused", "false");
				cy.findByText("Button Two").should("have.attr", "tabindex", "0");
				cy.findByText("Button Two").should("have.attr", "data-focused", "true");
				cy.findByText("Button Three").should("have.attr", "tabindex", "-1");
				cy.findByText("Button Three").should("have.attr", "data-focused", "false");

				cy.findByText("Button Two").type("{rightarrow}");
				cy.findByText("Button One").should("have.attr", "tabindex", "-1");
				cy.findByText("Button One").should("have.attr", "data-focused", "false");
				cy.findByText("Button Two").should("have.attr", "tabindex", "-1");
				cy.findByText("Button Two").should("have.attr", "data-focused", "false");
				cy.findByText("Button Three").should("have.attr", "tabindex", "0");
				cy.findByText("Button Three").should("have.attr", "data-focused", "true");

				cy.findByText("Button Three").type("{rightarrow}");
				cy.findByText("Button One").should("have.attr", "tabindex", "0");
				cy.findByText("Button One").should("have.attr", "data-focused", "true");
				cy.findByText("Button Two").should("have.attr", "tabindex", "-1");
				cy.findByText("Button Two").should("have.attr", "data-focused", "false");
				cy.findByText("Button Three").should("have.attr", "tabindex", "-1");
				cy.findByText("Button Three").should("have.attr", "data-focused", "false");
			});

			it("pressing arrow left key", () => {
				cy.findByText("Button One").type("{leftarrow}");
				cy.findByText("Button One").should("have.attr", "tabindex", "-1");
				cy.findByText("Button One").should("have.attr", "data-focused", "false");
				cy.findByText("Button Two").should("have.attr", "tabindex", "-1");
				cy.findByText("Button Two").should("have.attr", "data-focused", "false");
				cy.findByText("Button Three").should("have.attr", "tabindex", "0");
				cy.findByText("Button Three").should("have.attr", "data-focused", "true");

				cy.findByText("Button Three").type("{leftarrow}");
				cy.findByText("Button One").should("have.attr", "tabindex", "-1");
				cy.findByText("Button One").should("have.attr", "data-focused", "false");
				cy.findByText("Button Two").should("have.attr", "tabindex", "0");
				cy.findByText("Button Two").should("have.attr", "data-focused", "true");
				cy.findByText("Button Three").should("have.attr", "tabindex", "-1");
				cy.findByText("Button Three").should("have.attr", "data-focused", "false");

				cy.findByText("Button Two").type("{leftarrow}");
				cy.findByText("Button One").should("have.attr", "tabindex", "0");
				cy.findByText("Button One").should("have.attr", "data-focused", "true");
				cy.findByText("Button Two").should("have.attr", "tabindex", "-1");
				cy.findByText("Button Two").should("have.attr", "data-focused", "false");
				cy.findByText("Button Three").should("have.attr", "tabindex", "-1");
				cy.findByText("Button Three").should("have.attr", "data-focused", "false");
			});

			it("pressing arrow down key", () => {
				cy.findByText("Button One").type("{downarrow}");
				cy.findByText("Button One").should("have.attr", "tabindex", "-1");
				cy.findByText("Button One").should("have.attr", "data-focused", "false");
				cy.findByText("Button Two").should("have.attr", "tabindex", "0");
				cy.findByText("Button Two").should("have.attr", "data-focused", "true");
				cy.findByText("Button Three").should("have.attr", "tabindex", "-1");
				cy.findByText("Button Three").should("have.attr", "data-focused", "false");

				cy.findByText("Button Two").type("{downarrow}");
				cy.findByText("Button One").should("have.attr", "tabindex", "-1");
				cy.findByText("Button One").should("have.attr", "data-focused", "false");
				cy.findByText("Button Two").should("have.attr", "tabindex", "-1");
				cy.findByText("Button Two").should("have.attr", "data-focused", "false");
				cy.findByText("Button Three").should("have.attr", "tabindex", "0");
				cy.findByText("Button Three").should("have.attr", "data-focused", "true");

				cy.findByText("Button Three").type("{downarrow}");
				cy.findByText("Button One").should("have.attr", "tabindex", "0");
				cy.findByText("Button One").should("have.attr", "data-focused", "true");
				cy.findByText("Button Two").should("have.attr", "tabindex", "-1");
				cy.findByText("Button Two").should("have.attr", "data-focused", "false");
				cy.findByText("Button Three").should("have.attr", "tabindex", "-1");
				cy.findByText("Button Three").should("have.attr", "data-focused", "false");
			});

			it("pressing arrow up key", () => {
				cy.findByText("Button One").type("{uparrow}");
				cy.findByText("Button One").should("have.attr", "tabindex", "-1");
				cy.findByText("Button One").should("have.attr", "data-focused", "false");
				cy.findByText("Button Two").should("have.attr", "tabindex", "-1");
				cy.findByText("Button Two").should("have.attr", "data-focused", "false");
				cy.findByText("Button Three").should("have.attr", "tabindex", "0");
				cy.findByText("Button Three").should("have.attr", "data-focused", "true");

				cy.findByText("Button Three").type("{uparrow}");
				cy.findByText("Button One").should("have.attr", "tabindex", "-1");
				cy.findByText("Button One").should("have.attr", "data-focused", "false");
				cy.findByText("Button Two").should("have.attr", "tabindex", "0");
				cy.findByText("Button Two").should("have.attr", "data-focused", "true");
				cy.findByText("Button Three").should("have.attr", "tabindex", "-1");
				cy.findByText("Button Three").should("have.attr", "data-focused", "false");

				cy.findByText("Button Two").type("{uparrow}");
				cy.findByText("Button One").should("have.attr", "tabindex", "0");
				cy.findByText("Button One").should("have.attr", "data-focused", "true");
				cy.findByText("Button Two").should("have.attr", "tabindex", "-1");
				cy.findByText("Button Two").should("have.attr", "data-focused", "false");
				cy.findByText("Button Three").should("have.attr", "tabindex", "-1");
				cy.findByText("Button Three").should("have.attr", "data-focused", "false");
			});
		});
	});

	context("focus management", () => {
		it("pressing home key", () => {
			cy.mount(<TestToolbar />);

			cy.findByText("Button One").type("{home}");
			cy.findByText("Button One").should("have.attr", "tabindex", "0");
			cy.findByText("Button One").should("have.attr", "data-focused", "true");
			cy.findByText("Button Two").should("have.attr", "tabindex", "-1");
			cy.findByText("Button Two").should("have.attr", "data-focused", "false");
			cy.findByText("Button Three").should("have.attr", "tabindex", "-1");
			cy.findByText("Button Three").should("have.attr", "data-focused", "false");

			cy.findByText("Button Two").type("{home}");
			cy.findByText("Button One").should("have.attr", "tabindex", "0");
			cy.findByText("Button One").should("have.attr", "data-focused", "true");
			cy.findByText("Button Two").should("have.attr", "tabindex", "-1");
			cy.findByText("Button Two").should("have.attr", "data-focused", "false");
			cy.findByText("Button Three").should("have.attr", "tabindex", "-1");
			cy.findByText("Button Three").should("have.attr", "data-focused", "false");

			cy.findByText("Button Three").type("{home}");
			cy.findByText("Button One").should("have.attr", "tabindex", "0");
			cy.findByText("Button One").should("have.attr", "data-focused", "true");
			cy.findByText("Button Two").should("have.attr", "tabindex", "-1");
			cy.findByText("Button Two").should("have.attr", "data-focused", "false");
			cy.findByText("Button Three").should("have.attr", "tabindex", "-1");
			cy.findByText("Button Three").should("have.attr", "data-focused", "false");
		});

		it("pressing end key", () => {
			cy.mount(<TestToolbar />);

			cy.findByText("Button One").type("{end}");
			cy.findByText("Button One").should("have.attr", "tabindex", "-1");
			cy.findByText("Button One").should("have.attr", "data-focused", "false");
			cy.findByText("Button Two").should("have.attr", "tabindex", "-1");
			cy.findByText("Button Two").should("have.attr", "data-focused", "false");
			cy.findByText("Button Three").should("have.attr", "tabindex", "0");
			cy.findByText("Button Three").should("have.attr", "data-focused", "true");

			cy.findByText("Button Two").type("{end}");
			cy.findByText("Button One").should("have.attr", "tabindex", "-1");
			cy.findByText("Button One").should("have.attr", "data-focused", "false");
			cy.findByText("Button Two").should("have.attr", "tabindex", "-1");
			cy.findByText("Button Two").should("have.attr", "data-focused", "false");
			cy.findByText("Button Three").should("have.attr", "tabindex", "0");
			cy.findByText("Button Three").should("have.attr", "data-focused", "true");

			cy.findByText("Button Three").type("{end}");
			cy.findByText("Button One").should("have.attr", "tabindex", "-1");
			cy.findByText("Button One").should("have.attr", "data-focused", "false");
			cy.findByText("Button Two").should("have.attr", "tabindex", "-1");
			cy.findByText("Button Two").should("have.attr", "data-focused", "false");
			cy.findByText("Button Three").should("have.attr", "tabindex", "0");
			cy.findByText("Button Three").should("have.attr", "data-focused", "true");
		});

		it("manages focus when switching between keyboard and mouse input", () => {
			const flags = [false, false, false];

			cy.mount(
				<TestToolbarWithOptions
					flags={flags}
					options={{
						direction: "horizontal",
					}}
				/>,
			);

			cy.findByText("Button One").click();
			cy.findByText("Button One").should("have.attr", "data-focused", "true");
			cy.findByText("Button Two").should("have.attr", "data-focused", "false");
			cy.findByText("Button Three").should("have.attr", "data-focused", "false");

			cy.findByText("Button One").type("{rightarrow}");
			cy.findByText("Button One").should("have.attr", "data-focused", "false");
			cy.findByText("Button Two").should("have.attr", "data-focused", "true");
			cy.findByText("Button Three").should("have.attr", "data-focused", "false");

			cy.findByText("Button One").click();
			cy.findByText("Button One").should("have.attr", "data-focused", "true");
			cy.findByText("Button Two").should("have.attr", "data-focused", "false");
			cy.findByText("Button Three").should("have.attr", "data-focused", "false");
		});
	});
});
