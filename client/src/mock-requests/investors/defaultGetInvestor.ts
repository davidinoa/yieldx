import { rest } from "msw";

export const defaultGetInvestor = rest.get(
  "/apis/investor/v1/investors/mock-investor-id",
  (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        investor: {
          id: "mock-investor-id",
          investorType: "INDIVIDUAL",
          investorInfo: {
            givenName: "0Investor0",
            familyName: "0Mihir0",
            citizenshipCountry: "USA",
            contactInformation: {
              streetAddress: "3186 Hwy 171 North",
              city: "Fayette ",
              state: "AL",
              postalCode: "35555",
              country: "USA",
              phone: "573-849-5345 ",
              phoneType: "MOBILE",
              emailAddresses: ["email@email.com"]
            },
            trustedContactInfo: { trustedContact: "EXCLUDE" },
            disclosures: {
              isControlPerson: true,
              isAffiliatedExchangeOrFINRA: false,
              isPoliticallyExposed: true,
              companySymbols: ["APPL"],
              politicalExposureDetail: {
                immediateFamily: ["kjsfgb"],
                politicalOrganization: "Porhnj"
              }
            },
            suitabilityProfile: {
              timeHorizon: "SHORT",
              liquidityNeeds: "SOMEWHAT_IMPORTANT"
            },
            applicantSignature: { eSigned: true },
            birthCountry: "USA",
            isPermanentResident: false,
            employment: { employmentStatus: "UNEMPLOYED" },
            investmentProfile: {
              investmentObjective: "INCOME",
              investmentExperience: "GOOD",
              annualIncomeUSD: "FROM25TO50K",
              liquidNetWorthUSD: "FROM50TO100K",
              totalNetWorthUSD: "FROM50TO100K",
              riskTolerance: "MEDIUM",
              federalTaxBracketPercent: 45.33
            },
            issuerDirectCommunication: "ACCEPT"
          },
          createdAt: "2020-09-01T13:16:19.806795Z",
          updatedAt: "2020-09-01T13:16:19.806795Z"
        }
      })
    );
  }
);
