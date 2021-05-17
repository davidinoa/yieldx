import { gql } from "@apollo/client";

export default gql`
  query calculatePortfolioIntradayReturn(
    $calculateIntradayReturnRequestInput: CalculateIntradayReturnRequestInput
  ) {
    calculatePortfolioIntradayReturn(
      calculateIntradayReturnRequestInput: $calculateIntradayReturnRequestInput
    ) {
      marketValueReturn
      percentReturn
      totalReturn
    }
  }
`;
