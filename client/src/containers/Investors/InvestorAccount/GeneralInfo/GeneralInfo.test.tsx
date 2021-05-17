import React from "react";
import { InvestorType, InvestorStatus } from "@bondhouse/investor";
import { AccountStatus } from "@bondhouse/apex";
import GeneralInfo from "./GeneralInfo";
import {
  ButtonGroup,
  CloseButton,
  ManageCashButton,
  Root
} from "./GeneralInfo.styles";
import { render } from "../../../../test/utils";

test("is in the DOM", () => {
  const { container } = render(
    <GeneralInfo
      aum={0}
      apexAccount={{
        id: "",
        investorId: "",
        apexAccountNumber: "",
        apexRequestId: "",
        status: AccountStatus.ACTIVE,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      }}
      investorId=""
      generalInfo={{
        name: "",
        type: InvestorType.INDIVIDUAL,
        status: InvestorStatus.ACTIVE
      }}
    />
  );
  expect(container).toBeDefined();
});

describe("styled components", () => {
  test("ButtonGroup", () => {
    const { container } = render(<ButtonGroup />);
    expect(container).toBeDefined();
  });
  test("CloseButton", () => {
    const { container } = render(<CloseButton />);
    expect(container).toBeDefined();
  });
  test("ManageCashButton", () => {
    const { container } = render(<ManageCashButton to="/" />);
    expect(container).toBeDefined();
  });
  test("Root", () => {
    const { container } = render(<Root />);
    expect(container).toBeDefined();
  });
});
