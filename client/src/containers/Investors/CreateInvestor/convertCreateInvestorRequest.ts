/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
import dayjs from "dayjs";
import {
  AssessedRiskRating,
  BeneficialOwnersAndOfficers,
  ContactInformation,
  CreateInvestorRequest,
  CustomerExemption,
  Disclosures,
  EmploymentStatus,
  EntityDueDiligence,
  EntityType,
  ExemptLegalCustomer,
  ExpectedWithdrawalFrequency,
  InvestmentProfile,
  InvestorType,
  Organization,
  PrimaryEntityAccountActivity,
  SuitabilityProfile,
  TrustedContact,
  WNineTaxForm
} from "@bondhouse/investor";
import { TransitionContext } from "./CreateInvestor.state";
import sanitizeObject from "../../../util/sanitizeObject";
import { PersonalInfoState } from "../InvestorForms/PersonalInfoForm/PersonalInfoForm.state";
import { ContactFormState } from "../InvestorForms/ContactForm/ContactForm.state";
import { PublicTradeState } from "../InvestorForms/PublicTradeForm/PublicTradeForm";
import { PublicPersonState } from "../InvestorForms/PublicPersonForm/PublicPersonForm.state";
import { FinraSecState } from "../InvestorForms/FinraSecForm/FinraSec.state";
import uploadInvestorFiles from "../../../util/uploadInvestorFiles";
import uploadW9form from "../../../util/uploadw9form";
import { W9State } from "../InvestorForms/W9Form/W9Form.state";
import { OrganizationInfoState } from "../InvestorForms/OrganizationForm/OrganizationForm.state";
import { ExemptFormState } from "../InvestorForms/ExemptVerification/ExemptVerification.state";
import { AccountAgreementFormState } from "../InvestorForms/AccountAgreement/AccountAgreement.state";
import { OrganizationBackgroundState } from "../InvestorForms/OrganizationBackground/OrganizationBackground.state";
import { W9UploadFormState } from "../InvestorForms/W9UploadForm/W9UploadForm.state";
import { EntityClassificationState } from "../InvestorForms/EntityClassification/EntityClassification.state";
import { AdditionalInformationState } from "../InvestorForms/AdditionalInformation/AdditionalInformation.state";

function convertPersonalInfo({
  first,
  last,
  ssn,
  birthdate,
  birthplace,
  citizenshipCountry,
  usCitizen,
  isPermanentResident
}: PersonalInfoState): {
  givenName: string;
  familyName: string;
  dateOfBirth: string;
  citizenshipCountry: string;
  birthCountry: string;
  socialSecurityNumber: string;
  isPermanentResident: boolean;
} {
  return {
    isPermanentResident,
    givenName: first,
    familyName: last,
    dateOfBirth: dayjs(birthdate).format("YYYY-MM-DD"),
    birthCountry: usCitizen ? "USA" : birthplace,
    citizenshipCountry: usCitizen ? "USA" : citizenshipCountry,
    socialSecurityNumber: ssn
  };
}

function convertContactInfo({
  email,
  address,
  city,
  country,
  zip,
  phone,
  state,
  phoneType
}: ContactFormState): ContactInformation {
  return {
    streetAddress: address,
    city,
    country,
    postalCode: zip,
    phone,
    state,
    emailAddresses: [email],
    phoneType: phoneType!
  };
}

async function convertDisclosures(
  publicTrade: PublicTradeState,
  publicPerson: PublicPersonState,
  finraSec: FinraSecState,
  investorType: InvestorType
): Promise<Disclosures> {
  const { control, tickers } = publicTrade;
  const { public: isPublic, org, family } = publicPerson;
  const {
    interestedParties,
    isAffiliatedExchangeOrFINRA,
    firmName,
    fileList
  } = finraSec;
  const isIndividual = investorType === InvestorType.INDIVIDUAL;
  const hasFiles = fileList && fileList.length > 0;
  const result: Disclosures = {
    isControlPerson: control,
    isAffiliatedExchangeOrFINRA,
    isPoliticallyExposed: isPublic,
    companySymbols: tickers,
    firmName
  };
  if (isPublic) {
    result.politicalExposureDetail = {
      immediateFamily: family,
      politicalOrganization: org
    };
  }

  if (isIndividual && hasFiles && isAffiliatedExchangeOrFINRA) {
    const uploadedFiles = await uploadInvestorFiles(fileList!);
    result.affiliatedApproval = uploadedFiles.map(
      ({ data: { fileId } }) => fileId
    );
    result.interestedParties = interestedParties;
  }

  return result;
}

async function convertOrganizationOnly(
  w9: W9State,
  w9Upload: W9UploadFormState,
  organization: OrganizationInfoState,
  exemptLegal: ExemptFormState,
  beneficialOwnership: EntityClassificationState,
  entityAccountAgreement: AccountAgreementFormState,
  organizationBackground: OrganizationBackgroundState,
  additionalInformation: AdditionalInformationState,
  contactInfo: ContactFormState
): Promise<{
  organizationName: string;
  organizationTaxId: string;
  organization: Organization;
  wnineTaxForm?: WNineTaxForm;
  title: string;
  exemptLegalCustomer: ExemptLegalCustomer;
  beneficialOwnersAndOfficers?: BeneficialOwnersAndOfficers;
  entityDueDiligence: EntityDueDiligence;
}> {
  const { hasW9, exemptionFromFatca, exemptPayeeCode } = w9;
  const { exemptLegalCustomer } = exemptLegal;
  const { beneficialOwnersAndOfficers } = beneficialOwnership || {};
  const { us, entity, name, taxId } = organization;
  let data;
  if (entityAccountAgreement.articlesOfIncorporationSnap) {
    const fileIds = await uploadInvestorFiles(
      entityAccountAgreement.articlesOfIncorporationSnap as FileList
    );
    data = fileIds.map(({ data: { fileId } }) => fileId);
  }
  let w9UploadData;
  if (w9Upload.disregardedEntity) {
    const fileIds = await uploadW9form(w9Upload.w9FormUpload as FileList);
    w9UploadData = fileIds.map(({ data: { fileId } }) => fileId);
  }
  return {
    entityDueDiligence: {
      entityOrAssociatesHaveNegativeNews: false,
      assessedRiskRating: AssessedRiskRating.LOW,
      accountInformation: {
        accountName: organization.name,
        countryOfIncorporation: contactInfo.country,
        businessLocations: [
          `${contactInfo.address} - ${contactInfo.city}, ${contactInfo.state} - ZIP ${contactInfo.zip}`
        ],
        hasRelatedAccounts: false
      },
      politicallyExposedPersons: {
        isPoliticallyExposed: Boolean(
          additionalInformation?.politicallyExposedPersons?.isPoliticallyExposed
        ),
        politicalOfficials:
          additionalInformation?.politicallyExposedPersons?.politicalOfficials
      },
      additionalAccounts: {
        ...(additionalInformation?.additionalAccounts ?? {})
      },
      accountActivity: {
        ...((additionalInformation?.accountActivity as {
          primaryEntityAccountActivity: PrimaryEntityAccountActivity;
          expectedWithdrawalFrequency: ExpectedWithdrawalFrequency;
          initialDepositAmount: number;
          initialDepositSource: string;
        }) ?? {}),
        willTransactForeignBonds: false,
        willTransactLowPricedSecurities: false
      }
    },
    title:
      entityAccountAgreement.cashAccountAgreement.authorizedOfficerTitle ||
      entityAccountAgreement.llcAccountAgreement.authorizedSignerTitle ||
      "",
    organization: {
      entityType: entity,
      usEntity: us,
      isForeignBank: false,
      isMaintainedForForeignFinancialInstitution: false,
      ...(w9Upload.disregardedEntity
        ? {
            ...(w9UploadData &&
            Array.isArray(w9UploadData) &&
            w9UploadData.length > 0
              ? {
                  uploadedWNineForm: w9UploadData[0]!
                }
              : {})
          }
        : {})
    },
    ...(organization.entity === EntityType.SCORPORATION ||
    organization.entity === EntityType.CCORPORATION
      ? {
          cashAccountAgreement: {
            ...entityAccountAgreement.cashAccountAgreement,
            ...(data && Array.isArray(data) && data.length > 0
              ? {
                  articlesOfIncorporationSnapId: data[0]!
                }
              : {})
          }
        }
      : {
          llcAccountAgreement: {
            ...entityAccountAgreement.llcAccountAgreement,
            resolutionAdoptionDate: dayjs().format("YYYY-MM-DD")
          }
        }),
    ...(hasW9
      ? {
          wnineTaxForm: {
            exemptPayeeCode,
            exemptionFromFatca
          }
        }
      : {}),
    organizationName: name,
    organizationTaxId: taxId,
    exemptLegalCustomer: {
      isExemptLegalCustomer: exemptLegalCustomer.isExemptLegalCustomer as Required<
        boolean
      >,
      exemption:
        exemptLegalCustomer.isExemptLegalCustomer === true
          ? (exemptLegalCustomer.exemption as Required<CustomerExemption>)
          : undefined
    },
    beneficialOwnersAndOfficers:
      exemptLegalCustomer.isExemptLegalCustomer === false
        ? (beneficialOwnersAndOfficers as Required<BeneficialOwnersAndOfficers>)
        : undefined
  };
}

async function convertCreateInvestorRequest(
  ctx: TransitionContext
): Promise<CreateInvestorRequest> {
  const {
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
    exemptLegal,
    beneficialOwnership,
    additionalInformation,
    termsAndAgreement,
    entityAccountAgreement,
    organizationBackground
  } = ctx;

  const { trustedContactInfo, issuerDirectCommunication } =
    trustedContact || {};
  const { employer, employmentStatus, positionEmployed } = employment || {};
  const { agree } = termsAndAgreement || {};
  const disclosures = await convertDisclosures(
    publicTrade!,
    publicPerson!,
    secFinraAssociation!,
    investorType!
  );
  let organization = {};
  if (investorType === InvestorType.ORGANIZATION)
    organization = await convertOrganizationOnly(
      wNine!,
      wNineUpload!,
      organizationInfo!,
      exemptLegal!,
      beneficialOwnership!,
      entityAccountAgreement!,
      organizationBackground!,
      additionalInformation!,
      contact!
    );
  return sanitizeObject({
    investorType: investorType!,
    investorInfo: {
      catAccountHolderType: organizationInfo?.catAccountHolderType,
      issuerDirectCommunication,
      ...convertPersonalInfo(personalInfo!),
      contactInformation: convertContactInfo(contact!),
      trustedContactInfo: {
        trustedContact: trustedContactInfo!.trustedContact,
        ...(trustedContactInfo!.trustedContact === TrustedContact.INCLUDE
          ? {
              trustedContactPerson: trustedContactInfo!.trustedContactPerson
            }
          : {})
      },
      disclosures: disclosures!,
      investmentProfile: investmentProfile!.investmentProfile as Required<
        InvestmentProfile
      >,
      suitabilityProfile: investmentProfile!.suitabilityProfile as Required<
        SuitabilityProfile
      >,
      applicantSignature: {
        eSigned: agree!
      },
      ...(investorType === InvestorType.ORGANIZATION
        ? organization
        : {
            employment: {
              employmentStatus: employmentStatus!,
              ...(employmentStatus === EmploymentStatus.EMPLOYED
                ? { employer, positionEmployed }
                : {})
            }
          })
    }
  });
}

export default convertCreateInvestorRequest;
