import { UserStatus, UserType } from "@bondhouse/iam";
import {
  Amount,
  CatAccountHolderType,
  CustomerExemption,
  EmploymentStatus,
  EntityType,
  InvestmentExperience,
  InvestmentObjective,
  InvestorType,
  IssuerDirectCommunication,
  LiquidityNeeds,
  PhoneType,
  PrimaryOngoingFundingSource,
  RiskTolerance,
  ScopeOfBusiness,
  TimeHorizon,
  TrustedContact,
  Worth
} from "@bondhouse/investor";
import { TransitionContext } from "./CreateInvestor.state";

export const INDIVIDUAL_FALSE_ALL: TransitionContext = {
  user: {
    id: "auth0|5ec6119474dfa00cbf1d53cb",
    first: "Institution",
    last: "New User",
    userType: UserType.ADMIN,
    email: "test4@bondhouse.com",
    terms: true,
    institutionId: "bf8a5597-9569-4510-babd-a6d9655e9f0d",
    createdAt: "2020-05-21T05:28:52.982380Z",
    updatedAt: "2020-05-21T05:28:52.982380Z",
    status: UserStatus.ACTIVE
  },
  updateUI: jest.fn(),
  history: {
    push: jest.fn(() => undefined),
    listen: jest.fn(() => () => undefined),
    action: "REPLACE",
    length: 1,
    replace: () => undefined,
    go: () => undefined,
    goBack: () => undefined,
    goForward: () => undefined,
    block: () => () => undefined,
    createHref: () => "test",
    location: {
      pathname: "/investors/create/review",
      search: "",
      hash: "",
      state: {
        investorType: "INDIVIDUAL",
        personalInfo: {
          first: "0fredo0",
          last: "0pizar0",
          ssn: "000-66-9999",
          birthdate: "07/25/95",
          usCitizen: true,
          birthplace: "",
          citizenshipCountry: "",
          isPermanentResident: false
        },
        contact: {
          email: "test@testing.com",
          address: "372 Westminster Road Apt. 2B",
          city: "Brooklyn",
          state: "NY",
          country: "USA",
          zip: "11218",
          phone: "347-413-5082 ",
          phoneType: "MOBILE"
        },
        wNine: { hasW9: false },
        employment: {
          employmentStatus: "STUDENT",
          employer: "",
          positionEmployed: ""
        },
        publicTrade: { control: false, ticker: "", tickers: [] },
        secFinraAssociation: {
          interestedParties: [],
          interestedParty: {
            name: { companyName: "" },
            mailingAddress: {
              streetAddress: [""],
              city: "",
              state: "",
              postalCode: "",
              country: ""
            }
          },
          isAffiliatedExchangeOrFINRA: false,
          firmName: "",
          fileList: null
        },
        publicPerson: { public: false, org: "", relative: "", family: [] },
        trustedContact: {
          trustedContact: "EXCLUDE",
          trustedContactPerson: {
            givenName: "",
            familyName: "",
            emailAddress: ""
          }
        },
        investmentProfile: {
          investmentProfile: {
            federalTaxBracketPercent: 5,
            investmentObjective: "INCOME",
            investmentExperience: "LIMITED",
            annualIncomeUSD: "FROM50TO100K",
            totalNetWorthUSD: "FROM50TO100K",
            liquidNetWorthUSD: "FROM50TO100K",
            riskTolerance: "MEDIUM"
          },
          suitabilityProfile: {
            timeHorizon: "SHORT",
            liquidityNeeds: "SOMEWHAT_IMPORTANT"
          }
        },
        termsAndAgreement: { agree: true },
        path: "/investors/create"
      },
      key: "nwwgz2"
    }
  },
  path: "/investors/create",
  investorType: InvestorType.INDIVIDUAL,
  personalInfo: {
    first: "0fredo0",
    last: "0pizar0",
    ssn: "000-66-9999",
    birthdate: "07/25/95",
    usCitizen: true,
    birthplace: "",
    citizenshipCountry: "",
    isPermanentResident: false
  },
  contact: {
    email: "test@testing.com",
    address: "372 Westminster Road Apt. 2B",
    city: "Brooklyn",
    state: "NY",
    country: "USA",
    zip: "11218",
    phone: "347-413-5082 ",
    phoneType: PhoneType.MOBILE
  },
  employment: {
    employmentStatus: EmploymentStatus.STUDENT,
    employer: "",
    positionEmployed: ""
  },
  publicTrade: { control: false, ticker: "", tickers: [] },
  secFinraAssociation: {
    interestedParties: [],
    interestedParty: {
      name: { companyName: "" },
      mailingAddress: {
        streetAddress: [""],
        city: "",
        state: "",
        postalCode: "",
        country: ""
      }
    },
    isAffiliatedExchangeOrFINRA: false,
    firmName: "",
    fileList: null
  },
  publicPerson: { public: false, org: "", relative: "", family: [] },
  trustedContact: {
    issuerDirectCommunication: IssuerDirectCommunication.ACCEPT,
    trustedContactInfo: {
      trustedContact: TrustedContact.EXCLUDE,
      trustedContactPerson: { givenName: "", familyName: "", emailAddress: "" }
    }
  },
  investmentProfile: {
    investmentProfile: {
      federalTaxBracketPercent: 5,
      investmentObjective: InvestmentObjective.INCOME,
      investmentExperience: InvestmentExperience.NONE,
      annualIncomeUSD: Amount.FROM50TO100K,
      totalNetWorthUSD: Worth.FROM50TO100K,
      liquidNetWorthUSD: Worth.FROM50TO100K,
      riskTolerance: RiskTolerance.MEDIUM
    },
    suitabilityProfile: {
      timeHorizon: TimeHorizon.SHORT,
      liquidityNeeds: LiquidityNeeds.SOMEWHATIMPORTANT
    }
  },
  termsAndAgreement: { agree: true }
};
export const ORGANIZATION_EXEMPT_CCORP: TransitionContext = {
  user: {
    id: "auth0|5ec6119474dfa00cbf1d53cb",
    first: "Institution",
    last: "New User",
    userType: UserType.ADMIN,
    email: "test4@bondhouse.com",
    terms: true,
    institutionId: "bf8a5597-9569-4510-babd-a6d9655e9f0d",
    createdAt: "2020-05-21T05:28:52.982380Z",
    updatedAt: "2020-05-21T05:28:52.982380Z",
    status: UserStatus.ACTIVE
  },
  updateUI: jest.fn(),
  history: {
    push: jest.fn(() => undefined),
    listen: jest.fn(() => () => undefined),
    action: "REPLACE",
    length: 1,
    replace: () => undefined,
    go: () => undefined,
    goBack: () => undefined,
    goForward: () => undefined,
    block: () => () => undefined,
    createHref: () => "test",
    location: {
      pathname: "/investors/create/review",
      search: "",
      hash: "",
      state: { direction: "next" },
      key: "unoyob"
    }
  },
  path: "/investors/create",
  investorType: InvestorType.ORGANIZATION,
  organizationInfo: {
    catAccountHolderType: CatAccountHolderType.EMPLOYEEACCOUNT,
    name: "test",
    taxId: "666-00-9999",
    us: true,
    entity: EntityType.CCORPORATION
  },
  personalInfo: {
    first: "0fredo0",
    last: "0test0",
    ssn: "666-00-9999",
    birthdate: "07/25/95",
    usCitizen: true,
    birthplace: "",
    citizenshipCountry: "",
    isPermanentResident: false
  },
  contact: {
    email: "test@testing.com",
    address: "372 Westminster Road Apt. 2B",
    city: "Brooklyn",
    state: "NY",
    country: "USA",
    zip: "11218",
    phone: "347-123-4567 ",
    phoneType: PhoneType.MOBILE
  },
  publicTrade: { control: false, ticker: "", tickers: [] },
  secFinraAssociation: {
    interestedParties: [],
    interestedParty: {
      name: { companyName: "" },
      mailingAddress: {
        streetAddress: [""],
        city: "",
        state: "",
        postalCode: "",
        country: ""
      }
    },
    isAffiliatedExchangeOrFINRA: false,
    firmName: "",
    fileList: null
  },
  publicPerson: { public: false, org: "", relative: "", family: [] },
  trustedContact: {
    issuerDirectCommunication: IssuerDirectCommunication.ACCEPT,
    trustedContactInfo: {
      trustedContact: TrustedContact.EXCLUDE,
      trustedContactPerson: { givenName: "", familyName: "", emailAddress: "" }
    }
  },
  investmentProfile: {
    investmentProfile: { federalTaxBracketPercent: 0 },
    suitabilityProfile: {
      liquidityNeeds: LiquidityNeeds.SOMEWHATIMPORTANT,
      timeHorizon: TimeHorizon.AVERAGE
    }
  },
  wNine: {
    exemptionFromFatca: "mockExemptionFatca",
    exemptPayeeCode: "mockPayeeCode",
    hasW9: true
  },
  exemptLegal: {
    exemptLegalCustomer: {
      isExemptLegalCustomer: true,
      exemption: CustomerExemption.DEPARTMENTORAGENCYOFFEDERALSTATEORSUBDIVISION
    }
  },
  beneficialOwnership: {
    beneficialOwnersAndOfficers: { beneficialOwners: [], officers: [] },
    beneficialOwner: {
      name: { givenName: "", familyName: "" },
      dateOfBirth: "",
      address: { streetAddress: [""], country: "USA", city: "" },
      socialSecurityNumber: "",
      identificationNumber: "",
      isUsCitizen: true
    },
    officer: {
      name: { familyName: "", givenName: "" },
      dateOfBirth: "",
      address: { streetAddress: [""], country: "USA", city: "" },
      socialSecurityNumber: "",
      identificationNumber: "",
      isUsCitizen: true
    }
  },
  organizationBackground: {
    isMaintainedForForeignFinancialInstitution: false,
    isForeignBank: false,
    politicalOfficial: {
      legalName: "",
      role: "",
      politicalTitle: "",
      politicalOrganization: "",
      immediateFamily: []
    },
    politicallyExposedPersons: {
      isPoliticallyExposed: true,
      politicalOfficials: []
    },
    accountActivity: {
      primaryEntityAccountActivity: undefined,
      expectedWithdrawalFrequency: undefined,
      willTransactForeignBonds: false,
      willTransactLowPricedSecurities: false,
      initialDepositAmount: 0,
      initialDepositSource: ""
    },
    additionalAccounts: {
      institutionNames: [],
      scopeOfBusiness: ScopeOfBusiness.COMMERCIALRETAILBUSINESS,
      primaryOngoingFundingSource: PrimaryOngoingFundingSource.CORPORATEINCOME,
      confirmEntityDoesNotIssueBearerShares: false,
      primaryOngoingFundingSourceClarification: "",
      scopeOfBusinessClarification: ""
    },
    institution: "",
    familyMember: ""
  },
  entityAccountAgreement: {
    llcAccountAgreement: {
      entityName: "",
      stateOfOrigin: "",
      resolutionAdoptionDate: "",
      authorizedSignerName: "",
      authorizedSignerTitle: "",
      membersAndManagers: [],
      isAuthorizedSignerESigned: false
    },
    memberOrManager: {
      legalName: "",
      organizationalRole: "",
      isManager: false,
      isManagerESigned: false
    },
    cashAccountAgreement: {
      corporationName: "Bondhouse",
      stateOfIncorporation: "NY",
      authorizedOfficerName: "Alfredo",
      authorizedOfficerTitle: "Alfredo",
      isAuthorizedOfficerESigned: true,
      secretaryName: "Alfredo",
      isSecretaryESigned: true,
      articlesOfIncorporationSnapId: ""
    },
    articlesOfIncorporationSnap: ([
      new File(["(⌐□_□)"], "chucknorris.png", { type: "image/png" })
    ] as unknown) as FileList
  },
  termsAndAgreement: { agree: true }
};
