import { rest } from "msw";
import { InventoryMapping } from "@bondhouse/iam";

const urlRegex = /^\/iam\/api\/v1\/institutions\/(.*)\/inventories$/;
export const createGetInventoryMappingHandler: CreateInventoryMappingHandler = ({
  bestFit,
  inpaas,
  assetExplorer
}) =>
  rest.get(`/iam/api/v1/institutions/*/inventories`, (req, res, ctx) => {
    const match = urlRegex.exec(req.url.pathname);
    if (match?.length === 2) {
      const response: InventoryMapping = {
        institutionId: match[1],
        bestFit,
        inpaas,
        assetExplorer
      };
      return res(ctx.status(200), ctx.json(response));
    }
    return undefined;
  });

interface CreateInventoryMappingHandlerParams {
  bestFit?: string;
  inpaas?: string;
  assetExplorer?: string;
}

type CreateInventoryMappingHandler = (
  params: CreateInventoryMappingHandlerParams
) => ReturnType<typeof rest["get"]>;
