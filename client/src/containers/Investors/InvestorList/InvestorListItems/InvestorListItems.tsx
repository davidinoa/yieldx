import React from "react";
import { Row } from "react-bootstrap";
import { InvestorWithApexAccount } from "@bondhouse/investor";
import {
  EmptyList,
  ListContainer
} from "components/ListPages/ListPages.styles";
import NoItemsMessage from "components/NoItemsMessage";
import { ReactComponent as NoItemIcon } from "assets/svg/no-investor.svg";
import getCurrPageData from "util/getCurrPageData";
import InvestorRow from "./InvestorRow/InvestorRow";
import Pagination from "elements/Pagination/Pagination";

interface Props {
  investors: InvestorWithApexAccount[];
  canCreateAccount: boolean;
}

export default function InvestorListItems({
  investors,
  canCreateAccount
}: Props) {
  const [currPage, setCurrPage] = React.useState(1);
  const totalPages = Math.ceil(investors.length / 7);
  return (
    <Row>
      <ListContainer>
        {investors.length === 0 && (
          <EmptyList>
            <NoItemsMessage
              className="m-auto"
              title="No investor accounts"
              message={
                canCreateAccount
                  ? "It looks like you haven’t set up any investor accounts. Create an investor account to get started."
                  : "It looks like there aren’t any investor accounts yet. Ask your administrator to set one up."
              }
              Icon={<NoItemIcon />}
            />
          </EmptyList>
        )}
        {getCurrPageData(investors, 7, currPage).map(account => (
          <InvestorRow account={account} key={account.investor.id} />
        ))}
        {totalPages > 1 && (
          <Pagination
            total={totalPages}
            current={currPage}
            handleChange={setCurrPage}
          />
        )}
      </ListContainer>
    </Row>
  );
}
