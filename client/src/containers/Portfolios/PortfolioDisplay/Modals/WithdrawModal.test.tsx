import React from "react";
import { waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { render, screen } from "test/utils";
import WithdrawModal from "./WithdrawModal";

describe("WithdrawModal", () => {
  test("renders", () => {
    const { container } = render(
      <WithdrawModal
        show
        available={200}
        onHide={jest.fn()}
        onWithdraw={jest.fn()}
      />
    );
    expect(container).toBeDefined();
  });

  xtest("should not allow inputs greater than available prop", async () => {
    const { container } = render(
      <WithdrawModal
        show
        available={200}
        onHide={jest.fn()}
        onWithdraw={jest.fn()}
      />
    );
    expect(container).toBeDefined();
    const input = screen.getByLabelText(/Enter amount/i);
    expect(input).toBeInTheDocument();

    // entering max input according to available prop passed in
    await userEvent.type(input, "20000");
    // checking input to be formatted
    expect(input.getAttribute("value")).toBe("200.00");
    // making sure it passes validation
    expect(screen.queryByText(/not enough \$ available/i)).toBe(null);
    expect(screen.queryByText(/^Withdraw$/i)).not.toBeDisabled();

    // making input 2000 which is greater than 200 available
    await userEvent.type(input, "0");
    expect(input.getAttribute("value")).toBe("2,000.00");
    expect(
      await screen.findByText(/not enough \$ available/i)
    ).toBeInTheDocument();
    expect(screen.queryByText(/^Withdraw$/i)).toBeDisabled();
  });

  test("should call onWithdraw function when submitting with valid input", async () => {
    const onWithdraw = jest.fn();
    const { container, getByLabelText, getByText } = render(
      <WithdrawModal
        show
        available={200}
        onHide={jest.fn()}
        onWithdraw={onWithdraw}
      />
    );
    expect(container).toBeDefined();
    const input = getByLabelText(/Enter amount/i);
    expect(input).toBeInTheDocument();

    await userEvent.type(input, "20000");
    const submitButton = getByText(/^Withdraw$/i);
    userEvent.click(submitButton);
    await waitFor(() => expect(onWithdraw).toHaveBeenCalledTimes(1));
    expect(onWithdraw).toHaveBeenCalledWith(200);
  });
});
