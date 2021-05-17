import { useHistory } from "react-router-dom";
import {
  ApexAccount2,
  CreateTransferRequestInput,
  ExternalEntityType,
  Investor,
  LinkedBankAccount,
  PostInvestorTransfersMutation,
  TransferDirection,
  TransferMethod,
  usePostInvestorTransfersMutation
} from "providers/graphql/hooks";
import { useCallback } from "react";
import { MutationUpdaterFn } from "@apollo/client";
import { CashManageInvestor } from "services/InvestorService";

export function useConfirmAccounts(
  investor: Investor,
  apexAccount: ApexAccount2,
  amount: number,
  cashOnlyPortfolio: CashManageInvestor["cashPortfolio"],
  transferDirection: TransferDirection,
  fundingSource: "wire" | "plaid",
  bankAccount?: LinkedBankAccount
) {
  const history = useHistory();
  const [
    postTransfer,
    { loading: isSubmitting, error }
  ] = usePostInvestorTransfersMutation();
  const transferCallback = useCallback(async () => {
    const isWireWithdraw =
      fundingSource === "wire" &&
      transferDirection === TransferDirection.Withdraw;
    const isPlaid = fundingSource === "plaid";
    if (isPlaid || isWireWithdraw) {
      if (!bankAccount) throw Error("Plaid funding source requires bank id");
      const createTransferRequestInput: CreateTransferRequestInput = {
        portfolioId: cashOnlyPortfolio.portfolioId,
        currency: "USD",
        amount,
        direction: transferDirection,
        transferMethod: isWireWithdraw
          ? TransferMethod.Wire
          : TransferMethod.Ach,
        linkedBankAccountId: bankAccount.id,
        externalEntity: {
          externalEntityId: apexAccount.id,
          externalEntityType: ExternalEntityType.Apex
        }
      };
      const update: MutationUpdaterFn<PostInvestorTransfersMutation> = cache => {
        cache.modify({
          id: `Position2:CASH-USD:${cashOnlyPortfolio.portfolioId}`,
          fields: {
            unsettled() {
              const unsettled = cashOnlyPortfolio.cashPos.unsettled || 0;
              if (transferDirection === TransferDirection.Deposit)
                return unsettled + amount;
              return unsettled - amount;
            },
            quantity() {
              const { quantity } = cashOnlyPortfolio.cashPos;
              if (transferDirection === TransferDirection.Deposit)
                return quantity + amount;
              return quantity - amount;
            }
          }
        });
      };
      await postTransfer({
        variables: {
          investorId: investor.id,
          createTransferRequestInput
        },
        update
      });
      history.push(`/investors/${investor.id}`);
    } else history.push(`/investors/${investor.id}`);
  }, [
    apexAccount,
    investor,
    bankAccount,
    amount,
    cashOnlyPortfolio,
    transferDirection,
    fundingSource,
    history,
    postTransfer
  ]);
  const goBack = useCallback(history.goBack, [history]);
  return {
    transferCallback,
    isSubmitting,
    error,
    goBack
  };
}
