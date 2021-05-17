import { CashFlow } from "providers/graphql/hooks";
import { render } from "@testing-library/react";
import React from "react";
import CashflowChart from "./CashflowChart";

const cashflows: Array<CashFlow> = [
  {
    date: "2019-08-24",
    cashFlow: 90,
    principal: 80,
    interest: 10
  }
];

test("mounts", () => {
  render(<CashflowChart cashflows={cashflows} />);
});
