// @ts-nocheck
import React from "react";
import { useHistory, useLocation } from "react-router-dom";
import {
  EmploymentStatus,
  EntityType,
  InvestorType,
  IssuerDirectCommunication,
  TrustedContact
} from "@bondhouse/investor";
import { Formik } from "formik";
import { Form, Root } from "./ReviewCreateInvestor.styles";
import SectionHeading from "./SectionHeading";
import DataRow from "./DataRow";
import { TransitionContext } from "../CreateInvestor/CreateInvestor.state";
import {
  entityMap,
  catAccountHolderMap
} from "../InvestorForms/OrganizationForm/OrganizationForm.state";
import BottomNav from "../CreateInvestor/BottomNav/BottomNav";
import ErrorAlert from "../../../elements/Alert/ErrorAlert";
import {
  amountMap,
  employmentMap,
  experienceMap,
  horizonMap,
  liquidityMap,
  objectiveMap,
  riskMap,
  worthMap
} from "../InvestorForms/InvestmentProfileForm/InvestmentProfileForm.state";

export type FormStep =
  | "investor-type"
  | "organization-info"
  | "personal-info"
  | "contact"
  | "employment"
  | "public-trade"
  | "sec-finra-association"
  | "public-person"
  | "trusted-contact"
  | "investment-profile"
  | "organization-background"
  | "w-9"
  | "w-9-upload"
  | "exempt-legal"
  | "beneficial-ownership"
  | "additional-information"
  | "entity-account-agreement";

interface Props {
  formsState: TransitionContext;
  onEdit: (event: FormStep) => void;
}

function ReviewCreateInvestor({ formsState, onEdit }: Props) {
  const { state } = useLocation<Partial<TransitionContext>>();
  const history = useHistory();
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
    organizationBackground,
    additionalInformation,
    entityAccountAgreement,
    errorMessage
  } = formsState || state;
  const hasOrgInfo =
    investorType === InvestorType.ORGANIZATION && organizationInfo;
  const hasPosition =
    employment?.employmentStatus === EmploymentStatus.EMPLOYED &&
    employment?.positionEmployed &&
    employment?.employer;

  return (
    <Root xs={{ span: 16, offset: 4 }}>
      {errorMessage && <ErrorAlert message={errorMessage} bottomNav />}
      <Formik
        onSubmit={() => {
          history.replace(history.location.pathname, {
            direction: "next"
          });
        }}
        initialValues={{}}
      >
        <>
          <Form id="formik">
            {investorType && (
              <>
                <SectionHeading
                  title="Type of investor"
                  data-testid="ReviewCreateInvestor-InvestorType-Title"
                  onClick={() => onEdit("investor-type")}
                />
                <DataRow label="Investor:" value={investorType} />
              </>
            )}

            {hasOrgInfo && (
              <>
                <SectionHeading
                  title="Organization information"
                  data-testid="ReviewCreateInvestor-OrganizationInfo-Title"
                  onClick={() => onEdit("organization-info")}
                />
                <DataRow
                  label="organization name:"
                  value={organizationInfo.name}
                />
                <DataRow label="EIN/TIN:" value={organizationInfo.taxId} />
                <DataRow
                  label="USA BASED COMPANY:"
                  value={organizationInfo.us ? "Yes" : "No"}
                />
                <DataRow
                  label="entity type:"
                  value={entityMap[organizationInfo.entity]}
                />
                <DataRow
                  label="account holder type:"
                  value={
                    catAccountHolderMap[organizationInfo.catAccountHolderType]
                  }
                />
              </>
            )}

            {personalInfo && (
              <>
                <SectionHeading
                  title="Personal information"
                  onClick={() => onEdit("personal-info")}
                />
                <DataRow
                  label="full name:"
                  value={`${personalInfo.first} ${personalInfo.last}`}
                />
                <DataRow label="ssn/tin:" value={personalInfo.ssn} />
                <DataRow
                  label="date of birth:"
                  value={personalInfo.birthdate}
                />
                <DataRow
                  label="citizenship:"
                  value={personalInfo.usCitizen ? "US Citizen" : "No"}
                />

                {((investorType === InvestorType.INDIVIDUAL &&
                  !personalInfo.usCitizen) ||
                  (investorType === InvestorType.ORGANIZATION &&
                    personalInfo.birthplace)) && (
                  <DataRow
                    label="place of birth:"
                    value={personalInfo.birthplace}
                  />
                )}
              </>
            )}

            {contact && contact.phoneType && (
              <>
                <SectionHeading
                  title={
                    investorType === InvestorType.INDIVIDUAL
                      ? "Contact information"
                      : "Organization contact information"
                  }
                  onClick={() => onEdit("contact")}
                />
                <DataRow label="email:" value={contact.email} />
                <DataRow
                  label="address:"
                  value={[
                    contact.address,
                    `${contact.city}, ${contact.state} ${contact.zip}`,
                    contact.country
                  ]}
                />
                <DataRow
                  label={
                    investorType === InvestorType.ORGANIZATION
                      ? "phone number:"
                      : `${contact.phoneType} number:`
                  }
                  value={contact.phone}
                />
              </>
            )}

            {employment?.employmentStatus && (
              <>
                <SectionHeading
                  title="Employment information"
                  data-testid="ReviewCreateInvestor-Employment-Title"
                  onClick={() => onEdit("employment")}
                />
                <DataRow
                  label="employment:"
                  value={
                    employmentMap[employment.employmentStatus] ||
                    employment.employmentStatus
                  }
                />
                {hasPosition && (
                  <>
                    <DataRow
                      label="company name:"
                      value={employment.employer}
                    />
                    <DataRow
                      label="job position:"
                      value={employment.positionEmployed}
                    />
                  </>
                )}
              </>
            )}

            {publicTrade && (
              <>
                <SectionHeading
                  title="Public trade information"
                  data-testid="ReviewCreateInvestor-PublicTrade-Title"
                  onClick={() => onEdit("public-trade")}
                />
                <DataRow
                  label="control person of a publically traded company:"
                  value={publicTrade.control ? "Yes" : "No"}
                />
                {publicTrade.control && (
                  <DataRow
                    label="Stock Tickers:"
                    value={publicTrade.tickers.map(tick => tick)}
                    boxStyle
                  />
                )}
              </>
            )}

            {secFinraAssociation && (
              <>
                <SectionHeading
                  title="Fill out the SEC/FINRA information"
                  data-testid="ReviewCreateInvestor-SEC-Title"
                  onClick={() => onEdit("sec-finra-association")}
                />
                <DataRow
                  label="relations with professionals From Stock Exchange or FINRA:"
                  value={
                    secFinraAssociation.isAffiliatedExchangeOrFINRA
                      ? "Yes"
                      : "No"
                  }
                />

                {secFinraAssociation.isAffiliatedExchangeOrFINRA && (
                  <>
                    <DataRow
                      label="legal firm name"
                      value={secFinraAssociation.firmName}
                    />
                    {investorType === InvestorType.INDIVIDUAL && (
                      <>
                        <DataRow
                          label="approved form"
                          value={
                            secFinraAssociation.fileList?.item(0)?.name || ""
                          }
                        />
                        {secFinraAssociation.interestedParties.length > 0 && (
                          <DataRow
                            label="interested parties"
                            value={secFinraAssociation.interestedParties.map(
                              party =>
                                `${party.name.companyName} ${party.mailingAddress.streetAddress[0]} ${party.mailingAddress.city}, ${party.mailingAddress.state} ${party.mailingAddress.postalCode}`
                            )}
                          />
                        )}
                      </>
                    )}
                  </>
                )}
              </>
            )}

            {publicPerson && (
              <>
                <SectionHeading
                  title="PEP/Public official information"
                  data-testid="ReviewCreateInvestor-PEP-Title"
                  onClick={() => onEdit("public-person")}
                />
                <DataRow
                  label="politically exposed or public official:"
                  value={publicPerson.public ? "Yes" : "No"}
                />
                {publicPerson.public && (
                  <>
                    <DataRow
                      label="political organization:"
                      value={publicPerson.org}
                    />
                    <DataRow
                      label="family members:"
                      value={publicPerson.family.map(mem => mem)}
                      boxStyle
                    />
                  </>
                )}
              </>
            )}

            {trustedContact?.trustedContactInfo.trustedContact &&
              trustedContact.trustedContactInfo.trustedContactPerson && (
                <>
                  <SectionHeading
                    title={
                      investorType === InvestorType.INDIVIDUAL
                        ? "Trusted contact information"
                        : "Issuers communication"
                    }
                    data-testid="ReviewCreateInvestor-TrustedContact-Title"
                    onClick={() => onEdit("trusted-contact")}
                  />
                  {investorType === InvestorType.INDIVIDUAL && (
                    <DataRow
                      label="granted trading authorization to another party:"
                      value={
                        trustedContact.trustedContactInfo.trustedContact ===
                        TrustedContact.INCLUDE
                          ? "Yes"
                          : "No"
                      }
                    />
                  )}
                  {trustedContact.trustedContactInfo.trustedContact ===
                    TrustedContact.INCLUDE && (
                    <>
                      <DataRow
                        label="full name:"
                        value={`${trustedContact.trustedContactInfo.trustedContactPerson.givenName} ${trustedContact.trustedContactInfo.trustedContactPerson.familyName}`}
                      />
                      <DataRow
                        label="email:"
                        value={
                          trustedContact.trustedContactInfo.trustedContactPerson
                            .emailAddress
                        }
                      />
                    </>
                  )}
                  <DataRow
                    label="Receive issuer communications:"
                    value={
                      trustedContact.issuerDirectCommunication ===
                      IssuerDirectCommunication.ACCEPT
                        ? "Yes"
                        : "No"
                    }
                  />
                </>
              )}

            {investmentProfile?.investmentProfile &&
              investorType === InvestorType.INDIVIDUAL &&
              investmentProfile.suitabilityProfile && (
                <>
                  <SectionHeading
                    title="Investment information"
                    data-testid="ReviewCreateInvestor-InvestmentProfile-Title"
                    onClick={() => onEdit("investment-profile")}
                  />
                  <DataRow
                    label="investment objective:"
                    value={
                      objectiveMap[
                        investmentProfile.investmentProfile?.investmentObjective
                      ] || ""
                    }
                  />
                  <DataRow
                    label="investment experience:"
                    value={
                      experienceMap[
                        investmentProfile.investmentProfile
                          ?.investmentExperience
                      ] || ""
                    }
                  />
                  <DataRow
                    label="liquidity needs:"
                    value={
                      liquidityMap[
                        investmentProfile?.suitabilityProfile.liquidityNeeds
                      ] || ""
                    }
                  />
                  <DataRow
                    label="time horizon:"
                    value={
                      horizonMap[
                        investmentProfile?.suitabilityProfile.timeHorizon
                      ] || ""
                    }
                  />
                  <DataRow
                    label="annual income range:"
                    value={
                      amountMap[
                        investmentProfile?.investmentProfile.annualIncomeUSD
                      ] || ""
                    }
                  />
                  <DataRow
                    label="liquid net worth:"
                    value={
                      worthMap[
                        investmentProfile?.investmentProfile.liquidNetWorthUSD
                      ] || ""
                    }
                  />
                  <DataRow
                    label="total net worth:"
                    value={
                      worthMap[
                        investmentProfile?.investmentProfile.totalNetWorthUSD
                      ] || ""
                    }
                  />
                  <DataRow
                    label="risk tolerance:"
                    value={
                      riskMap[
                        investmentProfile?.investmentProfile.riskTolerance
                      ] || ""
                    }
                  />
                  <DataRow
                    label="tax bracket:"
                    value={
                      investmentProfile?.investmentProfile.federalTaxBracketPercent?.toFixed(
                        2
                      ) || ""
                    }
                  />
                </>
              )}

            {investmentProfile?.investmentProfile &&
              investorType === InvestorType.ORGANIZATION &&
              investmentProfile.suitabilityProfile && (
                <>
                  <SectionHeading
                    title="Select investment profile"
                    data-testid="ReviewCreateInvestor-SelectInvestmentProfile-Title"
                    onClick={() => onEdit("investment-profile")}
                  />
                  <DataRow
                    label="liquidity needs:"
                    value={
                      investmentProfile?.suitabilityProfile.liquidityNeeds || ""
                    }
                  />
                  <DataRow
                    label="time horizon:"
                    value={
                      investmentProfile?.suitabilityProfile.timeHorizon || ""
                    }
                  />
                </>
              )}

            {wNine && (
              <>
                <SectionHeading
                  title="Fill out the W-9 information"
                  data-testid="ReviewCreateInvestor-W9-Title"
                  onClick={() => onEdit("w-9")}
                />
                {wNine.exemptPayeeCode && (
                  <DataRow label="payee code:" value={wNine.exemptPayeeCode} />
                )}
                {wNine.exemptionFromFatca && (
                  <DataRow
                    label="fatca reporting code:"
                    value={wNine.exemptionFromFatca}
                  />
                )}
                <DataRow
                  label="Digital signature:"
                  value={wNine.digitalSignature}
                />
                <DataRow label="Date:" value={wNine.digitalSignatureDate} />
              </>
            )}

            {wNineUpload && organizationBackground && (
              <>
                <SectionHeading
                  title="Organization background information"
                  data-testid="ReviewCreateInvestor-OrgBackground-Title"
                  onClick={() => onEdit("w-9")}
                />
                <DataRow
                  label="disregarded entity for tax purposes:"
                  value={wNineUpload.disregardedEntity === true ? "Yes" : "No"}
                />
                {wNineUpload.disregardedEntity && (
                  <DataRow
                    label="w9 form:"
                    value={wNineUpload.w9FormUpload?.item(0)?.name || ""}
                  />
                )}
                <DataRow
                  label="FOREIGN FINANCIAL INSTITUTION:"
                  value={
                    organizationBackground.isMaintainedForForeignFinancialInstitution
                      ? "Yes"
                      : "No"
                  }
                />
                <DataRow
                  label="FOREIGN BANK:"
                  value={organizationBackground.isForeignBank ? "Yes" : "No"}
                />
              </>
            )}

            {exemptLegal?.exemptLegalCustomer && (
              <>
                <SectionHeading
                  title="Customer legal exemption verification"
                  data-testid="ReviewCreateInvestor-ExemptLegal-Title"
                  onClick={() => onEdit("exempt-legal")}
                />
                <DataRow
                  label="account maintained for legal entity customers who are exempt from identifying:"
                  value={
                    exemptLegal.exemptLegalCustomer.isExemptLegalCustomer
                      ? "Yes"
                      : "No"
                  }
                />
                {exemptLegal?.exemptLegalCustomer.isExemptLegalCustomer && (
                  <DataRow
                    label="exemption type:"
                    value={exemptLegal.exemptLegalCustomer?.exemption || ""}
                  />
                )}
              </>
            )}

            {beneficialOwnership && (
              <>
                <SectionHeading
                  title="Beneficial ownership information"
                  data-testid="ReviewCreateInvestor-BeneficialOwnership-Title"
                  onClick={() => onEdit("beneficial-ownership")}
                />
                <DataRow
                  label="INDUSTRIAL CLASSIFICATION:"
                  value={
                    beneficialOwnership.beneficialOwnersAndOfficers
                      ?.businessClassification || ""
                  }
                />
                <DataRow
                  label="beneficial owner:"
                  value={
                    beneficialOwnership.beneficialOwnersAndOfficers?.beneficialOwners?.map(
                      cv => `${cv.name.familyName} ${cv.name.givenName} |
                      ${cv.address.streetAddress?.map(
                        street => `${street} `
                      )} ${cv.address.city} ${cv.address.country} |
                      ${cv.socialSecurityNumber} / USA`
                    ) || ""
                  }
                />
                <DataRow
                  label="officers:"
                  value={
                    beneficialOwnership.beneficialOwnersAndOfficers?.officers?.map(
                      cv => `${cv.name.familyName} ${cv.name.givenName} |
                      ${cv.address.streetAddress?.map(
                        street => `${street} `
                      )} ${cv.address.city} ${cv.address.country} |
                      ${cv.socialSecurityNumber} / USA`
                    ) || ""
                  }
                />
              </>
            )}

            {additionalInformation && (
              <>
                <SectionHeading
                  title="Organization background information"
                  data-testid="ReviewCreateInvestor-AdditionalInformation-Title"
                  onClick={() => onEdit("additional-information")}
                />
                <DataRow
                  label="Politically exposed person on public official"
                  value={
                    additionalInformation?.politicallyExposedPersons
                      .isPoliticallyExposed
                      ? "Yes"
                      : "No"
                  }
                />
                {additionalInformation?.politicallyExposedPersons
                  .isPoliticallyExposed && (
                  <DataRow
                    label="Beneficial owner:"
                    deepValue={additionalInformation.politicallyExposedPersons?.politicalOfficials.map(
                      official => {
                        return {
                          value: `${official.legalName} |
                            ${official.role} |
                            ${official.politicalTitle} |
                            ${official.politicalOrganization}
                            `,
                          immediateFamily: official.immediateFamily
                        };
                      }
                    )}
                    value={
                      additionalInformation.politicallyExposedPersons
                        ?.politicalOfficials
                    }
                    secondItems={
                      additionalInformation.politicallyExposedPersons
                        ?.politicalOfficials
                    }
                    boxStyle
                  />
                )}
                <DataRow
                  label="primary account activity:"
                  value={
                    additionalInformation?.accountActivity
                      .primaryEntityAccountActivity
                  }
                />
                <DataRow
                  label="Expected withdrawal frequency:"
                  value={
                    additionalInformation?.accountActivity
                      .expectedWithdrawalFrequency
                  }
                />
                <DataRow
                  label="Initial deposit amount:"
                  value={
                    additionalInformation?.accountActivity.initialDepositAmount
                  }
                />
                <DataRow
                  label="Initial deposit source:"
                  value={
                    additionalInformation?.accountActivity.initialDepositSource
                  }
                />
                <DataRow
                  label="All institution name:"
                  value={
                    additionalInformation?.additionalAccounts.institutionNames
                  }
                  boxStyle
                />
                <DataRow
                  label="scope of business:"
                  value={
                    additionalInformation?.additionalAccounts.scopeOfBusiness
                  }
                />
                <DataRow
                  label="Primary funding source:"
                  value={
                    additionalInformation?.additionalAccounts
                      .primaryOngoingFundingSource
                  }
                />
                {additionalInformation?.additionalAccounts.scopeOfBusiness ===
                  "OTHER" && (
                  <DataRow
                    label="Clarity Scope of Business:"
                    value={
                      additionalInformation?.additionalAccounts
                        .scopeOfBusinessClarification
                    }
                  />
                )}
                {additionalInformation?.additionalAccounts
                  .primaryOngoingFundingSource === "OTHER" && (
                  <DataRow
                    label="Clarity Funding Source:"
                    value={
                      additionalInformation?.additionalAccounts
                        .primaryOngoingFundingSourceClarification
                    }
                  />
                )}
              </>
            )}
            {entityAccountAgreement && (
              <>
                <SectionHeading
                  title="Accept account agreement"
                  data-testid="ReviewCreateInvestor-EntityAccountAgreement-Title"
                  onClick={() => onEdit("entity-account-agreement")}
                />
                <DataRow
                  label="CORPORATION NAME:"
                  value={
                    organizationInfo?.entity === EntityType.CCORPORATION ||
                    organizationInfo?.entity === EntityType.SCORPORATION
                      ? entityAccountAgreement.cashAccountAgreement
                          .corporationName
                      : entityAccountAgreement.llcAccountAgreement.entityName
                  }
                />
                <DataRow
                  label="STATE OF INCORPORATION:"
                  value={
                    organizationInfo?.entity === EntityType.CCORPORATION ||
                    organizationInfo?.entity === EntityType.SCORPORATION
                      ? entityAccountAgreement.cashAccountAgreement
                          .stateOfIncorporation
                      : entityAccountAgreement.llcAccountAgreement.stateOfOrigin
                  }
                />
                <DataRow
                  label="STATE OF INCORPORATION:"
                  value={
                    organizationInfo?.entity === EntityType.CCORPORATION ||
                    organizationInfo?.entity === EntityType.SCORPORATION
                      ? entityAccountAgreement.cashAccountAgreement
                          .stateOfIncorporation
                      : entityAccountAgreement.llcAccountAgreement.stateOfOrigin
                  }
                />
                {entityAccountAgreement.llcAccountAgreement?.membersAndManagers
                  .length > 0 && (
                  <DataRow
                    label="Manager(s) Information:"
                    value={
                      entityAccountAgreement.llcAccountAgreement?.membersAndManagers?.map(
                        cv => `${cv.legalName} | ${cv.organizationalRole}`
                      ) || ""
                    }
                  />
                )}
                {entityAccountAgreement.llcAccountAgreement
                  ?.authorizedSignerName !== "" && (
                  <DataRow
                    label="AUTHORIZED SIGNER NAME:"
                    value={
                      entityAccountAgreement.llcAccountAgreement
                        ?.authorizedSignerName
                    }
                  />
                )}
                {entityAccountAgreement.llcAccountAgreement
                  ?.authorizedSignerTitle !== "" && (
                  <DataRow
                    label="AUTHORIZED SIGNER Title:"
                    value={
                      entityAccountAgreement.llcAccountAgreement
                        ?.authorizedSignerTitle
                    }
                  />
                )}
              </>
            )}
          </Form>
          <BottomNav
            onNext={async () => {
              history.replace(history.location.pathname, {
                direction: "next"
              });
            }}
            onPrevious={() => {
              history.replace(history.location.pathname, {
                direction: "back"
              });
            }}
          />
        </>
      </Formik>
    </Root>
  );
}

export default ReviewCreateInvestor;
