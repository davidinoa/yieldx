import { optimizationService } from "../../../../services";
import YieldXPortfolio from "../../../../models/YieldXPortfolio";

export function optimize(
  initialPortfolio: YieldXPortfolio,
  whitelist: string[],
  objective: "maximizeYield" | "minimizeRisk" | "minimizeConcentration",
  weightRange: { min: number; max: number } | null
): Promise<YieldXPortfolio> {
  return new Promise((resolve, reject) => {
    optimizationService[objective](
      initialPortfolio,
      whitelist,
      weightRange,
      0.03
    )
      .then(portfolio => resolve(portfolio))
      .catch(() => {
        optimizationService[objective](
          initialPortfolio,
          whitelist,
          weightRange,
          0.05
        )
          .then(portfolio => resolve(portfolio))
          .catch(() => {
            optimizationService[objective](
              initialPortfolio,
              whitelist,
              weightRange,
              0.1
            )
              .then(portfolio => resolve(portfolio))
              .catch(reject);
          });
      });
  });
}
