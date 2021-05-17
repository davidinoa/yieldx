import {
  AccountType,
  CatAccountHolderType,
  Amount,
  BusinessClassification,
  CreateTransferRequest,
  CreateTransferResponse,
  CustomerExemption,
  EmploymentStatus,
  EntityType,
  ExpectedWithdrawalFrequency,
  ExternalEntityType,
  GetDeliveryInstructionsByInvestorIdResponse,
  GetLinkedBankAccountsResponse,
  GetPortfolioDeliveryInstructionResponse,
  InvestmentExperience,
  InvestmentObjective,
  Investor,
  InvestorType,
  IssuerDirectCommunication,
  LinkedBankAccountStatus,
  LiquidityNeeds,
  PhoneType,
  PrimaryEntityAccountActivity,
  PrimaryOngoingFundingSource,
  RiskTolerance,
  ScopeOfBusiness,
  TimeHorizon,
  TransferDirection,
  TransferStatus,
  TrustedContact,
  Worth
} from "@bondhouse/investor";
import { INDIVIDUAL_INVESTOR } from "./__fixtures__";

// eslint-disable-next-line @typescript-eslint/no-empty-function,no-shadow
function InvestorsApi() {}

InvestorsApi.prototype.getInvestors = jest.fn(() => {
  return Promise.resolve({ data: { investors: [] } });
});

// eslint-disable-next-line @typescript-eslint/no-unused-vars
InvestorsApi.prototype.getInvestor = jest.fn((investorId: string) =>
  Promise.resolve({
    data: {
      investor: INDIVIDUAL_INVESTOR
    }
  })
);

// eslint-disable-next-line @typescript-eslint/no-empty-function,no-shadow
function LinkedBanksAccountsApi() {}

LinkedBanksAccountsApi.prototype.getLinkedBankAccounts = jest.fn(
  (investorId: string) =>
    Promise.resolve<{ data: GetLinkedBankAccountsResponse }>({
      data: {
        linkedBankAccounts: [
          {
            id: "linkedBankAccount",
            investorId,
            mask: "4325",
            bankName: "Chase",
            accountType: AccountType.CHECKING,
            status: LinkedBankAccountStatus.ACTIVE,
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString()
          }
        ]
      }
    })
);

// eslint-disable-next-line @typescript-eslint/no-empty-function,no-shadow
function TransfersApi() {}

TransfersApi.prototype.createTransfer = jest.fn(
  (investorId: string, req?: CreateTransferRequest) =>
    Promise.resolve<{ data: CreateTransferResponse }>({
      data: {
        transfer: {
          id: "transferId",
          investorId,
          portfolioId: req?.portfolioId || "portfolioId",
          linkedBankAccountId:
            req?.linkedBankAccountId || "linkedBankAccountId",
          ledgerId: "ledgerId",
          currency: "USD",
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
          amount: 500_000,
          direction: TransferDirection.DEPOSIT,
          status: TransferStatus.PENDING
        }
      }
    })
);

// eslint-disable-next-line @typescript-eslint/no-empty-function,no-shadow
function PortfolioDeliveryInstructionsApi() {}

PortfolioDeliveryInstructionsApi.prototype.getDeliveryInstructionsByInvestorId = jest.fn(
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  (investorId: string) =>
    Promise.resolve<{ data: GetDeliveryInstructionsByInvestorIdResponse }>({
      data: {
        deliveryInstructions: [
          {
            id: "4a7e8762-ab0f-4f4f-9739-5814a238b2bc",
            portfolioId: "3a25bc6e-adaf-4065-82f3-b9d068549a49",
            investorId: "c5abffbc-427d-4855-9f32-4b4a97f97f48",
            instructions: [
              {
                externalEntityType: ExternalEntityType.APEX,
                externalEntityId: "cac88dc5-76ed-46d0-8ed3-e9685265004c"
              }
            ],
            createdAt: "2020-06-15T07:22:59.806642Z",
            updatedAt: "2020-06-15T07:22:59.806642Z",
            cashOnly: true
          },
          {
            id: "0b849c6b-8820-44b7-85f1-d37035434f5a",
            portfolioId: "62ca3476-26c1-4167-876d-b53455b5699d",
            investorId: "c5abffbc-427d-4855-9f32-4b4a97f97f48",
            instructions: [
              {
                externalEntityType: ExternalEntityType.APEX,
                externalEntityId: "cac88dc5-76ed-46d0-8ed3-e9685265004c"
              }
            ],
            createdAt: "2020-06-16T18:43:26.670682Z",
            updatedAt: "2020-06-16T18:43:26.670682Z",
            cashOnly: false
          },
          {
            id: "1349ce1f-1bd2-4734-b8f7-903d3cff38c5",
            portfolioId: "fb0984a4-9a94-4f6e-9fbd-190a94ba197a",
            investorId: "c5abffbc-427d-4855-9f32-4b4a97f97f48",
            instructions: [
              {
                externalEntityType: ExternalEntityType.APEX,
                externalEntityId: "cac88dc5-76ed-46d0-8ed3-e9685265004c"
              }
            ],
            createdAt: "2020-06-25T18:20:39.997344Z",
            updatedAt: "2020-06-25T18:20:39.997344Z",
            cashOnly: false
          }
        ]
      }
    })
);
PortfolioDeliveryInstructionsApi.prototype.getPortfolioDeliveryInstruction = jest.fn(
  (portfolioId: string) =>
    Promise.resolve<{ data: GetPortfolioDeliveryInstructionResponse }>({
      data: {
        portfolioDeliveryInstruction: {
          id: "deliveryId",
          portfolioId,
          investorId: "investorId",
          instructions: [],
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString()
        }
      }
    })
);

export {
  InvestorsApi,
  PortfolioDeliveryInstructionsApi,
  LinkedBanksAccountsApi,
  TransfersApi,
  EntityType,
  PhoneType,
  EmploymentStatus,
  TrustedContact,
  InvestmentExperience,
  InvestmentObjective,
  Worth,
  Amount,
  TimeHorizon,
  LiquidityNeeds,
  RiskTolerance,
  CustomerExemption,
  BusinessClassification,
  ScopeOfBusiness,
  PrimaryOngoingFundingSource,
  PrimaryEntityAccountActivity,
  ExpectedWithdrawalFrequency,
  InvestorType,
  IssuerDirectCommunication,
  LinkedBankAccountStatus,
  AccountType,
  CatAccountHolderType
};
export { InvestorStatus } from "@bondhouse/investor";
export type { Investor };
