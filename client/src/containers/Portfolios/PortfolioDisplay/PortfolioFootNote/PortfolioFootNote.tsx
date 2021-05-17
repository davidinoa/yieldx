import React from "react";
import { Row, Col } from "react-bootstrap";
import { PositionsFootNote } from "./PortfolioFootNote.style";

export default function PositionsFootNoteFunction() {
  return (
    <PositionsFootNote>
      <Row>
        <Col>
          <p>
            All orders received are considered “Day orders” and advertised yield
            levels on YieldX should be viewed as accurate estimations of
            transactable market levels given the aggregation of third party
            feeds received. Orders are no guarantee of execution and will depend
            on available liquidity and market stability at any given time.
            Orders will be executed through a variety of market platforms
            offering firm liquidity or via RFQ (Request For Quote) where
            advantageous to the customer and will be aggregated with other
            customer orders to help improve execution if necessary. No
            commission or mark-ups will be charged on any user order so the
            level we trade-at is the level you receive. Any orders raised
            outside of normal trading hours (8.30am-4.30pm EST.) will be raised
            at the start of the following trading day and levels may differ from
            levels shown at time of order.
          </p>
        </Col>
      </Row>
    </PositionsFootNote>
  );
}
