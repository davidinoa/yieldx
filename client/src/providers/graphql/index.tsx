import React, { ReactChild } from "react";
import {
  ApolloClient,
  ApolloLink,
  ApolloProvider,
  createHttpLink,
  defaultDataIdFromObject,
  InMemoryCache
} from "@apollo/client";
import { BatchHttpLink } from "@apollo/client/link/batch-http";

const httpLink = createHttpLink({ uri: "/graphql" });
const batchLink = new BatchHttpLink({ uri: "/graphql", batchMax: 6 });
// Link that just forwards
const forwardLink = new ApolloLink((operation, forward) => forward(operation));
const link = forwardLink.split(
  operation => {
    return operation.getContext().batchQuery === false;
  },
  httpLink,
  batchLink
);

export const client = new ApolloClient({
  cache: new InMemoryCache({
    // Using this function to normalize cache for data without `id` properties such as Proposal
    dataIdFromObject(responseObject) {
      // eslint-disable-next-line no-underscore-dangle
      switch (responseObject.__typename) {
        case "Proposal":
          return `Proposal:${responseObject.proposalId}`;
        case "Position2":
          return `Position2:${responseObject.id}:${responseObject.portfolioId}`;
        case "PortfolioMapping2":
          return `PortfolioMapping2:${responseObject.portfolioId}`;
        default:
          return defaultDataIdFromObject(responseObject);
      }
    }
  }),
  link,
  connectToDevTools: true
});

export default function GraphqlProvider(props: { children: ReactChild }) {
  return <ApolloProvider client={client} {...props} />;
}
