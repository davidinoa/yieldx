import { gql } from "@apollo/client";
import * as Apollo from "@apollo/client";

import * as ApolloTypes from "./types";

export * from "./types";

export enum PortfolioType {
  Live = "LIVE",
  External = "EXTERNAL"
}

export const DeleteAccountAchRelationshipDocument = /* #__PURE__ */ gql`
  mutation deleteAccountAchRelationship($accountId: String!, $id: String!) {
    deleteAccountAchRelationship(accountId: $accountId, id: $id) {
      apexAchRelationship {
        accountId
        apexRelationshipId
        createdAt
        id
        linkedBankAccountId
        metadata
        status
        updatedAt
      }
    }
  }
`;
export type DeleteAccountAchRelationshipMutationFn = Apollo.MutationFunction<
  ApolloTypes.DeleteAccountAchRelationshipMutation,
  ApolloTypes.DeleteAccountAchRelationshipMutationVariables
>;

/**
 * __useDeleteAccountAchRelationshipMutation__
 *
 * To run a mutation, you first call `useDeleteAccountAchRelationshipMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteAccountAchRelationshipMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteAccountAchRelationshipMutation, { data, loading, error }] = useDeleteAccountAchRelationshipMutation({
 *   variables: {
 *      accountId: // value for 'accountId'
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteAccountAchRelationshipMutation(
  baseOptions?: Apollo.MutationHookOptions<
    ApolloTypes.DeleteAccountAchRelationshipMutation,
    ApolloTypes.DeleteAccountAchRelationshipMutationVariables
  >
) {
  return Apollo.useMutation<
    ApolloTypes.DeleteAccountAchRelationshipMutation,
    ApolloTypes.DeleteAccountAchRelationshipMutationVariables
  >(DeleteAccountAchRelationshipDocument, baseOptions);
}
export type DeleteAccountAchRelationshipMutationHookResult = ReturnType<
  typeof useDeleteAccountAchRelationshipMutation
>;
export type DeleteAccountAchRelationshipMutationResult = Apollo.MutationResult<
  ApolloTypes.DeleteAccountAchRelationshipMutation
>;
export type DeleteAccountAchRelationshipMutationOptions = Apollo.BaseMutationOptions<
  ApolloTypes.DeleteAccountAchRelationshipMutation,
  ApolloTypes.DeleteAccountAchRelationshipMutationVariables
>;
export const DeleteAccountTransferDocument = /* #__PURE__ */ gql`
  mutation deleteAccountTransfer($accountId: String!, $id: String!) {
    deleteAccountTransfer(accountId: $accountId, id: $id) {
      transfer {
        accountId
        achRelationshipId
        amount
        apexTransferId
        createdAt
        direction
        id
        metadata
        status
        transferId
        transferMethod
        updatedAt
      }
    }
  }
`;
export type DeleteAccountTransferMutationFn = Apollo.MutationFunction<
  ApolloTypes.DeleteAccountTransferMutation,
  ApolloTypes.DeleteAccountTransferMutationVariables
>;

/**
 * __useDeleteAccountTransferMutation__
 *
 * To run a mutation, you first call `useDeleteAccountTransferMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteAccountTransferMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteAccountTransferMutation, { data, loading, error }] = useDeleteAccountTransferMutation({
 *   variables: {
 *      accountId: // value for 'accountId'
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteAccountTransferMutation(
  baseOptions?: Apollo.MutationHookOptions<
    ApolloTypes.DeleteAccountTransferMutation,
    ApolloTypes.DeleteAccountTransferMutationVariables
  >
) {
  return Apollo.useMutation<
    ApolloTypes.DeleteAccountTransferMutation,
    ApolloTypes.DeleteAccountTransferMutationVariables
  >(DeleteAccountTransferDocument, baseOptions);
}
export type DeleteAccountTransferMutationHookResult = ReturnType<
  typeof useDeleteAccountTransferMutation
>;
export type DeleteAccountTransferMutationResult = Apollo.MutationResult<
  ApolloTypes.DeleteAccountTransferMutation
>;
export type DeleteAccountTransferMutationOptions = Apollo.BaseMutationOptions<
  ApolloTypes.DeleteAccountTransferMutation,
  ApolloTypes.DeleteAccountTransferMutationVariables
>;
export const DeleteAccountsAchRelationshipsDocument = /* #__PURE__ */ gql`
  mutation deleteAccountsAchRelationships($accountNumber: String!) {
    deleteAccountsAchRelationships(accountNumber: $accountNumber) {
      achRelationship {
        accountNumber
        achRelationshipId
        createdAt
        linkedBankAccountId
        status
        updatedAt
      }
    }
  }
`;
export type DeleteAccountsAchRelationshipsMutationFn = Apollo.MutationFunction<
  ApolloTypes.DeleteAccountsAchRelationshipsMutation,
  ApolloTypes.DeleteAccountsAchRelationshipsMutationVariables
>;

/**
 * __useDeleteAccountsAchRelationshipsMutation__
 *
 * To run a mutation, you first call `useDeleteAccountsAchRelationshipsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteAccountsAchRelationshipsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteAccountsAchRelationshipsMutation, { data, loading, error }] = useDeleteAccountsAchRelationshipsMutation({
 *   variables: {
 *      accountNumber: // value for 'accountNumber'
 *   },
 * });
 */
export function useDeleteAccountsAchRelationshipsMutation(
  baseOptions?: Apollo.MutationHookOptions<
    ApolloTypes.DeleteAccountsAchRelationshipsMutation,
    ApolloTypes.DeleteAccountsAchRelationshipsMutationVariables
  >
) {
  return Apollo.useMutation<
    ApolloTypes.DeleteAccountsAchRelationshipsMutation,
    ApolloTypes.DeleteAccountsAchRelationshipsMutationVariables
  >(DeleteAccountsAchRelationshipsDocument, baseOptions);
}
export type DeleteAccountsAchRelationshipsMutationHookResult = ReturnType<
  typeof useDeleteAccountsAchRelationshipsMutation
>;
export type DeleteAccountsAchRelationshipsMutationResult = Apollo.MutationResult<
  ApolloTypes.DeleteAccountsAchRelationshipsMutation
>;
export type DeleteAccountsAchRelationshipsMutationOptions = Apollo.BaseMutationOptions<
  ApolloTypes.DeleteAccountsAchRelationshipsMutation,
  ApolloTypes.DeleteAccountsAchRelationshipsMutationVariables
>;
export const DeleteAccountsTransfersDocument = /* #__PURE__ */ gql`
  mutation deleteAccountsTransfers(
    $accountNumber: String!
    $transferNumber: String!
  ) {
    deleteAccountsTransfers(
      accountNumber: $accountNumber
      transferNumber: $transferNumber
    ) {
      transfer {
        accountNumber
        amount
        createdAt
        direction
        linkedBankAccountId
        status
        transferId
        transferMethod
        transferNumber
        updatedAt
      }
    }
  }
`;
export type DeleteAccountsTransfersMutationFn = Apollo.MutationFunction<
  ApolloTypes.DeleteAccountsTransfersMutation,
  ApolloTypes.DeleteAccountsTransfersMutationVariables
>;

/**
 * __useDeleteAccountsTransfersMutation__
 *
 * To run a mutation, you first call `useDeleteAccountsTransfersMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteAccountsTransfersMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteAccountsTransfersMutation, { data, loading, error }] = useDeleteAccountsTransfersMutation({
 *   variables: {
 *      accountNumber: // value for 'accountNumber'
 *      transferNumber: // value for 'transferNumber'
 *   },
 * });
 */
export function useDeleteAccountsTransfersMutation(
  baseOptions?: Apollo.MutationHookOptions<
    ApolloTypes.DeleteAccountsTransfersMutation,
    ApolloTypes.DeleteAccountsTransfersMutationVariables
  >
) {
  return Apollo.useMutation<
    ApolloTypes.DeleteAccountsTransfersMutation,
    ApolloTypes.DeleteAccountsTransfersMutationVariables
  >(DeleteAccountsTransfersDocument, baseOptions);
}
export type DeleteAccountsTransfersMutationHookResult = ReturnType<
  typeof useDeleteAccountsTransfersMutation
>;
export type DeleteAccountsTransfersMutationResult = Apollo.MutationResult<
  ApolloTypes.DeleteAccountsTransfersMutation
>;
export type DeleteAccountsTransfersMutationOptions = Apollo.BaseMutationOptions<
  ApolloTypes.DeleteAccountsTransfersMutation,
  ApolloTypes.DeleteAccountsTransfersMutationVariables
>;
export const DeleteExternalPortfolioDocument = /* #__PURE__ */ gql`
  mutation deleteExternalPortfolio($id: String!) {
    deleteExternalPortfolio(id: $id) {
      deleted
    }
  }
`;
export type DeleteExternalPortfolioMutationFn = Apollo.MutationFunction<
  ApolloTypes.DeleteExternalPortfolioMutation,
  ApolloTypes.DeleteExternalPortfolioMutationVariables
>;

/**
 * __useDeleteExternalPortfolioMutation__
 *
 * To run a mutation, you first call `useDeleteExternalPortfolioMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteExternalPortfolioMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteExternalPortfolioMutation, { data, loading, error }] = useDeleteExternalPortfolioMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteExternalPortfolioMutation(
  baseOptions?: Apollo.MutationHookOptions<
    ApolloTypes.DeleteExternalPortfolioMutation,
    ApolloTypes.DeleteExternalPortfolioMutationVariables
  >
) {
  return Apollo.useMutation<
    ApolloTypes.DeleteExternalPortfolioMutation,
    ApolloTypes.DeleteExternalPortfolioMutationVariables
  >(DeleteExternalPortfolioDocument, baseOptions);
}
export type DeleteExternalPortfolioMutationHookResult = ReturnType<
  typeof useDeleteExternalPortfolioMutation
>;
export type DeleteExternalPortfolioMutationResult = Apollo.MutationResult<
  ApolloTypes.DeleteExternalPortfolioMutation
>;
export type DeleteExternalPortfolioMutationOptions = Apollo.BaseMutationOptions<
  ApolloTypes.DeleteExternalPortfolioMutation,
  ApolloTypes.DeleteExternalPortfolioMutationVariables
>;
export const DeleteInvestorDocument = /* #__PURE__ */ gql`
  mutation deleteInvestor($investorId: String!) {
    deleteInvestor(investorId: $investorId) {
      investor {
        createdAt
        id
        investorType
        status
        updatedAt
      }
    }
  }
`;
export type DeleteInvestorMutationFn = Apollo.MutationFunction<
  ApolloTypes.DeleteInvestorMutation,
  ApolloTypes.DeleteInvestorMutationVariables
>;

/**
 * __useDeleteInvestorMutation__
 *
 * To run a mutation, you first call `useDeleteInvestorMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteInvestorMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteInvestorMutation, { data, loading, error }] = useDeleteInvestorMutation({
 *   variables: {
 *      investorId: // value for 'investorId'
 *   },
 * });
 */
export function useDeleteInvestorMutation(
  baseOptions?: Apollo.MutationHookOptions<
    ApolloTypes.DeleteInvestorMutation,
    ApolloTypes.DeleteInvestorMutationVariables
  >
) {
  return Apollo.useMutation<
    ApolloTypes.DeleteInvestorMutation,
    ApolloTypes.DeleteInvestorMutationVariables
  >(DeleteInvestorDocument, baseOptions);
}
export type DeleteInvestorMutationHookResult = ReturnType<
  typeof useDeleteInvestorMutation
>;
export type DeleteInvestorMutationResult = Apollo.MutationResult<
  ApolloTypes.DeleteInvestorMutation
>;
export type DeleteInvestorMutationOptions = Apollo.BaseMutationOptions<
  ApolloTypes.DeleteInvestorMutation,
  ApolloTypes.DeleteInvestorMutationVariables
>;
export const DeleteInvestorLinkedBankAccountDocument = /* #__PURE__ */ gql`
  mutation deleteInvestorLinkedBankAccount(
    $investorId: String!
    $linkedBankAccountId: String!
  ) {
    deleteInvestorLinkedBankAccount(
      investorId: $investorId
      linkedBankAccountId: $linkedBankAccountId
    ) {
      linkedBankAccount {
        id
        status
      }
    }
  }
`;
export type DeleteInvestorLinkedBankAccountMutationFn = Apollo.MutationFunction<
  ApolloTypes.DeleteInvestorLinkedBankAccountMutation,
  ApolloTypes.DeleteInvestorLinkedBankAccountMutationVariables
>;

/**
 * __useDeleteInvestorLinkedBankAccountMutation__
 *
 * To run a mutation, you first call `useDeleteInvestorLinkedBankAccountMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteInvestorLinkedBankAccountMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteInvestorLinkedBankAccountMutation, { data, loading, error }] = useDeleteInvestorLinkedBankAccountMutation({
 *   variables: {
 *      investorId: // value for 'investorId'
 *      linkedBankAccountId: // value for 'linkedBankAccountId'
 *   },
 * });
 */
export function useDeleteInvestorLinkedBankAccountMutation(
  baseOptions?: Apollo.MutationHookOptions<
    ApolloTypes.DeleteInvestorLinkedBankAccountMutation,
    ApolloTypes.DeleteInvestorLinkedBankAccountMutationVariables
  >
) {
  return Apollo.useMutation<
    ApolloTypes.DeleteInvestorLinkedBankAccountMutation,
    ApolloTypes.DeleteInvestorLinkedBankAccountMutationVariables
  >(DeleteInvestorLinkedBankAccountDocument, baseOptions);
}
export type DeleteInvestorLinkedBankAccountMutationHookResult = ReturnType<
  typeof useDeleteInvestorLinkedBankAccountMutation
>;
export type DeleteInvestorLinkedBankAccountMutationResult = Apollo.MutationResult<
  ApolloTypes.DeleteInvestorLinkedBankAccountMutation
>;
export type DeleteInvestorLinkedBankAccountMutationOptions = Apollo.BaseMutationOptions<
  ApolloTypes.DeleteInvestorLinkedBankAccountMutation,
  ApolloTypes.DeleteInvestorLinkedBankAccountMutationVariables
>;
export const DeleteInvestorTransferDocument = /* #__PURE__ */ gql`
  mutation deleteInvestorTransfer($investorId: String!, $transferId: String!) {
    deleteInvestorTransfer(investorId: $investorId, transferId: $transferId) {
      transfer {
        amount
        createdAt
        currency
        direction
        externalEntity {
          externalEntityId
          externalEntityType
        }
        id
        investorId
        ledgerId
        linkedBankAccountId
        metadata
        portfolioId
        status
        transferMethod
        updatedAt
      }
    }
  }
`;
export type DeleteInvestorTransferMutationFn = Apollo.MutationFunction<
  ApolloTypes.DeleteInvestorTransferMutation,
  ApolloTypes.DeleteInvestorTransferMutationVariables
>;

/**
 * __useDeleteInvestorTransferMutation__
 *
 * To run a mutation, you first call `useDeleteInvestorTransferMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteInvestorTransferMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteInvestorTransferMutation, { data, loading, error }] = useDeleteInvestorTransferMutation({
 *   variables: {
 *      investorId: // value for 'investorId'
 *      transferId: // value for 'transferId'
 *   },
 * });
 */
export function useDeleteInvestorTransferMutation(
  baseOptions?: Apollo.MutationHookOptions<
    ApolloTypes.DeleteInvestorTransferMutation,
    ApolloTypes.DeleteInvestorTransferMutationVariables
  >
) {
  return Apollo.useMutation<
    ApolloTypes.DeleteInvestorTransferMutation,
    ApolloTypes.DeleteInvestorTransferMutationVariables
  >(DeleteInvestorTransferDocument, baseOptions);
}
export type DeleteInvestorTransferMutationHookResult = ReturnType<
  typeof useDeleteInvestorTransferMutation
>;
export type DeleteInvestorTransferMutationResult = Apollo.MutationResult<
  ApolloTypes.DeleteInvestorTransferMutation
>;
export type DeleteInvestorTransferMutationOptions = Apollo.BaseMutationOptions<
  ApolloTypes.DeleteInvestorTransferMutation,
  ApolloTypes.DeleteInvestorTransferMutationVariables
>;
export const DeletePortfolioPreferencesDocument = /* #__PURE__ */ gql`
  mutation deletePortfolioPreferences($portfolioId: String!) {
    deletePortfolioPreferences(portfolioId: $portfolioId) {
      deleted
    }
  }
`;
export type DeletePortfolioPreferencesMutationFn = Apollo.MutationFunction<
  ApolloTypes.DeletePortfolioPreferencesMutation,
  ApolloTypes.DeletePortfolioPreferencesMutationVariables
>;

/**
 * __useDeletePortfolioPreferencesMutation__
 *
 * To run a mutation, you first call `useDeletePortfolioPreferencesMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeletePortfolioPreferencesMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deletePortfolioPreferencesMutation, { data, loading, error }] = useDeletePortfolioPreferencesMutation({
 *   variables: {
 *      portfolioId: // value for 'portfolioId'
 *   },
 * });
 */
export function useDeletePortfolioPreferencesMutation(
  baseOptions?: Apollo.MutationHookOptions<
    ApolloTypes.DeletePortfolioPreferencesMutation,
    ApolloTypes.DeletePortfolioPreferencesMutationVariables
  >
) {
  return Apollo.useMutation<
    ApolloTypes.DeletePortfolioPreferencesMutation,
    ApolloTypes.DeletePortfolioPreferencesMutationVariables
  >(DeletePortfolioPreferencesDocument, baseOptions);
}
export type DeletePortfolioPreferencesMutationHookResult = ReturnType<
  typeof useDeletePortfolioPreferencesMutation
>;
export type DeletePortfolioPreferencesMutationResult = Apollo.MutationResult<
  ApolloTypes.DeletePortfolioPreferencesMutation
>;
export type DeletePortfolioPreferencesMutationOptions = Apollo.BaseMutationOptions<
  ApolloTypes.DeletePortfolioPreferencesMutation,
  ApolloTypes.DeletePortfolioPreferencesMutationVariables
>;
export const DeletePubsubStacksSubscriptionDocument = /* #__PURE__ */ gql`
  mutation deletePubsubStacksSubscription($id: String!) {
    deletePubsubStacksSubscription(id: $id) {
      deleted
    }
  }
`;
export type DeletePubsubStacksSubscriptionMutationFn = Apollo.MutationFunction<
  ApolloTypes.DeletePubsubStacksSubscriptionMutation,
  ApolloTypes.DeletePubsubStacksSubscriptionMutationVariables
>;

/**
 * __useDeletePubsubStacksSubscription__
 *
 * To run a mutation, you first call `useDeletePubsubStacksSubscription` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeletePubsubStacksSubscription` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deletePubsubStacksSubscription, { data, loading, error }] = useDeletePubsubStacksSubscription({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeletePubsubStacksSubscription(
  baseOptions?: Apollo.MutationHookOptions<
    ApolloTypes.DeletePubsubStacksSubscriptionMutation,
    ApolloTypes.DeletePubsubStacksSubscriptionMutationVariables
  >
) {
  return Apollo.useMutation<
    ApolloTypes.DeletePubsubStacksSubscriptionMutation,
    ApolloTypes.DeletePubsubStacksSubscriptionMutationVariables
  >(DeletePubsubStacksSubscriptionDocument, baseOptions);
}
export type DeletePubsubStacksSubscriptionHookResult = ReturnType<
  typeof useDeletePubsubStacksSubscription
>;
export type DeletePubsubStacksSubscriptionMutationResult = Apollo.MutationResult<
  ApolloTypes.DeletePubsubStacksSubscriptionMutation
>;
export type DeletePubsubStacksSubscriptionMutationOptions = Apollo.BaseMutationOptions<
  ApolloTypes.DeletePubsubStacksSubscriptionMutation,
  ApolloTypes.DeletePubsubStacksSubscriptionMutationVariables
>;
export const DeletePubsubStacksTopicDocument = /* #__PURE__ */ gql`
  mutation deletePubsubStacksTopic($id: String!) {
    deletePubsubStacksTopic(id: $id) {
      deleted
    }
  }
`;
export type DeletePubsubStacksTopicMutationFn = Apollo.MutationFunction<
  ApolloTypes.DeletePubsubStacksTopicMutation,
  ApolloTypes.DeletePubsubStacksTopicMutationVariables
>;

/**
 * __useDeletePubsubStacksTopicMutation__
 *
 * To run a mutation, you first call `useDeletePubsubStacksTopicMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeletePubsubStacksTopicMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deletePubsubStacksTopicMutation, { data, loading, error }] = useDeletePubsubStacksTopicMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeletePubsubStacksTopicMutation(
  baseOptions?: Apollo.MutationHookOptions<
    ApolloTypes.DeletePubsubStacksTopicMutation,
    ApolloTypes.DeletePubsubStacksTopicMutationVariables
  >
) {
  return Apollo.useMutation<
    ApolloTypes.DeletePubsubStacksTopicMutation,
    ApolloTypes.DeletePubsubStacksTopicMutationVariables
  >(DeletePubsubStacksTopicDocument, baseOptions);
}
export type DeletePubsubStacksTopicMutationHookResult = ReturnType<
  typeof useDeletePubsubStacksTopicMutation
>;
export type DeletePubsubStacksTopicMutationResult = Apollo.MutationResult<
  ApolloTypes.DeletePubsubStacksTopicMutation
>;
export type DeletePubsubStacksTopicMutationOptions = Apollo.BaseMutationOptions<
  ApolloTypes.DeletePubsubStacksTopicMutation,
  ApolloTypes.DeletePubsubStacksTopicMutationVariables
>;
export const DeleteRoleDocument = /* #__PURE__ */ gql`
  mutation deleteRole($id: String!) {
    deleteRole(id: $id) {
      message
      timestamp
    }
  }
`;
export type DeleteRoleMutationFn = Apollo.MutationFunction<
  ApolloTypes.DeleteRoleMutation,
  ApolloTypes.DeleteRoleMutationVariables
>;

/**
 * __useDeleteRoleMutation__
 *
 * To run a mutation, you first call `useDeleteRoleMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteRoleMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteRoleMutation, { data, loading, error }] = useDeleteRoleMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteRoleMutation(
  baseOptions?: Apollo.MutationHookOptions<
    ApolloTypes.DeleteRoleMutation,
    ApolloTypes.DeleteRoleMutationVariables
  >
) {
  return Apollo.useMutation<
    ApolloTypes.DeleteRoleMutation,
    ApolloTypes.DeleteRoleMutationVariables
  >(DeleteRoleDocument, baseOptions);
}
export type DeleteRoleMutationHookResult = ReturnType<
  typeof useDeleteRoleMutation
>;
export type DeleteRoleMutationResult = Apollo.MutationResult<
  ApolloTypes.DeleteRoleMutation
>;
export type DeleteRoleMutationOptions = Apollo.BaseMutationOptions<
  ApolloTypes.DeleteRoleMutation,
  ApolloTypes.DeleteRoleMutationVariables
>;
export const DeleteRoleBindingDocument = /* #__PURE__ */ gql`
  mutation deleteRoleBinding($id: String!) {
    deleteRoleBinding(id: $id) {
      message
      timestamp
    }
  }
`;
export type DeleteRoleBindingMutationFn = Apollo.MutationFunction<
  ApolloTypes.DeleteRoleBindingMutation,
  ApolloTypes.DeleteRoleBindingMutationVariables
>;

/**
 * __useDeleteRoleBindingMutation__
 *
 * To run a mutation, you first call `useDeleteRoleBindingMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteRoleBindingMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteRoleBindingMutation, { data, loading, error }] = useDeleteRoleBindingMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteRoleBindingMutation(
  baseOptions?: Apollo.MutationHookOptions<
    ApolloTypes.DeleteRoleBindingMutation,
    ApolloTypes.DeleteRoleBindingMutationVariables
  >
) {
  return Apollo.useMutation<
    ApolloTypes.DeleteRoleBindingMutation,
    ApolloTypes.DeleteRoleBindingMutationVariables
  >(DeleteRoleBindingDocument, baseOptions);
}
export type DeleteRoleBindingMutationHookResult = ReturnType<
  typeof useDeleteRoleBindingMutation
>;
export type DeleteRoleBindingMutationResult = Apollo.MutationResult<
  ApolloTypes.DeleteRoleBindingMutation
>;
export type DeleteRoleBindingMutationOptions = Apollo.BaseMutationOptions<
  ApolloTypes.DeleteRoleBindingMutation,
  ApolloTypes.DeleteRoleBindingMutationVariables
>;
export const DeleteSearchStackDocument = /* #__PURE__ */ gql`
  mutation deleteSearchStack($id: String!) {
    deleteSearchStack(id: $id) {
      deleted
    }
  }
`;
export type DeleteSearchStackMutationFn = Apollo.MutationFunction<
  ApolloTypes.DeleteSearchStackMutation,
  ApolloTypes.DeleteSearchStackMutationVariables
>;

/**
 * __useDeleteSearchStackMutation__
 *
 * To run a mutation, you first call `useDeleteSearchStackMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteSearchStackMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteSearchStackMutation, { data, loading, error }] = useDeleteSearchStackMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteSearchStackMutation(
  baseOptions?: Apollo.MutationHookOptions<
    ApolloTypes.DeleteSearchStackMutation,
    ApolloTypes.DeleteSearchStackMutationVariables
  >
) {
  return Apollo.useMutation<
    ApolloTypes.DeleteSearchStackMutation,
    ApolloTypes.DeleteSearchStackMutationVariables
  >(DeleteSearchStackDocument, baseOptions);
}
export type DeleteSearchStackMutationHookResult = ReturnType<
  typeof useDeleteSearchStackMutation
>;
export type DeleteSearchStackMutationResult = Apollo.MutationResult<
  ApolloTypes.DeleteSearchStackMutation
>;
export type DeleteSearchStackMutationOptions = Apollo.BaseMutationOptions<
  ApolloTypes.DeleteSearchStackMutation,
  ApolloTypes.DeleteSearchStackMutationVariables
>;
export const DeleteTemporaryPortfolioDocument = /* #__PURE__ */ gql`
  mutation deleteTemporaryPortfolio($id: String!) {
    deleteTemporaryPortfolio(id: $id) {
      deleted
    }
  }
`;
export type DeleteTemporaryPortfolioMutationFn = Apollo.MutationFunction<
  ApolloTypes.DeleteTemporaryPortfolioMutation,
  ApolloTypes.DeleteTemporaryPortfolioMutationVariables
>;

/**
 * __useDeleteTemporaryPortfolioMutation__
 *
 * To run a mutation, you first call `useDeleteTemporaryPortfolioMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteTemporaryPortfolioMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteTemporaryPortfolioMutation, { data, loading, error }] = useDeleteTemporaryPortfolioMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteTemporaryPortfolioMutation(
  baseOptions?: Apollo.MutationHookOptions<
    ApolloTypes.DeleteTemporaryPortfolioMutation,
    ApolloTypes.DeleteTemporaryPortfolioMutationVariables
  >
) {
  return Apollo.useMutation<
    ApolloTypes.DeleteTemporaryPortfolioMutation,
    ApolloTypes.DeleteTemporaryPortfolioMutationVariables
  >(DeleteTemporaryPortfolioDocument, baseOptions);
}
export type DeleteTemporaryPortfolioMutationHookResult = ReturnType<
  typeof useDeleteTemporaryPortfolioMutation
>;
export type DeleteTemporaryPortfolioMutationResult = Apollo.MutationResult<
  ApolloTypes.DeleteTemporaryPortfolioMutation
>;
export type DeleteTemporaryPortfolioMutationOptions = Apollo.BaseMutationOptions<
  ApolloTypes.DeleteTemporaryPortfolioMutation,
  ApolloTypes.DeleteTemporaryPortfolioMutationVariables
>;
export const DeleteUserDocument = /* #__PURE__ */ gql`
  mutation deleteUser($id: String!) {
    deleteUser(id: $id) {
      user {
        id
        status
        updatedAt
      }
    }
  }
`;
export type DeleteUserMutationFn = Apollo.MutationFunction<
  ApolloTypes.DeleteUserMutation,
  ApolloTypes.DeleteUserMutationVariables
>;

/**
 * __useDeleteUserMutation__
 *
 * To run a mutation, you first call `useDeleteUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteUserMutation, { data, loading, error }] = useDeleteUserMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteUserMutation(
  baseOptions?: Apollo.MutationHookOptions<
    ApolloTypes.DeleteUserMutation,
    ApolloTypes.DeleteUserMutationVariables
  >
) {
  return Apollo.useMutation<
    ApolloTypes.DeleteUserMutation,
    ApolloTypes.DeleteUserMutationVariables
  >(DeleteUserDocument, baseOptions);
}
export type DeleteUserMutationHookResult = ReturnType<
  typeof useDeleteUserMutation
>;
export type DeleteUserMutationResult = Apollo.MutationResult<
  ApolloTypes.DeleteUserMutation
>;
export type DeleteUserMutationOptions = Apollo.BaseMutationOptions<
  ApolloTypes.DeleteUserMutation,
  ApolloTypes.DeleteUserMutationVariables
>;
export const DeleteUserCartDocument = /* #__PURE__ */ gql`
  mutation deleteUserCart($userId: String!) {
    deleteUserCart(userId: $userId) {
      cleared
    }
  }
`;
export type DeleteUserCartMutationFn = Apollo.MutationFunction<
  ApolloTypes.DeleteUserCartMutation,
  ApolloTypes.DeleteUserCartMutationVariables
>;

/**
 * __useDeleteUserCartMutation__
 *
 * To run a mutation, you first call `useDeleteUserCartMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteUserCartMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteUserCartMutation, { data, loading, error }] = useDeleteUserCartMutation({
 *   variables: {
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useDeleteUserCartMutation(
  baseOptions?: Apollo.MutationHookOptions<
    ApolloTypes.DeleteUserCartMutation,
    ApolloTypes.DeleteUserCartMutationVariables
  >
) {
  return Apollo.useMutation<
    ApolloTypes.DeleteUserCartMutation,
    ApolloTypes.DeleteUserCartMutationVariables
  >(DeleteUserCartDocument, baseOptions);
}
export type DeleteUserCartMutationHookResult = ReturnType<
  typeof useDeleteUserCartMutation
>;
export type DeleteUserCartMutationResult = Apollo.MutationResult<
  ApolloTypes.DeleteUserCartMutation
>;
export type DeleteUserCartMutationOptions = Apollo.BaseMutationOptions<
  ApolloTypes.DeleteUserCartMutation,
  ApolloTypes.DeleteUserCartMutationVariables
>;
export const DeleteUserCartItemDocument = /* #__PURE__ */ gql`
  mutation deleteUserCartItem($assetId: String!, $userId: String!) {
    deleteUserCartItem(assetId: $assetId, userId: $userId) {
      deleted
    }
  }
`;
export type DeleteUserCartItemMutationFn = Apollo.MutationFunction<
  ApolloTypes.DeleteUserCartItemMutation,
  ApolloTypes.DeleteUserCartItemMutationVariables
>;

/**
 * __useDeleteUserCartItemMutation__
 *
 * To run a mutation, you first call `useDeleteUserCartItemMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteUserCartItemMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteUserCartItemMutation, { data, loading, error }] = useDeleteUserCartItemMutation({
 *   variables: {
 *      assetId: // value for 'assetId'
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useDeleteUserCartItemMutation(
  baseOptions?: Apollo.MutationHookOptions<
    ApolloTypes.DeleteUserCartItemMutation,
    ApolloTypes.DeleteUserCartItemMutationVariables
  >
) {
  return Apollo.useMutation<
    ApolloTypes.DeleteUserCartItemMutation,
    ApolloTypes.DeleteUserCartItemMutationVariables
  >(DeleteUserCartItemDocument, baseOptions);
}
export type DeleteUserCartItemMutationHookResult = ReturnType<
  typeof useDeleteUserCartItemMutation
>;
export type DeleteUserCartItemMutationResult = Apollo.MutationResult<
  ApolloTypes.DeleteUserCartItemMutation
>;
export type DeleteUserCartItemMutationOptions = Apollo.BaseMutationOptions<
  ApolloTypes.DeleteUserCartItemMutation,
  ApolloTypes.DeleteUserCartItemMutationVariables
>;
export const DeleteUserWatchlistDocument = /* #__PURE__ */ gql`
  mutation deleteUserWatchlist($userId: String!) {
    deleteUserWatchlist(userId: $userId) {
      cleared
    }
  }
`;
export type DeleteUserWatchlistMutationFn = Apollo.MutationFunction<
  ApolloTypes.DeleteUserWatchlistMutation,
  ApolloTypes.DeleteUserWatchlistMutationVariables
>;

/**
 * __useDeleteUserWatchlistMutation__
 *
 * To run a mutation, you first call `useDeleteUserWatchlistMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteUserWatchlistMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteUserWatchlistMutation, { data, loading, error }] = useDeleteUserWatchlistMutation({
 *   variables: {
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useDeleteUserWatchlistMutation(
  baseOptions?: Apollo.MutationHookOptions<
    ApolloTypes.DeleteUserWatchlistMutation,
    ApolloTypes.DeleteUserWatchlistMutationVariables
  >
) {
  return Apollo.useMutation<
    ApolloTypes.DeleteUserWatchlistMutation,
    ApolloTypes.DeleteUserWatchlistMutationVariables
  >(DeleteUserWatchlistDocument, baseOptions);
}
export type DeleteUserWatchlistMutationHookResult = ReturnType<
  typeof useDeleteUserWatchlistMutation
>;
export type DeleteUserWatchlistMutationResult = Apollo.MutationResult<
  ApolloTypes.DeleteUserWatchlistMutation
>;
export type DeleteUserWatchlistMutationOptions = Apollo.BaseMutationOptions<
  ApolloTypes.DeleteUserWatchlistMutation,
  ApolloTypes.DeleteUserWatchlistMutationVariables
>;
export const DeleteUserWatchlistItemDocument = /* #__PURE__ */ gql`
  mutation deleteUserWatchlistItem($assetId: String!, $userId: String!) {
    deleteUserWatchlistItem(assetId: $assetId, userId: $userId) {
      deleted
    }
  }
`;
export type DeleteUserWatchlistItemMutationFn = Apollo.MutationFunction<
  ApolloTypes.DeleteUserWatchlistItemMutation,
  ApolloTypes.DeleteUserWatchlistItemMutationVariables
>;

/**
 * __useDeleteUserWatchlistItemMutation__
 *
 * To run a mutation, you first call `useDeleteUserWatchlistItemMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteUserWatchlistItemMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteUserWatchlistItemMutation, { data, loading, error }] = useDeleteUserWatchlistItemMutation({
 *   variables: {
 *      assetId: // value for 'assetId'
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useDeleteUserWatchlistItemMutation(
  baseOptions?: Apollo.MutationHookOptions<
    ApolloTypes.DeleteUserWatchlistItemMutation,
    ApolloTypes.DeleteUserWatchlistItemMutationVariables
  >
) {
  return Apollo.useMutation<
    ApolloTypes.DeleteUserWatchlistItemMutation,
    ApolloTypes.DeleteUserWatchlistItemMutationVariables
  >(DeleteUserWatchlistItemDocument, baseOptions);
}
export type DeleteUserWatchlistItemMutationHookResult = ReturnType<
  typeof useDeleteUserWatchlistItemMutation
>;
export type DeleteUserWatchlistItemMutationResult = Apollo.MutationResult<
  ApolloTypes.DeleteUserWatchlistItemMutation
>;
export type DeleteUserWatchlistItemMutationOptions = Apollo.BaseMutationOptions<
  ApolloTypes.DeleteUserWatchlistItemMutation,
  ApolloTypes.DeleteUserWatchlistItemMutationVariables
>;
export const PatchAccountDocument = /* #__PURE__ */ gql`
  mutation patchAccount($accountInput: AccountInput, $id: String!) {
    patchAccount(accountInput: $accountInput, id: $id) {
      apexAccount {
        apexAccountNumber
        apexRequestId
        createdAt
        id
        investorId
        metadata
        status
        updatedAt
      }
    }
  }
`;
export type PatchAccountMutationFn = Apollo.MutationFunction<
  ApolloTypes.PatchAccountMutation,
  ApolloTypes.PatchAccountMutationVariables
>;

/**
 * __usePatchAccountMutation__
 *
 * To run a mutation, you first call `usePatchAccountMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `usePatchAccountMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [patchAccountMutation, { data, loading, error }] = usePatchAccountMutation({
 *   variables: {
 *      accountInput: // value for 'accountInput'
 *      id: // value for 'id'
 *   },
 * });
 */
export function usePatchAccountMutation(
  baseOptions?: Apollo.MutationHookOptions<
    ApolloTypes.PatchAccountMutation,
    ApolloTypes.PatchAccountMutationVariables
  >
) {
  return Apollo.useMutation<
    ApolloTypes.PatchAccountMutation,
    ApolloTypes.PatchAccountMutationVariables
  >(PatchAccountDocument, baseOptions);
}
export type PatchAccountMutationHookResult = ReturnType<
  typeof usePatchAccountMutation
>;
export type PatchAccountMutationResult = Apollo.MutationResult<
  ApolloTypes.PatchAccountMutation
>;
export type PatchAccountMutationOptions = Apollo.BaseMutationOptions<
  ApolloTypes.PatchAccountMutation,
  ApolloTypes.PatchAccountMutationVariables
>;
export const PatchAccountFormsCorporateAgreementFormDocument = /* #__PURE__ */ gql`
  mutation patchAccountFormsCorporateAgreementForm(
    $formId: String!
    $updateCorporateAgreementFormRequestInput: UpdateCorporateAgreementFormRequestInput
  ) {
    patchAccountFormsCorporateAgreementForm(
      formId: $formId
      updateCorporateAgreementFormRequestInput: $updateCorporateAgreementFormRequestInput
    ) {
      corporateAgreementForm {
        articlesOfIncorporationSnapId
        authorizedOfficerName
        authorizedOfficerTitle
        corporationName
        createdAt
        formId
        isAuthorizedOfficerESigned
        isSecretaryESigned
        secretaryName
        stateOfIncorporation
        updatedAt
      }
    }
  }
`;
export type PatchAccountFormsCorporateAgreementFormMutationFn = Apollo.MutationFunction<
  ApolloTypes.PatchAccountFormsCorporateAgreementFormMutation,
  ApolloTypes.PatchAccountFormsCorporateAgreementFormMutationVariables
>;

/**
 * __usePatchAccountFormsCorporateAgreementFormMutation__
 *
 * To run a mutation, you first call `usePatchAccountFormsCorporateAgreementFormMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `usePatchAccountFormsCorporateAgreementFormMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [patchAccountFormsCorporateAgreementFormMutation, { data, loading, error }] = usePatchAccountFormsCorporateAgreementFormMutation({
 *   variables: {
 *      formId: // value for 'formId'
 *      updateCorporateAgreementFormRequestInput: // value for 'updateCorporateAgreementFormRequestInput'
 *   },
 * });
 */
export function usePatchAccountFormsCorporateAgreementFormMutation(
  baseOptions?: Apollo.MutationHookOptions<
    ApolloTypes.PatchAccountFormsCorporateAgreementFormMutation,
    ApolloTypes.PatchAccountFormsCorporateAgreementFormMutationVariables
  >
) {
  return Apollo.useMutation<
    ApolloTypes.PatchAccountFormsCorporateAgreementFormMutation,
    ApolloTypes.PatchAccountFormsCorporateAgreementFormMutationVariables
  >(PatchAccountFormsCorporateAgreementFormDocument, baseOptions);
}
export type PatchAccountFormsCorporateAgreementFormMutationHookResult = ReturnType<
  typeof usePatchAccountFormsCorporateAgreementFormMutation
>;
export type PatchAccountFormsCorporateAgreementFormMutationResult = Apollo.MutationResult<
  ApolloTypes.PatchAccountFormsCorporateAgreementFormMutation
>;
export type PatchAccountFormsCorporateAgreementFormMutationOptions = Apollo.BaseMutationOptions<
  ApolloTypes.PatchAccountFormsCorporateAgreementFormMutation,
  ApolloTypes.PatchAccountFormsCorporateAgreementFormMutationVariables
>;
export const PatchAccountFormsEntityAccountFormDocument = /* #__PURE__ */ gql`
  mutation patchAccountFormsEntityAccountForm(
    $formId: String!
    $updateEntityAccountFormRequestInput: UpdateEntityAccountFormRequestInput
  ) {
    patchAccountFormsEntityAccountForm(
      formId: $formId
      updateEntityAccountFormRequestInput: $updateEntityAccountFormRequestInput
    ) {
      entityAccountForm {
        accountInformation {
          accountTradingInformation {
            companyTickerSymbols
            isAffiliatedExchangeOrFINRA
            isControlPerson
            memberFirmNames
          }
          businessAddress {
            city
            country
            postalCode
            state
            streetAddress
          }
          businessTelephoneNumber
          entityName
          entityTaxId
          isUSEntity
        }
        accountNature
        additionalAccountInformation {
          isForeignBank
          isMaintainedForForeignFinancialInstitution
          isPoliticallyExposed
          politicalExposureDetail {
            immediateFamily
            politicalOrganization
          }
        }
        authorizedSigner {
          citizenshipCountry
          dateOfBirth
          emailAddress
          isUsCitizen
          name {
            familyName
            givenName
            legalName
          }
          taxId
          title
        }
        beneficialOwners {
          address {
            city
            country
            postalCode
            state
            streetAddress
          }
          dateOfBirth
          identificationNumber
          name {
            familyName
            givenName
            legalName
          }
          socialSecurityNumber
        }
        catAccountholderType
        createdAt
        customerType
        entityOfficers {
          address {
            city
            country
            postalCode
            state
            streetAddress
          }
          dateOfBirth
          identificationNumber
          name {
            familyName
            givenName
            legalName
          }
          socialSecurityNumber
        }
        exemptLegalCustomer {
          exemption
          isExemptLegalCustomer
        }
        formId
        isApplicantESigned
        issuerDirectCommunicationCode
        legalEntityIdentifier
        serviceProfile {
          dividendReinvestment
          sweepInstructions
        }
        suitabilityProfile {
          liquidityNeeds
          timeHorizon
        }
        updatedAt
        w9Certification {
          exemptPayeeCode
          exemptionFromFatca
        }
      }
    }
  }
`;
export type PatchAccountFormsEntityAccountFormMutationFn = Apollo.MutationFunction<
  ApolloTypes.PatchAccountFormsEntityAccountFormMutation,
  ApolloTypes.PatchAccountFormsEntityAccountFormMutationVariables
>;

/**
 * __usePatchAccountFormsEntityAccountFormMutation__
 *
 * To run a mutation, you first call `usePatchAccountFormsEntityAccountFormMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `usePatchAccountFormsEntityAccountFormMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [patchAccountFormsEntityAccountFormMutation, { data, loading, error }] = usePatchAccountFormsEntityAccountFormMutation({
 *   variables: {
 *      formId: // value for 'formId'
 *      updateEntityAccountFormRequestInput: // value for 'updateEntityAccountFormRequestInput'
 *   },
 * });
 */
export function usePatchAccountFormsEntityAccountFormMutation(
  baseOptions?: Apollo.MutationHookOptions<
    ApolloTypes.PatchAccountFormsEntityAccountFormMutation,
    ApolloTypes.PatchAccountFormsEntityAccountFormMutationVariables
  >
) {
  return Apollo.useMutation<
    ApolloTypes.PatchAccountFormsEntityAccountFormMutation,
    ApolloTypes.PatchAccountFormsEntityAccountFormMutationVariables
  >(PatchAccountFormsEntityAccountFormDocument, baseOptions);
}
export type PatchAccountFormsEntityAccountFormMutationHookResult = ReturnType<
  typeof usePatchAccountFormsEntityAccountFormMutation
>;
export type PatchAccountFormsEntityAccountFormMutationResult = Apollo.MutationResult<
  ApolloTypes.PatchAccountFormsEntityAccountFormMutation
>;
export type PatchAccountFormsEntityAccountFormMutationOptions = Apollo.BaseMutationOptions<
  ApolloTypes.PatchAccountFormsEntityAccountFormMutation,
  ApolloTypes.PatchAccountFormsEntityAccountFormMutationVariables
>;
export const PatchAccountFormsEntityDueDiligenceFormDocument = /* #__PURE__ */ gql`
  mutation patchAccountFormsEntityDueDiligenceForm(
    $formId: String!
    $updateEntityDueDiligenceFormRequestInput: UpdateEntityDueDiligenceFormRequestInput
  ) {
    patchAccountFormsEntityDueDiligenceForm(
      formId: $formId
      updateEntityDueDiligenceFormRequestInput: $updateEntityDueDiligenceFormRequestInput
    ) {
      entityDueDiligenceForm {
        accountActivity {
          expectedWithdrawalFrequency
          initialDepositAmount
          initialDepositSource
          lowPricedSecuritiesPercentage
          primaryAccountActivity
          willTransactForeignBonds
          willTransactLowPricedSecurities
        }
        accountInformation {
          accountName
          businessLocations
          countryOfIncorporation
          hasAccounts
          relatedAccounts {
            accountNumber
            entityName
          }
        }
        additionalAccounts {
          confirmEntityDoesNotIssueBearerShares
          institutionNames
          primaryOngoingFundingSource
          primaryOngoingFundingSourceClarification
          scopeOfBusiness
          scopeOfBusinessClarification
        }
        assessedRiskRating
        createdAt
        entityOrAssociatesHaveNegativeNews
        entityOrAssociatesNegativeNewsInfo
        formId
        politicallyExposedPersons {
          isPoliticallyExposed
          politicalOfficials {
            immediateFamily
            legalName
            politicalOrganization
            politicalTitle
            role
          }
        }
        principalApproverName
        registeredRepresentativeApproverName
        updatedAt
      }
    }
  }
`;
export type PatchAccountFormsEntityDueDiligenceFormMutationFn = Apollo.MutationFunction<
  ApolloTypes.PatchAccountFormsEntityDueDiligenceFormMutation,
  ApolloTypes.PatchAccountFormsEntityDueDiligenceFormMutationVariables
>;

/**
 * __usePatchAccountFormsEntityDueDiligenceFormMutation__
 *
 * To run a mutation, you first call `usePatchAccountFormsEntityDueDiligenceFormMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `usePatchAccountFormsEntityDueDiligenceFormMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [patchAccountFormsEntityDueDiligenceFormMutation, { data, loading, error }] = usePatchAccountFormsEntityDueDiligenceFormMutation({
 *   variables: {
 *      formId: // value for 'formId'
 *      updateEntityDueDiligenceFormRequestInput: // value for 'updateEntityDueDiligenceFormRequestInput'
 *   },
 * });
 */
export function usePatchAccountFormsEntityDueDiligenceFormMutation(
  baseOptions?: Apollo.MutationHookOptions<
    ApolloTypes.PatchAccountFormsEntityDueDiligenceFormMutation,
    ApolloTypes.PatchAccountFormsEntityDueDiligenceFormMutationVariables
  >
) {
  return Apollo.useMutation<
    ApolloTypes.PatchAccountFormsEntityDueDiligenceFormMutation,
    ApolloTypes.PatchAccountFormsEntityDueDiligenceFormMutationVariables
  >(PatchAccountFormsEntityDueDiligenceFormDocument, baseOptions);
}
export type PatchAccountFormsEntityDueDiligenceFormMutationHookResult = ReturnType<
  typeof usePatchAccountFormsEntityDueDiligenceFormMutation
>;
export type PatchAccountFormsEntityDueDiligenceFormMutationResult = Apollo.MutationResult<
  ApolloTypes.PatchAccountFormsEntityDueDiligenceFormMutation
>;
export type PatchAccountFormsEntityDueDiligenceFormMutationOptions = Apollo.BaseMutationOptions<
  ApolloTypes.PatchAccountFormsEntityDueDiligenceFormMutation,
  ApolloTypes.PatchAccountFormsEntityDueDiligenceFormMutationVariables
>;
export const PatchAccountFormsIndividualAccountFormDocument = /* #__PURE__ */ gql`
  mutation patchAccountFormsIndividualAccountForm(
    $formId: String!
    $updateIndividualAccountFormRequestInput: UpdateIndividualAccountFormRequestInput
  ) {
    patchAccountFormsIndividualAccountForm(
      formId: $formId
      updateIndividualAccountFormRequestInput: $updateIndividualAccountFormRequestInput
    ) {
      individualAccountForm {
        applicantSignature {
          eSigned
        }
        applicants {
          contact {
            emailAddresses
            homeAddress {
              city
              country
              postalCode
              state
              streetAddress
            }
            phoneNumbers {
              phoneNumber
              phoneNumberType
            }
          }
          disclosures {
            affiliatedApproval
            companySymbols
            firmName
            isAffiliatedExchangeOrFINRA
            isControlPerson
            isPoliticallyExposed
            politicalExposureDetail {
              immediateFamily
              politicalOrganization
            }
          }
          employment {
            employer
            employmentStatus
            positionEmployed
          }
          identity {
            birthCountry
            citizenshipCountry
            dateOfBirth
            name {
              familyName
              givenName
              legalName
            }
            permanentResident
            socialSecurityNumber
            visaExpirationDate
            visaType
          }
        }
        catAccountholderType
        createdAt
        customerType
        formId
        investmentProfile {
          annualIncomeUSD
          federalTaxBracketPercent
          investmentExperience
          investmentObjective
          liquidNetWorthUSD
          riskTolerance
          totalNetWorthUSD
        }
        serviceProfile {
          dividendProceeds
          dividendProceedsSendFrequency
          dividendReinvestment
          householdingService
          issuerDirectCommunication
          securitySaleProceeds
          sweepInstructions
        }
        suitabilityProfile {
          liquidityNeeds
          timeHorizon
        }
        trustedContact
        updatedAt
      }
    }
  }
`;
export type PatchAccountFormsIndividualAccountFormMutationFn = Apollo.MutationFunction<
  ApolloTypes.PatchAccountFormsIndividualAccountFormMutation,
  ApolloTypes.PatchAccountFormsIndividualAccountFormMutationVariables
>;

/**
 * __usePatchAccountFormsIndividualAccountFormMutation__
 *
 * To run a mutation, you first call `usePatchAccountFormsIndividualAccountFormMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `usePatchAccountFormsIndividualAccountFormMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [patchAccountFormsIndividualAccountFormMutation, { data, loading, error }] = usePatchAccountFormsIndividualAccountFormMutation({
 *   variables: {
 *      formId: // value for 'formId'
 *      updateIndividualAccountFormRequestInput: // value for 'updateIndividualAccountFormRequestInput'
 *   },
 * });
 */
export function usePatchAccountFormsIndividualAccountFormMutation(
  baseOptions?: Apollo.MutationHookOptions<
    ApolloTypes.PatchAccountFormsIndividualAccountFormMutation,
    ApolloTypes.PatchAccountFormsIndividualAccountFormMutationVariables
  >
) {
  return Apollo.useMutation<
    ApolloTypes.PatchAccountFormsIndividualAccountFormMutation,
    ApolloTypes.PatchAccountFormsIndividualAccountFormMutationVariables
  >(PatchAccountFormsIndividualAccountFormDocument, baseOptions);
}
export type PatchAccountFormsIndividualAccountFormMutationHookResult = ReturnType<
  typeof usePatchAccountFormsIndividualAccountFormMutation
>;
export type PatchAccountFormsIndividualAccountFormMutationResult = Apollo.MutationResult<
  ApolloTypes.PatchAccountFormsIndividualAccountFormMutation
>;
export type PatchAccountFormsIndividualAccountFormMutationOptions = Apollo.BaseMutationOptions<
  ApolloTypes.PatchAccountFormsIndividualAccountFormMutation,
  ApolloTypes.PatchAccountFormsIndividualAccountFormMutationVariables
>;
export const PatchAccountFormsInterestedPartyFormDocument = /* #__PURE__ */ gql`
  mutation patchAccountFormsInterestedPartyForm(
    $formId: String!
    $updateInterestedPartyFormRequestInput: UpdateInterestedPartyFormRequestInput
  ) {
    patchAccountFormsInterestedPartyForm(
      formId: $formId
      updateInterestedPartyFormRequestInput: $updateInterestedPartyFormRequestInput
    ) {
      interestedPartyForm {
        createdAt
        formId
        interestedParties {
          mailingAddress {
            city
            country
            postalCode
            state
            streetAddress
          }
          name {
            companyName
          }
        }
        updatedAt
      }
    }
  }
`;
export type PatchAccountFormsInterestedPartyFormMutationFn = Apollo.MutationFunction<
  ApolloTypes.PatchAccountFormsInterestedPartyFormMutation,
  ApolloTypes.PatchAccountFormsInterestedPartyFormMutationVariables
>;

/**
 * __usePatchAccountFormsInterestedPartyFormMutation__
 *
 * To run a mutation, you first call `usePatchAccountFormsInterestedPartyFormMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `usePatchAccountFormsInterestedPartyFormMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [patchAccountFormsInterestedPartyFormMutation, { data, loading, error }] = usePatchAccountFormsInterestedPartyFormMutation({
 *   variables: {
 *      formId: // value for 'formId'
 *      updateInterestedPartyFormRequestInput: // value for 'updateInterestedPartyFormRequestInput'
 *   },
 * });
 */
export function usePatchAccountFormsInterestedPartyFormMutation(
  baseOptions?: Apollo.MutationHookOptions<
    ApolloTypes.PatchAccountFormsInterestedPartyFormMutation,
    ApolloTypes.PatchAccountFormsInterestedPartyFormMutationVariables
  >
) {
  return Apollo.useMutation<
    ApolloTypes.PatchAccountFormsInterestedPartyFormMutation,
    ApolloTypes.PatchAccountFormsInterestedPartyFormMutationVariables
  >(PatchAccountFormsInterestedPartyFormDocument, baseOptions);
}
export type PatchAccountFormsInterestedPartyFormMutationHookResult = ReturnType<
  typeof usePatchAccountFormsInterestedPartyFormMutation
>;
export type PatchAccountFormsInterestedPartyFormMutationResult = Apollo.MutationResult<
  ApolloTypes.PatchAccountFormsInterestedPartyFormMutation
>;
export type PatchAccountFormsInterestedPartyFormMutationOptions = Apollo.BaseMutationOptions<
  ApolloTypes.PatchAccountFormsInterestedPartyFormMutation,
  ApolloTypes.PatchAccountFormsInterestedPartyFormMutationVariables
>;
export const PatchAccountFormsLlcAgreementFormDocument = /* #__PURE__ */ gql`
  mutation patchAccountFormsLlcAgreementForm(
    $formId: String!
    $updateLlcAgreementFormRequestInput: UpdateLlcAgreementFormRequestInput
  ) {
    patchAccountFormsLlcAgreementForm(
      formId: $formId
      updateLlcAgreementFormRequestInput: $updateLlcAgreementFormRequestInput
    ) {
      llcAgreementForm {
        articlesOfIncorporationOrOperatingAgreementSnapId
        authorizedSignerName
        authorizedSignerTitle
        createdAt
        entityName
        formId
        isAuthorizedSignerESigned
        membersAndManagers {
          isManager
          isManagerESigned
          legalName
          organizationalRole
        }
        resolutionAdoptionDate
        stateOfOrigin
        updatedAt
      }
    }
  }
`;
export type PatchAccountFormsLlcAgreementFormMutationFn = Apollo.MutationFunction<
  ApolloTypes.PatchAccountFormsLlcAgreementFormMutation,
  ApolloTypes.PatchAccountFormsLlcAgreementFormMutationVariables
>;

/**
 * __usePatchAccountFormsLlcAgreementFormMutation__
 *
 * To run a mutation, you first call `usePatchAccountFormsLlcAgreementFormMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `usePatchAccountFormsLlcAgreementFormMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [patchAccountFormsLlcAgreementFormMutation, { data, loading, error }] = usePatchAccountFormsLlcAgreementFormMutation({
 *   variables: {
 *      formId: // value for 'formId'
 *      updateLlcAgreementFormRequestInput: // value for 'updateLlcAgreementFormRequestInput'
 *   },
 * });
 */
export function usePatchAccountFormsLlcAgreementFormMutation(
  baseOptions?: Apollo.MutationHookOptions<
    ApolloTypes.PatchAccountFormsLlcAgreementFormMutation,
    ApolloTypes.PatchAccountFormsLlcAgreementFormMutationVariables
  >
) {
  return Apollo.useMutation<
    ApolloTypes.PatchAccountFormsLlcAgreementFormMutation,
    ApolloTypes.PatchAccountFormsLlcAgreementFormMutationVariables
  >(PatchAccountFormsLlcAgreementFormDocument, baseOptions);
}
export type PatchAccountFormsLlcAgreementFormMutationHookResult = ReturnType<
  typeof usePatchAccountFormsLlcAgreementFormMutation
>;
export type PatchAccountFormsLlcAgreementFormMutationResult = Apollo.MutationResult<
  ApolloTypes.PatchAccountFormsLlcAgreementFormMutation
>;
export type PatchAccountFormsLlcAgreementFormMutationOptions = Apollo.BaseMutationOptions<
  ApolloTypes.PatchAccountFormsLlcAgreementFormMutation,
  ApolloTypes.PatchAccountFormsLlcAgreementFormMutationVariables
>;
export const PatchAccountFormsTrustedContactFormDocument = /* #__PURE__ */ gql`
  mutation patchAccountFormsTrustedContactForm(
    $formId: String!
    $updateTrustedContactFormRequestInput: UpdateTrustedContactFormRequestInput
  ) {
    patchAccountFormsTrustedContactForm(
      formId: $formId
      updateTrustedContactFormRequestInput: $updateTrustedContactFormRequestInput
    ) {
      trustedContactForm {
        createdAt
        emailAddress
        familyName
        formId
        givenName
        mailingAddress {
          city
          country
          postalCode
          state
          streetAddress
        }
        phoneNumber {
          phoneNumber
          phoneNumberType
        }
        updatedAt
      }
    }
  }
`;
export type PatchAccountFormsTrustedContactFormMutationFn = Apollo.MutationFunction<
  ApolloTypes.PatchAccountFormsTrustedContactFormMutation,
  ApolloTypes.PatchAccountFormsTrustedContactFormMutationVariables
>;

/**
 * __usePatchAccountFormsTrustedContactFormMutation__
 *
 * To run a mutation, you first call `usePatchAccountFormsTrustedContactFormMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `usePatchAccountFormsTrustedContactFormMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [patchAccountFormsTrustedContactFormMutation, { data, loading, error }] = usePatchAccountFormsTrustedContactFormMutation({
 *   variables: {
 *      formId: // value for 'formId'
 *      updateTrustedContactFormRequestInput: // value for 'updateTrustedContactFormRequestInput'
 *   },
 * });
 */
export function usePatchAccountFormsTrustedContactFormMutation(
  baseOptions?: Apollo.MutationHookOptions<
    ApolloTypes.PatchAccountFormsTrustedContactFormMutation,
    ApolloTypes.PatchAccountFormsTrustedContactFormMutationVariables
  >
) {
  return Apollo.useMutation<
    ApolloTypes.PatchAccountFormsTrustedContactFormMutation,
    ApolloTypes.PatchAccountFormsTrustedContactFormMutationVariables
  >(PatchAccountFormsTrustedContactFormDocument, baseOptions);
}
export type PatchAccountFormsTrustedContactFormMutationHookResult = ReturnType<
  typeof usePatchAccountFormsTrustedContactFormMutation
>;
export type PatchAccountFormsTrustedContactFormMutationResult = Apollo.MutationResult<
  ApolloTypes.PatchAccountFormsTrustedContactFormMutation
>;
export type PatchAccountFormsTrustedContactFormMutationOptions = Apollo.BaseMutationOptions<
  ApolloTypes.PatchAccountFormsTrustedContactFormMutation,
  ApolloTypes.PatchAccountFormsTrustedContactFormMutationVariables
>;
export const PatchAccountNumberLinkedBankAccountUpdateStatusDocument = /* #__PURE__ */ gql`
  mutation patchAccountNumberLinkedBankAccountUpdateStatus(
    $accountNumber: String!
    $linkedBankAccountId: String!
    $updateLinkedBankAccountStatusRequestInput: UpdateLinkedBankAccountStatusRequestInput
  ) {
    patchAccountNumberLinkedBankAccountUpdateStatus(
      accountNumber: $accountNumber
      linkedBankAccountId: $linkedBankAccountId
      updateLinkedBankAccountStatusRequestInput: $updateLinkedBankAccountStatusRequestInput
    ) {
      linkedBankAccount {
        accountType
        bankName
        createdAt
        id
        investorId
        mask
        metadata
        status
        updatedAt
      }
    }
  }
`;
export type PatchAccountNumberLinkedBankAccountUpdateStatusMutationFn = Apollo.MutationFunction<
  ApolloTypes.PatchAccountNumberLinkedBankAccountUpdateStatusMutation,
  ApolloTypes.PatchAccountNumberLinkedBankAccountUpdateStatusMutationVariables
>;

/**
 * __usePatchAccountNumberLinkedBankAccountUpdateStatusMutation__
 *
 * To run a mutation, you first call `usePatchAccountNumberLinkedBankAccountUpdateStatusMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `usePatchAccountNumberLinkedBankAccountUpdateStatusMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [patchAccountNumberLinkedBankAccountUpdateStatusMutation, { data, loading, error }] = usePatchAccountNumberLinkedBankAccountUpdateStatusMutation({
 *   variables: {
 *      accountNumber: // value for 'accountNumber'
 *      linkedBankAccountId: // value for 'linkedBankAccountId'
 *      updateLinkedBankAccountStatusRequestInput: // value for 'updateLinkedBankAccountStatusRequestInput'
 *   },
 * });
 */
export function usePatchAccountNumberLinkedBankAccountUpdateStatusMutation(
  baseOptions?: Apollo.MutationHookOptions<
    ApolloTypes.PatchAccountNumberLinkedBankAccountUpdateStatusMutation,
    ApolloTypes.PatchAccountNumberLinkedBankAccountUpdateStatusMutationVariables
  >
) {
  return Apollo.useMutation<
    ApolloTypes.PatchAccountNumberLinkedBankAccountUpdateStatusMutation,
    ApolloTypes.PatchAccountNumberLinkedBankAccountUpdateStatusMutationVariables
  >(PatchAccountNumberLinkedBankAccountUpdateStatusDocument, baseOptions);
}
export type PatchAccountNumberLinkedBankAccountUpdateStatusMutationHookResult = ReturnType<
  typeof usePatchAccountNumberLinkedBankAccountUpdateStatusMutation
>;
export type PatchAccountNumberLinkedBankAccountUpdateStatusMutationResult = Apollo.MutationResult<
  ApolloTypes.PatchAccountNumberLinkedBankAccountUpdateStatusMutation
>;
export type PatchAccountNumberLinkedBankAccountUpdateStatusMutationOptions = Apollo.BaseMutationOptions<
  ApolloTypes.PatchAccountNumberLinkedBankAccountUpdateStatusMutation,
  ApolloTypes.PatchAccountNumberLinkedBankAccountUpdateStatusMutationVariables
>;
export const PatchAccountStatusDocument = /* #__PURE__ */ gql`
  mutation patchAccountStatus(
    $id: String!
    $updateApexAccountStatusRequestInput: UpdateApexAccountStatusRequestInput
  ) {
    patchAccountStatus(
      id: $id
      updateApexAccountStatusRequestInput: $updateApexAccountStatusRequestInput
    ) {
      apexAccount {
        apexAccountNumber
        apexRequestId
        createdAt
        id
        investorId
        metadata
        status
        updatedAt
      }
    }
  }
`;
export type PatchAccountStatusMutationFn = Apollo.MutationFunction<
  ApolloTypes.PatchAccountStatusMutation,
  ApolloTypes.PatchAccountStatusMutationVariables
>;

/**
 * __usePatchAccountStatusMutation__
 *
 * To run a mutation, you first call `usePatchAccountStatusMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `usePatchAccountStatusMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [patchAccountStatusMutation, { data, loading, error }] = usePatchAccountStatusMutation({
 *   variables: {
 *      id: // value for 'id'
 *      updateApexAccountStatusRequestInput: // value for 'updateApexAccountStatusRequestInput'
 *   },
 * });
 */
export function usePatchAccountStatusMutation(
  baseOptions?: Apollo.MutationHookOptions<
    ApolloTypes.PatchAccountStatusMutation,
    ApolloTypes.PatchAccountStatusMutationVariables
  >
) {
  return Apollo.useMutation<
    ApolloTypes.PatchAccountStatusMutation,
    ApolloTypes.PatchAccountStatusMutationVariables
  >(PatchAccountStatusDocument, baseOptions);
}
export type PatchAccountStatusMutationHookResult = ReturnType<
  typeof usePatchAccountStatusMutation
>;
export type PatchAccountStatusMutationResult = Apollo.MutationResult<
  ApolloTypes.PatchAccountStatusMutation
>;
export type PatchAccountStatusMutationOptions = Apollo.BaseMutationOptions<
  ApolloTypes.PatchAccountStatusMutation,
  ApolloTypes.PatchAccountStatusMutationVariables
>;
export const PatchAccountsDocument = /* #__PURE__ */ gql`
  mutation patchAccounts(
    $accountNumber: String!
    $updateApexAccountRequestInput: UpdateApexAccountRequestInput
  ) {
    patchAccounts(
      accountNumber: $accountNumber
      updateApexAccountRequestInput: $updateApexAccountRequestInput
    ) {
      apexAccount {
        accountNumber
        accountRequestId
        accountType
        createdAt
        status
        updatedAt
      }
    }
  }
`;
export type PatchAccountsMutationFn = Apollo.MutationFunction<
  ApolloTypes.PatchAccountsMutation,
  ApolloTypes.PatchAccountsMutationVariables
>;

/**
 * __usePatchAccountsMutation__
 *
 * To run a mutation, you first call `usePatchAccountsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `usePatchAccountsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [patchAccountsMutation, { data, loading, error }] = usePatchAccountsMutation({
 *   variables: {
 *      accountNumber: // value for 'accountNumber'
 *      updateApexAccountRequestInput: // value for 'updateApexAccountRequestInput'
 *   },
 * });
 */
export function usePatchAccountsMutation(
  baseOptions?: Apollo.MutationHookOptions<
    ApolloTypes.PatchAccountsMutation,
    ApolloTypes.PatchAccountsMutationVariables
  >
) {
  return Apollo.useMutation<
    ApolloTypes.PatchAccountsMutation,
    ApolloTypes.PatchAccountsMutationVariables
  >(PatchAccountsDocument, baseOptions);
}
export type PatchAccountsMutationHookResult = ReturnType<
  typeof usePatchAccountsMutation
>;
export type PatchAccountsMutationResult = Apollo.MutationResult<
  ApolloTypes.PatchAccountsMutation
>;
export type PatchAccountsMutationOptions = Apollo.BaseMutationOptions<
  ApolloTypes.PatchAccountsMutation,
  ApolloTypes.PatchAccountsMutationVariables
>;
export const PatchAccountsTransferCancelDocument = /* #__PURE__ */ gql`
  mutation patchAccountsTransferCancel(
    $accountNumber: String!
    $transferId: String!
  ) {
    patchAccountsTransferCancel(
      accountNumber: $accountNumber
      transferId: $transferId
    ) {
      transfer {
        amount
        createdAt
        currency
        direction
        externalEntity {
          externalEntityId
          externalEntityType
        }
        id
        investorId
        ledgerId
        linkedBankAccountId
        metadata
        portfolioId
        status
        transferMethod
        updatedAt
      }
    }
  }
`;
export type PatchAccountsTransferCancelMutationFn = Apollo.MutationFunction<
  ApolloTypes.PatchAccountsTransferCancelMutation,
  ApolloTypes.PatchAccountsTransferCancelMutationVariables
>;

/**
 * __usePatchAccountsTransferCancelMutation__
 *
 * To run a mutation, you first call `usePatchAccountsTransferCancelMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `usePatchAccountsTransferCancelMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [patchAccountsTransferCancelMutation, { data, loading, error }] = usePatchAccountsTransferCancelMutation({
 *   variables: {
 *      accountNumber: // value for 'accountNumber'
 *      transferId: // value for 'transferId'
 *   },
 * });
 */
export function usePatchAccountsTransferCancelMutation(
  baseOptions?: Apollo.MutationHookOptions<
    ApolloTypes.PatchAccountsTransferCancelMutation,
    ApolloTypes.PatchAccountsTransferCancelMutationVariables
  >
) {
  return Apollo.useMutation<
    ApolloTypes.PatchAccountsTransferCancelMutation,
    ApolloTypes.PatchAccountsTransferCancelMutationVariables
  >(PatchAccountsTransferCancelDocument, baseOptions);
}
export type PatchAccountsTransferCancelMutationHookResult = ReturnType<
  typeof usePatchAccountsTransferCancelMutation
>;
export type PatchAccountsTransferCancelMutationResult = Apollo.MutationResult<
  ApolloTypes.PatchAccountsTransferCancelMutation
>;
export type PatchAccountsTransferCancelMutationOptions = Apollo.BaseMutationOptions<
  ApolloTypes.PatchAccountsTransferCancelMutation,
  ApolloTypes.PatchAccountsTransferCancelMutationVariables
>;
export const PatchAccountsTransferSettleDocument = /* #__PURE__ */ gql`
  mutation patchAccountsTransferSettle(
    $accountNumber: String!
    $transferId: String!
  ) {
    patchAccountsTransferSettle(
      accountNumber: $accountNumber
      transferId: $transferId
    ) {
      transfer {
        accountNumber
        amount
        counterparty
        counterpartyId
        createdAt
        direction
        status
        transferId
        updatedAt
      }
    }
  }
`;
export type PatchAccountsTransferSettleMutationFn = Apollo.MutationFunction<
  ApolloTypes.PatchAccountsTransferSettleMutation,
  ApolloTypes.PatchAccountsTransferSettleMutationVariables
>;

/**
 * __usePatchAccountsTransferSettleMutation__
 *
 * To run a mutation, you first call `usePatchAccountsTransferSettleMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `usePatchAccountsTransferSettleMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [patchAccountsTransferSettleMutation, { data, loading, error }] = usePatchAccountsTransferSettleMutation({
 *   variables: {
 *      accountNumber: // value for 'accountNumber'
 *      transferId: // value for 'transferId'
 *   },
 * });
 */
export function usePatchAccountsTransferSettleMutation(
  baseOptions?: Apollo.MutationHookOptions<
    ApolloTypes.PatchAccountsTransferSettleMutation,
    ApolloTypes.PatchAccountsTransferSettleMutationVariables
  >
) {
  return Apollo.useMutation<
    ApolloTypes.PatchAccountsTransferSettleMutation,
    ApolloTypes.PatchAccountsTransferSettleMutationVariables
  >(PatchAccountsTransferSettleDocument, baseOptions);
}
export type PatchAccountsTransferSettleMutationHookResult = ReturnType<
  typeof usePatchAccountsTransferSettleMutation
>;
export type PatchAccountsTransferSettleMutationResult = Apollo.MutationResult<
  ApolloTypes.PatchAccountsTransferSettleMutation
>;
export type PatchAccountsTransferSettleMutationOptions = Apollo.BaseMutationOptions<
  ApolloTypes.PatchAccountsTransferSettleMutation,
  ApolloTypes.PatchAccountsTransferSettleMutationVariables
>;
export const PatchAssetDocument = /* #__PURE__ */ gql`
  mutation patchAsset(
    $id: String!
    $updateAssetRequestInput: UpdateAssetRequestInput
  ) {
    patchAsset(id: $id, updateAssetRequestInput: $updateAssetRequestInput) {
      created
      updated
    }
  }
`;
export type PatchAssetMutationFn = Apollo.MutationFunction<
  ApolloTypes.PatchAssetMutation,
  ApolloTypes.PatchAssetMutationVariables
>;

/**
 * __usePatchAssetMutation__
 *
 * To run a mutation, you first call `usePatchAssetMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `usePatchAssetMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [patchAssetMutation, { data, loading, error }] = usePatchAssetMutation({
 *   variables: {
 *      id: // value for 'id'
 *      updateAssetRequestInput: // value for 'updateAssetRequestInput'
 *   },
 * });
 */
export function usePatchAssetMutation(
  baseOptions?: Apollo.MutationHookOptions<
    ApolloTypes.PatchAssetMutation,
    ApolloTypes.PatchAssetMutationVariables
  >
) {
  return Apollo.useMutation<
    ApolloTypes.PatchAssetMutation,
    ApolloTypes.PatchAssetMutationVariables
  >(PatchAssetDocument, baseOptions);
}
export type PatchAssetMutationHookResult = ReturnType<
  typeof usePatchAssetMutation
>;
export type PatchAssetMutationResult = Apollo.MutationResult<
  ApolloTypes.PatchAssetMutation
>;
export type PatchAssetMutationOptions = Apollo.BaseMutationOptions<
  ApolloTypes.PatchAssetMutation,
  ApolloTypes.PatchAssetMutationVariables
>;
export const PatchAssetsTimeSeriesDocument = /* #__PURE__ */ gql`
  mutation patchAssetsTimeSeries(
    $updateAssetTimeSeriesRequestInput: UpdateAssetTimeSeriesRequestInput
  ) {
    patchAssetsTimeSeries(
      updateAssetTimeSeriesRequestInput: $updateAssetTimeSeriesRequestInput
    ) {
      updated
    }
  }
`;
export type PatchAssetsTimeSeriesMutationFn = Apollo.MutationFunction<
  ApolloTypes.PatchAssetsTimeSeriesMutation,
  ApolloTypes.PatchAssetsTimeSeriesMutationVariables
>;

/**
 * __usePatchAssetsTimeSeriesMutation__
 *
 * To run a mutation, you first call `usePatchAssetsTimeSeriesMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `usePatchAssetsTimeSeriesMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [patchAssetsTimeSeriesMutation, { data, loading, error }] = usePatchAssetsTimeSeriesMutation({
 *   variables: {
 *      updateAssetTimeSeriesRequestInput: // value for 'updateAssetTimeSeriesRequestInput'
 *   },
 * });
 */
export function usePatchAssetsTimeSeriesMutation(
  baseOptions?: Apollo.MutationHookOptions<
    ApolloTypes.PatchAssetsTimeSeriesMutation,
    ApolloTypes.PatchAssetsTimeSeriesMutationVariables
  >
) {
  return Apollo.useMutation<
    ApolloTypes.PatchAssetsTimeSeriesMutation,
    ApolloTypes.PatchAssetsTimeSeriesMutationVariables
  >(PatchAssetsTimeSeriesDocument, baseOptions);
}
export type PatchAssetsTimeSeriesMutationHookResult = ReturnType<
  typeof usePatchAssetsTimeSeriesMutation
>;
export type PatchAssetsTimeSeriesMutationResult = Apollo.MutationResult<
  ApolloTypes.PatchAssetsTimeSeriesMutation
>;
export type PatchAssetsTimeSeriesMutationOptions = Apollo.BaseMutationOptions<
  ApolloTypes.PatchAssetsTimeSeriesMutation,
  ApolloTypes.PatchAssetsTimeSeriesMutationVariables
>;
export const PatchInstitutionDocument = /* #__PURE__ */ gql`
  mutation patchInstitution(
    $institutionId: String!
    $updateInstitutionRequestInput: UpdateInstitutionRequestInput
  ) {
    patchInstitution(
      institutionId: $institutionId
      updateInstitutionRequestInput: $updateInstitutionRequestInput
    ) {
      institution {
        createdAt
        id
        machineUsers {
          clientId
          clientSecret
        }
        metadata
        name
        primaryContact {
          email
          first
          last
        }
        updatedAt
      }
    }
  }
`;
export type PatchInstitutionMutationFn = Apollo.MutationFunction<
  ApolloTypes.PatchInstitutionMutation,
  ApolloTypes.PatchInstitutionMutationVariables
>;

/**
 * __usePatchInstitutionMutation__
 *
 * To run a mutation, you first call `usePatchInstitutionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `usePatchInstitutionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [patchInstitutionMutation, { data, loading, error }] = usePatchInstitutionMutation({
 *   variables: {
 *      institutionId: // value for 'institutionId'
 *      updateInstitutionRequestInput: // value for 'updateInstitutionRequestInput'
 *   },
 * });
 */
export function usePatchInstitutionMutation(
  baseOptions?: Apollo.MutationHookOptions<
    ApolloTypes.PatchInstitutionMutation,
    ApolloTypes.PatchInstitutionMutationVariables
  >
) {
  return Apollo.useMutation<
    ApolloTypes.PatchInstitutionMutation,
    ApolloTypes.PatchInstitutionMutationVariables
  >(PatchInstitutionDocument, baseOptions);
}
export type PatchInstitutionMutationHookResult = ReturnType<
  typeof usePatchInstitutionMutation
>;
export type PatchInstitutionMutationResult = Apollo.MutationResult<
  ApolloTypes.PatchInstitutionMutation
>;
export type PatchInstitutionMutationOptions = Apollo.BaseMutationOptions<
  ApolloTypes.PatchInstitutionMutation,
  ApolloTypes.PatchInstitutionMutationVariables
>;
export const PatchInstitutionApiCallRecordDocument = /* #__PURE__ */ gql`
  mutation patchInstitutionApiCallRecord(
    $institutionId: String!
    $recordId: String!
    $updateApiCallRecordRequestInput: UpdateApiCallRecordRequestInput
  ) {
    patchInstitutionApiCallRecord(
      institutionId: $institutionId
      recordId: $recordId
      updateApiCallRecordRequestInput: $updateApiCallRecordRequestInput
    ) {
      apiCallRecord {
        action
        createdAt
        id
        institutionId
        metadata
        responseStatus
        updatedAt
        url
      }
    }
  }
`;
export type PatchInstitutionApiCallRecordMutationFn = Apollo.MutationFunction<
  ApolloTypes.PatchInstitutionApiCallRecordMutation,
  ApolloTypes.PatchInstitutionApiCallRecordMutationVariables
>;

/**
 * __usePatchInstitutionApiCallRecordMutation__
 *
 * To run a mutation, you first call `usePatchInstitutionApiCallRecordMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `usePatchInstitutionApiCallRecordMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [patchInstitutionApiCallRecordMutation, { data, loading, error }] = usePatchInstitutionApiCallRecordMutation({
 *   variables: {
 *      institutionId: // value for 'institutionId'
 *      recordId: // value for 'recordId'
 *      updateApiCallRecordRequestInput: // value for 'updateApiCallRecordRequestInput'
 *   },
 * });
 */
export function usePatchInstitutionApiCallRecordMutation(
  baseOptions?: Apollo.MutationHookOptions<
    ApolloTypes.PatchInstitutionApiCallRecordMutation,
    ApolloTypes.PatchInstitutionApiCallRecordMutationVariables
  >
) {
  return Apollo.useMutation<
    ApolloTypes.PatchInstitutionApiCallRecordMutation,
    ApolloTypes.PatchInstitutionApiCallRecordMutationVariables
  >(PatchInstitutionApiCallRecordDocument, baseOptions);
}
export type PatchInstitutionApiCallRecordMutationHookResult = ReturnType<
  typeof usePatchInstitutionApiCallRecordMutation
>;
export type PatchInstitutionApiCallRecordMutationResult = Apollo.MutationResult<
  ApolloTypes.PatchInstitutionApiCallRecordMutation
>;
export type PatchInstitutionApiCallRecordMutationOptions = Apollo.BaseMutationOptions<
  ApolloTypes.PatchInstitutionApiCallRecordMutation,
  ApolloTypes.PatchInstitutionApiCallRecordMutationVariables
>;
export const PatchInstitutionInventoryDocument = /* #__PURE__ */ gql`
  mutation patchInstitutionInventory(
    $id: String!
    $institutionId: String!
    $updateInventoryRequestInput: UpdateInventoryRequestInput
  ) {
    patchInstitutionInventory(
      id: $id
      institutionId: $institutionId
      updateInventoryRequestInput: $updateInventoryRequestInput
    ) {
      unmappedConstituents {
        assetId
        cusip
        isin
        ticker
      }
    }
  }
`;
export type PatchInstitutionInventoryMutationFn = Apollo.MutationFunction<
  ApolloTypes.PatchInstitutionInventoryMutation,
  ApolloTypes.PatchInstitutionInventoryMutationVariables
>;

/**
 * __usePatchInstitutionInventoryMutation__
 *
 * To run a mutation, you first call `usePatchInstitutionInventoryMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `usePatchInstitutionInventoryMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [patchInstitutionInventoryMutation, { data, loading, error }] = usePatchInstitutionInventoryMutation({
 *   variables: {
 *      id: // value for 'id'
 *      institutionId: // value for 'institutionId'
 *      updateInventoryRequestInput: // value for 'updateInventoryRequestInput'
 *   },
 * });
 */
export function usePatchInstitutionInventoryMutation(
  baseOptions?: Apollo.MutationHookOptions<
    ApolloTypes.PatchInstitutionInventoryMutation,
    ApolloTypes.PatchInstitutionInventoryMutationVariables
  >
) {
  return Apollo.useMutation<
    ApolloTypes.PatchInstitutionInventoryMutation,
    ApolloTypes.PatchInstitutionInventoryMutationVariables
  >(PatchInstitutionInventoryDocument, baseOptions);
}
export type PatchInstitutionInventoryMutationHookResult = ReturnType<
  typeof usePatchInstitutionInventoryMutation
>;
export type PatchInstitutionInventoryMutationResult = Apollo.MutationResult<
  ApolloTypes.PatchInstitutionInventoryMutation
>;
export type PatchInstitutionInventoryMutationOptions = Apollo.BaseMutationOptions<
  ApolloTypes.PatchInstitutionInventoryMutation,
  ApolloTypes.PatchInstitutionInventoryMutationVariables
>;
export const PatchInstitutionsUsersEmailDocument = /* #__PURE__ */ gql`
  mutation patchInstitutionsUsersEmail(
    $email: String!
    $updateUserMappingRequestInput: UpdateUserMappingRequestInput
  ) {
    patchInstitutionsUsersEmail(
      email: $email
      updateUserMappingRequestInput: $updateUserMappingRequestInput
    ) {
      userMapping {
        email
        institutionId
        roles
        userId
        userType
      }
    }
  }
`;
export type PatchInstitutionsUsersEmailMutationFn = Apollo.MutationFunction<
  ApolloTypes.PatchInstitutionsUsersEmailMutation,
  ApolloTypes.PatchInstitutionsUsersEmailMutationVariables
>;

/**
 * __usePatchInstitutionsUsersEmailMutation__
 *
 * To run a mutation, you first call `usePatchInstitutionsUsersEmailMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `usePatchInstitutionsUsersEmailMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [patchInstitutionsUsersEmailMutation, { data, loading, error }] = usePatchInstitutionsUsersEmailMutation({
 *   variables: {
 *      email: // value for 'email'
 *      updateUserMappingRequestInput: // value for 'updateUserMappingRequestInput'
 *   },
 * });
 */
export function usePatchInstitutionsUsersEmailMutation(
  baseOptions?: Apollo.MutationHookOptions<
    ApolloTypes.PatchInstitutionsUsersEmailMutation,
    ApolloTypes.PatchInstitutionsUsersEmailMutationVariables
  >
) {
  return Apollo.useMutation<
    ApolloTypes.PatchInstitutionsUsersEmailMutation,
    ApolloTypes.PatchInstitutionsUsersEmailMutationVariables
  >(PatchInstitutionsUsersEmailDocument, baseOptions);
}
export type PatchInstitutionsUsersEmailMutationHookResult = ReturnType<
  typeof usePatchInstitutionsUsersEmailMutation
>;
export type PatchInstitutionsUsersEmailMutationResult = Apollo.MutationResult<
  ApolloTypes.PatchInstitutionsUsersEmailMutation
>;
export type PatchInstitutionsUsersEmailMutationOptions = Apollo.BaseMutationOptions<
  ApolloTypes.PatchInstitutionsUsersEmailMutation,
  ApolloTypes.PatchInstitutionsUsersEmailMutationVariables
>;
export const PatchInvestorDocument = /* #__PURE__ */ gql`
  mutation patchInvestor(
    $investorId: String!
    $updateInvestorRequestInput: UpdateInvestorRequestInput
  ) {
    patchInvestor(
      investorId: $investorId
      updateInvestorRequestInput: $updateInvestorRequestInput
    ) {
      investor {
        createdAt
        id
        investorInfo {
          applicantSignature {
            eSigned
          }
          beneficialOwnersAndOfficers {
            beneficialOwners {
              address {
                city
                country
                postalCode
                state
                streetAddress
              }
              dateOfBirth
              identificationNumber
              name {
                familyName
                givenName
                legalName
              }
              socialSecurityNumber
            }
            businessClassification
            officers {
              address {
                city
                country
                postalCode
                state
                streetAddress
              }
              dateOfBirth
              identificationNumber
              name {
                familyName
                givenName
                legalName
              }
              socialSecurityNumber
            }
          }
          birthCountry
          cashAccountAgreement {
            articlesOfIncorporationSnapId
            authorizedOfficerName
            authorizedOfficerTitle
            corporationName
            isAuthorizedOfficerESigned
            isSecretaryESigned
            secretaryName
            stateOfIncorporation
          }
          catAccountHolderType
          citizenshipCountry
          contactInformation {
            city
            country
            emailAddresses
            phone
            phoneType
            postalCode
            state
            streetAddress
          }
          disclosures {
            affiliatedApproval
            companySymbols
            firmName
            interestedParties {
              mailingAddress {
                city
                country
                postalCode
                state
                streetAddress
              }
              name {
                companyName
              }
            }
            isAffiliatedExchangeOrFINRA
            isControlPerson
            isPoliticallyExposed
            politicalExposureDetail {
              immediateFamily
              politicalOrganization
            }
          }
          employment {
            employer
            employmentStatus
            positionEmployed
          }
          entityDueDiligence {
            accountActivity {
              expectedWithdrawalFrequency
              initialDepositAmount
              initialDepositSource
              primaryEntityAccountActivity
              willTransactForeignBonds
              willTransactLowPricedSecurities
            }
            accountInformation {
              accountName
              businessLocations
              countryOfIncorporation
              hasRelatedAccounts
              relatedAccountList {
                accountNumber
                entityName
              }
            }
            additionalAccounts {
              confirmEntityDoesNotIssueBearerShares
              institutionNames
              primaryOngoingFundingSource
              primaryOngoingFundingSourceClarification
              scopeOfBusiness
              scopeOfBusinessClarification
            }
            assessedRiskRating
            entityOrAssociatesHaveNegativeNews
            politicallyExposedPersons {
              isPoliticallyExposed
              politicalOfficials {
                immediateFamily
                legalName
                politicalOrganization
                politicalTitle
                role
              }
            }
          }
          exemptLegalCustomer {
            exemption
            isExemptLegalCustomer
          }
          familyName
          givenName
          investmentProfile {
            annualIncomeUSD
            federalTaxBracketPercent
            investmentExperience
            investmentObjective
            liquidNetWorthUSD
            riskTolerance
            totalNetWorthUSD
          }
          investorType
          isPermanentResident
          issuerDirectCommunication
          llcAccountAgreement {
            authorizedSignerName
            authorizedSignerTitle
            entityName
            isAuthorizedSignerESigned
            membersAndManagers {
              isManager
              isManagerESigned
              legalName
              organizationalRole
            }
            resolutionAdoptionDate
            stateOfOrigin
          }
          organization {
            entityType
            foreignBankUSAgent
            isForeignBank
            isMaintainedForForeignFinancialInstitution
            uploadedWNineForm
            usEntity
          }
          organizationName
          suitabilityProfile {
            liquidityNeeds
            timeHorizon
          }
          title
          trustedContactInfo {
            trustedContact
            trustedContactPerson {
              emailAddress
              familyName
              givenName
            }
          }
          wnineTaxForm {
            exemptPayeeCode
            exemptionFromFatca
          }
        }
        investorType
        metadata
        status
        updatedAt
      }
    }
  }
`;
export type PatchInvestorMutationFn = Apollo.MutationFunction<
  ApolloTypes.PatchInvestorMutation,
  ApolloTypes.PatchInvestorMutationVariables
>;

/**
 * __usePatchInvestorMutation__
 *
 * To run a mutation, you first call `usePatchInvestorMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `usePatchInvestorMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [patchInvestorMutation, { data, loading, error }] = usePatchInvestorMutation({
 *   variables: {
 *      investorId: // value for 'investorId'
 *      updateInvestorRequestInput: // value for 'updateInvestorRequestInput'
 *   },
 * });
 */
export function usePatchInvestorMutation(
  baseOptions?: Apollo.MutationHookOptions<
    ApolloTypes.PatchInvestorMutation,
    ApolloTypes.PatchInvestorMutationVariables
  >
) {
  return Apollo.useMutation<
    ApolloTypes.PatchInvestorMutation,
    ApolloTypes.PatchInvestorMutationVariables
  >(PatchInvestorDocument, baseOptions);
}
export type PatchInvestorMutationHookResult = ReturnType<
  typeof usePatchInvestorMutation
>;
export type PatchInvestorMutationResult = Apollo.MutationResult<
  ApolloTypes.PatchInvestorMutation
>;
export type PatchInvestorMutationOptions = Apollo.BaseMutationOptions<
  ApolloTypes.PatchInvestorMutation,
  ApolloTypes.PatchInvestorMutationVariables
>;
export const PatchInvestorAccountDocument = /* #__PURE__ */ gql`
  mutation patchInvestorAccount($investorId: String!) {
    patchInvestorAccount(investorId: $investorId) {
      apexAccount {
        apexAccountNumber
        apexRequestId
        createdAt
        id
        investorId
        metadata
        status
        updatedAt
      }
    }
  }
`;
export type PatchInvestorAccountMutationFn = Apollo.MutationFunction<
  ApolloTypes.PatchInvestorAccountMutation,
  ApolloTypes.PatchInvestorAccountMutationVariables
>;

/**
 * __usePatchInvestorAccountMutation__
 *
 * To run a mutation, you first call `usePatchInvestorAccountMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `usePatchInvestorAccountMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [patchInvestorAccountMutation, { data, loading, error }] = usePatchInvestorAccountMutation({
 *   variables: {
 *      investorId: // value for 'investorId'
 *   },
 * });
 */
export function usePatchInvestorAccountMutation(
  baseOptions?: Apollo.MutationHookOptions<
    ApolloTypes.PatchInvestorAccountMutation,
    ApolloTypes.PatchInvestorAccountMutationVariables
  >
) {
  return Apollo.useMutation<
    ApolloTypes.PatchInvestorAccountMutation,
    ApolloTypes.PatchInvestorAccountMutationVariables
  >(PatchInvestorAccountDocument, baseOptions);
}
export type PatchInvestorAccountMutationHookResult = ReturnType<
  typeof usePatchInvestorAccountMutation
>;
export type PatchInvestorAccountMutationResult = Apollo.MutationResult<
  ApolloTypes.PatchInvestorAccountMutation
>;
export type PatchInvestorAccountMutationOptions = Apollo.BaseMutationOptions<
  ApolloTypes.PatchInvestorAccountMutation,
  ApolloTypes.PatchInvestorAccountMutationVariables
>;
export const PatchInvestorLinkedBankAccountStatusDocument = /* #__PURE__ */ gql`
  mutation patchInvestorLinkedBankAccountStatus(
    $investorId: String!
    $linkedBankAccountId: String!
    $updateLinkedBankAccountStatusRequestInput: UpdateLinkedBankAccountStatusRequestInput
  ) {
    patchInvestorLinkedBankAccountStatus(
      investorId: $investorId
      linkedBankAccountId: $linkedBankAccountId
      updateLinkedBankAccountStatusRequestInput: $updateLinkedBankAccountStatusRequestInput
    ) {
      linkedBankAccount {
        accountType
        bankName
        createdAt
        id
        investorId
        mask
        metadata
        status
        updatedAt
      }
    }
  }
`;
export type PatchInvestorLinkedBankAccountStatusMutationFn = Apollo.MutationFunction<
  ApolloTypes.PatchInvestorLinkedBankAccountStatusMutation,
  ApolloTypes.PatchInvestorLinkedBankAccountStatusMutationVariables
>;

/**
 * __usePatchInvestorLinkedBankAccountStatusMutation__
 *
 * To run a mutation, you first call `usePatchInvestorLinkedBankAccountStatusMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `usePatchInvestorLinkedBankAccountStatusMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [patchInvestorLinkedBankAccountStatusMutation, { data, loading, error }] = usePatchInvestorLinkedBankAccountStatusMutation({
 *   variables: {
 *      investorId: // value for 'investorId'
 *      linkedBankAccountId: // value for 'linkedBankAccountId'
 *      updateLinkedBankAccountStatusRequestInput: // value for 'updateLinkedBankAccountStatusRequestInput'
 *   },
 * });
 */
export function usePatchInvestorLinkedBankAccountStatusMutation(
  baseOptions?: Apollo.MutationHookOptions<
    ApolloTypes.PatchInvestorLinkedBankAccountStatusMutation,
    ApolloTypes.PatchInvestorLinkedBankAccountStatusMutationVariables
  >
) {
  return Apollo.useMutation<
    ApolloTypes.PatchInvestorLinkedBankAccountStatusMutation,
    ApolloTypes.PatchInvestorLinkedBankAccountStatusMutationVariables
  >(PatchInvestorLinkedBankAccountStatusDocument, baseOptions);
}
export type PatchInvestorLinkedBankAccountStatusMutationHookResult = ReturnType<
  typeof usePatchInvestorLinkedBankAccountStatusMutation
>;
export type PatchInvestorLinkedBankAccountStatusMutationResult = Apollo.MutationResult<
  ApolloTypes.PatchInvestorLinkedBankAccountStatusMutation
>;
export type PatchInvestorLinkedBankAccountStatusMutationOptions = Apollo.BaseMutationOptions<
  ApolloTypes.PatchInvestorLinkedBankAccountStatusMutation,
  ApolloTypes.PatchInvestorLinkedBankAccountStatusMutationVariables
>;
export const PatchInvestorTransferStatusDocument = /* #__PURE__ */ gql`
  mutation patchInvestorTransferStatus(
    $investorId: String!
    $transferId: String!
    $updateTransferStatusRequestInput: UpdateTransferStatusRequestInput
  ) {
    patchInvestorTransferStatus(
      investorId: $investorId
      transferId: $transferId
      updateTransferStatusRequestInput: $updateTransferStatusRequestInput
    ) {
      transfer {
        amount
        createdAt
        currency
        direction
        externalEntity {
          externalEntityId
          externalEntityType
        }
        id
        investorId
        ledgerId
        linkedBankAccountId
        metadata
        portfolioId
        status
        transferMethod
        updatedAt
      }
    }
  }
`;
export type PatchInvestorTransferStatusMutationFn = Apollo.MutationFunction<
  ApolloTypes.PatchInvestorTransferStatusMutation,
  ApolloTypes.PatchInvestorTransferStatusMutationVariables
>;

/**
 * __usePatchInvestorTransferStatusMutation__
 *
 * To run a mutation, you first call `usePatchInvestorTransferStatusMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `usePatchInvestorTransferStatusMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [patchInvestorTransferStatusMutation, { data, loading, error }] = usePatchInvestorTransferStatusMutation({
 *   variables: {
 *      investorId: // value for 'investorId'
 *      transferId: // value for 'transferId'
 *      updateTransferStatusRequestInput: // value for 'updateTransferStatusRequestInput'
 *   },
 * });
 */
export function usePatchInvestorTransferStatusMutation(
  baseOptions?: Apollo.MutationHookOptions<
    ApolloTypes.PatchInvestorTransferStatusMutation,
    ApolloTypes.PatchInvestorTransferStatusMutationVariables
  >
) {
  return Apollo.useMutation<
    ApolloTypes.PatchInvestorTransferStatusMutation,
    ApolloTypes.PatchInvestorTransferStatusMutationVariables
  >(PatchInvestorTransferStatusDocument, baseOptions);
}
export type PatchInvestorTransferStatusMutationHookResult = ReturnType<
  typeof usePatchInvestorTransferStatusMutation
>;
export type PatchInvestorTransferStatusMutationResult = Apollo.MutationResult<
  ApolloTypes.PatchInvestorTransferStatusMutation
>;
export type PatchInvestorTransferStatusMutationOptions = Apollo.BaseMutationOptions<
  ApolloTypes.PatchInvestorTransferStatusMutation,
  ApolloTypes.PatchInvestorTransferStatusMutationVariables
>;
export const PatchIssueDocument = /* #__PURE__ */ gql`
  mutation patchIssue(
    $id: String!
    $updateIssueRequestInput: UpdateIssueRequestInput
  ) {
    patchIssue(id: $id, updateIssueRequestInput: $updateIssueRequestInput) {
      created
      updated
    }
  }
`;
export type PatchIssueMutationFn = Apollo.MutationFunction<
  ApolloTypes.PatchIssueMutation,
  ApolloTypes.PatchIssueMutationVariables
>;

/**
 * __usePatchIssueMutation__
 *
 * To run a mutation, you first call `usePatchIssueMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `usePatchIssueMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [patchIssueMutation, { data, loading, error }] = usePatchIssueMutation({
 *   variables: {
 *      id: // value for 'id'
 *      updateIssueRequestInput: // value for 'updateIssueRequestInput'
 *   },
 * });
 */
export function usePatchIssueMutation(
  baseOptions?: Apollo.MutationHookOptions<
    ApolloTypes.PatchIssueMutation,
    ApolloTypes.PatchIssueMutationVariables
  >
) {
  return Apollo.useMutation<
    ApolloTypes.PatchIssueMutation,
    ApolloTypes.PatchIssueMutationVariables
  >(PatchIssueDocument, baseOptions);
}
export type PatchIssueMutationHookResult = ReturnType<
  typeof usePatchIssueMutation
>;
export type PatchIssueMutationResult = Apollo.MutationResult<
  ApolloTypes.PatchIssueMutation
>;
export type PatchIssueMutationOptions = Apollo.BaseMutationOptions<
  ApolloTypes.PatchIssueMutation,
  ApolloTypes.PatchIssueMutationVariables
>;
export const PatchIssuerDocument = /* #__PURE__ */ gql`
  mutation patchIssuer(
    $id: String!
    $updateIssuerRequestInput: UpdateIssuerRequestInput
  ) {
    patchIssuer(id: $id, updateIssuerRequestInput: $updateIssuerRequestInput) {
      created
      updated
    }
  }
`;
export type PatchIssuerMutationFn = Apollo.MutationFunction<
  ApolloTypes.PatchIssuerMutation,
  ApolloTypes.PatchIssuerMutationVariables
>;

/**
 * __usePatchIssuerMutation__
 *
 * To run a mutation, you first call `usePatchIssuerMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `usePatchIssuerMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [patchIssuerMutation, { data, loading, error }] = usePatchIssuerMutation({
 *   variables: {
 *      id: // value for 'id'
 *      updateIssuerRequestInput: // value for 'updateIssuerRequestInput'
 *   },
 * });
 */
export function usePatchIssuerMutation(
  baseOptions?: Apollo.MutationHookOptions<
    ApolloTypes.PatchIssuerMutation,
    ApolloTypes.PatchIssuerMutationVariables
  >
) {
  return Apollo.useMutation<
    ApolloTypes.PatchIssuerMutation,
    ApolloTypes.PatchIssuerMutationVariables
  >(PatchIssuerDocument, baseOptions);
}
export type PatchIssuerMutationHookResult = ReturnType<
  typeof usePatchIssuerMutation
>;
export type PatchIssuerMutationResult = Apollo.MutationResult<
  ApolloTypes.PatchIssuerMutation
>;
export type PatchIssuerMutationOptions = Apollo.BaseMutationOptions<
  ApolloTypes.PatchIssuerMutation,
  ApolloTypes.PatchIssuerMutationVariables
>;
export const PatchOrderDocument = /* #__PURE__ */ gql`
  mutation patchOrder($orderId: String!) {
    patchOrder(orderId: $orderId) {
      message
      timestamp
    }
  }
`;
export type PatchOrderMutationFn = Apollo.MutationFunction<
  ApolloTypes.PatchOrderMutation,
  ApolloTypes.PatchOrderMutationVariables
>;

/**
 * __usePatchOrderMutation__
 *
 * To run a mutation, you first call `usePatchOrderMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `usePatchOrderMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [patchOrderMutation, { data, loading, error }] = usePatchOrderMutation({
 *   variables: {
 *      orderId: // value for 'orderId'
 *   },
 * });
 */
export function usePatchOrderMutation(
  baseOptions?: Apollo.MutationHookOptions<
    ApolloTypes.PatchOrderMutation,
    ApolloTypes.PatchOrderMutationVariables
  >
) {
  return Apollo.useMutation<
    ApolloTypes.PatchOrderMutation,
    ApolloTypes.PatchOrderMutationVariables
  >(PatchOrderDocument, baseOptions);
}
export type PatchOrderMutationHookResult = ReturnType<
  typeof usePatchOrderMutation
>;
export type PatchOrderMutationResult = Apollo.MutationResult<
  ApolloTypes.PatchOrderMutation
>;
export type PatchOrderMutationOptions = Apollo.BaseMutationOptions<
  ApolloTypes.PatchOrderMutation,
  ApolloTypes.PatchOrderMutationVariables
>;
export const PatchPortfolioDocument = /* #__PURE__ */ gql`
  mutation patchPortfolio(
    $id: String!
    $updatePortfolioRequestInput: UpdatePortfolioRequestInput
  ) {
    patchPortfolio(
      id: $id
      updatePortfolioRequestInput: $updatePortfolioRequestInput
    ) {
      portfolio {
        accountNumber
        app
        createdAt
        currency
        description
        id
        metadata
        name
        positions {
          assetId
          costBasis
          createdAt
          id
          metadata
          portfolioId
          quantity
          settled
          tradeDate
          unsettled
          updatedAt
        }
        status
        updatedAt
      }
    }
  }
`;
export type PatchPortfolioMutationFn = Apollo.MutationFunction<
  ApolloTypes.PatchPortfolioMutation,
  ApolloTypes.PatchPortfolioMutationVariables
>;

/**
 * __usePatchPortfolioMutation__
 *
 * To run a mutation, you first call `usePatchPortfolioMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `usePatchPortfolioMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [patchPortfolioMutation, { data, loading, error }] = usePatchPortfolioMutation({
 *   variables: {
 *      id: // value for 'id'
 *      updatePortfolioRequestInput: // value for 'updatePortfolioRequestInput'
 *   },
 * });
 */
export function usePatchPortfolioMutation(
  baseOptions?: Apollo.MutationHookOptions<
    ApolloTypes.PatchPortfolioMutation,
    ApolloTypes.PatchPortfolioMutationVariables
  >
) {
  return Apollo.useMutation<
    ApolloTypes.PatchPortfolioMutation,
    ApolloTypes.PatchPortfolioMutationVariables
  >(PatchPortfolioDocument, baseOptions);
}
export type PatchPortfolioMutationHookResult = ReturnType<
  typeof usePatchPortfolioMutation
>;
export type PatchPortfolioMutationResult = Apollo.MutationResult<
  ApolloTypes.PatchPortfolioMutation
>;
export type PatchPortfolioMutationOptions = Apollo.BaseMutationOptions<
  ApolloTypes.PatchPortfolioMutation,
  ApolloTypes.PatchPortfolioMutationVariables
>;
export const PatchPortfolioOrderDocument = /* #__PURE__ */ gql`
  mutation patchPortfolioOrder(
    $id: String!
    $portfolioId: String!
    $updateOrderRequestInput: UpdateOrderRequestInput
  ) {
    patchPortfolioOrder(
      id: $id
      portfolioId: $portfolioId
      updateOrderRequestInput: $updateOrderRequestInput
    ) {
      order {
        assetId
        assignedTo
        comment
        createdAt
        filled
        fullFillRequired
        goodTillCancel
        id
        metadata
        portfolioId
        priceLimit
        quantity
        spotPrice
        status
        updatedAt
      }
    }
  }
`;
export type PatchPortfolioOrderMutationFn = Apollo.MutationFunction<
  ApolloTypes.PatchPortfolioOrderMutation,
  ApolloTypes.PatchPortfolioOrderMutationVariables
>;

/**
 * __usePatchPortfolioOrderMutation__
 *
 * To run a mutation, you first call `usePatchPortfolioOrderMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `usePatchPortfolioOrderMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [patchPortfolioOrderMutation, { data, loading, error }] = usePatchPortfolioOrderMutation({
 *   variables: {
 *      id: // value for 'id'
 *      portfolioId: // value for 'portfolioId'
 *      updateOrderRequestInput: // value for 'updateOrderRequestInput'
 *   },
 * });
 */
export function usePatchPortfolioOrderMutation(
  baseOptions?: Apollo.MutationHookOptions<
    ApolloTypes.PatchPortfolioOrderMutation,
    ApolloTypes.PatchPortfolioOrderMutationVariables
  >
) {
  return Apollo.useMutation<
    ApolloTypes.PatchPortfolioOrderMutation,
    ApolloTypes.PatchPortfolioOrderMutationVariables
  >(PatchPortfolioOrderDocument, baseOptions);
}
export type PatchPortfolioOrderMutationHookResult = ReturnType<
  typeof usePatchPortfolioOrderMutation
>;
export type PatchPortfolioOrderMutationResult = Apollo.MutationResult<
  ApolloTypes.PatchPortfolioOrderMutation
>;
export type PatchPortfolioOrderMutationOptions = Apollo.BaseMutationOptions<
  ApolloTypes.PatchPortfolioOrderMutation,
  ApolloTypes.PatchPortfolioOrderMutationVariables
>;
export const PatchPortfolioOrderCancelDocument = /* #__PURE__ */ gql`
  mutation patchPortfolioOrderCancel(
    $cancelOrderRequestInput: CancelOrderRequestInput
    $id: String!
    $portfolioId: String!
  ) {
    patchPortfolioOrderCancel(
      cancelOrderRequestInput: $cancelOrderRequestInput
      id: $id
      portfolioId: $portfolioId
    ) {
      canceled
    }
  }
`;
export type PatchPortfolioOrderCancelMutationFn = Apollo.MutationFunction<
  ApolloTypes.PatchPortfolioOrderCancelMutation,
  ApolloTypes.PatchPortfolioOrderCancelMutationVariables
>;

/**
 * __usePatchPortfolioOrderCancelMutation__
 *
 * To run a mutation, you first call `usePatchPortfolioOrderCancelMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `usePatchPortfolioOrderCancelMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [patchPortfolioOrderCancelMutation, { data, loading, error }] = usePatchPortfolioOrderCancelMutation({
 *   variables: {
 *      cancelOrderRequestInput: // value for 'cancelOrderRequestInput'
 *      id: // value for 'id'
 *      portfolioId: // value for 'portfolioId'
 *   },
 * });
 */
export function usePatchPortfolioOrderCancelMutation(
  baseOptions?: Apollo.MutationHookOptions<
    ApolloTypes.PatchPortfolioOrderCancelMutation,
    ApolloTypes.PatchPortfolioOrderCancelMutationVariables
  >
) {
  return Apollo.useMutation<
    ApolloTypes.PatchPortfolioOrderCancelMutation,
    ApolloTypes.PatchPortfolioOrderCancelMutationVariables
  >(PatchPortfolioOrderCancelDocument, baseOptions);
}
export type PatchPortfolioOrderCancelMutationHookResult = ReturnType<
  typeof usePatchPortfolioOrderCancelMutation
>;
export type PatchPortfolioOrderCancelMutationResult = Apollo.MutationResult<
  ApolloTypes.PatchPortfolioOrderCancelMutation
>;
export type PatchPortfolioOrderCancelMutationOptions = Apollo.BaseMutationOptions<
  ApolloTypes.PatchPortfolioOrderCancelMutation,
  ApolloTypes.PatchPortfolioOrderCancelMutationVariables
>;
export const PatchPortfolioTradeCancelDocument = /* #__PURE__ */ gql`
  mutation patchPortfolioTradeCancel(
    $cancelTradeRequestInput: CancelTradeRequestInput
    $id: String!
    $portfolioId: String!
  ) {
    patchPortfolioTradeCancel(
      cancelTradeRequestInput: $cancelTradeRequestInput
      id: $id
      portfolioId: $portfolioId
    ) {
      cancelled
    }
  }
`;
export type PatchPortfolioTradeCancelMutationFn = Apollo.MutationFunction<
  ApolloTypes.PatchPortfolioTradeCancelMutation,
  ApolloTypes.PatchPortfolioTradeCancelMutationVariables
>;

/**
 * __usePatchPortfolioTradeCancelMutation__
 *
 * To run a mutation, you first call `usePatchPortfolioTradeCancelMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `usePatchPortfolioTradeCancelMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [patchPortfolioTradeCancelMutation, { data, loading, error }] = usePatchPortfolioTradeCancelMutation({
 *   variables: {
 *      cancelTradeRequestInput: // value for 'cancelTradeRequestInput'
 *      id: // value for 'id'
 *      portfolioId: // value for 'portfolioId'
 *   },
 * });
 */
export function usePatchPortfolioTradeCancelMutation(
  baseOptions?: Apollo.MutationHookOptions<
    ApolloTypes.PatchPortfolioTradeCancelMutation,
    ApolloTypes.PatchPortfolioTradeCancelMutationVariables
  >
) {
  return Apollo.useMutation<
    ApolloTypes.PatchPortfolioTradeCancelMutation,
    ApolloTypes.PatchPortfolioTradeCancelMutationVariables
  >(PatchPortfolioTradeCancelDocument, baseOptions);
}
export type PatchPortfolioTradeCancelMutationHookResult = ReturnType<
  typeof usePatchPortfolioTradeCancelMutation
>;
export type PatchPortfolioTradeCancelMutationResult = Apollo.MutationResult<
  ApolloTypes.PatchPortfolioTradeCancelMutation
>;
export type PatchPortfolioTradeCancelMutationOptions = Apollo.BaseMutationOptions<
  ApolloTypes.PatchPortfolioTradeCancelMutation,
  ApolloTypes.PatchPortfolioTradeCancelMutationVariables
>;
export const PatchUserDocument = /* #__PURE__ */ gql`
  mutation patchUser(
    $id: String!
    $updateUserRequestInput: UpdateUserRequestInput
  ) {
    patchUser(id: $id, updateUserRequestInput: $updateUserRequestInput) {
      user {
        createdAt
        email
        first
        id
        institutionId
        last
        metadata
        policies {
          actions
          resource
        }
        status
        terms
        updatedAt
        userType
      }
    }
  }
`;
export type PatchUserMutationFn = Apollo.MutationFunction<
  ApolloTypes.PatchUserMutation,
  ApolloTypes.PatchUserMutationVariables
>;

/**
 * __usePatchUserMutation__
 *
 * To run a mutation, you first call `usePatchUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `usePatchUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [patchUserMutation, { data, loading, error }] = usePatchUserMutation({
 *   variables: {
 *      id: // value for 'id'
 *      updateUserRequestInput: // value for 'updateUserRequestInput'
 *   },
 * });
 */
export function usePatchUserMutation(
  baseOptions?: Apollo.MutationHookOptions<
    ApolloTypes.PatchUserMutation,
    ApolloTypes.PatchUserMutationVariables
  >
) {
  return Apollo.useMutation<
    ApolloTypes.PatchUserMutation,
    ApolloTypes.PatchUserMutationVariables
  >(PatchUserDocument, baseOptions);
}
export type PatchUserMutationHookResult = ReturnType<
  typeof usePatchUserMutation
>;
export type PatchUserMutationResult = Apollo.MutationResult<
  ApolloTypes.PatchUserMutation
>;
export type PatchUserMutationOptions = Apollo.BaseMutationOptions<
  ApolloTypes.PatchUserMutation,
  ApolloTypes.PatchUserMutationVariables
>;
export const PatchUserBlockUserDocument = /* #__PURE__ */ gql`
  mutation patchUserBlockUser(
    $blockUserRequestInput: BlockUserRequestInput
    $id: String!
  ) {
    patchUserBlockUser(blockUserRequestInput: $blockUserRequestInput, id: $id) {
      user {
        createdAt
        email
        first
        id
        institutionId
        last
        metadata
        policies {
          actions
          resource
        }
        status
        terms
        updatedAt
        userType
      }
    }
  }
`;
export type PatchUserBlockUserMutationFn = Apollo.MutationFunction<
  ApolloTypes.PatchUserBlockUserMutation,
  ApolloTypes.PatchUserBlockUserMutationVariables
>;

/**
 * __usePatchUserBlockUserMutation__
 *
 * To run a mutation, you first call `usePatchUserBlockUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `usePatchUserBlockUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [patchUserBlockUserMutation, { data, loading, error }] = usePatchUserBlockUserMutation({
 *   variables: {
 *      blockUserRequestInput: // value for 'blockUserRequestInput'
 *      id: // value for 'id'
 *   },
 * });
 */
export function usePatchUserBlockUserMutation(
  baseOptions?: Apollo.MutationHookOptions<
    ApolloTypes.PatchUserBlockUserMutation,
    ApolloTypes.PatchUserBlockUserMutationVariables
  >
) {
  return Apollo.useMutation<
    ApolloTypes.PatchUserBlockUserMutation,
    ApolloTypes.PatchUserBlockUserMutationVariables
  >(PatchUserBlockUserDocument, baseOptions);
}
export type PatchUserBlockUserMutationHookResult = ReturnType<
  typeof usePatchUserBlockUserMutation
>;
export type PatchUserBlockUserMutationResult = Apollo.MutationResult<
  ApolloTypes.PatchUserBlockUserMutation
>;
export type PatchUserBlockUserMutationOptions = Apollo.BaseMutationOptions<
  ApolloTypes.PatchUserBlockUserMutation,
  ApolloTypes.PatchUserBlockUserMutationVariables
>;
export const PatchUsersInvitesEmailResendDocument = /* #__PURE__ */ gql`
  mutation patchUsersInvitesEmailResend($email: String!) {
    patchUsersInvitesEmailResend(email: $email) {
      invitedUser {
        createdAt
        email
        firstName
        institutionId
        invitedBy
        lastName
        nonce
        status
        userType
      }
    }
  }
`;
export type PatchUsersInvitesEmailResendMutationFn = Apollo.MutationFunction<
  ApolloTypes.PatchUsersInvitesEmailResendMutation,
  ApolloTypes.PatchUsersInvitesEmailResendMutationVariables
>;

/**
 * __usePatchUsersInvitesEmailResendMutation__
 *
 * To run a mutation, you first call `usePatchUsersInvitesEmailResendMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `usePatchUsersInvitesEmailResendMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [patchUsersInvitesEmailResendMutation, { data, loading, error }] = usePatchUsersInvitesEmailResendMutation({
 *   variables: {
 *      email: // value for 'email'
 *   },
 * });
 */
export function usePatchUsersInvitesEmailResendMutation(
  baseOptions?: Apollo.MutationHookOptions<
    ApolloTypes.PatchUsersInvitesEmailResendMutation,
    ApolloTypes.PatchUsersInvitesEmailResendMutationVariables
  >
) {
  return Apollo.useMutation<
    ApolloTypes.PatchUsersInvitesEmailResendMutation,
    ApolloTypes.PatchUsersInvitesEmailResendMutationVariables
  >(PatchUsersInvitesEmailResendDocument, baseOptions);
}
export type PatchUsersInvitesEmailResendMutationHookResult = ReturnType<
  typeof usePatchUsersInvitesEmailResendMutation
>;
export type PatchUsersInvitesEmailResendMutationResult = Apollo.MutationResult<
  ApolloTypes.PatchUsersInvitesEmailResendMutation
>;
export type PatchUsersInvitesEmailResendMutationOptions = Apollo.BaseMutationOptions<
  ApolloTypes.PatchUsersInvitesEmailResendMutation,
  ApolloTypes.PatchUsersInvitesEmailResendMutationVariables
>;
export const PostAccountAchRelationshipsDocument = /* #__PURE__ */ gql`
  mutation postAccountAchRelationships(
    $createApexACHRelationshipRequestInput: CreateApexACHRelationshipRequestInput
    $id: String!
  ) {
    postAccountAchRelationships(
      createApexACHRelationshipRequestInput: $createApexACHRelationshipRequestInput
      id: $id
    ) {
      apexAchRelationship {
        accountId
        apexRelationshipId
        createdAt
        id
        linkedBankAccountId
        metadata
        status
        updatedAt
      }
    }
  }
`;
export type PostAccountAchRelationshipsMutationFn = Apollo.MutationFunction<
  ApolloTypes.PostAccountAchRelationshipsMutation,
  ApolloTypes.PostAccountAchRelationshipsMutationVariables
>;

/**
 * __usePostAccountAchRelationshipsMutation__
 *
 * To run a mutation, you first call `usePostAccountAchRelationshipsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `usePostAccountAchRelationshipsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [postAccountAchRelationshipsMutation, { data, loading, error }] = usePostAccountAchRelationshipsMutation({
 *   variables: {
 *      createApexACHRelationshipRequestInput: // value for 'createApexACHRelationshipRequestInput'
 *      id: // value for 'id'
 *   },
 * });
 */
export function usePostAccountAchRelationshipsMutation(
  baseOptions?: Apollo.MutationHookOptions<
    ApolloTypes.PostAccountAchRelationshipsMutation,
    ApolloTypes.PostAccountAchRelationshipsMutationVariables
  >
) {
  return Apollo.useMutation<
    ApolloTypes.PostAccountAchRelationshipsMutation,
    ApolloTypes.PostAccountAchRelationshipsMutationVariables
  >(PostAccountAchRelationshipsDocument, baseOptions);
}
export type PostAccountAchRelationshipsMutationHookResult = ReturnType<
  typeof usePostAccountAchRelationshipsMutation
>;
export type PostAccountAchRelationshipsMutationResult = Apollo.MutationResult<
  ApolloTypes.PostAccountAchRelationshipsMutation
>;
export type PostAccountAchRelationshipsMutationOptions = Apollo.BaseMutationOptions<
  ApolloTypes.PostAccountAchRelationshipsMutation,
  ApolloTypes.PostAccountAchRelationshipsMutationVariables
>;
export const PostAccountFormsCorporateAgreementFormDocument = /* #__PURE__ */ gql`
  mutation postAccountFormsCorporateAgreementForm(
    $createCorporateAgreementFormRequestInput: CreateCorporateAgreementFormRequestInput
  ) {
    postAccountFormsCorporateAgreementForm(
      createCorporateAgreementFormRequestInput: $createCorporateAgreementFormRequestInput
    ) {
      corporateAgreementForm {
        articlesOfIncorporationSnapId
        authorizedOfficerName
        authorizedOfficerTitle
        corporationName
        createdAt
        formId
        isAuthorizedOfficerESigned
        isSecretaryESigned
        secretaryName
        stateOfIncorporation
        updatedAt
      }
    }
  }
`;
export type PostAccountFormsCorporateAgreementFormMutationFn = Apollo.MutationFunction<
  ApolloTypes.PostAccountFormsCorporateAgreementFormMutation,
  ApolloTypes.PostAccountFormsCorporateAgreementFormMutationVariables
>;

/**
 * __usePostAccountFormsCorporateAgreementFormMutation__
 *
 * To run a mutation, you first call `usePostAccountFormsCorporateAgreementFormMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `usePostAccountFormsCorporateAgreementFormMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [postAccountFormsCorporateAgreementFormMutation, { data, loading, error }] = usePostAccountFormsCorporateAgreementFormMutation({
 *   variables: {
 *      createCorporateAgreementFormRequestInput: // value for 'createCorporateAgreementFormRequestInput'
 *   },
 * });
 */
export function usePostAccountFormsCorporateAgreementFormMutation(
  baseOptions?: Apollo.MutationHookOptions<
    ApolloTypes.PostAccountFormsCorporateAgreementFormMutation,
    ApolloTypes.PostAccountFormsCorporateAgreementFormMutationVariables
  >
) {
  return Apollo.useMutation<
    ApolloTypes.PostAccountFormsCorporateAgreementFormMutation,
    ApolloTypes.PostAccountFormsCorporateAgreementFormMutationVariables
  >(PostAccountFormsCorporateAgreementFormDocument, baseOptions);
}
export type PostAccountFormsCorporateAgreementFormMutationHookResult = ReturnType<
  typeof usePostAccountFormsCorporateAgreementFormMutation
>;
export type PostAccountFormsCorporateAgreementFormMutationResult = Apollo.MutationResult<
  ApolloTypes.PostAccountFormsCorporateAgreementFormMutation
>;
export type PostAccountFormsCorporateAgreementFormMutationOptions = Apollo.BaseMutationOptions<
  ApolloTypes.PostAccountFormsCorporateAgreementFormMutation,
  ApolloTypes.PostAccountFormsCorporateAgreementFormMutationVariables
>;
export const PostAccountFormsEntityAccountFormDocument = /* #__PURE__ */ gql`
  mutation postAccountFormsEntityAccountForm(
    $createEntityAccountFormRequestInput: CreateEntityAccountFormRequestInput
  ) {
    postAccountFormsEntityAccountForm(
      createEntityAccountFormRequestInput: $createEntityAccountFormRequestInput
    ) {
      entityAccountForm {
        accountInformation {
          accountTradingInformation {
            companyTickerSymbols
            isAffiliatedExchangeOrFINRA
            isControlPerson
            memberFirmNames
          }
          businessAddress {
            city
            country
            postalCode
            state
            streetAddress
          }
          businessTelephoneNumber
          entityName
          entityTaxId
          isUSEntity
        }
        accountNature
        additionalAccountInformation {
          isForeignBank
          isMaintainedForForeignFinancialInstitution
          isPoliticallyExposed
          politicalExposureDetail {
            immediateFamily
            politicalOrganization
          }
        }
        authorizedSigner {
          citizenshipCountry
          dateOfBirth
          emailAddress
          isUsCitizen
          name {
            familyName
            givenName
            legalName
          }
          taxId
          title
        }
        beneficialOwners {
          address {
            city
            country
            postalCode
            state
            streetAddress
          }
          dateOfBirth
          identificationNumber
          name {
            familyName
            givenName
            legalName
          }
          socialSecurityNumber
        }
        catAccountholderType
        createdAt
        customerType
        entityOfficers {
          address {
            city
            country
            postalCode
            state
            streetAddress
          }
          dateOfBirth
          identificationNumber
          name {
            familyName
            givenName
            legalName
          }
          socialSecurityNumber
        }
        exemptLegalCustomer {
          exemption
          isExemptLegalCustomer
        }
        formId
        isApplicantESigned
        issuerDirectCommunicationCode
        legalEntityIdentifier
        serviceProfile {
          dividendReinvestment
          sweepInstructions
        }
        suitabilityProfile {
          liquidityNeeds
          timeHorizon
        }
        updatedAt
        w9Certification {
          exemptPayeeCode
          exemptionFromFatca
        }
      }
    }
  }
`;
export type PostAccountFormsEntityAccountFormMutationFn = Apollo.MutationFunction<
  ApolloTypes.PostAccountFormsEntityAccountFormMutation,
  ApolloTypes.PostAccountFormsEntityAccountFormMutationVariables
>;

/**
 * __usePostAccountFormsEntityAccountFormMutation__
 *
 * To run a mutation, you first call `usePostAccountFormsEntityAccountFormMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `usePostAccountFormsEntityAccountFormMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [postAccountFormsEntityAccountFormMutation, { data, loading, error }] = usePostAccountFormsEntityAccountFormMutation({
 *   variables: {
 *      createEntityAccountFormRequestInput: // value for 'createEntityAccountFormRequestInput'
 *   },
 * });
 */
export function usePostAccountFormsEntityAccountFormMutation(
  baseOptions?: Apollo.MutationHookOptions<
    ApolloTypes.PostAccountFormsEntityAccountFormMutation,
    ApolloTypes.PostAccountFormsEntityAccountFormMutationVariables
  >
) {
  return Apollo.useMutation<
    ApolloTypes.PostAccountFormsEntityAccountFormMutation,
    ApolloTypes.PostAccountFormsEntityAccountFormMutationVariables
  >(PostAccountFormsEntityAccountFormDocument, baseOptions);
}
export type PostAccountFormsEntityAccountFormMutationHookResult = ReturnType<
  typeof usePostAccountFormsEntityAccountFormMutation
>;
export type PostAccountFormsEntityAccountFormMutationResult = Apollo.MutationResult<
  ApolloTypes.PostAccountFormsEntityAccountFormMutation
>;
export type PostAccountFormsEntityAccountFormMutationOptions = Apollo.BaseMutationOptions<
  ApolloTypes.PostAccountFormsEntityAccountFormMutation,
  ApolloTypes.PostAccountFormsEntityAccountFormMutationVariables
>;
export const PostAccountFormsEntityDueDiligenceFormDocument = /* #__PURE__ */ gql`
  mutation postAccountFormsEntityDueDiligenceForm(
    $createEntityDueDiligenceFormRequestInput: CreateEntityDueDiligenceFormRequestInput
  ) {
    postAccountFormsEntityDueDiligenceForm(
      createEntityDueDiligenceFormRequestInput: $createEntityDueDiligenceFormRequestInput
    ) {
      entityDueDiligenceForm {
        accountActivity {
          expectedWithdrawalFrequency
          initialDepositAmount
          initialDepositSource
          lowPricedSecuritiesPercentage
          primaryAccountActivity
          willTransactForeignBonds
          willTransactLowPricedSecurities
        }
        accountInformation {
          accountName
          businessLocations
          countryOfIncorporation
          hasAccounts
          relatedAccounts {
            accountNumber
            entityName
          }
        }
        additionalAccounts {
          confirmEntityDoesNotIssueBearerShares
          institutionNames
          primaryOngoingFundingSource
          primaryOngoingFundingSourceClarification
          scopeOfBusiness
          scopeOfBusinessClarification
        }
        assessedRiskRating
        createdAt
        entityOrAssociatesHaveNegativeNews
        entityOrAssociatesNegativeNewsInfo
        formId
        politicallyExposedPersons {
          isPoliticallyExposed
          politicalOfficials {
            immediateFamily
            legalName
            politicalOrganization
            politicalTitle
            role
          }
        }
        principalApproverName
        registeredRepresentativeApproverName
        updatedAt
      }
    }
  }
`;
export type PostAccountFormsEntityDueDiligenceFormMutationFn = Apollo.MutationFunction<
  ApolloTypes.PostAccountFormsEntityDueDiligenceFormMutation,
  ApolloTypes.PostAccountFormsEntityDueDiligenceFormMutationVariables
>;

/**
 * __usePostAccountFormsEntityDueDiligenceFormMutation__
 *
 * To run a mutation, you first call `usePostAccountFormsEntityDueDiligenceFormMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `usePostAccountFormsEntityDueDiligenceFormMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [postAccountFormsEntityDueDiligenceFormMutation, { data, loading, error }] = usePostAccountFormsEntityDueDiligenceFormMutation({
 *   variables: {
 *      createEntityDueDiligenceFormRequestInput: // value for 'createEntityDueDiligenceFormRequestInput'
 *   },
 * });
 */
export function usePostAccountFormsEntityDueDiligenceFormMutation(
  baseOptions?: Apollo.MutationHookOptions<
    ApolloTypes.PostAccountFormsEntityDueDiligenceFormMutation,
    ApolloTypes.PostAccountFormsEntityDueDiligenceFormMutationVariables
  >
) {
  return Apollo.useMutation<
    ApolloTypes.PostAccountFormsEntityDueDiligenceFormMutation,
    ApolloTypes.PostAccountFormsEntityDueDiligenceFormMutationVariables
  >(PostAccountFormsEntityDueDiligenceFormDocument, baseOptions);
}
export type PostAccountFormsEntityDueDiligenceFormMutationHookResult = ReturnType<
  typeof usePostAccountFormsEntityDueDiligenceFormMutation
>;
export type PostAccountFormsEntityDueDiligenceFormMutationResult = Apollo.MutationResult<
  ApolloTypes.PostAccountFormsEntityDueDiligenceFormMutation
>;
export type PostAccountFormsEntityDueDiligenceFormMutationOptions = Apollo.BaseMutationOptions<
  ApolloTypes.PostAccountFormsEntityDueDiligenceFormMutation,
  ApolloTypes.PostAccountFormsEntityDueDiligenceFormMutationVariables
>;
export const PostAccountFormsIndividualAccountFormDocument = /* #__PURE__ */ gql`
  mutation postAccountFormsIndividualAccountForm(
    $createIndividualAccountFormRequestInput: CreateIndividualAccountFormRequestInput
  ) {
    postAccountFormsIndividualAccountForm(
      createIndividualAccountFormRequestInput: $createIndividualAccountFormRequestInput
    ) {
      individualAccountForm {
        applicantSignature {
          eSigned
        }
        applicants {
          contact {
            emailAddresses
            homeAddress {
              city
              country
              postalCode
              state
              streetAddress
            }
            phoneNumbers {
              phoneNumber
              phoneNumberType
            }
          }
          disclosures {
            affiliatedApproval
            companySymbols
            firmName
            isAffiliatedExchangeOrFINRA
            isControlPerson
            isPoliticallyExposed
            politicalExposureDetail {
              immediateFamily
              politicalOrganization
            }
          }
          employment {
            employer
            employmentStatus
            positionEmployed
          }
          identity {
            birthCountry
            citizenshipCountry
            dateOfBirth
            name {
              familyName
              givenName
              legalName
            }
            permanentResident
            socialSecurityNumber
            visaExpirationDate
            visaType
          }
        }
        catAccountholderType
        createdAt
        customerType
        formId
        investmentProfile {
          annualIncomeUSD
          federalTaxBracketPercent
          investmentExperience
          investmentObjective
          liquidNetWorthUSD
          riskTolerance
          totalNetWorthUSD
        }
        serviceProfile {
          dividendProceeds
          dividendProceedsSendFrequency
          dividendReinvestment
          householdingService
          issuerDirectCommunication
          securitySaleProceeds
          sweepInstructions
        }
        suitabilityProfile {
          liquidityNeeds
          timeHorizon
        }
        trustedContact
        updatedAt
      }
    }
  }
`;
export type PostAccountFormsIndividualAccountFormMutationFn = Apollo.MutationFunction<
  ApolloTypes.PostAccountFormsIndividualAccountFormMutation,
  ApolloTypes.PostAccountFormsIndividualAccountFormMutationVariables
>;

/**
 * __usePostAccountFormsIndividualAccountFormMutation__
 *
 * To run a mutation, you first call `usePostAccountFormsIndividualAccountFormMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `usePostAccountFormsIndividualAccountFormMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [postAccountFormsIndividualAccountFormMutation, { data, loading, error }] = usePostAccountFormsIndividualAccountFormMutation({
 *   variables: {
 *      createIndividualAccountFormRequestInput: // value for 'createIndividualAccountFormRequestInput'
 *   },
 * });
 */
export function usePostAccountFormsIndividualAccountFormMutation(
  baseOptions?: Apollo.MutationHookOptions<
    ApolloTypes.PostAccountFormsIndividualAccountFormMutation,
    ApolloTypes.PostAccountFormsIndividualAccountFormMutationVariables
  >
) {
  return Apollo.useMutation<
    ApolloTypes.PostAccountFormsIndividualAccountFormMutation,
    ApolloTypes.PostAccountFormsIndividualAccountFormMutationVariables
  >(PostAccountFormsIndividualAccountFormDocument, baseOptions);
}
export type PostAccountFormsIndividualAccountFormMutationHookResult = ReturnType<
  typeof usePostAccountFormsIndividualAccountFormMutation
>;
export type PostAccountFormsIndividualAccountFormMutationResult = Apollo.MutationResult<
  ApolloTypes.PostAccountFormsIndividualAccountFormMutation
>;
export type PostAccountFormsIndividualAccountFormMutationOptions = Apollo.BaseMutationOptions<
  ApolloTypes.PostAccountFormsIndividualAccountFormMutation,
  ApolloTypes.PostAccountFormsIndividualAccountFormMutationVariables
>;
export const PostAccountFormsInterestedPartyFormDocument = /* #__PURE__ */ gql`
  mutation postAccountFormsInterestedPartyForm(
    $createInterestedPartyFormRequestInput: CreateInterestedPartyFormRequestInput
  ) {
    postAccountFormsInterestedPartyForm(
      createInterestedPartyFormRequestInput: $createInterestedPartyFormRequestInput
    ) {
      interestedPartyForm {
        createdAt
        formId
        interestedParties {
          mailingAddress {
            city
            country
            postalCode
            state
            streetAddress
          }
          name {
            companyName
          }
        }
        updatedAt
      }
    }
  }
`;
export type PostAccountFormsInterestedPartyFormMutationFn = Apollo.MutationFunction<
  ApolloTypes.PostAccountFormsInterestedPartyFormMutation,
  ApolloTypes.PostAccountFormsInterestedPartyFormMutationVariables
>;

/**
 * __usePostAccountFormsInterestedPartyFormMutation__
 *
 * To run a mutation, you first call `usePostAccountFormsInterestedPartyFormMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `usePostAccountFormsInterestedPartyFormMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [postAccountFormsInterestedPartyFormMutation, { data, loading, error }] = usePostAccountFormsInterestedPartyFormMutation({
 *   variables: {
 *      createInterestedPartyFormRequestInput: // value for 'createInterestedPartyFormRequestInput'
 *   },
 * });
 */
export function usePostAccountFormsInterestedPartyFormMutation(
  baseOptions?: Apollo.MutationHookOptions<
    ApolloTypes.PostAccountFormsInterestedPartyFormMutation,
    ApolloTypes.PostAccountFormsInterestedPartyFormMutationVariables
  >
) {
  return Apollo.useMutation<
    ApolloTypes.PostAccountFormsInterestedPartyFormMutation,
    ApolloTypes.PostAccountFormsInterestedPartyFormMutationVariables
  >(PostAccountFormsInterestedPartyFormDocument, baseOptions);
}
export type PostAccountFormsInterestedPartyFormMutationHookResult = ReturnType<
  typeof usePostAccountFormsInterestedPartyFormMutation
>;
export type PostAccountFormsInterestedPartyFormMutationResult = Apollo.MutationResult<
  ApolloTypes.PostAccountFormsInterestedPartyFormMutation
>;
export type PostAccountFormsInterestedPartyFormMutationOptions = Apollo.BaseMutationOptions<
  ApolloTypes.PostAccountFormsInterestedPartyFormMutation,
  ApolloTypes.PostAccountFormsInterestedPartyFormMutationVariables
>;
export const PostAccountFormsLlcAgreementFormDocument = /* #__PURE__ */ gql`
  mutation postAccountFormsLlcAgreementForm(
    $createLlcAgreementFormRequestInput: CreateLlcAgreementFormRequestInput
  ) {
    postAccountFormsLlcAgreementForm(
      createLlcAgreementFormRequestInput: $createLlcAgreementFormRequestInput
    ) {
      llcAgreementForm {
        articlesOfIncorporationOrOperatingAgreementSnapId
        authorizedSignerName
        authorizedSignerTitle
        createdAt
        entityName
        formId
        isAuthorizedSignerESigned
        membersAndManagers {
          isManager
          isManagerESigned
          legalName
          organizationalRole
        }
        resolutionAdoptionDate
        stateOfOrigin
        updatedAt
      }
    }
  }
`;
export type PostAccountFormsLlcAgreementFormMutationFn = Apollo.MutationFunction<
  ApolloTypes.PostAccountFormsLlcAgreementFormMutation,
  ApolloTypes.PostAccountFormsLlcAgreementFormMutationVariables
>;

/**
 * __usePostAccountFormsLlcAgreementFormMutation__
 *
 * To run a mutation, you first call `usePostAccountFormsLlcAgreementFormMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `usePostAccountFormsLlcAgreementFormMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [postAccountFormsLlcAgreementFormMutation, { data, loading, error }] = usePostAccountFormsLlcAgreementFormMutation({
 *   variables: {
 *      createLlcAgreementFormRequestInput: // value for 'createLlcAgreementFormRequestInput'
 *   },
 * });
 */
export function usePostAccountFormsLlcAgreementFormMutation(
  baseOptions?: Apollo.MutationHookOptions<
    ApolloTypes.PostAccountFormsLlcAgreementFormMutation,
    ApolloTypes.PostAccountFormsLlcAgreementFormMutationVariables
  >
) {
  return Apollo.useMutation<
    ApolloTypes.PostAccountFormsLlcAgreementFormMutation,
    ApolloTypes.PostAccountFormsLlcAgreementFormMutationVariables
  >(PostAccountFormsLlcAgreementFormDocument, baseOptions);
}
export type PostAccountFormsLlcAgreementFormMutationHookResult = ReturnType<
  typeof usePostAccountFormsLlcAgreementFormMutation
>;
export type PostAccountFormsLlcAgreementFormMutationResult = Apollo.MutationResult<
  ApolloTypes.PostAccountFormsLlcAgreementFormMutation
>;
export type PostAccountFormsLlcAgreementFormMutationOptions = Apollo.BaseMutationOptions<
  ApolloTypes.PostAccountFormsLlcAgreementFormMutation,
  ApolloTypes.PostAccountFormsLlcAgreementFormMutationVariables
>;
export const PostAccountFormsTrustedContactFormDocument = /* #__PURE__ */ gql`
  mutation postAccountFormsTrustedContactForm(
    $createTrustedContactFormRequestInput: CreateTrustedContactFormRequestInput
  ) {
    postAccountFormsTrustedContactForm(
      createTrustedContactFormRequestInput: $createTrustedContactFormRequestInput
    ) {
      trustedContactForm {
        createdAt
        emailAddress
        familyName
        formId
        givenName
        mailingAddress {
          city
          country
          postalCode
          state
          streetAddress
        }
        phoneNumber {
          phoneNumber
          phoneNumberType
        }
        updatedAt
      }
    }
  }
`;
export type PostAccountFormsTrustedContactFormMutationFn = Apollo.MutationFunction<
  ApolloTypes.PostAccountFormsTrustedContactFormMutation,
  ApolloTypes.PostAccountFormsTrustedContactFormMutationVariables
>;

/**
 * __usePostAccountFormsTrustedContactFormMutation__
 *
 * To run a mutation, you first call `usePostAccountFormsTrustedContactFormMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `usePostAccountFormsTrustedContactFormMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [postAccountFormsTrustedContactFormMutation, { data, loading, error }] = usePostAccountFormsTrustedContactFormMutation({
 *   variables: {
 *      createTrustedContactFormRequestInput: // value for 'createTrustedContactFormRequestInput'
 *   },
 * });
 */
export function usePostAccountFormsTrustedContactFormMutation(
  baseOptions?: Apollo.MutationHookOptions<
    ApolloTypes.PostAccountFormsTrustedContactFormMutation,
    ApolloTypes.PostAccountFormsTrustedContactFormMutationVariables
  >
) {
  return Apollo.useMutation<
    ApolloTypes.PostAccountFormsTrustedContactFormMutation,
    ApolloTypes.PostAccountFormsTrustedContactFormMutationVariables
  >(PostAccountFormsTrustedContactFormDocument, baseOptions);
}
export type PostAccountFormsTrustedContactFormMutationHookResult = ReturnType<
  typeof usePostAccountFormsTrustedContactFormMutation
>;
export type PostAccountFormsTrustedContactFormMutationResult = Apollo.MutationResult<
  ApolloTypes.PostAccountFormsTrustedContactFormMutation
>;
export type PostAccountFormsTrustedContactFormMutationOptions = Apollo.BaseMutationOptions<
  ApolloTypes.PostAccountFormsTrustedContactFormMutation,
  ApolloTypes.PostAccountFormsTrustedContactFormMutationVariables
>;
export const PostAccountNumberLinkDirectlyDocument = /* #__PURE__ */ gql`
  mutation postAccountNumberLinkDirectly(
    $accountNumber: String!
    $linkBankAccountDirectlyRequestInput: LinkBankAccountDirectlyRequestInput
  ) {
    postAccountNumberLinkDirectly(
      accountNumber: $accountNumber
      linkBankAccountDirectlyRequestInput: $linkBankAccountDirectlyRequestInput
    ) {
      linkedBankAccount {
        accountNumber
        accountType
        approvalMethod
        bankName
        createdAt
        linkedBankAccountId
        mask
        metadata
        owner
        status
        updatedAt
      }
    }
  }
`;
export type PostAccountNumberLinkDirectlyMutationFn = Apollo.MutationFunction<
  ApolloTypes.PostAccountNumberLinkDirectlyMutation,
  ApolloTypes.PostAccountNumberLinkDirectlyMutationVariables
>;

/**
 * __usePostAccountNumberLinkDirectlyMutation__
 *
 * To run a mutation, you first call `usePostAccountNumberLinkDirectlyMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `usePostAccountNumberLinkDirectlyMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [postAccountNumberLinkDirectlyMutation, { data, loading, error }] = usePostAccountNumberLinkDirectlyMutation({
 *   variables: {
 *      accountNumber: // value for 'accountNumber'
 *      linkBankAccountDirectlyRequestInput: // value for 'linkBankAccountDirectlyRequestInput'
 *   },
 * });
 */
export function usePostAccountNumberLinkDirectlyMutation(
  baseOptions?: Apollo.MutationHookOptions<
    ApolloTypes.PostAccountNumberLinkDirectlyMutation,
    ApolloTypes.PostAccountNumberLinkDirectlyMutationVariables
  >
) {
  return Apollo.useMutation<
    ApolloTypes.PostAccountNumberLinkDirectlyMutation,
    ApolloTypes.PostAccountNumberLinkDirectlyMutationVariables
  >(PostAccountNumberLinkDirectlyDocument, baseOptions);
}
export type PostAccountNumberLinkDirectlyMutationHookResult = ReturnType<
  typeof usePostAccountNumberLinkDirectlyMutation
>;
export type PostAccountNumberLinkDirectlyMutationResult = Apollo.MutationResult<
  ApolloTypes.PostAccountNumberLinkDirectlyMutation
>;
export type PostAccountNumberLinkDirectlyMutationOptions = Apollo.BaseMutationOptions<
  ApolloTypes.PostAccountNumberLinkDirectlyMutation,
  ApolloTypes.PostAccountNumberLinkDirectlyMutationVariables
>;
export const PostAccountNumberLinkWithPlaidDocument = /* #__PURE__ */ gql`
  mutation postAccountNumberLinkWithPlaid(
    $accountNumber: String!
    $linkBankAccountPlaidRequestInput: LinkBankAccountPlaidRequestInput
  ) {
    postAccountNumberLinkWithPlaid(
      accountNumber: $accountNumber
      linkBankAccountPlaidRequestInput: $linkBankAccountPlaidRequestInput
    ) {
      linkedBankAccount {
        accountNumber
        accountType
        approvalMethod
        bankName
        createdAt
        linkedBankAccountId
        mask
        metadata
        owner
        status
        updatedAt
      }
    }
  }
`;
export type PostAccountNumberLinkWithPlaidMutationFn = Apollo.MutationFunction<
  ApolloTypes.PostAccountNumberLinkWithPlaidMutation,
  ApolloTypes.PostAccountNumberLinkWithPlaidMutationVariables
>;

/**
 * __usePostAccountNumberLinkWithPlaidMutation__
 *
 * To run a mutation, you first call `usePostAccountNumberLinkWithPlaidMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `usePostAccountNumberLinkWithPlaidMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [postAccountNumberLinkWithPlaidMutation, { data, loading, error }] = usePostAccountNumberLinkWithPlaidMutation({
 *   variables: {
 *      accountNumber: // value for 'accountNumber'
 *      linkBankAccountPlaidRequestInput: // value for 'linkBankAccountPlaidRequestInput'
 *   },
 * });
 */
export function usePostAccountNumberLinkWithPlaidMutation(
  baseOptions?: Apollo.MutationHookOptions<
    ApolloTypes.PostAccountNumberLinkWithPlaidMutation,
    ApolloTypes.PostAccountNumberLinkWithPlaidMutationVariables
  >
) {
  return Apollo.useMutation<
    ApolloTypes.PostAccountNumberLinkWithPlaidMutation,
    ApolloTypes.PostAccountNumberLinkWithPlaidMutationVariables
  >(PostAccountNumberLinkWithPlaidDocument, baseOptions);
}
export type PostAccountNumberLinkWithPlaidMutationHookResult = ReturnType<
  typeof usePostAccountNumberLinkWithPlaidMutation
>;
export type PostAccountNumberLinkWithPlaidMutationResult = Apollo.MutationResult<
  ApolloTypes.PostAccountNumberLinkWithPlaidMutation
>;
export type PostAccountNumberLinkWithPlaidMutationOptions = Apollo.BaseMutationOptions<
  ApolloTypes.PostAccountNumberLinkWithPlaidMutation,
  ApolloTypes.PostAccountNumberLinkWithPlaidMutationVariables
>;
export const PostAccountTransfersDocument = /* #__PURE__ */ gql`
  mutation postAccountTransfers(
    $accountTransfersInput: AccountTransfersInput
    $id: String!
  ) {
    postAccountTransfers(
      accountTransfersInput: $accountTransfersInput
      id: $id
    ) {
      apexTransfer {
        accountId
        achRelationshipId
        amount
        apexTransferId
        createdAt
        direction
        id
        metadata
        status
        transferId
        transferMethod
        updatedAt
      }
    }
  }
`;
export type PostAccountTransfersMutationFn = Apollo.MutationFunction<
  ApolloTypes.PostAccountTransfersMutation,
  ApolloTypes.PostAccountTransfersMutationVariables
>;

/**
 * __usePostAccountTransfersMutation__
 *
 * To run a mutation, you first call `usePostAccountTransfersMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `usePostAccountTransfersMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [postAccountTransfersMutation, { data, loading, error }] = usePostAccountTransfersMutation({
 *   variables: {
 *      accountTransfersInput: // value for 'accountTransfersInput'
 *      id: // value for 'id'
 *   },
 * });
 */
export function usePostAccountTransfersMutation(
  baseOptions?: Apollo.MutationHookOptions<
    ApolloTypes.PostAccountTransfersMutation,
    ApolloTypes.PostAccountTransfersMutationVariables
  >
) {
  return Apollo.useMutation<
    ApolloTypes.PostAccountTransfersMutation,
    ApolloTypes.PostAccountTransfersMutationVariables
  >(PostAccountTransfersDocument, baseOptions);
}
export type PostAccountTransfersMutationHookResult = ReturnType<
  typeof usePostAccountTransfersMutation
>;
export type PostAccountTransfersMutationResult = Apollo.MutationResult<
  ApolloTypes.PostAccountTransfersMutation
>;
export type PostAccountTransfersMutationOptions = Apollo.BaseMutationOptions<
  ApolloTypes.PostAccountTransfersMutation,
  ApolloTypes.PostAccountTransfersMutationVariables
>;
export const PostAccountsDocument = /* #__PURE__ */ gql`
  mutation postAccounts(
    $createApexAccountRequestInput: CreateApexAccountRequestInput
  ) {
    postAccounts(
      createApexAccountRequestInput: $createApexAccountRequestInput
    ) {
      apexAccount {
        accountNumber
        accountRequestId
        accountType
        createdAt
        status
        updatedAt
      }
    }
  }
`;
export type PostAccountsMutationFn = Apollo.MutationFunction<
  ApolloTypes.PostAccountsMutation,
  ApolloTypes.PostAccountsMutationVariables
>;

/**
 * __usePostAccountsMutation__
 *
 * To run a mutation, you first call `usePostAccountsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `usePostAccountsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [postAccountsMutation, { data, loading, error }] = usePostAccountsMutation({
 *   variables: {
 *      createApexAccountRequestInput: // value for 'createApexAccountRequestInput'
 *   },
 * });
 */
export function usePostAccountsMutation(
  baseOptions?: Apollo.MutationHookOptions<
    ApolloTypes.PostAccountsMutation,
    ApolloTypes.PostAccountsMutationVariables
  >
) {
  return Apollo.useMutation<
    ApolloTypes.PostAccountsMutation,
    ApolloTypes.PostAccountsMutationVariables
  >(PostAccountsDocument, baseOptions);
}
export type PostAccountsMutationHookResult = ReturnType<
  typeof usePostAccountsMutation
>;
export type PostAccountsMutationResult = Apollo.MutationResult<
  ApolloTypes.PostAccountsMutation
>;
export type PostAccountsMutationOptions = Apollo.BaseMutationOptions<
  ApolloTypes.PostAccountsMutation,
  ApolloTypes.PostAccountsMutationVariables
>;
export const PostAccountsAchRelationshipsDocument = /* #__PURE__ */ gql`
  mutation postAccountsAchRelationships(
    $accountNumber: String!
    $setAchRelationshipRequestInput: SetAchRelationshipRequestInput
  ) {
    postAccountsAchRelationships(
      accountNumber: $accountNumber
      setAchRelationshipRequestInput: $setAchRelationshipRequestInput
    ) {
      achRelationship {
        accountNumber
        achRelationshipId
        createdAt
        linkedBankAccountId
        status
        updatedAt
      }
    }
  }
`;
export type PostAccountsAchRelationshipsMutationFn = Apollo.MutationFunction<
  ApolloTypes.PostAccountsAchRelationshipsMutation,
  ApolloTypes.PostAccountsAchRelationshipsMutationVariables
>;

/**
 * __usePostAccountsAchRelationshipsMutation__
 *
 * To run a mutation, you first call `usePostAccountsAchRelationshipsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `usePostAccountsAchRelationshipsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [postAccountsAchRelationshipsMutation, { data, loading, error }] = usePostAccountsAchRelationshipsMutation({
 *   variables: {
 *      accountNumber: // value for 'accountNumber'
 *      setAchRelationshipRequestInput: // value for 'setAchRelationshipRequestInput'
 *   },
 * });
 */
export function usePostAccountsAchRelationshipsMutation(
  baseOptions?: Apollo.MutationHookOptions<
    ApolloTypes.PostAccountsAchRelationshipsMutation,
    ApolloTypes.PostAccountsAchRelationshipsMutationVariables
  >
) {
  return Apollo.useMutation<
    ApolloTypes.PostAccountsAchRelationshipsMutation,
    ApolloTypes.PostAccountsAchRelationshipsMutationVariables
  >(PostAccountsAchRelationshipsDocument, baseOptions);
}
export type PostAccountsAchRelationshipsMutationHookResult = ReturnType<
  typeof usePostAccountsAchRelationshipsMutation
>;
export type PostAccountsAchRelationshipsMutationResult = Apollo.MutationResult<
  ApolloTypes.PostAccountsAchRelationshipsMutation
>;
export type PostAccountsAchRelationshipsMutationOptions = Apollo.BaseMutationOptions<
  ApolloTypes.PostAccountsAchRelationshipsMutation,
  ApolloTypes.PostAccountsAchRelationshipsMutationVariables
>;
export const PostAccountsTransfersDocument = /* #__PURE__ */ gql`
  mutation postAccountsTransfers(
    $accountNumber: String!
    $createApexTransferRequestInput: CreateApexTransferRequestInput
  ) {
    postAccountsTransfers(
      accountNumber: $accountNumber
      createApexTransferRequestInput: $createApexTransferRequestInput
    ) {
      transfer {
        accountNumber
        amount
        createdAt
        direction
        linkedBankAccountId
        status
        transferId
        transferMethod
        transferNumber
        updatedAt
      }
    }
  }
`;
export type PostAccountsTransfersMutationFn = Apollo.MutationFunction<
  ApolloTypes.PostAccountsTransfersMutation,
  ApolloTypes.PostAccountsTransfersMutationVariables
>;

/**
 * __usePostAccountsTransfersMutation__
 *
 * To run a mutation, you first call `usePostAccountsTransfersMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `usePostAccountsTransfersMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [postAccountsTransfersMutation, { data, loading, error }] = usePostAccountsTransfersMutation({
 *   variables: {
 *      accountNumber: // value for 'accountNumber'
 *      createApexTransferRequestInput: // value for 'createApexTransferRequestInput'
 *   },
 * });
 */
export function usePostAccountsTransfersMutation(
  baseOptions?: Apollo.MutationHookOptions<
    ApolloTypes.PostAccountsTransfersMutation,
    ApolloTypes.PostAccountsTransfersMutationVariables
  >
) {
  return Apollo.useMutation<
    ApolloTypes.PostAccountsTransfersMutation,
    ApolloTypes.PostAccountsTransfersMutationVariables
  >(PostAccountsTransfersDocument, baseOptions);
}
export type PostAccountsTransfersMutationHookResult = ReturnType<
  typeof usePostAccountsTransfersMutation
>;
export type PostAccountsTransfersMutationResult = Apollo.MutationResult<
  ApolloTypes.PostAccountsTransfersMutation
>;
export type PostAccountsTransfersMutationOptions = Apollo.BaseMutationOptions<
  ApolloTypes.PostAccountsTransfersMutation,
  ApolloTypes.PostAccountsTransfersMutationVariables
>;
export const PostAccountsTransfersInternalDocument = /* #__PURE__ */ gql`
  mutation postAccountsTransfersInternal(
    $accountNumber: String!
    $internalTransferRequestInput: InternalTransferRequestInput
  ) {
    postAccountsTransfersInternal(
      accountNumber: $accountNumber
      internalTransferRequestInput: $internalTransferRequestInput
    ) {
      transfer {
        accountNumber
        amount
        counterparty
        counterpartyId
        createdAt
        direction
        status
        transferId
        updatedAt
      }
    }
  }
`;
export type PostAccountsTransfersInternalMutationFn = Apollo.MutationFunction<
  ApolloTypes.PostAccountsTransfersInternalMutation,
  ApolloTypes.PostAccountsTransfersInternalMutationVariables
>;

/**
 * __usePostAccountsTransfersInternalMutation__
 *
 * To run a mutation, you first call `usePostAccountsTransfersInternalMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `usePostAccountsTransfersInternalMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [postAccountsTransfersInternalMutation, { data, loading, error }] = usePostAccountsTransfersInternalMutation({
 *   variables: {
 *      accountNumber: // value for 'accountNumber'
 *      internalTransferRequestInput: // value for 'internalTransferRequestInput'
 *   },
 * });
 */
export function usePostAccountsTransfersInternalMutation(
  baseOptions?: Apollo.MutationHookOptions<
    ApolloTypes.PostAccountsTransfersInternalMutation,
    ApolloTypes.PostAccountsTransfersInternalMutationVariables
  >
) {
  return Apollo.useMutation<
    ApolloTypes.PostAccountsTransfersInternalMutation,
    ApolloTypes.PostAccountsTransfersInternalMutationVariables
  >(PostAccountsTransfersInternalDocument, baseOptions);
}
export type PostAccountsTransfersInternalMutationHookResult = ReturnType<
  typeof usePostAccountsTransfersInternalMutation
>;
export type PostAccountsTransfersInternalMutationResult = Apollo.MutationResult<
  ApolloTypes.PostAccountsTransfersInternalMutation
>;
export type PostAccountsTransfersInternalMutationOptions = Apollo.BaseMutationOptions<
  ApolloTypes.PostAccountsTransfersInternalMutation,
  ApolloTypes.PostAccountsTransfersInternalMutationVariables
>;
export const PostAnalysesDocument = /* #__PURE__ */ gql`
  mutation postAnalyses($getAnalysesRequestInput: GetAnalysesRequestInput) {
    postAnalyses(getAnalysesRequestInput: $getAnalysesRequestInput) {
      analyses {
        allocations {
          country
          currency
          datastreamSubtype {
            buckets {
              contributors {
                assetId
                percentOfNetAssetValue
                positionId
              }
              name
              percentOfNetAssetValue
            }
          }
          datastreamType {
            buckets {
              name
              percentOfNetAssetValue
            }
          }
          debtType {
            buckets {
              name
              percentOfNetAssetValue
            }
          }
          maturity {
            fiveToTenYears
            greaterThanThirtyYears
            lessThanOneYear
            oneToThreeYears
            other
            tenToTwentyYears
            threeToFiveYears
            twentyToThirtyYears
          }
          rating {
            investmentGrade {
              a
              aa
              aaa
              bbb
              total
            }
            nonInvestmentGrade {
              b
              bb
              c
              d
              nr
              total
            }
          }
          region {
            africaExNorthAfrica
            asiaPacificExJapan
            emergingMarketsAsia
            emergingMarketsEurope
            europeExUnitedKingdom
            japan
            latinAmerica
            middleEastNorthAfrica
            northAmericaExUnitedStates
            other
            unitedKingdom
            unitedStates
          }
          sector {
            agency
            communications
            consumerGoods
            energy
            financials
            manufacturing
            municipal
            other
            services
            sovereign
            supranational
            transportation
          }
        }
        createdAt
        currentCoupon
        duration
        esgScores {
          environmental
          governance
          social
          total
        }
        estimatedPerformance {
          averageMaximumDrawdown {
            averageValue
            rankedMaximumDrawdowns {
              endDate
              rank
              startDate
              value
            }
          }
          endDate
          estimatedMaximumDrawdown {
            endDate
            startDate
            value
          }
          startDate
          timeSeries {
            cumulativeReturn
            endDate
            periodReturn
            startDate
          }
        }
        expenseRatio
        id
        issuerConcentration
        metadata
        netAssetValue
        portfolioId
        risk
        spread
        updatedAt
        wealthProjections {
          date
          percentiles {
            cumulativeReturn
            nav
            percentile
          }
        }
        yearsToMaturity
        yield
        yieldContributions {
          assetId
          percentContribution
        }
      }
    }
  }
`;
export type PostAnalysesMutationFn = Apollo.MutationFunction<
  ApolloTypes.PostAnalysesMutation,
  ApolloTypes.PostAnalysesMutationVariables
>;

/**
 * __usePostAnalysesMutation__
 *
 * To run a mutation, you first call `usePostAnalysesMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `usePostAnalysesMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [postAnalysesMutation, { data, loading, error }] = usePostAnalysesMutation({
 *   variables: {
 *      getAnalysesRequestInput: // value for 'getAnalysesRequestInput'
 *   },
 * });
 */
export function usePostAnalysesMutation(
  baseOptions?: Apollo.MutationHookOptions<
    ApolloTypes.PostAnalysesMutation,
    ApolloTypes.PostAnalysesMutationVariables
  >
) {
  return Apollo.useMutation<
    ApolloTypes.PostAnalysesMutation,
    ApolloTypes.PostAnalysesMutationVariables
  >(PostAnalysesDocument, baseOptions);
}
export type PostAnalysesMutationHookResult = ReturnType<
  typeof usePostAnalysesMutation
>;
export type PostAnalysesMutationResult = Apollo.MutationResult<
  ApolloTypes.PostAnalysesMutation
>;
export type PostAnalysesMutationOptions = Apollo.BaseMutationOptions<
  ApolloTypes.PostAnalysesMutation,
  ApolloTypes.PostAnalysesMutationVariables
>;
export const PostAnalyzeAssetDocument = /* #__PURE__ */ gql`
  mutation postAnalyzeAsset(
    $analyzeAssetRequestInput: AnalyzeAssetRequestInput
  ) {
    postAnalyzeAsset(analyzeAssetRequestInput: $analyzeAssetRequestInput) {
      analytics {
        field
        value
      }
    }
  }
`;
export type PostAnalyzeAssetMutationFn = Apollo.MutationFunction<
  ApolloTypes.PostAnalyzeAssetMutation,
  ApolloTypes.PostAnalyzeAssetMutationVariables
>;

/**
 * __usePostAnalyzeAssetMutation__
 *
 * To run a mutation, you first call `usePostAnalyzeAssetMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `usePostAnalyzeAssetMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [postAnalyzeAssetMutation, { data, loading, error }] = usePostAnalyzeAssetMutation({
 *   variables: {
 *      analyzeAssetRequestInput: // value for 'analyzeAssetRequestInput'
 *   },
 * });
 */
export function usePostAnalyzeAssetMutation(
  baseOptions?: Apollo.MutationHookOptions<
    ApolloTypes.PostAnalyzeAssetMutation,
    ApolloTypes.PostAnalyzeAssetMutationVariables
  >
) {
  return Apollo.useMutation<
    ApolloTypes.PostAnalyzeAssetMutation,
    ApolloTypes.PostAnalyzeAssetMutationVariables
  >(PostAnalyzeAssetDocument, baseOptions);
}
export type PostAnalyzeAssetMutationHookResult = ReturnType<
  typeof usePostAnalyzeAssetMutation
>;
export type PostAnalyzeAssetMutationResult = Apollo.MutationResult<
  ApolloTypes.PostAnalyzeAssetMutation
>;
export type PostAnalyzeAssetMutationOptions = Apollo.BaseMutationOptions<
  ApolloTypes.PostAnalyzeAssetMutation,
  ApolloTypes.PostAnalyzeAssetMutationVariables
>;
export const PostApiCallRecordsSearchDocument = /* #__PURE__ */ gql`
  mutation postApiCallRecordsSearch(
    $searchApiCallRecordsRequestInput: SearchApiCallRecordsRequestInput
  ) {
    postApiCallRecordsSearch(
      searchApiCallRecordsRequestInput: $searchApiCallRecordsRequestInput
    ) {
      apiCallRecords {
        action
        createdAt
        id
        institutionId
        metadata
        responseStatus
        updatedAt
        url
      }
    }
  }
`;
export type PostApiCallRecordsSearchMutationFn = Apollo.MutationFunction<
  ApolloTypes.PostApiCallRecordsSearchMutation,
  ApolloTypes.PostApiCallRecordsSearchMutationVariables
>;

/**
 * __usePostApiCallRecordsSearchMutation__
 *
 * To run a mutation, you first call `usePostApiCallRecordsSearchMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `usePostApiCallRecordsSearchMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [postApiCallRecordsSearchMutation, { data, loading, error }] = usePostApiCallRecordsSearchMutation({
 *   variables: {
 *      searchApiCallRecordsRequestInput: // value for 'searchApiCallRecordsRequestInput'
 *   },
 * });
 */
export function usePostApiCallRecordsSearchMutation(
  baseOptions?: Apollo.MutationHookOptions<
    ApolloTypes.PostApiCallRecordsSearchMutation,
    ApolloTypes.PostApiCallRecordsSearchMutationVariables
  >
) {
  return Apollo.useMutation<
    ApolloTypes.PostApiCallRecordsSearchMutation,
    ApolloTypes.PostApiCallRecordsSearchMutationVariables
  >(PostApiCallRecordsSearchDocument, baseOptions);
}
export type PostApiCallRecordsSearchMutationHookResult = ReturnType<
  typeof usePostApiCallRecordsSearchMutation
>;
export type PostApiCallRecordsSearchMutationResult = Apollo.MutationResult<
  ApolloTypes.PostApiCallRecordsSearchMutation
>;
export type PostApiCallRecordsSearchMutationOptions = Apollo.BaseMutationOptions<
  ApolloTypes.PostApiCallRecordsSearchMutation,
  ApolloTypes.PostApiCallRecordsSearchMutationVariables
>;
export const PostAssetAnalyzeAssetDocument = /* #__PURE__ */ gql`
  mutation postAssetAnalyzeAsset($assetId: String!) {
    postAssetAnalyzeAsset(assetId: $assetId) {
      analytics {
        field
        value
      }
    }
  }
`;
export type PostAssetAnalyzeAssetMutationFn = Apollo.MutationFunction<
  ApolloTypes.PostAssetAnalyzeAssetMutation,
  ApolloTypes.PostAssetAnalyzeAssetMutationVariables
>;

/**
 * __usePostAssetAnalyzeAssetMutation__
 *
 * To run a mutation, you first call `usePostAssetAnalyzeAssetMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `usePostAssetAnalyzeAssetMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [postAssetAnalyzeAssetMutation, { data, loading, error }] = usePostAssetAnalyzeAssetMutation({
 *   variables: {
 *      assetId: // value for 'assetId'
 *   },
 * });
 */
export function usePostAssetAnalyzeAssetMutation(
  baseOptions?: Apollo.MutationHookOptions<
    ApolloTypes.PostAssetAnalyzeAssetMutation,
    ApolloTypes.PostAssetAnalyzeAssetMutationVariables
  >
) {
  return Apollo.useMutation<
    ApolloTypes.PostAssetAnalyzeAssetMutation,
    ApolloTypes.PostAssetAnalyzeAssetMutationVariables
  >(PostAssetAnalyzeAssetDocument, baseOptions);
}
export type PostAssetAnalyzeAssetMutationHookResult = ReturnType<
  typeof usePostAssetAnalyzeAssetMutation
>;
export type PostAssetAnalyzeAssetMutationResult = Apollo.MutationResult<
  ApolloTypes.PostAssetAnalyzeAssetMutation
>;
export type PostAssetAnalyzeAssetMutationOptions = Apollo.BaseMutationOptions<
  ApolloTypes.PostAssetAnalyzeAssetMutation,
  ApolloTypes.PostAssetAnalyzeAssetMutationVariables
>;
export const PostAssetCalculateIntradayReturnDocument = /* #__PURE__ */ gql`
  mutation postAssetCalculateIntradayReturn($assetId: String!) {
    postAssetCalculateIntradayReturn(assetId: $assetId) {
      marketValueReturn
      percentReturn
      totalReturn
    }
  }
`;
export type PostAssetCalculateIntradayReturnMutationFn = Apollo.MutationFunction<
  ApolloTypes.PostAssetCalculateIntradayReturnMutation,
  ApolloTypes.PostAssetCalculateIntradayReturnMutationVariables
>;

/**
 * __usePostAssetCalculateIntradayReturnMutation__
 *
 * To run a mutation, you first call `usePostAssetCalculateIntradayReturnMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `usePostAssetCalculateIntradayReturnMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [postAssetCalculateIntradayReturnMutation, { data, loading, error }] = usePostAssetCalculateIntradayReturnMutation({
 *   variables: {
 *      assetId: // value for 'assetId'
 *   },
 * });
 */
export function usePostAssetCalculateIntradayReturnMutation(
  baseOptions?: Apollo.MutationHookOptions<
    ApolloTypes.PostAssetCalculateIntradayReturnMutation,
    ApolloTypes.PostAssetCalculateIntradayReturnMutationVariables
  >
) {
  return Apollo.useMutation<
    ApolloTypes.PostAssetCalculateIntradayReturnMutation,
    ApolloTypes.PostAssetCalculateIntradayReturnMutationVariables
  >(PostAssetCalculateIntradayReturnDocument, baseOptions);
}
export type PostAssetCalculateIntradayReturnMutationHookResult = ReturnType<
  typeof usePostAssetCalculateIntradayReturnMutation
>;
export type PostAssetCalculateIntradayReturnMutationResult = Apollo.MutationResult<
  ApolloTypes.PostAssetCalculateIntradayReturnMutation
>;
export type PostAssetCalculateIntradayReturnMutationOptions = Apollo.BaseMutationOptions<
  ApolloTypes.PostAssetCalculateIntradayReturnMutation,
  ApolloTypes.PostAssetCalculateIntradayReturnMutationVariables
>;
export const PostAssetProjectCashFlowsDocument = /* #__PURE__ */ gql`
  mutation postAssetProjectCashFlows($assetId: String!) {
    postAssetProjectCashFlows(assetId: $assetId) {
      cashFlows {
        cashFlow
        date
        interest
        principal
      }
    }
  }
`;
export type PostAssetProjectCashFlowsMutationFn = Apollo.MutationFunction<
  ApolloTypes.PostAssetProjectCashFlowsMutation,
  ApolloTypes.PostAssetProjectCashFlowsMutationVariables
>;

/**
 * __usePostAssetProjectCashFlowsMutation__
 *
 * To run a mutation, you first call `usePostAssetProjectCashFlowsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `usePostAssetProjectCashFlowsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [postAssetProjectCashFlowsMutation, { data, loading, error }] = usePostAssetProjectCashFlowsMutation({
 *   variables: {
 *      assetId: // value for 'assetId'
 *   },
 * });
 */
export function usePostAssetProjectCashFlowsMutation(
  baseOptions?: Apollo.MutationHookOptions<
    ApolloTypes.PostAssetProjectCashFlowsMutation,
    ApolloTypes.PostAssetProjectCashFlowsMutationVariables
  >
) {
  return Apollo.useMutation<
    ApolloTypes.PostAssetProjectCashFlowsMutation,
    ApolloTypes.PostAssetProjectCashFlowsMutationVariables
  >(PostAssetProjectCashFlowsDocument, baseOptions);
}
export type PostAssetProjectCashFlowsMutationHookResult = ReturnType<
  typeof usePostAssetProjectCashFlowsMutation
>;
export type PostAssetProjectCashFlowsMutationResult = Apollo.MutationResult<
  ApolloTypes.PostAssetProjectCashFlowsMutation
>;
export type PostAssetProjectCashFlowsMutationOptions = Apollo.BaseMutationOptions<
  ApolloTypes.PostAssetProjectCashFlowsMutation,
  ApolloTypes.PostAssetProjectCashFlowsMutationVariables
>;
export const PostAssetsDocument = /* #__PURE__ */ gql`
  mutation postAssets($multipartFormDataInput: String) {
    postAssets(multipartFormDataInput: $multipartFormDataInput) {
      positions {
        assetId
        externalId
        externalIdType
        percentage
      }
    }
  }
`;
export type PostAssetsMutationFn = Apollo.MutationFunction<
  ApolloTypes.PostAssetsMutation,
  ApolloTypes.PostAssetsMutationVariables
>;

/**
 * __usePostAssetsMutation__
 *
 * To run a mutation, you first call `usePostAssetsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `usePostAssetsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [postAssetsMutation, { data, loading, error }] = usePostAssetsMutation({
 *   variables: {
 *      multipartFormDataInput: // value for 'multipartFormDataInput'
 *   },
 * });
 */
export function usePostAssetsMutation(
  baseOptions?: Apollo.MutationHookOptions<
    ApolloTypes.PostAssetsMutation,
    ApolloTypes.PostAssetsMutationVariables
  >
) {
  return Apollo.useMutation<
    ApolloTypes.PostAssetsMutation,
    ApolloTypes.PostAssetsMutationVariables
  >(PostAssetsDocument, baseOptions);
}
export type PostAssetsMutationHookResult = ReturnType<
  typeof usePostAssetsMutation
>;
export type PostAssetsMutationResult = Apollo.MutationResult<
  ApolloTypes.PostAssetsMutation
>;
export type PostAssetsMutationOptions = Apollo.BaseMutationOptions<
  ApolloTypes.PostAssetsMutation,
  ApolloTypes.PostAssetsMutationVariables
>;
export const PostAssetsCalculateRiskDocument = /* #__PURE__ */ gql`
  mutation postAssetsCalculateRisk(
    $calculateAssetRiskRequestInput: CalculateAssetRiskRequestInput
  ) {
    postAssetsCalculateRisk(
      calculateAssetRiskRequestInput: $calculateAssetRiskRequestInput
    ) {
      risk
    }
  }
`;
export type PostAssetsCalculateRiskMutationFn = Apollo.MutationFunction<
  ApolloTypes.PostAssetsCalculateRiskMutation,
  ApolloTypes.PostAssetsCalculateRiskMutationVariables
>;

/**
 * __usePostAssetsCalculateRiskMutation__
 *
 * To run a mutation, you first call `usePostAssetsCalculateRiskMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `usePostAssetsCalculateRiskMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [postAssetsCalculateRiskMutation, { data, loading, error }] = usePostAssetsCalculateRiskMutation({
 *   variables: {
 *      calculateAssetRiskRequestInput: // value for 'calculateAssetRiskRequestInput'
 *   },
 * });
 */
export function usePostAssetsCalculateRiskMutation(
  baseOptions?: Apollo.MutationHookOptions<
    ApolloTypes.PostAssetsCalculateRiskMutation,
    ApolloTypes.PostAssetsCalculateRiskMutationVariables
  >
) {
  return Apollo.useMutation<
    ApolloTypes.PostAssetsCalculateRiskMutation,
    ApolloTypes.PostAssetsCalculateRiskMutationVariables
  >(PostAssetsCalculateRiskDocument, baseOptions);
}
export type PostAssetsCalculateRiskMutationHookResult = ReturnType<
  typeof usePostAssetsCalculateRiskMutation
>;
export type PostAssetsCalculateRiskMutationResult = Apollo.MutationResult<
  ApolloTypes.PostAssetsCalculateRiskMutation
>;
export type PostAssetsCalculateRiskMutationOptions = Apollo.BaseMutationOptions<
  ApolloTypes.PostAssetsCalculateRiskMutation,
  ApolloTypes.PostAssetsCalculateRiskMutationVariables
>;
export const PostAssetsCovariancesDocument = /* #__PURE__ */ gql`
  mutation postAssetsCovariances(
    $getAssetCovariancesRequestInput: GetAssetCovariancesRequestInput
  ) {
    postAssetsCovariances(
      getAssetCovariancesRequestInput: $getAssetCovariancesRequestInput
    ) {
      assetIds
      matrix
    }
  }
`;
export type PostAssetsCovariancesMutationFn = Apollo.MutationFunction<
  ApolloTypes.PostAssetsCovariancesMutation,
  ApolloTypes.PostAssetsCovariancesMutationVariables
>;

/**
 * __usePostAssetsCovariancesMutation__
 *
 * To run a mutation, you first call `usePostAssetsCovariancesMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `usePostAssetsCovariancesMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [postAssetsCovariancesMutation, { data, loading, error }] = usePostAssetsCovariancesMutation({
 *   variables: {
 *      getAssetCovariancesRequestInput: // value for 'getAssetCovariancesRequestInput'
 *   },
 * });
 */
export function usePostAssetsCovariancesMutation(
  baseOptions?: Apollo.MutationHookOptions<
    ApolloTypes.PostAssetsCovariancesMutation,
    ApolloTypes.PostAssetsCovariancesMutationVariables
  >
) {
  return Apollo.useMutation<
    ApolloTypes.PostAssetsCovariancesMutation,
    ApolloTypes.PostAssetsCovariancesMutationVariables
  >(PostAssetsCovariancesDocument, baseOptions);
}
export type PostAssetsCovariancesMutationHookResult = ReturnType<
  typeof usePostAssetsCovariancesMutation
>;
export type PostAssetsCovariancesMutationResult = Apollo.MutationResult<
  ApolloTypes.PostAssetsCovariancesMutation
>;
export type PostAssetsCovariancesMutationOptions = Apollo.BaseMutationOptions<
  ApolloTypes.PostAssetsCovariancesMutation,
  ApolloTypes.PostAssetsCovariancesMutationVariables
>;
export const PostAssetsCovariancesClearCacheDocument = /* #__PURE__ */ gql`
  mutation postAssetsCovariancesClearCache(
    $clearAssetCovariancesCacheRequestInput: ClearAssetCovariancesCacheRequestInput
  ) {
    postAssetsCovariancesClearCache(
      clearAssetCovariancesCacheRequestInput: $clearAssetCovariancesCacheRequestInput
    ) {
      count
    }
  }
`;
export type PostAssetsCovariancesClearCacheMutationFn = Apollo.MutationFunction<
  ApolloTypes.PostAssetsCovariancesClearCacheMutation,
  ApolloTypes.PostAssetsCovariancesClearCacheMutationVariables
>;

/**
 * __usePostAssetsCovariancesClearCacheMutation__
 *
 * To run a mutation, you first call `usePostAssetsCovariancesClearCacheMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `usePostAssetsCovariancesClearCacheMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [postAssetsCovariancesClearCacheMutation, { data, loading, error }] = usePostAssetsCovariancesClearCacheMutation({
 *   variables: {
 *      clearAssetCovariancesCacheRequestInput: // value for 'clearAssetCovariancesCacheRequestInput'
 *   },
 * });
 */
export function usePostAssetsCovariancesClearCacheMutation(
  baseOptions?: Apollo.MutationHookOptions<
    ApolloTypes.PostAssetsCovariancesClearCacheMutation,
    ApolloTypes.PostAssetsCovariancesClearCacheMutationVariables
  >
) {
  return Apollo.useMutation<
    ApolloTypes.PostAssetsCovariancesClearCacheMutation,
    ApolloTypes.PostAssetsCovariancesClearCacheMutationVariables
  >(PostAssetsCovariancesClearCacheDocument, baseOptions);
}
export type PostAssetsCovariancesClearCacheMutationHookResult = ReturnType<
  typeof usePostAssetsCovariancesClearCacheMutation
>;
export type PostAssetsCovariancesClearCacheMutationResult = Apollo.MutationResult<
  ApolloTypes.PostAssetsCovariancesClearCacheMutation
>;
export type PostAssetsCovariancesClearCacheMutationOptions = Apollo.BaseMutationOptions<
  ApolloTypes.PostAssetsCovariancesClearCacheMutation,
  ApolloTypes.PostAssetsCovariancesClearCacheMutationVariables
>;
export const PostAssetsListAssetIdsDocument = /* #__PURE__ */ gql`
  mutation postAssetsListAssetIds(
    $listAssetIdsRequestInput: ListAssetIdsRequestInput
  ) {
    postAssetsListAssetIds(
      listAssetIdsRequestInput: $listAssetIdsRequestInput
    ) {
      assetIds
    }
  }
`;
export type PostAssetsListAssetIdsMutationFn = Apollo.MutationFunction<
  ApolloTypes.PostAssetsListAssetIdsMutation,
  ApolloTypes.PostAssetsListAssetIdsMutationVariables
>;

/**
 * __usePostAssetsListAssetIdsMutation__
 *
 * To run a mutation, you first call `usePostAssetsListAssetIdsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `usePostAssetsListAssetIdsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [postAssetsListAssetIdsMutation, { data, loading, error }] = usePostAssetsListAssetIdsMutation({
 *   variables: {
 *      listAssetIdsRequestInput: // value for 'listAssetIdsRequestInput'
 *   },
 * });
 */
export function usePostAssetsListAssetIdsMutation(
  baseOptions?: Apollo.MutationHookOptions<
    ApolloTypes.PostAssetsListAssetIdsMutation,
    ApolloTypes.PostAssetsListAssetIdsMutationVariables
  >
) {
  return Apollo.useMutation<
    ApolloTypes.PostAssetsListAssetIdsMutation,
    ApolloTypes.PostAssetsListAssetIdsMutationVariables
  >(PostAssetsListAssetIdsDocument, baseOptions);
}
export type PostAssetsListAssetIdsMutationHookResult = ReturnType<
  typeof usePostAssetsListAssetIdsMutation
>;
export type PostAssetsListAssetIdsMutationResult = Apollo.MutationResult<
  ApolloTypes.PostAssetsListAssetIdsMutation
>;
export type PostAssetsListAssetIdsMutationOptions = Apollo.BaseMutationOptions<
  ApolloTypes.PostAssetsListAssetIdsMutation,
  ApolloTypes.PostAssetsListAssetIdsMutationVariables
>;
export const PostAssetsScoreAssetDocument = /* #__PURE__ */ gql`
  mutation postAssetsScoreAsset(
    $scoreAssetRequestInput: ScoreAssetRequestInput
  ) {
    postAssetsScoreAsset(scoreAssetRequestInput: $scoreAssetRequestInput) {
      scores {
        attractiveness
        credit
        efficiency
        liquidity
        risk
      }
    }
  }
`;
export type PostAssetsScoreAssetMutationFn = Apollo.MutationFunction<
  ApolloTypes.PostAssetsScoreAssetMutation,
  ApolloTypes.PostAssetsScoreAssetMutationVariables
>;

/**
 * __usePostAssetsScoreAssetMutation__
 *
 * To run a mutation, you first call `usePostAssetsScoreAssetMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `usePostAssetsScoreAssetMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [postAssetsScoreAssetMutation, { data, loading, error }] = usePostAssetsScoreAssetMutation({
 *   variables: {
 *      scoreAssetRequestInput: // value for 'scoreAssetRequestInput'
 *   },
 * });
 */
export function usePostAssetsScoreAssetMutation(
  baseOptions?: Apollo.MutationHookOptions<
    ApolloTypes.PostAssetsScoreAssetMutation,
    ApolloTypes.PostAssetsScoreAssetMutationVariables
  >
) {
  return Apollo.useMutation<
    ApolloTypes.PostAssetsScoreAssetMutation,
    ApolloTypes.PostAssetsScoreAssetMutationVariables
  >(PostAssetsScoreAssetDocument, baseOptions);
}
export type PostAssetsScoreAssetMutationHookResult = ReturnType<
  typeof usePostAssetsScoreAssetMutation
>;
export type PostAssetsScoreAssetMutationResult = Apollo.MutationResult<
  ApolloTypes.PostAssetsScoreAssetMutation
>;
export type PostAssetsScoreAssetMutationOptions = Apollo.BaseMutationOptions<
  ApolloTypes.PostAssetsScoreAssetMutation,
  ApolloTypes.PostAssetsScoreAssetMutationVariables
>;
export const PostAssetsSearchDocument = /* #__PURE__ */ gql`
  mutation postAssetsSearch($searchAssetRequestInput: SearchAssetRequestInput) {
    postAssetsSearch(searchAssetRequestInput: $searchAssetRequestInput) {
      end
      found
      results {
        asset {
          allocation {
            country
            currency
            debtType {
              assetBackedSecurities
              bonds
              debentures
              mortgageBackedSecurities
              municipalBonds
              notes
              other
              preferredStock
              supranationalBonds
            }
            maturity {
              fiveToTenYears
              greaterThanThirtyYears
              lessThanOneYear
              oneToThreeYears
              other
              tenToTwentyYears
              threeToFiveYears
              twentyToThirtyYears
            }
            rating {
              a
              aa
              aaa
              b
              bb
              bbb
              c
              cc
              ccc
              d
              nr
            }
            region {
              africaExNorthAfrica
              asiaPacificExJapan
              emergingMarketsAsia
              emergingMarketsEurope
              europeExUnitedKingdom
              japan
              latinAmerica
              middleEastNorthAfrica
              northAmericaExUnitedStates
              other
              unitedKingdom
              unitedStates
            }
            sector {
              agency
              communications
              consumerGoods
              energy
              financials
              manufacturing
              municipal
              other
              services
              sovereign
              supranational
              transportation
            }
          }
          analytics {
            convexity
            creditBeta
            currentYield
            date
            defaultAdjustedYield
            distributionYield
            dividendYield
            duration
            effectiveDuration
            gSpread
            optionAdjustedSpread
            recoveryRate
            secYield
            source
            spreadDuration
            standaloneRisk
            yearsToMaturity
            yield
            yieldToCall
            yieldToMaturity
            yieldToWorst
            zSpread
          }
          assetSubtype
          assetType
          bond {
            accruedInterest
            active
            amountOutstanding
            amountOutstandingDate
            annuity
            assetStatus
            callType
            callable
            capType
            classifications {
              barclaysLevel1
              barclaysLevel2
              barclaysLevel3
              barclaysLevel4
              bondhouse
              datastreamSubtype
              datastreamType
              gics
            }
            cleanPrice
            cleanUpCallable
            convertible
            countryOfIssue
            couponClass
            couponResetHistory {
              effectiveDate
              rate
              rateNonAnnual
            }
            couponSchedule {
              cap
              couponClass
              couponFormula
              couponRateRoundingMethod
              dayCount
              effectiveDate
              floor
              indexDescription
              indexHolidayCalendar
              numberCutOffDays
              paymentBusinessDayRule
              paymentCalendarAdjustment
              paymentCalendarAdjustmentValue
              paymentCurrency
              paymentFrequency
              paymentHolidayCalendar
              resetBusinessDayRule
              resetCalendarAdjustment
              resetCalendarAdjustmentValue
              resetFrequency
              resetHolidayCalendar
            }
            couponType
            covered
            creationUnit
            creditEnhancement {
              additionalCreditType
              crossDefaultForGuarantor
              enhancementEffectiveDate
              enhancementEndDate
              enhancementLegNumber
              escrowAccount
              eventsofDefaultforGuarantor
              guarantee
              guarantorPermId
              guarantorProgram
              insurance
              interestCollateralType
              letterOfCreditExpirationDate
              negativePledgeForGuarantor
              otherCovenantsForGuarantor
              percentInterestCollateralized
              percentPrincipalCollateralized
              principalCollateralType
            }
            currentCoupon
            datedDate
            dayCount
            debtServiceType
            defeasable
            denominationIncrement
            dirtyPrice
            dualCurrency
            exDividendCalendarAdjustment
            exDividendCalendarAdjustmentValue
            exchangeListed
            firstCouponDate
            floating
            green
            guaranteed
            hasWarrantsAttached
            inflationProtected
            instrumentType
            issue {
              active
              id
              issueDescription
              issueIdentifier
              issuerIdentifier
              offeringDate
              offeringDescription
              private144a
              privatePlacement
              totalProgramAmount
            }
            issueCurrency
            issueDate
            issuer {
              active
              bankrupt
              country
              headquartersAddress {
                cityOrTown
                country
                stateOrCountyOrRegion
                street1
                street2
                street3
                zipCode
              }
              id
              immediateParentId
              legalName
              longName
              registeredAddress {
                cityOrTown
                country
                stateOrCountyOrRegion
                street1
                street2
                street3
                zipCode
              }
              sector
              shortName
              sovereignClass
              subsector
              ticker
              ultimateParentId
              url
            }
            lastCouponDate
            lastLiquidEtfConstituentDate
            liquidityCriteria {
              hasAdequateQuotes
              liquidityCriteriaDate
            }
            marketData {
              ejv {
                accruedInterest
                askPrice
                askYield
                assetSwapSpread
                benchmarkSpread
                bidPrice
                bidYield
                cbeYieldToMaturity
                cbeYieldToWorst
                closePrice
                date
                highPrice
                lowPrice
                openPrice
                price
                source
                swapSpread
                volume
                yieldToMaturity
                yieldToWorst
                zSpread
              }
            }
            maturityDate
            mediumTermNote
            minimumDenomination
            nearestCallPeriodEndDate
            nearestCallPeriodStartDate
            nearestCallPrice
            nextResetDate
            ordinaryCallNoticePeriodMaximumAmount
            ordinaryCallNoticePeriodMinimumAmount
            ordinaryCallNoticePeriodUnits
            ordinaryCallOptionType
            ordinaryCallable
            originalAmountIssued
            originalBenchmark
            originalIssuePrice
            originalIssueSpread
            originalYieldToMaturity
            parValue
            partlyPaid
            payableInKind
            performing
            perpetual
            priceQuoteConvention
            priceQuoteMethod
            priceQuoteRoundingMethod
            principalCurrency
            private144a
            privatePlacement
            puttable
            quotedDirty
            ratings {
              snpLongTerm {
                effectiveDate
                rank
                rating
              }
              snpShortTerm {
                effectiveDate
                rank
                rating
              }
            }
            recordDateCalendarAdjustment
            recordDateCalendarAdjustmentValue
            redemptionValue
            richCheap {
              effectiveDate
              interquartileRange
              richCheapBps
            }
            seniority
            series
            sinkingOrAmortizing
            sovereignClass
            state
            stateTaxExempt
            straight
            strippable
            subjectToAlternativeMinimumTax
            totalAmountIssued
            unitedStatesTaxExempt
            useOfProceeds
            withholdingTax
          }
          country
          createdAt
          createdBy
          currency
          description
          displayId
          equity {
            eps
            marketCap
            peRatio
            shareClass
            tradeLotRoundSize
            tradeLotSize
          }
          esgScores {
            environmental
            governance
            social
            timestamp
            total
          }
          fund {
            allocation {
              asset {
                cash
                equity
                fixedIncome
                other
              }
              currency
              equityCountry
              equityRegion {
                africaExNorthAfrica
                asiaPacificExJapan
                emergingMarketsAsia
                emergingMarketsEurope
                europeExUnitedKingdom
                japan
                latinAmerica
                middleEastNorthAfrica
                northAmericaExUnitedStates
                other
                unitedKingdom
                unitedStates
              }
              fixedIncomeCountry
              fixedIncomeRegion {
                africaExNorthAfrica
                asiaPacificExJapan
                emergingMarketsAsia
                emergingMarketsEurope
                europeExUnitedKingdom
                japan
                latinAmerica
                middleEastNorthAfrica
                northAmericaExUnitedStates
                other
                unitedKingdom
                unitedStates
              }
              gicsSubIndustry {
                communicationServices
                consumerDiscretionary
                consumerStaples
                energy
                financials
                healthCare
                industrials
                informationTechnology
                materials
                other
                realEstate
                utilities
              }
              trbcIndustry {
                basicMaterials
                consumerCyclicals
                consumerNonCyclicals
                energy
                financials
                healthcare
                industrials
                other
                technology
                telecommunicationsServices
                utilities
              }
            }
            apexSupport {
              supportDate
              supported
            }
            assetStatus
            benchmark
            classification
            fees {
              backLoad
              frontLoad
              fundExpenseRatio
              managementFee
              marketing12b1Fee
              performanceFee
            }
            focus {
              assetClassFocus
              geoFocus
            }
            fundType
            inceptionDate
            institutional
            managementCompany
            midPrice
            netAssetValuePerShare
            netAssets
            netAssetsDate
            priceDate
            regulatoryStructure
            replicationStrategy
            scores {
              consistentReturn {
                fiveYear
                overall
                tenYear
                threeYear
              }
              expense {
                fiveYear
                overall
                tenYear
                threeYear
              }
              preservation {
                fiveYear
                overall
                tenYear
                threeYear
              }
              taxEfficiency {
                fiveYear
                overall
                tenYear
                threeYear
              }
              totalReturn {
                fiveYear
                overall
                tenYear
                threeYear
              }
            }
            tradeLotSize
            yields {
              dailySecYield
              dailySecYieldDate
              distributionYield
              dividendYield
              lipperDistributionYield
              projectedYield
              secYield
              simpleYieldBegin
              simpleYieldEnd
              thirtyDayYield
              trailingTwelveMonthYield
            }
          }
          id
          identifiers {
            apex
            bbGlobal
            cik
            cins
            cusip
            isin
            primaryTicker
            refinitivAssetId
            refinitivIssuePermId
            refinitivLipperId
            refinitivLipperParentId
            refinitivLipperPermId
            sedol
            valoren
          }
          legalEntity {
            issuingLegalEntityId
            ultimateObligor
            ultimateObligorId
            ultimateParent
            ultimateParentId
            ultimateParentTickerExchange
          }
          liquid
          market
          metadata
          name
          price
          priceDate
          priceQuotes {
            accruedInterest
            askPrice
            askYield
            assetSwapSpread
            benchmarkSpread
            bidPrice
            bidYield
            cbeYieldToMaturity
            cbeYieldToWorst
            closePrice
            date
            highPrice
            lowPrice
            openPrice
            price
            source
            swapSpread
            volume
            yieldToMaturity
            yieldToWorst
            zSpread
          }
          primaryExchange
          primaryExchangeMic
          rating
          scores {
            attractiveness
            credit
            efficiency
            liquidity
            risk
            timestamp
          }
          ticker
          unit
          universes {
            custom
            general
            liquid
            search
            timestamp
          }
          updatedAt
          updatedBy
        }
        score
      }
      start
    }
  }
`;
export type PostAssetsSearchMutationFn = Apollo.MutationFunction<
  ApolloTypes.PostAssetsSearchMutation,
  ApolloTypes.PostAssetsSearchMutationVariables
>;

/**
 * __usePostAssetsSearchMutation__
 *
 * To run a mutation, you first call `usePostAssetsSearchMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `usePostAssetsSearchMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [postAssetsSearchMutation, { data, loading, error }] = usePostAssetsSearchMutation({
 *   variables: {
 *      searchAssetRequestInput: // value for 'searchAssetRequestInput'
 *   },
 * });
 */
export function usePostAssetsSearchMutation(
  baseOptions?: Apollo.MutationHookOptions<
    ApolloTypes.PostAssetsSearchMutation,
    ApolloTypes.PostAssetsSearchMutationVariables
  >
) {
  return Apollo.useMutation<
    ApolloTypes.PostAssetsSearchMutation,
    ApolloTypes.PostAssetsSearchMutationVariables
  >(PostAssetsSearchDocument, baseOptions);
}
export type PostAssetsSearchMutationHookResult = ReturnType<
  typeof usePostAssetsSearchMutation
>;
export type PostAssetsSearchMutationResult = Apollo.MutationResult<
  ApolloTypes.PostAssetsSearchMutation
>;
export type PostAssetsSearchMutationOptions = Apollo.BaseMutationOptions<
  ApolloTypes.PostAssetsSearchMutation,
  ApolloTypes.PostAssetsSearchMutationVariables
>;
export const PostAssetsTimeSeriesDocument = /* #__PURE__ */ gql`
  mutation postAssetsTimeSeries(
    $createOrReplaceAssetTimeSeriesRequestInput: CreateOrReplaceAssetTimeSeriesRequestInput
  ) {
    postAssetsTimeSeries(
      createOrReplaceAssetTimeSeriesRequestInput: $createOrReplaceAssetTimeSeriesRequestInput
    ) {
      message
    }
  }
`;
export type PostAssetsTimeSeriesMutationFn = Apollo.MutationFunction<
  ApolloTypes.PostAssetsTimeSeriesMutation,
  ApolloTypes.PostAssetsTimeSeriesMutationVariables
>;

/**
 * __usePostAssetsTimeSeriesMutation__
 *
 * To run a mutation, you first call `usePostAssetsTimeSeriesMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `usePostAssetsTimeSeriesMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [postAssetsTimeSeriesMutation, { data, loading, error }] = usePostAssetsTimeSeriesMutation({
 *   variables: {
 *      createOrReplaceAssetTimeSeriesRequestInput: // value for 'createOrReplaceAssetTimeSeriesRequestInput'
 *   },
 * });
 */
export function usePostAssetsTimeSeriesMutation(
  baseOptions?: Apollo.MutationHookOptions<
    ApolloTypes.PostAssetsTimeSeriesMutation,
    ApolloTypes.PostAssetsTimeSeriesMutationVariables
  >
) {
  return Apollo.useMutation<
    ApolloTypes.PostAssetsTimeSeriesMutation,
    ApolloTypes.PostAssetsTimeSeriesMutationVariables
  >(PostAssetsTimeSeriesDocument, baseOptions);
}
export type PostAssetsTimeSeriesMutationHookResult = ReturnType<
  typeof usePostAssetsTimeSeriesMutation
>;
export type PostAssetsTimeSeriesMutationResult = Apollo.MutationResult<
  ApolloTypes.PostAssetsTimeSeriesMutation
>;
export type PostAssetsTimeSeriesMutationOptions = Apollo.BaseMutationOptions<
  ApolloTypes.PostAssetsTimeSeriesMutation,
  ApolloTypes.PostAssetsTimeSeriesMutationVariables
>;
export const PostAssetsTimeSeriesUpdateByExternalIdDocument = /* #__PURE__ */ gql`
  mutation postAssetsTimeSeriesUpdateByExternalId(
    $updateAssetTimeSeriesByExternalIdRequestInput: UpdateAssetTimeSeriesByExternalIdRequestInput
  ) {
    postAssetsTimeSeriesUpdateByExternalId(
      updateAssetTimeSeriesByExternalIdRequestInput: $updateAssetTimeSeriesByExternalIdRequestInput
    ) {
      updated
    }
  }
`;
export type PostAssetsTimeSeriesUpdateByExternalIdMutationFn = Apollo.MutationFunction<
  ApolloTypes.PostAssetsTimeSeriesUpdateByExternalIdMutation,
  ApolloTypes.PostAssetsTimeSeriesUpdateByExternalIdMutationVariables
>;

/**
 * __usePostAssetsTimeSeriesUpdateByExternalIdMutation__
 *
 * To run a mutation, you first call `usePostAssetsTimeSeriesUpdateByExternalIdMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `usePostAssetsTimeSeriesUpdateByExternalIdMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [postAssetsTimeSeriesUpdateByExternalIdMutation, { data, loading, error }] = usePostAssetsTimeSeriesUpdateByExternalIdMutation({
 *   variables: {
 *      updateAssetTimeSeriesByExternalIdRequestInput: // value for 'updateAssetTimeSeriesByExternalIdRequestInput'
 *   },
 * });
 */
export function usePostAssetsTimeSeriesUpdateByExternalIdMutation(
  baseOptions?: Apollo.MutationHookOptions<
    ApolloTypes.PostAssetsTimeSeriesUpdateByExternalIdMutation,
    ApolloTypes.PostAssetsTimeSeriesUpdateByExternalIdMutationVariables
  >
) {
  return Apollo.useMutation<
    ApolloTypes.PostAssetsTimeSeriesUpdateByExternalIdMutation,
    ApolloTypes.PostAssetsTimeSeriesUpdateByExternalIdMutationVariables
  >(PostAssetsTimeSeriesUpdateByExternalIdDocument, baseOptions);
}
export type PostAssetsTimeSeriesUpdateByExternalIdMutationHookResult = ReturnType<
  typeof usePostAssetsTimeSeriesUpdateByExternalIdMutation
>;
export type PostAssetsTimeSeriesUpdateByExternalIdMutationResult = Apollo.MutationResult<
  ApolloTypes.PostAssetsTimeSeriesUpdateByExternalIdMutation
>;
export type PostAssetsTimeSeriesUpdateByExternalIdMutationOptions = Apollo.BaseMutationOptions<
  ApolloTypes.PostAssetsTimeSeriesUpdateByExternalIdMutation,
  ApolloTypes.PostAssetsTimeSeriesUpdateByExternalIdMutationVariables
>;
export const PostAssetsUpdateByExternalIdDocument = /* #__PURE__ */ gql`
  mutation postAssetsUpdateByExternalId(
    $updateAssetByExternalIdRequestInput: UpdateAssetByExternalIdRequestInput
  ) {
    postAssetsUpdateByExternalId(
      updateAssetByExternalIdRequestInput: $updateAssetByExternalIdRequestInput
    ) {
      created
      updated
    }
  }
`;
export type PostAssetsUpdateByExternalIdMutationFn = Apollo.MutationFunction<
  ApolloTypes.PostAssetsUpdateByExternalIdMutation,
  ApolloTypes.PostAssetsUpdateByExternalIdMutationVariables
>;

/**
 * __usePostAssetsUpdateByExternalIdMutation__
 *
 * To run a mutation, you first call `usePostAssetsUpdateByExternalIdMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `usePostAssetsUpdateByExternalIdMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [postAssetsUpdateByExternalIdMutation, { data, loading, error }] = usePostAssetsUpdateByExternalIdMutation({
 *   variables: {
 *      updateAssetByExternalIdRequestInput: // value for 'updateAssetByExternalIdRequestInput'
 *   },
 * });
 */
export function usePostAssetsUpdateByExternalIdMutation(
  baseOptions?: Apollo.MutationHookOptions<
    ApolloTypes.PostAssetsUpdateByExternalIdMutation,
    ApolloTypes.PostAssetsUpdateByExternalIdMutationVariables
  >
) {
  return Apollo.useMutation<
    ApolloTypes.PostAssetsUpdateByExternalIdMutation,
    ApolloTypes.PostAssetsUpdateByExternalIdMutationVariables
  >(PostAssetsUpdateByExternalIdDocument, baseOptions);
}
export type PostAssetsUpdateByExternalIdMutationHookResult = ReturnType<
  typeof usePostAssetsUpdateByExternalIdMutation
>;
export type PostAssetsUpdateByExternalIdMutationResult = Apollo.MutationResult<
  ApolloTypes.PostAssetsUpdateByExternalIdMutation
>;
export type PostAssetsUpdateByExternalIdMutationOptions = Apollo.BaseMutationOptions<
  ApolloTypes.PostAssetsUpdateByExternalIdMutation,
  ApolloTypes.PostAssetsUpdateByExternalIdMutationVariables
>;
export const PostCalculateBetasDocument = /* #__PURE__ */ gql`
  mutation postCalculateBetas(
    $calculateBetasRequestInput: CalculateBetasRequestInput
  ) {
    postCalculateBetas(
      calculateBetasRequestInput: $calculateBetasRequestInput
    ) {
      bonds {
        beta
        correlation
      }
      gold {
        beta
        correlation
      }
      highYield {
        beta
        correlation
      }
      stocks {
        beta
        correlation
      }
    }
  }
`;
export type PostCalculateBetasMutationFn = Apollo.MutationFunction<
  ApolloTypes.PostCalculateBetasMutation,
  ApolloTypes.PostCalculateBetasMutationVariables
>;

/**
 * __usePostCalculateBetasMutation__
 *
 * To run a mutation, you first call `usePostCalculateBetasMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `usePostCalculateBetasMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [postCalculateBetasMutation, { data, loading, error }] = usePostCalculateBetasMutation({
 *   variables: {
 *      calculateBetasRequestInput: // value for 'calculateBetasRequestInput'
 *   },
 * });
 */
export function usePostCalculateBetasMutation(
  baseOptions?: Apollo.MutationHookOptions<
    ApolloTypes.PostCalculateBetasMutation,
    ApolloTypes.PostCalculateBetasMutationVariables
  >
) {
  return Apollo.useMutation<
    ApolloTypes.PostCalculateBetasMutation,
    ApolloTypes.PostCalculateBetasMutationVariables
  >(PostCalculateBetasDocument, baseOptions);
}
export type PostCalculateBetasMutationHookResult = ReturnType<
  typeof usePostCalculateBetasMutation
>;
export type PostCalculateBetasMutationResult = Apollo.MutationResult<
  ApolloTypes.PostCalculateBetasMutation
>;
export type PostCalculateBetasMutationOptions = Apollo.BaseMutationOptions<
  ApolloTypes.PostCalculateBetasMutation,
  ApolloTypes.PostCalculateBetasMutationVariables
>;
export const PostCompositeDataSearchDocument = /* #__PURE__ */ gql`
  mutation postCompositeDataSearch(
    $searchCompositeDataRequestInput: SearchCompositeDataRequestInput
  ) {
    postCompositeDataSearch(
      searchCompositeDataRequestInput: $searchCompositeDataRequestInput
    ) {
      compositeData {
        benchmarkCusip
        benchmarkIsin
        currency
        cusip
        discountMargin
        entryDirection
        entryId
        entrySource
        entryTransType
        entryType
        id
        isin
        lastAswSpread
        lastGSpread
        lastISpread
        lastOasSpread
        lastPrice
        lastSpread
        lastTimestamp
        lastYield
        lastZSpread
        liquidityScore
        marketSegment
        mmeYield
        nextCallDate
        numberOfEntries
        updatedAt
        yieldToNextCall
      }
    }
  }
`;
export type PostCompositeDataSearchMutationFn = Apollo.MutationFunction<
  ApolloTypes.PostCompositeDataSearchMutation,
  ApolloTypes.PostCompositeDataSearchMutationVariables
>;

/**
 * __usePostCompositeDataSearchMutation__
 *
 * To run a mutation, you first call `usePostCompositeDataSearchMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `usePostCompositeDataSearchMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [postCompositeDataSearchMutation, { data, loading, error }] = usePostCompositeDataSearchMutation({
 *   variables: {
 *      searchCompositeDataRequestInput: // value for 'searchCompositeDataRequestInput'
 *   },
 * });
 */
export function usePostCompositeDataSearchMutation(
  baseOptions?: Apollo.MutationHookOptions<
    ApolloTypes.PostCompositeDataSearchMutation,
    ApolloTypes.PostCompositeDataSearchMutationVariables
  >
) {
  return Apollo.useMutation<
    ApolloTypes.PostCompositeDataSearchMutation,
    ApolloTypes.PostCompositeDataSearchMutationVariables
  >(PostCompositeDataSearchDocument, baseOptions);
}
export type PostCompositeDataSearchMutationHookResult = ReturnType<
  typeof usePostCompositeDataSearchMutation
>;
export type PostCompositeDataSearchMutationResult = Apollo.MutationResult<
  ApolloTypes.PostCompositeDataSearchMutation
>;
export type PostCompositeDataSearchMutationOptions = Apollo.BaseMutationOptions<
  ApolloTypes.PostCompositeDataSearchMutation,
  ApolloTypes.PostCompositeDataSearchMutationVariables
>;
export const PostCusipsDocument = /* #__PURE__ */ gql`
  mutation postCusips(
    $endDate: String
    $getByCusipsRequestInput: GetByCusipsRequestInput
    $includeDeleted: Boolean
    $startDate: String
  ) {
    postCusips(
      endDate: $endDate
      getByCusipsRequestInput: $getByCusipsRequestInput
      includeDeleted: $includeDeleted
      startDate: $startDate
    ) {
      cusipIceMappings {
        cusip
        iceData {
          benchmarkCusip
          benchmarkPrice
          benchmarkPriceType
          coverBid
          cusip
          entryDate
          entryPrice
          entrySize
          entryTime
          entryType
          entryUpdateAction
          executionType
          hitOrLiftSide
          id
          impliedSpread
          mineFlag
          minimumBalanceRemaining
          minimumIncrement
          minimumQuantity
          product
          updatedAt
          yieldToMaturity
          yieldToWorst
        }
      }
    }
  }
`;
export type PostCusipsMutationFn = Apollo.MutationFunction<
  ApolloTypes.PostCusipsMutation,
  ApolloTypes.PostCusipsMutationVariables
>;

/**
 * __usePostCusipsMutation__
 *
 * To run a mutation, you first call `usePostCusipsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `usePostCusipsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [postCusipsMutation, { data, loading, error }] = usePostCusipsMutation({
 *   variables: {
 *      endDate: // value for 'endDate'
 *      getByCusipsRequestInput: // value for 'getByCusipsRequestInput'
 *      includeDeleted: // value for 'includeDeleted'
 *      startDate: // value for 'startDate'
 *   },
 * });
 */
export function usePostCusipsMutation(
  baseOptions?: Apollo.MutationHookOptions<
    ApolloTypes.PostCusipsMutation,
    ApolloTypes.PostCusipsMutationVariables
  >
) {
  return Apollo.useMutation<
    ApolloTypes.PostCusipsMutation,
    ApolloTypes.PostCusipsMutationVariables
  >(PostCusipsDocument, baseOptions);
}
export type PostCusipsMutationHookResult = ReturnType<
  typeof usePostCusipsMutation
>;
export type PostCusipsMutationResult = Apollo.MutationResult<
  ApolloTypes.PostCusipsMutation
>;
export type PostCusipsMutationOptions = Apollo.BaseMutationOptions<
  ApolloTypes.PostCusipsMutation,
  ApolloTypes.PostCusipsMutationVariables
>;
export const PostExecutionLogsDocument = /* #__PURE__ */ gql`
  mutation postExecutionLogs(
    $postExecutionLogRequestInput: PostExecutionLogRequestInput
  ) {
    postExecutionLogs(
      postExecutionLogRequestInput: $postExecutionLogRequestInput
    ) {
      executionLog {
        application
        endpoint
        failure
        id
        orderId
        portfolioId
        responseCode
        state
        timestamp
        tradeId
      }
    }
  }
`;
export type PostExecutionLogsMutationFn = Apollo.MutationFunction<
  ApolloTypes.PostExecutionLogsMutation,
  ApolloTypes.PostExecutionLogsMutationVariables
>;

/**
 * __usePostExecutionLogsMutation__
 *
 * To run a mutation, you first call `usePostExecutionLogsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `usePostExecutionLogsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [postExecutionLogsMutation, { data, loading, error }] = usePostExecutionLogsMutation({
 *   variables: {
 *      postExecutionLogRequestInput: // value for 'postExecutionLogRequestInput'
 *   },
 * });
 */
export function usePostExecutionLogsMutation(
  baseOptions?: Apollo.MutationHookOptions<
    ApolloTypes.PostExecutionLogsMutation,
    ApolloTypes.PostExecutionLogsMutationVariables
  >
) {
  return Apollo.useMutation<
    ApolloTypes.PostExecutionLogsMutation,
    ApolloTypes.PostExecutionLogsMutationVariables
  >(PostExecutionLogsDocument, baseOptions);
}
export type PostExecutionLogsMutationHookResult = ReturnType<
  typeof usePostExecutionLogsMutation
>;
export type PostExecutionLogsMutationResult = Apollo.MutationResult<
  ApolloTypes.PostExecutionLogsMutation
>;
export type PostExecutionLogsMutationOptions = Apollo.BaseMutationOptions<
  ApolloTypes.PostExecutionLogsMutation,
  ApolloTypes.PostExecutionLogsMutationVariables
>;
export const PostExternalIdMappingGetAssetsByExternalIdDocument = /* #__PURE__ */ gql`
  mutation postExternalIdMappingGetAssetsByExternalId(
    $getAssetsByExternalIdRequestInput: GetAssetsByExternalIdRequestInput
    $sourceName: String!
  ) {
    postExternalIdMappingGetAssetsByExternalId(
      getAssetsByExternalIdRequestInput: $getAssetsByExternalIdRequestInput
      sourceName: $sourceName
    ) {
      assets {
        allocation {
          country
          currency
          debtType {
            assetBackedSecurities
            bonds
            debentures
            mortgageBackedSecurities
            municipalBonds
            notes
            other
            preferredStock
            supranationalBonds
          }
          maturity {
            fiveToTenYears
            greaterThanThirtyYears
            lessThanOneYear
            oneToThreeYears
            other
            tenToTwentyYears
            threeToFiveYears
            twentyToThirtyYears
          }
          rating {
            a
            aa
            aaa
            b
            bb
            bbb
            c
            cc
            ccc
            d
            nr
          }
          region {
            africaExNorthAfrica
            asiaPacificExJapan
            emergingMarketsAsia
            emergingMarketsEurope
            europeExUnitedKingdom
            japan
            latinAmerica
            middleEastNorthAfrica
            northAmericaExUnitedStates
            other
            unitedKingdom
            unitedStates
          }
          sector {
            agency
            communications
            consumerGoods
            energy
            financials
            manufacturing
            municipal
            other
            services
            sovereign
            supranational
            transportation
          }
        }
        analytics {
          convexity
          creditBeta
          currentYield
          date
          defaultAdjustedYield
          distributionYield
          dividendYield
          duration
          effectiveDuration
          gSpread
          optionAdjustedSpread
          recoveryRate
          secYield
          source
          spreadDuration
          standaloneRisk
          yearsToMaturity
          yield
          yieldToCall
          yieldToMaturity
          yieldToWorst
          zSpread
        }
        assetSubtype
        assetType
        bond {
          accruedInterest
          active
          amountOutstanding
          amountOutstandingDate
          annuity
          assetStatus
          callType
          callable
          capType
          classifications {
            barclaysLevel1
            barclaysLevel2
            barclaysLevel3
            barclaysLevel4
            bondhouse
            datastreamSubtype
            datastreamType
            gics
          }
          cleanPrice
          cleanUpCallable
          convertible
          countryOfIssue
          couponClass
          couponResetHistory {
            effectiveDate
            rate
            rateNonAnnual
          }
          couponSchedule {
            cap
            couponClass
            couponFormula
            couponRateRoundingMethod
            dayCount
            effectiveDate
            floor
            indexDescription
            indexHolidayCalendar
            numberCutOffDays
            paymentBusinessDayRule
            paymentCalendarAdjustment
            paymentCalendarAdjustmentValue
            paymentCurrency
            paymentFrequency
            paymentHolidayCalendar
            resetBusinessDayRule
            resetCalendarAdjustment
            resetCalendarAdjustmentValue
            resetFrequency
            resetHolidayCalendar
          }
          couponType
          covered
          creationUnit
          creditEnhancement {
            additionalCreditType
            crossDefaultForGuarantor
            enhancementEffectiveDate
            enhancementEndDate
            enhancementLegNumber
            escrowAccount
            eventsofDefaultforGuarantor
            guarantee
            guarantorPermId
            guarantorProgram
            insurance
            interestCollateralType
            letterOfCreditExpirationDate
            negativePledgeForGuarantor
            otherCovenantsForGuarantor
            percentInterestCollateralized
            percentPrincipalCollateralized
            principalCollateralType
          }
          currentCoupon
          datedDate
          dayCount
          debtServiceType
          defeasable
          denominationIncrement
          dirtyPrice
          dualCurrency
          exDividendCalendarAdjustment
          exDividendCalendarAdjustmentValue
          exchangeListed
          firstCouponDate
          floating
          green
          guaranteed
          hasWarrantsAttached
          inflationProtected
          instrumentType
          issue {
            active
            id
            issueDescription
            issueIdentifier
            issuerIdentifier
            offeringDate
            offeringDescription
            private144a
            privatePlacement
            totalProgramAmount
          }
          issueCurrency
          issueDate
          issuer {
            active
            bankrupt
            country
            headquartersAddress {
              cityOrTown
              country
              stateOrCountyOrRegion
              street1
              street2
              street3
              zipCode
            }
            id
            immediateParentId
            legalName
            longName
            ratings {
              snpLongTerm {
                effectiveDate
                rank
                rating
              }
              snpSeniorSecured {
                effectiveDate
                rank
                rating
              }
              snpSeniorUnsecured {
                effectiveDate
                rank
                rating
              }
              snpShortTerm {
                effectiveDate
                rank
                rating
              }
              snpSubordinated {
                effectiveDate
                rank
                rating
              }
            }
            registeredAddress {
              cityOrTown
              country
              stateOrCountyOrRegion
              street1
              street2
              street3
              zipCode
            }
            sector
            shortName
            sovereignClass
            subsector
            ticker
            ultimateParentId
            url
          }
          lastCouponDate
          lastLiquidEtfConstituentDate
          liquidityCriteria {
            hasAdequateQuotes
            liquidityCriteriaDate
          }
          marketData {
            ejv {
              accruedInterest
              askPrice
              askYield
              assetSwapSpread
              benchmarkSpread
              bidPrice
              bidYield
              cbeYieldToMaturity
              cbeYieldToWorst
              closePrice
              date
              highPrice
              lowPrice
              openPrice
              price
              source
              swapSpread
              volume
              yieldToMaturity
              yieldToWorst
              zSpread
            }
          }
          maturityDate
          mediumTermNote
          minimumDenomination
          nearestCallPeriodEndDate
          nearestCallPeriodStartDate
          nearestCallPrice
          nextResetDate
          ordinaryCallNoticePeriodMaximumAmount
          ordinaryCallNoticePeriodMinimumAmount
          ordinaryCallNoticePeriodUnits
          ordinaryCallOptionType
          ordinaryCallable
          originalAmountIssued
          originalBenchmark
          originalIssuePrice
          originalIssueSpread
          originalYieldToMaturity
          parValue
          partlyPaid
          payableInKind
          performing
          perpetual
          priceQuoteConvention
          priceQuoteMethod
          priceQuoteRoundingMethod
          principalCurrency
          private144a
          privatePlacement
          puttable
          quotedDirty
          recordDateCalendarAdjustment
          recordDateCalendarAdjustmentValue
          redemptionValue
          richCheap {
            effectiveDate
            interquartileRange
            richCheapBps
          }
          seniority
          series
          sinkingOrAmortizing
          sovereignClass
          state
          stateTaxExempt
          straight
          strippable
          subjectToAlternativeMinimumTax
          totalAmountIssued
          unitedStatesTaxExempt
          useOfProceeds
          withholdingTax
        }
        country
        createdAt
        createdBy
        currency
        description
        displayId
        equity {
          eps
          marketCap
          peRatio
          shareClass
          tradeLotRoundSize
          tradeLotSize
        }
        esgScores {
          environmental
          governance
          social
          timestamp
          total
        }
        fund {
          allocation {
            asset {
              cash
              equity
              fixedIncome
              other
            }
            currency
            equityCountry
            equityRegion {
              africaExNorthAfrica
              asiaPacificExJapan
              emergingMarketsAsia
              emergingMarketsEurope
              europeExUnitedKingdom
              japan
              latinAmerica
              middleEastNorthAfrica
              northAmericaExUnitedStates
              other
              unitedKingdom
              unitedStates
            }
            fixedIncomeCountry
            fixedIncomeRegion {
              africaExNorthAfrica
              asiaPacificExJapan
              emergingMarketsAsia
              emergingMarketsEurope
              europeExUnitedKingdom
              japan
              latinAmerica
              middleEastNorthAfrica
              northAmericaExUnitedStates
              other
              unitedKingdom
              unitedStates
            }
            gicsSubIndustry {
              communicationServices
              consumerDiscretionary
              consumerStaples
              energy
              financials
              healthCare
              industrials
              informationTechnology
              materials
              other
              realEstate
              utilities
            }
            trbcIndustry {
              basicMaterials
              consumerCyclicals
              consumerNonCyclicals
              energy
              financials
              healthcare
              industrials
              other
              technology
              telecommunicationsServices
              utilities
            }
          }
          apexSupport {
            supportDate
            supported
          }
          assetStatus
          benchmark
          classification
          distributions {
            capitalGain {
              capitalGain {
                accountingDate
                exDate
                exValue
                paymentDate
                recordDate
                reinvestmentDate
                reinvestmentType
                reinvestmentValue
                taxableInterestIncome
              }
              collectibles {
                accountingDate
                exDate
                exValue
                paymentDate
                recordDate
                reinvestmentDate
                reinvestmentType
                reinvestmentValue
                taxableInterestIncome
              }
              longTermCapitalGain {
                accountingDate
                exDate
                exValue
                paymentDate
                recordDate
                reinvestmentDate
                reinvestmentType
                reinvestmentValue
                taxableInterestIncome
              }
              mediumTermCapitalGain {
                accountingDate
                exDate
                exValue
                paymentDate
                recordDate
                reinvestmentDate
                reinvestmentType
                reinvestmentValue
                taxableInterestIncome
              }
              nonQualifiedShortTermCapitalGain {
                accountingDate
                exDate
                exValue
                paymentDate
                recordDate
                reinvestmentDate
                reinvestmentType
                reinvestmentValue
                taxableInterestIncome
              }
              qualifiedShortTermCapitalGain {
                accountingDate
                exDate
                exValue
                paymentDate
                recordDate
                reinvestmentDate
                reinvestmentType
                reinvestmentValue
                taxableInterestIncome
              }
              returnOfCapital {
                accountingDate
                exDate
                exValue
                paymentDate
                recordDate
                reinvestmentDate
                reinvestmentType
                reinvestmentValue
                taxableInterestIncome
              }
              shortTermCapitalGain {
                accountingDate
                exDate
                exValue
                paymentDate
                recordDate
                reinvestmentDate
                reinvestmentType
                reinvestmentValue
                taxableInterestIncome
              }
              superLongTermCapitalGain {
                accountingDate
                exDate
                exValue
                paymentDate
                recordDate
                reinvestmentDate
                reinvestmentType
                reinvestmentValue
                taxableInterestIncome
              }
            }
            foreignTaxCredit {
              foreignTaxCredit {
                accountingDate
                exDate
                exValue
                paymentDate
                recordDate
                reinvestmentDate
                reinvestmentType
                reinvestmentValue
                taxableInterestIncome
              }
              nonQualifiedForeignTaxPaid {
                accountingDate
                exDate
                exValue
                paymentDate
                recordDate
                reinvestmentDate
                reinvestmentType
                reinvestmentValue
                taxableInterestIncome
              }
              qualifiedForeignTaxPaid {
                accountingDate
                exDate
                exValue
                paymentDate
                recordDate
                reinvestmentDate
                reinvestmentType
                reinvestmentValue
                taxableInterestIncome
              }
            }
            income {
              aggregateAccrual {
                accountingDate
                exDate
                exValue
                paymentDate
                recordDate
                reinvestmentDate
                reinvestmentType
                reinvestmentValue
                taxableInterestIncome
              }
              exemptIncome {
                accountingDate
                exDate
                exValue
                paymentDate
                recordDate
                reinvestmentDate
                reinvestmentType
                reinvestmentValue
                taxableInterestIncome
              }
              incomeDividend {
                accountingDate
                exDate
                exValue
                paymentDate
                recordDate
                reinvestmentDate
                reinvestmentType
                reinvestmentValue
                taxableInterestIncome
              }
              interestIncome {
                accountingDate
                exDate
                exValue
                paymentDate
                recordDate
                reinvestmentDate
                reinvestmentType
                reinvestmentValue
                taxableInterestIncome
              }
              nonQualifiedIncomeDividend {
                accountingDate
                exDate
                exValue
                paymentDate
                recordDate
                reinvestmentDate
                reinvestmentType
                reinvestmentValue
                taxableInterestIncome
              }
              qualifiedIncomeDividend {
                accountingDate
                exDate
                exValue
                paymentDate
                recordDate
                reinvestmentDate
                reinvestmentType
                reinvestmentValue
                taxableInterestIncome
              }
            }
            repaymentCategory {
              bonusIssue {
                accountingDate
                exDate
                exValue
                paymentDate
                recordDate
                reinvestmentDate
                reinvestmentType
                reinvestmentValue
                taxableInterestIncome
              }
              factor {
                accountingDate
                exDate
                exValue
                paymentDate
                recordDate
                reinvestmentDate
                reinvestmentType
                reinvestmentValue
                taxableInterestIncome
              }
              repayment {
                accountingDate
                exDate
                exValue
                paymentDate
                recordDate
                reinvestmentDate
                reinvestmentType
                reinvestmentValue
                taxableInterestIncome
              }
              rightsIssue {
                accountingDate
                exDate
                exValue
                paymentDate
                recordDate
                reinvestmentDate
                reinvestmentType
                reinvestmentValue
                taxableInterestIncome
              }
              split {
                accountingDate
                exDate
                exValue
                paymentDate
                recordDate
                reinvestmentDate
                reinvestmentType
                reinvestmentValue
                taxableInterestIncome
              }
            }
          }
          fees {
            backLoad
            frontLoad
            fundExpenseRatio
            managementFee
            marketing12b1Fee
            performanceFee
          }
          focus {
            assetClassFocus
            geoFocus
          }
          fundType
          inceptionDate
          institutional
          managementCompany
          midPrice
          netAssetValuePerShare
          netAssets
          netAssetsDate
          priceDate
          regulatoryStructure
          replicationStrategy
          scores {
            consistentReturn {
              fiveYear
              overall
              tenYear
              threeYear
            }
            expense {
              fiveYear
              overall
              tenYear
              threeYear
            }
            preservation {
              fiveYear
              overall
              tenYear
              threeYear
            }
            taxEfficiency {
              fiveYear
              overall
              tenYear
              threeYear
            }
            totalReturn {
              fiveYear
              overall
              tenYear
              threeYear
            }
          }
          tradeLotSize
          yields {
            dailySecYield
            dailySecYieldDate
            distributionYield
            dividendYield
            lipperDistributionYield
            projectedYield
            secYield
            simpleYieldBegin
            simpleYieldEnd
            thirtyDayYield
            trailingTwelveMonthYield
          }
        }
        id
        identifiers {
          apex
          bbGlobal
          cik
          cins
          cusip
          isin
          primaryTicker
          refinitivAssetId
          refinitivIssuePermId
          refinitivLipperId
          refinitivLipperParentId
          refinitivLipperPermId
          sedol
          valoren
        }
        legalEntity {
          issuingLegalEntityId
          ultimateObligor
          ultimateObligorId
          ultimateParent
          ultimateParentId
          ultimateParentTickerExchange
        }
        liquid
        market
        metadata
        name
        price
        priceDate
        priceQuotes {
          accruedInterest
          askPrice
          askYield
          assetSwapSpread
          benchmarkSpread
          bidPrice
          bidYield
          cbeYieldToMaturity
          cbeYieldToWorst
          closePrice
          date
          highPrice
          lowPrice
          openPrice
          price
          source
          swapSpread
          volume
          yieldToMaturity
          yieldToWorst
          zSpread
        }
        primaryExchange
        primaryExchangeMic
        rating
        scores {
          attractiveness
          credit
          efficiency
          liquidity
          risk
          timestamp
        }
        ticker
        unit
        universes {
          custom
          general
          liquid
          search
          timestamp
        }
        updatedAt
        updatedBy
      }
    }
  }
`;
export type PostExternalIdMappingGetAssetsByExternalIdMutationFn = Apollo.MutationFunction<
  ApolloTypes.PostExternalIdMappingGetAssetsByExternalIdMutation,
  ApolloTypes.PostExternalIdMappingGetAssetsByExternalIdMutationVariables
>;

/**
 * __usePostExternalIdMappingGetAssetsByExternalIdMutation__
 *
 * To run a mutation, you first call `usePostExternalIdMappingGetAssetsByExternalIdMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `usePostExternalIdMappingGetAssetsByExternalIdMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [postExternalIdMappingGetAssetsByExternalIdMutation, { data, loading, error }] = usePostExternalIdMappingGetAssetsByExternalIdMutation({
 *   variables: {
 *      getAssetsByExternalIdRequestInput: // value for 'getAssetsByExternalIdRequestInput'
 *      sourceName: // value for 'sourceName'
 *   },
 * });
 */
export function usePostExternalIdMappingGetAssetsByExternalIdMutation(
  baseOptions?: Apollo.MutationHookOptions<
    ApolloTypes.PostExternalIdMappingGetAssetsByExternalIdMutation,
    ApolloTypes.PostExternalIdMappingGetAssetsByExternalIdMutationVariables
  >
) {
  return Apollo.useMutation<
    ApolloTypes.PostExternalIdMappingGetAssetsByExternalIdMutation,
    ApolloTypes.PostExternalIdMappingGetAssetsByExternalIdMutationVariables
  >(PostExternalIdMappingGetAssetsByExternalIdDocument, baseOptions);
}
export type PostExternalIdMappingGetAssetsByExternalIdMutationHookResult = ReturnType<
  typeof usePostExternalIdMappingGetAssetsByExternalIdMutation
>;
export type PostExternalIdMappingGetAssetsByExternalIdMutationResult = Apollo.MutationResult<
  ApolloTypes.PostExternalIdMappingGetAssetsByExternalIdMutation
>;
export type PostExternalIdMappingGetAssetsByExternalIdMutationOptions = Apollo.BaseMutationOptions<
  ApolloTypes.PostExternalIdMappingGetAssetsByExternalIdMutation,
  ApolloTypes.PostExternalIdMappingGetAssetsByExternalIdMutationVariables
>;
export const PostExternalIdMappingGetExternalIdMappingsDocument = /* #__PURE__ */ gql`
  mutation postExternalIdMappingGetExternalIdMappings(
    $getExternalIdMappingsRequestInput: GetExternalIdMappingsRequestInput
    $sourceName: String!
  ) {
    postExternalIdMappingGetExternalIdMappings(
      getExternalIdMappingsRequestInput: $getExternalIdMappingsRequestInput
      sourceName: $sourceName
    ) {
      externalIdMappings {
        externalIdMapping {
          assetId
          createdAt
          externalId
          metadata
          sourceName
          updatedAt
        }
      }
    }
  }
`;
export type PostExternalIdMappingGetExternalIdMappingsMutationFn = Apollo.MutationFunction<
  ApolloTypes.PostExternalIdMappingGetExternalIdMappingsMutation,
  ApolloTypes.PostExternalIdMappingGetExternalIdMappingsMutationVariables
>;

/**
 * __usePostExternalIdMappingGetExternalIdMappingsMutation__
 *
 * To run a mutation, you first call `usePostExternalIdMappingGetExternalIdMappingsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `usePostExternalIdMappingGetExternalIdMappingsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [postExternalIdMappingGetExternalIdMappingsMutation, { data, loading, error }] = usePostExternalIdMappingGetExternalIdMappingsMutation({
 *   variables: {
 *      getExternalIdMappingsRequestInput: // value for 'getExternalIdMappingsRequestInput'
 *      sourceName: // value for 'sourceName'
 *   },
 * });
 */
export function usePostExternalIdMappingGetExternalIdMappingsMutation(
  baseOptions?: Apollo.MutationHookOptions<
    ApolloTypes.PostExternalIdMappingGetExternalIdMappingsMutation,
    ApolloTypes.PostExternalIdMappingGetExternalIdMappingsMutationVariables
  >
) {
  return Apollo.useMutation<
    ApolloTypes.PostExternalIdMappingGetExternalIdMappingsMutation,
    ApolloTypes.PostExternalIdMappingGetExternalIdMappingsMutationVariables
  >(PostExternalIdMappingGetExternalIdMappingsDocument, baseOptions);
}
export type PostExternalIdMappingGetExternalIdMappingsMutationHookResult = ReturnType<
  typeof usePostExternalIdMappingGetExternalIdMappingsMutation
>;
export type PostExternalIdMappingGetExternalIdMappingsMutationResult = Apollo.MutationResult<
  ApolloTypes.PostExternalIdMappingGetExternalIdMappingsMutation
>;
export type PostExternalIdMappingGetExternalIdMappingsMutationOptions = Apollo.BaseMutationOptions<
  ApolloTypes.PostExternalIdMappingGetExternalIdMappingsMutation,
  ApolloTypes.PostExternalIdMappingGetExternalIdMappingsMutationVariables
>;
export const PostExternalPortfoliosDocument = /* #__PURE__ */ gql`
  mutation postExternalPortfolios(
    $createOrReplaceExternalPortfolioRequestInput: CreateOrReplaceExternalPortfolioRequestInput
  ) {
    postExternalPortfolios(
      createOrReplaceExternalPortfolioRequestInput: $createOrReplaceExternalPortfolioRequestInput
    ) {
      created
      updated
    }
  }
`;
export type PostExternalPortfoliosMutationFn = Apollo.MutationFunction<
  ApolloTypes.PostExternalPortfoliosMutation,
  ApolloTypes.PostExternalPortfoliosMutationVariables
>;

/**
 * __usePostExternalPortfoliosMutation__
 *
 * To run a mutation, you first call `usePostExternalPortfoliosMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `usePostExternalPortfoliosMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [postExternalPortfoliosMutation, { data, loading, error }] = usePostExternalPortfoliosMutation({
 *   variables: {
 *      createOrReplaceExternalPortfolioRequestInput: // value for 'createOrReplaceExternalPortfolioRequestInput'
 *   },
 * });
 */
export function usePostExternalPortfoliosMutation(
  baseOptions?: Apollo.MutationHookOptions<
    ApolloTypes.PostExternalPortfoliosMutation,
    ApolloTypes.PostExternalPortfoliosMutationVariables
  >
) {
  return Apollo.useMutation<
    ApolloTypes.PostExternalPortfoliosMutation,
    ApolloTypes.PostExternalPortfoliosMutationVariables
  >(PostExternalPortfoliosDocument, baseOptions);
}
export type PostExternalPortfoliosMutationHookResult = ReturnType<
  typeof usePostExternalPortfoliosMutation
>;
export type PostExternalPortfoliosMutationResult = Apollo.MutationResult<
  ApolloTypes.PostExternalPortfoliosMutation
>;
export type PostExternalPortfoliosMutationOptions = Apollo.BaseMutationOptions<
  ApolloTypes.PostExternalPortfoliosMutation,
  ApolloTypes.PostExternalPortfoliosMutationVariables
>;
export const PostFilesDocument = /* #__PURE__ */ gql`
  mutation postFiles($uploadFileRequestInput: UploadFileRequestInput) {
    postFiles(uploadFileRequestInput: $uploadFileRequestInput) {
      fileInfo {
        affiliatedResource
        affiliatedResourceId
        createdAt
        documentName
        fileExtension
        fileId
      }
    }
  }
`;
export type PostFilesMutationFn = Apollo.MutationFunction<
  ApolloTypes.PostFilesMutation,
  ApolloTypes.PostFilesMutationVariables
>;

/**
 * __usePostFilesMutation__
 *
 * To run a mutation, you first call `usePostFilesMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `usePostFilesMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [postFilesMutation, { data, loading, error }] = usePostFilesMutation({
 *   variables: {
 *      uploadFileRequestInput: // value for 'uploadFileRequestInput'
 *   },
 * });
 */
export function usePostFilesMutation(
  baseOptions?: Apollo.MutationHookOptions<
    ApolloTypes.PostFilesMutation,
    ApolloTypes.PostFilesMutationVariables
  >
) {
  return Apollo.useMutation<
    ApolloTypes.PostFilesMutation,
    ApolloTypes.PostFilesMutationVariables
  >(PostFilesDocument, baseOptions);
}
export type PostFilesMutationHookResult = ReturnType<
  typeof usePostFilesMutation
>;
export type PostFilesMutationResult = Apollo.MutationResult<
  ApolloTypes.PostFilesMutation
>;
export type PostFilesMutationOptions = Apollo.BaseMutationOptions<
  ApolloTypes.PostFilesMutation,
  ApolloTypes.PostFilesMutationVariables
>;
export const PostIdentityInvestigationUploadDocument = /* #__PURE__ */ gql`
  mutation postIdentityInvestigationUpload(
    $sketchId: String!
    $uploadIdentityDocumentRequestInput: UploadIdentityDocumentRequestInput
  ) {
    postIdentityInvestigationUpload(
      sketchId: $sketchId
      uploadIdentityDocumentRequestInput: $uploadIdentityDocumentRequestInput
    ) {
      identityDocument {
        documentType {
          description
          name
        }
        snapId
        uploadDateTime
        uploadUserName
      }
    }
  }
`;
export type PostIdentityInvestigationUploadMutationFn = Apollo.MutationFunction<
  ApolloTypes.PostIdentityInvestigationUploadMutation,
  ApolloTypes.PostIdentityInvestigationUploadMutationVariables
>;

/**
 * __usePostIdentityInvestigationUploadMutation__
 *
 * To run a mutation, you first call `usePostIdentityInvestigationUploadMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `usePostIdentityInvestigationUploadMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [postIdentityInvestigationUploadMutation, { data, loading, error }] = usePostIdentityInvestigationUploadMutation({
 *   variables: {
 *      sketchId: // value for 'sketchId'
 *      uploadIdentityDocumentRequestInput: // value for 'uploadIdentityDocumentRequestInput'
 *   },
 * });
 */
export function usePostIdentityInvestigationUploadMutation(
  baseOptions?: Apollo.MutationHookOptions<
    ApolloTypes.PostIdentityInvestigationUploadMutation,
    ApolloTypes.PostIdentityInvestigationUploadMutationVariables
  >
) {
  return Apollo.useMutation<
    ApolloTypes.PostIdentityInvestigationUploadMutation,
    ApolloTypes.PostIdentityInvestigationUploadMutationVariables
  >(PostIdentityInvestigationUploadDocument, baseOptions);
}
export type PostIdentityInvestigationUploadMutationHookResult = ReturnType<
  typeof usePostIdentityInvestigationUploadMutation
>;
export type PostIdentityInvestigationUploadMutationResult = Apollo.MutationResult<
  ApolloTypes.PostIdentityInvestigationUploadMutation
>;
export type PostIdentityInvestigationUploadMutationOptions = Apollo.BaseMutationOptions<
  ApolloTypes.PostIdentityInvestigationUploadMutation,
  ApolloTypes.PostIdentityInvestigationUploadMutationVariables
>;
export const PostInstitutionApiCallRecordsDocument = /* #__PURE__ */ gql`
  mutation postInstitutionApiCallRecords(
    $createApiCallRecordRequestInput: CreateApiCallRecordRequestInput
    $institutionId: String!
  ) {
    postInstitutionApiCallRecords(
      createApiCallRecordRequestInput: $createApiCallRecordRequestInput
      institutionId: $institutionId
    ) {
      apiCallRecord {
        action
        createdAt
        id
        institutionId
        metadata
        responseStatus
        updatedAt
        url
      }
    }
  }
`;
export type PostInstitutionApiCallRecordsMutationFn = Apollo.MutationFunction<
  ApolloTypes.PostInstitutionApiCallRecordsMutation,
  ApolloTypes.PostInstitutionApiCallRecordsMutationVariables
>;

/**
 * __usePostInstitutionApiCallRecordsMutation__
 *
 * To run a mutation, you first call `usePostInstitutionApiCallRecordsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `usePostInstitutionApiCallRecordsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [postInstitutionApiCallRecordsMutation, { data, loading, error }] = usePostInstitutionApiCallRecordsMutation({
 *   variables: {
 *      createApiCallRecordRequestInput: // value for 'createApiCallRecordRequestInput'
 *      institutionId: // value for 'institutionId'
 *   },
 * });
 */
export function usePostInstitutionApiCallRecordsMutation(
  baseOptions?: Apollo.MutationHookOptions<
    ApolloTypes.PostInstitutionApiCallRecordsMutation,
    ApolloTypes.PostInstitutionApiCallRecordsMutationVariables
  >
) {
  return Apollo.useMutation<
    ApolloTypes.PostInstitutionApiCallRecordsMutation,
    ApolloTypes.PostInstitutionApiCallRecordsMutationVariables
  >(PostInstitutionApiCallRecordsDocument, baseOptions);
}
export type PostInstitutionApiCallRecordsMutationHookResult = ReturnType<
  typeof usePostInstitutionApiCallRecordsMutation
>;
export type PostInstitutionApiCallRecordsMutationResult = Apollo.MutationResult<
  ApolloTypes.PostInstitutionApiCallRecordsMutation
>;
export type PostInstitutionApiCallRecordsMutationOptions = Apollo.BaseMutationOptions<
  ApolloTypes.PostInstitutionApiCallRecordsMutation,
  ApolloTypes.PostInstitutionApiCallRecordsMutationVariables
>;
export const PostInstitutionInventoriesDocument = /* #__PURE__ */ gql`
  mutation postInstitutionInventories(
    $createOrUpdateInventoryMappingRequestInput: CreateOrUpdateInventoryMappingRequestInput
    $institutionId: String!
  ) {
    postInstitutionInventories(
      createOrUpdateInventoryMappingRequestInput: $createOrUpdateInventoryMappingRequestInput
      institutionId: $institutionId
    ) {
      inventoryMapping {
        assetExplorer
        bestFit
        inpaas
        institutionId
        muniBestFit
      }
    }
  }
`;
export type PostInstitutionInventoriesMutationFn = Apollo.MutationFunction<
  ApolloTypes.PostInstitutionInventoriesMutation,
  ApolloTypes.PostInstitutionInventoriesMutationVariables
>;

/**
 * __usePostInstitutionInventoriesMutation__
 *
 * To run a mutation, you first call `usePostInstitutionInventoriesMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `usePostInstitutionInventoriesMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [postInstitutionInventoriesMutation, { data, loading, error }] = usePostInstitutionInventoriesMutation({
 *   variables: {
 *      createOrUpdateInventoryMappingRequestInput: // value for 'createOrUpdateInventoryMappingRequestInput'
 *      institutionId: // value for 'institutionId'
 *   },
 * });
 */
export function usePostInstitutionInventoriesMutation(
  baseOptions?: Apollo.MutationHookOptions<
    ApolloTypes.PostInstitutionInventoriesMutation,
    ApolloTypes.PostInstitutionInventoriesMutationVariables
  >
) {
  return Apollo.useMutation<
    ApolloTypes.PostInstitutionInventoriesMutation,
    ApolloTypes.PostInstitutionInventoriesMutationVariables
  >(PostInstitutionInventoriesDocument, baseOptions);
}
export type PostInstitutionInventoriesMutationHookResult = ReturnType<
  typeof usePostInstitutionInventoriesMutation
>;
export type PostInstitutionInventoriesMutationResult = Apollo.MutationResult<
  ApolloTypes.PostInstitutionInventoriesMutation
>;
export type PostInstitutionInventoriesMutationOptions = Apollo.BaseMutationOptions<
  ApolloTypes.PostInstitutionInventoriesMutation,
  ApolloTypes.PostInstitutionInventoriesMutationVariables
>;
export const PostInstitutionInvestorsDocument = /* #__PURE__ */ gql`
  mutation postInstitutionInvestors(
    $createInvestorMappingRequestInput: CreateInvestorMappingRequestInput
    $institutionId: String!
  ) {
    postInstitutionInvestors(
      createInvestorMappingRequestInput: $createInvestorMappingRequestInput
      institutionId: $institutionId
    ) {
      investorMapping {
        institutionId
        investorId
      }
    }
  }
`;
export type PostInstitutionInvestorsMutationFn = Apollo.MutationFunction<
  ApolloTypes.PostInstitutionInvestorsMutation,
  ApolloTypes.PostInstitutionInvestorsMutationVariables
>;

/**
 * __usePostInstitutionInvestorsMutation__
 *
 * To run a mutation, you first call `usePostInstitutionInvestorsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `usePostInstitutionInvestorsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [postInstitutionInvestorsMutation, { data, loading, error }] = usePostInstitutionInvestorsMutation({
 *   variables: {
 *      createInvestorMappingRequestInput: // value for 'createInvestorMappingRequestInput'
 *      institutionId: // value for 'institutionId'
 *   },
 * });
 */
export function usePostInstitutionInvestorsMutation(
  baseOptions?: Apollo.MutationHookOptions<
    ApolloTypes.PostInstitutionInvestorsMutation,
    ApolloTypes.PostInstitutionInvestorsMutationVariables
  >
) {
  return Apollo.useMutation<
    ApolloTypes.PostInstitutionInvestorsMutation,
    ApolloTypes.PostInstitutionInvestorsMutationVariables
  >(PostInstitutionInvestorsDocument, baseOptions);
}
export type PostInstitutionInvestorsMutationHookResult = ReturnType<
  typeof usePostInstitutionInvestorsMutation
>;
export type PostInstitutionInvestorsMutationResult = Apollo.MutationResult<
  ApolloTypes.PostInstitutionInvestorsMutation
>;
export type PostInstitutionInvestorsMutationOptions = Apollo.BaseMutationOptions<
  ApolloTypes.PostInstitutionInvestorsMutation,
  ApolloTypes.PostInstitutionInvestorsMutationVariables
>;
export const PostInstitutionPortfoliosDocument = /* #__PURE__ */ gql`
  mutation postInstitutionPortfolios(
    $createPortfolioMappingRequestInput: CreatePortfolioMappingRequestInput
    $institutionId: String!
  ) {
    postInstitutionPortfolios(
      createPortfolioMappingRequestInput: $createPortfolioMappingRequestInput
      institutionId: $institutionId
    ) {
      portfolioMapping {
        institutionId
        portfolioId
      }
    }
  }
`;
export type PostInstitutionPortfoliosMutationFn = Apollo.MutationFunction<
  ApolloTypes.PostInstitutionPortfoliosMutation,
  ApolloTypes.PostInstitutionPortfoliosMutationVariables
>;

/**
 * __usePostInstitutionPortfoliosMutation__
 *
 * To run a mutation, you first call `usePostInstitutionPortfoliosMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `usePostInstitutionPortfoliosMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [postInstitutionPortfoliosMutation, { data, loading, error }] = usePostInstitutionPortfoliosMutation({
 *   variables: {
 *      createPortfolioMappingRequestInput: // value for 'createPortfolioMappingRequestInput'
 *      institutionId: // value for 'institutionId'
 *   },
 * });
 */
export function usePostInstitutionPortfoliosMutation(
  baseOptions?: Apollo.MutationHookOptions<
    ApolloTypes.PostInstitutionPortfoliosMutation,
    ApolloTypes.PostInstitutionPortfoliosMutationVariables
  >
) {
  return Apollo.useMutation<
    ApolloTypes.PostInstitutionPortfoliosMutation,
    ApolloTypes.PostInstitutionPortfoliosMutationVariables
  >(PostInstitutionPortfoliosDocument, baseOptions);
}
export type PostInstitutionPortfoliosMutationHookResult = ReturnType<
  typeof usePostInstitutionPortfoliosMutation
>;
export type PostInstitutionPortfoliosMutationResult = Apollo.MutationResult<
  ApolloTypes.PostInstitutionPortfoliosMutation
>;
export type PostInstitutionPortfoliosMutationOptions = Apollo.BaseMutationOptions<
  ApolloTypes.PostInstitutionPortfoliosMutation,
  ApolloTypes.PostInstitutionPortfoliosMutationVariables
>;
export const PostInstitutionProposalsDocument = /* #__PURE__ */ gql`
  mutation postInstitutionProposals(
    $createProposalMappingRequestInput: CreateProposalMappingRequestInput
    $institutionId: String!
  ) {
    postInstitutionProposals(
      createProposalMappingRequestInput: $createProposalMappingRequestInput
      institutionId: $institutionId
    ) {
      proposalMapping {
        institutionId
        proposalId
      }
    }
  }
`;
export type PostInstitutionProposalsMutationFn = Apollo.MutationFunction<
  ApolloTypes.PostInstitutionProposalsMutation,
  ApolloTypes.PostInstitutionProposalsMutationVariables
>;

/**
 * __usePostInstitutionProposalsMutation__
 *
 * To run a mutation, you first call `usePostInstitutionProposalsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `usePostInstitutionProposalsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [postInstitutionProposalsMutation, { data, loading, error }] = usePostInstitutionProposalsMutation({
 *   variables: {
 *      createProposalMappingRequestInput: // value for 'createProposalMappingRequestInput'
 *      institutionId: // value for 'institutionId'
 *   },
 * });
 */
export function usePostInstitutionProposalsMutation(
  baseOptions?: Apollo.MutationHookOptions<
    ApolloTypes.PostInstitutionProposalsMutation,
    ApolloTypes.PostInstitutionProposalsMutationVariables
  >
) {
  return Apollo.useMutation<
    ApolloTypes.PostInstitutionProposalsMutation,
    ApolloTypes.PostInstitutionProposalsMutationVariables
  >(PostInstitutionProposalsDocument, baseOptions);
}
export type PostInstitutionProposalsMutationHookResult = ReturnType<
  typeof usePostInstitutionProposalsMutation
>;
export type PostInstitutionProposalsMutationResult = Apollo.MutationResult<
  ApolloTypes.PostInstitutionProposalsMutation
>;
export type PostInstitutionProposalsMutationOptions = Apollo.BaseMutationOptions<
  ApolloTypes.PostInstitutionProposalsMutation,
  ApolloTypes.PostInstitutionProposalsMutationVariables
>;
export const PostInstitutionRolesDocument = /* #__PURE__ */ gql`
  mutation postInstitutionRoles(
    $createRoleMappingRequestInput: CreateRoleMappingRequestInput
    $institutionId: String!
  ) {
    postInstitutionRoles(
      createRoleMappingRequestInput: $createRoleMappingRequestInput
      institutionId: $institutionId
    ) {
      role {
        institutionId
        roleId
        userType
      }
    }
  }
`;
export type PostInstitutionRolesMutationFn = Apollo.MutationFunction<
  ApolloTypes.PostInstitutionRolesMutation,
  ApolloTypes.PostInstitutionRolesMutationVariables
>;

/**
 * __usePostInstitutionRolesMutation__
 *
 * To run a mutation, you first call `usePostInstitutionRolesMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `usePostInstitutionRolesMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [postInstitutionRolesMutation, { data, loading, error }] = usePostInstitutionRolesMutation({
 *   variables: {
 *      createRoleMappingRequestInput: // value for 'createRoleMappingRequestInput'
 *      institutionId: // value for 'institutionId'
 *   },
 * });
 */
export function usePostInstitutionRolesMutation(
  baseOptions?: Apollo.MutationHookOptions<
    ApolloTypes.PostInstitutionRolesMutation,
    ApolloTypes.PostInstitutionRolesMutationVariables
  >
) {
  return Apollo.useMutation<
    ApolloTypes.PostInstitutionRolesMutation,
    ApolloTypes.PostInstitutionRolesMutationVariables
  >(PostInstitutionRolesDocument, baseOptions);
}
export type PostInstitutionRolesMutationHookResult = ReturnType<
  typeof usePostInstitutionRolesMutation
>;
export type PostInstitutionRolesMutationResult = Apollo.MutationResult<
  ApolloTypes.PostInstitutionRolesMutation
>;
export type PostInstitutionRolesMutationOptions = Apollo.BaseMutationOptions<
  ApolloTypes.PostInstitutionRolesMutation,
  ApolloTypes.PostInstitutionRolesMutationVariables
>;
export const PostInstitutionUsersDocument = /* #__PURE__ */ gql`
  mutation postInstitutionUsers(
    $createUserMappingRequestInput: CreateUserMappingRequestInput
    $institutionId: String!
  ) {
    postInstitutionUsers(
      createUserMappingRequestInput: $createUserMappingRequestInput
      institutionId: $institutionId
    ) {
      userMapping {
        email
        institutionId
        roles
        userId
        userType
      }
    }
  }
`;
export type PostInstitutionUsersMutationFn = Apollo.MutationFunction<
  ApolloTypes.PostInstitutionUsersMutation,
  ApolloTypes.PostInstitutionUsersMutationVariables
>;

/**
 * __usePostInstitutionUsersMutation__
 *
 * To run a mutation, you first call `usePostInstitutionUsersMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `usePostInstitutionUsersMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [postInstitutionUsersMutation, { data, loading, error }] = usePostInstitutionUsersMutation({
 *   variables: {
 *      createUserMappingRequestInput: // value for 'createUserMappingRequestInput'
 *      institutionId: // value for 'institutionId'
 *   },
 * });
 */
export function usePostInstitutionUsersMutation(
  baseOptions?: Apollo.MutationHookOptions<
    ApolloTypes.PostInstitutionUsersMutation,
    ApolloTypes.PostInstitutionUsersMutationVariables
  >
) {
  return Apollo.useMutation<
    ApolloTypes.PostInstitutionUsersMutation,
    ApolloTypes.PostInstitutionUsersMutationVariables
  >(PostInstitutionUsersDocument, baseOptions);
}
export type PostInstitutionUsersMutationHookResult = ReturnType<
  typeof usePostInstitutionUsersMutation
>;
export type PostInstitutionUsersMutationResult = Apollo.MutationResult<
  ApolloTypes.PostInstitutionUsersMutation
>;
export type PostInstitutionUsersMutationOptions = Apollo.BaseMutationOptions<
  ApolloTypes.PostInstitutionUsersMutation,
  ApolloTypes.PostInstitutionUsersMutationVariables
>;
export const PostInstitutionWhitelistsGenerateBestFitDocument = /* #__PURE__ */ gql`
  mutation postInstitutionWhitelistsGenerateBestFit(
    $generateBestFitWhitelistRequestInput: GenerateBestFitWhitelistRequestInput
    $institutionId: String!
  ) {
    postInstitutionWhitelistsGenerateBestFit(
      generateBestFitWhitelistRequestInput: $generateBestFitWhitelistRequestInput
      institutionId: $institutionId
    ) {
      assetIds
    }
  }
`;
export type PostInstitutionWhitelistsGenerateBestFitMutationFn = Apollo.MutationFunction<
  ApolloTypes.PostInstitutionWhitelistsGenerateBestFitMutation,
  ApolloTypes.PostInstitutionWhitelistsGenerateBestFitMutationVariables
>;

/**
 * __usePostInstitutionWhitelistsGenerateBestFitMutation__
 *
 * To run a mutation, you first call `usePostInstitutionWhitelistsGenerateBestFitMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `usePostInstitutionWhitelistsGenerateBestFitMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [postInstitutionWhitelistsGenerateBestFitMutation, { data, loading, error }] = usePostInstitutionWhitelistsGenerateBestFitMutation({
 *   variables: {
 *      generateBestFitWhitelistRequestInput: // value for 'generateBestFitWhitelistRequestInput'
 *      institutionId: // value for 'institutionId'
 *   },
 * });
 */
export function usePostInstitutionWhitelistsGenerateBestFitMutation(
  baseOptions?: Apollo.MutationHookOptions<
    ApolloTypes.PostInstitutionWhitelistsGenerateBestFitMutation,
    ApolloTypes.PostInstitutionWhitelistsGenerateBestFitMutationVariables
  >
) {
  return Apollo.useMutation<
    ApolloTypes.PostInstitutionWhitelistsGenerateBestFitMutation,
    ApolloTypes.PostInstitutionWhitelistsGenerateBestFitMutationVariables
  >(PostInstitutionWhitelistsGenerateBestFitDocument, baseOptions);
}
export type PostInstitutionWhitelistsGenerateBestFitMutationHookResult = ReturnType<
  typeof usePostInstitutionWhitelistsGenerateBestFitMutation
>;
export type PostInstitutionWhitelistsGenerateBestFitMutationResult = Apollo.MutationResult<
  ApolloTypes.PostInstitutionWhitelistsGenerateBestFitMutation
>;
export type PostInstitutionWhitelistsGenerateBestFitMutationOptions = Apollo.BaseMutationOptions<
  ApolloTypes.PostInstitutionWhitelistsGenerateBestFitMutation,
  ApolloTypes.PostInstitutionWhitelistsGenerateBestFitMutationVariables
>;
export const PostInstitutionWhitelistsGenerateMuniBestFitDocument = /* #__PURE__ */ gql`
  mutation postInstitutionWhitelistsGenerateMuniBestFit(
    $generateMuniBestFitWhitelistRequestInput: GenerateMuniBestFitWhitelistRequestInput
    $institutionId: String!
  ) {
    postInstitutionWhitelistsGenerateMuniBestFit(
      generateMuniBestFitWhitelistRequestInput: $generateMuniBestFitWhitelistRequestInput
      institutionId: $institutionId
    ) {
      assetIds
    }
  }
`;
export type PostInstitutionWhitelistsGenerateMuniBestFitMutationFn = Apollo.MutationFunction<
  ApolloTypes.PostInstitutionWhitelistsGenerateMuniBestFitMutation,
  ApolloTypes.PostInstitutionWhitelistsGenerateMuniBestFitMutationVariables
>;

/**
 * __usePostInstitutionWhitelistsGenerateMuniBestFitMutation__
 *
 * To run a mutation, you first call `usePostInstitutionWhitelistsGenerateMuniBestFitMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `usePostInstitutionWhitelistsGenerateMuniBestFitMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [postInstitutionWhitelistsGenerateMuniBestFitMutation, { data, loading, error }] = usePostInstitutionWhitelistsGenerateMuniBestFitMutation({
 *   variables: {
 *      generateMuniBestFitWhitelistRequestInput: // value for 'generateMuniBestFitWhitelistRequestInput'
 *      institutionId: // value for 'institutionId'
 *   },
 * });
 */
export function usePostInstitutionWhitelistsGenerateMuniBestFitMutation(
  baseOptions?: Apollo.MutationHookOptions<
    ApolloTypes.PostInstitutionWhitelistsGenerateMuniBestFitMutation,
    ApolloTypes.PostInstitutionWhitelistsGenerateMuniBestFitMutationVariables
  >
) {
  return Apollo.useMutation<
    ApolloTypes.PostInstitutionWhitelistsGenerateMuniBestFitMutation,
    ApolloTypes.PostInstitutionWhitelistsGenerateMuniBestFitMutationVariables
  >(PostInstitutionWhitelistsGenerateMuniBestFitDocument, baseOptions);
}
export type PostInstitutionWhitelistsGenerateMuniBestFitMutationHookResult = ReturnType<
  typeof usePostInstitutionWhitelistsGenerateMuniBestFitMutation
>;
export type PostInstitutionWhitelistsGenerateMuniBestFitMutationResult = Apollo.MutationResult<
  ApolloTypes.PostInstitutionWhitelistsGenerateMuniBestFitMutation
>;
export type PostInstitutionWhitelistsGenerateMuniBestFitMutationOptions = Apollo.BaseMutationOptions<
  ApolloTypes.PostInstitutionWhitelistsGenerateMuniBestFitMutation,
  ApolloTypes.PostInstitutionWhitelistsGenerateMuniBestFitMutationVariables
>;
export const PostInstitutionsDocument = /* #__PURE__ */ gql`
  mutation postInstitutions(
    $createInstitutionRequestInput: CreateInstitutionRequestInput
  ) {
    postInstitutions(
      createInstitutionRequestInput: $createInstitutionRequestInput
    ) {
      institution {
        createdAt
        id
        machineUsers {
          clientId
          clientSecret
        }
        metadata
        name
        primaryContact {
          email
          first
          last
        }
        updatedAt
      }
    }
  }
`;
export type PostInstitutionsMutationFn = Apollo.MutationFunction<
  ApolloTypes.PostInstitutionsMutation,
  ApolloTypes.PostInstitutionsMutationVariables
>;

/**
 * __usePostInstitutionsMutation__
 *
 * To run a mutation, you first call `usePostInstitutionsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `usePostInstitutionsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [postInstitutionsMutation, { data, loading, error }] = usePostInstitutionsMutation({
 *   variables: {
 *      createInstitutionRequestInput: // value for 'createInstitutionRequestInput'
 *   },
 * });
 */
export function usePostInstitutionsMutation(
  baseOptions?: Apollo.MutationHookOptions<
    ApolloTypes.PostInstitutionsMutation,
    ApolloTypes.PostInstitutionsMutationVariables
  >
) {
  return Apollo.useMutation<
    ApolloTypes.PostInstitutionsMutation,
    ApolloTypes.PostInstitutionsMutationVariables
  >(PostInstitutionsDocument, baseOptions);
}
export type PostInstitutionsMutationHookResult = ReturnType<
  typeof usePostInstitutionsMutation
>;
export type PostInstitutionsMutationResult = Apollo.MutationResult<
  ApolloTypes.PostInstitutionsMutation
>;
export type PostInstitutionsMutationOptions = Apollo.BaseMutationOptions<
  ApolloTypes.PostInstitutionsMutation,
  ApolloTypes.PostInstitutionsMutationVariables
>;
export const PostInternalAccountsSearchDocument = /* #__PURE__ */ gql`
  mutation postInternalAccountsSearch(
    $searchApexAccountsRequestInput: SearchApexAccountsRequestInput
  ) {
    postInternalAccountsSearch(
      searchApexAccountsRequestInput: $searchApexAccountsRequestInput
    ) {
      apexAccounts {
        apexAccountNumber
        apexRequestId
        createdAt
        id
        investorId
        metadata
        status
        updatedAt
      }
    }
  }
`;
export type PostInternalAccountsSearchMutationFn = Apollo.MutationFunction<
  ApolloTypes.PostInternalAccountsSearchMutation,
  ApolloTypes.PostInternalAccountsSearchMutationVariables
>;

/**
 * __usePostInternalAccountsSearchMutation__
 *
 * To run a mutation, you first call `usePostInternalAccountsSearchMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `usePostInternalAccountsSearchMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [postInternalAccountsSearchMutation, { data, loading, error }] = usePostInternalAccountsSearchMutation({
 *   variables: {
 *      searchApexAccountsRequestInput: // value for 'searchApexAccountsRequestInput'
 *   },
 * });
 */
export function usePostInternalAccountsSearchMutation(
  baseOptions?: Apollo.MutationHookOptions<
    ApolloTypes.PostInternalAccountsSearchMutation,
    ApolloTypes.PostInternalAccountsSearchMutationVariables
  >
) {
  return Apollo.useMutation<
    ApolloTypes.PostInternalAccountsSearchMutation,
    ApolloTypes.PostInternalAccountsSearchMutationVariables
  >(PostInternalAccountsSearchDocument, baseOptions);
}
export type PostInternalAccountsSearchMutationHookResult = ReturnType<
  typeof usePostInternalAccountsSearchMutation
>;
export type PostInternalAccountsSearchMutationResult = Apollo.MutationResult<
  ApolloTypes.PostInternalAccountsSearchMutation
>;
export type PostInternalAccountsSearchMutationOptions = Apollo.BaseMutationOptions<
  ApolloTypes.PostInternalAccountsSearchMutation,
  ApolloTypes.PostInternalAccountsSearchMutationVariables
>;
export const PostInternalAchRelationshipSearchDocument = /* #__PURE__ */ gql`
  mutation postInternalAchRelationshipSearch(
    $searchApexAchRelationshipsRequestInput: SearchApexAchRelationshipsRequestInput
  ) {
    postInternalAchRelationshipSearch(
      searchApexAchRelationshipsRequestInput: $searchApexAchRelationshipsRequestInput
    ) {
      apexAchRelationships {
        accountId
        apexRelationshipId
        createdAt
        id
        linkedBankAccountId
        metadata
        status
        updatedAt
      }
    }
  }
`;
export type PostInternalAchRelationshipSearchMutationFn = Apollo.MutationFunction<
  ApolloTypes.PostInternalAchRelationshipSearchMutation,
  ApolloTypes.PostInternalAchRelationshipSearchMutationVariables
>;

/**
 * __usePostInternalAchRelationshipSearchMutation__
 *
 * To run a mutation, you first call `usePostInternalAchRelationshipSearchMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `usePostInternalAchRelationshipSearchMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [postInternalAchRelationshipSearchMutation, { data, loading, error }] = usePostInternalAchRelationshipSearchMutation({
 *   variables: {
 *      searchApexAchRelationshipsRequestInput: // value for 'searchApexAchRelationshipsRequestInput'
 *   },
 * });
 */
export function usePostInternalAchRelationshipSearchMutation(
  baseOptions?: Apollo.MutationHookOptions<
    ApolloTypes.PostInternalAchRelationshipSearchMutation,
    ApolloTypes.PostInternalAchRelationshipSearchMutationVariables
  >
) {
  return Apollo.useMutation<
    ApolloTypes.PostInternalAchRelationshipSearchMutation,
    ApolloTypes.PostInternalAchRelationshipSearchMutationVariables
  >(PostInternalAchRelationshipSearchDocument, baseOptions);
}
export type PostInternalAchRelationshipSearchMutationHookResult = ReturnType<
  typeof usePostInternalAchRelationshipSearchMutation
>;
export type PostInternalAchRelationshipSearchMutationResult = Apollo.MutationResult<
  ApolloTypes.PostInternalAchRelationshipSearchMutation
>;
export type PostInternalAchRelationshipSearchMutationOptions = Apollo.BaseMutationOptions<
  ApolloTypes.PostInternalAchRelationshipSearchMutation,
  ApolloTypes.PostInternalAchRelationshipSearchMutationVariables
>;
export const PostInternalSyncSearchDocument = /* #__PURE__ */ gql`
  mutation postInternalSyncSearch(
    $internalSyncSearchRequestInput: InternalSyncSearchRequestInput
  ) {
    postInternalSyncSearch(
      internalSyncSearchRequestInput: $internalSyncSearchRequestInput
    ) {
      timestamp
    }
  }
`;
export type PostInternalSyncSearchMutationFn = Apollo.MutationFunction<
  ApolloTypes.PostInternalSyncSearchMutation,
  ApolloTypes.PostInternalSyncSearchMutationVariables
>;

/**
 * __usePostInternalSyncSearchMutation__
 *
 * To run a mutation, you first call `usePostInternalSyncSearchMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `usePostInternalSyncSearchMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [postInternalSyncSearchMutation, { data, loading, error }] = usePostInternalSyncSearchMutation({
 *   variables: {
 *      internalSyncSearchRequestInput: // value for 'internalSyncSearchRequestInput'
 *   },
 * });
 */
export function usePostInternalSyncSearchMutation(
  baseOptions?: Apollo.MutationHookOptions<
    ApolloTypes.PostInternalSyncSearchMutation,
    ApolloTypes.PostInternalSyncSearchMutationVariables
  >
) {
  return Apollo.useMutation<
    ApolloTypes.PostInternalSyncSearchMutation,
    ApolloTypes.PostInternalSyncSearchMutationVariables
  >(PostInternalSyncSearchDocument, baseOptions);
}
export type PostInternalSyncSearchMutationHookResult = ReturnType<
  typeof usePostInternalSyncSearchMutation
>;
export type PostInternalSyncSearchMutationResult = Apollo.MutationResult<
  ApolloTypes.PostInternalSyncSearchMutation
>;
export type PostInternalSyncSearchMutationOptions = Apollo.BaseMutationOptions<
  ApolloTypes.PostInternalSyncSearchMutation,
  ApolloTypes.PostInternalSyncSearchMutationVariables
>;
export const PostInternalTransfersSearchDocument = /* #__PURE__ */ gql`
  mutation postInternalTransfersSearch(
    $searchApexTransfersRequestInput: SearchApexTransfersRequestInput
  ) {
    postInternalTransfersSearch(
      searchApexTransfersRequestInput: $searchApexTransfersRequestInput
    ) {
      apexTransfers {
        accountId
        achRelationshipId
        amount
        apexTransferId
        createdAt
        direction
        id
        metadata
        status
        transferId
        transferMethod
        updatedAt
      }
    }
  }
`;
export type PostInternalTransfersSearchMutationFn = Apollo.MutationFunction<
  ApolloTypes.PostInternalTransfersSearchMutation,
  ApolloTypes.PostInternalTransfersSearchMutationVariables
>;

/**
 * __usePostInternalTransfersSearchMutation__
 *
 * To run a mutation, you first call `usePostInternalTransfersSearchMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `usePostInternalTransfersSearchMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [postInternalTransfersSearchMutation, { data, loading, error }] = usePostInternalTransfersSearchMutation({
 *   variables: {
 *      searchApexTransfersRequestInput: // value for 'searchApexTransfersRequestInput'
 *   },
 * });
 */
export function usePostInternalTransfersSearchMutation(
  baseOptions?: Apollo.MutationHookOptions<
    ApolloTypes.PostInternalTransfersSearchMutation,
    ApolloTypes.PostInternalTransfersSearchMutationVariables
  >
) {
  return Apollo.useMutation<
    ApolloTypes.PostInternalTransfersSearchMutation,
    ApolloTypes.PostInternalTransfersSearchMutationVariables
  >(PostInternalTransfersSearchDocument, baseOptions);
}
export type PostInternalTransfersSearchMutationHookResult = ReturnType<
  typeof usePostInternalTransfersSearchMutation
>;
export type PostInternalTransfersSearchMutationResult = Apollo.MutationResult<
  ApolloTypes.PostInternalTransfersSearchMutation
>;
export type PostInternalTransfersSearchMutationOptions = Apollo.BaseMutationOptions<
  ApolloTypes.PostInternalTransfersSearchMutation,
  ApolloTypes.PostInternalTransfersSearchMutationVariables
>;
export const PostInvestorAccountDocument = /* #__PURE__ */ gql`
  mutation postInvestorAccount($investorId: String!) {
    postInvestorAccount(investorId: $investorId) {
      apexAccount {
        apexAccountNumber
        apexRequestId
        createdAt
        id
        investorId
        metadata
        status
        updatedAt
      }
    }
  }
`;
export type PostInvestorAccountMutationFn = Apollo.MutationFunction<
  ApolloTypes.PostInvestorAccountMutation,
  ApolloTypes.PostInvestorAccountMutationVariables
>;

/**
 * __usePostInvestorAccountMutation__
 *
 * To run a mutation, you first call `usePostInvestorAccountMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `usePostInvestorAccountMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [postInvestorAccountMutation, { data, loading, error }] = usePostInvestorAccountMutation({
 *   variables: {
 *      investorId: // value for 'investorId'
 *   },
 * });
 */
export function usePostInvestorAccountMutation(
  baseOptions?: Apollo.MutationHookOptions<
    ApolloTypes.PostInvestorAccountMutation,
    ApolloTypes.PostInvestorAccountMutationVariables
  >
) {
  return Apollo.useMutation<
    ApolloTypes.PostInvestorAccountMutation,
    ApolloTypes.PostInvestorAccountMutationVariables
  >(PostInvestorAccountDocument, baseOptions);
}
export type PostInvestorAccountMutationHookResult = ReturnType<
  typeof usePostInvestorAccountMutation
>;
export type PostInvestorAccountMutationResult = Apollo.MutationResult<
  ApolloTypes.PostInvestorAccountMutation
>;
export type PostInvestorAccountMutationOptions = Apollo.BaseMutationOptions<
  ApolloTypes.PostInvestorAccountMutation,
  ApolloTypes.PostInvestorAccountMutationVariables
>;
export const PostInvestorLinkedBankAccountsDocument = /* #__PURE__ */ gql`
  mutation postInvestorLinkedBankAccounts(
    $createLinkedBankAccountRequestInput: CreateLinkedBankAccountRequestInput
    $investorId: String!
  ) {
    postInvestorLinkedBankAccounts(
      createLinkedBankAccountRequestInput: $createLinkedBankAccountRequestInput
      investorId: $investorId
    ) {
      linkedBankAccount {
        accountType
        bankName
        createdAt
        id
        investorId
        mask
        metadata
        status
        updatedAt
      }
    }
  }
`;
export type PostInvestorLinkedBankAccountsMutationFn = Apollo.MutationFunction<
  ApolloTypes.PostInvestorLinkedBankAccountsMutation,
  ApolloTypes.PostInvestorLinkedBankAccountsMutationVariables
>;

/**
 * __usePostInvestorLinkedBankAccountsMutation__
 *
 * To run a mutation, you first call `usePostInvestorLinkedBankAccountsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `usePostInvestorLinkedBankAccountsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [postInvestorLinkedBankAccountsMutation, { data, loading, error }] = usePostInvestorLinkedBankAccountsMutation({
 *   variables: {
 *      createLinkedBankAccountRequestInput: // value for 'createLinkedBankAccountRequestInput'
 *      investorId: // value for 'investorId'
 *   },
 * });
 */
export function usePostInvestorLinkedBankAccountsMutation(
  baseOptions?: Apollo.MutationHookOptions<
    ApolloTypes.PostInvestorLinkedBankAccountsMutation,
    ApolloTypes.PostInvestorLinkedBankAccountsMutationVariables
  >
) {
  return Apollo.useMutation<
    ApolloTypes.PostInvestorLinkedBankAccountsMutation,
    ApolloTypes.PostInvestorLinkedBankAccountsMutationVariables
  >(PostInvestorLinkedBankAccountsDocument, baseOptions);
}
export type PostInvestorLinkedBankAccountsMutationHookResult = ReturnType<
  typeof usePostInvestorLinkedBankAccountsMutation
>;
export type PostInvestorLinkedBankAccountsMutationResult = Apollo.MutationResult<
  ApolloTypes.PostInvestorLinkedBankAccountsMutation
>;
export type PostInvestorLinkedBankAccountsMutationOptions = Apollo.BaseMutationOptions<
  ApolloTypes.PostInvestorLinkedBankAccountsMutation,
  ApolloTypes.PostInvestorLinkedBankAccountsMutationVariables
>;
export const PostInvestorLinkedBankAccountsDirectlyDocument = /* #__PURE__ */ gql`
  mutation postInvestorLinkedBankAccountsDirectly(
    $createLinkedBankAccountDirectlyRequestInput: CreateLinkedBankAccountDirectlyRequestInput
    $investorId: String!
  ) {
    postInvestorLinkedBankAccountsDirectly(
      createLinkedBankAccountDirectlyRequestInput: $createLinkedBankAccountDirectlyRequestInput
      investorId: $investorId
    ) {
      linkedBankAccount {
        accountType
        bankName
        createdAt
        id
        investorId
        mask
        metadata
        status
        updatedAt
      }
    }
  }
`;
export type PostInvestorLinkedBankAccountsDirectlyMutationFn = Apollo.MutationFunction<
  ApolloTypes.PostInvestorLinkedBankAccountsDirectlyMutation,
  ApolloTypes.PostInvestorLinkedBankAccountsDirectlyMutationVariables
>;

/**
 * __usePostInvestorLinkedBankAccountsDirectlyMutation__
 *
 * To run a mutation, you first call `usePostInvestorLinkedBankAccountsDirectlyMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `usePostInvestorLinkedBankAccountsDirectlyMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [postInvestorLinkedBankAccountsDirectlyMutation, { data, loading, error }] = usePostInvestorLinkedBankAccountsDirectlyMutation({
 *   variables: {
 *      createLinkedBankAccountDirectlyRequestInput: // value for 'createLinkedBankAccountDirectlyRequestInput'
 *      investorId: // value for 'investorId'
 *   },
 * });
 */
export function usePostInvestorLinkedBankAccountsDirectlyMutation(
  baseOptions?: Apollo.MutationHookOptions<
    ApolloTypes.PostInvestorLinkedBankAccountsDirectlyMutation,
    ApolloTypes.PostInvestorLinkedBankAccountsDirectlyMutationVariables
  >
) {
  return Apollo.useMutation<
    ApolloTypes.PostInvestorLinkedBankAccountsDirectlyMutation,
    ApolloTypes.PostInvestorLinkedBankAccountsDirectlyMutationVariables
  >(PostInvestorLinkedBankAccountsDirectlyDocument, baseOptions);
}
export type PostInvestorLinkedBankAccountsDirectlyMutationHookResult = ReturnType<
  typeof usePostInvestorLinkedBankAccountsDirectlyMutation
>;
export type PostInvestorLinkedBankAccountsDirectlyMutationResult = Apollo.MutationResult<
  ApolloTypes.PostInvestorLinkedBankAccountsDirectlyMutation
>;
export type PostInvestorLinkedBankAccountsDirectlyMutationOptions = Apollo.BaseMutationOptions<
  ApolloTypes.PostInvestorLinkedBankAccountsDirectlyMutation,
  ApolloTypes.PostInvestorLinkedBankAccountsDirectlyMutationVariables
>;
export const PostInvestorPortfolioInternalPortfolioFundTransferDocument = /* #__PURE__ */ gql`
  mutation postInvestorPortfolioInternalPortfolioFundTransfer(
    $createFundTransferRequestInput: CreateFundTransferRequestInput
    $investorId: String!
    $portfolioId: String!
  ) {
    postInvestorPortfolioInternalPortfolioFundTransfer(
      createFundTransferRequestInput: $createFundTransferRequestInput
      investorId: $investorId
      portfolioId: $portfolioId
    ) {
      ledgerEntry {
        accountNumber
        assetId
        comment
        counterPartyId
        createdAt
        fee
        id
        metadata
        orderId
        portfolioId
        quantity
        relatedPositions {
          positionId
          quantity
        }
        status
        tradeId
        tradePrice
        updatedAt
      }
    }
  }
`;
export type PostInvestorPortfolioInternalPortfolioFundTransferMutationFn = Apollo.MutationFunction<
  ApolloTypes.PostInvestorPortfolioInternalPortfolioFundTransferMutation,
  ApolloTypes.PostInvestorPortfolioInternalPortfolioFundTransferMutationVariables
>;

/**
 * __usePostInvestorPortfolioInternalPortfolioFundTransferMutation__
 *
 * To run a mutation, you first call `usePostInvestorPortfolioInternalPortfolioFundTransferMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `usePostInvestorPortfolioInternalPortfolioFundTransferMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [postInvestorPortfolioInternalPortfolioFundTransferMutation, { data, loading, error }] = usePostInvestorPortfolioInternalPortfolioFundTransferMutation({
 *   variables: {
 *      createFundTransferRequestInput: // value for 'createFundTransferRequestInput'
 *      investorId: // value for 'investorId'
 *      portfolioId: // value for 'portfolioId'
 *   },
 * });
 */
export function usePostInvestorPortfolioInternalPortfolioFundTransferMutation(
  baseOptions?: Apollo.MutationHookOptions<
    ApolloTypes.PostInvestorPortfolioInternalPortfolioFundTransferMutation,
    ApolloTypes.PostInvestorPortfolioInternalPortfolioFundTransferMutationVariables
  >
) {
  return Apollo.useMutation<
    ApolloTypes.PostInvestorPortfolioInternalPortfolioFundTransferMutation,
    ApolloTypes.PostInvestorPortfolioInternalPortfolioFundTransferMutationVariables
  >(PostInvestorPortfolioInternalPortfolioFundTransferDocument, baseOptions);
}
export type PostInvestorPortfolioInternalPortfolioFundTransferMutationHookResult = ReturnType<
  typeof usePostInvestorPortfolioInternalPortfolioFundTransferMutation
>;
export type PostInvestorPortfolioInternalPortfolioFundTransferMutationResult = Apollo.MutationResult<
  ApolloTypes.PostInvestorPortfolioInternalPortfolioFundTransferMutation
>;
export type PostInvestorPortfolioInternalPortfolioFundTransferMutationOptions = Apollo.BaseMutationOptions<
  ApolloTypes.PostInvestorPortfolioInternalPortfolioFundTransferMutation,
  ApolloTypes.PostInvestorPortfolioInternalPortfolioFundTransferMutationVariables
>;
export const PostInvestorPortfoliosDocument = /* #__PURE__ */ gql`
  mutation postInvestorPortfolios(
    $createPortfolioRequestInput: CreatePortfolioRequestInput
    $investorId: String!
  ) {
    postInvestorPortfolios(
      createPortfolioRequestInput: $createPortfolioRequestInput
      investorId: $investorId
    ) {
      portfolio {
        accountNumber
        app
        createdAt
        currency
        description
        id
        metadata
        name
        positions {
          assetId
          costBasis
          createdAt
          id
          metadata
          portfolioId
          quantity
          settled
          tradeDate
          unsettled
          updatedAt
        }
        status
        updatedAt
      }
    }
  }
`;
export type PostInvestorPortfoliosMutationFn = Apollo.MutationFunction<
  ApolloTypes.PostInvestorPortfoliosMutation,
  ApolloTypes.PostInvestorPortfoliosMutationVariables
>;

/**
 * __usePostInvestorPortfoliosMutation__
 *
 * To run a mutation, you first call `usePostInvestorPortfoliosMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `usePostInvestorPortfoliosMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [postInvestorPortfoliosMutation, { data, loading, error }] = usePostInvestorPortfoliosMutation({
 *   variables: {
 *      createPortfolioRequestInput: // value for 'createPortfolioRequestInput'
 *      investorId: // value for 'investorId'
 *   },
 * });
 */
export function usePostInvestorPortfoliosMutation(
  baseOptions?: Apollo.MutationHookOptions<
    ApolloTypes.PostInvestorPortfoliosMutation,
    ApolloTypes.PostInvestorPortfoliosMutationVariables
  >
) {
  return Apollo.useMutation<
    ApolloTypes.PostInvestorPortfoliosMutation,
    ApolloTypes.PostInvestorPortfoliosMutationVariables
  >(PostInvestorPortfoliosDocument, baseOptions);
}
export type PostInvestorPortfoliosMutationHookResult = ReturnType<
  typeof usePostInvestorPortfoliosMutation
>;
export type PostInvestorPortfoliosMutationResult = Apollo.MutationResult<
  ApolloTypes.PostInvestorPortfoliosMutation
>;
export type PostInvestorPortfoliosMutationOptions = Apollo.BaseMutationOptions<
  ApolloTypes.PostInvestorPortfoliosMutation,
  ApolloTypes.PostInvestorPortfoliosMutationVariables
>;
export const PostInvestorPortfoliosCashPortfolioDocument = /* #__PURE__ */ gql`
  mutation postInvestorPortfoliosCashPortfolio($investorId: String!) {
    postInvestorPortfoliosCashPortfolio(investorId: $investorId) {
      externalAccounts {
        externalEntityId
        externalEntityType
      }
      portfolio {
        accountNumber
        app
        createdAt
        currency
        description
        id
        metadata
        name
        positions {
          assetId
          costBasis
          createdAt
          id
          metadata
          portfolioId
          quantity
          settled
          tradeDate
          unsettled
          updatedAt
        }
        status
        updatedAt
      }
    }
  }
`;
export type PostInvestorPortfoliosCashPortfolioMutationFn = Apollo.MutationFunction<
  ApolloTypes.PostInvestorPortfoliosCashPortfolioMutation,
  ApolloTypes.PostInvestorPortfoliosCashPortfolioMutationVariables
>;

/**
 * __usePostInvestorPortfoliosCashPortfolioMutation__
 *
 * To run a mutation, you first call `usePostInvestorPortfoliosCashPortfolioMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `usePostInvestorPortfoliosCashPortfolioMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [postInvestorPortfoliosCashPortfolioMutation, { data, loading, error }] = usePostInvestorPortfoliosCashPortfolioMutation({
 *   variables: {
 *      investorId: // value for 'investorId'
 *   },
 * });
 */
export function usePostInvestorPortfoliosCashPortfolioMutation(
  baseOptions?: Apollo.MutationHookOptions<
    ApolloTypes.PostInvestorPortfoliosCashPortfolioMutation,
    ApolloTypes.PostInvestorPortfoliosCashPortfolioMutationVariables
  >
) {
  return Apollo.useMutation<
    ApolloTypes.PostInvestorPortfoliosCashPortfolioMutation,
    ApolloTypes.PostInvestorPortfoliosCashPortfolioMutationVariables
  >(PostInvestorPortfoliosCashPortfolioDocument, baseOptions);
}
export type PostInvestorPortfoliosCashPortfolioMutationHookResult = ReturnType<
  typeof usePostInvestorPortfoliosCashPortfolioMutation
>;
export type PostInvestorPortfoliosCashPortfolioMutationResult = Apollo.MutationResult<
  ApolloTypes.PostInvestorPortfoliosCashPortfolioMutation
>;
export type PostInvestorPortfoliosCashPortfolioMutationOptions = Apollo.BaseMutationOptions<
  ApolloTypes.PostInvestorPortfoliosCashPortfolioMutation,
  ApolloTypes.PostInvestorPortfoliosCashPortfolioMutationVariables
>;
export const PostInvestorTransfersDocument = /* #__PURE__ */ gql`
  mutation postInvestorTransfers(
    $createTransferRequestInput: CreateTransferRequestInput
    $investorId: String!
  ) {
    postInvestorTransfers(
      createTransferRequestInput: $createTransferRequestInput
      investorId: $investorId
    ) {
      transfer {
        amount
        createdAt
        currency
        direction
        externalEntity {
          externalEntityId
          externalEntityType
        }
        id
        investorId
        ledgerId
        linkedBankAccountId
        metadata
        portfolioId
        status
        transferMethod
        updatedAt
      }
    }
  }
`;
export type PostInvestorTransfersMutationFn = Apollo.MutationFunction<
  ApolloTypes.PostInvestorTransfersMutation,
  ApolloTypes.PostInvestorTransfersMutationVariables
>;

/**
 * __usePostInvestorTransfersMutation__
 *
 * To run a mutation, you first call `usePostInvestorTransfersMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `usePostInvestorTransfersMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [postInvestorTransfersMutation, { data, loading, error }] = usePostInvestorTransfersMutation({
 *   variables: {
 *      createTransferRequestInput: // value for 'createTransferRequestInput'
 *      investorId: // value for 'investorId'
 *   },
 * });
 */
export function usePostInvestorTransfersMutation(
  baseOptions?: Apollo.MutationHookOptions<
    ApolloTypes.PostInvestorTransfersMutation,
    ApolloTypes.PostInvestorTransfersMutationVariables
  >
) {
  return Apollo.useMutation<
    ApolloTypes.PostInvestorTransfersMutation,
    ApolloTypes.PostInvestorTransfersMutationVariables
  >(PostInvestorTransfersDocument, baseOptions);
}
export type PostInvestorTransfersMutationHookResult = ReturnType<
  typeof usePostInvestorTransfersMutation
>;
export type PostInvestorTransfersMutationResult = Apollo.MutationResult<
  ApolloTypes.PostInvestorTransfersMutation
>;
export type PostInvestorTransfersMutationOptions = Apollo.BaseMutationOptions<
  ApolloTypes.PostInvestorTransfersMutation,
  ApolloTypes.PostInvestorTransfersMutationVariables
>;
export const PostInvestorsDocument = /* #__PURE__ */ gql`
  mutation postInvestors(
    $createInvestorRequestInput: CreateInvestorRequestInput
  ) {
    postInvestors(createInvestorRequestInput: $createInvestorRequestInput) {
      investor {
        createdAt
        id
        investorInfo {
          applicantSignature {
            eSigned
          }
          beneficialOwnersAndOfficers {
            beneficialOwners {
              address {
                city
                country
                postalCode
                state
                streetAddress
              }
              dateOfBirth
              identificationNumber
              name {
                familyName
                givenName
                legalName
              }
              socialSecurityNumber
            }
            businessClassification
            officers {
              address {
                city
                country
                postalCode
                state
                streetAddress
              }
              dateOfBirth
              identificationNumber
              name {
                familyName
                givenName
                legalName
              }
              socialSecurityNumber
            }
          }
          birthCountry
          cashAccountAgreement {
            articlesOfIncorporationSnapId
            authorizedOfficerName
            authorizedOfficerTitle
            corporationName
            isAuthorizedOfficerESigned
            isSecretaryESigned
            secretaryName
            stateOfIncorporation
          }
          catAccountHolderType
          citizenshipCountry
          contactInformation {
            city
            country
            emailAddresses
            phone
            phoneType
            postalCode
            state
            streetAddress
          }
          disclosures {
            affiliatedApproval
            companySymbols
            firmName
            interestedParties {
              mailingAddress {
                city
                country
                postalCode
                state
                streetAddress
              }
              name {
                companyName
              }
            }
            isAffiliatedExchangeOrFINRA
            isControlPerson
            isPoliticallyExposed
            politicalExposureDetail {
              immediateFamily
              politicalOrganization
            }
          }
          employment {
            employer
            employmentStatus
            positionEmployed
          }
          entityDueDiligence {
            accountActivity {
              expectedWithdrawalFrequency
              initialDepositAmount
              initialDepositSource
              primaryEntityAccountActivity
              willTransactForeignBonds
              willTransactLowPricedSecurities
            }
            accountInformation {
              accountName
              businessLocations
              countryOfIncorporation
              hasRelatedAccounts
              relatedAccountList {
                accountNumber
                entityName
              }
            }
            additionalAccounts {
              confirmEntityDoesNotIssueBearerShares
              institutionNames
              primaryOngoingFundingSource
              primaryOngoingFundingSourceClarification
              scopeOfBusiness
              scopeOfBusinessClarification
            }
            assessedRiskRating
            entityOrAssociatesHaveNegativeNews
            politicallyExposedPersons {
              isPoliticallyExposed
              politicalOfficials {
                immediateFamily
                legalName
                politicalOrganization
                politicalTitle
                role
              }
            }
          }
          exemptLegalCustomer {
            exemption
            isExemptLegalCustomer
          }
          familyName
          givenName
          investmentProfile {
            annualIncomeUSD
            federalTaxBracketPercent
            investmentExperience
            investmentObjective
            liquidNetWorthUSD
            riskTolerance
            totalNetWorthUSD
          }
          investorType
          isPermanentResident
          issuerDirectCommunication
          llcAccountAgreement {
            authorizedSignerName
            authorizedSignerTitle
            entityName
            isAuthorizedSignerESigned
            membersAndManagers {
              isManager
              isManagerESigned
              legalName
              organizationalRole
            }
            resolutionAdoptionDate
            stateOfOrigin
          }
          organization {
            entityType
            foreignBankUSAgent
            isForeignBank
            isMaintainedForForeignFinancialInstitution
            uploadedWNineForm
            usEntity
          }
          organizationName
          suitabilityProfile {
            liquidityNeeds
            timeHorizon
          }
          title
          trustedContactInfo {
            trustedContact
            trustedContactPerson {
              emailAddress
              familyName
              givenName
            }
          }
          wnineTaxForm {
            exemptPayeeCode
            exemptionFromFatca
          }
        }
        investorType
        metadata
        status
        updatedAt
      }
    }
  }
`;
export type PostInvestorsMutationFn = Apollo.MutationFunction<
  ApolloTypes.PostInvestorsMutation,
  ApolloTypes.PostInvestorsMutationVariables
>;

/**
 * __usePostInvestorsMutation__
 *
 * To run a mutation, you first call `usePostInvestorsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `usePostInvestorsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [postInvestorsMutation, { data, loading, error }] = usePostInvestorsMutation({
 *   variables: {
 *      createInvestorRequestInput: // value for 'createInvestorRequestInput'
 *   },
 * });
 */
export function usePostInvestorsMutation(
  baseOptions?: Apollo.MutationHookOptions<
    ApolloTypes.PostInvestorsMutation,
    ApolloTypes.PostInvestorsMutationVariables
  >
) {
  return Apollo.useMutation<
    ApolloTypes.PostInvestorsMutation,
    ApolloTypes.PostInvestorsMutationVariables
  >(PostInvestorsDocument, baseOptions);
}
export type PostInvestorsMutationHookResult = ReturnType<
  typeof usePostInvestorsMutation
>;
export type PostInvestorsMutationResult = Apollo.MutationResult<
  ApolloTypes.PostInvestorsMutation
>;
export type PostInvestorsMutationOptions = Apollo.BaseMutationOptions<
  ApolloTypes.PostInvestorsMutation,
  ApolloTypes.PostInvestorsMutationVariables
>;
export const PostInvestorsTransfersSearchDocument = /* #__PURE__ */ gql`
  mutation postInvestorsTransfersSearch(
    $searchTransfersRequestInput: SearchTransfersRequestInput
  ) {
    postInvestorsTransfersSearch(
      searchTransfersRequestInput: $searchTransfersRequestInput
    ) {
      transfers {
        accountNumber
        amount
        createdAt
        direction
        linkedBankAccountId
        status
        transferId
        transferMethod
        transferNumber
        updatedAt
      }
    }
  }
`;
export type PostInvestorsTransfersSearchMutationFn = Apollo.MutationFunction<
  ApolloTypes.PostInvestorsTransfersSearchMutation,
  ApolloTypes.PostInvestorsTransfersSearchMutationVariables
>;

/**
 * __usePostInvestorsTransfersSearchMutation__
 *
 * To run a mutation, you first call `usePostInvestorsTransfersSearchMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `usePostInvestorsTransfersSearchMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [postInvestorsTransfersSearchMutation, { data, loading, error }] = usePostInvestorsTransfersSearchMutation({
 *   variables: {
 *      searchTransfersRequestInput: // value for 'searchTransfersRequestInput'
 *   },
 * });
 */
export function usePostInvestorsTransfersSearchMutation(
  baseOptions?: Apollo.MutationHookOptions<
    ApolloTypes.PostInvestorsTransfersSearchMutation,
    ApolloTypes.PostInvestorsTransfersSearchMutationVariables
  >
) {
  return Apollo.useMutation<
    ApolloTypes.PostInvestorsTransfersSearchMutation,
    ApolloTypes.PostInvestorsTransfersSearchMutationVariables
  >(PostInvestorsTransfersSearchDocument, baseOptions);
}
export type PostInvestorsTransfersSearchMutationHookResult = ReturnType<
  typeof usePostInvestorsTransfersSearchMutation
>;
export type PostInvestorsTransfersSearchMutationResult = Apollo.MutationResult<
  ApolloTypes.PostInvestorsTransfersSearchMutation
>;
export type PostInvestorsTransfersSearchMutationOptions = Apollo.BaseMutationOptions<
  ApolloTypes.PostInvestorsTransfersSearchMutation,
  ApolloTypes.PostInvestorsTransfersSearchMutationVariables
>;
export const PostOauthTokenDocument = /* #__PURE__ */ gql`
  mutation postOauthToken(
    $getAccessTokenRequestInput: GetAccessTokenRequestInput
  ) {
    postOauthToken(getAccessTokenRequestInput: $getAccessTokenRequestInput) {
      accessToken
    }
  }
`;
export type PostOauthTokenMutationFn = Apollo.MutationFunction<
  ApolloTypes.PostOauthTokenMutation,
  ApolloTypes.PostOauthTokenMutationVariables
>;

/**
 * __usePostOauthTokenMutation__
 *
 * To run a mutation, you first call `usePostOauthTokenMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `usePostOauthTokenMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [postOauthTokenMutation, { data, loading, error }] = usePostOauthTokenMutation({
 *   variables: {
 *      getAccessTokenRequestInput: // value for 'getAccessTokenRequestInput'
 *   },
 * });
 */
export function usePostOauthTokenMutation(
  baseOptions?: Apollo.MutationHookOptions<
    ApolloTypes.PostOauthTokenMutation,
    ApolloTypes.PostOauthTokenMutationVariables
  >
) {
  return Apollo.useMutation<
    ApolloTypes.PostOauthTokenMutation,
    ApolloTypes.PostOauthTokenMutationVariables
  >(PostOauthTokenDocument, baseOptions);
}
export type PostOauthTokenMutationHookResult = ReturnType<
  typeof usePostOauthTokenMutation
>;
export type PostOauthTokenMutationResult = Apollo.MutationResult<
  ApolloTypes.PostOauthTokenMutation
>;
export type PostOauthTokenMutationOptions = Apollo.BaseMutationOptions<
  ApolloTypes.PostOauthTokenMutation,
  ApolloTypes.PostOauthTokenMutationVariables
>;
export const PostOptimizePortfolioDocument = /* #__PURE__ */ gql`
  mutation postOptimizePortfolio(
    $optimizePortfolioRequestInput: OptimizePortfolioRequestInput
  ) {
    postOptimizePortfolio(
      optimizePortfolioRequestInput: $optimizePortfolioRequestInput
    ) {
      orders {
        assetId
        comment
        direction
        fullFillRequired
        goodTillCancel
        metadata
        orderId
        positionId
        priceLimit
        quantity
        spotPrice
      }
      portfolio {
        accountNumber
        app
        createdAt
        currency
        description
        id
        metadata
        name
        positions {
          assetId
          costBasis
          createdAt
          id
          metadata
          portfolioId
          quantity
          settled
          tradeDate
          unsettled
          updatedAt
        }
        status
        updatedAt
      }
    }
  }
`;
export type PostOptimizePortfolioMutationFn = Apollo.MutationFunction<
  ApolloTypes.PostOptimizePortfolioMutation,
  ApolloTypes.PostOptimizePortfolioMutationVariables
>;

/**
 * __usePostOptimizePortfolioMutation__
 *
 * To run a mutation, you first call `usePostOptimizePortfolioMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `usePostOptimizePortfolioMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [postOptimizePortfolioMutation, { data, loading, error }] = usePostOptimizePortfolioMutation({
 *   variables: {
 *      optimizePortfolioRequestInput: // value for 'optimizePortfolioRequestInput'
 *   },
 * });
 */
export function usePostOptimizePortfolioMutation(
  baseOptions?: Apollo.MutationHookOptions<
    ApolloTypes.PostOptimizePortfolioMutation,
    ApolloTypes.PostOptimizePortfolioMutationVariables
  >
) {
  return Apollo.useMutation<
    ApolloTypes.PostOptimizePortfolioMutation,
    ApolloTypes.PostOptimizePortfolioMutationVariables
  >(PostOptimizePortfolioDocument, baseOptions);
}
export type PostOptimizePortfolioMutationHookResult = ReturnType<
  typeof usePostOptimizePortfolioMutation
>;
export type PostOptimizePortfolioMutationResult = Apollo.MutationResult<
  ApolloTypes.PostOptimizePortfolioMutation
>;
export type PostOptimizePortfolioMutationOptions = Apollo.BaseMutationOptions<
  ApolloTypes.PostOptimizePortfolioMutation,
  ApolloTypes.PostOptimizePortfolioMutationVariables
>;
export const PostOrdersDocument = /* #__PURE__ */ gql`
  mutation postOrders(
    $createTrafixOrderRequestInput: CreateTrafixOrderRequestInput
  ) {
    postOrders(createTrafixOrderRequestInput: $createTrafixOrderRequestInput) {
      trafixOrder {
        assetId
        createdAt
        direction
        fill
        fullFillRequired
        goodTillCancel
        orderId
        portfolioId
        priceLimit
        quantity
        reason
        status
        ticker
        trafixOrderId
        updatedAt
      }
    }
  }
`;
export type PostOrdersMutationFn = Apollo.MutationFunction<
  ApolloTypes.PostOrdersMutation,
  ApolloTypes.PostOrdersMutationVariables
>;

/**
 * __usePostOrdersMutation__
 *
 * To run a mutation, you first call `usePostOrdersMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `usePostOrdersMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [postOrdersMutation, { data, loading, error }] = usePostOrdersMutation({
 *   variables: {
 *      createTrafixOrderRequestInput: // value for 'createTrafixOrderRequestInput'
 *   },
 * });
 */
export function usePostOrdersMutation(
  baseOptions?: Apollo.MutationHookOptions<
    ApolloTypes.PostOrdersMutation,
    ApolloTypes.PostOrdersMutationVariables
  >
) {
  return Apollo.useMutation<
    ApolloTypes.PostOrdersMutation,
    ApolloTypes.PostOrdersMutationVariables
  >(PostOrdersDocument, baseOptions);
}
export type PostOrdersMutationHookResult = ReturnType<
  typeof usePostOrdersMutation
>;
export type PostOrdersMutationResult = Apollo.MutationResult<
  ApolloTypes.PostOrdersMutation
>;
export type PostOrdersMutationOptions = Apollo.BaseMutationOptions<
  ApolloTypes.PostOrdersMutation,
  ApolloTypes.PostOrdersMutationVariables
>;
export const PostOrdersSearchDocument = /* #__PURE__ */ gql`
  mutation postOrdersSearch(
    $searchOrdersRequestInput: SearchOrdersRequestInput
  ) {
    postOrdersSearch(searchOrdersRequestInput: $searchOrdersRequestInput) {
      orders {
        assetId
        assignedTo
        comment
        createdAt
        filled
        fullFillRequired
        goodTillCancel
        id
        metadata
        portfolioId
        priceLimit
        quantity
        spotPrice
        status
        updatedAt
      }
    }
  }
`;
export type PostOrdersSearchMutationFn = Apollo.MutationFunction<
  ApolloTypes.PostOrdersSearchMutation,
  ApolloTypes.PostOrdersSearchMutationVariables
>;

/**
 * __usePostOrdersSearchMutation__
 *
 * To run a mutation, you first call `usePostOrdersSearchMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `usePostOrdersSearchMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [postOrdersSearchMutation, { data, loading, error }] = usePostOrdersSearchMutation({
 *   variables: {
 *      searchOrdersRequestInput: // value for 'searchOrdersRequestInput'
 *   },
 * });
 */
export function usePostOrdersSearchMutation(
  baseOptions?: Apollo.MutationHookOptions<
    ApolloTypes.PostOrdersSearchMutation,
    ApolloTypes.PostOrdersSearchMutationVariables
  >
) {
  return Apollo.useMutation<
    ApolloTypes.PostOrdersSearchMutation,
    ApolloTypes.PostOrdersSearchMutationVariables
  >(PostOrdersSearchDocument, baseOptions);
}
export type PostOrdersSearchMutationHookResult = ReturnType<
  typeof usePostOrdersSearchMutation
>;
export type PostOrdersSearchMutationResult = Apollo.MutationResult<
  ApolloTypes.PostOrdersSearchMutation
>;
export type PostOrdersSearchMutationOptions = Apollo.BaseMutationOptions<
  ApolloTypes.PostOrdersSearchMutation,
  ApolloTypes.PostOrdersSearchMutationVariables
>;
export const PostPortfolioCloseDocument = /* #__PURE__ */ gql`
  mutation postPortfolioClose(
    $closePortfolioRequestInput: ClosePortfolioRequestInput
    $institution: String!
    $portfolioId: String!
  ) {
    postPortfolioClose(
      closePortfolioRequestInput: $closePortfolioRequestInput
      institution: $institution
      portfolioId: $portfolioId
    ) {
      closed
      timestamp
    }
  }
`;
export type PostPortfolioCloseMutationFn = Apollo.MutationFunction<
  ApolloTypes.PostPortfolioCloseMutation,
  ApolloTypes.PostPortfolioCloseMutationVariables
>;

/**
 * __usePostPortfolioCloseMutation__
 *
 * To run a mutation, you first call `usePostPortfolioCloseMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `usePostPortfolioCloseMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [postPortfolioCloseMutation, { data, loading, error }] = usePostPortfolioCloseMutation({
 *   variables: {
 *      closePortfolioRequestInput: // value for 'closePortfolioRequestInput'
 *      institution: // value for 'institution'
 *      portfolioId: // value for 'portfolioId'
 *   },
 * });
 */
export function usePostPortfolioCloseMutation(
  baseOptions?: Apollo.MutationHookOptions<
    ApolloTypes.PostPortfolioCloseMutation,
    ApolloTypes.PostPortfolioCloseMutationVariables
  >
) {
  return Apollo.useMutation<
    ApolloTypes.PostPortfolioCloseMutation,
    ApolloTypes.PostPortfolioCloseMutationVariables
  >(PostPortfolioCloseDocument, baseOptions);
}
export type PostPortfolioCloseMutationHookResult = ReturnType<
  typeof usePostPortfolioCloseMutation
>;
export type PostPortfolioCloseMutationResult = Apollo.MutationResult<
  ApolloTypes.PostPortfolioCloseMutation
>;
export type PostPortfolioCloseMutationOptions = Apollo.BaseMutationOptions<
  ApolloTypes.PostPortfolioCloseMutation,
  ApolloTypes.PostPortfolioCloseMutationVariables
>;
export const PostPortfolioDeliveryInstructionDocument = /* #__PURE__ */ gql`
  mutation postPortfolioDeliveryInstruction(
    $createPortfolioDeliveryInstructionRequestInput: CreatePortfolioDeliveryInstructionRequestInput
    $portfolioId: String!
  ) {
    postPortfolioDeliveryInstruction(
      createPortfolioDeliveryInstructionRequestInput: $createPortfolioDeliveryInstructionRequestInput
      portfolioId: $portfolioId
    ) {
      portfolioDeliveryInstruction {
        cashOnly
        createdAt
        id
        instructions {
          externalEntityId
          externalEntityType
        }
        investorId
        metadata
        portfolioId
        updatedAt
      }
    }
  }
`;
export type PostPortfolioDeliveryInstructionMutationFn = Apollo.MutationFunction<
  ApolloTypes.PostPortfolioDeliveryInstructionMutation,
  ApolloTypes.PostPortfolioDeliveryInstructionMutationVariables
>;

/**
 * __usePostPortfolioDeliveryInstructionMutation__
 *
 * To run a mutation, you first call `usePostPortfolioDeliveryInstructionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `usePostPortfolioDeliveryInstructionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [postPortfolioDeliveryInstructionMutation, { data, loading, error }] = usePostPortfolioDeliveryInstructionMutation({
 *   variables: {
 *      createPortfolioDeliveryInstructionRequestInput: // value for 'createPortfolioDeliveryInstructionRequestInput'
 *      portfolioId: // value for 'portfolioId'
 *   },
 * });
 */
export function usePostPortfolioDeliveryInstructionMutation(
  baseOptions?: Apollo.MutationHookOptions<
    ApolloTypes.PostPortfolioDeliveryInstructionMutation,
    ApolloTypes.PostPortfolioDeliveryInstructionMutationVariables
  >
) {
  return Apollo.useMutation<
    ApolloTypes.PostPortfolioDeliveryInstructionMutation,
    ApolloTypes.PostPortfolioDeliveryInstructionMutationVariables
  >(PostPortfolioDeliveryInstructionDocument, baseOptions);
}
export type PostPortfolioDeliveryInstructionMutationHookResult = ReturnType<
  typeof usePostPortfolioDeliveryInstructionMutation
>;
export type PostPortfolioDeliveryInstructionMutationResult = Apollo.MutationResult<
  ApolloTypes.PostPortfolioDeliveryInstructionMutation
>;
export type PostPortfolioDeliveryInstructionMutationOptions = Apollo.BaseMutationOptions<
  ApolloTypes.PostPortfolioDeliveryInstructionMutation,
  ApolloTypes.PostPortfolioDeliveryInstructionMutationVariables
>;
export const PostPortfolioFundTransferSettleDocument = /* #__PURE__ */ gql`
  mutation postPortfolioFundTransferSettle(
    $id: String!
    $ledgerEntryId: String!
    $settleFundTransferRequestInput: SettleFundTransferRequestInput
  ) {
    postPortfolioFundTransferSettle(
      id: $id
      ledgerEntryId: $ledgerEntryId
      settleFundTransferRequestInput: $settleFundTransferRequestInput
    ) {
      ledgerEntry {
        accountNumber
        assetId
        comment
        counterPartyId
        createdAt
        fee
        id
        metadata
        orderId
        portfolioId
        quantity
        relatedPositions {
          positionId
          quantity
        }
        status
        tradeId
        tradePrice
        updatedAt
      }
    }
  }
`;
export type PostPortfolioFundTransferSettleMutationFn = Apollo.MutationFunction<
  ApolloTypes.PostPortfolioFundTransferSettleMutation,
  ApolloTypes.PostPortfolioFundTransferSettleMutationVariables
>;

/**
 * __usePostPortfolioFundTransferSettleMutation__
 *
 * To run a mutation, you first call `usePostPortfolioFundTransferSettleMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `usePostPortfolioFundTransferSettleMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [postPortfolioFundTransferSettleMutation, { data, loading, error }] = usePostPortfolioFundTransferSettleMutation({
 *   variables: {
 *      id: // value for 'id'
 *      ledgerEntryId: // value for 'ledgerEntryId'
 *      settleFundTransferRequestInput: // value for 'settleFundTransferRequestInput'
 *   },
 * });
 */
export function usePostPortfolioFundTransferSettleMutation(
  baseOptions?: Apollo.MutationHookOptions<
    ApolloTypes.PostPortfolioFundTransferSettleMutation,
    ApolloTypes.PostPortfolioFundTransferSettleMutationVariables
  >
) {
  return Apollo.useMutation<
    ApolloTypes.PostPortfolioFundTransferSettleMutation,
    ApolloTypes.PostPortfolioFundTransferSettleMutationVariables
  >(PostPortfolioFundTransferSettleDocument, baseOptions);
}
export type PostPortfolioFundTransferSettleMutationHookResult = ReturnType<
  typeof usePostPortfolioFundTransferSettleMutation
>;
export type PostPortfolioFundTransferSettleMutationResult = Apollo.MutationResult<
  ApolloTypes.PostPortfolioFundTransferSettleMutation
>;
export type PostPortfolioFundTransferSettleMutationOptions = Apollo.BaseMutationOptions<
  ApolloTypes.PostPortfolioFundTransferSettleMutation,
  ApolloTypes.PostPortfolioFundTransferSettleMutationVariables
>;
export const PostPortfolioFundTransfersDocument = /* #__PURE__ */ gql`
  mutation postPortfolioFundTransfers(
    $createFundTransferRequestInput: CreateFundTransferRequestInput
    $id: String!
  ) {
    postPortfolioFundTransfers(
      createFundTransferRequestInput: $createFundTransferRequestInput
      id: $id
    ) {
      accepted
      ledgerEntry {
        accountNumber
        assetId
        comment
        counterPartyId
        createdAt
        fee
        id
        metadata
        orderId
        portfolioId
        quantity
        relatedPositions {
          positionId
          quantity
        }
        status
        tradeId
        tradePrice
        updatedAt
      }
    }
  }
`;
export type PostPortfolioFundTransfersMutationFn = Apollo.MutationFunction<
  ApolloTypes.PostPortfolioFundTransfersMutation,
  ApolloTypes.PostPortfolioFundTransfersMutationVariables
>;

/**
 * __usePostPortfolioFundTransfersMutation__
 *
 * To run a mutation, you first call `usePostPortfolioFundTransfersMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `usePostPortfolioFundTransfersMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [postPortfolioFundTransfersMutation, { data, loading, error }] = usePostPortfolioFundTransfersMutation({
 *   variables: {
 *      createFundTransferRequestInput: // value for 'createFundTransferRequestInput'
 *      id: // value for 'id'
 *   },
 * });
 */
export function usePostPortfolioFundTransfersMutation(
  baseOptions?: Apollo.MutationHookOptions<
    ApolloTypes.PostPortfolioFundTransfersMutation,
    ApolloTypes.PostPortfolioFundTransfersMutationVariables
  >
) {
  return Apollo.useMutation<
    ApolloTypes.PostPortfolioFundTransfersMutation,
    ApolloTypes.PostPortfolioFundTransfersMutationVariables
  >(PostPortfolioFundTransfersDocument, baseOptions);
}
export type PostPortfolioFundTransfersMutationHookResult = ReturnType<
  typeof usePostPortfolioFundTransfersMutation
>;
export type PostPortfolioFundTransfersMutationResult = Apollo.MutationResult<
  ApolloTypes.PostPortfolioFundTransfersMutation
>;
export type PostPortfolioFundTransfersMutationOptions = Apollo.BaseMutationOptions<
  ApolloTypes.PostPortfolioFundTransfersMutation,
  ApolloTypes.PostPortfolioFundTransfersMutationVariables
>;
export const PostPortfolioMappingDocument = /* #__PURE__ */ gql`
  mutation postPortfolioMapping(
    $createOrReplacePortfolioMappingRequestInput: CreateOrReplacePortfolioMappingRequestInput
    $portfolioId: String!
  ) {
    postPortfolioMapping(
      createOrReplacePortfolioMappingRequestInput: $createOrReplacePortfolioMappingRequestInput
      portfolioId: $portfolioId
    ) {
      created
      updated
    }
  }
`;
export type PostPortfolioMappingMutationFn = Apollo.MutationFunction<
  ApolloTypes.PostPortfolioMappingMutation,
  ApolloTypes.PostPortfolioMappingMutationVariables
>;

/**
 * __usePostPortfolioMappingMutation__
 *
 * To run a mutation, you first call `usePostPortfolioMappingMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `usePostPortfolioMappingMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [postPortfolioMappingMutation, { data, loading, error }] = usePostPortfolioMappingMutation({
 *   variables: {
 *      createOrReplacePortfolioMappingRequestInput: // value for 'createOrReplacePortfolioMappingRequestInput'
 *      portfolioId: // value for 'portfolioId'
 *   },
 * });
 */
export function usePostPortfolioMappingMutation(
  baseOptions?: Apollo.MutationHookOptions<
    ApolloTypes.PostPortfolioMappingMutation,
    ApolloTypes.PostPortfolioMappingMutationVariables
  >
) {
  return Apollo.useMutation<
    ApolloTypes.PostPortfolioMappingMutation,
    ApolloTypes.PostPortfolioMappingMutationVariables
  >(PostPortfolioMappingDocument, baseOptions);
}
export type PostPortfolioMappingMutationHookResult = ReturnType<
  typeof usePostPortfolioMappingMutation
>;
export type PostPortfolioMappingMutationResult = Apollo.MutationResult<
  ApolloTypes.PostPortfolioMappingMutation
>;
export type PostPortfolioMappingMutationOptions = Apollo.BaseMutationOptions<
  ApolloTypes.PostPortfolioMappingMutation,
  ApolloTypes.PostPortfolioMappingMutationVariables
>;
export const PostPortfolioOrdersDocument = /* #__PURE__ */ gql`
  mutation postPortfolioOrders(
    $createOrderRequestInput: CreateOrderRequestInput
    $portfolioId: String!
  ) {
    postPortfolioOrders(
      createOrderRequestInput: $createOrderRequestInput
      portfolioId: $portfolioId
    ) {
      order {
        assetId
        assignedTo
        comment
        createdAt
        filled
        fullFillRequired
        goodTillCancel
        id
        metadata
        portfolioId
        priceLimit
        quantity
        spotPrice
        status
        updatedAt
      }
    }
  }
`;
export type PostPortfolioOrdersMutationFn = Apollo.MutationFunction<
  ApolloTypes.PostPortfolioOrdersMutation,
  ApolloTypes.PostPortfolioOrdersMutationVariables
>;

/**
 * __usePostPortfolioOrdersMutation__
 *
 * To run a mutation, you first call `usePostPortfolioOrdersMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `usePostPortfolioOrdersMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [postPortfolioOrdersMutation, { data, loading, error }] = usePostPortfolioOrdersMutation({
 *   variables: {
 *      createOrderRequestInput: // value for 'createOrderRequestInput'
 *      portfolioId: // value for 'portfolioId'
 *   },
 * });
 */
export function usePostPortfolioOrdersMutation(
  baseOptions?: Apollo.MutationHookOptions<
    ApolloTypes.PostPortfolioOrdersMutation,
    ApolloTypes.PostPortfolioOrdersMutationVariables
  >
) {
  return Apollo.useMutation<
    ApolloTypes.PostPortfolioOrdersMutation,
    ApolloTypes.PostPortfolioOrdersMutationVariables
  >(PostPortfolioOrdersDocument, baseOptions);
}
export type PostPortfolioOrdersMutationHookResult = ReturnType<
  typeof usePostPortfolioOrdersMutation
>;
export type PostPortfolioOrdersMutationResult = Apollo.MutationResult<
  ApolloTypes.PostPortfolioOrdersMutation
>;
export type PostPortfolioOrdersMutationOptions = Apollo.BaseMutationOptions<
  ApolloTypes.PostPortfolioOrdersMutation,
  ApolloTypes.PostPortfolioOrdersMutationVariables
>;
export const PostPortfolioOrdersRebalanceDocument = /* #__PURE__ */ gql`
  mutation postPortfolioOrdersRebalance(
    $portfolioId: String!
    $rebalanceOrdersRequestInput: RebalanceOrdersRequestInput
  ) {
    postPortfolioOrdersRebalance(
      portfolioId: $portfolioId
      rebalanceOrdersRequestInput: $rebalanceOrdersRequestInput
    ) {
      errors
      placedOrders {
        assetId
        assignedTo
        comment
        createdAt
        filled
        fullFillRequired
        goodTillCancel
        id
        metadata
        portfolioId
        priceLimit
        quantity
        spotPrice
        status
        updatedAt
      }
      stagedOrders {
        assetId
        assignedTo
        comment
        createdAt
        filled
        fullFillRequired
        goodTillCancel
        id
        metadata
        portfolioId
        priceLimit
        quantity
        spotPrice
        status
        updatedAt
      }
    }
  }
`;
export type PostPortfolioOrdersRebalanceMutationFn = Apollo.MutationFunction<
  ApolloTypes.PostPortfolioOrdersRebalanceMutation,
  ApolloTypes.PostPortfolioOrdersRebalanceMutationVariables
>;

/**
 * __usePostPortfolioOrdersRebalanceMutation__
 *
 * To run a mutation, you first call `usePostPortfolioOrdersRebalanceMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `usePostPortfolioOrdersRebalanceMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [postPortfolioOrdersRebalanceMutation, { data, loading, error }] = usePostPortfolioOrdersRebalanceMutation({
 *   variables: {
 *      portfolioId: // value for 'portfolioId'
 *      rebalanceOrdersRequestInput: // value for 'rebalanceOrdersRequestInput'
 *   },
 * });
 */
export function usePostPortfolioOrdersRebalanceMutation(
  baseOptions?: Apollo.MutationHookOptions<
    ApolloTypes.PostPortfolioOrdersRebalanceMutation,
    ApolloTypes.PostPortfolioOrdersRebalanceMutationVariables
  >
) {
  return Apollo.useMutation<
    ApolloTypes.PostPortfolioOrdersRebalanceMutation,
    ApolloTypes.PostPortfolioOrdersRebalanceMutationVariables
  >(PostPortfolioOrdersRebalanceDocument, baseOptions);
}
export type PostPortfolioOrdersRebalanceMutationHookResult = ReturnType<
  typeof usePostPortfolioOrdersRebalanceMutation
>;
export type PostPortfolioOrdersRebalanceMutationResult = Apollo.MutationResult<
  ApolloTypes.PostPortfolioOrdersRebalanceMutation
>;
export type PostPortfolioOrdersRebalanceMutationOptions = Apollo.BaseMutationOptions<
  ApolloTypes.PostPortfolioOrdersRebalanceMutation,
  ApolloTypes.PostPortfolioOrdersRebalanceMutationVariables
>;
export const PostPortfolioPreferencesDocument = /* #__PURE__ */ gql`
  mutation postPortfolioPreferences(
    $portfolioId: String!
    $putPreferencesRequestInput: PutPreferencesRequestInput
  ) {
    postPortfolioPreferences(
      portfolioId: $portfolioId
      putPreferencesRequestInput: $putPreferencesRequestInput
    )
  }
`;
export type PostPortfolioPreferencesMutationFn = Apollo.MutationFunction<
  ApolloTypes.PostPortfolioPreferencesMutation,
  ApolloTypes.PostPortfolioPreferencesMutationVariables
>;

/**
 * __usePostPortfolioPreferencesMutation__
 *
 * To run a mutation, you first call `usePostPortfolioPreferencesMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `usePostPortfolioPreferencesMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [postPortfolioPreferencesMutation, { data, loading, error }] = usePostPortfolioPreferencesMutation({
 *   variables: {
 *      portfolioId: // value for 'portfolioId'
 *      putPreferencesRequestInput: // value for 'putPreferencesRequestInput'
 *   },
 * });
 */
export function usePostPortfolioPreferencesMutation(
  baseOptions?: Apollo.MutationHookOptions<
    ApolloTypes.PostPortfolioPreferencesMutation,
    ApolloTypes.PostPortfolioPreferencesMutationVariables
  >
) {
  return Apollo.useMutation<
    ApolloTypes.PostPortfolioPreferencesMutation,
    ApolloTypes.PostPortfolioPreferencesMutationVariables
  >(PostPortfolioPreferencesDocument, baseOptions);
}
export type PostPortfolioPreferencesMutationHookResult = ReturnType<
  typeof usePostPortfolioPreferencesMutation
>;
export type PostPortfolioPreferencesMutationResult = Apollo.MutationResult<
  ApolloTypes.PostPortfolioPreferencesMutation
>;
export type PostPortfolioPreferencesMutationOptions = Apollo.BaseMutationOptions<
  ApolloTypes.PostPortfolioPreferencesMutation,
  ApolloTypes.PostPortfolioPreferencesMutationVariables
>;
export const PostPortfolioTradeSettleDocument = /* #__PURE__ */ gql`
  mutation postPortfolioTradeSettle(
    $id: String!
    $portfolioId: String!
    $settleTradeRequestInput: SettleTradeRequestInput
  ) {
    postPortfolioTradeSettle(
      id: $id
      portfolioId: $portfolioId
      settleTradeRequestInput: $settleTradeRequestInput
    ) {
      ledgerEntries {
        accountNumber
        assetId
        comment
        counterPartyId
        createdAt
        fee
        id
        metadata
        orderId
        portfolioId
        quantity
        relatedPositions {
          positionId
          quantity
        }
        status
        tradeId
        tradePrice
        updatedAt
      }
    }
  }
`;
export type PostPortfolioTradeSettleMutationFn = Apollo.MutationFunction<
  ApolloTypes.PostPortfolioTradeSettleMutation,
  ApolloTypes.PostPortfolioTradeSettleMutationVariables
>;

/**
 * __usePostPortfolioTradeSettleMutation__
 *
 * To run a mutation, you first call `usePostPortfolioTradeSettleMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `usePostPortfolioTradeSettleMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [postPortfolioTradeSettleMutation, { data, loading, error }] = usePostPortfolioTradeSettleMutation({
 *   variables: {
 *      id: // value for 'id'
 *      portfolioId: // value for 'portfolioId'
 *      settleTradeRequestInput: // value for 'settleTradeRequestInput'
 *   },
 * });
 */
export function usePostPortfolioTradeSettleMutation(
  baseOptions?: Apollo.MutationHookOptions<
    ApolloTypes.PostPortfolioTradeSettleMutation,
    ApolloTypes.PostPortfolioTradeSettleMutationVariables
  >
) {
  return Apollo.useMutation<
    ApolloTypes.PostPortfolioTradeSettleMutation,
    ApolloTypes.PostPortfolioTradeSettleMutationVariables
  >(PostPortfolioTradeSettleDocument, baseOptions);
}
export type PostPortfolioTradeSettleMutationHookResult = ReturnType<
  typeof usePostPortfolioTradeSettleMutation
>;
export type PostPortfolioTradeSettleMutationResult = Apollo.MutationResult<
  ApolloTypes.PostPortfolioTradeSettleMutation
>;
export type PostPortfolioTradeSettleMutationOptions = Apollo.BaseMutationOptions<
  ApolloTypes.PostPortfolioTradeSettleMutation,
  ApolloTypes.PostPortfolioTradeSettleMutationVariables
>;
export const PostPortfolioTradesDocument = /* #__PURE__ */ gql`
  mutation postPortfolioTrades(
    $createTradeRequestInput: CreateTradeRequestInput
    $portfolioId: String!
  ) {
    postPortfolioTrades(
      createTradeRequestInput: $createTradeRequestInput
      portfolioId: $portfolioId
    ) {
      ledgerEntries {
        accountNumber
        assetId
        comment
        counterPartyId
        createdAt
        fee
        id
        metadata
        orderId
        portfolioId
        quantity
        relatedPositions {
          positionId
          quantity
        }
        status
        tradeId
        tradePrice
        updatedAt
      }
    }
  }
`;
export type PostPortfolioTradesMutationFn = Apollo.MutationFunction<
  ApolloTypes.PostPortfolioTradesMutation,
  ApolloTypes.PostPortfolioTradesMutationVariables
>;

/**
 * __usePostPortfolioTradesMutation__
 *
 * To run a mutation, you first call `usePostPortfolioTradesMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `usePostPortfolioTradesMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [postPortfolioTradesMutation, { data, loading, error }] = usePostPortfolioTradesMutation({
 *   variables: {
 *      createTradeRequestInput: // value for 'createTradeRequestInput'
 *      portfolioId: // value for 'portfolioId'
 *   },
 * });
 */
export function usePostPortfolioTradesMutation(
  baseOptions?: Apollo.MutationHookOptions<
    ApolloTypes.PostPortfolioTradesMutation,
    ApolloTypes.PostPortfolioTradesMutationVariables
  >
) {
  return Apollo.useMutation<
    ApolloTypes.PostPortfolioTradesMutation,
    ApolloTypes.PostPortfolioTradesMutationVariables
  >(PostPortfolioTradesDocument, baseOptions);
}
export type PostPortfolioTradesMutationHookResult = ReturnType<
  typeof usePostPortfolioTradesMutation
>;
export type PostPortfolioTradesMutationResult = Apollo.MutationResult<
  ApolloTypes.PostPortfolioTradesMutation
>;
export type PostPortfolioTradesMutationOptions = Apollo.BaseMutationOptions<
  ApolloTypes.PostPortfolioTradesMutation,
  ApolloTypes.PostPortfolioTradesMutationVariables
>;
export const PostPortfoliosDocument = /* #__PURE__ */ gql`
  mutation postPortfolios(
    $createPortfolioRequestInput: CreatePortfolioRequestInput
  ) {
    postPortfolios(createPortfolioRequestInput: $createPortfolioRequestInput) {
      portfolio {
        accountNumber
        app
        createdAt
        currency
        description
        id
        metadata
        name
        positions {
          assetId
          costBasis
          createdAt
          id
          metadata
          portfolioId
          quantity
          settled
          tradeDate
          unsettled
          updatedAt
        }
        status
        updatedAt
      }
    }
  }
`;
export type PostPortfoliosMutationFn = Apollo.MutationFunction<
  ApolloTypes.PostPortfoliosMutation,
  ApolloTypes.PostPortfoliosMutationVariables
>;

/**
 * __usePostPortfoliosMutation__
 *
 * To run a mutation, you first call `usePostPortfoliosMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `usePostPortfoliosMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [postPortfoliosMutation, { data, loading, error }] = usePostPortfoliosMutation({
 *   variables: {
 *      createPortfolioRequestInput: // value for 'createPortfolioRequestInput'
 *   },
 * });
 */
export function usePostPortfoliosMutation(
  baseOptions?: Apollo.MutationHookOptions<
    ApolloTypes.PostPortfoliosMutation,
    ApolloTypes.PostPortfoliosMutationVariables
  >
) {
  return Apollo.useMutation<
    ApolloTypes.PostPortfoliosMutation,
    ApolloTypes.PostPortfoliosMutationVariables
  >(PostPortfoliosDocument, baseOptions);
}
export type PostPortfoliosMutationHookResult = ReturnType<
  typeof usePostPortfoliosMutation
>;
export type PostPortfoliosMutationResult = Apollo.MutationResult<
  ApolloTypes.PostPortfoliosMutation
>;
export type PostPortfoliosMutationOptions = Apollo.BaseMutationOptions<
  ApolloTypes.PostPortfoliosMutation,
  ApolloTypes.PostPortfoliosMutationVariables
>;
export const PostPortfoliosCalculateRiskDocument = /* #__PURE__ */ gql`
  mutation postPortfoliosCalculateRisk(
    $calculatePortfolioRiskRequestInput: CalculatePortfolioRiskRequestInput
    $calculateVar: Boolean
  ) {
    postPortfoliosCalculateRisk(
      calculatePortfolioRiskRequestInput: $calculatePortfolioRiskRequestInput
      calculateVar: $calculateVar
    ) {
      risk
      var {
        confidence
        timePeriodAmount
        timePeriodUnits
        units
        value
      }
    }
  }
`;
export type PostPortfoliosCalculateRiskMutationFn = Apollo.MutationFunction<
  ApolloTypes.PostPortfoliosCalculateRiskMutation,
  ApolloTypes.PostPortfoliosCalculateRiskMutationVariables
>;

/**
 * __usePostPortfoliosCalculateRiskMutation__
 *
 * To run a mutation, you first call `usePostPortfoliosCalculateRiskMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `usePostPortfoliosCalculateRiskMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [postPortfoliosCalculateRiskMutation, { data, loading, error }] = usePostPortfoliosCalculateRiskMutation({
 *   variables: {
 *      calculatePortfolioRiskRequestInput: // value for 'calculatePortfolioRiskRequestInput'
 *      calculateVar: // value for 'calculateVar'
 *   },
 * });
 */
export function usePostPortfoliosCalculateRiskMutation(
  baseOptions?: Apollo.MutationHookOptions<
    ApolloTypes.PostPortfoliosCalculateRiskMutation,
    ApolloTypes.PostPortfoliosCalculateRiskMutationVariables
  >
) {
  return Apollo.useMutation<
    ApolloTypes.PostPortfoliosCalculateRiskMutation,
    ApolloTypes.PostPortfoliosCalculateRiskMutationVariables
  >(PostPortfoliosCalculateRiskDocument, baseOptions);
}
export type PostPortfoliosCalculateRiskMutationHookResult = ReturnType<
  typeof usePostPortfoliosCalculateRiskMutation
>;
export type PostPortfoliosCalculateRiskMutationResult = Apollo.MutationResult<
  ApolloTypes.PostPortfoliosCalculateRiskMutation
>;
export type PostPortfoliosCalculateRiskMutationOptions = Apollo.BaseMutationOptions<
  ApolloTypes.PostPortfoliosCalculateRiskMutation,
  ApolloTypes.PostPortfoliosCalculateRiskMutationVariables
>;
export const PostPortfoliosCovariancesDocument = /* #__PURE__ */ gql`
  mutation postPortfoliosCovariances(
    $getPortfolioCovariancesRequestInput: GetPortfolioCovariancesRequestInput
  ) {
    postPortfoliosCovariances(
      getPortfolioCovariancesRequestInput: $getPortfolioCovariancesRequestInput
    ) {
      matrix
      portfolioIds
    }
  }
`;
export type PostPortfoliosCovariancesMutationFn = Apollo.MutationFunction<
  ApolloTypes.PostPortfoliosCovariancesMutation,
  ApolloTypes.PostPortfoliosCovariancesMutationVariables
>;

/**
 * __usePostPortfoliosCovariancesMutation__
 *
 * To run a mutation, you first call `usePostPortfoliosCovariancesMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `usePostPortfoliosCovariancesMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [postPortfoliosCovariancesMutation, { data, loading, error }] = usePostPortfoliosCovariancesMutation({
 *   variables: {
 *      getPortfolioCovariancesRequestInput: // value for 'getPortfolioCovariancesRequestInput'
 *   },
 * });
 */
export function usePostPortfoliosCovariancesMutation(
  baseOptions?: Apollo.MutationHookOptions<
    ApolloTypes.PostPortfoliosCovariancesMutation,
    ApolloTypes.PostPortfoliosCovariancesMutationVariables
  >
) {
  return Apollo.useMutation<
    ApolloTypes.PostPortfoliosCovariancesMutation,
    ApolloTypes.PostPortfoliosCovariancesMutationVariables
  >(PostPortfoliosCovariancesDocument, baseOptions);
}
export type PostPortfoliosCovariancesMutationHookResult = ReturnType<
  typeof usePostPortfoliosCovariancesMutation
>;
export type PostPortfoliosCovariancesMutationResult = Apollo.MutationResult<
  ApolloTypes.PostPortfoliosCovariancesMutation
>;
export type PostPortfoliosCovariancesMutationOptions = Apollo.BaseMutationOptions<
  ApolloTypes.PostPortfoliosCovariancesMutation,
  ApolloTypes.PostPortfoliosCovariancesMutationVariables
>;
export const PostPortfoliosDeliveryInstructionSearchDocument = /* #__PURE__ */ gql`
  mutation postPortfoliosDeliveryInstructionSearch(
    $searchPorfolioDeliveryInstructionsRequestInput: SearchPorfolioDeliveryInstructionsRequestInput
  ) {
    postPortfoliosDeliveryInstructionSearch(
      searchPorfolioDeliveryInstructionsRequestInput: $searchPorfolioDeliveryInstructionsRequestInput
    ) {
      deliveryInstructions {
        cashOnly
        createdAt
        id
        instructions {
          externalEntityId
          externalEntityType
        }
        investorId
        metadata
        portfolioId
        updatedAt
      }
    }
  }
`;
export type PostPortfoliosDeliveryInstructionSearchMutationFn = Apollo.MutationFunction<
  ApolloTypes.PostPortfoliosDeliveryInstructionSearchMutation,
  ApolloTypes.PostPortfoliosDeliveryInstructionSearchMutationVariables
>;

/**
 * __usePostPortfoliosDeliveryInstructionSearchMutation__
 *
 * To run a mutation, you first call `usePostPortfoliosDeliveryInstructionSearchMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `usePostPortfoliosDeliveryInstructionSearchMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [postPortfoliosDeliveryInstructionSearchMutation, { data, loading, error }] = usePostPortfoliosDeliveryInstructionSearchMutation({
 *   variables: {
 *      searchPorfolioDeliveryInstructionsRequestInput: // value for 'searchPorfolioDeliveryInstructionsRequestInput'
 *   },
 * });
 */
export function usePostPortfoliosDeliveryInstructionSearchMutation(
  baseOptions?: Apollo.MutationHookOptions<
    ApolloTypes.PostPortfoliosDeliveryInstructionSearchMutation,
    ApolloTypes.PostPortfoliosDeliveryInstructionSearchMutationVariables
  >
) {
  return Apollo.useMutation<
    ApolloTypes.PostPortfoliosDeliveryInstructionSearchMutation,
    ApolloTypes.PostPortfoliosDeliveryInstructionSearchMutationVariables
  >(PostPortfoliosDeliveryInstructionSearchDocument, baseOptions);
}
export type PostPortfoliosDeliveryInstructionSearchMutationHookResult = ReturnType<
  typeof usePostPortfoliosDeliveryInstructionSearchMutation
>;
export type PostPortfoliosDeliveryInstructionSearchMutationResult = Apollo.MutationResult<
  ApolloTypes.PostPortfoliosDeliveryInstructionSearchMutation
>;
export type PostPortfoliosDeliveryInstructionSearchMutationOptions = Apollo.BaseMutationOptions<
  ApolloTypes.PostPortfoliosDeliveryInstructionSearchMutation,
  ApolloTypes.PostPortfoliosDeliveryInstructionSearchMutationVariables
>;
export const PostPortfoliosStressScenariosDocument = /* #__PURE__ */ gql`
  mutation postPortfoliosStressScenarios(
    $getPortfolioStressScenariosRequestInput: GetPortfolioStressScenariosRequestInput
  ) {
    postPortfoliosStressScenarios(
      getPortfolioStressScenariosRequestInput: $getPortfolioStressScenariosRequestInput
    ) {
      equitiesDownTenPercent {
        returns
      }
      housingCrisis {
        returns
      }
      ratesUpOnePercent {
        returns
      }
      taperTantrum {
        returns
      }
    }
  }
`;
export type PostPortfoliosStressScenariosMutationFn = Apollo.MutationFunction<
  ApolloTypes.PostPortfoliosStressScenariosMutation,
  ApolloTypes.PostPortfoliosStressScenariosMutationVariables
>;

/**
 * __usePostPortfoliosStressScenariosMutation__
 *
 * To run a mutation, you first call `usePostPortfoliosStressScenariosMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `usePostPortfoliosStressScenariosMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [postPortfoliosStressScenariosMutation, { data, loading, error }] = usePostPortfoliosStressScenariosMutation({
 *   variables: {
 *      getPortfolioStressScenariosRequestInput: // value for 'getPortfolioStressScenariosRequestInput'
 *   },
 * });
 */
export function usePostPortfoliosStressScenariosMutation(
  baseOptions?: Apollo.MutationHookOptions<
    ApolloTypes.PostPortfoliosStressScenariosMutation,
    ApolloTypes.PostPortfoliosStressScenariosMutationVariables
  >
) {
  return Apollo.useMutation<
    ApolloTypes.PostPortfoliosStressScenariosMutation,
    ApolloTypes.PostPortfoliosStressScenariosMutationVariables
  >(PostPortfoliosStressScenariosDocument, baseOptions);
}
export type PostPortfoliosStressScenariosMutationHookResult = ReturnType<
  typeof usePostPortfoliosStressScenariosMutation
>;
export type PostPortfoliosStressScenariosMutationResult = Apollo.MutationResult<
  ApolloTypes.PostPortfoliosStressScenariosMutation
>;
export type PostPortfoliosStressScenariosMutationOptions = Apollo.BaseMutationOptions<
  ApolloTypes.PostPortfoliosStressScenariosMutation,
  ApolloTypes.PostPortfoliosStressScenariosMutationVariables
>;
export const PostProjectCashFlowsDocument = /* #__PURE__ */ gql`
  mutation postProjectCashFlows(
    $projectCashFlowsRequestInput: ProjectCashFlowsRequestInput
  ) {
    postProjectCashFlows(
      projectCashFlowsRequestInput: $projectCashFlowsRequestInput
    ) {
      cashFlows {
        cashFlow
        date
        interest
        principal
      }
    }
  }
`;
export type PostProjectCashFlowsMutationFn = Apollo.MutationFunction<
  ApolloTypes.PostProjectCashFlowsMutation,
  ApolloTypes.PostProjectCashFlowsMutationVariables
>;

/**
 * __usePostProjectCashFlowsMutation__
 *
 * To run a mutation, you first call `usePostProjectCashFlowsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `usePostProjectCashFlowsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [postProjectCashFlowsMutation, { data, loading, error }] = usePostProjectCashFlowsMutation({
 *   variables: {
 *      projectCashFlowsRequestInput: // value for 'projectCashFlowsRequestInput'
 *   },
 * });
 */
export function usePostProjectCashFlowsMutation(
  baseOptions?: Apollo.MutationHookOptions<
    ApolloTypes.PostProjectCashFlowsMutation,
    ApolloTypes.PostProjectCashFlowsMutationVariables
  >
) {
  return Apollo.useMutation<
    ApolloTypes.PostProjectCashFlowsMutation,
    ApolloTypes.PostProjectCashFlowsMutationVariables
  >(PostProjectCashFlowsDocument, baseOptions);
}
export type PostProjectCashFlowsMutationHookResult = ReturnType<
  typeof usePostProjectCashFlowsMutation
>;
export type PostProjectCashFlowsMutationResult = Apollo.MutationResult<
  ApolloTypes.PostProjectCashFlowsMutation
>;
export type PostProjectCashFlowsMutationOptions = Apollo.BaseMutationOptions<
  ApolloTypes.PostProjectCashFlowsMutation,
  ApolloTypes.PostProjectCashFlowsMutationVariables
>;
export const PostProposalAcceptDocument = /* #__PURE__ */ gql`
  mutation postProposalAccept(
    $acceptProposalRequestInput: AcceptProposalRequestInput
    $institution: String!
    $proposalId: String!
  ) {
    postProposalAccept(
      acceptProposalRequestInput: $acceptProposalRequestInput
      institution: $institution
      proposalId: $proposalId
    ) {
      goal {
        income
        risk
        yield
      }
      portfolio {
        createdAt
        currency
        id
        metadata
        name
        positions {
          assetId
          id
          marketValue
          name
          price
          publicIdentifiers {
            cusip
            isin
            sedol
            ticker
          }
          quantity
          weight
          yield
        }
        updatedAt
      }
    }
  }
`;
export type PostProposalAcceptMutationFn = Apollo.MutationFunction<
  ApolloTypes.PostProposalAcceptMutation,
  ApolloTypes.PostProposalAcceptMutationVariables
>;

/**
 * __usePostProposalAcceptMutation__
 *
 * To run a mutation, you first call `usePostProposalAcceptMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `usePostProposalAcceptMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [postProposalAcceptMutation, { data, loading, error }] = usePostProposalAcceptMutation({
 *   variables: {
 *      acceptProposalRequestInput: // value for 'acceptProposalRequestInput'
 *      institution: // value for 'institution'
 *      proposalId: // value for 'proposalId'
 *   },
 * });
 */
export function usePostProposalAcceptMutation(
  baseOptions?: Apollo.MutationHookOptions<
    ApolloTypes.PostProposalAcceptMutation,
    ApolloTypes.PostProposalAcceptMutationVariables
  >
) {
  return Apollo.useMutation<
    ApolloTypes.PostProposalAcceptMutation,
    ApolloTypes.PostProposalAcceptMutationVariables
  >(PostProposalAcceptDocument, baseOptions);
}
export type PostProposalAcceptMutationHookResult = ReturnType<
  typeof usePostProposalAcceptMutation
>;
export type PostProposalAcceptMutationResult = Apollo.MutationResult<
  ApolloTypes.PostProposalAcceptMutation
>;
export type PostProposalAcceptMutationOptions = Apollo.BaseMutationOptions<
  ApolloTypes.PostProposalAcceptMutation,
  ApolloTypes.PostProposalAcceptMutationVariables
>;
export const PostProposalsMinMaxRiskDocument = /* #__PURE__ */ gql`
  mutation postProposalsMinMaxRisk($institution: String!) {
    postProposalsMinMaxRisk(institution: $institution) {
      maxRisk
      minRisk
    }
  }
`;
export type PostProposalsMinMaxRiskMutationFn = Apollo.MutationFunction<
  ApolloTypes.PostProposalsMinMaxRiskMutation,
  ApolloTypes.PostProposalsMinMaxRiskMutationVariables
>;

/**
 * __usePostProposalsMinMaxRiskMutation__
 *
 * To run a mutation, you first call `usePostProposalsMinMaxRiskMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `usePostProposalsMinMaxRiskMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [postProposalsMinMaxRiskMutation, { data, loading, error }] = usePostProposalsMinMaxRiskMutation({
 *   variables: {
 *      institution: // value for 'institution'
 *   },
 * });
 */
export function usePostProposalsMinMaxRiskMutation(
  baseOptions?: Apollo.MutationHookOptions<
    ApolloTypes.PostProposalsMinMaxRiskMutation,
    ApolloTypes.PostProposalsMinMaxRiskMutationVariables
  >
) {
  return Apollo.useMutation<
    ApolloTypes.PostProposalsMinMaxRiskMutation,
    ApolloTypes.PostProposalsMinMaxRiskMutationVariables
  >(PostProposalsMinMaxRiskDocument, baseOptions);
}
export type PostProposalsMinMaxRiskMutationHookResult = ReturnType<
  typeof usePostProposalsMinMaxRiskMutation
>;
export type PostProposalsMinMaxRiskMutationResult = Apollo.MutationResult<
  ApolloTypes.PostProposalsMinMaxRiskMutation
>;
export type PostProposalsMinMaxRiskMutationOptions = Apollo.BaseMutationOptions<
  ApolloTypes.PostProposalsMinMaxRiskMutation,
  ApolloTypes.PostProposalsMinMaxRiskMutationVariables
>;
export const PostProposalsMinMaxYieldDocument = /* #__PURE__ */ gql`
  mutation postProposalsMinMaxYield($institution: String!) {
    postProposalsMinMaxYield(institution: $institution) {
      maxYield
      minYield
    }
  }
`;
export type PostProposalsMinMaxYieldMutationFn = Apollo.MutationFunction<
  ApolloTypes.PostProposalsMinMaxYieldMutation,
  ApolloTypes.PostProposalsMinMaxYieldMutationVariables
>;

/**
 * __usePostProposalsMinMaxYieldMutation__
 *
 * To run a mutation, you first call `usePostProposalsMinMaxYieldMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `usePostProposalsMinMaxYieldMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [postProposalsMinMaxYieldMutation, { data, loading, error }] = usePostProposalsMinMaxYieldMutation({
 *   variables: {
 *      institution: // value for 'institution'
 *   },
 * });
 */
export function usePostProposalsMinMaxYieldMutation(
  baseOptions?: Apollo.MutationHookOptions<
    ApolloTypes.PostProposalsMinMaxYieldMutation,
    ApolloTypes.PostProposalsMinMaxYieldMutationVariables
  >
) {
  return Apollo.useMutation<
    ApolloTypes.PostProposalsMinMaxYieldMutation,
    ApolloTypes.PostProposalsMinMaxYieldMutationVariables
  >(PostProposalsMinMaxYieldDocument, baseOptions);
}
export type PostProposalsMinMaxYieldMutationHookResult = ReturnType<
  typeof usePostProposalsMinMaxYieldMutation
>;
export type PostProposalsMinMaxYieldMutationResult = Apollo.MutationResult<
  ApolloTypes.PostProposalsMinMaxYieldMutation
>;
export type PostProposalsMinMaxYieldMutationOptions = Apollo.BaseMutationOptions<
  ApolloTypes.PostProposalsMinMaxYieldMutation,
  ApolloTypes.PostProposalsMinMaxYieldMutationVariables
>;
export const PostProposalsNewDocument = /* #__PURE__ */ gql`
  mutation postProposalsNew($newProposalRequestInput: NewProposalRequestInput) {
    postProposalsNew(newProposalRequestInput: $newProposalRequestInput) {
      proposal {
        commentary {
          content
          topic
        }
        incomePortfoliosAnalysis {
          afterTaxYield
          commentary {
            content
            topic
          }
          comparisons {
            average
            comparisonType
            difference
            inpaas
            percentageDifference
          }
          expenseRatio
          income
          maxDrawdown
          risk
          yield
        }
        orders {
          assetId
          direction
          marketValue
          quantity
        }
        originalIncomePortfoliosAnalysis {
          afterTaxYield
          commentary {
            content
            topic
          }
          comparisons {
            average
            comparisonType
            difference
            inpaas
            percentageDifference
          }
          expenseRatio
          income
          maxDrawdown
          risk
          yield
        }
        portfolio {
          accountNumber
          app
          createdAt
          currency
          description
          id
          metadata
          name
          positions {
            assetId
            costBasis
            createdAt
            id
            metadata
            portfolioId
            quantity
            settled
            tradeDate
            unsettled
            updatedAt
          }
          status
          updatedAt
        }
        proposalId
        proposalRequest {
          constraints {
            maximumWeight
            minimumWeight
          }
          goal {
            income
            risk
            yield
          }
          investmentAmount
          portfolioId
          taxBrackets {
            federalTaxRate
            stateTaxRate
          }
          whitelist
        }
        updatedAt
      }
    }
  }
`;
export type PostProposalsNewMutationFn = Apollo.MutationFunction<
  ApolloTypes.PostProposalsNewMutation,
  ApolloTypes.PostProposalsNewMutationVariables
>;

/**
 * __usePostProposalsNewMutation__
 *
 * To run a mutation, you first call `usePostProposalsNewMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `usePostProposalsNewMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [postProposalsNewMutation, { data, loading, error }] = usePostProposalsNewMutation({
 *   variables: {
 *      newProposalRequestInput: // value for 'newProposalRequestInput'
 *   },
 * });
 */
export function usePostProposalsNewMutation(
  baseOptions?: Apollo.MutationHookOptions<
    ApolloTypes.PostProposalsNewMutation,
    ApolloTypes.PostProposalsNewMutationVariables
  >
) {
  return Apollo.useMutation<
    ApolloTypes.PostProposalsNewMutation,
    ApolloTypes.PostProposalsNewMutationVariables
  >(PostProposalsNewDocument, baseOptions);
}
export type PostProposalsNewMutationHookResult = ReturnType<
  typeof usePostProposalsNewMutation
>;
export type PostProposalsNewMutationResult = Apollo.MutationResult<
  ApolloTypes.PostProposalsNewMutation
>;
export type PostProposalsNewMutationOptions = Apollo.BaseMutationOptions<
  ApolloTypes.PostProposalsNewMutation,
  ApolloTypes.PostProposalsNewMutationVariables
>;
export const PostProposalsPortfolioRebalanceDocument = /* #__PURE__ */ gql`
  mutation postProposalsPortfolioRebalance(
    $portfolioId: String!
    $rebalanceProposalRequestInput: RebalanceProposalRequestInput
  ) {
    postProposalsPortfolioRebalance(
      portfolioId: $portfolioId
      rebalanceProposalRequestInput: $rebalanceProposalRequestInput
    ) {
      proposal {
        commentary {
          content
          topic
        }
        incomePortfoliosAnalysis {
          afterTaxYield
          commentary {
            content
            topic
          }
          comparisons {
            average
            comparisonType
            difference
            inpaas
            percentageDifference
          }
          expenseRatio
          income
          maxDrawdown
          risk
          yield
        }
        orders {
          assetId
          direction
          marketValue
          quantity
        }
        originalIncomePortfoliosAnalysis {
          afterTaxYield
          commentary {
            content
            topic
          }
          comparisons {
            average
            comparisonType
            difference
            inpaas
            percentageDifference
          }
          expenseRatio
          income
          maxDrawdown
          risk
          yield
        }
        portfolio {
          accountNumber
          app
          createdAt
          currency
          description
          id
          metadata
          name
          positions {
            assetId
            costBasis
            createdAt
            id
            metadata
            portfolioId
            quantity
            settled
            tradeDate
            unsettled
            updatedAt
          }
          status
          updatedAt
        }
        proposalId
        proposalRequest {
          constraints {
            maximumWeight
            minimumWeight
          }
          goal {
            income
            risk
            yield
          }
          investmentAmount
          portfolioId
          taxBrackets {
            federalTaxRate
            stateTaxRate
          }
          whitelist
        }
        updatedAt
      }
    }
  }
`;
export type PostProposalsPortfolioRebalanceMutationFn = Apollo.MutationFunction<
  ApolloTypes.PostProposalsPortfolioRebalanceMutation,
  ApolloTypes.PostProposalsPortfolioRebalanceMutationVariables
>;

/**
 * __usePostProposalsPortfolioRebalanceMutation__
 *
 * To run a mutation, you first call `usePostProposalsPortfolioRebalanceMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `usePostProposalsPortfolioRebalanceMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [postProposalsPortfolioRebalanceMutation, { data, loading, error }] = usePostProposalsPortfolioRebalanceMutation({
 *   variables: {
 *      portfolioId: // value for 'portfolioId'
 *      rebalanceProposalRequestInput: // value for 'rebalanceProposalRequestInput'
 *   },
 * });
 */
export function usePostProposalsPortfolioRebalanceMutation(
  baseOptions?: Apollo.MutationHookOptions<
    ApolloTypes.PostProposalsPortfolioRebalanceMutation,
    ApolloTypes.PostProposalsPortfolioRebalanceMutationVariables
  >
) {
  return Apollo.useMutation<
    ApolloTypes.PostProposalsPortfolioRebalanceMutation,
    ApolloTypes.PostProposalsPortfolioRebalanceMutationVariables
  >(PostProposalsPortfolioRebalanceDocument, baseOptions);
}
export type PostProposalsPortfolioRebalanceMutationHookResult = ReturnType<
  typeof usePostProposalsPortfolioRebalanceMutation
>;
export type PostProposalsPortfolioRebalanceMutationResult = Apollo.MutationResult<
  ApolloTypes.PostProposalsPortfolioRebalanceMutation
>;
export type PostProposalsPortfolioRebalanceMutationOptions = Apollo.BaseMutationOptions<
  ApolloTypes.PostProposalsPortfolioRebalanceMutation,
  ApolloTypes.PostProposalsPortfolioRebalanceMutationVariables
>;
export const PostPubsubStacksSubscriptionDocument = /* #__PURE__ */ gql`
  mutation postPubsubStacksSubscription(
    $createSubscriptionRequestInput: CreateSubscriptionRequestInput
  ) {
    postPubsubStacksSubscription(
      createSubscriptionRequestInput: $createSubscriptionRequestInput
    ) {
      subscription {
        createdAt
        id
        queueArn
        queueUrl
        subscriptionArn
        topicArn
        updatedAt
      }
    }
  }
`;
export type PostPubsubStacksSubscriptionMutationFn = Apollo.MutationFunction<
  ApolloTypes.PostPubsubStacksSubscriptionMutation,
  ApolloTypes.PostPubsubStacksSubscriptionMutationVariables
>;

/**
 * __usePostPubsubStacksSubscription__
 *
 * To run a mutation, you first call `usePostPubsubStacksSubscription` within a React component and pass it any options that fit your needs.
 * When your component renders, `usePostPubsubStacksSubscription` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [postPubsubStacksSubscription, { data, loading, error }] = usePostPubsubStacksSubscription({
 *   variables: {
 *      createSubscriptionRequestInput: // value for 'createSubscriptionRequestInput'
 *   },
 * });
 */
export function usePostPubsubStacksSubscription(
  baseOptions?: Apollo.MutationHookOptions<
    ApolloTypes.PostPubsubStacksSubscriptionMutation,
    ApolloTypes.PostPubsubStacksSubscriptionMutationVariables
  >
) {
  return Apollo.useMutation<
    ApolloTypes.PostPubsubStacksSubscriptionMutation,
    ApolloTypes.PostPubsubStacksSubscriptionMutationVariables
  >(PostPubsubStacksSubscriptionDocument, baseOptions);
}
export type PostPubsubStacksSubscriptionHookResult = ReturnType<
  typeof usePostPubsubStacksSubscription
>;
export type PostPubsubStacksSubscriptionMutationResult = Apollo.MutationResult<
  ApolloTypes.PostPubsubStacksSubscriptionMutation
>;
export type PostPubsubStacksSubscriptionMutationOptions = Apollo.BaseMutationOptions<
  ApolloTypes.PostPubsubStacksSubscriptionMutation,
  ApolloTypes.PostPubsubStacksSubscriptionMutationVariables
>;
export const PostPubsubStacksTopicDocument = /* #__PURE__ */ gql`
  mutation postPubsubStacksTopic(
    $createTopicRequestInput: CreateTopicRequestInput
  ) {
    postPubsubStacksTopic(createTopicRequestInput: $createTopicRequestInput) {
      topic {
        arn
        createdAt
        id
        updatedAt
      }
    }
  }
`;
export type PostPubsubStacksTopicMutationFn = Apollo.MutationFunction<
  ApolloTypes.PostPubsubStacksTopicMutation,
  ApolloTypes.PostPubsubStacksTopicMutationVariables
>;

/**
 * __usePostPubsubStacksTopicMutation__
 *
 * To run a mutation, you first call `usePostPubsubStacksTopicMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `usePostPubsubStacksTopicMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [postPubsubStacksTopicMutation, { data, loading, error }] = usePostPubsubStacksTopicMutation({
 *   variables: {
 *      createTopicRequestInput: // value for 'createTopicRequestInput'
 *   },
 * });
 */
export function usePostPubsubStacksTopicMutation(
  baseOptions?: Apollo.MutationHookOptions<
    ApolloTypes.PostPubsubStacksTopicMutation,
    ApolloTypes.PostPubsubStacksTopicMutationVariables
  >
) {
  return Apollo.useMutation<
    ApolloTypes.PostPubsubStacksTopicMutation,
    ApolloTypes.PostPubsubStacksTopicMutationVariables
  >(PostPubsubStacksTopicDocument, baseOptions);
}
export type PostPubsubStacksTopicMutationHookResult = ReturnType<
  typeof usePostPubsubStacksTopicMutation
>;
export type PostPubsubStacksTopicMutationResult = Apollo.MutationResult<
  ApolloTypes.PostPubsubStacksTopicMutation
>;
export type PostPubsubStacksTopicMutationOptions = Apollo.BaseMutationOptions<
  ApolloTypes.PostPubsubStacksTopicMutation,
  ApolloTypes.PostPubsubStacksTopicMutationVariables
>;
export const PostResetPasswordDocument = /* #__PURE__ */ gql`
  mutation postResetPassword {
    postResetPassword
  }
`;
export type PostResetPasswordMutationFn = Apollo.MutationFunction<
  ApolloTypes.PostResetPasswordMutation,
  ApolloTypes.PostResetPasswordMutationVariables
>;

/**
 * __usePostResetPasswordMutation__
 *
 * To run a mutation, you first call `usePostResetPasswordMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `usePostResetPasswordMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [postResetPasswordMutation, { data, loading, error }] = usePostResetPasswordMutation({
 *   variables: {
 *   },
 * });
 */
export function usePostResetPasswordMutation(
  baseOptions?: Apollo.MutationHookOptions<
    ApolloTypes.PostResetPasswordMutation,
    ApolloTypes.PostResetPasswordMutationVariables
  >
) {
  return Apollo.useMutation<
    ApolloTypes.PostResetPasswordMutation,
    ApolloTypes.PostResetPasswordMutationVariables
  >(PostResetPasswordDocument, baseOptions);
}
export type PostResetPasswordMutationHookResult = ReturnType<
  typeof usePostResetPasswordMutation
>;
export type PostResetPasswordMutationResult = Apollo.MutationResult<
  ApolloTypes.PostResetPasswordMutation
>;
export type PostResetPasswordMutationOptions = Apollo.BaseMutationOptions<
  ApolloTypes.PostResetPasswordMutation,
  ApolloTypes.PostResetPasswordMutationVariables
>;
export const PostRoleBindingsDocument = /* #__PURE__ */ gql`
  mutation postRoleBindings(
    $createOrUpdateRoleBindingRequestInput: CreateOrUpdateRoleBindingRequestInput
  ) {
    postRoleBindings(
      createOrUpdateRoleBindingRequestInput: $createOrUpdateRoleBindingRequestInput
    ) {
      message
      timestamp
    }
  }
`;
export type PostRoleBindingsMutationFn = Apollo.MutationFunction<
  ApolloTypes.PostRoleBindingsMutation,
  ApolloTypes.PostRoleBindingsMutationVariables
>;

/**
 * __usePostRoleBindingsMutation__
 *
 * To run a mutation, you first call `usePostRoleBindingsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `usePostRoleBindingsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [postRoleBindingsMutation, { data, loading, error }] = usePostRoleBindingsMutation({
 *   variables: {
 *      createOrUpdateRoleBindingRequestInput: // value for 'createOrUpdateRoleBindingRequestInput'
 *   },
 * });
 */
export function usePostRoleBindingsMutation(
  baseOptions?: Apollo.MutationHookOptions<
    ApolloTypes.PostRoleBindingsMutation,
    ApolloTypes.PostRoleBindingsMutationVariables
  >
) {
  return Apollo.useMutation<
    ApolloTypes.PostRoleBindingsMutation,
    ApolloTypes.PostRoleBindingsMutationVariables
  >(PostRoleBindingsDocument, baseOptions);
}
export type PostRoleBindingsMutationHookResult = ReturnType<
  typeof usePostRoleBindingsMutation
>;
export type PostRoleBindingsMutationResult = Apollo.MutationResult<
  ApolloTypes.PostRoleBindingsMutation
>;
export type PostRoleBindingsMutationOptions = Apollo.BaseMutationOptions<
  ApolloTypes.PostRoleBindingsMutation,
  ApolloTypes.PostRoleBindingsMutationVariables
>;
export const PostRolePoliciesDocument = /* #__PURE__ */ gql`
  mutation postRolePolicies(
    $id: String!
    $removeRolePoliciesRequestInput: RemoveRolePoliciesRequestInput
  ) {
    postRolePolicies(
      id: $id
      removeRolePoliciesRequestInput: $removeRolePoliciesRequestInput
    ) {
      role {
        id
        policies {
          actions
          resource
        }
      }
    }
  }
`;
export type PostRolePoliciesMutationFn = Apollo.MutationFunction<
  ApolloTypes.PostRolePoliciesMutation,
  ApolloTypes.PostRolePoliciesMutationVariables
>;

/**
 * __usePostRolePoliciesMutation__
 *
 * To run a mutation, you first call `usePostRolePoliciesMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `usePostRolePoliciesMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [postRolePoliciesMutation, { data, loading, error }] = usePostRolePoliciesMutation({
 *   variables: {
 *      id: // value for 'id'
 *      removeRolePoliciesRequestInput: // value for 'removeRolePoliciesRequestInput'
 *   },
 * });
 */
export function usePostRolePoliciesMutation(
  baseOptions?: Apollo.MutationHookOptions<
    ApolloTypes.PostRolePoliciesMutation,
    ApolloTypes.PostRolePoliciesMutationVariables
  >
) {
  return Apollo.useMutation<
    ApolloTypes.PostRolePoliciesMutation,
    ApolloTypes.PostRolePoliciesMutationVariables
  >(PostRolePoliciesDocument, baseOptions);
}
export type PostRolePoliciesMutationHookResult = ReturnType<
  typeof usePostRolePoliciesMutation
>;
export type PostRolePoliciesMutationResult = Apollo.MutationResult<
  ApolloTypes.PostRolePoliciesMutation
>;
export type PostRolePoliciesMutationOptions = Apollo.BaseMutationOptions<
  ApolloTypes.PostRolePoliciesMutation,
  ApolloTypes.PostRolePoliciesMutationVariables
>;
export const PostRolesDocument = /* #__PURE__ */ gql`
  mutation postRoles(
    $createOrUpdateRoleRequestInput: CreateOrUpdateRoleRequestInput
  ) {
    postRoles(createOrUpdateRoleRequestInput: $createOrUpdateRoleRequestInput) {
      message
      timestamp
    }
  }
`;
export type PostRolesMutationFn = Apollo.MutationFunction<
  ApolloTypes.PostRolesMutation,
  ApolloTypes.PostRolesMutationVariables
>;

/**
 * __usePostRolesMutation__
 *
 * To run a mutation, you first call `usePostRolesMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `usePostRolesMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [postRolesMutation, { data, loading, error }] = usePostRolesMutation({
 *   variables: {
 *      createOrUpdateRoleRequestInput: // value for 'createOrUpdateRoleRequestInput'
 *   },
 * });
 */
export function usePostRolesMutation(
  baseOptions?: Apollo.MutationHookOptions<
    ApolloTypes.PostRolesMutation,
    ApolloTypes.PostRolesMutationVariables
  >
) {
  return Apollo.useMutation<
    ApolloTypes.PostRolesMutation,
    ApolloTypes.PostRolesMutationVariables
  >(PostRolesDocument, baseOptions);
}
export type PostRolesMutationHookResult = ReturnType<
  typeof usePostRolesMutation
>;
export type PostRolesMutationResult = Apollo.MutationResult<
  ApolloTypes.PostRolesMutation
>;
export type PostRolesMutationOptions = Apollo.BaseMutationOptions<
  ApolloTypes.PostRolesMutation,
  ApolloTypes.PostRolesMutationVariables
>;
export const PostSearchStacksDocument = /* #__PURE__ */ gql`
  mutation postSearchStacks($tableName: String!) {
    postSearchStacks(tableName: $tableName) {
      searchStack {
        createdAt
        deadLetterQueueUrl
        functionArn
        functionName
        id
        metadata
        tableName
        tableStatus
        updatedAt
      }
    }
  }
`;
export type PostSearchStacksMutationFn = Apollo.MutationFunction<
  ApolloTypes.PostSearchStacksMutation,
  ApolloTypes.PostSearchStacksMutationVariables
>;

/**
 * __usePostSearchStacksMutation__
 *
 * To run a mutation, you first call `usePostSearchStacksMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `usePostSearchStacksMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [postSearchStacksMutation, { data, loading, error }] = usePostSearchStacksMutation({
 *   variables: {
 *      tableName: // value for 'tableName'
 *   },
 * });
 */
export function usePostSearchStacksMutation(
  baseOptions?: Apollo.MutationHookOptions<
    ApolloTypes.PostSearchStacksMutation,
    ApolloTypes.PostSearchStacksMutationVariables
  >
) {
  return Apollo.useMutation<
    ApolloTypes.PostSearchStacksMutation,
    ApolloTypes.PostSearchStacksMutationVariables
  >(PostSearchStacksDocument, baseOptions);
}
export type PostSearchStacksMutationHookResult = ReturnType<
  typeof usePostSearchStacksMutation
>;
export type PostSearchStacksMutationResult = Apollo.MutationResult<
  ApolloTypes.PostSearchStacksMutation
>;
export type PostSearchStacksMutationOptions = Apollo.BaseMutationOptions<
  ApolloTypes.PostSearchStacksMutation,
  ApolloTypes.PostSearchStacksMutationVariables
>;
export const PostSketchUploadDocument = /* #__PURE__ */ gql`
  mutation postSketchUpload(
    $sketchId: String!
    $uploadSketchDocumentRequestInput: UploadSketchDocumentRequestInput
  ) {
    postSketchUpload(
      sketchId: $sketchId
      uploadSketchDocumentRequestInput: $uploadSketchDocumentRequestInput
    ) {
      document {
        documentType {
          description
          name
        }
        snapId
        uploadDateTime
        uploadUserName
      }
    }
  }
`;
export type PostSketchUploadMutationFn = Apollo.MutationFunction<
  ApolloTypes.PostSketchUploadMutation,
  ApolloTypes.PostSketchUploadMutationVariables
>;

/**
 * __usePostSketchUploadMutation__
 *
 * To run a mutation, you first call `usePostSketchUploadMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `usePostSketchUploadMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [postSketchUploadMutation, { data, loading, error }] = usePostSketchUploadMutation({
 *   variables: {
 *      sketchId: // value for 'sketchId'
 *      uploadSketchDocumentRequestInput: // value for 'uploadSketchDocumentRequestInput'
 *   },
 * });
 */
export function usePostSketchUploadMutation(
  baseOptions?: Apollo.MutationHookOptions<
    ApolloTypes.PostSketchUploadMutation,
    ApolloTypes.PostSketchUploadMutationVariables
  >
) {
  return Apollo.useMutation<
    ApolloTypes.PostSketchUploadMutation,
    ApolloTypes.PostSketchUploadMutationVariables
  >(PostSketchUploadDocument, baseOptions);
}
export type PostSketchUploadMutationHookResult = ReturnType<
  typeof usePostSketchUploadMutation
>;
export type PostSketchUploadMutationResult = Apollo.MutationResult<
  ApolloTypes.PostSketchUploadMutation
>;
export type PostSketchUploadMutationOptions = Apollo.BaseMutationOptions<
  ApolloTypes.PostSketchUploadMutation,
  ApolloTypes.PostSketchUploadMutationVariables
>;
export const PostSuggestionsGenerateAssetSuggestionsDocument = /* #__PURE__ */ gql`
  mutation postSuggestionsGenerateAssetSuggestions(
    $generateAssetSuggestionsRequestInput: GenerateAssetSuggestionsRequestInput
  ) {
    postSuggestionsGenerateAssetSuggestions(
      generateAssetSuggestionsRequestInput: $generateAssetSuggestionsRequestInput
    ) {
      assetIds
    }
  }
`;
export type PostSuggestionsGenerateAssetSuggestionsMutationFn = Apollo.MutationFunction<
  ApolloTypes.PostSuggestionsGenerateAssetSuggestionsMutation,
  ApolloTypes.PostSuggestionsGenerateAssetSuggestionsMutationVariables
>;

/**
 * __usePostSuggestionsGenerateAssetSuggestionsMutation__
 *
 * To run a mutation, you first call `usePostSuggestionsGenerateAssetSuggestionsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `usePostSuggestionsGenerateAssetSuggestionsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [postSuggestionsGenerateAssetSuggestionsMutation, { data, loading, error }] = usePostSuggestionsGenerateAssetSuggestionsMutation({
 *   variables: {
 *      generateAssetSuggestionsRequestInput: // value for 'generateAssetSuggestionsRequestInput'
 *   },
 * });
 */
export function usePostSuggestionsGenerateAssetSuggestionsMutation(
  baseOptions?: Apollo.MutationHookOptions<
    ApolloTypes.PostSuggestionsGenerateAssetSuggestionsMutation,
    ApolloTypes.PostSuggestionsGenerateAssetSuggestionsMutationVariables
  >
) {
  return Apollo.useMutation<
    ApolloTypes.PostSuggestionsGenerateAssetSuggestionsMutation,
    ApolloTypes.PostSuggestionsGenerateAssetSuggestionsMutationVariables
  >(PostSuggestionsGenerateAssetSuggestionsDocument, baseOptions);
}
export type PostSuggestionsGenerateAssetSuggestionsMutationHookResult = ReturnType<
  typeof usePostSuggestionsGenerateAssetSuggestionsMutation
>;
export type PostSuggestionsGenerateAssetSuggestionsMutationResult = Apollo.MutationResult<
  ApolloTypes.PostSuggestionsGenerateAssetSuggestionsMutation
>;
export type PostSuggestionsGenerateAssetSuggestionsMutationOptions = Apollo.BaseMutationOptions<
  ApolloTypes.PostSuggestionsGenerateAssetSuggestionsMutation,
  ApolloTypes.PostSuggestionsGenerateAssetSuggestionsMutationVariables
>;
export const PostTemporaryPortfoliosDocument = /* #__PURE__ */ gql`
  mutation postTemporaryPortfolios(
    $createOrReplaceTemporaryPortfolioRequestInput: CreateOrReplaceTemporaryPortfolioRequestInput
  ) {
    postTemporaryPortfolios(
      createOrReplaceTemporaryPortfolioRequestInput: $createOrReplaceTemporaryPortfolioRequestInput
    ) {
      created
      updated
    }
  }
`;
export type PostTemporaryPortfoliosMutationFn = Apollo.MutationFunction<
  ApolloTypes.PostTemporaryPortfoliosMutation,
  ApolloTypes.PostTemporaryPortfoliosMutationVariables
>;

/**
 * __usePostTemporaryPortfoliosMutation__
 *
 * To run a mutation, you first call `usePostTemporaryPortfoliosMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `usePostTemporaryPortfoliosMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [postTemporaryPortfoliosMutation, { data, loading, error }] = usePostTemporaryPortfoliosMutation({
 *   variables: {
 *      createOrReplaceTemporaryPortfolioRequestInput: // value for 'createOrReplaceTemporaryPortfolioRequestInput'
 *   },
 * });
 */
export function usePostTemporaryPortfoliosMutation(
  baseOptions?: Apollo.MutationHookOptions<
    ApolloTypes.PostTemporaryPortfoliosMutation,
    ApolloTypes.PostTemporaryPortfoliosMutationVariables
  >
) {
  return Apollo.useMutation<
    ApolloTypes.PostTemporaryPortfoliosMutation,
    ApolloTypes.PostTemporaryPortfoliosMutationVariables
  >(PostTemporaryPortfoliosDocument, baseOptions);
}
export type PostTemporaryPortfoliosMutationHookResult = ReturnType<
  typeof usePostTemporaryPortfoliosMutation
>;
export type PostTemporaryPortfoliosMutationResult = Apollo.MutationResult<
  ApolloTypes.PostTemporaryPortfoliosMutation
>;
export type PostTemporaryPortfoliosMutationOptions = Apollo.BaseMutationOptions<
  ApolloTypes.PostTemporaryPortfoliosMutation,
  ApolloTypes.PostTemporaryPortfoliosMutationVariables
>;
export const PostTicketsEmailVerificationDocument = /* #__PURE__ */ gql`
  mutation postTicketsEmailVerification($ticketId: String!) {
    postTicketsEmailVerification(ticketId: $ticketId) {
      verified
    }
  }
`;
export type PostTicketsEmailVerificationMutationFn = Apollo.MutationFunction<
  ApolloTypes.PostTicketsEmailVerificationMutation,
  ApolloTypes.PostTicketsEmailVerificationMutationVariables
>;

/**
 * __usePostTicketsEmailVerificationMutation__
 *
 * To run a mutation, you first call `usePostTicketsEmailVerificationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `usePostTicketsEmailVerificationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [postTicketsEmailVerificationMutation, { data, loading, error }] = usePostTicketsEmailVerificationMutation({
 *   variables: {
 *      ticketId: // value for 'ticketId'
 *   },
 * });
 */
export function usePostTicketsEmailVerificationMutation(
  baseOptions?: Apollo.MutationHookOptions<
    ApolloTypes.PostTicketsEmailVerificationMutation,
    ApolloTypes.PostTicketsEmailVerificationMutationVariables
  >
) {
  return Apollo.useMutation<
    ApolloTypes.PostTicketsEmailVerificationMutation,
    ApolloTypes.PostTicketsEmailVerificationMutationVariables
  >(PostTicketsEmailVerificationDocument, baseOptions);
}
export type PostTicketsEmailVerificationMutationHookResult = ReturnType<
  typeof usePostTicketsEmailVerificationMutation
>;
export type PostTicketsEmailVerificationMutationResult = Apollo.MutationResult<
  ApolloTypes.PostTicketsEmailVerificationMutation
>;
export type PostTicketsEmailVerificationMutationOptions = Apollo.BaseMutationOptions<
  ApolloTypes.PostTicketsEmailVerificationMutation,
  ApolloTypes.PostTicketsEmailVerificationMutationVariables
>;
export const PostTicketsEmailVerificationsDocument = /* #__PURE__ */ gql`
  mutation postTicketsEmailVerifications($email: String!) {
    postTicketsEmailVerifications(email: $email) {
      success
    }
  }
`;
export type PostTicketsEmailVerificationsMutationFn = Apollo.MutationFunction<
  ApolloTypes.PostTicketsEmailVerificationsMutation,
  ApolloTypes.PostTicketsEmailVerificationsMutationVariables
>;

/**
 * __usePostTicketsEmailVerificationsMutation__
 *
 * To run a mutation, you first call `usePostTicketsEmailVerificationsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `usePostTicketsEmailVerificationsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [postTicketsEmailVerificationsMutation, { data, loading, error }] = usePostTicketsEmailVerificationsMutation({
 *   variables: {
 *      email: // value for 'email'
 *   },
 * });
 */
export function usePostTicketsEmailVerificationsMutation(
  baseOptions?: Apollo.MutationHookOptions<
    ApolloTypes.PostTicketsEmailVerificationsMutation,
    ApolloTypes.PostTicketsEmailVerificationsMutationVariables
  >
) {
  return Apollo.useMutation<
    ApolloTypes.PostTicketsEmailVerificationsMutation,
    ApolloTypes.PostTicketsEmailVerificationsMutationVariables
  >(PostTicketsEmailVerificationsDocument, baseOptions);
}
export type PostTicketsEmailVerificationsMutationHookResult = ReturnType<
  typeof usePostTicketsEmailVerificationsMutation
>;
export type PostTicketsEmailVerificationsMutationResult = Apollo.MutationResult<
  ApolloTypes.PostTicketsEmailVerificationsMutation
>;
export type PostTicketsEmailVerificationsMutationOptions = Apollo.BaseMutationOptions<
  ApolloTypes.PostTicketsEmailVerificationsMutation,
  ApolloTypes.PostTicketsEmailVerificationsMutationVariables
>;
export const PostTicketsLoginDocument = /* #__PURE__ */ gql`
  mutation postTicketsLogin(
    $loginRequestInput: LoginRequestInput
    $sdk: Boolean
  ) {
    postTicketsLogin(loginRequestInput: $loginRequestInput, sdk: $sdk) {
      success
    }
  }
`;
export type PostTicketsLoginMutationFn = Apollo.MutationFunction<
  ApolloTypes.PostTicketsLoginMutation,
  ApolloTypes.PostTicketsLoginMutationVariables
>;

/**
 * __usePostTicketsLoginMutation__
 *
 * To run a mutation, you first call `usePostTicketsLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `usePostTicketsLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [postTicketsLoginMutation, { data, loading, error }] = usePostTicketsLoginMutation({
 *   variables: {
 *      loginRequestInput: // value for 'loginRequestInput'
 *      sdk: // value for 'sdk'
 *   },
 * });
 */
export function usePostTicketsLoginMutation(
  baseOptions?: Apollo.MutationHookOptions<
    ApolloTypes.PostTicketsLoginMutation,
    ApolloTypes.PostTicketsLoginMutationVariables
  >
) {
  return Apollo.useMutation<
    ApolloTypes.PostTicketsLoginMutation,
    ApolloTypes.PostTicketsLoginMutationVariables
  >(PostTicketsLoginDocument, baseOptions);
}
export type PostTicketsLoginMutationHookResult = ReturnType<
  typeof usePostTicketsLoginMutation
>;
export type PostTicketsLoginMutationResult = Apollo.MutationResult<
  ApolloTypes.PostTicketsLoginMutation
>;
export type PostTicketsLoginMutationOptions = Apollo.BaseMutationOptions<
  ApolloTypes.PostTicketsLoginMutation,
  ApolloTypes.PostTicketsLoginMutationVariables
>;
export const PostTicketsPasswordResetDocument = /* #__PURE__ */ gql`
  mutation postTicketsPasswordReset(
    $resetPasswordRequestInput: ResetPasswordRequestInput
    $ticketId: String!
  ) {
    postTicketsPasswordReset(
      resetPasswordRequestInput: $resetPasswordRequestInput
      ticketId: $ticketId
    ) {
      success
    }
  }
`;
export type PostTicketsPasswordResetMutationFn = Apollo.MutationFunction<
  ApolloTypes.PostTicketsPasswordResetMutation,
  ApolloTypes.PostTicketsPasswordResetMutationVariables
>;

/**
 * __usePostTicketsPasswordResetMutation__
 *
 * To run a mutation, you first call `usePostTicketsPasswordResetMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `usePostTicketsPasswordResetMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [postTicketsPasswordResetMutation, { data, loading, error }] = usePostTicketsPasswordResetMutation({
 *   variables: {
 *      resetPasswordRequestInput: // value for 'resetPasswordRequestInput'
 *      ticketId: // value for 'ticketId'
 *   },
 * });
 */
export function usePostTicketsPasswordResetMutation(
  baseOptions?: Apollo.MutationHookOptions<
    ApolloTypes.PostTicketsPasswordResetMutation,
    ApolloTypes.PostTicketsPasswordResetMutationVariables
  >
) {
  return Apollo.useMutation<
    ApolloTypes.PostTicketsPasswordResetMutation,
    ApolloTypes.PostTicketsPasswordResetMutationVariables
  >(PostTicketsPasswordResetDocument, baseOptions);
}
export type PostTicketsPasswordResetMutationHookResult = ReturnType<
  typeof usePostTicketsPasswordResetMutation
>;
export type PostTicketsPasswordResetMutationResult = Apollo.MutationResult<
  ApolloTypes.PostTicketsPasswordResetMutation
>;
export type PostTicketsPasswordResetMutationOptions = Apollo.BaseMutationOptions<
  ApolloTypes.PostTicketsPasswordResetMutation,
  ApolloTypes.PostTicketsPasswordResetMutationVariables
>;
export const PostTicketsPasswordResetsDocument = /* #__PURE__ */ gql`
  mutation postTicketsPasswordResets($email: String!) {
    postTicketsPasswordResets(email: $email) {
      success
    }
  }
`;
export type PostTicketsPasswordResetsMutationFn = Apollo.MutationFunction<
  ApolloTypes.PostTicketsPasswordResetsMutation,
  ApolloTypes.PostTicketsPasswordResetsMutationVariables
>;

/**
 * __usePostTicketsPasswordResetsMutation__
 *
 * To run a mutation, you first call `usePostTicketsPasswordResetsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `usePostTicketsPasswordResetsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [postTicketsPasswordResetsMutation, { data, loading, error }] = usePostTicketsPasswordResetsMutation({
 *   variables: {
 *      email: // value for 'email'
 *   },
 * });
 */
export function usePostTicketsPasswordResetsMutation(
  baseOptions?: Apollo.MutationHookOptions<
    ApolloTypes.PostTicketsPasswordResetsMutation,
    ApolloTypes.PostTicketsPasswordResetsMutationVariables
  >
) {
  return Apollo.useMutation<
    ApolloTypes.PostTicketsPasswordResetsMutation,
    ApolloTypes.PostTicketsPasswordResetsMutationVariables
  >(PostTicketsPasswordResetsDocument, baseOptions);
}
export type PostTicketsPasswordResetsMutationHookResult = ReturnType<
  typeof usePostTicketsPasswordResetsMutation
>;
export type PostTicketsPasswordResetsMutationResult = Apollo.MutationResult<
  ApolloTypes.PostTicketsPasswordResetsMutation
>;
export type PostTicketsPasswordResetsMutationOptions = Apollo.BaseMutationOptions<
  ApolloTypes.PostTicketsPasswordResetsMutation,
  ApolloTypes.PostTicketsPasswordResetsMutationVariables
>;
export const PostTradePostingPostExecutionsDocument = /* #__PURE__ */ gql`
  mutation postTradePostingPostExecutions(
    $postExecutionsRequestInput: PostExecutionsRequestInput
  ) {
    postTradePostingPostExecutions(
      postExecutionsRequestInput: $postExecutionsRequestInput
    ) {
      tradePostings {
        aleId
        direction
        errorDetails
        orderId
        price
        quantity
        state
        ticker
        tradePostingId
        tradedAt
        updatedAt
      }
    }
  }
`;
export type PostTradePostingPostExecutionsMutationFn = Apollo.MutationFunction<
  ApolloTypes.PostTradePostingPostExecutionsMutation,
  ApolloTypes.PostTradePostingPostExecutionsMutationVariables
>;

/**
 * __usePostTradePostingPostExecutionsMutation__
 *
 * To run a mutation, you first call `usePostTradePostingPostExecutionsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `usePostTradePostingPostExecutionsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [postTradePostingPostExecutionsMutation, { data, loading, error }] = usePostTradePostingPostExecutionsMutation({
 *   variables: {
 *      postExecutionsRequestInput: // value for 'postExecutionsRequestInput'
 *   },
 * });
 */
export function usePostTradePostingPostExecutionsMutation(
  baseOptions?: Apollo.MutationHookOptions<
    ApolloTypes.PostTradePostingPostExecutionsMutation,
    ApolloTypes.PostTradePostingPostExecutionsMutationVariables
  >
) {
  return Apollo.useMutation<
    ApolloTypes.PostTradePostingPostExecutionsMutation,
    ApolloTypes.PostTradePostingPostExecutionsMutationVariables
  >(PostTradePostingPostExecutionsDocument, baseOptions);
}
export type PostTradePostingPostExecutionsMutationHookResult = ReturnType<
  typeof usePostTradePostingPostExecutionsMutation
>;
export type PostTradePostingPostExecutionsMutationResult = Apollo.MutationResult<
  ApolloTypes.PostTradePostingPostExecutionsMutation
>;
export type PostTradePostingPostExecutionsMutationOptions = Apollo.BaseMutationOptions<
  ApolloTypes.PostTradePostingPostExecutionsMutation,
  ApolloTypes.PostTradePostingPostExecutionsMutationVariables
>;
export const PostTradesSearchDocument = /* #__PURE__ */ gql`
  mutation postTradesSearch($searchTradeRequestInput: SearchTradeRequestInput) {
    postTradesSearch(searchTradeRequestInput: $searchTradeRequestInput) {
      trades {
        accountNumber
        assetId
        comment
        counterPartyId
        createdAt
        fee
        id
        metadata
        orderId
        portfolioId
        quantity
        relatedPositions {
          positionId
          quantity
        }
        status
        tradeId
        tradePrice
        updatedAt
      }
    }
  }
`;
export type PostTradesSearchMutationFn = Apollo.MutationFunction<
  ApolloTypes.PostTradesSearchMutation,
  ApolloTypes.PostTradesSearchMutationVariables
>;

/**
 * __usePostTradesSearchMutation__
 *
 * To run a mutation, you first call `usePostTradesSearchMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `usePostTradesSearchMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [postTradesSearchMutation, { data, loading, error }] = usePostTradesSearchMutation({
 *   variables: {
 *      searchTradeRequestInput: // value for 'searchTradeRequestInput'
 *   },
 * });
 */
export function usePostTradesSearchMutation(
  baseOptions?: Apollo.MutationHookOptions<
    ApolloTypes.PostTradesSearchMutation,
    ApolloTypes.PostTradesSearchMutationVariables
  >
) {
  return Apollo.useMutation<
    ApolloTypes.PostTradesSearchMutation,
    ApolloTypes.PostTradesSearchMutationVariables
  >(PostTradesSearchDocument, baseOptions);
}
export type PostTradesSearchMutationHookResult = ReturnType<
  typeof usePostTradesSearchMutation
>;
export type PostTradesSearchMutationResult = Apollo.MutationResult<
  ApolloTypes.PostTradesSearchMutation
>;
export type PostTradesSearchMutationOptions = Apollo.BaseMutationOptions<
  ApolloTypes.PostTradesSearchMutation,
  ApolloTypes.PostTradesSearchMutationVariables
>;
export const PostUserCartItemsDocument = /* #__PURE__ */ gql`
  mutation postUserCartItems(
    $createOrReplaceCartItemRequestInput: CreateOrReplaceCartItemRequestInput
    $userId: String!
  ) {
    postUserCartItems(
      createOrReplaceCartItemRequestInput: $createOrReplaceCartItemRequestInput
      userId: $userId
    ) {
      ok
    }
  }
`;
export type PostUserCartItemsMutationFn = Apollo.MutationFunction<
  ApolloTypes.PostUserCartItemsMutation,
  ApolloTypes.PostUserCartItemsMutationVariables
>;

/**
 * __usePostUserCartItemsMutation__
 *
 * To run a mutation, you first call `usePostUserCartItemsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `usePostUserCartItemsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [postUserCartItemsMutation, { data, loading, error }] = usePostUserCartItemsMutation({
 *   variables: {
 *      createOrReplaceCartItemRequestInput: // value for 'createOrReplaceCartItemRequestInput'
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function usePostUserCartItemsMutation(
  baseOptions?: Apollo.MutationHookOptions<
    ApolloTypes.PostUserCartItemsMutation,
    ApolloTypes.PostUserCartItemsMutationVariables
  >
) {
  return Apollo.useMutation<
    ApolloTypes.PostUserCartItemsMutation,
    ApolloTypes.PostUserCartItemsMutationVariables
  >(PostUserCartItemsDocument, baseOptions);
}
export type PostUserCartItemsMutationHookResult = ReturnType<
  typeof usePostUserCartItemsMutation
>;
export type PostUserCartItemsMutationResult = Apollo.MutationResult<
  ApolloTypes.PostUserCartItemsMutation
>;
export type PostUserCartItemsMutationOptions = Apollo.BaseMutationOptions<
  ApolloTypes.PostUserCartItemsMutation,
  ApolloTypes.PostUserCartItemsMutationVariables
>;
export const PostUserResetPasswordDirectlyDocument = /* #__PURE__ */ gql`
  mutation postUserResetPasswordDirectly(
    $id: String!
    $resetPasswordDirectlyRequestInput: ResetPasswordDirectlyRequestInput
  ) {
    postUserResetPasswordDirectly(
      id: $id
      resetPasswordDirectlyRequestInput: $resetPasswordDirectlyRequestInput
    ) {
      success
    }
  }
`;
export type PostUserResetPasswordDirectlyMutationFn = Apollo.MutationFunction<
  ApolloTypes.PostUserResetPasswordDirectlyMutation,
  ApolloTypes.PostUserResetPasswordDirectlyMutationVariables
>;

/**
 * __usePostUserResetPasswordDirectlyMutation__
 *
 * To run a mutation, you first call `usePostUserResetPasswordDirectlyMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `usePostUserResetPasswordDirectlyMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [postUserResetPasswordDirectlyMutation, { data, loading, error }] = usePostUserResetPasswordDirectlyMutation({
 *   variables: {
 *      id: // value for 'id'
 *      resetPasswordDirectlyRequestInput: // value for 'resetPasswordDirectlyRequestInput'
 *   },
 * });
 */
export function usePostUserResetPasswordDirectlyMutation(
  baseOptions?: Apollo.MutationHookOptions<
    ApolloTypes.PostUserResetPasswordDirectlyMutation,
    ApolloTypes.PostUserResetPasswordDirectlyMutationVariables
  >
) {
  return Apollo.useMutation<
    ApolloTypes.PostUserResetPasswordDirectlyMutation,
    ApolloTypes.PostUserResetPasswordDirectlyMutationVariables
  >(PostUserResetPasswordDirectlyDocument, baseOptions);
}
export type PostUserResetPasswordDirectlyMutationHookResult = ReturnType<
  typeof usePostUserResetPasswordDirectlyMutation
>;
export type PostUserResetPasswordDirectlyMutationResult = Apollo.MutationResult<
  ApolloTypes.PostUserResetPasswordDirectlyMutation
>;
export type PostUserResetPasswordDirectlyMutationOptions = Apollo.BaseMutationOptions<
  ApolloTypes.PostUserResetPasswordDirectlyMutation,
  ApolloTypes.PostUserResetPasswordDirectlyMutationVariables
>;
export const PostUserWatchlistItemDocument = /* #__PURE__ */ gql`
  mutation postUserWatchlistItem($assetId: String!, $userId: String!) {
    postUserWatchlistItem(assetId: $assetId, userId: $userId) {
      ok
    }
  }
`;
export type PostUserWatchlistItemMutationFn = Apollo.MutationFunction<
  ApolloTypes.PostUserWatchlistItemMutation,
  ApolloTypes.PostUserWatchlistItemMutationVariables
>;

/**
 * __usePostUserWatchlistItemMutation__
 *
 * To run a mutation, you first call `usePostUserWatchlistItemMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `usePostUserWatchlistItemMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [postUserWatchlistItemMutation, { data, loading, error }] = usePostUserWatchlistItemMutation({
 *   variables: {
 *      assetId: // value for 'assetId'
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function usePostUserWatchlistItemMutation(
  baseOptions?: Apollo.MutationHookOptions<
    ApolloTypes.PostUserWatchlistItemMutation,
    ApolloTypes.PostUserWatchlistItemMutationVariables
  >
) {
  return Apollo.useMutation<
    ApolloTypes.PostUserWatchlistItemMutation,
    ApolloTypes.PostUserWatchlistItemMutationVariables
  >(PostUserWatchlistItemDocument, baseOptions);
}
export type PostUserWatchlistItemMutationHookResult = ReturnType<
  typeof usePostUserWatchlistItemMutation
>;
export type PostUserWatchlistItemMutationResult = Apollo.MutationResult<
  ApolloTypes.PostUserWatchlistItemMutation
>;
export type PostUserWatchlistItemMutationOptions = Apollo.BaseMutationOptions<
  ApolloTypes.PostUserWatchlistItemMutation,
  ApolloTypes.PostUserWatchlistItemMutationVariables
>;
export const PostUsersDocument = /* #__PURE__ */ gql`
  mutation postUsers($createUserRequestInput: CreateUserRequestInput) {
    postUsers(createUserRequestInput: $createUserRequestInput) {
      user {
        createdAt
        email
        first
        id
        institutionId
        last
        metadata
        policies {
          actions
          resource
        }
        status
        terms
        updatedAt
        userType
      }
    }
  }
`;
export type PostUsersMutationFn = Apollo.MutationFunction<
  ApolloTypes.PostUsersMutation,
  ApolloTypes.PostUsersMutationVariables
>;

/**
 * __usePostUsersMutation__
 *
 * To run a mutation, you first call `usePostUsersMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `usePostUsersMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [postUsersMutation, { data, loading, error }] = usePostUsersMutation({
 *   variables: {
 *      createUserRequestInput: // value for 'createUserRequestInput'
 *   },
 * });
 */
export function usePostUsersMutation(
  baseOptions?: Apollo.MutationHookOptions<
    ApolloTypes.PostUsersMutation,
    ApolloTypes.PostUsersMutationVariables
  >
) {
  return Apollo.useMutation<
    ApolloTypes.PostUsersMutation,
    ApolloTypes.PostUsersMutationVariables
  >(PostUsersDocument, baseOptions);
}
export type PostUsersMutationHookResult = ReturnType<
  typeof usePostUsersMutation
>;
export type PostUsersMutationResult = Apollo.MutationResult<
  ApolloTypes.PostUsersMutation
>;
export type PostUsersMutationOptions = Apollo.BaseMutationOptions<
  ApolloTypes.PostUsersMutation,
  ApolloTypes.PostUsersMutationVariables
>;
export const PostUsersBlockExpiredTrialUsersDocument = /* #__PURE__ */ gql`
  mutation postUsersBlockExpiredTrialUsers(
    $blockExpiredTrialUsersRequestInput: BlockExpiredTrialUsersRequestInput
  ) {
    postUsersBlockExpiredTrialUsers(
      blockExpiredTrialUsersRequestInput: $blockExpiredTrialUsersRequestInput
    ) {
      users {
        createdAt
        email
        first
        id
        institutionId
        last
        metadata
        policies {
          actions
          resource
        }
        status
        terms
        updatedAt
        userType
      }
    }
  }
`;
export type PostUsersBlockExpiredTrialUsersMutationFn = Apollo.MutationFunction<
  ApolloTypes.PostUsersBlockExpiredTrialUsersMutation,
  ApolloTypes.PostUsersBlockExpiredTrialUsersMutationVariables
>;

/**
 * __usePostUsersBlockExpiredTrialUsersMutation__
 *
 * To run a mutation, you first call `usePostUsersBlockExpiredTrialUsersMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `usePostUsersBlockExpiredTrialUsersMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [postUsersBlockExpiredTrialUsersMutation, { data, loading, error }] = usePostUsersBlockExpiredTrialUsersMutation({
 *   variables: {
 *      blockExpiredTrialUsersRequestInput: // value for 'blockExpiredTrialUsersRequestInput'
 *   },
 * });
 */
export function usePostUsersBlockExpiredTrialUsersMutation(
  baseOptions?: Apollo.MutationHookOptions<
    ApolloTypes.PostUsersBlockExpiredTrialUsersMutation,
    ApolloTypes.PostUsersBlockExpiredTrialUsersMutationVariables
  >
) {
  return Apollo.useMutation<
    ApolloTypes.PostUsersBlockExpiredTrialUsersMutation,
    ApolloTypes.PostUsersBlockExpiredTrialUsersMutationVariables
  >(PostUsersBlockExpiredTrialUsersDocument, baseOptions);
}
export type PostUsersBlockExpiredTrialUsersMutationHookResult = ReturnType<
  typeof usePostUsersBlockExpiredTrialUsersMutation
>;
export type PostUsersBlockExpiredTrialUsersMutationResult = Apollo.MutationResult<
  ApolloTypes.PostUsersBlockExpiredTrialUsersMutation
>;
export type PostUsersBlockExpiredTrialUsersMutationOptions = Apollo.BaseMutationOptions<
  ApolloTypes.PostUsersBlockExpiredTrialUsersMutation,
  ApolloTypes.PostUsersBlockExpiredTrialUsersMutationVariables
>;
export const PostUsersInvitesDocument = /* #__PURE__ */ gql`
  mutation postUsersInvites($inviteUserRequestInput: InviteUserRequestInput) {
    postUsersInvites(inviteUserRequestInput: $inviteUserRequestInput) {
      invitedUser {
        createdAt
        email
        firstName
        institutionId
        invitedBy
        lastName
        nonce
        status
        userType
      }
    }
  }
`;
export type PostUsersInvitesMutationFn = Apollo.MutationFunction<
  ApolloTypes.PostUsersInvitesMutation,
  ApolloTypes.PostUsersInvitesMutationVariables
>;

/**
 * __usePostUsersInvitesMutation__
 *
 * To run a mutation, you first call `usePostUsersInvitesMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `usePostUsersInvitesMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [postUsersInvitesMutation, { data, loading, error }] = usePostUsersInvitesMutation({
 *   variables: {
 *      inviteUserRequestInput: // value for 'inviteUserRequestInput'
 *   },
 * });
 */
export function usePostUsersInvitesMutation(
  baseOptions?: Apollo.MutationHookOptions<
    ApolloTypes.PostUsersInvitesMutation,
    ApolloTypes.PostUsersInvitesMutationVariables
  >
) {
  return Apollo.useMutation<
    ApolloTypes.PostUsersInvitesMutation,
    ApolloTypes.PostUsersInvitesMutationVariables
  >(PostUsersInvitesDocument, baseOptions);
}
export type PostUsersInvitesMutationHookResult = ReturnType<
  typeof usePostUsersInvitesMutation
>;
export type PostUsersInvitesMutationResult = Apollo.MutationResult<
  ApolloTypes.PostUsersInvitesMutation
>;
export type PostUsersInvitesMutationOptions = Apollo.BaseMutationOptions<
  ApolloTypes.PostUsersInvitesMutation,
  ApolloTypes.PostUsersInvitesMutationVariables
>;
export const PostWhitelistsGenerateBestFitDocument = /* #__PURE__ */ gql`
  mutation postWhitelistsGenerateBestFit(
    $generateBestFitWhitelistRequestInput: GenerateBestFitWhitelistRequestInput
  ) {
    postWhitelistsGenerateBestFit(
      generateBestFitWhitelistRequestInput: $generateBestFitWhitelistRequestInput
    ) {
      assetIds
    }
  }
`;
export type PostWhitelistsGenerateBestFitMutationFn = Apollo.MutationFunction<
  ApolloTypes.PostWhitelistsGenerateBestFitMutation,
  ApolloTypes.PostWhitelistsGenerateBestFitMutationVariables
>;

/**
 * __usePostWhitelistsGenerateBestFitMutation__
 *
 * To run a mutation, you first call `usePostWhitelistsGenerateBestFitMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `usePostWhitelistsGenerateBestFitMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [postWhitelistsGenerateBestFitMutation, { data, loading, error }] = usePostWhitelistsGenerateBestFitMutation({
 *   variables: {
 *      generateBestFitWhitelistRequestInput: // value for 'generateBestFitWhitelistRequestInput'
 *   },
 * });
 */
export function usePostWhitelistsGenerateBestFitMutation(
  baseOptions?: Apollo.MutationHookOptions<
    ApolloTypes.PostWhitelistsGenerateBestFitMutation,
    ApolloTypes.PostWhitelistsGenerateBestFitMutationVariables
  >
) {
  return Apollo.useMutation<
    ApolloTypes.PostWhitelistsGenerateBestFitMutation,
    ApolloTypes.PostWhitelistsGenerateBestFitMutationVariables
  >(PostWhitelistsGenerateBestFitDocument, baseOptions);
}
export type PostWhitelistsGenerateBestFitMutationHookResult = ReturnType<
  typeof usePostWhitelistsGenerateBestFitMutation
>;
export type PostWhitelistsGenerateBestFitMutationResult = Apollo.MutationResult<
  ApolloTypes.PostWhitelistsGenerateBestFitMutation
>;
export type PostWhitelistsGenerateBestFitMutationOptions = Apollo.BaseMutationOptions<
  ApolloTypes.PostWhitelistsGenerateBestFitMutation,
  ApolloTypes.PostWhitelistsGenerateBestFitMutationVariables
>;
export const PutAccountCloseDocument = /* #__PURE__ */ gql`
  mutation putAccountClose($id: String!) {
    putAccountClose(id: $id) {
      apexAccount {
        apexAccountNumber
        apexRequestId
        createdAt
        id
        investorId
        metadata
        status
        updatedAt
      }
    }
  }
`;
export type PutAccountCloseMutationFn = Apollo.MutationFunction<
  ApolloTypes.PutAccountCloseMutation,
  ApolloTypes.PutAccountCloseMutationVariables
>;

/**
 * __usePutAccountCloseMutation__
 *
 * To run a mutation, you first call `usePutAccountCloseMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `usePutAccountCloseMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [putAccountCloseMutation, { data, loading, error }] = usePutAccountCloseMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function usePutAccountCloseMutation(
  baseOptions?: Apollo.MutationHookOptions<
    ApolloTypes.PutAccountCloseMutation,
    ApolloTypes.PutAccountCloseMutationVariables
  >
) {
  return Apollo.useMutation<
    ApolloTypes.PutAccountCloseMutation,
    ApolloTypes.PutAccountCloseMutationVariables
  >(PutAccountCloseDocument, baseOptions);
}
export type PutAccountCloseMutationHookResult = ReturnType<
  typeof usePutAccountCloseMutation
>;
export type PutAccountCloseMutationResult = Apollo.MutationResult<
  ApolloTypes.PutAccountCloseMutation
>;
export type PutAccountCloseMutationOptions = Apollo.BaseMutationOptions<
  ApolloTypes.PutAccountCloseMutation,
  ApolloTypes.PutAccountCloseMutationVariables
>;
export const PutAccountReopenDocument = /* #__PURE__ */ gql`
  mutation putAccountReopen($id: String!) {
    putAccountReopen(id: $id) {
      apexAccount {
        apexAccountNumber
        apexRequestId
        createdAt
        id
        investorId
        metadata
        status
        updatedAt
      }
    }
  }
`;
export type PutAccountReopenMutationFn = Apollo.MutationFunction<
  ApolloTypes.PutAccountReopenMutation,
  ApolloTypes.PutAccountReopenMutationVariables
>;

/**
 * __usePutAccountReopenMutation__
 *
 * To run a mutation, you first call `usePutAccountReopenMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `usePutAccountReopenMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [putAccountReopenMutation, { data, loading, error }] = usePutAccountReopenMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function usePutAccountReopenMutation(
  baseOptions?: Apollo.MutationHookOptions<
    ApolloTypes.PutAccountReopenMutation,
    ApolloTypes.PutAccountReopenMutationVariables
  >
) {
  return Apollo.useMutation<
    ApolloTypes.PutAccountReopenMutation,
    ApolloTypes.PutAccountReopenMutationVariables
  >(PutAccountReopenDocument, baseOptions);
}
export type PutAccountReopenMutationHookResult = ReturnType<
  typeof usePutAccountReopenMutation
>;
export type PutAccountReopenMutationResult = Apollo.MutationResult<
  ApolloTypes.PutAccountReopenMutation
>;
export type PutAccountReopenMutationOptions = Apollo.BaseMutationOptions<
  ApolloTypes.PutAccountReopenMutation,
  ApolloTypes.PutAccountReopenMutationVariables
>;
export const PutAccountsCloseDocument = /* #__PURE__ */ gql`
  mutation putAccountsClose($accountNumber: String!) {
    putAccountsClose(accountNumber: $accountNumber) {
      apexAccount {
        accountNumber
        accountRequestId
        accountType
        createdAt
        status
        updatedAt
      }
    }
  }
`;
export type PutAccountsCloseMutationFn = Apollo.MutationFunction<
  ApolloTypes.PutAccountsCloseMutation,
  ApolloTypes.PutAccountsCloseMutationVariables
>;

/**
 * __usePutAccountsCloseMutation__
 *
 * To run a mutation, you first call `usePutAccountsCloseMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `usePutAccountsCloseMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [putAccountsCloseMutation, { data, loading, error }] = usePutAccountsCloseMutation({
 *   variables: {
 *      accountNumber: // value for 'accountNumber'
 *   },
 * });
 */
export function usePutAccountsCloseMutation(
  baseOptions?: Apollo.MutationHookOptions<
    ApolloTypes.PutAccountsCloseMutation,
    ApolloTypes.PutAccountsCloseMutationVariables
  >
) {
  return Apollo.useMutation<
    ApolloTypes.PutAccountsCloseMutation,
    ApolloTypes.PutAccountsCloseMutationVariables
  >(PutAccountsCloseDocument, baseOptions);
}
export type PutAccountsCloseMutationHookResult = ReturnType<
  typeof usePutAccountsCloseMutation
>;
export type PutAccountsCloseMutationResult = Apollo.MutationResult<
  ApolloTypes.PutAccountsCloseMutation
>;
export type PutAccountsCloseMutationOptions = Apollo.BaseMutationOptions<
  ApolloTypes.PutAccountsCloseMutation,
  ApolloTypes.PutAccountsCloseMutationVariables
>;
export const PutAccountsReopenDocument = /* #__PURE__ */ gql`
  mutation putAccountsReopen($accountNumber: String!) {
    putAccountsReopen(accountNumber: $accountNumber) {
      apexAccount {
        accountNumber
        accountRequestId
        accountType
        createdAt
        status
        updatedAt
      }
    }
  }
`;
export type PutAccountsReopenMutationFn = Apollo.MutationFunction<
  ApolloTypes.PutAccountsReopenMutation,
  ApolloTypes.PutAccountsReopenMutationVariables
>;

/**
 * __usePutAccountsReopenMutation__
 *
 * To run a mutation, you first call `usePutAccountsReopenMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `usePutAccountsReopenMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [putAccountsReopenMutation, { data, loading, error }] = usePutAccountsReopenMutation({
 *   variables: {
 *      accountNumber: // value for 'accountNumber'
 *   },
 * });
 */
export function usePutAccountsReopenMutation(
  baseOptions?: Apollo.MutationHookOptions<
    ApolloTypes.PutAccountsReopenMutation,
    ApolloTypes.PutAccountsReopenMutationVariables
  >
) {
  return Apollo.useMutation<
    ApolloTypes.PutAccountsReopenMutation,
    ApolloTypes.PutAccountsReopenMutationVariables
  >(PutAccountsReopenDocument, baseOptions);
}
export type PutAccountsReopenMutationHookResult = ReturnType<
  typeof usePutAccountsReopenMutation
>;
export type PutAccountsReopenMutationResult = Apollo.MutationResult<
  ApolloTypes.PutAccountsReopenMutation
>;
export type PutAccountsReopenMutationOptions = Apollo.BaseMutationOptions<
  ApolloTypes.PutAccountsReopenMutation,
  ApolloTypes.PutAccountsReopenMutationVariables
>;
export const PutIdentityInvestigationActionDocument = /* #__PURE__ */ gql`
  mutation putIdentityInvestigationAction(
    $action: Action4!
    $sketchId: String!
    $updateIdentityInvestigationRequestInput: UpdateIdentityInvestigationRequestInput
  ) {
    putIdentityInvestigationAction(
      action: $action
      sketchId: $sketchId
      updateIdentityInvestigationRequestInput: $updateIdentityInvestigationRequestInput
    ) {
      identityState {
        archived
        history {
          comment
          stateChange
          timestamp
          user
        }
        id
        status
      }
    }
  }
`;
export type PutIdentityInvestigationActionMutationFn = Apollo.MutationFunction<
  ApolloTypes.PutIdentityInvestigationActionMutation,
  ApolloTypes.PutIdentityInvestigationActionMutationVariables
>;

/**
 * __usePutIdentityInvestigationActionMutation__
 *
 * To run a mutation, you first call `usePutIdentityInvestigationActionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `usePutIdentityInvestigationActionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [putIdentityInvestigationActionMutation, { data, loading, error }] = usePutIdentityInvestigationActionMutation({
 *   variables: {
 *      action: // value for 'action'
 *      sketchId: // value for 'sketchId'
 *      updateIdentityInvestigationRequestInput: // value for 'updateIdentityInvestigationRequestInput'
 *   },
 * });
 */
export function usePutIdentityInvestigationActionMutation(
  baseOptions?: Apollo.MutationHookOptions<
    ApolloTypes.PutIdentityInvestigationActionMutation,
    ApolloTypes.PutIdentityInvestigationActionMutationVariables
  >
) {
  return Apollo.useMutation<
    ApolloTypes.PutIdentityInvestigationActionMutation,
    ApolloTypes.PutIdentityInvestigationActionMutationVariables
  >(PutIdentityInvestigationActionDocument, baseOptions);
}
export type PutIdentityInvestigationActionMutationHookResult = ReturnType<
  typeof usePutIdentityInvestigationActionMutation
>;
export type PutIdentityInvestigationActionMutationResult = Apollo.MutationResult<
  ApolloTypes.PutIdentityInvestigationActionMutation
>;
export type PutIdentityInvestigationActionMutationOptions = Apollo.BaseMutationOptions<
  ApolloTypes.PutIdentityInvestigationActionMutation,
  ApolloTypes.PutIdentityInvestigationActionMutationVariables
>;
export const PutInvestorAccountCloseDocument = /* #__PURE__ */ gql`
  mutation putInvestorAccountClose($investorId: String!) {
    putInvestorAccountClose(investorId: $investorId) {
      apexAccount {
        apexAccountNumber
        apexRequestId
        createdAt
        id
        investorId
        metadata
        status
        updatedAt
      }
    }
  }
`;
export type PutInvestorAccountCloseMutationFn = Apollo.MutationFunction<
  ApolloTypes.PutInvestorAccountCloseMutation,
  ApolloTypes.PutInvestorAccountCloseMutationVariables
>;

/**
 * __usePutInvestorAccountCloseMutation__
 *
 * To run a mutation, you first call `usePutInvestorAccountCloseMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `usePutInvestorAccountCloseMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [putInvestorAccountCloseMutation, { data, loading, error }] = usePutInvestorAccountCloseMutation({
 *   variables: {
 *      investorId: // value for 'investorId'
 *   },
 * });
 */
export function usePutInvestorAccountCloseMutation(
  baseOptions?: Apollo.MutationHookOptions<
    ApolloTypes.PutInvestorAccountCloseMutation,
    ApolloTypes.PutInvestorAccountCloseMutationVariables
  >
) {
  return Apollo.useMutation<
    ApolloTypes.PutInvestorAccountCloseMutation,
    ApolloTypes.PutInvestorAccountCloseMutationVariables
  >(PutInvestorAccountCloseDocument, baseOptions);
}
export type PutInvestorAccountCloseMutationHookResult = ReturnType<
  typeof usePutInvestorAccountCloseMutation
>;
export type PutInvestorAccountCloseMutationResult = Apollo.MutationResult<
  ApolloTypes.PutInvestorAccountCloseMutation
>;
export type PutInvestorAccountCloseMutationOptions = Apollo.BaseMutationOptions<
  ApolloTypes.PutInvestorAccountCloseMutation,
  ApolloTypes.PutInvestorAccountCloseMutationVariables
>;
export const PutInvestorAccountReopenDocument = /* #__PURE__ */ gql`
  mutation putInvestorAccountReopen($investorId: String!) {
    putInvestorAccountReopen(investorId: $investorId) {
      apexAccount {
        apexAccountNumber
        apexRequestId
        createdAt
        id
        investorId
        metadata
        status
        updatedAt
      }
    }
  }
`;
export type PutInvestorAccountReopenMutationFn = Apollo.MutationFunction<
  ApolloTypes.PutInvestorAccountReopenMutation,
  ApolloTypes.PutInvestorAccountReopenMutationVariables
>;

/**
 * __usePutInvestorAccountReopenMutation__
 *
 * To run a mutation, you first call `usePutInvestorAccountReopenMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `usePutInvestorAccountReopenMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [putInvestorAccountReopenMutation, { data, loading, error }] = usePutInvestorAccountReopenMutation({
 *   variables: {
 *      investorId: // value for 'investorId'
 *   },
 * });
 */
export function usePutInvestorAccountReopenMutation(
  baseOptions?: Apollo.MutationHookOptions<
    ApolloTypes.PutInvestorAccountReopenMutation,
    ApolloTypes.PutInvestorAccountReopenMutationVariables
  >
) {
  return Apollo.useMutation<
    ApolloTypes.PutInvestorAccountReopenMutation,
    ApolloTypes.PutInvestorAccountReopenMutationVariables
  >(PutInvestorAccountReopenDocument, baseOptions);
}
export type PutInvestorAccountReopenMutationHookResult = ReturnType<
  typeof usePutInvestorAccountReopenMutation
>;
export type PutInvestorAccountReopenMutationResult = Apollo.MutationResult<
  ApolloTypes.PutInvestorAccountReopenMutation
>;
export type PutInvestorAccountReopenMutationOptions = Apollo.BaseMutationOptions<
  ApolloTypes.PutInvestorAccountReopenMutation,
  ApolloTypes.PutInvestorAccountReopenMutationVariables
>;
export const PutSketchActionDocument = /* #__PURE__ */ gql`
  mutation putSketchAction(
    $action: Action4!
    $sketchId: String!
    $updateSketchRequestInput: UpdateSketchRequestInput
  ) {
    putSketchAction(
      action: $action
      sketchId: $sketchId
      updateSketchRequestInput: $updateSketchRequestInput
    ) {
      sketchState {
        archived
        history {
          comment
          stateChange
          timestamp
          user
        }
        sketchId
        status
      }
    }
  }
`;
export type PutSketchActionMutationFn = Apollo.MutationFunction<
  ApolloTypes.PutSketchActionMutation,
  ApolloTypes.PutSketchActionMutationVariables
>;

/**
 * __usePutSketchActionMutation__
 *
 * To run a mutation, you first call `usePutSketchActionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `usePutSketchActionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [putSketchActionMutation, { data, loading, error }] = usePutSketchActionMutation({
 *   variables: {
 *      action: // value for 'action'
 *      sketchId: // value for 'sketchId'
 *      updateSketchRequestInput: // value for 'updateSketchRequestInput'
 *   },
 * });
 */
export function usePutSketchActionMutation(
  baseOptions?: Apollo.MutationHookOptions<
    ApolloTypes.PutSketchActionMutation,
    ApolloTypes.PutSketchActionMutationVariables
  >
) {
  return Apollo.useMutation<
    ApolloTypes.PutSketchActionMutation,
    ApolloTypes.PutSketchActionMutationVariables
  >(PutSketchActionDocument, baseOptions);
}
export type PutSketchActionMutationHookResult = ReturnType<
  typeof usePutSketchActionMutation
>;
export type PutSketchActionMutationResult = Apollo.MutationResult<
  ApolloTypes.PutSketchActionMutation
>;
export type PutSketchActionMutationOptions = Apollo.BaseMutationOptions<
  ApolloTypes.PutSketchActionMutation,
  ApolloTypes.PutSketchActionMutationVariables
>;
export const ApexAccountsGetAccountStatementsDocument = /* #__PURE__ */ gql`
  query apexAccountsGetAccountStatements(
    $accountNumber: String!
    $documentType: String
    $endMonth: String!
    $endYear: String!
    $startMonth: String!
    $startYear: String!
  ) {
    apexAccountsGetAccountStatements(
      accountNumber: $accountNumber
      documentType: $documentType
      endMonth: $endMonth
      endYear: $endYear
      startMonth: $startMonth
      startYear: $startYear
    ) {
      statements {
        accountNumber
        documentType
        statementURL
        statmentDate
      }
    }
  }
`;

/**
 * __useApexAccountsGetAccountStatementsQuery__
 *
 * To run a query within a React component, call `useApexAccountsGetAccountStatementsQuery` and pass it any options that fit your needs.
 * When your component renders, `useApexAccountsGetAccountStatementsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useApexAccountsGetAccountStatementsQuery({
 *   variables: {
 *      accountNumber: // value for 'accountNumber'
 *      documentType: // value for 'documentType'
 *      endMonth: // value for 'endMonth'
 *      endYear: // value for 'endYear'
 *      startMonth: // value for 'startMonth'
 *      startYear: // value for 'startYear'
 *   },
 * });
 */
export function useApexAccountsGetAccountStatementsQuery(
  baseOptions?: Apollo.QueryHookOptions<
    ApolloTypes.ApexAccountsGetAccountStatementsQuery,
    ApolloTypes.ApexAccountsGetAccountStatementsQueryVariables
  >
) {
  return Apollo.useQuery<
    ApolloTypes.ApexAccountsGetAccountStatementsQuery,
    ApolloTypes.ApexAccountsGetAccountStatementsQueryVariables
  >(ApexAccountsGetAccountStatementsDocument, baseOptions);
}
export function useApexAccountsGetAccountStatementsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    ApolloTypes.ApexAccountsGetAccountStatementsQuery,
    ApolloTypes.ApexAccountsGetAccountStatementsQueryVariables
  >
) {
  return Apollo.useLazyQuery<
    ApolloTypes.ApexAccountsGetAccountStatementsQuery,
    ApolloTypes.ApexAccountsGetAccountStatementsQueryVariables
  >(ApexAccountsGetAccountStatementsDocument, baseOptions);
}
export type ApexAccountsGetAccountStatementsQueryHookResult = ReturnType<
  typeof useApexAccountsGetAccountStatementsQuery
>;
export type ApexAccountsGetAccountStatementsLazyQueryHookResult = ReturnType<
  typeof useApexAccountsGetAccountStatementsLazyQuery
>;
export type ApexAccountsGetAccountStatementsQueryResult = Apollo.QueryResult<
  ApolloTypes.ApexAccountsGetAccountStatementsQuery,
  ApolloTypes.ApexAccountsGetAccountStatementsQueryVariables
>;
export function refetchApexAccountsGetAccountStatementsQuery(
  variables?: ApolloTypes.ApexAccountsGetAccountStatementsQueryVariables
) {
  return {
    query: ApexAccountsGetAccountStatementsDocument,
    variables
  };
}
export const ApexAccountsGetAchRelationshipDocument = /* #__PURE__ */ gql`
  query apexAccountsGetAchRelationship($accountNumber: String!) {
    apexAccountsGetAchRelationship(accountNumber: $accountNumber) {
      achRelationship {
        accountNumber
        achRelationshipId
        createdAt
        linkedBankAccountId
        status
        updatedAt
      }
    }
  }
`;

/**
 * __useApexAccountsGetAchRelationshipQuery__
 *
 * To run a query within a React component, call `useApexAccountsGetAchRelationshipQuery` and pass it any options that fit your needs.
 * When your component renders, `useApexAccountsGetAchRelationshipQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useApexAccountsGetAchRelationshipQuery({
 *   variables: {
 *      accountNumber: // value for 'accountNumber'
 *   },
 * });
 */
export function useApexAccountsGetAchRelationshipQuery(
  baseOptions?: Apollo.QueryHookOptions<
    ApolloTypes.ApexAccountsGetAchRelationshipQuery,
    ApolloTypes.ApexAccountsGetAchRelationshipQueryVariables
  >
) {
  return Apollo.useQuery<
    ApolloTypes.ApexAccountsGetAchRelationshipQuery,
    ApolloTypes.ApexAccountsGetAchRelationshipQueryVariables
  >(ApexAccountsGetAchRelationshipDocument, baseOptions);
}
export function useApexAccountsGetAchRelationshipLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    ApolloTypes.ApexAccountsGetAchRelationshipQuery,
    ApolloTypes.ApexAccountsGetAchRelationshipQueryVariables
  >
) {
  return Apollo.useLazyQuery<
    ApolloTypes.ApexAccountsGetAchRelationshipQuery,
    ApolloTypes.ApexAccountsGetAchRelationshipQueryVariables
  >(ApexAccountsGetAchRelationshipDocument, baseOptions);
}
export type ApexAccountsGetAchRelationshipQueryHookResult = ReturnType<
  typeof useApexAccountsGetAchRelationshipQuery
>;
export type ApexAccountsGetAchRelationshipLazyQueryHookResult = ReturnType<
  typeof useApexAccountsGetAchRelationshipLazyQuery
>;
export type ApexAccountsGetAchRelationshipQueryResult = Apollo.QueryResult<
  ApolloTypes.ApexAccountsGetAchRelationshipQuery,
  ApolloTypes.ApexAccountsGetAchRelationshipQueryVariables
>;
export function refetchApexAccountsGetAchRelationshipQuery(
  variables?: ApolloTypes.ApexAccountsGetAchRelationshipQueryVariables
) {
  return {
    query: ApexAccountsGetAchRelationshipDocument,
    variables
  };
}
export const ApexAccountsGetApexAccountDocument = /* #__PURE__ */ gql`
  query apexAccountsGetApexAccount($accountNumber: String!) {
    apexAccountsGetApexAccount(accountNumber: $accountNumber) {
      apexAccount {
        accountNumber
        accountRequestId
        accountType
        createdAt
        status
        updatedAt
      }
    }
  }
`;

/**
 * __useApexAccountsGetApexAccountQuery__
 *
 * To run a query within a React component, call `useApexAccountsGetApexAccountQuery` and pass it any options that fit your needs.
 * When your component renders, `useApexAccountsGetApexAccountQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useApexAccountsGetApexAccountQuery({
 *   variables: {
 *      accountNumber: // value for 'accountNumber'
 *   },
 * });
 */
export function useApexAccountsGetApexAccountQuery(
  baseOptions?: Apollo.QueryHookOptions<
    ApolloTypes.ApexAccountsGetApexAccountQuery,
    ApolloTypes.ApexAccountsGetApexAccountQueryVariables
  >
) {
  return Apollo.useQuery<
    ApolloTypes.ApexAccountsGetApexAccountQuery,
    ApolloTypes.ApexAccountsGetApexAccountQueryVariables
  >(ApexAccountsGetApexAccountDocument, baseOptions);
}
export function useApexAccountsGetApexAccountLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    ApolloTypes.ApexAccountsGetApexAccountQuery,
    ApolloTypes.ApexAccountsGetApexAccountQueryVariables
  >
) {
  return Apollo.useLazyQuery<
    ApolloTypes.ApexAccountsGetApexAccountQuery,
    ApolloTypes.ApexAccountsGetApexAccountQueryVariables
  >(ApexAccountsGetApexAccountDocument, baseOptions);
}
export type ApexAccountsGetApexAccountQueryHookResult = ReturnType<
  typeof useApexAccountsGetApexAccountQuery
>;
export type ApexAccountsGetApexAccountLazyQueryHookResult = ReturnType<
  typeof useApexAccountsGetApexAccountLazyQuery
>;
export type ApexAccountsGetApexAccountQueryResult = Apollo.QueryResult<
  ApolloTypes.ApexAccountsGetApexAccountQuery,
  ApolloTypes.ApexAccountsGetApexAccountQueryVariables
>;
export function refetchApexAccountsGetApexAccountQuery(
  variables?: ApolloTypes.ApexAccountsGetApexAccountQueryVariables
) {
  return { query: ApexAccountsGetApexAccountDocument, variables };
}
export const ApexAccountsGetApexAccountBalanceDocument = /* #__PURE__ */ gql`
  query apexAccountsGetApexAccountBalance($accountNumber: String!) {
    apexAccountsGetApexAccountBalance(accountNumber: $accountNumber) {
      apexBalance {
        accountNumber
        amountAvailableForTrading
        amountAvailableForWithdraw
        amountOfPendingWithdrawals
        amountOfUnclearedDeposits
        timestamp
      }
    }
  }
`;

/**
 * __useApexAccountsGetApexAccountBalanceQuery__
 *
 * To run a query within a React component, call `useApexAccountsGetApexAccountBalanceQuery` and pass it any options that fit your needs.
 * When your component renders, `useApexAccountsGetApexAccountBalanceQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useApexAccountsGetApexAccountBalanceQuery({
 *   variables: {
 *      accountNumber: // value for 'accountNumber'
 *   },
 * });
 */
export function useApexAccountsGetApexAccountBalanceQuery(
  baseOptions?: Apollo.QueryHookOptions<
    ApolloTypes.ApexAccountsGetApexAccountBalanceQuery,
    ApolloTypes.ApexAccountsGetApexAccountBalanceQueryVariables
  >
) {
  return Apollo.useQuery<
    ApolloTypes.ApexAccountsGetApexAccountBalanceQuery,
    ApolloTypes.ApexAccountsGetApexAccountBalanceQueryVariables
  >(ApexAccountsGetApexAccountBalanceDocument, baseOptions);
}
export function useApexAccountsGetApexAccountBalanceLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    ApolloTypes.ApexAccountsGetApexAccountBalanceQuery,
    ApolloTypes.ApexAccountsGetApexAccountBalanceQueryVariables
  >
) {
  return Apollo.useLazyQuery<
    ApolloTypes.ApexAccountsGetApexAccountBalanceQuery,
    ApolloTypes.ApexAccountsGetApexAccountBalanceQueryVariables
  >(ApexAccountsGetApexAccountBalanceDocument, baseOptions);
}
export type ApexAccountsGetApexAccountBalanceQueryHookResult = ReturnType<
  typeof useApexAccountsGetApexAccountBalanceQuery
>;
export type ApexAccountsGetApexAccountBalanceLazyQueryHookResult = ReturnType<
  typeof useApexAccountsGetApexAccountBalanceLazyQuery
>;
export type ApexAccountsGetApexAccountBalanceQueryResult = Apollo.QueryResult<
  ApolloTypes.ApexAccountsGetApexAccountBalanceQuery,
  ApolloTypes.ApexAccountsGetApexAccountBalanceQueryVariables
>;
export function refetchApexAccountsGetApexAccountBalanceQuery(
  variables?: ApolloTypes.ApexAccountsGetApexAccountBalanceQueryVariables
) {
  return {
    query: ApexAccountsGetApexAccountBalanceDocument,
    variables
  };
}
export const ApexAccountsGetApexAccountMetadataDocument = /* #__PURE__ */ gql`
  query apexAccountsGetApexAccountMetadata($accountNumber: String!) {
    apexAccountsGetApexAccountMetadata(accountNumber: $accountNumber) {
      metadata {
        accountNumber
        accountRequestId
        aleIds
        createdAt
        reasons
        sketchIds
        submittedForms {
          formId
          formName
        }
        updatedAt
      }
    }
  }
`;

/**
 * __useApexAccountsGetApexAccountMetadataQuery__
 *
 * To run a query within a React component, call `useApexAccountsGetApexAccountMetadataQuery` and pass it any options that fit your needs.
 * When your component renders, `useApexAccountsGetApexAccountMetadataQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useApexAccountsGetApexAccountMetadataQuery({
 *   variables: {
 *      accountNumber: // value for 'accountNumber'
 *   },
 * });
 */
export function useApexAccountsGetApexAccountMetadataQuery(
  baseOptions?: Apollo.QueryHookOptions<
    ApolloTypes.ApexAccountsGetApexAccountMetadataQuery,
    ApolloTypes.ApexAccountsGetApexAccountMetadataQueryVariables
  >
) {
  return Apollo.useQuery<
    ApolloTypes.ApexAccountsGetApexAccountMetadataQuery,
    ApolloTypes.ApexAccountsGetApexAccountMetadataQueryVariables
  >(ApexAccountsGetApexAccountMetadataDocument, baseOptions);
}
export function useApexAccountsGetApexAccountMetadataLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    ApolloTypes.ApexAccountsGetApexAccountMetadataQuery,
    ApolloTypes.ApexAccountsGetApexAccountMetadataQueryVariables
  >
) {
  return Apollo.useLazyQuery<
    ApolloTypes.ApexAccountsGetApexAccountMetadataQuery,
    ApolloTypes.ApexAccountsGetApexAccountMetadataQueryVariables
  >(ApexAccountsGetApexAccountMetadataDocument, baseOptions);
}
export type ApexAccountsGetApexAccountMetadataQueryHookResult = ReturnType<
  typeof useApexAccountsGetApexAccountMetadataQuery
>;
export type ApexAccountsGetApexAccountMetadataLazyQueryHookResult = ReturnType<
  typeof useApexAccountsGetApexAccountMetadataLazyQuery
>;
export type ApexAccountsGetApexAccountMetadataQueryResult = Apollo.QueryResult<
  ApolloTypes.ApexAccountsGetApexAccountMetadataQuery,
  ApolloTypes.ApexAccountsGetApexAccountMetadataQueryVariables
>;
export function refetchApexAccountsGetApexAccountMetadataQuery(
  variables?: ApolloTypes.ApexAccountsGetApexAccountMetadataQueryVariables
) {
  return {
    query: ApexAccountsGetApexAccountMetadataDocument,
    variables
  };
}
export const ApexAccountsGetApexTransferDocument = /* #__PURE__ */ gql`
  query apexAccountsGetApexTransfer(
    $accountNumber: String!
    $transferNumber: String!
  ) {
    apexAccountsGetApexTransfer(
      accountNumber: $accountNumber
      transferNumber: $transferNumber
    ) {
      transfer {
        accountNumber
        amount
        createdAt
        direction
        linkedBankAccountId
        status
        transferId
        transferMethod
        transferNumber
        updatedAt
      }
    }
  }
`;

/**
 * __useApexAccountsGetApexTransferQuery__
 *
 * To run a query within a React component, call `useApexAccountsGetApexTransferQuery` and pass it any options that fit your needs.
 * When your component renders, `useApexAccountsGetApexTransferQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useApexAccountsGetApexTransferQuery({
 *   variables: {
 *      accountNumber: // value for 'accountNumber'
 *      transferNumber: // value for 'transferNumber'
 *   },
 * });
 */
export function useApexAccountsGetApexTransferQuery(
  baseOptions?: Apollo.QueryHookOptions<
    ApolloTypes.ApexAccountsGetApexTransferQuery,
    ApolloTypes.ApexAccountsGetApexTransferQueryVariables
  >
) {
  return Apollo.useQuery<
    ApolloTypes.ApexAccountsGetApexTransferQuery,
    ApolloTypes.ApexAccountsGetApexTransferQueryVariables
  >(ApexAccountsGetApexTransferDocument, baseOptions);
}
export function useApexAccountsGetApexTransferLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    ApolloTypes.ApexAccountsGetApexTransferQuery,
    ApolloTypes.ApexAccountsGetApexTransferQueryVariables
  >
) {
  return Apollo.useLazyQuery<
    ApolloTypes.ApexAccountsGetApexTransferQuery,
    ApolloTypes.ApexAccountsGetApexTransferQueryVariables
  >(ApexAccountsGetApexTransferDocument, baseOptions);
}
export type ApexAccountsGetApexTransferQueryHookResult = ReturnType<
  typeof useApexAccountsGetApexTransferQuery
>;
export type ApexAccountsGetApexTransferLazyQueryHookResult = ReturnType<
  typeof useApexAccountsGetApexTransferLazyQuery
>;
export type ApexAccountsGetApexTransferQueryResult = Apollo.QueryResult<
  ApolloTypes.ApexAccountsGetApexTransferQuery,
  ApolloTypes.ApexAccountsGetApexTransferQueryVariables
>;
export function refetchApexAccountsGetApexTransferQuery(
  variables?: ApolloTypes.ApexAccountsGetApexTransferQueryVariables
) {
  return { query: ApexAccountsGetApexTransferDocument, variables };
}
export const ApexAccountsGetApexTransfersDocument = /* #__PURE__ */ gql`
  query apexAccountsGetApexTransfers($accountNumber: String!) {
    apexAccountsGetApexTransfers(accountNumber: $accountNumber) {
      transfers {
        accountNumber
        amount
        createdAt
        direction
        linkedBankAccountId
        status
        transferId
        transferMethod
        transferNumber
        updatedAt
      }
    }
  }
`;

/**
 * __useApexAccountsGetApexTransfersQuery__
 *
 * To run a query within a React component, call `useApexAccountsGetApexTransfersQuery` and pass it any options that fit your needs.
 * When your component renders, `useApexAccountsGetApexTransfersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useApexAccountsGetApexTransfersQuery({
 *   variables: {
 *      accountNumber: // value for 'accountNumber'
 *   },
 * });
 */
export function useApexAccountsGetApexTransfersQuery(
  baseOptions?: Apollo.QueryHookOptions<
    ApolloTypes.ApexAccountsGetApexTransfersQuery,
    ApolloTypes.ApexAccountsGetApexTransfersQueryVariables
  >
) {
  return Apollo.useQuery<
    ApolloTypes.ApexAccountsGetApexTransfersQuery,
    ApolloTypes.ApexAccountsGetApexTransfersQueryVariables
  >(ApexAccountsGetApexTransfersDocument, baseOptions);
}
export function useApexAccountsGetApexTransfersLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    ApolloTypes.ApexAccountsGetApexTransfersQuery,
    ApolloTypes.ApexAccountsGetApexTransfersQueryVariables
  >
) {
  return Apollo.useLazyQuery<
    ApolloTypes.ApexAccountsGetApexTransfersQuery,
    ApolloTypes.ApexAccountsGetApexTransfersQueryVariables
  >(ApexAccountsGetApexTransfersDocument, baseOptions);
}
export type ApexAccountsGetApexTransfersQueryHookResult = ReturnType<
  typeof useApexAccountsGetApexTransfersQuery
>;
export type ApexAccountsGetApexTransfersLazyQueryHookResult = ReturnType<
  typeof useApexAccountsGetApexTransfersLazyQuery
>;
export type ApexAccountsGetApexTransfersQueryResult = Apollo.QueryResult<
  ApolloTypes.ApexAccountsGetApexTransfersQuery,
  ApolloTypes.ApexAccountsGetApexTransfersQueryVariables
>;
export function refetchApexAccountsGetApexTransfersQuery(
  variables?: ApolloTypes.ApexAccountsGetApexTransfersQueryVariables
) {
  return { query: ApexAccountsGetApexTransfersDocument, variables };
}
export const ApexAccountsGetCorporateAgreementFormDocument = /* #__PURE__ */ gql`
  query apexAccountsGetCorporateAgreementForm($formId: String!) {
    apexAccountsGetCorporateAgreementForm(formId: $formId) {
      corporateAgreementForm {
        articlesOfIncorporationSnapId
        authorizedOfficerName
        authorizedOfficerTitle
        corporationName
        createdAt
        formId
        isAuthorizedOfficerESigned
        isSecretaryESigned
        secretaryName
        stateOfIncorporation
        updatedAt
      }
    }
  }
`;

/**
 * __useApexAccountsGetCorporateAgreementFormQuery__
 *
 * To run a query within a React component, call `useApexAccountsGetCorporateAgreementFormQuery` and pass it any options that fit your needs.
 * When your component renders, `useApexAccountsGetCorporateAgreementFormQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useApexAccountsGetCorporateAgreementFormQuery({
 *   variables: {
 *      formId: // value for 'formId'
 *   },
 * });
 */
export function useApexAccountsGetCorporateAgreementFormQuery(
  baseOptions?: Apollo.QueryHookOptions<
    ApolloTypes.ApexAccountsGetCorporateAgreementFormQuery,
    ApolloTypes.ApexAccountsGetCorporateAgreementFormQueryVariables
  >
) {
  return Apollo.useQuery<
    ApolloTypes.ApexAccountsGetCorporateAgreementFormQuery,
    ApolloTypes.ApexAccountsGetCorporateAgreementFormQueryVariables
  >(ApexAccountsGetCorporateAgreementFormDocument, baseOptions);
}
export function useApexAccountsGetCorporateAgreementFormLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    ApolloTypes.ApexAccountsGetCorporateAgreementFormQuery,
    ApolloTypes.ApexAccountsGetCorporateAgreementFormQueryVariables
  >
) {
  return Apollo.useLazyQuery<
    ApolloTypes.ApexAccountsGetCorporateAgreementFormQuery,
    ApolloTypes.ApexAccountsGetCorporateAgreementFormQueryVariables
  >(ApexAccountsGetCorporateAgreementFormDocument, baseOptions);
}
export type ApexAccountsGetCorporateAgreementFormQueryHookResult = ReturnType<
  typeof useApexAccountsGetCorporateAgreementFormQuery
>;
export type ApexAccountsGetCorporateAgreementFormLazyQueryHookResult = ReturnType<
  typeof useApexAccountsGetCorporateAgreementFormLazyQuery
>;
export type ApexAccountsGetCorporateAgreementFormQueryResult = Apollo.QueryResult<
  ApolloTypes.ApexAccountsGetCorporateAgreementFormQuery,
  ApolloTypes.ApexAccountsGetCorporateAgreementFormQueryVariables
>;
export function refetchApexAccountsGetCorporateAgreementFormQuery(
  variables?: ApolloTypes.ApexAccountsGetCorporateAgreementFormQueryVariables
) {
  return {
    query: ApexAccountsGetCorporateAgreementFormDocument,
    variables
  };
}
export const ApexAccountsGetEntityAccountFormDocument = /* #__PURE__ */ gql`
  query apexAccountsGetEntityAccountForm($formId: String!) {
    apexAccountsGetEntityAccountForm(formId: $formId) {
      entityAccountForm {
        accountInformation {
          accountTradingInformation {
            companyTickerSymbols
            isAffiliatedExchangeOrFINRA
            isControlPerson
            memberFirmNames
          }
          businessAddress {
            city
            country
            postalCode
            state
            streetAddress
          }
          businessTelephoneNumber
          entityName
          entityTaxId
          isUSEntity
        }
        accountNature
        additionalAccountInformation {
          isForeignBank
          isMaintainedForForeignFinancialInstitution
          isPoliticallyExposed
          politicalExposureDetail {
            immediateFamily
            politicalOrganization
          }
        }
        authorizedSigner {
          citizenshipCountry
          dateOfBirth
          emailAddress
          isUsCitizen
          name {
            familyName
            givenName
            legalName
          }
          taxId
          title
        }
        beneficialOwners {
          address {
            city
            country
            postalCode
            state
            streetAddress
          }
          dateOfBirth
          identificationNumber
          name {
            familyName
            givenName
            legalName
          }
          socialSecurityNumber
        }
        catAccountholderType
        createdAt
        customerType
        entityOfficers {
          address {
            city
            country
            postalCode
            state
            streetAddress
          }
          dateOfBirth
          identificationNumber
          name {
            familyName
            givenName
            legalName
          }
          socialSecurityNumber
        }
        exemptLegalCustomer {
          exemption
          isExemptLegalCustomer
        }
        formId
        isApplicantESigned
        issuerDirectCommunicationCode
        legalEntityIdentifier
        serviceProfile {
          dividendReinvestment
          sweepInstructions
        }
        suitabilityProfile {
          liquidityNeeds
          timeHorizon
        }
        updatedAt
        w9Certification {
          exemptPayeeCode
          exemptionFromFatca
        }
      }
    }
  }
`;

/**
 * __useApexAccountsGetEntityAccountFormQuery__
 *
 * To run a query within a React component, call `useApexAccountsGetEntityAccountFormQuery` and pass it any options that fit your needs.
 * When your component renders, `useApexAccountsGetEntityAccountFormQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useApexAccountsGetEntityAccountFormQuery({
 *   variables: {
 *      formId: // value for 'formId'
 *   },
 * });
 */
export function useApexAccountsGetEntityAccountFormQuery(
  baseOptions?: Apollo.QueryHookOptions<
    ApolloTypes.ApexAccountsGetEntityAccountFormQuery,
    ApolloTypes.ApexAccountsGetEntityAccountFormQueryVariables
  >
) {
  return Apollo.useQuery<
    ApolloTypes.ApexAccountsGetEntityAccountFormQuery,
    ApolloTypes.ApexAccountsGetEntityAccountFormQueryVariables
  >(ApexAccountsGetEntityAccountFormDocument, baseOptions);
}
export function useApexAccountsGetEntityAccountFormLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    ApolloTypes.ApexAccountsGetEntityAccountFormQuery,
    ApolloTypes.ApexAccountsGetEntityAccountFormQueryVariables
  >
) {
  return Apollo.useLazyQuery<
    ApolloTypes.ApexAccountsGetEntityAccountFormQuery,
    ApolloTypes.ApexAccountsGetEntityAccountFormQueryVariables
  >(ApexAccountsGetEntityAccountFormDocument, baseOptions);
}
export type ApexAccountsGetEntityAccountFormQueryHookResult = ReturnType<
  typeof useApexAccountsGetEntityAccountFormQuery
>;
export type ApexAccountsGetEntityAccountFormLazyQueryHookResult = ReturnType<
  typeof useApexAccountsGetEntityAccountFormLazyQuery
>;
export type ApexAccountsGetEntityAccountFormQueryResult = Apollo.QueryResult<
  ApolloTypes.ApexAccountsGetEntityAccountFormQuery,
  ApolloTypes.ApexAccountsGetEntityAccountFormQueryVariables
>;
export function refetchApexAccountsGetEntityAccountFormQuery(
  variables?: ApolloTypes.ApexAccountsGetEntityAccountFormQueryVariables
) {
  return {
    query: ApexAccountsGetEntityAccountFormDocument,
    variables
  };
}
export const ApexAccountsGetEntityDueDiligenceFormDocument = /* #__PURE__ */ gql`
  query apexAccountsGetEntityDueDiligenceForm($formId: String!) {
    apexAccountsGetEntityDueDiligenceForm(formId: $formId) {
      entityDueDiligenceForm {
        accountActivity {
          expectedWithdrawalFrequency
          initialDepositAmount
          initialDepositSource
          lowPricedSecuritiesPercentage
          primaryAccountActivity
          willTransactForeignBonds
          willTransactLowPricedSecurities
        }
        accountInformation {
          accountName
          businessLocations
          countryOfIncorporation
          hasAccounts
          relatedAccounts {
            accountNumber
            entityName
          }
        }
        additionalAccounts {
          confirmEntityDoesNotIssueBearerShares
          institutionNames
          primaryOngoingFundingSource
          primaryOngoingFundingSourceClarification
          scopeOfBusiness
          scopeOfBusinessClarification
        }
        assessedRiskRating
        createdAt
        entityOrAssociatesHaveNegativeNews
        entityOrAssociatesNegativeNewsInfo
        formId
        politicallyExposedPersons {
          isPoliticallyExposed
          politicalOfficials {
            immediateFamily
            legalName
            politicalOrganization
            politicalTitle
            role
          }
        }
        principalApproverName
        registeredRepresentativeApproverName
        updatedAt
      }
    }
  }
`;

/**
 * __useApexAccountsGetEntityDueDiligenceFormQuery__
 *
 * To run a query within a React component, call `useApexAccountsGetEntityDueDiligenceFormQuery` and pass it any options that fit your needs.
 * When your component renders, `useApexAccountsGetEntityDueDiligenceFormQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useApexAccountsGetEntityDueDiligenceFormQuery({
 *   variables: {
 *      formId: // value for 'formId'
 *   },
 * });
 */
export function useApexAccountsGetEntityDueDiligenceFormQuery(
  baseOptions?: Apollo.QueryHookOptions<
    ApolloTypes.ApexAccountsGetEntityDueDiligenceFormQuery,
    ApolloTypes.ApexAccountsGetEntityDueDiligenceFormQueryVariables
  >
) {
  return Apollo.useQuery<
    ApolloTypes.ApexAccountsGetEntityDueDiligenceFormQuery,
    ApolloTypes.ApexAccountsGetEntityDueDiligenceFormQueryVariables
  >(ApexAccountsGetEntityDueDiligenceFormDocument, baseOptions);
}
export function useApexAccountsGetEntityDueDiligenceFormLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    ApolloTypes.ApexAccountsGetEntityDueDiligenceFormQuery,
    ApolloTypes.ApexAccountsGetEntityDueDiligenceFormQueryVariables
  >
) {
  return Apollo.useLazyQuery<
    ApolloTypes.ApexAccountsGetEntityDueDiligenceFormQuery,
    ApolloTypes.ApexAccountsGetEntityDueDiligenceFormQueryVariables
  >(ApexAccountsGetEntityDueDiligenceFormDocument, baseOptions);
}
export type ApexAccountsGetEntityDueDiligenceFormQueryHookResult = ReturnType<
  typeof useApexAccountsGetEntityDueDiligenceFormQuery
>;
export type ApexAccountsGetEntityDueDiligenceFormLazyQueryHookResult = ReturnType<
  typeof useApexAccountsGetEntityDueDiligenceFormLazyQuery
>;
export type ApexAccountsGetEntityDueDiligenceFormQueryResult = Apollo.QueryResult<
  ApolloTypes.ApexAccountsGetEntityDueDiligenceFormQuery,
  ApolloTypes.ApexAccountsGetEntityDueDiligenceFormQueryVariables
>;
export function refetchApexAccountsGetEntityDueDiligenceFormQuery(
  variables?: ApolloTypes.ApexAccountsGetEntityDueDiligenceFormQueryVariables
) {
  return {
    query: ApexAccountsGetEntityDueDiligenceFormDocument,
    variables
  };
}
export const ApexAccountsGetIndividualAccountFormDocument = /* #__PURE__ */ gql`
  query apexAccountsGetIndividualAccountForm($formId: String!) {
    apexAccountsGetIndividualAccountForm(formId: $formId) {
      individualAccountForm {
        applicantSignature {
          eSigned
        }
        applicants {
          contact {
            emailAddresses
            homeAddress {
              city
              country
              postalCode
              state
              streetAddress
            }
            phoneNumbers {
              phoneNumber
              phoneNumberType
            }
          }
          disclosures {
            affiliatedApproval
            companySymbols
            firmName
            isAffiliatedExchangeOrFINRA
            isControlPerson
            isPoliticallyExposed
            politicalExposureDetail {
              immediateFamily
              politicalOrganization
            }
          }
          employment {
            employer
            employmentStatus
            positionEmployed
          }
          identity {
            birthCountry
            citizenshipCountry
            dateOfBirth
            name {
              familyName
              givenName
              legalName
            }
            permanentResident
            socialSecurityNumber
            visaExpirationDate
            visaType
          }
        }
        catAccountholderType
        createdAt
        customerType
        formId
        investmentProfile {
          annualIncomeUSD
          federalTaxBracketPercent
          investmentExperience
          investmentObjective
          liquidNetWorthUSD
          riskTolerance
          totalNetWorthUSD
        }
        serviceProfile {
          dividendProceeds
          dividendProceedsSendFrequency
          dividendReinvestment
          householdingService
          issuerDirectCommunication
          securitySaleProceeds
          sweepInstructions
        }
        suitabilityProfile {
          liquidityNeeds
          timeHorizon
        }
        trustedContact
        updatedAt
      }
    }
  }
`;

/**
 * __useApexAccountsGetIndividualAccountFormQuery__
 *
 * To run a query within a React component, call `useApexAccountsGetIndividualAccountFormQuery` and pass it any options that fit your needs.
 * When your component renders, `useApexAccountsGetIndividualAccountFormQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useApexAccountsGetIndividualAccountFormQuery({
 *   variables: {
 *      formId: // value for 'formId'
 *   },
 * });
 */
export function useApexAccountsGetIndividualAccountFormQuery(
  baseOptions?: Apollo.QueryHookOptions<
    ApolloTypes.ApexAccountsGetIndividualAccountFormQuery,
    ApolloTypes.ApexAccountsGetIndividualAccountFormQueryVariables
  >
) {
  return Apollo.useQuery<
    ApolloTypes.ApexAccountsGetIndividualAccountFormQuery,
    ApolloTypes.ApexAccountsGetIndividualAccountFormQueryVariables
  >(ApexAccountsGetIndividualAccountFormDocument, baseOptions);
}
export function useApexAccountsGetIndividualAccountFormLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    ApolloTypes.ApexAccountsGetIndividualAccountFormQuery,
    ApolloTypes.ApexAccountsGetIndividualAccountFormQueryVariables
  >
) {
  return Apollo.useLazyQuery<
    ApolloTypes.ApexAccountsGetIndividualAccountFormQuery,
    ApolloTypes.ApexAccountsGetIndividualAccountFormQueryVariables
  >(ApexAccountsGetIndividualAccountFormDocument, baseOptions);
}
export type ApexAccountsGetIndividualAccountFormQueryHookResult = ReturnType<
  typeof useApexAccountsGetIndividualAccountFormQuery
>;
export type ApexAccountsGetIndividualAccountFormLazyQueryHookResult = ReturnType<
  typeof useApexAccountsGetIndividualAccountFormLazyQuery
>;
export type ApexAccountsGetIndividualAccountFormQueryResult = Apollo.QueryResult<
  ApolloTypes.ApexAccountsGetIndividualAccountFormQuery,
  ApolloTypes.ApexAccountsGetIndividualAccountFormQueryVariables
>;
export function refetchApexAccountsGetIndividualAccountFormQuery(
  variables?: ApolloTypes.ApexAccountsGetIndividualAccountFormQueryVariables
) {
  return {
    query: ApexAccountsGetIndividualAccountFormDocument,
    variables
  };
}
export const ApexAccountsGetInterestedPartyFormDocument = /* #__PURE__ */ gql`
  query apexAccountsGetInterestedPartyForm($formId: String!) {
    apexAccountsGetInterestedPartyForm(formId: $formId) {
      interestedPartyForm {
        createdAt
        formId
        interestedParties {
          mailingAddress {
            city
            country
            postalCode
            state
            streetAddress
          }
          name {
            companyName
          }
        }
        updatedAt
      }
    }
  }
`;

/**
 * __useApexAccountsGetInterestedPartyFormQuery__
 *
 * To run a query within a React component, call `useApexAccountsGetInterestedPartyFormQuery` and pass it any options that fit your needs.
 * When your component renders, `useApexAccountsGetInterestedPartyFormQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useApexAccountsGetInterestedPartyFormQuery({
 *   variables: {
 *      formId: // value for 'formId'
 *   },
 * });
 */
export function useApexAccountsGetInterestedPartyFormQuery(
  baseOptions?: Apollo.QueryHookOptions<
    ApolloTypes.ApexAccountsGetInterestedPartyFormQuery,
    ApolloTypes.ApexAccountsGetInterestedPartyFormQueryVariables
  >
) {
  return Apollo.useQuery<
    ApolloTypes.ApexAccountsGetInterestedPartyFormQuery,
    ApolloTypes.ApexAccountsGetInterestedPartyFormQueryVariables
  >(ApexAccountsGetInterestedPartyFormDocument, baseOptions);
}
export function useApexAccountsGetInterestedPartyFormLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    ApolloTypes.ApexAccountsGetInterestedPartyFormQuery,
    ApolloTypes.ApexAccountsGetInterestedPartyFormQueryVariables
  >
) {
  return Apollo.useLazyQuery<
    ApolloTypes.ApexAccountsGetInterestedPartyFormQuery,
    ApolloTypes.ApexAccountsGetInterestedPartyFormQueryVariables
  >(ApexAccountsGetInterestedPartyFormDocument, baseOptions);
}
export type ApexAccountsGetInterestedPartyFormQueryHookResult = ReturnType<
  typeof useApexAccountsGetInterestedPartyFormQuery
>;
export type ApexAccountsGetInterestedPartyFormLazyQueryHookResult = ReturnType<
  typeof useApexAccountsGetInterestedPartyFormLazyQuery
>;
export type ApexAccountsGetInterestedPartyFormQueryResult = Apollo.QueryResult<
  ApolloTypes.ApexAccountsGetInterestedPartyFormQuery,
  ApolloTypes.ApexAccountsGetInterestedPartyFormQueryVariables
>;
export function refetchApexAccountsGetInterestedPartyFormQuery(
  variables?: ApolloTypes.ApexAccountsGetInterestedPartyFormQueryVariables
) {
  return {
    query: ApexAccountsGetInterestedPartyFormDocument,
    variables
  };
}
export const ApexAccountsGetLlcAgreementFormDocument = /* #__PURE__ */ gql`
  query apexAccountsGetLlcAgreementForm($formId: String!) {
    apexAccountsGetLlcAgreementForm(formId: $formId) {
      llcAgreementForm {
        articlesOfIncorporationOrOperatingAgreementSnapId
        authorizedSignerName
        authorizedSignerTitle
        createdAt
        entityName
        formId
        isAuthorizedSignerESigned
        membersAndManagers {
          isManager
          isManagerESigned
          legalName
          organizationalRole
        }
        resolutionAdoptionDate
        stateOfOrigin
        updatedAt
      }
    }
  }
`;

/**
 * __useApexAccountsGetLlcAgreementFormQuery__
 *
 * To run a query within a React component, call `useApexAccountsGetLlcAgreementFormQuery` and pass it any options that fit your needs.
 * When your component renders, `useApexAccountsGetLlcAgreementFormQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useApexAccountsGetLlcAgreementFormQuery({
 *   variables: {
 *      formId: // value for 'formId'
 *   },
 * });
 */
export function useApexAccountsGetLlcAgreementFormQuery(
  baseOptions?: Apollo.QueryHookOptions<
    ApolloTypes.ApexAccountsGetLlcAgreementFormQuery,
    ApolloTypes.ApexAccountsGetLlcAgreementFormQueryVariables
  >
) {
  return Apollo.useQuery<
    ApolloTypes.ApexAccountsGetLlcAgreementFormQuery,
    ApolloTypes.ApexAccountsGetLlcAgreementFormQueryVariables
  >(ApexAccountsGetLlcAgreementFormDocument, baseOptions);
}
export function useApexAccountsGetLlcAgreementFormLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    ApolloTypes.ApexAccountsGetLlcAgreementFormQuery,
    ApolloTypes.ApexAccountsGetLlcAgreementFormQueryVariables
  >
) {
  return Apollo.useLazyQuery<
    ApolloTypes.ApexAccountsGetLlcAgreementFormQuery,
    ApolloTypes.ApexAccountsGetLlcAgreementFormQueryVariables
  >(ApexAccountsGetLlcAgreementFormDocument, baseOptions);
}
export type ApexAccountsGetLlcAgreementFormQueryHookResult = ReturnType<
  typeof useApexAccountsGetLlcAgreementFormQuery
>;
export type ApexAccountsGetLlcAgreementFormLazyQueryHookResult = ReturnType<
  typeof useApexAccountsGetLlcAgreementFormLazyQuery
>;
export type ApexAccountsGetLlcAgreementFormQueryResult = Apollo.QueryResult<
  ApolloTypes.ApexAccountsGetLlcAgreementFormQuery,
  ApolloTypes.ApexAccountsGetLlcAgreementFormQueryVariables
>;
export function refetchApexAccountsGetLlcAgreementFormQuery(
  variables?: ApolloTypes.ApexAccountsGetLlcAgreementFormQueryVariables
) {
  return {
    query: ApexAccountsGetLlcAgreementFormDocument,
    variables
  };
}
export const ApexAccountsGetOpenSketchesDocument = /* #__PURE__ */ gql`
  query apexAccountsGetOpenSketches {
    apexAccountsGetOpenSketches {
      sketches {
        accountNumber
        accountType
        createdAt
        sketchId
        status
        updatedAt
      }
    }
  }
`;

/**
 * __useApexAccountsGetOpenSketchesQuery__
 *
 * To run a query within a React component, call `useApexAccountsGetOpenSketchesQuery` and pass it any options that fit your needs.
 * When your component renders, `useApexAccountsGetOpenSketchesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useApexAccountsGetOpenSketchesQuery({
 *   variables: {
 *   },
 * });
 */
export function useApexAccountsGetOpenSketchesQuery(
  baseOptions?: Apollo.QueryHookOptions<
    ApolloTypes.ApexAccountsGetOpenSketchesQuery,
    ApolloTypes.ApexAccountsGetOpenSketchesQueryVariables
  >
) {
  return Apollo.useQuery<
    ApolloTypes.ApexAccountsGetOpenSketchesQuery,
    ApolloTypes.ApexAccountsGetOpenSketchesQueryVariables
  >(ApexAccountsGetOpenSketchesDocument, baseOptions);
}
export function useApexAccountsGetOpenSketchesLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    ApolloTypes.ApexAccountsGetOpenSketchesQuery,
    ApolloTypes.ApexAccountsGetOpenSketchesQueryVariables
  >
) {
  return Apollo.useLazyQuery<
    ApolloTypes.ApexAccountsGetOpenSketchesQuery,
    ApolloTypes.ApexAccountsGetOpenSketchesQueryVariables
  >(ApexAccountsGetOpenSketchesDocument, baseOptions);
}
export type ApexAccountsGetOpenSketchesQueryHookResult = ReturnType<
  typeof useApexAccountsGetOpenSketchesQuery
>;
export type ApexAccountsGetOpenSketchesLazyQueryHookResult = ReturnType<
  typeof useApexAccountsGetOpenSketchesLazyQuery
>;
export type ApexAccountsGetOpenSketchesQueryResult = Apollo.QueryResult<
  ApolloTypes.ApexAccountsGetOpenSketchesQuery,
  ApolloTypes.ApexAccountsGetOpenSketchesQueryVariables
>;
export function refetchApexAccountsGetOpenSketchesQuery(
  variables?: ApolloTypes.ApexAccountsGetOpenSketchesQueryVariables
) {
  return { query: ApexAccountsGetOpenSketchesDocument, variables };
}
export const ApexAccountsGetTradeConfirmsDocument = /* #__PURE__ */ gql`
  query apexAccountsGetTradeConfirms(
    $accountNumber: String!
    $confirmEndDate: String!
    $confirmStartDate: String!
  ) {
    apexAccountsGetTradeConfirms(
      accountNumber: $accountNumber
      confirmEndDate: $confirmEndDate
      confirmStartDate: $confirmStartDate
    ) {
      confirmsResponse {
        confirms {
          accountNumber
          confirmURL
          processDate
        }
      }
    }
  }
`;

/**
 * __useApexAccountsGetTradeConfirmsQuery__
 *
 * To run a query within a React component, call `useApexAccountsGetTradeConfirmsQuery` and pass it any options that fit your needs.
 * When your component renders, `useApexAccountsGetTradeConfirmsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useApexAccountsGetTradeConfirmsQuery({
 *   variables: {
 *      accountNumber: // value for 'accountNumber'
 *      confirmEndDate: // value for 'confirmEndDate'
 *      confirmStartDate: // value for 'confirmStartDate'
 *   },
 * });
 */
export function useApexAccountsGetTradeConfirmsQuery(
  baseOptions?: Apollo.QueryHookOptions<
    ApolloTypes.ApexAccountsGetTradeConfirmsQuery,
    ApolloTypes.ApexAccountsGetTradeConfirmsQueryVariables
  >
) {
  return Apollo.useQuery<
    ApolloTypes.ApexAccountsGetTradeConfirmsQuery,
    ApolloTypes.ApexAccountsGetTradeConfirmsQueryVariables
  >(ApexAccountsGetTradeConfirmsDocument, baseOptions);
}
export function useApexAccountsGetTradeConfirmsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    ApolloTypes.ApexAccountsGetTradeConfirmsQuery,
    ApolloTypes.ApexAccountsGetTradeConfirmsQueryVariables
  >
) {
  return Apollo.useLazyQuery<
    ApolloTypes.ApexAccountsGetTradeConfirmsQuery,
    ApolloTypes.ApexAccountsGetTradeConfirmsQueryVariables
  >(ApexAccountsGetTradeConfirmsDocument, baseOptions);
}
export type ApexAccountsGetTradeConfirmsQueryHookResult = ReturnType<
  typeof useApexAccountsGetTradeConfirmsQuery
>;
export type ApexAccountsGetTradeConfirmsLazyQueryHookResult = ReturnType<
  typeof useApexAccountsGetTradeConfirmsLazyQuery
>;
export type ApexAccountsGetTradeConfirmsQueryResult = Apollo.QueryResult<
  ApolloTypes.ApexAccountsGetTradeConfirmsQuery,
  ApolloTypes.ApexAccountsGetTradeConfirmsQueryVariables
>;
export function refetchApexAccountsGetTradeConfirmsQuery(
  variables?: ApolloTypes.ApexAccountsGetTradeConfirmsQueryVariables
) {
  return { query: ApexAccountsGetTradeConfirmsDocument, variables };
}
export const ApexAccountsGetTrustedContactFormDocument = /* #__PURE__ */ gql`
  query apexAccountsGetTrustedContactForm($formId: String!) {
    apexAccountsGetTrustedContactForm(formId: $formId) {
      trustedContactForm {
        createdAt
        emailAddress
        familyName
        formId
        givenName
        mailingAddress {
          city
          country
          postalCode
          state
          streetAddress
        }
        phoneNumber {
          phoneNumber
          phoneNumberType
        }
        updatedAt
      }
    }
  }
`;

/**
 * __useApexAccountsGetTrustedContactFormQuery__
 *
 * To run a query within a React component, call `useApexAccountsGetTrustedContactFormQuery` and pass it any options that fit your needs.
 * When your component renders, `useApexAccountsGetTrustedContactFormQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useApexAccountsGetTrustedContactFormQuery({
 *   variables: {
 *      formId: // value for 'formId'
 *   },
 * });
 */
export function useApexAccountsGetTrustedContactFormQuery(
  baseOptions?: Apollo.QueryHookOptions<
    ApolloTypes.ApexAccountsGetTrustedContactFormQuery,
    ApolloTypes.ApexAccountsGetTrustedContactFormQueryVariables
  >
) {
  return Apollo.useQuery<
    ApolloTypes.ApexAccountsGetTrustedContactFormQuery,
    ApolloTypes.ApexAccountsGetTrustedContactFormQueryVariables
  >(ApexAccountsGetTrustedContactFormDocument, baseOptions);
}
export function useApexAccountsGetTrustedContactFormLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    ApolloTypes.ApexAccountsGetTrustedContactFormQuery,
    ApolloTypes.ApexAccountsGetTrustedContactFormQueryVariables
  >
) {
  return Apollo.useLazyQuery<
    ApolloTypes.ApexAccountsGetTrustedContactFormQuery,
    ApolloTypes.ApexAccountsGetTrustedContactFormQueryVariables
  >(ApexAccountsGetTrustedContactFormDocument, baseOptions);
}
export type ApexAccountsGetTrustedContactFormQueryHookResult = ReturnType<
  typeof useApexAccountsGetTrustedContactFormQuery
>;
export type ApexAccountsGetTrustedContactFormLazyQueryHookResult = ReturnType<
  typeof useApexAccountsGetTrustedContactFormLazyQuery
>;
export type ApexAccountsGetTrustedContactFormQueryResult = Apollo.QueryResult<
  ApolloTypes.ApexAccountsGetTrustedContactFormQuery,
  ApolloTypes.ApexAccountsGetTrustedContactFormQueryVariables
>;
export function refetchApexAccountsGetTrustedContactFormQuery(
  variables?: ApolloTypes.ApexAccountsGetTrustedContactFormQueryVariables
) {
  return {
    query: ApexAccountsGetTrustedContactFormDocument,
    variables
  };
}
export const ApexGetAccountDocument = /* #__PURE__ */ gql`
  query apexGetAccount($id: String!) {
    apexGetAccount(id: $id) {
      apexAccount {
        apexAccountNumber
        apexRequestId
        createdAt
        id
        investorId
        metadata
        status
        updatedAt
      }
    }
  }
`;

/**
 * __useApexGetAccountQuery__
 *
 * To run a query within a React component, call `useApexGetAccountQuery` and pass it any options that fit your needs.
 * When your component renders, `useApexGetAccountQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useApexGetAccountQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useApexGetAccountQuery(
  baseOptions?: Apollo.QueryHookOptions<
    ApolloTypes.ApexGetAccountQuery,
    ApolloTypes.ApexGetAccountQueryVariables
  >
) {
  return Apollo.useQuery<
    ApolloTypes.ApexGetAccountQuery,
    ApolloTypes.ApexGetAccountQueryVariables
  >(ApexGetAccountDocument, baseOptions);
}
export function useApexGetAccountLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    ApolloTypes.ApexGetAccountQuery,
    ApolloTypes.ApexGetAccountQueryVariables
  >
) {
  return Apollo.useLazyQuery<
    ApolloTypes.ApexGetAccountQuery,
    ApolloTypes.ApexGetAccountQueryVariables
  >(ApexGetAccountDocument, baseOptions);
}
export type ApexGetAccountQueryHookResult = ReturnType<
  typeof useApexGetAccountQuery
>;
export type ApexGetAccountLazyQueryHookResult = ReturnType<
  typeof useApexGetAccountLazyQuery
>;
export type ApexGetAccountQueryResult = Apollo.QueryResult<
  ApolloTypes.ApexGetAccountQuery,
  ApolloTypes.ApexGetAccountQueryVariables
>;
export function refetchApexGetAccountQuery(
  variables?: ApolloTypes.ApexGetAccountQueryVariables
) {
  return { query: ApexGetAccountDocument, variables };
}
export const ApexGetAccountBalanceDocument = /* #__PURE__ */ gql`
  query apexGetAccountBalance($id: String!) {
    apexGetAccountBalance(id: $id) {
      apexBalance {
        amountAvailableForTrading
        amountAvailableForWithdraw
        amountOfPendingWithdrawals
        amountOfUnclearedDeposits
        id
        timestamp
      }
    }
  }
`;

/**
 * __useApexGetAccountBalanceQuery__
 *
 * To run a query within a React component, call `useApexGetAccountBalanceQuery` and pass it any options that fit your needs.
 * When your component renders, `useApexGetAccountBalanceQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useApexGetAccountBalanceQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useApexGetAccountBalanceQuery(
  baseOptions?: Apollo.QueryHookOptions<
    ApolloTypes.ApexGetAccountBalanceQuery,
    ApolloTypes.ApexGetAccountBalanceQueryVariables
  >
) {
  return Apollo.useQuery<
    ApolloTypes.ApexGetAccountBalanceQuery,
    ApolloTypes.ApexGetAccountBalanceQueryVariables
  >(ApexGetAccountBalanceDocument, baseOptions);
}
export function useApexGetAccountBalanceLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    ApolloTypes.ApexGetAccountBalanceQuery,
    ApolloTypes.ApexGetAccountBalanceQueryVariables
  >
) {
  return Apollo.useLazyQuery<
    ApolloTypes.ApexGetAccountBalanceQuery,
    ApolloTypes.ApexGetAccountBalanceQueryVariables
  >(ApexGetAccountBalanceDocument, baseOptions);
}
export type ApexGetAccountBalanceQueryHookResult = ReturnType<
  typeof useApexGetAccountBalanceQuery
>;
export type ApexGetAccountBalanceLazyQueryHookResult = ReturnType<
  typeof useApexGetAccountBalanceLazyQuery
>;
export type ApexGetAccountBalanceQueryResult = Apollo.QueryResult<
  ApolloTypes.ApexGetAccountBalanceQuery,
  ApolloTypes.ApexGetAccountBalanceQueryVariables
>;
export function refetchApexGetAccountBalanceQuery(
  variables?: ApolloTypes.ApexGetAccountBalanceQueryVariables
) {
  return { query: ApexGetAccountBalanceDocument, variables };
}
export const ApexGetAccountByAccountNumberDocument = /* #__PURE__ */ gql`
  query apexGetAccountByAccountNumber($apexAccountNumber: String!) {
    apexGetAccountByAccountNumber(apexAccountNumber: $apexAccountNumber) {
      apexAccount {
        apexAccountNumber
        apexRequestId
        createdAt
        id
        investorId
        metadata
        status
        updatedAt
      }
    }
  }
`;

/**
 * __useApexGetAccountByAccountNumberQuery__
 *
 * To run a query within a React component, call `useApexGetAccountByAccountNumberQuery` and pass it any options that fit your needs.
 * When your component renders, `useApexGetAccountByAccountNumberQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useApexGetAccountByAccountNumberQuery({
 *   variables: {
 *      apexAccountNumber: // value for 'apexAccountNumber'
 *   },
 * });
 */
export function useApexGetAccountByAccountNumberQuery(
  baseOptions?: Apollo.QueryHookOptions<
    ApolloTypes.ApexGetAccountByAccountNumberQuery,
    ApolloTypes.ApexGetAccountByAccountNumberQueryVariables
  >
) {
  return Apollo.useQuery<
    ApolloTypes.ApexGetAccountByAccountNumberQuery,
    ApolloTypes.ApexGetAccountByAccountNumberQueryVariables
  >(ApexGetAccountByAccountNumberDocument, baseOptions);
}
export function useApexGetAccountByAccountNumberLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    ApolloTypes.ApexGetAccountByAccountNumberQuery,
    ApolloTypes.ApexGetAccountByAccountNumberQueryVariables
  >
) {
  return Apollo.useLazyQuery<
    ApolloTypes.ApexGetAccountByAccountNumberQuery,
    ApolloTypes.ApexGetAccountByAccountNumberQueryVariables
  >(ApexGetAccountByAccountNumberDocument, baseOptions);
}
export type ApexGetAccountByAccountNumberQueryHookResult = ReturnType<
  typeof useApexGetAccountByAccountNumberQuery
>;
export type ApexGetAccountByAccountNumberLazyQueryHookResult = ReturnType<
  typeof useApexGetAccountByAccountNumberLazyQuery
>;
export type ApexGetAccountByAccountNumberQueryResult = Apollo.QueryResult<
  ApolloTypes.ApexGetAccountByAccountNumberQuery,
  ApolloTypes.ApexGetAccountByAccountNumberQueryVariables
>;
export function refetchApexGetAccountByAccountNumberQuery(
  variables?: ApolloTypes.ApexGetAccountByAccountNumberQueryVariables
) {
  return { query: ApexGetAccountByAccountNumberDocument, variables };
}
export const ApexGetAccountByInvestorIdDocument = /* #__PURE__ */ gql`
  query apexGetAccountByInvestorId($investorId: String!) {
    apexGetAccountByInvestorId(investorId: $investorId) {
      apexAccount {
        apexAccountNumber
        apexRequestId
        createdAt
        id
        investorId
        metadata
        status
        updatedAt
      }
    }
  }
`;

/**
 * __useApexGetAccountByInvestorIdQuery__
 *
 * To run a query within a React component, call `useApexGetAccountByInvestorIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useApexGetAccountByInvestorIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useApexGetAccountByInvestorIdQuery({
 *   variables: {
 *      investorId: // value for 'investorId'
 *   },
 * });
 */
export function useApexGetAccountByInvestorIdQuery(
  baseOptions?: Apollo.QueryHookOptions<
    ApolloTypes.ApexGetAccountByInvestorIdQuery,
    ApolloTypes.ApexGetAccountByInvestorIdQueryVariables
  >
) {
  return Apollo.useQuery<
    ApolloTypes.ApexGetAccountByInvestorIdQuery,
    ApolloTypes.ApexGetAccountByInvestorIdQueryVariables
  >(ApexGetAccountByInvestorIdDocument, baseOptions);
}
export function useApexGetAccountByInvestorIdLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    ApolloTypes.ApexGetAccountByInvestorIdQuery,
    ApolloTypes.ApexGetAccountByInvestorIdQueryVariables
  >
) {
  return Apollo.useLazyQuery<
    ApolloTypes.ApexGetAccountByInvestorIdQuery,
    ApolloTypes.ApexGetAccountByInvestorIdQueryVariables
  >(ApexGetAccountByInvestorIdDocument, baseOptions);
}
export type ApexGetAccountByInvestorIdQueryHookResult = ReturnType<
  typeof useApexGetAccountByInvestorIdQuery
>;
export type ApexGetAccountByInvestorIdLazyQueryHookResult = ReturnType<
  typeof useApexGetAccountByInvestorIdLazyQuery
>;
export type ApexGetAccountByInvestorIdQueryResult = Apollo.QueryResult<
  ApolloTypes.ApexGetAccountByInvestorIdQuery,
  ApolloTypes.ApexGetAccountByInvestorIdQueryVariables
>;
export function refetchApexGetAccountByInvestorIdQuery(
  variables?: ApolloTypes.ApexGetAccountByInvestorIdQueryVariables
) {
  return { query: ApexGetAccountByInvestorIdDocument, variables };
}
export const ApexGetAccountStatementsDocument = /* #__PURE__ */ gql`
  query apexGetAccountStatements(
    $documentType: String
    $endMonth: String!
    $endYear: String!
    $id: String!
    $startMonth: String!
    $startYear: String!
  ) {
    apexGetAccountStatements(
      documentType: $documentType
      endMonth: $endMonth
      endYear: $endYear
      id: $id
      startMonth: $startMonth
      startYear: $startYear
    ) {
      statementsResponse {
        apexAccountId
        documentType
        statementURL
        statmentDate
      }
    }
  }
`;

/**
 * __useApexGetAccountStatementsQuery__
 *
 * To run a query within a React component, call `useApexGetAccountStatementsQuery` and pass it any options that fit your needs.
 * When your component renders, `useApexGetAccountStatementsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useApexGetAccountStatementsQuery({
 *   variables: {
 *      documentType: // value for 'documentType'
 *      endMonth: // value for 'endMonth'
 *      endYear: // value for 'endYear'
 *      id: // value for 'id'
 *      startMonth: // value for 'startMonth'
 *      startYear: // value for 'startYear'
 *   },
 * });
 */
export function useApexGetAccountStatementsQuery(
  baseOptions?: Apollo.QueryHookOptions<
    ApolloTypes.ApexGetAccountStatementsQuery,
    ApolloTypes.ApexGetAccountStatementsQueryVariables
  >
) {
  return Apollo.useQuery<
    ApolloTypes.ApexGetAccountStatementsQuery,
    ApolloTypes.ApexGetAccountStatementsQueryVariables
  >(ApexGetAccountStatementsDocument, baseOptions);
}
export function useApexGetAccountStatementsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    ApolloTypes.ApexGetAccountStatementsQuery,
    ApolloTypes.ApexGetAccountStatementsQueryVariables
  >
) {
  return Apollo.useLazyQuery<
    ApolloTypes.ApexGetAccountStatementsQuery,
    ApolloTypes.ApexGetAccountStatementsQueryVariables
  >(ApexGetAccountStatementsDocument, baseOptions);
}
export type ApexGetAccountStatementsQueryHookResult = ReturnType<
  typeof useApexGetAccountStatementsQuery
>;
export type ApexGetAccountStatementsLazyQueryHookResult = ReturnType<
  typeof useApexGetAccountStatementsLazyQuery
>;
export type ApexGetAccountStatementsQueryResult = Apollo.QueryResult<
  ApolloTypes.ApexGetAccountStatementsQuery,
  ApolloTypes.ApexGetAccountStatementsQueryVariables
>;
export function refetchApexGetAccountStatementsQuery(
  variables?: ApolloTypes.ApexGetAccountStatementsQueryVariables
) {
  return { query: ApexGetAccountStatementsDocument, variables };
}
export const ApexGetAccountStatementsForInvestorDocument = /* #__PURE__ */ gql`
  query apexGetAccountStatementsForInvestor(
    $documentType: String
    $endMonth: String!
    $endYear: String!
    $investorId: String!
    $startMonth: String!
    $startYear: String!
  ) {
    apexGetAccountStatementsForInvestor(
      documentType: $documentType
      endMonth: $endMonth
      endYear: $endYear
      investorId: $investorId
      startMonth: $startMonth
      startYear: $startYear
    ) {
      statementsResponse {
        apexAccountId
        documentType
        statementURL
        statmentDate
      }
    }
  }
`;

/**
 * __useApexGetAccountStatementsForInvestorQuery__
 *
 * To run a query within a React component, call `useApexGetAccountStatementsForInvestorQuery` and pass it any options that fit your needs.
 * When your component renders, `useApexGetAccountStatementsForInvestorQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useApexGetAccountStatementsForInvestorQuery({
 *   variables: {
 *      documentType: // value for 'documentType'
 *      endMonth: // value for 'endMonth'
 *      endYear: // value for 'endYear'
 *      investorId: // value for 'investorId'
 *      startMonth: // value for 'startMonth'
 *      startYear: // value for 'startYear'
 *   },
 * });
 */
export function useApexGetAccountStatementsForInvestorQuery(
  baseOptions?: Apollo.QueryHookOptions<
    ApolloTypes.ApexGetAccountStatementsForInvestorQuery,
    ApolloTypes.ApexGetAccountStatementsForInvestorQueryVariables
  >
) {
  return Apollo.useQuery<
    ApolloTypes.ApexGetAccountStatementsForInvestorQuery,
    ApolloTypes.ApexGetAccountStatementsForInvestorQueryVariables
  >(ApexGetAccountStatementsForInvestorDocument, baseOptions);
}
export function useApexGetAccountStatementsForInvestorLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    ApolloTypes.ApexGetAccountStatementsForInvestorQuery,
    ApolloTypes.ApexGetAccountStatementsForInvestorQueryVariables
  >
) {
  return Apollo.useLazyQuery<
    ApolloTypes.ApexGetAccountStatementsForInvestorQuery,
    ApolloTypes.ApexGetAccountStatementsForInvestorQueryVariables
  >(ApexGetAccountStatementsForInvestorDocument, baseOptions);
}
export type ApexGetAccountStatementsForInvestorQueryHookResult = ReturnType<
  typeof useApexGetAccountStatementsForInvestorQuery
>;
export type ApexGetAccountStatementsForInvestorLazyQueryHookResult = ReturnType<
  typeof useApexGetAccountStatementsForInvestorLazyQuery
>;
export type ApexGetAccountStatementsForInvestorQueryResult = Apollo.QueryResult<
  ApolloTypes.ApexGetAccountStatementsForInvestorQuery,
  ApolloTypes.ApexGetAccountStatementsForInvestorQueryVariables
>;
export function refetchApexGetAccountStatementsForInvestorQuery(
  variables?: ApolloTypes.ApexGetAccountStatementsForInvestorQueryVariables
) {
  return {
    query: ApexGetAccountStatementsForInvestorDocument,
    variables
  };
}
export const ApexGetAchrelationshipDocument = /* #__PURE__ */ gql`
  query apexGetAchrelationship($accountId: String!, $id: String!) {
    apexGetAchrelationship(accountId: $accountId, id: $id) {
      apexAchRelationship {
        accountId
        apexRelationshipId
        createdAt
        id
        linkedBankAccountId
        metadata
        status
        updatedAt
      }
    }
  }
`;

/**
 * __useApexGetAchrelationshipQuery__
 *
 * To run a query within a React component, call `useApexGetAchrelationshipQuery` and pass it any options that fit your needs.
 * When your component renders, `useApexGetAchrelationshipQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useApexGetAchrelationshipQuery({
 *   variables: {
 *      accountId: // value for 'accountId'
 *      id: // value for 'id'
 *   },
 * });
 */
export function useApexGetAchrelationshipQuery(
  baseOptions?: Apollo.QueryHookOptions<
    ApolloTypes.ApexGetAchrelationshipQuery,
    ApolloTypes.ApexGetAchrelationshipQueryVariables
  >
) {
  return Apollo.useQuery<
    ApolloTypes.ApexGetAchrelationshipQuery,
    ApolloTypes.ApexGetAchrelationshipQueryVariables
  >(ApexGetAchrelationshipDocument, baseOptions);
}
export function useApexGetAchrelationshipLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    ApolloTypes.ApexGetAchrelationshipQuery,
    ApolloTypes.ApexGetAchrelationshipQueryVariables
  >
) {
  return Apollo.useLazyQuery<
    ApolloTypes.ApexGetAchrelationshipQuery,
    ApolloTypes.ApexGetAchrelationshipQueryVariables
  >(ApexGetAchrelationshipDocument, baseOptions);
}
export type ApexGetAchrelationshipQueryHookResult = ReturnType<
  typeof useApexGetAchrelationshipQuery
>;
export type ApexGetAchrelationshipLazyQueryHookResult = ReturnType<
  typeof useApexGetAchrelationshipLazyQuery
>;
export type ApexGetAchrelationshipQueryResult = Apollo.QueryResult<
  ApolloTypes.ApexGetAchrelationshipQuery,
  ApolloTypes.ApexGetAchrelationshipQueryVariables
>;
export function refetchApexGetAchrelationshipQuery(
  variables?: ApolloTypes.ApexGetAchrelationshipQueryVariables
) {
  return { query: ApexGetAchrelationshipDocument, variables };
}
export const ApexGetAchrelationshipsDocument = /* #__PURE__ */ gql`
  query apexGetAchrelationships($id: String!) {
    apexGetAchrelationships(id: $id) {
      apexAchRelationships {
        accountId
        apexRelationshipId
        createdAt
        id
        linkedBankAccountId
        metadata
        status
        updatedAt
      }
    }
  }
`;

/**
 * __useApexGetAchrelationshipsQuery__
 *
 * To run a query within a React component, call `useApexGetAchrelationshipsQuery` and pass it any options that fit your needs.
 * When your component renders, `useApexGetAchrelationshipsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useApexGetAchrelationshipsQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useApexGetAchrelationshipsQuery(
  baseOptions?: Apollo.QueryHookOptions<
    ApolloTypes.ApexGetAchrelationshipsQuery,
    ApolloTypes.ApexGetAchrelationshipsQueryVariables
  >
) {
  return Apollo.useQuery<
    ApolloTypes.ApexGetAchrelationshipsQuery,
    ApolloTypes.ApexGetAchrelationshipsQueryVariables
  >(ApexGetAchrelationshipsDocument, baseOptions);
}
export function useApexGetAchrelationshipsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    ApolloTypes.ApexGetAchrelationshipsQuery,
    ApolloTypes.ApexGetAchrelationshipsQueryVariables
  >
) {
  return Apollo.useLazyQuery<
    ApolloTypes.ApexGetAchrelationshipsQuery,
    ApolloTypes.ApexGetAchrelationshipsQueryVariables
  >(ApexGetAchrelationshipsDocument, baseOptions);
}
export type ApexGetAchrelationshipsQueryHookResult = ReturnType<
  typeof useApexGetAchrelationshipsQuery
>;
export type ApexGetAchrelationshipsLazyQueryHookResult = ReturnType<
  typeof useApexGetAchrelationshipsLazyQuery
>;
export type ApexGetAchrelationshipsQueryResult = Apollo.QueryResult<
  ApolloTypes.ApexGetAchrelationshipsQuery,
  ApolloTypes.ApexGetAchrelationshipsQueryVariables
>;
export function refetchApexGetAchrelationshipsQuery(
  variables?: ApolloTypes.ApexGetAchrelationshipsQueryVariables
) {
  return { query: ApexGetAchrelationshipsDocument, variables };
}
export const ApexGetTradeConfirmDocument = /* #__PURE__ */ gql`
  query apexGetTradeConfirm($confirmDate: String!, $id: String!) {
    apexGetTradeConfirm(confirmDate: $confirmDate, id: $id) {
      confirmResponse {
        apexAccountId
        confirmURL
      }
    }
  }
`;

/**
 * __useApexGetTradeConfirmQuery__
 *
 * To run a query within a React component, call `useApexGetTradeConfirmQuery` and pass it any options that fit your needs.
 * When your component renders, `useApexGetTradeConfirmQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useApexGetTradeConfirmQuery({
 *   variables: {
 *      confirmDate: // value for 'confirmDate'
 *      id: // value for 'id'
 *   },
 * });
 */
export function useApexGetTradeConfirmQuery(
  baseOptions?: Apollo.QueryHookOptions<
    ApolloTypes.ApexGetTradeConfirmQuery,
    ApolloTypes.ApexGetTradeConfirmQueryVariables
  >
) {
  return Apollo.useQuery<
    ApolloTypes.ApexGetTradeConfirmQuery,
    ApolloTypes.ApexGetTradeConfirmQueryVariables
  >(ApexGetTradeConfirmDocument, baseOptions);
}
export function useApexGetTradeConfirmLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    ApolloTypes.ApexGetTradeConfirmQuery,
    ApolloTypes.ApexGetTradeConfirmQueryVariables
  >
) {
  return Apollo.useLazyQuery<
    ApolloTypes.ApexGetTradeConfirmQuery,
    ApolloTypes.ApexGetTradeConfirmQueryVariables
  >(ApexGetTradeConfirmDocument, baseOptions);
}
export type ApexGetTradeConfirmQueryHookResult = ReturnType<
  typeof useApexGetTradeConfirmQuery
>;
export type ApexGetTradeConfirmLazyQueryHookResult = ReturnType<
  typeof useApexGetTradeConfirmLazyQuery
>;
export type ApexGetTradeConfirmQueryResult = Apollo.QueryResult<
  ApolloTypes.ApexGetTradeConfirmQuery,
  ApolloTypes.ApexGetTradeConfirmQueryVariables
>;
export function refetchApexGetTradeConfirmQuery(
  variables?: ApolloTypes.ApexGetTradeConfirmQueryVariables
) {
  return { query: ApexGetTradeConfirmDocument, variables };
}
export const ApexGetTradeConfirmForInvestorDocument = /* #__PURE__ */ gql`
  query apexGetTradeConfirmForInvestor(
    $confirmDate: String!
    $investorId: String!
  ) {
    apexGetTradeConfirmForInvestor(
      confirmDate: $confirmDate
      investorId: $investorId
    ) {
      confirmResponse {
        apexAccountId
        confirmURL
      }
    }
  }
`;

/**
 * __useApexGetTradeConfirmForInvestorQuery__
 *
 * To run a query within a React component, call `useApexGetTradeConfirmForInvestorQuery` and pass it any options that fit your needs.
 * When your component renders, `useApexGetTradeConfirmForInvestorQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useApexGetTradeConfirmForInvestorQuery({
 *   variables: {
 *      confirmDate: // value for 'confirmDate'
 *      investorId: // value for 'investorId'
 *   },
 * });
 */
export function useApexGetTradeConfirmForInvestorQuery(
  baseOptions?: Apollo.QueryHookOptions<
    ApolloTypes.ApexGetTradeConfirmForInvestorQuery,
    ApolloTypes.ApexGetTradeConfirmForInvestorQueryVariables
  >
) {
  return Apollo.useQuery<
    ApolloTypes.ApexGetTradeConfirmForInvestorQuery,
    ApolloTypes.ApexGetTradeConfirmForInvestorQueryVariables
  >(ApexGetTradeConfirmForInvestorDocument, baseOptions);
}
export function useApexGetTradeConfirmForInvestorLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    ApolloTypes.ApexGetTradeConfirmForInvestorQuery,
    ApolloTypes.ApexGetTradeConfirmForInvestorQueryVariables
  >
) {
  return Apollo.useLazyQuery<
    ApolloTypes.ApexGetTradeConfirmForInvestorQuery,
    ApolloTypes.ApexGetTradeConfirmForInvestorQueryVariables
  >(ApexGetTradeConfirmForInvestorDocument, baseOptions);
}
export type ApexGetTradeConfirmForInvestorQueryHookResult = ReturnType<
  typeof useApexGetTradeConfirmForInvestorQuery
>;
export type ApexGetTradeConfirmForInvestorLazyQueryHookResult = ReturnType<
  typeof useApexGetTradeConfirmForInvestorLazyQuery
>;
export type ApexGetTradeConfirmForInvestorQueryResult = Apollo.QueryResult<
  ApolloTypes.ApexGetTradeConfirmForInvestorQuery,
  ApolloTypes.ApexGetTradeConfirmForInvestorQueryVariables
>;
export function refetchApexGetTradeConfirmForInvestorQuery(
  variables?: ApolloTypes.ApexGetTradeConfirmForInvestorQueryVariables
) {
  return {
    query: ApexGetTradeConfirmForInvestorDocument,
    variables
  };
}
export const ApexGetTradeConfirmsDocument = /* #__PURE__ */ gql`
  query apexGetTradeConfirms(
    $confirmEndDate: String!
    $confirmStartDate: String!
    $id: String!
  ) {
    apexGetTradeConfirms(
      confirmEndDate: $confirmEndDate
      confirmStartDate: $confirmStartDate
      id: $id
    ) {
      confirmsResponse {
        apexAccountId
        confirms {
          confirmURL
          processDate
        }
      }
    }
  }
`;

/**
 * __useApexGetTradeConfirmsQuery__
 *
 * To run a query within a React component, call `useApexGetTradeConfirmsQuery` and pass it any options that fit your needs.
 * When your component renders, `useApexGetTradeConfirmsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useApexGetTradeConfirmsQuery({
 *   variables: {
 *      confirmEndDate: // value for 'confirmEndDate'
 *      confirmStartDate: // value for 'confirmStartDate'
 *      id: // value for 'id'
 *   },
 * });
 */
export function useApexGetTradeConfirmsQuery(
  baseOptions?: Apollo.QueryHookOptions<
    ApolloTypes.ApexGetTradeConfirmsQuery,
    ApolloTypes.ApexGetTradeConfirmsQueryVariables
  >
) {
  return Apollo.useQuery<
    ApolloTypes.ApexGetTradeConfirmsQuery,
    ApolloTypes.ApexGetTradeConfirmsQueryVariables
  >(ApexGetTradeConfirmsDocument, baseOptions);
}
export function useApexGetTradeConfirmsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    ApolloTypes.ApexGetTradeConfirmsQuery,
    ApolloTypes.ApexGetTradeConfirmsQueryVariables
  >
) {
  return Apollo.useLazyQuery<
    ApolloTypes.ApexGetTradeConfirmsQuery,
    ApolloTypes.ApexGetTradeConfirmsQueryVariables
  >(ApexGetTradeConfirmsDocument, baseOptions);
}
export type ApexGetTradeConfirmsQueryHookResult = ReturnType<
  typeof useApexGetTradeConfirmsQuery
>;
export type ApexGetTradeConfirmsLazyQueryHookResult = ReturnType<
  typeof useApexGetTradeConfirmsLazyQuery
>;
export type ApexGetTradeConfirmsQueryResult = Apollo.QueryResult<
  ApolloTypes.ApexGetTradeConfirmsQuery,
  ApolloTypes.ApexGetTradeConfirmsQueryVariables
>;
export function refetchApexGetTradeConfirmsQuery(
  variables?: ApolloTypes.ApexGetTradeConfirmsQueryVariables
) {
  return { query: ApexGetTradeConfirmsDocument, variables };
}
export const ApexGetTradeConfirmsForInvestorDocument = /* #__PURE__ */ gql`
  query apexGetTradeConfirmsForInvestor(
    $confirmEndDate: String!
    $confirmStartDate: String!
    $investorId: String!
  ) {
    apexGetTradeConfirmsForInvestor(
      confirmEndDate: $confirmEndDate
      confirmStartDate: $confirmStartDate
      investorId: $investorId
    ) {
      confirmsResponse {
        apexAccountId
        confirms {
          confirmURL
          processDate
        }
      }
    }
  }
`;

/**
 * __useApexGetTradeConfirmsForInvestorQuery__
 *
 * To run a query within a React component, call `useApexGetTradeConfirmsForInvestorQuery` and pass it any options that fit your needs.
 * When your component renders, `useApexGetTradeConfirmsForInvestorQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useApexGetTradeConfirmsForInvestorQuery({
 *   variables: {
 *      confirmEndDate: // value for 'confirmEndDate'
 *      confirmStartDate: // value for 'confirmStartDate'
 *      investorId: // value for 'investorId'
 *   },
 * });
 */
export function useApexGetTradeConfirmsForInvestorQuery(
  baseOptions?: Apollo.QueryHookOptions<
    ApolloTypes.ApexGetTradeConfirmsForInvestorQuery,
    ApolloTypes.ApexGetTradeConfirmsForInvestorQueryVariables
  >
) {
  return Apollo.useQuery<
    ApolloTypes.ApexGetTradeConfirmsForInvestorQuery,
    ApolloTypes.ApexGetTradeConfirmsForInvestorQueryVariables
  >(ApexGetTradeConfirmsForInvestorDocument, baseOptions);
}
export function useApexGetTradeConfirmsForInvestorLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    ApolloTypes.ApexGetTradeConfirmsForInvestorQuery,
    ApolloTypes.ApexGetTradeConfirmsForInvestorQueryVariables
  >
) {
  return Apollo.useLazyQuery<
    ApolloTypes.ApexGetTradeConfirmsForInvestorQuery,
    ApolloTypes.ApexGetTradeConfirmsForInvestorQueryVariables
  >(ApexGetTradeConfirmsForInvestorDocument, baseOptions);
}
export type ApexGetTradeConfirmsForInvestorQueryHookResult = ReturnType<
  typeof useApexGetTradeConfirmsForInvestorQuery
>;
export type ApexGetTradeConfirmsForInvestorLazyQueryHookResult = ReturnType<
  typeof useApexGetTradeConfirmsForInvestorLazyQuery
>;
export type ApexGetTradeConfirmsForInvestorQueryResult = Apollo.QueryResult<
  ApolloTypes.ApexGetTradeConfirmsForInvestorQuery,
  ApolloTypes.ApexGetTradeConfirmsForInvestorQueryVariables
>;
export function refetchApexGetTradeConfirmsForInvestorQuery(
  variables?: ApolloTypes.ApexGetTradeConfirmsForInvestorQueryVariables
) {
  return {
    query: ApexGetTradeConfirmsForInvestorDocument,
    variables
  };
}
export const ApexGetTransferDocument = /* #__PURE__ */ gql`
  query apexGetTransfer($accountId: String!, $id: String!) {
    apexGetTransfer(accountId: $accountId, id: $id) {
      transfer {
        accountId
        achRelationshipId
        amount
        apexTransferId
        createdAt
        direction
        id
        metadata
        status
        transferId
        transferMethod
        updatedAt
      }
    }
  }
`;

/**
 * __useApexGetTransferQuery__
 *
 * To run a query within a React component, call `useApexGetTransferQuery` and pass it any options that fit your needs.
 * When your component renders, `useApexGetTransferQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useApexGetTransferQuery({
 *   variables: {
 *      accountId: // value for 'accountId'
 *      id: // value for 'id'
 *   },
 * });
 */
export function useApexGetTransferQuery(
  baseOptions?: Apollo.QueryHookOptions<
    ApolloTypes.ApexGetTransferQuery,
    ApolloTypes.ApexGetTransferQueryVariables
  >
) {
  return Apollo.useQuery<
    ApolloTypes.ApexGetTransferQuery,
    ApolloTypes.ApexGetTransferQueryVariables
  >(ApexGetTransferDocument, baseOptions);
}
export function useApexGetTransferLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    ApolloTypes.ApexGetTransferQuery,
    ApolloTypes.ApexGetTransferQueryVariables
  >
) {
  return Apollo.useLazyQuery<
    ApolloTypes.ApexGetTransferQuery,
    ApolloTypes.ApexGetTransferQueryVariables
  >(ApexGetTransferDocument, baseOptions);
}
export type ApexGetTransferQueryHookResult = ReturnType<
  typeof useApexGetTransferQuery
>;
export type ApexGetTransferLazyQueryHookResult = ReturnType<
  typeof useApexGetTransferLazyQuery
>;
export type ApexGetTransferQueryResult = Apollo.QueryResult<
  ApolloTypes.ApexGetTransferQuery,
  ApolloTypes.ApexGetTransferQueryVariables
>;
export function refetchApexGetTransferQuery(
  variables?: ApolloTypes.ApexGetTransferQueryVariables
) {
  return { query: ApexGetTransferDocument, variables };
}
export const ApexGetTransfersDocument = /* #__PURE__ */ gql`
  query apexGetTransfers($id: String!) {
    apexGetTransfers(id: $id) {
      transfers {
        accountId
        achRelationshipId
        amount
        apexTransferId
        createdAt
        direction
        id
        metadata
        status
        transferId
        transferMethod
        updatedAt
      }
    }
  }
`;

/**
 * __useApexGetTransfersQuery__
 *
 * To run a query within a React component, call `useApexGetTransfersQuery` and pass it any options that fit your needs.
 * When your component renders, `useApexGetTransfersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useApexGetTransfersQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useApexGetTransfersQuery(
  baseOptions?: Apollo.QueryHookOptions<
    ApolloTypes.ApexGetTransfersQuery,
    ApolloTypes.ApexGetTransfersQueryVariables
  >
) {
  return Apollo.useQuery<
    ApolloTypes.ApexGetTransfersQuery,
    ApolloTypes.ApexGetTransfersQueryVariables
  >(ApexGetTransfersDocument, baseOptions);
}
export function useApexGetTransfersLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    ApolloTypes.ApexGetTransfersQuery,
    ApolloTypes.ApexGetTransfersQueryVariables
  >
) {
  return Apollo.useLazyQuery<
    ApolloTypes.ApexGetTransfersQuery,
    ApolloTypes.ApexGetTransfersQueryVariables
  >(ApexGetTransfersDocument, baseOptions);
}
export type ApexGetTransfersQueryHookResult = ReturnType<
  typeof useApexGetTransfersQuery
>;
export type ApexGetTransfersLazyQueryHookResult = ReturnType<
  typeof useApexGetTransfersLazyQuery
>;
export type ApexGetTransfersQueryResult = Apollo.QueryResult<
  ApolloTypes.ApexGetTransfersQuery,
  ApolloTypes.ApexGetTransfersQueryVariables
>;
export function refetchApexGetTransfersQuery(
  variables?: ApolloTypes.ApexGetTransfersQueryVariables
) {
  return { query: ApexGetTransfersDocument, variables };
}
export const ApexTradingGetTradePostingsDocument = /* #__PURE__ */ gql`
  query apexTradingGetTradePostings($orderId: String!) {
    apexTradingGetTradePostings(orderId: $orderId) {
      tradePostings {
        aleId
        direction
        errorDetails
        orderId
        price
        quantity
        state
        ticker
        tradePostingId
        tradedAt
        updatedAt
      }
    }
  }
`;

/**
 * __useApexTradingGetTradePostingsQuery__
 *
 * To run a query within a React component, call `useApexTradingGetTradePostingsQuery` and pass it any options that fit your needs.
 * When your component renders, `useApexTradingGetTradePostingsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useApexTradingGetTradePostingsQuery({
 *   variables: {
 *      orderId: // value for 'orderId'
 *   },
 * });
 */
export function useApexTradingGetTradePostingsQuery(
  baseOptions?: Apollo.QueryHookOptions<
    ApolloTypes.ApexTradingGetTradePostingsQuery,
    ApolloTypes.ApexTradingGetTradePostingsQueryVariables
  >
) {
  return Apollo.useQuery<
    ApolloTypes.ApexTradingGetTradePostingsQuery,
    ApolloTypes.ApexTradingGetTradePostingsQueryVariables
  >(ApexTradingGetTradePostingsDocument, baseOptions);
}
export function useApexTradingGetTradePostingsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    ApolloTypes.ApexTradingGetTradePostingsQuery,
    ApolloTypes.ApexTradingGetTradePostingsQueryVariables
  >
) {
  return Apollo.useLazyQuery<
    ApolloTypes.ApexTradingGetTradePostingsQuery,
    ApolloTypes.ApexTradingGetTradePostingsQueryVariables
  >(ApexTradingGetTradePostingsDocument, baseOptions);
}
export type ApexTradingGetTradePostingsQueryHookResult = ReturnType<
  typeof useApexTradingGetTradePostingsQuery
>;
export type ApexTradingGetTradePostingsLazyQueryHookResult = ReturnType<
  typeof useApexTradingGetTradePostingsLazyQuery
>;
export type ApexTradingGetTradePostingsQueryResult = Apollo.QueryResult<
  ApolloTypes.ApexTradingGetTradePostingsQuery,
  ApolloTypes.ApexTradingGetTradePostingsQueryVariables
>;
export function refetchApexTradingGetTradePostingsQuery(
  variables?: ApolloTypes.ApexTradingGetTradePostingsQueryVariables
) {
  return { query: ApexTradingGetTradePostingsDocument, variables };
}
export const ApiManagerGetApicallRecordDocument = /* #__PURE__ */ gql`
  query apiManagerGetApicallRecord(
    $institutionId: String!
    $recordId: String!
  ) {
    apiManagerGetApicallRecord(
      institutionId: $institutionId
      recordId: $recordId
    ) {
      apiCallRecord {
        action
        createdAt
        id
        institutionId
        metadata
        responseStatus
        updatedAt
        url
      }
    }
  }
`;

/**
 * __useApiManagerGetApicallRecordQuery__
 *
 * To run a query within a React component, call `useApiManagerGetApicallRecordQuery` and pass it any options that fit your needs.
 * When your component renders, `useApiManagerGetApicallRecordQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useApiManagerGetApicallRecordQuery({
 *   variables: {
 *      institutionId: // value for 'institutionId'
 *      recordId: // value for 'recordId'
 *   },
 * });
 */
export function useApiManagerGetApicallRecordQuery(
  baseOptions?: Apollo.QueryHookOptions<
    ApolloTypes.ApiManagerGetApicallRecordQuery,
    ApolloTypes.ApiManagerGetApicallRecordQueryVariables
  >
) {
  return Apollo.useQuery<
    ApolloTypes.ApiManagerGetApicallRecordQuery,
    ApolloTypes.ApiManagerGetApicallRecordQueryVariables
  >(ApiManagerGetApicallRecordDocument, baseOptions);
}
export function useApiManagerGetApicallRecordLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    ApolloTypes.ApiManagerGetApicallRecordQuery,
    ApolloTypes.ApiManagerGetApicallRecordQueryVariables
  >
) {
  return Apollo.useLazyQuery<
    ApolloTypes.ApiManagerGetApicallRecordQuery,
    ApolloTypes.ApiManagerGetApicallRecordQueryVariables
  >(ApiManagerGetApicallRecordDocument, baseOptions);
}
export type ApiManagerGetApicallRecordQueryHookResult = ReturnType<
  typeof useApiManagerGetApicallRecordQuery
>;
export type ApiManagerGetApicallRecordLazyQueryHookResult = ReturnType<
  typeof useApiManagerGetApicallRecordLazyQuery
>;
export type ApiManagerGetApicallRecordQueryResult = Apollo.QueryResult<
  ApolloTypes.ApiManagerGetApicallRecordQuery,
  ApolloTypes.ApiManagerGetApicallRecordQueryVariables
>;
export function refetchApiManagerGetApicallRecordQuery(
  variables?: ApolloTypes.ApiManagerGetApicallRecordQueryVariables
) {
  return { query: ApiManagerGetApicallRecordDocument, variables };
}
export const ApiManagerGetApicallRecordsDocument = /* #__PURE__ */ gql`
  query apiManagerGetApicallRecords($institutionId: String!) {
    apiManagerGetApicallRecords(institutionId: $institutionId) {
      apiCallRecords {
        action
        createdAt
        id
        institutionId
        metadata
        responseStatus
        updatedAt
        url
      }
    }
  }
`;

/**
 * __useApiManagerGetApicallRecordsQuery__
 *
 * To run a query within a React component, call `useApiManagerGetApicallRecordsQuery` and pass it any options that fit your needs.
 * When your component renders, `useApiManagerGetApicallRecordsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useApiManagerGetApicallRecordsQuery({
 *   variables: {
 *      institutionId: // value for 'institutionId'
 *   },
 * });
 */
export function useApiManagerGetApicallRecordsQuery(
  baseOptions?: Apollo.QueryHookOptions<
    ApolloTypes.ApiManagerGetApicallRecordsQuery,
    ApolloTypes.ApiManagerGetApicallRecordsQueryVariables
  >
) {
  return Apollo.useQuery<
    ApolloTypes.ApiManagerGetApicallRecordsQuery,
    ApolloTypes.ApiManagerGetApicallRecordsQueryVariables
  >(ApiManagerGetApicallRecordsDocument, baseOptions);
}
export function useApiManagerGetApicallRecordsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    ApolloTypes.ApiManagerGetApicallRecordsQuery,
    ApolloTypes.ApiManagerGetApicallRecordsQueryVariables
  >
) {
  return Apollo.useLazyQuery<
    ApolloTypes.ApiManagerGetApicallRecordsQuery,
    ApolloTypes.ApiManagerGetApicallRecordsQueryVariables
  >(ApiManagerGetApicallRecordsDocument, baseOptions);
}
export type ApiManagerGetApicallRecordsQueryHookResult = ReturnType<
  typeof useApiManagerGetApicallRecordsQuery
>;
export type ApiManagerGetApicallRecordsLazyQueryHookResult = ReturnType<
  typeof useApiManagerGetApicallRecordsLazyQuery
>;
export type ApiManagerGetApicallRecordsQueryResult = Apollo.QueryResult<
  ApolloTypes.ApiManagerGetApicallRecordsQuery,
  ApolloTypes.ApiManagerGetApicallRecordsQueryVariables
>;
export function refetchApiManagerGetApicallRecordsQuery(
  variables?: ApolloTypes.ApiManagerGetApicallRecordsQueryVariables
) {
  return { query: ApiManagerGetApicallRecordsDocument, variables };
}
export const ApiManagerGetOrderExecutionLogsDocument = /* #__PURE__ */ gql`
  query apiManagerGetOrderExecutionLogs($orderId: String!) {
    apiManagerGetOrderExecutionLogs(orderId: $orderId) {
      executionLogs {
        application
        endpoint
        failure
        id
        orderId
        portfolioId
        responseCode
        state
        timestamp
        tradeId
      }
    }
  }
`;

/**
 * __useApiManagerGetOrderExecutionLogsQuery__
 *
 * To run a query within a React component, call `useApiManagerGetOrderExecutionLogsQuery` and pass it any options that fit your needs.
 * When your component renders, `useApiManagerGetOrderExecutionLogsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useApiManagerGetOrderExecutionLogsQuery({
 *   variables: {
 *      orderId: // value for 'orderId'
 *   },
 * });
 */
export function useApiManagerGetOrderExecutionLogsQuery(
  baseOptions?: Apollo.QueryHookOptions<
    ApolloTypes.ApiManagerGetOrderExecutionLogsQuery,
    ApolloTypes.ApiManagerGetOrderExecutionLogsQueryVariables
  >
) {
  return Apollo.useQuery<
    ApolloTypes.ApiManagerGetOrderExecutionLogsQuery,
    ApolloTypes.ApiManagerGetOrderExecutionLogsQueryVariables
  >(ApiManagerGetOrderExecutionLogsDocument, baseOptions);
}
export function useApiManagerGetOrderExecutionLogsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    ApolloTypes.ApiManagerGetOrderExecutionLogsQuery,
    ApolloTypes.ApiManagerGetOrderExecutionLogsQueryVariables
  >
) {
  return Apollo.useLazyQuery<
    ApolloTypes.ApiManagerGetOrderExecutionLogsQuery,
    ApolloTypes.ApiManagerGetOrderExecutionLogsQueryVariables
  >(ApiManagerGetOrderExecutionLogsDocument, baseOptions);
}
export type ApiManagerGetOrderExecutionLogsQueryHookResult = ReturnType<
  typeof useApiManagerGetOrderExecutionLogsQuery
>;
export type ApiManagerGetOrderExecutionLogsLazyQueryHookResult = ReturnType<
  typeof useApiManagerGetOrderExecutionLogsLazyQuery
>;
export type ApiManagerGetOrderExecutionLogsQueryResult = Apollo.QueryResult<
  ApolloTypes.ApiManagerGetOrderExecutionLogsQuery,
  ApolloTypes.ApiManagerGetOrderExecutionLogsQueryVariables
>;
export function refetchApiManagerGetOrderExecutionLogsQuery(
  variables?: ApolloTypes.ApiManagerGetOrderExecutionLogsQueryVariables
) {
  return {
    query: ApiManagerGetOrderExecutionLogsDocument,
    variables
  };
}
export const ApiManagerGetPortfolioExecutionLogsDocument = /* #__PURE__ */ gql`
  query apiManagerGetPortfolioExecutionLogs($portfolioId: String!) {
    apiManagerGetPortfolioExecutionLogs(portfolioId: $portfolioId) {
      executionLogs {
        application
        endpoint
        failure
        id
        orderId
        portfolioId
        responseCode
        state
        timestamp
        tradeId
      }
    }
  }
`;

/**
 * __useApiManagerGetPortfolioExecutionLogsQuery__
 *
 * To run a query within a React component, call `useApiManagerGetPortfolioExecutionLogsQuery` and pass it any options that fit your needs.
 * When your component renders, `useApiManagerGetPortfolioExecutionLogsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useApiManagerGetPortfolioExecutionLogsQuery({
 *   variables: {
 *      portfolioId: // value for 'portfolioId'
 *   },
 * });
 */
export function useApiManagerGetPortfolioExecutionLogsQuery(
  baseOptions?: Apollo.QueryHookOptions<
    ApolloTypes.ApiManagerGetPortfolioExecutionLogsQuery,
    ApolloTypes.ApiManagerGetPortfolioExecutionLogsQueryVariables
  >
) {
  return Apollo.useQuery<
    ApolloTypes.ApiManagerGetPortfolioExecutionLogsQuery,
    ApolloTypes.ApiManagerGetPortfolioExecutionLogsQueryVariables
  >(ApiManagerGetPortfolioExecutionLogsDocument, baseOptions);
}
export function useApiManagerGetPortfolioExecutionLogsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    ApolloTypes.ApiManagerGetPortfolioExecutionLogsQuery,
    ApolloTypes.ApiManagerGetPortfolioExecutionLogsQueryVariables
  >
) {
  return Apollo.useLazyQuery<
    ApolloTypes.ApiManagerGetPortfolioExecutionLogsQuery,
    ApolloTypes.ApiManagerGetPortfolioExecutionLogsQueryVariables
  >(ApiManagerGetPortfolioExecutionLogsDocument, baseOptions);
}
export type ApiManagerGetPortfolioExecutionLogsQueryHookResult = ReturnType<
  typeof useApiManagerGetPortfolioExecutionLogsQuery
>;
export type ApiManagerGetPortfolioExecutionLogsLazyQueryHookResult = ReturnType<
  typeof useApiManagerGetPortfolioExecutionLogsLazyQuery
>;
export type ApiManagerGetPortfolioExecutionLogsQueryResult = Apollo.QueryResult<
  ApolloTypes.ApiManagerGetPortfolioExecutionLogsQuery,
  ApolloTypes.ApiManagerGetPortfolioExecutionLogsQueryVariables
>;
export function refetchApiManagerGetPortfolioExecutionLogsQuery(
  variables?: ApolloTypes.ApiManagerGetPortfolioExecutionLogsQueryVariables
) {
  return {
    query: ApiManagerGetPortfolioExecutionLogsDocument,
    variables
  };
}
export const ApiManagerGetTradeExecutionLogsDocument = /* #__PURE__ */ gql`
  query apiManagerGetTradeExecutionLogs($tradeId: String!) {
    apiManagerGetTradeExecutionLogs(tradeId: $tradeId) {
      executionLogs {
        application
        endpoint
        failure
        id
        orderId
        portfolioId
        responseCode
        state
        timestamp
        tradeId
      }
    }
  }
`;

/**
 * __useApiManagerGetTradeExecutionLogsQuery__
 *
 * To run a query within a React component, call `useApiManagerGetTradeExecutionLogsQuery` and pass it any options that fit your needs.
 * When your component renders, `useApiManagerGetTradeExecutionLogsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useApiManagerGetTradeExecutionLogsQuery({
 *   variables: {
 *      tradeId: // value for 'tradeId'
 *   },
 * });
 */
export function useApiManagerGetTradeExecutionLogsQuery(
  baseOptions?: Apollo.QueryHookOptions<
    ApolloTypes.ApiManagerGetTradeExecutionLogsQuery,
    ApolloTypes.ApiManagerGetTradeExecutionLogsQueryVariables
  >
) {
  return Apollo.useQuery<
    ApolloTypes.ApiManagerGetTradeExecutionLogsQuery,
    ApolloTypes.ApiManagerGetTradeExecutionLogsQueryVariables
  >(ApiManagerGetTradeExecutionLogsDocument, baseOptions);
}
export function useApiManagerGetTradeExecutionLogsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    ApolloTypes.ApiManagerGetTradeExecutionLogsQuery,
    ApolloTypes.ApiManagerGetTradeExecutionLogsQueryVariables
  >
) {
  return Apollo.useLazyQuery<
    ApolloTypes.ApiManagerGetTradeExecutionLogsQuery,
    ApolloTypes.ApiManagerGetTradeExecutionLogsQueryVariables
  >(ApiManagerGetTradeExecutionLogsDocument, baseOptions);
}
export type ApiManagerGetTradeExecutionLogsQueryHookResult = ReturnType<
  typeof useApiManagerGetTradeExecutionLogsQuery
>;
export type ApiManagerGetTradeExecutionLogsLazyQueryHookResult = ReturnType<
  typeof useApiManagerGetTradeExecutionLogsLazyQuery
>;
export type ApiManagerGetTradeExecutionLogsQueryResult = Apollo.QueryResult<
  ApolloTypes.ApiManagerGetTradeExecutionLogsQuery,
  ApolloTypes.ApiManagerGetTradeExecutionLogsQueryVariables
>;
export function refetchApiManagerGetTradeExecutionLogsQuery(
  variables?: ApolloTypes.ApiManagerGetTradeExecutionLogsQueryVariables
) {
  return {
    query: ApiManagerGetTradeExecutionLogsDocument,
    variables
  };
}
export const AwsManagerGetSearchStackDocument = /* #__PURE__ */ gql`
  query awsManagerGetSearchStack($id: String!) {
    awsManagerGetSearchStack(id: $id) {
      searchStack {
        createdAt
        deadLetterQueueUrl
        functionArn
        functionName
        id
        metadata
        tableName
        tableStatus
        updatedAt
      }
    }
  }
`;

/**
 * __useAwsManagerGetSearchStackQuery__
 *
 * To run a query within a React component, call `useAwsManagerGetSearchStackQuery` and pass it any options that fit your needs.
 * When your component renders, `useAwsManagerGetSearchStackQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAwsManagerGetSearchStackQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useAwsManagerGetSearchStackQuery(
  baseOptions?: Apollo.QueryHookOptions<
    ApolloTypes.AwsManagerGetSearchStackQuery,
    ApolloTypes.AwsManagerGetSearchStackQueryVariables
  >
) {
  return Apollo.useQuery<
    ApolloTypes.AwsManagerGetSearchStackQuery,
    ApolloTypes.AwsManagerGetSearchStackQueryVariables
  >(AwsManagerGetSearchStackDocument, baseOptions);
}
export function useAwsManagerGetSearchStackLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    ApolloTypes.AwsManagerGetSearchStackQuery,
    ApolloTypes.AwsManagerGetSearchStackQueryVariables
  >
) {
  return Apollo.useLazyQuery<
    ApolloTypes.AwsManagerGetSearchStackQuery,
    ApolloTypes.AwsManagerGetSearchStackQueryVariables
  >(AwsManagerGetSearchStackDocument, baseOptions);
}
export type AwsManagerGetSearchStackQueryHookResult = ReturnType<
  typeof useAwsManagerGetSearchStackQuery
>;
export type AwsManagerGetSearchStackLazyQueryHookResult = ReturnType<
  typeof useAwsManagerGetSearchStackLazyQuery
>;
export type AwsManagerGetSearchStackQueryResult = Apollo.QueryResult<
  ApolloTypes.AwsManagerGetSearchStackQuery,
  ApolloTypes.AwsManagerGetSearchStackQueryVariables
>;
export function refetchAwsManagerGetSearchStackQuery(
  variables?: ApolloTypes.AwsManagerGetSearchStackQueryVariables
) {
  return { query: AwsManagerGetSearchStackDocument, variables };
}
export const AwsManagerGetSubscriptionDocument = /* #__PURE__ */ gql`
  query awsManagerGetSubscription($id: String!) {
    awsManagerGetSubscription(id: $id) {
      subscription {
        createdAt
        id
        queueArn
        queueUrl
        subscriptionArn
        topicArn
        updatedAt
      }
    }
  }
`;

/**
 * __useAwsManagerGetSubscription__
 *
 * To run a query within a React component, call `useAwsManagerGetSubscription` and pass it any options that fit your needs.
 * When your component renders, `useAwsManagerGetSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAwsManagerGetSubscription({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useAwsManagerGetSubscription(
  baseOptions?: Apollo.QueryHookOptions<
    ApolloTypes.AwsManagerGetSubscriptionQuery,
    ApolloTypes.AwsManagerGetSubscriptionQueryVariables
  >
) {
  return Apollo.useQuery<
    ApolloTypes.AwsManagerGetSubscriptionQuery,
    ApolloTypes.AwsManagerGetSubscriptionQueryVariables
  >(AwsManagerGetSubscriptionDocument, baseOptions);
}
export function useAwsManagerGetSubscriptionLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    ApolloTypes.AwsManagerGetSubscriptionQuery,
    ApolloTypes.AwsManagerGetSubscriptionQueryVariables
  >
) {
  return Apollo.useLazyQuery<
    ApolloTypes.AwsManagerGetSubscriptionQuery,
    ApolloTypes.AwsManagerGetSubscriptionQueryVariables
  >(AwsManagerGetSubscriptionDocument, baseOptions);
}
export type AwsManagerGetSubscriptionHookResult = ReturnType<
  typeof useAwsManagerGetSubscription
>;
export type AwsManagerGetSubscriptionLazyQueryHookResult = ReturnType<
  typeof useAwsManagerGetSubscriptionLazyQuery
>;
export type AwsManagerGetSubscriptionQueryResult = Apollo.QueryResult<
  ApolloTypes.AwsManagerGetSubscriptionQuery,
  ApolloTypes.AwsManagerGetSubscriptionQueryVariables
>;
export function refetchAwsManagerGetSubscription(
  variables?: ApolloTypes.AwsManagerGetSubscriptionQueryVariables
) {
  return { query: AwsManagerGetSubscriptionDocument, variables };
}
export const AwsManagerGetTopicDocument = /* #__PURE__ */ gql`
  query awsManagerGetTopic($id: String!) {
    awsManagerGetTopic(id: $id) {
      topic {
        arn
        createdAt
        id
        updatedAt
      }
    }
  }
`;

/**
 * __useAwsManagerGetTopicQuery__
 *
 * To run a query within a React component, call `useAwsManagerGetTopicQuery` and pass it any options that fit your needs.
 * When your component renders, `useAwsManagerGetTopicQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAwsManagerGetTopicQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useAwsManagerGetTopicQuery(
  baseOptions?: Apollo.QueryHookOptions<
    ApolloTypes.AwsManagerGetTopicQuery,
    ApolloTypes.AwsManagerGetTopicQueryVariables
  >
) {
  return Apollo.useQuery<
    ApolloTypes.AwsManagerGetTopicQuery,
    ApolloTypes.AwsManagerGetTopicQueryVariables
  >(AwsManagerGetTopicDocument, baseOptions);
}
export function useAwsManagerGetTopicLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    ApolloTypes.AwsManagerGetTopicQuery,
    ApolloTypes.AwsManagerGetTopicQueryVariables
  >
) {
  return Apollo.useLazyQuery<
    ApolloTypes.AwsManagerGetTopicQuery,
    ApolloTypes.AwsManagerGetTopicQueryVariables
  >(AwsManagerGetTopicDocument, baseOptions);
}
export type AwsManagerGetTopicQueryHookResult = ReturnType<
  typeof useAwsManagerGetTopicQuery
>;
export type AwsManagerGetTopicLazyQueryHookResult = ReturnType<
  typeof useAwsManagerGetTopicLazyQuery
>;
export type AwsManagerGetTopicQueryResult = Apollo.QueryResult<
  ApolloTypes.AwsManagerGetTopicQuery,
  ApolloTypes.AwsManagerGetTopicQueryVariables
>;
export function refetchAwsManagerGetTopicQuery(
  variables?: ApolloTypes.AwsManagerGetTopicQueryVariables
) {
  return { query: AwsManagerGetTopicDocument, variables };
}
export const BestFitGetPreferencesDocument = /* #__PURE__ */ gql`
  query bestFitGetPreferences($portfolioId: String!) {
    bestFitGetPreferences(portfolioId: $portfolioId) {
      preferences {
        assetClass
        count
        creditQualityBuckets
        duration
        excludedSubsectors
        maturity
        yield
      }
    }
  }
`;

/**
 * __useBestFitGetPreferencesQuery__
 *
 * To run a query within a React component, call `useBestFitGetPreferencesQuery` and pass it any options that fit your needs.
 * When your component renders, `useBestFitGetPreferencesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useBestFitGetPreferencesQuery({
 *   variables: {
 *      portfolioId: // value for 'portfolioId'
 *   },
 * });
 */
export function useBestFitGetPreferencesQuery(
  baseOptions?: Apollo.QueryHookOptions<
    ApolloTypes.BestFitGetPreferencesQuery,
    ApolloTypes.BestFitGetPreferencesQueryVariables
  >
) {
  return Apollo.useQuery<
    ApolloTypes.BestFitGetPreferencesQuery,
    ApolloTypes.BestFitGetPreferencesQueryVariables
  >(BestFitGetPreferencesDocument, baseOptions);
}
export function useBestFitGetPreferencesLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    ApolloTypes.BestFitGetPreferencesQuery,
    ApolloTypes.BestFitGetPreferencesQueryVariables
  >
) {
  return Apollo.useLazyQuery<
    ApolloTypes.BestFitGetPreferencesQuery,
    ApolloTypes.BestFitGetPreferencesQueryVariables
  >(BestFitGetPreferencesDocument, baseOptions);
}
export type BestFitGetPreferencesQueryHookResult = ReturnType<
  typeof useBestFitGetPreferencesQuery
>;
export type BestFitGetPreferencesLazyQueryHookResult = ReturnType<
  typeof useBestFitGetPreferencesLazyQuery
>;
export type BestFitGetPreferencesQueryResult = Apollo.QueryResult<
  ApolloTypes.BestFitGetPreferencesQuery,
  ApolloTypes.BestFitGetPreferencesQueryVariables
>;
export function refetchBestFitGetPreferencesQuery(
  variables?: ApolloTypes.BestFitGetPreferencesQueryVariables
) {
  return { query: BestFitGetPreferencesDocument, variables };
}
export const BondviewGetIndexBondsDocument = /* #__PURE__ */ gql`
  query bondviewGetIndexBonds($date: String!) {
    bondviewGetIndexBonds(date: $date) {
      indexBonds {
        amountForSale90Days
        coupon
        cusip
        figi
        fundsHolding
        marketSector
        maturityDate
        percentHeldInFunds
        price
        rank
        securityDescription
        state
        totalSharesHeldInFunds
        tradeVolume90Days
      }
    }
  }
`;

/**
 * __useBondviewGetIndexBondsQuery__
 *
 * To run a query within a React component, call `useBondviewGetIndexBondsQuery` and pass it any options that fit your needs.
 * When your component renders, `useBondviewGetIndexBondsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useBondviewGetIndexBondsQuery({
 *   variables: {
 *      date: // value for 'date'
 *   },
 * });
 */
export function useBondviewGetIndexBondsQuery(
  baseOptions?: Apollo.QueryHookOptions<
    ApolloTypes.BondviewGetIndexBondsQuery,
    ApolloTypes.BondviewGetIndexBondsQueryVariables
  >
) {
  return Apollo.useQuery<
    ApolloTypes.BondviewGetIndexBondsQuery,
    ApolloTypes.BondviewGetIndexBondsQueryVariables
  >(BondviewGetIndexBondsDocument, baseOptions);
}
export function useBondviewGetIndexBondsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    ApolloTypes.BondviewGetIndexBondsQuery,
    ApolloTypes.BondviewGetIndexBondsQueryVariables
  >
) {
  return Apollo.useLazyQuery<
    ApolloTypes.BondviewGetIndexBondsQuery,
    ApolloTypes.BondviewGetIndexBondsQueryVariables
  >(BondviewGetIndexBondsDocument, baseOptions);
}
export type BondviewGetIndexBondsQueryHookResult = ReturnType<
  typeof useBondviewGetIndexBondsQuery
>;
export type BondviewGetIndexBondsLazyQueryHookResult = ReturnType<
  typeof useBondviewGetIndexBondsLazyQuery
>;
export type BondviewGetIndexBondsQueryResult = Apollo.QueryResult<
  ApolloTypes.BondviewGetIndexBondsQuery,
  ApolloTypes.BondviewGetIndexBondsQueryVariables
>;
export function refetchBondviewGetIndexBondsQuery(
  variables?: ApolloTypes.BondviewGetIndexBondsQueryVariables
) {
  return { query: BondviewGetIndexBondsDocument, variables };
}
export const BondviewLoadAllIndexBondsDocument = /* #__PURE__ */ gql`
  query bondviewLoadAllIndexBonds {
    bondviewLoadAllIndexBonds {
      numLoaded
    }
  }
`;

/**
 * __useBondviewLoadAllIndexBondsQuery__
 *
 * To run a query within a React component, call `useBondviewLoadAllIndexBondsQuery` and pass it any options that fit your needs.
 * When your component renders, `useBondviewLoadAllIndexBondsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useBondviewLoadAllIndexBondsQuery({
 *   variables: {
 *   },
 * });
 */
export function useBondviewLoadAllIndexBondsQuery(
  baseOptions?: Apollo.QueryHookOptions<
    ApolloTypes.BondviewLoadAllIndexBondsQuery,
    ApolloTypes.BondviewLoadAllIndexBondsQueryVariables
  >
) {
  return Apollo.useQuery<
    ApolloTypes.BondviewLoadAllIndexBondsQuery,
    ApolloTypes.BondviewLoadAllIndexBondsQueryVariables
  >(BondviewLoadAllIndexBondsDocument, baseOptions);
}
export function useBondviewLoadAllIndexBondsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    ApolloTypes.BondviewLoadAllIndexBondsQuery,
    ApolloTypes.BondviewLoadAllIndexBondsQueryVariables
  >
) {
  return Apollo.useLazyQuery<
    ApolloTypes.BondviewLoadAllIndexBondsQuery,
    ApolloTypes.BondviewLoadAllIndexBondsQueryVariables
  >(BondviewLoadAllIndexBondsDocument, baseOptions);
}
export type BondviewLoadAllIndexBondsQueryHookResult = ReturnType<
  typeof useBondviewLoadAllIndexBondsQuery
>;
export type BondviewLoadAllIndexBondsLazyQueryHookResult = ReturnType<
  typeof useBondviewLoadAllIndexBondsLazyQuery
>;
export type BondviewLoadAllIndexBondsQueryResult = Apollo.QueryResult<
  ApolloTypes.BondviewLoadAllIndexBondsQuery,
  ApolloTypes.BondviewLoadAllIndexBondsQueryVariables
>;
export function refetchBondviewLoadAllIndexBondsQuery(
  variables?: ApolloTypes.BondviewLoadAllIndexBondsQueryVariables
) {
  return { query: BondviewLoadAllIndexBondsDocument, variables };
}
export const FileManagementDownloadFileDocument = /* #__PURE__ */ gql`
  query fileManagementDownloadFile($fileId: String!) {
    fileManagementDownloadFile(fileId: $fileId) {
      file
    }
  }
`;

/**
 * __useFileManagementDownloadFileQuery__
 *
 * To run a query within a React component, call `useFileManagementDownloadFileQuery` and pass it any options that fit your needs.
 * When your component renders, `useFileManagementDownloadFileQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFileManagementDownloadFileQuery({
 *   variables: {
 *      fileId: // value for 'fileId'
 *   },
 * });
 */
export function useFileManagementDownloadFileQuery(
  baseOptions?: Apollo.QueryHookOptions<
    ApolloTypes.FileManagementDownloadFileQuery,
    ApolloTypes.FileManagementDownloadFileQueryVariables
  >
) {
  return Apollo.useQuery<
    ApolloTypes.FileManagementDownloadFileQuery,
    ApolloTypes.FileManagementDownloadFileQueryVariables
  >(FileManagementDownloadFileDocument, baseOptions);
}
export function useFileManagementDownloadFileLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    ApolloTypes.FileManagementDownloadFileQuery,
    ApolloTypes.FileManagementDownloadFileQueryVariables
  >
) {
  return Apollo.useLazyQuery<
    ApolloTypes.FileManagementDownloadFileQuery,
    ApolloTypes.FileManagementDownloadFileQueryVariables
  >(FileManagementDownloadFileDocument, baseOptions);
}
export type FileManagementDownloadFileQueryHookResult = ReturnType<
  typeof useFileManagementDownloadFileQuery
>;
export type FileManagementDownloadFileLazyQueryHookResult = ReturnType<
  typeof useFileManagementDownloadFileLazyQuery
>;
export type FileManagementDownloadFileQueryResult = Apollo.QueryResult<
  ApolloTypes.FileManagementDownloadFileQuery,
  ApolloTypes.FileManagementDownloadFileQueryVariables
>;
export function refetchFileManagementDownloadFileQuery(
  variables?: ApolloTypes.FileManagementDownloadFileQueryVariables
) {
  return { query: FileManagementDownloadFileDocument, variables };
}
export const FileManagementListFilesDocument = /* #__PURE__ */ gql`
  query fileManagementListFiles(
    $affiliatedResource: AffiliatedResource!
    $affiliatedResourceId: String!
  ) {
    fileManagementListFiles(
      affiliatedResource: $affiliatedResource
      affiliatedResourceId: $affiliatedResourceId
    ) {
      filesList {
        affiliatedResource
        affiliatedResourceId
        createdAt
        documentName
        fileExtension
        fileId
      }
    }
  }
`;

/**
 * __useFileManagementListFilesQuery__
 *
 * To run a query within a React component, call `useFileManagementListFilesQuery` and pass it any options that fit your needs.
 * When your component renders, `useFileManagementListFilesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFileManagementListFilesQuery({
 *   variables: {
 *      affiliatedResource: // value for 'affiliatedResource'
 *      affiliatedResourceId: // value for 'affiliatedResourceId'
 *   },
 * });
 */
export function useFileManagementListFilesQuery(
  baseOptions?: Apollo.QueryHookOptions<
    ApolloTypes.FileManagementListFilesQuery,
    ApolloTypes.FileManagementListFilesQueryVariables
  >
) {
  return Apollo.useQuery<
    ApolloTypes.FileManagementListFilesQuery,
    ApolloTypes.FileManagementListFilesQueryVariables
  >(FileManagementListFilesDocument, baseOptions);
}
export function useFileManagementListFilesLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    ApolloTypes.FileManagementListFilesQuery,
    ApolloTypes.FileManagementListFilesQueryVariables
  >
) {
  return Apollo.useLazyQuery<
    ApolloTypes.FileManagementListFilesQuery,
    ApolloTypes.FileManagementListFilesQueryVariables
  >(FileManagementListFilesDocument, baseOptions);
}
export type FileManagementListFilesQueryHookResult = ReturnType<
  typeof useFileManagementListFilesQuery
>;
export type FileManagementListFilesLazyQueryHookResult = ReturnType<
  typeof useFileManagementListFilesLazyQuery
>;
export type FileManagementListFilesQueryResult = Apollo.QueryResult<
  ApolloTypes.FileManagementListFilesQuery,
  ApolloTypes.FileManagementListFilesQueryVariables
>;
export function refetchFileManagementListFilesQuery(
  variables?: ApolloTypes.FileManagementListFilesQueryVariables
) {
  return { query: FileManagementListFilesDocument, variables };
}
export const IamAuthorizerequestDocument = /* #__PURE__ */ gql`
  query iamAuthorizerequest {
    iamAuthorizerequest {
      allowed
      message
      timestamp
    }
  }
`;

/**
 * __useIamAuthorizerequestQuery__
 *
 * To run a query within a React component, call `useIamAuthorizerequestQuery` and pass it any options that fit your needs.
 * When your component renders, `useIamAuthorizerequestQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useIamAuthorizerequestQuery({
 *   variables: {
 *   },
 * });
 */
export function useIamAuthorizerequestQuery(
  baseOptions?: Apollo.QueryHookOptions<
    ApolloTypes.IamAuthorizerequestQuery,
    ApolloTypes.IamAuthorizerequestQueryVariables
  >
) {
  return Apollo.useQuery<
    ApolloTypes.IamAuthorizerequestQuery,
    ApolloTypes.IamAuthorizerequestQueryVariables
  >(IamAuthorizerequestDocument, baseOptions);
}
export function useIamAuthorizerequestLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    ApolloTypes.IamAuthorizerequestQuery,
    ApolloTypes.IamAuthorizerequestQueryVariables
  >
) {
  return Apollo.useLazyQuery<
    ApolloTypes.IamAuthorizerequestQuery,
    ApolloTypes.IamAuthorizerequestQueryVariables
  >(IamAuthorizerequestDocument, baseOptions);
}
export type IamAuthorizerequestQueryHookResult = ReturnType<
  typeof useIamAuthorizerequestQuery
>;
export type IamAuthorizerequestLazyQueryHookResult = ReturnType<
  typeof useIamAuthorizerequestLazyQuery
>;
export type IamAuthorizerequestQueryResult = Apollo.QueryResult<
  ApolloTypes.IamAuthorizerequestQuery,
  ApolloTypes.IamAuthorizerequestQueryVariables
>;
export function refetchIamAuthorizerequestQuery(
  variables?: ApolloTypes.IamAuthorizerequestQueryVariables
) {
  return { query: IamAuthorizerequestDocument, variables };
}
export const IamGetCurrentUserDocument = /* #__PURE__ */ gql`
  query iamGetCurrentUser {
    iamGetCurrentUser {
      user {
        createdAt
        email
        first
        id
        institutionId
        last
        metadata
        policies {
          actions
          resource
        }
        status
        terms
        updatedAt
        userType
      }
    }
  }
`;

/**
 * __useIamGetCurrentUserQuery__
 *
 * To run a query within a React component, call `useIamGetCurrentUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useIamGetCurrentUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useIamGetCurrentUserQuery({
 *   variables: {
 *   },
 * });
 */
export function useIamGetCurrentUserQuery(
  baseOptions?: Apollo.QueryHookOptions<
    ApolloTypes.IamGetCurrentUserQuery,
    ApolloTypes.IamGetCurrentUserQueryVariables
  >
) {
  return Apollo.useQuery<
    ApolloTypes.IamGetCurrentUserQuery,
    ApolloTypes.IamGetCurrentUserQueryVariables
  >(IamGetCurrentUserDocument, baseOptions);
}
export function useIamGetCurrentUserLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    ApolloTypes.IamGetCurrentUserQuery,
    ApolloTypes.IamGetCurrentUserQueryVariables
  >
) {
  return Apollo.useLazyQuery<
    ApolloTypes.IamGetCurrentUserQuery,
    ApolloTypes.IamGetCurrentUserQueryVariables
  >(IamGetCurrentUserDocument, baseOptions);
}
export type IamGetCurrentUserQueryHookResult = ReturnType<
  typeof useIamGetCurrentUserQuery
>;
export type IamGetCurrentUserLazyQueryHookResult = ReturnType<
  typeof useIamGetCurrentUserLazyQuery
>;
export type IamGetCurrentUserQueryResult = Apollo.QueryResult<
  ApolloTypes.IamGetCurrentUserQuery,
  ApolloTypes.IamGetCurrentUserQueryVariables
>;
export function refetchIamGetCurrentUserQuery(
  variables?: ApolloTypes.IamGetCurrentUserQueryVariables
) {
  return { query: IamGetCurrentUserDocument, variables };
}
export const IamGetInstitutionDocument = /* #__PURE__ */ gql`
  query iamGetInstitution($institutionId: String!) {
    iamGetInstitution(institutionId: $institutionId) {
      institution {
        createdAt
        id
        machineUsers {
          clientId
          clientSecret
        }
        metadata
        name
        primaryContact {
          email
          first
          last
        }
        updatedAt
      }
    }
  }
`;

/**
 * __useIamGetInstitutionQuery__
 *
 * To run a query within a React component, call `useIamGetInstitutionQuery` and pass it any options that fit your needs.
 * When your component renders, `useIamGetInstitutionQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useIamGetInstitutionQuery({
 *   variables: {
 *      institutionId: // value for 'institutionId'
 *   },
 * });
 */
export function useIamGetInstitutionQuery(
  baseOptions?: Apollo.QueryHookOptions<
    ApolloTypes.IamGetInstitutionQuery,
    ApolloTypes.IamGetInstitutionQueryVariables
  >
) {
  return Apollo.useQuery<
    ApolloTypes.IamGetInstitutionQuery,
    ApolloTypes.IamGetInstitutionQueryVariables
  >(IamGetInstitutionDocument, baseOptions);
}
export function useIamGetInstitutionLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    ApolloTypes.IamGetInstitutionQuery,
    ApolloTypes.IamGetInstitutionQueryVariables
  >
) {
  return Apollo.useLazyQuery<
    ApolloTypes.IamGetInstitutionQuery,
    ApolloTypes.IamGetInstitutionQueryVariables
  >(IamGetInstitutionDocument, baseOptions);
}
export type IamGetInstitutionQueryHookResult = ReturnType<
  typeof useIamGetInstitutionQuery
>;
export type IamGetInstitutionLazyQueryHookResult = ReturnType<
  typeof useIamGetInstitutionLazyQuery
>;
export type IamGetInstitutionQueryResult = Apollo.QueryResult<
  ApolloTypes.IamGetInstitutionQuery,
  ApolloTypes.IamGetInstitutionQueryVariables
>;
export function refetchIamGetInstitutionQuery(
  variables?: ApolloTypes.IamGetInstitutionQueryVariables
) {
  return { query: IamGetInstitutionDocument, variables };
}
export const IamGetInstitutionInventoryMappingDocument = /* #__PURE__ */ gql`
  query iamGetInstitutionInventoryMapping($institutionId: String!) {
    iamGetInstitutionInventoryMapping(institutionId: $institutionId) {
      inventoryMapping {
        assetExplorer
        bestFit
        inpaas
        institutionId
        muniBestFit
      }
    }
  }
`;

/**
 * __useIamGetInstitutionInventoryMappingQuery__
 *
 * To run a query within a React component, call `useIamGetInstitutionInventoryMappingQuery` and pass it any options that fit your needs.
 * When your component renders, `useIamGetInstitutionInventoryMappingQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useIamGetInstitutionInventoryMappingQuery({
 *   variables: {
 *      institutionId: // value for 'institutionId'
 *   },
 * });
 */
export function useIamGetInstitutionInventoryMappingQuery(
  baseOptions?: Apollo.QueryHookOptions<
    ApolloTypes.IamGetInstitutionInventoryMappingQuery,
    ApolloTypes.IamGetInstitutionInventoryMappingQueryVariables
  >
) {
  return Apollo.useQuery<
    ApolloTypes.IamGetInstitutionInventoryMappingQuery,
    ApolloTypes.IamGetInstitutionInventoryMappingQueryVariables
  >(IamGetInstitutionInventoryMappingDocument, baseOptions);
}
export function useIamGetInstitutionInventoryMappingLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    ApolloTypes.IamGetInstitutionInventoryMappingQuery,
    ApolloTypes.IamGetInstitutionInventoryMappingQueryVariables
  >
) {
  return Apollo.useLazyQuery<
    ApolloTypes.IamGetInstitutionInventoryMappingQuery,
    ApolloTypes.IamGetInstitutionInventoryMappingQueryVariables
  >(IamGetInstitutionInventoryMappingDocument, baseOptions);
}
export type IamGetInstitutionInventoryMappingQueryHookResult = ReturnType<
  typeof useIamGetInstitutionInventoryMappingQuery
>;
export type IamGetInstitutionInventoryMappingLazyQueryHookResult = ReturnType<
  typeof useIamGetInstitutionInventoryMappingLazyQuery
>;
export type IamGetInstitutionInventoryMappingQueryResult = Apollo.QueryResult<
  ApolloTypes.IamGetInstitutionInventoryMappingQuery,
  ApolloTypes.IamGetInstitutionInventoryMappingQueryVariables
>;
export function refetchIamGetInstitutionInventoryMappingQuery(
  variables?: ApolloTypes.IamGetInstitutionInventoryMappingQueryVariables
) {
  return {
    query: IamGetInstitutionInventoryMappingDocument,
    variables
  };
}
export const IamGetInstitutionInvestorMappingDocument = /* #__PURE__ */ gql`
  query iamGetInstitutionInvestorMapping($investorId: String!) {
    iamGetInstitutionInvestorMapping(investorId: $investorId) {
      investorMapping {
        institutionId
        investorId
      }
    }
  }
`;

/**
 * __useIamGetInstitutionInvestorMappingQuery__
 *
 * To run a query within a React component, call `useIamGetInstitutionInvestorMappingQuery` and pass it any options that fit your needs.
 * When your component renders, `useIamGetInstitutionInvestorMappingQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useIamGetInstitutionInvestorMappingQuery({
 *   variables: {
 *      investorId: // value for 'investorId'
 *   },
 * });
 */
export function useIamGetInstitutionInvestorMappingQuery(
  baseOptions?: Apollo.QueryHookOptions<
    ApolloTypes.IamGetInstitutionInvestorMappingQuery,
    ApolloTypes.IamGetInstitutionInvestorMappingQueryVariables
  >
) {
  return Apollo.useQuery<
    ApolloTypes.IamGetInstitutionInvestorMappingQuery,
    ApolloTypes.IamGetInstitutionInvestorMappingQueryVariables
  >(IamGetInstitutionInvestorMappingDocument, baseOptions);
}
export function useIamGetInstitutionInvestorMappingLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    ApolloTypes.IamGetInstitutionInvestorMappingQuery,
    ApolloTypes.IamGetInstitutionInvestorMappingQueryVariables
  >
) {
  return Apollo.useLazyQuery<
    ApolloTypes.IamGetInstitutionInvestorMappingQuery,
    ApolloTypes.IamGetInstitutionInvestorMappingQueryVariables
  >(IamGetInstitutionInvestorMappingDocument, baseOptions);
}
export type IamGetInstitutionInvestorMappingQueryHookResult = ReturnType<
  typeof useIamGetInstitutionInvestorMappingQuery
>;
export type IamGetInstitutionInvestorMappingLazyQueryHookResult = ReturnType<
  typeof useIamGetInstitutionInvestorMappingLazyQuery
>;
export type IamGetInstitutionInvestorMappingQueryResult = Apollo.QueryResult<
  ApolloTypes.IamGetInstitutionInvestorMappingQuery,
  ApolloTypes.IamGetInstitutionInvestorMappingQueryVariables
>;
export function refetchIamGetInstitutionInvestorMappingQuery(
  variables?: ApolloTypes.IamGetInstitutionInvestorMappingQueryVariables
) {
  return {
    query: IamGetInstitutionInvestorMappingDocument,
    variables
  };
}
export const IamGetInstitutionPortfolioMappingDocument = /* #__PURE__ */ gql`
  query iamGetInstitutionPortfolioMapping($portfolioId: String!) {
    iamGetInstitutionPortfolioMapping(portfolioId: $portfolioId) {
      portfolioMapping {
        institutionId
        portfolioId
      }
    }
  }
`;

/**
 * __useIamGetInstitutionPortfolioMappingQuery__
 *
 * To run a query within a React component, call `useIamGetInstitutionPortfolioMappingQuery` and pass it any options that fit your needs.
 * When your component renders, `useIamGetInstitutionPortfolioMappingQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useIamGetInstitutionPortfolioMappingQuery({
 *   variables: {
 *      portfolioId: // value for 'portfolioId'
 *   },
 * });
 */
export function useIamGetInstitutionPortfolioMappingQuery(
  baseOptions?: Apollo.QueryHookOptions<
    ApolloTypes.IamGetInstitutionPortfolioMappingQuery,
    ApolloTypes.IamGetInstitutionPortfolioMappingQueryVariables
  >
) {
  return Apollo.useQuery<
    ApolloTypes.IamGetInstitutionPortfolioMappingQuery,
    ApolloTypes.IamGetInstitutionPortfolioMappingQueryVariables
  >(IamGetInstitutionPortfolioMappingDocument, baseOptions);
}
export function useIamGetInstitutionPortfolioMappingLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    ApolloTypes.IamGetInstitutionPortfolioMappingQuery,
    ApolloTypes.IamGetInstitutionPortfolioMappingQueryVariables
  >
) {
  return Apollo.useLazyQuery<
    ApolloTypes.IamGetInstitutionPortfolioMappingQuery,
    ApolloTypes.IamGetInstitutionPortfolioMappingQueryVariables
  >(IamGetInstitutionPortfolioMappingDocument, baseOptions);
}
export type IamGetInstitutionPortfolioMappingQueryHookResult = ReturnType<
  typeof useIamGetInstitutionPortfolioMappingQuery
>;
export type IamGetInstitutionPortfolioMappingLazyQueryHookResult = ReturnType<
  typeof useIamGetInstitutionPortfolioMappingLazyQuery
>;
export type IamGetInstitutionPortfolioMappingQueryResult = Apollo.QueryResult<
  ApolloTypes.IamGetInstitutionPortfolioMappingQuery,
  ApolloTypes.IamGetInstitutionPortfolioMappingQueryVariables
>;
export function refetchIamGetInstitutionPortfolioMappingQuery(
  variables?: ApolloTypes.IamGetInstitutionPortfolioMappingQueryVariables
) {
  return {
    query: IamGetInstitutionPortfolioMappingDocument,
    variables
  };
}
export const IamGetInstitutionProposalMappingDocument = /* #__PURE__ */ gql`
  query iamGetInstitutionProposalMapping($proposalId: String!) {
    iamGetInstitutionProposalMapping(proposalId: $proposalId) {
      proposalMapping {
        institutionId
        proposalId
      }
    }
  }
`;

/**
 * __useIamGetInstitutionProposalMappingQuery__
 *
 * To run a query within a React component, call `useIamGetInstitutionProposalMappingQuery` and pass it any options that fit your needs.
 * When your component renders, `useIamGetInstitutionProposalMappingQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useIamGetInstitutionProposalMappingQuery({
 *   variables: {
 *      proposalId: // value for 'proposalId'
 *   },
 * });
 */
export function useIamGetInstitutionProposalMappingQuery(
  baseOptions?: Apollo.QueryHookOptions<
    ApolloTypes.IamGetInstitutionProposalMappingQuery,
    ApolloTypes.IamGetInstitutionProposalMappingQueryVariables
  >
) {
  return Apollo.useQuery<
    ApolloTypes.IamGetInstitutionProposalMappingQuery,
    ApolloTypes.IamGetInstitutionProposalMappingQueryVariables
  >(IamGetInstitutionProposalMappingDocument, baseOptions);
}
export function useIamGetInstitutionProposalMappingLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    ApolloTypes.IamGetInstitutionProposalMappingQuery,
    ApolloTypes.IamGetInstitutionProposalMappingQueryVariables
  >
) {
  return Apollo.useLazyQuery<
    ApolloTypes.IamGetInstitutionProposalMappingQuery,
    ApolloTypes.IamGetInstitutionProposalMappingQueryVariables
  >(IamGetInstitutionProposalMappingDocument, baseOptions);
}
export type IamGetInstitutionProposalMappingQueryHookResult = ReturnType<
  typeof useIamGetInstitutionProposalMappingQuery
>;
export type IamGetInstitutionProposalMappingLazyQueryHookResult = ReturnType<
  typeof useIamGetInstitutionProposalMappingLazyQuery
>;
export type IamGetInstitutionProposalMappingQueryResult = Apollo.QueryResult<
  ApolloTypes.IamGetInstitutionProposalMappingQuery,
  ApolloTypes.IamGetInstitutionProposalMappingQueryVariables
>;
export function refetchIamGetInstitutionProposalMappingQuery(
  variables?: ApolloTypes.IamGetInstitutionProposalMappingQueryVariables
) {
  return {
    query: IamGetInstitutionProposalMappingDocument,
    variables
  };
}
export const IamGetInstitutionRolesMappingDocument = /* #__PURE__ */ gql`
  query iamGetInstitutionRolesMapping($institutionId: String!) {
    iamGetInstitutionRolesMapping(institutionId: $institutionId) {
      roles {
        institutionId
        roleId
        userType
      }
    }
  }
`;

/**
 * __useIamGetInstitutionRolesMappingQuery__
 *
 * To run a query within a React component, call `useIamGetInstitutionRolesMappingQuery` and pass it any options that fit your needs.
 * When your component renders, `useIamGetInstitutionRolesMappingQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useIamGetInstitutionRolesMappingQuery({
 *   variables: {
 *      institutionId: // value for 'institutionId'
 *   },
 * });
 */
export function useIamGetInstitutionRolesMappingQuery(
  baseOptions?: Apollo.QueryHookOptions<
    ApolloTypes.IamGetInstitutionRolesMappingQuery,
    ApolloTypes.IamGetInstitutionRolesMappingQueryVariables
  >
) {
  return Apollo.useQuery<
    ApolloTypes.IamGetInstitutionRolesMappingQuery,
    ApolloTypes.IamGetInstitutionRolesMappingQueryVariables
  >(IamGetInstitutionRolesMappingDocument, baseOptions);
}
export function useIamGetInstitutionRolesMappingLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    ApolloTypes.IamGetInstitutionRolesMappingQuery,
    ApolloTypes.IamGetInstitutionRolesMappingQueryVariables
  >
) {
  return Apollo.useLazyQuery<
    ApolloTypes.IamGetInstitutionRolesMappingQuery,
    ApolloTypes.IamGetInstitutionRolesMappingQueryVariables
  >(IamGetInstitutionRolesMappingDocument, baseOptions);
}
export type IamGetInstitutionRolesMappingQueryHookResult = ReturnType<
  typeof useIamGetInstitutionRolesMappingQuery
>;
export type IamGetInstitutionRolesMappingLazyQueryHookResult = ReturnType<
  typeof useIamGetInstitutionRolesMappingLazyQuery
>;
export type IamGetInstitutionRolesMappingQueryResult = Apollo.QueryResult<
  ApolloTypes.IamGetInstitutionRolesMappingQuery,
  ApolloTypes.IamGetInstitutionRolesMappingQueryVariables
>;
export function refetchIamGetInstitutionRolesMappingQuery(
  variables?: ApolloTypes.IamGetInstitutionRolesMappingQueryVariables
) {
  return { query: IamGetInstitutionRolesMappingDocument, variables };
}
export const IamGetInstitutionUserMappingDocument = /* #__PURE__ */ gql`
  query iamGetInstitutionUserMapping($userId: String!) {
    iamGetInstitutionUserMapping(userId: $userId) {
      userMapping {
        email
        institutionId
        roles
        userId
        userType
      }
    }
  }
`;

/**
 * __useIamGetInstitutionUserMappingQuery__
 *
 * To run a query within a React component, call `useIamGetInstitutionUserMappingQuery` and pass it any options that fit your needs.
 * When your component renders, `useIamGetInstitutionUserMappingQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useIamGetInstitutionUserMappingQuery({
 *   variables: {
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useIamGetInstitutionUserMappingQuery(
  baseOptions?: Apollo.QueryHookOptions<
    ApolloTypes.IamGetInstitutionUserMappingQuery,
    ApolloTypes.IamGetInstitutionUserMappingQueryVariables
  >
) {
  return Apollo.useQuery<
    ApolloTypes.IamGetInstitutionUserMappingQuery,
    ApolloTypes.IamGetInstitutionUserMappingQueryVariables
  >(IamGetInstitutionUserMappingDocument, baseOptions);
}
export function useIamGetInstitutionUserMappingLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    ApolloTypes.IamGetInstitutionUserMappingQuery,
    ApolloTypes.IamGetInstitutionUserMappingQueryVariables
  >
) {
  return Apollo.useLazyQuery<
    ApolloTypes.IamGetInstitutionUserMappingQuery,
    ApolloTypes.IamGetInstitutionUserMappingQueryVariables
  >(IamGetInstitutionUserMappingDocument, baseOptions);
}
export type IamGetInstitutionUserMappingQueryHookResult = ReturnType<
  typeof useIamGetInstitutionUserMappingQuery
>;
export type IamGetInstitutionUserMappingLazyQueryHookResult = ReturnType<
  typeof useIamGetInstitutionUserMappingLazyQuery
>;
export type IamGetInstitutionUserMappingQueryResult = Apollo.QueryResult<
  ApolloTypes.IamGetInstitutionUserMappingQuery,
  ApolloTypes.IamGetInstitutionUserMappingQueryVariables
>;
export function refetchIamGetInstitutionUserMappingQuery(
  variables?: ApolloTypes.IamGetInstitutionUserMappingQueryVariables
) {
  return { query: IamGetInstitutionUserMappingDocument, variables };
}
export const IamGetInstitutionUserMappingByEmailDocument = /* #__PURE__ */ gql`
  query iamGetInstitutionUserMappingByEmail($email: String!) {
    iamGetInstitutionUserMappingByEmail(email: $email) {
      userMapping {
        email
        institutionId
        roles
        userId
        userType
      }
    }
  }
`;

/**
 * __useIamGetInstitutionUserMappingByEmailQuery__
 *
 * To run a query within a React component, call `useIamGetInstitutionUserMappingByEmailQuery` and pass it any options that fit your needs.
 * When your component renders, `useIamGetInstitutionUserMappingByEmailQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useIamGetInstitutionUserMappingByEmailQuery({
 *   variables: {
 *      email: // value for 'email'
 *   },
 * });
 */
export function useIamGetInstitutionUserMappingByEmailQuery(
  baseOptions?: Apollo.QueryHookOptions<
    ApolloTypes.IamGetInstitutionUserMappingByEmailQuery,
    ApolloTypes.IamGetInstitutionUserMappingByEmailQueryVariables
  >
) {
  return Apollo.useQuery<
    ApolloTypes.IamGetInstitutionUserMappingByEmailQuery,
    ApolloTypes.IamGetInstitutionUserMappingByEmailQueryVariables
  >(IamGetInstitutionUserMappingByEmailDocument, baseOptions);
}
export function useIamGetInstitutionUserMappingByEmailLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    ApolloTypes.IamGetInstitutionUserMappingByEmailQuery,
    ApolloTypes.IamGetInstitutionUserMappingByEmailQueryVariables
  >
) {
  return Apollo.useLazyQuery<
    ApolloTypes.IamGetInstitutionUserMappingByEmailQuery,
    ApolloTypes.IamGetInstitutionUserMappingByEmailQueryVariables
  >(IamGetInstitutionUserMappingByEmailDocument, baseOptions);
}
export type IamGetInstitutionUserMappingByEmailQueryHookResult = ReturnType<
  typeof useIamGetInstitutionUserMappingByEmailQuery
>;
export type IamGetInstitutionUserMappingByEmailLazyQueryHookResult = ReturnType<
  typeof useIamGetInstitutionUserMappingByEmailLazyQuery
>;
export type IamGetInstitutionUserMappingByEmailQueryResult = Apollo.QueryResult<
  ApolloTypes.IamGetInstitutionUserMappingByEmailQuery,
  ApolloTypes.IamGetInstitutionUserMappingByEmailQueryVariables
>;
export function refetchIamGetInstitutionUserMappingByEmailQuery(
  variables?: ApolloTypes.IamGetInstitutionUserMappingByEmailQueryVariables
) {
  return {
    query: IamGetInstitutionUserMappingByEmailDocument,
    variables
  };
}
export const IamGetPasswordResetTicketDocument = /* #__PURE__ */ gql`
  query iamGetPasswordResetTicket($ticketId: String!) {
    iamGetPasswordResetTicket(ticketId: $ticketId) {
      expired
    }
  }
`;

/**
 * __useIamGetPasswordResetTicketQuery__
 *
 * To run a query within a React component, call `useIamGetPasswordResetTicketQuery` and pass it any options that fit your needs.
 * When your component renders, `useIamGetPasswordResetTicketQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useIamGetPasswordResetTicketQuery({
 *   variables: {
 *      ticketId: // value for 'ticketId'
 *   },
 * });
 */
export function useIamGetPasswordResetTicketQuery(
  baseOptions?: Apollo.QueryHookOptions<
    ApolloTypes.IamGetPasswordResetTicketQuery,
    ApolloTypes.IamGetPasswordResetTicketQueryVariables
  >
) {
  return Apollo.useQuery<
    ApolloTypes.IamGetPasswordResetTicketQuery,
    ApolloTypes.IamGetPasswordResetTicketQueryVariables
  >(IamGetPasswordResetTicketDocument, baseOptions);
}
export function useIamGetPasswordResetTicketLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    ApolloTypes.IamGetPasswordResetTicketQuery,
    ApolloTypes.IamGetPasswordResetTicketQueryVariables
  >
) {
  return Apollo.useLazyQuery<
    ApolloTypes.IamGetPasswordResetTicketQuery,
    ApolloTypes.IamGetPasswordResetTicketQueryVariables
  >(IamGetPasswordResetTicketDocument, baseOptions);
}
export type IamGetPasswordResetTicketQueryHookResult = ReturnType<
  typeof useIamGetPasswordResetTicketQuery
>;
export type IamGetPasswordResetTicketLazyQueryHookResult = ReturnType<
  typeof useIamGetPasswordResetTicketLazyQuery
>;
export type IamGetPasswordResetTicketQueryResult = Apollo.QueryResult<
  ApolloTypes.IamGetPasswordResetTicketQuery,
  ApolloTypes.IamGetPasswordResetTicketQueryVariables
>;
export function refetchIamGetPasswordResetTicketQuery(
  variables?: ApolloTypes.IamGetPasswordResetTicketQueryVariables
) {
  return { query: IamGetPasswordResetTicketDocument, variables };
}
export const IamGetRoleDocument = /* #__PURE__ */ gql`
  query iamGetRole($id: String!) {
    iamGetRole(id: $id) {
      role {
        id
        policies {
          actions
          resource
        }
      }
    }
  }
`;

/**
 * __useIamGetRoleQuery__
 *
 * To run a query within a React component, call `useIamGetRoleQuery` and pass it any options that fit your needs.
 * When your component renders, `useIamGetRoleQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useIamGetRoleQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useIamGetRoleQuery(
  baseOptions?: Apollo.QueryHookOptions<
    ApolloTypes.IamGetRoleQuery,
    ApolloTypes.IamGetRoleQueryVariables
  >
) {
  return Apollo.useQuery<
    ApolloTypes.IamGetRoleQuery,
    ApolloTypes.IamGetRoleQueryVariables
  >(IamGetRoleDocument, baseOptions);
}
export function useIamGetRoleLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    ApolloTypes.IamGetRoleQuery,
    ApolloTypes.IamGetRoleQueryVariables
  >
) {
  return Apollo.useLazyQuery<
    ApolloTypes.IamGetRoleQuery,
    ApolloTypes.IamGetRoleQueryVariables
  >(IamGetRoleDocument, baseOptions);
}
export type IamGetRoleQueryHookResult = ReturnType<typeof useIamGetRoleQuery>;
export type IamGetRoleLazyQueryHookResult = ReturnType<
  typeof useIamGetRoleLazyQuery
>;
export type IamGetRoleQueryResult = Apollo.QueryResult<
  ApolloTypes.IamGetRoleQuery,
  ApolloTypes.IamGetRoleQueryVariables
>;
export function refetchIamGetRoleQuery(
  variables?: ApolloTypes.IamGetRoleQueryVariables
) {
  return { query: IamGetRoleDocument, variables };
}
export const IamGetRoleBindingDocument = /* #__PURE__ */ gql`
  query iamGetRoleBinding($id: String!) {
    iamGetRoleBinding(id: $id) {
      roleBinding {
        id
        principalId
        principalType
        roleId
      }
    }
  }
`;

/**
 * __useIamGetRoleBindingQuery__
 *
 * To run a query within a React component, call `useIamGetRoleBindingQuery` and pass it any options that fit your needs.
 * When your component renders, `useIamGetRoleBindingQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useIamGetRoleBindingQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useIamGetRoleBindingQuery(
  baseOptions?: Apollo.QueryHookOptions<
    ApolloTypes.IamGetRoleBindingQuery,
    ApolloTypes.IamGetRoleBindingQueryVariables
  >
) {
  return Apollo.useQuery<
    ApolloTypes.IamGetRoleBindingQuery,
    ApolloTypes.IamGetRoleBindingQueryVariables
  >(IamGetRoleBindingDocument, baseOptions);
}
export function useIamGetRoleBindingLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    ApolloTypes.IamGetRoleBindingQuery,
    ApolloTypes.IamGetRoleBindingQueryVariables
  >
) {
  return Apollo.useLazyQuery<
    ApolloTypes.IamGetRoleBindingQuery,
    ApolloTypes.IamGetRoleBindingQueryVariables
  >(IamGetRoleBindingDocument, baseOptions);
}
export type IamGetRoleBindingQueryHookResult = ReturnType<
  typeof useIamGetRoleBindingQuery
>;
export type IamGetRoleBindingLazyQueryHookResult = ReturnType<
  typeof useIamGetRoleBindingLazyQuery
>;
export type IamGetRoleBindingQueryResult = Apollo.QueryResult<
  ApolloTypes.IamGetRoleBindingQuery,
  ApolloTypes.IamGetRoleBindingQueryVariables
>;
export function refetchIamGetRoleBindingQuery(
  variables?: ApolloTypes.IamGetRoleBindingQueryVariables
) {
  return { query: IamGetRoleBindingDocument, variables };
}
export const IamGetRoleBindingsDocument = /* #__PURE__ */ gql`
  query iamGetRoleBindings($roleId: String!) {
    iamGetRoleBindings(roleId: $roleId) {
      roleBindings {
        id
        principalId
        principalType
        roleId
      }
    }
  }
`;

/**
 * __useIamGetRoleBindingsQuery__
 *
 * To run a query within a React component, call `useIamGetRoleBindingsQuery` and pass it any options that fit your needs.
 * When your component renders, `useIamGetRoleBindingsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useIamGetRoleBindingsQuery({
 *   variables: {
 *      roleId: // value for 'roleId'
 *   },
 * });
 */
export function useIamGetRoleBindingsQuery(
  baseOptions?: Apollo.QueryHookOptions<
    ApolloTypes.IamGetRoleBindingsQuery,
    ApolloTypes.IamGetRoleBindingsQueryVariables
  >
) {
  return Apollo.useQuery<
    ApolloTypes.IamGetRoleBindingsQuery,
    ApolloTypes.IamGetRoleBindingsQueryVariables
  >(IamGetRoleBindingsDocument, baseOptions);
}
export function useIamGetRoleBindingsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    ApolloTypes.IamGetRoleBindingsQuery,
    ApolloTypes.IamGetRoleBindingsQueryVariables
  >
) {
  return Apollo.useLazyQuery<
    ApolloTypes.IamGetRoleBindingsQuery,
    ApolloTypes.IamGetRoleBindingsQueryVariables
  >(IamGetRoleBindingsDocument, baseOptions);
}
export type IamGetRoleBindingsQueryHookResult = ReturnType<
  typeof useIamGetRoleBindingsQuery
>;
export type IamGetRoleBindingsLazyQueryHookResult = ReturnType<
  typeof useIamGetRoleBindingsLazyQuery
>;
export type IamGetRoleBindingsQueryResult = Apollo.QueryResult<
  ApolloTypes.IamGetRoleBindingsQuery,
  ApolloTypes.IamGetRoleBindingsQueryVariables
>;
export function refetchIamGetRoleBindingsQuery(
  variables?: ApolloTypes.IamGetRoleBindingsQueryVariables
) {
  return { query: IamGetRoleBindingsDocument, variables };
}
export const IamGetRoleBindingsForSubjectDocument = /* #__PURE__ */ gql`
  query iamGetRoleBindingsForSubject($sub: String!) {
    iamGetRoleBindingsForSubject(sub: $sub) {
      roleBindings {
        id
        principalId
        principalType
        roleId
      }
    }
  }
`;

/**
 * __useIamGetRoleBindingsForSubjectQuery__
 *
 * To run a query within a React component, call `useIamGetRoleBindingsForSubjectQuery` and pass it any options that fit your needs.
 * When your component renders, `useIamGetRoleBindingsForSubjectQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useIamGetRoleBindingsForSubjectQuery({
 *   variables: {
 *      sub: // value for 'sub'
 *   },
 * });
 */
export function useIamGetRoleBindingsForSubjectQuery(
  baseOptions?: Apollo.QueryHookOptions<
    ApolloTypes.IamGetRoleBindingsForSubjectQuery,
    ApolloTypes.IamGetRoleBindingsForSubjectQueryVariables
  >
) {
  return Apollo.useQuery<
    ApolloTypes.IamGetRoleBindingsForSubjectQuery,
    ApolloTypes.IamGetRoleBindingsForSubjectQueryVariables
  >(IamGetRoleBindingsForSubjectDocument, baseOptions);
}
export function useIamGetRoleBindingsForSubjectLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    ApolloTypes.IamGetRoleBindingsForSubjectQuery,
    ApolloTypes.IamGetRoleBindingsForSubjectQueryVariables
  >
) {
  return Apollo.useLazyQuery<
    ApolloTypes.IamGetRoleBindingsForSubjectQuery,
    ApolloTypes.IamGetRoleBindingsForSubjectQueryVariables
  >(IamGetRoleBindingsForSubjectDocument, baseOptions);
}
export type IamGetRoleBindingsForSubjectQueryHookResult = ReturnType<
  typeof useIamGetRoleBindingsForSubjectQuery
>;
export type IamGetRoleBindingsForSubjectLazyQueryHookResult = ReturnType<
  typeof useIamGetRoleBindingsForSubjectLazyQuery
>;
export type IamGetRoleBindingsForSubjectQueryResult = Apollo.QueryResult<
  ApolloTypes.IamGetRoleBindingsForSubjectQuery,
  ApolloTypes.IamGetRoleBindingsForSubjectQueryVariables
>;
export function refetchIamGetRoleBindingsForSubjectQuery(
  variables?: ApolloTypes.IamGetRoleBindingsForSubjectQueryVariables
) {
  return { query: IamGetRoleBindingsForSubjectDocument, variables };
}
export const IamGetRolesForSubjectDocument = /* #__PURE__ */ gql`
  query iamGetRolesForSubject($sub: String!) {
    iamGetRolesForSubject(sub: $sub) {
      roles {
        id
        policies {
          actions
          resource
        }
      }
    }
  }
`;

/**
 * __useIamGetRolesForSubjectQuery__
 *
 * To run a query within a React component, call `useIamGetRolesForSubjectQuery` and pass it any options that fit your needs.
 * When your component renders, `useIamGetRolesForSubjectQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useIamGetRolesForSubjectQuery({
 *   variables: {
 *      sub: // value for 'sub'
 *   },
 * });
 */
export function useIamGetRolesForSubjectQuery(
  baseOptions?: Apollo.QueryHookOptions<
    ApolloTypes.IamGetRolesForSubjectQuery,
    ApolloTypes.IamGetRolesForSubjectQueryVariables
  >
) {
  return Apollo.useQuery<
    ApolloTypes.IamGetRolesForSubjectQuery,
    ApolloTypes.IamGetRolesForSubjectQueryVariables
  >(IamGetRolesForSubjectDocument, baseOptions);
}
export function useIamGetRolesForSubjectLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    ApolloTypes.IamGetRolesForSubjectQuery,
    ApolloTypes.IamGetRolesForSubjectQueryVariables
  >
) {
  return Apollo.useLazyQuery<
    ApolloTypes.IamGetRolesForSubjectQuery,
    ApolloTypes.IamGetRolesForSubjectQueryVariables
  >(IamGetRolesForSubjectDocument, baseOptions);
}
export type IamGetRolesForSubjectQueryHookResult = ReturnType<
  typeof useIamGetRolesForSubjectQuery
>;
export type IamGetRolesForSubjectLazyQueryHookResult = ReturnType<
  typeof useIamGetRolesForSubjectLazyQuery
>;
export type IamGetRolesForSubjectQueryResult = Apollo.QueryResult<
  ApolloTypes.IamGetRolesForSubjectQuery,
  ApolloTypes.IamGetRolesForSubjectQueryVariables
>;
export function refetchIamGetRolesForSubjectQuery(
  variables?: ApolloTypes.IamGetRolesForSubjectQueryVariables
) {
  return { query: IamGetRolesForSubjectDocument, variables };
}
export const IamGetUserDocument = /* #__PURE__ */ gql`
  query iamGetUser($id: String!) {
    iamGetUser(id: $id) {
      user {
        createdAt
        email
        first
        id
        institutionId
        last
        metadata
        policies {
          actions
          resource
        }
        status
        terms
        updatedAt
        userType
      }
    }
  }
`;

/**
 * __useIamGetUserQuery__
 *
 * To run a query within a React component, call `useIamGetUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useIamGetUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useIamGetUserQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useIamGetUserQuery(
  baseOptions?: Apollo.QueryHookOptions<
    ApolloTypes.IamGetUserQuery,
    ApolloTypes.IamGetUserQueryVariables
  >
) {
  return Apollo.useQuery<
    ApolloTypes.IamGetUserQuery,
    ApolloTypes.IamGetUserQueryVariables
  >(IamGetUserDocument, baseOptions);
}
export function useIamGetUserLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    ApolloTypes.IamGetUserQuery,
    ApolloTypes.IamGetUserQueryVariables
  >
) {
  return Apollo.useLazyQuery<
    ApolloTypes.IamGetUserQuery,
    ApolloTypes.IamGetUserQueryVariables
  >(IamGetUserDocument, baseOptions);
}
export type IamGetUserQueryHookResult = ReturnType<typeof useIamGetUserQuery>;
export type IamGetUserLazyQueryHookResult = ReturnType<
  typeof useIamGetUserLazyQuery
>;
export type IamGetUserQueryResult = Apollo.QueryResult<
  ApolloTypes.IamGetUserQuery,
  ApolloTypes.IamGetUserQueryVariables
>;
export function refetchIamGetUserQuery(
  variables?: ApolloTypes.IamGetUserQueryVariables
) {
  return { query: IamGetUserDocument, variables };
}
export const IamGetUserInviteDocument = /* #__PURE__ */ gql`
  query iamGetUserInvite($email: String!) {
    iamGetUserInvite(email: $email) {
      invitedUser {
        createdAt
        email
        firstName
        institutionId
        invitedBy
        lastName
        nonce
        status
        userType
      }
    }
  }
`;

/**
 * __useIamGetUserInviteQuery__
 *
 * To run a query within a React component, call `useIamGetUserInviteQuery` and pass it any options that fit your needs.
 * When your component renders, `useIamGetUserInviteQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useIamGetUserInviteQuery({
 *   variables: {
 *      email: // value for 'email'
 *   },
 * });
 */
export function useIamGetUserInviteQuery(
  baseOptions?: Apollo.QueryHookOptions<
    ApolloTypes.IamGetUserInviteQuery,
    ApolloTypes.IamGetUserInviteQueryVariables
  >
) {
  return Apollo.useQuery<
    ApolloTypes.IamGetUserInviteQuery,
    ApolloTypes.IamGetUserInviteQueryVariables
  >(IamGetUserInviteDocument, baseOptions);
}
export function useIamGetUserInviteLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    ApolloTypes.IamGetUserInviteQuery,
    ApolloTypes.IamGetUserInviteQueryVariables
  >
) {
  return Apollo.useLazyQuery<
    ApolloTypes.IamGetUserInviteQuery,
    ApolloTypes.IamGetUserInviteQueryVariables
  >(IamGetUserInviteDocument, baseOptions);
}
export type IamGetUserInviteQueryHookResult = ReturnType<
  typeof useIamGetUserInviteQuery
>;
export type IamGetUserInviteLazyQueryHookResult = ReturnType<
  typeof useIamGetUserInviteLazyQuery
>;
export type IamGetUserInviteQueryResult = Apollo.QueryResult<
  ApolloTypes.IamGetUserInviteQuery,
  ApolloTypes.IamGetUserInviteQueryVariables
>;
export function refetchIamGetUserInviteQuery(
  variables?: ApolloTypes.IamGetUserInviteQueryVariables
) {
  return { query: IamGetUserInviteDocument, variables };
}
export const IamGetUserInviteListDocument = /* #__PURE__ */ gql`
  query iamGetUserInviteList($institutionId: String!) {
    iamGetUserInviteList(institutionId: $institutionId) {
      invitedUsers {
        createdAt
        email
        firstName
        institutionId
        invitedBy
        lastName
        nonce
        status
        userType
      }
    }
  }
`;

/**
 * __useIamGetUserInviteListQuery__
 *
 * To run a query within a React component, call `useIamGetUserInviteListQuery` and pass it any options that fit your needs.
 * When your component renders, `useIamGetUserInviteListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useIamGetUserInviteListQuery({
 *   variables: {
 *      institutionId: // value for 'institutionId'
 *   },
 * });
 */
export function useIamGetUserInviteListQuery(
  baseOptions?: Apollo.QueryHookOptions<
    ApolloTypes.IamGetUserInviteListQuery,
    ApolloTypes.IamGetUserInviteListQueryVariables
  >
) {
  return Apollo.useQuery<
    ApolloTypes.IamGetUserInviteListQuery,
    ApolloTypes.IamGetUserInviteListQueryVariables
  >(IamGetUserInviteListDocument, baseOptions);
}
export function useIamGetUserInviteListLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    ApolloTypes.IamGetUserInviteListQuery,
    ApolloTypes.IamGetUserInviteListQueryVariables
  >
) {
  return Apollo.useLazyQuery<
    ApolloTypes.IamGetUserInviteListQuery,
    ApolloTypes.IamGetUserInviteListQueryVariables
  >(IamGetUserInviteListDocument, baseOptions);
}
export type IamGetUserInviteListQueryHookResult = ReturnType<
  typeof useIamGetUserInviteListQuery
>;
export type IamGetUserInviteListLazyQueryHookResult = ReturnType<
  typeof useIamGetUserInviteListLazyQuery
>;
export type IamGetUserInviteListQueryResult = Apollo.QueryResult<
  ApolloTypes.IamGetUserInviteListQuery,
  ApolloTypes.IamGetUserInviteListQueryVariables
>;
export function refetchIamGetUserInviteListQuery(
  variables?: ApolloTypes.IamGetUserInviteListQueryVariables
) {
  return { query: IamGetUserInviteListDocument, variables };
}
export const IamValidateUserInviteDocument = /* #__PURE__ */ gql`
  query iamValidateUserInvite($email: String!, $state: String!) {
    iamValidateUserInvite(email: $email, state: $state) {
      inviteStatus
    }
  }
`;

/**
 * __useIamValidateUserInviteQuery__
 *
 * To run a query within a React component, call `useIamValidateUserInviteQuery` and pass it any options that fit your needs.
 * When your component renders, `useIamValidateUserInviteQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useIamValidateUserInviteQuery({
 *   variables: {
 *      email: // value for 'email'
 *      state: // value for 'state'
 *   },
 * });
 */
export function useIamValidateUserInviteQuery(
  baseOptions?: Apollo.QueryHookOptions<
    ApolloTypes.IamValidateUserInviteQuery,
    ApolloTypes.IamValidateUserInviteQueryVariables
  >
) {
  return Apollo.useQuery<
    ApolloTypes.IamValidateUserInviteQuery,
    ApolloTypes.IamValidateUserInviteQueryVariables
  >(IamValidateUserInviteDocument, baseOptions);
}
export function useIamValidateUserInviteLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    ApolloTypes.IamValidateUserInviteQuery,
    ApolloTypes.IamValidateUserInviteQueryVariables
  >
) {
  return Apollo.useLazyQuery<
    ApolloTypes.IamValidateUserInviteQuery,
    ApolloTypes.IamValidateUserInviteQueryVariables
  >(IamValidateUserInviteDocument, baseOptions);
}
export type IamValidateUserInviteQueryHookResult = ReturnType<
  typeof useIamValidateUserInviteQuery
>;
export type IamValidateUserInviteLazyQueryHookResult = ReturnType<
  typeof useIamValidateUserInviteLazyQuery
>;
export type IamValidateUserInviteQueryResult = Apollo.QueryResult<
  ApolloTypes.IamValidateUserInviteQuery,
  ApolloTypes.IamValidateUserInviteQueryVariables
>;
export function refetchIamValidateUserInviteQuery(
  variables?: ApolloTypes.IamValidateUserInviteQueryVariables
) {
  return { query: IamValidateUserInviteDocument, variables };
}
export const IceDataGetByCusipDocument = /* #__PURE__ */ gql`
  query iceDataGetByCusip(
    $cusip: String!
    $endDate: String
    $includeDeleted: Boolean
    $startDate: String
  ) {
    iceDataGetByCusip(
      cusip: $cusip
      endDate: $endDate
      includeDeleted: $includeDeleted
      startDate: $startDate
    ) {
      iceData {
        benchmarkCusip
        benchmarkPrice
        benchmarkPriceType
        coverBid
        cusip
        entryDate
        entryPrice
        entrySize
        entryTime
        entryType
        entryUpdateAction
        executionType
        hitOrLiftSide
        id
        impliedSpread
        mineFlag
        minimumBalanceRemaining
        minimumIncrement
        minimumQuantity
        product
        updatedAt
        yieldToMaturity
        yieldToWorst
      }
    }
  }
`;

/**
 * __useIceDataGetByCusipQuery__
 *
 * To run a query within a React component, call `useIceDataGetByCusipQuery` and pass it any options that fit your needs.
 * When your component renders, `useIceDataGetByCusipQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useIceDataGetByCusipQuery({
 *   variables: {
 *      cusip: // value for 'cusip'
 *      endDate: // value for 'endDate'
 *      includeDeleted: // value for 'includeDeleted'
 *      startDate: // value for 'startDate'
 *   },
 * });
 */
export function useIceDataGetByCusipQuery(
  baseOptions?: Apollo.QueryHookOptions<
    ApolloTypes.IceDataGetByCusipQuery,
    ApolloTypes.IceDataGetByCusipQueryVariables
  >
) {
  return Apollo.useQuery<
    ApolloTypes.IceDataGetByCusipQuery,
    ApolloTypes.IceDataGetByCusipQueryVariables
  >(IceDataGetByCusipDocument, baseOptions);
}
export function useIceDataGetByCusipLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    ApolloTypes.IceDataGetByCusipQuery,
    ApolloTypes.IceDataGetByCusipQueryVariables
  >
) {
  return Apollo.useLazyQuery<
    ApolloTypes.IceDataGetByCusipQuery,
    ApolloTypes.IceDataGetByCusipQueryVariables
  >(IceDataGetByCusipDocument, baseOptions);
}
export type IceDataGetByCusipQueryHookResult = ReturnType<
  typeof useIceDataGetByCusipQuery
>;
export type IceDataGetByCusipLazyQueryHookResult = ReturnType<
  typeof useIceDataGetByCusipLazyQuery
>;
export type IceDataGetByCusipQueryResult = Apollo.QueryResult<
  ApolloTypes.IceDataGetByCusipQuery,
  ApolloTypes.IceDataGetByCusipQueryVariables
>;
export function refetchIceDataGetByCusipQuery(
  variables?: ApolloTypes.IceDataGetByCusipQueryVariables
) {
  return { query: IceDataGetByCusipDocument, variables };
}
export const IncomePortfoliosGetComparisonsDocument = /* #__PURE__ */ gql`
  query incomePortfoliosGetComparisons(
    $getComparisonsRequestInput: GetComparisonsRequestInput
  ) {
    incomePortfoliosGetComparisons(
      getComparisonsRequestInput: $getComparisonsRequestInput
    ) {
      comparisons {
        average
        comparisonType
        difference
        inpaas
        percentageDifference
      }
    }
  }
`;

/**
 * __useIncomePortfoliosGetComparisonsQuery__
 *
 * To run a query within a React component, call `useIncomePortfoliosGetComparisonsQuery` and pass it any options that fit your needs.
 * When your component renders, `useIncomePortfoliosGetComparisonsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useIncomePortfoliosGetComparisonsQuery({
 *   variables: {
 *      getComparisonsRequestInput: // value for 'getComparisonsRequestInput'
 *   },
 * });
 */
export function useIncomePortfoliosGetComparisonsQuery(
  baseOptions?: Apollo.QueryHookOptions<
    ApolloTypes.IncomePortfoliosGetComparisonsQuery,
    ApolloTypes.IncomePortfoliosGetComparisonsQueryVariables
  >
) {
  return Apollo.useQuery<
    ApolloTypes.IncomePortfoliosGetComparisonsQuery,
    ApolloTypes.IncomePortfoliosGetComparisonsQueryVariables
  >(IncomePortfoliosGetComparisonsDocument, baseOptions);
}
export function useIncomePortfoliosGetComparisonsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    ApolloTypes.IncomePortfoliosGetComparisonsQuery,
    ApolloTypes.IncomePortfoliosGetComparisonsQueryVariables
  >
) {
  return Apollo.useLazyQuery<
    ApolloTypes.IncomePortfoliosGetComparisonsQuery,
    ApolloTypes.IncomePortfoliosGetComparisonsQueryVariables
  >(IncomePortfoliosGetComparisonsDocument, baseOptions);
}
export type IncomePortfoliosGetComparisonsQueryHookResult = ReturnType<
  typeof useIncomePortfoliosGetComparisonsQuery
>;
export type IncomePortfoliosGetComparisonsLazyQueryHookResult = ReturnType<
  typeof useIncomePortfoliosGetComparisonsLazyQuery
>;
export type IncomePortfoliosGetComparisonsQueryResult = Apollo.QueryResult<
  ApolloTypes.IncomePortfoliosGetComparisonsQuery,
  ApolloTypes.IncomePortfoliosGetComparisonsQueryVariables
>;
export function refetchIncomePortfoliosGetComparisonsQuery(
  variables?: ApolloTypes.IncomePortfoliosGetComparisonsQueryVariables
) {
  return {
    query: IncomePortfoliosGetComparisonsDocument,
    variables
  };
}
export const IncomePortfoliosGetMinMaxRiskDocument = /* #__PURE__ */ gql`
  query incomePortfoliosGetMinMaxRisk(
    $getMinMaxRiskRequestInput: GetMinMaxRiskRequestInput
  ) {
    incomePortfoliosGetMinMaxRisk(
      getMinMaxRiskRequestInput: $getMinMaxRiskRequestInput
    ) {
      maxRisk
      minRisk
    }
  }
`;

/**
 * __useIncomePortfoliosGetMinMaxRiskQuery__
 *
 * To run a query within a React component, call `useIncomePortfoliosGetMinMaxRiskQuery` and pass it any options that fit your needs.
 * When your component renders, `useIncomePortfoliosGetMinMaxRiskQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useIncomePortfoliosGetMinMaxRiskQuery({
 *   variables: {
 *      getMinMaxRiskRequestInput: // value for 'getMinMaxRiskRequestInput'
 *   },
 * });
 */
export function useIncomePortfoliosGetMinMaxRiskQuery(
  baseOptions?: Apollo.QueryHookOptions<
    ApolloTypes.IncomePortfoliosGetMinMaxRiskQuery,
    ApolloTypes.IncomePortfoliosGetMinMaxRiskQueryVariables
  >
) {
  return Apollo.useQuery<
    ApolloTypes.IncomePortfoliosGetMinMaxRiskQuery,
    ApolloTypes.IncomePortfoliosGetMinMaxRiskQueryVariables
  >(IncomePortfoliosGetMinMaxRiskDocument, baseOptions);
}
export function useIncomePortfoliosGetMinMaxRiskLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    ApolloTypes.IncomePortfoliosGetMinMaxRiskQuery,
    ApolloTypes.IncomePortfoliosGetMinMaxRiskQueryVariables
  >
) {
  return Apollo.useLazyQuery<
    ApolloTypes.IncomePortfoliosGetMinMaxRiskQuery,
    ApolloTypes.IncomePortfoliosGetMinMaxRiskQueryVariables
  >(IncomePortfoliosGetMinMaxRiskDocument, baseOptions);
}
export type IncomePortfoliosGetMinMaxRiskQueryHookResult = ReturnType<
  typeof useIncomePortfoliosGetMinMaxRiskQuery
>;
export type IncomePortfoliosGetMinMaxRiskLazyQueryHookResult = ReturnType<
  typeof useIncomePortfoliosGetMinMaxRiskLazyQuery
>;
export type IncomePortfoliosGetMinMaxRiskQueryResult = Apollo.QueryResult<
  ApolloTypes.IncomePortfoliosGetMinMaxRiskQuery,
  ApolloTypes.IncomePortfoliosGetMinMaxRiskQueryVariables
>;
export function refetchIncomePortfoliosGetMinMaxRiskQuery(
  variables?: ApolloTypes.IncomePortfoliosGetMinMaxRiskQueryVariables
) {
  return { query: IncomePortfoliosGetMinMaxRiskDocument, variables };
}
export const IncomePortfoliosGetMinMaxYieldDocument = /* #__PURE__ */ gql`
  query incomePortfoliosGetMinMaxYield(
    $getMinMaxYieldRequestInput: GetMinMaxYieldRequestInput
  ) {
    incomePortfoliosGetMinMaxYield(
      getMinMaxYieldRequestInput: $getMinMaxYieldRequestInput
    ) {
      maxYield
      minYield
    }
  }
`;

/**
 * __useIncomePortfoliosGetMinMaxYieldQuery__
 *
 * To run a query within a React component, call `useIncomePortfoliosGetMinMaxYieldQuery` and pass it any options that fit your needs.
 * When your component renders, `useIncomePortfoliosGetMinMaxYieldQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useIncomePortfoliosGetMinMaxYieldQuery({
 *   variables: {
 *      getMinMaxYieldRequestInput: // value for 'getMinMaxYieldRequestInput'
 *   },
 * });
 */
export function useIncomePortfoliosGetMinMaxYieldQuery(
  baseOptions?: Apollo.QueryHookOptions<
    ApolloTypes.IncomePortfoliosGetMinMaxYieldQuery,
    ApolloTypes.IncomePortfoliosGetMinMaxYieldQueryVariables
  >
) {
  return Apollo.useQuery<
    ApolloTypes.IncomePortfoliosGetMinMaxYieldQuery,
    ApolloTypes.IncomePortfoliosGetMinMaxYieldQueryVariables
  >(IncomePortfoliosGetMinMaxYieldDocument, baseOptions);
}
export function useIncomePortfoliosGetMinMaxYieldLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    ApolloTypes.IncomePortfoliosGetMinMaxYieldQuery,
    ApolloTypes.IncomePortfoliosGetMinMaxYieldQueryVariables
  >
) {
  return Apollo.useLazyQuery<
    ApolloTypes.IncomePortfoliosGetMinMaxYieldQuery,
    ApolloTypes.IncomePortfoliosGetMinMaxYieldQueryVariables
  >(IncomePortfoliosGetMinMaxYieldDocument, baseOptions);
}
export type IncomePortfoliosGetMinMaxYieldQueryHookResult = ReturnType<
  typeof useIncomePortfoliosGetMinMaxYieldQuery
>;
export type IncomePortfoliosGetMinMaxYieldLazyQueryHookResult = ReturnType<
  typeof useIncomePortfoliosGetMinMaxYieldLazyQuery
>;
export type IncomePortfoliosGetMinMaxYieldQueryResult = Apollo.QueryResult<
  ApolloTypes.IncomePortfoliosGetMinMaxYieldQuery,
  ApolloTypes.IncomePortfoliosGetMinMaxYieldQueryVariables
>;
export function refetchIncomePortfoliosGetMinMaxYieldQuery(
  variables?: ApolloTypes.IncomePortfoliosGetMinMaxYieldQueryVariables
) {
  return {
    query: IncomePortfoliosGetMinMaxYieldDocument,
    variables
  };
}
export const IncomePortfoliosGetPortfolioMappingDocument = /* #__PURE__ */ gql`
  query incomePortfoliosGetPortfolioMapping($portfolioId: String!) {
    incomePortfoliosGetPortfolioMapping(portfolioId: $portfolioId) {
      portfolioMapping {
        portfolioId
        portfolioType
        proposalId
      }
    }
  }
`;

/**
 * __useIncomePortfoliosGetPortfolioMappingQuery__
 *
 * To run a query within a React component, call `useIncomePortfoliosGetPortfolioMappingQuery` and pass it any options that fit your needs.
 * When your component renders, `useIncomePortfoliosGetPortfolioMappingQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useIncomePortfoliosGetPortfolioMappingQuery({
 *   variables: {
 *      portfolioId: // value for 'portfolioId'
 *   },
 * });
 */
export function useIncomePortfoliosGetPortfolioMappingQuery(
  baseOptions?: Apollo.QueryHookOptions<
    ApolloTypes.IncomePortfoliosGetPortfolioMappingQuery,
    ApolloTypes.IncomePortfoliosGetPortfolioMappingQueryVariables
  >
) {
  return Apollo.useQuery<
    ApolloTypes.IncomePortfoliosGetPortfolioMappingQuery,
    ApolloTypes.IncomePortfoliosGetPortfolioMappingQueryVariables
  >(IncomePortfoliosGetPortfolioMappingDocument, baseOptions);
}
export function useIncomePortfoliosGetPortfolioMappingLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    ApolloTypes.IncomePortfoliosGetPortfolioMappingQuery,
    ApolloTypes.IncomePortfoliosGetPortfolioMappingQueryVariables
  >
) {
  return Apollo.useLazyQuery<
    ApolloTypes.IncomePortfoliosGetPortfolioMappingQuery,
    ApolloTypes.IncomePortfoliosGetPortfolioMappingQueryVariables
  >(IncomePortfoliosGetPortfolioMappingDocument, baseOptions);
}
export type IncomePortfoliosGetPortfolioMappingQueryHookResult = ReturnType<
  typeof useIncomePortfoliosGetPortfolioMappingQuery
>;
export type IncomePortfoliosGetPortfolioMappingLazyQueryHookResult = ReturnType<
  typeof useIncomePortfoliosGetPortfolioMappingLazyQuery
>;
export type IncomePortfoliosGetPortfolioMappingQueryResult = Apollo.QueryResult<
  ApolloTypes.IncomePortfoliosGetPortfolioMappingQuery,
  ApolloTypes.IncomePortfoliosGetPortfolioMappingQueryVariables
>;
export function refetchIncomePortfoliosGetPortfolioMappingQuery(
  variables?: ApolloTypes.IncomePortfoliosGetPortfolioMappingQueryVariables
) {
  return {
    query: IncomePortfoliosGetPortfolioMappingDocument,
    variables
  };
}
export const IncomePortfoliosGetProposalDocument = /* #__PURE__ */ gql`
  query incomePortfoliosGetProposal($proposalId: String!) {
    incomePortfoliosGetProposal(proposalId: $proposalId) {
      proposal {
        commentary {
          content
          topic
        }
        incomePortfoliosAnalysis {
          afterTaxYield
          commentary {
            content
            topic
          }
          comparisons {
            average
            comparisonType
            difference
            inpaas
            percentageDifference
          }
          expenseRatio
          income
          maxDrawdown
          risk
          yield
        }
        orders {
          assetId
          direction
          marketValue
          quantity
        }
        originalIncomePortfoliosAnalysis {
          afterTaxYield
          commentary {
            content
            topic
          }
          comparisons {
            average
            comparisonType
            difference
            inpaas
            percentageDifference
          }
          expenseRatio
          income
          maxDrawdown
          risk
          yield
        }
        portfolio {
          accountNumber
          app
          createdAt
          currency
          description
          id
          metadata
          name
          positions {
            assetId
            costBasis
            createdAt
            id
            metadata
            portfolioId
            quantity
            settled
            tradeDate
            unsettled
            updatedAt
          }
          status
          updatedAt
        }
        proposalId
        proposalRequest {
          constraints {
            maximumWeight
            minimumWeight
          }
          goal {
            income
            risk
            yield
          }
          investmentAmount
          portfolioId
          taxBrackets {
            federalTaxRate
            stateTaxRate
          }
          whitelist
        }
        updatedAt
      }
    }
  }
`;

/**
 * __useIncomePortfoliosGetProposalQuery__
 *
 * To run a query within a React component, call `useIncomePortfoliosGetProposalQuery` and pass it any options that fit your needs.
 * When your component renders, `useIncomePortfoliosGetProposalQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useIncomePortfoliosGetProposalQuery({
 *   variables: {
 *      proposalId: // value for 'proposalId'
 *   },
 * });
 */
export function useIncomePortfoliosGetProposalQuery(
  baseOptions?: Apollo.QueryHookOptions<
    ApolloTypes.IncomePortfoliosGetProposalQuery,
    ApolloTypes.IncomePortfoliosGetProposalQueryVariables
  >
) {
  return Apollo.useQuery<
    ApolloTypes.IncomePortfoliosGetProposalQuery,
    ApolloTypes.IncomePortfoliosGetProposalQueryVariables
  >(IncomePortfoliosGetProposalDocument, baseOptions);
}
export function useIncomePortfoliosGetProposalLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    ApolloTypes.IncomePortfoliosGetProposalQuery,
    ApolloTypes.IncomePortfoliosGetProposalQueryVariables
  >
) {
  return Apollo.useLazyQuery<
    ApolloTypes.IncomePortfoliosGetProposalQuery,
    ApolloTypes.IncomePortfoliosGetProposalQueryVariables
  >(IncomePortfoliosGetProposalDocument, baseOptions);
}
export type IncomePortfoliosGetProposalQueryHookResult = ReturnType<
  typeof useIncomePortfoliosGetProposalQuery
>;
export type IncomePortfoliosGetProposalLazyQueryHookResult = ReturnType<
  typeof useIncomePortfoliosGetProposalLazyQuery
>;
export type IncomePortfoliosGetProposalQueryResult = Apollo.QueryResult<
  ApolloTypes.IncomePortfoliosGetProposalQuery,
  ApolloTypes.IncomePortfoliosGetProposalQueryVariables
>;
export function refetchIncomePortfoliosGetProposalQuery(
  variables?: ApolloTypes.IncomePortfoliosGetProposalQueryVariables
) {
  return { query: IncomePortfoliosGetProposalDocument, variables };
}
export const InpaasGetPortfolioDocument = /* #__PURE__ */ gql`
  query inpaasGetPortfolio($institution: String!, $portfolioId: String!) {
    inpaasGetPortfolio(institution: $institution, portfolioId: $portfolioId) {
      analysis {
        afterTaxYield
        commentary {
          content
          topic
        }
        comparisons {
          average
          comparisonType
          difference
          inpaas
          percentageDifference
        }
        expenseRatio
        income
        maxDrawdown
        risk
        yield
      }
      portfolio {
        createdAt
        currency
        id
        metadata
        name
        positions {
          assetId
          id
          marketValue
          name
          price
          publicIdentifiers {
            cusip
            isin
            sedol
            ticker
          }
          quantity
          weight
          yield
        }
        updatedAt
      }
      proposalRequest {
        constraints {
          maximumWeight
          minimumWeight
        }
        goal {
          income
          risk
          yield
        }
        investmentAmount
        portfolioId
        taxBrackets {
          federalTaxRate
          stateTaxRate
        }
      }
    }
  }
`;

/**
 * __useInpaasGetPortfolioQuery__
 *
 * To run a query within a React component, call `useInpaasGetPortfolioQuery` and pass it any options that fit your needs.
 * When your component renders, `useInpaasGetPortfolioQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useInpaasGetPortfolioQuery({
 *   variables: {
 *      institution: // value for 'institution'
 *      portfolioId: // value for 'portfolioId'
 *   },
 * });
 */
export function useInpaasGetPortfolioQuery(
  baseOptions?: Apollo.QueryHookOptions<
    ApolloTypes.InpaasGetPortfolioQuery,
    ApolloTypes.InpaasGetPortfolioQueryVariables
  >
) {
  return Apollo.useQuery<
    ApolloTypes.InpaasGetPortfolioQuery,
    ApolloTypes.InpaasGetPortfolioQueryVariables
  >(InpaasGetPortfolioDocument, baseOptions);
}
export function useInpaasGetPortfolioLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    ApolloTypes.InpaasGetPortfolioQuery,
    ApolloTypes.InpaasGetPortfolioQueryVariables
  >
) {
  return Apollo.useLazyQuery<
    ApolloTypes.InpaasGetPortfolioQuery,
    ApolloTypes.InpaasGetPortfolioQueryVariables
  >(InpaasGetPortfolioDocument, baseOptions);
}
export type InpaasGetPortfolioQueryHookResult = ReturnType<
  typeof useInpaasGetPortfolioQuery
>;
export type InpaasGetPortfolioLazyQueryHookResult = ReturnType<
  typeof useInpaasGetPortfolioLazyQuery
>;
export type InpaasGetPortfolioQueryResult = Apollo.QueryResult<
  ApolloTypes.InpaasGetPortfolioQuery,
  ApolloTypes.InpaasGetPortfolioQueryVariables
>;
export function refetchInpaasGetPortfolioQuery(
  variables?: ApolloTypes.InpaasGetPortfolioQueryVariables
) {
  return { query: InpaasGetPortfolioDocument, variables };
}
export const InpaasGetPortfolioMappingDocument = /* #__PURE__ */ gql`
  query inpaasGetPortfolioMapping(
    $institution: String!
    $portfolioId: String!
  ) {
    inpaasGetPortfolioMapping(
      institution: $institution
      portfolioId: $portfolioId
    ) {
      portfolioMapping {
        institutionId
        portfolioId
      }
    }
  }
`;

/**
 * __useInpaasGetPortfolioMappingQuery__
 *
 * To run a query within a React component, call `useInpaasGetPortfolioMappingQuery` and pass it any options that fit your needs.
 * When your component renders, `useInpaasGetPortfolioMappingQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useInpaasGetPortfolioMappingQuery({
 *   variables: {
 *      institution: // value for 'institution'
 *      portfolioId: // value for 'portfolioId'
 *   },
 * });
 */
export function useInpaasGetPortfolioMappingQuery(
  baseOptions?: Apollo.QueryHookOptions<
    ApolloTypes.InpaasGetPortfolioMappingQuery,
    ApolloTypes.InpaasGetPortfolioMappingQueryVariables
  >
) {
  return Apollo.useQuery<
    ApolloTypes.InpaasGetPortfolioMappingQuery,
    ApolloTypes.InpaasGetPortfolioMappingQueryVariables
  >(InpaasGetPortfolioMappingDocument, baseOptions);
}
export function useInpaasGetPortfolioMappingLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    ApolloTypes.InpaasGetPortfolioMappingQuery,
    ApolloTypes.InpaasGetPortfolioMappingQueryVariables
  >
) {
  return Apollo.useLazyQuery<
    ApolloTypes.InpaasGetPortfolioMappingQuery,
    ApolloTypes.InpaasGetPortfolioMappingQueryVariables
  >(InpaasGetPortfolioMappingDocument, baseOptions);
}
export type InpaasGetPortfolioMappingQueryHookResult = ReturnType<
  typeof useInpaasGetPortfolioMappingQuery
>;
export type InpaasGetPortfolioMappingLazyQueryHookResult = ReturnType<
  typeof useInpaasGetPortfolioMappingLazyQuery
>;
export type InpaasGetPortfolioMappingQueryResult = Apollo.QueryResult<
  ApolloTypes.InpaasGetPortfolioMappingQuery,
  ApolloTypes.InpaasGetPortfolioMappingQueryVariables
>;
export function refetchInpaasGetPortfolioMappingQuery(
  variables?: ApolloTypes.InpaasGetPortfolioMappingQueryVariables
) {
  return { query: InpaasGetPortfolioMappingDocument, variables };
}
export const InpaasGetProposalDocument = /* #__PURE__ */ gql`
  query inpaasGetProposal($institution: String!, $proposalId: String!) {
    inpaasGetProposal(institution: $institution, proposalId: $proposalId) {
      proposal {
        analysis {
          afterTaxYield
          commentary {
            content
            topic
          }
          comparisons {
            average
            comparisonType
            difference
            inpaas
            percentageDifference
          }
          expenseRatio
          income
          maxDrawdown
          risk
          yield
        }
        commentary {
          content
          topic
        }
        orders {
          assetId
          direction
          marketValue
          quantity
        }
        originalAnalysis {
          afterTaxYield
          commentary {
            content
            topic
          }
          comparisons {
            average
            comparisonType
            difference
            inpaas
            percentageDifference
          }
          expenseRatio
          income
          maxDrawdown
          risk
          yield
        }
        portfolio {
          createdAt
          currency
          id
          metadata
          name
          positions {
            assetId
            id
            marketValue
            name
            price
            publicIdentifiers {
              cusip
              isin
              sedol
              ticker
            }
            quantity
            weight
            yield
          }
          updatedAt
        }
        proposalId
        proposalRequest {
          constraints {
            maximumWeight
            minimumWeight
          }
          goal {
            income
            risk
            yield
          }
          investmentAmount
          portfolioId
          taxBrackets {
            federalTaxRate
            stateTaxRate
          }
        }
        updatedAt
      }
    }
  }
`;

/**
 * __useInpaasGetProposalQuery__
 *
 * To run a query within a React component, call `useInpaasGetProposalQuery` and pass it any options that fit your needs.
 * When your component renders, `useInpaasGetProposalQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useInpaasGetProposalQuery({
 *   variables: {
 *      institution: // value for 'institution'
 *      proposalId: // value for 'proposalId'
 *   },
 * });
 */
export function useInpaasGetProposalQuery(
  baseOptions?: Apollo.QueryHookOptions<
    ApolloTypes.InpaasGetProposalQuery,
    ApolloTypes.InpaasGetProposalQueryVariables
  >
) {
  return Apollo.useQuery<
    ApolloTypes.InpaasGetProposalQuery,
    ApolloTypes.InpaasGetProposalQueryVariables
  >(InpaasGetProposalDocument, baseOptions);
}
export function useInpaasGetProposalLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    ApolloTypes.InpaasGetProposalQuery,
    ApolloTypes.InpaasGetProposalQueryVariables
  >
) {
  return Apollo.useLazyQuery<
    ApolloTypes.InpaasGetProposalQuery,
    ApolloTypes.InpaasGetProposalQueryVariables
  >(InpaasGetProposalDocument, baseOptions);
}
export type InpaasGetProposalQueryHookResult = ReturnType<
  typeof useInpaasGetProposalQuery
>;
export type InpaasGetProposalLazyQueryHookResult = ReturnType<
  typeof useInpaasGetProposalLazyQuery
>;
export type InpaasGetProposalQueryResult = Apollo.QueryResult<
  ApolloTypes.InpaasGetProposalQuery,
  ApolloTypes.InpaasGetProposalQueryVariables
>;
export function refetchInpaasGetProposalQuery(
  variables?: ApolloTypes.InpaasGetProposalQueryVariables
) {
  return { query: InpaasGetProposalDocument, variables };
}
export const InvestorDownloadFileDocument = /* #__PURE__ */ gql`
  query investorDownloadFile($fileId: String!) {
    investorDownloadFile(fileId: $fileId) {
      file
    }
  }
`;

/**
 * __useInvestorDownloadFileQuery__
 *
 * To run a query within a React component, call `useInvestorDownloadFileQuery` and pass it any options that fit your needs.
 * When your component renders, `useInvestorDownloadFileQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useInvestorDownloadFileQuery({
 *   variables: {
 *      fileId: // value for 'fileId'
 *   },
 * });
 */
export function useInvestorDownloadFileQuery(
  baseOptions?: Apollo.QueryHookOptions<
    ApolloTypes.InvestorDownloadFileQuery,
    ApolloTypes.InvestorDownloadFileQueryVariables
  >
) {
  return Apollo.useQuery<
    ApolloTypes.InvestorDownloadFileQuery,
    ApolloTypes.InvestorDownloadFileQueryVariables
  >(InvestorDownloadFileDocument, baseOptions);
}
export function useInvestorDownloadFileLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    ApolloTypes.InvestorDownloadFileQuery,
    ApolloTypes.InvestorDownloadFileQueryVariables
  >
) {
  return Apollo.useLazyQuery<
    ApolloTypes.InvestorDownloadFileQuery,
    ApolloTypes.InvestorDownloadFileQueryVariables
  >(InvestorDownloadFileDocument, baseOptions);
}
export type InvestorDownloadFileQueryHookResult = ReturnType<
  typeof useInvestorDownloadFileQuery
>;
export type InvestorDownloadFileLazyQueryHookResult = ReturnType<
  typeof useInvestorDownloadFileLazyQuery
>;
export type InvestorDownloadFileQueryResult = Apollo.QueryResult<
  ApolloTypes.InvestorDownloadFileQuery,
  ApolloTypes.InvestorDownloadFileQueryVariables
>;
export function refetchInvestorDownloadFileQuery(
  variables?: ApolloTypes.InvestorDownloadFileQueryVariables
) {
  return { query: InvestorDownloadFileDocument, variables };
}
export const InvestorGetDocument = /* #__PURE__ */ gql`
  query investorGet($investorId: String!) {
    investorGet(investorId: $investorId) {
      investor {
        createdAt
        id
        investorInfo {
          applicantSignature {
            eSigned
          }
          beneficialOwnersAndOfficers {
            beneficialOwners {
              address {
                city
                country
                postalCode
                state
                streetAddress
              }
              dateOfBirth
              identificationNumber
              name {
                familyName
                givenName
                legalName
              }
              socialSecurityNumber
            }
            businessClassification
            officers {
              address {
                city
                country
                postalCode
                state
                streetAddress
              }
              dateOfBirth
              identificationNumber
              name {
                familyName
                givenName
                legalName
              }
              socialSecurityNumber
            }
          }
          birthCountry
          cashAccountAgreement {
            articlesOfIncorporationSnapId
            authorizedOfficerName
            authorizedOfficerTitle
            corporationName
            isAuthorizedOfficerESigned
            isSecretaryESigned
            secretaryName
            stateOfIncorporation
          }
          catAccountHolderType
          citizenshipCountry
          contactInformation {
            city
            country
            emailAddresses
            phone
            phoneType
            postalCode
            state
            streetAddress
          }
          disclosures {
            affiliatedApproval
            companySymbols
            firmName
            interestedParties {
              mailingAddress {
                city
                country
                postalCode
                state
                streetAddress
              }
              name {
                companyName
              }
            }
            isAffiliatedExchangeOrFINRA
            isControlPerson
            isPoliticallyExposed
            politicalExposureDetail {
              immediateFamily
              politicalOrganization
            }
          }
          employment {
            employer
            employmentStatus
            positionEmployed
          }
          entityDueDiligence {
            accountActivity {
              expectedWithdrawalFrequency
              initialDepositAmount
              initialDepositSource
              primaryEntityAccountActivity
              willTransactForeignBonds
              willTransactLowPricedSecurities
            }
            accountInformation {
              accountName
              businessLocations
              countryOfIncorporation
              hasRelatedAccounts
              relatedAccountList {
                accountNumber
                entityName
              }
            }
            additionalAccounts {
              confirmEntityDoesNotIssueBearerShares
              institutionNames
              primaryOngoingFundingSource
              primaryOngoingFundingSourceClarification
              scopeOfBusiness
              scopeOfBusinessClarification
            }
            assessedRiskRating
            entityOrAssociatesHaveNegativeNews
            politicallyExposedPersons {
              isPoliticallyExposed
              politicalOfficials {
                immediateFamily
                legalName
                politicalOrganization
                politicalTitle
                role
              }
            }
          }
          exemptLegalCustomer {
            exemption
            isExemptLegalCustomer
          }
          familyName
          givenName
          investmentProfile {
            annualIncomeUSD
            federalTaxBracketPercent
            investmentExperience
            investmentObjective
            liquidNetWorthUSD
            riskTolerance
            totalNetWorthUSD
          }
          investorType
          isPermanentResident
          issuerDirectCommunication
          llcAccountAgreement {
            authorizedSignerName
            authorizedSignerTitle
            entityName
            isAuthorizedSignerESigned
            membersAndManagers {
              isManager
              isManagerESigned
              legalName
              organizationalRole
            }
            resolutionAdoptionDate
            stateOfOrigin
          }
          organization {
            entityType
            foreignBankUSAgent
            isForeignBank
            isMaintainedForForeignFinancialInstitution
            uploadedWNineForm
            usEntity
          }
          organizationName
          suitabilityProfile {
            liquidityNeeds
            timeHorizon
          }
          title
          trustedContactInfo {
            trustedContact
            trustedContactPerson {
              emailAddress
              familyName
              givenName
            }
          }
          wnineTaxForm {
            exemptPayeeCode
            exemptionFromFatca
          }
        }
        investorType
        metadata
        status
        updatedAt
      }
    }
  }
`;

/**
 * __useInvestorGetQuery__
 *
 * To run a query within a React component, call `useInvestorGetQuery` and pass it any options that fit your needs.
 * When your component renders, `useInvestorGetQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useInvestorGetQuery({
 *   variables: {
 *      investorId: // value for 'investorId'
 *   },
 * });
 */
export function useInvestorGetQuery(
  baseOptions?: Apollo.QueryHookOptions<
    ApolloTypes.InvestorGetQuery,
    ApolloTypes.InvestorGetQueryVariables
  >
) {
  return Apollo.useQuery<
    ApolloTypes.InvestorGetQuery,
    ApolloTypes.InvestorGetQueryVariables
  >(InvestorGetDocument, baseOptions);
}
export function useInvestorGetLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    ApolloTypes.InvestorGetQuery,
    ApolloTypes.InvestorGetQueryVariables
  >
) {
  return Apollo.useLazyQuery<
    ApolloTypes.InvestorGetQuery,
    ApolloTypes.InvestorGetQueryVariables
  >(InvestorGetDocument, baseOptions);
}
export type InvestorGetQueryHookResult = ReturnType<typeof useInvestorGetQuery>;
export type InvestorGetLazyQueryHookResult = ReturnType<
  typeof useInvestorGetLazyQuery
>;
export type InvestorGetQueryResult = Apollo.QueryResult<
  ApolloTypes.InvestorGetQuery,
  ApolloTypes.InvestorGetQueryVariables
>;
export function refetchInvestorGetQuery(
  variables?: ApolloTypes.InvestorGetQueryVariables
) {
  return { query: InvestorGetDocument, variables };
}
export const InvestorGetDeliveryInstructionsByIdDocument = /* #__PURE__ */ gql`
  query investorGetDeliveryInstructionsById($investorId: String!) {
    investorGetDeliveryInstructionsById(investorId: $investorId) {
      deliveryInstructions {
        cashOnly
        createdAt
        id
        instructions {
          externalEntityId
          externalEntityType
        }
        investorId
        metadata
        portfolioId
        updatedAt
      }
    }
  }
`;

/**
 * __useInvestorGetDeliveryInstructionsByIdQuery__
 *
 * To run a query within a React component, call `useInvestorGetDeliveryInstructionsByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useInvestorGetDeliveryInstructionsByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useInvestorGetDeliveryInstructionsByIdQuery({
 *   variables: {
 *      investorId: // value for 'investorId'
 *   },
 * });
 */
export function useInvestorGetDeliveryInstructionsByIdQuery(
  baseOptions?: Apollo.QueryHookOptions<
    ApolloTypes.InvestorGetDeliveryInstructionsByIdQuery,
    ApolloTypes.InvestorGetDeliveryInstructionsByIdQueryVariables
  >
) {
  return Apollo.useQuery<
    ApolloTypes.InvestorGetDeliveryInstructionsByIdQuery,
    ApolloTypes.InvestorGetDeliveryInstructionsByIdQueryVariables
  >(InvestorGetDeliveryInstructionsByIdDocument, baseOptions);
}
export function useInvestorGetDeliveryInstructionsByIdLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    ApolloTypes.InvestorGetDeliveryInstructionsByIdQuery,
    ApolloTypes.InvestorGetDeliveryInstructionsByIdQueryVariables
  >
) {
  return Apollo.useLazyQuery<
    ApolloTypes.InvestorGetDeliveryInstructionsByIdQuery,
    ApolloTypes.InvestorGetDeliveryInstructionsByIdQueryVariables
  >(InvestorGetDeliveryInstructionsByIdDocument, baseOptions);
}
export type InvestorGetDeliveryInstructionsByIdQueryHookResult = ReturnType<
  typeof useInvestorGetDeliveryInstructionsByIdQuery
>;
export type InvestorGetDeliveryInstructionsByIdLazyQueryHookResult = ReturnType<
  typeof useInvestorGetDeliveryInstructionsByIdLazyQuery
>;
export type InvestorGetDeliveryInstructionsByIdQueryResult = Apollo.QueryResult<
  ApolloTypes.InvestorGetDeliveryInstructionsByIdQuery,
  ApolloTypes.InvestorGetDeliveryInstructionsByIdQueryVariables
>;
export function refetchInvestorGetDeliveryInstructionsByIdQuery(
  variables?: ApolloTypes.InvestorGetDeliveryInstructionsByIdQueryVariables
) {
  return {
    query: InvestorGetDeliveryInstructionsByIdDocument,
    variables
  };
}
export const InvestorGetLinkedBankAccountDocument = /* #__PURE__ */ gql`
  query investorGetLinkedBankAccount(
    $investorId: String!
    $linkedBankAccountId: String!
  ) {
    investorGetLinkedBankAccount(
      investorId: $investorId
      linkedBankAccountId: $linkedBankAccountId
    ) {
      linkedBankAccount {
        accountType
        bankName
        createdAt
        id
        investorId
        mask
        metadata
        status
        updatedAt
      }
    }
  }
`;

/**
 * __useInvestorGetLinkedBankAccountQuery__
 *
 * To run a query within a React component, call `useInvestorGetLinkedBankAccountQuery` and pass it any options that fit your needs.
 * When your component renders, `useInvestorGetLinkedBankAccountQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useInvestorGetLinkedBankAccountQuery({
 *   variables: {
 *      investorId: // value for 'investorId'
 *      linkedBankAccountId: // value for 'linkedBankAccountId'
 *   },
 * });
 */
export function useInvestorGetLinkedBankAccountQuery(
  baseOptions?: Apollo.QueryHookOptions<
    ApolloTypes.InvestorGetLinkedBankAccountQuery,
    ApolloTypes.InvestorGetLinkedBankAccountQueryVariables
  >
) {
  return Apollo.useQuery<
    ApolloTypes.InvestorGetLinkedBankAccountQuery,
    ApolloTypes.InvestorGetLinkedBankAccountQueryVariables
  >(InvestorGetLinkedBankAccountDocument, baseOptions);
}
export function useInvestorGetLinkedBankAccountLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    ApolloTypes.InvestorGetLinkedBankAccountQuery,
    ApolloTypes.InvestorGetLinkedBankAccountQueryVariables
  >
) {
  return Apollo.useLazyQuery<
    ApolloTypes.InvestorGetLinkedBankAccountQuery,
    ApolloTypes.InvestorGetLinkedBankAccountQueryVariables
  >(InvestorGetLinkedBankAccountDocument, baseOptions);
}
export type InvestorGetLinkedBankAccountQueryHookResult = ReturnType<
  typeof useInvestorGetLinkedBankAccountQuery
>;
export type InvestorGetLinkedBankAccountLazyQueryHookResult = ReturnType<
  typeof useInvestorGetLinkedBankAccountLazyQuery
>;
export type InvestorGetLinkedBankAccountQueryResult = Apollo.QueryResult<
  ApolloTypes.InvestorGetLinkedBankAccountQuery,
  ApolloTypes.InvestorGetLinkedBankAccountQueryVariables
>;
export function refetchInvestorGetLinkedBankAccountQuery(
  variables?: ApolloTypes.InvestorGetLinkedBankAccountQueryVariables
) {
  return { query: InvestorGetLinkedBankAccountDocument, variables };
}
export const InvestorGetLinkedBankAccountBalanceDocument = /* #__PURE__ */ gql`
  query investorGetLinkedBankAccountBalance(
    $investorId: String!
    $linkedBankAccountId: String!
  ) {
    investorGetLinkedBankAccountBalance(
      investorId: $investorId
      linkedBankAccountId: $linkedBankAccountId
    ) {
      balance {
        availableBalance
        id
        timestamp
      }
    }
  }
`;

/**
 * __useInvestorGetLinkedBankAccountBalanceQuery__
 *
 * To run a query within a React component, call `useInvestorGetLinkedBankAccountBalanceQuery` and pass it any options that fit your needs.
 * When your component renders, `useInvestorGetLinkedBankAccountBalanceQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useInvestorGetLinkedBankAccountBalanceQuery({
 *   variables: {
 *      investorId: // value for 'investorId'
 *      linkedBankAccountId: // value for 'linkedBankAccountId'
 *   },
 * });
 */
export function useInvestorGetLinkedBankAccountBalanceQuery(
  baseOptions?: Apollo.QueryHookOptions<
    ApolloTypes.InvestorGetLinkedBankAccountBalanceQuery,
    ApolloTypes.InvestorGetLinkedBankAccountBalanceQueryVariables
  >
) {
  return Apollo.useQuery<
    ApolloTypes.InvestorGetLinkedBankAccountBalanceQuery,
    ApolloTypes.InvestorGetLinkedBankAccountBalanceQueryVariables
  >(InvestorGetLinkedBankAccountBalanceDocument, baseOptions);
}
export function useInvestorGetLinkedBankAccountBalanceLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    ApolloTypes.InvestorGetLinkedBankAccountBalanceQuery,
    ApolloTypes.InvestorGetLinkedBankAccountBalanceQueryVariables
  >
) {
  return Apollo.useLazyQuery<
    ApolloTypes.InvestorGetLinkedBankAccountBalanceQuery,
    ApolloTypes.InvestorGetLinkedBankAccountBalanceQueryVariables
  >(InvestorGetLinkedBankAccountBalanceDocument, baseOptions);
}
export type InvestorGetLinkedBankAccountBalanceQueryHookResult = ReturnType<
  typeof useInvestorGetLinkedBankAccountBalanceQuery
>;
export type InvestorGetLinkedBankAccountBalanceLazyQueryHookResult = ReturnType<
  typeof useInvestorGetLinkedBankAccountBalanceLazyQuery
>;
export type InvestorGetLinkedBankAccountBalanceQueryResult = Apollo.QueryResult<
  ApolloTypes.InvestorGetLinkedBankAccountBalanceQuery,
  ApolloTypes.InvestorGetLinkedBankAccountBalanceQueryVariables
>;
export function refetchInvestorGetLinkedBankAccountBalanceQuery(
  variables?: ApolloTypes.InvestorGetLinkedBankAccountBalanceQueryVariables
) {
  return {
    query: InvestorGetLinkedBankAccountBalanceDocument,
    variables
  };
}
export const InvestorGetLinkedBankAccountsDocument = /* #__PURE__ */ gql`
  query investorGetLinkedBankAccounts($investorId: String!) {
    investorGetLinkedBankAccounts(investorId: $investorId) {
      linkedBankAccounts {
        accountType
        bankName
        createdAt
        id
        investorId
        mask
        metadata
        status
        updatedAt
      }
    }
  }
`;

/**
 * __useInvestorGetLinkedBankAccountsQuery__
 *
 * To run a query within a React component, call `useInvestorGetLinkedBankAccountsQuery` and pass it any options that fit your needs.
 * When your component renders, `useInvestorGetLinkedBankAccountsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useInvestorGetLinkedBankAccountsQuery({
 *   variables: {
 *      investorId: // value for 'investorId'
 *   },
 * });
 */
export function useInvestorGetLinkedBankAccountsQuery(
  baseOptions?: Apollo.QueryHookOptions<
    ApolloTypes.InvestorGetLinkedBankAccountsQuery,
    ApolloTypes.InvestorGetLinkedBankAccountsQueryVariables
  >
) {
  return Apollo.useQuery<
    ApolloTypes.InvestorGetLinkedBankAccountsQuery,
    ApolloTypes.InvestorGetLinkedBankAccountsQueryVariables
  >(InvestorGetLinkedBankAccountsDocument, baseOptions);
}
export function useInvestorGetLinkedBankAccountsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    ApolloTypes.InvestorGetLinkedBankAccountsQuery,
    ApolloTypes.InvestorGetLinkedBankAccountsQueryVariables
  >
) {
  return Apollo.useLazyQuery<
    ApolloTypes.InvestorGetLinkedBankAccountsQuery,
    ApolloTypes.InvestorGetLinkedBankAccountsQueryVariables
  >(InvestorGetLinkedBankAccountsDocument, baseOptions);
}
export type InvestorGetLinkedBankAccountsQueryHookResult = ReturnType<
  typeof useInvestorGetLinkedBankAccountsQuery
>;
export type InvestorGetLinkedBankAccountsLazyQueryHookResult = ReturnType<
  typeof useInvestorGetLinkedBankAccountsLazyQuery
>;
export type InvestorGetLinkedBankAccountsQueryResult = Apollo.QueryResult<
  ApolloTypes.InvestorGetLinkedBankAccountsQuery,
  ApolloTypes.InvestorGetLinkedBankAccountsQueryVariables
>;
export function refetchInvestorGetLinkedBankAccountsQuery(
  variables?: ApolloTypes.InvestorGetLinkedBankAccountsQueryVariables
) {
  return { query: InvestorGetLinkedBankAccountsDocument, variables };
}
export const InvestorGetPortfolioDeliveryInstructionDocument = /* #__PURE__ */ gql`
  query investorGetPortfolioDeliveryInstruction($portfolioId: String!) {
    investorGetPortfolioDeliveryInstruction(portfolioId: $portfolioId) {
      portfolioDeliveryInstruction {
        cashOnly
        createdAt
        id
        instructions {
          externalEntityId
          externalEntityType
        }
        investorId
        metadata
        portfolioId
        updatedAt
      }
    }
  }
`;

/**
 * __useInvestorGetPortfolioDeliveryInstructionQuery__
 *
 * To run a query within a React component, call `useInvestorGetPortfolioDeliveryInstructionQuery` and pass it any options that fit your needs.
 * When your component renders, `useInvestorGetPortfolioDeliveryInstructionQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useInvestorGetPortfolioDeliveryInstructionQuery({
 *   variables: {
 *      portfolioId: // value for 'portfolioId'
 *   },
 * });
 */
export function useInvestorGetPortfolioDeliveryInstructionQuery(
  baseOptions?: Apollo.QueryHookOptions<
    ApolloTypes.InvestorGetPortfolioDeliveryInstructionQuery,
    ApolloTypes.InvestorGetPortfolioDeliveryInstructionQueryVariables
  >
) {
  return Apollo.useQuery<
    ApolloTypes.InvestorGetPortfolioDeliveryInstructionQuery,
    ApolloTypes.InvestorGetPortfolioDeliveryInstructionQueryVariables
  >(InvestorGetPortfolioDeliveryInstructionDocument, baseOptions);
}
export function useInvestorGetPortfolioDeliveryInstructionLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    ApolloTypes.InvestorGetPortfolioDeliveryInstructionQuery,
    ApolloTypes.InvestorGetPortfolioDeliveryInstructionQueryVariables
  >
) {
  return Apollo.useLazyQuery<
    ApolloTypes.InvestorGetPortfolioDeliveryInstructionQuery,
    ApolloTypes.InvestorGetPortfolioDeliveryInstructionQueryVariables
  >(InvestorGetPortfolioDeliveryInstructionDocument, baseOptions);
}
export type InvestorGetPortfolioDeliveryInstructionQueryHookResult = ReturnType<
  typeof useInvestorGetPortfolioDeliveryInstructionQuery
>;
export type InvestorGetPortfolioDeliveryInstructionLazyQueryHookResult = ReturnType<
  typeof useInvestorGetPortfolioDeliveryInstructionLazyQuery
>;
export type InvestorGetPortfolioDeliveryInstructionQueryResult = Apollo.QueryResult<
  ApolloTypes.InvestorGetPortfolioDeliveryInstructionQuery,
  ApolloTypes.InvestorGetPortfolioDeliveryInstructionQueryVariables
>;
export function refetchInvestorGetPortfolioDeliveryInstructionQuery(
  variables?: ApolloTypes.InvestorGetPortfolioDeliveryInstructionQueryVariables
) {
  return {
    query: InvestorGetPortfolioDeliveryInstructionDocument,
    variables
  };
}
export const InvestorGetTransferDocument = /* #__PURE__ */ gql`
  query investorGetTransfer($investorId: String!, $transferId: String!) {
    investorGetTransfer(investorId: $investorId, transferId: $transferId) {
      transfer {
        amount
        createdAt
        currency
        direction
        externalEntity {
          externalEntityId
          externalEntityType
        }
        id
        investorId
        ledgerId
        linkedBankAccountId
        metadata
        portfolioId
        status
        transferMethod
        updatedAt
      }
    }
  }
`;

/**
 * __useInvestorGetTransferQuery__
 *
 * To run a query within a React component, call `useInvestorGetTransferQuery` and pass it any options that fit your needs.
 * When your component renders, `useInvestorGetTransferQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useInvestorGetTransferQuery({
 *   variables: {
 *      investorId: // value for 'investorId'
 *      transferId: // value for 'transferId'
 *   },
 * });
 */
export function useInvestorGetTransferQuery(
  baseOptions?: Apollo.QueryHookOptions<
    ApolloTypes.InvestorGetTransferQuery,
    ApolloTypes.InvestorGetTransferQueryVariables
  >
) {
  return Apollo.useQuery<
    ApolloTypes.InvestorGetTransferQuery,
    ApolloTypes.InvestorGetTransferQueryVariables
  >(InvestorGetTransferDocument, baseOptions);
}
export function useInvestorGetTransferLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    ApolloTypes.InvestorGetTransferQuery,
    ApolloTypes.InvestorGetTransferQueryVariables
  >
) {
  return Apollo.useLazyQuery<
    ApolloTypes.InvestorGetTransferQuery,
    ApolloTypes.InvestorGetTransferQueryVariables
  >(InvestorGetTransferDocument, baseOptions);
}
export type InvestorGetTransferQueryHookResult = ReturnType<
  typeof useInvestorGetTransferQuery
>;
export type InvestorGetTransferLazyQueryHookResult = ReturnType<
  typeof useInvestorGetTransferLazyQuery
>;
export type InvestorGetTransferQueryResult = Apollo.QueryResult<
  ApolloTypes.InvestorGetTransferQuery,
  ApolloTypes.InvestorGetTransferQueryVariables
>;
export function refetchInvestorGetTransferQuery(
  variables?: ApolloTypes.InvestorGetTransferQueryVariables
) {
  return { query: InvestorGetTransferDocument, variables };
}
export const InvestorGetTransfersDocument = /* #__PURE__ */ gql`
  query investorGetTransfers($investorId: String!) {
    investorGetTransfers(investorId: $investorId) {
      transfers {
        accountNumber
        amount
        createdAt
        direction
        linkedBankAccountId
        status
        transferId
        transferMethod
        transferNumber
        updatedAt
      }
    }
  }
`;

/**
 * __useInvestorGetTransfersQuery__
 *
 * To run a query within a React component, call `useInvestorGetTransfersQuery` and pass it any options that fit your needs.
 * When your component renders, `useInvestorGetTransfersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useInvestorGetTransfersQuery({
 *   variables: {
 *      investorId: // value for 'investorId'
 *   },
 * });
 */
export function useInvestorGetTransfersQuery(
  baseOptions?: Apollo.QueryHookOptions<
    ApolloTypes.InvestorGetTransfersQuery,
    ApolloTypes.InvestorGetTransfersQueryVariables
  >
) {
  return Apollo.useQuery<
    ApolloTypes.InvestorGetTransfersQuery,
    ApolloTypes.InvestorGetTransfersQueryVariables
  >(InvestorGetTransfersDocument, baseOptions);
}
export function useInvestorGetTransfersLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    ApolloTypes.InvestorGetTransfersQuery,
    ApolloTypes.InvestorGetTransfersQueryVariables
  >
) {
  return Apollo.useLazyQuery<
    ApolloTypes.InvestorGetTransfersQuery,
    ApolloTypes.InvestorGetTransfersQueryVariables
  >(InvestorGetTransfersDocument, baseOptions);
}
export type InvestorGetTransfersQueryHookResult = ReturnType<
  typeof useInvestorGetTransfersQuery
>;
export type InvestorGetTransfersLazyQueryHookResult = ReturnType<
  typeof useInvestorGetTransfersLazyQuery
>;
export type InvestorGetTransfersQueryResult = Apollo.QueryResult<
  ApolloTypes.InvestorGetTransfersQuery,
  ApolloTypes.InvestorGetTransfersQueryVariables
>;
export function refetchInvestorGetTransfersQuery(
  variables?: ApolloTypes.InvestorGetTransfersQueryVariables
) {
  return { query: InvestorGetTransfersDocument, variables };
}
export const InvestorGetsDocument = /* #__PURE__ */ gql`
  query investorGets {
    investorGets {
      investors {
        apexAccount {
          apexAccountNumber
          apexRequestId
          createdAt
          id
          investorId
          metadata
          status
          updatedAt
        }
        investor {
          createdAt
          id
          investorInfo {
            applicantSignature {
              eSigned
            }
            beneficialOwnersAndOfficers {
              beneficialOwners {
                dateOfBirth
                identificationNumber
                socialSecurityNumber
              }
              businessClassification
              officers {
                dateOfBirth
                identificationNumber
                socialSecurityNumber
              }
            }
            birthCountry
            cashAccountAgreement {
              articlesOfIncorporationSnapId
              authorizedOfficerName
              authorizedOfficerTitle
              corporationName
              isAuthorizedOfficerESigned
              isSecretaryESigned
              secretaryName
              stateOfIncorporation
            }
            catAccountHolderType
            citizenshipCountry
            contactInformation {
              city
              country
              emailAddresses
              phone
              phoneType
              postalCode
              state
              streetAddress
            }
            disclosures {
              affiliatedApproval
              companySymbols
              firmName
              isAffiliatedExchangeOrFINRA
              isControlPerson
              isPoliticallyExposed
              politicalExposureDetail {
                immediateFamily
                politicalOrganization
              }
            }
            employment {
              employer
              employmentStatus
              positionEmployed
            }
            entityDueDiligence {
              accountActivity {
                expectedWithdrawalFrequency
                initialDepositAmount
                initialDepositSource
                primaryEntityAccountActivity
                willTransactForeignBonds
                willTransactLowPricedSecurities
              }
              accountInformation {
                accountName
                businessLocations
                countryOfIncorporation
                hasRelatedAccounts
              }
              additionalAccounts {
                confirmEntityDoesNotIssueBearerShares
                institutionNames
                primaryOngoingFundingSource
                primaryOngoingFundingSourceClarification
                scopeOfBusiness
                scopeOfBusinessClarification
              }
              assessedRiskRating
              entityOrAssociatesHaveNegativeNews
              politicallyExposedPersons {
                isPoliticallyExposed
              }
            }
            exemptLegalCustomer {
              exemption
              isExemptLegalCustomer
            }
            familyName
            givenName
            investmentProfile {
              annualIncomeUSD
              federalTaxBracketPercent
              investmentExperience
              investmentObjective
              liquidNetWorthUSD
              riskTolerance
              totalNetWorthUSD
            }
            investorType
            isPermanentResident
            issuerDirectCommunication
            llcAccountAgreement {
              authorizedSignerName
              authorizedSignerTitle
              entityName
              isAuthorizedSignerESigned
              membersAndManagers {
                isManager
                isManagerESigned
                legalName
                organizationalRole
              }
              resolutionAdoptionDate
              stateOfOrigin
            }
            organization {
              entityType
              foreignBankUSAgent
              isForeignBank
              isMaintainedForForeignFinancialInstitution
              uploadedWNineForm
              usEntity
            }
            organizationName
            suitabilityProfile {
              liquidityNeeds
              timeHorizon
            }
            title
            trustedContactInfo {
              trustedContact
              trustedContactPerson {
                emailAddress
                familyName
                givenName
              }
            }
            wnineTaxForm {
              exemptPayeeCode
              exemptionFromFatca
            }
          }
          investorType
          metadata
          status
          updatedAt
        }
      }
    }
  }
`;

/**
 * __useInvestorGetsQuery__
 *
 * To run a query within a React component, call `useInvestorGetsQuery` and pass it any options that fit your needs.
 * When your component renders, `useInvestorGetsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useInvestorGetsQuery({
 *   variables: {
 *   },
 * });
 */
export function useInvestorGetsQuery(
  baseOptions?: Apollo.QueryHookOptions<
    ApolloTypes.InvestorGetsQuery,
    ApolloTypes.InvestorGetsQueryVariables
  >
) {
  return Apollo.useQuery<
    ApolloTypes.InvestorGetsQuery,
    ApolloTypes.InvestorGetsQueryVariables
  >(InvestorGetsDocument, baseOptions);
}
export function useInvestorGetsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    ApolloTypes.InvestorGetsQuery,
    ApolloTypes.InvestorGetsQueryVariables
  >
) {
  return Apollo.useLazyQuery<
    ApolloTypes.InvestorGetsQuery,
    ApolloTypes.InvestorGetsQueryVariables
  >(InvestorGetsDocument, baseOptions);
}
export type InvestorGetsQueryHookResult = ReturnType<
  typeof useInvestorGetsQuery
>;
export type InvestorGetsLazyQueryHookResult = ReturnType<
  typeof useInvestorGetsLazyQuery
>;
export type InvestorGetsQueryResult = Apollo.QueryResult<
  ApolloTypes.InvestorGetsQuery,
  ApolloTypes.InvestorGetsQueryVariables
>;
export function refetchInvestorGetsQuery(
  variables?: ApolloTypes.InvestorGetsQueryVariables
) {
  return { query: InvestorGetsDocument, variables };
}
export const InvestorInteralGetDocument = /* #__PURE__ */ gql`
  query investorInteralGet($investorId: String!) {
    investorInteralGet(investorId: $investorId) {
      investor {
        createdAt
        id
        investorInfo {
          applicantSignature {
            eSigned
          }
          beneficialOwnersAndOfficers {
            beneficialOwners {
              address {
                city
                country
                postalCode
                state
                streetAddress
              }
              dateOfBirth
              identificationNumber
              name {
                familyName
                givenName
                legalName
              }
              socialSecurityNumber
            }
            businessClassification
            officers {
              address {
                city
                country
                postalCode
                state
                streetAddress
              }
              dateOfBirth
              identificationNumber
              name {
                familyName
                givenName
                legalName
              }
              socialSecurityNumber
            }
          }
          birthCountry
          cashAccountAgreement {
            articlesOfIncorporationSnapId
            authorizedOfficerName
            authorizedOfficerTitle
            corporationName
            isAuthorizedOfficerESigned
            isSecretaryESigned
            secretaryName
            stateOfIncorporation
          }
          catAccountHolderType
          citizenshipCountry
          contactInformation {
            city
            country
            emailAddresses
            phone
            phoneType
            postalCode
            state
            streetAddress
          }
          dateOfBirth
          disclosures {
            affiliatedApproval
            companySymbols
            firmName
            interestedParties {
              mailingAddress {
                city
                country
                postalCode
                state
                streetAddress
              }
              name {
                companyName
              }
            }
            isAffiliatedExchangeOrFINRA
            isControlPerson
            isPoliticallyExposed
            politicalExposureDetail {
              immediateFamily
              politicalOrganization
            }
          }
          employment {
            employer
            employmentStatus
            positionEmployed
          }
          entityDueDiligence {
            accountActivity {
              expectedWithdrawalFrequency
              initialDepositAmount
              initialDepositSource
              primaryEntityAccountActivity
              willTransactForeignBonds
              willTransactLowPricedSecurities
            }
            accountInformation {
              accountName
              businessLocations
              countryOfIncorporation
              hasRelatedAccounts
              relatedAccountList {
                accountNumber
                entityName
              }
            }
            additionalAccounts {
              confirmEntityDoesNotIssueBearerShares
              institutionNames
              primaryOngoingFundingSource
              primaryOngoingFundingSourceClarification
              scopeOfBusiness
              scopeOfBusinessClarification
            }
            assessedRiskRating
            entityOrAssociatesHaveNegativeNews
            politicallyExposedPersons {
              isPoliticallyExposed
              politicalOfficials {
                immediateFamily
                legalName
                politicalOrganization
                politicalTitle
                role
              }
            }
          }
          exemptLegalCustomer {
            exemption
            isExemptLegalCustomer
          }
          familyName
          givenName
          investmentProfile {
            annualIncomeUSD
            federalTaxBracketPercent
            investmentExperience
            investmentObjective
            liquidNetWorthUSD
            riskTolerance
            totalNetWorthUSD
          }
          investorType
          isPermanentResident
          issuerDirectCommunication
          llcAccountAgreement {
            authorizedSignerName
            authorizedSignerTitle
            entityName
            isAuthorizedSignerESigned
            membersAndManagers {
              isManager
              isManagerESigned
              legalName
              organizationalRole
            }
            resolutionAdoptionDate
            stateOfOrigin
          }
          organization {
            entityType
            foreignBankUSAgent
            isForeignBank
            isMaintainedForForeignFinancialInstitution
            uploadedWNineForm
            usEntity
          }
          organizationName
          organizationTaxId
          socialSecurityNumber
          suitabilityProfile {
            liquidityNeeds
            timeHorizon
          }
          title
          trustedContactInfo {
            trustedContact
            trustedContactPerson {
              emailAddress
              familyName
              givenName
            }
          }
          wnineTaxForm {
            exemptPayeeCode
            exemptionFromFatca
          }
        }
        investorType
        metadata
        updatedAt
      }
    }
  }
`;

/**
 * __useInvestorInteralGetQuery__
 *
 * To run a query within a React component, call `useInvestorInteralGetQuery` and pass it any options that fit your needs.
 * When your component renders, `useInvestorInteralGetQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useInvestorInteralGetQuery({
 *   variables: {
 *      investorId: // value for 'investorId'
 *   },
 * });
 */
export function useInvestorInteralGetQuery(
  baseOptions?: Apollo.QueryHookOptions<
    ApolloTypes.InvestorInteralGetQuery,
    ApolloTypes.InvestorInteralGetQueryVariables
  >
) {
  return Apollo.useQuery<
    ApolloTypes.InvestorInteralGetQuery,
    ApolloTypes.InvestorInteralGetQueryVariables
  >(InvestorInteralGetDocument, baseOptions);
}
export function useInvestorInteralGetLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    ApolloTypes.InvestorInteralGetQuery,
    ApolloTypes.InvestorInteralGetQueryVariables
  >
) {
  return Apollo.useLazyQuery<
    ApolloTypes.InvestorInteralGetQuery,
    ApolloTypes.InvestorInteralGetQueryVariables
  >(InvestorInteralGetDocument, baseOptions);
}
export type InvestorInteralGetQueryHookResult = ReturnType<
  typeof useInvestorInteralGetQuery
>;
export type InvestorInteralGetLazyQueryHookResult = ReturnType<
  typeof useInvestorInteralGetLazyQuery
>;
export type InvestorInteralGetQueryResult = Apollo.QueryResult<
  ApolloTypes.InvestorInteralGetQuery,
  ApolloTypes.InvestorInteralGetQueryVariables
>;
export function refetchInvestorInteralGetQuery(
  variables?: ApolloTypes.InvestorInteralGetQueryVariables
) {
  return { query: InvestorInteralGetDocument, variables };
}
export const InvestorInternalGetLinkedBankAccountDocument = /* #__PURE__ */ gql`
  query investorInternalGetLinkedBankAccount(
    $investorId: String!
    $linkedBankAccountId: String!
  ) {
    investorInternalGetLinkedBankAccount(
      investorId: $investorId
      linkedBankAccountId: $linkedBankAccountId
    ) {
      linkedBankAccount {
        accountNumber
        accountType
        bankName
        createdAt
        id
        investorId
        mask
        metadata
        routing
        status
        updatedAt
        wire
      }
    }
  }
`;

/**
 * __useInvestorInternalGetLinkedBankAccountQuery__
 *
 * To run a query within a React component, call `useInvestorInternalGetLinkedBankAccountQuery` and pass it any options that fit your needs.
 * When your component renders, `useInvestorInternalGetLinkedBankAccountQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useInvestorInternalGetLinkedBankAccountQuery({
 *   variables: {
 *      investorId: // value for 'investorId'
 *      linkedBankAccountId: // value for 'linkedBankAccountId'
 *   },
 * });
 */
export function useInvestorInternalGetLinkedBankAccountQuery(
  baseOptions?: Apollo.QueryHookOptions<
    ApolloTypes.InvestorInternalGetLinkedBankAccountQuery,
    ApolloTypes.InvestorInternalGetLinkedBankAccountQueryVariables
  >
) {
  return Apollo.useQuery<
    ApolloTypes.InvestorInternalGetLinkedBankAccountQuery,
    ApolloTypes.InvestorInternalGetLinkedBankAccountQueryVariables
  >(InvestorInternalGetLinkedBankAccountDocument, baseOptions);
}
export function useInvestorInternalGetLinkedBankAccountLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    ApolloTypes.InvestorInternalGetLinkedBankAccountQuery,
    ApolloTypes.InvestorInternalGetLinkedBankAccountQueryVariables
  >
) {
  return Apollo.useLazyQuery<
    ApolloTypes.InvestorInternalGetLinkedBankAccountQuery,
    ApolloTypes.InvestorInternalGetLinkedBankAccountQueryVariables
  >(InvestorInternalGetLinkedBankAccountDocument, baseOptions);
}
export type InvestorInternalGetLinkedBankAccountQueryHookResult = ReturnType<
  typeof useInvestorInternalGetLinkedBankAccountQuery
>;
export type InvestorInternalGetLinkedBankAccountLazyQueryHookResult = ReturnType<
  typeof useInvestorInternalGetLinkedBankAccountLazyQuery
>;
export type InvestorInternalGetLinkedBankAccountQueryResult = Apollo.QueryResult<
  ApolloTypes.InvestorInternalGetLinkedBankAccountQuery,
  ApolloTypes.InvestorInternalGetLinkedBankAccountQueryVariables
>;
export function refetchInvestorInternalGetLinkedBankAccountQuery(
  variables?: ApolloTypes.InvestorInternalGetLinkedBankAccountQueryVariables
) {
  return {
    query: InvestorInternalGetLinkedBankAccountDocument,
    variables
  };
}
export const LinkBankAccountGetLinkedBankAccountDocument = /* #__PURE__ */ gql`
  query linkBankAccountGetLinkedBankAccount(
    $accountNumber: String!
    $linkedBankAccountId: String!
  ) {
    linkBankAccountGetLinkedBankAccount(
      accountNumber: $accountNumber
      linkedBankAccountId: $linkedBankAccountId
    ) {
      linkedBankAccount {
        accountType
        bankName
        createdAt
        id
        investorId
        mask
        metadata
        status
        updatedAt
      }
    }
  }
`;

/**
 * __useLinkBankAccountGetLinkedBankAccountQuery__
 *
 * To run a query within a React component, call `useLinkBankAccountGetLinkedBankAccountQuery` and pass it any options that fit your needs.
 * When your component renders, `useLinkBankAccountGetLinkedBankAccountQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useLinkBankAccountGetLinkedBankAccountQuery({
 *   variables: {
 *      accountNumber: // value for 'accountNumber'
 *      linkedBankAccountId: // value for 'linkedBankAccountId'
 *   },
 * });
 */
export function useLinkBankAccountGetLinkedBankAccountQuery(
  baseOptions?: Apollo.QueryHookOptions<
    ApolloTypes.LinkBankAccountGetLinkedBankAccountQuery,
    ApolloTypes.LinkBankAccountGetLinkedBankAccountQueryVariables
  >
) {
  return Apollo.useQuery<
    ApolloTypes.LinkBankAccountGetLinkedBankAccountQuery,
    ApolloTypes.LinkBankAccountGetLinkedBankAccountQueryVariables
  >(LinkBankAccountGetLinkedBankAccountDocument, baseOptions);
}
export function useLinkBankAccountGetLinkedBankAccountLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    ApolloTypes.LinkBankAccountGetLinkedBankAccountQuery,
    ApolloTypes.LinkBankAccountGetLinkedBankAccountQueryVariables
  >
) {
  return Apollo.useLazyQuery<
    ApolloTypes.LinkBankAccountGetLinkedBankAccountQuery,
    ApolloTypes.LinkBankAccountGetLinkedBankAccountQueryVariables
  >(LinkBankAccountGetLinkedBankAccountDocument, baseOptions);
}
export type LinkBankAccountGetLinkedBankAccountQueryHookResult = ReturnType<
  typeof useLinkBankAccountGetLinkedBankAccountQuery
>;
export type LinkBankAccountGetLinkedBankAccountLazyQueryHookResult = ReturnType<
  typeof useLinkBankAccountGetLinkedBankAccountLazyQuery
>;
export type LinkBankAccountGetLinkedBankAccountQueryResult = Apollo.QueryResult<
  ApolloTypes.LinkBankAccountGetLinkedBankAccountQuery,
  ApolloTypes.LinkBankAccountGetLinkedBankAccountQueryVariables
>;
export function refetchLinkBankAccountGetLinkedBankAccountQuery(
  variables?: ApolloTypes.LinkBankAccountGetLinkedBankAccountQueryVariables
) {
  return {
    query: LinkBankAccountGetLinkedBankAccountDocument,
    variables
  };
}
export const LinkBankAccountGetLinkedBankAccountBalanceDocument = /* #__PURE__ */ gql`
  query linkBankAccountGetLinkedBankAccountBalance(
    $accountNumber: String!
    $linkedBankAccountId: String!
  ) {
    linkBankAccountGetLinkedBankAccountBalance(
      accountNumber: $accountNumber
      linkedBankAccountId: $linkedBankAccountId
    ) {
      balance {
        availableBalance
        id
        timestamp
      }
    }
  }
`;

/**
 * __useLinkBankAccountGetLinkedBankAccountBalanceQuery__
 *
 * To run a query within a React component, call `useLinkBankAccountGetLinkedBankAccountBalanceQuery` and pass it any options that fit your needs.
 * When your component renders, `useLinkBankAccountGetLinkedBankAccountBalanceQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useLinkBankAccountGetLinkedBankAccountBalanceQuery({
 *   variables: {
 *      accountNumber: // value for 'accountNumber'
 *      linkedBankAccountId: // value for 'linkedBankAccountId'
 *   },
 * });
 */
export function useLinkBankAccountGetLinkedBankAccountBalanceQuery(
  baseOptions?: Apollo.QueryHookOptions<
    ApolloTypes.LinkBankAccountGetLinkedBankAccountBalanceQuery,
    ApolloTypes.LinkBankAccountGetLinkedBankAccountBalanceQueryVariables
  >
) {
  return Apollo.useQuery<
    ApolloTypes.LinkBankAccountGetLinkedBankAccountBalanceQuery,
    ApolloTypes.LinkBankAccountGetLinkedBankAccountBalanceQueryVariables
  >(LinkBankAccountGetLinkedBankAccountBalanceDocument, baseOptions);
}
export function useLinkBankAccountGetLinkedBankAccountBalanceLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    ApolloTypes.LinkBankAccountGetLinkedBankAccountBalanceQuery,
    ApolloTypes.LinkBankAccountGetLinkedBankAccountBalanceQueryVariables
  >
) {
  return Apollo.useLazyQuery<
    ApolloTypes.LinkBankAccountGetLinkedBankAccountBalanceQuery,
    ApolloTypes.LinkBankAccountGetLinkedBankAccountBalanceQueryVariables
  >(LinkBankAccountGetLinkedBankAccountBalanceDocument, baseOptions);
}
export type LinkBankAccountGetLinkedBankAccountBalanceQueryHookResult = ReturnType<
  typeof useLinkBankAccountGetLinkedBankAccountBalanceQuery
>;
export type LinkBankAccountGetLinkedBankAccountBalanceLazyQueryHookResult = ReturnType<
  typeof useLinkBankAccountGetLinkedBankAccountBalanceLazyQuery
>;
export type LinkBankAccountGetLinkedBankAccountBalanceQueryResult = Apollo.QueryResult<
  ApolloTypes.LinkBankAccountGetLinkedBankAccountBalanceQuery,
  ApolloTypes.LinkBankAccountGetLinkedBankAccountBalanceQueryVariables
>;
export function refetchLinkBankAccountGetLinkedBankAccountBalanceQuery(
  variables?: ApolloTypes.LinkBankAccountGetLinkedBankAccountBalanceQueryVariables
) {
  return {
    query: LinkBankAccountGetLinkedBankAccountBalanceDocument,
    variables
  };
}
export const LinkBankAccountGetLinkedBankAccountsDocument = /* #__PURE__ */ gql`
  query linkBankAccountGetLinkedBankAccounts($accountNumber: String!) {
    linkBankAccountGetLinkedBankAccounts(accountNumber: $accountNumber) {
      linkedBankAccounts {
        accountType
        bankName
        createdAt
        id
        investorId
        mask
        metadata
        status
        updatedAt
      }
    }
  }
`;

/**
 * __useLinkBankAccountGetLinkedBankAccountsQuery__
 *
 * To run a query within a React component, call `useLinkBankAccountGetLinkedBankAccountsQuery` and pass it any options that fit your needs.
 * When your component renders, `useLinkBankAccountGetLinkedBankAccountsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useLinkBankAccountGetLinkedBankAccountsQuery({
 *   variables: {
 *      accountNumber: // value for 'accountNumber'
 *   },
 * });
 */
export function useLinkBankAccountGetLinkedBankAccountsQuery(
  baseOptions?: Apollo.QueryHookOptions<
    ApolloTypes.LinkBankAccountGetLinkedBankAccountsQuery,
    ApolloTypes.LinkBankAccountGetLinkedBankAccountsQueryVariables
  >
) {
  return Apollo.useQuery<
    ApolloTypes.LinkBankAccountGetLinkedBankAccountsQuery,
    ApolloTypes.LinkBankAccountGetLinkedBankAccountsQueryVariables
  >(LinkBankAccountGetLinkedBankAccountsDocument, baseOptions);
}
export function useLinkBankAccountGetLinkedBankAccountsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    ApolloTypes.LinkBankAccountGetLinkedBankAccountsQuery,
    ApolloTypes.LinkBankAccountGetLinkedBankAccountsQueryVariables
  >
) {
  return Apollo.useLazyQuery<
    ApolloTypes.LinkBankAccountGetLinkedBankAccountsQuery,
    ApolloTypes.LinkBankAccountGetLinkedBankAccountsQueryVariables
  >(LinkBankAccountGetLinkedBankAccountsDocument, baseOptions);
}
export type LinkBankAccountGetLinkedBankAccountsQueryHookResult = ReturnType<
  typeof useLinkBankAccountGetLinkedBankAccountsQuery
>;
export type LinkBankAccountGetLinkedBankAccountsLazyQueryHookResult = ReturnType<
  typeof useLinkBankAccountGetLinkedBankAccountsLazyQuery
>;
export type LinkBankAccountGetLinkedBankAccountsQueryResult = Apollo.QueryResult<
  ApolloTypes.LinkBankAccountGetLinkedBankAccountsQuery,
  ApolloTypes.LinkBankAccountGetLinkedBankAccountsQueryVariables
>;
export function refetchLinkBankAccountGetLinkedBankAccountsQuery(
  variables?: ApolloTypes.LinkBankAccountGetLinkedBankAccountsQueryVariables
) {
  return {
    query: LinkBankAccountGetLinkedBankAccountsDocument,
    variables
  };
}
export const LinkBankAccountInternalGetLinkedBankAccountDocument = /* #__PURE__ */ gql`
  query linkBankAccountInternalGetLinkedBankAccount(
    $linkedBankAccountId: String!
  ) {
    linkBankAccountInternalGetLinkedBankAccount(
      linkedBankAccountId: $linkedBankAccountId
    ) {
      linkedBankAccount {
        accountNumber
        accountType
        bankName
        createdAt
        id
        investorId
        mask
        metadata
        routing
        status
        updatedAt
        wire
      }
    }
  }
`;

/**
 * __useLinkBankAccountInternalGetLinkedBankAccountQuery__
 *
 * To run a query within a React component, call `useLinkBankAccountInternalGetLinkedBankAccountQuery` and pass it any options that fit your needs.
 * When your component renders, `useLinkBankAccountInternalGetLinkedBankAccountQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useLinkBankAccountInternalGetLinkedBankAccountQuery({
 *   variables: {
 *      linkedBankAccountId: // value for 'linkedBankAccountId'
 *   },
 * });
 */
export function useLinkBankAccountInternalGetLinkedBankAccountQuery(
  baseOptions?: Apollo.QueryHookOptions<
    ApolloTypes.LinkBankAccountInternalGetLinkedBankAccountQuery,
    ApolloTypes.LinkBankAccountInternalGetLinkedBankAccountQueryVariables
  >
) {
  return Apollo.useQuery<
    ApolloTypes.LinkBankAccountInternalGetLinkedBankAccountQuery,
    ApolloTypes.LinkBankAccountInternalGetLinkedBankAccountQueryVariables
  >(LinkBankAccountInternalGetLinkedBankAccountDocument, baseOptions);
}
export function useLinkBankAccountInternalGetLinkedBankAccountLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    ApolloTypes.LinkBankAccountInternalGetLinkedBankAccountQuery,
    ApolloTypes.LinkBankAccountInternalGetLinkedBankAccountQueryVariables
  >
) {
  return Apollo.useLazyQuery<
    ApolloTypes.LinkBankAccountInternalGetLinkedBankAccountQuery,
    ApolloTypes.LinkBankAccountInternalGetLinkedBankAccountQueryVariables
  >(LinkBankAccountInternalGetLinkedBankAccountDocument, baseOptions);
}
export type LinkBankAccountInternalGetLinkedBankAccountQueryHookResult = ReturnType<
  typeof useLinkBankAccountInternalGetLinkedBankAccountQuery
>;
export type LinkBankAccountInternalGetLinkedBankAccountLazyQueryHookResult = ReturnType<
  typeof useLinkBankAccountInternalGetLinkedBankAccountLazyQuery
>;
export type LinkBankAccountInternalGetLinkedBankAccountQueryResult = Apollo.QueryResult<
  ApolloTypes.LinkBankAccountInternalGetLinkedBankAccountQuery,
  ApolloTypes.LinkBankAccountInternalGetLinkedBankAccountQueryVariables
>;
export function refetchLinkBankAccountInternalGetLinkedBankAccountQuery(
  variables?: ApolloTypes.LinkBankAccountInternalGetLinkedBankAccountQueryVariables
) {
  return {
    query: LinkBankAccountInternalGetLinkedBankAccountDocument,
    variables
  };
}
export const OrderManagementGetOrderDocument = /* #__PURE__ */ gql`
  query orderManagementGetOrder($id: String!, $portfolioId: String!) {
    orderManagementGetOrder(id: $id, portfolioId: $portfolioId) {
      order {
        assetId
        assignedTo
        comment
        createdAt
        filled
        fullFillRequired
        goodTillCancel
        id
        metadata
        portfolioId
        priceLimit
        quantity
        spotPrice
        status
        updatedAt
      }
    }
  }
`;

/**
 * __useOrderManagementGetOrderQuery__
 *
 * To run a query within a React component, call `useOrderManagementGetOrderQuery` and pass it any options that fit your needs.
 * When your component renders, `useOrderManagementGetOrderQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useOrderManagementGetOrderQuery({
 *   variables: {
 *      id: // value for 'id'
 *      portfolioId: // value for 'portfolioId'
 *   },
 * });
 */
export function useOrderManagementGetOrderQuery(
  baseOptions?: Apollo.QueryHookOptions<
    ApolloTypes.OrderManagementGetOrderQuery,
    ApolloTypes.OrderManagementGetOrderQueryVariables
  >
) {
  return Apollo.useQuery<
    ApolloTypes.OrderManagementGetOrderQuery,
    ApolloTypes.OrderManagementGetOrderQueryVariables
  >(OrderManagementGetOrderDocument, baseOptions);
}
export function useOrderManagementGetOrderLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    ApolloTypes.OrderManagementGetOrderQuery,
    ApolloTypes.OrderManagementGetOrderQueryVariables
  >
) {
  return Apollo.useLazyQuery<
    ApolloTypes.OrderManagementGetOrderQuery,
    ApolloTypes.OrderManagementGetOrderQueryVariables
  >(OrderManagementGetOrderDocument, baseOptions);
}
export type OrderManagementGetOrderQueryHookResult = ReturnType<
  typeof useOrderManagementGetOrderQuery
>;
export type OrderManagementGetOrderLazyQueryHookResult = ReturnType<
  typeof useOrderManagementGetOrderLazyQuery
>;
export type OrderManagementGetOrderQueryResult = Apollo.QueryResult<
  ApolloTypes.OrderManagementGetOrderQuery,
  ApolloTypes.OrderManagementGetOrderQueryVariables
>;
export function refetchOrderManagementGetOrderQuery(
  variables?: ApolloTypes.OrderManagementGetOrderQueryVariables
) {
  return { query: OrderManagementGetOrderDocument, variables };
}
export const OrderManagementGetOrdersDocument = /* #__PURE__ */ gql`
  query orderManagementGetOrders($portfolioId: String!) {
    orderManagementGetOrders(portfolioId: $portfolioId) {
      orders {
        assetId
        assignedTo
        comment
        createdAt
        filled
        fullFillRequired
        goodTillCancel
        id
        metadata
        portfolioId
        priceLimit
        quantity
        spotPrice
        status
        updatedAt
      }
    }
  }
`;

/**
 * __useOrderManagementGetOrdersQuery__
 *
 * To run a query within a React component, call `useOrderManagementGetOrdersQuery` and pass it any options that fit your needs.
 * When your component renders, `useOrderManagementGetOrdersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useOrderManagementGetOrdersQuery({
 *   variables: {
 *      portfolioId: // value for 'portfolioId'
 *   },
 * });
 */
export function useOrderManagementGetOrdersQuery(
  baseOptions?: Apollo.QueryHookOptions<
    ApolloTypes.OrderManagementGetOrdersQuery,
    ApolloTypes.OrderManagementGetOrdersQueryVariables
  >
) {
  return Apollo.useQuery<
    ApolloTypes.OrderManagementGetOrdersQuery,
    ApolloTypes.OrderManagementGetOrdersQueryVariables
  >(OrderManagementGetOrdersDocument, baseOptions);
}
export function useOrderManagementGetOrdersLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    ApolloTypes.OrderManagementGetOrdersQuery,
    ApolloTypes.OrderManagementGetOrdersQueryVariables
  >
) {
  return Apollo.useLazyQuery<
    ApolloTypes.OrderManagementGetOrdersQuery,
    ApolloTypes.OrderManagementGetOrdersQueryVariables
  >(OrderManagementGetOrdersDocument, baseOptions);
}
export type OrderManagementGetOrdersQueryHookResult = ReturnType<
  typeof useOrderManagementGetOrdersQuery
>;
export type OrderManagementGetOrdersLazyQueryHookResult = ReturnType<
  typeof useOrderManagementGetOrdersLazyQuery
>;
export type OrderManagementGetOrdersQueryResult = Apollo.QueryResult<
  ApolloTypes.OrderManagementGetOrdersQuery,
  ApolloTypes.OrderManagementGetOrdersQueryVariables
>;
export function refetchOrderManagementGetOrdersQuery(
  variables?: ApolloTypes.OrderManagementGetOrdersQueryVariables
) {
  return { query: OrderManagementGetOrdersDocument, variables };
}
export const PositionManagementGetCashBalanceDocument = /* #__PURE__ */ gql`
  query positionManagementGetCashBalance($accountNumber: String!) {
    positionManagementGetCashBalance(accountNumber: $accountNumber) {
      balance {
        accountNumber
        quantity
        settled
        unsettled
      }
    }
  }
`;

/**
 * __usePositionManagementGetCashBalanceQuery__
 *
 * To run a query within a React component, call `usePositionManagementGetCashBalanceQuery` and pass it any options that fit your needs.
 * When your component renders, `usePositionManagementGetCashBalanceQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePositionManagementGetCashBalanceQuery({
 *   variables: {
 *      accountNumber: // value for 'accountNumber'
 *   },
 * });
 */
export function usePositionManagementGetCashBalanceQuery(
  baseOptions?: Apollo.QueryHookOptions<
    ApolloTypes.PositionManagementGetCashBalanceQuery,
    ApolloTypes.PositionManagementGetCashBalanceQueryVariables
  >
) {
  return Apollo.useQuery<
    ApolloTypes.PositionManagementGetCashBalanceQuery,
    ApolloTypes.PositionManagementGetCashBalanceQueryVariables
  >(PositionManagementGetCashBalanceDocument, baseOptions);
}
export function usePositionManagementGetCashBalanceLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    ApolloTypes.PositionManagementGetCashBalanceQuery,
    ApolloTypes.PositionManagementGetCashBalanceQueryVariables
  >
) {
  return Apollo.useLazyQuery<
    ApolloTypes.PositionManagementGetCashBalanceQuery,
    ApolloTypes.PositionManagementGetCashBalanceQueryVariables
  >(PositionManagementGetCashBalanceDocument, baseOptions);
}
export type PositionManagementGetCashBalanceQueryHookResult = ReturnType<
  typeof usePositionManagementGetCashBalanceQuery
>;
export type PositionManagementGetCashBalanceLazyQueryHookResult = ReturnType<
  typeof usePositionManagementGetCashBalanceLazyQuery
>;
export type PositionManagementGetCashBalanceQueryResult = Apollo.QueryResult<
  ApolloTypes.PositionManagementGetCashBalanceQuery,
  ApolloTypes.PositionManagementGetCashBalanceQueryVariables
>;
export function refetchPositionManagementGetCashBalanceQuery(
  variables?: ApolloTypes.PositionManagementGetCashBalanceQueryVariables
) {
  return {
    query: PositionManagementGetCashBalanceDocument,
    variables
  };
}
export const PositionManagementGetExternalPortfolioDocument = /* #__PURE__ */ gql`
  query positionManagementGetExternalPortfolio($id: String!) {
    positionManagementGetExternalPortfolio(id: $id) {
      portfolio {
        accountNumber
        app
        createdAt
        currency
        description
        id
        metadata
        name
        positions {
          assetId
          costBasis
          createdAt
          id
          metadata
          portfolioId
          quantity
          settled
          tradeDate
          unsettled
          updatedAt
        }
        status
        updatedAt
      }
    }
  }
`;

/**
 * __usePositionManagementGetExternalPortfolioQuery__
 *
 * To run a query within a React component, call `usePositionManagementGetExternalPortfolioQuery` and pass it any options that fit your needs.
 * When your component renders, `usePositionManagementGetExternalPortfolioQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePositionManagementGetExternalPortfolioQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function usePositionManagementGetExternalPortfolioQuery(
  baseOptions?: Apollo.QueryHookOptions<
    ApolloTypes.PositionManagementGetExternalPortfolioQuery,
    ApolloTypes.PositionManagementGetExternalPortfolioQueryVariables
  >
) {
  return Apollo.useQuery<
    ApolloTypes.PositionManagementGetExternalPortfolioQuery,
    ApolloTypes.PositionManagementGetExternalPortfolioQueryVariables
  >(PositionManagementGetExternalPortfolioDocument, baseOptions);
}
export function usePositionManagementGetExternalPortfolioLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    ApolloTypes.PositionManagementGetExternalPortfolioQuery,
    ApolloTypes.PositionManagementGetExternalPortfolioQueryVariables
  >
) {
  return Apollo.useLazyQuery<
    ApolloTypes.PositionManagementGetExternalPortfolioQuery,
    ApolloTypes.PositionManagementGetExternalPortfolioQueryVariables
  >(PositionManagementGetExternalPortfolioDocument, baseOptions);
}
export type PositionManagementGetExternalPortfolioQueryHookResult = ReturnType<
  typeof usePositionManagementGetExternalPortfolioQuery
>;
export type PositionManagementGetExternalPortfolioLazyQueryHookResult = ReturnType<
  typeof usePositionManagementGetExternalPortfolioLazyQuery
>;
export type PositionManagementGetExternalPortfolioQueryResult = Apollo.QueryResult<
  ApolloTypes.PositionManagementGetExternalPortfolioQuery,
  ApolloTypes.PositionManagementGetExternalPortfolioQueryVariables
>;
export function refetchPositionManagementGetExternalPortfolioQuery(
  variables?: ApolloTypes.PositionManagementGetExternalPortfolioQueryVariables
) {
  return {
    query: PositionManagementGetExternalPortfolioDocument,
    variables
  };
}
export const PositionManagementGetExternalPortfoliosDocument = /* #__PURE__ */ gql`
  query positionManagementGetExternalPortfolios {
    positionManagementGetExternalPortfolios {
      portfolios {
        accountNumber
        app
        createdAt
        currency
        description
        id
        metadata
        name
        positions {
          assetId
          costBasis
          createdAt
          id
          metadata
          portfolioId
          quantity
          settled
          tradeDate
          unsettled
          updatedAt
        }
        status
        updatedAt
      }
    }
  }
`;

/**
 * __usePositionManagementGetExternalPortfoliosQuery__
 *
 * To run a query within a React component, call `usePositionManagementGetExternalPortfoliosQuery` and pass it any options that fit your needs.
 * When your component renders, `usePositionManagementGetExternalPortfoliosQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePositionManagementGetExternalPortfoliosQuery({
 *   variables: {
 *   },
 * });
 */
export function usePositionManagementGetExternalPortfoliosQuery(
  baseOptions?: Apollo.QueryHookOptions<
    ApolloTypes.PositionManagementGetExternalPortfoliosQuery,
    ApolloTypes.PositionManagementGetExternalPortfoliosQueryVariables
  >
) {
  return Apollo.useQuery<
    ApolloTypes.PositionManagementGetExternalPortfoliosQuery,
    ApolloTypes.PositionManagementGetExternalPortfoliosQueryVariables
  >(PositionManagementGetExternalPortfoliosDocument, baseOptions);
}
export function usePositionManagementGetExternalPortfoliosLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    ApolloTypes.PositionManagementGetExternalPortfoliosQuery,
    ApolloTypes.PositionManagementGetExternalPortfoliosQueryVariables
  >
) {
  return Apollo.useLazyQuery<
    ApolloTypes.PositionManagementGetExternalPortfoliosQuery,
    ApolloTypes.PositionManagementGetExternalPortfoliosQueryVariables
  >(PositionManagementGetExternalPortfoliosDocument, baseOptions);
}
export type PositionManagementGetExternalPortfoliosQueryHookResult = ReturnType<
  typeof usePositionManagementGetExternalPortfoliosQuery
>;
export type PositionManagementGetExternalPortfoliosLazyQueryHookResult = ReturnType<
  typeof usePositionManagementGetExternalPortfoliosLazyQuery
>;
export type PositionManagementGetExternalPortfoliosQueryResult = Apollo.QueryResult<
  ApolloTypes.PositionManagementGetExternalPortfoliosQuery,
  ApolloTypes.PositionManagementGetExternalPortfoliosQueryVariables
>;
export function refetchPositionManagementGetExternalPortfoliosQuery(
  variables?: ApolloTypes.PositionManagementGetExternalPortfoliosQueryVariables
) {
  return {
    query: PositionManagementGetExternalPortfoliosDocument,
    variables
  };
}
export const PositionManagementGetPortfolioDocument = /* #__PURE__ */ gql`
  query positionManagementGetPortfolio($id: String!) {
    positionManagementGetPortfolio(id: $id) {
      portfolio {
        accountNumber
        app
        createdAt
        currency
        description
        id
        metadata
        name
        positions {
          assetId
          costBasis
          createdAt
          id
          metadata
          portfolioId
          quantity
          settled
          tradeDate
          unsettled
          updatedAt
        }
        status
        updatedAt
      }
    }
  }
`;

/**
 * __usePositionManagementGetPortfolioQuery__
 *
 * To run a query within a React component, call `usePositionManagementGetPortfolioQuery` and pass it any options that fit your needs.
 * When your component renders, `usePositionManagementGetPortfolioQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePositionManagementGetPortfolioQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function usePositionManagementGetPortfolioQuery(
  baseOptions?: Apollo.QueryHookOptions<
    ApolloTypes.PositionManagementGetPortfolioQuery,
    ApolloTypes.PositionManagementGetPortfolioQueryVariables
  >
) {
  return Apollo.useQuery<
    ApolloTypes.PositionManagementGetPortfolioQuery,
    ApolloTypes.PositionManagementGetPortfolioQueryVariables
  >(PositionManagementGetPortfolioDocument, baseOptions);
}
export function usePositionManagementGetPortfolioLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    ApolloTypes.PositionManagementGetPortfolioQuery,
    ApolloTypes.PositionManagementGetPortfolioQueryVariables
  >
) {
  return Apollo.useLazyQuery<
    ApolloTypes.PositionManagementGetPortfolioQuery,
    ApolloTypes.PositionManagementGetPortfolioQueryVariables
  >(PositionManagementGetPortfolioDocument, baseOptions);
}
export type PositionManagementGetPortfolioQueryHookResult = ReturnType<
  typeof usePositionManagementGetPortfolioQuery
>;
export type PositionManagementGetPortfolioLazyQueryHookResult = ReturnType<
  typeof usePositionManagementGetPortfolioLazyQuery
>;
export type PositionManagementGetPortfolioQueryResult = Apollo.QueryResult<
  ApolloTypes.PositionManagementGetPortfolioQuery,
  ApolloTypes.PositionManagementGetPortfolioQueryVariables
>;
export function refetchPositionManagementGetPortfolioQuery(
  variables?: ApolloTypes.PositionManagementGetPortfolioQueryVariables
) {
  return {
    query: PositionManagementGetPortfolioDocument,
    variables
  };
}
export const PositionManagementGetPortfoliosDocument = /* #__PURE__ */ gql`
  query positionManagementGetPortfolios {
    positionManagementGetPortfolios {
      portfolios {
        accountNumber
        app
        createdAt
        currency
        description
        id
        metadata
        name
        positions {
          assetId
          costBasis
          createdAt
          id
          metadata
          portfolioId
          quantity
          settled
          tradeDate
          unsettled
          updatedAt
        }
        status
        updatedAt
      }
    }
  }
`;

/**
 * __usePositionManagementGetPortfoliosQuery__
 *
 * To run a query within a React component, call `usePositionManagementGetPortfoliosQuery` and pass it any options that fit your needs.
 * When your component renders, `usePositionManagementGetPortfoliosQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePositionManagementGetPortfoliosQuery({
 *   variables: {
 *   },
 * });
 */
export function usePositionManagementGetPortfoliosQuery(
  baseOptions?: Apollo.QueryHookOptions<
    ApolloTypes.PositionManagementGetPortfoliosQuery,
    ApolloTypes.PositionManagementGetPortfoliosQueryVariables
  >
) {
  return Apollo.useQuery<
    ApolloTypes.PositionManagementGetPortfoliosQuery,
    ApolloTypes.PositionManagementGetPortfoliosQueryVariables
  >(PositionManagementGetPortfoliosDocument, baseOptions);
}
export function usePositionManagementGetPortfoliosLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    ApolloTypes.PositionManagementGetPortfoliosQuery,
    ApolloTypes.PositionManagementGetPortfoliosQueryVariables
  >
) {
  return Apollo.useLazyQuery<
    ApolloTypes.PositionManagementGetPortfoliosQuery,
    ApolloTypes.PositionManagementGetPortfoliosQueryVariables
  >(PositionManagementGetPortfoliosDocument, baseOptions);
}
export type PositionManagementGetPortfoliosQueryHookResult = ReturnType<
  typeof usePositionManagementGetPortfoliosQuery
>;
export type PositionManagementGetPortfoliosLazyQueryHookResult = ReturnType<
  typeof usePositionManagementGetPortfoliosLazyQuery
>;
export type PositionManagementGetPortfoliosQueryResult = Apollo.QueryResult<
  ApolloTypes.PositionManagementGetPortfoliosQuery,
  ApolloTypes.PositionManagementGetPortfoliosQueryVariables
>;
export function refetchPositionManagementGetPortfoliosQuery(
  variables?: ApolloTypes.PositionManagementGetPortfoliosQueryVariables
) {
  return {
    query: PositionManagementGetPortfoliosDocument,
    variables
  };
}
export const PositionManagementGetPortfoliosByAccountDocument = /* #__PURE__ */ gql`
  query positionManagementGetPortfoliosByAccount($accountNumber: String!) {
    positionManagementGetPortfoliosByAccount(accountNumber: $accountNumber) {
      portfolios {
        accountNumber
        app
        createdAt
        currency
        description
        id
        metadata
        name
        positions {
          assetId
          costBasis
          createdAt
          id
          metadata
          portfolioId
          quantity
          settled
          tradeDate
          unsettled
          updatedAt
        }
        status
        updatedAt
      }
    }
  }
`;

/**
 * __usePositionManagementGetPortfoliosByAccountQuery__
 *
 * To run a query within a React component, call `usePositionManagementGetPortfoliosByAccountQuery` and pass it any options that fit your needs.
 * When your component renders, `usePositionManagementGetPortfoliosByAccountQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePositionManagementGetPortfoliosByAccountQuery({
 *   variables: {
 *      accountNumber: // value for 'accountNumber'
 *   },
 * });
 */
export function usePositionManagementGetPortfoliosByAccountQuery(
  baseOptions?: Apollo.QueryHookOptions<
    ApolloTypes.PositionManagementGetPortfoliosByAccountQuery,
    ApolloTypes.PositionManagementGetPortfoliosByAccountQueryVariables
  >
) {
  return Apollo.useQuery<
    ApolloTypes.PositionManagementGetPortfoliosByAccountQuery,
    ApolloTypes.PositionManagementGetPortfoliosByAccountQueryVariables
  >(PositionManagementGetPortfoliosByAccountDocument, baseOptions);
}
export function usePositionManagementGetPortfoliosByAccountLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    ApolloTypes.PositionManagementGetPortfoliosByAccountQuery,
    ApolloTypes.PositionManagementGetPortfoliosByAccountQueryVariables
  >
) {
  return Apollo.useLazyQuery<
    ApolloTypes.PositionManagementGetPortfoliosByAccountQuery,
    ApolloTypes.PositionManagementGetPortfoliosByAccountQueryVariables
  >(PositionManagementGetPortfoliosByAccountDocument, baseOptions);
}
export type PositionManagementGetPortfoliosByAccountQueryHookResult = ReturnType<
  typeof usePositionManagementGetPortfoliosByAccountQuery
>;
export type PositionManagementGetPortfoliosByAccountLazyQueryHookResult = ReturnType<
  typeof usePositionManagementGetPortfoliosByAccountLazyQuery
>;
export type PositionManagementGetPortfoliosByAccountQueryResult = Apollo.QueryResult<
  ApolloTypes.PositionManagementGetPortfoliosByAccountQuery,
  ApolloTypes.PositionManagementGetPortfoliosByAccountQueryVariables
>;
export function refetchPositionManagementGetPortfoliosByAccountQuery(
  variables?: ApolloTypes.PositionManagementGetPortfoliosByAccountQueryVariables
) {
  return {
    query: PositionManagementGetPortfoliosByAccountDocument,
    variables
  };
}
export const PositionManagementGetPositionsByAccountDocument = /* #__PURE__ */ gql`
  query positionManagementGetPositionsByAccount($accountNumber: String!) {
    positionManagementGetPositionsByAccount(accountNumber: $accountNumber) {
      positions {
        assetId
        quantity
        settled
        unsettled
      }
    }
  }
`;

/**
 * __usePositionManagementGetPositionsByAccountQuery__
 *
 * To run a query within a React component, call `usePositionManagementGetPositionsByAccountQuery` and pass it any options that fit your needs.
 * When your component renders, `usePositionManagementGetPositionsByAccountQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePositionManagementGetPositionsByAccountQuery({
 *   variables: {
 *      accountNumber: // value for 'accountNumber'
 *   },
 * });
 */
export function usePositionManagementGetPositionsByAccountQuery(
  baseOptions?: Apollo.QueryHookOptions<
    ApolloTypes.PositionManagementGetPositionsByAccountQuery,
    ApolloTypes.PositionManagementGetPositionsByAccountQueryVariables
  >
) {
  return Apollo.useQuery<
    ApolloTypes.PositionManagementGetPositionsByAccountQuery,
    ApolloTypes.PositionManagementGetPositionsByAccountQueryVariables
  >(PositionManagementGetPositionsByAccountDocument, baseOptions);
}
export function usePositionManagementGetPositionsByAccountLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    ApolloTypes.PositionManagementGetPositionsByAccountQuery,
    ApolloTypes.PositionManagementGetPositionsByAccountQueryVariables
  >
) {
  return Apollo.useLazyQuery<
    ApolloTypes.PositionManagementGetPositionsByAccountQuery,
    ApolloTypes.PositionManagementGetPositionsByAccountQueryVariables
  >(PositionManagementGetPositionsByAccountDocument, baseOptions);
}
export type PositionManagementGetPositionsByAccountQueryHookResult = ReturnType<
  typeof usePositionManagementGetPositionsByAccountQuery
>;
export type PositionManagementGetPositionsByAccountLazyQueryHookResult = ReturnType<
  typeof usePositionManagementGetPositionsByAccountLazyQuery
>;
export type PositionManagementGetPositionsByAccountQueryResult = Apollo.QueryResult<
  ApolloTypes.PositionManagementGetPositionsByAccountQuery,
  ApolloTypes.PositionManagementGetPositionsByAccountQueryVariables
>;
export function refetchPositionManagementGetPositionsByAccountQuery(
  variables?: ApolloTypes.PositionManagementGetPositionsByAccountQueryVariables
) {
  return {
    query: PositionManagementGetPositionsByAccountDocument,
    variables
  };
}
export const PositionManagementGetTemporaryPortfolioDocument = /* #__PURE__ */ gql`
  query positionManagementGetTemporaryPortfolio($id: String!) {
    positionManagementGetTemporaryPortfolio(id: $id) {
      portfolio {
        accountNumber
        app
        createdAt
        currency
        description
        id
        metadata
        name
        positions {
          assetId
          costBasis
          createdAt
          id
          metadata
          portfolioId
          quantity
          settled
          tradeDate
          unsettled
          updatedAt
        }
        status
        updatedAt
      }
    }
  }
`;

/**
 * __usePositionManagementGetTemporaryPortfolioQuery__
 *
 * To run a query within a React component, call `usePositionManagementGetTemporaryPortfolioQuery` and pass it any options that fit your needs.
 * When your component renders, `usePositionManagementGetTemporaryPortfolioQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePositionManagementGetTemporaryPortfolioQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function usePositionManagementGetTemporaryPortfolioQuery(
  baseOptions?: Apollo.QueryHookOptions<
    ApolloTypes.PositionManagementGetTemporaryPortfolioQuery,
    ApolloTypes.PositionManagementGetTemporaryPortfolioQueryVariables
  >
) {
  return Apollo.useQuery<
    ApolloTypes.PositionManagementGetTemporaryPortfolioQuery,
    ApolloTypes.PositionManagementGetTemporaryPortfolioQueryVariables
  >(PositionManagementGetTemporaryPortfolioDocument, baseOptions);
}
export function usePositionManagementGetTemporaryPortfolioLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    ApolloTypes.PositionManagementGetTemporaryPortfolioQuery,
    ApolloTypes.PositionManagementGetTemporaryPortfolioQueryVariables
  >
) {
  return Apollo.useLazyQuery<
    ApolloTypes.PositionManagementGetTemporaryPortfolioQuery,
    ApolloTypes.PositionManagementGetTemporaryPortfolioQueryVariables
  >(PositionManagementGetTemporaryPortfolioDocument, baseOptions);
}
export type PositionManagementGetTemporaryPortfolioQueryHookResult = ReturnType<
  typeof usePositionManagementGetTemporaryPortfolioQuery
>;
export type PositionManagementGetTemporaryPortfolioLazyQueryHookResult = ReturnType<
  typeof usePositionManagementGetTemporaryPortfolioLazyQuery
>;
export type PositionManagementGetTemporaryPortfolioQueryResult = Apollo.QueryResult<
  ApolloTypes.PositionManagementGetTemporaryPortfolioQuery,
  ApolloTypes.PositionManagementGetTemporaryPortfolioQueryVariables
>;
export function refetchPositionManagementGetTemporaryPortfolioQuery(
  variables?: ApolloTypes.PositionManagementGetTemporaryPortfolioQueryVariables
) {
  return {
    query: PositionManagementGetTemporaryPortfolioDocument,
    variables
  };
}
export const PositionManagementGetTradeDocument = /* #__PURE__ */ gql`
  query positionManagementGetTrade($id: String!, $portfolioId: String!) {
    positionManagementGetTrade(id: $id, portfolioId: $portfolioId) {
      ledgerEntries {
        accountNumber
        assetId
        comment
        counterPartyId
        createdAt
        fee
        id
        metadata
        orderId
        portfolioId
        quantity
        relatedPositions {
          positionId
          quantity
        }
        status
        tradeId
        tradePrice
        updatedAt
      }
    }
  }
`;

/**
 * __usePositionManagementGetTradeQuery__
 *
 * To run a query within a React component, call `usePositionManagementGetTradeQuery` and pass it any options that fit your needs.
 * When your component renders, `usePositionManagementGetTradeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePositionManagementGetTradeQuery({
 *   variables: {
 *      id: // value for 'id'
 *      portfolioId: // value for 'portfolioId'
 *   },
 * });
 */
export function usePositionManagementGetTradeQuery(
  baseOptions?: Apollo.QueryHookOptions<
    ApolloTypes.PositionManagementGetTradeQuery,
    ApolloTypes.PositionManagementGetTradeQueryVariables
  >
) {
  return Apollo.useQuery<
    ApolloTypes.PositionManagementGetTradeQuery,
    ApolloTypes.PositionManagementGetTradeQueryVariables
  >(PositionManagementGetTradeDocument, baseOptions);
}
export function usePositionManagementGetTradeLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    ApolloTypes.PositionManagementGetTradeQuery,
    ApolloTypes.PositionManagementGetTradeQueryVariables
  >
) {
  return Apollo.useLazyQuery<
    ApolloTypes.PositionManagementGetTradeQuery,
    ApolloTypes.PositionManagementGetTradeQueryVariables
  >(PositionManagementGetTradeDocument, baseOptions);
}
export type PositionManagementGetTradeQueryHookResult = ReturnType<
  typeof usePositionManagementGetTradeQuery
>;
export type PositionManagementGetTradeLazyQueryHookResult = ReturnType<
  typeof usePositionManagementGetTradeLazyQuery
>;
export type PositionManagementGetTradeQueryResult = Apollo.QueryResult<
  ApolloTypes.PositionManagementGetTradeQuery,
  ApolloTypes.PositionManagementGetTradeQueryVariables
>;
export function refetchPositionManagementGetTradeQuery(
  variables?: ApolloTypes.PositionManagementGetTradeQueryVariables
) {
  return { query: PositionManagementGetTradeDocument, variables };
}
export const PositionManagementGetTradesDocument = /* #__PURE__ */ gql`
  query positionManagementGetTrades($portfolioId: String!) {
    positionManagementGetTrades(portfolioId: $portfolioId) {
      ledgerEntries {
        accountNumber
        assetId
        comment
        counterPartyId
        createdAt
        fee
        id
        metadata
        orderId
        portfolioId
        quantity
        relatedPositions {
          positionId
          quantity
        }
        status
        tradeId
        tradePrice
        updatedAt
      }
    }
  }
`;

/**
 * __usePositionManagementGetTradesQuery__
 *
 * To run a query within a React component, call `usePositionManagementGetTradesQuery` and pass it any options that fit your needs.
 * When your component renders, `usePositionManagementGetTradesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePositionManagementGetTradesQuery({
 *   variables: {
 *      portfolioId: // value for 'portfolioId'
 *   },
 * });
 */
export function usePositionManagementGetTradesQuery(
  baseOptions?: Apollo.QueryHookOptions<
    ApolloTypes.PositionManagementGetTradesQuery,
    ApolloTypes.PositionManagementGetTradesQueryVariables
  >
) {
  return Apollo.useQuery<
    ApolloTypes.PositionManagementGetTradesQuery,
    ApolloTypes.PositionManagementGetTradesQueryVariables
  >(PositionManagementGetTradesDocument, baseOptions);
}
export function usePositionManagementGetTradesLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    ApolloTypes.PositionManagementGetTradesQuery,
    ApolloTypes.PositionManagementGetTradesQueryVariables
  >
) {
  return Apollo.useLazyQuery<
    ApolloTypes.PositionManagementGetTradesQuery,
    ApolloTypes.PositionManagementGetTradesQueryVariables
  >(PositionManagementGetTradesDocument, baseOptions);
}
export type PositionManagementGetTradesQueryHookResult = ReturnType<
  typeof usePositionManagementGetTradesQuery
>;
export type PositionManagementGetTradesLazyQueryHookResult = ReturnType<
  typeof usePositionManagementGetTradesLazyQuery
>;
export type PositionManagementGetTradesQueryResult = Apollo.QueryResult<
  ApolloTypes.PositionManagementGetTradesQuery,
  ApolloTypes.PositionManagementGetTradesQueryVariables
>;
export function refetchPositionManagementGetTradesQuery(
  variables?: ApolloTypes.PositionManagementGetTradesQueryVariables
) {
  return { query: PositionManagementGetTradesDocument, variables };
}
export const PositionManagementGetTradesByAccountDocument = /* #__PURE__ */ gql`
  query positionManagementGetTradesByAccount($accountNumber: String!) {
    positionManagementGetTradesByAccount(accountNumber: $accountNumber) {
      trades {
        accountNumber
        assetId
        comment
        counterPartyId
        createdAt
        fee
        id
        metadata
        orderId
        portfolioId
        quantity
        relatedPositions {
          positionId
          quantity
        }
        status
        tradeId
        tradePrice
        updatedAt
      }
    }
  }
`;

/**
 * __usePositionManagementGetTradesByAccountQuery__
 *
 * To run a query within a React component, call `usePositionManagementGetTradesByAccountQuery` and pass it any options that fit your needs.
 * When your component renders, `usePositionManagementGetTradesByAccountQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePositionManagementGetTradesByAccountQuery({
 *   variables: {
 *      accountNumber: // value for 'accountNumber'
 *   },
 * });
 */
export function usePositionManagementGetTradesByAccountQuery(
  baseOptions?: Apollo.QueryHookOptions<
    ApolloTypes.PositionManagementGetTradesByAccountQuery,
    ApolloTypes.PositionManagementGetTradesByAccountQueryVariables
  >
) {
  return Apollo.useQuery<
    ApolloTypes.PositionManagementGetTradesByAccountQuery,
    ApolloTypes.PositionManagementGetTradesByAccountQueryVariables
  >(PositionManagementGetTradesByAccountDocument, baseOptions);
}
export function usePositionManagementGetTradesByAccountLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    ApolloTypes.PositionManagementGetTradesByAccountQuery,
    ApolloTypes.PositionManagementGetTradesByAccountQueryVariables
  >
) {
  return Apollo.useLazyQuery<
    ApolloTypes.PositionManagementGetTradesByAccountQuery,
    ApolloTypes.PositionManagementGetTradesByAccountQueryVariables
  >(PositionManagementGetTradesByAccountDocument, baseOptions);
}
export type PositionManagementGetTradesByAccountQueryHookResult = ReturnType<
  typeof usePositionManagementGetTradesByAccountQuery
>;
export type PositionManagementGetTradesByAccountLazyQueryHookResult = ReturnType<
  typeof usePositionManagementGetTradesByAccountLazyQuery
>;
export type PositionManagementGetTradesByAccountQueryResult = Apollo.QueryResult<
  ApolloTypes.PositionManagementGetTradesByAccountQuery,
  ApolloTypes.PositionManagementGetTradesByAccountQueryVariables
>;
export function refetchPositionManagementGetTradesByAccountQuery(
  variables?: ApolloTypes.PositionManagementGetTradesByAccountQueryVariables
) {
  return {
    query: PositionManagementGetTradesByAccountDocument,
    variables
  };
}
export const PositionManagementGetTransferDocument = /* #__PURE__ */ gql`
  query positionManagementGetTransfer(
    $accountNumber: String!
    $transferId: String!
  ) {
    positionManagementGetTransfer(
      accountNumber: $accountNumber
      transferId: $transferId
    ) {
      transfer {
        amount
        createdAt
        currency
        direction
        externalEntity {
          externalEntityId
          externalEntityType
        }
        id
        investorId
        ledgerId
        linkedBankAccountId
        metadata
        portfolioId
        status
        transferMethod
        updatedAt
      }
    }
  }
`;

/**
 * __usePositionManagementGetTransferQuery__
 *
 * To run a query within a React component, call `usePositionManagementGetTransferQuery` and pass it any options that fit your needs.
 * When your component renders, `usePositionManagementGetTransferQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePositionManagementGetTransferQuery({
 *   variables: {
 *      accountNumber: // value for 'accountNumber'
 *      transferId: // value for 'transferId'
 *   },
 * });
 */
export function usePositionManagementGetTransferQuery(
  baseOptions?: Apollo.QueryHookOptions<
    ApolloTypes.PositionManagementGetTransferQuery,
    ApolloTypes.PositionManagementGetTransferQueryVariables
  >
) {
  return Apollo.useQuery<
    ApolloTypes.PositionManagementGetTransferQuery,
    ApolloTypes.PositionManagementGetTransferQueryVariables
  >(PositionManagementGetTransferDocument, baseOptions);
}
export function usePositionManagementGetTransferLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    ApolloTypes.PositionManagementGetTransferQuery,
    ApolloTypes.PositionManagementGetTransferQueryVariables
  >
) {
  return Apollo.useLazyQuery<
    ApolloTypes.PositionManagementGetTransferQuery,
    ApolloTypes.PositionManagementGetTransferQueryVariables
  >(PositionManagementGetTransferDocument, baseOptions);
}
export type PositionManagementGetTransferQueryHookResult = ReturnType<
  typeof usePositionManagementGetTransferQuery
>;
export type PositionManagementGetTransferLazyQueryHookResult = ReturnType<
  typeof usePositionManagementGetTransferLazyQuery
>;
export type PositionManagementGetTransferQueryResult = Apollo.QueryResult<
  ApolloTypes.PositionManagementGetTransferQuery,
  ApolloTypes.PositionManagementGetTransferQueryVariables
>;
export function refetchPositionManagementGetTransferQuery(
  variables?: ApolloTypes.PositionManagementGetTransferQueryVariables
) {
  return { query: PositionManagementGetTransferDocument, variables };
}
export const PositionManagementGetTransfersDocument = /* #__PURE__ */ gql`
  query positionManagementGetTransfers($accountNumber: String!) {
    positionManagementGetTransfers(accountNumber: $accountNumber) {
      transfers {
        accountNumber
        amount
        createdAt
        direction
        linkedBankAccountId
        status
        transferId
        transferMethod
        transferNumber
        updatedAt
      }
    }
  }
`;

/**
 * __usePositionManagementGetTransfersQuery__
 *
 * To run a query within a React component, call `usePositionManagementGetTransfersQuery` and pass it any options that fit your needs.
 * When your component renders, `usePositionManagementGetTransfersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePositionManagementGetTransfersQuery({
 *   variables: {
 *      accountNumber: // value for 'accountNumber'
 *   },
 * });
 */
export function usePositionManagementGetTransfersQuery(
  baseOptions?: Apollo.QueryHookOptions<
    ApolloTypes.PositionManagementGetTransfersQuery,
    ApolloTypes.PositionManagementGetTransfersQueryVariables
  >
) {
  return Apollo.useQuery<
    ApolloTypes.PositionManagementGetTransfersQuery,
    ApolloTypes.PositionManagementGetTransfersQueryVariables
  >(PositionManagementGetTransfersDocument, baseOptions);
}
export function usePositionManagementGetTransfersLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    ApolloTypes.PositionManagementGetTransfersQuery,
    ApolloTypes.PositionManagementGetTransfersQueryVariables
  >
) {
  return Apollo.useLazyQuery<
    ApolloTypes.PositionManagementGetTransfersQuery,
    ApolloTypes.PositionManagementGetTransfersQueryVariables
  >(PositionManagementGetTransfersDocument, baseOptions);
}
export type PositionManagementGetTransfersQueryHookResult = ReturnType<
  typeof usePositionManagementGetTransfersQuery
>;
export type PositionManagementGetTransfersLazyQueryHookResult = ReturnType<
  typeof usePositionManagementGetTransfersLazyQuery
>;
export type PositionManagementGetTransfersQueryResult = Apollo.QueryResult<
  ApolloTypes.PositionManagementGetTransfersQuery,
  ApolloTypes.PositionManagementGetTransfersQueryVariables
>;
export function refetchPositionManagementGetTransfersQuery(
  variables?: ApolloTypes.PositionManagementGetTransfersQueryVariables
) {
  return {
    query: PositionManagementGetTransfersDocument,
    variables
  };
}
export const PricesPriceAssetDocument = /* #__PURE__ */ gql`
  query pricesPriceAsset($priceAssetRequestInput: PriceAssetRequestInput) {
    pricesPriceAsset(priceAssetRequestInput: $priceAssetRequestInput) {
      prices {
        dateTime
        denominationIncrement
        minimumBalanceRemaining
        minimumDenomination
        price
        priceType
        size
        yieldToMaturity
        yieldToWorst
      }
    }
  }
`;

/**
 * __usePricesPriceAssetQuery__
 *
 * To run a query within a React component, call `usePricesPriceAssetQuery` and pass it any options that fit your needs.
 * When your component renders, `usePricesPriceAssetQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePricesPriceAssetQuery({
 *   variables: {
 *      priceAssetRequestInput: // value for 'priceAssetRequestInput'
 *   },
 * });
 */
export function usePricesPriceAssetQuery(
  baseOptions?: Apollo.QueryHookOptions<
    ApolloTypes.PricesPriceAssetQuery,
    ApolloTypes.PricesPriceAssetQueryVariables
  >
) {
  return Apollo.useQuery<
    ApolloTypes.PricesPriceAssetQuery,
    ApolloTypes.PricesPriceAssetQueryVariables
  >(PricesPriceAssetDocument, baseOptions);
}
export function usePricesPriceAssetLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    ApolloTypes.PricesPriceAssetQuery,
    ApolloTypes.PricesPriceAssetQueryVariables
  >
) {
  return Apollo.useLazyQuery<
    ApolloTypes.PricesPriceAssetQuery,
    ApolloTypes.PricesPriceAssetQueryVariables
  >(PricesPriceAssetDocument, baseOptions);
}
export type PricesPriceAssetQueryHookResult = ReturnType<
  typeof usePricesPriceAssetQuery
>;
export type PricesPriceAssetLazyQueryHookResult = ReturnType<
  typeof usePricesPriceAssetLazyQuery
>;
export type PricesPriceAssetQueryResult = Apollo.QueryResult<
  ApolloTypes.PricesPriceAssetQuery,
  ApolloTypes.PricesPriceAssetQueryVariables
>;
export function refetchPricesPriceAssetQuery(
  variables?: ApolloTypes.PricesPriceAssetQueryVariables
) {
  return { query: PricesPriceAssetDocument, variables };
}
export const RoverPortfolioAnalyzerAnalyzePortfolioDocument = /* #__PURE__ */ gql`
  query roverPortfolioAnalyzerAnalyzePortfolio(
    $analyzePortfolioRequestInput: AnalyzePortfolioRequestInput
    $enableEstimatedPerformance: Boolean
    $saveAs: String
  ) {
    roverPortfolioAnalyzerAnalyzePortfolio(
      analyzePortfolioRequestInput: $analyzePortfolioRequestInput
      enableEstimatedPerformance: $enableEstimatedPerformance
      saveAs: $saveAs
    ) {
      analysis {
        allocations {
          country
          currency
          datastreamSubtype {
            buckets {
              contributors {
                assetId
                percentOfNetAssetValue
                positionId
              }
              name
              percentOfNetAssetValue
            }
          }
          datastreamType {
            buckets {
              name
              percentOfNetAssetValue
            }
          }
          debtType {
            buckets {
              name
              percentOfNetAssetValue
            }
          }
          maturity {
            fiveToTenYears
            greaterThanThirtyYears
            lessThanOneYear
            oneToThreeYears
            other
            tenToTwentyYears
            threeToFiveYears
            twentyToThirtyYears
          }
          rating {
            investmentGrade {
              a
              aa
              aaa
              bbb
              total
            }
            nonInvestmentGrade {
              b
              bb
              c
              d
              nr
              total
            }
          }
          region {
            africaExNorthAfrica
            asiaPacificExJapan
            emergingMarketsAsia
            emergingMarketsEurope
            europeExUnitedKingdom
            japan
            latinAmerica
            middleEastNorthAfrica
            northAmericaExUnitedStates
            other
            unitedKingdom
            unitedStates
          }
          sector {
            agency
            communications
            consumerGoods
            energy
            financials
            manufacturing
            municipal
            other
            services
            sovereign
            supranational
            transportation
          }
        }
        createdAt
        currentCoupon
        duration
        esgScores {
          environmental
          governance
          social
          total
        }
        estimatedPerformance {
          averageMaximumDrawdown {
            averageValue
            rankedMaximumDrawdowns {
              endDate
              rank
              startDate
              value
            }
          }
          endDate
          estimatedMaximumDrawdown {
            endDate
            startDate
            value
          }
          startDate
          timeSeries {
            cumulativeReturn
            endDate
            periodReturn
            startDate
          }
        }
        expenseRatio
        id
        issuerConcentration
        metadata
        netAssetValue
        portfolioId
        risk
        spread
        updatedAt
        wealthProjections {
          date
          percentiles {
            cumulativeReturn
            nav
            percentile
          }
        }
        yearsToMaturity
        yield
        yieldContributions {
          assetId
          percentContribution
        }
      }
    }
  }
`;

/**
 * __useRoverPortfolioAnalyzerAnalyzePortfolioQuery__
 *
 * To run a query within a React component, call `useRoverPortfolioAnalyzerAnalyzePortfolioQuery` and pass it any options that fit your needs.
 * When your component renders, `useRoverPortfolioAnalyzerAnalyzePortfolioQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useRoverPortfolioAnalyzerAnalyzePortfolioQuery({
 *   variables: {
 *      analyzePortfolioRequestInput: // value for 'analyzePortfolioRequestInput'
 *      enableEstimatedPerformance: // value for 'enableEstimatedPerformance'
 *      saveAs: // value for 'saveAs'
 *   },
 * });
 */
export function useRoverPortfolioAnalyzerAnalyzePortfolioQuery(
  baseOptions?: Apollo.QueryHookOptions<
    ApolloTypes.RoverPortfolioAnalyzerAnalyzePortfolioQuery,
    ApolloTypes.RoverPortfolioAnalyzerAnalyzePortfolioQueryVariables
  >
) {
  return Apollo.useQuery<
    ApolloTypes.RoverPortfolioAnalyzerAnalyzePortfolioQuery,
    ApolloTypes.RoverPortfolioAnalyzerAnalyzePortfolioQueryVariables
  >(RoverPortfolioAnalyzerAnalyzePortfolioDocument, baseOptions);
}
export function useRoverPortfolioAnalyzerAnalyzePortfolioLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    ApolloTypes.RoverPortfolioAnalyzerAnalyzePortfolioQuery,
    ApolloTypes.RoverPortfolioAnalyzerAnalyzePortfolioQueryVariables
  >
) {
  return Apollo.useLazyQuery<
    ApolloTypes.RoverPortfolioAnalyzerAnalyzePortfolioQuery,
    ApolloTypes.RoverPortfolioAnalyzerAnalyzePortfolioQueryVariables
  >(RoverPortfolioAnalyzerAnalyzePortfolioDocument, baseOptions);
}
export type RoverPortfolioAnalyzerAnalyzePortfolioQueryHookResult = ReturnType<
  typeof useRoverPortfolioAnalyzerAnalyzePortfolioQuery
>;
export type RoverPortfolioAnalyzerAnalyzePortfolioLazyQueryHookResult = ReturnType<
  typeof useRoverPortfolioAnalyzerAnalyzePortfolioLazyQuery
>;
export type RoverPortfolioAnalyzerAnalyzePortfolioQueryResult = Apollo.QueryResult<
  ApolloTypes.RoverPortfolioAnalyzerAnalyzePortfolioQuery,
  ApolloTypes.RoverPortfolioAnalyzerAnalyzePortfolioQueryVariables
>;
export function refetchRoverPortfolioAnalyzerAnalyzePortfolioQuery(
  variables?: ApolloTypes.RoverPortfolioAnalyzerAnalyzePortfolioQueryVariables
) {
  return {
    query: RoverPortfolioAnalyzerAnalyzePortfolioDocument,
    variables
  };
}
export const RoverPortfolioAnalyzerCalculateIntradayReturnDocument = /* #__PURE__ */ gql`
  query roverPortfolioAnalyzerCalculateIntradayReturn(
    $calculateIntradayReturnRequestInput: CalculateIntradayReturnRequestInput
  ) {
    roverPortfolioAnalyzerCalculateIntradayReturn(
      calculateIntradayReturnRequestInput: $calculateIntradayReturnRequestInput
    ) {
      marketValueReturn
      percentReturn
      totalReturn
    }
  }
`;

/**
 * __useRoverPortfolioAnalyzerCalculateIntradayReturnQuery__
 *
 * To run a query within a React component, call `useRoverPortfolioAnalyzerCalculateIntradayReturnQuery` and pass it any options that fit your needs.
 * When your component renders, `useRoverPortfolioAnalyzerCalculateIntradayReturnQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useRoverPortfolioAnalyzerCalculateIntradayReturnQuery({
 *   variables: {
 *      calculateIntradayReturnRequestInput: // value for 'calculateIntradayReturnRequestInput'
 *   },
 * });
 */
export function useRoverPortfolioAnalyzerCalculateIntradayReturnQuery(
  baseOptions?: Apollo.QueryHookOptions<
    ApolloTypes.RoverPortfolioAnalyzerCalculateIntradayReturnQuery,
    ApolloTypes.RoverPortfolioAnalyzerCalculateIntradayReturnQueryVariables
  >
) {
  return Apollo.useQuery<
    ApolloTypes.RoverPortfolioAnalyzerCalculateIntradayReturnQuery,
    ApolloTypes.RoverPortfolioAnalyzerCalculateIntradayReturnQueryVariables
  >(RoverPortfolioAnalyzerCalculateIntradayReturnDocument, baseOptions);
}
export function useRoverPortfolioAnalyzerCalculateIntradayReturnLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    ApolloTypes.RoverPortfolioAnalyzerCalculateIntradayReturnQuery,
    ApolloTypes.RoverPortfolioAnalyzerCalculateIntradayReturnQueryVariables
  >
) {
  return Apollo.useLazyQuery<
    ApolloTypes.RoverPortfolioAnalyzerCalculateIntradayReturnQuery,
    ApolloTypes.RoverPortfolioAnalyzerCalculateIntradayReturnQueryVariables
  >(RoverPortfolioAnalyzerCalculateIntradayReturnDocument, baseOptions);
}
export type RoverPortfolioAnalyzerCalculateIntradayReturnQueryHookResult = ReturnType<
  typeof useRoverPortfolioAnalyzerCalculateIntradayReturnQuery
>;
export type RoverPortfolioAnalyzerCalculateIntradayReturnLazyQueryHookResult = ReturnType<
  typeof useRoverPortfolioAnalyzerCalculateIntradayReturnLazyQuery
>;
export type RoverPortfolioAnalyzerCalculateIntradayReturnQueryResult = Apollo.QueryResult<
  ApolloTypes.RoverPortfolioAnalyzerCalculateIntradayReturnQuery,
  ApolloTypes.RoverPortfolioAnalyzerCalculateIntradayReturnQueryVariables
>;
export function refetchRoverPortfolioAnalyzerCalculateIntradayReturnQuery(
  variables?: ApolloTypes.RoverPortfolioAnalyzerCalculateIntradayReturnQueryVariables
) {
  return {
    query: RoverPortfolioAnalyzerCalculateIntradayReturnDocument,
    variables
  };
}
export const RoverPortfolioAnalyzerCalculateReturnsDocument = /* #__PURE__ */ gql`
  query roverPortfolioAnalyzerCalculateReturns(
    $calculateReturnsRequestInput: CalculateReturnsRequestInput
  ) {
    roverPortfolioAnalyzerCalculateReturns(
      calculateReturnsRequestInput: $calculateReturnsRequestInput
    ) {
      estimatedPerformance {
        averageMaximumDrawdown {
          averageValue
          rankedMaximumDrawdowns {
            endDate
            rank
            startDate
            value
          }
        }
        endDate
        estimatedMaximumDrawdown {
          endDate
          startDate
          value
        }
        startDate
        timeSeries {
          cumulativeReturn
          endDate
          periodReturn
          startDate
        }
      }
    }
  }
`;

/**
 * __useRoverPortfolioAnalyzerCalculateReturnsQuery__
 *
 * To run a query within a React component, call `useRoverPortfolioAnalyzerCalculateReturnsQuery` and pass it any options that fit your needs.
 * When your component renders, `useRoverPortfolioAnalyzerCalculateReturnsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useRoverPortfolioAnalyzerCalculateReturnsQuery({
 *   variables: {
 *      calculateReturnsRequestInput: // value for 'calculateReturnsRequestInput'
 *   },
 * });
 */
export function useRoverPortfolioAnalyzerCalculateReturnsQuery(
  baseOptions?: Apollo.QueryHookOptions<
    ApolloTypes.RoverPortfolioAnalyzerCalculateReturnsQuery,
    ApolloTypes.RoverPortfolioAnalyzerCalculateReturnsQueryVariables
  >
) {
  return Apollo.useQuery<
    ApolloTypes.RoverPortfolioAnalyzerCalculateReturnsQuery,
    ApolloTypes.RoverPortfolioAnalyzerCalculateReturnsQueryVariables
  >(RoverPortfolioAnalyzerCalculateReturnsDocument, baseOptions);
}
export function useRoverPortfolioAnalyzerCalculateReturnsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    ApolloTypes.RoverPortfolioAnalyzerCalculateReturnsQuery,
    ApolloTypes.RoverPortfolioAnalyzerCalculateReturnsQueryVariables
  >
) {
  return Apollo.useLazyQuery<
    ApolloTypes.RoverPortfolioAnalyzerCalculateReturnsQuery,
    ApolloTypes.RoverPortfolioAnalyzerCalculateReturnsQueryVariables
  >(RoverPortfolioAnalyzerCalculateReturnsDocument, baseOptions);
}
export type RoverPortfolioAnalyzerCalculateReturnsQueryHookResult = ReturnType<
  typeof useRoverPortfolioAnalyzerCalculateReturnsQuery
>;
export type RoverPortfolioAnalyzerCalculateReturnsLazyQueryHookResult = ReturnType<
  typeof useRoverPortfolioAnalyzerCalculateReturnsLazyQuery
>;
export type RoverPortfolioAnalyzerCalculateReturnsQueryResult = Apollo.QueryResult<
  ApolloTypes.RoverPortfolioAnalyzerCalculateReturnsQuery,
  ApolloTypes.RoverPortfolioAnalyzerCalculateReturnsQueryVariables
>;
export function refetchRoverPortfolioAnalyzerCalculateReturnsQuery(
  variables?: ApolloTypes.RoverPortfolioAnalyzerCalculateReturnsQueryVariables
) {
  return {
    query: RoverPortfolioAnalyzerCalculateReturnsDocument,
    variables
  };
}
export const RoverPortfolioAnalyzerGetAnalysisDocument = /* #__PURE__ */ gql`
  query roverPortfolioAnalyzerGetAnalysis($analysisId: String!) {
    roverPortfolioAnalyzerGetAnalysis(analysisId: $analysisId) {
      analysis {
        allocations {
          country
          currency
          datastreamSubtype {
            buckets {
              contributors {
                assetId
                percentOfNetAssetValue
                positionId
              }
              name
              percentOfNetAssetValue
            }
          }
          datastreamType {
            buckets {
              name
              percentOfNetAssetValue
            }
          }
          debtType {
            buckets {
              name
              percentOfNetAssetValue
            }
          }
          maturity {
            fiveToTenYears
            greaterThanThirtyYears
            lessThanOneYear
            oneToThreeYears
            other
            tenToTwentyYears
            threeToFiveYears
            twentyToThirtyYears
          }
          rating {
            investmentGrade {
              a
              aa
              aaa
              bbb
              total
            }
            nonInvestmentGrade {
              b
              bb
              c
              d
              nr
              total
            }
          }
          region {
            africaExNorthAfrica
            asiaPacificExJapan
            emergingMarketsAsia
            emergingMarketsEurope
            europeExUnitedKingdom
            japan
            latinAmerica
            middleEastNorthAfrica
            northAmericaExUnitedStates
            other
            unitedKingdom
            unitedStates
          }
          sector {
            agency
            communications
            consumerGoods
            energy
            financials
            manufacturing
            municipal
            other
            services
            sovereign
            supranational
            transportation
          }
        }
        createdAt
        currentCoupon
        duration
        esgScores {
          environmental
          governance
          social
          total
        }
        estimatedPerformance {
          averageMaximumDrawdown {
            averageValue
            rankedMaximumDrawdowns {
              endDate
              rank
              startDate
              value
            }
          }
          endDate
          estimatedMaximumDrawdown {
            endDate
            startDate
            value
          }
          startDate
          timeSeries {
            cumulativeReturn
            endDate
            periodReturn
            startDate
          }
        }
        expenseRatio
        id
        issuerConcentration
        metadata
        netAssetValue
        portfolioId
        risk
        spread
        updatedAt
        wealthProjections {
          date
          percentiles {
            cumulativeReturn
            nav
            percentile
          }
        }
        yearsToMaturity
        yield
        yieldContributions {
          assetId
          percentContribution
        }
      }
    }
  }
`;

/**
 * __useRoverPortfolioAnalyzerGetAnalysisQuery__
 *
 * To run a query within a React component, call `useRoverPortfolioAnalyzerGetAnalysisQuery` and pass it any options that fit your needs.
 * When your component renders, `useRoverPortfolioAnalyzerGetAnalysisQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useRoverPortfolioAnalyzerGetAnalysisQuery({
 *   variables: {
 *      analysisId: // value for 'analysisId'
 *   },
 * });
 */
export function useRoverPortfolioAnalyzerGetAnalysisQuery(
  baseOptions?: Apollo.QueryHookOptions<
    ApolloTypes.RoverPortfolioAnalyzerGetAnalysisQuery,
    ApolloTypes.RoverPortfolioAnalyzerGetAnalysisQueryVariables
  >
) {
  return Apollo.useQuery<
    ApolloTypes.RoverPortfolioAnalyzerGetAnalysisQuery,
    ApolloTypes.RoverPortfolioAnalyzerGetAnalysisQueryVariables
  >(RoverPortfolioAnalyzerGetAnalysisDocument, baseOptions);
}
export function useRoverPortfolioAnalyzerGetAnalysisLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    ApolloTypes.RoverPortfolioAnalyzerGetAnalysisQuery,
    ApolloTypes.RoverPortfolioAnalyzerGetAnalysisQueryVariables
  >
) {
  return Apollo.useLazyQuery<
    ApolloTypes.RoverPortfolioAnalyzerGetAnalysisQuery,
    ApolloTypes.RoverPortfolioAnalyzerGetAnalysisQueryVariables
  >(RoverPortfolioAnalyzerGetAnalysisDocument, baseOptions);
}
export type RoverPortfolioAnalyzerGetAnalysisQueryHookResult = ReturnType<
  typeof useRoverPortfolioAnalyzerGetAnalysisQuery
>;
export type RoverPortfolioAnalyzerGetAnalysisLazyQueryHookResult = ReturnType<
  typeof useRoverPortfolioAnalyzerGetAnalysisLazyQuery
>;
export type RoverPortfolioAnalyzerGetAnalysisQueryResult = Apollo.QueryResult<
  ApolloTypes.RoverPortfolioAnalyzerGetAnalysisQuery,
  ApolloTypes.RoverPortfolioAnalyzerGetAnalysisQueryVariables
>;
export function refetchRoverPortfolioAnalyzerGetAnalysisQuery(
  variables?: ApolloTypes.RoverPortfolioAnalyzerGetAnalysisQueryVariables
) {
  return {
    query: RoverPortfolioAnalyzerGetAnalysisDocument,
    variables
  };
}
export const RoverPortfolioAnalyzerProjectCashFlowsDocument = /* #__PURE__ */ gql`
  query roverPortfolioAnalyzerProjectCashFlows(
    $projectCashFlowsInput: ProjectCashFlowsInput
  ) {
    roverPortfolioAnalyzerProjectCashFlows(
      projectCashFlowsInput: $projectCashFlowsInput
    ) {
      cashFlows {
        cashFlow
        date
        interest
        principal
      }
    }
  }
`;

/**
 * __useRoverPortfolioAnalyzerProjectCashFlowsQuery__
 *
 * To run a query within a React component, call `useRoverPortfolioAnalyzerProjectCashFlowsQuery` and pass it any options that fit your needs.
 * When your component renders, `useRoverPortfolioAnalyzerProjectCashFlowsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useRoverPortfolioAnalyzerProjectCashFlowsQuery({
 *   variables: {
 *      projectCashFlowsInput: // value for 'projectCashFlowsInput'
 *   },
 * });
 */
export function useRoverPortfolioAnalyzerProjectCashFlowsQuery(
  baseOptions?: Apollo.QueryHookOptions<
    ApolloTypes.RoverPortfolioAnalyzerProjectCashFlowsQuery,
    ApolloTypes.RoverPortfolioAnalyzerProjectCashFlowsQueryVariables
  >
) {
  return Apollo.useQuery<
    ApolloTypes.RoverPortfolioAnalyzerProjectCashFlowsQuery,
    ApolloTypes.RoverPortfolioAnalyzerProjectCashFlowsQueryVariables
  >(RoverPortfolioAnalyzerProjectCashFlowsDocument, baseOptions);
}
export function useRoverPortfolioAnalyzerProjectCashFlowsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    ApolloTypes.RoverPortfolioAnalyzerProjectCashFlowsQuery,
    ApolloTypes.RoverPortfolioAnalyzerProjectCashFlowsQueryVariables
  >
) {
  return Apollo.useLazyQuery<
    ApolloTypes.RoverPortfolioAnalyzerProjectCashFlowsQuery,
    ApolloTypes.RoverPortfolioAnalyzerProjectCashFlowsQueryVariables
  >(RoverPortfolioAnalyzerProjectCashFlowsDocument, baseOptions);
}
export type RoverPortfolioAnalyzerProjectCashFlowsQueryHookResult = ReturnType<
  typeof useRoverPortfolioAnalyzerProjectCashFlowsQuery
>;
export type RoverPortfolioAnalyzerProjectCashFlowsLazyQueryHookResult = ReturnType<
  typeof useRoverPortfolioAnalyzerProjectCashFlowsLazyQuery
>;
export type RoverPortfolioAnalyzerProjectCashFlowsQueryResult = Apollo.QueryResult<
  ApolloTypes.RoverPortfolioAnalyzerProjectCashFlowsQuery,
  ApolloTypes.RoverPortfolioAnalyzerProjectCashFlowsQueryVariables
>;
export function refetchRoverPortfolioAnalyzerProjectCashFlowsQuery(
  variables?: ApolloTypes.RoverPortfolioAnalyzerProjectCashFlowsQueryVariables
) {
  return {
    query: RoverPortfolioAnalyzerProjectCashFlowsDocument,
    variables
  };
}
export const RoverPreferencesGetCartDocument = /* #__PURE__ */ gql`
  query roverPreferencesGetCart($userId: String!) {
    roverPreferencesGetCart(userId: $userId) {
      cart {
        id
        items {
          assetId
          quantity
        }
      }
    }
  }
`;

/**
 * __useRoverPreferencesGetCartQuery__
 *
 * To run a query within a React component, call `useRoverPreferencesGetCartQuery` and pass it any options that fit your needs.
 * When your component renders, `useRoverPreferencesGetCartQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useRoverPreferencesGetCartQuery({
 *   variables: {
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useRoverPreferencesGetCartQuery(
  baseOptions?: Apollo.QueryHookOptions<
    ApolloTypes.RoverPreferencesGetCartQuery,
    ApolloTypes.RoverPreferencesGetCartQueryVariables
  >
) {
  return Apollo.useQuery<
    ApolloTypes.RoverPreferencesGetCartQuery,
    ApolloTypes.RoverPreferencesGetCartQueryVariables
  >(RoverPreferencesGetCartDocument, baseOptions);
}
export function useRoverPreferencesGetCartLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    ApolloTypes.RoverPreferencesGetCartQuery,
    ApolloTypes.RoverPreferencesGetCartQueryVariables
  >
) {
  return Apollo.useLazyQuery<
    ApolloTypes.RoverPreferencesGetCartQuery,
    ApolloTypes.RoverPreferencesGetCartQueryVariables
  >(RoverPreferencesGetCartDocument, baseOptions);
}
export type RoverPreferencesGetCartQueryHookResult = ReturnType<
  typeof useRoverPreferencesGetCartQuery
>;
export type RoverPreferencesGetCartLazyQueryHookResult = ReturnType<
  typeof useRoverPreferencesGetCartLazyQuery
>;
export type RoverPreferencesGetCartQueryResult = Apollo.QueryResult<
  ApolloTypes.RoverPreferencesGetCartQuery,
  ApolloTypes.RoverPreferencesGetCartQueryVariables
>;
export function refetchRoverPreferencesGetCartQuery(
  variables?: ApolloTypes.RoverPreferencesGetCartQueryVariables
) {
  return { query: RoverPreferencesGetCartDocument, variables };
}
export const RoverPreferencesGetPreferencesDocument = /* #__PURE__ */ gql`
  query roverPreferencesGetPreferences($portfolioId: String!) {
    roverPreferencesGetPreferences(portfolioId: $portfolioId) {
      preference
    }
  }
`;

/**
 * __useRoverPreferencesGetPreferencesQuery__
 *
 * To run a query within a React component, call `useRoverPreferencesGetPreferencesQuery` and pass it any options that fit your needs.
 * When your component renders, `useRoverPreferencesGetPreferencesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useRoverPreferencesGetPreferencesQuery({
 *   variables: {
 *      portfolioId: // value for 'portfolioId'
 *   },
 * });
 */
export function useRoverPreferencesGetPreferencesQuery(
  baseOptions?: Apollo.QueryHookOptions<
    ApolloTypes.RoverPreferencesGetPreferencesQuery,
    ApolloTypes.RoverPreferencesGetPreferencesQueryVariables
  >
) {
  return Apollo.useQuery<
    ApolloTypes.RoverPreferencesGetPreferencesQuery,
    ApolloTypes.RoverPreferencesGetPreferencesQueryVariables
  >(RoverPreferencesGetPreferencesDocument, baseOptions);
}
export function useRoverPreferencesGetPreferencesLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    ApolloTypes.RoverPreferencesGetPreferencesQuery,
    ApolloTypes.RoverPreferencesGetPreferencesQueryVariables
  >
) {
  return Apollo.useLazyQuery<
    ApolloTypes.RoverPreferencesGetPreferencesQuery,
    ApolloTypes.RoverPreferencesGetPreferencesQueryVariables
  >(RoverPreferencesGetPreferencesDocument, baseOptions);
}
export type RoverPreferencesGetPreferencesQueryHookResult = ReturnType<
  typeof useRoverPreferencesGetPreferencesQuery
>;
export type RoverPreferencesGetPreferencesLazyQueryHookResult = ReturnType<
  typeof useRoverPreferencesGetPreferencesLazyQuery
>;
export type RoverPreferencesGetPreferencesQueryResult = Apollo.QueryResult<
  ApolloTypes.RoverPreferencesGetPreferencesQuery,
  ApolloTypes.RoverPreferencesGetPreferencesQueryVariables
>;
export function refetchRoverPreferencesGetPreferencesQuery(
  variables?: ApolloTypes.RoverPreferencesGetPreferencesQueryVariables
) {
  return {
    query: RoverPreferencesGetPreferencesDocument,
    variables
  };
}
export const RoverPreferencesGetWatchListDocument = /* #__PURE__ */ gql`
  query roverPreferencesGetWatchList($userId: String!) {
    roverPreferencesGetWatchList(userId: $userId) {
      watchList {
        id
        items {
          assetId
        }
      }
    }
  }
`;

/**
 * __useRoverPreferencesGetWatchListQuery__
 *
 * To run a query within a React component, call `useRoverPreferencesGetWatchListQuery` and pass it any options that fit your needs.
 * When your component renders, `useRoverPreferencesGetWatchListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useRoverPreferencesGetWatchListQuery({
 *   variables: {
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useRoverPreferencesGetWatchListQuery(
  baseOptions?: Apollo.QueryHookOptions<
    ApolloTypes.RoverPreferencesGetWatchListQuery,
    ApolloTypes.RoverPreferencesGetWatchListQueryVariables
  >
) {
  return Apollo.useQuery<
    ApolloTypes.RoverPreferencesGetWatchListQuery,
    ApolloTypes.RoverPreferencesGetWatchListQueryVariables
  >(RoverPreferencesGetWatchListDocument, baseOptions);
}
export function useRoverPreferencesGetWatchListLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    ApolloTypes.RoverPreferencesGetWatchListQuery,
    ApolloTypes.RoverPreferencesGetWatchListQueryVariables
  >
) {
  return Apollo.useLazyQuery<
    ApolloTypes.RoverPreferencesGetWatchListQuery,
    ApolloTypes.RoverPreferencesGetWatchListQueryVariables
  >(RoverPreferencesGetWatchListDocument, baseOptions);
}
export type RoverPreferencesGetWatchListQueryHookResult = ReturnType<
  typeof useRoverPreferencesGetWatchListQuery
>;
export type RoverPreferencesGetWatchListLazyQueryHookResult = ReturnType<
  typeof useRoverPreferencesGetWatchListLazyQuery
>;
export type RoverPreferencesGetWatchListQueryResult = Apollo.QueryResult<
  ApolloTypes.RoverPreferencesGetWatchListQuery,
  ApolloTypes.RoverPreferencesGetWatchListQueryVariables
>;
export function refetchRoverPreferencesGetWatchListQuery(
  variables?: ApolloTypes.RoverPreferencesGetWatchListQueryVariables
) {
  return { query: RoverPreferencesGetWatchListDocument, variables };
}
export const RoverRiskModelGetAllFactorsDocument = /* #__PURE__ */ gql`
  query roverRiskModelGetAllFactors {
    roverRiskModelGetAllFactors {
      description
      id
      levelUnits
      name
      returnsCalculationMethod
    }
  }
`;

/**
 * __useRoverRiskModelGetAllFactorsQuery__
 *
 * To run a query within a React component, call `useRoverRiskModelGetAllFactorsQuery` and pass it any options that fit your needs.
 * When your component renders, `useRoverRiskModelGetAllFactorsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useRoverRiskModelGetAllFactorsQuery({
 *   variables: {
 *   },
 * });
 */
export function useRoverRiskModelGetAllFactorsQuery(
  baseOptions?: Apollo.QueryHookOptions<
    ApolloTypes.RoverRiskModelGetAllFactorsQuery,
    ApolloTypes.RoverRiskModelGetAllFactorsQueryVariables
  >
) {
  return Apollo.useQuery<
    ApolloTypes.RoverRiskModelGetAllFactorsQuery,
    ApolloTypes.RoverRiskModelGetAllFactorsQueryVariables
  >(RoverRiskModelGetAllFactorsDocument, baseOptions);
}
export function useRoverRiskModelGetAllFactorsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    ApolloTypes.RoverRiskModelGetAllFactorsQuery,
    ApolloTypes.RoverRiskModelGetAllFactorsQueryVariables
  >
) {
  return Apollo.useLazyQuery<
    ApolloTypes.RoverRiskModelGetAllFactorsQuery,
    ApolloTypes.RoverRiskModelGetAllFactorsQueryVariables
  >(RoverRiskModelGetAllFactorsDocument, baseOptions);
}
export type RoverRiskModelGetAllFactorsQueryHookResult = ReturnType<
  typeof useRoverRiskModelGetAllFactorsQuery
>;
export type RoverRiskModelGetAllFactorsLazyQueryHookResult = ReturnType<
  typeof useRoverRiskModelGetAllFactorsLazyQuery
>;
export type RoverRiskModelGetAllFactorsQueryResult = Apollo.QueryResult<
  ApolloTypes.RoverRiskModelGetAllFactorsQuery,
  ApolloTypes.RoverRiskModelGetAllFactorsQueryVariables
>;
export function refetchRoverRiskModelGetAllFactorsQuery(
  variables?: ApolloTypes.RoverRiskModelGetAllFactorsQueryVariables
) {
  return { query: RoverRiskModelGetAllFactorsDocument, variables };
}
export const RoverRiskModelGetAssetRiskDocument = /* #__PURE__ */ gql`
  query roverRiskModelGetAssetRisk(
    $assetId: String!
    $date: String
    $frequency: Frequency2
    $halfLifeAmount: Int
    $halfLifeUnits: HalfLifeUnits2
    $lookbackPeriodAmount: Int
    $lookbackPeriodUnits: LookbackPeriodUnits2
    $refresh: Boolean
  ) {
    roverRiskModelGetAssetRisk(
      assetId: $assetId
      date: $date
      frequency: $frequency
      halfLifeAmount: $halfLifeAmount
      halfLifeUnits: $halfLifeUnits
      lookbackPeriodAmount: $lookbackPeriodAmount
      lookbackPeriodUnits: $lookbackPeriodUnits
      refresh: $refresh
    ) {
      risk
    }
  }
`;

/**
 * __useRoverRiskModelGetAssetRiskQuery__
 *
 * To run a query within a React component, call `useRoverRiskModelGetAssetRiskQuery` and pass it any options that fit your needs.
 * When your component renders, `useRoverRiskModelGetAssetRiskQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useRoverRiskModelGetAssetRiskQuery({
 *   variables: {
 *      assetId: // value for 'assetId'
 *      date: // value for 'date'
 *      frequency: // value for 'frequency'
 *      halfLifeAmount: // value for 'halfLifeAmount'
 *      halfLifeUnits: // value for 'halfLifeUnits'
 *      lookbackPeriodAmount: // value for 'lookbackPeriodAmount'
 *      lookbackPeriodUnits: // value for 'lookbackPeriodUnits'
 *      refresh: // value for 'refresh'
 *   },
 * });
 */
export function useRoverRiskModelGetAssetRiskQuery(
  baseOptions?: Apollo.QueryHookOptions<
    ApolloTypes.RoverRiskModelGetAssetRiskQuery,
    ApolloTypes.RoverRiskModelGetAssetRiskQueryVariables
  >
) {
  return Apollo.useQuery<
    ApolloTypes.RoverRiskModelGetAssetRiskQuery,
    ApolloTypes.RoverRiskModelGetAssetRiskQueryVariables
  >(RoverRiskModelGetAssetRiskDocument, baseOptions);
}
export function useRoverRiskModelGetAssetRiskLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    ApolloTypes.RoverRiskModelGetAssetRiskQuery,
    ApolloTypes.RoverRiskModelGetAssetRiskQueryVariables
  >
) {
  return Apollo.useLazyQuery<
    ApolloTypes.RoverRiskModelGetAssetRiskQuery,
    ApolloTypes.RoverRiskModelGetAssetRiskQueryVariables
  >(RoverRiskModelGetAssetRiskDocument, baseOptions);
}
export type RoverRiskModelGetAssetRiskQueryHookResult = ReturnType<
  typeof useRoverRiskModelGetAssetRiskQuery
>;
export type RoverRiskModelGetAssetRiskLazyQueryHookResult = ReturnType<
  typeof useRoverRiskModelGetAssetRiskLazyQuery
>;
export type RoverRiskModelGetAssetRiskQueryResult = Apollo.QueryResult<
  ApolloTypes.RoverRiskModelGetAssetRiskQuery,
  ApolloTypes.RoverRiskModelGetAssetRiskQueryVariables
>;
export function refetchRoverRiskModelGetAssetRiskQuery(
  variables?: ApolloTypes.RoverRiskModelGetAssetRiskQueryVariables
) {
  return { query: RoverRiskModelGetAssetRiskDocument, variables };
}
export const RoverRiskModelGetFactorDocument = /* #__PURE__ */ gql`
  query roverRiskModelGetFactor($id: String!) {
    roverRiskModelGetFactor(id: $id) {
      description
      id
      levelUnits
      name
      returnsCalculationMethod
    }
  }
`;

/**
 * __useRoverRiskModelGetFactorQuery__
 *
 * To run a query within a React component, call `useRoverRiskModelGetFactorQuery` and pass it any options that fit your needs.
 * When your component renders, `useRoverRiskModelGetFactorQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useRoverRiskModelGetFactorQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useRoverRiskModelGetFactorQuery(
  baseOptions?: Apollo.QueryHookOptions<
    ApolloTypes.RoverRiskModelGetFactorQuery,
    ApolloTypes.RoverRiskModelGetFactorQueryVariables
  >
) {
  return Apollo.useQuery<
    ApolloTypes.RoverRiskModelGetFactorQuery,
    ApolloTypes.RoverRiskModelGetFactorQueryVariables
  >(RoverRiskModelGetFactorDocument, baseOptions);
}
export function useRoverRiskModelGetFactorLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    ApolloTypes.RoverRiskModelGetFactorQuery,
    ApolloTypes.RoverRiskModelGetFactorQueryVariables
  >
) {
  return Apollo.useLazyQuery<
    ApolloTypes.RoverRiskModelGetFactorQuery,
    ApolloTypes.RoverRiskModelGetFactorQueryVariables
  >(RoverRiskModelGetFactorDocument, baseOptions);
}
export type RoverRiskModelGetFactorQueryHookResult = ReturnType<
  typeof useRoverRiskModelGetFactorQuery
>;
export type RoverRiskModelGetFactorLazyQueryHookResult = ReturnType<
  typeof useRoverRiskModelGetFactorLazyQuery
>;
export type RoverRiskModelGetFactorQueryResult = Apollo.QueryResult<
  ApolloTypes.RoverRiskModelGetFactorQuery,
  ApolloTypes.RoverRiskModelGetFactorQueryVariables
>;
export function refetchRoverRiskModelGetFactorQuery(
  variables?: ApolloTypes.RoverRiskModelGetFactorQueryVariables
) {
  return { query: RoverRiskModelGetFactorDocument, variables };
}
export const RoverRiskModelGetFactorTimeSeriesDocument = /* #__PURE__ */ gql`
  query roverRiskModelGetFactorTimeSeries(
    $from: String!
    $id: String!
    $to: String!
  ) {
    roverRiskModelGetFactorTimeSeries(from: $from, id: $id, to: $to) {
      factorId
      timeSeries {
        date
        level
      }
    }
  }
`;

/**
 * __useRoverRiskModelGetFactorTimeSeriesQuery__
 *
 * To run a query within a React component, call `useRoverRiskModelGetFactorTimeSeriesQuery` and pass it any options that fit your needs.
 * When your component renders, `useRoverRiskModelGetFactorTimeSeriesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useRoverRiskModelGetFactorTimeSeriesQuery({
 *   variables: {
 *      from: // value for 'from'
 *      id: // value for 'id'
 *      to: // value for 'to'
 *   },
 * });
 */
export function useRoverRiskModelGetFactorTimeSeriesQuery(
  baseOptions?: Apollo.QueryHookOptions<
    ApolloTypes.RoverRiskModelGetFactorTimeSeriesQuery,
    ApolloTypes.RoverRiskModelGetFactorTimeSeriesQueryVariables
  >
) {
  return Apollo.useQuery<
    ApolloTypes.RoverRiskModelGetFactorTimeSeriesQuery,
    ApolloTypes.RoverRiskModelGetFactorTimeSeriesQueryVariables
  >(RoverRiskModelGetFactorTimeSeriesDocument, baseOptions);
}
export function useRoverRiskModelGetFactorTimeSeriesLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    ApolloTypes.RoverRiskModelGetFactorTimeSeriesQuery,
    ApolloTypes.RoverRiskModelGetFactorTimeSeriesQueryVariables
  >
) {
  return Apollo.useLazyQuery<
    ApolloTypes.RoverRiskModelGetFactorTimeSeriesQuery,
    ApolloTypes.RoverRiskModelGetFactorTimeSeriesQueryVariables
  >(RoverRiskModelGetFactorTimeSeriesDocument, baseOptions);
}
export type RoverRiskModelGetFactorTimeSeriesQueryHookResult = ReturnType<
  typeof useRoverRiskModelGetFactorTimeSeriesQuery
>;
export type RoverRiskModelGetFactorTimeSeriesLazyQueryHookResult = ReturnType<
  typeof useRoverRiskModelGetFactorTimeSeriesLazyQuery
>;
export type RoverRiskModelGetFactorTimeSeriesQueryResult = Apollo.QueryResult<
  ApolloTypes.RoverRiskModelGetFactorTimeSeriesQuery,
  ApolloTypes.RoverRiskModelGetFactorTimeSeriesQueryVariables
>;
export function refetchRoverRiskModelGetFactorTimeSeriesQuery(
  variables?: ApolloTypes.RoverRiskModelGetFactorTimeSeriesQueryVariables
) {
  return {
    query: RoverRiskModelGetFactorTimeSeriesDocument,
    variables
  };
}
export const RoverScoreGetAssetScoresDocument = /* #__PURE__ */ gql`
  query roverScoreGetAssetScores($assetId: String!) {
    roverScoreGetAssetScores(assetId: $assetId) {
      attractiveness
      credit
      efficiency
      liquidity
      risk
    }
  }
`;

/**
 * __useRoverScoreGetAssetScoresQuery__
 *
 * To run a query within a React component, call `useRoverScoreGetAssetScoresQuery` and pass it any options that fit your needs.
 * When your component renders, `useRoverScoreGetAssetScoresQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useRoverScoreGetAssetScoresQuery({
 *   variables: {
 *      assetId: // value for 'assetId'
 *   },
 * });
 */
export function useRoverScoreGetAssetScoresQuery(
  baseOptions?: Apollo.QueryHookOptions<
    ApolloTypes.RoverScoreGetAssetScoresQuery,
    ApolloTypes.RoverScoreGetAssetScoresQueryVariables
  >
) {
  return Apollo.useQuery<
    ApolloTypes.RoverScoreGetAssetScoresQuery,
    ApolloTypes.RoverScoreGetAssetScoresQueryVariables
  >(RoverScoreGetAssetScoresDocument, baseOptions);
}
export function useRoverScoreGetAssetScoresLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    ApolloTypes.RoverScoreGetAssetScoresQuery,
    ApolloTypes.RoverScoreGetAssetScoresQueryVariables
  >
) {
  return Apollo.useLazyQuery<
    ApolloTypes.RoverScoreGetAssetScoresQuery,
    ApolloTypes.RoverScoreGetAssetScoresQueryVariables
  >(RoverScoreGetAssetScoresDocument, baseOptions);
}
export type RoverScoreGetAssetScoresQueryHookResult = ReturnType<
  typeof useRoverScoreGetAssetScoresQuery
>;
export type RoverScoreGetAssetScoresLazyQueryHookResult = ReturnType<
  typeof useRoverScoreGetAssetScoresLazyQuery
>;
export type RoverScoreGetAssetScoresQueryResult = Apollo.QueryResult<
  ApolloTypes.RoverScoreGetAssetScoresQuery,
  ApolloTypes.RoverScoreGetAssetScoresQueryVariables
>;
export function refetchRoverScoreGetAssetScoresQuery(
  variables?: ApolloTypes.RoverScoreGetAssetScoresQueryVariables
) {
  return { query: RoverScoreGetAssetScoresDocument, variables };
}
export const RoverUniverseGetAllInventoriesDocument = /* #__PURE__ */ gql`
  query roverUniverseGetAllInventories($institutionId: String!) {
    roverUniverseGetAllInventories(institutionId: $institutionId) {
      inventories {
        app
        id
        name
        updatedAt
      }
    }
  }
`;

/**
 * __useRoverUniverseGetAllInventoriesQuery__
 *
 * To run a query within a React component, call `useRoverUniverseGetAllInventoriesQuery` and pass it any options that fit your needs.
 * When your component renders, `useRoverUniverseGetAllInventoriesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useRoverUniverseGetAllInventoriesQuery({
 *   variables: {
 *      institutionId: // value for 'institutionId'
 *   },
 * });
 */
export function useRoverUniverseGetAllInventoriesQuery(
  baseOptions?: Apollo.QueryHookOptions<
    ApolloTypes.RoverUniverseGetAllInventoriesQuery,
    ApolloTypes.RoverUniverseGetAllInventoriesQueryVariables
  >
) {
  return Apollo.useQuery<
    ApolloTypes.RoverUniverseGetAllInventoriesQuery,
    ApolloTypes.RoverUniverseGetAllInventoriesQueryVariables
  >(RoverUniverseGetAllInventoriesDocument, baseOptions);
}
export function useRoverUniverseGetAllInventoriesLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    ApolloTypes.RoverUniverseGetAllInventoriesQuery,
    ApolloTypes.RoverUniverseGetAllInventoriesQueryVariables
  >
) {
  return Apollo.useLazyQuery<
    ApolloTypes.RoverUniverseGetAllInventoriesQuery,
    ApolloTypes.RoverUniverseGetAllInventoriesQueryVariables
  >(RoverUniverseGetAllInventoriesDocument, baseOptions);
}
export type RoverUniverseGetAllInventoriesQueryHookResult = ReturnType<
  typeof useRoverUniverseGetAllInventoriesQuery
>;
export type RoverUniverseGetAllInventoriesLazyQueryHookResult = ReturnType<
  typeof useRoverUniverseGetAllInventoriesLazyQuery
>;
export type RoverUniverseGetAllInventoriesQueryResult = Apollo.QueryResult<
  ApolloTypes.RoverUniverseGetAllInventoriesQuery,
  ApolloTypes.RoverUniverseGetAllInventoriesQueryVariables
>;
export function refetchRoverUniverseGetAllInventoriesQuery(
  variables?: ApolloTypes.RoverUniverseGetAllInventoriesQueryVariables
) {
  return {
    query: RoverUniverseGetAllInventoriesDocument,
    variables
  };
}
export const RoverUniverseGetAssetDocument = /* #__PURE__ */ gql`
  query roverUniverseGetAsset($date: String, $id: String!) {
    roverUniverseGetAsset(date: $date, id: $id) {
      asset {
        allocation {
          country
          currency
          debtType {
            assetBackedSecurities
            bonds
            debentures
            mortgageBackedSecurities
            municipalBonds
            notes
            other
            preferredStock
            supranationalBonds
          }
          maturity {
            fiveToTenYears
            greaterThanThirtyYears
            lessThanOneYear
            oneToThreeYears
            other
            tenToTwentyYears
            threeToFiveYears
            twentyToThirtyYears
          }
          rating {
            a
            aa
            aaa
            b
            bb
            bbb
            c
            cc
            ccc
            d
            nr
          }
          region {
            africaExNorthAfrica
            asiaPacificExJapan
            emergingMarketsAsia
            emergingMarketsEurope
            europeExUnitedKingdom
            japan
            latinAmerica
            middleEastNorthAfrica
            northAmericaExUnitedStates
            other
            unitedKingdom
            unitedStates
          }
          sector {
            agency
            communications
            consumerGoods
            energy
            financials
            manufacturing
            municipal
            other
            services
            sovereign
            supranational
            transportation
          }
        }
        analytics {
          convexity
          creditBeta
          currentYield
          date
          defaultAdjustedYield
          distributionYield
          dividendYield
          duration
          effectiveDuration
          gSpread
          optionAdjustedSpread
          recoveryRate
          secYield
          source
          spreadDuration
          standaloneRisk
          yearsToMaturity
          yield
          yieldToCall
          yieldToMaturity
          yieldToWorst
          zSpread
        }
        assetSubtype
        assetType
        bond {
          accruedInterest
          active
          amountOutstanding
          amountOutstandingDate
          annuity
          assetStatus
          callType
          callable
          capType
          classifications {
            barclaysLevel1
            barclaysLevel2
            barclaysLevel3
            barclaysLevel4
            bondhouse
            datastreamSubtype
            datastreamType
            gics
          }
          cleanPrice
          cleanUpCallable
          convertible
          countryOfIssue
          couponClass
          couponResetHistory {
            effectiveDate
            rate
            rateNonAnnual
          }
          couponSchedule {
            cap
            couponClass
            couponFormula
            couponRateRoundingMethod
            dayCount
            effectiveDate
            floor
            indexDescription
            indexHolidayCalendar
            numberCutOffDays
            paymentBusinessDayRule
            paymentCalendarAdjustment
            paymentCalendarAdjustmentValue
            paymentCurrency
            paymentFrequency
            paymentHolidayCalendar
            resetBusinessDayRule
            resetCalendarAdjustment
            resetCalendarAdjustmentValue
            resetFrequency
            resetHolidayCalendar
          }
          couponType
          covered
          creationUnit
          creditEnhancement {
            additionalCreditType
            crossDefaultForGuarantor
            enhancementEffectiveDate
            enhancementEndDate
            enhancementLegNumber
            escrowAccount
            eventsofDefaultforGuarantor
            guarantee
            guarantorPermId
            guarantorProgram
            insurance
            interestCollateralType
            letterOfCreditExpirationDate
            negativePledgeForGuarantor
            otherCovenantsForGuarantor
            percentInterestCollateralized
            percentPrincipalCollateralized
            principalCollateralType
          }
          currentCoupon
          datedDate
          dayCount
          debtServiceType
          defeasable
          denominationIncrement
          dirtyPrice
          dualCurrency
          exDividendCalendarAdjustment
          exDividendCalendarAdjustmentValue
          exchangeListed
          firstCouponDate
          floating
          green
          guaranteed
          hasWarrantsAttached
          inflationProtected
          instrumentType
          issue {
            active
            id
            issueDescription
            issueIdentifier
            issuerIdentifier
            offeringDate
            offeringDescription
            private144a
            privatePlacement
            totalProgramAmount
          }
          issueCurrency
          issueDate
          issuer {
            active
            bankrupt
            country
            headquartersAddress {
              cityOrTown
              country
              stateOrCountyOrRegion
              street1
              street2
              street3
              zipCode
            }
            id
            immediateParentId
            legalName
            longName
            ratings {
              snpLongTerm {
                effectiveDate
                rank
                rating
              }
              snpSeniorSecured {
                effectiveDate
                rank
                rating
              }
              snpSeniorUnsecured {
                effectiveDate
                rank
                rating
              }
              snpShortTerm {
                effectiveDate
                rank
                rating
              }
              snpSubordinated {
                effectiveDate
                rank
                rating
              }
            }
            registeredAddress {
              cityOrTown
              country
              stateOrCountyOrRegion
              street1
              street2
              street3
              zipCode
            }
            sector
            shortName
            sovereignClass
            subsector
            ticker
            ultimateParentId
            url
          }
          lastCouponDate
          lastLiquidEtfConstituentDate
          liquidityCriteria {
            hasAdequateQuotes
            liquidityCriteriaDate
          }
          marketData {
            ejv {
              accruedInterest
              askPrice
              askYield
              assetSwapSpread
              benchmarkSpread
              bidPrice
              bidYield
              cbeYieldToMaturity
              cbeYieldToWorst
              closePrice
              date
              highPrice
              lowPrice
              openPrice
              price
              source
              swapSpread
              volume
              yieldToMaturity
              yieldToWorst
              zSpread
            }
          }
          maturityDate
          mediumTermNote
          minimumDenomination
          nearestCallPeriodEndDate
          nearestCallPeriodStartDate
          nearestCallPrice
          nextResetDate
          ordinaryCallNoticePeriodMaximumAmount
          ordinaryCallNoticePeriodMinimumAmount
          ordinaryCallNoticePeriodUnits
          ordinaryCallOptionType
          ordinaryCallable
          originalAmountIssued
          originalBenchmark
          originalIssuePrice
          originalIssueSpread
          originalYieldToMaturity
          parValue
          partlyPaid
          payableInKind
          performing
          perpetual
          priceQuoteConvention
          priceQuoteMethod
          priceQuoteRoundingMethod
          principalCurrency
          private144a
          privatePlacement
          puttable
          quotedDirty
          recordDateCalendarAdjustment
          recordDateCalendarAdjustmentValue
          redemptionValue
          richCheap {
            effectiveDate
            interquartileRange
            richCheapBps
          }
          seniority
          series
          sinkingOrAmortizing
          sovereignClass
          state
          stateTaxExempt
          straight
          strippable
          subjectToAlternativeMinimumTax
          totalAmountIssued
          unitedStatesTaxExempt
          useOfProceeds
          withholdingTax
        }
        country
        createdAt
        createdBy
        currency
        description
        displayId
        equity {
          eps
          marketCap
          peRatio
          shareClass
          tradeLotRoundSize
          tradeLotSize
        }
        esgScores {
          environmental
          governance
          social
          timestamp
          total
        }
        fund {
          allocation {
            asset {
              cash
              equity
              fixedIncome
              other
            }
            currency
            equityCountry
            equityRegion {
              africaExNorthAfrica
              asiaPacificExJapan
              emergingMarketsAsia
              emergingMarketsEurope
              europeExUnitedKingdom
              japan
              latinAmerica
              middleEastNorthAfrica
              northAmericaExUnitedStates
              other
              unitedKingdom
              unitedStates
            }
            fixedIncomeCountry
            fixedIncomeRegion {
              africaExNorthAfrica
              asiaPacificExJapan
              emergingMarketsAsia
              emergingMarketsEurope
              europeExUnitedKingdom
              japan
              latinAmerica
              middleEastNorthAfrica
              northAmericaExUnitedStates
              other
              unitedKingdom
              unitedStates
            }
            gicsSubIndustry {
              communicationServices
              consumerDiscretionary
              consumerStaples
              energy
              financials
              healthCare
              industrials
              informationTechnology
              materials
              other
              realEstate
              utilities
            }
            trbcIndustry {
              basicMaterials
              consumerCyclicals
              consumerNonCyclicals
              energy
              financials
              healthcare
              industrials
              other
              technology
              telecommunicationsServices
              utilities
            }
          }
          apexSupport {
            supportDate
            supported
          }
          assetStatus
          benchmark
          classification
          distributions {
            capitalGain {
              capitalGain {
                accountingDate
                exDate
                exValue
                paymentDate
                recordDate
                reinvestmentDate
                reinvestmentType
                reinvestmentValue
                taxableInterestIncome
              }
              collectibles {
                accountingDate
                exDate
                exValue
                paymentDate
                recordDate
                reinvestmentDate
                reinvestmentType
                reinvestmentValue
                taxableInterestIncome
              }
              longTermCapitalGain {
                accountingDate
                exDate
                exValue
                paymentDate
                recordDate
                reinvestmentDate
                reinvestmentType
                reinvestmentValue
                taxableInterestIncome
              }
              mediumTermCapitalGain {
                accountingDate
                exDate
                exValue
                paymentDate
                recordDate
                reinvestmentDate
                reinvestmentType
                reinvestmentValue
                taxableInterestIncome
              }
              nonQualifiedShortTermCapitalGain {
                accountingDate
                exDate
                exValue
                paymentDate
                recordDate
                reinvestmentDate
                reinvestmentType
                reinvestmentValue
                taxableInterestIncome
              }
              qualifiedShortTermCapitalGain {
                accountingDate
                exDate
                exValue
                paymentDate
                recordDate
                reinvestmentDate
                reinvestmentType
                reinvestmentValue
                taxableInterestIncome
              }
              returnOfCapital {
                accountingDate
                exDate
                exValue
                paymentDate
                recordDate
                reinvestmentDate
                reinvestmentType
                reinvestmentValue
                taxableInterestIncome
              }
              shortTermCapitalGain {
                accountingDate
                exDate
                exValue
                paymentDate
                recordDate
                reinvestmentDate
                reinvestmentType
                reinvestmentValue
                taxableInterestIncome
              }
              superLongTermCapitalGain {
                accountingDate
                exDate
                exValue
                paymentDate
                recordDate
                reinvestmentDate
                reinvestmentType
                reinvestmentValue
                taxableInterestIncome
              }
            }
            foreignTaxCredit {
              foreignTaxCredit {
                accountingDate
                exDate
                exValue
                paymentDate
                recordDate
                reinvestmentDate
                reinvestmentType
                reinvestmentValue
                taxableInterestIncome
              }
              nonQualifiedForeignTaxPaid {
                accountingDate
                exDate
                exValue
                paymentDate
                recordDate
                reinvestmentDate
                reinvestmentType
                reinvestmentValue
                taxableInterestIncome
              }
              qualifiedForeignTaxPaid {
                accountingDate
                exDate
                exValue
                paymentDate
                recordDate
                reinvestmentDate
                reinvestmentType
                reinvestmentValue
                taxableInterestIncome
              }
            }
            income {
              aggregateAccrual {
                accountingDate
                exDate
                exValue
                paymentDate
                recordDate
                reinvestmentDate
                reinvestmentType
                reinvestmentValue
                taxableInterestIncome
              }
              exemptIncome {
                accountingDate
                exDate
                exValue
                paymentDate
                recordDate
                reinvestmentDate
                reinvestmentType
                reinvestmentValue
                taxableInterestIncome
              }
              incomeDividend {
                accountingDate
                exDate
                exValue
                paymentDate
                recordDate
                reinvestmentDate
                reinvestmentType
                reinvestmentValue
                taxableInterestIncome
              }
              interestIncome {
                accountingDate
                exDate
                exValue
                paymentDate
                recordDate
                reinvestmentDate
                reinvestmentType
                reinvestmentValue
                taxableInterestIncome
              }
              nonQualifiedIncomeDividend {
                accountingDate
                exDate
                exValue
                paymentDate
                recordDate
                reinvestmentDate
                reinvestmentType
                reinvestmentValue
                taxableInterestIncome
              }
              qualifiedIncomeDividend {
                accountingDate
                exDate
                exValue
                paymentDate
                recordDate
                reinvestmentDate
                reinvestmentType
                reinvestmentValue
                taxableInterestIncome
              }
            }
            repaymentCategory {
              bonusIssue {
                accountingDate
                exDate
                exValue
                paymentDate
                recordDate
                reinvestmentDate
                reinvestmentType
                reinvestmentValue
                taxableInterestIncome
              }
              factor {
                accountingDate
                exDate
                exValue
                paymentDate
                recordDate
                reinvestmentDate
                reinvestmentType
                reinvestmentValue
                taxableInterestIncome
              }
              repayment {
                accountingDate
                exDate
                exValue
                paymentDate
                recordDate
                reinvestmentDate
                reinvestmentType
                reinvestmentValue
                taxableInterestIncome
              }
              rightsIssue {
                accountingDate
                exDate
                exValue
                paymentDate
                recordDate
                reinvestmentDate
                reinvestmentType
                reinvestmentValue
                taxableInterestIncome
              }
              split {
                accountingDate
                exDate
                exValue
                paymentDate
                recordDate
                reinvestmentDate
                reinvestmentType
                reinvestmentValue
                taxableInterestIncome
              }
            }
          }
          fees {
            backLoad
            frontLoad
            fundExpenseRatio
            managementFee
            marketing12b1Fee
            performanceFee
          }
          focus {
            assetClassFocus
            geoFocus
          }
          fundType
          inceptionDate
          institutional
          managementCompany
          midPrice
          netAssetValuePerShare
          netAssets
          netAssetsDate
          priceDate
          regulatoryStructure
          replicationStrategy
          scores {
            consistentReturn {
              fiveYear
              overall
              tenYear
              threeYear
            }
            expense {
              fiveYear
              overall
              tenYear
              threeYear
            }
            preservation {
              fiveYear
              overall
              tenYear
              threeYear
            }
            taxEfficiency {
              fiveYear
              overall
              tenYear
              threeYear
            }
            totalReturn {
              fiveYear
              overall
              tenYear
              threeYear
            }
          }
          tradeLotSize
          yields {
            dailySecYield
            dailySecYieldDate
            distributionYield
            dividendYield
            lipperDistributionYield
            projectedYield
            secYield
            simpleYieldBegin
            simpleYieldEnd
            thirtyDayYield
            trailingTwelveMonthYield
          }
        }
        id
        identifiers {
          apex
          bbGlobal
          cik
          cins
          cusip
          isin
          primaryTicker
          refinitivAssetId
          refinitivIssuePermId
          refinitivLipperId
          refinitivLipperParentId
          refinitivLipperPermId
          sedol
          valoren
        }
        legalEntity {
          issuingLegalEntityId
          ultimateObligor
          ultimateObligorId
          ultimateParent
          ultimateParentId
          ultimateParentTickerExchange
        }
        liquid
        market
        metadata
        name
        price
        priceDate
        priceQuotes {
          accruedInterest
          askPrice
          askYield
          assetSwapSpread
          benchmarkSpread
          bidPrice
          bidYield
          cbeYieldToMaturity
          cbeYieldToWorst
          closePrice
          date
          highPrice
          lowPrice
          openPrice
          price
          source
          swapSpread
          volume
          yieldToMaturity
          yieldToWorst
          zSpread
        }
        primaryExchange
        primaryExchangeMic
        rating
        scores {
          attractiveness
          credit
          efficiency
          liquidity
          risk
          timestamp
        }
        ticker
        unit
        universes {
          custom
          general
          liquid
          search
          timestamp
        }
        updatedAt
        updatedBy
      }
    }
  }
`;

/**
 * __useRoverUniverseGetAssetQuery__
 *
 * To run a query within a React component, call `useRoverUniverseGetAssetQuery` and pass it any options that fit your needs.
 * When your component renders, `useRoverUniverseGetAssetQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useRoverUniverseGetAssetQuery({
 *   variables: {
 *      date: // value for 'date'
 *      id: // value for 'id'
 *   },
 * });
 */
export function useRoverUniverseGetAssetQuery(
  baseOptions?: Apollo.QueryHookOptions<
    ApolloTypes.RoverUniverseGetAssetQuery,
    ApolloTypes.RoverUniverseGetAssetQueryVariables
  >
) {
  return Apollo.useQuery<
    ApolloTypes.RoverUniverseGetAssetQuery,
    ApolloTypes.RoverUniverseGetAssetQueryVariables
  >(RoverUniverseGetAssetDocument, baseOptions);
}
export function useRoverUniverseGetAssetLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    ApolloTypes.RoverUniverseGetAssetQuery,
    ApolloTypes.RoverUniverseGetAssetQueryVariables
  >
) {
  return Apollo.useLazyQuery<
    ApolloTypes.RoverUniverseGetAssetQuery,
    ApolloTypes.RoverUniverseGetAssetQueryVariables
  >(RoverUniverseGetAssetDocument, baseOptions);
}
export type RoverUniverseGetAssetQueryHookResult = ReturnType<
  typeof useRoverUniverseGetAssetQuery
>;
export type RoverUniverseGetAssetLazyQueryHookResult = ReturnType<
  typeof useRoverUniverseGetAssetLazyQuery
>;
export type RoverUniverseGetAssetQueryResult = Apollo.QueryResult<
  ApolloTypes.RoverUniverseGetAssetQuery,
  ApolloTypes.RoverUniverseGetAssetQueryVariables
>;
export function refetchRoverUniverseGetAssetQuery(
  variables?: ApolloTypes.RoverUniverseGetAssetQueryVariables
) {
  return { query: RoverUniverseGetAssetDocument, variables };
}
export const RoverUniverseGetAssetByExternalIdDocument = /* #__PURE__ */ gql`
  query roverUniverseGetAssetByExternalId(
    $date: String
    $externalId: String!
    $sourceName: String!
  ) {
    roverUniverseGetAssetByExternalId(
      date: $date
      externalId: $externalId
      sourceName: $sourceName
    ) {
      asset {
        allocation {
          country
          currency
          debtType {
            assetBackedSecurities
            bonds
            debentures
            mortgageBackedSecurities
            municipalBonds
            notes
            other
            preferredStock
            supranationalBonds
          }
          maturity {
            fiveToTenYears
            greaterThanThirtyYears
            lessThanOneYear
            oneToThreeYears
            other
            tenToTwentyYears
            threeToFiveYears
            twentyToThirtyYears
          }
          rating {
            a
            aa
            aaa
            b
            bb
            bbb
            c
            cc
            ccc
            d
            nr
          }
          region {
            africaExNorthAfrica
            asiaPacificExJapan
            emergingMarketsAsia
            emergingMarketsEurope
            europeExUnitedKingdom
            japan
            latinAmerica
            middleEastNorthAfrica
            northAmericaExUnitedStates
            other
            unitedKingdom
            unitedStates
          }
          sector {
            agency
            communications
            consumerGoods
            energy
            financials
            manufacturing
            municipal
            other
            services
            sovereign
            supranational
            transportation
          }
        }
        analytics {
          convexity
          creditBeta
          currentYield
          date
          defaultAdjustedYield
          distributionYield
          dividendYield
          duration
          effectiveDuration
          gSpread
          optionAdjustedSpread
          recoveryRate
          secYield
          source
          spreadDuration
          standaloneRisk
          yearsToMaturity
          yield
          yieldToCall
          yieldToMaturity
          yieldToWorst
          zSpread
        }
        assetSubtype
        assetType
        bond {
          accruedInterest
          active
          amountOutstanding
          amountOutstandingDate
          annuity
          assetStatus
          callType
          callable
          capType
          classifications {
            barclaysLevel1
            barclaysLevel2
            barclaysLevel3
            barclaysLevel4
            bondhouse
            datastreamSubtype
            datastreamType
            gics
          }
          cleanPrice
          cleanUpCallable
          convertible
          countryOfIssue
          couponClass
          couponResetHistory {
            effectiveDate
            rate
            rateNonAnnual
          }
          couponSchedule {
            cap
            couponClass
            couponFormula
            couponRateRoundingMethod
            dayCount
            effectiveDate
            floor
            indexDescription
            indexHolidayCalendar
            numberCutOffDays
            paymentBusinessDayRule
            paymentCalendarAdjustment
            paymentCalendarAdjustmentValue
            paymentCurrency
            paymentFrequency
            paymentHolidayCalendar
            resetBusinessDayRule
            resetCalendarAdjustment
            resetCalendarAdjustmentValue
            resetFrequency
            resetHolidayCalendar
          }
          couponType
          covered
          creationUnit
          creditEnhancement {
            additionalCreditType
            crossDefaultForGuarantor
            enhancementEffectiveDate
            enhancementEndDate
            enhancementLegNumber
            escrowAccount
            eventsofDefaultforGuarantor
            guarantee
            guarantorPermId
            guarantorProgram
            insurance
            interestCollateralType
            letterOfCreditExpirationDate
            negativePledgeForGuarantor
            otherCovenantsForGuarantor
            percentInterestCollateralized
            percentPrincipalCollateralized
            principalCollateralType
          }
          currentCoupon
          datedDate
          dayCount
          debtServiceType
          defeasable
          denominationIncrement
          dirtyPrice
          dualCurrency
          exDividendCalendarAdjustment
          exDividendCalendarAdjustmentValue
          exchangeListed
          firstCouponDate
          floating
          green
          guaranteed
          hasWarrantsAttached
          inflationProtected
          instrumentType
          issue {
            active
            id
            issueDescription
            issueIdentifier
            issuerIdentifier
            offeringDate
            offeringDescription
            private144a
            privatePlacement
            totalProgramAmount
          }
          issueCurrency
          issueDate
          issuer {
            active
            bankrupt
            country
            headquartersAddress {
              cityOrTown
              country
              stateOrCountyOrRegion
              street1
              street2
              street3
              zipCode
            }
            id
            immediateParentId
            legalName
            longName
            ratings {
              snpLongTerm {
                effectiveDate
                rank
                rating
              }
              snpSeniorSecured {
                effectiveDate
                rank
                rating
              }
              snpSeniorUnsecured {
                effectiveDate
                rank
                rating
              }
              snpShortTerm {
                effectiveDate
                rank
                rating
              }
              snpSubordinated {
                effectiveDate
                rank
                rating
              }
            }
            registeredAddress {
              cityOrTown
              country
              stateOrCountyOrRegion
              street1
              street2
              street3
              zipCode
            }
            sector
            shortName
            sovereignClass
            subsector
            ticker
            ultimateParentId
            url
          }
          lastCouponDate
          lastLiquidEtfConstituentDate
          liquidityCriteria {
            hasAdequateQuotes
            liquidityCriteriaDate
          }
          marketData {
            ejv {
              accruedInterest
              askPrice
              askYield
              assetSwapSpread
              benchmarkSpread
              bidPrice
              bidYield
              cbeYieldToMaturity
              cbeYieldToWorst
              closePrice
              date
              highPrice
              lowPrice
              openPrice
              price
              source
              swapSpread
              volume
              yieldToMaturity
              yieldToWorst
              zSpread
            }
          }
          maturityDate
          mediumTermNote
          minimumDenomination
          nearestCallPeriodEndDate
          nearestCallPeriodStartDate
          nearestCallPrice
          nextResetDate
          ordinaryCallNoticePeriodMaximumAmount
          ordinaryCallNoticePeriodMinimumAmount
          ordinaryCallNoticePeriodUnits
          ordinaryCallOptionType
          ordinaryCallable
          originalAmountIssued
          originalBenchmark
          originalIssuePrice
          originalIssueSpread
          originalYieldToMaturity
          parValue
          partlyPaid
          payableInKind
          performing
          perpetual
          priceQuoteConvention
          priceQuoteMethod
          priceQuoteRoundingMethod
          principalCurrency
          private144a
          privatePlacement
          puttable
          quotedDirty
          recordDateCalendarAdjustment
          recordDateCalendarAdjustmentValue
          redemptionValue
          richCheap {
            effectiveDate
            interquartileRange
            richCheapBps
          }
          seniority
          series
          sinkingOrAmortizing
          sovereignClass
          state
          stateTaxExempt
          straight
          strippable
          subjectToAlternativeMinimumTax
          totalAmountIssued
          unitedStatesTaxExempt
          useOfProceeds
          withholdingTax
        }
        country
        createdAt
        createdBy
        currency
        description
        displayId
        equity {
          eps
          marketCap
          peRatio
          shareClass
          tradeLotRoundSize
          tradeLotSize
        }
        esgScores {
          environmental
          governance
          social
          timestamp
          total
        }
        fund {
          allocation {
            asset {
              cash
              equity
              fixedIncome
              other
            }
            currency
            equityCountry
            equityRegion {
              africaExNorthAfrica
              asiaPacificExJapan
              emergingMarketsAsia
              emergingMarketsEurope
              europeExUnitedKingdom
              japan
              latinAmerica
              middleEastNorthAfrica
              northAmericaExUnitedStates
              other
              unitedKingdom
              unitedStates
            }
            fixedIncomeCountry
            fixedIncomeRegion {
              africaExNorthAfrica
              asiaPacificExJapan
              emergingMarketsAsia
              emergingMarketsEurope
              europeExUnitedKingdom
              japan
              latinAmerica
              middleEastNorthAfrica
              northAmericaExUnitedStates
              other
              unitedKingdom
              unitedStates
            }
            gicsSubIndustry {
              communicationServices
              consumerDiscretionary
              consumerStaples
              energy
              financials
              healthCare
              industrials
              informationTechnology
              materials
              other
              realEstate
              utilities
            }
            trbcIndustry {
              basicMaterials
              consumerCyclicals
              consumerNonCyclicals
              energy
              financials
              healthcare
              industrials
              other
              technology
              telecommunicationsServices
              utilities
            }
          }
          apexSupport {
            supportDate
            supported
          }
          assetStatus
          benchmark
          classification
          distributions {
            capitalGain {
              capitalGain {
                accountingDate
                exDate
                exValue
                paymentDate
                recordDate
                reinvestmentDate
                reinvestmentType
                reinvestmentValue
                taxableInterestIncome
              }
              collectibles {
                accountingDate
                exDate
                exValue
                paymentDate
                recordDate
                reinvestmentDate
                reinvestmentType
                reinvestmentValue
                taxableInterestIncome
              }
              longTermCapitalGain {
                accountingDate
                exDate
                exValue
                paymentDate
                recordDate
                reinvestmentDate
                reinvestmentType
                reinvestmentValue
                taxableInterestIncome
              }
              mediumTermCapitalGain {
                accountingDate
                exDate
                exValue
                paymentDate
                recordDate
                reinvestmentDate
                reinvestmentType
                reinvestmentValue
                taxableInterestIncome
              }
              nonQualifiedShortTermCapitalGain {
                accountingDate
                exDate
                exValue
                paymentDate
                recordDate
                reinvestmentDate
                reinvestmentType
                reinvestmentValue
                taxableInterestIncome
              }
              qualifiedShortTermCapitalGain {
                accountingDate
                exDate
                exValue
                paymentDate
                recordDate
                reinvestmentDate
                reinvestmentType
                reinvestmentValue
                taxableInterestIncome
              }
              returnOfCapital {
                accountingDate
                exDate
                exValue
                paymentDate
                recordDate
                reinvestmentDate
                reinvestmentType
                reinvestmentValue
                taxableInterestIncome
              }
              shortTermCapitalGain {
                accountingDate
                exDate
                exValue
                paymentDate
                recordDate
                reinvestmentDate
                reinvestmentType
                reinvestmentValue
                taxableInterestIncome
              }
              superLongTermCapitalGain {
                accountingDate
                exDate
                exValue
                paymentDate
                recordDate
                reinvestmentDate
                reinvestmentType
                reinvestmentValue
                taxableInterestIncome
              }
            }
            foreignTaxCredit {
              foreignTaxCredit {
                accountingDate
                exDate
                exValue
                paymentDate
                recordDate
                reinvestmentDate
                reinvestmentType
                reinvestmentValue
                taxableInterestIncome
              }
              nonQualifiedForeignTaxPaid {
                accountingDate
                exDate
                exValue
                paymentDate
                recordDate
                reinvestmentDate
                reinvestmentType
                reinvestmentValue
                taxableInterestIncome
              }
              qualifiedForeignTaxPaid {
                accountingDate
                exDate
                exValue
                paymentDate
                recordDate
                reinvestmentDate
                reinvestmentType
                reinvestmentValue
                taxableInterestIncome
              }
            }
            income {
              aggregateAccrual {
                accountingDate
                exDate
                exValue
                paymentDate
                recordDate
                reinvestmentDate
                reinvestmentType
                reinvestmentValue
                taxableInterestIncome
              }
              exemptIncome {
                accountingDate
                exDate
                exValue
                paymentDate
                recordDate
                reinvestmentDate
                reinvestmentType
                reinvestmentValue
                taxableInterestIncome
              }
              incomeDividend {
                accountingDate
                exDate
                exValue
                paymentDate
                recordDate
                reinvestmentDate
                reinvestmentType
                reinvestmentValue
                taxableInterestIncome
              }
              interestIncome {
                accountingDate
                exDate
                exValue
                paymentDate
                recordDate
                reinvestmentDate
                reinvestmentType
                reinvestmentValue
                taxableInterestIncome
              }
              nonQualifiedIncomeDividend {
                accountingDate
                exDate
                exValue
                paymentDate
                recordDate
                reinvestmentDate
                reinvestmentType
                reinvestmentValue
                taxableInterestIncome
              }
              qualifiedIncomeDividend {
                accountingDate
                exDate
                exValue
                paymentDate
                recordDate
                reinvestmentDate
                reinvestmentType
                reinvestmentValue
                taxableInterestIncome
              }
            }
            repaymentCategory {
              bonusIssue {
                accountingDate
                exDate
                exValue
                paymentDate
                recordDate
                reinvestmentDate
                reinvestmentType
                reinvestmentValue
                taxableInterestIncome
              }
              factor {
                accountingDate
                exDate
                exValue
                paymentDate
                recordDate
                reinvestmentDate
                reinvestmentType
                reinvestmentValue
                taxableInterestIncome
              }
              repayment {
                accountingDate
                exDate
                exValue
                paymentDate
                recordDate
                reinvestmentDate
                reinvestmentType
                reinvestmentValue
                taxableInterestIncome
              }
              rightsIssue {
                accountingDate
                exDate
                exValue
                paymentDate
                recordDate
                reinvestmentDate
                reinvestmentType
                reinvestmentValue
                taxableInterestIncome
              }
              split {
                accountingDate
                exDate
                exValue
                paymentDate
                recordDate
                reinvestmentDate
                reinvestmentType
                reinvestmentValue
                taxableInterestIncome
              }
            }
          }
          fees {
            backLoad
            frontLoad
            fundExpenseRatio
            managementFee
            marketing12b1Fee
            performanceFee
          }
          focus {
            assetClassFocus
            geoFocus
          }
          fundType
          inceptionDate
          institutional
          managementCompany
          midPrice
          netAssetValuePerShare
          netAssets
          netAssetsDate
          priceDate
          regulatoryStructure
          replicationStrategy
          scores {
            consistentReturn {
              fiveYear
              overall
              tenYear
              threeYear
            }
            expense {
              fiveYear
              overall
              tenYear
              threeYear
            }
            preservation {
              fiveYear
              overall
              tenYear
              threeYear
            }
            taxEfficiency {
              fiveYear
              overall
              tenYear
              threeYear
            }
            totalReturn {
              fiveYear
              overall
              tenYear
              threeYear
            }
          }
          tradeLotSize
          yields {
            dailySecYield
            dailySecYieldDate
            distributionYield
            dividendYield
            lipperDistributionYield
            projectedYield
            secYield
            simpleYieldBegin
            simpleYieldEnd
            thirtyDayYield
            trailingTwelveMonthYield
          }
        }
        id
        identifiers {
          apex
          bbGlobal
          cik
          cins
          cusip
          isin
          primaryTicker
          refinitivAssetId
          refinitivIssuePermId
          refinitivLipperId
          refinitivLipperParentId
          refinitivLipperPermId
          sedol
          valoren
        }
        legalEntity {
          issuingLegalEntityId
          ultimateObligor
          ultimateObligorId
          ultimateParent
          ultimateParentId
          ultimateParentTickerExchange
        }
        liquid
        market
        metadata
        name
        price
        priceDate
        priceQuotes {
          accruedInterest
          askPrice
          askYield
          assetSwapSpread
          benchmarkSpread
          bidPrice
          bidYield
          cbeYieldToMaturity
          cbeYieldToWorst
          closePrice
          date
          highPrice
          lowPrice
          openPrice
          price
          source
          swapSpread
          volume
          yieldToMaturity
          yieldToWorst
          zSpread
        }
        primaryExchange
        primaryExchangeMic
        rating
        scores {
          attractiveness
          credit
          efficiency
          liquidity
          risk
          timestamp
        }
        ticker
        unit
        universes {
          custom
          general
          liquid
          search
          timestamp
        }
        updatedAt
        updatedBy
      }
    }
  }
`;

/**
 * __useRoverUniverseGetAssetByExternalIdQuery__
 *
 * To run a query within a React component, call `useRoverUniverseGetAssetByExternalIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useRoverUniverseGetAssetByExternalIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useRoverUniverseGetAssetByExternalIdQuery({
 *   variables: {
 *      date: // value for 'date'
 *      externalId: // value for 'externalId'
 *      sourceName: // value for 'sourceName'
 *   },
 * });
 */
export function useRoverUniverseGetAssetByExternalIdQuery(
  baseOptions?: Apollo.QueryHookOptions<
    ApolloTypes.RoverUniverseGetAssetByExternalIdQuery,
    ApolloTypes.RoverUniverseGetAssetByExternalIdQueryVariables
  >
) {
  return Apollo.useQuery<
    ApolloTypes.RoverUniverseGetAssetByExternalIdQuery,
    ApolloTypes.RoverUniverseGetAssetByExternalIdQueryVariables
  >(RoverUniverseGetAssetByExternalIdDocument, baseOptions);
}
export function useRoverUniverseGetAssetByExternalIdLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    ApolloTypes.RoverUniverseGetAssetByExternalIdQuery,
    ApolloTypes.RoverUniverseGetAssetByExternalIdQueryVariables
  >
) {
  return Apollo.useLazyQuery<
    ApolloTypes.RoverUniverseGetAssetByExternalIdQuery,
    ApolloTypes.RoverUniverseGetAssetByExternalIdQueryVariables
  >(RoverUniverseGetAssetByExternalIdDocument, baseOptions);
}
export type RoverUniverseGetAssetByExternalIdQueryHookResult = ReturnType<
  typeof useRoverUniverseGetAssetByExternalIdQuery
>;
export type RoverUniverseGetAssetByExternalIdLazyQueryHookResult = ReturnType<
  typeof useRoverUniverseGetAssetByExternalIdLazyQuery
>;
export type RoverUniverseGetAssetByExternalIdQueryResult = Apollo.QueryResult<
  ApolloTypes.RoverUniverseGetAssetByExternalIdQuery,
  ApolloTypes.RoverUniverseGetAssetByExternalIdQueryVariables
>;
export function refetchRoverUniverseGetAssetByExternalIdQuery(
  variables?: ApolloTypes.RoverUniverseGetAssetByExternalIdQueryVariables
) {
  return {
    query: RoverUniverseGetAssetByExternalIdDocument,
    variables
  };
}
export const RoverUniverseGetAssetTimeSeriesDocument = /* #__PURE__ */ gql`
  query roverUniverseGetAssetTimeSeries(
    $endDate: String!
    $field: String!
    $id: String!
    $startDate: String!
  ) {
    roverUniverseGetAssetTimeSeries(
      endDate: $endDate
      field: $field
      id: $id
      startDate: $startDate
    ) {
      assetId
      data {
        timestamp
        value
      }
      field
    }
  }
`;

/**
 * __useRoverUniverseGetAssetTimeSeriesQuery__
 *
 * To run a query within a React component, call `useRoverUniverseGetAssetTimeSeriesQuery` and pass it any options that fit your needs.
 * When your component renders, `useRoverUniverseGetAssetTimeSeriesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useRoverUniverseGetAssetTimeSeriesQuery({
 *   variables: {
 *      endDate: // value for 'endDate'
 *      field: // value for 'field'
 *      id: // value for 'id'
 *      startDate: // value for 'startDate'
 *   },
 * });
 */
export function useRoverUniverseGetAssetTimeSeriesQuery(
  baseOptions?: Apollo.QueryHookOptions<
    ApolloTypes.RoverUniverseGetAssetTimeSeriesQuery,
    ApolloTypes.RoverUniverseGetAssetTimeSeriesQueryVariables
  >
) {
  return Apollo.useQuery<
    ApolloTypes.RoverUniverseGetAssetTimeSeriesQuery,
    ApolloTypes.RoverUniverseGetAssetTimeSeriesQueryVariables
  >(RoverUniverseGetAssetTimeSeriesDocument, baseOptions);
}
export function useRoverUniverseGetAssetTimeSeriesLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    ApolloTypes.RoverUniverseGetAssetTimeSeriesQuery,
    ApolloTypes.RoverUniverseGetAssetTimeSeriesQueryVariables
  >
) {
  return Apollo.useLazyQuery<
    ApolloTypes.RoverUniverseGetAssetTimeSeriesQuery,
    ApolloTypes.RoverUniverseGetAssetTimeSeriesQueryVariables
  >(RoverUniverseGetAssetTimeSeriesDocument, baseOptions);
}
export type RoverUniverseGetAssetTimeSeriesQueryHookResult = ReturnType<
  typeof useRoverUniverseGetAssetTimeSeriesQuery
>;
export type RoverUniverseGetAssetTimeSeriesLazyQueryHookResult = ReturnType<
  typeof useRoverUniverseGetAssetTimeSeriesLazyQuery
>;
export type RoverUniverseGetAssetTimeSeriesQueryResult = Apollo.QueryResult<
  ApolloTypes.RoverUniverseGetAssetTimeSeriesQuery,
  ApolloTypes.RoverUniverseGetAssetTimeSeriesQueryVariables
>;
export function refetchRoverUniverseGetAssetTimeSeriesQuery(
  variables?: ApolloTypes.RoverUniverseGetAssetTimeSeriesQueryVariables
) {
  return {
    query: RoverUniverseGetAssetTimeSeriesDocument,
    variables
  };
}
export const RoverUniverseGetAssetsDocument = /* #__PURE__ */ gql`
  query roverUniverseGetAssets($getAssetsRequestInput: GetAssetsRequestInput) {
    roverUniverseGetAssets(getAssetsRequestInput: $getAssetsRequestInput) {
      assets {
        allocation {
          country
          currency
          debtType {
            assetBackedSecurities
            bonds
            debentures
            mortgageBackedSecurities
            municipalBonds
            notes
            other
            preferredStock
            supranationalBonds
          }
          maturity {
            fiveToTenYears
            greaterThanThirtyYears
            lessThanOneYear
            oneToThreeYears
            other
            tenToTwentyYears
            threeToFiveYears
            twentyToThirtyYears
          }
          rating {
            a
            aa
            aaa
            b
            bb
            bbb
            c
            cc
            ccc
            d
            nr
          }
          region {
            africaExNorthAfrica
            asiaPacificExJapan
            emergingMarketsAsia
            emergingMarketsEurope
            europeExUnitedKingdom
            japan
            latinAmerica
            middleEastNorthAfrica
            northAmericaExUnitedStates
            other
            unitedKingdom
            unitedStates
          }
          sector {
            agency
            communications
            consumerGoods
            energy
            financials
            manufacturing
            municipal
            other
            services
            sovereign
            supranational
            transportation
          }
        }
        analytics {
          convexity
          creditBeta
          currentYield
          date
          defaultAdjustedYield
          distributionYield
          dividendYield
          duration
          effectiveDuration
          gSpread
          optionAdjustedSpread
          recoveryRate
          secYield
          source
          spreadDuration
          standaloneRisk
          yearsToMaturity
          yield
          yieldToCall
          yieldToMaturity
          yieldToWorst
          zSpread
        }
        assetSubtype
        assetType
        bond {
          accruedInterest
          active
          amountOutstanding
          amountOutstandingDate
          annuity
          assetStatus
          callType
          callable
          capType
          classifications {
            barclaysLevel1
            barclaysLevel2
            barclaysLevel3
            barclaysLevel4
            bondhouse
            datastreamSubtype
            datastreamType
            gics
          }
          cleanPrice
          cleanUpCallable
          convertible
          countryOfIssue
          couponClass
          couponResetHistory {
            effectiveDate
            rate
            rateNonAnnual
          }
          couponSchedule {
            cap
            couponClass
            couponFormula
            couponRateRoundingMethod
            dayCount
            effectiveDate
            floor
            indexDescription
            indexHolidayCalendar
            numberCutOffDays
            paymentBusinessDayRule
            paymentCalendarAdjustment
            paymentCalendarAdjustmentValue
            paymentCurrency
            paymentFrequency
            paymentHolidayCalendar
            resetBusinessDayRule
            resetCalendarAdjustment
            resetCalendarAdjustmentValue
            resetFrequency
            resetHolidayCalendar
          }
          couponType
          covered
          creationUnit
          creditEnhancement {
            additionalCreditType
            crossDefaultForGuarantor
            enhancementEffectiveDate
            enhancementEndDate
            enhancementLegNumber
            escrowAccount
            eventsofDefaultforGuarantor
            guarantee
            guarantorPermId
            guarantorProgram
            insurance
            interestCollateralType
            letterOfCreditExpirationDate
            negativePledgeForGuarantor
            otherCovenantsForGuarantor
            percentInterestCollateralized
            percentPrincipalCollateralized
            principalCollateralType
          }
          currentCoupon
          datedDate
          dayCount
          debtServiceType
          defeasable
          denominationIncrement
          dirtyPrice
          dualCurrency
          exDividendCalendarAdjustment
          exDividendCalendarAdjustmentValue
          exchangeListed
          firstCouponDate
          floating
          green
          guaranteed
          hasWarrantsAttached
          inflationProtected
          instrumentType
          issue {
            active
            id
            issueDescription
            issueIdentifier
            issuerIdentifier
            offeringDate
            offeringDescription
            private144a
            privatePlacement
            totalProgramAmount
          }
          issueCurrency
          issueDate
          issuer {
            active
            bankrupt
            country
            headquartersAddress {
              cityOrTown
              country
              stateOrCountyOrRegion
              street1
              street2
              street3
              zipCode
            }
            id
            immediateParentId
            legalName
            longName
            ratings {
              snpLongTerm {
                effectiveDate
                rank
                rating
              }
              snpSeniorSecured {
                effectiveDate
                rank
                rating
              }
              snpSeniorUnsecured {
                effectiveDate
                rank
                rating
              }
              snpShortTerm {
                effectiveDate
                rank
                rating
              }
              snpSubordinated {
                effectiveDate
                rank
                rating
              }
            }
            registeredAddress {
              cityOrTown
              country
              stateOrCountyOrRegion
              street1
              street2
              street3
              zipCode
            }
            sector
            shortName
            sovereignClass
            subsector
            ticker
            ultimateParentId
            url
          }
          lastCouponDate
          lastLiquidEtfConstituentDate
          liquidityCriteria {
            hasAdequateQuotes
            liquidityCriteriaDate
          }
          marketData {
            ejv {
              accruedInterest
              askPrice
              askYield
              assetSwapSpread
              benchmarkSpread
              bidPrice
              bidYield
              cbeYieldToMaturity
              cbeYieldToWorst
              closePrice
              date
              highPrice
              lowPrice
              openPrice
              price
              source
              swapSpread
              volume
              yieldToMaturity
              yieldToWorst
              zSpread
            }
          }
          maturityDate
          mediumTermNote
          minimumDenomination
          nearestCallPeriodEndDate
          nearestCallPeriodStartDate
          nearestCallPrice
          nextResetDate
          ordinaryCallNoticePeriodMaximumAmount
          ordinaryCallNoticePeriodMinimumAmount
          ordinaryCallNoticePeriodUnits
          ordinaryCallOptionType
          ordinaryCallable
          originalAmountIssued
          originalBenchmark
          originalIssuePrice
          originalIssueSpread
          originalYieldToMaturity
          parValue
          partlyPaid
          payableInKind
          performing
          perpetual
          priceQuoteConvention
          priceQuoteMethod
          priceQuoteRoundingMethod
          principalCurrency
          private144a
          privatePlacement
          puttable
          quotedDirty
          recordDateCalendarAdjustment
          recordDateCalendarAdjustmentValue
          redemptionValue
          richCheap {
            effectiveDate
            interquartileRange
            richCheapBps
          }
          seniority
          series
          sinkingOrAmortizing
          sovereignClass
          state
          stateTaxExempt
          straight
          strippable
          subjectToAlternativeMinimumTax
          totalAmountIssued
          unitedStatesTaxExempt
          useOfProceeds
          withholdingTax
        }
        country
        createdAt
        createdBy
        currency
        description
        displayId
        equity {
          eps
          marketCap
          peRatio
          shareClass
          tradeLotRoundSize
          tradeLotSize
        }
        esgScores {
          environmental
          governance
          social
          timestamp
          total
        }
        fund {
          allocation {
            asset {
              cash
              equity
              fixedIncome
              other
            }
            currency
            equityCountry
            equityRegion {
              africaExNorthAfrica
              asiaPacificExJapan
              emergingMarketsAsia
              emergingMarketsEurope
              europeExUnitedKingdom
              japan
              latinAmerica
              middleEastNorthAfrica
              northAmericaExUnitedStates
              other
              unitedKingdom
              unitedStates
            }
            fixedIncomeCountry
            fixedIncomeRegion {
              africaExNorthAfrica
              asiaPacificExJapan
              emergingMarketsAsia
              emergingMarketsEurope
              europeExUnitedKingdom
              japan
              latinAmerica
              middleEastNorthAfrica
              northAmericaExUnitedStates
              other
              unitedKingdom
              unitedStates
            }
            gicsSubIndustry {
              communicationServices
              consumerDiscretionary
              consumerStaples
              energy
              financials
              healthCare
              industrials
              informationTechnology
              materials
              other
              realEstate
              utilities
            }
            trbcIndustry {
              basicMaterials
              consumerCyclicals
              consumerNonCyclicals
              energy
              financials
              healthcare
              industrials
              other
              technology
              telecommunicationsServices
              utilities
            }
          }
          apexSupport {
            supportDate
            supported
          }
          assetStatus
          benchmark
          classification
          distributions {
            capitalGain {
              capitalGain {
                accountingDate
                exDate
                exValue
                paymentDate
                recordDate
                reinvestmentDate
                reinvestmentType
                reinvestmentValue
                taxableInterestIncome
              }
              collectibles {
                accountingDate
                exDate
                exValue
                paymentDate
                recordDate
                reinvestmentDate
                reinvestmentType
                reinvestmentValue
                taxableInterestIncome
              }
              longTermCapitalGain {
                accountingDate
                exDate
                exValue
                paymentDate
                recordDate
                reinvestmentDate
                reinvestmentType
                reinvestmentValue
                taxableInterestIncome
              }
              mediumTermCapitalGain {
                accountingDate
                exDate
                exValue
                paymentDate
                recordDate
                reinvestmentDate
                reinvestmentType
                reinvestmentValue
                taxableInterestIncome
              }
              nonQualifiedShortTermCapitalGain {
                accountingDate
                exDate
                exValue
                paymentDate
                recordDate
                reinvestmentDate
                reinvestmentType
                reinvestmentValue
                taxableInterestIncome
              }
              qualifiedShortTermCapitalGain {
                accountingDate
                exDate
                exValue
                paymentDate
                recordDate
                reinvestmentDate
                reinvestmentType
                reinvestmentValue
                taxableInterestIncome
              }
              returnOfCapital {
                accountingDate
                exDate
                exValue
                paymentDate
                recordDate
                reinvestmentDate
                reinvestmentType
                reinvestmentValue
                taxableInterestIncome
              }
              shortTermCapitalGain {
                accountingDate
                exDate
                exValue
                paymentDate
                recordDate
                reinvestmentDate
                reinvestmentType
                reinvestmentValue
                taxableInterestIncome
              }
              superLongTermCapitalGain {
                accountingDate
                exDate
                exValue
                paymentDate
                recordDate
                reinvestmentDate
                reinvestmentType
                reinvestmentValue
                taxableInterestIncome
              }
            }
            foreignTaxCredit {
              foreignTaxCredit {
                accountingDate
                exDate
                exValue
                paymentDate
                recordDate
                reinvestmentDate
                reinvestmentType
                reinvestmentValue
                taxableInterestIncome
              }
              nonQualifiedForeignTaxPaid {
                accountingDate
                exDate
                exValue
                paymentDate
                recordDate
                reinvestmentDate
                reinvestmentType
                reinvestmentValue
                taxableInterestIncome
              }
              qualifiedForeignTaxPaid {
                accountingDate
                exDate
                exValue
                paymentDate
                recordDate
                reinvestmentDate
                reinvestmentType
                reinvestmentValue
                taxableInterestIncome
              }
            }
            income {
              aggregateAccrual {
                accountingDate
                exDate
                exValue
                paymentDate
                recordDate
                reinvestmentDate
                reinvestmentType
                reinvestmentValue
                taxableInterestIncome
              }
              exemptIncome {
                accountingDate
                exDate
                exValue
                paymentDate
                recordDate
                reinvestmentDate
                reinvestmentType
                reinvestmentValue
                taxableInterestIncome
              }
              incomeDividend {
                accountingDate
                exDate
                exValue
                paymentDate
                recordDate
                reinvestmentDate
                reinvestmentType
                reinvestmentValue
                taxableInterestIncome
              }
              interestIncome {
                accountingDate
                exDate
                exValue
                paymentDate
                recordDate
                reinvestmentDate
                reinvestmentType
                reinvestmentValue
                taxableInterestIncome
              }
              nonQualifiedIncomeDividend {
                accountingDate
                exDate
                exValue
                paymentDate
                recordDate
                reinvestmentDate
                reinvestmentType
                reinvestmentValue
                taxableInterestIncome
              }
              qualifiedIncomeDividend {
                accountingDate
                exDate
                exValue
                paymentDate
                recordDate
                reinvestmentDate
                reinvestmentType
                reinvestmentValue
                taxableInterestIncome
              }
            }
            repaymentCategory {
              bonusIssue {
                accountingDate
                exDate
                exValue
                paymentDate
                recordDate
                reinvestmentDate
                reinvestmentType
                reinvestmentValue
                taxableInterestIncome
              }
              factor {
                accountingDate
                exDate
                exValue
                paymentDate
                recordDate
                reinvestmentDate
                reinvestmentType
                reinvestmentValue
                taxableInterestIncome
              }
              repayment {
                accountingDate
                exDate
                exValue
                paymentDate
                recordDate
                reinvestmentDate
                reinvestmentType
                reinvestmentValue
                taxableInterestIncome
              }
              rightsIssue {
                accountingDate
                exDate
                exValue
                paymentDate
                recordDate
                reinvestmentDate
                reinvestmentType
                reinvestmentValue
                taxableInterestIncome
              }
              split {
                accountingDate
                exDate
                exValue
                paymentDate
                recordDate
                reinvestmentDate
                reinvestmentType
                reinvestmentValue
                taxableInterestIncome
              }
            }
          }
          fees {
            backLoad
            frontLoad
            fundExpenseRatio
            managementFee
            marketing12b1Fee
            performanceFee
          }
          focus {
            assetClassFocus
            geoFocus
          }
          fundType
          inceptionDate
          institutional
          managementCompany
          midPrice
          netAssetValuePerShare
          netAssets
          netAssetsDate
          priceDate
          regulatoryStructure
          replicationStrategy
          scores {
            consistentReturn {
              fiveYear
              overall
              tenYear
              threeYear
            }
            expense {
              fiveYear
              overall
              tenYear
              threeYear
            }
            preservation {
              fiveYear
              overall
              tenYear
              threeYear
            }
            taxEfficiency {
              fiveYear
              overall
              tenYear
              threeYear
            }
            totalReturn {
              fiveYear
              overall
              tenYear
              threeYear
            }
          }
          tradeLotSize
          yields {
            dailySecYield
            dailySecYieldDate
            distributionYield
            dividendYield
            lipperDistributionYield
            projectedYield
            secYield
            simpleYieldBegin
            simpleYieldEnd
            thirtyDayYield
            trailingTwelveMonthYield
          }
        }
        id
        identifiers {
          apex
          bbGlobal
          cik
          cins
          cusip
          isin
          primaryTicker
          refinitivAssetId
          refinitivIssuePermId
          refinitivLipperId
          refinitivLipperParentId
          refinitivLipperPermId
          sedol
          valoren
        }
        legalEntity {
          issuingLegalEntityId
          ultimateObligor
          ultimateObligorId
          ultimateParent
          ultimateParentId
          ultimateParentTickerExchange
        }
        liquid
        market
        metadata
        name
        price
        priceDate
        priceQuotes {
          accruedInterest
          askPrice
          askYield
          assetSwapSpread
          benchmarkSpread
          bidPrice
          bidYield
          cbeYieldToMaturity
          cbeYieldToWorst
          closePrice
          date
          highPrice
          lowPrice
          openPrice
          price
          source
          swapSpread
          volume
          yieldToMaturity
          yieldToWorst
          zSpread
        }
        primaryExchange
        primaryExchangeMic
        rating
        scores {
          attractiveness
          credit
          efficiency
          liquidity
          risk
          timestamp
        }
        ticker
        unit
        universes {
          custom
          general
          liquid
          search
          timestamp
        }
        updatedAt
        updatedBy
      }
    }
  }
`;

/**
 * __useRoverUniverseGetAssetsQuery__
 *
 * To run a query within a React component, call `useRoverUniverseGetAssetsQuery` and pass it any options that fit your needs.
 * When your component renders, `useRoverUniverseGetAssetsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useRoverUniverseGetAssetsQuery({
 *   variables: {
 *      getAssetsRequestInput: // value for 'getAssetsRequestInput'
 *   },
 * });
 */
export function useRoverUniverseGetAssetsQuery(
  baseOptions?: Apollo.QueryHookOptions<
    ApolloTypes.RoverUniverseGetAssetsQuery,
    ApolloTypes.RoverUniverseGetAssetsQueryVariables
  >
) {
  return Apollo.useQuery<
    ApolloTypes.RoverUniverseGetAssetsQuery,
    ApolloTypes.RoverUniverseGetAssetsQueryVariables
  >(RoverUniverseGetAssetsDocument, baseOptions);
}
export function useRoverUniverseGetAssetsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    ApolloTypes.RoverUniverseGetAssetsQuery,
    ApolloTypes.RoverUniverseGetAssetsQueryVariables
  >
) {
  return Apollo.useLazyQuery<
    ApolloTypes.RoverUniverseGetAssetsQuery,
    ApolloTypes.RoverUniverseGetAssetsQueryVariables
  >(RoverUniverseGetAssetsDocument, baseOptions);
}
export type RoverUniverseGetAssetsQueryHookResult = ReturnType<
  typeof useRoverUniverseGetAssetsQuery
>;
export type RoverUniverseGetAssetsLazyQueryHookResult = ReturnType<
  typeof useRoverUniverseGetAssetsLazyQuery
>;
export type RoverUniverseGetAssetsQueryResult = Apollo.QueryResult<
  ApolloTypes.RoverUniverseGetAssetsQuery,
  ApolloTypes.RoverUniverseGetAssetsQueryVariables
>;
export function refetchRoverUniverseGetAssetsQuery(
  variables?: ApolloTypes.RoverUniverseGetAssetsQueryVariables
) {
  return { query: RoverUniverseGetAssetsDocument, variables };
}
export const RoverUniverseGetExternalIdMappingDocument = /* #__PURE__ */ gql`
  query roverUniverseGetExternalIdMapping(
    $externalId: String!
    $sourceName: String!
  ) {
    roverUniverseGetExternalIdMapping(
      externalId: $externalId
      sourceName: $sourceName
    ) {
      externalIdMapping {
        assetId
        createdAt
        externalId
        metadata
        sourceName
        updatedAt
      }
    }
  }
`;

/**
 * __useRoverUniverseGetExternalIdMappingQuery__
 *
 * To run a query within a React component, call `useRoverUniverseGetExternalIdMappingQuery` and pass it any options that fit your needs.
 * When your component renders, `useRoverUniverseGetExternalIdMappingQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useRoverUniverseGetExternalIdMappingQuery({
 *   variables: {
 *      externalId: // value for 'externalId'
 *      sourceName: // value for 'sourceName'
 *   },
 * });
 */
export function useRoverUniverseGetExternalIdMappingQuery(
  baseOptions?: Apollo.QueryHookOptions<
    ApolloTypes.RoverUniverseGetExternalIdMappingQuery,
    ApolloTypes.RoverUniverseGetExternalIdMappingQueryVariables
  >
) {
  return Apollo.useQuery<
    ApolloTypes.RoverUniverseGetExternalIdMappingQuery,
    ApolloTypes.RoverUniverseGetExternalIdMappingQueryVariables
  >(RoverUniverseGetExternalIdMappingDocument, baseOptions);
}
export function useRoverUniverseGetExternalIdMappingLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    ApolloTypes.RoverUniverseGetExternalIdMappingQuery,
    ApolloTypes.RoverUniverseGetExternalIdMappingQueryVariables
  >
) {
  return Apollo.useLazyQuery<
    ApolloTypes.RoverUniverseGetExternalIdMappingQuery,
    ApolloTypes.RoverUniverseGetExternalIdMappingQueryVariables
  >(RoverUniverseGetExternalIdMappingDocument, baseOptions);
}
export type RoverUniverseGetExternalIdMappingQueryHookResult = ReturnType<
  typeof useRoverUniverseGetExternalIdMappingQuery
>;
export type RoverUniverseGetExternalIdMappingLazyQueryHookResult = ReturnType<
  typeof useRoverUniverseGetExternalIdMappingLazyQuery
>;
export type RoverUniverseGetExternalIdMappingQueryResult = Apollo.QueryResult<
  ApolloTypes.RoverUniverseGetExternalIdMappingQuery,
  ApolloTypes.RoverUniverseGetExternalIdMappingQueryVariables
>;
export function refetchRoverUniverseGetExternalIdMappingQuery(
  variables?: ApolloTypes.RoverUniverseGetExternalIdMappingQueryVariables
) {
  return {
    query: RoverUniverseGetExternalIdMappingDocument,
    variables
  };
}
export const RoverUniverseGetInventoryDocument = /* #__PURE__ */ gql`
  query roverUniverseGetInventory($id: String!, $institutionId: String!) {
    roverUniverseGetInventory(id: $id, institutionId: $institutionId) {
      inventory {
        app
        assetIds
        id
        name
        updatedAt
      }
    }
  }
`;

/**
 * __useRoverUniverseGetInventoryQuery__
 *
 * To run a query within a React component, call `useRoverUniverseGetInventoryQuery` and pass it any options that fit your needs.
 * When your component renders, `useRoverUniverseGetInventoryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useRoverUniverseGetInventoryQuery({
 *   variables: {
 *      id: // value for 'id'
 *      institutionId: // value for 'institutionId'
 *   },
 * });
 */
export function useRoverUniverseGetInventoryQuery(
  baseOptions?: Apollo.QueryHookOptions<
    ApolloTypes.RoverUniverseGetInventoryQuery,
    ApolloTypes.RoverUniverseGetInventoryQueryVariables
  >
) {
  return Apollo.useQuery<
    ApolloTypes.RoverUniverseGetInventoryQuery,
    ApolloTypes.RoverUniverseGetInventoryQueryVariables
  >(RoverUniverseGetInventoryDocument, baseOptions);
}
export function useRoverUniverseGetInventoryLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    ApolloTypes.RoverUniverseGetInventoryQuery,
    ApolloTypes.RoverUniverseGetInventoryQueryVariables
  >
) {
  return Apollo.useLazyQuery<
    ApolloTypes.RoverUniverseGetInventoryQuery,
    ApolloTypes.RoverUniverseGetInventoryQueryVariables
  >(RoverUniverseGetInventoryDocument, baseOptions);
}
export type RoverUniverseGetInventoryQueryHookResult = ReturnType<
  typeof useRoverUniverseGetInventoryQuery
>;
export type RoverUniverseGetInventoryLazyQueryHookResult = ReturnType<
  typeof useRoverUniverseGetInventoryLazyQuery
>;
export type RoverUniverseGetInventoryQueryResult = Apollo.QueryResult<
  ApolloTypes.RoverUniverseGetInventoryQuery,
  ApolloTypes.RoverUniverseGetInventoryQueryVariables
>;
export function refetchRoverUniverseGetInventoryQuery(
  variables?: ApolloTypes.RoverUniverseGetInventoryQueryVariables
) {
  return { query: RoverUniverseGetInventoryDocument, variables };
}
export const RoverUniverseGetIssueDocument = /* #__PURE__ */ gql`
  query roverUniverseGetIssue($id: String!) {
    roverUniverseGetIssue(id: $id) {
      issue {
        active
        id
        issueDescription
        issueIdentifier
        issuerIdentifier
        offeringDate
        offeringDescription
        private144a
        privatePlacement
        totalProgramAmount
      }
    }
  }
`;

/**
 * __useRoverUniverseGetIssueQuery__
 *
 * To run a query within a React component, call `useRoverUniverseGetIssueQuery` and pass it any options that fit your needs.
 * When your component renders, `useRoverUniverseGetIssueQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useRoverUniverseGetIssueQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useRoverUniverseGetIssueQuery(
  baseOptions?: Apollo.QueryHookOptions<
    ApolloTypes.RoverUniverseGetIssueQuery,
    ApolloTypes.RoverUniverseGetIssueQueryVariables
  >
) {
  return Apollo.useQuery<
    ApolloTypes.RoverUniverseGetIssueQuery,
    ApolloTypes.RoverUniverseGetIssueQueryVariables
  >(RoverUniverseGetIssueDocument, baseOptions);
}
export function useRoverUniverseGetIssueLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    ApolloTypes.RoverUniverseGetIssueQuery,
    ApolloTypes.RoverUniverseGetIssueQueryVariables
  >
) {
  return Apollo.useLazyQuery<
    ApolloTypes.RoverUniverseGetIssueQuery,
    ApolloTypes.RoverUniverseGetIssueQueryVariables
  >(RoverUniverseGetIssueDocument, baseOptions);
}
export type RoverUniverseGetIssueQueryHookResult = ReturnType<
  typeof useRoverUniverseGetIssueQuery
>;
export type RoverUniverseGetIssueLazyQueryHookResult = ReturnType<
  typeof useRoverUniverseGetIssueLazyQuery
>;
export type RoverUniverseGetIssueQueryResult = Apollo.QueryResult<
  ApolloTypes.RoverUniverseGetIssueQuery,
  ApolloTypes.RoverUniverseGetIssueQueryVariables
>;
export function refetchRoverUniverseGetIssueQuery(
  variables?: ApolloTypes.RoverUniverseGetIssueQueryVariables
) {
  return { query: RoverUniverseGetIssueDocument, variables };
}
export const RoverUniverseGetIssuerDocument = /* #__PURE__ */ gql`
  query roverUniverseGetIssuer($id: String!) {
    roverUniverseGetIssuer(id: $id) {
      issuer {
        active
        bankrupt
        country
        headquartersAddress {
          cityOrTown
          country
          stateOrCountyOrRegion
          street1
          street2
          street3
          zipCode
        }
        id
        immediateParentId
        legalName
        longName
        ratings {
          snpLongTerm {
            effectiveDate
            rank
            rating
          }
          snpSeniorSecured {
            effectiveDate
            rank
            rating
          }
          snpSeniorUnsecured {
            effectiveDate
            rank
            rating
          }
          snpShortTerm {
            effectiveDate
            rank
            rating
          }
          snpSubordinated {
            effectiveDate
            rank
            rating
          }
        }
        registeredAddress {
          cityOrTown
          country
          stateOrCountyOrRegion
          street1
          street2
          street3
          zipCode
        }
        sector
        shortName
        sovereignClass
        subsector
        ticker
        ultimateParentId
        url
      }
    }
  }
`;

/**
 * __useRoverUniverseGetIssuerQuery__
 *
 * To run a query within a React component, call `useRoverUniverseGetIssuerQuery` and pass it any options that fit your needs.
 * When your component renders, `useRoverUniverseGetIssuerQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useRoverUniverseGetIssuerQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useRoverUniverseGetIssuerQuery(
  baseOptions?: Apollo.QueryHookOptions<
    ApolloTypes.RoverUniverseGetIssuerQuery,
    ApolloTypes.RoverUniverseGetIssuerQueryVariables
  >
) {
  return Apollo.useQuery<
    ApolloTypes.RoverUniverseGetIssuerQuery,
    ApolloTypes.RoverUniverseGetIssuerQueryVariables
  >(RoverUniverseGetIssuerDocument, baseOptions);
}
export function useRoverUniverseGetIssuerLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    ApolloTypes.RoverUniverseGetIssuerQuery,
    ApolloTypes.RoverUniverseGetIssuerQueryVariables
  >
) {
  return Apollo.useLazyQuery<
    ApolloTypes.RoverUniverseGetIssuerQuery,
    ApolloTypes.RoverUniverseGetIssuerQueryVariables
  >(RoverUniverseGetIssuerDocument, baseOptions);
}
export type RoverUniverseGetIssuerQueryHookResult = ReturnType<
  typeof useRoverUniverseGetIssuerQuery
>;
export type RoverUniverseGetIssuerLazyQueryHookResult = ReturnType<
  typeof useRoverUniverseGetIssuerLazyQuery
>;
export type RoverUniverseGetIssuerQueryResult = Apollo.QueryResult<
  ApolloTypes.RoverUniverseGetIssuerQuery,
  ApolloTypes.RoverUniverseGetIssuerQueryVariables
>;
export function refetchRoverUniverseGetIssuerQuery(
  variables?: ApolloTypes.RoverUniverseGetIssuerQueryVariables
) {
  return { query: RoverUniverseGetIssuerDocument, variables };
}
export const RoverWhitelistListBestFitWhitelistCandidatesDocument = /* #__PURE__ */ gql`
  query roverWhitelistListBestFitWhitelistCandidates($institutionId: String) {
    roverWhitelistListBestFitWhitelistCandidates(
      institutionId: $institutionId
    ) {
      pools {
        candidates {
          assetId
          cusip
          duration
          isin
          minimumDenomination
          name
          rating
          sector
          subsector
          ticker
          yearsToMaturity
          yield
        }
        source
      }
    }
  }
`;

/**
 * __useRoverWhitelistListBestFitWhitelistCandidatesQuery__
 *
 * To run a query within a React component, call `useRoverWhitelistListBestFitWhitelistCandidatesQuery` and pass it any options that fit your needs.
 * When your component renders, `useRoverWhitelistListBestFitWhitelistCandidatesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useRoverWhitelistListBestFitWhitelistCandidatesQuery({
 *   variables: {
 *      institutionId: // value for 'institutionId'
 *   },
 * });
 */
export function useRoverWhitelistListBestFitWhitelistCandidatesQuery(
  baseOptions?: Apollo.QueryHookOptions<
    ApolloTypes.RoverWhitelistListBestFitWhitelistCandidatesQuery,
    ApolloTypes.RoverWhitelistListBestFitWhitelistCandidatesQueryVariables
  >
) {
  return Apollo.useQuery<
    ApolloTypes.RoverWhitelistListBestFitWhitelistCandidatesQuery,
    ApolloTypes.RoverWhitelistListBestFitWhitelistCandidatesQueryVariables
  >(RoverWhitelistListBestFitWhitelistCandidatesDocument, baseOptions);
}
export function useRoverWhitelistListBestFitWhitelistCandidatesLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    ApolloTypes.RoverWhitelistListBestFitWhitelistCandidatesQuery,
    ApolloTypes.RoverWhitelistListBestFitWhitelistCandidatesQueryVariables
  >
) {
  return Apollo.useLazyQuery<
    ApolloTypes.RoverWhitelistListBestFitWhitelistCandidatesQuery,
    ApolloTypes.RoverWhitelistListBestFitWhitelistCandidatesQueryVariables
  >(RoverWhitelistListBestFitWhitelistCandidatesDocument, baseOptions);
}
export type RoverWhitelistListBestFitWhitelistCandidatesQueryHookResult = ReturnType<
  typeof useRoverWhitelistListBestFitWhitelistCandidatesQuery
>;
export type RoverWhitelistListBestFitWhitelistCandidatesLazyQueryHookResult = ReturnType<
  typeof useRoverWhitelistListBestFitWhitelistCandidatesLazyQuery
>;
export type RoverWhitelistListBestFitWhitelistCandidatesQueryResult = Apollo.QueryResult<
  ApolloTypes.RoverWhitelistListBestFitWhitelistCandidatesQuery,
  ApolloTypes.RoverWhitelistListBestFitWhitelistCandidatesQueryVariables
>;
export function refetchRoverWhitelistListBestFitWhitelistCandidatesQuery(
  variables?: ApolloTypes.RoverWhitelistListBestFitWhitelistCandidatesQueryVariables
) {
  return {
    query: RoverWhitelistListBestFitWhitelistCandidatesDocument,
    variables
  };
}
export const TrafixGetHeartbeatDocument = /* #__PURE__ */ gql`
  query trafixGetHeartbeat {
    trafixGetHeartbeat {
      heartbeat
    }
  }
`;

/**
 * __useTrafixGetHeartbeatQuery__
 *
 * To run a query within a React component, call `useTrafixGetHeartbeatQuery` and pass it any options that fit your needs.
 * When your component renders, `useTrafixGetHeartbeatQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTrafixGetHeartbeatQuery({
 *   variables: {
 *   },
 * });
 */
export function useTrafixGetHeartbeatQuery(
  baseOptions?: Apollo.QueryHookOptions<
    ApolloTypes.TrafixGetHeartbeatQuery,
    ApolloTypes.TrafixGetHeartbeatQueryVariables
  >
) {
  return Apollo.useQuery<
    ApolloTypes.TrafixGetHeartbeatQuery,
    ApolloTypes.TrafixGetHeartbeatQueryVariables
  >(TrafixGetHeartbeatDocument, baseOptions);
}
export function useTrafixGetHeartbeatLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    ApolloTypes.TrafixGetHeartbeatQuery,
    ApolloTypes.TrafixGetHeartbeatQueryVariables
  >
) {
  return Apollo.useLazyQuery<
    ApolloTypes.TrafixGetHeartbeatQuery,
    ApolloTypes.TrafixGetHeartbeatQueryVariables
  >(TrafixGetHeartbeatDocument, baseOptions);
}
export type TrafixGetHeartbeatQueryHookResult = ReturnType<
  typeof useTrafixGetHeartbeatQuery
>;
export type TrafixGetHeartbeatLazyQueryHookResult = ReturnType<
  typeof useTrafixGetHeartbeatLazyQuery
>;
export type TrafixGetHeartbeatQueryResult = Apollo.QueryResult<
  ApolloTypes.TrafixGetHeartbeatQuery,
  ApolloTypes.TrafixGetHeartbeatQueryVariables
>;
export function refetchTrafixGetHeartbeatQuery(
  variables?: ApolloTypes.TrafixGetHeartbeatQueryVariables
) {
  return { query: TrafixGetHeartbeatDocument, variables };
}
export const TrafixGetOrderDocument = /* #__PURE__ */ gql`
  query trafixGetOrder($orderId: String!) {
    trafixGetOrder(orderId: $orderId) {
      trafixOrder {
        assetId
        createdAt
        direction
        fill
        fullFillRequired
        goodTillCancel
        orderId
        portfolioId
        priceLimit
        quantity
        reason
        status
        ticker
        trafixOrderId
        updatedAt
      }
    }
  }
`;

/**
 * __useTrafixGetOrderQuery__
 *
 * To run a query within a React component, call `useTrafixGetOrderQuery` and pass it any options that fit your needs.
 * When your component renders, `useTrafixGetOrderQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTrafixGetOrderQuery({
 *   variables: {
 *      orderId: // value for 'orderId'
 *   },
 * });
 */
export function useTrafixGetOrderQuery(
  baseOptions?: Apollo.QueryHookOptions<
    ApolloTypes.TrafixGetOrderQuery,
    ApolloTypes.TrafixGetOrderQueryVariables
  >
) {
  return Apollo.useQuery<
    ApolloTypes.TrafixGetOrderQuery,
    ApolloTypes.TrafixGetOrderQueryVariables
  >(TrafixGetOrderDocument, baseOptions);
}
export function useTrafixGetOrderLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    ApolloTypes.TrafixGetOrderQuery,
    ApolloTypes.TrafixGetOrderQueryVariables
  >
) {
  return Apollo.useLazyQuery<
    ApolloTypes.TrafixGetOrderQuery,
    ApolloTypes.TrafixGetOrderQueryVariables
  >(TrafixGetOrderDocument, baseOptions);
}
export type TrafixGetOrderQueryHookResult = ReturnType<
  typeof useTrafixGetOrderQuery
>;
export type TrafixGetOrderLazyQueryHookResult = ReturnType<
  typeof useTrafixGetOrderLazyQuery
>;
export type TrafixGetOrderQueryResult = Apollo.QueryResult<
  ApolloTypes.TrafixGetOrderQuery,
  ApolloTypes.TrafixGetOrderQueryVariables
>;
export function refetchTrafixGetOrderQuery(
  variables?: ApolloTypes.TrafixGetOrderQueryVariables
) {
  return { query: TrafixGetOrderDocument, variables };
}
export const TrafixGetTradeDocument = /* #__PURE__ */ gql`
  query trafixGetTrade($tradeId: String!) {
    trafixGetTrade(tradeId: $tradeId) {
      trafixTrade {
        assetId
        createdAt
        direction
        executionId
        orderId
        portfolioId
        quantity
        tradeId
        tradePrice
        trafixOrderId
        trafixTradeId
      }
    }
  }
`;

/**
 * __useTrafixGetTradeQuery__
 *
 * To run a query within a React component, call `useTrafixGetTradeQuery` and pass it any options that fit your needs.
 * When your component renders, `useTrafixGetTradeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTrafixGetTradeQuery({
 *   variables: {
 *      tradeId: // value for 'tradeId'
 *   },
 * });
 */
export function useTrafixGetTradeQuery(
  baseOptions?: Apollo.QueryHookOptions<
    ApolloTypes.TrafixGetTradeQuery,
    ApolloTypes.TrafixGetTradeQueryVariables
  >
) {
  return Apollo.useQuery<
    ApolloTypes.TrafixGetTradeQuery,
    ApolloTypes.TrafixGetTradeQueryVariables
  >(TrafixGetTradeDocument, baseOptions);
}
export function useTrafixGetTradeLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    ApolloTypes.TrafixGetTradeQuery,
    ApolloTypes.TrafixGetTradeQueryVariables
  >
) {
  return Apollo.useLazyQuery<
    ApolloTypes.TrafixGetTradeQuery,
    ApolloTypes.TrafixGetTradeQueryVariables
  >(TrafixGetTradeDocument, baseOptions);
}
export type TrafixGetTradeQueryHookResult = ReturnType<
  typeof useTrafixGetTradeQuery
>;
export type TrafixGetTradeLazyQueryHookResult = ReturnType<
  typeof useTrafixGetTradeLazyQuery
>;
export type TrafixGetTradeQueryResult = Apollo.QueryResult<
  ApolloTypes.TrafixGetTradeQuery,
  ApolloTypes.TrafixGetTradeQueryVariables
>;
export function refetchTrafixGetTradeQuery(
  variables?: ApolloTypes.TrafixGetTradeQueryVariables
) {
  return { query: TrafixGetTradeDocument, variables };
}
export const TrafixGetTradesDocument = /* #__PURE__ */ gql`
  query trafixGetTrades($orderId: String!) {
    trafixGetTrades(orderId: $orderId) {
      trafixTrades {
        assetId
        createdAt
        direction
        executionId
        orderId
        portfolioId
        quantity
        tradeId
        tradePrice
        trafixOrderId
        trafixTradeId
      }
    }
  }
`;

/**
 * __useTrafixGetTradesQuery__
 *
 * To run a query within a React component, call `useTrafixGetTradesQuery` and pass it any options that fit your needs.
 * When your component renders, `useTrafixGetTradesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTrafixGetTradesQuery({
 *   variables: {
 *      orderId: // value for 'orderId'
 *   },
 * });
 */
export function useTrafixGetTradesQuery(
  baseOptions?: Apollo.QueryHookOptions<
    ApolloTypes.TrafixGetTradesQuery,
    ApolloTypes.TrafixGetTradesQueryVariables
  >
) {
  return Apollo.useQuery<
    ApolloTypes.TrafixGetTradesQuery,
    ApolloTypes.TrafixGetTradesQueryVariables
  >(TrafixGetTradesDocument, baseOptions);
}
export function useTrafixGetTradesLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    ApolloTypes.TrafixGetTradesQuery,
    ApolloTypes.TrafixGetTradesQueryVariables
  >
) {
  return Apollo.useLazyQuery<
    ApolloTypes.TrafixGetTradesQuery,
    ApolloTypes.TrafixGetTradesQueryVariables
  >(TrafixGetTradesDocument, baseOptions);
}
export type TrafixGetTradesQueryHookResult = ReturnType<
  typeof useTrafixGetTradesQuery
>;
export type TrafixGetTradesLazyQueryHookResult = ReturnType<
  typeof useTrafixGetTradesLazyQuery
>;
export type TrafixGetTradesQueryResult = Apollo.QueryResult<
  ApolloTypes.TrafixGetTradesQuery,
  ApolloTypes.TrafixGetTradesQueryVariables
>;
export function refetchTrafixGetTradesQuery(
  variables?: ApolloTypes.TrafixGetTradesQueryVariables
) {
  return { query: TrafixGetTradesDocument, variables };
}
