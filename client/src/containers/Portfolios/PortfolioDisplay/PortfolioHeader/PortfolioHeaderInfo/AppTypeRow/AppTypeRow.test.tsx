import React from "react";
import { AppType } from "@bondhouse/position-management";
import userEvent from "@testing-library/user-event";
import AppTypeRow from "./AppTypeRow";
import { render, screen } from "../../../../../../test/utils";

describe("AppTypeRow", () => {
  it("Should render custom review portfolio", () => {
    const { asFragment } = render(
      <AppTypeRow status={undefined} appType={AppType.CUSTOM} />
    );
    expect(screen.queryByText(/custom portfolio/i)).toBeInTheDocument();
    expect(asFragment()).toMatchSnapshot();
  });

  it("Should render inpaas review portfolio with edit button", () => {
    const mockEditGoals = jest.fn();
    const { asFragment } = render(
      <AppTypeRow
        status={undefined}
        appType={AppType.INPAAS}
        onEditGoals={mockEditGoals}
      />
    );
    expect(screen.queryByText(/inpaas portfolio/i)).toBeInTheDocument();
    expect(screen.getByRole("button")).toHaveTextContent(/edit goals/i);
    userEvent.click(screen.getByRole("button"));
    expect(mockEditGoals).toHaveBeenCalledTimes(1);
    expect(asFragment()).toMatchSnapshot();
  });

  it("Should render live portfolio status", () => {
    const { asFragment } = render(
      <AppTypeRow status="LIVE" appType={AppType.CUSTOM} />
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("Should render paper portfolio status", () => {
    const { asFragment } = render(
      <AppTypeRow status="PAPER" appType={AppType.CUSTOM} />
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("Should render closed portfolio status", () => {
    const { asFragment } = render(
      <AppTypeRow status="CLOSED" appType={AppType.CUSTOM} />
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("Should render pending portfolio status", () => {
    const { asFragment } = render(
      <AppTypeRow status="PENDING" appType={AppType.CUSTOM} />
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
