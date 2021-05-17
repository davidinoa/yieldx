import React from "react";
import { render, screen } from "test/utils";
import { Order2, OrderStatus, Status3 } from "providers/graphql/hooks";
import { AssetAssetTypeEnum } from "@bondhouse/rover-universe";
import CollapsiblePanel from "./CollapsiblePanel";

const mockOrder: Order2 = {
  id: "5d62a607-9c33-4610-9310-eeb45351c37a",
  portfolioId: "6cdf10c3-000c-40c5-886e-c45f4b8226f7",
  quantity: 1,
  assetId: "4207ed32-9c48-4235-9821-f0612f54a009",
  createdAt: "2020-07-15T15:00:02.250811Z",
  updatedAt: "2020-07-15T15:00:02.250811Z",
  status: OrderStatus.Open
};

const mockTrades = {
  data: [
    {
      assetId: "4a81cf99-eca3-4d99-a922-a0ac88e1bcb9",
      comment: null,
      counterPartyId: "TRAFIX",
      createdAt: "2020-10-09T14:19:57.005809Z",
      fee: null,
      id: "63daac2b-f677-4a29-a95f-312470567261",
      metadata: null,
      orderId: "357d5ac2-79bd-4c03-8cdd-342f943e3575",
      portfolioId: "9b68a035-910d-41d8-8452-2f7175f13ae2",
      quantity: 200,
      relatedPositions: [
        {
          positionId: "7675d7d4-2799-4df1-82ec-fd9bd071a76f",
          quantity: 200
        }
      ],
      status: Status3.Confirmed,
      tradeId: "df2bae71-3537-407a-94bb-6cc3b8786f0e",
      tradePrice: 16.09,
      updatedAt: "2020-10-09T14:19:57.005809Z"
    }
  ],
  loading: false
};

describe("CollapsiblePanel", () => {
  test("Should correctly render no trades", () => {
    const { asFragment } = render(
      <CollapsiblePanel
        order={mockOrder}
        trades={{
          data: [],
          loading: false
        }}
        assetType={"FUND" as AssetAssetTypeEnum.Fund}
      />
    );
    expect(screen.getByText(/order info/i)).toBeInTheDocument();
    // Should render no trades
    expect(
      screen.queryAllByTestId("CollapsiblePanel-TradesList-Status").length
    ).toBe(0);
    expect(asFragment()).toMatchSnapshot();
  });

  test("Should render 1 trade", () => {
    const { asFragment } = render(
      <CollapsiblePanel
        order={mockOrder}
        trades={mockTrades}
        assetType={"FUND" as AssetAssetTypeEnum.Fund}
      />
    );
    expect(
      screen.getAllByTestId("CollapsiblePanel-TradesList-Status").length
    ).toBe(1);
    expect(asFragment()).toMatchSnapshot();
  });
});
