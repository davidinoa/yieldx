import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Meta, Story } from "@storybook/react/types-6-0";
import { MockedProvider, MockedResponse } from "@apollo/client/testing";
import {
  Position2,
  RoverPortfolioAnalyzerAnalyzePortfolioDocument,
  RoverPortfolioAnalyzerAnalyzePortfolioQuery,
  Status
} from "providers/graphql/hooks";
import { MOCK_ANALYSIS } from "test/mock-data/mockAnalysis";
import { SelectPortfolioRow } from "./SelectPortfolioRow";

const positions: Array<Position2> = [
  {
    assetId: "dccc676e-46f4-4a3d-a827-21d3716cc644",
    costBasis: null,
    createdAt: "2020-10-01T12:22:19.934344Z",
    id: "1ba56897-f6dd-45d9-806b-c053677e85d9",
    metadata: null,
    portfolioId: "ba172c60-5bb1-4f99-b900-980df874fa9a",
    quantity: 321,
    settled: 0,
    tradeDate: null,
    unsettled: 321,
    updatedAt: "2020-10-01T12:22:19.934344Z",
    __typename: "Position2"
  }
];
const name = "mock portfolio";
const createdAt = "Jan 4, 2021";
const mocks: MockedResponse<RoverPortfolioAnalyzerAnalyzePortfolioQuery>[] = [
  {
    request: {
      query: RoverPortfolioAnalyzerAnalyzePortfolioDocument,
      variables: {
        analyzePortfolioRequestInput: {
          portfolio: {
            positions,
            createdAt,
            currency: "USD",
            id: "temp-portfolio-id",
            name,
            status: Status.Ready
          }
        }
      }
    },
    result: {
      data: {
        roverPortfolioAnalyzerAnalyzePortfolio: {
          analysis: MOCK_ANALYSIS,
          __typename: "AnalyzePortfolioResponse"
        }
      }
    }
  }
];
const SelectPortfolioRowTemplate: Story<
  Parameters<typeof SelectPortfolioRow>[0]
> = args => (
  <MockedProvider mocks={mocks} addTypename={false}>
    <SelectPortfolioRow {...args} />
  </MockedProvider>
);

export const SelectPortfolioRowStory = SelectPortfolioRowTemplate.bind({});
SelectPortfolioRowStory.args = {
  name,
  createdAt,
  positions
};

export default {
  component: SelectPortfolioRow,
  title: "components/SelectPortfolioRow"
} as Meta;
