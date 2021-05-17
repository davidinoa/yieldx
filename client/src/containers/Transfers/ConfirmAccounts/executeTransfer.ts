import {
  CreateTransferRequest,
  ExternalEntityType,
  TransferDirection,
  TransferMethod,
  TransfersApi
} from "@bondhouse/investor";
import { ApexAccountsApi } from "@bondhouse/apex";

export async function executeTransfer(
  investorId: string,
  portfolioId: string,
  amount: number,
  direction: TransferDirection,
  fundingSource: string,
  bankId: string,
  apexAccountsApi: ApexAccountsApi,
  transfersApi: TransfersApi
) {
  const {
    data: { apexAccount }
  } = await apexAccountsApi.getApexAccountByInvestorId(investorId);

  if (fundingSource === "plaid") {
    const request: CreateTransferRequest = {
      portfolioId,
      currency: "USD",
      amount,
      direction,
      transferMethod: TransferMethod.ACH,
      linkedBankAccountId: bankId,
      externalEntity: {
        externalEntityId: apexAccount.id,
        externalEntityType: ExternalEntityType.APEX
      }
    };
    const {
      data: { transfer }
    } = await transfersApi.createTransfer(investorId, request);
    return transfer;
  }
  if (
    fundingSource === "wire" &&
    direction === TransferDirection.WITHDRAW &&
    bankId
  ) {
    const request: CreateTransferRequest = {
      portfolioId,
      currency: "USD",
      amount,
      direction,
      transferMethod: TransferMethod.WIRE,
      linkedBankAccountId: bankId,
      externalEntity: {
        externalEntityId: apexAccount.id,
        externalEntityType: ExternalEntityType.APEX
      }
    };
    const {
      data: { transfer }
    } = await transfersApi.createTransfer(investorId, request);
    return transfer;
  }
  return null;
}
