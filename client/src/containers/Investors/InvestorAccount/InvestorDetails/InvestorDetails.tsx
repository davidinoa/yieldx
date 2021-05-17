import React from "react";
import {
  InvestorsApi,
  InvestorType as InvestorTypeSDK,
  PhoneType as PhoneTypeSDK
} from "@bondhouse/investor";
import { ApexAccountsApi } from "@bondhouse/apex";
import dayjs from "dayjs";
import { useHistory, useLocation } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { UserType } from "@bondhouse/iam";
import SectionHeading from "../../ReviewCreateInvestor/SectionHeading";
import DataRow from "../../ReviewCreateInvestor/DataRow";
import { entityMap } from "../../InvestorForms/OrganizationForm/OrganizationForm.state";
import ContactForm from "../../InvestorForms/ContactForm/ContactForm";
import {
  amountMap,
  employmentMap,
  experienceMap,
  horizonMap,
  liquidityMap,
  objectiveMap,
  riskMap,
  worthMap
} from "../../InvestorForms/InvestmentProfileForm/InvestmentProfileForm.state";
import PersonalInfoForm from "../../InvestorForms/PersonalInfoForm/PersonalInfoForm";
import { userState } from "services/userState";
import { EmbeddedForm } from "./InvestorDetails.styles";
import {
  Investor,
  InvestorInfo,
  ApexAccount2,
  InvestorType,
  TrustedContact,
  EmploymentStatus,
  AccountStatus2
} from "providers/graphql/hooks";

const investorsApi = new InvestorsApi();
const apexAccountsApi = new ApexAccountsApi();

interface Props {
  investor: Investor;
  apexAccount: ApexAccount2;
}

function InvestorDetails({ investor, apexAccount }: Props) {
  const location = useLocation();
  const history = useHistory();
  const { investorType, investorInfo } = investor;
  const user = useRecoilValue(userState);
  const CreateAccountLevel =
    user.userType === UserType.ADMIN ||
    user.institutionId === "bondhouse" ||
    user.institutionId === undefined;
  const {
    contactInformation,
    trustedContactInfo,
    beneficialOwnersAndOfficers,
    exemptLegalCustomer,
    employment,
    disclosures,
    investmentProfile,
    suitabilityProfile,
    wnineTaxForm,
    organization,
    givenName: organizationName,
    organizationTaxId
  } = (investorInfo as InvestorInfo & { organizationTaxId: string }) ?? {};

  const [editContact, setEditContact] = React.useState(false);
  const [editPersonal, setEditPersonal] = React.useState(false);
  const apexStatus = apexAccount.status;
  const thirtyMinAgo = dayjs().subtract(30, "minute");
  const createdAt = dayjs(apexAccount.createdAt);
  const canEdit =
    CreateAccountLevel &&
    (thirtyMinAgo.isSame(createdAt) || thirtyMinAgo.isAfter(createdAt));
  return (
    <div className="mt-5">
      {investorType && (
        <>
          <SectionHeading title="Type of investor" />
          <DataRow label="Investor:" value={investorType} />
        </>
      )}

      {investorType === InvestorType.Organization &&
        organization &&
        organizationName &&
        organizationTaxId && (
          <>
            <SectionHeading title="Organization information" />
            <DataRow label="organization name:" value={organizationName} />
            <DataRow label="EIN/TIN:" value={organizationTaxId} />
            <DataRow
              label="USA BASED COMPANY:"
              value={organization.usEntity ? "true" : "false"}
            />
            <DataRow
              label="entity type:"
              value={entityMap[organization.entityType]}
            />
          </>
        )}

      {investorInfo && investor.id && (
        <>
          <SectionHeading
            title="Personal information"
            data-testid="InvestorAccount-InvestorDetails-EditButton"
            onClick={() => setEditPersonal(prev => !prev)}
            editStatus={apexStatus === AccountStatus2.Active && canEdit}
          />
          {editPersonal ? (
            <EmbeddedForm>
              <PersonalInfoForm
                history={history}
                location={location}
                onSubmit={async vals => {
                  await investorsApi.updateInvestor(investor.id, {
                    investorInfo: {
                      givenName: vals.first,
                      familyName: vals.last
                    }
                  });
                  await apexAccountsApi.updateApexAccountByInvestorId(
                    investor?.id || ""
                  );
                  window.location.reload();
                }}
                initialVals={{
                  first: investorInfo.givenName,
                  last: investorInfo.familyName,
                  ssn: "",
                  birthdate: "",
                  usCitizen: true,
                  birthplace: "",
                  citizenshipCountry: "",
                  isPermanentResident: false
                }}
              />
            </EmbeddedForm>
          ) : (
            <>
              <DataRow
                label="full name:"
                value={`${investorInfo.givenName} ${investorInfo.familyName}`}
              />
              <DataRow
                label="us citizen:"
                value={investorInfo.citizenshipCountry === "USA" ? "Yes" : "No"}
              />
              <DataRow
                label="place of birth:"
                value={investorInfo.birthCountry!}
              />
            </>
          )}
        </>
      )}

      {contactInformation && (
        <>
          <SectionHeading
            title="Contact information"
            data-testid="InvestorAccount-InvestorDetails-EditContactButton"
            onClick={() => setEditContact(prev => !prev)}
            editStatus={apexStatus === AccountStatus2.Active && canEdit}
          />
          {investor.id && editContact ? (
            <EmbeddedForm>
              <ContactForm
                history={history}
                location={location}
                investorType={investorType.toString() as InvestorTypeSDK}
                onSubmit={async values => {
                  await investorsApi.updateInvestor(investor?.id, {
                    investorInfo: {
                      contactInformation: {
                        streetAddress: values.address,
                        state: values.state,
                        postalCode: values.zip,
                        city: values.city,
                        country: values.country,
                        phone: values.phone,
                        phoneType: values.phoneType,
                        emailAddresses: [values.email]
                      }
                    }
                  });
                  await apexAccountsApi.updateApexAccountByInvestorId(
                    investor?.id || ""
                  );
                  window.location.reload();
                }}
                initialVals={{
                  address: contactInformation.streetAddress,
                  state: contactInformation.state,
                  zip: contactInformation.postalCode,
                  city: contactInformation.city,
                  country: contactInformation.country,
                  phone: contactInformation.phone,
                  phoneType: contactInformation.phoneType.toString() as PhoneTypeSDK,
                  email: contactInformation.emailAddresses[0] as string
                }}
              />
            </EmbeddedForm>
          ) : (
            <>
              <DataRow
                label="email:"
                value={contactInformation.emailAddresses[0] as string}
              />
              <DataRow
                label="address:"
                value={[
                  contactInformation.streetAddress,
                  `${contactInformation.city}, ${contactInformation.state} ${contactInformation.postalCode}`,
                  contactInformation.country
                ]}
              />
              <DataRow
                label={contactInformation.phoneType.toLowerCase()}
                value={contactInformation.phone}
              />
            </>
          )}
        </>
      )}

      {employment?.employmentStatus && (
        <>
          <SectionHeading title="Employment information" />
          <DataRow
            label="employment:"
            value={
              employmentMap[employment.employmentStatus] ||
              employment.employmentStatus
            }
          />
          {employment?.employmentStatus === EmploymentStatus.Employed &&
            employment?.positionEmployed &&
            employment?.employer && (
              <>
                <DataRow label="company name:" value={employment.employer} />
                <DataRow
                  label="job position:"
                  value={employment.positionEmployed}
                />
              </>
            )}
        </>
      )}

      {disclosures && (
        <>
          <SectionHeading title="Public trade information" />
          <DataRow
            label="control person of a publicly traded company:"
            value={disclosures.isControlPerson ? "Yes" : "No"}
          />
          {disclosures.isControlPerson && disclosures.companySymbols && (
            <DataRow
              label="stock tickers:"
              value={disclosures.companySymbols as string[]}
              boxStyle
            />
          )}
          <SectionHeading title="SEC/FINRA information" />
          <DataRow
            label="relations with professionals From Stock Exchange or FINRA:"
            value={disclosures.isAffiliatedExchangeOrFINRA ? "Yes" : "No"}
          />

          {disclosures.isAffiliatedExchangeOrFINRA &&
            disclosures.firmName &&
            disclosures.affiliatedApproval &&
            disclosures.interestedParties && (
              <>
                <DataRow label="legal firm name" value={disclosures.firmName} />
                <DataRow
                  label="approved form"
                  value={disclosures.affiliatedApproval as string[]}
                />
                <DataRow
                  label="interested parties"
                  value={disclosures.interestedParties.map(
                    party => `${party?.name.companyName}`
                  )}
                />
              </>
            )}
          <SectionHeading title="PEP/Public official information" />
          <DataRow
            label="politically exposed or public official:"
            value={disclosures.isPoliticallyExposed ? "Yes" : "No"}
          />
          {disclosures.isPoliticallyExposed &&
            disclosures.politicalExposureDetail && (
              <>
                <DataRow
                  label="political organization:"
                  value={
                    disclosures.politicalExposureDetail.politicalOrganization
                  }
                />
                <DataRow
                  label="family members:"
                  value={
                    disclosures.politicalExposureDetail
                      .immediateFamily as string[]
                  }
                  boxStyle
                />
              </>
            )}
        </>
      )}

      {trustedContactInfo && (
        <>
          <SectionHeading title="Trusted contact information" />
          <DataRow
            label="granted trading authorization to another party:"
            value={
              trustedContactInfo.trustedContact === TrustedContact.Include
                ? "Yes"
                : "No"
            }
          />
          {trustedContactInfo.trustedContact === TrustedContact.Include &&
            trustedContactInfo.trustedContactPerson && (
              <>
                <DataRow
                  label="full name:"
                  value={`${trustedContactInfo.trustedContactPerson.givenName} ${trustedContactInfo.trustedContactPerson.familyName}`}
                />
                <DataRow
                  label="email:"
                  value={trustedContactInfo.trustedContactPerson.emailAddress}
                />
              </>
            )}
        </>
      )}

      {investmentProfile && suitabilityProfile && (
        <>
          <SectionHeading title="Investment information" />
          <DataRow
            label="investment objective:"
            value={
              objectiveMap[investmentProfile.investmentObjective] ||
              investmentProfile.investmentObjective
            }
          />
          <DataRow
            label="investment experience:"
            value={
              experienceMap[investmentProfile.investmentExperience] ||
              investmentProfile.investmentExperience
            }
          />
          <DataRow
            label="liquidity needs:"
            value={
              liquidityMap[suitabilityProfile.liquidityNeeds] ||
              suitabilityProfile.liquidityNeeds
            }
          />
          <DataRow
            label="time horizon:"
            value={
              horizonMap[suitabilityProfile.timeHorizon] ||
              suitabilityProfile.timeHorizon
            }
          />
          <DataRow
            label="annual income range:"
            value={
              amountMap[investmentProfile.annualIncomeUSD] ||
              investmentProfile.annualIncomeUSD
            }
          />
          <DataRow
            label="liquid net worth:"
            value={
              worthMap[investmentProfile.liquidNetWorthUSD] ||
              investmentProfile.liquidNetWorthUSD
            }
          />
          <DataRow
            label="total net worth:"
            value={
              worthMap[investmentProfile.totalNetWorthUSD] ||
              investmentProfile.totalNetWorthUSD
            }
          />
          <DataRow
            label="risk tolerance:"
            value={
              riskMap[investmentProfile.riskTolerance] ||
              investmentProfile.riskTolerance
            }
          />
          <DataRow
            label="tax bracket:"
            value={investmentProfile.federalTaxBracketPercent?.toFixed(2)}
          />
        </>
      )}
      {investorType === InvestorType.Organization && (
        <>
          <SectionHeading title="W-9 information" />
          <DataRow
            label="w-9 certificate:"
            value={wnineTaxForm ? "Yes" : "No"}
          />

          {wnineTaxForm && (
            <DataRow
              label="fatca reporting code:"
              value={wnineTaxForm.exemptionFromFatca!}
            />
          )}
          {wnineTaxForm && wnineTaxForm.exemptPayeeCode && (
            <DataRow label="payee code:" value={wnineTaxForm.exemptPayeeCode} />
          )}
        </>
      )}

      {exemptLegalCustomer && beneficialOwnersAndOfficers && (
        <>
          <SectionHeading title="Exempt legal customer information" />
          <DataRow
            label="exemption:"
            value={exemptLegalCustomer.isExemptLegalCustomer ? "Yes" : "No"}
          />
          {exemptLegalCustomer.isExemptLegalCustomer &&
            exemptLegalCustomer.exemption && (
              <DataRow
                label="exemption type:"
                value={exemptLegalCustomer.exemption}
              />
            )}
          {!exemptLegalCustomer.isExemptLegalCustomer && (
            <>
              <DataRow
                label="industry classification:"
                value={beneficialOwnersAndOfficers.businessClassification!}
              />
              <DataRow
                label="beneficial owners:"
                value={
                  beneficialOwnersAndOfficers.beneficialOwners?.map(
                    cv => cv?.name.familyName || ""
                  ) || ""
                }
              />
              <DataRow
                label="officers:"
                value={
                  beneficialOwnersAndOfficers?.officers?.map(
                    cv => cv?.name.familyName || ""
                  ) || ""
                }
              />
            </>
          )}
        </>
      )}
    </div>
  );
}

export default InvestorDetails;
