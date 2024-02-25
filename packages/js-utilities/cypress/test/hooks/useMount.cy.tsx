import { useMount } from "../../../src/index";

interface DemoWithHookProps {
	onMount: VoidFunction;
}

function DemoWithHook({ onMount }: DemoWithHookProps) {
	useMount(() => onMount?.());

	return <div>useMount</div>;
}

it("should call provided callback on mount", () => {
	cy.mount(<DemoWithHook onMount={cy.stub().as("onMount")} />);

	cy.get("@onMount").should("have.been.calledOnce");
});

it("should not call provided callback on unmount", () => {
	cy.mount(<DemoWithHook onMount={cy.stub().as("onMount")} />).then(() => {
		cy.unmount();

		cy.get("@onMount").should("have.been.calledOnce");
	});
});

it("should not call provided callback on rerender", () => {
	cy.mount(<DemoWithHook onMount={cy.stub().as("onMount")} />).then(({ rerender }) => {
		cy.get("@onMount").should("have.been.calledOnce");

		rerender(<DemoWithHook onMount={cy.stub().as("onMountRerender")} />);

		cy.get("@onMountRerender").should("not.have.been.called");
	});
});
