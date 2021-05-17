import React from "react";
import { act, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { render } from "test/utils";
import DepositModal from "./DepositModal";

describe("DepositModal", () => {
  test("renders", () => {
    const { container } = render(
      <DepositModal show onHide={jest.fn()} onDeposit={jest.fn()} />
    );
    expect(container).toBeDefined();
  });

  xtest("should not allow inputs greater than limit prop", async () => {
    const { container, getByLabelText, queryByText } = render(
      <DepositModal show limit={300} onHide={jest.fn()} onDeposit={jest.fn()} />
    );
    expect(container).toBeDefined();
    const input = getByLabelText(/Enter amount/i);
    expect(input).toBeInTheDocument();

    // entering max input according to limit prop passed in
    await userEvent.type(input, "30000");
    // checking input to be formatted
    expect(input.getAttribute("value")).toBe("300.00");
    // making sure it passes validation
    expect(queryByText(/not enough \$ available/i)).toBe(null);
    expect(queryByText(/^Deposit$/i)).not.toBeDisabled();

    // making input 2000 which is greater than 200 available
    await act(() => userEvent.type(input, "0"));
    expect(input.getAttribute("value")).toBe("3,000.00");
    expect(queryByText(/not enough \$ available/i)).toBeInTheDocument();
    expect(queryByText(/^Deposit$/i)).toBeDisabled();
  });

  test("should call onDeposit function when submitting with valid input", async () => {
    const onDeposit = jest.fn();
    const { container, getByLabelText, getByText } = render(
      <DepositModal show onHide={jest.fn()} onDeposit={onDeposit} />
    );
    expect(container).toBeDefined();
    const input = getByLabelText(/Enter amount/i);
    expect(input).toBeInTheDocument();

    // await act(() => userEvent.type(input, "30000"));
    await userEvent.type(input, "30000");
    const submitButton = getByText(/^Deposit$/i);
    userEvent.click(submitButton);
    await waitFor(() => expect(onDeposit).toHaveBeenCalledTimes(1));
    expect(onDeposit).toHaveBeenCalledWith(300);
  });
});
