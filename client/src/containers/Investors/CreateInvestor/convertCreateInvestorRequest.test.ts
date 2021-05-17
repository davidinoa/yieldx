import convertCreateInvestorRequest from "./convertCreateInvestorRequest";

describe("Organization inputs", () => {
  test("test", () => {
    expect(convertCreateInvestorRequest).toBeDefined();
  });
});

//   test("match expected values", async () => {
//     const { investorInfo, investorType } = await convertCreateInvestorRequest(
//       ORGANIZATION_EXEMPT_CCORP
//     );
//
//     expect(investorType).toEqual(InvestorType.ORGANIZATION);
//     expect(investorInfo.issuerDirectCommunication).toBeTruthy();
//     expect(investorInfo.disclosures.affiliatedApproval).not.toBeDefined();
//     expect(investorInfo.organizationName).toBeTruthy();
//     expect(investorInfo.organizationTaxId).toBeTruthy();
//     expect(investorInfo.title).toBeTruthy();
//     expect(investorInfo.organization).toBeDefined();
//     // expect(investorInfo.entityDueDiligence).toBeDefined();
//     expect(investorInfo.exemptLegalCustomer).toBeDefined();
//     expect(investorInfo.wnineTaxForm).toBeDefined();
//     if (investorInfo.citizenshipCountry !== "USA") {
//       expect(investorInfo.birthCountry).toBeDefined();
//       expect(investorInfo.isPermanentResident).toBeTruthy();
//     }
//     expect(
//       investorInfo.exemptLegalCustomer?.isExemptLegalCustomer
//     ).toBeDefined();
//     if (investorInfo.exemptLegalCustomer?.isExemptLegalCustomer === true) {
//       expect(investorInfo.exemptLegalCustomer.exemption).toBeDefined();
//       expect(investorInfo.beneficialOwnersAndOfficers).not.toBeDefined();
//     } else {
//       expect(investorInfo.beneficialOwnersAndOfficers).toBeDefined();
//       expect(investorInfo?.exemptLegalCustomer?.exemption).not.toBeDefined();
//     }
//     expect(investorInfo.organization?.entityType).toBeDefined();
//     if (
//       investorInfo.organization?.entityType === EntityType.CCORPORATION ||
//       investorInfo.organization?.entityType === EntityType.SCORPORATION
//     ) {
//       expect(investorInfo.cashAccountAgreement).toBeDefined();
//       expect(investorInfo.llcAccountAgreement).not.toBeDefined();
//     } else {
//       expect(investorInfo.cashAccountAgreement).not.toBeDefined();
//       expect(investorInfo.llcAccountAgreement).toBeDefined();
//     }
//     expect(investorInfo.employment).not.toBeDefined();
//   });
// });

// describe("Individual inputs", () => {
//   test("match expected values", async () => {
//     const { investorInfo, investorType } = await convertCreateInvestorRequest(
//       INDIVIDUAL_FALSE_ALL
//     );
//     expect(investorType).toEqual(InvestorType.INDIVIDUAL);
//     expect(investorInfo.employment).toBeDefined();
//     expect(investorInfo.issuerDirectCommunication).toBeTruthy();
//     if (investorInfo.citizenshipCountry !== "USA") {
//       expect(investorInfo.birthCountry).toBeDefined();
//       expect(investorInfo.isPermanentResident).toBeTruthy();
//     }
//     expect(investorInfo.title).not.toBeDefined();
//     expect(investorInfo.organizationName).not.toBeDefined();
//     expect(investorInfo.organizationTaxId).not.toBeDefined();
//     expect(investorInfo.exemptLegalCustomer).not.toBeDefined();
//     expect(investorInfo.entityDueDiligence).not.toBeDefined();
//     expect(investorInfo.organization).not.toBeDefined();
//     expect(investorInfo.beneficialOwnersAndOfficers).not.toBeDefined();
//     expect(investorInfo.llcAccountAgreement).not.toBeDefined();
//     expect(investorInfo.cashAccountAgreement).not.toBeDefined();
//   });
// });
