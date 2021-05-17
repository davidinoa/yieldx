import React from "react";
import { Route } from "react-router-dom";
import { EntityType } from "@bondhouse/investor";
import { waitFor } from "@testing-library/dom";
import { act, render } from "../../../../test/utils";
import AccountAgreementForm from "./AccountAgreementForm";

describe("entity account agreement form tests", () => {
  test("should render entity account agreement form", async () => {
    const utils = render(
      <AccountAgreementForm
        orgName="BondHouse"
        selectedState="FL"
        entityType={EntityType.CCORPORATION}
      />,
      {
        route: "/yieldx/investors/create/entity-account-agreement"
      }
    );
    const { container } = utils;
    await act(async () => {
      expect(container).toBeDefined();
    });
  });

  test("submit should be disabled on mount", async () => {
    const utils = render(
      <AccountAgreementForm
        orgName="BondHouse"
        selectedState="FL"
        entityType={EntityType.CCORPORATION}
      />,
      {
        route: "/yieldx/investors/create/entity-account-agreement"
      }
    );
    const { getByText } = utils;
    await act(async () => {
      await waitFor(() => {
        expect(getByText(/continue/i)).toBeDisabled();
      });
    });
  });

  test("CCORP should have cash account agreement", async () => {
    const utils = render(
      <Route
        render={() => {
          return (
            <AccountAgreementForm
              orgName="BondHouse"
              selectedState="FL"
              entityType={EntityType.CCORPORATION}
            />
          );
        }}
      />,
      {
        route: "/yieldx/investors/create/entity-account-agreement"
      }
    );
    const { queryByLabelText } = utils;
    await act(async () => {
      await waitFor(() => {
        expect(queryByLabelText(/Secretary Name/i)).toBeInTheDocument();
      });
    });
  });

  test("not C_CORP or S_CORP should have llc agreement", async () => {
    const utils = render(
      <Route
        render={() => {
          return (
            <AccountAgreementForm
              orgName="BondHouse"
              selectedState="FL"
              entityType={EntityType.LIMITEDLIABILITYCOMPANYPARTNERSHIP}
            />
          );
        }}
      />,
      {
        route: "/yieldx/investors/create/entity-account-agreement"
      }
    );
    const { queryByLabelText } = utils;
    await act(async () => {
      await waitFor(() => {
        expect(queryByLabelText(/Corporation Name/i)).toBeInTheDocument();
      });
    });
  });
});
