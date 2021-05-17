import React from "react";
import { render, screen } from "test/utils";
import { Detailed } from "./Detailed";
import { Action } from "../Button/Action";

describe("Detailed", () => {
  it("Should render correct title", () => {
    render(
      <Detailed title="Reweight">
        <span>test</span>
        <Action text="select" onClick={jest.fn} />
      </Detailed>
    );
    expect(screen.getByText(/Reweight/i)).toBeVisible();
  });
  it("Should render correct button text", () => {
    render(
      <Detailed title="Reweight">
        <span>test</span>
        <Action text="select" onClick={jest.fn} />
      </Detailed>
    );
    expect(screen.getByRole("button")).toHaveTextContent(/select/i);
  });
  it("Should render correct text in children", () => {
    render(
      <Detailed title="Reweight">
        <span>test</span>
        <Action text="select" onClick={jest.fn} />
      </Detailed>
    );
    expect(screen.getByText(/test/i)).toBeVisible();
  });
});
