import dayjs from "dayjs";
import React from "react";
import { createMemoryHistory } from "history";
import userEvent from "@testing-library/user-event";
import ExecutionHoursModal, { isTradingOpen } from "./ExecutionHoursModal";
import { render, screen } from "../../../../../test/utils";

describe("function to check for execution hours", () => {
  test("returns false on weekends", () => {
    const saturday = dayjs()
      .tz("America/New_York")
      .set("day", 6)
      .startOf("day");
    const sunday = dayjs().tz("America/New_York").set("day", 7).startOf("day");
    expect(isTradingOpen(saturday)).toBeFalsy();
    expect(isTradingOpen(sunday)).toBeFalsy();
  });

  test("returns false before 9:30 ET during daylight saving time", () => {
    const tooEarly = dayjs.tz("2020-08-31 09:29", "America/New_York");
    expect(isTradingOpen(tooEarly)).toBeFalsy();
  });

  test("returns false on or after 16:00 ET during daylight saving time", () => {
    const tooLate = dayjs.tz("2020-08-31 16:00", "America/New_York");
    expect(isTradingOpen(tooLate)).toBeFalsy();
  });

  test("returns true on or after 9:30 ET and before 16:00 ET during daylight saving time", () => {
    const notTooEarly = dayjs.tz("2020-08-31 09:30", "America/New_York");
    const notTooLate = dayjs.tz("2020-08-31 15:59", "America/New_York");
    expect(isTradingOpen(notTooEarly)).toBeTruthy();
    expect(isTradingOpen(notTooLate)).toBeTruthy();
  });

  test("returns false before 9:30 ET during standard time", () => {
    const tooEarly = dayjs.tz("2020-12-01 09:29", "America/New_York");
    expect(isTradingOpen(tooEarly)).toBeFalsy();
  });

  test("returns false on or after 16:00 ET during standard time", () => {
    const tooLate = dayjs.tz("2020-12-01 16:00", "America/New_York");
    expect(isTradingOpen(tooLate)).toBeFalsy();
  });

  test("returns true on or after 9:30 ET and before 16:00 ET during standard time", () => {
    const notTooEarly = dayjs.tz("2020-12-01 09:30", "America/New_York");
    const notTooLate = dayjs.tz("2020-12-01 15:59", "America/New_York");
    expect(isTradingOpen(notTooEarly)).toBeTruthy();
    expect(isTradingOpen(notTooLate)).toBeTruthy();
  });

  test("works during daylight ", () => {
    const notTooEarly = dayjs.tz("2020-08-31 09:30", "America/New_York");
    const notTooLate = dayjs.tz("2020-08-31 15:59", "America/New_York");
    expect(isTradingOpen(notTooEarly)).toBeTruthy();
    expect(isTradingOpen(notTooLate)).toBeTruthy();
  });
});

describe("interactions", () => {
  xtest("clicking on cross icon or dismiss button", async () => {
    const history = createMemoryHistory({
      initialIndex: 1,
      initialEntries: ["/portfolio-review", "/portfolio-review#trading-hours"]
    });

    const mockOnHide = jest.fn();

    render(
      <ExecutionHoursModal
        isOpen={history.location.hash.includes("trading-hours")}
        onHide={mockOnHide}
      />
    );

    const dismiss = screen.getByRole("button", { name: /dismiss/i });
    const cross = screen.getByRole("button", { name: /svg/i });

    userEvent.click(dismiss);
    userEvent.click(cross);
    expect(mockOnHide).toHaveBeenCalledTimes(2);
  });
});
