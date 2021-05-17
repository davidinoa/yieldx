import React, { useCallback } from "react";
import PlaidLink, { PlaidLinkProps } from "react-plaid-link";
import styled from "styled-components";
import axios from "axios";
import { createButtonStyle } from "containers/PortfolioExecution/Select.styles";
import {
  CreateLinkedBankAccountRequestInput,
  usePostInvestorLinkedBankAccountsMutation,
  InvestorGetLinkedBankAccountsDocument,
  InvestorGetLinkedBankAccountsQueryVariables,
  InvestorGetLinkedBankAccountsQuery,
  AccountType2
} from "providers/graphql/hooks";

interface Props {
  investorId: string;
  onDone: () => void;
}

const StyledPlaidLink = styled(PlaidLink)`
  ${createButtonStyle}
`;
function PlaidButton({ investorId }: Props) {
  // sandbox
  const [plaidEnv, setPlaidEnv] = React.useState<PlaidLinkProps["env"]>();
  React.useEffect(() => {
    axios
      .get(`/yieldx/apis/v1/config`)
      .then(response => {
        setPlaidEnv(response.data.plaidEnv);
      })
      .catch(error => console.error(error));
  }, []);

  const [postLinkBankAccount] = usePostInvestorLinkedBankAccountsMutation();
  const handleOnSuccess: PlaidLinkProps["onSuccess"] = useCallback(
    async (token: string, metadata) => {
      const createLinkedBankAccountRequestInput: CreateLinkedBankAccountRequestInput = {
        accountId: metadata.accounts[0].id,
        linkSessionId: metadata.link_session_id,
        publicToken: token,
        institution: metadata.institution.name,
        mask: metadata.accounts[0].mask,
        name: metadata.accounts[0].name,
        accountType: metadata.accounts[0].subtype.toUpperCase() as AccountType2
      };
      await postLinkBankAccount({
        variables: {
          createLinkedBankAccountRequestInput,
          investorId
        },
        update(cache, { data }) {
          const currData = cache.readQuery<
            InvestorGetLinkedBankAccountsQuery,
            InvestorGetLinkedBankAccountsQueryVariables
          >({
            query: InvestorGetLinkedBankAccountsDocument,
            variables: {
              investorId
            }
          });
          const newLinkedBank =
            data?.postInvestorLinkedBankAccounts?.linkedBankAccount;
          const linkedBanks =
            currData?.investorGetLinkedBankAccounts?.linkedBankAccounts || [];
          cache.writeQuery({
            query: InvestorGetLinkedBankAccountsDocument,
            data: {
              investorGetLinkedBankAccounts: {
                linkedBankAccounts: [...linkedBanks, newLinkedBank]
              }
            }
          });
        }
      });
    },
    [investorId, postLinkBankAccount]
  );

  if (!plaidEnv) return null;
  return (
    <StyledPlaidLink
      clientName="BondHouse"
      env={plaidEnv}
      product={["auth"]}
      publicKey="1d71a0372cf53cfbdac0b83a7e36ae"
      onSuccess={handleOnSuccess}
    >
      Link new account
    </StyledPlaidLink>
  );
}

export default PlaidButton;
