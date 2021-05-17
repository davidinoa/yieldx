import { UserType } from "@bondhouse/iam";
import React from "react";
import { Row } from "react-bootstrap";
import { useRecoilValue } from "recoil";
import { ReactComponent as NoItemIcon } from "assets/svg/no-investor.svg";
import {
  CreateInvestorButton,
  EmptyList,
  NoItemAvailable
} from "components/ListPages/ListPages.styles";
import { userState } from "services/userState";

export default function NoAvailableInvestors() {
  const user = useRecoilValue(userState);

  const CreateAccountLevel =
    user.userType === UserType.ADMIN ||
    user.institutionId === "bondhouse" ||
    user.institutionId === undefined;
  return (
    <Row>
      <EmptyList>
        <div className="content">
          <NoItemAvailable>
            <NoItemIcon />
            <h2>No investor accounts</h2>
            {CreateAccountLevel ? (
              <>
                <p>
                  It looks like you haven’t set up any investor accounts. Create
                  an investor account to get started.
                </p>
                <CreateInvestorButton
                  className="empty-list"
                  type="button"
                  to="/investors/create/investor-type"
                >
                  Create investor account
                </CreateInvestorButton>
              </>
            ) : (
              <p>
                It looks like there aren’t any investor accounts yet. Ask your
                administrator to set one up.
              </p>
            )}
          </NoItemAvailable>
        </div>
      </EmptyList>
    </Row>
  );
}
