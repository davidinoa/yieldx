import React from "react";
import PageTitle from "./PageTitle";
import { render } from "test/utils";

describe("PageTitle", () => {
  it("Supports title only", () => {
    const { asFragment } = render(<PageTitle page title="Manage portfolios" />);
    expect(asFragment()).toMatchSnapshot();
  });

  it("Supports subtitle", () => {
    const { asFragment } = render(
      <PageTitle title="Manage portfolios" subtitle="Portfolio List" />
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("Supports left align", () => {
    const { asFragment } = render(
      <PageTitle
        title="Manage portfolios"
        subtitle="Portfolio List"
        alignment="left"
      />
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("Supports page padding", () => {
    const { asFragment } = render(
      <PageTitle
        page
        title="Manage portfolios"
        subtitle="Portfolio List"
        alignment="left"
      />
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("Supports reversed title and subtitle order", () => {
    const { asFragment } = render(
      <PageTitle
        page
        reversed
        title="Manage portfolios"
        subtitle="Portfolio List"
        alignment="left"
      />
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
