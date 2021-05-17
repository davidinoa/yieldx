import React from "react";
import { InvestorType } from "@bondhouse/investor";
import { useHistory } from "react-router-dom";
import { ReactComponent as OrganizationIcon } from "../../../../assets/svg/organization.svg";
import { ReactComponent as IndividualIcon } from "../../../../assets/svg/individual.svg";
import { Card, Container, Root } from "./SelectInvestorType.styles";

function SelectInvestorType() {
  const history = useHistory();
  return (
    <Root>
      <Container className="d-flex">
        <div className="d-flex justify-content-center align-items-center">
          <Card>
            <IndividualIcon className="individual" />
            <h1>Individual</h1>
            <span>
              Choose this option if you are investing on behalf of a client or
              yourself.
            </span>
            <button
              type="button"
              data-testid="individual"
              onClick={() =>
                history.replace(history.location.pathname, {
                  direction: "next",
                  investorType: InvestorType.INDIVIDUAL
                })
              }
            >
              Select
            </button>
          </Card>
        </div>
        <div className="d-flex justify-content-center align-items-center">
          <Card>
            <OrganizationIcon className="organization" />
            <h1>Organization</h1>
            <span>
              Choose this option if you are investing on behalf of an
              organization.
            </span>
            <button
              data-testid="organization"
              type="button"
              onClick={() =>
                history.replace(history.location.pathname, {
                  direction: "next",
                  investorType: InvestorType.ORGANIZATION
                })
              }
            >
              Select
            </button>
          </Card>
        </div>
      </Container>
      <br />
      <p>
        Investment Advisory Services offered through BondHouse Advisors, LLC, an
        SEC registered investment advisor. Please see our{" "}
        <a href="https://files.adviserinfo.sec.gov/IAPD/Content/Common/crd_iapd_Brochure.aspx?BRCHR_VRSN_ID=630258">
          ADV Part II
        </a>{" "}
        for more information. Past performance may not be indicative of future
        results. Therefore, no current or prospective client should assume that
        the future performance of any specific investment, investment strategy,
        or product made reference to directly or indirectly on this website,
        will be profitable or equal to past performance levels. All investment
        strategies have the potential for loss, including loss of principal.{" "}
        <a href="https://yieldx-public-files-675223963978.s3.us-east-1.amazonaws.com/Form.CRS.Document.pdf">
          Form CRS
        </a>
      </p>
    </Root>
  );
}
export default SelectInvestorType;
