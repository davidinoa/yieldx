import { rest } from "msw";
import { GetCurrentUserResponse } from "@bondhouse/iam";
import { externalRegex, liveRegex } from "../../recoil-state/portfoliosApi";

// This will limit the amount of live portfolios fetched in list to 3
export const limitPortfolioList = rest.get(
  "/iam/api/v1/users/current-user",
  async (req, res, ctx) => {
    // Perform an original request to the intercepted request URL
    const originalResponse: GetCurrentUserResponse = await ctx.fetch(req);
    let livePortfolioCount = 0;
    let externalPortfolioCount = 0;
    const policies =
      originalResponse.user.policies?.reverse()?.filter(it => {
        const isLive = liveRegex.exec(it.resource) !== null;
        const isExternal = externalRegex.exec(it.resource) !== null;
        if (!isLive && !isExternal) return true;
        if (isLive && livePortfolioCount <= 3) {
          livePortfolioCount += 1;
          return true;
        }
        if (isExternal && externalPortfolioCount <= 3) {
          externalPortfolioCount += 1;
          return true;
        }
        return false;
      }) ?? [];
    return res(
      ctx.json({
        user: {
          ...originalResponse.user,
          policies: [
            {
              resource: "/apis/position-management/v1/portfolios/mock-*",
              actions: ["*"]
            },
            ...policies
          ]
        }
      })
    );
  }
);
