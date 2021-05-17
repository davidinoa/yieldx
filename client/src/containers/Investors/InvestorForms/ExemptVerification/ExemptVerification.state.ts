import { boolean, object, string } from "yup";
import { CustomerExemption, ExemptLegalCustomer } from "@bondhouse/investor";

const exemptionMap = {
  DEPARTMENT_OR_AGENCY_OF_FEDERAL_STATE_OR_SUBDIVISION:
    "A department or agency of the United States, of any state, or of any political subdivision of any state",
  NON_BANK_LISTED_ENTITY:
    "Any entity (other than a bank) whose common stock or analogous equity interests are listed on the New York, American or NASDAQ Stock Exchange (each, a listed entity)",
  SECTION_12_SECURITIES_EXCHANGE_ACT_1934_OR_15D:
    "An issuer of a class of security registered under Section 12 of the Securities Exchange Act of 1934 or that is required to file reports under Section 15(d) of that Act",
  SECTION_3_INVESTMENT_COMPANY_ACT_1940:
    "An investment company, as defined in Section 3 of the Investment Company Act of 1940, that is registered with the securities and exchange commission (SEC) under that Act",
  SECTION_202A_INVESTMENT_ADVISORS_ACT_1940:
    "An investment advisor, as defined in Section 202(a) (11) of the Investment Advisors Act of 1940, that is registered with the SEC under that Act",
  SECTION_3_SECURITIES_EXCHANGE_ACT_1934_SECTION_6_OR_17A:
    "An exchange or clearing agency, as defined in Section 3 of the Securities Exchange Act of 1934, that is registered under Section 6 or 17a of that Act",
  ANY_OTHER_SECURITIES_EXCHANGE_ACT_1934:
    "Any other entity registered with the SE under the Securities Exchange Act of 1934",
  COMMODITY_FUTURES_TRADING_COMMISION_REGISTERED:
    "A registered entity, commodity pool operator, commodity trading advisor, retail foreign exchange dealer, swap dealer or major swap participant, each as defined in Section 1a of the Commodity Exchange Act, that is registered with the Commodity Futures Trading Commission",
  PUBLIC_ACCOUNTING_FIRM_SECTION_102_SARBANES_OXLEY:
    "A public accounting firm registered under Section 102 of the Sarbanes-Oxley Act",
  STATE_REGULATED_INSURANCE_COMPANY:
    "An insurance company that is regulated by a State"
};

export interface ExemptFormState {
  exemptLegalCustomer: Partial<ExemptLegalCustomer>;
}

export const defaults: ExemptFormState = {
  exemptLegalCustomer: {
    isExemptLegalCustomer: false,
    exemption: undefined
  }
};

export function getSchema() {
  return object().shape({
    exemptLegalCustomer: object().shape({
      exemption: string().when("isExemptLegalCustomer", {
        is: true,
        then: string().required("Required.")
      }),
      isExemptLegalCustomer: boolean().required()
    })
  });
}

export const schema = getSchema;
export const exemptionOptions = Object.values(CustomerExemption).map(key => {
  return { value: key, label: exemptionMap[key as CustomerExemption] };
});
