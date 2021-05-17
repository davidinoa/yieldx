import YieldXPortfolio from "models/YieldXPortfolio";
import { v4 as uuidv4 } from "uuid";
import {
  AppType2,
  IncomePortfoliosGetPortfolioMappingDocument,
  Portfolio3Input,
  PortfolioStatus,
  PortfolioType,
  PositionManagementGetExternalPortfolioDocument,
  usePostExternalPortfoliosMutation,
  usePostPortfolioMappingMutation
} from "providers/graphql/hooks";
import { PortfolioType as IncPortfolioType } from "@bondhouse/income-portfolios";

function useSavePaperPortfolio() {
  const [createOrUpdatePortfolio] = usePostExternalPortfoliosMutation();
  const [createOrUpdateProposalMapping] = usePostPortfolioMappingMutation();
  return async (
    portfolio: YieldXPortfolio,
    name: string,
    originalPortfolio?: YieldXPortfolio | null
  ) => {
    const isUpdating =
      originalPortfolio?.getType() !== "LIVE" && !!originalPortfolio;
    const tempPortfolio = portfolio.clone();
    tempPortfolio.setName(name);
    tempPortfolio.setType(IncPortfolioType.EXTERNAL);
    if (isUpdating && originalPortfolio)
      tempPortfolio.setId(originalPortfolio.getId());

    const id = !isUpdating ? uuidv4() : undefined;
    const { proposal } = tempPortfolio.getInpaasData() || {};
    const portfolioReq = tempPortfolio.asPmsPortfolio();
    portfolioReq.id =
      !id && originalPortfolio ? originalPortfolio.getId() : id ?? "";
    if (!isUpdating) {
      const now = `${new Date().toISOString().split(".")[0]}Z`;
      portfolioReq.updatedAt = now;
      portfolioReq.createdAt = now;
    }
    await createOrUpdatePortfolio({
      update(cache, { data }) {
        const updated = data?.postExternalPortfolios?.updated;
        const created = data?.postExternalPortfolios?.created;
        if (updated) {
          cache.modify({
            id: `Portfolio3:${tempPortfolio.getId()}`,
            fields: {
              name() {
                return name;
              },
              updatedAt() {
                return new Date().toISOString();
              },
              positions() {
                return portfolioReq.positions.map(it => ({
                  ...it,
                  portfolioId: id || portfolioReq.id
                }));
              }
            }
          });
        } else if (created) {
          cache.writeQuery({
            data: {
              ...portfolioReq,
              positions: portfolioReq.positions.map(it => ({
                ...it,
                portfolioId: id || portfolioReq.id
              }))
            },
            query: PositionManagementGetExternalPortfolioDocument,
            variables: {
              id: id || portfolioReq.id
            }
          });
        }
      },
      variables: {
        createOrReplaceExternalPortfolioRequestInput: {
          portfolio: {
            ...portfolioReq,
            app: proposal === undefined ? AppType2.Custom : AppType2.Inpaas,
            status: PortfolioStatus.Ready,
            positions: portfolioReq.positions.map(it => ({
              ...it,
              portfolioId: id || portfolioReq.id
            }))
          } as Portfolio3Input
        }
      }
    });
    if (proposal) {
      createOrUpdateProposalMapping({
        variables: {
          portfolioId: id || portfolioReq.id,
          createOrReplacePortfolioMappingRequestInput: {
            portfolioType: PortfolioType.External,
            proposalId: proposal.proposalId
          }
        },
        update(cache, { data }) {
          const updated = data?.postPortfolioMapping?.updated;
          const created = data?.postPortfolioMapping?.created;
          if (updated) {
            cache.modify({
              id: `PortfolioMapping2:${id ?? portfolioReq.id}`,
              fields: {
                proposalId() {
                  return proposal.proposalId;
                }
              }
            });
          } else if (created) {
            cache.writeQuery({
              data: {
                incomePortfoliosGetPortfolioMapping: {
                  portfolioId: id || portfolioReq.id,
                  portfolioType: PortfolioType.External,
                  proposalId: proposal.proposalId
                }
              },
              query: IncomePortfoliosGetPortfolioMappingDocument,
              variables: {
                portfolioId: id || portfolioReq.id
              }
            });
          }
        }
      });
    }
    return id ?? portfolioReq.id;
  };
}

export default useSavePaperPortfolio;
