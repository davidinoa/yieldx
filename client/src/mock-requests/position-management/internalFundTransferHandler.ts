import { rest } from "msw";
import {
  LedgerEntryStatusEnum,
  SettleFundTransferResponse
} from "@bondhouse/position-management";

export const internalFundTransferHandler: CreateInternalFundTransferHandler = ({
  investorId,
  portfolioId
}) =>
  rest.post(
    `/apis/position-management/v1/investors/${investorId}/portfolios/${portfolioId}/internal-portfolio-fund-transfer`,
    (req, res, ctx) => {
      const response: SettleFundTransferResponse = {
        ledgerEntry: {
          id: "",
          portfolioId,
          tradeId: "",
          assetId: "",
          quantity: 0,
          tradePrice: 0,
          counterPartyId: "",
          status: LedgerEntryStatusEnum.CONFIRMED,
          relatedPositions: []
        }
      };
      return res(ctx.status(200), ctx.json(response));
    }
  );

interface CreateInternalFundTransferHandlerParams {
  investorId: string;
  portfolioId: string;
}

type CreateInternalFundTransferHandler = (
  params: CreateInternalFundTransferHandlerParams
) => ReturnType<typeof rest["post"]>;
