/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Employment,
  EntityType,
  ExternalEntity,
  Investor,
  InvestorsApi,
  InvestorType
} from "@bondhouse/investor";
import { Portfolio, PortfoliosApi } from "@bondhouse/position-management";
import { RouteComponentProps } from "react-router-dom";
import { InstitutionInvestorMappingApi, User } from "@bondhouse/iam";
import { assign, Machine } from "xstate";
import { AxiosError } from "axios";
import { OrganizationInfoState } from "../InvestorForms/OrganizationForm/OrganizationForm.state";
import { PersonalInfoState } from "../InvestorForms/PersonalInfoForm/PersonalInfoForm.state";
import { ContactFormState } from "../InvestorForms/ContactForm/ContactForm.state";
import { PublicTradeState } from "../InvestorForms/PublicTradeForm/PublicTradeForm";
import { FinraSecState } from "../InvestorForms/FinraSecForm/FinraSec.state";
import { ExemptFormState } from "../InvestorForms/ExemptVerification/ExemptVerification.state";
import { EntityClassificationState } from "../InvestorForms/EntityClassification/EntityClassification.state";
import { InvestmentProfileFormState } from "../InvestorForms/InvestmentProfileForm/InvestmentProfileForm.state";
import { W9State } from "../InvestorForms/W9Form/W9Form.state";
import { OrganizationBackgroundState } from "../InvestorForms/OrganizationBackground/OrganizationBackground.state";
import { AgreementState } from "../InvestorForms/AgreementForm/AgreementForm";
import { AdditionalInformationState } from "../InvestorForms/AdditionalInformation/AdditionalInformation.state";
import { AccountAgreementFormState } from "../InvestorForms/AccountAgreement/AccountAgreement.state";
import { PublicPersonState } from "../InvestorForms/PublicPersonForm/PublicPersonForm.state";
import convertCreateInvestorRequest from "./convertCreateInvestorRequest";
import { TrustedContactState } from "../InvestorForms/TrustedContactForm/TrustedContactForm.state";
import { FormStep } from "../ReviewCreateInvestor/ReviewCreateInvestor";
import { W9UploadFormState } from "../InvestorForms/W9UploadForm/W9UploadForm.state";
import { CrsState } from "../InvestorForms/BhCrsForm/BhCrsForm.state";

export function formHeadings(step: string, investorType?: InvestorType) {
  let personalInfo = "Fill out the personal information";
  let contactInfo = "Fill out the contact information";
  let trustedInfo = "Add a trusted contact";
  if (investorType === InvestorType.ORGANIZATION) {
    personalInfo = "Fill out organization representative information";
    contactInfo = "Fill out the organizations contact information";
    trustedInfo = "Issuers communication";
  }

  const headings: Record<string, string> = {
    "investor-type": "Select a type of investor",
    "organization-info": "Fill out the organization information",
    "personal-info": personalInfo,
    contact: contactInfo,
    employment: "Fill out the employment information",
    "public-trade": "Fill out the public trade information",
    "sec-finra-association": "Fill out the SEC/FINRA information",
    "public-person": "Fill out the public official information",
    "trusted-contact": trustedInfo,
    "investment-profile": "Select investment profile",
    "organization-background": "Fill out organization background information",
    "w-9": "Fill out the W-9 information",
    "w-9-upload": "Fill out organization background information",
    "exempt-legal": "Legal customer exemption verification",
    "beneficial-ownership": "Beneficial ownership information",
    "additional-information": "Additional information",
    "entity-account-agreement": "Accept account agreement",
    "crs-form": "BondHouse customer relationship summary",
    "terms-and-agreement": "Accept the term & conditions",
    review: "Review & create investor account"
  };
  return headings[step];
  // return headings[step];
}

export type TransitionEvent =
  | { type: "NEXT" }
  | { type: "BACK" }
  | { type: "FIRST_STEP" }
  | { type: FormStep };

export interface InvestorFormProps {
  history: RouteComponentProps<any, any, any>["history"];
  location: RouteComponentProps<any, any, any>["location"];
  investorType?: InvestorType;
  entityType?: EntityType;
  isExemptLegalCustomer?: boolean;
}

export interface TransitionContext {
  errorMessage?: string;
  user: User;
  updateUI: (
    investor: Investor,
    cashPortfolio: Portfolio,
    externalEntity: ExternalEntity
  ) => void;
  path: string;
  history: RouteComponentProps<any, any, any>["history"];
  investorType?: InvestorType;
  organizationInfo?: OrganizationInfoState;
  personalInfo?: PersonalInfoState;
  contact?: ContactFormState;
  employment?: Partial<Employment>;
  publicTrade?: PublicTradeState;
  secFinraAssociation?: FinraSecState;
  publicPerson?: PublicPersonState;
  trustedContact?: TrustedContactState;
  investmentProfile?: InvestmentProfileFormState;
  wNine?: W9State;
  wNineUpload?: W9UploadFormState;
  organizationBackground?: OrganizationBackgroundState;
  exemptLegal?: ExemptFormState;
  beneficialOwnership?: EntityClassificationState;
  additionalInformation?: AdditionalInformationState;
  entityAccountAgreement?: AccountAgreementFormState;
  crs?: CrsState;
  termsAndAgreement?: AgreementState;
}

export interface TransitionSchema {
  states: {
    "1-0": {};
    "investor-type": {};
    "organization-info": {};
    "2-0": {};
    "personal-info": {};
    contact: {};
    "3-0": {};
    employment: {};
    "public-trade": {};
    "sec-finra-association": {};
    "public-person": {};
    "trusted-contact": {};
    "4-0": {};
    "5-0": {};
    "6-0": {};
    "investment-profile": {};
    "organization-background": {};
    "w-9": {};
    "w-9-upload": {};
    "exempt-legal": {};
    "beneficial-ownership": {};
    "additional-information": {};
    "entity-account-agreement": {};
    "crs-form": {};
    "terms-and-agreement": {};
    submit: {};
    review: {};
  };
}

const investorsService = new InvestorsApi();
const institutionInvestorMappingService = new InstitutionInvestorMappingApi();
const portfoliosApi = new PortfoliosApi();

const transitionMachine = Machine<
  TransitionContext,
  TransitionSchema,
  TransitionEvent
>({
  invoke: {
    src: ctx => cb => {
      const unsubscribe = ctx.history.listen((location, action) => {
        if (action === "POP") cb("BACK");
        if (action === "REPLACE") {
          if (location.state.direction === "next") cb("NEXT");
          if (location.state.direction === "back") cb("BACK");
        }
      });

      return () => unsubscribe();
    }
  },
  initial: "investor-type",
  states: {
    "investor-type": {
      meta: {
        test: ({
          queryByTestId
        }: {
          queryByTestId: (id: string) => HTMLElement;
        }) => {
          expect(queryByTestId("select-investor-type")).toBeDefined();
        }
      },
      on: {
        NEXT: "1-0"
      },
      exit: assign(ctx => ({
        investorType: ctx.history.location.state.investorType
      }))
    },
    "1-0": {
      on: {
        "": [
          {
            target: "organization-info",
            cond: ctx => ctx.investorType === InvestorType.ORGANIZATION,
            actions: ctx =>
              ctx.history.push(
                `${ctx.path}/organization-info`,
                ctx.organizationInfo
              )
          },
          {
            target: "personal-info",
            cond: ctx => ctx.investorType === InvestorType.INDIVIDUAL,
            actions: ctx =>
              ctx.history.push(`${ctx.path}/personal-info`, ctx.personalInfo)
          }
        ]
      }
    },
    "organization-info": {
      on: {
        BACK: {
          target: "investor-type",
          actions: ctx =>
            ctx.history.push(`${ctx.path}/investor-type`, ctx.investorType)
        },
        NEXT: {
          target: "personal-info",
          actions: ctx =>
            ctx.history.push(`${ctx.path}/personal-info`, ctx.personalInfo)
        }
      },
      exit: assign({
        organizationInfo: ({ history }) => history.location.state.formValues
      })
    },
    "2-0": {
      on: {
        "": [
          {
            target: "investor-type",
            cond: ctx => ctx.investorType === InvestorType.INDIVIDUAL,
            actions: ctx =>
              ctx.history.push(`${ctx.path}/investor-type`, ctx.investorType)
          },
          {
            target: "organization-info",
            cond: ctx => ctx.investorType === InvestorType.ORGANIZATION,
            actions: ctx =>
              ctx.history.push(
                `${ctx.path}/organization-info`,
                ctx.organizationInfo
              )
          }
        ]
      }
    },
    "personal-info": {
      on: {
        BACK: "2-0",
        NEXT: {
          target: "contact",
          actions: ctx => ctx.history.push(`${ctx.path}/contact`, ctx.contact)
        },
        FIRST_STEP: {
          target: "investor-type"
        }
      },
      exit: assign({
        personalInfo: ({ history }) => history.location.state.formValues
      })
    },
    "3-0": {
      on: {
        "": [
          {
            target: "employment",
            cond: ctx => ctx.investorType === InvestorType.INDIVIDUAL,
            actions: ctx =>
              ctx.history.push(`${ctx.path}/employment`, ctx.employment)
          },
          {
            target: "public-trade",
            cond: ctx => ctx.investorType === InvestorType.ORGANIZATION,
            actions: ctx =>
              ctx.history.push(`${ctx.path}/public-trade`, ctx.publicTrade)
          }
        ]
      }
    },
    contact: {
      on: {
        BACK: {
          target: "personal-info",
          actions: ctx =>
            ctx.history.push(`${ctx.path}/personal-info`, ctx.personalInfo)
        },
        NEXT: "3-0"
      },
      exit: assign({
        contact: ({ history }) => history.location.state.formValues
      })
    },
    employment: {
      on: {
        BACK: {
          target: "contact",
          actions: ctx => ctx.history.push(`${ctx.path}/contact`, ctx.contact)
        },
        NEXT: {
          target: "public-trade",
          actions: ctx =>
            ctx.history.push(`${ctx.path}/public-trade`, ctx.publicTrade)
        }
      },
      exit: assign({
        employment: ({ history }) => history.location.state.formValues
      })
    },
    "4-0": {
      on: {
        "": [
          {
            target: "employment",
            cond: ctx => ctx.investorType === InvestorType.INDIVIDUAL,
            actions: ctx =>
              ctx.history.push(`${ctx.path}/employment`, ctx.employment)
          },
          {
            target: "contact",
            cond: ctx => ctx.investorType === InvestorType.ORGANIZATION,
            actions: ctx => ctx.history.push(`${ctx.path}/contact`, ctx.contact)
          }
        ]
      }
    },
    "public-trade": {
      on: {
        BACK: {
          target: "4-0"
        },
        NEXT: {
          target: "sec-finra-association",
          actions: ctx =>
            ctx.history.push(
              `${ctx.path}/sec-finra-association`,
              ctx.secFinraAssociation
            )
        }
      },
      exit: assign({
        publicTrade: ({ history }) => history.location.state.formValues
      })
    },
    "sec-finra-association": {
      on: {
        BACK: {
          target: "public-trade",
          actions: ctx =>
            ctx.history.push(`${ctx.path}/public-trade`, ctx.publicTrade)
        },
        NEXT: {
          target: "public-person",
          actions: ctx =>
            ctx.history.push(`${ctx.path}/public-person`, ctx.publicPerson)
        }
      },
      exit: assign({
        secFinraAssociation: ({ history }) => history.location.state.formValues
      })
    },
    "public-person": {
      on: {
        BACK: {
          target: "sec-finra-association",
          actions: ctx =>
            ctx.history.push(
              `${ctx.path}/sec-finra-association`,
              ctx.secFinraAssociation
            )
        },
        NEXT: {
          target: "trusted-contact",
          actions: ctx =>
            ctx.history.push(`${ctx.path}/trusted-contact`, ctx.trustedContact)
        }
      },
      exit: assign({
        publicPerson: ({ history }) => history.location.state.formValues
      })
    },
    "trusted-contact": {
      on: {
        BACK: {
          target: "public-person",
          actions: ctx =>
            ctx.history.push(`${ctx.path}/public-person`, ctx.publicPerson)
        },
        NEXT: {
          target: "investment-profile",
          actions: ctx =>
            ctx.history.push(
              `${ctx.path}/investment-profile`,
              ctx.investmentProfile
            )
        }
      },
      exit: assign({
        trustedContact: ({ history }) => history.location.state.formValues
      })
    },
    "5-0": {
      on: {
        "": [
          {
            target: "crs-form",
            cond: ctx => ctx.investorType === InvestorType.INDIVIDUAL,
            actions: ctx => ctx.history.push(`${ctx.path}/crs-form`, ctx.crs)
          },
          {
            target: "w-9",
            cond: ctx => ctx.investorType === InvestorType.ORGANIZATION,
            actions: ctx => ctx.history.push(`${ctx.path}/w-9`, ctx.wNine)
          }
        ]
      }
    },
    "investment-profile": {
      on: {
        BACK: {
          target: "trusted-contact",
          actions: ctx =>
            ctx.history.push(`${ctx.path}/trusted-contact`, ctx.trustedContact)
        },
        NEXT: "5-0"
      },
      exit: assign({
        investmentProfile: ({ history }) => history.location.state.formValues
      })
    },
    "w-9": {
      on: {
        BACK: {
          target: "investment-profile",
          actions: ctx =>
            ctx.history.push(
              `${ctx.path}/investment-profile`,
              ctx.investmentProfile
            )
        },
        NEXT: {
          target: "w-9-upload",
          actions: ctx =>
            ctx.history.push(`${ctx.path}/w-9-upload`, ctx.wNineUpload)
        }
      },
      exit: assign({
        wNine: ({ history }) => history.location.state.formValues
      })
    },
    "w-9-upload": {
      on: {
        BACK: {
          target: "w-9",
          actions: ctx => ctx.history.push(`${ctx.path}/w-9`, ctx.wNine)
        },
        NEXT: {
          target: "organization-background",
          actions: ctx =>
            ctx.history.push(
              `${ctx.path}/organization-background`,
              ctx.organizationBackground
            )
        }
      },
      exit: assign({
        wNineUpload: ({ history }) => history.location.state.formValues
      })
    },
    "organization-background": {
      on: {
        BACK: {
          target: "w-9-upload",
          actions: ctx =>
            ctx.history.push(`${ctx.path}/w-9-upload`, ctx.wNineUpload)
        },
        NEXT: {
          target: "exempt-legal",
          actions: ctx =>
            ctx.history.push(`${ctx.path}/exempt-legal`, ctx.exemptLegal)
        }
      },
      exit: assign({
        organizationBackground: ({ history }) =>
          history.location.state.formValues
      })
    },
    "exempt-legal": {
      on: {
        BACK: {
          target: "organization-background",
          actions: ctx =>
            ctx.history.push(
              `${ctx.path}/organization-background`,
              ctx.organizationBackground
            )
        },
        NEXT: "6-0"
      },
      exit: assign({
        exemptLegal: ({ history }) => history.location.state.formValues
      })
    },
    "6-0": {
      on: {
        "": [
          {
            cond: ctx =>
              ctx.exemptLegal?.exemptLegalCustomer.isExemptLegalCustomer ===
              false,
            target: "beneficial-ownership",
            actions: ctx =>
              ctx.history.push(
                `${ctx.path}/beneficial-ownership`,
                ctx.beneficialOwnership
              )
          },
          {
            cond: ctx =>
              ctx.exemptLegal?.exemptLegalCustomer.isExemptLegalCustomer ===
              true,
            target: "entity-account-agreement",
            actions: ctx =>
              ctx.history.push(
                `${ctx.path}/entity-account-agreement`,
                ctx.entityAccountAgreement
              )
          }
        ]
      }
    },
    "beneficial-ownership": {
      on: {
        BACK: {
          target: "exempt-legal",
          actions: ctx =>
            ctx.history.push(`${ctx.path}/exempt-legal`, ctx.exemptLegal)
        },
        NEXT: {
          target: "additional-information",
          actions: ctx =>
            ctx.history.push(
              `${ctx.path}/additional-information`,
              ctx.additionalInformation
            )
        }
      },
      exit: assign({
        beneficialOwnership: ({ history }) => history.location.state.formValues
      })
    },
    "additional-information": {
      on: {
        BACK: {
          target: "beneficial-ownership",
          actions: ctx =>
            ctx.history.push(
              `${ctx.path}/beneficial-ownership`,
              ctx.beneficialOwnership
            )
        },
        NEXT: {
          target: "entity-account-agreement",
          actions: ctx =>
            ctx.history.push(
              `${ctx.path}/entity-account-agreement`,
              ctx.entityAccountAgreement
            )
        }
      },
      exit: assign({
        additionalInformation: ({ history }) =>
          history.location.state.formValues
      })
    },
    "entity-account-agreement": {
      on: {
        BACK: [
          {
            cond: ctx =>
              ctx.exemptLegal?.exemptLegalCustomer.isExemptLegalCustomer ===
              false,
            target: "additional-information",
            actions: ctx =>
              ctx.history.push(
                `${ctx.path}/additional-information`,
                ctx.additionalInformation
              )
          },
          {
            cond: ctx =>
              ctx.exemptLegal?.exemptLegalCustomer.isExemptLegalCustomer ===
              true,
            target: "exempt-legal",
            actions: ctx =>
              ctx.history.push(`${ctx.path}/exempt-legal`, ctx.exemptLegal)
          }
        ],
        NEXT: {
          target: "crs-form",
          actions: ctx => ctx.history.push(`${ctx.path}/crs-form`, ctx.crs)
        }
      },
      exit: assign({
        entityAccountAgreement: ({ history }) =>
          history.location.state.formValues
      })
    },
    "crs-form": {
      on: {
        BACK: [
          {
            cond: ctx => ctx.investorType === InvestorType.ORGANIZATION,
            target: "entity-account-agreement",
            actions: ctx =>
              ctx.history.push(
                `${ctx.path}/entity-account-agreement`,
                ctx.entityAccountAgreement
              )
          },
          {
            cond: ctx => ctx.investorType === InvestorType.INDIVIDUAL,
            target: "investment-profile",
            actions: ctx =>
              ctx.history.push(
                `${ctx.path}/investment-profile`,
                ctx.investmentProfile
              )
          }
        ],
        NEXT: {
          target: "terms-and-agreement",
          actions: ctx =>
            ctx.history.push(
              `${ctx.path}/terms-and-agreement`,
              ctx.termsAndAgreement
            )
        }
      },
      exit: assign({
        crs: ({ history }) => history.location.state.formValues
      })
    },
    "terms-and-agreement": {
      on: {
        BACK: {
          target: "crs-form",
          actions: ctx => ctx.history.push(`${ctx.path}/crs-form`, ctx.crs)
        },
        NEXT: {
          target: "review",
          actions: ({
            history,
            path,
            investorType,
            organizationInfo,
            personalInfo,
            contact,
            employment,
            publicTrade,
            secFinraAssociation,
            publicPerson,
            trustedContact,
            investmentProfile,
            wNine,
            wNineUpload,
            organizationBackground,
            exemptLegal,
            beneficialOwnership,
            additionalInformation,
            entityAccountAgreement,
            termsAndAgreement
          }) =>
            history.push(`${path}/review`, {
              investorType,
              organizationInfo,
              personalInfo,
              contact,
              employment,
              publicTrade,
              secFinraAssociation,
              publicPerson,
              trustedContact,
              investmentProfile,
              wNine,
              wNineUpload,
              organizationBackground,
              exemptLegal,
              termsAndAgreement,
              beneficialOwnership,
              additionalInformation,
              entityAccountAgreement,
              path
            })
        }
      },
      exit: assign({
        termsAndAgreement: ({ history }) => history.location.state.formValues
      })
    },
    review: {
      on: {
        "investor-type": {
          target: "investor-type",
          actions: ctx =>
            ctx.history.push(`${ctx.path}/investor-type`, ctx.investorType)
        },
        "organization-info": {
          target: "organization-info",
          actions: ctx =>
            ctx.history.push(
              `${ctx.path}/organization-info`,
              ctx.organizationInfo
            )
        },
        "personal-info": {
          target: "personal-info",
          actions: ctx =>
            ctx.history.push(`${ctx.path}/personal-info`, ctx.personalInfo)
        },
        contact: {
          target: "contact",
          actions: ctx => ctx.history.push(`${ctx.path}/contact`, ctx.contact)
        },
        employment: {
          target: "employment",
          actions: ctx =>
            ctx.history.push(`${ctx.path}/employment`, ctx.employment)
        },
        "public-trade": {
          target: "public-trade",
          actions: ctx =>
            ctx.history.push(`${ctx.path}/public-trade`, ctx.publicTrade)
        },
        "sec-finra-association": {
          target: "sec-finra-association",
          actions: ctx =>
            ctx.history.push(
              `${ctx.path}/sec-finra-association`,
              ctx.secFinraAssociation
            )
        },
        "public-person": {
          target: "public-person",
          actions: ctx =>
            ctx.history.push(`${ctx.path}/public-person`, ctx.publicPerson)
        },
        "trusted-contact": {
          target: "trusted-contact",
          actions: ctx =>
            ctx.history.push(`${ctx.path}/trusted-contact`, ctx.trustedContact)
        },
        "investment-profile": {
          target: "investment-profile",
          actions: ctx =>
            ctx.history.push(
              `${ctx.path}/investment-profile`,
              ctx.investmentProfile
            )
        },
        "organization-background": {
          target: "organization-background",
          actions: ctx =>
            ctx.history.push(
              `${ctx.path}/organization-background`,
              ctx.organizationBackground
            )
        },
        "w-9": {
          target: "w-9",
          actions: ctx => ctx.history.push(`${ctx.path}/w-9`, ctx.wNine)
        },
        "w-9-upload": {
          target: "w-9-upload",
          actions: ctx =>
            ctx.history.push(`${ctx.path}/w-9-upload`, ctx.wNineUpload)
        },
        "exempt-legal": {
          target: "exempt-legal",
          actions: ctx =>
            ctx.history.push(`${ctx.path}/exempt-legal`, ctx.exemptLegal)
        },
        "beneficial-ownership": {
          target: "beneficial-ownership",
          actions: ctx =>
            ctx.history.push(
              `${ctx.path}/beneficial-ownership`,
              ctx.beneficialOwnership
            )
        },
        "additional-information": {
          target: "additional-information",
          actions: ctx =>
            ctx.history.push(
              `${ctx.path}/additional-information`,
              ctx.additionalInformation
            )
        },
        "entity-account-agreement": {
          target: "entity-account-agreement",
          actions: ctx =>
            ctx.history.push(
              `${ctx.path}/entity-account-agreement`,
              ctx.entityAccountAgreement
            )
        },
        BACK: {
          target: "terms-and-agreement",
          actions: ctx =>
            ctx.history.push(
              `${ctx.path}/terms-and-agreement`,
              ctx.termsAndAgreement
            )
        },
        NEXT: "submit"
      }
    },
    submit: {
      id: "submit",
      invoke: {
        src: ctx => createInvestor(ctx),
        onDone: {
          actions: ctx => {
            ctx.history.push(ctx.path.split("/create")[0]);
          }
        },
        onError: {
          target: "review",
          actions: assign({
            errorMessage: (_, e) =>
              (e.data as AxiosError)?.response?.data?.message ||
              e.data?.message ||
              "Unknown server error"
          })
        }
      }
    }
  }
});

export async function createInvestor(ctx: TransitionContext) {
  const createInvestorRequest = await convertCreateInvestorRequest(ctx);
  const {
    data: { investor }
  } = await investorsService.createInvestor(createInvestorRequest);
  const { institutionId } = ctx.user;
  if (institutionId)
    await institutionInvestorMappingService.createInstitutionInvestorMapping(
      institutionId,
      { investorId: investor.id }
    );
  else
    await institutionInvestorMappingService.createInstitutionInvestorMapping(
      "bondhouse",
      { investorId: investor.id }
    );
  const {
    data: { externalAccounts, portfolio }
  } = await portfoliosApi.createInvestorCashPortfolio(investor.id);
  ctx.updateUI(investor, portfolio, externalAccounts[0]);
  return {
    type: "done.invoke.submit"
  };
}

export default transitionMachine;
