import React, { useState } from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Meta, Story } from "@storybook/react/types-6-0";
import { MockedProvider, MockedResponse } from "@apollo/client/testing";
import {
  AppType2,
  PortfolioStatus,
  Position2,
  PositionManagementGetPortfoliosDocument,
  PositionManagementGetPortfoliosQuery,
  RoverPortfolioAnalyzerAnalyzePortfolioDocument,
  RoverPortfolioAnalyzerAnalyzePortfolioQuery,
  Status
} from "providers/graphql/hooks";
import { MOCK_ANALYSIS } from "test/mock-data/mockAnalysis";
import { SelectPortfolio } from "./SelectPortfolio";

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
    updatedAt: "2020-10-01T12:22:19.934344Z"
  }
];
const name = "mock portfolio";
const createdAt = "Jan 4, 2021";

const analysisResponse: MockedResponse<RoverPortfolioAnalyzerAnalyzePortfolioQuery> = {
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
};
const getPortfoliosResponse: MockedResponse<PositionManagementGetPortfoliosQuery> = {
  result: {
    data: {
      positionManagementGetPortfolios: {
        __typename: "GetPortfoliosResponse",
        portfolios: [
          {
            accountNumber: null,
            description: null,
            metadata: null,
            positions,
            createdAt,
            currency: "USD",
            id: "temp-portfolio-id",
            name,
            status: PortfolioStatus.Ready,
            app: AppType2.Custom,
            updatedAt: null
          }
        ]
      }
    }
  },
  request: {
    query: PositionManagementGetPortfoliosDocument
  }
};
const mocks = [analysisResponse, getPortfoliosResponse];
const SelectPortfolioTemplate: Story = () => {
  const [selectedPortfolioId, setSelected] = useState<string>();
  return (
    <MockedProvider mocks={mocks} addTypename={false}>
      <SelectPortfolio
        selectedPortfolioId={selectedPortfolioId}
        onChange={setSelected}
      />
    </MockedProvider>
  );
};

export const SelectPortfolioStory = SelectPortfolioTemplate.bind({});
SelectPortfolioStory.args = {};

export default {
  component: SelectPortfolio,
  title: "views/SelectPortfolio"
} as Meta;
