import { emptyFunction, useLifecycle } from "src/index";
import { getContainerEl } from "cypress/react";
import ReactDom from "react-dom";

interface DemoWithHookProps {
  onMount: VoidFunction;
  onUnmount?: VoidFunction;
}

function DemoWithHook({ onMount, onUnmount }: DemoWithHookProps) {
  useLifecycle(onMount, onUnmount);

  return <div>useEffectOnce</div>;
}

describe("useEffectOnce", () => {
  it("should run provided effect on mount", () => {
    cy.mount(<DemoWithHook onMount={cy.stub().as("onMount")} />);

    cy.get("@onMount").should("have.been.calledOnce");
  });

  it("should run clean-up provided on unmount", () => {
    cy.mount(<DemoWithHook onMount={emptyFunction} onUnmount={cy.stub().as("onUnmount")} />).then(
      () => {
        cy.findByText("useEffectOnce").should("exist");

        cy.unmount();
        cy.get("@onUnmount").should("have.been.called");
      }
    );
  });
});
