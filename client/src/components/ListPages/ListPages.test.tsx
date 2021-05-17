import React from "react";
import {
  ListStatuses,
  ListFilters,
  CreateInvestorButton,
  DetailsButton,
  EmptyList,
  InvestorRowName,
  InvestorRowType
} from "./ListPages.styles";
import { render } from "../../test/utils";

describe("ListStatuses", () => {
  const { container } = render(<ListStatuses />);
  test("should render", () => {
    expect(container).toBeDefined();
  });
});

describe("ListFilters", () => {
  const { container } = render(<ListFilters />);
  test("should render", () => {
    expect(container).toBeDefined();
  });
});
describe("CreateInvestorButton", () => {
  const { container } = render(<CreateInvestorButton to="/" />);
  test("should render", () => {
    expect(container).toBeDefined();
  });
});

describe("DetailsButton", () => {
  const { container } = render(<DetailsButton data-disabled={false} to="/" />);
  test("should render", () => {
    expect(container).toBeDefined();
  });
});

describe("EmptyList", () => {
  const { container } = render(<EmptyList />);
  test("should render", () => {
    expect(container).toBeDefined();
  });
});
describe("InvestorRowName", () => {
  const { container } = render(<InvestorRowName />);
  test("should render", () => {
    expect(container).toBeDefined();
  });
});

describe("InvestorRowType", () => {
  const { container } = render(<InvestorRowType />);
  test("should render", () => {
    expect(container).toBeDefined();
  });
});
