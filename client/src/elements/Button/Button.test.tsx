import React from "react";
import Button from "./Button";
import { render, screen } from "../../test/utils";

describe("Button", () => {
  test("text content", () => {
    render(<Button onClick={jest.fn} text="click me" />);
    expect(screen.getByRole("button")).toHaveTextContent(/click me/i);
  });
});
