import React from "react";
import { render, screen } from "test/utils";
import Portfolios from "containers/Portfolios/Portfolios";
import { Route } from "react-router";

jest.mock("./PortfolioList/PortfolioList", () => {
  return {
    __esModule: true,
    default: () => {
      return <div data-testid="PortfolioListMock" />;
    }
  };
});

jest.mock("./PortfolioDisplay/PortfolioDisplay", () => {
  return {
    __esModule: true,
    default: () => {
      return <div data-testid="PortfolioDisplayMock" />;
    }
  };
});

jest.mock("./CashBalanceReview/CashBalanceReview", () => {
  return {
    __esModule: true,
    default: () => {
      return <div data-testid="CashBalanceReviewMock" />;
    }
  };
});
describe("Portfolios", () => {
  it("Should render correct component for '/portfolios' route", () => {
    render(<Route path="/portfolios" component={Portfolios} />, {
      route: "/portfolios"
    });
    expect(screen.queryByTestId("PortfolioListMock")).toBeInTheDocument();
  });

  it("Should render correct component for '/portfolios/:type/:id' route", () => {
    render(<Route path="/portfolios" component={Portfolios} />, {
      route: "/portfolios/external/mock-id"
    });
    expect(screen.queryByTestId("PortfolioDisplayMock")).toBeInTheDocument();
  });

  it("Should render correct component for '/portfolios/live/:id/edit' route", () => {
    render(<Route path="/portfolios" component={Portfolios} />, {
      route: "/portfolios/live/mock-id/edit"
    });
    expect(screen.queryByTestId("CashBalanceReviewMock")).toBeInTheDocument();
  });

  it("Should render correct component for '/portfolios/live/:id/rebalance' route", () => {
    render(<Route path="/portfolios" component={Portfolios} />, {
      route: "/portfolios/live/mock-id/rebalance"
    });
    expect(screen.queryByTestId("CashBalanceReviewMock")).toBeInTheDocument();
  });

  it("Should not render for external edit", () => {
    render(<Route path="/portfolios" component={Portfolios} />, {
      route: "/portfolios/external/mock-id/edit"
    });
    expect(screen.queryByTestId("CashBalanceReviewMock")).toBe(null);
  });

  it("Should not render for external rebalance", () => {
    render(<Route path="/portfolios" component={Portfolios} />, {
      route: "/portfolios/external/mock-id/rebalance"
    });
    expect(screen.queryByTestId("CashBalanceReviewMock")).toBe(null);
  });
});
