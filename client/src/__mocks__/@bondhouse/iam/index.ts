import {
  CreateInvestorMappingRequest,
  UserType,
  UserStatus
} from "@bondhouse/iam";

// eslint-disable-next-line @typescript-eslint/no-empty-function
export function UsersApi() {}

UsersApi.prototype.getCurrentUser = jest.fn(() =>
  Promise.resolve({
    data: {
      user: {
        id: "auth0|5ec6119474dfa00cbf1d53cb",
        first: "Institution",
        last: "New User",
        userType: "ADMIN",
        email: "test4@bondhouse.com",
        terms: true,
        institutionId: "bf8a5597-9569-4510-babd-a6d9655e9f0d",
        createdAt: "2020-05-21T05:28:52.982380Z",
        updatedAt: "2020-05-21T05:28:52.982380Z",
        status: "ACTIVE",
        policies: []
      }
    }
  })
);

// eslint-disable-next-line @typescript-eslint/no-empty-function
export function PasswordResetTicketsApi() {
  return {};
}

PasswordResetTicketsApi.prototype.createPasswordResetTicket = jest.fn(() =>
  Promise.resolve({
    data: {
      success: true
    }
  })
);

// eslint-disable-next-line @typescript-eslint/no-empty-function
export function InstitutionInventoryMappingApi() {}

InstitutionInventoryMappingApi.prototype.getInstitutionInventoryMapping = jest.fn(
  () =>
    Promise.resolve({
      data: {
        inventoryMapping: {
          institutionId: "b17c644a-30e8-47fb-a26b-f6743786c3ba",
          inpaas: "inpaas",
          bestFit: "bestfit",
          assetExplorer: "assetexplorer"
        }
      }
    })
);
InstitutionInventoryMappingApi.prototype.createOrUpdateInstitutionInventoryMapping = jest.fn();

// eslint-disable-next-line @typescript-eslint/no-empty-function
export function InstitutionInvestorMappingApi() {}

InstitutionInvestorMappingApi.prototype.createInstitutionInvestorMapping = jest.fn(
  (
    institutionId: string,
    createInvestorMappingRequest?: CreateInvestorMappingRequest
  ) =>
    Promise.resolve({
      data: {
        investorMapping: {
          institutionId,
          investorId: createInvestorMappingRequest?.investorId || ""
        }
      }
    })
);

export { UserType, UserStatus };
